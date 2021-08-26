import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./views/projects/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'createProjects/:id',
        loadChildren: () => import('./views/projects/createProjects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'assignedToMe',
        loadChildren: () => import('./views/assignedToMe/theme.module').then(m => m.ThemeModule)
      }, 
      {
        path: 'callsMade',
        loadChildren: () => import('./views/callsMade/theme.module').then(m => m.ThemeModule)
      }, 
      {
        path: 'settings',
        loadChildren: () => import('./views/settings/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'settings/createCallStatus/:id',
        loadChildren: () => import('./views/settings/callStatus/createCallStatus/createCallStatus.module').then(m => m.CreateCallStatusModule)
      },
      {
        path: 'settings/createLogType/:id',
        loadChildren: () => import('./views/settings/logType/createLogType/createLogType.module').then(m => m.CreateLogTypeModule)
      },
      {
        path: 'settings/createNextCallDate/:id',
        loadChildren: () => import('./views/settings/nextCallDate/createNextCallDate/createNextCallDate.module').then(m => m.CreateNextCallDateModule)
      },
      {
        path: 'settings/createResult/:id',
        loadChildren: () => import('./views/settings/result/createResult/createResult.module').then(m => m.CreateResultModule)
      },
      {
        path: 'leads',
        loadChildren: () => import('./views/leads/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'importLeads',
        loadChildren: () => import('./views/leads/importLeads/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'createLeads/:id',
        loadChildren: () => import('./views/leads/createLeads/projects.module').then(m => m.ProjectsModule)
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
