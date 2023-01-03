import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BpmnComponent } from './bpmn.component';

const routes: Routes = [
  {
    path: '',
    component: BpmnComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BpmnRoutingModule {}
