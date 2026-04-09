import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplaySelfies } from './features/selfies/components/display-selfies/display-selfies';
import { EditProfile } from "./features/profile/components/edit-profile/edit-profile";
import { DisplayStats } from './features/statistics/components/display-stats/display-stats';
import { Observable } from 'rxjs';
import { Header } from "./pages/layouts/components/header/header";
import { GetCurrentWeather } from './shared/ui/weather/services/get-current-weather';
import { Weather } from './shared/ui/weather/models/weather';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplaySelfies, EditProfile, DisplayStats, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
 // protected readonly title = signal('Bienvenue sur Selfie à Wookiees !');
  //protected readonly majTitle = computed(() => this.title().toUpperCase());

  private readonly weatherService = inject(GetCurrentWeather);

  ngOnInit(): void {
    console.info('------------------------------');

    console.info('SYNC');

    // const promise = new Promise((resolve) => {
    //     console.info('Promise executor'); // SYNC
    //     resolve('Promise resolved value'); // MICRO TASK
    // }).then((value) => {
    //     this.title = 'Promise then callback with value:' + value;
    // });

    const observable = new Observable<string>((subscriber) => {
      console.info('Observable executor');

      setTimeout(() => {
        subscriber.next('Promise resolved value');
      }, 1000);
    });

    observable.subscribe({
      next: (value) => {
        //this.title = 'Observable next callback with value:' + value;

        //this.title.set('Observable next callback with value:' + value);
       // this.title.update((current) => current + ' - ' + value);
      }
    });

    console.info('********************');
  }

  changeWeather(): void {
    console.info('Change weather button clicked');
    const newWeather: Weather = {
      value: -100, // Bad weather conditions
      temperature: Math.random() * 100, // Temperature in Celsius
      planet: 'Mars', // Planet name
    };
    this.weatherService.change(newWeather);
  }
}
