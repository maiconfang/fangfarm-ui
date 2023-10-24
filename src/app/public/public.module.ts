import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';

import { SharedModule } from './../shared/shared.module';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AutomationComponent } from './automation/automation.component';
import { AccordionAutomationComponent } from './automation/accordion-automation/accordion-automation.component';
import { AlertsAutomationComponent } from './automation/alerts-automation/alerts-automation.component';
import { CollapseAutomationComponent } from './automation/collapse-automation/collapse-automation.component';
import { DatepickerAutomationComponent } from './automation/datepicker-automation/datepicker-automation.component';
import { DropdownsAutomationComponent } from './automation/dropdowns-automation/dropdowns-automation.component';
import { ModalsAutomationComponent } from './automation/modals-automation/modals-automation.component';
import { PaginationAutomationComponent } from './automation/pagination-automation/pagination-automation.component';
import { PopoverAutomationComponent } from './automation/popover-automation/popover-automation.component';
import { ProgressbarAutomationComponent } from './automation/progressbar-automation/progressbar-automation.component';
import { RatingAutomationComponent } from './automation/rating-automation/rating-automation.component';
import { SortableAutomationComponent } from './automation/sortable-automation/sortable-automation.component';
import { TabsAutomationComponent } from './automation/tabs-automation/tabs-automation.component';
import { TimepickerAutomationComponent } from './automation/timepicker-automation/timepicker-automation.component';
import { TooltipAutomationComponent } from './automation/tooltip-automation/tooltip-automation.component';
import { TypeaheadAutomationComponent } from './automation/typeahead-automation/typeahead-automation.component';


const routesPub: Routes = [
  {
    path: '', component: PublicComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'about', component: AboutComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'automation', component: AutomationComponent },
      { path: 'accordionAutomation', component: AccordionAutomationComponent },
      { path: 'alertsAutomation', component: AlertsAutomationComponent },
      { path: 'collapseAutomation', component: CollapseAutomationComponent },
      { path: 'datepickerAutomation', component: DatepickerAutomationComponent },
      { path: 'dropdownsAutomation', component: DropdownsAutomationComponent },
      { path: 'modalsAutomation', component: ModalsAutomationComponent },
      { path: 'paginationAutomation', component: PaginationAutomationComponent },
      { path: 'popoverAutomation', component: PopoverAutomationComponent },
      { path: 'progressbarAutomation', component: ProgressbarAutomationComponent },
      { path: 'ratingAutomation', component: RatingAutomationComponent },
      { path: 'sortableAutomation', component: SortableAutomationComponent },
      { path: 'tabsAutomation', component: TabsAutomationComponent },
      { path: 'timepickerAutomation', component: TimepickerAutomationComponent },
      { path: 'tooltipAutomation', component: TooltipAutomationComponent },
      { path: 'typeaheadAutomation', component: TypeaheadAutomationComponent },
    ]
  },
];

@NgModule({
  declarations: [
    PublicComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ProjectComponent,
    ContactComponent,
    AutomationComponent,
    AccordionAutomationComponent,
    AlertsAutomationComponent,
    CollapseAutomationComponent,
    DatepickerAutomationComponent,
    DropdownsAutomationComponent,
    ModalsAutomationComponent,
    PaginationAutomationComponent,
    PopoverAutomationComponent,
    ProgressbarAutomationComponent,
    RatingAutomationComponent,
    SortableAutomationComponent,
    TabsAutomationComponent,
    TimepickerAutomationComponent,
    TooltipAutomationComponent,
    TypeaheadAutomationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesPub),
    SharedModule,
    TabsModule.forRoot(),
  ], 
  exports: [
    PublicComponent, RouterModule
  ]
})
export class PublicModule { }
