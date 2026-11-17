import { Component, OnDestroy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  imports: [FormsModule],
  selector: 'app-observables-advanced-exercice',
  styleUrl: './observables-advanced-exercice.css',
  templateUrl: './observables-advanced-exercice.html',
})
export class ObservablesAdvancedExercice implements OnDestroy{
  readonly myObservable: Observable<number> = interval(1000);

  numbers = signal<{ value: number; label: string }[]>([]);
  paused = signal<boolean>(false);
  private subscription: Subscription | null = null;
  filterEven = signal<boolean>(true);


  start() {
    if (!this.subscription) {
      this.subscription = interval(1000).subscribe({
        next :() => {
          if (!this.paused()) {
            const randomValue = Math.floor(Math.random() * 100) + 1;
            if (this.filterEven() && randomValue % 2 !== 0) {return;}
            const newNumber = { value: randomValue, label: randomValue > 50 ? 'Élevé' : 'Faible' };
            this.numbers.update(actualNumbers => {
              const base = actualNumbers.length >= 10 ? actualNumbers.slice(1) : actualNumbers;
              return [...base, newNumber];
            })
          }
        }
      });
    }
  }

  pauseResume() {
  this.paused.update((isPaused) => !isPaused);

  if (this.paused()) {
    this.stopSubscription();
  } else {
    this.start();
  }
}

  stopSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  stop() {
    this.stopSubscription();
    this.numbers.set([]);
    this.paused.set(false);
  }

  ngOnDestroy(): void {
    this.stopSubscription()
  }
}
