import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SahredModule } from './sahred/sahred.module';
import { WeatherForTodayComponent } from './weather-for-today/weather-for-today.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherForTodayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SahredModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
