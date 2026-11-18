// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MeteoService {
//   constructor(private http:HttpClient){}
//   getData(){
//     return this.http.get('https://prevision-meteo.ch/services/json/toulouse');
//   }
// }

import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeteoResponse } from '../models/meteo.model';

@Service()
export class MeteoService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://prevision-meteo.ch/services/json';

  getMeteoByCity(city: string = 'toulouse'): Observable<MeteoResponse> {
    const formattedCity = city.trim().toLowerCase() || 'toulouse';
    return this.http.get<MeteoResponse>(
      `${this.baseUrl}/${encodeURIComponent(formattedCity)}`,
    );
  }
}
