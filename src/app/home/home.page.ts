import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonFooter } from '@ionic/angular/standalone';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home', // Defines the component selector for this page
  templateUrl: 'home.page.html', // HTML file for the page layout
  styleUrls: ['home.page.scss'], // CSS file for the styles
  imports: [
    // Importing Ionic and Angular modules for this page
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon,
    CommonModule, FormsModule, RouterModule, IonCard, IonCardHeader,
    IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonFooter
  ],
})

export class HomePage {
  // Variable that stores the search input from the user
  searchTerm: string = '';

  // Injecting the Router to navigate between pages
  constructor(private router: Router) { }

  // Function triggered when the user clicks "Search"
  navigateToCountries() {
    // Check if the search field is empty or has only spaces
    if (!this.searchTerm || this.searchTerm.trim() === '') {
      console.log('Please enter a search term.'); // Logs a message if input is invalid
      return; // Stops the function if the input is empty
    }

    // Navigate to the "Countries" page with the search term as a query parameter
    this.router.navigate(['/countries'], { queryParams: { search: this.searchTerm } });
  }
}
