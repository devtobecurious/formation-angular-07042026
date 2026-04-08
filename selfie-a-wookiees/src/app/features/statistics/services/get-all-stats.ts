import { Injectable } from '@angular/core';
import { Statistics } from '../models/statistic';

@Injectable({
  providedIn: 'root',
})
export class GetAllStats {
  getAll(): Statistics {
    return [
      { selfie: { id: '1', title: 'Selfie 1' }, year: 2023, month: 1, nbViews: 100 },
      { selfie: { id: '2', title: 'Selfie 2' }, year: 2023, month: 2, nbViews: 150 },
      { selfie: { id: '3', title: 'Selfie 3' }, year: 2023, month: 3, nbViews: 200 },
    ]
  }
}
