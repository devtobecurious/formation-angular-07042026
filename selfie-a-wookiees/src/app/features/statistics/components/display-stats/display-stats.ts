import { Component, inject } from '@angular/core';
import { GetAllStats } from '../../services/get-all-stats';
import { Statistics } from '../../models/statistic';

@Component({
  selector: 'app-display-stats',
  imports: [],
  templateUrl: './display-stats.html',
  styleUrl: './display-stats.css',

})
export class DisplayStats {
  private readonly getAllStats = inject(GetAllStats);
  protected readonly list = this.getAllStats.getAll();

  // protected readonly list: Statistics;

  // constructor(private readonly getAllStats: GetAllStats) {
  //   this.list = this.getAllStats.getAll();
  // }
}
