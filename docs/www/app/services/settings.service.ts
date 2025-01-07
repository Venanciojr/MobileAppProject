import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root' // Makes this service available throughout the app
})
export class SettingsService {
  private readonly UNIT_KEY = 'temperature_unit'; // Key for storing the temperature unit in storage
  
  constructor(private storage: Storage) {
    this.initStorage(); // Initializes the storage when the service is created
  }

  /**
   * Initializes the Ionic Storage.
   * Ensures the storage is ready for use.
   */
  private async initStorage() {
    await this.storage.create();
  }

  /**
   * Saves the selected temperature unit (e.g., Metric or Imperial) in storage.
   * @param unit - The temperature unit to save (e.g., 'Metric', 'Imperial').
   */
  async setUnit(unit: string): Promise<void> {
    await this.storage.set(this.UNIT_KEY, unit);
  }

  /**
   * Retrieves the saved temperature unit from storage.
   * If no unit is saved, returns 'Metric' as the default.
   * @returns The saved temperature unit or 'Metric' as the default.
   */
  async getUnit(): Promise<string> {
    const unit = await this.storage.get(this.UNIT_KEY);
    return unit || 'Metric';
  }
}
