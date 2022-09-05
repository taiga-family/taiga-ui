(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-elastic-sticky-elastic-sticky-module"],{

/***/ "./src/modules/directives/elastic-sticky/elastic-sticky.component.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/directives/elastic-sticky/elastic-sticky.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExampleTuiElasticStickyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiElasticStickyComponent", function() { return ExampleTuiElasticStickyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/directives/elastic-sticky/examples/1/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2999418804116570988$$SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS_1 = goog.getMsg("ElasticSticky");
    I18N_0 = MSG_EXTERNAL_2999418804116570988$$SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟1bbe38f3d6e9ed9c99d121016ed7736383159712␟2999418804116570988:ElasticSticky`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS_4 = goog.getMsg("Setup");
    I18N_3 = MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS_4;
}
else {
    I18N_3 = $localize `:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
}
const _c5 = ["pageTab", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1069739451984311177$$SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__7 = goog.getMsg(" Directive allows to scale \"stuck\" sticky heading. It can also be used as service {$startTagCode}TuiElasticStickyService{$closeTagCode}", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_6 = MSG_EXTERNAL_1069739451984311177$$SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟c6235b43afa4c1ef8a01717b04ef107c2266f2d6␟1069739451984311177: Directive allows to scale "stuck" sticky heading. It can also be used as service ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:TuiElasticStickyService${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__9 = goog.getMsg("Basic");
    I18N_8 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c10 = ["heading", I18N_8];
function ExampleTuiElasticStickyComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-elastic-sticky-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6720297895407195491$$SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__12 = goog.getMsg(" Import {$startTagCode}TuiScrollbarModule{$closeTagCode} and {$startTagCode}TuiElasticStickyModule{$closeTagCode} into your component module: ", { "startTagCode": "[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]", "closeTagCode": "[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]" });
    I18N_11 = MSG_EXTERNAL_6720297895407195491$$SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟0bd953ba150777bd6895f0c553536a67306210d3␟6720297895407195491: Import ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiScrollbarModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiElasticStickyModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: into your component module: `;
}
I18N_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_11);
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__14 = goog.getMsg("Add to the template:");
    I18N_13 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2855971164966194574$$SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__16 = goog.getMsg("Subscribe on changes and scale elements:");
    I18N_15 = MSG_EXTERNAL_2855971164966194574$$SRC_MODULES_DIRECTIVES_ELASTIC_STICKY_ELASTIC_STICKY_COMPONENT_TS__16;
}
else {
    I18N_15 = $localize `:␟d96ae21b5f9b7981f17002f4c6f6bc0e4365dc95␟2855971164966194574:Subscribe on changes and scale elements:`;
}
function ExampleTuiElasticStickyComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-doc-code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, I18N_13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-doc-code", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](13, I18N_15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tui-doc-code", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleComponent);
} }
class ExampleTuiElasticStickyComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/elastic-sticky/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/elastic-sticky/examples/import/insert-template.md"));
        this.exampleComponent = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-component-md */ "!!raw-loader!-examples-import-component-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/component.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/elastic-sticky/examples/import/component.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/elastic-sticky/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/elastic-sticky/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/elastic-sticky/examples/1/index.less")),
        };
    }
}
ExampleTuiElasticStickyComponent.ɵfac = function ExampleTuiElasticStickyComponent_Factory(t) { return new (t || ExampleTuiElasticStickyComponent)(); };
ExampleTuiElasticStickyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiElasticStickyComponent, selectors: [["example-tui-elastic-sticky"]], decls: 5, vars: 0, consts: [["package", "ADDON-MOBILE", "type", "directives", 6, "header"], ["pageTab", ""], [6, "pageTab"], ["id", "basic", 3, "content", 6, "heading"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"]], template: function ExampleTuiElasticStickyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiElasticStickyComponent_ng_template_2_Template, 6, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiElasticStickyComponent_ng_template_3_Template, 15, 3, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiElasticStickyExample1"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiElasticStickyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-elastic-sticky`,
                templateUrl: `./elastic-sticky.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/elastic-sticky/elastic-sticky.module.ts":
/*!************************************************************************!*\
  !*** ./src/modules/directives/elastic-sticky/elastic-sticky.module.ts ***!
  \************************************************************************/
/*! exports provided: ExampleTuiElasticStickyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiElasticStickyModule", function() { return ExampleTuiElasticStickyModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-mobile */ "../addon-mobile/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _elastic_sticky_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./elastic-sticky.component */ "./src/modules/directives/elastic-sticky/elastic-sticky.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/directives/elastic-sticky/examples/1/index.ts");











class ExampleTuiElasticStickyModule {
}
ExampleTuiElasticStickyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiElasticStickyModule });
ExampleTuiElasticStickyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiElasticStickyModule_Factory(t) { return new (t || ExampleTuiElasticStickyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiScrollbarModule"],
            _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__["TuiElasticStickyModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_elastic_sticky_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiElasticStickyComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiElasticStickyModule, { declarations: [_elastic_sticky_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiElasticStickyComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiElasticStickyExample1"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiScrollbarModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__["TuiElasticStickyModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_elastic_sticky_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiElasticStickyComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiElasticStickyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiScrollbarModule"],
                    _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__["TuiElasticStickyModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_elastic_sticky_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiElasticStickyComponent"])),
                ],
                declarations: [_elastic_sticky_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiElasticStickyComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiElasticStickyExample1"]],
                exports: [_elastic_sticky_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiElasticStickyComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/elastic-sticky/examples/1/index.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/directives/elastic-sticky/examples/1/index.ts ***!
  \*******************************************************************/
/*! exports provided: TuiElasticStickyExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiElasticStickyExample1", function() { return TuiElasticStickyExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-mobile */ "../addon-mobile/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/scrollbar/scrollbar.component */ "../core/components/scrollbar/scrollbar.component.ts");
/* harmony import */ var _addon_mobile_directives_elastic_sticky_elastic_sticky_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../addon-mobile/directives/elastic-sticky/elastic-sticky.directive */ "../addon-mobile/directives/elastic-sticky/elastic-sticky.directive.ts");
/* harmony import */ var _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/money/money.component */ "../addon-commerce/components/money/money.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");











class TuiElasticStickyExample1 {
    ngAfterViewInit() {
        if (!this.elasticSticky) {
            return;
        }
        // If we use it like that instead of (tuiElasticSticky)="onElasticSticky($event)"
        // we will not trigger unnecessary change detection when scale is less than 0.5
        this.scale$ = this.elasticSticky.tuiElasticSticky.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(scale => Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["clamp"])(scale, 0.5, 1)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])());
    }
}
TuiElasticStickyExample1.ɵfac = function TuiElasticStickyExample1_Factory(t) { return new (t || TuiElasticStickyExample1)(); };
TuiElasticStickyExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiElasticStickyExample1, selectors: [["tui-elastic-sticky-example-1"]], viewQuery: function TuiElasticStickyExample1_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_3__["TuiElasticStickyDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elasticSticky = _t.first);
    } }, decls: 23, vars: 5, consts: [[1, "scrollbar"], ["tuiElasticSticky", "", 1, "header"], [1, "wrapper"], [1, "money", 3, "value"]], template: function TuiElasticStickyExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-scrollbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "I never wanted to do this in the first place!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-money", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "I always wanted to be... a lumberjack!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "I always wanted to be... a lumberjack!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I always wanted to be... a lumberjack!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "I always wanted to be... a lumberjack!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "I always wanted to be... a lumberjack!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "I always wanted to be... a lumberjack!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "I always wanted to be... a lumberjack!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "I always wanted to be... a lumberjack!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.scale$), "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 237000);
    } }, directives: [_core_components_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_6__["TuiScrollbarComponent"], _addon_mobile_directives_elastic_sticky_elastic_sticky_directive__WEBPACK_IMPORTED_MODULE_7__["TuiElasticStickyDirective"], _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_8__["TuiMoneyComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.scrollbar[_ngcontent-%COMP%] {\n  height: 12.5rem;\n}\n.header[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  height: 5.5rem;\n  pointer-events: none;\n}\n.wrapper[_ngcontent-%COMP%] {\n  color: var(--tui-base-01);\n  background: #bc71c9;\n  font-size: 2rem;\n  pointer-events: auto;\n}\n.money[_ngcontent-%COMP%] {\n  display: block;\n  line-height: 1em;\n  padding: 1em 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9lbGFzdGljLXN0aWNreS9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvZWxhc3RpYy1zdGlja3kvZXhhbXBsZXMvMS9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKO0FERUE7RUFDSSxlQUFBO0FDQUo7QURHQTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDREo7QURJQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNGSjtBREtBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNISiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvZWxhc3RpYy1zdGlja3kvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2Nyb2xsYmFyIHtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG59XG5cbi5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogNS41cmVtO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ud3JhcHBlciB7XG4gICAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgICBiYWNrZ3JvdW5kOiAjYmM3MWM5O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLm1vbmV5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIHBhZGRpbmc6IDFlbSAxLjVyZW07XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnNjcm9sbGJhciB7XG4gIGhlaWdodDogMTIuNXJlbTtcbn1cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGhlaWdodDogNS41cmVtO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi53cmFwcGVyIHtcbiAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgYmFja2dyb3VuZDogI2JjNzFjOTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi5tb25leSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwYWRkaW5nOiAxZW0gMS41cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiElasticStickyExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-elastic-sticky-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, { elasticSticky: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_3__["TuiElasticStickyDirective"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=directives-elastic-sticky-elastic-sticky-module.js.map