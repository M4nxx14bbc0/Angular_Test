import { Component, OnInit } from '@angular/core';
import {User} from "./models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent /*implements OnInit*/ {
  userLogged: User;

  constructor() {
    this.userLogged = {
      name: "Manuel",
      id: 0
    }
  }

  // ngOnInit(): void {
    // setTimeout((rete: any)=>{
    //   console.log(rete);
    //   this.gender = 'M'
    // }, 1000);
  // }
}
