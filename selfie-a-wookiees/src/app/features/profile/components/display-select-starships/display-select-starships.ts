import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { GetAllStarships } from '../../services/get-all-starships';

@Component({
  selector: 'saw-display-select-starships',
  imports: [AsyncPipe],
  templateUrl: './display-select-starships.html',
  styleUrl: './display-select-starships.css',
})
export class DisplaySelectStarships {
  private readonly getAllStarships = inject(GetAllStarships);
  protected readonly starships$ = this.getAllStarships.getAll();
}
