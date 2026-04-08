import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginate',
  imports: [],
  templateUrl: './paginate.html',
  styleUrl: './paginate.css',
})
export class Paginate implements OnInit {

  constructor() {
    console.info('Paginate component initialized');
  }

  ngOnInit(): void {
    console.info('Paginate component ngOnInit called');
  }

  @Input({ required: true}) nbItemsPerPage = 0;
  @Input() totalItems = 0;

  get totalPages() {
    return Math.ceil(this.totalItems / this.nbItemsPerPage);
  }

  get arrayofPages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
