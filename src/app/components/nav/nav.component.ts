import {Component, Input} from "@angular/core";
import {User} from "../../models/User";

@Component({
  selector: 'app-nav',
  templateUrl: "nav.component.html",
  styleUrls: ["nav.component.scss"]
})

export class NavComponent {
  @Input() userLogged: User;

  constructor() {
    this.userLogged = {
      name : "No one"
    }
  }

}
