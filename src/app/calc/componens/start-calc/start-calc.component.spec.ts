import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartCalcComponent } from './start-calc.component';

describe('StartCalcComponent', () => {
  let component: StartCalcComponent;
  let fixture: ComponentFixture<StartCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
