"use strict";(self.webpackChunkangular_base=self.webpackChunkangular_base||[]).push([[709],{9709:(ce,C,c)=>{c.r(C),c.d(C,{CustomModule:()=>le});var y=c(6895),g=c(664),d=c(2188),m=c.n(d),h=c(9336),n=c(1571),w=c(2027),v=c(7579);const E={now:()=>(E.delegate||Date).now(),delegate:void 0};class b extends v.x{constructor(e=1/0,t=1/0,s=E){super(),this._bufferSize=e,this._windowTime=t,this._timestampProvider=s,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=t===1/0,this._bufferSize=Math.max(1,e),this._windowTime=Math.max(1,t)}next(e){const{isStopped:t,_buffer:s,_infiniteTimeWindow:i,_timestampProvider:r,_windowTime:l}=this;t||(s.push(e),!i&&s.push(r.now()+l)),this._trimBuffer(),super.next(e)}_subscribe(e){this._throwIfClosed(),this._trimBuffer();const t=this._innerSubscribe(e),{_infiniteTimeWindow:s,_buffer:i}=this,r=i.slice();for(let l=0;l<r.length&&!e.closed;l+=s?1:2)e.next(r[l]);return this._checkFinalizedStatuses(e),t}_trimBuffer(){const{_bufferSize:e,_timestampProvider:t,_buffer:s,_infiniteTimeWindow:i}=this,r=(i?1:2)*e;if(e<1/0&&r<s.length&&s.splice(0,s.length-r),!i){const l=t.now();let u=0;for(let a=1;a<s.length&&s[a]<=l;a+=2)u=a;u&&s.splice(0,u+1)}}}var N=c(6451),S=c(3900),R=c(4004);const p={schedule(o,e){const t=setTimeout(o,e);return()=>clearTimeout(t)},scheduleBeforeRender(o){if(typeof window>"u")return p.schedule(o,0);if(typeof window.requestAnimationFrame>"u")return p.schedule(o,16);const e=window.requestAnimationFrame(o);return()=>window.cancelAnimationFrame(e)}};let A;function Z(o,e,t){let s=t;return function M(o){return!!o&&o.nodeType===Node.ELEMENT_NODE}(o)&&e.some((i,r)=>!("*"===i||!function B(o,e){if(!A){const t=Element.prototype;A=t.matches||t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}return o.nodeType===Node.ELEMENT_NODE&&A.call(o,e)}(o,i)||(s=r,0))),s}class V{constructor(e,t){this.componentFactory=t.get(n._Vd).resolveComponentFactory(e)}create(e){return new D(this.componentFactory,e)}}class D{constructor(e,t){this.componentFactory=e,this.injector=t,this.eventEmitters=new b(1),this.events=this.eventEmitters.pipe((0,S.w)(s=>(0,N.T)(...s))),this.componentRef=null,this.viewChangeDetectorRef=null,this.inputChanges=null,this.hasInputChanges=!1,this.implementsOnChanges=!1,this.scheduledChangeDetectionFn=null,this.scheduledDestroyFn=null,this.initialInputValues=new Map,this.unchangedInputs=new Set(this.componentFactory.inputs.map(({propName:s})=>s)),this.ngZone=this.injector.get(n.R0b),this.elementZone=typeof Zone>"u"?null:this.ngZone.run(()=>Zone.current)}connect(e){this.runInZone(()=>{if(null!==this.scheduledDestroyFn)return this.scheduledDestroyFn(),void(this.scheduledDestroyFn=null);null===this.componentRef&&this.initializeComponent(e)})}disconnect(){this.runInZone(()=>{null===this.componentRef||null!==this.scheduledDestroyFn||(this.scheduledDestroyFn=p.schedule(()=>{null!==this.componentRef&&(this.componentRef.destroy(),this.componentRef=null,this.viewChangeDetectorRef=null)},10))})}getInputValue(e){return this.runInZone(()=>null===this.componentRef?this.initialInputValues.get(e):this.componentRef.instance[e])}setInputValue(e,t){this.runInZone(()=>{null!==this.componentRef?function P(o,e){return o===e||o!=o&&e!=e}(t,this.getInputValue(e))&&(void 0!==t||!this.unchangedInputs.has(e))||(this.recordInputChange(e,t),this.unchangedInputs.delete(e),this.hasInputChanges=!0,this.componentRef.instance[e]=t,this.scheduleDetectChanges()):this.initialInputValues.set(e,t)})}initializeComponent(e){const t=n.zs3.create({providers:[],parent:this.injector}),s=function T(o,e){const t=o.childNodes,s=e.map(()=>[]);let i=-1;e.some((r,l)=>"*"===r&&(i=l,!0));for(let r=0,l=t.length;r<l;++r){const u=t[r],a=Z(u,e,i);-1!==a&&s[a].push(u)}return s}(e,this.componentFactory.ngContentSelectors);this.componentRef=this.componentFactory.create(t,s,e),this.viewChangeDetectorRef=this.componentRef.injector.get(n.sBO),this.implementsOnChanges=function x(o){return"function"==typeof o}(this.componentRef.instance.ngOnChanges),this.initializeInputs(),this.initializeOutputs(this.componentRef),this.detectChanges(),this.injector.get(n.z2F).attachView(this.componentRef.hostView)}initializeInputs(){this.componentFactory.inputs.forEach(({propName:e})=>{this.initialInputValues.has(e)&&this.setInputValue(e,this.initialInputValues.get(e))}),this.initialInputValues.clear()}initializeOutputs(e){const t=this.componentFactory.outputs.map(({propName:s,templateName:i})=>e.instance[s].pipe((0,R.U)(l=>({name:i,value:l}))));this.eventEmitters.next(t)}callNgOnChanges(e){if(!this.implementsOnChanges||null===this.inputChanges)return;const t=this.inputChanges;this.inputChanges=null,e.instance.ngOnChanges(t)}markViewForCheck(e){this.hasInputChanges&&(this.hasInputChanges=!1,e.markForCheck())}scheduleDetectChanges(){this.scheduledChangeDetectionFn||(this.scheduledChangeDetectionFn=p.scheduleBeforeRender(()=>{this.scheduledChangeDetectionFn=null,this.detectChanges()}))}recordInputChange(e,t){if(!this.implementsOnChanges)return;null===this.inputChanges&&(this.inputChanges={});const s=this.inputChanges[e];if(s)return void(s.currentValue=t);const i=this.unchangedInputs.has(e),r=i?void 0:this.getInputValue(e);this.inputChanges[e]=new n.WD2(r,t,i)}detectChanges(){null!==this.componentRef&&(this.callNgOnChanges(this.componentRef),this.markViewForCheck(this.viewChangeDetectorRef),this.componentRef.changeDetectorRef.detectChanges())}runInZone(e){return this.elementZone&&Zone.current!==this.elementZone?this.ngZone.run(e):e()}}class z extends HTMLElement{constructor(){super(...arguments),this.ngElementEventsSubscription=null}}const K={type:"CustomRect",view:class k extends d.RectNode{},model:class G extends d.RectNodeModel{initNodeData(e){super.initNodeData(e)}getNodeStyle(){const e=super.getNodeStyle();return e.stroke="#2987ff",e}}},_={type:"CustomaPolygon",view:class Q extends d.PolygonNode{},model:class j extends d.PolygonNodeModel{getNodeStyle(){const e=super.getNodeStyle();return e.stroke="#2987ff",e}}},L={type:"CustomStart",view:class W extends d.CircleNode{},model:class J extends d.CircleNodeModel{initNodeData(e){super.initNodeData(e)}getNodeStyle(){const e=super.getNodeStyle();return e.stroke="#2987ff",e}getConnectedTargetRules(){const e=super.getConnectedTargetRules();return e.push({message:"\u8d77\u59cb\u8282\u70b9\u4e0d\u80fd\u4f5c\u4e3a\u8fb9\u7684\u7ec8\u70b9",validate:()=>!1}),e}}},q={type:"CustomEnd",view:class X extends d.CircleNode{getShape(){const{model:e}=this.props,{x:s,y:i,r}=e,{fill:l,stroke:u,strokeWidth:a}=e.getNodeStyle();return(0,d.h)("g",{},[(0,d.h)("circle",{cx:s,cy:i,r,fill:l,stroke:u,strokeWidth:a}),(0,d.h)("circle",{cx:s,cy:i,r:r-10,fill:l,stroke:u,strokeWidth:a})])}},model:class H extends d.CircleNodeModel{initNodeData(e){super.initNodeData(e),this.r=50}getNodeStyle(){const e=super.getNodeStyle();return e.stroke="#2987ff",e.fill="transparent",e.strokeWidth=2,e}getConnectedSourceRules(){const e=super.getConnectedSourceRules();return e.push({message:"\u7ec8\u6b62\u8282\u70b9\u4e0d\u80fd\u4f5c\u4e3a\u8fde\u7ebf\u7684\u8d77\u70b9",validate:()=>!1}),e}}},te={type:"CustomHtml",view:class $ extends d.HtmlNode{setHtml(e){const{properties:t}=this.props.model,s=document.createElement("custom-element");s.className="lf-html-wrapper",s.message=t.text,e.innerHTML="",e.appendChild(s)}},model:class ee extends d.HtmlNodeModel{getNodeStyle(){const e=super.getNodeStyle();return e.stroke="#2987ff",e.fill="transparent",e.strokeWidth=2,e}initNodeData(e){super.initNodeData(e),e.text.editable=!1,this.width=100,this.height=100,this.anchorsOffset=[[50,0],[0,50],[-50,0],[0,-50]]}}};let ne=(()=>{class o{constructor(){this.htmlMessage=""}get message(){return this.htmlMessage}set message(t){this.htmlMessage=t}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-html"]],inputs:{message:"message"},decls:6,vars:1,consts:[[1,"custom-html"],[1,"custom-head"],[1,"custom-body"]],template:function(t,s){1&t&&(n.TgZ(0,"div",0)(1,"div",1),n._uU(2,"angular\u7ec4\u4ef6"),n.qZA(),n.TgZ(3,"div",2)(4,"div"),n._uU(5),n.qZA()()()),2&t&&(n.xp6(5),n.Oqu(s.htmlMessage))}}),o})(),oe=(()=>{class o{constructor(t){const s=function Y(o,e){const t=function I(o,e){return e.get(n._Vd).resolveComponentFactory(o).inputs}(o,e.injector),s=e.strategyFactory||new V(o,e.injector),i=function U(o){const e={};return o.forEach(({propName:t,templateName:s})=>{e[function F(o){return o.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}(s)]=t}),e}(t);class r extends z{constructor(u){super(),this.injector=u}get ngElementStrategy(){if(!this._ngElementStrategy){const u=this._ngElementStrategy=s.create(this.injector||e.injector);t.forEach(({propName:a})=>{if(!this.hasOwnProperty(a))return;const f=this[a];delete this[a],u.setInputValue(a,f)})}return this._ngElementStrategy}attributeChangedCallback(u,a,f,pe){this.ngElementStrategy.setInputValue(i[u],f)}connectedCallback(){let u=!1;this.ngElementStrategy.events&&(this.subscribeToEvents(),u=!0),this.ngElementStrategy.connect(this),u||this.subscribeToEvents()}disconnectedCallback(){this._ngElementStrategy&&this._ngElementStrategy.disconnect(),this.ngElementEventsSubscription&&(this.ngElementEventsSubscription.unsubscribe(),this.ngElementEventsSubscription=null)}subscribeToEvents(){this.ngElementEventsSubscription=this.ngElementStrategy.events.subscribe(u=>{const a=new CustomEvent(u.name,{detail:u.value});this.dispatchEvent(a)})}}return r.observedAttributes=Object.keys(i),t.forEach(({propName:l})=>{Object.defineProperty(r.prototype,l,{get(){return this.ngElementStrategy.getInputValue(l)},set(u){this.ngElementStrategy.setInputValue(l,u)},configurable:!0,enumerable:!0})}),r}(ne,{injector:t});customElements.get("custom-element")||window.customElements.define("custom-element",s)}ngOnInit(){let t=this.lf;t&&t.on("selection:selected",()=>{t.updateEditConfig({stopMoveGraph:!1})}),this.registerNode()}registerNode(){let s=this.lf;s.register(K),s.register(_),s.register(L),s.register(q),s.register(te),s.on("connection:not-allowed",i=>{alert(i.msg)}),s.on("custom:button-click",i=>{console.log("custom:button-click"),s.setProperties(i.id,{body:"LogicFlow"})})}openSelection(){this.lf.updateEditConfig({stopMoveGraph:!0})}addStartNode(){this.lf.dnd.startDrag({type:"CustomStart",text:"\u5f00\u59cb",properties:{start:"\u5f00\u59cb"}})}addGeneralNode(){this.lf.dnd.startDrag({type:"CustomRect",text:"\u666e\u901a\u8282\u70b9",properties:{CustomRect:"\u77e9\u5f62"}})}addConditionNode(){this.lf.dnd.startDrag({type:"CustomaPolygon",text:"\u6761\u4ef6\u8282\u70b9"})}addHtmlNode(){this.lf.dnd.startDrag({type:"CustomHtml",text:"\u81ea\u5b9a\u4e49Html\u8282\u70b9",properties:{text:"\u70b9\u51fb\u4fee\u6539\u6807\u9898"}})}addEndNode(){this.lf.dnd.startDrag({type:"CustomEnd",text:"\u7ed3\u675f\u8282\u70b9"})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(n.zs3))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-custom-node-panel"]],inputs:{lf:"lf"},decls:25,vars:0,consts:[[1,"node-panel"],[1,"node-item",3,"mousedown"],[1,"node-item-icon","selection"],[1,"node-label"],[1,"node-item-icon","start"],[1,"node-item-icon","general"],[1,"node-item-icon","condition"],[1,"node-item-icon","html"],[1,"node-item-icon","end"]],template:function(t,s){1&t&&(n.TgZ(0,"div",0)(1,"div",1),n.NdJ("mousedown",function(){return s.openSelection()}),n._UZ(2,"div",2),n.TgZ(3,"span",3),n._uU(4,"\u9009\u533a"),n.qZA()(),n.TgZ(5,"div",1),n.NdJ("mousedown",function(){return s.addStartNode()}),n._UZ(6,"div",4),n.TgZ(7,"span",3),n._uU(8,"\u5f00\u59cb\u8282\u70b9"),n.qZA()(),n.TgZ(9,"div",1),n.NdJ("mousedown",function(){return s.addGeneralNode()}),n._UZ(10,"div",5),n.TgZ(11,"span",3),n._uU(12,"\u666e\u901a\u8282\u70b9"),n.qZA()(),n.TgZ(13,"div",1),n.NdJ("mousedown",function(){return s.addConditionNode()}),n._UZ(14,"div",6),n.TgZ(15,"span",3),n._uU(16,"\u6761\u4ef6\u8282\u70b9"),n.qZA()(),n.TgZ(17,"div",1),n.NdJ("mousedown",function(){return s.addHtmlNode()}),n._UZ(18,"div",7),n.TgZ(19,"span",3),n._uU(20,"Html\u8282\u70b9"),n.qZA()(),n.TgZ(21,"div",1),n.NdJ("mousedown",function(){return s.addEndNode()}),n._UZ(22,"div",8),n.TgZ(23,"span",3),n._uU(24,"\u7ed3\u675f\u8282\u70b9"),n.qZA()()())},styles:[".node-panel[_ngcontent-%COMP%]{position:absolute;top:100px;left:10px;width:50px;padding:10px;background-color:#fff;box-shadow:0 0 10px 1px #e4e0db;border-radius:6px;text-align:center;z-index:101}.node-item[_ngcontent-%COMP%]{margin-bottom:10px}.node-item-icon[_ngcontent-%COMP%]{width:30px;height:30px;margin-left:10px;background-size:cover}.node-label[_ngcontent-%COMP%]{font-size:12px;margin-top:5px;-webkit-user-select:none;user-select:none}.selection[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAOVJREFUOBGtVMENwzAIjKP++2026ETdpv10iy7WFbqFyyW6GBywLCv5gI+Dw2Bluj1znuSjhb99Gkn6QILDY2imo60p8nsnc9bEo3+QJ+AKHfMdZHnl78wyTnyHZD53Zzx73MRSgYvnqgCUHj6gwdck7Zsp1VOrz0Uz8NbKunzAW+Gu4fYW28bUYutYlzSa7B84Fh7d1kjLwhcSdYAYrdkMQVpsBr5XgDGuXwQfQr0y9zwLda+DUYXLaGKdd2ZTtvbolaO87pdo24hP7ov16N0zArH1ur3iwJpXxm+v7oAJNR4JEP8DoAuSFEkYH7cAAAAASUVORK5CYII=) center center no-repeat;cursor:grab}.start[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAAnBJREFUOBGdVL1rU1EcPfdGBddmaZLiEhdx1MHZQXApraCzQ7GKLgoRBxMfcRELuihWKcXFRcEWF8HBf0DdDCKYRZpnl7p0svLe9Zzbd29eQhTbC8nv+9zf130AT63jvooOGS8Vf9Nt5zxba7sXQwODfkWpkbjTQfCGUd9gIp3uuPP8bZ946g56dYQvnBg+b1HB8VIQmMFrazKcKSvFW2dQTxJnJdQ77urmXWOMBCmXM2Rke4S7UAW+/8ywwFoewmBps2tu7mbTdp8VMOkIRAkKfrVawalJTtIliclFbaOBqa0M2xImHeVIfd/nKAfVq/LGnPss5Kh00VEdSzfwnBXPUpmykNss4lUI9C1ga+8PNrBD5YeqRY2Zz8PhjooIbfJXjowvQJBqkmEkVnktWhwu2SM7SMx7Cj0N9IC0oQXRo8xwAGzQms+xrB/nNSUWVveI48ayrFGyC2+E2C+aWrZHXvOuz+CiV6iycWe1Rd1Q6+QUG07nb5SbPrL4426d+9E1axKjY3AoRrlEeSQo2Eu0T6BWAAr6COhTcWjRaYfKG5csnvytvUr/WY4rrPMB53Uo7jZRjXaG6/CFfNMaXEu75nG47X+oepU7PKJvvzGDY1YLSKHJrK7vFUwXKkaxwhCW3u+sDFMVrIju54RYYbFKpALZAo7sB6wcKyyrd+aBMryMT2gPyD6GsQoRFkGHr14TthZni9ck0z+Pnmee460mHXbRAypKNy3nuMdrWgVKj8YVV8E7PSzp1BZ9SJnJAsXdryw/h5ctboUVi4AFiCd+lQaYMw5z3LGTBKjLQOeUF35k89f58Vv/tGh+l+PE/wG0rgfIUbZK5AAAAABJRU5ErkJggg==) center center no-repeat;cursor:grab}.end[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAAH6ji2bAAAABGdBTUEAALGPC/xhBQAAA1BJREFUOBFtVE1IVUEYPXOf+tq40Y3vPcmFIdSjIorWoRG0ERWUgnb5FwVhYQSl72oUoZAboxKNFtWiwKRN0M+jpfSzqJAQclHo001tKkjl3emc8V69igP3znzfnO/M9zcDcKT67azmjYWTwl9Vn7Vumeqzj1DVb6cleQY4oAVnIOPb+mKAGxQmKI5CWNJ2aLPatxWa3aB9K7/fB+/Z0jUF6TmMlFLQqrkECWQzOZxYGjTlOl8eeKaIY5yHnFn486xBustDjWT6dG7pmjHOJd+33t0iitTPkK6tEvjxq4h2MozQ6WFSX/LkDUGfFwfhEZj1Auz/U4pyAi5Sznd7uKzznXeVHlI/Aywmk6j7fsUsEuCGADrWARXXwjxWQsUbIupDHJI7kF5dRktg0eN81IbiZXiTESic50iwS+t1oJgL83jAiBupLDCQqwziaWSoAFSeIR3P5Xv5az00wyIn35QRYTwdSYbz8pH8fxUUAtxnFvYmEmgI0wYXUXcCCSpeEVpXlsRhBnCEATxWylL9+EKCAYhe1NGstUa6356kS9NVvt3DU2fd+Wtbm/+lSbylJqsqkSm9CRhvoJVlvKPvF1RKY/FcPn5j4UfIMLn8D4UYb54BNsilTDXKnF4CfTobA0FpoW/LSp306wkXM+XaOJhZaFkcNM82ASNAWMrhrUbRfmyeI1FvRBTpN06WKxa9BK0o2E4Pd3zfBBEwPsv9sQBnmLVbLEIZ/Xe9LYwJu/Er17W6HYVBc7vmuk0xUQ+pqxdom5Fnp55SiytXLPYoMXNM4u4SNSCFWnrVIzKG3EGyMXo6n/BQOe+bX3FClY4PwydVhthOZ9NnS+ntiLh0fxtlUJHAuGaFoVmttpVMeum0p3WEXbcll94l1wM/gZ0Ccczop77VvN2I7TlsZCsuXf1WHvWEhjO8DPtyOVg2/mvK9QqboEth+7pD6NUQC1HN/TwvydGBARi9MZSzLE4b8Ru3XhX2PBxf8E1er2A6516o0w4sIA+lwURhAON82Kwe2iDAC1Watq4XHaGQ7skLcFOtI5lDxuM2gZe6WFIotPAhbaeYlU4to5cuarF1QrcZ/lwrLaCJl66JBocYZnrNlvm2+MBCTmUymPrYZVbjdlr/BxlMjmNmNI3SAAAAAElFTkSuQmCC) center center no-repeat;cursor:grab}.general[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAIlJREFUOE9jZKAyYKSyeQxgA7Xa/pv/+8/gSYnhzIwMq65WMV5jVJn0n531G8Mxhv8MRpQYyMDAcOszO4MBo0b7fwdGBob9//8xNDIwMRwgy9B/DA6MTAz1/xkYHFEMvFHN2ECOgRqt/xtGDYREymgYEp2ChnCyoUrWo3rhQPXii+ioJFIh1UtsAJK4mqGHZK9YAAAAAElFTkSuQmCC) center center no-repeat;cursor:grab}.html[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAZpJREFUOE/F1D1Lw1AYBeBzxEXcHPRaKjg6ibtDEcTNrVbcdFURBDvZxJKkIIJLEZwUFERoEdwdBPUP6KCzLr1VhG46aF5JbUJsm35AwYzJvQ/nPTcJ0eOLPfbwv6AyZRd9ONVZPkZN1nHCmCHTLnDnAlOvNu+7AlVGsiAS2uaMv1GZkoaLtHY4rAy5BnGrLZr1cEPCGrYDIqUtFv0No4ZcCvChbS4pUxYgKIDY1xa3wugfMAqLb8rA1yDKAmyWHR55QAg91BZXfTQAozBv4UhGZklc0cV4KcfnUA2/SQUn2uGyd78KtsKqzw3xukpqm5P1nQVJgYK2ueiDXmfeQfzpLUhiyA0ED9rheguwqG2mwiPvgUjXo/GsDH19451EsmTxIgyG0lWxYOQgSUYOQKyF0RFT5umi+NkPVcmy0tAfEGANYK3PYxArPqpMyYtgomxzrh3WFKwdwrl3Ft6LrQx5InBWsumEOr0G8OaPGfke1hce25Yxtw8vdJEo5XjTyZ+p7besMpLXDjc6wSJH7nRzs3VtE3aL9xz8Abf1vRWPrKqXAAAAAElFTkSuQmCC) center center no-repeat;cursor:grab}.condition[_ngcontent-%COMP%]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAALdJREFUOE+11NERgyAMANBkCxbTabwWPadpF2OL9EBBLZBERX7h3iUhCULjgxrPvKjz79yEX+m9CAaM4BMghF5CWTBhBOMKviW0Cu4xN6P1oBnIAgKLFsESFmsnoRnIYRr0AO4w62Zc6lY5tUgTeAbjIg2gJk1tpM+AV6Ms1bH2KWPsPW2q8d2zbZN+L84vQdY+ZiA/KX5iinOtGb2EStiyP7jm3SK9vxyy9FusrwPaasFKG/r//gdxhLQV5onRWwAAAABJRU5ErkJggg==) center center no-repeat;cursor:grab}.lf-html-wrapper[_ngcontent-%COMP%]{width:100px;height:100px}.lf-html-wrapper[_ngcontent-%COMP%]   .custom-html[_ngcontent-%COMP%]{width:96px;height:96px;border:2px solid #2987ff}.lf-html-wrapper[_ngcontent-%COMP%]   .custom-head[_ngcontent-%COMP%]{color:red;height:26px;line-height:26px}.lf-html-wrapper[_ngcontent-%COMP%]   .custom-body[_ngcontent-%COMP%]{color:#2987ff;height:50px;line-height:50px}"]}),o})();const se=["custom"],ie=[{path:"",component:(()=>{class o{constructor(t){this.router=t,this.lf=null,this.drawer=!1,this.currentNode=null}ngOnInit(){m().use(h.EV),m().use(h.t0),m().use(h.aC),m().use(h.oT),m().use(h.v2),m().use(h.Ju),this.lf=new(m())({container:this.customDom.nativeElement,grid:!0,width:1e3,height:600}),this.lf.render();const{eventCenter:t}=this.lf.graphModel;this.bindEvent(t)}bindEvent(t){t.on("node:click",s=>{console.log("\u8282\u70b9\u5355\u51fb",s),this.drawer=!0,this.currentNode=s})}gotoDemo(){this.router.navigateByUrl("/demo")}gotoBpmn(){this.router.navigateByUrl("/bpmn")}gotoCustom(){this.router.navigateByUrl("/custom")}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(g.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-custom"]],viewQuery:function(t,s){if(1&t&&n.Gf(se,7),2&t){let i;n.iGM(i=n.CRH())&&(s.customDom=i.first)}},decls:12,vars:2,consts:[[1,"text"],[1,"text",3,"click"],[1,"flowCanvas"],[1,"container"],["custom",""],["ng-if","lf",3,"lf"]],template:function(t,s){1&t&&(n.TgZ(0,"p")(1,"span",0),n._uU(2,"\u81ea\u5b9a\u4e49\u8282\u70b9\u65b9\u5f0f"),n.qZA(),n.TgZ(3,"span",1),n.NdJ("click",function(){return s.gotoBpmn()}),n._uU(4,"goto bpmn"),n.qZA(),n.TgZ(5,"span",1),n.NdJ("click",function(){return s.gotoCustom()}),n._uU(6,"goto custom"),n.qZA()(),n.TgZ(7,"div",2),n._UZ(8,"div",3,4)(10,"app-custom-node-panel",5)(11,"app-bpnm-data-panel",5),n.qZA()),2&t&&(n.xp6(10),n.Q6J("lf",s.lf),n.xp6(1),n.Q6J("lf",s.lf))},dependencies:[w.N,oe],styles:[".flowCanvas[_ngcontent-%COMP%]{position:relative;width:100%;margin:0;display:flex}.flowCanvas[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-grow:1;border:0px solid #ababab;overflow:hidden}.text[_ngcontent-%COMP%]{margin:0 20px;font-size:weight;cursor:pointer}"]}),o})()}];let re=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[y.ez,g.Bz.forChild(ie),g.Bz]}),o})();var ue=c(4466);let le=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[ue.m,re]}),o})()}}]);