import { Component, OnInit, ViewChild } from '@angular/core';
import LogicFlow from "@logicflow/core";
import {
  BpmnElement,
  BpmnXmlAdapter,
  Snapshot,
  Control,
  Menu,
  SelectionSelect,
} from "@logicflow/extension";
import { Router } from '@angular/router';
@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  lf: any = null;
  drawer: Boolean = false;
  currentNode: any = null;

  @ViewChild('custom', { static: true }) customDom: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    LogicFlow.use(BpmnElement);
    LogicFlow.use(BpmnXmlAdapter);
    LogicFlow.use(Snapshot);
    LogicFlow.use(Control);
    LogicFlow.use(Menu);
    LogicFlow.use(SelectionSelect);
    this.lf = new LogicFlow({
      container: this.customDom.nativeElement,
      grid: true,
      width: 1000,
      height: 600
    });
    this.lf.render();
    //绑定事件
    const { eventCenter } = this.lf.graphModel;
    this.bindEvent(eventCenter);
  }
  
  bindEvent(eventCenter:any) {
    eventCenter.on("node:click", (args:Node) => {
      console.log("节点单击", args);
      this.drawer = true;
      this.currentNode = args;
    });
  }

  gotoDemo() {
    this.router.navigateByUrl('/demo');
  }

  gotoBpmn() {
    this.router.navigateByUrl('/bpmn');
  }

  gotoCustom() {
    this.router.navigateByUrl('/custom');
  }

}
