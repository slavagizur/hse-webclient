import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcLogComponent } from './calc-log.component';

describe('CalcLogComponent', () => {
  let component: CalcLogComponent;
  let fixture: ComponentFixture<CalcLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
