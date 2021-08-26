import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { LogTypeComponent } from './logType.component';
import { CallStatusRoutingModule } from './logType-routing.module';

@NgModule({
  imports: [
    CallStatusRoutingModule,
    ChartsModule
  ],
  declarations: [ LogTypeComponent ]
})
export class LogTypeModule { }
