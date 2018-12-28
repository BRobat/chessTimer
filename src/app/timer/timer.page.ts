import { Timer } from './../model/timer';
import { Component } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage {

  // boring way
  poActive: Boolean;
  ptActive: Boolean;
  poTime: number;
  ptTime: number;

  poTimer: Timer;
  ptTimer: Timer;


  constructor(private timeService: TimeService) {
    this.stop();

    this.getTimers();
    this.startTimer();
    
   }

  switchPlayers() {
    this.poActive = !this.poActive;
    this.ptActive = !this.ptActive;
  }

  getTimers() {
    this.poTime = this.timeService.poGetTime();
    this.ptTime = this.timeService.ptGetTime();
  }

  startTimer() {
    setInterval(() => {
      if(this.poActive) {
        this.poTime--
      } else if(this.ptActive) {
        this.ptTime--
      }
    }, 1000)
  }

  start() {
    this.poActive = true;
  }

  stop() {
    this.poActive = false;
    this.ptActive = false;
  }

}
