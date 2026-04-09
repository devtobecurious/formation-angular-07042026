import { Component, EventEmitter, inject, Output } from '@angular/core';
import { DisplaySelectPlanets } from '../display-select-planets/display-select-planets';
import { DisplayListSelfies } from '../display-list-selfies/display-list-selfies';
import { GetSelfiesFromWookiee } from '../../services/get-selfies-from-wookiee';
import { Selfie } from '../../models/selfie';

@Component({
  selector: 'app-edit-profile',
  imports: [DisplaySelectPlanets, DisplayListSelfies],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.css',
})
export class EditProfile {
  private readonly wookieId = 1;
  private readonly getSelfiesFromWookiee = inject(GetSelfiesFromWookiee);
  protected dataSelfies = this.getSelfiesFromWookiee.getAll(this.wookieId);
  //constructor(private readonly getSelfiesFromWookiee: GetSelfiesFromWookiee) {}

  @Output() saveProfile = new EventEmitter<number>();

  onSubmit(): void {
    this.saveProfile.emit(this.wookieId);
  }

  onDeleteSelfie(selfie: Selfie): void {
    this.dataSelfies = this.dataSelfies.filter(s => s.id !== selfie.id);
  }
}
