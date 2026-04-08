import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplaySelfies } from './features/selfies/components/display-selfies/display-selfies';
import { EditProfile } from "./features/profile/components/edit-profile/edit-profile";
import { DisplayStats } from './features/statistics/components/display-stats/display-stats';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplaySelfies, EditProfile, DisplayStats],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'Bienvenue sur Selfie à Wookiees !';

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
        this.title = 'Observable next callback with value:' + value;
      }
    });

    console.info('********************');
  }
}
