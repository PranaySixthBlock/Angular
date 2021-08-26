import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { CallStatusComponent } from './callStatus/callStatus.component';
// import { LogTypeComponent } from './logType/logType.component';
// import { NextCallDateComponent } from './nextCallDate/nextCallDate.component';
import { ProjectsComponent } from './projects.component';


const routes: Routes = [
  {
    
      path: '',
      component: ProjectsComponent,
      data: {
        title: 'Leads'
      }
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
