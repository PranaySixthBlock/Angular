import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { CreateNextCallDateComponent } from './createNextCallDate.component';
import { ProjectsRoutingModule } from './createNextCallDate-routing.module';

@NgModule({
  imports: [
    ProjectsRoutingModule,
    ChartsModule
  ],
  declarations: [ CreateNextCallDateComponent ]
})
export class CreateNextCallDateModule { }
