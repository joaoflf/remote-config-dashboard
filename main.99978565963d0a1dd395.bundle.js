webpackJsonp([1,5],{0:function(t,e,n){t.exports=n("x35b")},"0PnR":function(t,e){t.exports='<div>\n    <div id="jsoneditor"></div>\n</div>'},"1Wik":function(t,e,n){"use strict";var o=n("GdbW"),r=n("Rk7G"),a=n("3j3K"),i=n("Fzro"),c=n("98po"),s=n("rCTf"),l=(n.n(s),n("3L7d")),u=n("uCY4"),p=(n.n(u),n("HcJ8")),f=(n.n(p),n("S35O"));n.n(f);n.d(e,"a",function(){return h});var d=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},g=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},h=function(){function t(t,e){var n=this;this.http=t,this.actions$=e,this.loadApp$=this.actions$.ofType(l.a).switchMap(function(t){return n.http.get("https://demo6219157.mockable.io/apps/"+t.payload.id).map(function(t){return t.json()})}).mergeMap(function(t){return s.Observable.from([{type:l.b,payload:{id:t.id,name:t.name}},{type:r.b,payload:t.properties},{type:o.d,payload:t.featureToggles}])})}return t}();d([n.i(c.b)(),g("design:type",Object)],h.prototype,"loadApp$",void 0),h=d([n.i(a.Injectable)(),g("design:paramtypes",["function"==typeof(b=void 0!==i.b&&i.b)&&b||Object,"function"==typeof(m=void 0!==c.c&&c.c)&&m||Object])],h);var b,m},"1nax":function(t,e,n){"use strict";var o=n("3j3K");n.d(e,"a",function(){return a});var r=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},a=function(){function t(){}return t.prototype.transform=function(t,e){return t&&e?t.filter(function(t){return-1!==JSON.stringify(t).toLowerCase().indexOf(e.toLowerCase())}):t},t}();a=r([n.i(o.Pipe)({name:"filter"})],a)},"3L7d":function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a});var o="UPDATE_APP_NAME",r="LOAD_APP",a="LOAD_APP_SUCCESS"},"4ThJ":function(t,e){},"5A5T":function(t,e,n){"use strict";function o(t,e){void 0===t&&(t={});var n,o;switch(e.type){case r.c:return o=e.payload.name,a({},t,{name:o});case r.b:return n=e.payload.id,o=e.payload.name,a({},t,{id:n,name:o});default:return t}}var r=n("3L7d");e.a=o;var a=this&&this.__assign||Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}},"5HNe":function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,"",""]),t.exports=t.exports.toString()},"5u0B":function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r});var o="LOAD_APPS",r="LOAD_APPS_SUCCESS"},"5xMp":function(t,e){t.exports='<div class="main-container">\n    <header class="header header-4">\n        <div class="branding">\n            <a href="" class="nav-link">\n                <clr-icon shape="analytics" class="is-inverse"></clr-icon>\n                <span class="title">Remote Config Dashboard</span>\n            </a>\n        </div>\n    </header>\n    <div class="content-container">\n        <div class="content-area">\n            <div class="row col-xs-12">\n                <h3 class="app-title ">\n                    {{ (selectedApp$ | async)?.name }}\n                </h3>\n                <clr-dropdown class="">\n                    <button class="btn btn-link" clrDropdownToggle>\n                        Change app\n                        <clr-icon shape="caret down"></clr-icon>\n                    </button>\n                    <div class="dropdown-menu">\n                        <a *ngFor="let app of (apps$ | async)" (click)="loadApp(app.id)" clrDropdownItem>{{ app.name }}</a>\n                    </div>\n                </clr-dropdown>\n            </div>\n\n            <clr-tabs class="tabs row flex-items-xs-center">\n                <clr-tab-link>Feature Toggles</clr-tab-link>\n                <clr-tab-link>Config Properties</clr-tab-link>\n                <clr-tab-content class="col-xs-12 col-md-10 col-lg-8 col-xl-6 panel">\n                    <app-feature-toggles></app-feature-toggles>\n                </clr-tab-content>\n                <clr-tab-content class="col-xs-12 col-md-10 col-lg-8 col-xl-6 panel">\n                    <app-config-properties></app-config-properties>\n                </clr-tab-content>\n            </clr-tabs>\n        </div>\n    </div>'},"5y3D":function(t,e,n){"use strict";var o=n("6Xb6");n.d(e,"a",function(){return o.a});var r=n("5u0B");n.d(e,"c",function(){return r.a});var a=n("OcIb");n.d(e,"b",function(){return a.a})},"6Xb6":function(t,e,n){"use strict";function o(t,e){switch(void 0===t&&(t=[]),e.type){case r.b:return e.payload.slice();case r.a:default:return t}}var r=n("5u0B");e.a=o},"7G6f":function(t,e,n){"use strict";var o=(n("YWx4"),n("Iksp"));n.d(e,"a",function(){return o.a})},"8rQD":function(t,e,n){"use strict";n.d(e,"b",function(){return o}),n.d(e,"a",function(){return r});var o="UPDATE_PROPERTIES",r="LOAD_PROPERTIES_SUCCESS"},BqYb:function(t,e){t.exports='<clr-modal [(clrModalOpen)]="isAddToggleModalOpen" [clrModalClosable]="false">\n    <h5 class="modal-title">Create a new feature toggle</h5>\n    <div class="modal-body">\n        <div class="alert alert-danger" *ngIf="toggleExistsWarning">\n            <div class="alert-item">\n                <span class="alert-text">\n                A toggle with this name already exists.\n            </span>\n            </div>\n        </div>\n        <form class="form" [formGroup]="featureToggleForm" [hidden]="submitted">\n            <section class="form-block">\n                <div class="form-group">\n                    <label for="toggleName">Feature Name</label>\n                    <label for="toggleName" aria-haspopup="true" role="tooltip" class="tooltip tooltip-validation tooltip-sm tooltip-right" [class.invalid]="featureToggleForm.get(\'toggleName\').invalid\n                    && (featureToggleForm.get(\'toggleName\').dirty || featureToggleForm.get(\'toggleName\').touched)">\n                        <input id="toggleName" type="text"\n                            formControlName="toggleName">\n                        <span class="tooltip-content">\n                            Name is required.\n                        </span>\n                    </label>\n                </div>\n                <div formGroupName="toggleState">\n                    <div class="form-group">\n                        <label for="toggleState">Initial State</label>\n                        <div for="toggleState" class="toggle-switch">\n                            <input id="state" type="checkbox" formControlName="state">\n                            <label for="state"></label>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </form>\n    </div>\n    <div class="modal-footer">\n        <button type="button" class="btn btn-outline" (click)="isAddToggleModalOpen = false">Cancel</button>\n        <button class="btn btn-primary" (click)="addToggleClicked()" type="submit" [disabled]="featureToggleForm.invalid">Create</button>\n    </div>\n</clr-modal>'},GdbW:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"b",function(){return a}),n.d(e,"d",function(){return i});var o="ADD_FEATURE_TOGGLE",r="REMOVE_FEATURE_TOGGLE",a="UPDATE_FEATURE_TOGGLE",i="LOAD_TOGGLES_SUCCESS"},Iksp:function(t,e,n){"use strict";var o=n("UxGq"),r=n("3j3K"),a=n("5y3D"),i=n("Rk7G"),c=n("m9Pz"),s=n("j3uM"),l=n("Qbdm"),u=n("KN8t"),p=n("NVOs"),f=n("Fzro"),d=n("wAxw"),g=(n.n(d),n("YWx4")),h=n("WWmu"),b=n("R/A1"),m=n("fVG+"),y=n("98po"),v=n("1nax"),O=n("hbrJ"),T=n("erzk");n.d(e,"a",function(){return _});var R=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},_=function(){function t(){}return t}();_=R([n.i(r.NgModule)({declarations:[g.a,b.a,m.a,v.a,O.a],imports:[l.BrowserModule,p.FormsModule,f.a,d.ClarityModule.forChild(),h.a.provideStore({featureToggles:c.featureToggles,properties:i.a,apps:a.a,app:o.app}),s.a.instrumentOnlyWithExtension({maxAge:5}),p.ReactiveFormsModule,u.a,y.a.run(a.b),y.a.run(o.AppEffects)],providers:[v.a,T.a],bootstrap:[g.a],schemas:[r.CUSTOM_ELEMENTS_SCHEMA]})],_)},MOVZ:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="MOVZ"},OcIb:function(t,e,n){"use strict";var o=n("3j3K"),r=n("Fzro"),a=n("98po"),i=n("5u0B"),c=n("uCY4"),s=(n.n(c),n("+pb+"));n.n(s);n.d(e,"a",function(){return p});var l=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t,e){var n=this;this.http=t,this.actions$=e,this.appLaunch$=this.actions$.ofType(i.a).switchMap(function(){return n.http.get("https://demo6219157.mockable.io/apps").map(function(t){return t.json()})}).map(function(t){return{type:i.b,payload:t}})}return t}();l([n.i(a.b)(),u("design:type",Object)],p.prototype,"appLaunch$",void 0),p=l([n.i(o.Injectable)(),u("design:paramtypes",["function"==typeof(f=void 0!==r.b&&r.b)&&f||Object,"function"==typeof(d=void 0!==a.c&&a.c)&&d||Object])],p);var f,d},"P/GY":function(t,e){t.exports='<table class="toggles-table table">\n    <thead>\n        <tr>\n            <th class="toggle-name-header">\n                <input type="text" placeholder="Find a feature toggle" size="25" [(ngModel)]="searchTerm">\n            </th>\n            <th></th>\n            <th class="actions-header">\n                <button class="new-toggle-button btn btn-outline-primary btn-sm" (click)="addToggleModal.openAddToggleModal()">\n                    New\n                     <clr-icon class="" shape="plus" size="16"></clr-icon>\n                </button>\n            </th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor="let toggle of featureToggles$ | async | filter:searchTerm">\n            <td class="toggle-name-cell">{{toggle.name}}</td>\n            <td>\n                <div class="toggle-switch">\n                    <input type="checkbox" id="{{toggle.name}}" [attr.checked]="toggle.state ? true : null" (change)="featureTogglesService.updateFeatureToggle(toggle.name, $event.target.checked)">\n                    <label for="{{toggle.name}}"></label>\n                </div>\n            </td>\n            <td class="actions-cell">\n                <button type="submit" class="remove-toggle-button btn btn-outline-danger btn-sm" (click)="openRemovalConfirmationModal(toggle.name)">\n                    Remove\n                    <clr-icon shape="trash" size="16"></clr-icon>\n                </button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<add-toggle-modal></add-toggle-modal>\n<clr-modal [(clrModalOpen)]="isConfirmationModalOpen" [clrModalClosable]="false">\n    <h5 class="modal-title">Remove toggle</h5>\n    <div class="modal-body">\n        <p>{{this.confirmationMessage}}</p>\n    </div>\n    <div class="modal-footer">\n        <button type="button" class="btn btn-outline" (click)="isConfirmationModalOpen = false">No</button>\n        <button type="button" class="btn btn-danger" (click)="confirmToggleRemoval()">Remove</button>\n    </div>\n</clr-modal>'},"R/A1":function(t,e,n){"use strict";var o=n("hbrJ"),r=n("WWmu"),a=n("3j3K"),i=n("erzk");n.d(e,"a",function(){return l});var c=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t,e){this.store=t,this.featureTogglesService=e,this.isConfirmationModalOpen=!1,this.featureToggles$=e.getFeatureToggles()}return t.prototype.ngOnInit=function(){},t.prototype.openRemovalConfirmationModal=function(t){this.selectedToggleName=t,this.confirmationMessage="Are you sure you want to remove the toggle "+t+"?",this.isConfirmationModalOpen=!0},t.prototype.confirmToggleRemoval=function(){this.isConfirmationModalOpen=!1,this.featureTogglesService.removeFeatureToggle(this.selectedToggleName)},t}();c([n.i(a.ViewChild)(o.a),s("design:type","function"==typeof(u=void 0!==o.a&&o.a)&&u||Object)],l.prototype,"addToggleModal",void 0),l=c([n.i(a.Component)({selector:"app-feature-toggles",template:n("P/GY"),styles:[n("gB2f")]}),s("design:paramtypes",["function"==typeof(p=void 0!==r.b&&r.b)&&p||Object,"function"==typeof(f=void 0!==i.a&&i.a)&&f||Object])],l);var u,p,f},Rk7G:function(t,e,n){"use strict";var o=n("qDj+");n.d(e,"a",function(){return o.a});var r=n("8rQD");n.d(e,"b",function(){return r.a}),n.d(e,"c",function(){return r.b})},UxGq:function(t,e,n){"use strict";var o=n("4ThJ");n.n(o);n.o(o,"app")&&n.d(e,"app",function(){return o.app}),n.o(o,"AppEffects")&&n.d(e,"AppEffects",function(){return o.AppEffects}),n.o(o,"LOAD_APP")&&n.d(e,"LOAD_APP",function(){return o.LOAD_APP});var r=n("5A5T");n.d(e,"app",function(){return r.a});var a=n("3L7d");n.d(e,"LOAD_APP",function(){return a.a});var i=n("1Wik");n.d(e,"AppEffects",function(){return i.a})},WUsO:function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,"",""]),t.exports=t.exports.toString()},WwSq:function(t,e,n){"use strict";function o(t,e){void 0===t&&(t=[]);var n,o;switch(e.type){case r.d:return e.payload.slice();case r.a:return o=e.payload.name,n=e.payload.state,t.concat([{name:o,state:n}]);case r.c:return o=e.payload.name,t.filter(function(t){return t.name!==o});case r.b:o=e.payload.name,n=e.payload.state;var i=t.map(function(t){return t.name}).indexOf(o);return t.slice(0,i).concat([a({},t[i],{name:o,state:n})],t.slice(i+1));default:return t}}var r=n("GdbW");e.a=o;var a=this&&this.__assign||Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}},YWx4:function(t,e,n){"use strict";var o=n("5y3D"),r=n("UxGq"),a=n("3j3K"),i=n("WWmu");n.d(e,"a",function(){return l});var c=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.store=t}return t.prototype.ngOnInit=function(){var t=this;this.selectedApp$=this.store.select("app"),this.apps$=this.store.select("apps"),this.store.select("app").subscribe(function(e){t.selectedAppId=e.id}),this.store.select("apps").subscribe(function(e){e.length&&t.store.dispatch({type:r.LOAD_APP,payload:{id:e[0].id}})}),this.store.dispatch({type:o.c,payload:{}})},t.prototype.loadApp=function(t){t!==this.selectedAppId&&this.store.dispatch({type:r.LOAD_APP,payload:{id:t}})},t}();l=c([n.i(a.Component)({selector:"app-root",template:n("5xMp"),styles:[n("sQHO")]}),s("design:paramtypes",["function"==typeof(u=void 0!==i.b&&i.b)&&u||Object])],l);var u},erzk:function(t,e,n){"use strict";var o=n("m9Pz"),r=n("WWmu"),a=n("3j3K");n.d(e,"a",function(){return l});var i=this&&this.__assign||Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},c=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){var e=this;this.store=t,this.featureToggles$=this.store.select("featureToggles"),this.featureToggles$.subscribe(function(t){e.featureToggles=t})}return t.prototype.getFeatureToggles=function(){return this.featureToggles$},t.prototype.doesToggleAlreadyExist=function(t){return this.featureToggles.filter(function(e){return e.name===t}).length},t.prototype.addFeatureToggle=function(t){this.store.dispatch({type:o.ADD_FEATURE_TOGGLE,payload:i({},t)})},t.prototype.updateFeatureToggle=function(t,e){this.store.dispatch({type:o.UPDATE_FEATURE_TOGGLE,payload:{name:t,state:e}})},t.prototype.removeFeatureToggle=function(t){this.store.dispatch({type:o.REMOVE_FEATURE_TOGGLE,payload:{name:t}})},t}();l=c([n.i(a.Injectable)(),s("design:paramtypes",["function"==typeof(u=void 0!==r.b&&r.b)&&u||Object])],l);var u},"fVG+":function(t,e,n){"use strict";var o=n("WWmu"),r=n("Rk7G"),a=n("3j3K");n.d(e,"a",function(){return s});var i=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){this.store=t,this.store=t}return t.prototype.ngOnInit=function(){},t.prototype.ngAfterViewInit=function(){var t=this,e={modes:["tree","code"],onChange:this.onJsonEditorChange.bind(this)};this.store.select("properties").subscribe(function(n){if(t.editor)t.editor.set(n);else{var o=document.getElementById("jsoneditor");t.editor=new JSONEditor(o,e,n)}})},t.prototype.onJsonEditorChange=function(){this.store.dispatch({type:r.c,payload:this.editor.get()})},t}();s=i([n.i(a.Component)({selector:"app-config-properties",template:n("0PnR"),styles:[n("5HNe")]}),c("design:paramtypes",["function"==typeof(l=void 0!==o.b&&o.b)&&l||Object])],s);var l},gB2f:function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,".toggles-table{padding:0;margin:0;box-shadow:2px 3px 4px -1px rgba(0,0,0,.1)}.toggles-table td{vertical-align:middle}.toggles-table .toggle-switch{margin:0}.remove-toggle-button{margin-right:0}.new-toggle-button{margin:0}.actions-cell,.actions-header{text-align:right;padding:10px 12px}.toggle-name-cell,.toggle-name-header{padding-left:20px;text-align:left}",""]),t.exports=t.exports.toString()},hbrJ:function(t,e,n){"use strict";var o=n("3j3K"),r=n("NVOs"),a=n("erzk");n.d(e,"a",function(){return s});var i=this&&this.__decorate||function(t,e,n,o){var r,a=arguments.length,i=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(i=(a<3?r(i):a>3?r(e,n,i):r(e,n))||i);return a>3&&i&&Object.defineProperty(e,n,i),i},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e){this.fb=t,this.featureTogglesService=e,this.submitted=!1,this.isAddToggleModalOpen=!1,this.toggleExistsWarning=!1}return t.prototype.ngOnInit=function(){this.featureToggleForm=this.fb.group({toggleName:new r.FormControl("",r.Validators.required),toggleState:new r.FormGroup({state:new r.FormControl("")})})},t.prototype.openAddToggleModal=function(){this.featureToggleForm.reset(),this.toggleExistsWarning=!1,this.submitted=!1,this.isAddToggleModalOpen=!0},t.prototype.addToggleClicked=function(){this.toggleExistsWarning=!1;var t=this.featureToggleForm.value;this.featureTogglesService.doesToggleAlreadyExist(t.toggleName)?this.toggleExistsWarning=!0:(this.isAddToggleModalOpen=!1,this.featureTogglesService.addFeatureToggle({name:t.toggleName,state:!!t.toggleState.state}))},t}();s=i([n.i(o.Component)({selector:"add-toggle-modal",template:n("BqYb"),styles:[n("WUsO")]}),c("design:paramtypes",["function"==typeof(l=void 0!==r.FormBuilder&&r.FormBuilder)&&l||Object,"function"==typeof(u=void 0!==a.a&&a.a)&&u||Object])],s);var l,u},kZql:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},luhW:function(t,e){},m9Pz:function(t,e,n){"use strict";var o=n("WwSq");n.d(e,"featureToggles",function(){return o.a});var r=n("GdbW");n.d(e,"ADD_FEATURE_TOGGLE",function(){return r.a}),n.d(e,"UPDATE_FEATURE_TOGGLE",function(){return r.b}),n.d(e,"REMOVE_FEATURE_TOGGLE",function(){return r.c});var a=n("luhW");n.n(a)},"qDj+":function(t,e,n){"use strict";function o(t,e){switch(void 0===t&&(t={}),e.type){case r.a:return a({},e.payload);case r.b:return a({},t,e.payload);default:return t}}var r=n("8rQD");e.a=o;var a=this&&this.__assign||Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}},sQHO:function(t,e,n){e=t.exports=n("FZ+f")(),e.push([t.i,".app-title{margin:0;padding-top:4px}.tabs{margin:10px 0 0}.panel{margin-top:20px}",""]),t.exports=t.exports.toString()},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("O61y"),r=n("3j3K"),a=n("kZql"),i=n("7G6f");a.a.production&&n.i(r.enableProdMode)(),n.i(o.a)().bootstrapModule(i.a)}},[0]);