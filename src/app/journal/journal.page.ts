import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { JournalEntryPage } from '../journal-entry/journal-entry.page';
import { HistoryService } from '../services/history.service';
import { JournalService } from '../services/journal.service';
import { Entry } from '../structs/journal';


@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  public currentEntryIndex = -1;

  public entry: Entry

  private entryTime = 0;

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

    modal.onDidDismiss().then(newEntryObj =>{
      console.log(newEntryObj.data);
      this.entryList.push(newEntryObj.data)
    })

    return await modal.present()
  }

  removeEntry(index){
    this.entryList.splice(index,1)
  }

  async onClear(){
    //Create an alert
    const alert = await this.alertCtrl.create({
      header: "Deleting History",
      message: "Deleting your history is a permanent action and cannot be undone",
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
