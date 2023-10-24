import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationAutomationComponent } from './pagination-automation.component';

describe('PaginationAutomationComponent', () => {
  let component: PaginationAutomationComponent;
  let fixture: ComponentFixture<PaginationAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
