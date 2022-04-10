import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.page.html',
  styleUrls: ['./journal-entry.page.scss'],
})
export class JournalEntryPage implements OnInit {

  public entryData: FormGroup;

  constructor() { }

  ngOnInit() {

    this.entryData = new FormGroup({
      title: new FormControl(),
      content: new FormControl()
    });

  }

  onSubmit(){
    console.log(this.entryData.value)
  }
}
