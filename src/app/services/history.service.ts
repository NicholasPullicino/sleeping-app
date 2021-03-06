import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { HistoryItem } from '../structs/history'

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private static readonly storageKey = 'history';

  private entryLength = 0;

  private history: HistoryItem[] = [];

  constructor(private storage: StorageService) { this.init(); }

  /**
   * Adds an item to the history
   * 
   * @param item The new item to add
   */
    public add(item: HistoryItem): void{
    this.history.push(item);
    this.storage.set(HistoryService.storageKey, this.history);
  }

  removeEntry(index){
    this.history.splice(index,1)
  }

  /**
   * Clears the history.
   */
  public clear(): void{
    this.history = [];
    this.storage.remove(HistoryService.storageKey);
  }

  /**
   * Returns the history list
   * 
   * @returns The history list
   */
  public getHistory(id?: number): HistoryItem | HistoryItem[]
  {
    if(id !== undefined){
      return this.history[id];
    }

    return this.history;
  }

  /**
   * Retrieves the history from storage.
   */
  private async init(){

    //Returns an empty array if no data exists.
    this.history = await this.storage.get(HistoryService.storageKey) || [];
  }
 
  public get journalLength(): number
  {
    return this.entryLength = this.history.length;
  }
}
