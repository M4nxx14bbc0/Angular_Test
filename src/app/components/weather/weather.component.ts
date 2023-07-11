import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {WeatherAPI} from "./WeatherAPI";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  // @ts-ignore
  weather: WeatherAPI;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`http://api.weatherstack.com/current?language=it&access_key=90340b0d39abcfe4279decf92a207c3c&query=Rome`)
      .subscribe((res: any): void => {
        this.weather = res;
      })
  }
}
