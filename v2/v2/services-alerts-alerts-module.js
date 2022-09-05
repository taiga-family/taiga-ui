(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-alerts-alerts-module"],{

/***/ "./src/modules/services/alerts/alerts.component.ts":
/*!*********************************************************!*\
  !*** ./src/modules/services/alerts/alerts.component.ts ***!
  \*********************************************************/
/*! exports provided: ExampleTuiAlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiAlertsComponent", function() { return ExampleTuiAlertsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _examples_4_alert_example_with_data_alert_example_with_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/4/alert-example-with-data/alert-example-with-data.component */ "./src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/services/alerts/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/services/alerts/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/services/alerts/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/services/alerts/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/services/alerts/examples/5/index.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");






















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5275394011225250882$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__1 = goog.getMsg("Service to show notifications");
    I18N_0 = MSG_EXTERNAL_5275394011225250882$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟1bc7f6b64817783f73d7fa20dacc10347f5dc0a9␟5275394011225250882:Service to show notifications`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4524286694660863035$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__3 = goog.getMsg(" Do not forget to add {$startTagCode}TuiAlertModule{$closeTagCode} into your app.module to use it ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_2 = MSG_EXTERNAL_4524286694660863035$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟f9c768272ef2129e75edad899c468746678c8252␟4524286694660863035: Do not forget to add ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiAlertModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into your app.module to use it `;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4498461250311742014$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__5 = goog.getMsg("{$startTagStrong}Singleton{$closeTagStrong} you do not need to provide a service. It is just available to inject ", { "startTagStrong": "\uFFFD#7\uFFFD", "closeTagStrong": "\uFFFD/#7\uFFFD" });
    I18N_4 = MSG_EXTERNAL_4498461250311742014$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟06634cafb8d09a8709af1c3b2f329d5d2a9e62de␟4498461250311742014:${"\uFFFD#7\uFFFD"}:START_TAG_STRONG:Singleton${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_STRONG: you do not need to provide a service. It is just available to inject `;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3087369671149412391$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__7 = goog.getMsg("Component with data");
    I18N_6 = MSG_EXTERNAL_3087369671149412391$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟0daf8614496e10971564a28775e074876405031d␟3087369671149412391:Component with data`;
}
const _c8 = ["heading", I18N_6];
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1211513920026771159$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__10 = goog.getMsg("Component with custom label");
    I18N_9 = MSG_EXTERNAL_1211513920026771159$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__10;
}
else {
    I18N_9 = $localize `:␟51f3f834f095165ec2607a17213c7aa0bc5e4ba3␟1211513920026771159:Component with custom label`;
}
const _c11 = ["heading", I18N_9];
function ExampleTuiAlertsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](6, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-alerts-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-alerts-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-alerts-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](15, _c8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-alerts-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](18, _c11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "tui-alerts-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7317498188483132876$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__13 = goog.getMsg("{$startParagraph}To show notification, use method{$closeParagraph}{$startTagTuiDocCode}{$closeTagTuiDocCode} of {$startTagCode}TuiAlertService{$closeTagCode} , where {$startTagCode}O{$closeTagCode} is output data type and {$startTagCode}I{$closeTagCode} is input data type. If content does not need input data, the second argument is optional. In the sample above the both of them are {$startTagCode}number{$closeTagCode} . {$startParagraph} You can also just unsubscribe from a stream to hide a notification (this observable is returned from {$startTagCode}open{$closeTagCode} method). You can save a subscription for that or use {$startTagCode}takeUntil{$closeTagCode} like tools from {$startTagCode}RxJs{$closeTagCode}{$closeParagraph}", { "startParagraph": "[\uFFFD#4\uFFFD|\uFFFD#10\uFFFD]", "closeParagraph": "[\uFFFD/#4\uFFFD|\uFFFD/#10\uFFFD]", "startTagTuiDocCode": "\uFFFD#5\uFFFD", "closeTagTuiDocCode": "\uFFFD/#5\uFFFD", "startTagCode": "[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]", "closeTagCode": "[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]" });
    I18N_12 = MSG_EXTERNAL_7317498188483132876$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__13;
}
else {
    I18N_12 = $localize `:␟6867a837818a55e0f70764a5e68062bd01ab7163␟7317498188483132876:${"[\uFFFD#4\uFFFD|\uFFFD#10\uFFFD]"}:START_PARAGRAPH:To show notification, use method${"[\uFFFD/#4\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_PARAGRAPH:${"\uFFFD#5\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE: of ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:TuiAlertService${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: , where ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:O${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: is output data type and ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:I${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: is input data type. If content does not need input data, the second argument is optional. In the sample above the both of them are ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:number${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: . ${"[\uFFFD#4\uFFFD|\uFFFD#10\uFFFD]"}:START_PARAGRAPH: You can also just unsubscribe from a stream to hide a notification (this observable is returned from ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:open${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: method). You can save a subscription for that or use ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:takeUntil${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE: like tools from ${"[\uFFFD#6\uFFFD|\uFFFD#7\uFFFD|\uFFFD#8\uFFFD|\uFFFD#9\uFFFD|\uFFFD#11\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD]"}:START_TAG_CODE:RxJs${"[\uFFFD/#6\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#4\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_PARAGRAPH:`;
}
I18N_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_12);
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3466418148583049497$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__15 = goog.getMsg("{$startTagCode}TuiNotificationOptionsWithData{$closeTagCode} interface: ", { "startTagCode": "\uFFFD#18\uFFFD", "closeTagCode": "\uFFFD/#18\uFFFD" });
    I18N_14 = MSG_EXTERNAL_3466418148583049497$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟07844fabcae9dbc5fe46cba91e975d09f6d9ce2a␟3466418148583049497:${"\uFFFD#18\uFFFD"}:START_TAG_CODE:TuiNotificationOptionsWithData${"\uFFFD/#18\uFFFD"}:CLOSE_TAG_CODE: interface: `;
}
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_741899295101860675$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___17 = goog.getMsg(" Content ");
    I18N_16 = MSG_EXTERNAL_741899295101860675$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `;
}
function ExampleTuiAlertsComponent_ng_template_2_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_16);
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_435210747077371139$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___19 = goog.getMsg(" Status ");
    I18N_18 = MSG_EXTERNAL_435210747077371139$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟054f7afbbdc6ffea0fc80d8039aba9a2d5dba955␟435210747077371139: Status `;
}
function ExampleTuiAlertsComponent_ng_template_2_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_18);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9208464206964786295$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___21 = goog.getMsg(" Heading ");
    I18N_20 = MSG_EXTERNAL_9208464206964786295$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟5fb70b9672bd3114da4cc91ecf05bb7d571ea807␟9208464206964786295: Heading `;
}
function ExampleTuiAlertsComponent_ng_template_2_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_20);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2636705087580276181$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___23 = goog.getMsg(" Input data of notification, type <I> ");
    I18N_22 = MSG_EXTERNAL_2636705087580276181$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___23;
}
else {
    I18N_22 = $localize `:␟f271223d9bb6bb62e01b785f8a9b0fefc37ab76e␟2636705087580276181: Input data of notification, type <I> `;
}
function ExampleTuiAlertsComponent_ng_template_2_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_22);
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3778304849595610845$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___25 = goog.getMsg(" Autoclose after 3 seconds ");
    I18N_24 = MSG_EXTERNAL_3778304849595610845$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___25;
}
else {
    I18N_24 = $localize `:␟a96e2773c11aaa18bb3e8c5da1ebb43c9f750f02␟3778304849595610845: Autoclose after 3 seconds `;
}
function ExampleTuiAlertsComponent_ng_template_2_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_24);
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8491523700308437284$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___27 = goog.getMsg(" Has close button ");
    I18N_26 = MSG_EXTERNAL_8491523700308437284$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___27;
}
else {
    I18N_26 = $localize `:␟12b3111611486481901517499f89b963c39f0e24␟8491523700308437284: Has close button `;
}
function ExampleTuiAlertsComponent_ng_template_2_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_26);
} }
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_149058290855307515$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___29 = goog.getMsg(" Has icon ");
    I18N_28 = MSG_EXTERNAL_149058290855307515$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS___29;
}
else {
    I18N_28 = $localize `:␟62b895a2a597c60a6ac9e4c819904b8eac08dbd5␟149058290855307515: Has icon `;
}
function ExampleTuiAlertsComponent_ng_template_2_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_28);
} }
function ExampleTuiAlertsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleTuiAlertsComponent_ng_template_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.showNotification(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExampleTuiAlertsComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAlertsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](17, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ExampleTuiAlertsComponent_ng_template_2_ng_template_20_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAlertsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ExampleTuiAlertsComponent_ng_template_2_ng_template_21_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAlertsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.label = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ExampleTuiAlertsComponent_ng_template_2_ng_template_22_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAlertsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.data = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ExampleTuiAlertsComponent_ng_template_2_ng_template_23_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAlertsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.autoClose = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ExampleTuiAlertsComponent_ng_template_2_ng_template_24_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAlertsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.hasCloseButton = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ExampleTuiAlertsComponent_ng_template_2_ng_template_25_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAlertsComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.hasIcon = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.method);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.contentVariants)("documentationPropertyValue", ctx_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.statusVariants)("documentationPropertyValue", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.autoCloseVariants)("documentationPropertyValue", ctx_r1.autoClose);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.hasCloseButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.hasIcon);
} }
var I18N_30;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2697985294473194370$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__31 = goog.getMsg(" Add {$startTagCode}TuiAlertModule{$closeTagCode} into your app.module ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_30 = MSG_EXTERNAL_2697985294473194370$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__31;
}
else {
    I18N_30 = $localize `:␟1429eb9bd9237455d53e9b7c4cef0d095719ab81␟2697985294473194370: Add ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiAlertModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into your app.module `;
}
var I18N_32;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7179047044375359280$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__33 = goog.getMsg(" Use service {$startTagCode}show{$closeTagCode} method and subscribe to {$startTagCode}Observable{$closeTagCode}", { "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]", "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]" });
    I18N_32 = MSG_EXTERNAL_7179047044375359280$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__33;
}
else {
    I18N_32 = $localize `:␟f895bd0c51111cb2c8e68ceead5ada137ab6d5b2␟7179047044375359280: Use service ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:show${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: method and subscribe to ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:Observable${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE:`;
}
I18N_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_32);
var I18N_34;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8405226284519292539$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__35 = goog.getMsg(" To pass notification with custom content, you can use {$startLink}{$startTagCode}your template{$closeTagCode}{$closeLink} . ", { "startLink": "\uFFFD#14\uFFFD", "startTagCode": "\uFFFD#15\uFFFD", "closeTagCode": "\uFFFD/#15\uFFFD", "closeLink": "\uFFFD/#14\uFFFD" });
    I18N_34 = MSG_EXTERNAL_8405226284519292539$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__35;
}
else {
    I18N_34 = $localize `:␟6a766c93a51fcb02bf26ecacd479951c8f4b71fb␟8405226284519292539: To pass notification with custom content, you can use ${"\uFFFD#14\uFFFD"}:START_LINK:${"\uFFFD#15\uFFFD"}:START_TAG_CODE:your template${"\uFFFD/#15\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#14\uFFFD"}:CLOSE_LINK: . `;
}
var I18N_36;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5635433899377563977$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__37 = goog.getMsg(" You can also customize notification logic with a component. Use {$startTagCode}POLYMORPHEUS_CONTEXT{$closeTagCode} into the component to get context input data and to output results. It has the following interface: {$startTagCode}TuiDialog<TuiAlertOptions<I>, O>{$closeTagCode} , where {$startTagCode}O{$closeTagCode} is output data type and {$startTagCode}I{$closeTagCode} is input data type. Do not forget to add notification component into {$startTagCode}entryComponents{$closeTagCode} of your module: ", { "startTagCode": "[\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD|\uFFFD#22\uFFFD|\uFFFD#23\uFFFD]", "closeTagCode": "[\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD]" });
    I18N_36 = MSG_EXTERNAL_5635433899377563977$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__37;
}
else {
    I18N_36 = $localize `:␟b5030ce649b5c1e3eed72243728a574deb50a808␟5635433899377563977: You can also customize notification logic with a component. Use ${"[\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD|\uFFFD#22\uFFFD|\uFFFD#23\uFFFD]"}:START_TAG_CODE:POLYMORPHEUS_CONTEXT${"[\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD]"}:CLOSE_TAG_CODE: into the component to get context input data and to output results. It has the following interface: ${"[\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD|\uFFFD#22\uFFFD|\uFFFD#23\uFFFD]"}:START_TAG_CODE:TuiDialog<TuiAlertOptions<I>, O>${"[\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD]"}:CLOSE_TAG_CODE: , where ${"[\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD|\uFFFD#22\uFFFD|\uFFFD#23\uFFFD]"}:START_TAG_CODE:O${"[\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD]"}:CLOSE_TAG_CODE: is output data type and ${"[\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD|\uFFFD#22\uFFFD|\uFFFD#23\uFFFD]"}:START_TAG_CODE:I${"[\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD]"}:CLOSE_TAG_CODE: is input data type. Do not forget to add notification component into ${"[\uFFFD#19\uFFFD|\uFFFD#20\uFFFD|\uFFFD#21\uFFFD|\uFFFD#22\uFFFD|\uFFFD#23\uFFFD]"}:START_TAG_CODE:entryComponents${"[\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#23\uFFFD]"}:CLOSE_TAG_CODE: of your module: `;
}
I18N_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_36);
var I18N_38;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1436172444558827801$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__39 = goog.getMsg(" Use {$startTagCode}new PolymorpheusComponent(CustomNotificationComponent){$closeTagCode} to show notification component with a service: ", { "startTagCode": "\uFFFD#28\uFFFD", "closeTagCode": "\uFFFD/#28\uFFFD" });
    I18N_38 = MSG_EXTERNAL_1436172444558827801$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__39;
}
else {
    I18N_38 = $localize `:␟ec507827c245a3395d58e897109309b8e3a99ac7␟1436172444558827801: Use ${"\uFFFD#28\uFFFD"}:START_TAG_CODE:new PolymorpheusComponent(CustomNotificationComponent)${"\uFFFD/#28\uFFFD"}:CLOSE_TAG_CODE: to show notification component with a service: `;
}
var I18N_40;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6964531271774145282$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__41 = goog.getMsg(" Use {$startTagCode}emitHook{$closeTagCode} , {$startTagCode}closeHook{$closeTagCode} and {$startTagCode}emitAndCloseHook{$closeTagCode} methods to control notification from itself: ", { "startTagCode": "[\uFFFD#33\uFFFD|\uFFFD#34\uFFFD|\uFFFD#35\uFFFD]", "closeTagCode": "[\uFFFD/#33\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#35\uFFFD]" });
    I18N_40 = MSG_EXTERNAL_6964531271774145282$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__41;
}
else {
    I18N_40 = $localize `:␟98b6e4b10f63846e7caeea56c097f345956709c4␟6964531271774145282: Use ${"[\uFFFD#33\uFFFD|\uFFFD#34\uFFFD|\uFFFD#35\uFFFD]"}:START_TAG_CODE:emitHook${"[\uFFFD/#33\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#35\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#33\uFFFD|\uFFFD#34\uFFFD|\uFFFD#35\uFFFD]"}:START_TAG_CODE:closeHook${"[\uFFFD/#33\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#35\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#33\uFFFD|\uFFFD#34\uFFFD|\uFFFD#35\uFFFD]"}:START_TAG_CODE:emitAndCloseHook${"[\uFFFD/#33\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#35\uFFFD]"}:CLOSE_TAG_CODE: methods to control notification from itself: `;
}
I18N_40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_40);
var I18N_42;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7759900700350680332$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__43 = goog.getMsg(" If you use it from lazy loading modules, do not forget to use {$startTagCode}new TuiComponentContent Injector{$closeTagCode} of component where you call it ", { "startTagCode": "\uFFFD#40\uFFFD", "closeTagCode": "\uFFFD/#40\uFFFD" });
    I18N_42 = MSG_EXTERNAL_7759900700350680332$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__43;
}
else {
    I18N_42 = $localize `:␟72bdc03d46093beeafa58136204fab3ed68241ec␟7759900700350680332: If you use it from lazy loading modules, do not forget to use ${"\uFFFD#40\uFFFD"}:START_TAG_CODE:new TuiComponentContent Injector${"\uFFFD/#40\uFFFD"}:CLOSE_TAG_CODE: of component where you call it `;
}
var I18N_44;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8849888545184271088$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__45 = goog.getMsg(" Optionally use the {$startTagCode}TUI_NOTIFICATION_OPTIONS{$closeTagCode} injection token to override the default options (works only in app.module.ts). ", { "startTagCode": "\uFFFD#45\uFFFD", "closeTagCode": "\uFFFD/#45\uFFFD" });
    I18N_44 = MSG_EXTERNAL_8849888545184271088$$SRC_MODULES_SERVICES_ALERTS_ALERTS_COMPONENT_TS__45;
}
else {
    I18N_44 = $localize `:␟bad4e5730bd20ce05150c175f3923390d3e8bbf7␟8849888545184271088: Optionally use the ${"\uFFFD#45\uFFFD"}:START_TAG_CODE:TUI_NOTIFICATION_OPTIONS${"\uFFFD/#45\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options (works only in app.module.ts). `;
}
function ExampleTuiAlertsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](8, I18N_32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-doc-code", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](13, I18N_34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](18, I18N_36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "tui-doc-code", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](27, I18N_38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "tui-doc-code", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](32, I18N_40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "tui-doc-code", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](39, I18N_42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "tui-doc-code", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](44, I18N_44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "tui-doc-code", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleServiceUsage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleImportModuleComponent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleServiceUsageComponent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleCustomAlert);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleLazyModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleOptions);
} }
class ExampleTuiAlertsComponent {
    constructor(alertService, injector) {
        this.alertService = alertService;
        this.method = __webpack_require__.e(/*! import() | !raw-loader!-method-md */ "!!raw-loader!-method-md").then(__webpack_require__.bind(null, /*! !raw-loader!./method.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/method.md"));
        this.exampleImportModuleComponent = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-component-md */ "!!raw-loader!-examples-import-import-module-component-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module-component.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/import-module-component.md"));
        this.exampleServiceUsage = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-service-usage-md */ "!!raw-loader!-examples-import-service-usage-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/service-usage.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/service-usage.md"));
        this.exampleServiceUsageComponent = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-service-usage-component-md */ "!!raw-loader!-examples-import-service-usage-component-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/service-usage-component.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/service-usage-component.md"));
        this.exampleCustomAlert = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-custom-alert-md */ "!!raw-loader!-examples-import-custom-alert-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/custom-alert.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/custom-alert.md"));
        this.exampleLazyModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-lazy-module-md */ "!!raw-loader!-examples-import-lazy-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/lazy-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/lazy-module.md"));
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-module-md */ "!!raw-loader!-examples-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/module.md"));
        this.exampleOptions = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-define-options-md */ "!!raw-loader!-examples-import-define-options-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/define-options.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/import/define-options.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/3/index.html")),
            'alert-example/alert-example.component.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-3-alert-example-alert-example-component-ts */ "!!raw-loader!-examples-3-alert-example-alert-example-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/alert-example/alert-example.component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/3/alert-example/alert-example.component.ts")),
            'alert-example/alert-example.template.html': __webpack_require__.e(/*! import() | !raw-loader!-examples-3-alert-example-alert-example-template-html */ "!!raw-loader!-examples-3-alert-example-alert-example-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/alert-example/alert-example.template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/3/alert-example/alert-example.template.html")),
            'alert-example/alert-example.module.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-3-alert-example-alert-example-module-ts */ "!!raw-loader!-examples-3-alert-example-alert-example-module-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/alert-example/alert-example.module.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/3/alert-example/alert-example.module.ts")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/4/index.html")),
            'alert-example-with-data/alert-example-with-data.component.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-4-alert-example-with-data-alert-example-with-data-component-ts */ "!!raw-loader!-examples-4-alert-example-with-data-alert-example-with-data-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/alert-example-with-data/alert-example-with-data.component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.component.ts")),
            'alert-example-with-data/alert-example-with-data.template.html': __webpack_require__.e(/*! import() | !raw-loader!-examples-4-alert-example-with-data-alert-example-with-data-template-html */ "!!raw-loader!-examples-4-alert-example-with-data-alert-example-with-data-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/alert-example-with-data/alert-example-with-data.template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.template.html")),
            'alert-example-with-data/alert-example-with-data.style.less': __webpack_require__.e(/*! import() | !raw-loader!-examples-4-alert-example-with-data-alert-example-with-data-style-less */ "!!raw-loader!-examples-4-alert-example-with-data-alert-example-with-data-style-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/alert-example-with-data/alert-example-with-data.style.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.style.less")),
            'alert-example-with-data/alert-example-with-data.module.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-4-alert-example-with-data-alert-example-with-data-module */ "!!raw-loader!-examples-4-alert-example-with-data-alert-example-with-data-module").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/alert-example-with-data/alert-example-with-data.module */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.module.ts")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/5/index.html")),
            'custom-label/custom-label.module.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-5-custom-label-custom-label-module-ts */ "!!raw-loader!-examples-5-custom-label-custom-label-module-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/custom-label/custom-label.module.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/5/custom-label/custom-label.module.ts")),
            'custom-label/custom-label.component.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-5-custom-label-custom-label-component-ts */ "!!raw-loader!-examples-5-custom-label-custom-label-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/custom-label/custom-label.component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/5/custom-label/custom-label.component.ts")),
            'custom-label/custom-label.style.less': __webpack_require__.e(/*! import() | !raw-loader!-examples-5-custom-label-custom-label-style-less */ "!!raw-loader!-examples-5-custom-label-custom-label-style-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/custom-label/custom-label.style.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/5/custom-label/custom-label.style.less")),
            'custom-label/custom-label.template.html': __webpack_require__.e(/*! import() | !raw-loader!-examples-5-custom-label-custom-label-template-html */ "!!raw-loader!-examples-5-custom-label-custom-label-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/custom-label/custom-label.template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/5/custom-label/custom-label.template.html")),
            'alert-example-with-custom-label/alert-example-with-custom-label.module.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-5-alert-example-with-custom-label-alert-example-with-custom-label-module-ts */ "!!raw-loader!-examples-5-alert-example-with-custom-label-alert-example-with-custom-label-module-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/alert-example-with-custom-label/alert-example-with-custom-label.module.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/5/alert-example-with-custom-label/alert-example-with-custom-label.module.ts")),
            'alert-example-with-custom-label/alert-example-with-custom-label.component.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-5-alert-example-with-custom-label-alert-example-with-custom-label-component-ts */ "!!raw-loader!-examples-5-alert-example-with-custom-label-alert-example-with-custom-label-component-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component.ts")),
            'alert-example-with-custom-label/alert-example-with-custom-label.template.html': __webpack_require__.e(/*! import() | !raw-loader!-examples-5-alert-example-with-custom-label-alert-example-with-custom-label-template-html */ "!!raw-loader!-examples-5-alert-example-with-custom-label-alert-example-with-custom-label-template-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/alert-example-with-custom-label/alert-example-with-custom-label.template.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/5/alert-example-with-custom-label/alert-example-with-custom-label.template.html")),
        };
        this.data = 100;
        this.label = `Heading`;
        this.statusVariants = [
            "info" /* Info */,
            "success" /* Success */,
            "error" /* Error */,
            "warning" /* Warning */,
        ];
        this.status = this.statusVariants[0];
        this.contentVariants = [`String`, `Component`];
        this.content = this.contentVariants[0];
        this.autoCloseVariants = [true, false, 5000, 1000, 500];
        this.autoClose = this.autoCloseVariants[0];
        this.hasCloseButton = true;
        this.hasIcon = true;
        this.component = new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__["PolymorpheusComponent"](_examples_4_alert_example_with_data_alert_example_with_data_component__WEBPACK_IMPORTED_MODULE_5__["AlertExampleWithDataComponent"], injector);
    }
    get selectedContent() {
        return this.content === `String` ? this.content : this.component;
    }
    showNotification() {
        this.alertService
            .open(this.selectedContent, {
            label: this.label,
            data: this.data,
            status: this.status,
            autoClose: this.autoClose,
            hasCloseButton: this.hasCloseButton,
            hasIcon: this.hasIcon,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(response => this.alertService.open(response, {
            label: `Notification responded with:`,
        })))
            .subscribe();
    }
}
ExampleTuiAlertsComponent.ɵfac = function ExampleTuiAlertsComponent_Factory(t) { return new (t || ExampleTuiAlertsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
ExampleTuiAlertsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiAlertsComponent, selectors: [["example-tui-alerts"]], decls: 4, vars: 0, consts: [["header", "AlertService", "package", "CORE", "path", "core/components/alert/alert.service.ts"], ["pageTab", ""], ["id", "text", "heading", "Text", 3, "content"], ["id", "template", "heading", "Template", 3, "content"], ["id", "component", "heading", "Component", 3, "content"], ["id", "data", 3, "content", 6, "heading"], ["id", "label", 3, "content", 6, "heading"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"], [1, "b-full-width"], [1, "tui-space_bottom-4", 3, "code"], ["documentationPropertyName", "content", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "status", "documentationPropertyType", "TuiNotification", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "label", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "data", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "autoClose", "documentationPropertyType", "boolean | number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hasCloseButton", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hasIcon", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "app.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["routerLink", "/services/alert-service", "fragment", "example-template", "tuiLink", ""], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "customNotification.component.ts", 3, "code"]], template: function ExampleTuiAlertsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiAlertsComponent_ng_template_1_Template, 20, 5, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiAlertsComponent_ng_template_2_Template, 26, 11, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiAlertsComponent_ng_template_3_Template, 47, 7, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_9__["TuiAlertsExampleComponent1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_10__["TuiAlertsExampleComponent2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_11__["TuiAlertsExampleComponent3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_12__["TuiAlertsExampleComponent4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_13__["TuiAlertsExampleComponent5"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_14__["TuiButtonComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__["TuiDocCodeComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_16__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_17__["TuiDocDocumentationPropertyConnectorDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterLinkWithHref"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_19__["TuiLinkComponent"]], styles: [".label[_ngcontent-%COMP%] {\n  width: 6.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvc2VydmljZXMvYWxlcnRzL2FsZXJ0cy5zdHlsZS5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9zZXJ2aWNlcy9hbGVydHMvYWxlcnRzLnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9zZXJ2aWNlcy9hbGVydHMvYWxlcnRzLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwge1xuICAgIHdpZHRoOiA2LjI1cmVtO1xufVxuIiwiLmxhYmVsIHtcbiAgd2lkdGg6IDYuMjVyZW07XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiAlertsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-alerts`,
                templateUrl: `./alerts.template.html`,
                styleUrls: [`./alerts.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiAlertService"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/services/alerts/alerts.module.ts":
/*!******************************************************!*\
  !*** ./src/modules/services/alerts/alerts.module.ts ***!
  \******************************************************/
/*! exports provided: ExampleTuiAlertsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiAlertsModule", function() { return ExampleTuiAlertsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _alerts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./alerts.component */ "./src/modules/services/alerts/alerts.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/services/alerts/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/services/alerts/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/services/alerts/examples/3/index.ts");
/* harmony import */ var _examples_3_alert_example_alert_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/3/alert-example/alert-example.component */ "./src/modules/services/alerts/examples/3/alert-example/alert-example.component.ts");
/* harmony import */ var _examples_3_alert_example_alert_example_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/3/alert-example/alert-example.module */ "./src/modules/services/alerts/examples/3/alert-example/alert-example.module.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/services/alerts/examples/4/index.ts");
/* harmony import */ var _examples_4_alert_example_with_data_alert_example_with_data_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/4/alert-example-with-data/alert-example-with-data.component */ "./src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.component.ts");
/* harmony import */ var _examples_4_alert_example_with_data_alert_example_with_data_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/4/alert-example-with-data/alert-example-with-data.module */ "./src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.module.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/services/alerts/examples/5/index.ts");
/* harmony import */ var _examples_5_alert_example_with_custom_label_alert_example_with_custom_label_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component */ "./src/modules/services/alerts/examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component.ts");
/* harmony import */ var _examples_5_alert_example_with_custom_label_alert_example_with_custom_label_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./examples/5/alert-example-with-custom-label/alert-example-with-custom-label.module */ "./src/modules/services/alerts/examples/5/alert-example-with-custom-label/alert-example-with-custom-label.module.ts");
/* harmony import */ var _examples_5_custom_label_custom_label_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./examples/5/custom-label/custom-label.component */ "./src/modules/services/alerts/examples/5/custom-label/custom-label.component.ts");
/* harmony import */ var _examples_5_custom_label_custom_label_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./examples/5/custom-label/custom-label.module */ "./src/modules/services/alerts/examples/5/custom-label/custom-label.module.ts");

























class ExampleTuiAlertsModule {
}
ExampleTuiAlertsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiAlertsModule });
ExampleTuiAlertsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiAlertsModule_Factory(t) { return new (t || ExampleTuiAlertsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__["PolymorpheusModule"],
            _examples_5_alert_example_with_custom_label_alert_example_with_custom_label_module__WEBPACK_IMPORTED_MODULE_20__["AlertExampleWithCustomLabelModule"],
            _examples_4_alert_example_with_data_alert_example_with_data_module__WEBPACK_IMPORTED_MODULE_17__["AlertExampleWithDataModule"],
            _examples_3_alert_example_alert_example_module__WEBPACK_IMPORTED_MODULE_14__["AlertExampleModule"],
            _examples_5_custom_label_custom_label_module__WEBPACK_IMPORTED_MODULE_22__["CustomLabelModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_alerts_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiAlertsComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiAlertsModule, { declarations: [_alerts_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiAlertsComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_10__["TuiAlertsExampleComponent1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_11__["TuiAlertsExampleComponent2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_12__["TuiAlertsExampleComponent3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_15__["TuiAlertsExampleComponent4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_18__["TuiAlertsExampleComponent5"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__["PolymorpheusModule"],
        _examples_5_alert_example_with_custom_label_alert_example_with_custom_label_module__WEBPACK_IMPORTED_MODULE_20__["AlertExampleWithCustomLabelModule"],
        _examples_4_alert_example_with_data_alert_example_with_data_module__WEBPACK_IMPORTED_MODULE_17__["AlertExampleWithDataModule"],
        _examples_3_alert_example_alert_example_module__WEBPACK_IMPORTED_MODULE_14__["AlertExampleModule"],
        _examples_5_custom_label_custom_label_module__WEBPACK_IMPORTED_MODULE_22__["CustomLabelModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_alerts_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiAlertsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiAlertsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__["PolymorpheusModule"],
                    _examples_5_alert_example_with_custom_label_alert_example_with_custom_label_module__WEBPACK_IMPORTED_MODULE_20__["AlertExampleWithCustomLabelModule"],
                    _examples_4_alert_example_with_data_alert_example_with_data_module__WEBPACK_IMPORTED_MODULE_17__["AlertExampleWithDataModule"],
                    _examples_3_alert_example_alert_example_module__WEBPACK_IMPORTED_MODULE_14__["AlertExampleModule"],
                    _examples_5_custom_label_custom_label_module__WEBPACK_IMPORTED_MODULE_22__["CustomLabelModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_alerts_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiAlertsComponent"])),
                ],
                declarations: [
                    _alerts_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiAlertsComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_10__["TuiAlertsExampleComponent1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_11__["TuiAlertsExampleComponent2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_12__["TuiAlertsExampleComponent3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_15__["TuiAlertsExampleComponent4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_18__["TuiAlertsExampleComponent5"],
                ],
                entryComponents: [
                    _examples_3_alert_example_alert_example_component__WEBPACK_IMPORTED_MODULE_13__["AlertExampleComponent"],
                    _examples_4_alert_example_with_data_alert_example_with_data_component__WEBPACK_IMPORTED_MODULE_16__["AlertExampleWithDataComponent"],
                    _examples_5_alert_example_with_custom_label_alert_example_with_custom_label_component__WEBPACK_IMPORTED_MODULE_19__["AlertExampleWithCustomLabelComponent"],
                    _examples_5_custom_label_custom_label_component__WEBPACK_IMPORTED_MODULE_21__["CustomLabelComponent"],
                ],
                exports: [_alerts_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiAlertsComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/services/alerts/examples/1/index.ts":
/*!*********************************************************!*\
  !*** ./src/modules/services/alerts/examples/1/index.ts ***!
  \*********************************************************/
/*! exports provided: TuiAlertsExampleComponent1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiAlertsExampleComponent1", function() { return TuiAlertsExampleComponent1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");







class TuiAlertsExampleComponent1 {
    constructor(alertService) {
        this.alertService = alertService;
    }
    showNotification() {
        this.alertService.open(`A simple option`, { label: `With a heading!` }).subscribe();
    }
}
TuiAlertsExampleComponent1.ɵfac = function TuiAlertsExampleComponent1_Factory(t) { return new (t || TuiAlertsExampleComponent1)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"])); };
TuiAlertsExampleComponent1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiAlertsExampleComponent1, selectors: [["tui-alerts-example-1"]], decls: 2, vars: 0, consts: [["tuiButton", "", "type", "button", "size", "m", 3, "click"]], template: function TuiAlertsExampleComponent1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiAlertsExampleComponent1_Template_button_click_0_listener() { return ctx.showNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiAlertsExampleComponent1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-alerts-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/services/alerts/examples/2/index.ts":
/*!*********************************************************!*\
  !*** ./src/modules/services/alerts/examples/2/index.ts ***!
  \*********************************************************/
/*! exports provided: TuiAlertsExampleComponent2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiAlertsExampleComponent2", function() { return TuiAlertsExampleComponent2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/money/money.component */ "../addon-commerce/components/money/money.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/directives/mode/mode.directive */ "../core/directives/mode/mode.directive.ts");









const _c0 = ["withdrawTemplate"];
const _c1 = ["depositTemplate"];
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1511830455526270445$$SRC_MODULES_SERVICES_ALERTS_EXAMPLES_2_INDEX_TS__3 = goog.getMsg("Notifications can be shown with template");
    I18N_2 = MSG_EXTERNAL_1511830455526270445$$SRC_MODULES_SERVICES_ALERTS_EXAMPLES_2_INDEX_TS__3;
}
else {
    I18N_2 = $localize `:␟8d3c5771978973f774594800055ea9d9f9187731␟1511830455526270445:Notifications can be shown with template`;
}
function TuiAlertsExampleComponent2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Your balance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-money", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiAlertsExampleComponent2_ng_template_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.withdraw(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Withdraw\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-money", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.money);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100);
} }
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7003116325745007663$$SRC_MODULES_SERVICES_ALERTS_EXAMPLES_2_INDEX_TS__5 = goog.getMsg(" If there are many templates, you can use {$startTagCode}ViewChildren{$closeTagCode} instead of {$startTagCode}ViewChild{$closeTagCode} or set them IDs with \"#\" (see code of this sample) ", { "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]", "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]" });
    I18N_4 = MSG_EXTERNAL_7003116325745007663$$SRC_MODULES_SERVICES_ALERTS_EXAMPLES_2_INDEX_TS__5;
}
else {
    I18N_4 = $localize `:␟89d0371fa85a88f37afe5840ebc452e9ff9bdc34␟7003116325745007663: If there are many templates, you can use ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:ViewChildren${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: instead of ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:ViewChild${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: or set them IDs with "#" (see code of this sample) `;
}
I18N_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_4);
function TuiAlertsExampleComponent2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Your balance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-money", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiAlertsExampleComponent2_ng_template_12_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.deposit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-money", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.money);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100);
} }
class TuiAlertsExampleComponent2 {
    constructor(alertService) {
        this.alertService = alertService;
        this.money = 1000;
    }
    showWithdrawAlert() {
        this.alertService
            .open(this.withdrawTemplate || ``, {
            label: `A template sample`,
            status: "warning" /* Warning */,
            autoClose: false,
        })
            .subscribe();
    }
    showDepositAlert() {
        this.alertService
            .open(this.depositTemplate || ``, {
            label: `A template sample`,
            status: "success" /* Success */,
            autoClose: false,
        })
            .subscribe();
    }
    withdraw() {
        this.money -= 100;
    }
    deposit() {
        this.money += 100;
    }
}
TuiAlertsExampleComponent2.ɵfac = function TuiAlertsExampleComponent2_Factory(t) { return new (t || TuiAlertsExampleComponent2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"])); };
TuiAlertsExampleComponent2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiAlertsExampleComponent2, selectors: [["tui-alerts-example-2"]], viewQuery: function TuiAlertsExampleComponent2_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.withdrawTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.depositTemplate = _t.first);
    } }, decls: 14, vars: 2, consts: [[3, "value"], ["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_right-3", 3, "click"], ["withdrawTemplate", ""], ["depositTemplate", ""], ["tuiButton", "", "type", "button", "tuiMode", "onLight", "appearance", "outline", "size", "m", 3, "click"]], template: function TuiAlertsExampleComponent2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Your balance: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-money", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiAlertsExampleComponent2_Template_button_click_3_listener() { return ctx.showWithdrawAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Withdraw\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiAlertsExampleComponent2_Template_button_click_5_listener() { return ctx.showDepositAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiAlertsExampleComponent2_Template_button_click_7_listener() { return ctx.withdraw(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Withdraw\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-money", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TuiAlertsExampleComponent2_ng_template_10_Template, 8, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TuiAlertsExampleComponent2_ng_template_12_Template, 10, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.money);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100);
    } }, directives: [_addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["TuiButtonComponent"], _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_6__["TuiModeDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiAlertsExampleComponent2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-alerts-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiAlertService"]]
            }] }]; }, { withdrawTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [`withdrawTemplate`]
        }], depositTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [`depositTemplate`]
        }] }); })();


/***/ }),

/***/ "./src/modules/services/alerts/examples/3/alert-example/alert-example.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/modules/services/alerts/examples/3/alert-example/alert-example.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AlertExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertExampleComponent", function() { return AlertExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../core/directives/mode/mode.directive */ "../core/directives/mode/mode.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");






class AlertExampleComponent {
    constructor(context) {
        this.context = context;
    }
    ok() {
        this.context.emitAndCloseHook(true);
    }
    cancel() {
        this.context.emitAndCloseHook(false);
    }
}
AlertExampleComponent.ɵfac = function AlertExampleComponent_Factory(t) { return new (t || AlertExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_2__["POLYMORPHEUS_CONTEXT"])); };
AlertExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertExampleComponent, selectors: [["tui-notifications-service-example"]], decls: 7, vars: 0, consts: [["tuiMode", "onLight"], ["tuiButton", "", "type", "button", "appearance", "outline", "size", "s", 3, "click"], ["tuiButton", "", "type", "button", "appearance", "outline", "size", "s", 1, "tui-space_left-1", 3, "click"]], template: function AlertExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Yes?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertExampleComponent_Template_button_click_3_listener() { return ctx.ok(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertExampleComponent_Template_button_click_5_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_3__["TuiModeDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-notifications-service-example`,
                templateUrl: `./alert-example.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_2__["POLYMORPHEUS_CONTEXT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/services/alerts/examples/3/alert-example/alert-example.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/modules/services/alerts/examples/3/alert-example/alert-example.module.ts ***!
  \**************************************************************************************/
/*! exports provided: AlertExampleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertExampleModule", function() { return AlertExampleModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _alert_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-example.component */ "./src/modules/services/alerts/examples/3/alert-example/alert-example.component.ts");








class AlertExampleModule {
}
AlertExampleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AlertExampleModule });
AlertExampleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AlertExampleModule_Factory(t) { return new (t || AlertExampleModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiModeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiSelectModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AlertExampleModule, { declarations: [_alert_example_component__WEBPACK_IMPORTED_MODULE_6__["AlertExampleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiModeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiSelectModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"]], exports: [_alert_example_component__WEBPACK_IMPORTED_MODULE_6__["AlertExampleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertExampleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiModeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiSelectModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"],
                ],
                declarations: [_alert_example_component__WEBPACK_IMPORTED_MODULE_6__["AlertExampleComponent"]],
                exports: [_alert_example_component__WEBPACK_IMPORTED_MODULE_6__["AlertExampleComponent"]],
                entryComponents: [_alert_example_component__WEBPACK_IMPORTED_MODULE_6__["AlertExampleComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/services/alerts/examples/3/index.ts":
/*!*********************************************************!*\
  !*** ./src/modules/services/alerts/examples/3/index.ts ***!
  \*********************************************************/
/*! exports provided: TuiAlertsExampleComponent3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiAlertsExampleComponent3", function() { return TuiAlertsExampleComponent3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _alert_example_alert_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alert-example/alert-example.component */ "./src/modules/services/alerts/examples/3/alert-example/alert-example.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");












var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8127611195136646297$$SRC_MODULES_SERVICES_ALERTS_EXAMPLES_3_INDEX_TS_1 = goog.getMsg("This notification will be removed after router change (see component sample)");
    I18N_0 = MSG_EXTERNAL_8127611195136646297$$SRC_MODULES_SERVICES_ALERTS_EXAMPLES_3_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟8263fd5f4e59612e4fde19ba3a13cba5e6b5af73␟8127611195136646297:This notification will be removed after router change (see component sample)`;
}
class TuiAlertsExampleComponent3 {
    constructor(alertService, router, injector) {
        this.injector = injector;
        this.notification = alertService
            .open(new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusComponent"](_alert_example_alert_example_component__WEBPACK_IMPORTED_MODULE_7__["AlertExampleComponent"], this.injector), {
            label: `Question`,
            status: "error" /* Error */,
            autoClose: false,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(response => alertService.open(`Got a value — ${response}`, {
            label: `Information`,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(router.events));
    }
    showNotification() {
        this.notification.subscribe();
    }
}
TuiAlertsExampleComponent3.ɵfac = function TuiAlertsExampleComponent3_Factory(t) { return new (t || TuiAlertsExampleComponent3)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TuiAlertsExampleComponent3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiAlertsExampleComponent3, selectors: [["tui-alerts-example-3"]], decls: 4, vars: 0, consts: [["tuiButton", "", "type", "button", "size", "m", 3, "click"]], template: function TuiAlertsExampleComponent3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiAlertsExampleComponent3_Template_button_click_2_listener() { return ctx.showNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Show\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiAlertsExampleComponent3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-alerts-example-3`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AlertExampleWithDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertExampleWithDataComponent", function() { return AlertExampleWithDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../addon-commerce/components/money/money.component */ "../addon-commerce/components/money/money.component.ts");
/* harmony import */ var _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../core/directives/mode/mode.directive */ "../core/directives/mode/mode.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");








class AlertExampleWithDataComponent {
    constructor(context) {
        this.context = context;
        this.value = this.context.data;
    }
    increaseBalance() {
        this.value += 10;
    }
    submit() {
        this.context.emitAndCloseHook(this.value);
    }
}
AlertExampleWithDataComponent.ɵfac = function AlertExampleWithDataComponent_Factory(t) { return new (t || AlertExampleWithDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_2__["POLYMORPHEUS_CONTEXT"])); };
AlertExampleWithDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertExampleWithDataComponent, selectors: [["tui-notifications-service-example-with-data"]], decls: 9, vars: 2, consts: [[1, "text"], [3, "value"], ["tuiMode", "onLight", 1, "controls", "tui-space_top-3"], ["tuiButton", "", "type", "button", "appearance", "outline", "size", "m", 1, "tui-space_right-3", 3, "click"], ["tuiLink", "", "type", "button", 3, "pseudo", "click"]], template: function AlertExampleWithDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your balance:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n\u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-money", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertExampleWithDataComponent_Template_button_click_5_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertExampleWithDataComponent_Template_button_click_7_listener() { return ctx.increaseBalance(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Increase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pseudo", true);
    } }, directives: [_addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyComponent"], _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_4__["TuiModeDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_5__["TuiButtonComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_6__["TuiLinkComponent"]], styles: [".text[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvc2VydmljZXMvYWxlcnRzL2V4YW1wbGVzLzQvYWxlcnQtZXhhbXBsZS13aXRoLWRhdGEvYWxlcnQtZXhhbXBsZS13aXRoLWRhdGEuc3R5bGUubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvc2VydmljZXMvYWxlcnRzL2V4YW1wbGVzLzQvYWxlcnQtZXhhbXBsZS13aXRoLWRhdGEvYWxlcnQtZXhhbXBsZS13aXRoLWRhdGEuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0FKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvc2VydmljZXMvYWxlcnRzL2V4YW1wbGVzLzQvYWxlcnQtZXhhbXBsZS13aXRoLWRhdGEvYWxlcnQtZXhhbXBsZS13aXRoLWRhdGEuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0IHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5jb250cm9scyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiLnRleHQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertExampleWithDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-notifications-service-example-with-data`,
                templateUrl: `./alert-example-with-data.template.html`,
                styleUrls: [`./alert-example-with-data.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_2__["POLYMORPHEUS_CONTEXT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AlertExampleWithDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertExampleWithDataModule", function() { return AlertExampleWithDataModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _alert_example_with_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert-example-with-data.component */ "./src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.component.ts");







class AlertExampleWithDataModule {
}
AlertExampleWithDataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AlertExampleWithDataModule });
AlertExampleWithDataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AlertExampleWithDataModule_Factory(t) { return new (t || AlertExampleWithDataModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiModeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AlertExampleWithDataModule, { declarations: [_alert_example_with_data_component__WEBPACK_IMPORTED_MODULE_5__["AlertExampleWithDataComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiModeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"]], exports: [_alert_example_with_data_component__WEBPACK_IMPORTED_MODULE_5__["AlertExampleWithDataComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertExampleWithDataModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiModeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiMoneyModule"],
                ],
                declarations: [_alert_example_with_data_component__WEBPACK_IMPORTED_MODULE_5__["AlertExampleWithDataComponent"]],
                exports: [_alert_example_with_data_component__WEBPACK_IMPORTED_MODULE_5__["AlertExampleWithDataComponent"]],
                entryComponents: [_alert_example_with_data_component__WEBPACK_IMPORTED_MODULE_5__["AlertExampleWithDataComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/services/alerts/examples/4/index.ts":
/*!*********************************************************!*\
  !*** ./src/modules/services/alerts/examples/4/index.ts ***!
  \*********************************************************/
/*! exports provided: TuiAlertsExampleComponent4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiAlertsExampleComponent4", function() { return TuiAlertsExampleComponent4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _alert_example_with_data_alert_example_with_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alert-example-with-data/alert-example-with-data.component */ "./src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");












class TuiAlertsExampleComponent4 {
    constructor(alertService, router, injector) {
        this.injector = injector;
        this.notification = alertService
            .open(new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusComponent"](_alert_example_with_data_alert_example_with_data_component__WEBPACK_IMPORTED_MODULE_7__["AlertExampleWithDataComponent"], this.injector), {
            label: `Heading is so long that it should be shown in two lines of text`,
            data: 237,
            status: "warning" /* Warning */,
            autoClose: false,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(response => alertService.open(`Got a value — ${response}`, {
            label: `Information`,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(router.events));
    }
    showNotification() {
        this.notification.subscribe();
    }
}
TuiAlertsExampleComponent4.ɵfac = function TuiAlertsExampleComponent4_Factory(t) { return new (t || TuiAlertsExampleComponent4)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TuiAlertsExampleComponent4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiAlertsExampleComponent4, selectors: [["tui-alerts-example-4"]], decls: 2, vars: 0, consts: [["tuiButton", "", "type", "button", "size", "m", 3, "click"]], template: function TuiAlertsExampleComponent4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiAlertsExampleComponent4_Template_button_click_0_listener() { return ctx.showNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiAlertsExampleComponent4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-alerts-example-4`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/services/alerts/examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/modules/services/alerts/examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: AlertExampleWithCustomLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertExampleWithCustomLabelComponent", function() { return AlertExampleWithCustomLabelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");







const _c0 = function (a0) { return { $implicit: a0 }; };
class AlertExampleWithCustomLabelComponent {
    constructor(context) {
        this.context = context;
    }
    get label() {
        return this.context.label;
    }
    get status() {
        return this.context.$implicit;
    }
}
AlertExampleWithCustomLabelComponent.ɵfac = function AlertExampleWithCustomLabelComponent_Factory(t) { return new (t || AlertExampleWithCustomLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__["POLYMORPHEUS_CONTEXT"])); };
AlertExampleWithCustomLabelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertExampleWithCustomLabelComponent, selectors: [["tui-notifications-service-example-with-custom-label"]], decls: 5, vars: 4, consts: [["polymorpheus-outlet", "", 3, "content", "context"]], template: function AlertExampleWithCustomLabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Start content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "End content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx.label)("context", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.status));
    } }, directives: [_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__["PolymorpheusOutletComponent"]], encapsulation: 2, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiPure"]
], AlertExampleWithCustomLabelComponent.prototype, "label", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiPure"]
], AlertExampleWithCustomLabelComponent.prototype, "status", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertExampleWithCustomLabelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-notifications-service-example-with-custom-label`,
                templateUrl: `./alert-example-with-custom-label.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__["POLYMORPHEUS_CONTEXT"]]
            }] }]; }, { label: [], status: [] }); })();


/***/ }),

/***/ "./src/modules/services/alerts/examples/5/alert-example-with-custom-label/alert-example-with-custom-label.module.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/modules/services/alerts/examples/5/alert-example-with-custom-label/alert-example-with-custom-label.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: AlertExampleWithCustomLabelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertExampleWithCustomLabelModule", function() { return AlertExampleWithCustomLabelModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _alert_example_with_custom_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-example-with-custom-label.component */ "./src/modules/services/alerts/examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component.ts");





class AlertExampleWithCustomLabelModule {
}
AlertExampleWithCustomLabelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AlertExampleWithCustomLabelModule });
AlertExampleWithCustomLabelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AlertExampleWithCustomLabelModule_Factory(t) { return new (t || AlertExampleWithCustomLabelModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_2__["PolymorpheusModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AlertExampleWithCustomLabelModule, { declarations: [_alert_example_with_custom_label_component__WEBPACK_IMPORTED_MODULE_3__["AlertExampleWithCustomLabelComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_2__["PolymorpheusModule"]], exports: [_alert_example_with_custom_label_component__WEBPACK_IMPORTED_MODULE_3__["AlertExampleWithCustomLabelComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertExampleWithCustomLabelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_2__["PolymorpheusModule"]],
                declarations: [_alert_example_with_custom_label_component__WEBPACK_IMPORTED_MODULE_3__["AlertExampleWithCustomLabelComponent"]],
                exports: [_alert_example_with_custom_label_component__WEBPACK_IMPORTED_MODULE_3__["AlertExampleWithCustomLabelComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/services/alerts/examples/5/custom-label/custom-label.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/modules/services/alerts/examples/5/custom-label/custom-label.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CustomLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomLabelComponent", function() { return CustomLabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");




class CustomLabelComponent {
}
CustomLabelComponent.ɵfac = function CustomLabelComponent_Factory(t) { return new (t || CustomLabelComponent)(); };
CustomLabelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomLabelComponent, selectors: [["tui-notifications-service-example-custom-label"]], decls: 4, vars: 0, consts: [[1, "label"], [1, "text"], ["src", "tuiIconHeart"]], template: function CustomLabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "From custom label component with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_2__["TuiSvgComponent"]], styles: [".label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.text[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvc2VydmljZXMvYWxlcnRzL2V4YW1wbGVzLzUvY3VzdG9tLWxhYmVsL2N1c3RvbS1sYWJlbC5zdHlsZS5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9zZXJ2aWNlcy9hbGVydHMvZXhhbXBsZXMvNS9jdXN0b20tbGFiZWwvY3VzdG9tLWxhYmVsLnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0FKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvc2VydmljZXMvYWxlcnRzL2V4YW1wbGVzLzUvY3VzdG9tLWxhYmVsL2N1c3RvbS1sYWJlbC5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50ZXh0IHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbiIsIi5sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomLabelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-notifications-service-example-custom-label`,
                templateUrl: `./custom-label.template.html`,
                styleUrls: [`./custom-label.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/services/alerts/examples/5/custom-label/custom-label.module.ts":
/*!************************************************************************************!*\
  !*** ./src/modules/services/alerts/examples/5/custom-label/custom-label.module.ts ***!
  \************************************************************************************/
/*! exports provided: CustomLabelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomLabelModule", function() { return CustomLabelModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _custom_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-label.component */ "./src/modules/services/alerts/examples/5/custom-label/custom-label.component.ts");





class CustomLabelModule {
}
CustomLabelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CustomLabelModule });
CustomLabelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CustomLabelModule_Factory(t) { return new (t || CustomLabelModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiSvgModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CustomLabelModule, { declarations: [_custom_label_component__WEBPACK_IMPORTED_MODULE_3__["CustomLabelComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiSvgModule"]], exports: [_custom_label_component__WEBPACK_IMPORTED_MODULE_3__["CustomLabelComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomLabelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiSvgModule"]],
                declarations: [_custom_label_component__WEBPACK_IMPORTED_MODULE_3__["CustomLabelComponent"]],
                exports: [_custom_label_component__WEBPACK_IMPORTED_MODULE_3__["CustomLabelComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/services/alerts/examples/5/index.ts":
/*!*********************************************************!*\
  !*** ./src/modules/services/alerts/examples/5/index.ts ***!
  \*********************************************************/
/*! exports provided: TuiAlertsExampleComponent5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiAlertsExampleComponent5", function() { return TuiAlertsExampleComponent5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _alert_example_with_custom_label_alert_example_with_custom_label_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alert-example-with-custom-label/alert-example-with-custom-label.component */ "./src/modules/services/alerts/examples/5/alert-example-with-custom-label/alert-example-with-custom-label.component.ts");
/* harmony import */ var _custom_label_custom_label_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-label/custom-label.component */ "./src/modules/services/alerts/examples/5/custom-label/custom-label.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");













class TuiAlertsExampleComponent5 {
    constructor(alertService, router, injector) {
        this.injector = injector;
        this.notification = alertService
            .open(new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusComponent"](_alert_example_with_custom_label_alert_example_with_custom_label_component__WEBPACK_IMPORTED_MODULE_7__["AlertExampleWithCustomLabelComponent"], this.injector), {
            label: ({ $implicit }) => $implicit === "error" /* Error */
                ? `Error label from function`
                : `Info label from function`,
            status: "info" /* Info */,
            autoClose: false,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(router.events));
        this.notificationWithCustomLabel = alertService
            .open(new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusComponent"](_alert_example_with_custom_label_alert_example_with_custom_label_component__WEBPACK_IMPORTED_MODULE_7__["AlertExampleWithCustomLabelComponent"], this.injector), {
            label: new _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusComponent"](_custom_label_custom_label_component__WEBPACK_IMPORTED_MODULE_8__["CustomLabelComponent"], this.injector),
            status: "warning" /* Warning */,
            autoClose: false,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(router.events));
    }
    showNotification() {
        this.notification.subscribe();
    }
    showNotificationWithCustomLabel() {
        this.notificationWithCustomLabel.subscribe();
    }
}
TuiAlertsExampleComponent5.ɵfac = function TuiAlertsExampleComponent5_Factory(t) { return new (t || TuiAlertsExampleComponent5)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
TuiAlertsExampleComponent5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiAlertsExampleComponent5, selectors: [["tui-alerts-example-5"]], decls: 4, vars: 0, consts: [["tuiButton", "", "type", "button", "size", "m", 3, "click"], ["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_left-3", 3, "click"]], template: function TuiAlertsExampleComponent5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiAlertsExampleComponent5_Template_button_click_0_listener() { return ctx.showNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " With custom label function\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiAlertsExampleComponent5_Template_button_click_2_listener() { return ctx.showNotificationWithCustomLabel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " With custom label component\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_9__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiAlertsExampleComponent5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-alerts-example-5`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiAlertService"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]
            }] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=services-alerts-alerts-module.js.map