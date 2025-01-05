import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // This service is provided globally in the application
})
export class CountriesService {
  private apiUrl = 'https://restcountries.com/v3.1/name'; // Base URL for the Rest Countries API

  constructor(private http: HttpClient) {} // Inject HttpClient for API requests
   
  // Method to search countries by name
  searchCountries(name: string): Observable<any> {
    // Makes a GET request to the API and returns an observable
    return this.http.get(`${this.apiUrl}/${name}`);
  }
}

