import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherEarth } from '../models/weather-earth';

@Injectable({
  providedIn: 'root',
})
export class GetWeatherFromEarth {
  private readonly httpClient = inject(HttpClient);
  private readonly apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=44.016667&longitude=3.3&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m';

  getOne(): Observable<WeatherEarth> {
    return this.httpClient.get<WeatherEarth>(this.apiUrl);
  }
}
