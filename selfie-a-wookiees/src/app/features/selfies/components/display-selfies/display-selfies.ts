import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Selfies } from '../../models/selfie';

@Component({
  selector: 'app-display-selfies',
  imports: [NgFor, NgIf],
  templateUrl: './display-selfies.html',
  styleUrl: './display-selfies.css',
})
export class DisplaySelfies {
  protected readonly title = 'Mes selfies avec les wookiees';
  //protected readonly selfies = ['Moi, devant Kashhyk', 'Regarde l\'étoile de la mort !'];
  protected readonly selfies: Selfies = [
    { id: 1, title: 'Moi, devant Kashhyk', description: 'Un selfie pris sur la planète natale des wookiees', imageUrl: 'https://media.craiyon.com/2025-10-10/qnPd5AJISguAqV-dgSuOZA.webp', wookiee: { id: 1, name: 'Chewbacca' } },
    { id: 2, title: 'Regarde l\'étoile de la mort !', description: 'Un selfie pris en orbite autour de l\'étoile de la mort', imageUrl: 'https://albator.com.fr/img/dessins-animes/L-histoire-du-fidele-wookiee.jpg', wookiee: { id: 2, name: 'Tarfful' } }
  ]
}
