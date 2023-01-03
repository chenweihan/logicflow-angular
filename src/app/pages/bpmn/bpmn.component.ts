import { Component, OnInit, ViewChild } from '@angular/core';
import LogicFlow from '@logicflow/core'
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
  selector: 'app-bpmn',
  templateUrl: './bpmn.component.html',
  styleUrls: ['./bpmn.component.css']
})
export class BpmnComponent implements OnInit {

  lf: any = null;
  drawer: Boolean = false;
  currentNode: any = null;

  @ViewChild('bpmn', { static: true }) bpmnDom: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    LogicFlow.use(BpmnElement);
    LogicFlow.use(BpmnXmlAdapter);
    LogicFlow.use(Snapshot);
    LogicFlow.use(Control);
    LogicFlow.use(Menu);
    LogicFlow.use(SelectionSelect);
    this.lf = new LogicFlow({
      container: this.bpmnDom.nativeElement,
      grid: true,
      width: 1000,
      height: 600
    });
    this.lf.render();
    //绑定事件
    const { eventCenter } = this.lf.graphModel;
    this.bindEvent(eventCenter);

  }

  bindEvent(eventCenter: any) {
    eventCenter.on("node:click", (args: Node) => {
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
