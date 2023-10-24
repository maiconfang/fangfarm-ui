import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sortable-automation',
  templateUrl: './sortable-automation.component.html',
  styleUrls: ['../automation.component.scss']
})
export class SortableAutomationComponent implements OnInit {

  itemStringsLeft = [
    'Windstorm',
    'Bombasto',
    'Magneta',
    'Tornado'
  ];
 
  itemStringsRight = ['Mr. O', 'Tomato'];

  constructor() { }

  ngOnInit(): void {
  }

}
