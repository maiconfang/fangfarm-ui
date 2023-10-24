import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingAutomationComponent } from './rating-automation.component';

describe('RatingAutomationComponent', () => {
  let component: RatingAutomationComponent;
  let fixture: ComponentFixture<RatingAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
