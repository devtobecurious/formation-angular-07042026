import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root',
})
export class GetCurrentWeather {
  // private readonly weather$ = new Observable<Weather>((observer) => {
  //       const weather: Weather = {
  //         value: 1, // Good weather conditions
  //         temperature: 25, // Temperature in Celsius
  //         planet: 'Earth', // Planet name
  //       };
  //       observer.next(weather);
  //       observer.complete();
  //   });

  private readonly weatherStore = new BehaviorSubject<Weather>({
    value: 0, // Good weather conditions
    temperature: 25, // Temperature in Celsius
    planet: 'Earth', // Planet name
  });

  change(weather: Weather): void {
    this.weatherStore.next(weather);
  }

  getOne(): Observable<Weather> {
    return this.weatherStore.asObservable();
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
