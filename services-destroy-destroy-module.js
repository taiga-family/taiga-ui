(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-destroy-destroy-module"],{

/***/ "./src/modules/services/destroy/destroy.component.ts":
/*!***********************************************************!*\
  !*** ./src/modules/services/destroy/destroy.component.ts ***!
  \***********************************************************/
/*! exports provided: ExampleTuiDestroyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiDestroyComponent", function() { return ExampleTuiDestroyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1/component */ "./src/modules/services/destroy/examples/1/component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");









var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7345162232033285937$$SRC_MODULES_SERVICES_DESTROY_DESTROY_COMPONENT_TS__1 = goog.getMsg("A service to terminate subscriptions upon component/directive removal.");
    I18N_0 = MSG_EXTERNAL_7345162232033285937$$SRC_MODULES_SERVICES_DESTROY_DESTROY_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟6ff65f07910008f475816786be6a3ee282f9f827␟7345162232033285937:A service to terminate subscriptions upon component/directive removal.`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_SERVICES_DESTROY_DESTROY_COMPONENT_TS__3 = goog.getMsg("Basic");
    I18N_2 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_SERVICES_DESTROY_DESTROY_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c4 = ["heading", I18N_2];
function ExampleTuiDestroyComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-notification", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Component must have ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "providers: [TuiDestroyService]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-destroy-example");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example);
} }
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3876794271028769853$$SRC_MODULES_SERVICES_DESTROY_DESTROY_COMPONENT_TS__6 = goog.getMsg(" Inject {$startTagCode}TuiDestroyService{$closeTagCode} into your component: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_5 = MSG_EXTERNAL_3876794271028769853$$SRC_MODULES_SERVICES_DESTROY_DESTROY_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟51b42031d4cc73a637a303f36243fe7df0c02c36␟3876794271028769853: Inject ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiDestroyService${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into your component: `;
}
function ExampleTuiDestroyComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.injectService);
} }
class ExampleTuiDestroyComponent {
    constructor() {
        this.injectService = __webpack_require__.e(/*! import() | !raw-loader!-examples-inject-service-md */ "!!raw-loader!-examples-inject-service-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/inject-service.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/destroy/examples/inject-service.md"));
        this.example = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-component-ts */ "!!raw-loader!-examples-1-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/destroy/examples/1/component.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-template-html */ "!!raw-loader!-examples-1-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/destroy/examples/1/template.html")),
        };
    }
}
ExampleTuiDestroyComponent.ɵfac = function ExampleTuiDestroyComponent_Factory(t) { return new (t || ExampleTuiDestroyComponent)(); };
ExampleTuiDestroyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiDestroyComponent, selectors: [["example-tui-destroy"]], decls: 3, vars: 0, consts: [["header", "DestroyService", "package", "CDK", "path", "cdk/services/destroy.service.ts"], ["pageTab", ""], ["pageTab", "Setup"], ["status", "warning"], ["id", "Basic", 3, "content", 6, "heading"], [1, "b-demo-steps"], ["filename", "myComponent.component.ts", 3, "code"]], template: function ExampleTuiDestroyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiDestroyComponent_ng_template_1_Template, 9, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiDestroyComponent_ng_template_2_Template, 6, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocExampleComponent"], _examples_1_component__WEBPACK_IMPORTED_MODULE_6__["TuiDestroyExample"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiDestroyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-destroy`,
                templateUrl: `./destroy.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/services/destroy/destroy.module.ts":
/*!********************************************************!*\
  !*** ./src/modules/services/destroy/destroy.module.ts ***!
  \********************************************************/
/*! exports provided: ExampleTuiDestroyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiDestroyModule", function() { return ExampleTuiDestroyModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _destroy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./destroy.component */ "./src/modules/services/destroy/destroy.component.ts");
/* harmony import */ var _examples_1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1/component */ "./src/modules/services/destroy/examples/1/component.ts");









class ExampleTuiDestroyModule {
}
ExampleTuiDestroyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiDestroyModule });
ExampleTuiDestroyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiDestroyModule_Factory(t) { return new (t || ExampleTuiDestroyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_destroy_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiDestroyComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiDestroyModule, { declarations: [_destroy_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiDestroyComponent"], _examples_1_component__WEBPACK_IMPORTED_MODULE_6__["TuiDestroyExample"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_destroy_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiDestroyComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiDestroyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_destroy_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiDestroyComponent"])),
                ],
                declarations: [_destroy_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiDestroyComponent"], _examples_1_component__WEBPACK_IMPORTED_MODULE_6__["TuiDestroyExample"]],
                exports: [_destroy_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiDestroyComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/services/destroy/examples/1/component.ts":
/*!**************************************************************!*\
  !*** ./src/modules/services/destroy/examples/1/component.ts ***!
  \**************************************************************/
/*! exports provided: TuiDestroyExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDestroyExample", function() { return TuiDestroyExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");









class TuiDestroyExample {
    constructor(destroy$, { nativeElement }) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(nativeElement, `click`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(destroy$))
            .subscribe(() => console.info(`click`));
    }
}
TuiDestroyExample.ɵfac = function TuiDestroyExample_Factory(t) { return new (t || TuiDestroyExample)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
TuiDestroyExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiDestroyExample, selectors: [["tui-destroy-example"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]])], decls: 2, vars: 0, consts: [["tuiButton", "", "type", "button", "appearance", "primary", "size", "m"]], template: function TuiDestroyExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Click me!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiDestroyExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-destroy-example`,
                templateUrl: `./template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
                providers: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]],
            }]
    }], function () { return [{ type: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=services-destroy-destroy-module.js.map