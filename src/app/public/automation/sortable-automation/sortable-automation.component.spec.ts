import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableAutomationComponent } from './sortable-automation.component';

describe('SortableAutomationComponent', () => {
  let component: SortableAutomationComponent;
  let fixture: ComponentFixture<SortableAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortableAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
