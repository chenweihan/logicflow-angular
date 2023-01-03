import { Component, OnInit,Input } from '@angular/core';
import LogicFlow from '@logicflow/core';

type FileEventTarget = EventTarget & { files: FileList };

@Component({
  selector: 'app-bpnm-data-panel',
  templateUrl: './bpnm-data-panel.component.html',
  styleUrls: ['./bpnm-data-panel.component.css']
})
export class BpnmDataPanelComponent implements OnInit {

  @Input() lf: LogicFlow;

  constructor() { }

  ngOnInit(): void {

  }

  downloadXml() {
    const data = (this.lf as LogicFlow).getGraphData() as string;
    this.download("logic-flow.xml", data);
  }
  downloadImage() {
    this.lf['getSnapshot']();
  }
  uploadXml(ev: Event) {
    const file = (ev.target as FileEventTarget).files[0];
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (event.target) {
        let data = event.target.result as string;
        /* 这里JSON无法解析，只有XML可以载入？？
        if (this.isJSON(data)) {
          data = JSON.parse(data);
        }
        */
        (this.lf as LogicFlow).render(data);
      }
    };
    reader.readAsText(file); // you could also read images and other binaries
  }

  getGraphRawData() {
    const data = JSON.stringify((this.lf as LogicFlow).getGraphRawData());
    this.download("logic-flow.txt", data);
  }

  download(filename: string, text: string) {
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  isJSON(str: string) {
    if (typeof str == "string") {
      try {
        var obj = JSON.parse(str);
        if (typeof obj == "object" && obj) {
          return true;
        } else {
          return false;
        }
      } catch (e) {
        console.log("error：" + str + "!!!" + e);
        return false;
      }
    }
    console.log("It is not a string!");
    return false;
  }

}
