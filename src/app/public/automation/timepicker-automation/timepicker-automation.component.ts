import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker-automation',
  templateUrl: './timepicker-automation.component.html',
  styleUrls: ['../automation.component.scss']
})
export class TimepickerAutomationComponent implements OnInit {
  
  mytime: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
