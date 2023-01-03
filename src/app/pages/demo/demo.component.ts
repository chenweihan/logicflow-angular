import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @ViewChild('lfdom', { static: true }) lfdom: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    LogicFlow.use(SelectionSelect);
    const lf = new LogicFlow({
      container: this.lfdom.nativeElement,
      grid: true,
      width: 1000,
      height: 500
    });
    lf.render({
      nodes: [
        {
          id: "1",
          type: "rect",
          x: 100,
          y: 100,
          text: "节点1"
        },
        {
          id: "2",
          type: "circle",
          x: 300,
          y: 200,
          text: "节点2"
        }
      ],
      edges: [
        {
          sourceNodeId: "1",
          targetNodeId: "2",
          type: "polyline",
          text: "连线"
        }
      ]
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
