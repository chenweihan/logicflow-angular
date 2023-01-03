import { Component, OnInit, Input, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import LogicFlow from "@logicflow/core";
//注册节点
import CustomRect from "./registerNode/CustomRect";
import CustomPolygon from "./registerNode/CustomPolygon";
import CustomStart from "./registerNode/CustomStart";
import CustomEnd from "./registerNode/CustomEnd";
import CustomHtml from "./registerNode/CustomHtml";

import { HtmlComponent } from './registerNode/html/html.component';


@Component({
  selector: 'app-custom-node-panel',
  templateUrl: './custom-node-panel.component.html',
  styleUrls: ['./custom-node-panel.component.css']
})
export class CustomNodePanelComponent implements OnInit {

  @Input() lf: LogicFlow;
  constructor(injector: Injector) {
    //angular自定义元素，方便后面第三方原生HTML嵌入angular组件使用
    const PopupElement = createCustomElement(HtmlComponent, { injector });
    const customElement = customElements.get('custom-element');
    if (!customElement) {
      window.customElements.define('custom-element', PopupElement);
    }
  }

  ngOnInit(): void {
    let lf = this.lf;
    lf && lf.on("selection:selected", () => {
      lf.updateEditConfig({
        stopMoveGraph: false,
      });
    });
    //注册节点
    this.registerNode();
  }

  registerNode() {
    let that = this;
    let lf = this.lf as LogicFlow;
    lf.register(CustomRect);
    lf.register(CustomPolygon);
    lf.register(CustomStart);
    lf.register(CustomEnd);
    lf.register(CustomHtml);

    //注册非业务事件，业务事件需要放在上一层
    lf.on("connection:not-allowed", (data) => {
      alert(data.msg);
    });

    lf.on("custom:button-click", (model) => {
      console.log('custom:button-click')
      lf.setProperties(model.id, {
        body: "LogicFlow",
      });
    });
  }
  openSelection() {
    (this.lf as LogicFlow).updateEditConfig({
      stopMoveGraph: true,
    });
  }
  addStartNode() {
    (this.lf as LogicFlow).dnd.startDrag({
      type: "CustomStart",
      text: "开始",
      properties: { start: "开始" }, //自定义属性，同时导出的文件节点属性上会生成
    });
  }
  addGeneralNode() {
    (this.lf as LogicFlow).dnd.startDrag({
      type: "CustomRect",
      text: "普通节点",
      properties: { CustomRect: "矩形" }, //自定义属性，同时导出的文件节点属性上会生成
    });
  }
  addConditionNode() {
    (this.lf as LogicFlow).dnd.startDrag({
      type: "CustomaPolygon",
      text: "条件节点",
    });
  }
  addHtmlNode() {
    (this.lf as LogicFlow).dnd.startDrag({
      type: "CustomHtml",
      text: "自定义Html节点",
      properties: { text: "点击修改标题" },
    });
  }
  addEndNode() {
    (this.lf as LogicFlow).dnd.startDrag({
      type: "CustomEnd",
      text: "结束节点",
    });
  }

}
