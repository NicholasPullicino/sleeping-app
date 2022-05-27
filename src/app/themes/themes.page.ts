import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HistoryService } from '../services/history.service';
import { ThemesService } from '../services/themes.service';
import { TimerHistoryService } from '../services/timer-history.service';
import { THEMES } from '../structs/color';
import { Color } from '../structs/color';

@Component({
	selector: 'app-themes',
	templateUrl: './themes.page.html',
	styleUrls: ['./themes.page.scss'],
})
export class ThemesPage implements OnInit {

public themes = THEMES;
disable = true;

constructor(
	private alertCtrl: AlertController,
	public timerHistory: TimerHistoryService,
	public journalHistory: HistoryService,
	public themeChange: ThemesService
) { }

ngOnInit() {
}

changeColor(choice: Color) {
		this.themeChange.changeTheme(choice.name)
}

}
