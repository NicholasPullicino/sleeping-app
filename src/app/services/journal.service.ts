import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  private static readonly storageTitleKey = 'entry-title';
  private static readonly storageContentKey = 'entry-content';
  private static readonly storageTimeKey = 'entry-time';

  public entryTitle: string;
  public entryContent: string;
  public entryTime: number;

  constructor(private storage: StorageService) { this.init(); }

  public set(entryTitle: string, entryContent: string, entryTime: number): void{
    this.entryTitle = entryTitle;
    this.entryContent = entryContent;
    this.entryTime = entryTime;

    this.storage.set(JournalService.storageTitleKey, entryTitle);
    this.storage.set(JournalService.storageContentKey, entryContent);
    this.storage.set(JournalService.storageTimeKey, entryTime);
  }

  private async init(){
    this.entryTitle = await this.storage.get(JournalService.storageTitleKey) || '';
    this.entryContent = await this.storage.get(JournalService.storageContentKey) || '';
    this.entryTime = await this.storage.get(JournalService.storageTimeKey) || '';
  }

}
