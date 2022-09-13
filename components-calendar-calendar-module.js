(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-calendar-calendar-module"],{

/***/ "./src/modules/components/calendar/calendar.component.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/calendar/calendar.component.ts ***!
  \***************************************************************/
/*! exports provided: ExampleTuiCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCalendarComponent", function() { return ExampleTuiCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/calendar/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/calendar/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/calendar/examples/3/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _core_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../core/components/calendar/calendar.component */ "../core/components/calendar/calendar.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");




















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4402714714780180362$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__1 = goog.getMsg(" Use {$startTagCode}{$startTagStrong}TUI_FIRST_DAY_OF_WEEK{$closeTagStrong}{$closeTagCode} token if you need to change start day of the week (Monday by default): {$startParagraph}{$startTagTuiDocCode}{$closeTagTuiDocCode}{$closeParagraph}", { "startTagCode": "\uFFFD#9\uFFFD", "startTagStrong": "\uFFFD#10\uFFFD", "closeTagStrong": "\uFFFD/#10\uFFFD", "closeTagCode": "\uFFFD/#9\uFFFD", "startParagraph": "\uFFFD#11\uFFFD", "startTagTuiDocCode": "\uFFFD#12\uFFFD", "closeTagTuiDocCode": "\uFFFD/#12\uFFFD", "closeParagraph": "\uFFFD/#11\uFFFD" });
    I18N_0 = MSG_EXTERNAL_4402714714780180362$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟1e3ac251206e16f4cba2402607873bf368e5e82b␟4402714714780180362: Use ${"\uFFFD#9\uFFFD"}:START_TAG_CODE:${"\uFFFD#10\uFFFD"}:START_TAG_STRONG:TUI_FIRST_DAY_OF_WEEK${"\uFFFD/#10\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_CODE: token if you need to change start day of the week (Monday by default): ${"\uFFFD#11\uFFFD"}:START_PARAGRAPH:${"\uFFFD#12\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#12\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:${"\uFFFD/#11\uFFFD"}:CLOSE_PARAGRAPH:`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__3 = goog.getMsg("Basic");
    I18N_2 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8823844911216143942$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__6 = goog.getMsg("range");
    I18N_5 = MSG_EXTERNAL_8823844911216143942$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟0ed6cbeb3b69bb940c9e3365663a6bff540311e7␟8823844911216143942:range`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5871122953070556647$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__9 = goog.getMsg("With markers");
    I18N_8 = MSG_EXTERNAL_5871122953070556647$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟f0ad0067675751d24dcae9afde2a56fe3ecf3c45␟5871122953070556647:With markers`;
}
const _c10 = ["heading", I18N_8];
const _c11 = function () { return ["/components/input-date"]; };
const _c12 = function () { return ["/components/input-date-range"]; };
function ExampleTuiCalendarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A simple calendar. If you want a textfield with date, see ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " InputDate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " InputDateRange ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-notification", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](8, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-doc-code", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](14, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-calendar-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](17, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "tui-calendar-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](20, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "tui-calendar-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r0.firstDayOfWeekToken);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
} }
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8655647082077231883$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___14 = goog.getMsg("{$startTagDiv}A handler that gets a date and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", { "startTagDiv": "\uFFFD#1\uFFFD", "closeTagDiv": "\uFFFD/#1\uFFFD", "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD" });
    I18N_13 = MSG_EXTERNAL_8655647082077231883$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___14;
}
else {
    I18N_13 = $localize `:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
}
function ExampleTuiCalendarComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_427026901846333904$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___16 = goog.getMsg(" Show adjacent months days ");
    I18N_15 = MSG_EXTERNAL_427026901846333904$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___16;
}
else {
    I18N_15 = $localize `:␟93468ee263f0453e046cd2a7d140d971a77a21d6␟427026901846333904: Show adjacent months days `;
}
function ExampleTuiCalendarComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_15);
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_285023532423922220$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___18 = goog.getMsg(" Hovered date ");
    I18N_17 = MSG_EXTERNAL_285023532423922220$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___18;
}
else {
    I18N_17 = $localize `:␟eda1485e51ac095aaacc17acf52331ccf5582c55␟285023532423922220: Hovered date `;
}
function ExampleTuiCalendarComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_17);
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7126872511108805662$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___20 = goog.getMsg(" A handler that gets date and returns null or a tuple with circled marker colors ");
    I18N_19 = MSG_EXTERNAL_7126872511108805662$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___20;
}
else {
    I18N_19 = $localize `:␟23c9859665a49041525158245d62b03eb6e0bb77␟7126872511108805662: A handler that gets date and returns null or a tuple with circled marker colors `;
}
function ExampleTuiCalendarComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_19);
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_945025041805688144$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___22 = goog.getMsg(" Maximal date to choose ");
    I18N_21 = MSG_EXTERNAL_945025041805688144$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___22;
}
else {
    I18N_21 = $localize `:␟0ec2997ebb79ee39672ca03c45b62d3720263ca6␟945025041805688144: Maximal date to choose `;
}
function ExampleTuiCalendarComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_21);
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4446534518832798635$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___24 = goog.getMsg(" Maximal month to access ");
    I18N_23 = MSG_EXTERNAL_4446534518832798635$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___24;
}
else {
    I18N_23 = $localize `:␟76712405dc083e287b7d84203f246883bf2195c8␟4446534518832798635: Maximal month to access `;
}
function ExampleTuiCalendarComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_23);
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2791094226136211105$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___26 = goog.getMsg(" Minimum date to choose ");
    I18N_25 = MSG_EXTERNAL_2791094226136211105$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___26;
}
else {
    I18N_25 = $localize `:␟5e6b74ad89b862a2b83b5d77e43f763b57137112␟2791094226136211105: Minimum date to choose `;
}
function ExampleTuiCalendarComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_25);
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4181665065525097983$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___28 = goog.getMsg(" Minimum month to access ");
    I18N_27 = MSG_EXTERNAL_4181665065525097983$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___28;
}
else {
    I18N_27 = $localize `:␟7b0768860406832abc45b69314b993a46a099dc6␟4181665065525097983: Minimum month to access `;
}
function ExampleTuiCalendarComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_27);
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3915704723653985372$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___30 = goog.getMsg(" Current month ");
    I18N_29 = MSG_EXTERNAL_3915704723653985372$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___30;
}
else {
    I18N_29 = $localize `:␟cac850ce7e80ef75f9715f1603460f9575f1df49␟3915704723653985372: Current month `;
}
function ExampleTuiCalendarComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_29);
} }
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2084704973569232503$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___32 = goog.getMsg(" Selected day or range ");
    I18N_31 = MSG_EXTERNAL_2084704973569232503$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___32;
}
else {
    I18N_31 = $localize `:␟06c2894e3ec228f0e65407118a02fbd4a6947389␟2084704973569232503: Selected day or range `;
}
function ExampleTuiCalendarComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_31);
} }
var I18N_33;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1956037044112739727$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___34 = goog.getMsg(" Date click ");
    I18N_33 = MSG_EXTERNAL_1956037044112739727$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___34;
}
else {
    I18N_33 = $localize `:␟30dc64dde7c5b72b981802ac51cffe74453e08c2␟1956037044112739727: Date click `;
}
function ExampleTuiCalendarComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_33);
} }
function ExampleTuiCalendarComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-calendar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("monthChange", function ExampleTuiCalendarComponent_ng_template_2_Template_tui_calendar_monthChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.month = $event; })("hoveredItemChange", function ExampleTuiCalendarComponent_ng_template_2_Template_tui_calendar_hoveredItemChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.hoveredItem = $event; })("dayClick", function ExampleTuiCalendarComponent_ng_template_2_Template_tui_calendar_dayClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onDayClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiCalendarComponent_ng_template_2_ng_template_3_Template, 3, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.disabledItemHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiCalendarComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.showAdjacent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiCalendarComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.hoveredItem = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiCalendarComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.markerHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiCalendarComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiCalendarComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiCalendarComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.min = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiCalendarComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.min = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiCalendarComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.month = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiCalendarComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleTuiCalendarComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.value)("disabledItemHandler", ctx_r1.disabledItemHandler)("min", ctx_r1.min)("max", ctx_r1.max)("markerHandler", ctx_r1.markerHandler)("minViewedMonth", ctx_r1.minViewedMonth)("maxViewedMonth", ctx_r1.maxViewedMonth)("showAdjacent", ctx_r1.showAdjacent)("month", ctx_r1.month)("hoveredItem", ctx_r1.hoveredItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.showAdjacent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.hoveredItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.markerHandlerVariants)("documentationPropertyValue", ctx_r1.markerHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.month);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
} }
var I18N_35;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9069493769412225703$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__36 = goog.getMsg(" Import {$startTagCode}TuiCalendarModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_35 = MSG_EXTERNAL_9069493769412225703$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__36;
}
else {
    I18N_35 = $localize `:␟a7ee2d166f9049940b6c8619f3c1e4a0e35a5c25␟9069493769412225703: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCalendarModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_37;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__38 = goog.getMsg("Add to the template:");
    I18N_37 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__38;
}
else {
    I18N_37 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiCalendarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
const TWO_DOTS = ["primary" /* Primary */, "secondary" /* Secondary */];
const ONE_DOT = ["success" /* Success */];
class ExampleTuiCalendarComponent {
    constructor(alertService) {
        this.alertService = alertService;
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar/examples/import/insert-template.md"));
        this.firstDayOfWeekToken = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-first-day-of-week-token-md */ "!!raw-loader!-examples-import-first-day-of-week-token-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/first-day-of-week-token.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar/examples/import/first-day-of-week-token.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/calendar/examples/3/index.html")),
        };
        this.showAdjacent = true;
        this.minVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TUI_FIRST_DAY"],
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](2017, 2, 5),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](1900, 0, 1),
        ];
        this.min = this.minVariants[0];
        this.maxVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TUI_LAST_DAY"],
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](2020, 3, 30),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](2300, 0, 1),
        ];
        this.max = this.maxVariants[0];
        this.minViewedMonthVariants = [
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiMonth"](0, 0),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiMonth"](2017, 2),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiMonth"](1900, 0),
        ];
        this.minViewedMonth = this.minViewedMonthVariants[0];
        this.maxViewedMonthVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TUI_LAST_DAY"],
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiMonth"](2020, 3),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiMonth"](2300, 0),
        ];
        this.maxViewedMonth = this.maxViewedMonthVariants[0];
        this.disabledItemHandlerVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["ALWAYS_FALSE_HANDLER"],
            ({ day }) => day % 3 === 0,
        ];
        this.disabledItemHandler = this.disabledItemHandlerVariants[0];
        this.markerHandlerVariants = [
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TUI_DEFAULT_MARKER_HANDLER"],
            (day) => (day.day % 2 === 0 ? TWO_DOTS : ONE_DOT),
        ];
        this.markerHandler = this.markerHandlerVariants[0];
        this.valueVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"].currentLocal(),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDayRange"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"].currentLocal(), _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"].currentLocal().append({ day: 3 })),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](2020, 3, 21),
        ];
        this.value = null;
        this.month = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiMonth"].currentLocal();
        this.hoveredItem = null;
    }
    onDayClick(day) {
        this.alertService.open(String(day)).subscribe();
    }
}
ExampleTuiCalendarComponent.ɵfac = function ExampleTuiCalendarComponent_Factory(t) { return new (t || ExampleTuiCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"])); };
ExampleTuiCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiCalendarComponent, selectors: [["example-tui-calendar"]], decls: 4, vars: 0, consts: [["header", "Calendar", "package", "CORE", "type", "components"], ["pageTab", ""], ["tuiLink", "", 3, "routerLink"], [1, "tui-space_vertical-4"], [3, "code"], ["id", "base", 3, "content", 6, "heading"], ["id", "range", 3, "content", 6, "heading"], ["id", "markers", 3, "content", 6, "heading"], [3, "value", "disabledItemHandler", "min", "max", "markerHandler", "minViewedMonth", "maxViewedMonth", "showAdjacent", "month", "hoveredItem", "monthChange", "hoveredItemChange", "dayClick"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<TuiDay>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "showAdjacent", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hoveredItem", "documentationPropertyMode", "input-output", "documentationPropertyType", "TuiDay | null", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "markerHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMarkerHandler", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "maxViewedMonth", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMonth", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "minViewedMonth", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMonth", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "month", "documentationPropertyMode", "input-output", "documentationPropertyType", "TuiMonth", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay | TuiDayRange | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "dayClick", "documentationPropertyMode", "output", "documentationPropertyType", "TuiDay"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiCalendarComponent_ng_template_1_Template, 22, 8, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiCalendarComponent_ng_template_2_Template, 14, 27, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiCalendarComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_6__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_8__["TuiNotificationComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocCodeComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_11__["TuiCalendarExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_12__["TuiCalendarExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_13__["TuiCalendarExample3"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_14__["TuiDocDemoComponent"], _core_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_15__["TuiCalendarComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_16__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_17__["TuiDocDocumentationPropertyConnectorDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-calendar`,
                templateUrl: `./calendar.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/calendar/calendar.module.ts":
/*!************************************************************!*\
  !*** ./src/modules/components/calendar/calendar.module.ts ***!
  \************************************************************/
/*! exports provided: ExampleTuiCalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCalendarModule", function() { return ExampleTuiCalendarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar.component */ "./src/modules/components/calendar/calendar.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/calendar/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/calendar/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/calendar/examples/3/index.ts");











class ExampleTuiCalendarModule {
}
ExampleTuiCalendarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiCalendarModule });
ExampleTuiCalendarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiCalendarModule_Factory(t) { return new (t || ExampleTuiCalendarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiCalendarModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_calendar_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCalendarComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiCalendarModule, { declarations: [_calendar_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCalendarComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiCalendarExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiCalendarExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_8__["TuiCalendarExample3"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiCalendarModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_calendar_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCalendarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiCalendarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiCalendarModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_calendar_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCalendarComponent"])),
                ],
                declarations: [
                    _calendar_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCalendarComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiCalendarExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiCalendarExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_8__["TuiCalendarExample3"],
                ],
                exports: [_calendar_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCalendarComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/calendar/examples/1/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/components/calendar/examples/1/index.ts ***!
  \*************************************************************/
/*! exports provided: TuiCalendarExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCalendarExample1", function() { return TuiCalendarExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/components/calendar/calendar.component */ "../core/components/calendar/calendar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");






var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2620900202482217567$$SRC_MODULES_COMPONENTS_CALENDAR_EXAMPLES_1_INDEX_TS__1 = goog.getMsg(" Chosen date: {$interpolation}\n", { "interpolation": "\uFFFD0\uFFFD" });
    I18N_0 = MSG_EXTERNAL_2620900202482217567$$SRC_MODULES_COMPONENTS_CALENDAR_EXAMPLES_1_INDEX_TS__1;
}
else {
    I18N_0 = $localize `:␟2feeb35068c5f0d54e2e1997546b856a08da841d␟2620900202482217567: Chosen date: ${"\uFFFD0\uFFFD"}:INTERPOLATION:
`;
}
function TuiCalendarExample1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx_r0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
} }
class TuiCalendarExample1 {
    constructor() {
        this.value = null;
    }
    onDayClick(day) {
        this.value = day;
    }
}
TuiCalendarExample1.ɵfac = function TuiCalendarExample1_Factory(t) { return new (t || TuiCalendarExample1)(); };
TuiCalendarExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCalendarExample1, selectors: [["tui-calendar-example-1"]], decls: 2, vars: 2, consts: [[3, "value", "dayClick"], [4, "ngIf"]], template: function TuiCalendarExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-calendar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dayClick", function TuiCalendarExample1_Template_tui_calendar_dayClick_0_listener($event) { return ctx.onDayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiCalendarExample1_div_1_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_core_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__["TuiCalendarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCalendarExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-calendar-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/calendar/examples/2/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/components/calendar/examples/2/index.ts ***!
  \*************************************************************/
/*! exports provided: TuiCalendarExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCalendarExample2", function() { return TuiCalendarExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _core_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/calendar/calendar.component */ "../core/components/calendar/calendar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4859697449568186620$$SRC_MODULES_COMPONENTS_CALENDAR_EXAMPLES_2_INDEX_TS__1 = goog.getMsg(" Chosen dates: {$interpolation}\n", { "interpolation": "\uFFFD0\uFFFD" });
    I18N_0 = MSG_EXTERNAL_4859697449568186620$$SRC_MODULES_COMPONENTS_CALENDAR_EXAMPLES_2_INDEX_TS__1;
}
else {
    I18N_0 = $localize `:␟6a61580d370f4de6560593a882e91d078a887bd0␟4859697449568186620: Chosen dates: ${"\uFFFD0\uFFFD"}:INTERPOLATION:
`;
}
function TuiCalendarExample2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx_r0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
} }
class TuiCalendarExample2 {
    constructor() {
        this.value = null;
        this.firstMonth = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMonth"].currentLocal();
        this.middleMonth = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMonth"].currentLocal().append({ month: 1 });
        this.lastMonth = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMonth"].currentLocal().append({ month: 2 });
        this.hoveredItem = null;
    }
    onDayClick(day) {
        if (this.value === null || !this.value.isSingleDay) {
            this.value = new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDayRange"](day, day);
        }
        this.value = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDayRange"].sort(this.value.from, day);
    }
    onMonthChangeFirst(month) {
        this.firstMonth = month;
        this.middleMonth = month.append({ month: 1 });
        this.lastMonth = month.append({ month: 2 });
    }
    onMonthChangeMiddle(month) {
        this.firstMonth = month.append({ month: -1 });
        this.middleMonth = month;
        this.lastMonth = month.append({ month: 1 });
    }
    onMonthChangeLast(month) {
        this.firstMonth = month.append({ month: -2 });
        this.middleMonth = month.append({ month: -1 });
        this.lastMonth = month;
    }
}
TuiCalendarExample2.ɵfac = function TuiCalendarExample2_Factory(t) { return new (t || TuiCalendarExample2)(); };
TuiCalendarExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCalendarExample2, selectors: [["tui-calendar-example-2"]], decls: 5, vars: 17, consts: [[1, "wrapper"], [3, "value", "showAdjacent", "maxViewedMonth", "month", "hoveredItem", "hoveredItemChange", "monthChange", "dayClick"], [3, "value", "showAdjacent", "month", "minViewedMonth", "maxViewedMonth", "hoveredItem", "hoveredItemChange", "monthChange", "dayClick"], [3, "value", "showAdjacent", "minViewedMonth", "month", "hoveredItem", "hoveredItemChange", "monthChange", "dayClick"], [4, "ngIf"]], template: function TuiCalendarExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-calendar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hoveredItemChange", function TuiCalendarExample2_Template_tui_calendar_hoveredItemChange_1_listener($event) { return ctx.hoveredItem = $event; })("monthChange", function TuiCalendarExample2_Template_tui_calendar_monthChange_1_listener($event) { return ctx.onMonthChangeFirst($event); })("dayClick", function TuiCalendarExample2_Template_tui_calendar_dayClick_1_listener($event) { return ctx.onDayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-calendar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hoveredItemChange", function TuiCalendarExample2_Template_tui_calendar_hoveredItemChange_2_listener($event) { return ctx.hoveredItem = $event; })("monthChange", function TuiCalendarExample2_Template_tui_calendar_monthChange_2_listener($event) { return ctx.onMonthChangeMiddle($event); })("dayClick", function TuiCalendarExample2_Template_tui_calendar_dayClick_2_listener($event) { return ctx.onDayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-calendar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hoveredItemChange", function TuiCalendarExample2_Template_tui_calendar_hoveredItemChange_3_listener($event) { return ctx.hoveredItem = $event; })("monthChange", function TuiCalendarExample2_Template_tui_calendar_monthChange_3_listener($event) { return ctx.onMonthChangeLast($event); })("dayClick", function TuiCalendarExample2_Template_tui_calendar_dayClick_3_listener($event) { return ctx.onDayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiCalendarExample2_div_4_Template, 2, 1, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("showAdjacent", false)("maxViewedMonth", ctx.firstMonth)("month", ctx.firstMonth)("hoveredItem", ctx.hoveredItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("showAdjacent", false)("month", ctx.middleMonth)("minViewedMonth", ctx.middleMonth)("maxViewedMonth", ctx.middleMonth)("hoveredItem", ctx.hoveredItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("showAdjacent", false)("minViewedMonth", ctx.lastMonth)("month", ctx.lastMonth)("hoveredItem", ctx.hoveredItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_core_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["TuiCalendarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYWxlbmRhci9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvY2FsZW5kYXIvZXhhbXBsZXMvMi9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYWxlbmRhci9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbiIsIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCalendarExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-calendar-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/calendar/examples/3/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/components/calendar/examples/3/index.ts ***!
  \*************************************************************/
/*! exports provided: TuiCalendarExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCalendarExample3", function() { return TuiCalendarExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _core_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/calendar/calendar.component */ "../core/components/calendar/calendar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4859697449568186620$$SRC_MODULES_COMPONENTS_CALENDAR_EXAMPLES_3_INDEX_TS__1 = goog.getMsg(" Chosen dates: {$interpolation}\n", { "interpolation": "\uFFFD0\uFFFD" });
    I18N_0 = MSG_EXTERNAL_4859697449568186620$$SRC_MODULES_COMPONENTS_CALENDAR_EXAMPLES_3_INDEX_TS__1;
}
else {
    I18N_0 = $localize `:␟6a61580d370f4de6560593a882e91d078a887bd0␟4859697449568186620: Chosen dates: ${"\uFFFD0\uFFFD"}:INTERPOLATION:
`;
}
function TuiCalendarExample3_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx_r0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
} }
const TWO_DOTS = ["primary" /* Primary */, "secondary" /* Secondary */];
const ONE_DOT = ["success" /* Success */];
class TuiCalendarExample3 {
    constructor() {
        this.value = null;
        this.firstMonth = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMonth"].currentLocal();
        this.middleMonth = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMonth"].currentLocal().append({ month: 1 });
        this.lastMonth = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMonth"].currentLocal().append({ month: 2 });
        this.hoveredItem = null;
        this.markerHandler = (day) => 
        // Attention: do not create new arrays in handler, use constants intead
        day.day % 2 === 0 ? TWO_DOTS : ONE_DOT;
    }
    onDayClick(day) {
        if (this.value === null || !this.value.isSingleDay) {
            this.value = new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDayRange"](day, day);
        }
        this.value = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDayRange"].sort(this.value.from, day);
    }
    onMonthChangeFirst(month) {
        this.firstMonth = month;
        this.middleMonth = month.append({ month: 1 });
        this.lastMonth = month.append({ month: 2 });
    }
    onMonthChangeMiddle(month) {
        this.firstMonth = month.append({ month: -1 });
        this.middleMonth = month;
        this.lastMonth = month.append({ month: 1 });
    }
    onMonthChangeLast(month) {
        this.firstMonth = month.append({ month: -2 });
        this.middleMonth = month.append({ month: -1 });
        this.lastMonth = month;
    }
}
TuiCalendarExample3.ɵfac = function TuiCalendarExample3_Factory(t) { return new (t || TuiCalendarExample3)(); };
TuiCalendarExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCalendarExample3, selectors: [["tui-calendar-example-3"]], decls: 5, vars: 20, consts: [[1, "wrapper"], [3, "value", "showAdjacent", "markerHandler", "maxViewedMonth", "month", "hoveredItem", "hoveredItemChange", "monthChange", "dayClick"], [3, "value", "showAdjacent", "markerHandler", "month", "minViewedMonth", "maxViewedMonth", "hoveredItem", "hoveredItemChange", "monthChange", "dayClick"], [3, "value", "showAdjacent", "markerHandler", "minViewedMonth", "month", "hoveredItem", "hoveredItemChange", "monthChange", "dayClick"], [4, "ngIf"]], template: function TuiCalendarExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-calendar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hoveredItemChange", function TuiCalendarExample3_Template_tui_calendar_hoveredItemChange_1_listener($event) { return ctx.hoveredItem = $event; })("monthChange", function TuiCalendarExample3_Template_tui_calendar_monthChange_1_listener($event) { return ctx.onMonthChangeFirst($event); })("dayClick", function TuiCalendarExample3_Template_tui_calendar_dayClick_1_listener($event) { return ctx.onDayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-calendar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hoveredItemChange", function TuiCalendarExample3_Template_tui_calendar_hoveredItemChange_2_listener($event) { return ctx.hoveredItem = $event; })("monthChange", function TuiCalendarExample3_Template_tui_calendar_monthChange_2_listener($event) { return ctx.onMonthChangeMiddle($event); })("dayClick", function TuiCalendarExample3_Template_tui_calendar_dayClick_2_listener($event) { return ctx.onDayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-calendar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hoveredItemChange", function TuiCalendarExample3_Template_tui_calendar_hoveredItemChange_3_listener($event) { return ctx.hoveredItem = $event; })("monthChange", function TuiCalendarExample3_Template_tui_calendar_monthChange_3_listener($event) { return ctx.onMonthChangeLast($event); })("dayClick", function TuiCalendarExample3_Template_tui_calendar_dayClick_3_listener($event) { return ctx.onDayClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiCalendarExample3_div_4_Template, 2, 1, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("showAdjacent", false)("markerHandler", ctx.markerHandler)("maxViewedMonth", ctx.firstMonth)("month", ctx.firstMonth)("hoveredItem", ctx.hoveredItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("showAdjacent", false)("markerHandler", ctx.markerHandler)("month", ctx.middleMonth)("minViewedMonth", ctx.middleMonth)("maxViewedMonth", ctx.middleMonth)("hoveredItem", ctx.hoveredItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("showAdjacent", false)("markerHandler", ctx.markerHandler)("minViewedMonth", ctx.lastMonth)("month", ctx.lastMonth)("hoveredItem", ctx.hoveredItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_core_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["TuiCalendarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYWxlbmRhci9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvY2FsZW5kYXIvZXhhbXBsZXMvMy9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYWxlbmRhci9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbiIsIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCalendarExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-calendar-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-calendar-calendar-module.js.map