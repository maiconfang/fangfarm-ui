import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAutomationComponent } from './tabs-automation.component';

describe('TabsAutomationComponent', () => {
  let component: TabsAutomationComponent;
  let fixture: ComponentFixture<TabsAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
