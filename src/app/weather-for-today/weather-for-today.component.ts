import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-for-today',
  templateUrl: './weather-for-today.component.html',
  styleUrls: ['./weather-for-today.component.css']
})
export class WeatherForTodayComponent implements OnInit {

  public city = 'Moscow';
  public theCountry = 'Russia';
  public date: Date = new Date();
  public temp = 10;
  public temperatureIsFelt = 7;
  public wind = 2;
  public humidity = 80;
  public stateOfTheDay = 'overcast';

  constructor() { }

  ngOnInit(): void {
  }

}
