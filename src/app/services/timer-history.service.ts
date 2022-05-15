import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HistoryTimer } from '../structs/timer'

@Injectable({
  providedIn: 'root'
})
export class TimerHistoryService {

  private static readonly timeStorageKey = 'timerHistory';

  private timerHistory: HistoryTimer[] = [];

  constructor(private storage: StorageService) { this.init(); }

  /**
   * Adds an item to the history
   * 
   * @param item The new item to add
   */
    public add(item: HistoryTimer): void{
    this.timerHistory.push(item);
    this.storage.set(TimerHistoryService.timeStorageKey, this.timerHistory);
  }

  removeEntry(index){
    this.timerHistory.splice(index,1)
  }

  /**
   * Clears the history.
   */
  public clear(): void{
    this.timerHistory = [];
    this.storage.remove(TimerHistoryService.timeStorageKey);
  }

  /**
   * Returns the history list
   * 
   * @returns The history list
   */
  public getHistory(id?: number): HistoryTimer | HistoryTimer[]
  {
    if(id !== undefined){
      return this.timerHistory[id];
    }

    return this.timerHistory;
  }

  /**
   * Retrieves the history from storage.
   */
  private async init(){

    //Returns an empty array if no data exists.
    this.timerHistory = await this.storage.get(TimerHistoryService.timeStorageKey) || [];
  }
}
