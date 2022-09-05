(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-bar-set-bar-set-module"],{

/***/ "./src/modules/charts/bar-set/bar-set.component.ts":
/*!*********************************************************!*\
  !*** ./src/modules/charts/bar-set/bar-set.component.ts ***!
  \*********************************************************/
/*! exports provided: ExampleTuiBarSetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiBarSetComponent", function() { return ExampleTuiBarSetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/charts/bar-set/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/charts/bar-set/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/charts/bar-set/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/charts/bar-set/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/charts/bar-set/examples/5/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_charts_components_bar_set_bar_set_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-charts/components/bar-set/bar-set.component */ "../addon-charts/components/bar-set/bar-set.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3857656113643577938$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS_1 = goog.getMsg("BarSet");
    I18N_0 = MSG_EXTERNAL_3857656113643577938$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟663c89ab67d644820007bdd3acb345936fd82cd6␟3857656113643577938:BarSet`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1990999015787992299$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__4 = goog.getMsg("A group of bars for bar chart");
    I18N_3 = MSG_EXTERNAL_1990999015787992299$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟17339786f993f82e7a0dfda57ea361199a4746ad␟1990999015787992299:A group of bars for bar chart`;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2734923032520642265$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__6 = goog.getMsg("Dynamic size");
    I18N_5 = MSG_EXTERNAL_2734923032520642265$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟f63ad923919ae0f90cc865b2ec01ec2d178613f7␟2734923032520642265:Dynamic size`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7612070527746743628$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__9 = goog.getMsg("Fixed size");
    I18N_8 = MSG_EXTERNAL_7612070527746743628$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟b8e94cfe6bc09b41fd9500aa0b256dd1221957b8␟7612070527746743628:Fixed size`;
}
const _c10 = ["heading", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_192535799609256534$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__12 = goog.getMsg("With negative values");
    I18N_11 = MSG_EXTERNAL_192535799609256534$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟b0746c469ef8c605b1cb2fee9256a06846b822ed␟192535799609256534:With negative values`;
}
const _c13 = ["heading", I18N_11];
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8382375758916799432$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__15 = goog.getMsg("Horizontal");
    I18N_14 = MSG_EXTERNAL_8382375758916799432$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟174a9da560259a6d38344b93f89039ca6c660dd7␟8382375758916799432:Horizontal`;
}
const _c16 = ["heading", I18N_14];
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3054064021834682613$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__18 = goog.getMsg("Collapsed");
    I18N_17 = MSG_EXTERNAL_3054064021834682613$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__18;
}
else {
    I18N_17 = $localize `:␟e5e231ca221230aaf2382fd907523c7ec6f110ce␟3054064021834682613:Collapsed`;
}
const _c19 = ["heading", I18N_17];
function ExampleTuiBarSetComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-bar-set-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-bar-set-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-bar-set-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](12, _c16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-bar-set-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](15, _c19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-bar-set-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1300461621231032697$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS___21 = goog.getMsg(" Shows data set in a single bar ");
    I18N_20 = MSG_EXTERNAL_1300461621231032697$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟c8c3cf5337c2dfc41b63a6be38ecb6b8e75a1940␟1300461621231032697: Shows data set in a single bar `;
}
function ExampleTuiBarSetComponent_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_20);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7603555242726494831$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS___23 = goog.getMsg(" Size (use {$startTagCode}null{$closeTagCode} for autosize) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_22 = MSG_EXTERNAL_7603555242726494831$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS___23;
}
else {
    I18N_22 = $localize `:␟3830e7ef75ee17fa449e62db9388a201fdd9d420␟7603555242726494831: Size (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:null${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: for autosize) `;
}
function ExampleTuiBarSetComponent_ng_template_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5346468389743474194$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS___25 = goog.getMsg(" Array of segments ");
    I18N_24 = MSG_EXTERNAL_5346468389743474194$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS___25;
}
else {
    I18N_24 = $localize `:␟5227918e5051fd4c9eac18c22be2f4f747ef8001␟5346468389743474194: Array of segments `;
}
function ExampleTuiBarSetComponent_ng_template_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_24);
} }
function ExampleTuiBarSetComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-bar-set", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiBarSetComponent_ng_template_3_ng_template_3_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiBarSetComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.collapsed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiBarSetComponent_ng_template_3_ng_template_4_Template, 2, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiBarSetComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiBarSetComponent_ng_template_3_ng_template_5_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiBarSetComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsed", ctx_r1.collapsed)("value", ctx_r1.value)("size", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_995564356833384032$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__27 = goog.getMsg(" Import {$startTagCode}TuiBarSetModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_26 = MSG_EXTERNAL_995564356833384032$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__27;
}
else {
    I18N_26 = $localize `:␟ac2cae696dd7ce1732b3cff782ce2b8f1810a2b9␟995564356833384032: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiBarSetModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__29 = goog.getMsg("Add to the template:");
    I18N_28 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__29;
}
else {
    I18N_28 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiBarSetComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiBarSetComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/2/index.less")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/3/index.less")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/4/index.less")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/5/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-less */ "!!raw-loader!-examples-5-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-set/examples/5/index.less")),
        };
        this.collapsed = false;
        this.sizeVariants = [`s`, `m`, `l`];
        this.size = null;
        this.valueVariants = [
            [30, 20, 10],
            [237, -50, 10, 5, 1],
        ];
        this.value = this.valueVariants[0];
    }
}
ExampleTuiBarSetComponent.ɵfac = function ExampleTuiBarSetComponent_Factory(t) { return new (t || ExampleTuiBarSetComponent)(); };
ExampleTuiBarSetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiBarSetComponent, selectors: [["example-tui-bar-set"]], decls: 5, vars: 0, consts: [["package", "ADDON-CHARTS", "type", "components", 6, "header"], ["pageTab", ""], ["id", "flexible", 3, "content", 6, "heading"], ["id", "fixed", 3, "content", 6, "heading"], ["id", "negative", 3, "content", 6, "heading"], ["id", "horizontal", 3, "content", 6, "heading"], ["id", "collapsed", 3, "content", 6, "heading"], [1, "bars", 3, "collapsed", "value", "size"], ["documentationPropertyName", "collapsed", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "readonly number[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiBarSetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiBarSetComponent_ng_template_2_Template, 17, 5, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiBarSetComponent_ng_template_3_Template, 6, 8, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiBarSetComponent_ng_template_4_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiBarSetExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiBarSetExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_7__["TuiBarSetExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_8__["TuiBarSetExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_9__["TuiBarSetExample5"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocDemoComponent"], _addon_charts_components_bar_set_bar_set_component__WEBPACK_IMPORTED_MODULE_11__["TuiBarSetComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_14__["TuiDocCodeComponent"]], styles: [".bars[_ngcontent-%COMP%] {\n  height: 10rem;\n  width: 6.25rem;\n  box-shadow: 0 1px var(--tui-base-03);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2Jhci1zZXQvYmFyLXNldC5zdHlsZS5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYmFyLXNldC9iYXItc2V0LnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYmFyLXNldC9iYXItc2V0LnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFycyB7XG4gICAgaGVpZ2h0OiAxMHJlbTtcbiAgICB3aWR0aDogNi4yNXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG59XG4iLCIuYmFycyB7XG4gIGhlaWdodDogMTByZW07XG4gIHdpZHRoOiA2LjI1cmVtO1xuICBib3gtc2hhZG93OiAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiBarSetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-bar-set`,
                templateUrl: `./bar-set.template.html`,
                styleUrls: [`./bar-set.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/bar-set/bar-set.module.ts":
/*!******************************************************!*\
  !*** ./src/modules/charts/bar-set/bar-set.module.ts ***!
  \******************************************************/
/*! exports provided: ExampleTuiBarSetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiBarSetModule", function() { return ExampleTuiBarSetModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-charts */ "../addon-charts/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _bar_set_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bar-set.component */ "./src/modules/charts/bar-set/bar-set.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/charts/bar-set/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/charts/bar-set/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/charts/bar-set/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/charts/bar-set/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/charts/bar-set/examples/5/index.ts");













class ExampleTuiBarSetModule {
}
ExampleTuiBarSetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiBarSetModule });
ExampleTuiBarSetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiBarSetModule_Factory(t) { return new (t || ExampleTuiBarSetModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiBarSetModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_bar_set_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiBarSetComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiBarSetModule, { declarations: [_bar_set_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiBarSetComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiBarSetExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiBarSetExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_8__["TuiBarSetExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_9__["TuiBarSetExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_10__["TuiBarSetExample5"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiBarSetModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_bar_set_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiBarSetComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiBarSetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiBarSetModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_bar_set_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiBarSetComponent"])),
                ],
                declarations: [
                    _bar_set_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiBarSetComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiBarSetExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiBarSetExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_8__["TuiBarSetExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_9__["TuiBarSetExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_10__["TuiBarSetExample5"],
                ],
                exports: [_bar_set_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiBarSetComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/bar-set/examples/1/index.ts":
/*!********************************************************!*\
  !*** ./src/modules/charts/bar-set/examples/1/index.ts ***!
  \********************************************************/
/*! exports provided: TuiBarSetExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBarSetExample1", function() { return TuiBarSetExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_charts_components_bar_set_bar_set_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/bar-set/bar-set.component */ "../addon-charts/components/bar-set/bar-set.component.ts");





class TuiBarSetExample1 {
    constructor() {
        this.value = [30, 15, 10];
    }
}
TuiBarSetExample1.ɵfac = function TuiBarSetExample1_Factory(t) { return new (t || TuiBarSetExample1)(); };
TuiBarSetExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiBarSetExample1, selectors: [["tui-bar-set-example-1"]], decls: 1, vars: 2, consts: [[1, "bars", 3, "value", "size"]], template: function TuiBarSetExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-bar-set", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("size", null);
    } }, directives: [_addon_charts_components_bar_set_bar_set_component__WEBPACK_IMPORTED_MODULE_3__["TuiBarSetComponent"]], styles: [".bars[_ngcontent-%COMP%] {\n  height: 6.25rem;\n  width: 10rem;\n  box-shadow: 0 1px var(--tui-base-03);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2Jhci1zZXQvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYmFyLXNldC9leGFtcGxlcy8xL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYmFyLXNldC9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFycyB7XG4gICAgaGVpZ2h0OiA2LjI1cmVtO1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBib3gtc2hhZG93OiAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG59XG4iLCIuYmFycyB7XG4gIGhlaWdodDogNi4yNXJlbTtcbiAgd2lkdGg6IDEwcmVtO1xuICBib3gtc2hhZG93OiAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiBarSetExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-bar-set-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/bar-set/examples/2/index.ts":
/*!********************************************************!*\
  !*** ./src/modules/charts/bar-set/examples/2/index.ts ***!
  \********************************************************/
/*! exports provided: TuiBarSetExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBarSetExample2", function() { return TuiBarSetExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_charts_components_bar_set_bar_set_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/bar-set/bar-set.component */ "../addon-charts/components/bar-set/bar-set.component.ts");





class TuiBarSetExample2 {
    constructor() {
        this.value = [30, 15, 10];
    }
}
TuiBarSetExample2.ɵfac = function TuiBarSetExample2_Factory(t) { return new (t || TuiBarSetExample2)(); };
TuiBarSetExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiBarSetExample2, selectors: [["tui-bar-set-example-2"]], decls: 1, vars: 1, consts: [["size", "m", 1, "bars", 3, "value"]], template: function TuiBarSetExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-bar-set", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);
    } }, directives: [_addon_charts_components_bar_set_bar_set_component__WEBPACK_IMPORTED_MODULE_3__["TuiBarSetComponent"]], styles: [".bars[_ngcontent-%COMP%] {\n  height: 6.25rem;\n  width: 10rem;\n  box-shadow: 0 1px var(--tui-base-03);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2Jhci1zZXQvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYmFyLXNldC9leGFtcGxlcy8yL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYmFyLXNldC9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFycyB7XG4gICAgaGVpZ2h0OiA2LjI1cmVtO1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBib3gtc2hhZG93OiAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG59XG4iLCIuYmFycyB7XG4gIGhlaWdodDogNi4yNXJlbTtcbiAgd2lkdGg6IDEwcmVtO1xuICBib3gtc2hhZG93OiAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiBarSetExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-bar-set-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/bar-set/examples/3/index.ts":
/*!********************************************************!*\
  !*** ./src/modules/charts/bar-set/examples/3/index.ts ***!
  \********************************************************/
/*! exports provided: TuiBarSetExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBarSetExample3", function() { return TuiBarSetExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_charts_components_bar_set_bar_set_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/bar-set/bar-set.component */ "../addon-charts/components/bar-set/bar-set.component.ts");





class TuiBarSetExample3 {
    constructor() {
        this.value = [30, -15];
    }
}
TuiBarSetExample3.ɵfac = function TuiBarSetExample3_Factory(t) { return new (t || TuiBarSetExample3)(); };
TuiBarSetExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiBarSetExample3, selectors: [["tui-bar-set-example-3"]], decls: 1, vars: 1, consts: [[1, "bars", 3, "value"]], template: function TuiBarSetExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-bar-set", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);
    } }, directives: [_addon_charts_components_bar_set_bar_set_component__WEBPACK_IMPORTED_MODULE_3__["TuiBarSetComponent"]], styles: [".bars[_ngcontent-%COMP%] {\n  height: 6.25rem;\n  width: 3.75rem;\n  margin-bottom: 3.125rem;\n  box-shadow: 0 1px var(--tui-base-03);\n  --tui-chart-0: var(--tui-primary);\n  --tui-chart-1: var(--tui-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2Jhci1zZXQvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYmFyLXNldC9leGFtcGxlcy8zL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFFQSxpQ0FBQTtFQUNBLGlDQUFBO0FDQUoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYmFyLXNldC9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFycyB7XG4gICAgaGVpZ2h0OiA2LjI1cmVtO1xuICAgIHdpZHRoOiAzLjc1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDMuMTI1cmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgIC0tdHVpLWNoYXJ0LTA6IHZhcigtLXR1aS1wcmltYXJ5KTtcbiAgICAtLXR1aS1jaGFydC0xOiB2YXIoLS10dWktcHJpbWFyeSk7XG59XG4iLCIuYmFycyB7XG4gIGhlaWdodDogNi4yNXJlbTtcbiAgd2lkdGg6IDMuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDMuMTI1cmVtO1xuICBib3gtc2hhZG93OiAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG4gIC0tdHVpLWNoYXJ0LTA6IHZhcigtLXR1aS1wcmltYXJ5KTtcbiAgLS10dWktY2hhcnQtMTogdmFyKC0tdHVpLXByaW1hcnkpO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiBarSetExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-bar-set-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/bar-set/examples/4/index.ts":
/*!********************************************************!*\
  !*** ./src/modules/charts/bar-set/examples/4/index.ts ***!
  \********************************************************/
/*! exports provided: TuiBarSetExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBarSetExample4", function() { return TuiBarSetExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_charts_components_bar_set_bar_set_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/bar-set/bar-set.component */ "../addon-charts/components/bar-set/bar-set.component.ts");





class TuiBarSetExample4 {
    constructor() {
        this.value = [30, 45, 12, 6, 20];
    }
}
TuiBarSetExample4.ɵfac = function TuiBarSetExample4_Factory(t) { return new (t || TuiBarSetExample4)(); };
TuiBarSetExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiBarSetExample4, selectors: [["tui-bar-set-example-4"]], decls: 2, vars: 1, consts: [[1, "wrapper"], [1, "bars", 3, "value"]], template: function TuiBarSetExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-bar-set", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);
    } }, directives: [_addon_charts_components_bar_set_bar_set_component__WEBPACK_IMPORTED_MODULE_3__["TuiBarSetComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  height: 6.25rem;\n}\n.bars[_ngcontent-%COMP%] {\n  height: 12.5rem;\n  width: 6.25rem;\n  margin-bottom: 3.125rem;\n  box-shadow: 0 1px var(--tui-base-03);\n  transform-origin: bottom left;\n  transform: rotate(90deg) translate(-12.5rem, 0);\n  --tui-chart-0: linear-gradient(#ffc500, #c21500);\n  --tui-chart-1: linear-gradient(#26a0da, #314755);\n  --tui-chart-2: linear-gradient(#f64f59, #c471ed, #12c2e9);\n  --tui-chart-3: linear-gradient(#c94b4b, #4b134f);\n  --tui-chart-4: linear-gradient(#114357, #f29492);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2Jhci1zZXQvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYmFyLXNldC9leGFtcGxlcy80L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7QURFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsK0NBQUE7RUFFQSxnREFBQTtFQUNBLGdEQUFBO0VBQ0EseURBQUE7RUFDQSxnREFBQTtFQUNBLGdEQUFBO0FDREoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYmFyLXNldC9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gICAgaGVpZ2h0OiA2LjI1cmVtO1xufVxuXG4uYmFycyB7XG4gICAgaGVpZ2h0OiAxMi41cmVtO1xuICAgIHdpZHRoOiA2LjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDMuMTI1cmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKC0xMi41cmVtLCAwKTtcblxuICAgIC0tdHVpLWNoYXJ0LTA6IGxpbmVhci1ncmFkaWVudCgjZmZjNTAwLCAjYzIxNTAwKTtcbiAgICAtLXR1aS1jaGFydC0xOiBsaW5lYXItZ3JhZGllbnQoIzI2YTBkYSwgIzMxNDc1NSk7XG4gICAgLS10dWktY2hhcnQtMjogbGluZWFyLWdyYWRpZW50KCNmNjRmNTksICNjNDcxZWQsICMxMmMyZTkpO1xuICAgIC0tdHVpLWNoYXJ0LTM6IGxpbmVhci1ncmFkaWVudCgjYzk0YjRiLCAjNGIxMzRmKTtcbiAgICAtLXR1aS1jaGFydC00OiBsaW5lYXItZ3JhZGllbnQoIzExNDM1NywgI2YyOTQ5Mik7XG59XG4iLCIud3JhcHBlciB7XG4gIGhlaWdodDogNi4yNXJlbTtcbn1cbi5iYXJzIHtcbiAgaGVpZ2h0OiAxMi41cmVtO1xuICB3aWR0aDogNi4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMy4xMjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUoLTEyLjVyZW0sIDApO1xuICAtLXR1aS1jaGFydC0wOiBsaW5lYXItZ3JhZGllbnQoI2ZmYzUwMCwgI2MyMTUwMCk7XG4gIC0tdHVpLWNoYXJ0LTE6IGxpbmVhci1ncmFkaWVudCgjMjZhMGRhLCAjMzE0NzU1KTtcbiAgLS10dWktY2hhcnQtMjogbGluZWFyLWdyYWRpZW50KCNmNjRmNTksICNjNDcxZWQsICMxMmMyZTkpO1xuICAtLXR1aS1jaGFydC0zOiBsaW5lYXItZ3JhZGllbnQoI2M5NGI0YiwgIzRiMTM0Zik7XG4gIC0tdHVpLWNoYXJ0LTQ6IGxpbmVhci1ncmFkaWVudCgjMTE0MzU3LCAjZjI5NDkyKTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiBarSetExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-bar-set-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/bar-set/examples/5/index.ts":
/*!********************************************************!*\
  !*** ./src/modules/charts/bar-set/examples/5/index.ts ***!
  \********************************************************/
/*! exports provided: TuiBarSetExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBarSetExample5", function() { return TuiBarSetExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_charts_components_bar_set_bar_set_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/bar-set/bar-set.component */ "../addon-charts/components/bar-set/bar-set.component.ts");





class TuiBarSetExample5 {
    constructor() {
        this.value = [45, 30, 20, 12, 6];
    }
}
TuiBarSetExample5.ɵfac = function TuiBarSetExample5_Factory(t) { return new (t || TuiBarSetExample5)(); };
TuiBarSetExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiBarSetExample5, selectors: [["tui-bar-set-example-5"]], decls: 1, vars: 2, consts: [[1, "bars", 3, "collapsed", "value"]], template: function TuiBarSetExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-bar-set", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsed", true)("value", ctx.value);
    } }, directives: [_addon_charts_components_bar_set_bar_set_component__WEBPACK_IMPORTED_MODULE_3__["TuiBarSetComponent"]], styles: [".bars[_ngcontent-%COMP%] {\n  height: 7.5rem;\n  width: 5rem;\n  box-shadow: 0 1px var(--tui-base-03);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2Jhci1zZXQvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYmFyLXNldC9leGFtcGxlcy81L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYmFyLXNldC9leGFtcGxlcy81L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFycyB7XG4gICAgaGVpZ2h0OiA3LjVyZW07XG4gICAgd2lkdGg6IDVyZW07XG4gICAgYm94LXNoYWRvdzogMCAxcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xufVxuIiwiLmJhcnMge1xuICBoZWlnaHQ6IDcuNXJlbTtcbiAgd2lkdGg6IDVyZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiBarSetExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-bar-set-example-5`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=charts-bar-set-bar-set-module.js.map