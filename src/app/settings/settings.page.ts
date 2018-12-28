import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  poTime: number;
  ptTime: number;

  constructor(private timeService: TimeService) { 
    this.poTime = timeService.poGetTime();
    this.ptTime = timeService.ptGetTime();
  }

  ngOnInit() {
  }

  poSetTime(event: any) {
    this.poTime = event.target.value;
    this.setTime(this.poTime, this.ptTime);
  }

  ptSetTime(event: any) {
    this.ptTime = event.target.value;
    this.setTime(this.poTime, this.ptTime);

  }

  setTime(poTime: number, ptTime: number) {
    this.timeService.setTime(poTime, ptTime);
  }

}
