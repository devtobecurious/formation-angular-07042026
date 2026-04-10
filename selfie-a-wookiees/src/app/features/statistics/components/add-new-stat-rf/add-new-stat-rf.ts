import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SaveOneNewStat } from '../../services/save-one-new-stat';
import { CreateStat } from '../../models/statistic';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'saw-add-new-stat-rf',
  imports: [ReactiveFormsModule],
  templateUrl: './add-new-stat-rf.html',
  styleUrl: './add-new-stat-rf.css',
})
export class AddNewStatRf implements OnInit {
  private readonly saveOneNewStat = inject(SaveOneNewStat);
  private readonly builder = inject(FormBuilder);
  protected readonly statForm = this.builder.nonNullable.group({
    selfieId: [0, [Validators.min(1)]],
    year: [new Date().getFullYear(), [Validators.max(3000), Validators.min(2024)]],
    month: [new Date().getMonth() + 1, [Validators.min(1), Validators.max(12)]],
    nbViews: [0, [Validators.min(0)]],
  });

  ngOnInit(): void {
    // this.statForm.valueChanges.pipe(
    //   // tap(value => console.log('Form value changed:', value)),
    //   debounceTime(200),
    //   distinctUntilChanged(),
    //   // tap(value => console.log('Form value after debounce:', value)),
    // ).subscribe();

    this.statForm.setValue({
      selfieId: 123,
      year: 2024,
      month: 4,
      nbViews: 1000,
    });
  }

  onSubmit(): void {
    if (this.statForm.valid) {
      const item: CreateStat = {
        month: this.statForm.value.month!,
        year: this.statForm.value.year!,
        nbViews: this.statForm.value.nbViews!,
        selfieId: this.statForm.value.selfieId!,
      };

      this.saveOneNewStat.save(item).subscribe({
        next: (savedStat) => {
          console.log('Stat saved:', savedStat);
        },
        error: (error) => {
          console.error('Error saving stat:', error);
        },
      });
    }


  }
}
