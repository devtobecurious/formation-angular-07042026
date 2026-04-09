import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Planet } from '../../models/planet';
import { GetAllPlanets } from '../../services/get-all-planets';
import { map, of, Subscription, tap } from 'rxjs';

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
    const obs$ = of(1, 2, 3).pipe(
      tap(value => console.log('Before map: ' + value)),
      map(value => value * 2),
      tap(value => console.log('Before map 2: ' + value)),
      map(value => value + ' !'),
      tap(value => console.log('after map: ' + value)),
    );

    obs$.subscribe({
      next: (value) => console.log(value)
    });

   //const planets$ = this.getAllPlanets.getAll();
    // const obs$ = planets$.pipe(
    //   map(planets => {
    //     const list: { value: string }[] = [];

    //     planets.forEach(planet => {
    //       list.push({
    //         value: `${planet.name} -- ${planet.size} km`,
    //       })
    //     })

    //     return list;
    //   })
    // )


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
