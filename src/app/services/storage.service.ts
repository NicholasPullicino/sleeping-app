import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  /**
   * Clears the local storage.
   */
  async clear(): Promise<void>{
    await Storage.clear();
  }

  /**
   * Retrieves information from storage
   * 
   * @param label The storage key.
   * @returns The data associated with the key.
   */
  async get(label: string): Promise<any>{
    const { value } = await Storage.get({ key: label }); //Returns a string.
    return JSON.parse(value);
  }

  /**
   * Removes an item from storage
   * 
   * @param label The storage key.
   */
  async remove(label: string): Promise<void>{
    await Storage.remove({ key:label });
  }

  /**
   * Writes a record to storage.
   * 
   * @param label The storage key.
   * @param contents THe storage value.
   */
  async set(label: string, contents: any): Promise<void>{
    await Storage.set({
      key: label,
      value: JSON.stringify(contents)
    });
  }
}
