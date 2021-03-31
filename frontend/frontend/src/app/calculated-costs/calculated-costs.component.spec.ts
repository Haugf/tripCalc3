import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatedCostsComponent } from './calculated-costs.component';

describe('CalculatedCostsComponent', () => {
  let component: CalculatedCostsComponent;
  let fixture: ComponentFixture<CalculatedCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatedCostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatedCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
