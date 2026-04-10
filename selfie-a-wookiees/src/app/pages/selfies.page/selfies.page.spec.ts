import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfiesPage } from './selfies.page';

describe('SelfiesPage', () => {
  let component: SelfiesPage;
  let fixture: ComponentFixture<SelfiesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelfiesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SelfiesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
