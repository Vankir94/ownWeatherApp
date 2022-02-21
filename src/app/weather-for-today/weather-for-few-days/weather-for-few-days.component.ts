import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-for-few-days',
  templateUrl: './weather-for-few-days.component.html',
  styleUrls: ['./weather-for-few-days.component.css']
})
export class WeatherForFewDaysComponent implements OnInit {

  public nameDay1 = 'Tuesday';
  public nameDay2 = 'Wednesday';
  public nameDay3 = 'Thursday';

  public tempDay1 = 5;
  public tempDay2 = 5;
  public tempDay3 = 5;

  public days = ['Tuesday', 'Wednesday', 'Thursday'];

  constructor() { }

  ngOnInit(): void {
  }

}
