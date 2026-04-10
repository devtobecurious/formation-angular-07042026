import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Selfie } from '../../models/selfie';

@Component({
  selector: 'saw-add-new-selfie',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-selfie.html',
  styleUrl: './add-new-selfie.css',
})
export class AddNewSelfie {
  protected readonly item: Selfie = {
    id: 0,
    title: '',
    description: '',
    date: new Date(),
    imageUrl: '',
    wookiee: {
      id: 0,
      name: ''
    },
  }
}
