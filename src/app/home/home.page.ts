import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { HistoryService } from '../services/history.service';
=======
>>>>>>> c49320737fb2993bd5976f030a310190e5d726af
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public name: string;
  public surname: string;
<<<<<<< HEAD
  public entries: number;

  constructor(
    private userService: UserService,
    private entryHistory: HistoryService) { }
=======

  constructor(private userService: UserService) { }
>>>>>>> c49320737fb2993bd5976f030a310190e5d726af

  ngOnInit() {
  }

  ionViewWillEnter(): void{
<<<<<<< HEAD
    this.entries = this.entryHistory.journalLength;
=======
    this.name = this.userService.name || '';
    this.surname = this.userService.surname || '';
  }

  /**
   * Saves the user's credentials
   */
  saveCredentials(): void{
    this.userService.set(this.name, this.surname);
>>>>>>> c49320737fb2993bd5976f030a310190e5d726af
  }
}
