import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'saw-add-new-selfie-rf',
  imports: [ReactiveFormsModule],
  templateUrl: './add-new-selfie-rf.html',
  styleUrl: './add-new-selfie-rf.css',
})
export class AddNewSelfieRf {
  private readonly builder = inject(FormBuilder);
  protected readonly selfieForm = this.builder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(30)]],
  });

  onSubmit(): void {
    if (this.selfieForm.valid) {
      const newSelfie = this.selfieForm.value;
      console.log('New Selfie:', newSelfie);
      // Here you can add logic to save the new selfie, e.g., call a service
    }
  }
}
