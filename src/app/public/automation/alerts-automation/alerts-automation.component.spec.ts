import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsAutomationComponent } from './alerts-automation.component';

describe('AlertsAutomationComponent', () => {
  let component: AlertsAutomationComponent;
  let fixture: ComponentFixture<AlertsAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
