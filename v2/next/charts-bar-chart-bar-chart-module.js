(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-bar-chart-bar-chart-module"],{

/***/ "./src/modules/charts/bar-chart/bar-chart.component.ts":
/*!*************************************************************!*\
  !*** ./src/modules/charts/bar-chart/bar-chart.component.ts ***!
  \*************************************************************/
/*! exports provided: ExampleTuiBarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiBarChartComponent", function() { return ExampleTuiBarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/charts/bar-chart/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/charts/bar-chart/examples/2/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_charts_components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-charts/components/bar-chart/bar-chart.component */ "../addon-charts/components/bar-chart/bar-chart.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");

















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4972350692603623963$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS_1 = goog.getMsg("BarChart");
    I18N_0 = MSG_EXTERNAL_4972350692603623963$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟310e0a6c470048f0830207f8705fc98ddf83e09f␟4972350692603623963:BarChart`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7559748480779361253$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__4 = goog.getMsg(" Bar chart that can be used as a content to {$startLink} axes {$closeLink} . ", { "startLink": "\uFFFD#2\uFFFD", "closeLink": "\uFFFD/#2\uFFFD" });
    I18N_3 = MSG_EXTERNAL_7559748480779361253$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟bbf1520055e253a96936868291170717aab058a6␟7559748480779361253: Bar chart that can be used as a content to ${"\uFFFD#2\uFFFD"}:START_LINK: axes ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: . `;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2292984449512804094$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__6 = goog.getMsg("With axes");
    I18N_5 = MSG_EXTERNAL_2292984449512804094$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟91d85f7cd08523d464572a8331ae010403898036␟2292984449512804094:With axes`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3035164386238041785$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__9 = goog.getMsg("Same values with collapsed mode");
    I18N_8 = MSG_EXTERNAL_3035164386238041785$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟787e849982377e68816c88e2bab70d23391c75ce␟3035164386238041785:Same values with collapsed mode`;
}
const _c10 = ["heading", I18N_8];
const _c11 = function () { return ["/components/axes"]; };
function ExampleTuiBarChartComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-bar-chart-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-bar-chart-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1300461621231032697$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___13 = goog.getMsg(" Shows data set in a single bar ");
    I18N_12 = MSG_EXTERNAL_1300461621231032697$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___13;
}
else {
    I18N_12 = $localize `:␟c8c3cf5337c2dfc41b63a6be38ecb6b8e75a1940␟1300461621231032697: Shows data set in a single bar `;
}
function ExampleTuiBarChartComponent_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_12);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5386283764485537755$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___15 = goog.getMsg(" Content of segment hint. It gets index of segment as context ");
    I18N_14 = MSG_EXTERNAL_5386283764485537755$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟027b465fee7d9368916f54068fc7a03216df514f␟5386283764485537755: Content of segment hint. It gets index of segment as context `;
}
function ExampleTuiBarChartComponent_ng_template_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_14);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7555811278293946660$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___17 = goog.getMsg(" Hint mode ");
    I18N_16 = MSG_EXTERNAL_7555811278293946660$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟93606156a1029cb5dd24b92f4d74975261cf8213␟7555811278293946660: Hint mode `;
}
function ExampleTuiBarChartComponent_ng_template_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_16);
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8322206422380376347$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___19 = goog.getMsg(" Sets chart max manually ");
    I18N_18 = MSG_EXTERNAL_8322206422380376347$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟82dfd714cac7d622a7e5aec2489be564da4184e5␟8322206422380376347: Sets chart max manually `;
}
function ExampleTuiBarChartComponent_ng_template_3_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_18);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7603555242726494831$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___21 = goog.getMsg(" Size (use {$startTagCode}null{$closeTagCode} for autosize) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_20 = MSG_EXTERNAL_7603555242726494831$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟3830e7ef75ee17fa449e62db9388a201fdd9d420␟7603555242726494831: Size (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:null${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: for autosize) `;
}
function ExampleTuiBarChartComponent_ng_template_3_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5346468389743474194$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___23 = goog.getMsg(" Array of segments ");
    I18N_22 = MSG_EXTERNAL_5346468389743474194$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___23;
}
else {
    I18N_22 = $localize `:␟5227918e5051fd4c9eac18c22be2f4f747ef8001␟5346468389743474194: Array of segments `;
}
function ExampleTuiBarChartComponent_ng_template_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_22);
} }
function ExampleTuiBarChartComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-bar-chart", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiBarChartComponent_ng_template_3_ng_template_3_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiBarChartComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.collapsed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiBarChartComponent_ng_template_3_ng_template_4_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiBarChartComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.hintContent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiBarChartComponent_ng_template_3_ng_template_5_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiBarChartComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.hintMode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiBarChartComponent_ng_template_3_ng_template_6_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiBarChartComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiBarChartComponent_ng_template_3_ng_template_7_Template, 2, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiBarChartComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiBarChartComponent_ng_template_3_ng_template_8_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiBarChartComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsed", ctx_r1.collapsed)("value", ctx_r1.value)("max", ctx_r1.max)("size", ctx_r1.size)("hintContent", ctx_r1.hintContent)("hintMode", ctx_r1.hintMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.contentVariants)("documentationPropertyValue", ctx_r1.hintContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.hintModeVariants)("documentationPropertyValue", ctx_r1.hintMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3833152904251514807$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__25 = goog.getMsg(" Import {$startTagCode}TuiBarChartModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_24 = MSG_EXTERNAL_3833152904251514807$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__25;
}
else {
    I18N_24 = $localize `:␟1ee4fd2173f4ec5d3bee4852bc366c9afc95b96f␟3833152904251514807: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiBarChartModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__27 = goog.getMsg("Add to the template:");
    I18N_26 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__27;
}
else {
    I18N_26 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiBarChartComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
const MONTHS = [
    `Jan 2019`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`,
];
class ExampleTuiBarChartComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-chart/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-chart/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-chart/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-chart/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-chart/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-chart/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-chart/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/bar-chart/examples/2/index.less")),
        };
        this.collapsed = false;
        this.sizeVariants = [`s`, `m`, `l`];
        this.size = null;
        this.max = 0;
        this.valueVariants = [
            [
                [30000, 20500, 12345],
                [12422, 16124, 22424],
            ],
            [
                [30, 65, 30, 80, 54],
                [98, 48, 33, 25, 11],
                [55, 10, 27, 36, 73],
            ],
        ];
        this.value = this.valueVariants[0];
        this.contentVariants = [
            ``,
            ({ $implicit }) => this.getHint($implicit),
            ({ $implicit }) => MONTHS[$implicit],
        ];
        this.hintContent = this.contentVariants[0];
        this.hintModeVariants = [`onDark`, `error`];
        this.hintMode = null;
    }
    getHint(index) {
        return this.value
            .reduce((result, set) => `${result}${Object(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["formatNumber"])(set[index])} ${Object(_taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_2__["getCurrencySymbol"])("RUB" /* Ruble */)}\n`, ``)
            .trim();
    }
}
ExampleTuiBarChartComponent.ɵfac = function ExampleTuiBarChartComponent_Factory(t) { return new (t || ExampleTuiBarChartComponent)(); };
ExampleTuiBarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiBarChartComponent, selectors: [["example-tui-bar-chart"]], decls: 5, vars: 0, consts: [["package", "ADDON-CHARTS", "type", "components", 6, "header"], ["pageTab", ""], ["tuiLink", "", 3, "routerLink"], ["id", "axes", 3, "content", 6, "heading"], ["id", "collapsed", 3, "content", 6, "heading"], [1, "chart", 3, "collapsed", "value", "max", "size", "hintContent", "hintMode"], ["documentationPropertyName", "collapsed", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hintContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hintMode", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHintModeT | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "ReadonlyArray<readonly number[]>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiBarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiBarChartComponent_ng_template_2_Template, 9, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiBarChartComponent_ng_template_3_Template, 9, 16, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiBarChartComponent_ng_template_4_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_6__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_9__["TuiBarChartExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_10__["TuiBarChartExample2"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDemoComponent"], _addon_charts_components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_12__["TuiBarChartComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__["TuiDocCodeComponent"]], styles: [".chart[_ngcontent-%COMP%] {\n  height: 12.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2Jhci1jaGFydC9iYXItY2hhcnQuc3R5bGUubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2Jhci1jaGFydC9iYXItY2hhcnQuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NoYXJ0cy9iYXItY2hhcnQvYmFyLWNoYXJ0LnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnQge1xuICAgIGhlaWdodDogMTIuNXJlbTtcbn1cbiIsIi5jaGFydCB7XG4gIGhlaWdodDogMTIuNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiBarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-bar-chart`,
                templateUrl: `./bar-chart.template.html`,
                styleUrls: [`./bar-chart.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/bar-chart/bar-chart.module.ts":
/*!**********************************************************!*\
  !*** ./src/modules/charts/bar-chart/bar-chart.module.ts ***!
  \**********************************************************/
/*! exports provided: ExampleTuiBarChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiBarChartModule", function() { return ExampleTuiBarChartModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-charts */ "../addon-charts/index.ts");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _bar_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bar-chart.component */ "./src/modules/charts/bar-chart/bar-chart.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/charts/bar-chart/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/charts/bar-chart/examples/2/index.ts");













class ExampleTuiBarChartModule {
}
ExampleTuiBarChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiBarChartModule });
ExampleTuiBarChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiBarChartModule_Factory(t) { return new (t || ExampleTuiBarChartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiAxesModule"],
            _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiBarChartModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiBarChartComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiBarChartModule, { declarations: [_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiBarChartComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiBarChartExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiBarChartExample2"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiAxesModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiBarChartModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiBarChartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiBarChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiAxesModule"],
                    _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiBarChartModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiBarChartComponent"])),
                ],
                declarations: [_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiBarChartComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiBarChartExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiBarChartExample2"]],
                exports: [_bar_chart_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiBarChartComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/bar-chart/examples/1/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/charts/bar-chart/examples/1/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiBarChartExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBarChartExample1", function() { return TuiBarChartExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/axes/axes.component */ "../addon-charts/components/axes/axes.component.ts");
/* harmony import */ var _addon_charts_components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/bar-chart/bar-chart.component */ "../addon-charts/components/bar-chart/bar-chart.component.ts");







class TuiBarChartExample1 {
    constructor() {
        this.value = [
            [3660, 8281, 1069, 9034, 5797, 6918, 8495, 3234, 6204, 1392, 2088, 8637, 8779],
            [3952, 3671, 3781, 5323, 3537, 4107, 2962, 3320, 8632, 4755, 9130, 1195, 3574],
        ];
        this.labelsX = [`Jan 2019`, `Feb`, `Mar`];
        this.labelsY = [`0`, `10 000`];
    }
    getHeight(max) {
        return (max / Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["ceil"])(max, -3)) * 100;
    }
}
TuiBarChartExample1.ɵfac = function TuiBarChartExample1_Factory(t) { return new (t || TuiBarChartExample1)(); };
TuiBarChartExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiBarChartExample1, selectors: [["tui-bar-chart-example-1"]], decls: 2, vars: 4, consts: [[1, "axes", 3, "axisXLabels", "axisYLabels"], [3, "max", "value"]], template: function TuiBarChartExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-axes", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-bar-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("axisXLabels", ctx.labelsX)("axisYLabels", ctx.labelsY);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 10000)("value", ctx.value);
    } }, directives: [_addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_4__["TuiAxesComponent"], _addon_charts_components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_5__["TuiBarChartComponent"]], styles: [".axes[_ngcontent-%COMP%] {\n  height: 18.75rem;\n  width: 37.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2Jhci1jaGFydC9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NoYXJ0cy9iYXItY2hhcnQvZXhhbXBsZXMvMS9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYmFyLWNoYXJ0L2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5heGVzIHtcbiAgICBoZWlnaHQ6IDE4Ljc1cmVtO1xuICAgIHdpZHRoOiAzNy41cmVtO1xufVxuIiwiLmF4ZXMge1xuICBoZWlnaHQ6IDE4Ljc1cmVtO1xuICB3aWR0aDogMzcuNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiBarChartExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-bar-chart-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/bar-chart/examples/2/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/charts/bar-chart/examples/2/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiBarChartExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBarChartExample2", function() { return TuiBarChartExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/axes/axes.component */ "../addon-charts/components/axes/axes.component.ts");
/* harmony import */ var _addon_charts_components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/bar-chart/bar-chart.component */ "../addon-charts/components/bar-chart/bar-chart.component.ts");






class TuiBarChartExample2 {
    constructor() {
        this.value = [
            [1000, 8000, 4000, 3000, 4000],
            [6000, 2000, 4500, 7000, 5000],
        ];
        this.labelsX = [`Jan 2021`, `Feb`, `Mar`];
        this.labelsY = [`0`, `10 000`];
    }
}
TuiBarChartExample2.ɵfac = function TuiBarChartExample2_Factory(t) { return new (t || TuiBarChartExample2)(); };
TuiBarChartExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiBarChartExample2, selectors: [["tui-bar-chart-example-2"]], decls: 5, vars: 9, consts: [[1, "flex"], [1, "axes", 3, "axisXLabels", "axisYLabels"], [3, "max", "value"], [3, "max", "value", "collapsed"]], template: function TuiBarChartExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-axes", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-bar-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-axes", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-bar-chart", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("axisXLabels", ctx.labelsX)("axisYLabels", ctx.labelsY);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 10000)("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("axisXLabels", ctx.labelsX)("axisYLabels", ctx.labelsY);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 10000)("value", ctx.value)("collapsed", true);
    } }, directives: [_addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_3__["TuiAxesComponent"], _addon_charts_components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_4__["TuiBarChartComponent"]], styles: [".axes[_ngcontent-%COMP%] {\n  height: 18.75rem;\n  width: 37.5rem;\n}\n.axes[_ngcontent-%COMP%]:first-child {\n  --tui-chart-0: gold;\n  --tui-chart-1: purple;\n}\n.axes[_ngcontent-%COMP%]:last-child {\n  --tui-chart-0: skyblue;\n  --tui-chart-1: violet;\n}\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 31.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2Jhci1jaGFydC9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NoYXJ0cy9iYXItY2hhcnQvZXhhbXBsZXMvMi9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUNDUjtBREVJO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtBQ0FSO0FESUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNGSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NoYXJ0cy9iYXItY2hhcnQvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmF4ZXMge1xuICAgIGhlaWdodDogMTguNzVyZW07XG4gICAgd2lkdGg6IDM3LjVyZW07XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgLS10dWktY2hhcnQtMDogZ29sZDtcbiAgICAgICAgLS10dWktY2hhcnQtMTogcHVycGxlO1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIC0tdHVpLWNoYXJ0LTA6IHNreWJsdWU7XG4gICAgICAgIC0tdHVpLWNoYXJ0LTE6IHZpb2xldDtcbiAgICB9XG59XG5cbi5mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi13aWR0aDogMzEuMjVyZW07XG59XG4iLCIuYXhlcyB7XG4gIGhlaWdodDogMTguNzVyZW07XG4gIHdpZHRoOiAzNy41cmVtO1xufVxuLmF4ZXM6Zmlyc3QtY2hpbGQge1xuICAtLXR1aS1jaGFydC0wOiBnb2xkO1xuICAtLXR1aS1jaGFydC0xOiBwdXJwbGU7XG59XG4uYXhlczpsYXN0LWNoaWxkIHtcbiAgLS10dWktY2hhcnQtMDogc2t5Ymx1ZTtcbiAgLS10dWktY2hhcnQtMTogdmlvbGV0O1xufVxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtaW4td2lkdGg6IDMxLjI1cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiBarChartExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-bar-chart-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=charts-bar-chart-bar-chart-module.js.map