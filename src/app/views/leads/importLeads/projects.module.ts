import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [
    ProjectsRoutingModule,
    ChartsModule,
    NgxDropzoneModule
  ],
  declarations: [ ProjectsComponent ]
})
export class ProjectsModule { }
