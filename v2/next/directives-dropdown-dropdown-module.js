(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-dropdown-dropdown-module"],{

/***/ "./src/modules/directives/dropdown/dropdown.component.ts":
/*!***************************************************************!*\
  !*** ./src/modules/directives/dropdown/dropdown.component.ts ***!
  \***************************************************************/
/*! exports provided: ExampleTuiDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiDropdownComponent", function() { return ExampleTuiDropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/directives/dropdown/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/directives/dropdown/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/directives/dropdown/examples/3/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../cdk/directives/active-zone/active-zone.directive */ "../cdk/directives/active-zone/active-zone.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../core/directives/dropdown/dropdown.directive */ "../core/directives/dropdown/dropdown.directive.ts");
/* harmony import */ var _cdk_directives_obscured_obscured_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../cdk/directives/obscured/obscured.directive */ "../cdk/directives/obscured/obscured.directive.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");




















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3950150784859096463$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}tuiDropdown{$closeTagCode} shows a dropdown with custom template. Use {$startLink} ActiveZone {$closeLink} directive to hide dropdown. ", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "startLink": "\uFFFD#3\uFFFD", "closeLink": "\uFFFD/#3\uFFFD" });
    I18N_0 = MSG_EXTERNAL_3950150784859096463$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟c17669cf8128e9355bfe52fdb5cc62a1ed173590␟3950150784859096463:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiDropdown${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: shows a dropdown with custom template. Use ${"\uFFFD#3\uFFFD"}:START_LINK: ActiveZone ${"\uFFFD/#3\uFFFD"}:CLOSE_LINK: directive to hide dropdown. `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_792659549883643150$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__3 = goog.getMsg(" See also {$startLink} HostedDropdown {$closeLink}", { "startLink": "\uFFFD#6\uFFFD", "closeLink": "\uFFFD/#6\uFFFD" });
    I18N_2 = MSG_EXTERNAL_792659549883643150$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟af1c479da4ba0bfe2598873f34a047c91040cb36␟792659549883643150: See also ${"\uFFFD#6\uFFFD"}:START_LINK: HostedDropdown ${"\uFFFD/#6\uFFFD"}:CLOSE_LINK:`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__5 = goog.getMsg("Basic");
    I18N_4 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c6 = ["heading", I18N_4];
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7142877349532194759$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__8 = goog.getMsg("Interesting one");
    I18N_7 = MSG_EXTERNAL_7142877349532194759$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟fc14228bf80fdeaf8ab75718c8f338bbf64a0dbe␟7142877349532194759:Interesting one`;
}
const _c9 = ["heading", I18N_7];
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5074208700730793721$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__11 = goog.getMsg("Change detection");
    I18N_10 = MSG_EXTERNAL_5074208700730793721$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟a070bd37ddb9b45ffc97f6f50824096ae922e0f2␟5074208700730793721:Change detection`;
}
const _c12 = ["heading", I18N_10];
const _c13 = function () { return ["/directives/active-zone"]; };
const _c14 = function () { return ["/components/hosted-dropdown"]; };
function ExampleTuiDropdownComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](5, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](8, _c6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-dropdown-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](11, _c9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-dropdown-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](14, _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-dropdown-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c14));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
} }
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2305037848414055616$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___16 = goog.getMsg(" Here can be any content {$startParagraph}You can even insert other components:{$closeParagraph}{$startTagButton} Do not touch! {$closeTagButton}{$startParagraph}Everything you want... *{$closeParagraph}{$startSubstript}* except cases of Worldwide rights violation{$closeSubstript}", { "startParagraph": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]", "closeParagraph": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]", "startTagButton": "\uFFFD#3\uFFFD", "closeTagButton": "\uFFFD/#3\uFFFD", "startSubstript": "\uFFFD#5\uFFFD", "closeSubstript": "\uFFFD/#5\uFFFD" });
    I18N_15 = MSG_EXTERNAL_2305037848414055616$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___16;
}
else {
    I18N_15 = $localize `:␟bf8051f88aecb7b565cb0ed96005904c1024b7a2␟2305037848414055616: Here can be any content ${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_PARAGRAPH:You can even insert other components:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_PARAGRAPH:${"\uFFFD#3\uFFFD"}:START_TAG_BUTTON: Do not touch! ${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_BUTTON:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_PARAGRAPH:Everything you want... *${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_PARAGRAPH:${"\uFFFD#5\uFFFD"}:START_SUBSTRIPT:* except cases of Worldwide rights violation${"\uFFFD/#5\uFFFD"}:CLOSE_SUBSTRIPT:`;
}
I18N_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_15);
function ExampleTuiDropdownComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2368949966049627739$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___18 = goog.getMsg(" Show dropdown ");
    I18N_17 = MSG_EXTERNAL_2368949966049627739$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___18;
}
else {
    I18N_17 = $localize `:␟e20d43d0d67f601b29cd6fe233b5923e59bdef3d␟2368949966049627739: Show dropdown `;
}
function ExampleTuiDropdownComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_17);
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_741899295101860675$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___20 = goog.getMsg(" Content ");
    I18N_19 = MSG_EXTERNAL_741899295101860675$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___20;
}
else {
    I18N_19 = $localize `:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `;
}
function ExampleTuiDropdownComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_19);
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_905186926226823365$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___22 = goog.getMsg(" Align of dropdown (does not work together with {$startTagCode}limitWidth === 'fixed'{$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_21 = MSG_EXTERNAL_905186926226823365$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___22;
}
else {
    I18N_21 = $localize `:␟4e5cb2c74dfb392802e7e005883b9be2c781fd4a␟905186926226823365: Align of dropdown (does not work together with ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:limitWidth === 'fixed'${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiDropdownComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8707958835080744644$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___24 = goog.getMsg(" Set a vertical direction of dropdown ");
    I18N_23 = MSG_EXTERNAL_8707958835080744644$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___24;
}
else {
    I18N_23 = $localize `:␟bfe17793e6e84334e10951e36a771ad1ac58ef05␟8707958835080744644: Set a vertical direction of dropdown `;
}
function ExampleTuiDropdownComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_23);
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7162739121343086934$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___26 = goog.getMsg(" Set dropdown host manually. For example, it will be a target if someone blurs dropdown with Tab/Shift+Tab. Element with a directive is used by default. ");
    I18N_25 = MSG_EXTERNAL_7162739121343086934$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___26;
}
else {
    I18N_25 = $localize `:␟1a7f7dfc794f8e7c30e09adad92f0525112970a5␟7162739121343086934: Set dropdown host manually. For example, it will be a target if someone blurs dropdown with Tab/Shift+Tab. Element with a directive is used by default. `;
}
function ExampleTuiDropdownComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_25);
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1790691801673246110$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___28 = goog.getMsg(" Limit dropdown width ");
    I18N_27 = MSG_EXTERNAL_1790691801673246110$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___28;
}
else {
    I18N_27 = $localize `:␟da2ca1c17abdc5578724541ebd2b9c6d044d248e␟1790691801673246110: Limit dropdown width `;
}
function ExampleTuiDropdownComponent_ng_template_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_27);
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5799599437390794628$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___30 = goog.getMsg(" Minimum height to calculate that dropdown fits to setted {$startTagCode}tuiDropdownDirection{$closeTagCode}", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_29 = MSG_EXTERNAL_5799599437390794628$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___30;
}
else {
    I18N_29 = $localize `:␟e848cc13a18e3647fb148f5d1c19ae5f888e1557␟5799599437390794628: Minimum height to calculate that dropdown fits to setted ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:tuiDropdownDirection${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE:`;
}
function ExampleTuiDropdownComponent_ng_template_2_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_34813109637476177$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___32 = goog.getMsg(" Maximum height of dropdown ");
    I18N_31 = MSG_EXTERNAL_34813109637476177$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___32;
}
else {
    I18N_31 = $localize `:␟b16442aff8c447ade67e3d9a81f268796ea113fa␟34813109637476177: Maximum height of dropdown `;
}
function ExampleTuiDropdownComponent_ng_template_2_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_31);
} }
var I18N_33;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3925785757038900199$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___34 = goog.getMsg(" Dropdown is sided by host ");
    I18N_33 = MSG_EXTERNAL_3925785757038900199$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS___34;
}
else {
    I18N_33 = $localize `:␟8ce8395bd49b9bbee585ad617dad9e48eb6a8c49␟3925785757038900199: Dropdown is sided by host `;
}
function ExampleTuiDropdownComponent_ng_template_2_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_33);
} }
function ExampleTuiDropdownComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiActiveZoneChange", function ExampleTuiDropdownComponent_ng_template_2_Template_span_tuiActiveZoneChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onActiveZone($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiObscured", function ExampleTuiDropdownComponent_ng_template_2_Template_button_tuiObscured_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onObscured($event); })("click", function ExampleTuiDropdownComponent_ng_template_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " PRESS! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "* There is also a pretty long text to check its width limitations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiDropdownComponent_ng_template_2_ng_template_6_Template, 6, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiDropdownComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDropdownComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.open = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiDropdownComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiDropdownComponent_ng_template_2_ng_template_11_Template, 2, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDropdownComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.tuiDropdownAlign = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiDropdownComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDropdownComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.tuiDropdownDirection = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleTuiDropdownComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExampleTuiDropdownComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDropdownComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.tuiDropdownLimitWidth = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExampleTuiDropdownComponent_ng_template_2_ng_template_15_Template, 2, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDropdownComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.tuiDropdownMinHeight = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExampleTuiDropdownComponent_ng_template_2_ng_template_16_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDropdownComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.tuiDropdownMaxHeight = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExampleTuiDropdownComponent_ng_template_2_ng_template_17_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDropdownComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.tuiDropdownSided = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiDropdownContent", _r3)("tuiDropdownMinHeight", ctx_r1.tuiDropdownMinHeight)("tuiDropdownMaxHeight", ctx_r1.tuiDropdownMaxHeight)("tuiDropdownAlign", ctx_r1.tuiDropdownAlign)("tuiDropdownDirection", ctx_r1.tuiDropdownDirection)("tuiDropdownLimitWidth", ctx_r1.tuiDropdownLimitWidth)("tuiDropdownSided", ctx_r1.tuiDropdownSided)("tuiDropdown", ctx_r1.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.alignVariants)("documentationPropertyValue", ctx_r1.tuiDropdownAlign);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.dropdownDirectionVariants)("documentationPropertyValue", ctx_r1.tuiDropdownDirection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.tuiDropdownLimitWidthVariants)("documentationPropertyValue", ctx_r1.tuiDropdownLimitWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.tuiDropdownMinHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.tuiDropdownMaxHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.tuiDropdownSided);
} }
var I18N_35;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1816878685679044442$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__36 = goog.getMsg(" Import {$startTagCode}TuiDropdownModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_35 = MSG_EXTERNAL_1816878685679044442$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__36;
}
else {
    I18N_35 = $localize `:␟8a62be1bbab6430a7d42c204d2b6d6ba8d65fffe␟1816878685679044442: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiDropdownModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_37;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__38 = goog.getMsg("Add to the template:");
    I18N_37 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_DROPDOWN_DROPDOWN_COMPONENT_TS__38;
}
else {
    I18N_37 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiDropdownComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiDropdownComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown/examples/3/index.html")),
        };
        this.tuiDropdownMinHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_MIN_HEIGHT"];
        this.tuiDropdownMaxHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_MAX_HEIGHT"];
        this.tuiDropdownSided = false;
        this.alignVariants = [`right`, `left`];
        this.tuiDropdownAlign = this.alignVariants[0];
        this.dropdownDirectionVariants = [
            `top`,
            `bottom`,
        ];
        this.tuiDropdownDirection = null;
        this.tuiDropdownLimitWidthVariants = [
            `fixed`,
            `min`,
            `auto`,
        ];
        this.tuiDropdownLimitWidth = this.tuiDropdownLimitWidthVariants[0];
        this.open = false;
    }
    onClick() {
        this.open = !this.open;
    }
    onObscured(obscured) {
        if (obscured) {
            this.open = false;
        }
    }
    onActiveZone(active) {
        this.open = active && this.open;
    }
}
ExampleTuiDropdownComponent.ɵfac = function ExampleTuiDropdownComponent_Factory(t) { return new (t || ExampleTuiDropdownComponent)(); };
ExampleTuiDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiDropdownComponent, selectors: [["example-tui-dropdown"]], decls: 4, vars: 0, consts: [["header", "Dropdown", "package", "CORE", "type", "directives"], ["pageTab", ""], [1, "tui-space_bottom-3"], ["tuiLink", "", 3, "routerLink"], ["id", "base", 3, "content", 6, "heading"], ["id", "full-featured", 3, "content", 6, "heading"], ["id", "change-detection", 3, "content", 6, "heading"], [3, "tuiActiveZoneChange"], ["tuiButton", "", "type", "button", 3, "tuiDropdownContent", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth", "tuiDropdownSided", "tuiDropdown", "tuiObscured", "click"], ["dropdownContent", ""], ["documentationPropertyName", "tuiDropdown", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "tuiDropdownAlign", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHorizontalDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownDirection", "documentationPropertyMode", "input", "documentationPropertyType", "TuiVerticalDirection | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownHost", "documentationPropertyMode", "input", "documentationPropertyType", "HTMLElement | null"], ["documentationPropertyName", "tuiDropdownLimitWidth", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDropdownWidthT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownMinHeight", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownMaxHeight", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownSided", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [1, "dropdown"], ["tuiButton", "", "type", "button"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiDropdownComponent_ng_template_1_Template, 16, 7, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiDropdownComponent_ng_template_2_Template, 18, 18, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiDropdownComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_8__["TuiDropdownExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_9__["TuiDropdownExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_10__["TuiDropdownExample3"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDemoComponent"], _cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_12__["TuiActiveZoneDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_13__["TuiButtonComponent"], _core_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_14__["TuiDropdownDirective"], _cdk_directives_obscured_obscured_directive__WEBPACK_IMPORTED_MODULE_15__["TuiObscuredDirective"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_16__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_17__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_18__["TuiDocCodeComponent"]], styles: [".dropdown[_ngcontent-%COMP%] {\n  max-width: 20rem;\n  padding: 0.5rem 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9kcm9wZG93bi9kcm9wZG93bi5zdHlsZS5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9kaXJlY3RpdmVzL2Ryb3Bkb3duL2Ryb3Bkb3duLnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9kaXJlY3RpdmVzL2Ryb3Bkb3duL2Ryb3Bkb3duLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24ge1xuICAgIG1heC13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMC41cmVtIDEuMjVyZW07XG59XG4iLCIuZHJvcGRvd24ge1xuICBtYXgtd2lkdGg6IDIwcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMS4yNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiDropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-dropdown`,
                templateUrl: `./dropdown.template.html`,
                styleUrls: [`./dropdown.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/dropdown/dropdown.module.ts":
/*!************************************************************!*\
  !*** ./src/modules/directives/dropdown/dropdown.module.ts ***!
  \************************************************************/
/*! exports provided: ExampleTuiDropdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiDropdownModule", function() { return ExampleTuiDropdownModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dropdown.component */ "./src/modules/directives/dropdown/dropdown.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/directives/dropdown/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/directives/dropdown/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/directives/dropdown/examples/3/index.ts");















class ExampleTuiDropdownModule {
}
ExampleTuiDropdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiDropdownModule });
ExampleTuiDropdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiDropdownModule_Factory(t) { return new (t || ExampleTuiDropdownModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiAvatarModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDropdownModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSelectModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiObscuredModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiActiveZoneModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_dropdown_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiDropdownComponent"])),
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__["PolymorpheusModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiToggleModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiDropdownModule, { declarations: [_dropdown_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiDropdownComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_10__["TuiDropdownExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_11__["TuiDropdownExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_12__["TuiDropdownExample3"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiAvatarModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDropdownModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSelectModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiObscuredModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiActiveZoneModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__["PolymorpheusModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiToggleModule"]], exports: [_dropdown_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiDropdownComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiDropdownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiAvatarModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDropdownModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSelectModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiObscuredModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiActiveZoneModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_dropdown_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiDropdownComponent"])),
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__["PolymorpheusModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiToggleModule"],
                ],
                declarations: [
                    _dropdown_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiDropdownComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_10__["TuiDropdownExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_11__["TuiDropdownExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_12__["TuiDropdownExample3"],
                ],
                exports: [_dropdown_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiDropdownComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/dropdown/examples/1/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/directives/dropdown/examples/1/index.ts ***!
  \*************************************************************/
/*! exports provided: TuiDropdownExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDropdownExample1", function() { return TuiDropdownExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../cdk/directives/active-zone/active-zone.directive */ "../cdk/directives/active-zone/active-zone.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/dropdown/dropdown.directive */ "../core/directives/dropdown/dropdown.directive.ts");
/* harmony import */ var _cdk_directives_obscured_obscured_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../cdk/directives/obscured/obscured.directive */ "../cdk/directives/obscured/obscured.directive.ts");








function TuiDropdownExample1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "But there is nothing to choose...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TuiDropdownExample1 {
    constructor() {
        this.open = false;
    }
    onClick() {
        this.open = !this.open;
    }
    onObscured(obscured) {
        if (obscured) {
            this.open = false;
        }
    }
    onActiveZone(active) {
        this.open = active && this.open;
    }
}
TuiDropdownExample1.ɵfac = function TuiDropdownExample1_Factory(t) { return new (t || TuiDropdownExample1)(); };
TuiDropdownExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiDropdownExample1, selectors: [["tui-dropdown-example-1"]], decls: 5, vars: 2, consts: [[3, "tuiActiveZoneChange"], ["tuiButton", "", "type", "button", "iconRight", "tuiIconChevronDown", 3, "tuiDropdownContent", "tuiDropdown", "tuiObscured", "click"], ["dropdownContent", ""], [1, "dropdown"]], template: function TuiDropdownExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiActiveZoneChange", function TuiDropdownExample1_Template_span_tuiActiveZoneChange_0_listener($event) { return ctx.onActiveZone($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tuiObscured", function TuiDropdownExample1_Template_button_tuiObscured_1_listener($event) { return ctx.onObscured($event); })("click", function TuiDropdownExample1_Template_button_click_1_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Choose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiDropdownExample1_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiDropdownContent", _r0)("tuiDropdown", ctx.open);
    } }, directives: [_cdk_directives_active_zone_active_zone_directive__WEBPACK_IMPORTED_MODULE_3__["TuiActiveZoneDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["TuiButtonComponent"], _core_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDropdownDirective"], _cdk_directives_obscured_obscured_directive__WEBPACK_IMPORTED_MODULE_6__["TuiObscuredDirective"]], styles: [".dropdown[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  line-height: 1.25rem;\n  text-transform: uppercase;\n  letter-spacing: 0.075em;\n  padding: 0.25rem 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9kcm9wZG93bi9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvZHJvcGRvd24vZXhhbXBsZXMvMS9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FES0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9kaXJlY3RpdmVzL2Ryb3Bkb3duL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi5kcm9wZG93biB7XG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDc1ZW07XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLmRyb3Bkb3duIHtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA3NWVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiDropdownExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-dropdown-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/dropdown/examples/2/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/directives/dropdown/examples/2/index.ts ***!
  \*************************************************************/
/*! exports provided: TuiDropdownExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDropdownExample2", function() { return TuiDropdownExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _file_loader_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !file-loader!../../../../../assets/images/avatar.jpg */ "../../node_modules/file-loader/dist/cjs.js!./src/assets/images/avatar.jpg");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _core_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/dropdown/dropdown.directive */ "../core/directives/dropdown/dropdown.directive.ts");
/* harmony import */ var _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/avatar/avatar.component */ "../kit/components/avatar/avatar.component.ts");








function TuiDropdownExample2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-avatar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Taiga UI developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Alex Inkin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "a.inkin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true)("avatarUrl", ctx_r1.avatarUrl);
} }
class TuiDropdownExample2 {
    constructor() {
        this.open = false;
        this.avatarUrl = _file_loader_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
    onMouseEnter() {
        this.open = true;
    }
    onMouseLeave() {
        this.open = false;
    }
}
TuiDropdownExample2.ɵfac = function TuiDropdownExample2_Factory(t) { return new (t || TuiDropdownExample2)(); };
TuiDropdownExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiDropdownExample2, selectors: [["tui-dropdown-example-2"]], decls: 9, vars: 2, consts: [["tuiLink", "", "tuiDropdownAlign", "right", "tuiDropdownDirection", "top", 3, "tuiDropdownContent", "tuiDropdown", "mouseenter", "mouseleave"], ["dropdownContent", ""], [1, "dropdown"], ["size", "l", 3, "rounded", "avatarUrl"], [1, "text"], [1, "label"], [1, "name"], [1, "account"]], template: function TuiDropdownExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "You can ask any questions about\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "tuiDropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\nand\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TuiDropdownExample2_Template_button_mouseenter_4_listener() { return ctx.onMouseEnter(); })("mouseleave", function TuiDropdownExample2_Template_button_mouseleave_4_listener() { return ctx.onMouseLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Alex\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\nwill answer you with joy! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TuiDropdownExample2_ng_template_7_Template, 9, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiDropdownContent", _r0)("tuiDropdown", ctx.open);
    } }, directives: [_core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _core_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_5__["TuiDropdownDirective"], _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_6__["TuiAvatarComponent"]], styles: [".dropdown[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.375rem 0.75rem;\n}\n.text[_ngcontent-%COMP%] {\n  padding: 0 0.75rem;\n}\n.label[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-m);\n  color: var(--tui-text-03);\n}\n.name[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-6);\n}\n.account[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-s);\n  margin-top: 0.25rem;\n  color: var(--tui-text-02);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9kcm9wZG93bi9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvZHJvcGRvd24vZXhhbXBsZXMvMi9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QURLSjtBQ0ZBO0VBQ0ksa0JBQUE7QURJSjtBQ0RBO0VBQ0ksNEJBQUE7RUFDQSx5QkFBQTtBREdKO0FDQUE7RUFDSSwrQkFBQTtBREVKO0FDQ0E7RUFDSSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QURDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvZHJvcGRvd24vZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLmRyb3Bkb3duIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbn1cbi50ZXh0IHtcbiAgcGFkZGluZzogMCAwLjc1cmVtO1xufVxuLmxhYmVsIHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1tKTtcbiAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcbn1cbi5uYW1lIHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy02KTtcbn1cbi5hY2NvdW50IHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1zKTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAyKTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLmRyb3Bkb3duIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG59XG5cbi50ZXh0IHtcbiAgICBwYWRkaW5nOiAwIDAuNzVyZW07XG59XG5cbi5sYWJlbCB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1tKTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xufVxuXG4ubmFtZSB7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy02KTtcbn1cblxuLmFjY291bnQge1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDIpO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiDropdownExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-dropdown-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/dropdown/examples/3/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/directives/dropdown/examples/3/index.ts ***!
  \*************************************************************/
/*! exports provided: TuiDropdownExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDropdownExample3", function() { return TuiDropdownExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/directives/dropdown/dropdown.directive */ "../core/directives/dropdown/dropdown.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");











function TuiDropdownExample3_ng_template_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda at corporis ea hic illo ipsa laboriosam laudantium nemo neque officiis pariatur quidem quos rerum sunt, temporibus tenetur ullam vitae? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Dolores est hic impedit odio. Culpa debitis deleniti eaque explicabo id maxime officiis quasi quos, rerum. Adipisci aut consequatur earum esse facere fugit, inventore ipsa modi officia, perspiciatis tempore voluptates! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Blanditiis debitis earum eius error itaque nemo repellat rerum totam vel voluptates. Cupiditate ducimus et ex, facilis magni maiores nemo nulla sed sunt, tempore vel vero. Dicta ea nihil sapiente! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Ad aliquid aperiam assumenda consequuntur dolore eius esse et exercitationem facere illo, maiores maxime nam, natus nemo nihil officia optio placeat quia recusandae rem reprehenderit sapiente sed similique ut, veritatis! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ab animi beatae commodi consequuntur culpa eaque earum eligendi eveniet fugit, id illo impedit in ipsa ipsam nostrum optio pariatur, perspiciatis quas quidem quis sed temporibus velit vitae? Consequuntur, quia! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Dolorem eligendi est illo impedit iste laudantium, odit pariatur quam quasi tenetur. Dolor, dolorem esse illo maiores nihil pariatur quisquam saepe! Ea eaque inventore iure nulla porro possimus sunt vero! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Inventore itaque iure pariatur! Adipisci animi aut corporis dolorum, eaque est exercitationem id illum laboriosam laborum libero molestias numquam obcaecati perferendis provident reprehenderit sapiente sequi similique tempora veniam. Reprehenderit, sequi? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Adipisci alias blanditiis consectetur cumque dolore dolorum et facere hic illo laboriosam, laudantium modi natus neque nisi optio possimus, quaerat quis ratione rerum, suscipit tempora tempore ullam voluptatum! Autem, rem. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Consequuntur cum doloribus eaque excepturi nisi. Aperiam autem beatae debitis deleniti dicta dignissimos, doloribus error et eum, eveniet illo itaque iure magni molestias placeat quas ratione tenetur vitae voluptates voluptatum. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Consequuntur fugit in odit qui sapiente! Consequuntur, distinctio illo inventore iste nemo non odio quia, sint tempora tenetur ut voluptatum. Ab aut doloremque laborum maiores modi reprehenderit sit tempora! Molestias? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TuiDropdownExample3_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiDropdownExample3_ng_template_4_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiDropdownExample3_ng_template_4_ng_container_1_Template, 21, 0, "ng-container", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showBigText);
} }
class TuiDropdownExample3 {
    constructor(destroy$, changeDetectorRef) {
        this.open = false;
        this.value = `some data`;
        this.showBigText = false;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(3000)
            .pipe(Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["watch"])(changeDetectorRef), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(destroy$))
            .subscribe(() => {
            this.showBigText = !this.showBigText;
        });
    }
}
TuiDropdownExample3.ɵfac = function TuiDropdownExample3_Factory(t) { return new (t || TuiDropdownExample3)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
TuiDropdownExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiDropdownExample3, selectors: [["tui-dropdown-example-3"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]])], decls: 6, vars: 4, consts: [["type", "text", 3, "ngModel", "ngModelChange"], [3, "tuiDropdownContent", "tuiDropdown"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["dropdownContent", ""], ["type", "text", 1, "dropdown", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["id", "aaa"]], template: function TuiDropdownExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiDropdownExample3_Template_input_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiDropdownExample3_Template_input_ngModelChange_2_listener($event) { return ctx.open = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " open\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiDropdownExample3_ng_template_4_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiDropdownContent", _r0)("tuiDropdown", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.open);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _core_directives_dropdown_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], styles: [".dropdown[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9kcm9wZG93bi9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvZHJvcGRvd24vZXhhbXBsZXMvMy9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxZQUFBO0FES0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9kaXJlY3RpdmVzL2Ryb3Bkb3duL2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi5kcm9wZG93biB7XG4gIG1hcmdpbjogMXJlbTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLmRyb3Bkb3duIHtcbiAgICBtYXJnaW46IDFyZW07XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiDropdownExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-dropdown-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                providers: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], function () { return [{ type: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]
            }] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=directives-dropdown-dropdown-module.js.map