import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserModelService} from "../../../services/user_services/user-model/user-model.service";

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent implements OnInit {

  userName = this._currentUser.getUser_first_name();

  constructor(private _currentUser:UserModelService,private router:Router) { }

  ngOnInit() {

  }

  logout(){
    console.log("called");
    this._currentUser.setIsUserLoggedIn(false);
    this.router.navigateByUrl('');
  }

}