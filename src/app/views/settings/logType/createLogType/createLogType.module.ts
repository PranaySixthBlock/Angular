import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { CreateLogTypeComponent } from './createLogType.component';
import { ProjectsRoutingModule } from './createLogType-routing.module';

@NgModule({
  imports: [
    ProjectsRoutingModule,
    ChartsModule
  ],
  declarations: [ CreateLogTypeComponent ]
})
export class CreateLogTypeModule { }
