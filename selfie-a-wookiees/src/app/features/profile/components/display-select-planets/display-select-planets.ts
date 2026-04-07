import { Component } from '@angular/core';
import { Planet } from '../../models/planet';

@Component({
  selector: 'app-display-select-planets',
  imports: [],
  templateUrl: './display-select-planets.html',
  styleUrl: './display-select-planets.css',
})
export class DisplaySelectPlanets {
  //protected readonly planets = ['Tatooine', 'Kashyyyk', 'Endor'];
  protected readonly planets: Planet[] = [
    { id: 1, name: 'Tatooine', size: 10465 },
    { id: 2, name: 'Kashyyyk', size: 12765 },
    { id: 3, name: 'Endor', size: 4900 },
  ]

  get isPlanetsEmpty(): boolean {
    return this.planets.length === 0;
  }
}
