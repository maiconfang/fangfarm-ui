import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipAutomationComponent } from './tooltip-automation.component';

describe('TooltipAutomationComponent', () => {
  let component: TooltipAutomationComponent;
  let fixture: ComponentFixture<TooltipAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TooltipAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
