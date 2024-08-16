import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: string[] = [];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get('Experience.skills').subscribe((data: any) => {
      this.skills = data[0].skills;
    });
  }

}
