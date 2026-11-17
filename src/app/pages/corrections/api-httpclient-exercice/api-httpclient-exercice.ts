import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Digimon, DigimonResponse } from '../../../models/digimon.model';

@Component({
  selector: 'app-api-httpclient-exercice',
  imports: [],
  styleUrl: './api-httpclient-exercice.css',
  templateUrl: './api-httpclient-exercice.html',
})
export class ApiHttpclientExercice implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://digi-api.com/api/v1/digimon';

  // États réactifs avec Signals
  readonly digimons = signal<Digimon[]>([]);
  readonly isLoading = signal<boolean>(true);
  readonly errorMessage = signal<string | null>(null);

  // États de pagination
  readonly currentPage = signal<number>(0);
  readonly totalPages = signal<number>(0);

  ngOnInit(): void {
    this.loadDigimons(0);
  }

  loadDigimons(page: number): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.http
      .get<DigimonResponse>(`${this.apiUrl}?page=${page}`)
      .subscribe({
        next: (response) => {
          console.log('requête HTTP reçue: ', response);
          this.digimons.set(response.content);
          this.currentPage.set(response.pageable.currentPage);
          this.totalPages.set(response.pageable.totalPages);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error('Erreur API Digimon :', err);
          this.errorMessage.set('Impossible de charger les Digimon. Vérifiez votre connexion.');
          this.isLoading.set(false);
        },
        complete:()=>{
          console.log('requête HTTP finie')
        }
      });
  }

  previousPage(): void {
    if (this.currentPage() > 0) {
      this.loadDigimons(this.currentPage() - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages() - 1) {
      this.loadDigimons(this.currentPage() + 1);
    }
  }
}
