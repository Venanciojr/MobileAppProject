import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private readonly UNIT_KEY = 'temperature_unit';
  
  constructor(private storage: Storage) {
    this.initStorage();
   }

   private async initStorage() {
    await this.storage.create(); // Inicializa o Ionic Storage
  }

  async setUnit(unit: string): Promise<void> {
    await this.storage.set(this.UNIT_KEY, unit); // Salva a unidade selecionada
  }

  async getUnit(): Promise<string> {
    const unit = await this.storage.get(this.UNIT_KEY);
    return unit || 'Metric'; // Retorna 'Metric' como padrão se não houver unidade salva
  }
}

