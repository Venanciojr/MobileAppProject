import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonListHeader, IonLabel, IonItem, IonRadio } from '@ionic/angular/standalone';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonRadio, IonItem, IonLabel, IonListHeader, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {
  unit: string = 'Metric';

  constructor(private settingsService: SettingsService) { }

  async ngOnInit() {
    this.unit = await this.settingsService.getUnit(); // Carrega a unidade salva
  }

  async onUnitChange(event: any) {
    this.unit = event.detail.value; // Atualiza a unidade
    await this.settingsService.setUnit(this.unit); // Salva no Storage
  }
}
