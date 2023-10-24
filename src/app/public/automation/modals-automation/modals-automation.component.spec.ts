import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsAutomationComponent } from './modals-automation.component';

describe('ModalsAutomationComponent', () => {
  let component: ModalsAutomationComponent;
  let fixture: ComponentFixture<ModalsAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
