import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateNextCallDateComponent } from './createNextCallDate.component';

const routes: Routes = [
  {
    path: '',
    component: CreateNextCallDateComponent,
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
