import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})
export class LogComponent implements OnInit {
  display = false;
  clickLog = [];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('click');
    this.display = !this.display;
    this.clickLog.push(new Date().getTime());
  }
}
