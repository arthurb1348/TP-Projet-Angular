import { Component, DestroyRef, inject, computed, signal, type OnInit } from '@angular/core';
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

  readonly forecastDays = computed(() => {
    const meteo = this.meteoData();
    if (!meteo) return [];

    return [
      meteo.fcst_day_0,
      meteo.fcst_day_1,
      meteo.fcst_day_2,
      meteo.fcst_day_3,
      meteo.fcst_day_4,
    ];
  });

  searchCity(event: Event, cityName: string): void {
    event.preventDefault();

    const city = cityName.trim().toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, '-');

    if (!city || this.isLoading()) return;

    this.loadMeteo(city);
  }

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
