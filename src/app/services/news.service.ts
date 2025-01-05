import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Makes this service available app-wide without needing to explicitly import it in modules
})
export class NewsService {
  private apiUrl = 'https://newsdata.io/api/1/news'; // Base URL for the NewsData API
  private apiKey = 'pub_643943f464edaa49b18fe79caa53a0fb6106c'; // Your API key for authenticating requests

  constructor(private http: HttpClient) {}

  /**
   * Fetches news articles based on the given country name.
   * @param country - The name of the country to fetch news for.
   * @returns An Observable that emits the news data from the API.
   */
  getNewsByCountry(country: string): Observable<any> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&q=${country}`; // Constructs the full URL with query parameters
    return this.http.get(url); // Makes an HTTP GET request to fetch the news
  }
}

