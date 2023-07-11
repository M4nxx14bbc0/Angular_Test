import {Component, Directive, OnInit} from '@angular/core';
import {User} from "./models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent /*implements OnInit*/ {
  voicesMenu: {label: string, view: string}[];
  // @ts-ignore
  container: string;
  selectedView: string;
  userLogged: User;

  constructor() {
    this.setContainer();
    this.selectedView = 'home';
    this.voicesMenu = [
      {
        label: 'Home',
        view: 'home'
      },{
        label: 'Categorie',
        view: 'category'
      },{
        label: 'Lista spesa',
        view: 'shopping'
      },{
        label: 'Pipe',
        view: 'pipe'
      },{
        label: 'Utenti',
        view: 'users'
      },{
        label: 'Meteo',
        view: 'weather'
      }
    ];
    this.userLogged = {
      name: "Manuel"
    };
  }

  setContainer(bool: boolean = false):void{
    this.container = bool ? 'container-fluid':'container';
  }

  setSelectedView(event: any): void {
    this.selectedView = event.target.getAttribute('ng-reflect-ng-class');
    console.log(this.selectedView);
  }

  // ngOnInit(): void {
    // setTimeout((rete: any)=>{
    //   console.log(rete);
    //   this.gender = 'M'
    // }, 1000);
  // }
}
