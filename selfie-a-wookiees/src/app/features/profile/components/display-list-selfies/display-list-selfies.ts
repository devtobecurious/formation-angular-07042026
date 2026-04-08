import { Component, Input } from '@angular/core';
import { Selfie } from '../../models/selfie';

@Component({
  selector: 'app-display-list-selfies',
  imports: [],
  templateUrl: './display-list-selfies.html',
  styleUrl: './display-list-selfies.css',
})
export class DisplayListSelfies { // Dummy component / agnostic
  @Input({ required: true }) selfies: Selfie[] = [];
}
