import { Component, OnDestroy, signal } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-observables-simple-exercice',
  styleUrl: './observables-simple-exercice.css',
  templateUrl: './observables-simple-exercice.html',
})
export class ObservablesSimpleExercice implements OnDestroy {
  readonly myObservable: Observable<number> = interval(1000);

  numbers = signal<number[]>([]);
  paused = signal<boolean>(false);
  private subscription: Subscription | null = null;


  start() {
    if (!this.subscription) {
      this.subscription = interval(1000).subscribe({
        next :() => {
          if (!this.paused()) {
            this.numbers.update((currentNumbers) => [(Math.floor(Math.random() * 100) + 1), ...currentNumbers]);
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