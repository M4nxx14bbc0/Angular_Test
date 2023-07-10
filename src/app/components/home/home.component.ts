import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title : string  = 'La nostra prima App';
  gender : string = 'F';

  getTitle(): string {
    return this.title;
  }

  setGender(): void {
    this.gender = this.gender === 'F'?'M':'F';
  }

  /*setTitle(event: any): void{
    this.title = event.target.value;
  }*/
}
