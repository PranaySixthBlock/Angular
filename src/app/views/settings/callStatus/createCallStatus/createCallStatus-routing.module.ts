import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCallStatusComponent } from './createCallStatus.component';

const routes: Routes = [
  {
    path: '',
    component: CreateCallStatusComponent,
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
