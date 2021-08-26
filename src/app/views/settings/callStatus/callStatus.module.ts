import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { CallStatusComponent } from './callStatus.component';
import { CallStatusRoutingModule } from './callStatus-routing.module';

@NgModule({
  imports: [
    CallStatusRoutingModule,
    ChartsModule
  ],
  declarations: [ CallStatusComponent ]
})
export class CallStatusModule { }
