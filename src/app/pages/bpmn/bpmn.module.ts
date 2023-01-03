import { NgModule } from '@angular/core';
import { BpmnRoutingModule } from './bpmn-routing.module';
import { BpmnComponent } from './bpmn.component';
import { BpmnNodePanelComponent } from "../../components/bpmn-node-panel/bpmn-node-panel.component";
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [BpmnComponent, BpmnNodePanelComponent],
  imports: [SharedModule, BpmnRoutingModule]
})
export class BpmnModule { }
