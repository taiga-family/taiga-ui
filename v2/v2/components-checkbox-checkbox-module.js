(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-checkbox-checkbox-module"],{

/***/ "./src/modules/components/checkbox/checkbox.component.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/checkbox/checkbox.component.ts ***!
  \***************************************************************/
/*! exports provided: ExampleTuiCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCheckboxComponent", function() { return ExampleTuiCheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _abstract_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract/control */ "./src/modules/components/abstract/control.ts");
/* harmony import */ var _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/checkbox/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/checkbox/examples/2/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _kit_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../kit/components/checkbox/checkbox.component */ "../kit/components/checkbox/checkbox.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");




















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6982607201143515774$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__1 = goog.getMsg(" Checkbox without a label. For {$startTagCode}indeterminate{$closeTagCode} state, set {$startTagCode}null{$closeTagCode} as value. If you need a labeled checkbox, see {$startLink}{$startTagCode}CheckboxLabeled{$closeTagCode}{$closeLink} . If you need a checkbox inside a button, see {$startLink_1}{$startTagCode}CheckboxBlock{$closeTagCode}{$closeLink} . ", { "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]", "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]", "startLink": "\uFFFD#4\uFFFD", "closeLink": "[\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]", "startLink_1": "\uFFFD#6\uFFFD" });
    I18N_0 = MSG_EXTERNAL_6982607201143515774$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟50ef91028a4e8c7492ab70d6ad1f074f666f2b51␟6982607201143515774: Checkbox without a label. For ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:indeterminate${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE: state, set ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:null${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE: as value. If you need a labeled checkbox, see ${"\uFFFD#4\uFFFD"}:START_LINK:${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:CheckboxLabeled${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_LINK: . If you need a checkbox inside a button, see ${"\uFFFD#6\uFFFD"}:START_LINK_1:${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:CheckboxBlock${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_LINK: . `;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__3 = goog.getMsg("Basic");
    I18N_2 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9065652012369821232$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__6 = goog.getMsg("Big size");
    I18N_5 = MSG_EXTERNAL_9065652012369821232$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟5091f6acf0fbf0b72c4958189d20c85b8d7f42f0␟9065652012369821232:Big size`;
}
const _c7 = ["heading", I18N_5];
function ExampleTuiCheckboxComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-checkbox-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](12, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-checkbox-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
function ExampleTuiCheckboxComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-checkbox", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r3.readOnly)("focusable", ctx_r3.focusable)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed)("size", ctx_r3.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r3.readOnly)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed)("size", ctx_r3.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", ctx_r3.readOnly)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed)("size", ctx_r3.size);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS___9 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_8 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiCheckboxComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS___11 = goog.getMsg(" Size ");
    I18N_10 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS___11;
}
else {
    I18N_10 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiCheckboxComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_10);
} }
function ExampleTuiCheckboxComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiCheckboxComponent_ng_template_2_ng_template_1_Template, 4, 20, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiCheckboxComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiCheckboxComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "inherited-documentation");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5341688968123749469$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__13 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiCheckboxModule{$closeTagCode} in the same module where you want to use our component: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_12 = MSG_EXTERNAL_5341688968123749469$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__13;
}
else {
    I18N_12 = $localize `:␟97df8e00c6ae0abac63f742146146bd9145927e3␟5341688968123749469: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCheckboxModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
}
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8938389394037259502$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__15 = goog.getMsg(" Optionally use the {$startTagCode}TUI_CHECKBOX_OPTIONS{$closeTagCode} injection token to override the default options for the component. ", { "startTagCode": "\uFFFD#9\uFFFD", "closeTagCode": "\uFFFD/#9\uFFFD" });
    I18N_14 = MSG_EXTERNAL_8938389394037259502$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟410936608524ecabcc7a9de975eb34bffbc61acd␟8938389394037259502: Optionally use the ${"\uFFFD#9\uFFFD"}:START_TAG_CODE:TUI_CHECKBOX_OPTIONS${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;
}
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__17 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", { "startTagCode": "[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]", "closeTagCode": "[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]" });
    I18N_16 = MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__17;
}
else {
    I18N_16 = $localize `:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
}
I18N_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_16);
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__19 = goog.getMsg("Add to the template:");
    I18N_18 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__19;
}
else {
    I18N_18 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiCheckboxComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](8, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-doc-code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](13, I18N_16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-doc-code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](19, I18N_18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "tui-doc-code", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiCheckboxComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_3__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this.exampleForm = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-declare-form-md */ "!!raw-loader!-examples-import-declare-form-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/declare-form.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox/examples/import/declare-form.md"));
        this.exampleOptions = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-define-options-md */ "!!raw-loader!-examples-import-define-options-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/define-options.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox/examples/import/define-options.md"));
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox/examples/2/index.html")),
        };
        this.sizeVariants = [`m`, `l`];
        this.size = this.sizeVariants[0];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            testValue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
        });
    }
}
ExampleTuiCheckboxComponent.ɵfac = function ExampleTuiCheckboxComponent_Factory(t) { return ɵExampleTuiCheckboxComponent_BaseFactory(t || ExampleTuiCheckboxComponent); };
ExampleTuiCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiCheckboxComponent, selectors: [["example-tui-checkbox"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiCheckboxComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "Checkbox", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], ["tuiLink", "", "routerLink", "/components/checkbox-labeled"], ["tuiLink", "", "routerLink", "/components/checkbox-block"], ["id", "base", 3, "content", 6, "heading"], ["id", "large", 3, "content", 6, "heading"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formGroup"], ["formControlName", "testValue1", 1, "tui-space_bottom-3", 3, "readOnly", "focusable", "pseudoInvalid", "pseudoFocused", "pseudoHovered", "pseudoPressed", "size"], ["formControlName", "testValue2", 1, "tui-space_bottom-3", 3, "readOnly", "pseudoInvalid", "pseudoFocused", "pseudoHovered", "pseudoPressed", "size"], ["formControlName", "testValue3", 1, "tui-space_bottom-3", 3, "readOnly", "pseudoInvalid", "pseudoFocused", "pseudoHovered", "pseudoPressed", "size"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiCheckboxComponent_ng_template_1_Template, 14, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiCheckboxComponent_ng_template_2_Template, 6, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiCheckboxComponent_ng_template_3_Template, 21, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_10__["TuiCheckboxExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_11__["TuiCheckboxExample2"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_15__["InheritedDocumentationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_16__["TuiCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_17__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
const ɵExampleTuiCheckboxComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiCheckboxComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-checkbox`,
                templateUrl: `./checkbox.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiCheckboxComponent),
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/checkbox/checkbox.module.ts":
/*!************************************************************!*\
  !*** ./src/modules/components/checkbox/checkbox.module.ts ***!
  \************************************************************/
/*! exports provided: ExampleTuiCheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCheckboxModule", function() { return ExampleTuiCheckboxModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _checkbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkbox.component */ "./src/modules/components/checkbox/checkbox.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/checkbox/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/checkbox/examples/2/index.ts");














class ExampleTuiCheckboxModule {
}
ExampleTuiCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiCheckboxModule });
ExampleTuiCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiCheckboxModule_Factory(t) { return new (t || ExampleTuiCheckboxModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiCheckboxModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiCheckboxModule, { declarations: [_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_10__["TuiCheckboxExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_11__["TuiCheckboxExample2"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiCheckboxModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiCheckboxModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxComponent"])),
                ],
                declarations: [_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_10__["TuiCheckboxExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_11__["TuiCheckboxExample2"]],
                exports: [_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/checkbox/examples/1/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/components/checkbox/examples/1/index.ts ***!
  \*************************************************************/
/*! exports provided: TuiCheckboxExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCheckboxExample1", function() { return TuiCheckboxExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/checkbox/checkbox.component */ "../kit/components/checkbox/checkbox.component.ts");







class TuiCheckboxExample1 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            testValue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: true, disabled: true }),
            testValue4: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: false, disabled: true }),
        });
    }
}
TuiCheckboxExample1.ɵfac = function TuiCheckboxExample1_Factory(t) { return new (t || TuiCheckboxExample1)(); };
TuiCheckboxExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCheckboxExample1, selectors: [["tui-checkbox-example-1"]], decls: 5, vars: 1, consts: [[3, "formGroup"], ["formControlName", "testValue1", 1, "tui-space_bottom-3"], ["formControlName", "testValue2", 1, "tui-space_bottom-3"], ["formControlName", "testValue3", 1, "tui-space_bottom-3"], ["formControlName", "testValue4"]], template: function TuiCheckboxExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-checkbox", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["TuiCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCheckboxExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-checkbox-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/checkbox/examples/2/index.ts":
/*!*************************************************************!*\
  !*** ./src/modules/components/checkbox/examples/2/index.ts ***!
  \*************************************************************/
/*! exports provided: TuiCheckboxExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCheckboxExample2", function() { return TuiCheckboxExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/checkbox/checkbox.component */ "../kit/components/checkbox/checkbox.component.ts");







class TuiCheckboxExample2 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            testValue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: true, disabled: true }),
            testValue4: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: false, disabled: true }),
        });
    }
}
TuiCheckboxExample2.ɵfac = function TuiCheckboxExample2_Factory(t) { return new (t || TuiCheckboxExample2)(); };
TuiCheckboxExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCheckboxExample2, selectors: [["tui-checkbox-example-2"]], decls: 5, vars: 1, consts: [[3, "formGroup"], ["formControlName", "testValue1", "size", "l", 1, "tui-space_bottom-3"], ["formControlName", "testValue2", "size", "l", 1, "tui-space_bottom-3"], ["formControlName", "testValue3", "size", "l", 1, "tui-space_bottom-3"], ["formControlName", "testValue4", "size", "l"]], template: function TuiCheckboxExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-checkbox", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__["TuiCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCheckboxExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-checkbox-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-checkbox-checkbox-module.js.map