import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput } from '@ionic/angular/standalone';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, CommonModule, FormsModule, RouterModule, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput ],
})
  
export class HomePage {

  searchTerm: string = '';
  constructor( private router: Router) {}

 

  navigateToCountries() {
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      console.log('Por favor, insira um termo de busca.');
      return;
    }

    this.router.navigate(['/countries'], { queryParams: { search: this.searchTerm } });
  }

 
}