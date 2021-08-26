// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CallStatusComponent } from './callStatus/callStatus.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { LogTypeComponent } from './logType/logType.component';
import { NextCallDateComponent } from './nextCallDate/nextCallDate.component';
import { ResultComponent } from './result/result.component';


// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    NgxDatatableModule
  ],
  declarations: [
    CallStatusComponent,
    LogTypeComponent,
    NextCallDateComponent,
    ResultComponent
  ]
})
export class ThemeModule { }
