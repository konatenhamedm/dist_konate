"use strict";(self.webpackChunkcemedoApp=self.webpackChunkcemedoApp||[]).push([[477],{50477:(u,n,r)=>{r.d(n,{o:()=>h});var t=r(5e3),Z=r(41299),p=r(42115),l=r(47423);const d=["chart"],g=function(){return["Second"]};let h=(()=>{class i{constructor(){}ngOnInit(){this.chart1(),this.chart2(),this.chart3(),this.chart4(),this.chart5(),this.chart6(),this.chart7()}chart1(){this.areaChartOptions={series:[{name:"New Patients",data:[31,40,28,51,42,85,77]},{name:"Old Patients",data:[11,32,45,32,34,52,41]}],chart:{height:350,type:"area",toolbar:{show:!1},foreColor:"#9aa0ac"},colors:["#7D4988","#66BB6A"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},legend:{show:!0,position:"top",horizontalAlign:"center",offsetX:0,offsetY:0},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}}chart2(){this.radialChartOptions={series:[44,55,67],chart:{height:265,type:"radialBar"},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(a){return"249"}}}}},colors:["#ffc107","#3f51b5","#8bc34a"],labels:["Face TO Face","E-Consult","Available"]}}chart3(){this.restRateChartOptions={series:[{name:"appel vid\xe9o",data:[69,75,72,69,75,80,87,72,69,75,80,87]}],chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},foreColor:"#9aa0ac",toolbar:{show:!1}},colors:["#FCB939"],dataLabels:{enabled:!0},stroke:{curve:"smooth"},markers:{size:1},xaxis:{categories:["Jan","F\xe9v","Mar","Avr","Mai","Jui","Juil","Ao\xfb","Sep","Oct","Nov","Dec"],title:{text:"Weekday"}},yaxis:{title:{text:"Heart Rate"}},tooltip:{theme:"dark",marker:{show:!0},x:{show:!0}}}}chart4(){this.performanceRateChartOptions={series:[{name:"appel vid\xe9o",data:[113,120,130,120,125,119,126,130,120,125,119,126]}],chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},foreColor:"#9aa0ac",toolbar:{show:!1}},colors:["#545454"],dataLabels:{enabled:!0},stroke:{curve:"smooth"},markers:{size:1},xaxis:{categories:["Jan","F\xe9v","Mar","Avr","Mai","Jui","Juil","Ao\xfb","Sep","Oct","Nov","Dec"],title:{text:"2022"}},yaxis:{title:{text:"Heart Rate"}},tooltip:{theme:"dark",marker:{show:!0},x:{show:!0}}}}chart5(){this.restRateChartOptions2={series:[{name:"appel t\xe9l\xe9phonique",data:[69,75,72,69,75,80,87,72,69,75,80,87]}],chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},foreColor:"#9aa0ac",toolbar:{show:!1}},colors:["#FCB939"],dataLabels:{enabled:!0},stroke:{curve:"smooth"},markers:{size:1},xaxis:{categories:["Jan","F\xe9v","Mar","Avr","Mai","Jui","Juil","Ao\xfb","Sep","Oct","Nov","Dec"],title:{text:"2022"}},yaxis:{title:{text:"Heart Rate"}},tooltip:{theme:"dark",marker:{show:!0},x:{show:!0}}}}chart6(){this.restRateChartOptions3={series:[{name:"consultation \xe0 domicile",data:[69,75,72,69,75,80,87,72,69,75,80,87]}],chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},foreColor:"#9aa0ac",toolbar:{show:!1}},colors:["#FCB939"],dataLabels:{enabled:!0},stroke:{curve:"smooth"},markers:{size:1},xaxis:{categories:["Jan","F\xe9v","Mar","Avr","Mai","Jui","Juil","Ao\xfb","Sep","Oct","Nov","Dec"],title:{text:"2022"}},yaxis:{title:{text:"Heart Rate"}},tooltip:{theme:"dark",marker:{show:!0},x:{show:!0}}}}chart7(){this.performanceRateChartOptions2={series:[{name:"appel t\xe9l\xe9phonique",data:[113,120,130,120,125,119,126,130,120,125,119,126]}],chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},foreColor:"#9aa0ac",toolbar:{show:!1}},colors:["#545454"],dataLabels:{enabled:!0},stroke:{curve:"smooth"},markers:{size:1},xaxis:{categories:["Jan","F\xe9v","Mar","Avr","Mai","Jui","Juil","Ao\xfb","Sep","Oct","Nov","Dec"],title:{text:"2022"}},yaxis:{title:{text:"Heart Rate"}},tooltip:{theme:"dark",marker:{show:!0},x:{show:!0}}}}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-dashboard-patient"]],viewQuery:function(a,e){if(1&a&&t.Gf(d,5),2&a){let o;t.iGM(o=t.CRH())&&(e.chart=o.first)}},decls:239,vars:64,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"title","items","active_item"],[1,"surface-ground","px-4","py-5","md:px-6","lg:px-8"],[1,"grid"],[1,"col-12","md:col-6","lg:col-3"],[1,"surface-card","shadow-2","p-3","border-round"],[1,"flex","justify-content-between","mb-3"],[1,"block","text-500","font-medium","mb-3"],[1,"text-900","font-medium","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-blue-100","border-round",2,"width","2.5rem","height","2.5rem"],[1,"pi","pi-users","text-blue-500","text-xl"],[1,"text-green-500","font-medium"],[1,"text-500"],[1,"flex","align-items-center","justify-content-center","bg-orange-100","border-round",2,"width","2.5rem","height","2.5rem"],[1,"pi","pi-user-plus","text-orange-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-cyan-100","border-round",2,"width","2.5rem","height","2.5rem"],[1,"pi","pi-user-minus","text-cyan-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-purple-100","border-round",2,"width","2.5rem","height","2.5rem"],[1,"pi","pi-sync","text-purple-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-green-100","border-round",2,"width","2.5rem","height","2.5rem"],[1,"pi","pi-file-edit","text-blue-500","text-xl"],[1,"pi","pi-book","text-orange-500","text-xl"],[1,"pi","pi-inbox","text-cyan-500","text-xl"],[1,"pi","pi-comment","text-purple-500","text-xl"],[1,"col-12","md:col-6","lg:col-4"],[1,"float-start"],[1,"text-muted"],[1,"text-muted","font-12"],[1,"mb-5"],[3,"series","chart","xaxis","stroke","colors","dataLabels","legend","markers","grid","yaxis","tooltip","title"],[1,"header"],[1,"body"],[1,"table-responsive"],[1,"table","table-borderless","medicine-list"],[1,"fas","fa-tablets","pill-style"],[1,"text-end","w-25"],[1,"badge-outline"],[1,"fas","fa-capsules","pill-style"],[1,"fas","fa-syringe","pill-style"],[1,"fas","fa-pills","pill-style"],[1,"text-center","p-t-20"],["mat-stroked-button","","color","primary"]],template:function(a,e){1&a&&(t.TgZ(0,"section",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._UZ(3,"app-breadcrumb",3),t.qZA(),t.TgZ(4,"div",4),t.TgZ(5,"div",5),t.TgZ(6,"div",6),t.TgZ(7,"div",7),t.TgZ(8,"div",8),t.TgZ(9,"div"),t.TgZ(10,"span",9),t._uU(11,"Patients"),t.qZA(),t.TgZ(12,"div",10),t._uU(13,"300"),t.qZA(),t.qZA(),t.TgZ(14,"div",11),t._UZ(15,"i",12),t.qZA(),t.qZA(),t.TgZ(16,"span",13),t._uU(17,"100% "),t.qZA(),t.TgZ(18,"span",14),t._uU(19,"des patients"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(20,"div",6),t.TgZ(21,"div",7),t.TgZ(22,"div",8),t.TgZ(23,"div"),t.TgZ(24,"span",9),t._uU(25,"Patients assur\xe9"),t.qZA(),t.TgZ(26,"div",10),t._uU(27,"120"),t.qZA(),t.qZA(),t.TgZ(28,"div",15),t._UZ(29,"i",16),t.qZA(),t.qZA(),t.TgZ(30,"span",13),t._uU(31,"40% "),t.qZA(),t.TgZ(32,"span",14),t._uU(33,"des patients"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(34,"div",6),t.TgZ(35,"div",7),t.TgZ(36,"div",8),t.TgZ(37,"div"),t.TgZ(38,"span",9),t._uU(39,"Patients non assur\xe9"),t.qZA(),t.TgZ(40,"div",10),t._uU(41,"170"),t.qZA(),t.qZA(),t.TgZ(42,"div",17),t._UZ(43,"i",18),t.qZA(),t.qZA(),t.TgZ(44,"span",13),t._uU(45,"50% "),t.qZA(),t.TgZ(46,"span",14),t._uU(47,"des patients"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(48,"div",6),t.TgZ(49,"div",7),t.TgZ(50,"div",8),t.TgZ(51,"div"),t.TgZ(52,"span",9),t._uU(53,"Nouveaux patients"),t.qZA(),t.TgZ(54,"div",10),t._uU(55,"10"),t.qZA(),t.qZA(),t.TgZ(56,"div",19),t._UZ(57,"i",20),t.qZA(),t.qZA(),t.TgZ(58,"span",13),t._uU(59,"10% "),t.qZA(),t.TgZ(60,"span",14),t._uU(61,"des patients"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(62,"div",4),t.TgZ(63,"div",5),t.TgZ(64,"div",6),t.TgZ(65,"div",7),t.TgZ(66,"div",8),t.TgZ(67,"div"),t.TgZ(68,"span",9),t._uU(69,"Abonnements"),t.qZA(),t.TgZ(70,"div",10),t._uU(71,"152"),t.qZA(),t.qZA(),t.TgZ(72,"div",21),t._UZ(73,"i",22),t.qZA(),t.qZA(),t.TgZ(74,"span",13),t._uU(75,"10% "),t.qZA(),t.TgZ(76,"span",14),t._uU(77,"des patients"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(78,"div",6),t.TgZ(79,"div",7),t.TgZ(80,"div",8),t.TgZ(81,"div"),t.TgZ(82,"span",9),t._uU(83,"Ordonances"),t.qZA(),t.TgZ(84,"div",10),t._uU(85,"100"),t.qZA(),t.qZA(),t.TgZ(86,"div",15),t._UZ(87,"i",23),t.qZA(),t.qZA(),t.TgZ(88,"span",13),t._uU(89,"Facture: "),t.qZA(),t.TgZ(90,"span",14),t._uU(91,"3 00 000 FCFA"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(92,"div",6),t.TgZ(93,"div",7),t.TgZ(94,"div",8),t.TgZ(95,"div"),t.TgZ(96,"span",9),t._uU(97,"Documents"),t.qZA(),t.TgZ(98,"div",10),t._uU(99,"28441"),t.qZA(),t.qZA(),t.TgZ(100,"div",17),t._UZ(101,"i",24),t.qZA(),t.qZA(),t.TgZ(102,"span",13),t._uU(103,"520 "),t.qZA(),t.TgZ(104,"span",14),t._uU(105,"newly registered"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(106,"div",6),t.TgZ(107,"div",7),t.TgZ(108,"div",8),t.TgZ(109,"div"),t.TgZ(110,"span",9),t._uU(111,"Hospitalisation \xe0 domicile"),t.qZA(),t.TgZ(112,"div",10),t._uU(113,"152"),t.qZA(),t.qZA(),t.TgZ(114,"div",19),t._UZ(115,"i",25),t.qZA(),t.qZA(),t.TgZ(116,"span",13),t._uU(117,"85 "),t.qZA(),t.TgZ(118,"span",14),t._uU(119,"responded"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(120,"div",4),t.TgZ(121,"div",5),t.TgZ(122,"div",26),t.TgZ(123,"div",7),t.TgZ(124,"div",27),t.TgZ(125,"h3",28),t._uU(126,"Patients assur\xe9"),t.qZA(),t.TgZ(127,"h6"),t._uU(128,"72 bmp "),t.TgZ(129,"span",29),t._uU(130,"(Appels vid\xe9o)"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(131,"div",30),t._UZ(132,"apx-chart",31),t.qZA(),t.qZA(),t.qZA(),t.TgZ(133,"div",26),t.TgZ(134,"div",7),t.TgZ(135,"div",27),t.TgZ(136,"h3",28),t._uU(137,"Patients assur\xe9"),t.qZA(),t.TgZ(138,"h6"),t._uU(139,"72 bmp "),t.TgZ(140,"span",29),t._uU(141,"(Appels t\xe9l\xe9honique)"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(142,"div",30),t._UZ(143,"apx-chart",31),t.qZA(),t.qZA(),t.qZA(),t.TgZ(144,"div",26),t.TgZ(145,"div",7),t.TgZ(146,"div",27),t.TgZ(147,"h3",28),t._uU(148,"Patients assur\xe9"),t.qZA(),t.TgZ(149,"h6"),t._uU(150,"72 bmp "),t.TgZ(151,"span",29),t._uU(152,"(Consultation \xe0 domicile)"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(153,"div",30),t._UZ(154,"apx-chart",31),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(155,"div",4),t.TgZ(156,"div",5),t.TgZ(157,"div",26),t.TgZ(158,"div",7),t.TgZ(159,"div",27),t.TgZ(160,"h3",28),t._uU(161,"Patients non assur\xe9"),t.qZA(),t.TgZ(162,"h5"),t._uU(163,"129 bmp "),t.TgZ(164,"span",29),t._uU(165,"(Apels vid\xe9o)"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(166,"div",30),t._UZ(167,"apx-chart",31),t.qZA(),t.qZA(),t.qZA(),t.TgZ(168,"div",26),t.TgZ(169,"div",7),t.TgZ(170,"div",27),t.TgZ(171,"h3",28),t._uU(172,"Patients non assur\xe9"),t.qZA(),t.TgZ(173,"h5"),t._uU(174,"129 bmp "),t.TgZ(175,"span",29),t._uU(176,"(Appels t\xe9l\xe9phonique)"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(177,"div",30),t._UZ(178,"apx-chart",31),t.qZA(),t.qZA(),t.qZA(),t.TgZ(179,"div",26),t.TgZ(180,"div",7),t.TgZ(181,"div",32),t.TgZ(182,"h2"),t._uU(183,"Medications"),t.qZA(),t.qZA(),t.TgZ(184,"div",33),t.TgZ(185,"div",34),t.TgZ(186,"table",35),t.TgZ(187,"tr"),t.TgZ(188,"td"),t._UZ(189,"i",36),t._uU(190," Econochlor (chloramphenicol-oral)"),t.qZA(),t.TgZ(191,"td",37),t.TgZ(192,"span",38),t._uU(193,"1 - 0 - 1"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(194,"tr"),t.TgZ(195,"td"),t._UZ(196,"i",39),t._uU(197," Desmopressin tabs"),t.qZA(),t.TgZ(198,"td",37),t.TgZ(199,"span",38),t._uU(200,"1 - 1 - 1"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(201,"tr"),t.TgZ(202,"td"),t._UZ(203,"i",40),t._uU(204," Abciximab-injection"),t.qZA(),t.TgZ(205,"td",37),t.TgZ(206,"span",38),t._uU(207,"1 Daily"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(208,"tr"),t.TgZ(209,"td"),t._UZ(210,"i",41),t._uU(211," Kevzara sarilumab"),t.qZA(),t.TgZ(212,"td",37),t.TgZ(213,"span",38),t._uU(214,"0 - 0 - 1"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(215,"tr"),t.TgZ(216,"td"),t._UZ(217,"i",39),t._uU(218," Gentamicin-topical"),t.qZA(),t.TgZ(219,"td",37),t.TgZ(220,"span",38),t._uU(221,"1 - 0 - 1"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(222,"tr"),t.TgZ(223,"td"),t._UZ(224,"i",36),t._uU(225," Paliperidone palmitate"),t.qZA(),t.TgZ(226,"td",37),t.TgZ(227,"span",38),t._uU(228,"1 - 1 - 1"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(229,"tr"),t.TgZ(230,"td"),t._UZ(231,"i",40),t._uU(232," Sermorelin-injectable"),t.qZA(),t.TgZ(233,"td",37),t.TgZ(234,"span",38),t._uU(235,"1 Daily"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(236,"div",42),t.TgZ(237,"button",43),t._uU(238,"Report Adverse Effect"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&a&&(t.xp6(3),t.Q6J("title","Tableau de bord")("items",t.DdM(63,g))("active_item","Patient"),t.xp6(129),t.Q6J("series",e.restRateChartOptions.series)("chart",e.restRateChartOptions.chart)("xaxis",e.restRateChartOptions.xaxis)("stroke",e.restRateChartOptions.stroke)("colors",e.restRateChartOptions.colors)("dataLabels",e.restRateChartOptions.dataLabels)("legend",e.restRateChartOptions.legend)("markers",e.restRateChartOptions.markers)("grid",e.restRateChartOptions.grid)("yaxis",e.restRateChartOptions.yaxis)("tooltip",e.restRateChartOptions.tooltip)("title",e.restRateChartOptions.title),t.xp6(11),t.Q6J("series",e.restRateChartOptions2.series)("chart",e.restRateChartOptions2.chart)("xaxis",e.restRateChartOptions2.xaxis)("stroke",e.restRateChartOptions2.stroke)("colors",e.restRateChartOptions2.colors)("dataLabels",e.restRateChartOptions2.dataLabels)("legend",e.restRateChartOptions2.legend)("markers",e.restRateChartOptions2.markers)("grid",e.restRateChartOptions2.grid)("yaxis",e.restRateChartOptions2.yaxis)("tooltip",e.restRateChartOptions2.tooltip)("title",e.restRateChartOptions2.title),t.xp6(11),t.Q6J("series",e.restRateChartOptions3.series)("chart",e.restRateChartOptions3.chart)("xaxis",e.restRateChartOptions3.xaxis)("stroke",e.restRateChartOptions3.stroke)("colors",e.restRateChartOptions3.colors)("dataLabels",e.restRateChartOptions3.dataLabels)("legend",e.restRateChartOptions3.legend)("markers",e.restRateChartOptions3.markers)("grid",e.restRateChartOptions3.grid)("yaxis",e.restRateChartOptions3.yaxis)("tooltip",e.restRateChartOptions3.tooltip)("title",e.restRateChartOptions3.title),t.xp6(13),t.Q6J("series",e.performanceRateChartOptions.series)("chart",e.performanceRateChartOptions.chart)("xaxis",e.performanceRateChartOptions.xaxis)("stroke",e.performanceRateChartOptions.stroke)("colors",e.performanceRateChartOptions.colors)("dataLabels",e.performanceRateChartOptions.dataLabels)("legend",e.performanceRateChartOptions.legend)("markers",e.performanceRateChartOptions.markers)("grid",e.performanceRateChartOptions.grid)("yaxis",e.performanceRateChartOptions.yaxis)("tooltip",e.performanceRateChartOptions.tooltip)("title",e.performanceRateChartOptions.title),t.xp6(11),t.Q6J("series",e.performanceRateChartOptions2.series)("chart",e.performanceRateChartOptions2.chart)("xaxis",e.performanceRateChartOptions2.xaxis)("stroke",e.performanceRateChartOptions2.stroke)("colors",e.performanceRateChartOptions2.colors)("dataLabels",e.performanceRateChartOptions2.dataLabels)("legend",e.performanceRateChartOptions2.legend)("markers",e.performanceRateChartOptions2.markers)("grid",e.performanceRateChartOptions2.grid)("yaxis",e.performanceRateChartOptions2.yaxis)("tooltip",e.performanceRateChartOptions2.tooltip)("title",e.performanceRateChartOptions2.title))},directives:[Z.L,p.x,l.lW],styles:[""]}),i})()}}]);