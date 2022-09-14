(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-axes-axes-module"],{

/***/ "./src/modules/charts/axes/axes.component.ts":
/*!***************************************************!*\
  !*** ./src/modules/charts/axes/axes.component.ts ***!
  \***************************************************/
/*! exports provided: ExampleTuiAxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiAxesComponent", function() { return ExampleTuiAxesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-charts */ "../addon-charts/index.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/charts/axes/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/charts/axes/examples/2/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-charts/components/axes/axes.component */ "../addon-charts/components/axes/axes.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");














var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3176053473328457908$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS_1 = goog.getMsg("Axes");
    I18N_0 = MSG_EXTERNAL_3176053473328457908$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟157063b95e7de3b711a5e65f8b1b4a66bf51a9a7␟3176053473328457908:Axes`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3749794859286359761$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__4 = goog.getMsg("Just axes for charts");
    I18N_3 = MSG_EXTERNAL_3749794859286359761$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟299892581b7c29a4afe856bb50e83f932e7c19f9␟3749794859286359761:Just axes for charts`;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5400608477820076858$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__6 = goog.getMsg("Cool one");
    I18N_5 = MSG_EXTERNAL_5400608477820076858$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟9b735478d27ada48a6cc734cb7f499ffe3b60f31␟5400608477820076858:Cool one`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_927609271953315702$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__9 = goog.getMsg("With bars");
    I18N_8 = MSG_EXTERNAL_927609271953315702$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟befa476ed5c37d3ed4be47fe5759c340c6e24cd4␟927609271953315702:With bars`;
}
const _c10 = ["heading", I18N_8];
function ExampleTuiAxesComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-axes-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-axes-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7040174970690647937$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___12 = goog.getMsg(" Axis X ");
    I18N_11 = MSG_EXTERNAL_7040174970690647937$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___12;
}
else {
    I18N_11 = $localize `:␟f64e1f5d1e794dab4b787c26bf022a2c9898d1ef␟7040174970690647937: Axis X `;
}
function ExampleTuiAxesComponent_ng_template_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_11);
} }
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5270458325684962839$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___14 = goog.getMsg(" Labels for X. Emptry string is empty stroke, {$startTagCode}null{$closeTagCode} \u2014 no stroke ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_13 = MSG_EXTERNAL_5270458325684962839$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___14;
}
else {
    I18N_13 = $localize `:␟2f8e23a3f6977505fbbb8b3213e5912e32a2188d␟5270458325684962839: Labels for X. Emptry string is empty stroke, ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:null${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: — no stroke `;
}
function ExampleTuiAxesComponent_ng_template_3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5140923464869546529$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___16 = goog.getMsg(" Axis Y ");
    I18N_15 = MSG_EXTERNAL_5140923464869546529$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___16;
}
else {
    I18N_15 = $localize `:␟2642d8e7bc40dbf7276fb69cb640c80ac1c07be9␟5140923464869546529: Axis Y `;
}
function ExampleTuiAxesComponent_ng_template_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_15);
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2837390181413385612$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___18 = goog.getMsg(" Inset of labels on axis Y ");
    I18N_17 = MSG_EXTERNAL_2837390181413385612$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___18;
}
else {
    I18N_17 = $localize `:␟60800456eca99202fc6cebb2fc9f5a10a5e0a72d␟2837390181413385612: Inset of labels on axis Y `;
}
function ExampleTuiAxesComponent_ng_template_3_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_17);
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2657129922321475589$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___20 = goog.getMsg(" Labels for Y ");
    I18N_19 = MSG_EXTERNAL_2657129922321475589$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___20;
}
else {
    I18N_19 = $localize `:␟06d8e98f8b5258586ff187e97dae0d16518e9ab5␟2657129922321475589: Labels for Y `;
}
function ExampleTuiAxesComponent_ng_template_3_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_19);
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4037762709948884159$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___22 = goog.getMsg(" Name of Y axis ");
    I18N_21 = MSG_EXTERNAL_4037762709948884159$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___22;
}
else {
    I18N_21 = $localize `:␟7e478ef44515adc35026c32852851c7f7d84d651␟4037762709948884159: Name of Y axis `;
}
function ExampleTuiAxesComponent_ng_template_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_21);
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1884145993509521583$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___24 = goog.getMsg(" Inset labels for Y ");
    I18N_23 = MSG_EXTERNAL_1884145993509521583$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___24;
}
else {
    I18N_23 = $localize `:␟ac60157a8311a55856019cafd6b36016eb669dab␟1884145993509521583: Inset labels for Y `;
}
function ExampleTuiAxesComponent_ng_template_3_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_23);
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5391635047792570800$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___26 = goog.getMsg(" Secondary Y axis labels ");
    I18N_25 = MSG_EXTERNAL_5391635047792570800$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___26;
}
else {
    I18N_25 = $localize `:␟83b47ed4c100d02f8d9266656e0a0cd4868829a1␟5391635047792570800: Secondary Y axis labels `;
}
function ExampleTuiAxesComponent_ng_template_3_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_25);
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1495535954616436734$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___28 = goog.getMsg(" Secondary Y axis name ");
    I18N_27 = MSG_EXTERNAL_1495535954616436734$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___28;
}
else {
    I18N_27 = $localize `:␟264edf3e9d07bdae2defe9a9a8083e92d020d303␟1495535954616436734: Secondary Y axis name `;
}
function ExampleTuiAxesComponent_ng_template_3_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_27);
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8249773395630076811$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___30 = goog.getMsg(" Horizontal lines number ");
    I18N_29 = MSG_EXTERNAL_8249773395630076811$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___30;
}
else {
    I18N_29 = $localize `:␟b320bfbd957dcc40c0482581c996f149ec3ffbf5␟8249773395630076811: Horizontal lines number `;
}
function ExampleTuiAxesComponent_ng_template_3_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_29);
} }
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7177151488130232990$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___32 = goog.getMsg(" Horizontal lines type handler ");
    I18N_31 = MSG_EXTERNAL_7177151488130232990$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___32;
}
else {
    I18N_31 = $localize `:␟36af86f2988f299294e7c3e39259c33da740851b␟7177151488130232990: Horizontal lines type handler `;
}
function ExampleTuiAxesComponent_ng_template_3_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_31);
} }
var I18N_33;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6546346680735354696$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___34 = goog.getMsg(" Number of vertical lines ");
    I18N_33 = MSG_EXTERNAL_6546346680735354696$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___34;
}
else {
    I18N_33 = $localize `:␟5495dd2570db74aef538977c664775059a1554c9␟6546346680735354696: Number of vertical lines `;
}
function ExampleTuiAxesComponent_ng_template_3_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_33);
} }
var I18N_35;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1142374539392645294$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___36 = goog.getMsg(" Vertical lines type handler ");
    I18N_35 = MSG_EXTERNAL_1142374539392645294$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___36;
}
else {
    I18N_35 = $localize `:␟cf738f0fc8a03a466440318b0f21a2b9199b10c6␟1142374539392645294: Vertical lines type handler `;
}
function ExampleTuiAxesComponent_ng_template_3_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_35);
} }
function ExampleTuiAxesComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-axes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiAxesComponent_ng_template_3_ng_template_3_Template, 1, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.axisX = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiAxesComponent_ng_template_3_ng_template_4_Template, 2, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.axisXLabels = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiAxesComponent_ng_template_3_ng_template_5_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.axisY = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiAxesComponent_ng_template_3_ng_template_6_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.axisYInset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiAxesComponent_ng_template_3_ng_template_7_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.axisYLabels = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiAxesComponent_ng_template_3_ng_template_8_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.axisYName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiAxesComponent_ng_template_3_ng_template_9_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.axisYSecondaryInset = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiAxesComponent_ng_template_3_ng_template_10_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.axisYSecondaryLabels = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiAxesComponent_ng_template_3_ng_template_11_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.axisYSecondaryName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiAxesComponent_ng_template_3_ng_template_12_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.horizontalLines = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleTuiAxesComponent_ng_template_3_ng_template_13_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.horizontalLinesHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExampleTuiAxesComponent_ng_template_3_ng_template_14_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.verticalLines = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExampleTuiAxesComponent_ng_template_3_ng_template_15_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.verticalLinesHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("axisX", ctx_r1.axisX)("axisXLabels", ctx_r1.axisXLabels)("axisY", ctx_r1.axisY)("axisYInset", ctx_r1.axisYInset)("axisYLabels", ctx_r1.axisYLabels)("axisYName", ctx_r1.axisYName)("axisYSecondaryInset", ctx_r1.axisYSecondaryInset)("axisYSecondaryLabels", ctx_r1.axisYSecondaryLabels)("axisYSecondaryName", ctx_r1.axisYSecondaryName)("horizontalLines", ctx_r1.horizontalLines)("horizontalLinesHandler", ctx_r1.horizontalLinesHandler)("verticalLines", ctx_r1.verticalLines)("verticalLinesHandler", ctx_r1.verticalLinesHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.lineVariants)("documentationPropertyValue", ctx_r1.axisX);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.labelsXVariants)("documentationPropertyValue", ctx_r1.axisXLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.lineVariants)("documentationPropertyValue", ctx_r1.axisY);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.axisYInset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.labelsYVariants)("documentationPropertyValue", ctx_r1.axisYLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.axisYName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.axisYSecondaryInset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.labelsYVariants)("documentationPropertyValue", ctx_r1.axisYSecondaryLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.axisYSecondaryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.horizontalLines);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.handlerVariants)("documentationPropertyValue", ctx_r1.horizontalLinesHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.verticalLines);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.handlerVariants)("documentationPropertyValue", ctx_r1.verticalLinesHandler);
} }
var I18N_37;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2561454909924995663$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__38 = goog.getMsg(" Import {$startTagCode}TuiAxesModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_37 = MSG_EXTERNAL_2561454909924995663$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__38;
}
else {
    I18N_37 = $localize `:␟44a035fbfcb4f3f0ef301785a4fea1e80b4afe55␟2561454909924995663: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiAxesModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_39;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__40 = goog.getMsg("Add to the template:");
    I18N_39 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__40;
}
else {
    I18N_39 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiAxesComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiAxesComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/axes/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/axes/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/axes/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/axes/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/axes/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/axes/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/axes/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/axes/examples/2/index.less")),
        };
        this.lineVariants = [
            `solid`,
            `dashed`,
            `none`,
            `hidden`,
        ];
        this.labelsXVariants = [
            [],
            [``, `25%`, `50%`, `100%`],
            [`One`, `Two`, `Three`],
            [`One`, null, ``, `Two and a half`, `Three`, null],
        ];
        this.labelsYVariants = [
            [],
            [``, `25%`, `50%`, `100%`],
            [`One`, `Two`, `Three`],
            [`One`, ``, `Two and a half`, `Three`],
        ];
        this.handlerVariants = [
            _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_2__["TUI_ALWAYS_SOLID"],
            _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_2__["TUI_ALWAYS_DASHED"],
            index => (index % 2 ? `dashed` : `solid`),
        ];
        this.axisX = this.lineVariants[0];
        this.axisXLabels = this.labelsXVariants[0];
        this.axisY = this.lineVariants[0];
        this.axisYInset = false;
        this.axisYLabels = this.labelsYVariants[0];
        this.axisYName = ``;
        this.axisYSecondaryInset = false;
        this.axisYSecondaryLabels = this.labelsYVariants[0];
        this.axisYSecondaryName = ``;
        this.horizontalLines = 0;
        this.horizontalLinesHandler = this.handlerVariants[0];
        this.verticalLines = 0;
        this.verticalLinesHandler = this.handlerVariants[1];
    }
}
ExampleTuiAxesComponent.ɵfac = function ExampleTuiAxesComponent_Factory(t) { return new (t || ExampleTuiAxesComponent)(); };
ExampleTuiAxesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiAxesComponent, selectors: [["example-tui-axes"]], decls: 5, vars: 0, consts: [["package", "ADDON-CHARTS", "type", "components", 6, "header"], ["pageTab", ""], ["id", "advanced", 3, "content", 6, "heading"], ["id", "bars", 3, "content", 6, "heading"], [1, "axes", 3, "axisX", "axisXLabels", "axisY", "axisYInset", "axisYLabels", "axisYName", "axisYSecondaryInset", "axisYSecondaryLabels", "axisYSecondaryName", "horizontalLines", "horizontalLinesHandler", "verticalLines", "verticalLinesHandler"], ["documentationPropertyName", "axisX", "documentationPropertyMode", "input", "documentationPropertyType", "TuiLineTypeT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "axisXLabels", "documentationPropertyMode", "input", "documentationPropertyType", "ReadonlyArray<string | null>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "axisY", "documentationPropertyMode", "input", "documentationPropertyType", "TuiLineTypeT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "axisYInset", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "axisYLabels", "documentationPropertyMode", "input", "documentationPropertyType", "readonly string[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "axisYName", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "axisYSecondaryInset", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "axisYSecondaryLabels", "documentationPropertyMode", "input", "documentationPropertyType", "readonly string[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "axisYSecondaryName", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "horizontalLines", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "horizontalLinesHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiLineHandler", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "verticalLines", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "verticalLinesHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiLineHandler", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiAxesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiAxesComponent_ng_template_2_Template, 8, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiAxesComponent_ng_template_3_Template, 16, 33, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiAxesComponent_ng_template_4_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_6__["TuiAxesExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_7__["TuiAxesExample2"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocDemoComponent"], _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_9__["TuiAxesComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocCodeComponent"]], styles: [".axes[_ngcontent-%COMP%] {\n  height: 12.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2F4ZXMvYXhlcy5zdHlsZS5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYXhlcy9heGVzLnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYXhlcy9heGVzLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXhlcyB7XG4gICAgaGVpZ2h0OiAxMi41cmVtO1xufVxuIiwiLmF4ZXMge1xuICBoZWlnaHQ6IDEyLjVyZW07XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiAxesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-axes`,
                templateUrl: `./axes.template.html`,
                styleUrls: [`./axes.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/axes/axes.module.ts":
/*!************************************************!*\
  !*** ./src/modules/charts/axes/axes.module.ts ***!
  \************************************************/
/*! exports provided: ExampleTuiAxesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiAxesModule", function() { return ExampleTuiAxesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-charts */ "../addon-charts/index.ts");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _axes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./axes.component */ "./src/modules/charts/axes/axes.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/charts/axes/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/charts/axes/examples/2/index.ts");













class ExampleTuiAxesModule {
}
ExampleTuiAxesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiAxesModule });
ExampleTuiAxesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiAxesModule_Factory(t) { return new (t || ExampleTuiAxesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiAxesModule"],
            _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiBarChartModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_axes_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiAxesComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiAxesModule, { declarations: [_axes_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiAxesComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiAxesExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiAxesExample2"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiAxesModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiBarChartModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_axes_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiAxesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiAxesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiAxesModule"],
                    _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_3__["TuiBarChartModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_axes_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiAxesComponent"])),
                ],
                declarations: [_axes_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiAxesComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiAxesExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiAxesExample2"]],
                exports: [_axes_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiAxesComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/axes/examples/1/index.ts":
/*!*****************************************************!*\
  !*** ./src/modules/charts/axes/examples/1/index.ts ***!
  \*****************************************************/
/*! exports provided: TuiAxesExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiAxesExample1", function() { return TuiAxesExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/axes/axes.component */ "../addon-charts/components/axes/axes.component.ts");





class TuiAxesExample1 {
    constructor() {
        this.axisXLabels = [`Jan 2019`, `Feb`, `Mar`];
        this.axisYLabels = [``, `25%`, `50%`, `75%`, `100%`];
        this.axisYSecondaryLabels = [`80 k`, `100 k`, `120 k`];
        this.verticalLinesHandler = (index, total) => index === total - 1 ? `none` : `dashed`;
    }
}
TuiAxesExample1.ɵfac = function TuiAxesExample1_Factory(t) { return new (t || TuiAxesExample1)(); };
TuiAxesExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiAxesExample1, selectors: [["tui-axes-example-1"]], decls: 1, vars: 7, consts: [["axisYName", "Target", "axisYSecondaryName", "Sum", 1, "axes", 3, "axisYInset", "horizontalLines", "verticalLines", "axisXLabels", "axisYLabels", "axisYSecondaryLabels", "verticalLinesHandler"]], template: function TuiAxesExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-axes", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("axisYInset", true)("horizontalLines", 2)("verticalLines", 3)("axisXLabels", ctx.axisXLabels)("axisYLabels", ctx.axisYLabels)("axisYSecondaryLabels", ctx.axisYSecondaryLabels)("verticalLinesHandler", ctx.verticalLinesHandler);
    } }, directives: [_addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_3__["TuiAxesComponent"]], styles: [".axes[_ngcontent-%COMP%] {\n  height: 18.75rem;\n  width: 37.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2F4ZXMvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYXhlcy9leGFtcGxlcy8xL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NoYXJ0cy9heGVzL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5heGVzIHtcbiAgICBoZWlnaHQ6IDE4Ljc1cmVtO1xuICAgIHdpZHRoOiAzNy41cmVtO1xufVxuIiwiLmF4ZXMge1xuICBoZWlnaHQ6IDE4Ljc1cmVtO1xuICB3aWR0aDogMzcuNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiAxesExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-axes-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/axes/examples/2/index.ts":
/*!*****************************************************!*\
  !*** ./src/modules/charts/axes/examples/2/index.ts ***!
  \*****************************************************/
/*! exports provided: TuiAxesExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiAxesExample2", function() { return TuiAxesExample2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-charts */ "../addon-charts/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/axes/axes.component */ "../addon-charts/components/axes/axes.component.ts");
/* harmony import */ var _addon_charts_components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/bar-chart/bar-chart.component */ "../addon-charts/components/bar-chart/bar-chart.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/money/money.component */ "../addon-commerce/components/money/money.component.ts");











function TuiAxesExample2_ng_template_2_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "tui-money", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    const setIndex_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r3.getBackground(index_r5), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.getSetName(index_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("singleColor", true)("value", item_r4[setIndex_r2] * 1000);
} }
function TuiAxesExample2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiAxesExample2_ng_template_2_p_0_Template, 5, 5, "p", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.value);
} }
const BENJI = 100;
class TuiAxesExample2 {
    constructor() {
        this.setNames = [`cdk`, `core`, `kit`, `charts`];
        this.value = [
            [10, 20, 3, 7],
            [15, 18, 24, 1],
            [34, 23, 12, 9],
            [30, 14, 18, 14],
        ];
        this.axisYSecondaryLabels = [
            ``,
            `${this.getMax(this.value) / 2} k`,
            `${this.getMax(this.value)} k`,
        ];
        this.axisXLabels = [`Q1`, `Q2`, `Q3`, `Q4`];
        this.horizontalLinesHandler = _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TUI_ALWAYS_DASHED"];
        this.verticalLinesHandler = _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TUI_ALWAYS_NONE"];
    }
    getPercent(set) {
        return (BENJI * Math.max(...set)) / this.getMax(this.value);
    }
    getSetName(index) {
        return this.setNames[index];
    }
    getBackground(index) {
        return `var(--tui-chart-${index})`;
    }
    getMax(value) {
        return Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["ceil"])(value.reduce((max, value) => Math.max(...value, max), 0), -1);
    }
}
TuiAxesExample2.ɵfac = function TuiAxesExample2_Factory(t) { return new (t || TuiAxesExample2)(); };
TuiAxesExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiAxesExample2, selectors: [["tui-axes-example-2"]], decls: 4, vars: 8, consts: [["axisY", "none", 1, "axes", 3, "axisXLabels", "axisYSecondaryLabels", "horizontalLines", "verticalLines", "horizontalLinesHandler", "verticalLinesHandler"], [1, "chart", 3, "value", "hintContent"], ["hint", ""], ["class", "hint", 4, "ngFor", "ngForOf"], [1, "hint"], [1, "dot"], [1, "name"], [3, "singleColor", "value"]], template: function TuiAxesExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-axes", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "tui-bar-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TuiAxesExample2_ng_template_2_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("axisXLabels", ctx.axisXLabels)("axisYSecondaryLabels", ctx.axisYSecondaryLabels)("horizontalLines", 2)("verticalLines", 4)("horizontalLinesHandler", ctx.horizontalLinesHandler)("verticalLinesHandler", ctx.verticalLinesHandler);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.value)("hintContent", _r0);
    } }, directives: [_addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_6__["TuiAxesComponent"], _addon_charts_components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_7__["TuiBarChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_9__["TuiMoneyComponent"]], styles: ["[_nghost-%COMP%], .hint[_ngcontent-%COMP%] {\n  --tui-chart-0: #c779d0;\n  --tui-chart-1: #feac5e;\n  --tui-chart-2: #ff5f6d;\n  --tui-chart-3: #4bc0c8;\n}\n.axes[_ngcontent-%COMP%] {\n  height: 18.75rem;\n  width: 37.5rem;\n}\n.chart[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex: 1;\n  align-items: flex-end;\n  justify-content: center;\n  height: 100%;\n  margin-bottom: -0.0625rem;\n  cursor: pointer;\n}\n.wrapper[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.dot[_ngcontent-%COMP%] {\n  border-radius: 100%;\n  width: 0.75rem;\n  height: 0.75rem;\n  margin-right: 0.5rem;\n}\n.name[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2F4ZXMvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvYXhlcy9leGFtcGxlcy8yL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUNDSjtBREVBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDQUo7QURHQTtFQUNJLFlBQUE7QUNESjtBRElBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDRko7QURJSTtFQUNJLHFDQUFBO0FDRlI7QURNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0pKO0FET0E7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNMSjtBRFFBO0VBQ0ksb0JBQUE7QUNOSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NoYXJ0cy9heGVzL2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LFxuLmhpbnQge1xuICAgIC0tdHVpLWNoYXJ0LTA6ICNjNzc5ZDA7XG4gICAgLS10dWktY2hhcnQtMTogI2ZlYWM1ZTtcbiAgICAtLXR1aS1jaGFydC0yOiAjZmY1ZjZkO1xuICAgIC0tdHVpLWNoYXJ0LTM6ICM0YmMwYzg7XG59XG5cbi5heGVzIHtcbiAgICBoZWlnaHQ6IDE4Ljc1cmVtO1xuICAgIHdpZHRoOiAzNy41cmVtO1xufVxuXG4uY2hhcnQge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLndyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAtMC4wNjI1cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIH1cbn1cblxuLmhpbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRvdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMC43NXJlbTtcbiAgICBoZWlnaHQ6IDAuNzVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5uYW1lIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbiIsIjpob3N0LFxuLmhpbnQge1xuICAtLXR1aS1jaGFydC0wOiAjYzc3OWQwO1xuICAtLXR1aS1jaGFydC0xOiAjZmVhYzVlO1xuICAtLXR1aS1jaGFydC0yOiAjZmY1ZjZkO1xuICAtLXR1aS1jaGFydC0zOiAjNGJjMGM4O1xufVxuLmF4ZXMge1xuICBoZWlnaHQ6IDE4Ljc1cmVtO1xuICB3aWR0aDogMzcuNXJlbTtcbn1cbi5jaGFydCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IC0wLjA2MjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi53cmFwcGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cbi5oaW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kb3Qge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogMC43NXJlbTtcbiAgaGVpZ2h0OiAwLjc1cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5uYW1lIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiPure"]
], TuiAxesExample2.prototype, "getMax", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiAxesExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-axes-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, { getMax: [] }); })();


/***/ })

}]);
//# sourceMappingURL=charts-axes-axes-module.js.map