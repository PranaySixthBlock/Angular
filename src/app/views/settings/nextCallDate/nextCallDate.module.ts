import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { NextCallDateComponent } from './nextCallDate.component';
import { CallStatusRoutingModule } from './nextCallDate-routing.module';

@NgModule({
  imports: [
    CallStatusRoutingModule,
    ChartsModule
  ],
  declarations: [ NextCallDateComponent ]
})
export class NextCallDateModule { }
