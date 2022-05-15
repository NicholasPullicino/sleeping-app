import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoryService } from '../services/history.service';
import { HistoryItem } from '../structs/history';

@Component({
  selector: 'app-journal-view',
  templateUrl: './journal-view.page.html',
  styleUrls: ['./journal-view.page.scss'],
})
export class JournalViewPage implements OnInit {

  id = -1;

  entryData: HistoryItem;

  constructor(
    private route: ActivatedRoute,
    private history: HistoryService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    //Retrieve the record ID
    this.id = this.route.snapshot.params.id;

    this.entryData = this.history.getHistory(this.id) as HistoryItem;
  }

}
