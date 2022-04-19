import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Definitions of Storage Keys.
  private static readonly storageNameKey = 'user-name';
  private static readonly storageSurnameKey = 'user-surname';

  public name: string;
  public surname: string;

  constructor(
    private storage: StorageService
  ) { this.init(); }

  /**
   * Sets the user's credentials
   * @param name The user's name
   * @param surname The user's surname
   */
  public set(name: string, surname: string): void{
    this.name = name;
    this.surname = surname;

    this.storage.set(UserService.storageNameKey, name);
    this.storage.set(UserService.storageSurnameKey, surname);
  }

  /**
   * Initializes the service properties
   */
  private async init(){
    this.name = await this.storage.get(UserService.storageNameKey) || '';
    this.surname = await this.storage.get(UserService.storageSurnameKey) || '';
  }
}
