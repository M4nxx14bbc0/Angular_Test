import {Component, EventEmitter, Input, Output} from "@angular/core";
import {User} from "../../models/User";

@Component({
  selector: 'app-nav',
  templateUrl: "nav.component.html",
  styleUrls: ["nav.component.scss"]
})

export class NavComponent {
  @Input() userLogged: User;
  @Input() test: string;
  // @ts-ignore
  @Input() voices: {label:string, view:string}[]
  @Output() sel: EventEmitter<string> = new EventEmitter;
  selected: string = "home";

  constructor() {
    this.userLogged = {
      name : "Login"
    }
    this.test = "Navbar w/ text"
  }

  switch(event: any, view: string): void {
    event.preventDefault();
    this.selected = view;
    this.sel.emit(event);
  }

}
