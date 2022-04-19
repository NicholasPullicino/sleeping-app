import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { JournalEntryPage } from '../journal-entry/journal-entry.page';


@Component({
  selector: 'app-journal',
  templateUrl: './journal.page.html',
  styleUrls: ['./journal.page.scss'],
})
export class JournalPage implements OnInit {

  entryList = []
today: number = Date.now()

  constructor(public modalCtrl:ModalController) { }

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

}
