import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonThumbnail, IonButton, IonLabel, IonText, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonIcon, IonText, IonLabel, IonButton, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonThumbnail, RouterModule]
})
export class NewsPage implements OnInit {
  news: any[] = []; // Stores the list of news articles
  country: string = ''; // Stores the selected country name

  constructor(
    private route: ActivatedRoute, // Handles route parameters
    private newsService: NewsService // Service to fetch news data
  ) { }

  ngOnInit() {
    // Subscribes to route parameters and fetches the country name
    this.route.queryParams.subscribe(params => {
      this.country = params['country'] || ''; // Get country name from query params
      if (this.country) {
        this.fetchNews(this.country); // Fetch news for the selected country
      }
    });
  }

  // Fetches news articles for the specified country
  fetchNews(country: string) {
    this.newsService.getNewsByCountry(country).subscribe(
      data => {
        this.news = data.results; // Update the list of news articles
      },
      error => {
        console.error('Error fetching news:', error); // Log error if fetching fails
        this.news = []; // Clear the list in case of an error
      }
    );
  }
}
