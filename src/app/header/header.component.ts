import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  public temperatureUnitChange() {
    this.isActive = !this.isActive;
  }
}
