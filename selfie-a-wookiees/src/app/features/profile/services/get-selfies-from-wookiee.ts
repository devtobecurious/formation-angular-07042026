import { Injectable } from '@angular/core';
import { Selfie } from '../models/selfie';

@Injectable({
  providedIn: 'root',
})
export class GetSelfiesFromWookiee {
  getAll(id: number): Selfie[] {
    return [
      { id: 1, title: 'Moi, devant Kashhyk' },
      { id: 2, title: 'Regarde l\'étoile de la mort !' }
    ];
  }
}
