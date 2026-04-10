import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'saw-edit-one-selfie',
  imports: [],
  templateUrl: './edit-one-selfie.html',
  styleUrl: './edit-one-selfie.css',
})
export class EditOneSelfie {
  private readonly currentRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.currentRoute.snapshot.params['id']; // get the id from the route parameters

    this.currentRoute.params.subscribe({
      next: (params) => {
        console.log('Current selfie id: ' + params['id']);
      }
    })
  }
}
