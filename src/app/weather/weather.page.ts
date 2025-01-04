import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonText, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeatherPage implements OnInit {
  weather: any; // Dados do clima
  lat: number = 0;
  lon: number = 0;
  
  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
  // Captura a latitude e longitude dos parâmetros da rota
  this.route.queryParams.subscribe(params => {
    this.lat = +params['lat']; // Converte string para número
    this.lon = +params['lon']; // Converte string para número
    if (this.lat && this.lon) {
      this.fetchWeather(this.lat, this.lon);
    }
  });
}

fetchWeather(lat: number, lon: number) {
  this.weatherService.getWeatherByCoordinates(lat, lon).subscribe(
    data => {
      this.weather = data; // Atualiza os dados do clima
      console.log('Weather Data:', data); // Log para depuração
    },
    error => {
      console.error('Erro ao buscar dados do clima:', error);
    }
  );
}
}
  