import { Component, DestroyRef, inject, signal, type OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';

import type { MeteoResponse } from '../../../models/meteo.model';
import { MeteoService } from '../../../services/meteo';

@Component({
  imports: [],
  selector: 'app-meteo-api-exercice',
  styleUrl: './meteo-api-exercice.css',
  templateUrl: './meteo-api-exercice.html',
})
export class MeteoApiExercice implements OnInit {
  private readonly meteoService = inject(MeteoService);
  private readonly destroyRef = inject(DestroyRef);

  readonly meteoData = signal<MeteoResponse | null>(null);
  readonly isLoading = signal(false);
  readonly errorMessage = signal<string | null>(null);

  ngOnInit(): void {
    this.loadMeteo('toulouse');
  }

  private loadMeteo(city: string): void {
    this.meteoData.set(null);
    this.errorMessage.set(null);
    this.isLoading.set(true);

    this.meteoService.getMeteoByCity(city)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe({
        next: (data) => {
          this.meteoData.set(data);
        },
      });
  }
}
