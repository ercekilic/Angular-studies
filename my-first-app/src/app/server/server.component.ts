import { Component, numberAttribute } from '@angular/core';

@Component({
 selector: 'app-server',
 templateUrl:'./server.component.html'
})

export class ServerComponent {
    
    serverStatus: string = 'Online'  ;
    serverNO : Number = 10;

    getServerStatus(){

        return this.serverStatus
    }

    


}