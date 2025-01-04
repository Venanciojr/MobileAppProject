import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonButton, IonLabel, IonText } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonText, IonLabel, IonButton, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonThumbnail]
})
export class NewsPage implements OnInit {
  news: any[] = [];
  country: string = '';

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.country = params['country'] || '';
      if (this.country) {
        this.fetchNews(this.country);
      }
    });
  }

  fetchNews(country: string) {
    this.newsService.getNewsByCountry(country).subscribe(
      data => {
        this.news = data.results; // Atualiza as notícias
      },
      error => {
        console.error('Erro ao buscar notícias:', error);
        this.news = []; // Limpa a lista em caso de erro
      }
    );
  }
}
    