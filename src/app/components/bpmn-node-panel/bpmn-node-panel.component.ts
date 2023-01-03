import { Component, OnInit, Input } from '@angular/core';
import LogicFlow from '@logicflow/core';
@Component({
  selector: 'app-bpmn-node-panel',
  templateUrl: './bpmn-node-panel.component.html',
  styleUrls: ['./bpmn-node-panel.component.css']
})
export class BpmnNodePanelComponent implements OnInit {

  @Input() lf: LogicFlow;

  constructor() {}

  ngOnInit(): void {
    let lf = this.lf;
    lf && lf.on("selection:selected", () => {
      lf.updateEditConfig({
        stopMoveGraph: false,
      });
    });
  }

  openSelection() {
    console.log('openSelection');
    this.lf.updateEditConfig({
      stopMoveGraph: true
    });
  }

  addStartNode() {
    this.lf.dnd.startDrag({
      type: "bpmn:startEvent",
      text: "开始",
      properties: { 'start': '开始' }, //自定义属性，同时导出的文件节点属性上会生成
    });
  }

  addUserTask() {
    this.lf.dnd.startDrag({
      type: "bpmn:userTask",
      text: "用户",
    });
  }

  addServiceTask() {
    this.lf.dnd.startDrag({
      type: "bpmn:serviceTask",
      text: "系统",
    });
  }

  addGateWay() {
    this.lf.dnd.startDrag({
      type: "bpmn:exclusiveGateway",
      text: "网关",
    });
  }

  addEndNode() {
    this.lf.dnd.startDrag({
      type: "bpmn:endEvent",
      text: "结束",
    });
  }
}
