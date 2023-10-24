import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionAutomationComponent } from './accordion-automation.component';

describe('AccordionAutomationComponent', () => {
  let component: AccordionAutomationComponent;
  let fixture: ComponentFixture<AccordionAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
