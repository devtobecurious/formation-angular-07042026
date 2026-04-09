import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResultFromApi, Starship } from '../models/starship';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetAllStarships {
  private readonly httpClient = inject(HttpClient );

  getAll(): Observable<Starship[]> {
    return this.httpClient.get<ResultFromApi>('https://swapi.dev/api/starships/').pipe(
      map((response) => response.results.map((starship) => ({ label: starship.name + ' - ' + starship.model + ' - ' + starship.crew })))
    );
  }
}
