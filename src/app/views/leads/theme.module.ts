// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ProjectsComponent } from './projects.component';
import { NgxDropzoneModule } from 'ngx-dropzone';



// Theme Routing
import { ThemeRoutingModule } from './theme-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    NgxDatatableModule,
    NgxDropzoneModule
  ],
  declarations: [    
    ProjectsComponent
  ]
})
export class ThemeModule { }
