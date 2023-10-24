import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverAutomationComponent } from './popover-automation.component';

describe('PopoverAutomationComponent', () => {
  let component: PopoverAutomationComponent;
  let fixture: ComponentFixture<PopoverAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
