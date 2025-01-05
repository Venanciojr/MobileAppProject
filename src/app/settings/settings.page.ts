import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonListHeader, IonLabel, IonItem, IonRadio, IonButton, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { Storage } from '@ionic/storage-angular'; // Importing Ionic Storage

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonRadio, IonItem, IonLabel, IonListHeader, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class SettingsPage implements OnInit {
  unitPreference: string = 'metric'; // Default value for the unit preference (Metric)

  constructor(private storage: Storage) { } // Injecting the storage service

  async ngOnInit() {


    // Ensure the storage is initialized
    await this.storage.create();

    // Try to get the saved preference, or use the default value if nothing is saved
    const savedUnit = await this.storage.get('unit');
    this.unitPreference = savedUnit || 'metric'; // Default to Metric if no preference is stored
  }

  // Method to save the user's unit preference
  async saveUnitPreference() {
    try {
      // Save the selected unit preference to storage
      await this.storage.set('unit', this.unitPreference);

      // Show confirmation message to the user
      alert(`Unit preference saved as ${this.unitPreference === 'metric' ? 'Metric (°C)' : 'Imperial (°F)'}.`);
    } catch (error) {
      // Handle any errors during saving
      console.error('Error saving unit preference:', error);
      alert('An error occurred while saving the preference.');
    }
  }
}
