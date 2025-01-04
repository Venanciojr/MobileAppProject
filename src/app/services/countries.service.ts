import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl = 'https://restcountries.com/v3.1/name';

  constructor(private http: HttpClient) {}
   
  searchCountries(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${name}`);
  }
}

