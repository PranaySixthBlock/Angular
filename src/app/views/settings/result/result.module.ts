import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { ResultComponent } from './result.component';
import { CallStatusRoutingModule } from './result-routing.module';

@NgModule({
  imports: [
    CallStatusRoutingModule,
    ChartsModule
  ],
  declarations: [ ResultComponent ]
})
export class ResultModule { }
