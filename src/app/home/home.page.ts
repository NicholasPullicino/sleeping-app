import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';
import { ThemesService } from '../services/themes.service';
import { TimerHistoryService } from '../services/timer-history.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public entries: number;
  public timers: number;

  constructor(
    private entryHistory: HistoryService,
    private timerHistory: TimerHistoryService,
    public themeChange: ThemesService) { }

  ngOnInit() {
  }

  ionViewWillEnter(): void{
    this.entries = this.entryHistory.journalLength;
    this.timers = this.timerHistory.timerHistoryLength;
  }
}
