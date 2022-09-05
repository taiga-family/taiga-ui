(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-copy-processor-copy-processor-module"],{

/***/ "../cdk/directives/copy-processor/copy-processor.directive.ts":
/*!********************************************************************!*\
  !*** ../cdk/directives/copy-processor/copy-processor.directive.ts ***!
  \********************************************************************/
/*! exports provided: TuiCopyProcessorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCopyProcessorDirective", function() { return TuiCopyProcessorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-web-apis/common */ "../../node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js");
/* harmony import */ var _taiga_ui_cdk_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk/decorators */ "../cdk/decorators/index.ts");
/* harmony import */ var _taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk/utils */ "../cdk/utils/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");







// @dynamic
class TuiCopyProcessorDirective {
    constructor(windowRef) {
        this.windowRef = windowRef;
        this.tuiCopyProcessor = rxjs__WEBPACK_IMPORTED_MODULE_5__["identity"];
    }
    onCopy(event) {
        var _a;
        const text = Object(_taiga_ui_cdk_utils__WEBPACK_IMPORTED_MODULE_4__["tuiGetSelectedText"])(this.windowRef);
        if (text) {
            (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.setData(`text/plain`, this.tuiCopyProcessor(text));
        }
    }
}
TuiCopyProcessorDirective.ɵfac = function TuiCopyProcessorDirective_Factory(t) { return new (t || TuiCopyProcessorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_2__["WINDOW"])); };
TuiCopyProcessorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TuiCopyProcessorDirective, selectors: [["", "tuiCopyProcessor", ""]], hostBindings: function TuiCopyProcessorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("copy.prevent", function TuiCopyProcessorDirective_copy_prevent_HostBindingHandler($event) { return ctx.onCopy($event); });
    } }, inputs: { tuiCopyProcessor: "tuiCopyProcessor" } });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk_decorators__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiCopyProcessorDirective.prototype, "tuiCopyProcessor", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiCopyProcessorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `[tuiCopyProcessor]`,
            }]
    }], function () { return [{ type: Window, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]]
            }] }]; }, { tuiCopyProcessor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onCopy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: [`copy.prevent`, [`$event`]]
        }] }); })();


/***/ }),

/***/ "../cdk/directives/copy-processor/copy-processor.module.ts":
/*!*****************************************************************!*\
  !*** ../cdk/directives/copy-processor/copy-processor.module.ts ***!
  \*****************************************************************/
/*! exports provided: TuiCopyProcessorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCopyProcessorModule", function() { return TuiCopyProcessorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _copy_processor_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copy-processor.directive */ "../cdk/directives/copy-processor/copy-processor.directive.ts");



class TuiCopyProcessorModule {
}
TuiCopyProcessorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TuiCopyProcessorModule });
TuiCopyProcessorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TuiCopyProcessorModule_Factory(t) { return new (t || TuiCopyProcessorModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TuiCopyProcessorModule, { declarations: [_copy_processor_directive__WEBPACK_IMPORTED_MODULE_1__["TuiCopyProcessorDirective"]], exports: [_copy_processor_directive__WEBPACK_IMPORTED_MODULE_1__["TuiCopyProcessorDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCopyProcessorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_copy_processor_directive__WEBPACK_IMPORTED_MODULE_1__["TuiCopyProcessorDirective"]],
                exports: [_copy_processor_directive__WEBPACK_IMPORTED_MODULE_1__["TuiCopyProcessorDirective"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../cdk/directives/copy-processor/index.ts":
/*!*************************************************!*\
  !*** ../cdk/directives/copy-processor/index.ts ***!
  \*************************************************/
/*! exports provided: TuiCopyProcessorDirective, TuiCopyProcessorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copy_processor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy-processor.directive */ "../cdk/directives/copy-processor/copy-processor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCopyProcessorDirective", function() { return _copy_processor_directive__WEBPACK_IMPORTED_MODULE_0__["TuiCopyProcessorDirective"]; });

/* harmony import */ var _copy_processor_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copy-processor.module */ "../cdk/directives/copy-processor/copy-processor.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiCopyProcessorModule", function() { return _copy_processor_module__WEBPACK_IMPORTED_MODULE_1__["TuiCopyProcessorModule"]; });





/***/ }),

/***/ "./src/modules/directives/copy-processor/copy-processor.component.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/directives/copy-processor/copy-processor.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExampleTuiCopyProcessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCopyProcessorComponent", function() { return ExampleTuiCopyProcessorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/directives/copy-processor/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4194549152426589533$$SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS_1 = goog.getMsg("CopyProcessor");
    I18N_0 = MSG_EXTERNAL_4194549152426589533$$SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟37561c7adb608b3f1dd2646ff27670a6a18c7ab0␟4194549152426589533:CopyProcessor`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS_4 = goog.getMsg("Setup");
    I18N_3 = MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
}
const _c5 = ["pageTab", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8034929292308673999$$SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS__7 = goog.getMsg("Directive is used to processed text when coping");
    I18N_6 = MSG_EXTERNAL_8034929292308673999$$SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟a0aef0f19512c3fb91ea516052bce537ce0f7ece␟8034929292308673999:Directive is used to processed text when coping`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_142654590491855672$$SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS__9 = goog.getMsg("Usage");
    I18N_8 = MSG_EXTERNAL_142654590491855672$$SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`;
}
const _c10 = ["heading", I18N_8];
function ExampleTuiCopyProcessorComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-copy-processor-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6368157042718938776$$SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS__12 = goog.getMsg(" Import {$startTagCode}TuiCopyProcessorModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_11 = MSG_EXTERNAL_6368157042718938776$$SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟415953669748407dbf44a8cbc7e8ef893a56fec9␟6368157042718938776: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCopyProcessorModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS__14 = goog.getMsg("Add to the template:");
    I18N_13 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_COPY_PROCESSOR_COPY_PROCESSOR_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiCopyProcessorComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleHtml);
} }
class ExampleTuiCopyProcessorComponent {
    constructor() {
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/copy-processor/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/copy-processor/examples/1/index.html")),
        };
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/copy-processor/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/copy-processor/examples/import/insert-template.md"));
    }
}
ExampleTuiCopyProcessorComponent.ɵfac = function ExampleTuiCopyProcessorComponent_Factory(t) { return new (t || ExampleTuiCopyProcessorComponent)(); };
ExampleTuiCopyProcessorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiCopyProcessorComponent, selectors: [["example-tui-copy-processor"]], decls: 5, vars: 0, consts: [["package", "CDK", "type", "directives", 6, "header"], ["pageTab", ""], [6, "pageTab"], ["id", "usage", 3, "content", 6, "heading"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiCopyProcessorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiCopyProcessorComponent_ng_template_2_Template, 5, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiCopyProcessorComponent_ng_template_3_Template, 10, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiCopyProcessorExample1"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiCopyProcessorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-copy-processor`,
                templateUrl: `./copy-processor.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/copy-processor/copy-processor.module.ts":
/*!************************************************************************!*\
  !*** ./src/modules/directives/copy-processor/copy-processor.module.ts ***!
  \************************************************************************/
/*! exports provided: ExampleTuiCopyProcessorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCopyProcessorModule", function() { return ExampleTuiCopyProcessorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk_directives_copy_processor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk/directives/copy-processor */ "../cdk/directives/copy-processor/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _copy_processor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./copy-processor.component */ "./src/modules/directives/copy-processor/copy-processor.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/directives/copy-processor/examples/1/index.ts");











class ExampleTuiCopyProcessorModule {
}
ExampleTuiCopyProcessorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiCopyProcessorModule });
ExampleTuiCopyProcessorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiCopyProcessorModule_Factory(t) { return new (t || ExampleTuiCopyProcessorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputNumberModule"],
            _taiga_ui_cdk_directives_copy_processor__WEBPACK_IMPORTED_MODULE_5__["TuiCopyProcessorModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_copy_processor_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiCopyProcessorComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiCopyProcessorModule, { declarations: [_copy_processor_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiCopyProcessorComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiCopyProcessorExample1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputNumberModule"],
        _taiga_ui_cdk_directives_copy_processor__WEBPACK_IMPORTED_MODULE_5__["TuiCopyProcessorModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_copy_processor_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiCopyProcessorComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiCopyProcessorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputNumberModule"],
                    _taiga_ui_cdk_directives_copy_processor__WEBPACK_IMPORTED_MODULE_5__["TuiCopyProcessorModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_copy_processor_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiCopyProcessorComponent"])),
                ],
                declarations: [_copy_processor_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiCopyProcessorComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiCopyProcessorExample1"]],
                exports: [_copy_processor_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiCopyProcessorComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/copy-processor/examples/1/index.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/directives/copy-processor/examples/1/index.ts ***!
  \*******************************************************************/
/*! exports provided: TuiCopyProcessorExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCopyProcessorExample1", function() { return TuiCopyProcessorExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.component */ "../kit/components/input-number/input-number.component.ts");
/* harmony import */ var _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.directive */ "../kit/components/input-number/input-number.directive.ts");
/* harmony import */ var _cdk_directives_copy_processor_copy_processor_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../cdk/directives/copy-processor/copy-processor.directive */ "../cdk/directives/copy-processor/copy-processor.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");










class TuiCopyProcessorExample1 {
    constructor(format, alertService) {
        this.format = format;
        this.alertService = alertService;
        this.value = 12345.67;
        this.numberProcessor = text => text
            .replace(this.format.decimalSeparator, `.`)
            .replace(new RegExp(this.format.thousandSeparator, `g`), ``);
        this.textProcessor = text => text.toUpperCase();
    }
    onCopy(event) {
        var _a, _b;
        this.alertService
            .open((_b = (_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData(`text/plain`)) !== null && _b !== void 0 ? _b : ``)
            .subscribe();
    }
}
TuiCopyProcessorExample1.ɵfac = function TuiCopyProcessorExample1_Factory(t) { return new (t || TuiCopyProcessorExample1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TUI_NUMBER_FORMAT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"])); };
TuiCopyProcessorExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCopyProcessorExample1, selectors: [["tui-copy-processor-example-1"]], hostBindings: function TuiCopyProcessorExample1_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("copy", function TuiCopyProcessorExample1_copy_HostBindingHandler($event) { return ctx.onCopy($event); });
    } }, decls: 4, vars: 3, consts: [[1, "tui-space_bottom-2", 3, "tuiCopyProcessor", "ngModel", "ngModelChange"], [3, "tuiCopyProcessor"]], template: function TuiCopyProcessorExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-number", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiCopyProcessorExample1_Template_tui_input_number_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Copy this\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Try copy this text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCopyProcessor", ctx.numberProcessor)("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCopyProcessor", ctx.textProcessor);
    } }, directives: [_kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputNumberComponent"], _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_5__["TuiInputNumberDirective"], _cdk_directives_copy_processor_copy_processor_directive__WEBPACK_IMPORTED_MODULE_6__["TuiCopyProcessorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9jb3B5LXByb2Nlc3Nvci9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvY29weS1wcm9jZXNzb3IvZXhhbXBsZXMvMS9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9jb3B5LXByb2Nlc3Nvci9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCopyProcessorExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-copy-processor-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TUI_NUMBER_FORMAT"]]
            }] }, { type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"]]
            }] }]; }, { onCopy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: [`copy`, [`$event`]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=directives-copy-processor-copy-processor-module.js.map