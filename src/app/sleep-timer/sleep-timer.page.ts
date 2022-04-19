import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

  state: 'start' | 'stop' = 'stop';

  constructor() { }

  ngOnInit() {
  }

  startTimer(duration: number){
    this.state = 'start';
    clearInterval(this.interval)
    this.timer = duration * 60;
    this.updateTimeValue();
    this.interval = setInterval( () => {
      this.updateTimeValue();
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.interval);
    this.time.next('00:00')
    this.state = 'stop';
  }

  updateTimeValue(){
    let minutes: any = this.timer / 60;
    let seconds: any = this.timer % 60;

    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);

    const text = minutes + ':' + seconds;
    this.time.next(text);

    --this.timer;

    if(this.timer < -1){
      this.startTimer(this.startDuration);
    }
  }
}
