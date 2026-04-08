import { DatePipe, LowerCasePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Selfies } from '../../models/selfie';
import { SelfieToStringPipe } from '../../pipes/selfie-to-string-pipe';

@Component({
  selector: 'app-display-selfies',
  imports: [NgFor, NgIf, UpperCasePipe, LowerCasePipe, DatePipe, SelfieToStringPipe],
  templateUrl: './display-selfies.html',
  styleUrl: './display-selfies.css',
})
export class DisplaySelfies {
  protected readonly title = 'Mes selfies avec les wookiees';
  //protected readonly selfies = ['Moi, devant Kashhyk', 'Regarde l\'étoile de la mort !'];
  protected readonly selfies: Selfies = [
    { id: 1, title: 'Moi, devant Kashhyk', date: new Date('2025-10-10'), description: 'Un selfie pris sur la planète natale des wookiees', imageUrl: 'https://media.craiyon.com/2025-10-10/qnPd5AJISguAqV-dgSuOZA.webp', wookiee: { id: 1, name: 'Chewbacca' } },
    { id: 2, title: 'Regarde l\'étoile de la mort !', date: new Date('2025-10-11'), description: 'Un selfie pris en orbite autour de l\'étoile de la mort', imageUrl: 'https://albator.com.fr/img/dessins-animes/L-histoire-du-fidele-wookiee.jpg', wookiee: { id: 2, name: 'Tarfful' } }
  ]

  compute(a: number, b: number): number {
    return a + b;
  }
}
