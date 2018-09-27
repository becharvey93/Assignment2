import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string ='';
  password:string ='';
  constructor(private router:Router, private form:FormsModule) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    if (this.username == "super" && this.password == "123"){
      alert('You are logged in as the Super Admin.');
      this.router.navigateByUrl('/groups');
      localStorage.setItem("login-type", "super"); 
      localStorage.setItem("username", this.username);
    }
    else if(this.username == "group" && this.password == "123"){
      alert('You are logged in as the Group Admin');
      this.router.navigateByUrl('/groups');
      localStorage.setItem("login-type", "group");
      localStorage.setItem("username", this.username)
    }
    else if (this.username == "correctusername" && this.password =="correctpassword"){
      this.router.navigateByUrl('/groups');
      localStorage.setItem("login-type", "general");
      localStorage.setItem("username", this.username)
    }else{
      alert('Username and password were incorrect. Logged in as guest.');
      localStorage.setItem("login-type", "Guest");
      localStorage.setItem("username", this.username);
    }  
    }

  }


