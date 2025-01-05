import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonLabel, IonText, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../services/countries.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-countries', // Selector for this component
  templateUrl: './countries.page.html', // Associated HTML template
  styleUrls: ['./countries.page.scss'], // Associated CSS styles
  standalone: true, // Makes this component standalone
  imports: [
    IonIcon, IonButton, IonText, IonItem, IonList, IonContent, IonHeader, IonTitle,
    IonToolbar, CommonModule, FormsModule, IonLabel, IonThumbnail, RouterModule
  ] // Modules and components used in this page
})
export class CountriesPage implements OnInit {
  countries: any[] = []; // Stores the list of countries
  searchTerm: string = ''; // Stores the search term

  constructor(
    private route: ActivatedRoute, // Handles route parameters
    private countriesService: CountriesService // Service to fetch country data
  ) { }

  // Lifecycle hook called when the component initializes
  ngOnInit() {
    // Get the search term from the route's query parameters
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['search'] || ''; // Default to an empty string if no search term is provided
      if (this.searchTerm) {
        this.fetchCountries(this.searchTerm); // Fetch countries based on the search term
      }
    });
  }

  // Fetch country data from the API using the service
  fetchCountries(term: string) {
    this.countriesService.searchCountries(term).subscribe(
      data => {
        this.countries = data; // Update the countries array with the API response
      },
      error => {
        console.error('Error fetching countries:', error); // Log any errors to the console
        this.countries = []; // Clear the list of countries if there's an error
      }
    );
  }
}
