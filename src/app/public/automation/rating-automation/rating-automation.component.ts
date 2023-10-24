import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-automation',
  templateUrl: './rating-automation.component.html',
  styleUrls: ['../automation.component.scss']
})
export class RatingAutomationComponent implements OnInit {

  max = 10;
  rate = 7;
  isReadonly = true;

  constructor() { }

  ngOnInit(): void {
  }

}
