import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { JournalEntryPage } from '../journal-entry/journal-entry.page';
import { HistoryService } from '../services/history.service';
import { JournalService } from '../services/journal.service';
import { HistoryItem } from '../structs/history';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  entryList = []
  today: number = Date.now()

  constructor(
    public modalCtrl:ModalController,
    private alertCtrl: AlertController,
    public entryHistory: HistoryService
    ) { }

  ngOnInit() {
  }

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: JournalEntryPage
    })

    return await modal.present()
  }

  async onClear(){
    //Create an alert
    const alert = await this.alertCtrl.create({
      header: "Deleting all entries",
      message: "Deleting your entries is a permanent action and cannot be undone",
      buttons: [
        {
        text: 'No',
        role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => this.entryHistory.clear()
        }]
    });
    //Present the alert
    await alert.present();
  }

}
