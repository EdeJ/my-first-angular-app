import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TEST1';
  userName = '';
  buttonDisabled = true;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUserName() {
    this.userName = '';
    this.buttonDisabled = true;
  }

  updateUserName(event) {
    if (this.userName != '') {
      this.buttonDisabled = false;
    }
  }
}
