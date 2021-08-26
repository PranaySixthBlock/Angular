import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogTypeComponent } from './logType.component';

const routes: Routes = [
  {
    path: '',
    component: LogTypeComponent,
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
export class CallStatusRoutingModule {}
