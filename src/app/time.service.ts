import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  poTime = 60;
  ptTime = 60;

  constructor() { }

  setTime(poTime: number, ptTime: number) {
    this.poTime = poTime;
    this.ptTime = ptTime;
    console.log(this.poTime);
  }

  poGetTime() {
    return this.poTime;
  }

  ptGetTime() {
    return this.ptTime;
  }
}
