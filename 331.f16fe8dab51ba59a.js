"use strict";(self.webpackChunkme=self.webpackChunkme||[]).push([[331],{3331:(pe,g,o)=>{o.r(g),o.d(g,{ResumeModule:()=>_e});var m=o(6895),k=o(8869),l=o(1281),f=o(3353),T=o(44),e=o(4650),d=o(3238),A=o(727);function Z(n,r){if(1&n&&(e.O4$(),e._UZ(0,"circle",4)),2&n){const t=e.oxw(),i=e.MAs(1);e.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%")("transform-origin",t._getCircleTransformOrigin(i)),e.uIk("r",t._getCircleRadius())}}function S(n,r){if(1&n&&(e.O4$(),e._UZ(0,"circle",4)),2&n){const t=e.oxw(),i=e.MAs(1);e.Udp("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%")("transform-origin",t._getCircleTransformOrigin(i)),e.uIk("r",t._getCircleRadius())}}const y=(0,d.pj)(class{constructor(n){this._elementRef=n}},"primary"),b=new e.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function C(){return{diameter:100}}});class c extends y{constructor(r,t,i,a,s,u,h,x){super(r),this._document=i,this._diameter=100,this._value=0,this._resizeSubscription=A.w0.EMPTY,this.mode="determinate";const v=c._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),v.has(i.head)||v.set(i.head,new Set([100])),this._noopAnimations="NoopAnimations"===a&&!!s&&!s._forceAnimations,"mat-spinner"===r.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),s&&(s.color&&(this.color=this.defaultColor=s.color),s.diameter&&(this.diameter=s.diameter),s.strokeWidth&&(this.strokeWidth=s.strokeWidth)),t.isBrowser&&t.SAFARI&&h&&u&&x&&(this._resizeSubscription=h.change(150).subscribe(()=>{"indeterminate"===this.mode&&x.run(()=>u.markForCheck())}))}get diameter(){return this._diameter}set diameter(r){this._diameter=(0,l.su)(r),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(r){this._strokeWidth=(0,l.su)(r)}get value(){return"determinate"===this.mode?this._value:0}set value(r){this._value=Math.max(0,Math.min(100,(0,l.su)(r)))}ngOnInit(){const r=this._elementRef.nativeElement;this._styleRoot=(0,f.kV)(r)||this._document.head,this._attachStyleNode(),r.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const r=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${r} ${r}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(r){const t=50*(r.currentScale??1);return`${t}% ${t}%`}_attachStyleNode(){const r=this._styleRoot,t=this._diameter,i=c._diameters;let a=i.get(r);if(!a||!a.has(t)){const s=this._document.createElement("style");s.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),s.textContent=this._getAnimationText(),r.appendChild(s),a||(a=new Set,i.set(r,a)),a.add(t)}}_getAnimationText(){const r=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*r).replace(/END_VALUE/g,""+.2*r).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}c._diameters=new WeakMap,c.\u0275fac=function(r){return new(r||c)(e.Y36(e.SBq),e.Y36(f.t4),e.Y36(m.K0,8),e.Y36(e.QbO,8),e.Y36(b),e.Y36(e.sBO),e.Y36(T.rL),e.Y36(e.R0b))},c.\u0275cmp=e.Xpm({type:c,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(r,t){2&r&&(e.uIk("aria-valuemin","determinate"===t.mode?0:null)("aria-valuemax","determinate"===t.mode?100:null)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),e.Udp("width",t.diameter,"px")("height",t.diameter,"px"),e.ekj("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[e.qOj],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(r,t){1&r&&(e.O4$(),e.TgZ(0,"svg",0,1),e.YNc(2,Z,1,11,"circle",2),e.YNc(3,S,1,9,"circle",3),e.qZA()),2&r&&(e.Udp("width",t.diameter,"px")("height",t.diameter,"px"),e.Q6J("ngSwitch","indeterminate"===t.mode),e.uIk("viewBox",t._getViewBox()),e.xp6(2),e.Q6J("ngSwitchCase",!0),e.xp6(1),e.Q6J("ngSwitchCase",!1))},dependencies:[m.RF,m.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}"],encapsulation:2,changeDetection:0});let E=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.BQ,m.ez,d.BQ]}),n})();var p=o(5707),w=o(7579),Q=o(2722),N=o(4004),O=o(8746),Y=o(1481),D=o(529);let J=(()=>{class n{constructor(t){this._httpClient=t}getData(t){return this._httpClient.get(`assets/data/${t}.json`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(D.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function L(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",25),e._UZ(2,"i",26),e.TgZ(3,"span"),e._uU(4),e.qZA()(),e.BQk()),2&n){const t=r.$implicit,i=e.oxw(2);e.xp6(2),e.Q6J("innerHtml",i.generateSafeHtml(t.icon),e.oJD),e.xp6(2),e.Oqu(t.value)}}function I(n,r){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=r.$implicit;e.xp6(1),e.hij(" ",t("work-experiences")," ")}}function M(n,r){if(1&n&&(e.TgZ(0,"li",41),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.xp6(1),e.hij(" ",t," ")}}function j(n,r){if(1&n&&(e.TgZ(0,"ul",39),e.YNc(1,M,2,1,"li",40),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",t.tasks)}}function q(n,r){if(1&n&&(e.TgZ(0,"div",31)(1,"div",32)(2,"div")(3,"h4",33),e._uU(4),e.TgZ(5,"span",34),e._uU(6),e.qZA()(),e.TgZ(7,"div",35),e._uU(8),e.qZA()(),e.TgZ(9,"div",36),e._uU(10),e.qZA()(),e.TgZ(11,"div"),e._UZ(12,"p",37),e.YNc(13,j,2,1,"ul",38),e.qZA()()),2&n){const t=r.$implicit,i=e.oxw(3);e.xp6(4),e.hij(" ",t.title," "),e.xp6(2),e.hij(" "," - "+t.employmentType," "),e.xp6(2),e.hij(" ",t.place," "),e.xp6(2),e.AsE(" ",t.startDate," - ",t.endDate," "),e.xp6(2),e.Q6J("innerHtml",i.generateSafeHtml(t.description),e.oJD),e.xp6(1),e.Q6J("ngIf",t.tasks&&t.tasks.length>0)}}function B(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",27)(2,"h3",28),e.YNc(3,I,2,1,"ng-container",29),e.qZA(),e.YNc(4,q,14,7,"div",30),e.qZA(),e.BQk()),2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("translocoRead","resume"),e.xp6(1),e.Q6J("ngForOf",t.data.workExperiences)}}function F(n,r){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=r.$implicit;e.xp6(1),e.hij(" ",t("projects")," ")}}function $(n,r){if(1&n&&(e.TgZ(0,"div",31)(1,"div",32)(2,"h4",33)(3,"a",42),e._uU(4),e.qZA()(),e.TgZ(5,"div",36),e._uU(6),e.qZA()(),e.TgZ(7,"div"),e._UZ(8,"p",37),e.qZA()()),2&n){const t=r.$implicit,i=e.oxw(3);e.xp6(3),e.Q6J("href",t.link,e.LSH),e.xp6(1),e.hij(" ",t.title," "),e.xp6(2),e.hij(" ",t.status," "),e.xp6(2),e.Q6J("innerHtml",i.generateSafeHtml(t.description),e.oJD)}}function V(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",27)(2,"h3",28),e.YNc(3,F,2,1,"ng-container",29),e.qZA(),e.YNc(4,$,9,4,"div",30),e.qZA(),e.BQk()),2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("translocoRead","resume"),e.xp6(1),e.Q6J("ngForOf",t.data.projects)}}function H(n,r){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=r.$implicit;e.xp6(1),e.hij(" ",t("skills")," ")}}function P(n,r){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=r.$implicit;e.xp6(1),e.hij(" ",t("technical")," ")}}function X(n,r){if(1&n&&(e.TgZ(0,"li",46),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.xp6(1),e.hij(" ",t," ")}}function W(n,r){if(1&n&&(e.TgZ(0,"div")(1,"h4",44),e.YNc(2,P,2,1,"ng-container",29),e.qZA(),e.TgZ(3,"ul"),e.YNc(4,X,2,1,"li",45),e.qZA()()),2&n){const t=e.oxw(3);e.xp6(2),e.Q6J("translocoRead","resume"),e.xp6(2),e.Q6J("ngForOf",t.data.technicalSkills)}}function z(n,r){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=r.$implicit;e.xp6(1),e.hij(" ",t("professional")," ")}}function G(n,r){if(1&n&&(e.TgZ(0,"li",46),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.xp6(1),e.hij(" ",t," ")}}function K(n,r){if(1&n&&(e.TgZ(0,"div")(1,"h4",44),e.YNc(2,z,2,1,"ng-container",29),e.qZA(),e.TgZ(3,"ul"),e.YNc(4,G,2,1,"li",45),e.qZA()()),2&n){const t=e.oxw(3);e.xp6(2),e.Q6J("translocoRead","resume"),e.xp6(2),e.Q6J("ngForOf",t.data.professionalSkills)}}function ee(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",43)(2,"h3",28),e.YNc(3,H,2,1,"ng-container",29),e.qZA(),e.YNc(4,W,5,2,"div",21),e.YNc(5,K,5,2,"div",21),e.qZA(),e.BQk()),2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("translocoRead","resume"),e.xp6(1),e.Q6J("ngIf",t.data.technicalSkills.length>0),e.xp6(1),e.Q6J("ngIf",t.data.professionalSkills.length>0)}}function te(n,r){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=r.$implicit;e.xp6(1),e.hij(" ",t("educations")," ")}}function ne(n,r){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.degree," - ")}}function re(n,r){if(1&n&&(e.TgZ(0,"li",46)(1,"div",47),e._uU(2),e.qZA(),e.TgZ(3,"div",35),e.YNc(4,ne,2,1,"span",21),e.TgZ(5,"span"),e._uU(6),e.qZA()(),e.TgZ(7,"div",36),e._uU(8),e.qZA()()),2&n){const t=r.$implicit;e.xp6(2),e.Oqu(t.place),e.xp6(2),e.Q6J("ngIf",t.degree),e.xp6(2),e.Oqu(t.fieldOfStudy),e.xp6(2),e.AsE(" ",t.startDate," - ",t.endDate," ")}}function ie(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",43)(2,"h3",28),e.YNc(3,te,2,1,"ng-container",29),e.qZA(),e.TgZ(4,"ul"),e.YNc(5,re,9,5,"li",45),e.qZA()(),e.BQk()),2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("translocoRead","resume"),e.xp6(2),e.Q6J("ngForOf",t.data.educations)}}function oe(n,r){if(1&n&&(e.ynx(0),e._uU(1),e.BQk()),2&n){const t=r.$implicit;e.xp6(1),e.hij(" ",t("languages")," ")}}function se(n,r){if(1&n&&(e.TgZ(0,"li",46),e._uU(1),e.TgZ(2,"span",35),e._uU(3),e.qZA()()),2&n){const t=r.$implicit;e.xp6(1),e.hij(" ",t.title," "),e.xp6(2),e.hij("(",t.grade,")")}}function ae(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",43)(2,"h3",28),e.YNc(3,oe,2,1,"ng-container",29),e.qZA(),e.TgZ(4,"ul"),e.YNc(5,se,4,2,"li",45),e.qZA()(),e.BQk()),2&n){const t=e.oxw(2);e.xp6(3),e.Q6J("translocoRead","resume"),e.xp6(2),e.Q6J("ngForOf",t.data.languages)}}function ce(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"a",48),e._UZ(2,"i",49),e.TgZ(3,"span"),e._uU(4),e.qZA()(),e.BQk()),2&n){const t=r.$implicit,i=e.oxw(2);e.xp6(1),e.Q6J("href","https://"+t.value,e.LSH),e.xp6(1),e.Q6J("innerHtml",i.generateSafeHtml(t.icon),e.oJD),e.xp6(2),e.Oqu(t.value)}}function me(n,r){if(1&n&&(e.ynx(0),e.TgZ(1,"div",5)(2,"div",6)(3,"div",7)(4,"h2",8),e._uU(5),e.qZA(),e.TgZ(6,"h4",9),e._uU(7),e.qZA()(),e.TgZ(8,"div",10),e.YNc(9,L,5,2,"ng-container",11),e.qZA()()(),e._UZ(10,"div",12),e.TgZ(11,"div",13)(12,"div",14)(13,"div",15),e._UZ(14,"img",16),e.qZA(),e.TgZ(15,"div",17),e._UZ(16,"p",18),e.qZA()()(),e._UZ(17,"div",12),e.TgZ(18,"div",19)(19,"div",6)(20,"div",20),e.YNc(21,B,5,2,"ng-container",21),e.YNc(22,V,5,2,"ng-container",21),e.qZA(),e.TgZ(23,"div",22),e.YNc(24,ee,6,3,"ng-container",21),e.YNc(25,ie,6,2,"ng-container",21),e.YNc(26,ae,6,2,"ng-container",21),e.qZA()()(),e._UZ(27,"div",12),e.TgZ(28,"div",23)(29,"div",24),e.YNc(30,ce,5,3,"ng-container",11),e.qZA()(),e.BQk()),2&n){const t=e.oxw();e.xp6(5),e.hij(" ",t.data.name," "),e.xp6(2),e.hij(" ",t.data.professionalTitle," "),e.xp6(2),e.Q6J("ngForOf",t.data.contact),e.xp6(5),e.Q6J("src",t.data.image,e.LSH),e.xp6(2),e.Q6J("innerHtml",t.generateSafeHtml(t.data.about),e.oJD),e.xp6(5),e.Q6J("ngIf",t.data.workExperiences&&t.data.workExperiences.length>0),e.xp6(1),e.Q6J("ngIf",t.data.projects&&t.data.projects.length>0),e.xp6(2),e.Q6J("ngIf",t.data.technicalSkills&&t.data.technicalSkills.length>0&&t.data.professionalSkills&&t.data.professionalSkills.length>0),e.xp6(1),e.Q6J("ngIf",t.data.educations&&t.data.educations.length>0),e.xp6(1),e.Q6J("ngIf",t.data.languages&&t.data.languages.length>0),e.xp6(4),e.Q6J("ngForOf",t.data.social)}}function le(n,r){1&n&&(e.TgZ(0,"div",50),e._UZ(1,"mat-spinner",51),e.qZA())}const de=[{path:"",component:(()=>{class n{constructor(t,i,a,s){this._sanitizer=t,this._changeDetectorRef=i,this._translocoService=a,this._resumeService=s,this.isLoading=!0,this._unsubscribeAll=new w.x}ngOnInit(){this._getData(this._translocoService.getActiveLang()),this._translocoService.langChanges$.pipe((0,Q.R)(this._unsubscribeAll)).subscribe(t=>{this._getData(t)})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}generateSafeHtml(t){return this._sanitizer.bypassSecurityTrustHtml(t)}_getData(t){this.isLoading=!0,this._changeDetectorRef.markForCheck(),this._resumeService.getData(t).pipe((0,N.U)(i=>{this.data=i}),(0,O.x)(()=>{this.isLoading=!1,this._changeDetectorRef.markForCheck()})).subscribe()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Y.H7),e.Y36(e.sBO),e.Y36(p.Vn),e.Y36(J))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-resume"]],decls:6,vars:2,consts:[[1,"flex","min-w-0","flex-auto","flex-col"],[1,"flex-auto","p-4","print:p-0","sm:p-10"],[1,"bg-card","mx-auto","max-w-256","rounded","p-6","shadow","print:w-auto","print:max-w-none","print:rounded-none","print:bg-transparent","print:shadow-none","sm:p-12"],[4,"ngIf","ngIfElse"],["loading",""],[1,"resume-header"],[1,"grid","grid-cols-1","md:grid-cols-4","md:gap-8"],[1,"col-span-3"],[1,"text-4xl","font-extrabold","uppercase","text-primary-500"],[1,"mb-4","text-lg","font-light","md:mb-0"],[1,"space-y-2","md:px-2","ltr:md:border-l","rtl:md:border-r"],[4,"ngFor","ngForOf"],[1,"my-4","border-b"],[1,"resume-intro"],[1,"flex","flex-col","items-center","py-4","md:flex-row"],[1,"relative","mb-4","h-32","w-32","flex-0","md:mb-0","ltr:md:mr-8","rtl:md:ml-8"],["alt","Avatar",1,"h-full","w-full","rounded-full",3,"src"],[1,"text-start"],[1,"whitespace-pre-line","text-justify",3,"innerHtml"],[1,"resume-body"],[1,"resume-main","col-span-3"],[4,"ngIf"],[1,"resume-aside","ltr:md:border-l","ltr:md:pl-4","rtl:md:border-r","rtl:md:pr-4"],[1,"resume-footer"],[1,"flex","flex-col","space-y-2","md:flex-row","md:justify-center","md:space-y-0","md:space-x-4","rtl:md:space-x-reverse"],[1,"flex","items-center","space-x-2","text-xs","rtl:space-x-reverse"],[1,"material-symbols-rounded","icon","icon-size-4",3,"innerHtml"],[1,"work-section","py-4"],[1,"relative","mb-6","border-primary-500","text-lg","font-bold","uppercase","tracking-wider","text-primary-500","ltr:border-l-8","ltr:pl-4","rtl:border-r-8","rtl:pr-4"],[4,"transloco","translocoRead"],["class","mb-4",4,"ngFor","ngForOf"],[1,"mb-4"],[1,"mb-2","flex","flex-col","sm:flex-row","sm:items-center","sm:justify-between"],[1,"text-base","font-bold"],[1,"text-secondary","text-sm"],[1,"text-secondary"],[1,"text-secondary","text-xs"],[1,"mb-4","whitespace-pre-line","text-justify",3,"innerHtml"],["class","list-inside list-disc ltr:pl-4 rtl:pr-4",4,"ngIf"],[1,"list-inside","list-disc","ltr:pl-4","rtl:pr-4"],["class","mt-1",4,"ngFor","ngForOf"],[1,"mt-1"],["target","_blank",3,"href"],[1,"skills-section","py-4"],[1,"mb-2","text-base","font-bold"],["class","mb-2",4,"ngFor","ngForOf"],[1,"mb-2"],[1,""],["target","_blank",1,"group","text-secondary","flex","items-center","space-x-2","text-xs","hover:text-default","rtl:space-x-reverse",3,"href"],[1,"material-symbols-rounded","icon","fill-current","icon-size-5","group-hover:text-primary-500",3,"innerHtml"],[1,"flex","items-center","justify-center"],["mode","indeterminate","diameter","48"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"article",2),e.YNc(3,me,31,11,"ng-container",3),e.qZA(),e.YNc(4,le,2,0,"ng-template",null,4,e.W1O),e.qZA()()),2&t){const a=e.MAs(5);e.xp6(3),e.Q6J("ngIf",!i.isLoading)("ngIfElse",a)}},dependencies:[m.sg,m.O5,c,p.KI],encapsulation:2,changeDetection:0}),n})()}];let _e=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.ez,k.Bz.forChild(de),E,p.y4]}),n})()}}]);