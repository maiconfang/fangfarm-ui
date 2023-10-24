import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsAutomationComponent } from './dropdowns-automation.component';

describe('DropdownsAutomationComponent', () => {
  let component: DropdownsAutomationComponent;
  let fixture: ComponentFixture<DropdownsAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownsAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownsAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
