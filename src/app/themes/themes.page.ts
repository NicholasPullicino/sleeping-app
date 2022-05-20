import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HistoryService } from '../services/history.service';
import { TimerHistoryService } from '../services/timer-history.service';
import { THEMES } from '../structs/color';
import { Color } from '../structs/color';

@Component({
	selector: 'app-themes',
	templateUrl: './themes.page.html',
	styleUrls: ['./themes.page.scss'],
})
export class ThemesPage implements OnInit {

private _colorChoice : number;
public themes = THEMES;
disable = true;

constructor(
	private alertCtrl: AlertController,
	public timerHistory: TimerHistoryService,
	public journalHistory: HistoryService
) { }

ngOnInit() {
}

changeColor(choice: number) {
		this._colorChoice = choice;
}

getColorName() {
		if (this._colorChoice == 1)
			return "red";
		else if (this._colorChoice == 2)
			return "green";
		else if (this._colorChoice == 3)
			return "yellow";
		
		return "";
	}
}
