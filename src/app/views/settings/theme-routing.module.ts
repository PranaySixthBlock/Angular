import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallStatusComponent } from './callStatus/callStatus.component';
import { LogTypeComponent } from './logType/logType.component';
import { NextCallDateComponent } from './nextCallDate/nextCallDate.component';
import { ResultComponent } from './result/result.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Theme'
    },
    children: [
      {
        path: '',
        // redirectTo: 'colors'
      },
      {
        path: 'callStatus',
        component: CallStatusComponent,
        data: {
          title: 'callStatus'
        }
      },
      {
        path: 'result',
        component: ResultComponent,
        data: {
          title: 'result'
        }
      },
      {
        path: 'nextCallDate',
        component: NextCallDateComponent,
        data: {
          title: 'nextCallDate'
        }
      },
      {
        path: 'logType',
        component: LogTypeComponent,
        data: {
          title: 'logType'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
