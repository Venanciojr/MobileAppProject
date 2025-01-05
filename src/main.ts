import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { appProviders } from './app/app.routes';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { Storage } from '@ionic/storage-angular';

// Bootstrapping the main application component
bootstrapApplication(AppComponent, {
  providers: [
    // Configure Ionic to reuse routes efficiently
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

    // Provide Ionic standalone components
    provideIonicAngular(),

    // Include application-specific providers
    appProviders,

    // Manually configure and provide Ionic Storage
    { provide: Storage, useFactory: () => new Storage({}) },

    // Enable HTTP client for API communication
    provideHttpClient(),

    // Set up application routing with preloading for faster navigation
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
}).catch(err => console.error(err)); // Handle errors during the application bootstrapping
