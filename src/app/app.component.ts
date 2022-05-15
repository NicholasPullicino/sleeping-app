import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Themes', url: 'themes', icon: 'brush' },
    { title: 'Journal', url: 'journal', icon: 'book' },
    { title: 'Sleep Timer', url: 'sleep-timer', icon: 'alarm' }
  ];
  public labels = [];
  constructor() {}
}
