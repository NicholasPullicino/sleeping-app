import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { JournalService } from '../services/journal.service';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.page.html',
  styleUrls: ['./journal-entry.page.scss'],
})
export class JournalEntryPage implements OnInit {

  entryTitle
  entryContent

  entryObject
  constructor(public modalCtrl:ModalController, private journalService: JournalService) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss(this.entryObject)
  }

  addEntry(){
    this.entryObject = ({entryTitle:this.entryTitle, entryContent:this.entryContent})
    this.journalService.set(this.entryTitle, this.entryContent);
    this.dismiss()
  }
}
