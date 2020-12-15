import { AuthenticateService } from './../../services/authenticateservice.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  username: any;

  constructor(public user: AuthenticateService) {
    this.username = user.userDetails();
    console.log(this.username.uid);
   }

  ngOnInit(): void {
  }

}
