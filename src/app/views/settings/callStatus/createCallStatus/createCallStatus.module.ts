import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { CreateCallStatusComponent } from './createCallStatus.component';
import { ProjectsRoutingModule } from './createCallStatus-routing.module';

@NgModule({
  imports: [
    ProjectsRoutingModule,
    ChartsModule
  ],
  declarations: [ CreateCallStatusComponent ]
})
export class CreateCallStatusModule { }
