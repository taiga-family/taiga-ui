(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-calendar-range-calendar-range-module"],{

/***/ "./src/modules/components/calendar-range/calendar-range.component.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/components/calendar-range/calendar-range.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExampleTuiCalendarRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCalendarRangeComponent", function() { return ExampleTuiCalendarRangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/calendar-range/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/calendar-range/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/calendar-range/examples/3/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _kit_components_calendar_range_calendar_range_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../kit/components/calendar-range/calendar-range.component */ "../kit/components/calendar-range/calendar-range.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");

















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_842862008044170165$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__1 = goog.getMsg("Component for choosing date range in calendar");
    I18N_0 = MSG_EXTERNAL_842862008044170165$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟b48c5893d5adbcf3c4ac85c5b908de4d514cb60e␟842862008044170165:Component for choosing date range in calendar`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__3 = goog.getMsg("Basic");
    I18N_2 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4518567138108504452$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__6 = goog.getMsg("with value");
    I18N_5 = MSG_EXTERNAL_4518567138108504452$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟e3eea3bf6a2e13ad5a46e302dca1a26c30d11a80␟4518567138108504452:with value`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8390180780322976594$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__9 = goog.getMsg("with ranges");
    I18N_8 = MSG_EXTERNAL_8390180780322976594$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟fa41f8dfd47a9a9b9671f2e2c5867ac089540670␟8390180780322976594:with ranges`;
}
const _c10 = ["heading", I18N_8];
function ExampleTuiCalendarRangeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-range-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-range-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-range-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4370073840573771249$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___12 = goog.getMsg(" Default month to show ");
    I18N_11 = MSG_EXTERNAL_4370073840573771249$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___12;
}
else {
    I18N_11 = $localize `:␟cee5a8a5054c8a1eed4236e17142f509a2da3c3a␟4370073840573771249: Default month to show `;
}
function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_11);
} }
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8655647082077231883$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___14 = goog.getMsg("{$startTagDiv}A handler that gets a date and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", { "startTagDiv": "\uFFFD#1\uFFFD", "closeTagDiv": "\uFFFD/#1\uFFFD", "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD" });
    I18N_13 = MSG_EXTERNAL_8655647082077231883$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___14;
}
else {
    I18N_13 = $localize `:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
}
function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1585752593868985764$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___16 = goog.getMsg(" Fixed intervals (shows 2 calendars with empty array) ");
    I18N_15 = MSG_EXTERNAL_1585752593868985764$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___16;
}
else {
    I18N_15 = $localize `:␟0600d93e5689970aa785fe0413acf4c5da35b682␟1585752593868985764: Fixed intervals (shows 2 calendars with empty array) `;
}
function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_15);
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7126872511108805662$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___18 = goog.getMsg(" A handler that gets date and returns null or a tuple with circled marker colors ");
    I18N_17 = MSG_EXTERNAL_7126872511108805662$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___18;
}
else {
    I18N_17 = $localize `:␟23c9859665a49041525158245d62b03eb6e0bb77␟7126872511108805662: A handler that gets date and returns null or a tuple with circled marker colors `;
}
function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_17);
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7105748595977480347$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___20 = goog.getMsg(" Min date ");
    I18N_19 = MSG_EXTERNAL_7105748595977480347$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___20;
}
else {
    I18N_19 = $localize `:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `;
}
function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_19);
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6045744383953302270$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___22 = goog.getMsg(" Max date ");
    I18N_21 = MSG_EXTERNAL_6045744383953302270$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___22;
}
else {
    I18N_21 = $localize `:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `;
}
function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_21);
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4884270346610812155$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___24 = goog.getMsg(" Minimal length of range ");
    I18N_23 = MSG_EXTERNAL_4884270346610812155$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___24;
}
else {
    I18N_23 = $localize `:␟309c0b4024f636a71dea973f24cd05b0d38af82b␟4884270346610812155: Minimal length of range `;
}
function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_23);
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1253745446557993958$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___26 = goog.getMsg(" Maximal length of range ");
    I18N_25 = MSG_EXTERNAL_1253745446557993958$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___26;
}
else {
    I18N_25 = $localize `:␟69cef120f415885c1d7258c5de495aa3cae21f85␟1253745446557993958: Maximal length of range `;
}
function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_25);
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_157320158054980427$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___28 = goog.getMsg(" Selected date range ");
    I18N_27 = MSG_EXTERNAL_157320158054980427$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___28;
}
else {
    I18N_27 = $localize `:␟461a4fddac18488926c8f2f71d423c0c79f6eb4a␟157320158054980427: Selected date range `;
}
function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_27);
} }
function ExampleTuiCalendarRangeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-calendar-range", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rangeChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_tui_calendar_range_rangeChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r11.emitEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.defaultViewedMonth = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_4_Template, 3, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.disabledItemHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.items = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.markerHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.min = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.minLength = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.maxLength = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 14, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultViewedMonth", ctx_r1.defaultViewedMonth)("disabledItemHandler", ctx_r1.disabledItemHandler)("items", ctx_r1.items)("markerHandler", ctx_r1.markerHandler)("min", ctx_r1.min)("max", ctx_r1.max)("minLength", ctx_r1.minLength)("maxLength", ctx_r1.maxLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.defaultViewedMonthVariants)("documentationPropertyValue", ctx_r1.defaultViewedMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.itemsVariants)("documentationPropertyValue", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.markerHandlerVariants)("documentationPropertyValue", ctx_r1.markerHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.minLengthVariants)("documentationPropertyValue", ctx_r1.minLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.maxLengthVariants)("documentationPropertyValue", ctx_r1.maxLength);
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5891685687892601785$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__30 = goog.getMsg(" Import {$startTagCode}TuiCalendarRangeModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_29 = MSG_EXTERNAL_5891685687892601785$$SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__30;
}
else {
    I18N_29 = $localize `:␟656daa25b58e47eb47175cd1e017550bfec5eae2␟5891685687892601785: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCalendarRangeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
function ExampleTuiCalendarRangeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
} }
const TWO_DOTS = ["primary" /* Primary */, "secondary" /* Secondary */];
const ONE_DOT = ["success" /* Success */];
class ExampleTuiCalendarRangeComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-range/examples/import/import-module.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-range/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-range/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-range/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-range/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-range/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar-range/examples/3/index.html")),
        };
        this.minVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TUI_FIRST_DAY"],
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](2017, 2, 5),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](1900, 0, 1),
        ];
        this.maxVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TUI_LAST_DAY"],
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](2018, 9, 30),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](2020, 2, 5),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](2300, 0, 1),
        ];
        this.disabledItemHandlerVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["ALWAYS_FALSE_HANDLER"],
            ({ day }) => day % 3 === 0,
        ];
        this.defaultViewedMonthVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiMonth"].currentLocal(),
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiMonth"].currentLocal().append({ month: 1 }),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiMonth"](2007, 5),
        ];
        this.itemsVariants = [
            [],
            Object(_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["tuiCreateDefaultDayRangePeriods"])(),
        ];
        this.minLengthVariants = [{ day: 3 }, { day: 15 }];
        this.maxLengthVariants = [{ day: 5 }, { month: 1 }, { year: 1 }];
        this.markerHandlerVariants = [
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TUI_DEFAULT_MARKER_HANDLER"],
            (day) => (day.day % 2 === 0 ? TWO_DOTS : ONE_DOT),
        ];
        this.markerHandler = this.markerHandlerVariants[0];
        this.min = this.minVariants[0];
        this.max = this.maxVariants[0];
        this.cleaner = false;
        this.disabledItemHandler = this.disabledItemHandlerVariants[0];
        this.items = this.itemsVariants[0];
        this.defaultViewedMonth = this.defaultViewedMonthVariants[0];
        this.minLength = null;
        this.maxLength = null;
    }
}
ExampleTuiCalendarRangeComponent.ɵfac = function ExampleTuiCalendarRangeComponent_Factory(t) { return new (t || ExampleTuiCalendarRangeComponent)(); };
ExampleTuiCalendarRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiCalendarRangeComponent, selectors: [["example-calendar-range"]], decls: 4, vars: 0, consts: [["header", "CalendarRange", "package", "KIT", "type", "components"], ["pageTab", ""], ["id", "base", 3, "content", 6, "heading"], ["id", "with-value", 3, "content", 6, "heading"], ["id", "periods", 3, "content", 6, "heading"], [3, "defaultViewedMonth", "disabledItemHandler", "items", "markerHandler", "min", "max", "minLength", "maxLength", "rangeChange"], ["documentationPropertyName", "defaultViewedMonth", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMonth", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<TuiDay>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "items", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDayRangePeriod[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "markerHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMarkerHandler", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "minLength", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDayLike | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "maxLength", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDayLike | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "rangeChange", "documentationPropertyMode", "output", "documentationPropertyType", "TuiDayRange"], ["documentationPropertyRangeChange", "documentationProperty"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"]], template: function ExampleTuiCalendarRangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiCalendarRangeComponent_ng_template_1_Template, 11, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiCalendarRangeComponent_ng_template_2_Template, 13, 24, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiCalendarRangeComponent_ng_template_3_Template, 6, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_8__["TuiRangeExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_9__["TuiRangeExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_10__["TuiRangeExample3"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDemoComponent"], _kit_components_calendar_range_calendar_range_component__WEBPACK_IMPORTED_MODULE_12__["TuiCalendarRangeComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiCalendarRangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-calendar-range`,
                templateUrl: `./calendar-range.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/calendar-range/calendar-range.module.ts":
/*!************************************************************************!*\
  !*** ./src/modules/components/calendar-range/calendar-range.module.ts ***!
  \************************************************************************/
/*! exports provided: ExampleTuiCalendarRangeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCalendarRangeModule", function() { return ExampleTuiCalendarRangeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _calendar_range_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-range.component */ "./src/modules/components/calendar-range/calendar-range.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/calendar-range/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/calendar-range/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/calendar-range/examples/3/index.ts");











class ExampleTuiCalendarRangeModule {
}
ExampleTuiCalendarRangeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiCalendarRangeModule });
ExampleTuiCalendarRangeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiCalendarRangeModule_Factory(t) { return new (t || ExampleTuiCalendarRangeModule)(); }, imports: [[
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiCalendarRangeModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_calendar_range_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCalendarRangeComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiCalendarRangeModule, { declarations: [_calendar_range_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCalendarRangeComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiRangeExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiRangeExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_8__["TuiRangeExample3"]], imports: [_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiCalendarRangeModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_calendar_range_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCalendarRangeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiCalendarRangeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiCalendarRangeModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_calendar_range_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCalendarRangeComponent"])),
                ],
                declarations: [
                    _calendar_range_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCalendarRangeComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiRangeExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiRangeExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_8__["TuiRangeExample3"],
                ],
                exports: [_calendar_range_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCalendarRangeComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/calendar-range/examples/1/index.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/components/calendar-range/examples/1/index.ts ***!
  \*******************************************************************/
/*! exports provided: TuiRangeExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiRangeExample1", function() { return TuiRangeExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_calendar_range_calendar_range_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/calendar-range/calendar-range.component */ "../kit/components/calendar-range/calendar-range.component.ts");





class TuiRangeExample1 {
}
TuiRangeExample1.ɵfac = function TuiRangeExample1_Factory(t) { return new (t || TuiRangeExample1)(); };
TuiRangeExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiRangeExample1, selectors: [["tui-range-example-1"]], decls: 1, vars: 0, template: function TuiRangeExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-calendar-range");
    } }, directives: [_kit_components_calendar_range_calendar_range_component__WEBPACK_IMPORTED_MODULE_3__["TuiCalendarRangeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiRangeExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-range-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/calendar-range/examples/2/index.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/components/calendar-range/examples/2/index.ts ***!
  \*******************************************************************/
/*! exports provided: calendarStream$, TuiRangeExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarStream$", function() { return calendarStream$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiRangeExample2", function() { return TuiRangeExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _kit_components_calendar_range_calendar_range_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/calendar-range/calendar-range.component */ "../kit/components/calendar-range/calendar-range.component.ts");








const calendarStream$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDayRange"](new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2019, 2, 11), new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2019, 2, 14)));
class TuiRangeExample2 {
}
TuiRangeExample2.ɵfac = function TuiRangeExample2_Factory(t) { return new (t || TuiRangeExample2)(); };
TuiRangeExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiRangeExample2, selectors: [["tui-range-example-2"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TUI_CALENDAR_DATA_STREAM"],
                useValue: calendarStream$,
            },
        ])], decls: 1, vars: 0, template: function TuiRangeExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-calendar-range");
    } }, directives: [_kit_components_calendar_range_calendar_range_component__WEBPACK_IMPORTED_MODULE_6__["TuiCalendarRangeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiRangeExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-range-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
                providers: [
                    {
                        provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TUI_CALENDAR_DATA_STREAM"],
                        useValue: calendarStream$,
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/calendar-range/examples/3/index.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/components/calendar-range/examples/3/index.ts ***!
  \*******************************************************************/
/*! exports provided: TuiRangeExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiRangeExample3", function() { return TuiRangeExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _kit_components_calendar_range_calendar_range_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/calendar-range/calendar-range.component */ "../kit/components/calendar-range/calendar-range.component.ts");






class TuiRangeExample3 {
    constructor() {
        this.items = Object(_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["tuiCreateDefaultDayRangePeriods"])();
    }
}
TuiRangeExample3.ɵfac = function TuiRangeExample3_Factory(t) { return new (t || TuiRangeExample3)(); };
TuiRangeExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiRangeExample3, selectors: [["tui-range-example-3"]], decls: 1, vars: 1, consts: [[3, "items"]], template: function TuiRangeExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-calendar-range", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items);
    } }, directives: [_kit_components_calendar_range_calendar_range_component__WEBPACK_IMPORTED_MODULE_4__["TuiCalendarRangeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiRangeExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-range-example-3`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-calendar-range-calendar-range-module.js.map