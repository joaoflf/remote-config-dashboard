webpackJsonp([1,5],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state_management_apps__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_management_app__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(store) {
        this.store = store;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedApp$ = this.store.select('app');
        this.apps$ = this.store.select('apps');
        this.store.select('app').subscribe(function (app) {
            _this.selectedAppId = app.id;
        });
        //select and fetch the first app on the list
        this.store.select('apps').subscribe(function (apps) {
            if (apps.length) {
                _this.store.dispatch({
                    type: __WEBPACK_IMPORTED_MODULE_1__state_management_app__["LOAD_APP"],
                    payload: {
                        id: apps[0].id
                    }
                });
            }
        });
        //Load list of apps from API
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_0__state_management_apps__["c" /* LOAD_APPS */],
            payload: {}
        });
    };
    AppComponent.prototype.loadApp = function (id) {
        if (id !== this.selectedAppId) {
            this.store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_1__state_management_app__["LOAD_APP"],
                payload: {
                    id: id
                }
            });
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(376),
        styles: [__webpack_require__(368)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/app.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feature_toggles_reducers__ = __webpack_require__(210);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "featureToggles", function() { return __WEBPACK_IMPORTED_MODULE_0__feature_toggles_reducers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feature_toggles_actions__ = __webpack_require__(76);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "ADD_FEATURE_TOGGLE", function() { return __WEBPACK_IMPORTED_MODULE_1__feature_toggles_actions__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FEATURE_TOGGLE", function() { return __WEBPACK_IMPORTED_MODULE_1__feature_toggles_actions__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FEATURE_TOGGLE", function() { return __WEBPACK_IMPORTED_MODULE_1__feature_toggles_actions__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feature_toggle_model__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feature_toggle_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__feature_toggle_model__);
/* unused harmony namespace reexport */



//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/index.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UPDATE_PROPERTIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_PROPERTIES_SUCCESS; });
var UPDATE_PROPERTIES = 'UPDATE_PROPERTIES';
var LOAD_PROPERTIES_SUCCESS = 'LOAD_PROPERTIES_SUCCESS';
//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/properties.actions.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 173;


/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app___ = __webpack_require__(203);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/main.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__state_management_app__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_management_apps__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_management_properties__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_management_feature_toggles__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_clarity_angular__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_clarity_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_clarity_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__feature_toggles_feature_toggles_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__config_properties_config_properties_component__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__feature_toggles_feature_toggles_component__["a" /* FeatureTogglesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__config_properties_config_properties_component__["a" /* ConfigPropertiesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10_clarity_angular__["ClarityModule"].forChild(),
            __WEBPACK_IMPORTED_MODULE_12__ngrx_store__["a" /* StoreModule */].provideStore({ featureToggles: __WEBPACK_IMPORTED_MODULE_4__state_management_feature_toggles__["featureToggles"], properties: __WEBPACK_IMPORTED_MODULE_3__state_management_properties__["a" /* properties */], apps: __WEBPACK_IMPORTED_MODULE_2__state_management_apps__["a" /* apps */], app: __WEBPACK_IMPORTED_MODULE_0__state_management_app__["app"] }),
            __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension({
                maxAge: 5
            }),
            __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_2__state_management_apps__["b" /* AppsEffects */]),
            __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_0__state_management_app__["AppEffects"])
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
        ],
    })
], AppModule);

//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/app.module.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_management_properties__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigPropertiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfigPropertiesComponent = (function () {
    function ConfigPropertiesComponent(store) {
        this.store = store;
        this.store = store;
    }
    ConfigPropertiesComponent.prototype.ngOnInit = function () {
    };
    ConfigPropertiesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var editorOptions = {
            modes: ['tree', 'code'],
            onChange: this.onJsonEditorChange.bind(this)
        };
        this.store.select('properties').subscribe(function (properties) {
            if (!_this.editor) {
                var templateDivRef = document.getElementById('jsoneditor');
                _this.editor = new JSONEditor(templateDivRef, editorOptions, properties);
            }
            else {
                _this.editor.set(properties);
            }
        });
    };
    ConfigPropertiesComponent.prototype.onJsonEditorChange = function () {
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_1__state_management_properties__["c" /* UPDATE_PROPERTIES */],
            payload: this.editor.get()
        });
    };
    return ConfigPropertiesComponent;
}());
ConfigPropertiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-config-properties',
        template: __webpack_require__(377),
        styles: [__webpack_require__(369)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], ConfigPropertiesComponent);

var _a;
//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/config-properties.component.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_management_feature_toggles__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureTogglesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeatureTogglesComponent = (function () {
    function FeatureTogglesComponent(store, fb) {
        var _this = this;
        this.store = store;
        this.fb = fb;
        this.submitted = false;
        this.isAddToggleModalOpen = false;
        this.isConfirmationModalOpen = false;
        this.toggleExistsWarning = false;
        this.featureToggles$ = store.select('featureToggles');
        // for sync operations
        this.featureToggles$.subscribe(function (toggles) { _this.featureToggles = toggles; });
    }
    FeatureTogglesComponent.prototype.ngOnInit = function () {
        this.featureToggleForm = this.fb.group({
            toggleName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required),
            toggleState: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
                state: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('')
            })
        });
    };
    FeatureTogglesComponent.prototype.openAddToggleModal = function () {
        this.featureToggleForm.reset();
        this.submitted = false;
        this.isAddToggleModalOpen = true;
    };
    FeatureTogglesComponent.prototype.doesToggleAlreadyExist = function (name) {
        return this.featureToggles.filter(function (toggle) { return toggle.name === name; }).length;
    };
    FeatureTogglesComponent.prototype.addToggleClicked = function () {
        this.toggleExistsWarning = false;
        var formData = this.featureToggleForm.value;
        if (this.doesToggleAlreadyExist(formData.toggleName)) {
            this.toggleExistsWarning = true;
        }
        else {
            this.isAddToggleModalOpen = false;
            this.store.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_2__state_management_feature_toggles__["ADD_FEATURE_TOGGLE"],
                payload: {
                    name: formData.toggleName,
                    state: !!formData.toggleState.state
                }
            });
        }
    };
    FeatureTogglesComponent.prototype.updateFeatureToggle = function (name, state) {
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_2__state_management_feature_toggles__["UPDATE_FEATURE_TOGGLE"],
            payload: {
                name: name,
                state: state
            }
        });
    };
    FeatureTogglesComponent.prototype.removeFeatureToggle = function (name) {
        this.isConfirmationModalOpen = true;
        this.openConfirmationModal("Are you sure you want to remove the toggle " + name + "?");
        this.selectedToggleName = name;
    };
    FeatureTogglesComponent.prototype.openConfirmationModal = function (message) {
        this.isConfirmationModalOpen = true;
        this.confirmationMessage = message;
    };
    FeatureTogglesComponent.prototype.confirmToggleRemoval = function () {
        this.isConfirmationModalOpen = false;
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_2__state_management_feature_toggles__["REMOVE_FEATURE_TOGGLE"],
            payload: {
                name: this.selectedToggleName
            }
        });
    };
    return FeatureTogglesComponent;
}());
FeatureTogglesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-feature-toggles',
        template: __webpack_require__(378),
        styles: [__webpack_require__(370)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _b || Object])
], FeatureTogglesComponent);

var _a, _b;
//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/feature-toggles.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(116);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(200);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/index.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feature_toggles_feature_toggles_actions__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__properties__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_actions__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_from__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_from__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppEffects = (function () {
    function AppEffects(http, actions$) {
        var _this = this;
        this.http = http;
        this.actions$ = actions$;
        this.loadApp$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_6__app_actions__["a" /* LOAD_APP */])
            .switchMap(function (action) { return _this.http.get('https://demo6219157.mockable.io/apps/' + action.payload.id)
            .map(function (res) { return res.json(); }); })
            .mergeMap(function (app) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].from([
                {
                    type: __WEBPACK_IMPORTED_MODULE_6__app_actions__["b" /* LOAD_APP_SUCCESS */],
                    payload: { id: app.id, name: app.name }
                },
                {
                    type: __WEBPACK_IMPORTED_MODULE_1__properties__["b" /* LOAD_PROPERTIES_SUCCESS */],
                    payload: app.properties
                },
                {
                    type: __WEBPACK_IMPORTED_MODULE_0__feature_toggles_feature_toggles_actions__["a" /* LOAD_TOGGLES_SUCCESS */],
                    payload: app.featureToggles
                }
            ]);
        });
    }
    return AppEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AppEffects.prototype, "loadApp$", void 0);
AppEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["c" /* Actions */]) === "function" && _b || Object])
], AppEffects);

var _a, _b;
//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/app.effects.js.map

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/app.model.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_actions__ = __webpack_require__(72);
/* harmony export (immutable) */ __webpack_exports__["a"] = app;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function app(appState, action) {
    if (appState === void 0) { appState = {}; }
    var id, name;
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__app_actions__["c" /* UPDATE_APP_NAME */]:
            (name = action.payload.name);
            return __assign({}, appState, { name: name });
        case __WEBPACK_IMPORTED_MODULE_0__app_actions__["b" /* LOAD_APP_SUCCESS */]:
            (id = action.payload.id);
            (name = action.payload.name);
            return __assign({}, appState, { id: id, name: name });
        default: {
            return appState;
        }
    }
}
;
//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/app.reducers.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__apps_actions__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppsEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppsEffects = (function () {
    function AppsEffects(http, actions$) {
        var _this = this;
        this.http = http;
        this.actions$ = actions$;
        this.appLaunch$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__apps_actions__["a" /* LOAD_APPS */])
            .switchMap(function () { return _this.http.get('https://demo6219157.mockable.io/apps')
            .map(function (res) { return res.json(); }); })
            .map(function (apps) {
            return {
                type: __WEBPACK_IMPORTED_MODULE_3__apps_actions__["b" /* LOAD_APPS_SUCCESS */],
                payload: apps
            };
        });
    }
    return AppsEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], AppsEffects.prototype, "appLaunch$", void 0);
AppsEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */]) === "function" && _b || Object])
], AppsEffects);

var _a, _b;
//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/apps.effects.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apps_actions__ = __webpack_require__(74);
/* harmony export (immutable) */ __webpack_exports__["a"] = apps;

function apps(appsState, action) {
    if (appsState === void 0) { appsState = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__apps_actions__["b" /* LOAD_APPS_SUCCESS */]:
            return action.payload.slice();
        case __WEBPACK_IMPORTED_MODULE_0__apps_actions__["a" /* LOAD_APPS */]:
            return appsState;
        default: {
            return appsState;
        }
    }
}
;
//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/apps.reducers.js.map

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/feature-toggle.model.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feature_toggles_actions__ = __webpack_require__(76);
/* harmony export (immutable) */ __webpack_exports__["a"] = featureToggles;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function featureToggles(featureTogglesState, action) {
    if (featureTogglesState === void 0) { featureTogglesState = []; }
    var state, name;
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__feature_toggles_actions__["a" /* LOAD_TOGGLES_SUCCESS */]:
            return action.payload.slice();
        case __WEBPACK_IMPORTED_MODULE_0__feature_toggles_actions__["b" /* ADD_FEATURE_TOGGLE */]:
            (name = action.payload.name);
            (state = action.payload.state);
            return featureTogglesState.concat([{ name: name, state: state }]);
        case __WEBPACK_IMPORTED_MODULE_0__feature_toggles_actions__["c" /* REMOVE_FEATURE_TOGGLE */]:
            (name = action.payload.name);
            return featureTogglesState.filter(function (toggle) {
                return toggle.name !== name;
            });
        case __WEBPACK_IMPORTED_MODULE_0__feature_toggles_actions__["d" /* UPDATE_FEATURE_TOGGLE */]:
            (name = action.payload.name);
            (state = action.payload.state);
            var index = featureTogglesState.map(function (toggle) { return toggle.name; }).indexOf(name);
            return featureTogglesState.slice(0, index).concat([
                __assign({}, featureTogglesState[index], { name: name, state: state })
            ], featureTogglesState.slice(index + 1));
        default: {
            return featureTogglesState;
        }
    }
}
;
//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/feature-toggles.reducers.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__properties_actions__ = __webpack_require__(118);
/* harmony export (immutable) */ __webpack_exports__["a"] = properties;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function properties(propertiesState, action) {
    if (propertiesState === void 0) { propertiesState = {}; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__properties_actions__["a" /* LOAD_PROPERTIES_SUCCESS */]:
            return __assign({}, action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__properties_actions__["b" /* UPDATE_PROPERTIES */]:
            return __assign({}, propertiesState, action.payload);
        default: {
            return propertiesState;
        }
    }
}
;
//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/properties.reducers.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/environment.js.map

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, ".app-title {\n  margin: 0;\n  padding-top: 4px; }\n\n.tabs {\n  margin: 10px 0 0 0; }\n\n.panel {\n  margin-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, ".toggles-table {\n  padding: 0;\n  margin: 0; }\n  .toggles-table td {\n    vertical-align: middle; }\n  .toggles-table .toggle-switch {\n    margin: 0; }\n\n.remove-toggle {\n  cursor: pointer; }\n  .remove-toggle:hover {\n    color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <header class=\"header header-4\">\n        <div class=\"branding\">\n            <a href=\"\" class=\"nav-link\">\n                <clr-icon shape=\"analytics\" class=\"is-inverse\"></clr-icon>\n                <span class=\"title\">Remote Config Dashboard</span>\n            </a>\n        </div>\n    </header>\n    <div class=\"content-container\">\n        <div class=\"content-area\">\n            <div class=\"row col-xs-12\">\n                <h3 class=\"app-title \">\n                    {{ (selectedApp$ | async)?.name }}\n                </h3>\n                <clr-dropdown class=\"\">\n                    <button class=\"btn btn-link\" clrDropdownToggle>\n                        Change app\n                        <clr-icon shape=\"caret down\"></clr-icon>\n                    </button>\n                    <div class=\"dropdown-menu\">\n                        <a *ngFor=\"let app of (apps$ | async)\" (click)=\"loadApp(app.id)\" clrDropdownItem>{{ app.name }}</a>\n                    </div>\n                </clr-dropdown>\n            </div>\n\n            <clr-tabs class=\"tabs row flex-items-xs-center\">\n                <clr-tab-link>Feature Toggles</clr-tab-link>\n                <clr-tab-link>Config Properties</clr-tab-link>\n                <clr-tab-content class=\"col-xs-12 col-md-10 col-lg-8 col-xl-6 panel\">\n                    <app-feature-toggles></app-feature-toggles>\n                </clr-tab-content>\n                <clr-tab-content class=\"col-xs-12 col-md-10 col-lg-8 col-xl-6 panel\">\n                    <app-config-properties></app-config-properties>\n                </clr-tab-content>\n            </clr-tabs>\n        </div>\n    </div>"

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

module.exports = "<div>\n    <div id=\"jsoneditor\"></div>\n</div>"

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-outline-primary btn-sm\" (click)=\"openAddToggleModal()\">Add Toggle</button>\n<table class=\"toggles-table table\">\n    <thead>\n        <tr>\n            <th>Feature</th>\n            <th>State</th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let toggle of featureToggles$ | async\">\n            <td>{{toggle.name}}</td>\n            <td>\n                <div class=\"toggle-switch\">\n                    <input type=\"checkbox\" id=\"{{toggle.name}}\" [attr.checked]=\"toggle.state ? true : null\" (change)=\"updateFeatureToggle(toggle.name, $event.target.checked)\">\n                    <label for=\"{{toggle.name}}\"></label>\n                </div>\n            </td>\n            <td>\n                <clr-icon class=\"remove-toggle\" shape=\"trash\" size=\"16\" (click)=\"removeFeatureToggle(toggle.name)\"></clr-icon>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n\n<clr-modal [(clrModalOpen)]=\"isAddToggleModalOpen\" [clrModalClosable]=\"false\">\n    <h5 class=\"modal-title\">Create a new feature toggle</h5>\n    <div class=\"modal-body\">\n        <div class=\"alert alert-danger\" *ngIf=\"toggleExistsWarning\">\n            <div class=\"alert-item\">\n                <span class=\"alert-text\">\n                A toggle with this name already exists.\n            </span>\n            </div>\n        </div>\n        <form class=\"form\" [formGroup]=\"featureToggleForm\" [hidden]=\"submitted\">\n            <section class=\"form-block\">\n                <div class=\"form-group\">\n                    <label for=\"toggleName\">Feature Name</label>\n                    <label for=\"toggleName\" aria-haspopup=\"true\" role=\"tooltip\" class=\"tooltip tooltip-validation tooltip-sm tooltip-right\" [class.invalid]=\"featureToggleForm.get('toggleName').invalid\n                    && (featureToggleForm.get('toggleName').dirty || featureToggleForm.get('toggleName').touched)\">\n                        <input id=\"toggleName\" type=\"text\"\n                            formControlName=\"toggleName\">\n                        <span class=\"tooltip-content\">\n                            Name is required.\n                        </span>\n                    </label>\n                </div>\n                <div formGroupName=\"toggleState\">\n                    <div class=\"form-group\">\n                        <label for=\"toggleState\">Initial State</label>\n                        <div for=\"toggleState\" class=\"toggle-switch\">\n                            <input id=\"state\" type=\"checkbox\" formControlName=\"state\">\n                            <label for=\"state\"></label>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"isAddToggleModalOpen = false\">Cancel</button>\n        <button class=\"btn btn-primary\" (click)=\"addToggleClicked()\" type=\"submit\" [disabled]=\"featureToggleForm.invalid\">Create</button>\n    </div>\n</clr-modal>\n<clr-modal [(clrModalOpen)]=\"isConfirmationModalOpen\">\n    <div class=\"modal-body\">\n        <p>{{this.confirmationMessage}}</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline\" (click)=\"isConfirmationModalOpen = false\">No</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirmToggleRemoval()\">Yes</button>\n    </div>\n</clr-modal>"

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(174);


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UPDATE_APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_APP_SUCCESS; });
var UPDATE_APP_NAME = 'UPDATE_APP_NAME';
var LOAD_APP = 'LOAD_APP';
var LOAD_APP_SUCCESS = 'LOAD_APP_SUCCESS';
//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/app.actions.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_model__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__app_model__, "app")) __webpack_require__.d(__webpack_exports__, "app", function() { return __WEBPACK_IMPORTED_MODULE_0__app_model__["app"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__app_model__, "AppEffects")) __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return __WEBPACK_IMPORTED_MODULE_0__app_model__["AppEffects"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__app_model__, "LOAD_APP")) __webpack_require__.d(__webpack_exports__, "LOAD_APP", function() { return __WEBPACK_IMPORTED_MODULE_0__app_model__["LOAD_APP"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_reducers__ = __webpack_require__(206);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "app", function() { return __WEBPACK_IMPORTED_MODULE_1__app_reducers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_actions__ = __webpack_require__(72);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "LOAD_APP", function() { return __WEBPACK_IMPORTED_MODULE_2__app_actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_effects__ = __webpack_require__(204);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return __WEBPACK_IMPORTED_MODULE_3__app_effects__["a"]; });




//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/index.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_APPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_APPS_SUCCESS; });
var LOAD_APPS = 'LOAD_APPS';
var LOAD_APPS_SUCCESS = 'LOAD_APPS_SUCCESS';
//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/apps.actions.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apps_reducers__ = __webpack_require__(208);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__apps_reducers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apps_actions__ = __webpack_require__(74);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__apps_actions__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apps_effects__ = __webpack_require__(207);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__apps_effects__["a"]; });



//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/index.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_FEATURE_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return REMOVE_FEATURE_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UPDATE_FEATURE_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_TOGGLES_SUCCESS; });
var ADD_FEATURE_TOGGLE = 'ADD_FEATURE_TOGGLE';
var REMOVE_FEATURE_TOGGLE = 'REMOVE_FEATURE_TOGGLE';
var UPDATE_FEATURE_TOGGLE = 'UPDATE_FEATURE_TOGGLE';
var LOAD_TOGGLES_SUCCESS = 'LOAD_TOGGLES_SUCCESS';
//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/feature-toggles.actions.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__properties_reducers__ = __webpack_require__(211);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__properties_reducers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__properties_actions__ = __webpack_require__(118);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__properties_actions__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__properties_actions__["b"]; });


//# sourceMappingURL=/Users/joaofernandes/Playground/remote-config-dashboard/src/index.js.map

/***/ })

},[412]);
//# sourceMappingURL=main.bundle.js.map