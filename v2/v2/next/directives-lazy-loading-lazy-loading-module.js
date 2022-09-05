(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-lazy-loading-lazy-loading-module"],{

/***/ "./src/modules/directives/lazy-loading/examples/1/index.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/directives/lazy-loading/examples/1/index.ts ***!
  \*****************************************************************/
/*! exports provided: TuiLazyLoadingExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLazyLoadingExample1", function() { return TuiLazyLoadingExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_directives_lazy_loading_lazy_loading_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/directives/lazy-loading/lazy-loading.directive */ "../kit/directives/lazy-loading/lazy-loading.directive.ts");






function TuiLazyLoadingExample1_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const src_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", src_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class TuiLazyLoadingExample1 {
    constructor() {
        this.array = Array.from({ length: 100 }, (_, i) => `https://picsum.photos/${250 + i}/200`);
    }
}
TuiLazyLoadingExample1.ɵfac = function TuiLazyLoadingExample1_Factory(t) { return new (t || TuiLazyLoadingExample1)(); };
TuiLazyLoadingExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiLazyLoadingExample1, selectors: [["tui-lazy-loading-example-1"]], decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"], ["height", "200", "width", "300", "loading", "lazy", "alt", "Random image", 3, "src"]], template: function TuiLazyLoadingExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiLazyLoadingExample1_p_0_Template, 2, 1, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.array);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _kit_directives_lazy_loading_lazy_loading_directive__WEBPACK_IMPORTED_MODULE_4__["TuiLazyLoadingDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiLazyLoadingExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-lazy-loading-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/lazy-loading/lazy-loading.component.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/directives/lazy-loading/lazy-loading.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExampleTuiLazyLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiLazyLoadingComponent", function() { return ExampleTuiLazyLoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/directives/lazy-loading/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3645814477080407331$$SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS_1 = goog.getMsg("LazyLoading");
    I18N_0 = MSG_EXTERNAL_3645814477080407331$$SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟4727a3a4fb6a8fce0cb812e9a92b5abec4560374␟3645814477080407331:LazyLoading`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS_4 = goog.getMsg("Setup");
    I18N_3 = MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
}
const _c5 = ["pageTab", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4969273440499420724$$SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS__7 = goog.getMsg(" Directive can be used for image lazy loading. It is the same as {$startTagCode}loading=\"lazy\"{$closeTagCode} but supports also old browsers ", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_6 = MSG_EXTERNAL_4969273440499420724$$SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟ee0549f297efca2ad6925c188a6663569ba9b631␟4969273440499420724: Directive can be used for image lazy loading. It is the same as ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:loading="lazy"${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: but supports also old browsers `;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_142654590491855672$$SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS__9 = goog.getMsg("Usage");
    I18N_8 = MSG_EXTERNAL_142654590491855672$$SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`;
}
const _c10 = ["heading", I18N_8];
function ExampleTuiLazyLoadingComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-lazy-loading-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6992622872536485913$$SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS__12 = goog.getMsg(" Import {$startTagCode}TuiLazyLoadingModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_11 = MSG_EXTERNAL_6992622872536485913$$SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟da7842be9999dd0b75dd18ff949170e98e905fb6␟6992622872536485913: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiLazyLoadingModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8462337245784242323$$SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS__14 = goog.getMsg(" Add {$startTagCode}loading=\"lazy\"{$closeTagCode} for your elements: ", { "startTagCode": "\uFFFD#9\uFFFD", "closeTagCode": "\uFFFD/#9\uFFFD" });
    I18N_13 = MSG_EXTERNAL_8462337245784242323$$SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟734b34a878966d6000f0b021e4fc34b8faf470d7␟8462337245784242323: Add ${"\uFFFD#9\uFFFD"}:START_TAG_CODE:loading="lazy"${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_CODE: for your elements: `;
}
function ExampleTuiLazyLoadingComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](8, I18N_13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-doc-code", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleHtml);
} }
class ExampleTuiLazyLoadingComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/lazy-loading/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/lazy-loading/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/lazy-loading/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/lazy-loading/examples/1/index.html")),
        };
    }
}
ExampleTuiLazyLoadingComponent.ɵfac = function ExampleTuiLazyLoadingComponent_Factory(t) { return new (t || ExampleTuiLazyLoadingComponent)(); };
ExampleTuiLazyLoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiLazyLoadingComponent, selectors: [["example-tui-lazy-loading"]], decls: 5, vars: 0, consts: [["package", "KIT", "type", "directives", 6, "header"], ["pageTab", ""], [6, "pageTab"], ["id", "usage", 3, "content", 6, "heading"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiLazyLoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiLazyLoadingComponent_ng_template_2_Template, 6, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiLazyLoadingComponent_ng_template_3_Template, 11, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiLazyLoadingExample1"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiLazyLoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-lazy-loading`,
                templateUrl: `./lazy-loading.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/lazy-loading/lazy-loading.module.ts":
/*!********************************************************************!*\
  !*** ./src/modules/directives/lazy-loading/lazy-loading.module.ts ***!
  \********************************************************************/
/*! exports provided: ExampleTuiLazyLoadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiLazyLoadingModule", function() { return ExampleTuiLazyLoadingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_kit_directives_lazy_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit/directives/lazy-loading */ "../kit/directives/lazy-loading/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/directives/lazy-loading/examples/1/index.ts");
/* harmony import */ var _lazy_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lazy-loading.component */ "./src/modules/directives/lazy-loading/lazy-loading.component.ts");









class ExampleTuiLazyLoadingModule {
}
ExampleTuiLazyLoadingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiLazyLoadingModule });
ExampleTuiLazyLoadingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiLazyLoadingModule_Factory(t) { return new (t || ExampleTuiLazyLoadingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_kit_directives_lazy_loading__WEBPACK_IMPORTED_MODULE_4__["TuiLazyLoadingModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_lazy_loading_component__WEBPACK_IMPORTED_MODULE_6__["ExampleTuiLazyLoadingComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiLazyLoadingModule, { declarations: [_lazy_loading_component__WEBPACK_IMPORTED_MODULE_6__["ExampleTuiLazyLoadingComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_5__["TuiLazyLoadingExample1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_kit_directives_lazy_loading__WEBPACK_IMPORTED_MODULE_4__["TuiLazyLoadingModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_lazy_loading_component__WEBPACK_IMPORTED_MODULE_6__["ExampleTuiLazyLoadingComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiLazyLoadingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_kit_directives_lazy_loading__WEBPACK_IMPORTED_MODULE_4__["TuiLazyLoadingModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_lazy_loading_component__WEBPACK_IMPORTED_MODULE_6__["ExampleTuiLazyLoadingComponent"])),
                ],
                declarations: [_lazy_loading_component__WEBPACK_IMPORTED_MODULE_6__["ExampleTuiLazyLoadingComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_5__["TuiLazyLoadingExample1"]],
                exports: [_lazy_loading_component__WEBPACK_IMPORTED_MODULE_6__["ExampleTuiLazyLoadingComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=directives-lazy-loading-lazy-loading-module.js.map