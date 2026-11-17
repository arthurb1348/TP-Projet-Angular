import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subscription, filter, interval, map } from 'rxjs';

interface GeneratedNumber {
  id: number;
  value: number;
  label: 'Élevé' | 'Faible';
}

@Component({
  selector: 'app-observables-advanced-exercice',
  imports: [],
  styleUrl: './observables-advanced-exercice.css',
  templateUrl: './observables-advanced-exercice.html',
})
export class ObservablesAdvancedExercice {
  private readonly destroyRef = inject(DestroyRef);
  private subscription: Subscription | null = null;
  private nextId = 0;

  // États réactifs pilotés par Signals (indispensable en mode Zoneless)
  readonly numbers = signal<GeneratedNumber[]>([]);
  readonly filterEven = signal<boolean>(true);
  readonly isRunning = signal<boolean>(false);
  readonly paused = signal<boolean>(false);

  start(): void {
    if (this.subscription) return;

    this.isRunning.set(true);
    this.paused.set(false);

    this.subscription = interval(1000)
      .pipe(
        // 1. Transformer chaque tic en nombre aléatoire entre 1 et 100
        map(() => Math.floor(Math.random() * 100) + 1),
        // 2. Filtrer les nombres impairs si le switch est actif
        filter((value) => !this.filterEven() || value % 2 === 0),
        // 3. Enrichir la donnée avec un identifiant unique et une étiquette
        map(
          (value): GeneratedNumber => ({
            id: ++this.nextId,
            value,
            label: value > 50 ? 'Élevé' : 'Faible',
          }),
        ),
        // 4. Sécurité : désabonnement automatique si le composant est détruit
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((newNumber) => {
        // Conserver uniquement les 10 derniers éléments de manière immuable
        this.numbers.update((list) => [...list.slice(-9), newNumber]);
      });
  }

  pauseResume(): void {
    if (!this.isRunning()) return;

    const nextPausedState = !this.paused();
    this.paused.set(nextPausedState);

    if (nextPausedState) {
      this.subscription?.unsubscribe();
      this.subscription = null;
    } else {
      this.start();
    }
  }

  stop(): void {
    this.subscription?.unsubscribe();
    this.subscription = null;
    this.isRunning.set(false);
    this.paused.set(false);
    this.numbers.set([]);
  }

  toggleFilter(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.filterEven.set(checked);
  }
}
