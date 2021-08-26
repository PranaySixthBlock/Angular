import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { CreateResultComponent } from './createResult.component';
import { ProjectsRoutingModule } from './createResult-routing.module';

@NgModule({
  imports: [
    ProjectsRoutingModule,
    ChartsModule
  ],
  declarations: [ CreateResultComponent ]
})
export class CreateResultModule { }
