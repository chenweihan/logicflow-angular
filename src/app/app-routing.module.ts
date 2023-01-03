import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/bpmn' },
  //{ path: 'demo', loadChildren: () => import('./pages/demo/demo.module').then(m => m.DemoModule) },
  { path: 'bpmn', loadChildren: () => import('./pages/bpmn/bpmn.module').then(m => m.BpmnModule) },
  { path: 'custom', loadChildren: () => import('./pages/custom/custom.module').then(m => m.CustomModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
