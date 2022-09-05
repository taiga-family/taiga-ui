(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-checkbox-block-checkbox-block-module"],{

/***/ "./src/modules/components/checkbox-block/checkbox-block.component.ts":
/*!***************************************************************************!*\
  !*** ./src/modules/components/checkbox-block/checkbox-block.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExampleTuiCheckboxBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCheckboxBlockComponent", function() { return ExampleTuiCheckboxBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _abstract_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract/control */ "./src/modules/components/abstract/control.ts");
/* harmony import */ var _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/checkbox-block/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/checkbox-block/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/checkbox-block/examples/3/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _kit_components_checkbox_block_checkbox_block_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../kit/components/checkbox-block/checkbox-block.component */ "../kit/components/checkbox-block/checkbox-block.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");



















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8151964794397944680$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}CheckboxBlock{$closeTagCode} can be used in forms where selected option does not change or update content (e.g. does not work like a filter). It may be grouped in horizontal row only except the mobile view ", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_8151964794397944680$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟c0b54e5f9e394eb155a9bff3cb9d06065b40348f␟8151964794397944680:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:CheckboxBlock${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: can be used in forms where selected option does not change or update content (e.g. does not work like a filter). It may be grouped in horizontal row only except the mobile view `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2165905371258601036$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__3 = goog.getMsg("Sizes");
    I18N_2 = MSG_EXTERNAL_2165905371258601036$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5944812089887969249$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__6 = goog.getMsg("Groups");
    I18N_5 = MSG_EXTERNAL_5944812089887969249$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟c22ba03540aa3217da059f45e7eab138b51a96e2␟5944812089887969249:Groups`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7590013429208346303$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__9 = goog.getMsg("Custom");
    I18N_8 = MSG_EXTERNAL_7590013429208346303$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`;
}
const _c10 = ["heading", I18N_8];
function ExampleTuiCheckboxBlockComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-checkbox-block-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-checkbox-block-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](10, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-checkbox-block-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2160149280582950455$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___12 = goog.getMsg(" One option ");
    I18N_11 = MSG_EXTERNAL_2160149280582950455$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___12;
}
else {
    I18N_11 = $localize `:␟899f132fc7b4e114b595130aa5609118488bf044␟2160149280582950455: One option `;
}
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_607557139639752863$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___14 = goog.getMsg(" An alternative one ");
    I18N_13 = MSG_EXTERNAL_607557139639752863$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___14;
}
else {
    I18N_13 = $localize `:␟b681053bdf722eff22b48be89cf208cf1c73b769␟607557139639752863: An alternative one `;
}
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3232115946036118602$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___16 = goog.getMsg(" Other ");
    I18N_15 = MSG_EXTERNAL_3232115946036118602$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___16;
}
else {
    I18N_15 = $localize `:␟55f4ecf19b8ccd0e8c44ae9fba34ebd0b55d31fc␟3232115946036118602: Other `;
}
function ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-checkbox-block", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-checkbox-block", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-checkbox-block", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contentAlign", ctx_r3.contentAlign)("focusable", ctx_r3.focusable)("hideCheckbox", ctx_r3.hideCheckbox)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed)("readOnly", ctx_r3.readOnly)("size", ctx_r3.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contentAlign", ctx_r3.contentAlign)("focusable", ctx_r3.focusable)("hideCheckbox", ctx_r3.hideCheckbox)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed)("readOnly", ctx_r3.readOnly)("size", ctx_r3.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contentAlign", ctx_r3.contentAlign)("focusable", ctx_r3.focusable)("hideCheckbox", ctx_r3.hideCheckbox)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoPressed", ctx_r3.pseudoPressed)("readOnly", ctx_r3.readOnly)("size", ctx_r3.size);
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___18 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_17 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___18;
}
else {
    I18N_17 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3874072842734445757$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___20 = goog.getMsg(" Left/right content align ");
    I18N_19 = MSG_EXTERNAL_3874072842734445757$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___20;
}
else {
    I18N_19 = $localize `:␟545a85806d824acfb35b864c2aa0fb29904b5647␟3874072842734445757: Left/right content align `;
}
function ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_19);
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6667817727813458346$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___22 = goog.getMsg(" Hide checkbox ");
    I18N_21 = MSG_EXTERNAL_6667817727813458346$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___22;
}
else {
    I18N_21 = $localize `:␟e6c0f22343f716a11de58de0940cf91697f597cc␟6667817727813458346: Hide checkbox `;
}
function ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_21);
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___24 = goog.getMsg(" Size ");
    I18N_23 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS___24;
}
else {
    I18N_23 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_23);
} }
function ExampleTuiCheckboxBlockComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_1_Template, 7, 28, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCheckboxBlockComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCheckboxBlockComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.contentAlign = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCheckboxBlockComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.hideCheckbox = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiCheckboxBlockComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCheckboxBlockComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "inherited-documentation");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.contentAlignVariants)("documentationPropertyValue", ctx_r1.contentAlign);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.hideCheckbox);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4974311934142131806$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__26 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiCheckboxBlockModule{$closeTagCode} in the same module where you want to use our component: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_25 = MSG_EXTERNAL_4974311934142131806$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__26;
}
else {
    I18N_25 = $localize `:␟e8cf7539331e4f5abfa343179f44aa0cd8456d0d␟4974311934142131806: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCheckboxBlockModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
}
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__28 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", { "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]", "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]" });
    I18N_27 = MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__28;
}
else {
    I18N_27 = $localize `:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
}
I18N_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_27);
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__30 = goog.getMsg("Add to the template:");
    I18N_29 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_CHECKBOX_BLOCK_COMPONENT_TS__30;
}
else {
    I18N_29 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiCheckboxBlockComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](8, I18N_27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-doc-code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, I18N_29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-doc-code", 17);
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
class ExampleTuiCheckboxBlockComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_3__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this.exampleForm = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-declare-form-md */ "!!raw-loader!-examples-import-declare-form-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/declare-form.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-block/examples/import/declare-form.md"));
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-block/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-block/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-block/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-block/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-block/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-block/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-block/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-block/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/checkbox-block/examples/3/index.less")),
        };
        this.contentAlignVariants = [`left`, `right`];
        this.contentAlign = this.contentAlignVariants[1];
        this.hideCheckbox = false;
        this.sizeVariants = [`s`, `m`, `l`];
        this.size = this.sizeVariants[2];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            testValue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](true),
        });
    }
    get disabled() {
        return this.control.disabled;
    }
    set disabled(value) {
        if (value) {
            this.control.disable();
        }
        else {
            this.control.enable();
        }
    }
}
ExampleTuiCheckboxBlockComponent.ɵfac = function ExampleTuiCheckboxBlockComponent_Factory(t) { return ɵExampleTuiCheckboxBlockComponent_BaseFactory(t || ExampleTuiCheckboxBlockComponent); };
ExampleTuiCheckboxBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiCheckboxBlockComponent, selectors: [["example-tui-checkbox-block"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiCheckboxBlockComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "CheckboxBlock", "package", "KIT", "type", "components"], ["pageTab", ""], ["id", "sizes", 3, "content", 6, "heading"], ["id", "groups", 3, "content", 6, "heading"], ["id", "custom", 3, "content", 6, "heading"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "contentAlign", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHorizontalDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hideCheckbox", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formGroup"], ["formControlName", "testValue1", 1, "tui-space_all-1", 3, "contentAlign", "focusable", "hideCheckbox", "pseudoInvalid", "pseudoFocused", "pseudoHovered", "pseudoPressed", "readOnly", "size"], ["formControlName", "testValue2", 1, "tui-space_all-1", 3, "contentAlign", "focusable", "hideCheckbox", "pseudoInvalid", "pseudoFocused", "pseudoHovered", "pseudoPressed", "readOnly", "size"], ["formControlName", "testValue3", 1, "tui-space_all-1", 3, "contentAlign", "focusable", "hideCheckbox", "pseudoInvalid", "pseudoFocused", "pseudoHovered", "pseudoPressed", "readOnly", "size"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiCheckboxBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiCheckboxBlockComponent_ng_template_1_Template, 12, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiCheckboxBlockComponent_ng_template_2_Template, 8, 7, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiCheckboxBlockComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_8__["TuiCheckboxBlockExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_9__["TuiCheckboxBlockExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_10__["TuiCheckboxBlockExample3"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_14__["InheritedDocumentationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_checkbox_block_checkbox_block_component__WEBPACK_IMPORTED_MODULE_15__["TuiCheckboxBlockComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_16__["TuiDocCodeComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  margin-top: 1.875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jaGVja2JveC1ibG9jay9jaGVja2JveC1ibG9jay5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2NoZWNrYm94LWJsb2NrL2NoZWNrYm94LWJsb2NrLnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLG9CQUFBO0FES0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2NoZWNrYm94LWJsb2NrL2NoZWNrYm94LWJsb2NrLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4ud3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDEuODc1cmVtO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG4ud3JhcHBlciB7XG4gICAgbWFyZ2luLXRvcDogMS44NzVyZW07XG59XG4iXX0= */"], changeDetection: 0 });
const ɵExampleTuiCheckboxBlockComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiCheckboxBlockComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiCheckboxBlockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-checkbox-block`,
                templateUrl: `./checkbox-block.template.html`,
                styleUrls: [`./checkbox-block.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiCheckboxBlockComponent),
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/checkbox-block/checkbox-block.module.ts":
/*!************************************************************************!*\
  !*** ./src/modules/components/checkbox-block/checkbox-block.module.ts ***!
  \************************************************************************/
/*! exports provided: ExampleTuiCheckboxBlockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCheckboxBlockModule", function() { return ExampleTuiCheckboxBlockModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _checkbox_block_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkbox-block.component */ "./src/modules/components/checkbox-block/checkbox-block.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/checkbox-block/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/checkbox-block/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/checkbox-block/examples/3/index.ts");















class ExampleTuiCheckboxBlockModule {
}
ExampleTuiCheckboxBlockModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiCheckboxBlockModule });
ExampleTuiCheckboxBlockModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiCheckboxBlockModule_Factory(t) { return new (t || ExampleTuiCheckboxBlockModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiCheckboxBlockModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiGroupModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiAvatarModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTooltipModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_checkbox_block_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxBlockComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiCheckboxBlockModule, { declarations: [_examples_1__WEBPACK_IMPORTED_MODULE_10__["TuiCheckboxBlockExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_11__["TuiCheckboxBlockExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_12__["TuiCheckboxBlockExample3"],
        _checkbox_block_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxBlockComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiCheckboxBlockModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiGroupModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiAvatarModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTooltipModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_checkbox_block_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxBlockComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiCheckboxBlockModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiCheckboxBlockModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiGroupModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_7__["MarkdownModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiAvatarModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTooltipModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_checkbox_block_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxBlockComponent"])),
                ],
                declarations: [
                    _examples_1__WEBPACK_IMPORTED_MODULE_10__["TuiCheckboxBlockExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_11__["TuiCheckboxBlockExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_12__["TuiCheckboxBlockExample3"],
                    _checkbox_block_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxBlockComponent"],
                ],
                exports: [_checkbox_block_component__WEBPACK_IMPORTED_MODULE_9__["ExampleTuiCheckboxBlockComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/checkbox-block/examples/1/index.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/components/checkbox-block/examples/1/index.ts ***!
  \*******************************************************************/
/*! exports provided: TuiCheckboxBlockExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCheckboxBlockExample1", function() { return TuiCheckboxBlockExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_checkbox_block_checkbox_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/checkbox-block/checkbox-block.component */ "../kit/components/checkbox-block/checkbox-block.component.ts");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2752886510963137289$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_1_INDEX_TS_1 = goog.getMsg(" One option ");
    I18N_0 = MSG_EXTERNAL_2752886510963137289$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_1_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟99df59ef317e2b6a55ca658ee3166a6fb1c2405f␟2752886510963137289: One option `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6691339311800684677$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_1_INDEX_TS_3 = goog.getMsg(" An alternative one ");
    I18N_2 = MSG_EXTERNAL_6691339311800684677$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_1_INDEX_TS_3;
}
else {
    I18N_2 = $localize `:␟2a0dc2e0c8f74c6549c75401d110dab076277a3e␟6691339311800684677: An alternative one `;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7206000789053918461$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_1_INDEX_TS_5 = goog.getMsg(" Other ");
    I18N_4 = MSG_EXTERNAL_7206000789053918461$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_1_INDEX_TS_5;
}
else {
    I18N_4 = $localize `:␟47d5f0df12b9901fe6e60ca845e124275c21b9d2␟7206000789053918461: Other `;
}
class TuiCheckboxBlockExample1 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            testValue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
        });
    }
}
TuiCheckboxBlockExample1.ɵfac = function TuiCheckboxBlockExample1_Factory(t) { return new (t || TuiCheckboxBlockExample1)(); };
TuiCheckboxBlockExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCheckboxBlockExample1, selectors: [["tui-checkbox-block-example-1"]], decls: 10, vars: 1, consts: [[3, "formGroup"], [1, "tui-form__row"], ["formControlName", "testValue1", "contentAlign", "right", "size", "s"], ["formControlName", "testValue2", "contentAlign", "right", "size", "m"], ["contentAlign", "right", "formControlName", "testValue3", "size", "l"]], template: function TuiCheckboxBlockExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-checkbox-block", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-checkbox-block", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-checkbox-block", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, I18N_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_checkbox_block_checkbox_block_component__WEBPACK_IMPORTED_MODULE_4__["TuiCheckboxBlockComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCheckboxBlockExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-checkbox-block-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/checkbox-block/examples/2/index.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/components/checkbox-block/examples/2/index.ts ***!
  \*******************************************************************/
/*! exports provided: TuiCheckboxBlockExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCheckboxBlockExample2", function() { return TuiCheckboxBlockExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_group_group_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/group/group.directive */ "../core/components/group/group.directive.ts");
/* harmony import */ var _kit_components_checkbox_block_checkbox_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/checkbox-block/checkbox-block.component */ "../kit/components/checkbox-block/checkbox-block.component.ts");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6391194210978105636$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_2_INDEX_TS_1 = goog.getMsg(" Horizontal group\n");
    I18N_0 = MSG_EXTERNAL_6391194210978105636$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_2_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟0e7d7d560b1cf9f247c712a06d553336c0603542␟6391194210978105636: Horizontal group
`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6991059037030469023$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_2_INDEX_TS_3 = goog.getMsg(" Title ");
    I18N_2 = MSG_EXTERNAL_6991059037030469023$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_2_INDEX_TS_3;
}
else {
    I18N_2 = $localize `:␟87efc15510d4f4619443cf99e2b08b3146079597␟6991059037030469023: Title `;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4278986279453827345$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_2_INDEX_TS_5 = goog.getMsg(" Vertical group\n");
    I18N_4 = MSG_EXTERNAL_4278986279453827345$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_2_INDEX_TS_5;
}
else {
    I18N_4 = $localize `:␟312d341e3fd0106430fe72f7eebe09dd55fb36ea␟4278986279453827345: Vertical group
`;
}
class TuiCheckboxBlockExample2 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            testValue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
        });
    }
}
TuiCheckboxBlockExample2.ɵfac = function TuiCheckboxBlockExample2_Factory(t) { return new (t || TuiCheckboxBlockExample2)(); };
TuiCheckboxBlockExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCheckboxBlockExample2, selectors: [["tui-checkbox-block-example-2"]], decls: 20, vars: 4, consts: [[1, "title"], [1, "group", 3, "formGroup"], ["tuiGroup", "", 1, "group", 3, "collapsed"], ["contentAlign", "right", "formControlName", "testValue1", "size", "l"], ["contentAlign", "right", "formControlName", "testValue2", "size", "l"], ["contentAlign", "right", "formControlName", "testValue3", "size", "l"], [3, "formGroup"], ["tuiGroup", "", "orientation", "vertical", 1, "group", 3, "collapsed"]], template: function TuiCheckboxBlockExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-checkbox-block", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-checkbox-block", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-checkbox-block", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](11, I18N_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-checkbox-block", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tui-checkbox-block", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tui-checkbox-block", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsed", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collapsed", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _core_components_group_group_directive__WEBPACK_IMPORTED_MODULE_4__["TuiGroupDirective"], _kit_components_checkbox_block_checkbox_block_component__WEBPACK_IMPORTED_MODULE_5__["TuiCheckboxBlockComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".group[_ngcontent-%COMP%] {\n  max-width: 33rem;\n  margin-bottom: 1.5rem;\n}\n.title[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-5);\n  margin: 0 0 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jaGVja2JveC1ibG9jay9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvY2hlY2tib3gtYmxvY2svZXhhbXBsZXMvMi9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FES0o7QUNGQTtFQUNJLCtCQUFBO0VBQ0EsZ0JBQUE7QURJSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvY2hlY2tib3gtYmxvY2svZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLmdyb3VwIHtcbiAgbWF4LXdpZHRoOiAzM3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLnRpdGxlIHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtaGVhZGluZy01KTtcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLmdyb3VwIHtcbiAgICBtYXgtd2lkdGg6IDMzcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTUpO1xuICAgIG1hcmdpbjogMCAwIDFyZW07XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCheckboxBlockExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-checkbox-block-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/checkbox-block/examples/3/index.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/components/checkbox-block/examples/3/index.ts ***!
  \*******************************************************************/
/*! exports provided: TuiCheckboxBlockExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCheckboxBlockExample3", function() { return TuiCheckboxBlockExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_checkbox_block_checkbox_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/checkbox-block/checkbox-block.component */ "../kit/components/checkbox-block/checkbox-block.component.ts");
/* harmony import */ var _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/avatar/avatar.component */ "../kit/components/avatar/avatar.component.ts");
/* harmony import */ var _core_components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/tooltip/tooltip.component */ "../core/components/tooltip/tooltip.component.ts");









var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6317126528752584322$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_3_INDEX_TS_1 = goog.getMsg("Heading");
    I18N_0 = MSG_EXTERNAL_6317126528752584322$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_3_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟d2f99caf769460275d5bc462978c2761fedefec6␟6317126528752584322:Heading`;
}
const _c2 = ["text", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2861068616736202111$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_3_INDEX_TS_4 = goog.getMsg("placeholder");
    I18N_3 = MSG_EXTERNAL_2861068616736202111$$SRC_MODULES_COMPONENTS_CHECKBOX_BLOCK_EXAMPLES_3_INDEX_TS_4;
}
else {
    I18N_3 = $localize `:␟7cb689bdbc7ccb3c3a75668a240ac0e068344b1d␟2861068616736202111:placeholder`;
}
const _c5 = ["text", I18N_3];
class TuiCheckboxBlockExample3 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            testValue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            testValue4: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
        });
    }
}
TuiCheckboxBlockExample3.ɵfac = function TuiCheckboxBlockExample3_Factory(t) { return new (t || TuiCheckboxBlockExample3)(); };
TuiCheckboxBlockExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCheckboxBlockExample3, selectors: [["tui-checkbox-block-example-3"]], decls: 27, vars: 3, consts: [[1, "b-form", 3, "formGroup"], [1, "tui-form__row"], ["formControlName", "testValue1", "size", "l"], [1, "content"], ["size", "s", 1, "tui-space_right-3", 3, "rounded", 6, "text"], ["formControlName", "testValue2", "size", "l"], [1, "label"], ["formControlName", "testValue3", "size", "l"], [1, "inner"], [1, "text"], ["formControlName", "testValue4", "contentAlign", "left", "nativeId", "example3", "size", "l"], [1, "inner", "inner_flex"], ["describeId", "example3", "content", "some tooltip content"]], template: function TuiCheckboxBlockExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-checkbox-block", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-avatar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-checkbox-block", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-avatar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](11, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Placeholder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tui-checkbox-block", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque incidunt itaque iusto natus quaerat quia similique veniam? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tui-checkbox-block", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Some heading ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "tui-tooltip", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_checkbox_block_checkbox_block_component__WEBPACK_IMPORTED_MODULE_4__["TuiCheckboxBlockComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_5__["TuiAvatarComponent"], _core_components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_6__["TuiTooltipComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.label[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-s);\n  color: var(--tui-text-03);\n}\n.text[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-s);\n  margin-top: 0.25rem;\n  color: var(--tui-text-02);\n}\n.inner[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  white-space: normal;\n}\n.inner_flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n  width: 31.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jaGVja2JveC1ibG9jay9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvY2hlY2tib3gtYmxvY2svZXhhbXBsZXMvMy9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QURLSjtBQ0ZBO0VBQ0ksNEJBQUE7RUFDQSx5QkFBQTtBRElKO0FDREE7RUFDSSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QURHSjtBQ0FBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FERUo7QUNBSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FERVIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2NoZWNrYm94LWJsb2NrL2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sYWJlbCB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG59XG4udGV4dCB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG59XG4uaW5uZXIge1xuICBtYXJnaW46IDFyZW0gMDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbi5pbm5lcl9mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAzMS4yNXJlbTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxhYmVsIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXMpO1xuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG59XG5cbi50ZXh0IHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXMpO1xuICAgIG1hcmdpbi10b3A6IEBzcGFjZTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDIpO1xufVxuXG4uaW5uZXIge1xuICAgIG1hcmdpbjogMXJlbSAwO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG5cbiAgICAmX2ZsZXgge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDMxLjI1cmVtO1xuICAgIH1cbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCheckboxBlockExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-checkbox-block-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-checkbox-block-checkbox-block-module.js.map