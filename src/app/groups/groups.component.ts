import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  username: string;
  router: any;
  newgroupname: any;

  constructor() { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    var usertype = localStorage.getItem("user-type");
    if (usertype == "super"){
      alert('You have created a new group called.' + this.newgroupname);
      localStorage.setItem("groupname", this.newgroupname);
    }
    else{
      alert('You do not have permission to create groups');
      this.router.navigateByUrl('/groups');
    }
    }


}
