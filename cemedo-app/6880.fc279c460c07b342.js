"use strict";(self.webpackChunkcemedoApp=self.webpackChunkcemedoApp||[]).push([[6880,136,5082,4733,9720,9224,7564,901,5460,5977,5535,776,6312,1219,5640,1285,7428,6268],{56347:(p,l,n)=>{n.d(l,{$:()=>m,_:()=>h});var d=n(40520),s=n(5e3);class m{}let h=(()=>{class c{constructor(t){this.http=t,this.config="http://38.242.229.12/specialite/"}recupererSpecialite(){return this.http.get(this.config,{headers:new d.WM({"Content-Type":"application/json"})})}enregistrerSpecialite(t){return this.http.post(this.config+"create",t,{headers:new d.WM({"Content-Type":"application/json"})})}supprimerSpecialite(t){return this.http.get(this.config+"delete/"+t,{headers:new d.WM({"Content-Type":"application/json"})})}modifierSpecialite(t){return this.http.post(this.config+"update/"+t.id,t,{headers:new d.WM({"Content-Type":"application/json"})})}}return c.\u0275fac=function(t){return new(t||c)(s.LFG(d.eN))},c.\u0275prov=s.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},32761:(p,l,n)=>{n.d(l,{_:()=>h});var d=n(69808),s=n(45082),m=n(5e3);let h=(()=>{class c{}return c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=m.oAB({type:c}),c.\u0275inj=m.cJS({providers:[s.m],imports:[[d.ez]]}),c})()},45082:(p,l,n)=>{n.d(l,{m:()=>m});var d=n(5e3),s=n(40520);let m=(()=>{class h{constructor(o){this.http=o,this.config="http://38.242.229.12/"}recupererTypeEmploye(){return this.http.get(this.config+"typeEmployes/")}recupererGenre(){return this.http.get(this.config+"genre/")}}return h.\u0275fac=function(o){return new(o||h)(d.LFG(s.eN))},h.\u0275prov=d.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},9224:(p,l,n)=>{n.d(l,{QW:()=>C});var d=n(5e3),s=n(90508);let C=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=d.oAB({type:i}),i.\u0275inj=d.cJS({imports:[[s.BQ],s.BQ]}),i})()},20776:(p,l,n)=>{n.d(l,{Ns:()=>c});var d=n(5e3);const m=new d.OlP("NGX_ECHARTS_CONFIG");let c=(()=>{class o{static forRoot(a){return{ngModule:o,providers:[{provide:m,useValue:a}]}}static forChild(){return{ngModule:o}}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=d.oAB({type:o}),o.\u0275inj=d.cJS({imports:[[]]}),o})()}}]);