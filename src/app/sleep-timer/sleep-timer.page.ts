import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimerHistoryService } from '../services/timer-history.service';
import { TimerService } from '../services/timer.service';
import { HistoryTimer } from '../structs/timer';

@Component({
  selector: 'app-sleep-timer',
  templateUrl: './sleep-timer.page.html',
  styleUrls: ['./sleep-timer.page.scss'],
})
export class SleepTimerPage implements OnInit {

  time: BehaviorSubject<string> = new BehaviorSubject('00:00');

  timer: number;
  interval;

  startDuration = 1;

  isRunning: boolean;

  start = -1;
  previousTimeStamp;
  done = false;

  constructor(
    private TimerService: TimerService,
    public timerHistory: TimerHistoryService) { }

  ngOnInit() {
  }

  toggleTimer(){
    this.isRunning = !this.isRunning;
    if (this.isRunning)
    {
      window.requestAnimationFrame((t) => this.timerStep(this, t));
    }
    else{
      this.start = -1;
      this.save()
    }
  }

  timerStep(source, timestamp){
    console.log(timestamp);
    
    if(!this.isRunning) return;

    if (this.start < 0) {
      this.start = timestamp;
    }
    this.timer = timestamp - this.start;


    if(this.isRunning){
      window.requestAnimationFrame((t) => source.timerStep(source, t));
    }
  }

  private save(): void{

    const data: HistoryTimer = {
      endTime: this.timer,
      timerDate: (new Date().getTime()) - this.timer
    };

    this.timerHistory.add(data);
  }
}
