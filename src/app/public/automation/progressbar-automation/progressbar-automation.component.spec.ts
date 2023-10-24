import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarAutomationComponent } from './progressbar-automation.component';

describe('ProgressbarAutomationComponent', () => {
  let component: ProgressbarAutomationComponent;
  let fixture: ComponentFixture<ProgressbarAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressbarAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressbarAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
