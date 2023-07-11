import { Component } from '@angular/core';
import { User } from "../../../models/User";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent {
  list_users: User[];

  constructor() {
    this.list_users = [
      {
        name : "Manuel"
      },{
        name : "Lucrezia"
      },{
        name : "Tommaso"
      },{
        name : "Francesco"
      }
    ]
  }
}
