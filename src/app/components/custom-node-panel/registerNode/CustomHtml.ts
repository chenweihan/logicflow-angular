import { HtmlNode, HtmlNodeModel, h as lfh } from "@logicflow/core";
import { HtmlComponent } from './html/html.component';
import { NgElement, WithProperties } from '@angular/elements';
// 提供节点的dom
class CustomHtmlNode extends HtmlNode {

    //原生组件嵌套angular组件是比较麻烦，这样采用的angular自定义元素来处理的
    //angular组件（自定义元素） 
    override setHtml(rootEl: any) {
        const { properties } = this.props.model;
        const el: NgElement & WithProperties<HtmlComponent> = document.createElement('custom-element') as any;
        el.className = 'lf-html-wrapper';
        el.message = properties['text'];
        rootEl.innerHTML = '';
        rootEl.appendChild(el);
    }


    /* 纯HTML*/
    /*
    override setHtml(rootEl: any) {
        const { properties } = this.props.model;
        const el = document.createElement('div');
        el.className = 'lf-html-wrapper';
        const html = `
                        <div class="custom-html">
                            <div class="custom-head">HTML</div>
                            <div class="custom-body">
                              <div>${properties['text']}</div>
                            </div>
                        </div>
                    `
        el.innerHTML = html;
        rootEl.innerHTML = '';
        rootEl.appendChild(el);
    }
    */
}

// 提供节点的样式
class CustomHtmlNodeModel extends HtmlNodeModel {

    override getNodeStyle() {
        const style = super.getNodeStyle();
        style.stroke = '#2987ff';
        style.fill = 'transparent';
        style.strokeWidth = 2;
        return style;
    }

    override initNodeData(data: any) {
        super.initNodeData(data);
        data.text.editable = false; // 禁止节点文本编辑
        const width = 100;
        const height = 100;
        this.width = width;
        this.height = height;
        this.anchorsOffset = [
            [width / 2, 0],
            [0, height / 2],
            [-width / 2, 0],
            [0, -height / 2],
        ]
    }

    /*
    setAttributes() {
        this.text.editable = false; // 禁止节点文本编辑
        const width = 100;
        const height = 80;
        this.width = width;
        this.height = height;
        this.anchorsOffset = [
            [width / 2, 0],
            [0, height / 2],
            [-width / 2, 0],
            [0, -height / 2],
        ]
    }
    */
}

export default {
    type: "CustomHtml",
    view: CustomHtmlNode,
    model: CustomHtmlNodeModel
}