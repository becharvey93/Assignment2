import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  username: string; 
  messages=[];
  message; 
  connection; 

  constructor(private sockServ: SocketService, private router: Router) { }

  ngOnInit() {
    //check for valid user and subscribe to service (chat messages)
      if (!localStorage.getItem('username')){
        //No valid session is available
        console.log('Not Validated'); 
        localStorage.clear(); 
        alert("Not a valid user");
        this.router.navigateByUrl('login');
      }else{
        // we have a valid username. Subscribe to Chat service. add Chat message
        // to the message array each time you are pushed a message from the server
        this.username = localStorage.getItem('username'); //change this once the DB is set up
        console.log("Session started for: " + this.username);
        this.connection = this.sockServ.getMessages().subscribe(message=>{
          //"message" is value of input field
          this.messages.push(message); 
          this.message = ''; 
        });

      }
  }

    sendMessage(){
      // send a chat message back to the server
      this.sockServ.sendMessage(this.message + '(' +this.username+ ')');

    }
  
  ngOnDestroy() {
    //When leaving this component close down the subscription
    if(this.connection){
      this.connection.unsubscribe(); 
    }
  }

  logout(){
    //logout the user and go back to the login component
    sessionStorage.clear(); 
    console.log('session cleared'); 
    this.router.navigateByUrl('login'); 
  } 

}
