import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse-automation',
  templateUrl: './collapse-automation.component.html',
  // styleUrls: ['./collapse-automation.component.scss'],
  styleUrls: ['../automation.component.scss']
})
export class CollapseAutomationComponent implements OnInit {

  isCollapsed = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
