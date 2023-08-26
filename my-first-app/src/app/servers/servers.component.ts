import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   `,
  

  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']


})
export class ServersComponent {
  

  allowNewServer =  false;
  serverCreationStatus = 'No server was created!';
  serverName = "erce";
  onCreate(){
    this.serverCreationStatus = ' Server is created... also server name is = '+this.serverName;
    
  }

  constructor(){
    
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;

  }

}




