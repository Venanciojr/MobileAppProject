import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonLabel, IonText, IonButton, IonButtons } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../services/countries.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonText, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonThumbnail, RouterModule]
})
export class CountriesPage implements OnInit {
  countries: any [] = [];
  searchTerm: string = '';

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService
  ) { }

  ngOnInit() {
    // Captura o termo de busca da rota
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['search'] || '';
      if (this.searchTerm) {
        this.fetchCountries(this.searchTerm);
      }
    });
  }

  // Busca os países da API
  fetchCountries(term: string) {
    this.countriesService.searchCountries(term).subscribe(
      data => {
        this.countries = data; // Atualiza os países recebidos
      },
      error => {
        console.error('Erro ao buscar países:', error); // Log de erro
        this.countries = []; // Limpa a lista em caso de erro
      }
    );
  }
}