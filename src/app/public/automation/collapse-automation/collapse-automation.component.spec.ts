import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseAutomationComponent } from './collapse-automation.component';

describe('CollapseAutomationComponent', () => {
  let component: CollapseAutomationComponent;
  let fixture: ComponentFixture<CollapseAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
