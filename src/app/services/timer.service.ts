import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private static readonly timeStorageKey = 'endTime';

  public endTime: number;

  constructor(private storage: StorageService) { this.init(); }

  public set(endTime: number): void{
    this.endTime = endTime;

    this.storage.set(TimerService.timeStorageKey, endTime);
  }

  private async init(){
    this.endTime = await this.storage.get(TimerService.timeStorageKey) || '';
  }
}
