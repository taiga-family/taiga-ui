(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-button-button-module"],{

/***/ "./src/modules/components/button/button.component.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/button/button.component.ts ***!
  \***********************************************************/
/*! exports provided: ExampleTuiButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiButtonComponent", function() { return ExampleTuiButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _abstract_interactive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract/interactive */ "./src/modules/components/abstract/interactive.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/button/examples/1/index.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/button/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/button/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/button/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/components/button/examples/5/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../kit/components/toggle/toggle.component */ "../kit/components/toggle/toggle.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_commerce_components_card_card_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../addon-commerce/components/card/card.component */ "../addon-commerce/components/card/card.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");


























var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7531330618895929781$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}TuiButtonModule{$closeTagCode} is a module with components {$startTagCode}tuiButton{$closeTagCode} , {$startTagCode}tuiIconButton{$closeTagCode} are components to use them with native {$startTagCode}button{$closeTagCode} and {$startTagCode}a{$closeTagCode} elements. ", { "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]", "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]" });
    I18N_0 = MSG_EXTERNAL_7531330618895929781$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟e6a149d61f900eaf8225bc53f4e5f70a2af483d6␟7531330618895929781:${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:TuiButtonModule${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: is a module with components ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:tuiButton${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:tuiIconButton${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: are components to use them with native ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:button${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:a${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: elements. `;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nPostprocess"](I18N_0);
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_142654590491855672$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__3 = goog.getMsg("Usage");
    I18N_2 = MSG_EXTERNAL_142654590491855672$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3343159686784376531$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__6 = goog.getMsg(" Link cannot be {$startTagCode}disabled{$closeTagCode} . If you want to make an unactive link, remove {$startTagCode}href{$closeTagCode} attribute or send an empty string into {$startTagCode}routerLink{$closeTagCode} . To prevent keyboard focus when {$startTagCode}routerLink{$closeTagCode} , use {$startTagCode}[tuiFocusable]=\"false\"{$closeTagCode} directive ", { "startTagCode": "[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]", "closeTagCode": "[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]" });
    I18N_5 = MSG_EXTERNAL_3343159686784376531$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟81bbfd52914c382590b0f0d18c1123591ffb15ef␟3343159686784376531: Link cannot be ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:disabled${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: . If you want to make an unactive link, remove ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:href${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: attribute or send an empty string into ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:routerLink${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: . To prevent keyboard focus when ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:routerLink${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: , use ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:[tuiFocusable]="false"${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: directive `;
}
I18N_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nPostprocess"](I18N_5);
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1387438809102966566$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__8 = goog.getMsg("Modes");
    I18N_7 = MSG_EXTERNAL_1387438809102966566$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟84179be0a765ac2da1a2bcf6b5b476a4e9253aab␟1387438809102966566:Modes`;
}
const _c9 = ["heading", I18N_7];
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6967331457159620885$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__11 = goog.getMsg("Rotating");
    I18N_10 = MSG_EXTERNAL_6967331457159620885$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟5a9a9bb37e323fa72f117be7f850c7f754de37a3␟6967331457159620885:Rotating`;
}
const _c12 = ["heading", I18N_10];
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5093220205467023095$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__14 = goog.getMsg("Custom theme");
    I18N_13 = MSG_EXTERNAL_5093220205467023095$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟c879182022ac787b589d1a85f9616d778e6efc25␟5093220205467023095:Custom theme`;
}
const _c15 = ["heading", I18N_13];
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8432562579042371182$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__17 = goog.getMsg("Options");
    I18N_16 = MSG_EXTERNAL_8432562579042371182$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__17;
}
else {
    I18N_16 = $localize `:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`;
}
const _c18 = ["heading", I18N_16];
function ExampleTuiButtonComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](8, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "tui-button-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tui-notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](11, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](18, _c9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "tui-button-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](21, _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "tui-button-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](24, _c15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "tui-button-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](27, _c18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "tui-button-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.example5);
} }
function ExampleTuiButtonComponent_ng_template_2_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "button", 18);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appearance", ctx_r3.appearance)("disabled", ctx_r3.disabled)("icon", ctx_r3.icon)("shape", ctx_r3.shape)("showLoader", ctx_r3.showLoader)("size", ctx_r3.size)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed);
} }
function ExampleTuiButtonComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appearance", ctx_r5.appearance)("disabled", ctx_r5.disabled)("icon", ctx_r5.icon)("iconRight", ctx_r5.iconRight)("shape", ctx_r5.shape)("showLoader", ctx_r5.showLoader)("size", ctx_r5.size)("pseudoFocused", ctx_r5.pseudoFocused)("pseudoHovered", ctx_r5.pseudoHovered)("pseudoPressed", ctx_r5.pseudoPressed);
} }
function ExampleTuiButtonComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tui-card", 20);
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8748187544722377841$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___20 = goog.getMsg(" Appearance mode ");
    I18N_19 = MSG_EXTERNAL_8748187544722377841$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___20;
}
else {
    I18N_19 = $localize `:␟026823b82319471807106b10d1921bca4c3cf14c␟8748187544722377841: Appearance mode `;
}
function ExampleTuiButtonComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_19);
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_101820728901530778$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___22 = goog.getMsg(" disabled state ");
    I18N_21 = MSG_EXTERNAL_101820728901530778$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___22;
}
else {
    I18N_21 = $localize `:␟9a6e6506042b6d5e27477399cbbdd3e41bf7d0d8␟101820728901530778: disabled state `;
}
function ExampleTuiButtonComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_21);
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8480623023289998989$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___24 = goog.getMsg(" Left content ");
    I18N_23 = MSG_EXTERNAL_8480623023289998989$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___24;
}
else {
    I18N_23 = $localize `:␟6ff16f7de04cc77f36d08d43c24646fe920d64a2␟8480623023289998989: Left content `;
}
function ExampleTuiButtonComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_23);
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4251750074972270406$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___26 = goog.getMsg(" Right content ");
    I18N_25 = MSG_EXTERNAL_4251750074972270406$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___26;
}
else {
    I18N_25 = $localize `:␟0c1241fe77e2124b62d9c45b4cd0446074885eee␟4251750074972270406: Right content `;
}
function ExampleTuiButtonComponent_ng_template_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_25);
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2417708497028424124$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___28 = goog.getMsg(" Button shape ");
    I18N_27 = MSG_EXTERNAL_2417708497028424124$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___28;
}
else {
    I18N_27 = $localize `:␟5922385f779b17480e5350ed5bf386e7c970c0fe␟2417708497028424124: Button shape `;
}
function ExampleTuiButtonComponent_ng_template_2_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_27);
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5202720144004890121$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___30 = goog.getMsg(" Adds loader inside ");
    I18N_29 = MSG_EXTERNAL_5202720144004890121$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___30;
}
else {
    I18N_29 = $localize `:␟2d1ee6bbe7aa8b363a54c1d7e446b25c0ba4cd5f␟5202720144004890121: Adds loader inside `;
}
function ExampleTuiButtonComponent_ng_template_2_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_29);
} }
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___32 = goog.getMsg(" Size ");
    I18N_31 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS___32;
}
else {
    I18N_31 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiButtonComponent_ng_template_2_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_31);
} }
function ExampleTuiButtonComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExampleTuiButtonComponent_ng_template_2_button_2_Template, 1, 9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExampleTuiButtonComponent_ng_template_2_ng_template_3_Template, 2, 10, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " tuiButton ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tui-toggle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ExampleTuiButtonComponent_ng_template_2_Template_tui_toggle_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.iconButton = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " tuiIconButton ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ExampleTuiButtonComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ExampleTuiButtonComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiButtonComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.appearance = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ExampleTuiButtonComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiButtonComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ExampleTuiButtonComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiButtonComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.icon = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ExampleTuiButtonComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiButtonComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.iconRight = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ExampleTuiButtonComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiButtonComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.shape = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ExampleTuiButtonComponent_ng_template_2_ng_template_16_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiButtonComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.showLoader = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ExampleTuiButtonComponent_ng_template_2_ng_template_17_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiButtonComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "inherited-documentation");
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.iconButton)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("singleColor", true)("ngModel", ctx_r1.iconButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.appearanceVariants)("documentationPropertyValue", ctx_r1.appearance);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.getContentVariants(_r6))("documentationPropertyValue", ctx_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.getContentVariants(_r6))("documentationPropertyValue", ctx_r1.iconRight);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.shapeVariants)("documentationPropertyValue", ctx_r1.shape);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.showLoader);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
} }
var I18N_33;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1959104135768771069$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__34 = goog.getMsg(" Import {$startTagCode}TuiButtonModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_33 = MSG_EXTERNAL_1959104135768771069$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__34;
}
else {
    I18N_33 = $localize `:␟74d107a2fad7e62d9a2f210cc730bbc723bddd92␟1959104135768771069: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiButtonModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_35;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__36 = goog.getMsg("Add to the template:");
    I18N_35 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__36;
}
else {
    I18N_35 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
var I18N_37;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3079062251630441825$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__38 = goog.getMsg(" Optionally use the {$startTagCode}TUI_BUTTON_OPTIONS{$closeTagCode} injection token to override the default options for the component. ", { "startTagCode": "\uFFFD#13\uFFFD", "closeTagCode": "\uFFFD/#13\uFFFD" });
    I18N_37 = MSG_EXTERNAL_3079062251630441825$$SRC_MODULES_COMPONENTS_BUTTON_BUTTON_COMPONENT_TS__38;
}
else {
    I18N_37 = $localize `:␟8e14a9df7d0d2e927138098908fedfa3647e3357␟3079062251630441825: Optionally use the ${"\uFFFD#13\uFFFD"}:START_TAG_CODE:TUI_BUTTON_OPTIONS${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;
}
function ExampleTuiButtonComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](3, I18N_33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "tui-doc-code", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](8, I18N_35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "tui-doc-code", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](12, I18N_37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "tui-doc-code", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx_r2.exampleOptions);
} }
class ExampleTuiButtonComponent extends _abstract_interactive__WEBPACK_IMPORTED_MODULE_5__["AbstractExampleTuiInteractive"] {
    constructor() {
        super(...arguments);
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/3/index.less")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/4/index.less")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/5/index.html")),
        };
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/import/insert-template.md"));
        this.exampleOptions = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-define-options-md */ "!!raw-loader!-examples-import-define-options-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/define-options.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/button/examples/import/define-options.md"));
        this.disabled = false;
        this.showLoader = false;
        this.appearanceVariants = [
            `primary`,
            `accent`,
            `secondary`,
            `secondary-destructive`,
            `outline`,
            `mono`,
            `flat`,
            `whiteblock`,
            `whiteblock-active`,
            `icon`,
        ];
        this.appearance = this.appearanceVariants[0];
        this.sizeVariants = [
            `xs`,
            `s`,
            `m`,
            `l`,
            `xl`,
        ];
        this.size = this.sizeVariants[3];
        this.shapeVariants = [`square`, `rounded`];
        this.shape = null;
        this.icon = ``;
        this.iconRight = ``;
        this.iconButton = false;
    }
    getContentVariants(template) {
        return [``, `tuiIconEyeClosed`, `tuiIconHeartLarge`, template];
    }
}
ExampleTuiButtonComponent.ɵfac = function ExampleTuiButtonComponent_Factory(t) { return ɵExampleTuiButtonComponent_BaseFactory(t || ExampleTuiButtonComponent); };
ExampleTuiButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExampleTuiButtonComponent, selectors: [["example-tui-button"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => ExampleTuiButtonComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "Button", "package", "CORE", "type", "components"], ["pageTab", ""], ["id", "usage", 3, "content", 6, "heading"], ["id", "appearance", 3, "content", 6, "heading"], ["id", "dropdown", 3, "content", 6, "heading"], ["id", "custom", 3, "content", 6, "heading"], ["id", "options", 3, "content", 6, "heading"], ["tuiIconButton", "", "type", "button", 3, "appearance", "disabled", "icon", "shape", "showLoader", "size", "pseudoFocused", "pseudoHovered", "pseudoPressed", 4, "ngIf", "ngIfElse"], ["button", ""], [1, "tui-space_horizontal-2", 3, "singleColor", "ngModel", "ngModelChange"], ["template", ""], ["documentationPropertyName", "appearance", "documentationPropertyMode", "input", "documentationPropertyType", "TuiAppearance | string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "icon", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "iconRight", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "shape", "documentationPropertyMode", "input", "documentationPropertyType", "'square' | 'rounded' | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "showLoader", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeXS | TuiSizeXL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["tuiIconButton", "", "type", "button", 3, "appearance", "disabled", "icon", "shape", "showLoader", "size", "pseudoFocused", "pseudoHovered", "pseudoPressed"], ["tuiButton", "", "type", "button", 1, "tui-space_right-4", 3, "appearance", "disabled", "icon", "iconRight", "shape", "showLoader", "size", "pseudoFocused", "pseudoHovered", "pseudoPressed"], ["cardNumber", "1234", "paymentSystem", "maestro", "size", "s", 1, "card"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExampleTuiButtonComponent_ng_template_1_Template, 29, 5, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExampleTuiButtonComponent_ng_template_2_Template, 19, 16, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExampleTuiButtonComponent_ng_template_3_Template, 15, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_9__["TuiButtonExample1"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["TuiNotificationComponent"], _examples_2_index__WEBPACK_IMPORTED_MODULE_11__["TuiButtonExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_12__["TuiButtonExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_13__["TuiButtonExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_14__["TuiButtonExample5"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_15__["TuiDocDemoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _kit_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_17__["TuiToggleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgModel"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_19__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_20__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_21__["InheritedDocumentationComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_22__["TuiButtonComponent"], _addon_commerce_components_card_card_component__WEBPACK_IMPORTED_MODULE_23__["TuiCardComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_24__["TuiDocCodeComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.card[_ngcontent-%COMP%] {\n  background: #87ceeb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnN0eWxlLmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKO0FERUE7RUFDSSxtQkFBQTtBQ0FKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjODdjZWViO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogIzg3Y2VlYjtcbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiPure"]
], ExampleTuiButtonComponent.prototype, "getContentVariants", null);
const ɵExampleTuiButtonComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ExampleTuiButtonComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `example-tui-button`,
                templateUrl: `./button.template.html`,
                styleUrls: [`./button.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => ExampleTuiButtonComponent),
                    },
                ],
            }]
    }], null, { getContentVariants: [] }); })();


/***/ }),

/***/ "./src/modules/components/button/button.module.ts":
/*!********************************************************!*\
  !*** ./src/modules/components/button/button.module.ts ***!
  \********************************************************/
/*! exports provided: ExampleTuiButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiButtonModule", function() { return ExampleTuiButtonModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./button.component */ "./src/modules/components/button/button.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/button/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/button/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/button/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/button/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/components/button/examples/5/index.ts");


















class ExampleTuiButtonModule {
}
ExampleTuiButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiButtonModule });
ExampleTuiButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiButtonModule_Factory(t) { return new (t || ExampleTuiButtonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCardModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiAvatarModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiSvgModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiToggleModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiFocusableModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiHostedDropdownModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownControllerModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiArrowModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiNotificationModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_9__["InheritedDocumentationModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_button_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiButtonComponent"])),
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiButtonModule, { declarations: [_button_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiButtonComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_11__["TuiButtonExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_12__["TuiButtonExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_13__["TuiButtonExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_14__["TuiButtonExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_15__["TuiButtonExample5"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCardModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiAvatarModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiSvgModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiToggleModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiFocusableModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiHostedDropdownModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownControllerModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiArrowModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiNotificationModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_9__["InheritedDocumentationModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"]], exports: [_button_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiButtonComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCardModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiAvatarModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiSvgModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiToggleModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiFocusableModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiHostedDropdownModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownControllerModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiArrowModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiNotificationModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_9__["InheritedDocumentationModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_button_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiButtonComponent"])),
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
                ],
                declarations: [
                    _button_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiButtonComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_11__["TuiButtonExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_12__["TuiButtonExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_13__["TuiButtonExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_14__["TuiButtonExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_15__["TuiButtonExample5"],
                ],
                exports: [_button_component__WEBPACK_IMPORTED_MODULE_10__["ExampleTuiButtonComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/button/examples/1/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/button/examples/1/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiButtonExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiButtonExample1", function() { return TuiButtonExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _file_loader_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !file-loader!../../../../../assets/images/avatar.jpg */ "../../node_modules/file-loader/dist/cjs.js!./src/assets/images/avatar.jpg");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cdk_directives_focusable_focusable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../cdk/directives/focusable/focusable.directive */ "../cdk/directives/focusable/focusable.directive.ts");
/* harmony import */ var _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/avatar/avatar.component */ "../kit/components/avatar/avatar.component.ts");









function TuiButtonExample1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-avatar", 12);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true)("avatarUrl", ctx_r1.avatarUrl);
} }
const _c0 = function () { return ["/tui-dropdown"]; };
class TuiButtonExample1 {
    constructor() {
        this.avatarUrl = _file_loader_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
    onClick(event) {
        console.info(`click`, event);
    }
}
TuiButtonExample1.ɵfac = function TuiButtonExample1_Factory(t) { return new (t || TuiButtonExample1)(); };
TuiButtonExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiButtonExample1, selectors: [["tui-button-example-1"]], decls: 30, vars: 15, consts: [["icon", ""], ["tuiButton", "", "type", "button", 1, "tui-space_right-3", "tui-space_bottom-3", 3, "icon", "click"], ["tuiButton", "", "type", "button", "iconRight", "tuiIconSearch", 1, "tui-space_right-3", "tui-space_bottom-3", 3, "disabled", "click"], ["tuiButton", "", "type", "button", 3, "showLoader", "click"], ["tuiIconButton", "", "type", "button", 1, "tui-space_right-3", "tui-space_bottom-3", 3, "icon", "click"], ["tuiIconButton", "", "type", "button", "icon", "tuiIconSearch", 1, "tui-space_right-3", "tui-space_bottom-3", 3, "disabled", "click"], ["tuiIconButton", "", "type", "button", 3, "showLoader", "click"], ["tuiButton", "", "type", "button", "href", "http://google.com", 1, "tui-space_right-3", "tui-space_bottom-3", 3, "icon"], ["tuiButton", "", 3, "showLoader"], ["tuiIconButton", "", "type", "button", 1, "tui-space_right-3", "tui-space_bottom-3", 3, "icon", "routerLink"], ["tuiIconButton", "", "type", "button", "icon", "tuiIconSearch", 1, "tui-space_right-3", "tui-space_bottom-3", 3, "disabled", "routerLink", "tuiFocusable"], ["tuiIconButton", "", "type", "button", 3, "showLoader", "routerLink", "tuiFocusable"], ["size", "xs", 3, "rounded", "avatarUrl"]], template: function TuiButtonExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiButtonExample1_ng_template_0_Template, 1, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "button[tuiButton]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiButtonExample1_Template_button_click_5_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiButtonExample1_Template_button_click_7_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Disabled button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiButtonExample1_Template_button_click_9_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Loading button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "button[tuiIconButton]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiButtonExample1_Template_button_click_14_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiButtonExample1_Template_button_click_15_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiButtonExample1_Template_button_click_16_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "a[tuiButton]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Link ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Loading button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "a[tuiIconButton]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showLoader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showLoader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showLoader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _r0)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("tuiFocusable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showLoader", true)("tuiFocusable", false);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["TuiButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _cdk_directives_focusable_focusable_directive__WEBPACK_IMPORTED_MODULE_6__["TuiFocusableDirective"], _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_7__["TuiAvatarComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiButtonExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-button-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/button/examples/2/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/button/examples/2/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiButtonExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiButtonExample2", function() { return TuiButtonExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");





class TuiButtonExample2 {
}
TuiButtonExample2.ɵfac = function TuiButtonExample2_Factory(t) { return new (t || TuiButtonExample2)(); };
TuiButtonExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiButtonExample2, selectors: [["tui-button-example-2"]], decls: 13, vars: 0, consts: [["tuiButton", "", "type", "button", "appearance", "primary", 1, "tui-space_right-3", "tui-space_bottom-3"], ["tuiButton", "", "type", "button", "appearance", "secondary", 1, "tui-space_right-3", "tui-space_bottom-3"], ["tuiButton", "", "type", "button", "appearance", "secondary-destructive", 1, "tui-space_right-3", "tui-space_bottom-3"], ["tuiButton", "", "type", "button", "appearance", "accent", 1, "tui-space_right-3", "tui-space_bottom-3"], ["tuiButton", "", "type", "button", "appearance", "flat", 1, "tui-space_right-3", "tui-space_bottom-3"], ["tuiButton", "", "type", "button", "appearance", "outline", 1, "tui-space_right-3", "tui-space_bottom-3"], ["tuiIconButton", "", "type", "button", "appearance", "icon", "icon", "tuiIconCloseLarge", 1, "tui-space_right-3", "tui-space_bottom-3"]], template: function TuiButtonExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " primary\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " secondary\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " secondary-destructive\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " accent\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " flat\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " outline\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "button", 6);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiButtonExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-button-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/button/examples/3/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/button/examples/3/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiButtonExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiButtonExample3", function() { return TuiButtonExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _core_components_hosted_dropdown_hosted_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/hosted-dropdown/hosted-dropdown.component */ "../core/components/hosted-dropdown/hosted-dropdown.component.ts");
/* harmony import */ var _core_directives_dropdown_controller_dropdown_controller_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/dropdown-controller/dropdown-controller.directive */ "../core/directives/dropdown-controller/dropdown-controller.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");








function TuiButtonExample3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "TuiArrowModule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "@taiga-ui/kit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TuiButtonExample3 {
    constructor() {
        this.arrow = _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_3__["TUI_ARROW"];
    }
}
TuiButtonExample3.ɵfac = function TuiButtonExample3_Factory(t) { return new (t || TuiButtonExample3)(); };
TuiButtonExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiButtonExample3, selectors: [["tui-button-example-3"]], decls: 5, vars: 2, consts: [["tuiDropdownLimitWidth", "fixed", 3, "content"], ["tuiButton", "", "type", "button", 3, "iconRight"], ["dropdown", ""], [1, "content"]], template: function TuiButtonExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-hosted-dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Where could I find such an arrow...? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiButtonExample3_ng_template_3_Template, 7, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconRight", ctx.arrow);
    } }, directives: [_core_components_hosted_dropdown_hosted_dropdown_component__WEBPACK_IMPORTED_MODULE_4__["TuiHostedDropdownComponent"], _core_directives_dropdown_controller_dropdown_controller_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDropdownControllerDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["TuiButtonComponent"]], styles: [".icon[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n}\n.icon_rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.content[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9idXR0b24vZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2J1dHRvbi9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQ21PSSw4QkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7QUY3Tko7QUNMSTtFQUNJLHlCQUFBO0FET1I7QUNIQTtFQUNJLHdCQUFBO0FES0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2J1dHRvbi9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4uaWNvbiB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcyk7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cbi5pY29uX3JvdGF0ZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5pY29uIHtcbiAgICAudHJhbnNpdGlvbih0cmFuc2Zvcm0pO1xuXG4gICAgJl9yb3RhdGVkIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG59XG5cbi5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiButtonExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-button-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/button/examples/4/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/button/examples/4/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiButtonExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiButtonExample4", function() { return TuiButtonExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");




class TuiButtonExample4 {
}
TuiButtonExample4.ɵfac = function TuiButtonExample4_Factory(t) { return new (t || TuiButtonExample4)(); };
TuiButtonExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiButtonExample4, selectors: [["tui-button-example-4"]], decls: 2, vars: 0, consts: [["tuiButton", "", "appearance", "custom"]], template: function TuiButtonExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " See LESS tab\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_2__["TuiButtonComponent"]], styles: ["tui-wrapper[data-appearance='custom'] {\n  background: #bc71c9;\n  color: #fff;\n}\ntui-wrapper[data-appearance='custom'][data-state='hovered'] {\n  background: #a381ff;\n}\ntui-wrapper[data-appearance='custom'][data-state='pressed'] {\n  background: #8f75d1;\n}\ntui-wrapper[data-appearance='custom'][data-state='disabled'] {\n  background: #eaecee;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9idXR0b24vZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2J1dHRvbi9leGFtcGxlcy80L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNBSjtBREVJO0VBQ0ksbUJBQUE7QUNBUjtBREdJO0VBQ0ksbUJBQUE7QUNEUjtBRElJO0VBQ0ksbUJBQUE7QUNGUiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvYnV0dG9uL2V4YW1wbGVzLzQvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZ29lcyBpbnRvIGdsb2JhbCwgdW5lbmNhcHN1bGF0ZWQgc3R5bGVzXG50dWktd3JhcHBlcltkYXRhLWFwcGVhcmFuY2U9J2N1c3RvbSddIHtcbiAgICBiYWNrZ3JvdW5kOiAjYmM3MWM5O1xuICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgJltkYXRhLXN0YXRlPSdob3ZlcmVkJ10ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYTM4MWZmO1xuICAgIH1cblxuICAgICZbZGF0YS1zdGF0ZT0ncHJlc3NlZCddIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzhmNzVkMTtcbiAgICB9XG5cbiAgICAmW2RhdGEtc3RhdGU9J2Rpc2FibGVkJ10ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWFlY2VlO1xuICAgIH1cbn1cbiIsInR1aS13cmFwcGVyW2RhdGEtYXBwZWFyYW5jZT0nY3VzdG9tJ10ge1xuICBiYWNrZ3JvdW5kOiAjYmM3MWM5O1xuICBjb2xvcjogI2ZmZjtcbn1cbnR1aS13cmFwcGVyW2RhdGEtYXBwZWFyYW5jZT0nY3VzdG9tJ11bZGF0YS1zdGF0ZT0naG92ZXJlZCddIHtcbiAgYmFja2dyb3VuZDogI2EzODFmZjtcbn1cbnR1aS13cmFwcGVyW2RhdGEtYXBwZWFyYW5jZT0nY3VzdG9tJ11bZGF0YS1zdGF0ZT0ncHJlc3NlZCddIHtcbiAgYmFja2dyb3VuZDogIzhmNzVkMTtcbn1cbnR1aS13cmFwcGVyW2RhdGEtYXBwZWFyYW5jZT0nY3VzdG9tJ11bZGF0YS1zdGF0ZT0nZGlzYWJsZWQnXSB7XG4gIGJhY2tncm91bmQ6ICNlYWVjZWU7XG59XG4iXX0= */"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiButtonExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-button-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/button/examples/5/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/components/button/examples/5/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiButtonExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiButtonExample5", function() { return TuiButtonExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");





class TuiButtonExample5 {
}
TuiButtonExample5.ɵfac = function TuiButtonExample5_Factory(t) { return new (t || TuiButtonExample5)(); };
TuiButtonExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiButtonExample5, selectors: [["tui-button-example-5"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            Object(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["tuiButtonOptionsProvider"])({
                shape: `rounded`,
                appearance: "outline" /* Outline */,
                size: `m`,
            }),
        ])], decls: 2, vars: 0, consts: [["tuiButton", ""]], template: function TuiButtonExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_3__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiButtonExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-button-example-5`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                providers: [
                    Object(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["tuiButtonOptionsProvider"])({
                        shape: `rounded`,
                        appearance: "outline" /* Outline */,
                        size: `m`,
                    }),
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-button-button-module.js.map