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
  poTime = 5;
  ptTime = 5;

  poTimer: Timer;
  ptTimer: Timer;


  constructor(private timeService: TimeService) {
    this.poActive = true;
    this.ptActive = true;

    this.poTime = timeService.getTime();

    
   }

  ngOnInit() {
  }

  switchPlayers() {
    this.poActive = !this.poActive;
    this.ptActive = !this.ptActive;
  }

  startTimer() {

  }

  stopTimer() {

  }

}
