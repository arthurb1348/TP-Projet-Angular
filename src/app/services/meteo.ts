import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import type { Observable } from 'rxjs';
import type { MeteoResponse } from '../models/meteo.model';

@Service()
export class MeteoService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://prevision-meteo.ch/services/json';

  getMeteoByCity(city: string): Observable<MeteoResponse> {
    const url = `${this.baseUrl}/${encodeURIComponent(city)}`;

    return this.http.get<MeteoResponse>(url);
  }
}
