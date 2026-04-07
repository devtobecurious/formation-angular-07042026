import { Component } from '@angular/core';
import { DisplaySelectPlanets } from '../display-select-planets/display-select-planets';

@Component({
  selector: 'app-edit-profile',
  imports: [DisplaySelectPlanets],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css',
})
export class EditProfile {}
