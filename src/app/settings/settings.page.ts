import { Component, OnInit } from '@angular/core';
import { TimeService } from '../time.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private timeService: TimeService) { 

  }

  ngOnInit() {
  }

  poSetTime(event: any) {
    
  }

  ptSetTime(event: any) {

  }

}
