(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-checkbox-labeled-checkbox-labeled-module"],{

/***/ "./src/modules/components/checkbox-labeled/checkbox-labeled.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/modules/components/checkbox-labeled/checkbox-labeled.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ExampleTuiCheckboxLabeledComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCheckboxLabeledComponent", function() { return ExampleTuiCheckboxLabeledComponent; });
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
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/checkbox-labeled/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/checkbox-labeled/examples/2/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _kit_components_checkbox_labeled_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../kit/components/checkbox-labeled/checkbox-labeled.component */ "../kit/components/checkbox-labeled/checkbox-labeled.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");




















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6739621284929473587$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}CheckboxLabeled{$closeTagCode} is a {$startTagCode}Checkbox{$closeTagCode} with a label. Click on label changes checkbox state. If you do not need a label, see {$startLink}{$startTagCode}Checkbox{$closeTagCode}{$closeLink} . ", { "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]", "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]", "startLink": "\uFFFD#4\uFFFD", "closeLink": "\uFFFD/#4\uFFFD" });
    I18N_0 = MSG_EXTERNAL_6739621284929473587$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟8fa2bfb8668e786db8828fdb9a8b5f038d5648ef␟6739621284929473587:${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:CheckboxLabeled${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: is a ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:Checkbox${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: with a label. Click on label changes checkbox state. If you do not need a label, see ${"\uFFFD#4\uFFFD"}:START_LINK:${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:Checkbox${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#4\uFFFD"}:CLOSE_LINK: . `;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__3 = goog.getMsg("Basic");
    I18N_2 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9065652012369821232$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__6 = goog.getMsg("Big size");
    I18N_5 = MSG_EXTERNAL_9065652012369821232$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟5091f6acf0fbf0b72c4958189d20c85b8d7f42f0␟9065652012369821232:Big size`;
}
const _c7 = ["heading", I18N_5];
function ExampleTuiCheckboxLabeledComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-checkbox-labeled-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](10, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-checkbox-labeled-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7989365396689945569$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___9 = goog.getMsg(" An option ");
    I18N_8 = MSG_EXTERNAL_7989365396689945569$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:␟e1b323331f830508e98ab6e1917091cd3bfa6a8f␟7989365396689945569: An option `;
}
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_607557139639752863$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___11 = goog.getMsg(" An alternative one ");
    I18N_10 = MSG_EXTERNAL_607557139639752863$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___11;
}
else {
    I18N_10 = $localize `:␟b681053bdf722eff22b48be89cf208cf1c73b769␟607557139639752863: An alternative one `;
}
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3232115946036118602$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___13 = goog.getMsg(" Other ");
    I18N_12 = MSG_EXTERNAL_3232115946036118602$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___13;
}
else {
    I18N_12 = $localize `:␟55f4ecf19b8ccd0e8c44ae9fba34ebd0b55d31fc␟3232115946036118602: Other `;
}
function ExampleTuiCheckboxLabeledComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-checkbox-labeled", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-checkbox-labeled", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-checkbox-labeled", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("focusable", ctx_r3.focusable)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed)("readOnly", ctx_r3.readOnly)("size", ctx_r3.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("focusable", ctx_r3.focusable)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed)("readOnly", ctx_r3.readOnly)("size", ctx_r3.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("focusable", ctx_r3.focusable)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed)("readOnly", ctx_r3.readOnly)("size", ctx_r3.size);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___15 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_14 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiCheckboxLabeledComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___17 = goog.getMsg(" Size ");
    I18N_16 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiCheckboxLabeledComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_16);
} }
function ExampleTuiCheckboxLabeledComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiCheckboxLabeledComponent_ng_template_2_ng_template_1_Template, 7, 22, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiCheckboxLabeledComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCheckboxLabeledComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiCheckboxLabeledComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCheckboxLabeledComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.size = $event; });
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
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5489967928434473848$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__19 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiCheckboxLabeledModule{$closeTagCode} in the same module where you want to use our component: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_18 = MSG_EXTERNAL_5489967928434473848$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__19;
}
else {
    I18N_18 = $localize `:␟150958a91ba21b7235b4b3547f1dab1d3a9da2ac␟5489967928434473848: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCheckboxLabeledModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
}
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__21 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", { "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]", "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]" });
    I18N_20 = MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__21;
}
else {
    I18N_20 = $localize `:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
}
I18N_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_20);
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__23 = goog.getMsg("Add to the template:");
    I18N_22 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__23;
}
else {
    I18N_22 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiCheckboxLabeledComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](8, I18N_20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-doc-code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, I18N_22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-doc-code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiCheckboxLabeledComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_3__["AbstractExampleTuiControl"] {
    constructor() {
        super();
        this.exampleForm = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-declare-form-md */ "!!raw-loader!-examples-import-declare-form-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/declare-form.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-labeled/examples/import/declare-form.md"));
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-labeled/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-labeled/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-labeled/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-labeled/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-labeled/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-labeled/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-labeled/examples/2/index.html")),
        };
        this.sizeVariants = [`m`, `l`];
        this.size = this.sizeVariants[0];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            testValue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
        });
        this.control.get(`testValue1`).valueChanges.subscribe(value => {
            if (value) {
                this.control.get(`testValue1`).setValue(false);
            }
        });
    }
}
ExampleTuiCheckboxLabeledComponent.ɵfac = function ExampleTuiCheckboxLabeledComponent_Factory(t) { return new (t || ExampleTuiCheckboxLabeledComponent)(); };
ExampleTuiCheckboxLabeledComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiCheckboxLabeledComponent, selectors: [["example-tui-checkbox-labeled"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiCheckboxLabeledComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "CheckboxLabeled", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], ["tuiLink", "", "routerLink", "/components/checkbox"], ["id", "base", 3, "content", 6, "heading"], ["id", "large", 3, "content", 6, "heading"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formGroup"], ["formControlName", "testValue1", 3, "focusable", "pseudoInvalid", "pseudoFocused", "pseudoHovered", "pseudoPressed", "readOnly", "size"], ["formControlName", "testValue2", 1, "tui-space_top-2", 3, "focusable", "pseudoInvalid", "pseudoFocused", "pseudoHovered", "pseudoPressed", "readOnly", "size"], ["formControlName", "testValue3", 1, "tui-space_top-2", 3, "focusable", "pseudoInvalid", "pseudoFocused", "pseudoHovered", "pseudoPressed", "readOnly", "size"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiCheckboxLabeledComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiCheckboxLabeledComponent_ng_template_1_Template, 12, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiCheckboxLabeledComponent_ng_template_2_Template, 6, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiCheckboxLabeledComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_10__["TuiCheckboxLabeledExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_11__["TuiCheckboxLabeledExample2"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_15__["InheritedDocumentationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_checkbox_labeled_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_16__["TuiCheckboxLabeledComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_17__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiCheckboxLabeledComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-checkbox-labeled`,
                templateUrl: `./checkbox-labeled.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiCheckboxLabeledComponent),
                    },
                ],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/modules/components/checkbox-labeled/checkbox-labeled.module.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/components/checkbox-labeled/checkbox-labeled.module.ts ***!
  \****************************************************************************/
/*! exports provided: ExampleTuiCheckboxLabeledModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCheckboxLabeledModule", function() { return ExampleTuiCheckboxLabeledModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkbox-labeled.component */ "./src/modules/components/checkbox-labeled/checkbox-labeled.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/checkbox-labeled/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/checkbox-labeled/examples/2/index.ts");














class ExampleTuiCheckboxLabeledModule {
}
ExampleTuiCheckboxLabeledModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiCheckboxLabeledModule });
ExampleTuiCheckboxLabeledModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiCheckboxLabeledModule_Factory(t) { return new (t || ExampleTuiCheckboxLabeledModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiCheckboxLabeledModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxLabeledComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiCheckboxLabeledModule, { declarations: [_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxLabeledComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_10__["TuiCheckboxLabeledExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_11__["TuiCheckboxLabeledExample2"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiCheckboxLabeledModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxLabeledComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiCheckboxLabeledModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiCheckboxLabeledModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxLabeledComponent"])),
                ],
                declarations: [
                    _checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxLabeledComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_10__["TuiCheckboxLabeledExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_11__["TuiCheckboxLabeledExample2"],
                ],
                exports: [_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxLabeledComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/checkbox-labeled/examples/1/index.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/components/checkbox-labeled/examples/1/index.ts ***!
  \*********************************************************************/
/*! exports provided: TuiCheckboxLabeledExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCheckboxLabeledExample1", function() { return TuiCheckboxLabeledExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_checkbox_labeled_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/checkbox-labeled/checkbox-labeled.component */ "../kit/components/checkbox-labeled/checkbox-labeled.component.ts");







class TuiCheckboxLabeledExample1 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            testValue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
        });
    }
}
TuiCheckboxLabeledExample1.ɵfac = function TuiCheckboxLabeledExample1_Factory(t) { return new (t || TuiCheckboxLabeledExample1)(); };
TuiCheckboxLabeledExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCheckboxLabeledExample1, selectors: [["tui-checkbox-labeled-example-1"]], decls: 13, vars: 1, consts: [[3, "formGroup"], ["formControlName", "testValue1"], [1, "example"], ["formControlName", "testValue2", 1, "tui-space_top-3"], ["formControlName", "testValue3", 1, "tui-space_top-3"]], template: function TuiCheckboxLabeledExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-checkbox-labeled", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Taiga UI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Angular UI Kit for awesome people");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-checkbox-labeled", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ng-polymorpheus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A tiny library for polymorphic templates in Angular.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-checkbox-labeled", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " ng-dompurify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Inclusive Angular API for DOMPurify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_checkbox_labeled_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_4__["TuiCheckboxLabeledComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".example[_ngcontent-%COMP%] {\n  color: var(--tui-text-03);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jaGVja2JveC1sYWJlbGVkL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jaGVja2JveC1sYWJlbGVkL2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2NoZWNrYm94LWxhYmVsZWQvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUge1xuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG59XG4iLCIuZXhhbXBsZSB7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCheckboxLabeledExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-checkbox-labeled-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/checkbox-labeled/examples/2/index.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/components/checkbox-labeled/examples/2/index.ts ***!
  \*********************************************************************/
/*! exports provided: TuiCheckboxLabeledExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCheckboxLabeledExample2", function() { return TuiCheckboxLabeledExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_checkbox_labeled_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/checkbox-labeled/checkbox-labeled.component */ "../kit/components/checkbox-labeled/checkbox-labeled.component.ts");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_104365820191270829$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_EXAMPLES_2_INDEX_TS_1 = goog.getMsg(" An option ");
    I18N_0 = MSG_EXTERNAL_104365820191270829$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_EXAMPLES_2_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟69efbcb41a4551f0ad6927cc83ab53c124c6e694␟104365820191270829: An option `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5628301487851595098$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_EXAMPLES_2_INDEX_TS_3 = goog.getMsg(" An alternative one ");
    I18N_2 = MSG_EXTERNAL_5628301487851595098$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_EXAMPLES_2_INDEX_TS_3;
}
else {
    I18N_2 = $localize `:␟cb5da4d5464b6527737746f8cf768dfb0118a7bf␟5628301487851595098: An alternative one `;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_975551376150052152$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_EXAMPLES_2_INDEX_TS_5 = goog.getMsg(" Other ");
    I18N_4 = MSG_EXTERNAL_975551376150052152$$SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_EXAMPLES_2_INDEX_TS_5;
}
else {
    I18N_4 = $localize `:␟a27c8f9ab4f8da80c60be3dce3cc3630310e6b4c␟975551376150052152: Other `;
}
class TuiCheckboxLabeledExample2 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            testValue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
        });
    }
}
TuiCheckboxLabeledExample2.ɵfac = function TuiCheckboxLabeledExample2_Factory(t) { return new (t || TuiCheckboxLabeledExample2)(); };
TuiCheckboxLabeledExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCheckboxLabeledExample2, selectors: [["tui-checkbox-labeled-example-2"]], decls: 7, vars: 1, consts: [[3, "formGroup"], ["formControlName", "testValue1", "size", "l"], ["formControlName", "testValue2", "size", "l", 1, "tui-space_top-5"], ["formControlName", "testValue3", "size", "l", 1, "tui-space_top-5"]], template: function TuiCheckboxLabeledExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-checkbox-labeled", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-checkbox-labeled", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-checkbox-labeled", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_checkbox_labeled_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_4__["TuiCheckboxLabeledComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCheckboxLabeledExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-checkbox-labeled-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-checkbox-labeled-checkbox-labeled-module.js.map