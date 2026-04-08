import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplaySelfies } from './features/selfies/components/display-selfies/display-selfies';
import { EditProfile } from "./features/profile/components/edit-profile/edit-profile";
import { DisplayStats } from './features/statistics/components/display-stats/display-stats';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DisplaySelfies, EditProfile, DisplayStats],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('selfie-a-wookiees');
}
