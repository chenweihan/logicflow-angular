
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BpnmDataPanelComponent } from "../components/bpnm-data-panel/bpnm-data-panel.component";
 
const IMPORTS_MODULES = [CommonModule];
const EXPORTS_MODULES = [BpnmDataPanelComponent];
const DECLARATIONS_MODULES = [BpnmDataPanelComponent];
 
@NgModule({
  declarations: [...DECLARATIONS_MODULES],
  imports: [...IMPORTS_MODULES],
  exports: [...EXPORTS_MODULES]
})

export class SharedModule { }