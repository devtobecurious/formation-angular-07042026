import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: null,
})
export class GetCurrentWeather {
  private readonly weather$ = new Observable<Weather>((observer) => {
        const weather: Weather = {
          value: 1, // Good weather conditions
          temperature: 25, // Temperature in Celsius
          planet: 'Earth', // Planet name
        };
        observer.next(weather);
        observer.complete();
    });

  getOne(): Observable<Weather> {
    return this.weather$;
  }

  // getOne(): Observable<Weather> {
  //   return new Observable<Weather>((observer) => {
  //       const weather: Weather = {
  //         value: 1, // Good weather conditions
  //         temperature: 25, // Temperature in Celsius
  //         planet: 'Earth', // Planet name
  //       };
  //       observer.next(weather);
  //       observer.complete();
  //   });
  // }
}
