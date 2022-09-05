(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-primitive-checkbox-primitive-checkbox-module"],{

/***/ "./src/modules/components/primitive-checkbox/primitive-checkbox.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/modules/components/primitive-checkbox/primitive-checkbox.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ExampleTuiPrimitiveCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPrimitiveCheckboxComponent", function() { return ExampleTuiPrimitiveCheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _core_components_primitive_checkbox_primitive_checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/components/primitive-checkbox/primitive-checkbox.component */ "../core/components/primitive-checkbox/primitive-checkbox.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");












var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_512882267423238740$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS__1 = goog.getMsg(" Static checkbox for usage outside forms as visual indicator without focusing and clicking. For usage in a form, see {$startLink}{$startTagCode}Checkbox{$closeTagCode}{$closeLink} , with a label {$startLink_1}{$startTagCode}CheckboxLabeled{$closeTagCode}{$closeLink} , inside a button {$startLink_2}{$startTagCode}CheckboxBlock{$closeTagCode}{$closeLink} . ", { "startLink": "\uFFFD#2\uFFFD", "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]", "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]", "closeLink": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]", "startLink_1": "\uFFFD#4\uFFFD", "startLink_2": "\uFFFD#6\uFFFD" });
    I18N_0 = MSG_EXTERNAL_512882267423238740$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟6696d99e1263607863dc6a23b648a544fa70b600␟512882267423238740: Static checkbox for usage outside forms as visual indicator without focusing and clicking. For usage in a form, see ${"\uFFFD#2\uFFFD"}:START_LINK:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:Checkbox${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_LINK: , with a label ${"\uFFFD#4\uFFFD"}:START_LINK_1:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:CheckboxLabeled${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_LINK: , inside a button ${"\uFFFD#6\uFFFD"}:START_LINK_2:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:CheckboxBlock${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_LINK: . `;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
function ExampleTuiPrimitiveCheckboxComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4703780784365037889$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___3 = goog.getMsg(" Disabled state ");
    I18N_2 = MSG_EXTERNAL_4703780784365037889$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___3;
}
else {
    I18N_2 = $localize `:␟5195232cc6d6804f2b83c984b763d494b95728e8␟4703780784365037889: Disabled state `;
}
function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_2);
} }
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9009801642023436819$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___5 = goog.getMsg(" Focused state ");
    I18N_4 = MSG_EXTERNAL_9009801642023436819$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___5;
}
else {
    I18N_4 = $localize `:␟354b9b97c69b039ffde51d9ae151d99d00e7b65e␟9009801642023436819: Focused state `;
}
function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_4);
} }
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7602361231353856339$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___7 = goog.getMsg(" Hovered state ");
    I18N_6 = MSG_EXTERNAL_7602361231353856339$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___7;
}
else {
    I18N_6 = $localize `:␟32d2ebd443fdc413faf6887822582bd72f7fee38␟7602361231353856339: Hovered state `;
}
function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_6);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2518609633850261367$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___9 = goog.getMsg(" Pressed state ");
    I18N_8 = MSG_EXTERNAL_2518609633850261367$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:␟4f67c07940933ee687c09fad9dbe37ae22ec8cf8␟2518609633850261367: Pressed state `;
}
function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_8);
} }
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___11 = goog.getMsg(" Size ");
    I18N_10 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___11;
}
else {
    I18N_10 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_10);
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6963908824346094281$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___13 = goog.getMsg(" Invalid state ");
    I18N_12 = MSG_EXTERNAL_6963908824346094281$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___13;
}
else {
    I18N_12 = $localize `:␟28900c6ae3d4c1ba49407b4808673d3273f10d95␟6963908824346094281: Invalid state `;
}
function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_12);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9122871136395031383$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___15 = goog.getMsg(" Value (checked / unchecked / indeterminate) ");
    I18N_14 = MSG_EXTERNAL_9122871136395031383$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟e31642eab59f929fb574a51ad4fa607546c91f5a␟9122871136395031383: Value (checked / unchecked / indeterminate) `;
}
function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_14);
} }
function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-primitive-checkbox", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.focused = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.hovered = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.pressed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.invalid = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiPrimitiveCheckboxComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.disabled)("focused", ctx_r1.focused)("hovered", ctx_r1.hovered)("pressed", ctx_r1.pressed)("size", ctx_r1.size)("invalid", ctx_r1.invalid)("value", ctx_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.focused);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.hovered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.pressed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7024502997535820809$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS__17 = goog.getMsg(" Import {$startTagCode}TuiPrimitiveCheckboxModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_16 = MSG_EXTERNAL_7024502997535820809$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS__17;
}
else {
    I18N_16 = $localize `:␟01d6244c19667e1c2e74a3619632f988be0db407␟7024502997535820809: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiPrimitiveCheckboxModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS__19 = goog.getMsg("Add to the template:");
    I18N_18 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS__19;
}
else {
    I18N_18 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8938389394037259502$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS__21 = goog.getMsg(" Optionally use the {$startTagCode}TUI_CHECKBOX_OPTIONS{$closeTagCode} injection token to override the default options for the component. ", { "startTagCode": "\uFFFD#13\uFFFD", "closeTagCode": "\uFFFD/#13\uFFFD" });
    I18N_20 = MSG_EXTERNAL_8938389394037259502$$SRC_MODULES_COMPONENTS_PRIMITIVE_CHECKBOX_PRIMITIVE_CHECKBOX_COMPONENT_TS__21;
}
else {
    I18N_20 = $localize `:␟410936608524ecabcc7a9de975eb34bffbc61acd␟8938389394037259502: Optionally use the ${"\uFFFD#13\uFFFD"}:START_TAG_CODE:TUI_CHECKBOX_OPTIONS${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;
}
function ExampleTuiPrimitiveCheckboxComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](12, I18N_20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tui-doc-code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleOptions);
} }
class ExampleTuiPrimitiveCheckboxComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/primitive-checkbox/examples/import/import-module.md"));
        this.exampleOptions = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-define-options-md */ "!!raw-loader!-examples-import-define-options-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/define-options.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/primitive-checkbox/examples/import/define-options.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/primitive-checkbox/examples/import/insert-template.md"));
        this.sizeVariants = [`m`, `l`];
        this.size = this.sizeVariants[0];
        this.disabled = false;
        this.focused = false;
        this.hovered = false;
        this.pressed = false;
        this.invalid = false;
        this.valueVariants = [false, true];
        this.value = this.valueVariants[0];
    }
}
ExampleTuiPrimitiveCheckboxComponent.ɵfac = function ExampleTuiPrimitiveCheckboxComponent_Factory(t) { return new (t || ExampleTuiPrimitiveCheckboxComponent)(); };
ExampleTuiPrimitiveCheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiPrimitiveCheckboxComponent, selectors: [["example-tui-checkbox"]], decls: 4, vars: 0, consts: [["header", "PrimitiveCheckbox", "package", "CORE", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], ["tuiLink", "", "routerLink", "/components/checkbox"], ["tuiLink", "", "routerLink", "/components/checkbox-labeled"], ["tuiLink", "", "routerLink", "/components/checkbox-block"], [3, "disabled", "focused", "hovered", "pressed", "size", "invalid", "value"], ["documentationPropertyName", "disabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "focused", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hovered", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pressed", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "invalid", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "boolean | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiPrimitiveCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiPrimitiveCheckboxComponent_ng_template_1_Template, 8, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiPrimitiveCheckboxComponent_ng_template_2_Template, 10, 16, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiPrimitiveCheckboxComponent_ng_template_3_Template, 15, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocDemoComponent"], _core_components_primitive_checkbox_primitive_checkbox_component__WEBPACK_IMPORTED_MODULE_7__["TuiPrimitiveCheckboxComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_9__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiPrimitiveCheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-checkbox`,
                templateUrl: `./primitive-checkbox.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/primitive-checkbox/primitive-checkbox.module.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/components/primitive-checkbox/primitive-checkbox.module.ts ***!
  \********************************************************************************/
/*! exports provided: ExampleTuiPrimitiveCheckboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiPrimitiveCheckboxModule", function() { return ExampleTuiPrimitiveCheckboxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "../../node_modules/ngx-markdown/fesm2015/ngx-markdown.js");
/* harmony import */ var _primitive_checkbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./primitive-checkbox.component */ "./src/modules/components/primitive-checkbox/primitive-checkbox.component.ts");








class ExampleTuiPrimitiveCheckboxModule {
}
ExampleTuiPrimitiveCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExampleTuiPrimitiveCheckboxModule });
ExampleTuiPrimitiveCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExampleTuiPrimitiveCheckboxModule_Factory(t) { return new (t || ExampleTuiPrimitiveCheckboxModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiPrimitiveCheckboxModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["generateRoutes"])(_primitive_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiPrimitiveCheckboxComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExampleTuiPrimitiveCheckboxModule, { declarations: [_primitive_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiPrimitiveCheckboxComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiPrimitiveCheckboxModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_primitive_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiPrimitiveCheckboxComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiPrimitiveCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiPrimitiveCheckboxModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiLinkModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_2__["generateRoutes"])(_primitive_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiPrimitiveCheckboxComponent"])),
                ],
                declarations: [_primitive_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiPrimitiveCheckboxComponent"]],
                exports: [_primitive_checkbox_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiPrimitiveCheckboxComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-primitive-checkbox-primitive-checkbox-module.js.map