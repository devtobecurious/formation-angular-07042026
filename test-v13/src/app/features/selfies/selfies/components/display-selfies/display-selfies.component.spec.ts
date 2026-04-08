import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySelfiesComponent } from './display-selfies.component';

describe('DisplaySelfiesComponent', () => {
  let component: DisplaySelfiesComponent;
  let fixture: ComponentFixture<DisplaySelfiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySelfiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySelfiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
