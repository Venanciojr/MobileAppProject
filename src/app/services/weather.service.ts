import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root' // Makes this service accessible throughout the app
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather'; // Base URL for the OpenWeather API
  private apiKey = '2e0e1bf9ec93015ba3e2e9729fcd45ac'; // API key for authentication

  constructor(
    private http: HttpClient, // Handles HTTP requests
    private storage: Storage // Used for managing local storage
  ) {}

  /**
   * Fetches weather data based on latitude, longitude, and unit preference.
   * @param lat - Latitude of the location
   * @param lon - Longitude of the location
   * @param units - Temperature unit (default is 'metric')
   * @returns Observable containing weather data from the OpenWeather API
   */
  getWeatherByCoordinates(lat: number, lon: number, units: string = 'metric'): Observable<any> {
    // Constructs the API URL with coordinates, units, and API key
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&units=${units}&appid=${this.apiKey}`;
    return this.http.get(url); // Executes the GET request and returns the result
  }
}
