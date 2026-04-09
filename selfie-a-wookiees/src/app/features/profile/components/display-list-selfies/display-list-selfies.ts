import { Component, input, Input, OnChanges, output, SimpleChanges } from '@angular/core';
import { Selfie } from '../../models/selfie';

@Component({
  selector: 'app-display-list-selfies',
  imports: [],
  templateUrl: './display-list-selfies.html',
  styleUrl: './display-list-selfies.css',
})
export class DisplayListSelfies implements OnChanges {
  // Dummy component / agnostic
  //@Input({ required: true }) selfies: Selfie[] = [];
  selfies = input.required<Selfie[]>();
  deleteSelfie = output<Selfie>();

  ngOnChanges(changes: SimpleChanges): void {
    console.info('Changes detected in DisplayListSelfies component:', changes);
  }

  onDelete(selfie: Selfie): void {
    this.deleteSelfie.emit(selfie);
  }
}
