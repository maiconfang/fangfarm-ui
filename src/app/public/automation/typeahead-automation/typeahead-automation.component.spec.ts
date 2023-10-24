import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeaheadAutomationComponent } from './typeahead-automation.component';

describe('TypeaheadAutomationComponent', () => {
  let component: TypeaheadAutomationComponent;
  let fixture: ComponentFixture<TypeaheadAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeaheadAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeaheadAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
