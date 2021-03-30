import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatedOutputComponent } from './calculated-output.component';

describe('CalculatedOutputComponent', () => {
  let component: CalculatedOutputComponent;
  let fixture: ComponentFixture<CalculatedOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatedOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatedOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
