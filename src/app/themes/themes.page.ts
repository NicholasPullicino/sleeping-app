import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.page.html',
  styleUrls: ['./themes.page.scss'],
})
export class ThemesPage implements OnInit {

  private _colorChoice : number;

  constructor() { }

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
