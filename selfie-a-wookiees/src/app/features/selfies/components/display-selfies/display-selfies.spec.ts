import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySelfies } from './display-selfies';

describe('DisplaySelfies', () => {
  let component: DisplaySelfies;
  let fixture: ComponentFixture<DisplaySelfies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplaySelfies],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplaySelfies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
