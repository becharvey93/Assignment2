import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

private url = 'http://localhost:3000';	
private socket;
constructor() { }
sendMessage(message){
  this.socket.emit('add-message', message);
  }
 public getMessages(){
    let obmessages = new Observable(
      //"observer" is a javascript object that defines the handlers for the 
      //notifications that we will recieve
      observer => {
        this.socket = io();
        //listen for "new message" event from the server
        this.socket.on('message', (data)=> {observer.next(data);});


        //when the observer ends (is unsubscribed) then disconnect the socket
        return ()=>{this.socket.disconnect();}
      })
      return obmessages;
  }
}