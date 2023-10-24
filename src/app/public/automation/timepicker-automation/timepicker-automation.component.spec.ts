import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerAutomationComponent } from './timepicker-automation.component';

describe('TimepickerAutomationComponent', () => {
  let component: TimepickerAutomationComponent;
  let fixture: ComponentFixture<TimepickerAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimepickerAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
