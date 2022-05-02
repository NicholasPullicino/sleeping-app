import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { HistoryService } from '../services/history.service';
import { JournalService } from '../services/journal.service';
import { HistoryItem } from '../structs/history';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.page.html',
  styleUrls: ['./journal-entry.page.scss'],
})
export class JournalEntryPage implements OnInit {

  entryTitle
  entryContent
  entryTime

  entryObject
  constructor(public modalCtrl:ModalController, 
    private journalService: JournalService,
    public entryHistory: HistoryService) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.entryObject)
  }

  addEntry(){
    // this.entryObject = ({entryTitle:this.entryTitle, entryContent:this.entryContent, entryTime:this.entryTime})
    // this.journalService.set(this.entryTitle, this.entryContent, this.entryTime);
    this.save()
    this.dismiss()
  }

  private save(): void{

    const data: HistoryItem = {
      
      entryTitle: this.entryTitle,
      entryContent: this.entryContent,
      entryTime: new Date().getTime()
      
    };

    this.entryHistory.add(data);
  }
}
