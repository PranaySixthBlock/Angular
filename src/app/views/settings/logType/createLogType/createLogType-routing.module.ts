import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateLogTypeComponent } from './createLogType.component';

const routes: Routes = [
  {
    path: '',
    component: CreateLogTypeComponent,
    data: {
      title: 'Projects'
    },
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'projects'
    //   },
    //   {
    //     path: 'projects',
    //     component: ProjectsComponent,
    //     data: {
    //       title: 'Projects'
    //     }
    //   },
      
    //]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
