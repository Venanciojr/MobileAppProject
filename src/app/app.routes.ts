import { provideRouter, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Redireciona para Home
    pathMatch: 'full',  // Garante que a rota base seja completa
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage), // Página Home
  },
  {
    path: 'countries',
    loadComponent: () =>
      import('./countries/countries.page').then((m) => m.CountriesPage),
  },
  
  
  {
    path: 'settings',
    loadComponent: () =>
      import('./settings/settings.page').then(m => m.SettingsPage),
  },
  {
    path: 'news',
    loadComponent: () =>
      import('./news/news.page').then(m => m.NewsPage),
  },
  {
    path: 'weather',
    loadComponent: () =>
      import('./weather/weather.page').then(m => m.WeatherPage),
  },
  {
    path: 'countries',
    loadComponent: () => import('./countries/countries.page').then( m => m.CountriesPage)
  },
  {
    path: 'countries',
    loadComponent: () => import('./countries/countries.page').then( m => m.CountriesPage)
  },
];

export const appProviders = [
  provideRouter(routes),
];

