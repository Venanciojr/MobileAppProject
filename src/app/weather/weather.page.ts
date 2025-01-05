import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonText, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class WeatherPage implements OnInit {
  weather: any; // Weather data from API
  lat: number = 0; // Latitude
  lon: number = 0; // Longitude
  unitPreference: string = 'metric'; // Default to 'metric'

  constructor(
    private route: ActivatedRoute, // For accessing route parameters
    private weatherService: WeatherService, // Service to fetch weather data
    private storage: Storage // For saving and retrieving user preferences
  ) { }

  async ngOnInit() {
    // Initialize storage and retrieve saved unit preference
    await this.storage.create();
    this.unitPreference = (await this.storage.get('unit')) || 'metric';

    console.log('Unit preference:', this.unitPreference);

    // Retrieve latitude and longitude from query parameters
    this.route.queryParams.subscribe(params => {
      this.lat = +params['lat'];
      this.lon = +params['lon'];

      if (this.lat && this.lon) {
        this.fetchWeather(this.lat, this.lon);
      }
    });
  }

  // Fetch weather data using the WeatherService
  fetchWeather(lat: number, lon: number) {
    this.weatherService.getWeatherByCoordinates(lat, lon, this.unitPreference).subscribe(
      data => {
        console.log('Weather data received:', data); // Debugging log
        this.weather = data;
      },
      error => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}
