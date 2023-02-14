import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  allowNewServer=false;
  serverCreationStatus="No server was created";
  serverName='';
  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }
  onCreateServer(){
    this.serverCreationStatus='server was created';

  }
  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
