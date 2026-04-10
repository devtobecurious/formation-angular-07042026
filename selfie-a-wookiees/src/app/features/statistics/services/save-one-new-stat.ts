import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateStat, SavedStat } from '../models/statistic';

@Injectable({
  providedIn: 'root',
})
export class SaveOneNewStat {
  save(item: CreateStat): Observable<SavedStat> {
    return new Observable<SavedStat>((subscriber) => {
      setTimeout(() => {
        subscriber.next({
          ...item,
          selfie: {
            id: item.selfieId.toString(),
            title: `Selfie ${item.selfieId}`,
          },
          id: Math.floor(Math.random() * 1000),
        });

        subscriber.complete();
      }, 1500);
    });
  }
}
