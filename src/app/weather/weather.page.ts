import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { RouterModule } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute, // For accessing route parameters
    private weatherService: WeatherService // Service to fetch weather data
  ) { }

  ngOnInit() {
    // Get latitude and longitude from route parameters
    this.route.queryParams.subscribe(params => {
      this.lat = +params['lat']; // Convert latitude to number
      this.lon = +params['lon']; // Convert longitude to number
      if (this.lat && this.lon) {
        this.fetchWeather(this.lat, this.lon); // Fetch weather data
      }
    });
  }

  // Fetch weather data using the WeatherService
  fetchWeather(lat: number, lon: number) {
    this.weatherService.getWeatherByCoordinates(lat, lon).subscribe(
      data => {
        this.weather = data; // Update weather data
        console.log('Weather Data:', data); // Log data for debugging
      },
      error => {
        console.error('Error fetching weather data:', error); // Log error if request fails
      }
    );
  }
}
