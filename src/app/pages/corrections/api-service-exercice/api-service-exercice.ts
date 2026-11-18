import { Component, computed, inject, signal } from '@angular/core';
import { MeteoService } from '../../../services/meteo.service';
import { ForecastDay, MeteoResponse } from '../../../models/meteo.model';

@Component({
  imports: [],
  selector: 'app-api-service-exercice',
  styleUrl: './api-service-exercice.css',
  templateUrl: './api-service-exercice.html',
})
export class ApiServiceExercice {
  private readonly meteoService = inject(MeteoService);

  // États réactifs
  readonly meteoData = signal<MeteoResponse | null>(null);
  readonly isLoading = signal<boolean>(true);
  readonly errorMessage = signal<string | null>(null);
  readonly citySearch = signal<string>('Toulouse');

  readonly quickCities = ['Toulouse', 'Paris', 'Lyon', 'Bordeaux', 'Genève'];

  // Regroupe les 5 jours de prévisions dans un tableau facile à parcourir avec @for
  readonly forecastDays = computed<ForecastDay[]>(() => {
    const data = this.meteoData();
    if (!data) return [];
    return [
      data.fcst_day_0,
      data.fcst_day_1,
      data.fcst_day_2,
      data.fcst_day_3,
      data.fcst_day_4,
    ];
  });

  ngOnInit(): void {
    this.loadMeteo('Toulouse');
  }

  loadMeteo(city: string): void {
    const query = city.trim();
    if (!query) return;

    this.citySearch.set(query);
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.meteoService.getMeteoByCity(query).subscribe({
      next: (response) => {
        // L'API prevision-meteo.ch renvoie HTTP 200 avec un objet "errors" si la ville n'existe pas
        if (!response?.city_info) {
          this.meteoData.set(null);
          this.errorMessage.set(`Aucune donnée météo trouvée pour « ${query} ».`);
          this.isLoading.set(false);
          return;
        }

        this.meteoData.set(response);
        this.isLoading.set(false);
      },
      error: () => {
        this.meteoData.set(null);
        this.errorMessage.set('Erreur réseau lors de la récupération de la météo.');
        this.isLoading.set(false);
      },
      complete: () => {
        console.log('API traitement terminé')
      }
    });
  }

  onSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.citySearch.set(value);
  }

  onSearchSubmit(event: Event): void {
    event.preventDefault();
    this.loadMeteo(this.citySearch());
  }
}
