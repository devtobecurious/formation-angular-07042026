import { Component, inject } from '@angular/core';
import { DisplaySelectPlanets } from '../display-select-planets/display-select-planets';
import { DisplayListSelfies } from '../display-list-selfies/display-list-selfies';
import { GetSelfiesFromWookiee } from '../../services/get-selfies-from-wookiee';

@Component({
  selector: 'app-edit-profile',
  imports: [DisplaySelectPlanets, DisplayListSelfies],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css',
})
export class EditProfile {
  private readonly wookieId = 1;
  private readonly getSelfiesFromWookiee = inject(GetSelfiesFromWookiee);
  protected readonly dataSelfies = this.getSelfiesFromWookiee.getAll(this.wookieId);
  //constructor(private readonly getSelfiesFromWookiee: GetSelfiesFromWookiee) {}
}
