'use strict';
declare var require: any;
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = "mongodb://localhost:27017/";

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

// function for logging in 
  loginUser(event){
    event.preventDefault(); 
    MongoClient.connect(url, function(err,db){
      if(err) throw err; 
      var dbo = db.db("DATABASE_CHAT");
      dbo.collection("CollectionUsers").find({projection: { username:this.username }});

    })
    if(this.username && this.password) {


    }
    

    // Old Method of Testing Login
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
      alert('Username and Password incorrect. Please log in again or create account.');
    } 

    }
  createUser(event){
    event.preventDefault();
  }

  }


