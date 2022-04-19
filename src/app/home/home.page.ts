import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public name: string;
  public surname: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  ionViewWillEnter(): void{
    this.name = this.userService.name || '';
    this.surname = this.userService.surname || '';
  }

  /**
   * Saves the user's credentials
   */
  saveCredentials(): void{
    this.userService.set(this.name, this.surname);
  }
}
