import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  poTime: number;
  ptTime: number;

  constructor() { }

  setTime(poTime: number, ptTime: number) {
    this.poTime = poTime;
    this.ptTime = ptTime;
  }

  getTime() {
    return this.poTime, this.ptTime;
  }
}
