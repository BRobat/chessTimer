import { Timer } from './../model/timer';
import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {

  // boring way
  poActive: Boolean;
  ptActive: Boolean;
  poTime: number;
  ptTime: number;

  poTimer: Timer;
  ptTimer: Timer;


  constructor(private timeService: TimeService) {
    this.poActive = true;
    this.ptActive = true;

    this.getTimers();
   }

  ngOnInit() {
    
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

  }

  stopTimer() {

  }

}
