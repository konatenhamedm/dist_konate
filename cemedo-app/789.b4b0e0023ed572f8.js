"use strict";(self.webpackChunkcemedoApp=self.webpackChunkcemedoApp||[]).push([[789],{72789:(kt,T,i)=>{i.r(T),i.d(T,{PatientModule:()=>Vt});var A=i(69808),P=i(44841),h=i(94829),p=i(40520),b=i(20776),q=i(25245),v=i(47423),I=i(57261),F=i(67322),N=i(53251),f=i(42115),M=i(86856),J=i(74107),E=i(77446),D=i(77531),w=i(87238),O=i(79814),V=i(92181),k=i(86087),L=i(26688),S=i(32075),c=i(48966),r=i(93075),C=i(64383),j=i(9224),B=i(30020),g=i(91083),H=i(94327),Y=i(53583),t=(i(12983),i(5e3));let u=(()=>{class n{constructor(e){this.httpPat=e,this.config="http://38.242.229.12:80/assures/patient/",this.config4="http://38.242.229.12:80/assures/",this.config2="http://38.242.229.12:80/ordonnances",this.config3="http://38.242.229.12:80/page_carnet_santes"}recupererPatient(){return this.httpPat.get(this.config+"all",{headers:new p.WM({"Content-Type":"application/json"})})}enregistrerPatient(e){return this.httpPat.post(this.config+"create",e,{headers:new p.WM({"Content-Type":"application/json"})})}recupererPatientById(e){return this.httpPat.get(this.config4+"getOne/"+e,{headers:new p.WM({"Content-Type":"application/json"})})}supprimerPatient(e){return this.httpPat.delete(this.config+"/"+e)}recupererOrdonnance(){return this.httpPat.get(this.config2,{headers:new p.WM({"Content-Type":"application/json"})})}enregistrerOrdonnance(e){return this.httpPat.post(this.config2,e,{headers:new p.WM({"Content-Type":"application/json"})})}recupererOrdonnanceById(e){return this.httpPat.get(this.config2+"/"+e,{headers:new p.WM({"Content-Type":"application/json"})})}supprimerOrdonnance(e){this.httpPat.delete(this.config2+"/"+e)}getCarnetSante(){return this.httpPat.get(this.config3,{headers:new p.WM({"Content-Type":"application/json"})})}sendCarnetSante(e){return this.httpPat.post(this.config3,e,{headers:new p.WM({"Content-Type":"application/json"})})}getCanetSanteById(e){return this.httpPat.get(this.config3+"/"+e,{headers:new p.WM({"Content-Type":"application/json"})})}deletePageCarnetSante(e){this.httpPat.delete(this.config3+"/"+e)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(p.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var m=i(59783),U=i(41299),_=i(44534),d=i(44255),x=i(40845),y=i(25787),Q=i(4119),W=i(31424);const R=["dt"];function X(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"button",14),t.NdJ("click",function(){return t.CHM(e),t.oxw().exportExcel()}),t.qZA(),t.TgZ(1,"button",15),t.NdJ("click",function(){return t.CHM(e),t.oxw().exportPdf()}),t.qZA()}}function G(n,a){1&n&&t._UZ(0,"button",17)}function z(n,a){1&n&&t.YNc(0,G,1,0,"ng-template",16)}function $(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",18),t.TgZ(1,"h5",19),t._uU(2,"Patients"),t.qZA(),t.TgZ(3,"span",20),t._UZ(4,"i",21),t.TgZ(5,"input",22),t.NdJ("input",function(l){t.CHM(e);const s=t.oxw();return t.MAs(9).filterGlobal(s.getEventValue(l),"contains")}),t.qZA(),t.qZA(),t.qZA()}}function K(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"input",45,46),t.NdJ("input",function(){return(0,t.CHM(e).filterCallback)(t.MAs(1).value)}),t.qZA()}2&n&&t.Q6J("value",a.$implicit)}function tt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"input",45,46),t.NdJ("input",function(){return(0,t.CHM(e).filterCallback)(t.MAs(1).value)}),t.qZA()}2&n&&t.Q6J("value",a.$implicit)}function et(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"input",45,46),t.NdJ("input",function(){return(0,t.CHM(e).filterCallback)(t.MAs(1).value)}),t.qZA()}2&n&&t.Q6J("value",a.$implicit)}function nt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"input",45,46),t.NdJ("input",function(){return(0,t.CHM(e).filterCallback)(t.MAs(1).value)}),t.qZA()}2&n&&t.Q6J("value",a.$implicit)}function ot(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"input",45,46),t.NdJ("input",function(){return(0,t.CHM(e).filterCallback)(t.MAs(1).value)}),t.qZA()}2&n&&t.Q6J("value",a.$implicit)}function it(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"input",45,46),t.NdJ("input",function(){return(0,t.CHM(e).filterCallback)(t.MAs(1).value)}),t.qZA()}2&n&&t.Q6J("value",a.$implicit)}function rt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"input",45,46),t.NdJ("input",function(){return(0,t.CHM(e).filterCallback)(t.MAs(1).value)}),t.qZA()}2&n&&t.Q6J("value",a.$implicit)}function at(n,a){1&n&&(t.TgZ(0,"tr"),t.TgZ(1,"th",23),t._uU(2,"Nom"),t._UZ(3,"p-sortIcon",24),t.qZA(),t.TgZ(4,"th",25),t._uU(5,"Prenom "),t._UZ(6,"p-sortIcon",26),t.qZA(),t.TgZ(7,"th",27),t._uU(8,"Genre "),t._UZ(9,"p-sortIcon",28),t.qZA(),t.TgZ(10,"th",29),t._uU(11,"Profession"),t._UZ(12,"p-sortIcon",30),t.qZA(),t.TgZ(13,"th",31),t._uU(14,"Ville"),t._UZ(15,"p-sortIcon",32),t.qZA(),t.TgZ(16,"th",33),t._uU(17,"T\xe9l\xe9phone 1"),t._UZ(18,"p-sortIcon",34),t.qZA(),t.TgZ(19,"th",35),t._uU(20,"T\xe9l\xe9phone 2"),t._UZ(21,"p-sortIcon",36),t.qZA(),t._UZ(22,"th"),t.qZA(),t.TgZ(23,"tr"),t.TgZ(24,"th"),t.TgZ(25,"p-columnFilter",37),t.YNc(26,K,2,1,"ng-template",38),t.qZA(),t.qZA(),t.TgZ(27,"th"),t.TgZ(28,"p-columnFilter",39),t.YNc(29,tt,2,1,"ng-template",38),t.qZA(),t.qZA(),t.TgZ(30,"th"),t.TgZ(31,"p-columnFilter",40),t.YNc(32,et,2,1,"ng-template",38),t.qZA(),t.qZA(),t.TgZ(33,"th"),t.TgZ(34,"p-columnFilter",41),t.YNc(35,nt,2,1,"ng-template",38),t.qZA(),t.qZA(),t.TgZ(36,"th"),t.TgZ(37,"p-columnFilter",42),t.YNc(38,ot,2,1,"ng-template",38),t.qZA(),t.qZA(),t.TgZ(39,"th"),t.TgZ(40,"p-columnFilter",43),t.YNc(41,it,2,1,"ng-template",38),t.qZA(),t.qZA(),t.TgZ(42,"th"),t.TgZ(43,"p-columnFilter",44),t.YNc(44,rt,2,1,"ng-template",38),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(25),t.Q6J("showClearButton",!1),t.xp6(3),t.Q6J("showClearButton",!1),t.xp6(3),t.Q6J("showClearButton",!1),t.xp6(3),t.Q6J("showClearButton",!1),t.xp6(3),t.Q6J("showClearButton",!1),t.xp6(3),t.Q6J("showClearButton",!1),t.xp6(3),t.Q6J("showClearButton",!1))}function lt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",47),t._uU(2),t.qZA(),t.TgZ(3,"td",47),t._uU(4),t.qZA(),t.TgZ(5,"td",47),t._uU(6),t.qZA(),t.TgZ(7,"td",47),t._uU(8),t.qZA(),t.TgZ(9,"td",47),t._uU(10),t.qZA(),t.TgZ(11,"td",47),t._uU(12),t.qZA(),t.TgZ(13,"td",47),t._uU(14),t.qZA(),t.TgZ(15,"td",48),t.TgZ(16,"button",49),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().detail(s.id)}),t.qZA(),t.qZA(),t.qZA()}if(2&n){const e=a.$implicit;t.xp6(2),t.Oqu(e.user.nom),t.xp6(2),t.Oqu(e.user.prenoms),t.xp6(2),t.Oqu(e.user.genre),t.xp6(2),t.Oqu(e.profession),t.xp6(2),t.Oqu(e.lieuHabitation),t.xp6(2),t.Oqu(e.user.tel),t.xp6(2),t.Oqu(e.user.tel2)}}function st(n,a){if(1&n&&(t.TgZ(0,"div",18),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" Total: ",e.patients?e.patients.length:0," patients ")}}const Zt=function(){return[]},pt=function(){return["user.nom","user.prenoms","lieuHabitation","profession"]};let dt=(()=>{class n{constructor(e,o,l){this.patientH=e,this.route=o,this.primeNgConfig=l,this.displayedColumns=["nom","prenoms","genre","profession","lieuHabitation","tel","tel2","edit"],this.patients=[],this.dragdrop=!0,this.unlockedCustomers=[],this.lockedCustomers=[],this.loading=!0,this.exportColumns=[],this.doctor=[{age:25},{age:40},{age:28}]}ngOnInit(){this.patientH.recupererPatient().subscribe({next:e=>{this.posts=e.data?e:[],this.patients=this.posts.data,this.loading=!1},error:e=>{},complete:()=>{}}),this.primeNgConfig.setTranslation({monthNames:["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Ao\xfbt","Septembre","Octobre","Novembre","Decembre"],dayNamesShort:["Dim.","Lun.","Mar.","Mer.","Jeu.","Ven.","Sam."],startsWith:"Commence par",contains:"Contient",notContains:"Ne contient pas",endsWith:"Fini par",equals:"Egale \xe0",notEquals:"diff\xe9rent de",noFilter:"Pas de filtre"})}detail(e){this.route.navigate(["admin/patient/detail",e])}supprimer(e){console.log(e),1==confirm("Voullez-vous Vraiment Supprimer ce Patient?")&&this.patientH.supprimerPatient(e).subscribe({next:l=>{},error:l=>{}})}applyFilter(e){this.patient.filter=e.target.value.trim().toLowerCase()}saveAsExcelFile(e,o){const Z=new Blob([e],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});H(Z,o+"_.xlsx")}applyFilterGlobal(e,o){this.dt.filterGlobal(e.target.value,o)}getEventValue(e){return e.target.value}toggleLock(e,o,l){o?(this.lockedCustomers=this.lockedCustomers.filter((s,Z)=>Z!==l),this.unlockedCustomers.push(e)):(this.unlockedCustomers=this.unlockedCustomers.filter((s,Z)=>Z!==l),this.lockedCustomers.push(e)),this.unlockedCustomers.sort((s,Z)=>s.id<Z.id?-1:1)}exportPdf(){const e=new Y.jsPDF("portrait","px","a4");e.autoTable({head:this.exportColumns,body:this.patients}),e.save("rapport-patient.pdf")}exportExcel(){i.e(574).then(i.bind(i,80574)).then(e=>{const l={Sheets:{data:e.utils.json_to_sheet(this.patients)},SheetNames:["data"]},s=e.write(l,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(s,"rapport-patient")})}urlActif(){return this.route.url.includes("/reception/patient/liste")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u),t.Y36(g.F0),t.Y36(m.b4))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-patient-view"]],viewQuery:function(e,o){if(1&e&&t.Gf(R,5),2&e){let l;t.iGM(l=t.CRH())&&(o.dt=l.first)}},decls:14,vars:11,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"card"],["styleClass","mb-4"],["pTemplate","left"],[4,"ngIf"],["scrollHeight","400px","styleClass","p-datatable-gridlines","selectionMode","multiple",3,"value","scrollable","globalFilterFields","loading","filterDelay"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["type","button","pButton","","pRipple","","icon","pi pi-file-excel","pTooltip","XLS","tooltipPosition","bottom",1,"p-button-success","mr-2",3,"click"],["type","button","pButton","","pRipple","","icon","pi pi-file-pdf","pTooltip","PDF","tooltipPosition","bottom",1,"p-button-warning","mr-2",3,"click"],["pTemplate","right"],["pButton","","pRipple","","label","Cr\xe9er un patient","icon","pi pi-plus",1,"p-button-help"],[1,"flex","align-items-center","justify-content-between"],[1,"m-0"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Rechercher...",3,"input"],["pSortableColumn","nom"],["field","nom"],["pSortableColumn","prenoms"],["field","prenoms"],["pSortableColumn","genre"],["field","genre"],["pSortableColumn","profession"],["field","profession"],["pSortableColumn","lieuHabitation"],["field","lieuHabitation"],["pSortableColumn","tel"],["field","tel"],["pSortableColumn","tel2"],["field","tel2"],["type","text","field","nom","matchMode","contains","pTooltip","Options de filtrage",3,"showClearButton"],["pTemplate","filter"],["type","text","field","prenoms","matchMode","contains","pTooltip","Options de filtrage",3,"showClearButton"],["type","text","field","genre","matchMode","contains","pTooltip","Options de filtrage",3,"showClearButton"],["type","text","field","profession","matchMode","contains","pTooltip","Options de filtrage",3,"showClearButton"],["type","text","field","lieuHabitation","matchMode","contains","pTooltip","Options de filtrage",3,"showClearButton"],["type","text","field","tel","matchMode","contains","pTooltip","Options de filtrage",3,"showClearButton"],["type","text","field","tel2","matchMode","contains","pTooltip","Options de filtrage",3,"showClearButton"],["type","text","maxlength","20","pInputText","",1,"p-2","border",3,"value","input"],["valeur",""],[2,"min-width","200px"],[2,"flex","0 0 4rem"],["pButton","","pRipple","","type","button","icon","pi pi-angle-right",1,"p-button-rounded","p-button-text",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"app-breadcrumb",3),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"p-toolbar",5),t.YNc(6,X,2,0,"ng-template",6),t.YNc(7,z,1,0,void 0,7),t.qZA(),t.TgZ(8,"p-table",8,9),t.YNc(10,$,6,0,"ng-template",10),t.YNc(11,at,45,7,"ng-template",11),t.YNc(12,lt,17,7,"ng-template",12),t.YNc(13,st,2,1,"ng-template",13),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("title","Patients")("items",t.DdM(9,Zt))("active_item","patient"),t.xp6(4),t.Q6J("ngIf",o.urlActif()),t.xp6(1),t.Q6J("value",o.patients)("scrollable",!0)("globalFilterFields",t.DdM(10,pt))("loading",o.loading)("filterDelay",0))},directives:[U.L,_.o,m.jx,A.O5,d.iA,x.Hq,y.H,Q.u,W.o,d.lQ,d.fz,d.xl],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),n})();class gt{}const ut=function(){return[]};let mt=(()=>{class n{constructor(e,o){this.patService=e,this.routeParams=o,this.users=new gt,this.doughnutChartLabels=["Chat","Appel T\xe9l\xe9phonique","Appel Vid\xe9o"],this.doughnutChartData=[45,50,5],this.doughnutChartLegend=!1,this.doughnutChartColors=[{backgroundColor:["#735A84","#E76412","#9BC311"]}],this.doughnutChartType="doughnut",this.doughnutChartOptions={animation:!1,responsive:!0}}ngOnInit(){this.chart1(),this.patService.recupererPatientById(this.routeParams.snapshot.params.id).subscribe({next:o=>{this.md1=o.data?o:{},this.md2=this.md1.data,this.users=this.md2.user,this.ant=this.md2.antecedents,this.InfoPat="Mr."+this.users.nom+" "+this.users.prenoms,console.log(this.md2)},error:()=>{},complete:()=>{}})}chart1(){this.lineChartOptions={series:[{name:"Consultation \xe0 domicile",data:[70,200,80,180,170,105,210]},{name:"Appel T\xe9l\xe9phonique",data:[80,250,30,120,260,100,180,30,120,260,100,180]},{name:"Appel Vid\xe9o",data:[85,130,89,225,85,190,190,30,120,260,102,180]},{name:"Chat",data:[89,140,86,225,80,192,120,30,120,260,100,180]},{name:"Hospitalisation \xe0 domicile",data:[87,150,85,225,80,170,120,30,120,260,101,180]}],chart:{height:350,type:"line",foreColor:"#9aa0ac",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!1}},colors:["#A5A5A5","#875692","#4CB5AC","#6C63FF","#475C7A"],stroke:{curve:"smooth"},grid:{row:{colors:["transparent","transparent"],opacity:.5}},markers:{size:3},xaxis:{categories:["Jan","F\xe9v","Mar","Avr","Mai","Jui","Juil","Ao\xfb","Sep","Oct","Nov","D\xe9c"],title:{text:"2022"}},yaxis:{title:{text:"Patients"}},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5},tooltip:{theme:"dark",marker:{show:!0},x:{show:!0}}}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u),t.Y36(g.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-patient-detail"]],decls:410,vars:33,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"surface-ground","px-4","py-5","md:px-6","lg:px-8"],[1,"grid"],[1,"col-12","md:col-7","lg:col-7"],[1,"surface-card","shadow-2","p-3","border-round"],[1,"header"],[1,"body"],[1,"recent-report__chart"],[3,"series","chart","xaxis","stroke","colors","dataLabels","legend","tooltip","markers","grid","yaxis","title","fill"],[1,"col-12","md:col-5","lg:col-5"],[1,"col-12","md:col-12","lg:col-12"],[1,"tx-primary","m-b-10"],[1,"row"],[1,"col-4"],[1,"font-14"],[1,"progress","shadow-style"],["role","progressbar","aria-valuenow","74","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","l-bg-orange","width-per-74"],["role","progressbar","aria-valuenow","70","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","l-bg-red","width-per-70"],["role","progressbar","aria-valuenow","55","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","l-bg-cyan","width-per-55"],["role","progressbar","aria-valuenow","74","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","l-bg-green","width-per-74"],[1,"font-weight-light","col-orange"],[1,"col-md-12","col-xl-12"],[1,"col-md-4"],[1,"progress-list","m-b-10"],[1,"details"],[1,"title"],[1,"col-md-2"],[1,"col-md-6","mt-3"],["baseChart","","chartType","doughnut",1,"chart",3,"data","labels","options","legend","colors"],[1,"country-chart"],[1,"d-flex","justify-content-between","mx-xl-5","mt-3"],[1,"chart-note"],[1,"dot","dot-product","bg-green"],[1,"mb-0"],[1,"dot","dot-product","bg-orange"],[1,"dot","dot-product","bg-purple"],[1,"col-12","md:col-4","lg:col-4"],[1,"tableBody"],[1,"table-responsive"],["id","support_table",1,"table","display","product-overview","mb-30"]],template:function(e,o){1&e&&(t.TgZ(0,"section",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"app-breadcrumb",3),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"div",8),t.TgZ(9,"h2"),t._uU(10,"Rapport sur le patient"),t.qZA(),t.qZA(),t.TgZ(11,"div",9),t.TgZ(12,"div",10),t._UZ(13,"apx-chart",11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(14,"div",12),t.TgZ(15,"div",13),t.TgZ(16,"div",7),t.TgZ(17,"h5",14),t._uU(18,"Chats"),t.qZA(),t.TgZ(19,"div",15),t.TgZ(20,"div",16),t.TgZ(21,"label",17),t._uU(22,"Ajourd'hui"),t.qZA(),t.TgZ(23,"p"),t._uU(24,"105"),t.qZA(),t.qZA(),t.TgZ(25,"div",16),t.TgZ(26,"label",17),t._uU(27,"Cette Semaine"),t.qZA(),t.TgZ(28,"p"),t._uU(29,"825"),t.qZA(),t.qZA(),t.TgZ(30,"div",16),t.TgZ(31,"label",17),t._uU(32,"Ce mois-ci"),t.qZA(),t.TgZ(33,"p"),t._uU(34,"227"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(35,"div",18),t.TgZ(36,"div",19),t._uU(37,"74%"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(38,"div",13),t.TgZ(39,"div",7),t.TgZ(40,"h5",14),t._uU(41,"Appel Vid\xe9o"),t.qZA(),t.TgZ(42,"div",15),t.TgZ(43,"div",16),t.TgZ(44,"label",17),t._uU(45,"Ajourd'hui"),t.qZA(),t.TgZ(46,"p"),t._uU(47,"105"),t.qZA(),t.qZA(),t.TgZ(48,"div",16),t.TgZ(49,"label",17),t._uU(50,"Cette Semaine"),t.qZA(),t.TgZ(51,"p"),t._uU(52,"825"),t.qZA(),t.qZA(),t.TgZ(53,"div",16),t.TgZ(54,"label",17),t._uU(55,"Ce mois-ci"),t.qZA(),t.TgZ(56,"p"),t._uU(57,"227"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(58,"div",18),t.TgZ(59,"div",20),t._uU(60,"70%"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(61,"div",13),t.TgZ(62,"div",7),t.TgZ(63,"h5",14),t._uU(64,"Appel T\xe9l\xe9phonique"),t.qZA(),t.TgZ(65,"div",15),t.TgZ(66,"div",16),t.TgZ(67,"label",17),t._uU(68,"Ajourd'hui"),t.qZA(),t.TgZ(69,"p"),t._uU(70,"105"),t.qZA(),t.qZA(),t.TgZ(71,"div",16),t.TgZ(72,"label",17),t._uU(73,"Cette Semaine"),t.qZA(),t.TgZ(74,"p"),t._uU(75,"825"),t.qZA(),t.qZA(),t.TgZ(76,"div",16),t.TgZ(77,"label",17),t._uU(78,"Ce mois-ci"),t.qZA(),t.TgZ(79,"p"),t._uU(80,"227"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(81,"div",18),t.TgZ(82,"div",21),t._uU(83,"55%"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(84,"div",13),t.TgZ(85,"div",7),t.TgZ(86,"h5",14),t._uU(87,"Comsultation \xe0 domicile"),t.qZA(),t.TgZ(88,"div",15),t.TgZ(89,"div",16),t.TgZ(90,"label",17),t._uU(91,"Ajourd'hui"),t.qZA(),t.TgZ(92,"p"),t._uU(93,"105"),t.qZA(),t.qZA(),t.TgZ(94,"div",16),t.TgZ(95,"label",17),t._uU(96,"Cette Semaine"),t.qZA(),t.TgZ(97,"p"),t._uU(98,"825"),t.qZA(),t.qZA(),t.TgZ(99,"div",16),t.TgZ(100,"label",17),t._uU(101,"Ce mois-ci"),t.qZA(),t.TgZ(102,"p"),t._uU(103,"227"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(104,"div",18),t.TgZ(105,"div",22),t._uU(106,"74%"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(107,"div",4),t.TgZ(108,"div",5),t.TgZ(109,"div",13),t.TgZ(110,"div",7),t.TgZ(111,"div",8),t.TgZ(112,"h2",23),t._uU(113,"Informations"),t.qZA(),t.qZA(),t.TgZ(114,"div",9),t.TgZ(115,"div",15),t.TgZ(116,"div",24),t.TgZ(117,"div",15),t.TgZ(118,"div",25),t.TgZ(119,"div",26),t.TgZ(120,"div",27),t.TgZ(121,"div",28),t._uU(122),t.qZA(),t.qZA(),t.qZA(),t.TgZ(123,"div",26),t.TgZ(124,"div",27),t.TgZ(125,"div",28),t._uU(126),t.qZA(),t.qZA(),t.qZA(),t.TgZ(127,"div",26),t.TgZ(128,"div",27),t.TgZ(129,"div",28),t._uU(130),t.qZA(),t.qZA(),t.qZA(),t.TgZ(131,"div",26),t.TgZ(132,"div",27),t.TgZ(133,"div",28),t._uU(134),t.qZA(),t.qZA(),t.qZA(),t.TgZ(135,"div",26),t.TgZ(136,"div",27),t.TgZ(137,"div",28),t._uU(138),t.qZA(),t.qZA(),t.qZA(),t.TgZ(139,"div",26),t.TgZ(140,"div",27),t.TgZ(141,"div",28),t._uU(142),t.qZA(),t.qZA(),t.qZA(),t.TgZ(143,"div",26),t.TgZ(144,"div",27),t.TgZ(145,"div",28),t._uU(146),t.qZA(),t.qZA(),t.qZA(),t.TgZ(147,"div",26),t.TgZ(148,"div",27),t.TgZ(149,"div",28),t._uU(150),t.qZA(),t.qZA(),t.qZA(),t.TgZ(151,"div",26),t.TgZ(152,"div",27),t.TgZ(153,"div",28),t._uU(154),t.qZA(),t.qZA(),t.qZA(),t.TgZ(155,"div",26),t.TgZ(156,"div",27),t.TgZ(157,"div",28),t._uU(158),t.qZA(),t.qZA(),t.qZA(),t.TgZ(159,"div",26),t.TgZ(160,"div",27),t.TgZ(161,"div",28),t._uU(162),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(163,"div",29),t.TgZ(164,"div",30),t.TgZ(165,"div",10),t._UZ(166,"canvas",31),t.qZA(),t.TgZ(167,"div",32),t.TgZ(168,"div",33),t.TgZ(169,"div",34),t._UZ(170,"span",35),t.TgZ(171,"span"),t._uU(172,"Chat"),t.qZA(),t.qZA(),t.TgZ(173,"p",36),t._uU(174,"30,289 FCFA"),t.qZA(),t.qZA(),t.TgZ(175,"div",33),t.TgZ(176,"div",34),t._UZ(177,"span",37),t.TgZ(178,"span"),t._uU(179,"Appel T\xe9l\xe9phonique"),t.qZA(),t.qZA(),t.TgZ(180,"p",36),t._uU(181,"525,968 FCFA"),t.qZA(),t.qZA(),t.TgZ(182,"div",33),t.TgZ(183,"div",34),t._UZ(184,"span",38),t.TgZ(185,"span"),t._uU(186,"Appel Vid\xe9o"),t.qZA(),t.qZA(),t.TgZ(187,"p",36),t._uU(188,"45,278 FCFA"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(189,"div",4),t.TgZ(190,"div",5),t.TgZ(191,"div",39),t.TgZ(192,"div",7),t.TgZ(193,"div",8),t.TgZ(194,"h2"),t._uU(195,"Appel T\xe9l\xe9phonique"),t.qZA(),t.qZA(),t.TgZ(196,"div",40),t.TgZ(197,"div",41),t.TgZ(198,"table",42),t.TgZ(199,"thead"),t.TgZ(200,"tr"),t.TgZ(201,"th"),t._uU(202,"ID"),t.qZA(),t.TgZ(203,"th"),t._uU(204,"Nom du medecin"),t.qZA(),t.TgZ(205,"th"),t._uU(206,"date"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(207,"tbody"),t.TgZ(208,"tr"),t.TgZ(209,"td"),t._uU(210,"1"),t.qZA(),t.TgZ(211,"td"),t._uU(212,"Dr.Kenny Josh"),t.qZA(),t.TgZ(213,"td"),t._uU(214,"27/05/2016"),t.qZA(),t.qZA(),t.TgZ(215,"tr"),t.TgZ(216,"td"),t._uU(217,"2"),t.qZA(),t.TgZ(218,"td"),t._uU(219,"Dr. Mark"),t.qZA(),t.TgZ(220,"td"),t._uU(221,"26/05/2017"),t.qZA(),t.qZA(),t.TgZ(222,"tr"),t.TgZ(223,"td"),t._uU(224,"3"),t.qZA(),t.TgZ(225,"td"),t._uU(226,"Dr.Cinnabar"),t.qZA(),t.TgZ(227,"td"),t._uU(228,"21/05/2016"),t.qZA(),t.qZA(),t.TgZ(229,"tr"),t.TgZ(230,"td"),t._uU(231,"4"),t.qZA(),t.TgZ(232,"td"),t._uU(233,"Dr.Felix "),t.qZA(),t.TgZ(234,"td"),t._uU(235,"20/04/2016"),t.qZA(),t.qZA(),t.TgZ(236,"tr"),t.TgZ(237,"td"),t._uU(238,"5"),t.qZA(),t.TgZ(239,"td"),t._uU(240,"Dr.Beryl"),t.qZA(),t.TgZ(241,"td"),t._uU(242,"24/05/2016"),t.qZA(),t.qZA(),t.TgZ(243,"tr"),t.TgZ(244,"td"),t._uU(245,"6"),t.qZA(),t.TgZ(246,"td"),t._uU(247,"Dr.Joshep"),t.qZA(),t.TgZ(248,"td"),t._uU(249,"22/05/2016"),t.qZA(),t.qZA(),t.TgZ(250,"tr"),t.TgZ(251,"td"),t._uU(252,"7"),t.qZA(),t.TgZ(253,"td"),t._uU(254,"Dr.Jayesh"),t.qZA(),t.TgZ(255,"td"),t._uU(256,"18/06/2016"),t.qZA(),t.qZA(),t.TgZ(257,"tr"),t.TgZ(258,"td"),t._uU(259,"8"),t.qZA(),t.TgZ(260,"td"),t._uU(261,"Dr.Sharma"),t.qZA(),t.TgZ(262,"td"),t._uU(263,"17/05/2016"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(264,"div",39),t.TgZ(265,"div",7),t.TgZ(266,"div",8),t.TgZ(267,"h2"),t._uU(268,"Consultation \xe0 domicile"),t.qZA(),t.qZA(),t.TgZ(269,"div",40),t.TgZ(270,"div",41),t.TgZ(271,"table",42),t.TgZ(272,"thead"),t.TgZ(273,"tr"),t.TgZ(274,"th"),t._uU(275,"ID"),t.qZA(),t.TgZ(276,"th"),t._uU(277,"Nom du medecin"),t.qZA(),t.TgZ(278,"th"),t._uU(279,"date"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(280,"tbody"),t.TgZ(281,"tr"),t.TgZ(282,"td"),t._uU(283,"1"),t.qZA(),t.TgZ(284,"td"),t._uU(285,"Dr.Kenny Josh"),t.qZA(),t.TgZ(286,"td"),t._uU(287,"27/05/2016"),t.qZA(),t.qZA(),t.TgZ(288,"tr"),t.TgZ(289,"td"),t._uU(290,"2"),t.qZA(),t.TgZ(291,"td"),t._uU(292,"Dr. Mark"),t.qZA(),t.TgZ(293,"td"),t._uU(294,"26/05/2017"),t.qZA(),t.qZA(),t.TgZ(295,"tr"),t.TgZ(296,"td"),t._uU(297,"3"),t.qZA(),t.TgZ(298,"td"),t._uU(299,"Dr.Cinnabar"),t.qZA(),t.TgZ(300,"td"),t._uU(301,"21/05/2016"),t.qZA(),t.qZA(),t.TgZ(302,"tr"),t.TgZ(303,"td"),t._uU(304,"4"),t.qZA(),t.TgZ(305,"td"),t._uU(306,"Dr.Felix "),t.qZA(),t.TgZ(307,"td"),t._uU(308,"20/04/2016"),t.qZA(),t.qZA(),t.TgZ(309,"tr"),t.TgZ(310,"td"),t._uU(311,"5"),t.qZA(),t.TgZ(312,"td"),t._uU(313,"Dr.Beryl"),t.qZA(),t.TgZ(314,"td"),t._uU(315,"24/05/2016"),t.qZA(),t.qZA(),t.TgZ(316,"tr"),t.TgZ(317,"td"),t._uU(318,"6"),t.qZA(),t.TgZ(319,"td"),t._uU(320,"Dr.Joshep"),t.qZA(),t.TgZ(321,"td"),t._uU(322,"22/05/2016"),t.qZA(),t.qZA(),t.TgZ(323,"tr"),t.TgZ(324,"td"),t._uU(325,"7"),t.qZA(),t.TgZ(326,"td"),t._uU(327,"Dr.Jayesh"),t.qZA(),t.TgZ(328,"td"),t._uU(329,"18/06/2016"),t.qZA(),t.qZA(),t.TgZ(330,"tr"),t.TgZ(331,"td"),t._uU(332,"8"),t.qZA(),t.TgZ(333,"td"),t._uU(334,"Dr.Sharma"),t.qZA(),t.TgZ(335,"td"),t._uU(336,"17/05/2016"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(337,"div",39),t.TgZ(338,"div",7),t.TgZ(339,"div",8),t.TgZ(340,"h2"),t._uU(341,"Appel Vid\xe9o"),t.qZA(),t.qZA(),t.TgZ(342,"div",40),t.TgZ(343,"div",41),t.TgZ(344,"table",42),t.TgZ(345,"thead"),t.TgZ(346,"tr"),t.TgZ(347,"th"),t._uU(348,"ID"),t.qZA(),t.TgZ(349,"th"),t._uU(350,"Nom du medecin"),t.qZA(),t.TgZ(351,"th"),t._uU(352,"date"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(353,"tbody"),t.TgZ(354,"tr"),t.TgZ(355,"td"),t._uU(356,"1"),t.qZA(),t.TgZ(357,"td"),t._uU(358,"Dr.Kenny Josh"),t.qZA(),t.TgZ(359,"td"),t._uU(360,"27/05/2016"),t.qZA(),t.qZA(),t.TgZ(361,"tr"),t.TgZ(362,"td"),t._uU(363,"2"),t.qZA(),t.TgZ(364,"td"),t._uU(365,"Dr. Mark"),t.qZA(),t.TgZ(366,"td"),t._uU(367,"26/05/2017"),t.qZA(),t.qZA(),t.TgZ(368,"tr"),t.TgZ(369,"td"),t._uU(370,"3"),t.qZA(),t.TgZ(371,"td"),t._uU(372,"Dr.Cinnabar"),t.qZA(),t.TgZ(373,"td"),t._uU(374,"21/05/2016"),t.qZA(),t.qZA(),t.TgZ(375,"tr"),t.TgZ(376,"td"),t._uU(377,"4"),t.qZA(),t.TgZ(378,"td"),t._uU(379,"Dr.Felix "),t.qZA(),t.TgZ(380,"td"),t._uU(381,"20/04/2016"),t.qZA(),t.qZA(),t.TgZ(382,"tr"),t.TgZ(383,"td"),t._uU(384,"5"),t.qZA(),t.TgZ(385,"td"),t._uU(386,"Dr.Beryl"),t.qZA(),t.TgZ(387,"td"),t._uU(388,"24/05/2016"),t.qZA(),t.qZA(),t.TgZ(389,"tr"),t.TgZ(390,"td"),t._uU(391,"6"),t.qZA(),t.TgZ(392,"td"),t._uU(393,"Dr.Joshep"),t.qZA(),t.TgZ(394,"td"),t._uU(395,"22/05/2016"),t.qZA(),t.qZA(),t.TgZ(396,"tr"),t.TgZ(397,"td"),t._uU(398,"7"),t.qZA(),t.TgZ(399,"td"),t._uU(400,"Dr.Jayesh"),t.qZA(),t.TgZ(401,"td"),t._uU(402,"18/06/2016"),t.qZA(),t.qZA(),t.TgZ(403,"tr"),t.TgZ(404,"td"),t._uU(405,"8"),t.qZA(),t.TgZ(406,"td"),t._uU(407,"Dr.Sharma"),t.qZA(),t.TgZ(408,"td"),t._uU(409,"17/05/2016"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("title","Patient")("items",t.DdM(32,ut))("active_item",o.InfoPat),t.xp6(10),t.Q6J("series",o.lineChartOptions.series)("chart",o.lineChartOptions.chart)("xaxis",o.lineChartOptions.xaxis)("stroke",o.lineChartOptions.stroke)("colors",o.lineChartOptions.colors)("dataLabels",o.lineChartOptions.dataLabels)("legend",o.lineChartOptions.legend)("tooltip",o.lineChartOptions.tooltip)("markers",o.lineChartOptions.markers)("grid",o.lineChartOptions.grid)("yaxis",o.lineChartOptions.yaxis)("title",o.lineChartOptions.title)("fill",o.lineChartOptions.fill),t.xp6(109),t.hij("Nom : ",o.users.nom," "),t.xp6(4),t.hij("Prenom : ",o.users.prenoms,""),t.xp6(4),t.hij("Genre :",o.users.genre," "),t.xp6(4),t.hij("Date de naissance : ",o.users.dateNaissance,""),t.xp6(4),t.hij("Residence :",o.md2.lieuHabitation,""),t.xp6(4),t.hij("Num\xe9ro de T\xe9l\xe9phone: ",o.users.tel," "),t.xp6(4),t.hij("E-mail : ",o.users.email,""),t.xp6(4),t.hij("Assurance : ",o.md2.assurance.libelle,""),t.xp6(4),t.hij("Taux d'assurance :",o.md2.tauxCouverture,""),t.xp6(4),t.hij("Num\xe9ro d'assurance : ",o.md2.numeroAssure," "),t.xp6(4),t.hij("Profession: ",o.md2.profession,""),t.xp6(4),t.Q6J("data",o.doughnutChartData)("labels",o.doughnutChartLabels)("options",o.doughnutChartOptions)("legend",o.doughnutChartLegend)("colors",o.doughnutChartColors))},directives:[U.L,f.x,h.jh],styles:[""]}),n})();class ct{}let Tt=(()=>{class n{constructor(e,o,l){this.medecinForm=e,this.medService=o,this.Msg=l,this.PatientForms=new r.cw({}),this.patient=new ct}ngOnInit(){this.PatientForms=this.medecinForm.group({active:[!0,[r.kI.required,r.kI.maxLength(10)]],assurance:["",[r.kI.required,r.kI.maxLength(10)]],createdAt:["",[r.kI.required,r.kI.maxLength(10)]],dateNaissance:["",[r.kI.required,r.kI.maxLength(10)]],email:["",[r.kI.required,r.kI.maxLength(30),r.kI.email]],genre:["",[r.kI.required,r.kI.maxLength(10)]],id:null,lieuHabitation:["",[r.kI.required,r.kI.maxLength(20)]],login:["",[r.kI.required,r.kI.maxLength(20)]],nom:["",[r.kI.required,r.kI.minLength(3)]],numeroAssure:["",[r.kI.required,r.kI.maxLength(10)]],password:["",[r.kI.required,r.kI.maxLength(8)]],prenoms:["",[r.kI.required,r.kI.maxLength(20)]],profession:["",[r.kI.required,r.kI.maxLength(20)]],role:["",[r.kI.required,r.kI.maxLength(20)]],tauxCouverture:[null,[r.kI.required,r.kI.maxLength(10)]],tel:["",[r.kI.required,r.kI.maxLength(15)]],tel2:["",[r.kI.required,r.kI.maxLength(10)]],fcmtoken:["",[r.kI.required,r.kI.maxLength(10)]],updatedAt:["",[r.kI.required,r.kI.maxLength(10)]],version:[null,[r.kI.required,r.kI.maxLength(10)]]})}sendData(){}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(u),t.Y36(C._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-patient-forms"]],decls:63,vars:2,consts:[["mat-dialog-title",""],[1,"mat-typography","e"],[1,"container"],[3,"formGroup"],[1,"row","mt-5"],[1,"col-md-4","col-lg-4","col-sm-12"],[1,"mb-3"],["type","text","formControlName","nom","placeholder","Nom",1,"form-control"],["type","text","formControlName","prenoms","placeholder","Pr\xe9nom",1,"form-control"],["type","text","formControlName","login","placeholder","Nom dutilisateur",1,"form-control"],[1,"row"],["type","text","formControlName","genre","placeholder","Genre",1,"form-control"],["type","date","formControlName","dateNaissance","placeholder","Date de naissance",1,"form-control"],["type","text","formControlName","lieuHabitation","placeholder","Ville",1,"form-control"],["type","text","formControlName","profession","placeholder","Profession",1,"form-control"],["type","text","formControlName","assurance","placeholder","Assurance",1,"form-control"],["type","number","formControlName","tauxCouverture","placeholder","Taux de couverture",1,"form-control"],[1,"col-md-12","col-lg-12","col-sm-12"],["type","text","formControlName","tel","placeholder","T\xe9l\xe9phone 1",1,"form-control"],["type","text","formControlName","tel2","placeholder","T\xe9l\xe9phone 2",1,"form-control"],["type","email","formControlName","email","placeholder","E-mail",1,"form-control"],["type","text","formControlName","numeroAssure","placeholder","Numero d'assurance",1,"form-control"],["type","text","formControlName","role","placeholder","Role",1,"form-control"],["type","password","formControlName","password","placeholder","Mot de passe",1,"form-control"],[1,"col-md-2","col-lg-2","col-sm-12"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"h2",0),t._uU(1,"nouveau patient"),t.qZA(),t.TgZ(2,"mat-dialog-content",1),t.TgZ(3,"div",2),t.TgZ(4,"form",3),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.TgZ(7,"div",6),t._UZ(8,"input",7),t.qZA(),t.qZA(),t.TgZ(9,"div",5),t.TgZ(10,"div",6),t._UZ(11,"input",8),t.qZA(),t.qZA(),t.TgZ(12,"div",5),t.TgZ(13,"div",6),t._UZ(14,"input",9),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",10),t.TgZ(16,"div",5),t.TgZ(17,"div",6),t._UZ(18,"input",11),t.qZA(),t.qZA(),t.TgZ(19,"div",5),t.TgZ(20,"div",6),t._UZ(21,"input",12),t.qZA(),t.qZA(),t.TgZ(22,"div",5),t.TgZ(23,"div",6),t._UZ(24,"input",13),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div",10),t.TgZ(26,"div",5),t.TgZ(27,"div",6),t._UZ(28,"input",14),t.qZA(),t.qZA(),t.TgZ(29,"div",5),t.TgZ(30,"div",6),t._UZ(31,"input",15),t.qZA(),t.qZA(),t.TgZ(32,"div",5),t.TgZ(33,"div",6),t._UZ(34,"input",16),t.qZA(),t.qZA(),t.qZA(),t.TgZ(35,"div",10),t.TgZ(36,"div",17),t.TgZ(37,"div",6),t._UZ(38,"input",18),t.qZA(),t.qZA(),t.qZA(),t.TgZ(39,"div",10),t.TgZ(40,"div",17),t.TgZ(41,"div",6),t._UZ(42,"input",19),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"div",10),t.TgZ(44,"div",17),t.TgZ(45,"div",6),t._UZ(46,"input",20),t.qZA(),t.qZA(),t.qZA(),t.TgZ(47,"div",10),t.TgZ(48,"div",5),t.TgZ(49,"div",6),t._UZ(50,"input",21),t.qZA(),t.qZA(),t.TgZ(51,"div",5),t.TgZ(52,"div",6),t._UZ(53,"input",22),t.qZA(),t.qZA(),t.TgZ(54,"div",5),t.TgZ(55,"div",6),t._UZ(56,"input",23),t.qZA(),t.qZA(),t.qZA(),t.TgZ(57,"div",10),t.TgZ(58,"div",24),t.TgZ(59,"button",25),t.NdJ("click",function(){return o.sendData()}),t._uU(60,"Enregistrer "),t.TgZ(61,"mat-icon"),t._uU(62,"done"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(4),t.Q6J("formGroup",o.PatientForms),t.xp6(55),t.Q6J("disabled",!o.PatientForms.valid))},directives:[c.uh,c.xY,r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.wV,v.lW,q.Hw],encapsulation:2}),n})(),At=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-patient-dossier"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"patient-dossier works!"),t.qZA())},styles:[""]}),n})();const vt=[{path:"dashboard",component:i(50477).o},{path:"liste",component:dt},{path:"detail/:id",component:mt},{path:"forms",component:Tt},{path:"ordonnance",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-ordonnance"]],decls:2,vars:0,template:function(e,o){1&e&&(t.TgZ(0,"p"),t._uU(1,"ordonnance works!"),t.qZA())},styles:[""]}),n})()},{path:"dossier",component:At},{path:"**",component:B.J}];let ft=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.Bz.forChild(vt)],g.Bz]}),n})();var Ct=i(15626),Ut=i(74297),_t=i(17773),xt=i(15315),yt=i(19114),Pt=i(86526),bt=i(14036),It=i(12145),Ft=i(42939),Nt=i(50330),Mt=i(48185),Jt=i(14776),Et=i(90512),Dt=i(7376),wt=i(67172),Ot=i(85708);let Vt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[u,m.ez,m.YP],imports:[[A.ez,h.m9,b.Ns.forRoot({echarts:()=>i.e(347).then(i.t.bind(i,13347,23))}),p.JF,Ot.m,P.Xd,q.Ps,S.p0,V.Tx,k.TU,v.ot,L.Hi,ft,f.X,I.ZX,F.lN,N.Nh,M.FA,J.LD,E.p9,D.c,w.AV,O.Fk,Ct.K,c.Is,C.Rh.forRoot({}),j.QW,r.UX,r.u5,Ut.d,d.U$,x.hJ,_t.EV,xt.S,yt.D,Pt.q4,bt.kW,It.WN,Ft.Gg,Nt.vI,Mt.q,Jt.JH,y.T,Et.C,Dt.x,wt.W6,_.V]]}),n})()}}]);