import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topdashboard',
  templateUrl: './topdashboard.component.html',
  styleUrls: ['./topdashboard.component.css']
})
export class TopdashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signIn():void {
    console.log("Sign in clicked! Awaiting sign in/up component")
  }

}
