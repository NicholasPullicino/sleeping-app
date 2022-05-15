import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../services/history.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public name: string;
  public surname: string;
  public entries: number;

  constructor(
    private userService: UserService,
    private entryHistory: HistoryService) { }

  ngOnInit() {
  }

  ionViewWillEnter(): void{
    this.entries = this.entryHistory.journalLength;
  }
}
