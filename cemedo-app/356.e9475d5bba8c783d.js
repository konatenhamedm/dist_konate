"use strict";(self.webpackChunkcemedoApp=self.webpackChunkcemedoApp||[]).push([[356,422,199,5822,3923,548],{80422:(B,r,a)=>{a.d(r,{p:()=>b,L:()=>k});var e=a(5e3),s=a(41777),c=a(69808),p=a(59783),g=a(25787);const _=function(t,i){return{"pi-minus":t,"pi-plus":i}};function f(t,i){if(1&t&&e._UZ(0,"span",9),2&t){const n=e.oxw(2);e.Q6J("ngClass",e.WLB(1,_,!n.collapsed,n.collapsed))}}function u(t,i){1&t&&e.GkF(0)}function h(t,i){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"a",7),e.NdJ("click",function(o){return e.CHM(n),e.oxw().toggle(o)})("keydown.enter",function(o){return e.CHM(n),e.oxw().toggle(o)}),e.YNc(2,f,1,4,"span",8),e.YNc(3,u,1,0,"ng-container",6),e.qZA(),e.BQk()}if(2&t){const n=e.oxw(),l=e.MAs(4);e.xp6(1),e.uIk("aria-controls",n.id+"-content")("aria-expanded",!n.collapsed),e.xp6(1),e.Q6J("ngIf",n.toggleable),e.xp6(1),e.Q6J("ngTemplateOutlet",l)}}function m(t,i){1&t&&e.GkF(0)}function T(t,i){if(1&t&&(e.TgZ(0,"span",10),e._uU(1),e.qZA(),e.Hsn(2,1),e.YNc(3,m,1,0,"ng-container",6)),2&t){const n=e.oxw();e.xp6(1),e.Oqu(n.legend),e.xp6(2),e.Q6J("ngTemplateOutlet",n.headerTemplate)}}function C(t,i){1&t&&e.GkF(0)}const v=["*",[["p-header"]]],F=function(t){return{"p-fieldset p-component":!0,"p-fieldset-toggleable":t}},x=function(t){return{transitionParams:t,height:"0"}},y=function(t){return{value:"hidden",params:t}},E=function(t){return{transitionParams:t,height:"*"}},A=function(t){return{value:"visible",params:t}},M=["*","p-header"];let O=0,b=(()=>{class t{constructor(n){this.el=n,this.collapsed=!1,this.collapsedChange=new e.vpe,this.onBeforeToggle=new e.vpe,this.onAfterToggle=new e.vpe,this.transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)",this.id="p-fieldset-"+O++}ngAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"header":this.headerTemplate=n.template;break;case"content":this.contentTemplate=n.template}})}toggle(n){if(this.animating)return!1;this.animating=!0,this.onBeforeToggle.emit({originalEvent:n,collapsed:this.collapsed}),this.collapsed?this.expand(n):this.collapse(n),this.onAfterToggle.emit({originalEvent:n,collapsed:this.collapsed}),n.preventDefault()}expand(n){this.collapsed=!1,this.collapsedChange.emit(this.collapsed)}collapse(n){this.collapsed=!0,this.collapsedChange.emit(this.collapsed)}getBlockableElement(){return this.el.nativeElement.children[0]}onToggleDone(){this.animating=!1}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq))},t.\u0275cmp=e.Xpm({type:t,selectors:[["p-fieldset"]],contentQueries:function(n,l,o){if(1&n&&e.Suo(o,p.jx,4),2&n){let d;e.iGM(d=e.CRH())&&(l.templates=d)}},hostAttrs:[1,"p-element"],inputs:{legend:"legend",toggleable:"toggleable",collapsed:"collapsed",style:"style",styleClass:"styleClass",transitionOptions:"transitionOptions"},outputs:{collapsedChange:"collapsedChange",onBeforeToggle:"onBeforeToggle",onAfterToggle:"onAfterToggle"},ngContentSelectors:M,decls:9,vars:22,consts:[[3,"ngClass","ngStyle"],[1,"p-fieldset-legend"],[4,"ngIf","ngIfElse"],["legendContent",""],["role","region",1,"p-toggleable-content"],[1,"p-fieldset-content"],[4,"ngTemplateOutlet"],["tabindex","0","pRipple","",3,"click","keydown.enter"],["class","p-fieldset-toggler pi",3,"ngClass",4,"ngIf"],[1,"p-fieldset-toggler","pi",3,"ngClass"],[1,"p-fieldset-legend-text"]],template:function(n,l){if(1&n&&(e.F$t(v),e.TgZ(0,"fieldset",0),e.TgZ(1,"legend",1),e.YNc(2,h,4,4,"ng-container",2),e.YNc(3,T,4,2,"ng-template",null,3,e.W1O),e.qZA(),e.TgZ(5,"div",4),e.NdJ("@fieldsetContent.done",function(){return l.onToggleDone()}),e.TgZ(6,"div",5),e.Hsn(7),e.YNc(8,C,1,0,"ng-container",6),e.qZA(),e.qZA(),e.qZA()),2&n){const o=e.MAs(4);e.Tol(l.styleClass),e.Q6J("ngClass",e.VKq(12,F,l.toggleable))("ngStyle",l.style),e.uIk("id",l.id),e.xp6(2),e.Q6J("ngIf",l.toggleable)("ngIfElse",o),e.xp6(3),e.Q6J("@fieldsetContent",l.collapsed?e.VKq(16,y,e.VKq(14,x,l.transitionOptions)):e.VKq(20,A,e.VKq(18,E,l.animating?l.transitionOptions:"0ms"))),e.uIk("id",l.id+"-content")("aria-labelledby",l.id)("aria-hidden",l.collapsed),e.xp6(3),e.Q6J("ngTemplateOutlet",l.contentTemplate)}},directives:[c.mk,c.PC,c.O5,c.tP,g.H],styles:[".p-fieldset-legend>a,.p-fieldset-legend>span{display:flex;align-items:center;justify-content:center}.p-fieldset-toggleable .p-fieldset-legend a{cursor:pointer;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-fieldset-legend-text{line-height:1}\n"],encapsulation:2,data:{animation:[(0,s.X$)("fieldsetContent",[(0,s.SB)("hidden",(0,s.oB)({height:"0",overflow:"hidden"})),(0,s.SB)("visible",(0,s.oB)({height:"*"})),(0,s.eR)("visible <=> hidden",[(0,s.oB)({overflow:"hidden"}),(0,s.jt)("{{transitionParams}}")]),(0,s.eR)("void => *",(0,s.jt)(0))])]},changeDetection:0}),t})(),k=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,g.T],p.m8]}),t})()}}]);