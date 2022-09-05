(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directives-dropdown-selection-dropdown-selection-module"],{

/***/ "./src/modules/directives/dropdown-selection/dropdown-selection.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/modules/directives/dropdown-selection/dropdown-selection.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ExampleTuiDropdownSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiDropdownSelectionComponent", function() { return ExampleTuiDropdownSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/directives/dropdown-selection/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/directives/dropdown-selection/examples/2/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _kit_directives_dropdown_selection_dropdown_selection_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../kit/directives/dropdown-selection/dropdown-selection.directive */ "../kit/directives/dropdown-selection/dropdown-selection.directive.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2979268708696318460$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}tuiDropdownSelection{$closeTagCode} shows dropdown with custom template on selected text ", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_2979268708696318460$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟432c55cd71cfc37ae765480b4e27ffbef9174a01␟2979268708696318460:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiDropdownSelection${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: shows dropdown with custom template on selected text `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1238358838717941284$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__3 = goog.getMsg("Sample");
    I18N_2 = MSG_EXTERNAL_1238358838717941284$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟86bd4c895bf70b35a58305b7d107a2f1b67b141c␟1238358838717941284:Sample`;
}
const _c4 = ["heading", I18N_2];
function ExampleTuiDropdownSelectionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-dropdown-selection-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-dropdown-selection-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2266199980508326983$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__6 = goog.getMsg(" Select a text to {$startTagStrong}see a dropdown{$closeTagStrong}", { "startTagStrong": "\uFFFD#3\uFFFD", "closeTagStrong": "\uFFFD/#3\uFFFD" });
    I18N_5 = MSG_EXTERNAL_2266199980508326983$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟2a35c99c7df15ae5710562ef89d46774fd4550ea␟2266199980508326983: Select a text to ${"\uFFFD#3\uFFFD"}:START_TAG_STRONG:see a dropdown${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_STRONG:`;
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3745698783499999973$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___8 = goog.getMsg(" Here you can have any content {$startParagraph}You can select a text inside a dropdown and it will not close a dropdown{$closeParagraph}{$startTagButton} Button {$closeTagButton}", { "startParagraph": "\uFFFD#2\uFFFD", "closeParagraph": "\uFFFD/#2\uFFFD", "startTagButton": "\uFFFD#3\uFFFD", "closeTagButton": "\uFFFD/#3\uFFFD" });
    I18N_7 = MSG_EXTERNAL_3745698783499999973$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___8;
}
else {
    I18N_7 = $localize `:␟57dfffe78ad66f88475054d12e085cc38d437029␟3745698783499999973: Here you can have any content ${"\uFFFD#2\uFFFD"}:START_PARAGRAPH:You can select a text inside a dropdown and it will not close a dropdown${"\uFFFD/#2\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD#3\uFFFD"}:START_TAG_BUTTON: Button ${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_BUTTON:`;
}
function ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_741899295101860675$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___10 = goog.getMsg(" Content ");
    I18N_9 = MSG_EXTERNAL_741899295101860675$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___10;
}
else {
    I18N_9 = $localize `:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `;
}
function ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_9);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_905186926226823365$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___12 = goog.getMsg(" Align of dropdown (does not work together with {$startTagCode}limitWidth === 'fixed'{$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_11 = MSG_EXTERNAL_905186926226823365$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___12;
}
else {
    I18N_11 = $localize `:␟4e5cb2c74dfb392802e7e005883b9be2c781fd4a␟905186926226823365: Align of dropdown (does not work together with ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:limitWidth === 'fixed'${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8707958835080744644$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___14 = goog.getMsg(" Set a vertical direction of dropdown ");
    I18N_13 = MSG_EXTERNAL_8707958835080744644$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___14;
}
else {
    I18N_13 = $localize `:␟bfe17793e6e84334e10951e36a771ad1ac58ef05␟8707958835080744644: Set a vertical direction of dropdown `;
}
function ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_13);
} }
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7162739121343086934$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___16 = goog.getMsg(" Set dropdown host manually. For example, it will be a target if someone blurs dropdown with Tab/Shift+Tab. Element with a directive is used by default. ");
    I18N_15 = MSG_EXTERNAL_7162739121343086934$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___16;
}
else {
    I18N_15 = $localize `:␟1a7f7dfc794f8e7c30e09adad92f0525112970a5␟7162739121343086934: Set dropdown host manually. For example, it will be a target if someone blurs dropdown with Tab/Shift+Tab. Element with a directive is used by default. `;
}
function ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_15);
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1790691801673246110$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___18 = goog.getMsg(" Limit dropdown width ");
    I18N_17 = MSG_EXTERNAL_1790691801673246110$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___18;
}
else {
    I18N_17 = $localize `:␟da2ca1c17abdc5578724541ebd2b9c6d044d248e␟1790691801673246110: Limit dropdown width `;
}
function ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_17);
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5799599437390794628$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___20 = goog.getMsg(" Minimum height to calculate that dropdown fits to setted {$startTagCode}tuiDropdownDirection{$closeTagCode}", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_19 = MSG_EXTERNAL_5799599437390794628$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___20;
}
else {
    I18N_19 = $localize `:␟e848cc13a18e3647fb148f5d1c19ae5f888e1557␟5799599437390794628: Minimum height to calculate that dropdown fits to setted ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:tuiDropdownDirection${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE:`;
}
function ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_34813109637476177$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___22 = goog.getMsg(" Maximum height of dropdown ");
    I18N_21 = MSG_EXTERNAL_34813109637476177$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___22;
}
else {
    I18N_21 = $localize `:␟b16442aff8c447ade67e3d9a81f268796ea113fa␟34813109637476177: Maximum height of dropdown `;
}
function ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_21);
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1070006108743271766$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___24 = goog.getMsg("{$startTagStrong}Directive selector{$closeTagStrong} . Optional: you can also set a handler that gets {$startTagCode}Range{$closeTagCode} and returns show/close dropdown ", { "startTagStrong": "\uFFFD#1\uFFFD", "closeTagStrong": "\uFFFD/#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_23 = MSG_EXTERNAL_1070006108743271766$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___24;
}
else {
    I18N_23 = $localize `:␟5c15cd8f1ed7cb2bd17b60a6af84c911cd1699cc␟1070006108743271766:${"\uFFFD#1\uFFFD"}:START_TAG_STRONG:Directive selector${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_STRONG: . Optional: you can also set a handler that gets ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:Range${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: and returns show/close dropdown `;
}
function ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1537393581077902015$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___26 = goog.getMsg(" Position of dropdown near text selection ");
    I18N_25 = MSG_EXTERNAL_1537393581077902015$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___26;
}
else {
    I18N_25 = $localize `:␟7b2fe7a08c93ab872d983500d94a057f31327d32␟1537393581077902015: Position of dropdown near text selection `;
}
function ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_25);
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3925785757038900199$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___28 = goog.getMsg(" Dropdown is sided by host ");
    I18N_27 = MSG_EXTERNAL_3925785757038900199$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS___28;
}
else {
    I18N_27 = $localize `:␟8ce8395bd49b9bbee585ad617dad9e48eb6a8c49␟3925785757038900199: Dropdown is sided by host `;
}
function ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_27);
} }
function ExampleTuiDropdownSelectionComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](2, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_4_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_8_Template, 2, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDropdownSelectionComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.tuiDropdownAlign = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDropdownSelectionComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.tuiDropdownDirection = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDropdownSelectionComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.tuiDropdownLimitWidth = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_12_Template, 2, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDropdownSelectionComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.tuiDropdownMinHeight = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDropdownSelectionComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.tuiDropdownMaxHeight = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_14_Template, 3, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDropdownSelectionComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.position = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExampleTuiDropdownSelectionComponent_ng_template_2_ng_template_16_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiDropdownSelectionComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.tuiDropdownSided = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiDropdownSelectionPosition", ctx_r1.position)("tuiDropdownContent", _r3)("tuiDropdownMinHeight", ctx_r1.tuiDropdownMinHeight)("tuiDropdownMaxHeight", ctx_r1.tuiDropdownMaxHeight)("tuiDropdownAlign", ctx_r1.tuiDropdownAlign)("tuiDropdownDirection", ctx_r1.tuiDropdownDirection)("tuiDropdownLimitWidth", ctx_r1.tuiDropdownLimitWidth)("tuiDropdownSided", ctx_r1.tuiDropdownSided);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.alignVariants)("documentationPropertyValue", ctx_r1.tuiDropdownAlign);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.dropdownDirectionVariants)("documentationPropertyValue", ctx_r1.tuiDropdownDirection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.tuiDropdownLimitWidthVariants)("documentationPropertyValue", ctx_r1.tuiDropdownLimitWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.tuiDropdownMinHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.tuiDropdownMaxHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.positionVariants)("documentationPropertyValue", ctx_r1.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.tuiDropdownSided);
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1816878685679044442$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__30 = goog.getMsg(" Import {$startTagCode}TuiDropdownModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_29 = MSG_EXTERNAL_1816878685679044442$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__30;
}
else {
    I18N_29 = $localize `:␟8a62be1bbab6430a7d42c204d2b6d6ba8d65fffe␟1816878685679044442: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiDropdownModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__32 = goog.getMsg("Add to the template:");
    I18N_31 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_DIRECTIVES_DROPDOWN_SELECTION_DROPDOWN_SELECTION_COMPONENT_TS__32;
}
else {
    I18N_31 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiDropdownSelectionComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_31);
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
class ExampleTuiDropdownSelectionComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-selection/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-selection/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-selection/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-selection/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-selection/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-selection/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/directives/dropdown-selection/examples/2/index.less")),
        };
        this.positionVariants = [`selection`, `word`, `tag`];
        this.open = false;
        this.position = this.positionVariants[0];
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
    }
}
ExampleTuiDropdownSelectionComponent.ɵfac = function ExampleTuiDropdownSelectionComponent_Factory(t) { return new (t || ExampleTuiDropdownSelectionComponent)(); };
ExampleTuiDropdownSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiDropdownSelectionComponent, selectors: [["example-tui-dropdown-selection"]], decls: 4, vars: 0, consts: [["header", "DropdownSelection", "package", "KIT", "type", "directives"], ["pageTab", ""], ["id", "selection", 3, "content", 6, "heading"], ["id", "textarea", "heading", "textarea", 3, "content"], ["tuiDropdownSelection", "", 3, "tuiDropdownSelectionPosition", "tuiDropdownContent", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth", "tuiDropdownSided"], ["dropdownContent", ""], ["documentationPropertyName", "tuiDropdownContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "tuiDropdownAlign", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHorizontalDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownDirection", "documentationPropertyMode", "input", "documentationPropertyType", "TuiVerticalDirection | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownHost", "documentationPropertyMode", "input", "documentationPropertyType", "HTMLElement | null"], ["documentationPropertyName", "tuiDropdownLimitWidth", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDropdownWidthT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownMinHeight", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownMaxHeight", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownSelection", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<Range>"], ["documentationPropertyName", "tuiDropdownSelectionPosition", "documentationPropertyMode", "input", "documentationPropertyType", "'selection' | 'word' | 'tag'", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiDropdownSided", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [1, "dropdown"], ["tuiButton", "", "type", "button"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiDropdownSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiDropdownSelectionComponent_ng_template_1_Template, 8, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiDropdownSelectionComponent_ng_template_2_Template, 17, 19, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiDropdownSelectionComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_6__["TuiDropdownSelectionExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_7__["TuiDropdownSelectionExample2"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocDemoComponent"], _kit_directives_dropdown_selection_dropdown_selection_directive__WEBPACK_IMPORTED_MODULE_9__["TuiDropdownSelectionDirective"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__["TuiDocDocumentationPropertyConnectorDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_12__["TuiButtonComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocCodeComponent"]], styles: [".dropdown[_ngcontent-%COMP%] {\n  max-width: 20rem;\n  padding: 0.5rem 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9kcm9wZG93bi1zZWxlY3Rpb24vZHJvcGRvd24tc2VsZWN0aW9uLnN0eWxlLmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2RpcmVjdGl2ZXMvZHJvcGRvd24tc2VsZWN0aW9uL2Ryb3Bkb3duLXNlbGVjdGlvbi5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9kcm9wZG93bi1zZWxlY3Rpb24vZHJvcGRvd24tc2VsZWN0aW9uLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24ge1xuICAgIG1heC13aWR0aDogMjByZW07XG4gICAgcGFkZGluZzogMC41cmVtIDEuMjVyZW07XG59XG4iLCIuZHJvcGRvd24ge1xuICBtYXgtd2lkdGg6IDIwcmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMS4yNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiDropdownSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-dropdown-selection`,
                templateUrl: `./dropdown-selection.template.html`,
                styleUrls: [`./dropdown-selection.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/dropdown-selection/dropdown-selection.module.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/directives/dropdown-selection/dropdown-selection.module.ts ***!
  \********************************************************************************/
/*! exports provided: ExampleTuiDropdownSelectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiDropdownSelectionModule", function() { return ExampleTuiDropdownSelectionModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _dropdown_selection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropdown-selection.component */ "./src/modules/directives/dropdown-selection/dropdown-selection.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/directives/dropdown-selection/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/directives/dropdown-selection/examples/2/index.ts");













class ExampleTuiDropdownSelectionModule {
}
ExampleTuiDropdownSelectionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiDropdownSelectionModule });
ExampleTuiDropdownSelectionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiDropdownSelectionModule_Factory(t) { return new (t || ExampleTuiDropdownSelectionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDropdownSelectionModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiTextAreaModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiAvatarModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_dropdown_selection_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiDropdownSelectionComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiDropdownSelectionModule, { declarations: [_dropdown_selection_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiDropdownSelectionComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiDropdownSelectionExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiDropdownSelectionExample2"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDropdownSelectionModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiTextAreaModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiAvatarModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_dropdown_selection_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiDropdownSelectionComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiDropdownSelectionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiDropdownSelectionModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiTextAreaModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiAvatarModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiDataListModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_dropdown_selection_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiDropdownSelectionComponent"])),
                ],
                declarations: [
                    _dropdown_selection_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiDropdownSelectionComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiDropdownSelectionExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiDropdownSelectionExample2"],
                ],
                exports: [_dropdown_selection_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiDropdownSelectionComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/dropdown-selection/examples/1/index.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/directives/dropdown-selection/examples/1/index.ts ***!
  \***********************************************************************/
/*! exports provided: TuiDropdownSelectionExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDropdownSelectionExample1", function() { return TuiDropdownSelectionExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_directives_dropdown_selection_dropdown_selection_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/directives/dropdown-selection/dropdown-selection.directive */ "../kit/directives/dropdown-selection/dropdown-selection.directive.ts");





class TuiDropdownSelectionExample1 {
}
TuiDropdownSelectionExample1.ɵfac = function TuiDropdownSelectionExample1_Factory(t) { return new (t || TuiDropdownSelectionExample1)(); };
TuiDropdownSelectionExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiDropdownSelectionExample1, selectors: [["tui-dropdown-selection-example-1"]], decls: 3, vars: 0, consts: [["tuiDropdownSelection", "", "tuiDropdownSelectionPosition", "selection", "tuiDropdownContent", "\u00A0\u00A0Dropdown text\u00A0\u00A0"]], template: function TuiDropdownSelectionExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Dropdown will be shown text selection:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Select a text to see dropdown\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_kit_directives_dropdown_selection_dropdown_selection_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDropdownSelectionDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiDropdownSelectionExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-dropdown-selection-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/directives/dropdown-selection/examples/2/index.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/directives/dropdown-selection/examples/2/index.ts ***!
  \***********************************************************************/
/*! exports provided: TuiDropdownSelectionExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiDropdownSelectionExample2", function() { return TuiDropdownSelectionExample2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _file_loader_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! !file-loader!../../../../../assets/images/avatar.jpg */ "../../node_modules/file-loader/dist/cjs.js!./src/assets/images/avatar.jpg");
/* harmony import */ var _kit_components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/text-area/text-area.component */ "../kit/components/text-area/text-area.component.ts");
/* harmony import */ var _kit_components_text_area_text_area_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/text-area/text-area.directive */ "../kit/components/text-area/text-area.directive.ts");
/* harmony import */ var _kit_directives_dropdown_selection_dropdown_selection_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/directives/dropdown-selection/dropdown-selection.directive */ "../kit/directives/dropdown-selection/dropdown-selection.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.component */ "../core/components/data-list/data-list.component.ts");
/* harmony import */ var _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/option/option.component */ "../core/components/data-list/option/option.component.ts");
/* harmony import */ var _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../kit/components/avatar/avatar.component */ "../kit/components/avatar/avatar.component.ts");

















function TuiDropdownSelectionExample2_ng_template_3_tui_data_list_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TuiDropdownSelectionExample2_ng_template_3_tui_data_list_0_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return ctx_r6.onClick(item_r5.login, _r0.nativeFocusableElement); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "tui-avatar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rounded", true)("avatarUrl", item_r5.avatar)("text", item_r5.name);
} }
function TuiDropdownSelectionExample2_ng_template_3_tui_data_list_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-data-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.escape", function TuiDropdownSelectionExample2_ng_template_3_tui_data_list_0_Template_tui_data_list_keydown_escape_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return _r0.nativeFocusableElement.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiDropdownSelectionExample2_ng_template_3_tui_data_list_0_button_1_Template, 3, 4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.filterItems(_r0.nativeFocusableElement));
} }
function TuiDropdownSelectionExample2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiDropdownSelectionExample2_ng_template_3_tui_data_list_0_Template, 2, 1, "tui-data-list", 3);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r0.nativeFocusableElement);
} }
class TuiDropdownSelectionExample2 {
    constructor() {
        this.options = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["EMPTY_QUERY"];
        this.value = `Type @ to see a dropdown`;
        this.items = [
            {
                name: `Alexander Inkin`,
                avatar: _file_loader_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_7__["default"],
                login: `a.inkin`,
            },
            {
                name: `Roman Sedov`,
                avatar: ``,
                login: `r.sedov`,
            },
        ];
        this.predicate = range => Object(_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["getWordRange"])(range).toString().startsWith(`@`);
    }
    get focused() {
        return !!this.options.length || null;
    }
    onArrow(event, which) {
        const item = this.options[which];
        if (!item) {
            return;
        }
        event.preventDefault();
        Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["setNativeFocused"])(item.nativeElement);
    }
    filterItems(textarea) {
        const search = this.getCurrentSearch(textarea).replace(`@`, ``);
        return this.getFilteredItems(this.items, search);
    }
    onClick(login, textarea) {
        const search = this.getCurrentSearch(textarea);
        const value = this.value.replace(search, login);
        const caret = value.indexOf(login) + login.length;
        this.value = value;
        Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["setNativeFocused"])(textarea);
        textarea.value = value;
        textarea.setSelectionRange(caret, caret);
    }
    getFilteredItems(items, search) {
        return items.filter(({ name, login }) => login.startsWith(search) || name.startsWith(search));
    }
    getCurrentSearch(textarea) {
        return textarea.value.slice(textarea.value.indexOf(`@`), textarea.selectionStart);
    }
}
TuiDropdownSelectionExample2.ɵfac = function TuiDropdownSelectionExample2_Factory(t) { return new (t || TuiDropdownSelectionExample2)(); };
TuiDropdownSelectionExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiDropdownSelectionExample2, selectors: [["tui-dropdown-selection-example-2"]], viewQuery: function TuiDropdownSelectionExample2_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiOptionComponent"], true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.options = _t);
    } }, decls: 5, vars: 4, consts: [["tuiDropdownSelectionPosition", "word", 3, "tuiDropdownContent", "tuiDropdownSelection", "pseudoFocused", "ngModel", "ngModelChange", "keydown.arrowUp", "keydown.arrowDown"], ["textarea", ""], ["dropdown", ""], ["class", "menu", 3, "keydown.escape", 4, "ngIf"], [1, "menu", 3, "keydown.escape"], ["tuiOption", "", 3, "click", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "click"], ["size", "s", 3, "rounded", "avatarUrl", "text"]], template: function TuiDropdownSelectionExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-text-area", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TuiDropdownSelectionExample2_Template_tui_text_area_ngModelChange_0_listener($event) { return ctx.value = $event; })("keydown.arrowUp", function TuiDropdownSelectionExample2_Template_tui_text_area_keydown_arrowUp_0_listener($event) { return ctx.onArrow($event, "last"); })("keydown.arrowDown", function TuiDropdownSelectionExample2_Template_tui_text_area_keydown_arrowDown_0_listener($event) { return ctx.onArrow($event, "first"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Type a message\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TuiDropdownSelectionExample2_ng_template_3_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tuiDropdownContent", _r1)("tuiDropdownSelection", ctx.predicate)("pseudoFocused", ctx.focused)("ngModel", ctx.value);
    } }, directives: [_kit_components_text_area_text_area_component__WEBPACK_IMPORTED_MODULE_8__["TuiTextAreaComponent"], _kit_components_text_area_text_area_directive__WEBPACK_IMPORTED_MODULE_9__["TuiTextAreaDirective"], _kit_directives_dropdown_selection_dropdown_selection_directive__WEBPACK_IMPORTED_MODULE_10__["TuiDropdownSelectionDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_13__["TuiDataListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_14__["TuiOptionComponent"], _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_15__["TuiAvatarComponent"]], styles: [".menu[_ngcontent-%COMP%] {\n  width: 12.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvZGlyZWN0aXZlcy9kcm9wZG93bi1zZWxlY3Rpb24vZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9kaXJlY3RpdmVzL2Ryb3Bkb3duLXNlbGVjdGlvbi9leGFtcGxlcy8yL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9kaXJlY3RpdmVzL2Ryb3Bkb3duLXNlbGVjdGlvbi9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudSB7XG4gICAgd2lkdGg6IDEyLjVyZW07XG59XG4iLCIubWVudSB7XG4gIHdpZHRoOiAxMi41cmVtO1xufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiPure"]
], TuiDropdownSelectionExample2.prototype, "getFilteredItems", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiDropdownSelectionExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-dropdown-selection-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiOptionComponent"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]
        }], getFilteredItems: [] }); })();


/***/ })

}]);
//# sourceMappingURL=directives-dropdown-selection-dropdown-selection-module.js.map