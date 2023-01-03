import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRoutingModule } from './custom-routing.module';

import { CustomComponent } from './custom.component';
import { CustomNodePanelComponent } from "../../components/custom-node-panel/custom-node-panel.component";
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CustomComponent,CustomNodePanelComponent],
  imports: [SharedModule, CustomRoutingModule]
})
export class CustomModule { }
