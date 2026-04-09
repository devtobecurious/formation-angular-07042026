import { Component, inject } from '@angular/core';
import { GetCurrentWeather } from '../../services/get-current-weather';
import { AsyncPipe } from '@angular/common';
import { ValueToWeatherTextPipe } from '../../pipes/value-to-weather-text-pipe';
import { GetWeatherFromEarth } from '../../services/get-weather-from-earth';

@Component({
  selector: 'saw-header-weather',
  imports: [AsyncPipe, ValueToWeatherTextPipe],
  templateUrl: './header-weather.html',
  styleUrl: './header-weather.css',
  providers: [GetCurrentWeather]
})
export class HeaderWeather {
  private readonly getCurrentWeather = inject(GetCurrentWeather);
  protected readonly weather$ = this.getCurrentWeather.getOne();

  protected readonly weatherOnEarth$ = inject(GetWeatherFromEarth).getOne();
}
