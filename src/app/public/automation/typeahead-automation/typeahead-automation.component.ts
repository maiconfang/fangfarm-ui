import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typeahead-automation',
  templateUrl: './typeahead-automation.component.html',
  styleUrls: ['../automation.component.scss']
})
export class TypeaheadAutomationComponent implements OnInit {

  selected?: string;
  states: string[] = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
