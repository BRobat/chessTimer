
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
      if(this.poTime >= 1) {
        if(this.poActive) {
        this.poTime--
      } else if(this.ptActive) {
        this.ptTime--
      } else {
        this.stop()
        this.getTimers()
      }
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
