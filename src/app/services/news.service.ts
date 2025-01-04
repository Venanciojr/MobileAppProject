import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://newsdata.io/api/1/news';
  private apiKey = 'pub_643943f464edaa49b18fe79caa53a0fb6106c';

  constructor(private http: HttpClient) { }

  getNewsByCountry(country: string): Observable<any> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&q=${country}`;
    return this.http.get(url);
  }
}
