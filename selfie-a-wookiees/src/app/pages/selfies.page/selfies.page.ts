import { Component, inject } from '@angular/core';
import { DisplayListSelfies } from '../../features/profile/components/display-list-selfies/display-list-selfies';
import { DisplaySelfies } from '../../features/selfies/components/display-selfies/display-selfies';
import { Router } from '@angular/router';

@Component({
  selector: 'saw-selfies.page',
  imports: [DisplaySelfies],
  templateUrl: './selfies.page.html',
  styleUrl: './selfies.page.css',
})
export class SelfiesPage {
  private readonly router = inject(Router);

  goToCreateSelfie(): void {
    //this.router.navigate(['selfies/create']);
    this.router.navigate(['selfies/edit', 1]);
  }
}
