import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateResultComponent } from './createResult.component';

const routes: Routes = [
  {
    path: '',
    component: CreateResultComponent,
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
