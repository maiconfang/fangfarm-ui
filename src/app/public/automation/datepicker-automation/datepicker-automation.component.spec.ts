import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerAutomationComponent } from './datepicker-automation.component';

describe('DatepickerAutomationComponent', () => {
  let component: DatepickerAutomationComponent;
  let fixture: ComponentFixture<DatepickerAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatepickerAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
