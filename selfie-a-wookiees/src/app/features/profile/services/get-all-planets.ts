import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Planet } from '../models/planet';

@Injectable({
  providedIn: 'root',
})
export class GetAllPlanets {
  getAll(): Observable<Planet[]> {
    // return of([
    //   { id: 1, name: 'Mercury', size: 4879 },
    //   { id: 2, name: 'Venus', size: 12104 },
    //   { id: 3, name: 'Earth', size: 12742 },
    // ]);

    return new Observable<Planet[]>((subscriber) => {
      ///setTimeout(() => {
      subscriber.next([
        { id: 1, name: 'Mercury', size: 4879 },
        { id: 2, name: 'Venus', size: 12104 },
        { id: 3, name: 'Earth', size: 12742 },
      ]);

//      subscriber.complete();
      for (let i = 0; i < 10; i++) {
        subscriber.next([
          { id: i, name: 'Mercury' + i, size: 4879 },
        ]);
      }
      //  subscriber.complete();
      //}, 1000);
    });
  }
}
