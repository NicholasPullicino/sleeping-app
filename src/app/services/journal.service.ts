import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  private static readonly storageTitleKey = 'entry-title';
  private static readonly storageContentKey = 'entry-content';

  public entryTitle: string;
  public entryContent: string;

  constructor(private storage: StorageService) { this.init(); }

  public set(entryTitle: string, entryContent: string): void{
    this.entryTitle = entryTitle;
    this.entryContent = entryContent;

    this.storage.set(JournalService.storageTitleKey, entryTitle);
    this.storage.set(JournalService.storageContentKey, entryContent);
  }

  private async init(){
    this.entryTitle = await this.storage.get(JournalService.storageTitleKey) || '';
    this.entryContent = await this.storage.get(JournalService.storageContentKey) || '';
  }

}
