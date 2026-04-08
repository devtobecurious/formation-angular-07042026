import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Planet } from '../../models/planet';
import { GetAllPlanets } from '../../services/get-all-planets';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-select-planets',
  imports: [],
  templateUrl: './display-select-planets.html',
  styleUrl: './display-select-planets.css',
})
export class DisplaySelectPlanets implements OnInit, OnDestroy {


  //protected readonly planets = ['Tatooine', 'Kashyyyk', 'Endor'];
  private readonly getAllPlanets = inject(GetAllPlanets);
  private readonly parentSubscription = new Subscription();
  protected readonly planets: Planet[] = []

  ngOnInit(): void {
    this.parentSubscription.add(
      this.getAllPlanets.getAll().subscribe({
        next: (planets) => {
        this.planets.push(...planets);
      }
    })
  );
  }

  ngOnDestroy(): void {
    this.parentSubscription.unsubscribe();
  }

  get isPlanetsEmpty(): boolean {
    return this.planets.length === 0;
  }
}
