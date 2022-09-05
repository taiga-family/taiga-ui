(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-accordion-accordion-module"],{

/***/ "./src/modules/components/accordion/accordion.component.ts":
/*!*****************************************************************!*\
  !*** ./src/modules/components/accordion/accordion.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExampleTuiAccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiAccordionComponent", function() { return ExampleTuiAccordionComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/accordion/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/accordion/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/accordion/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/accordion/examples/4/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../kit/components/accordion/accordion.component */ "../kit/components/accordion/accordion.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../kit/components/accordion/accordion-item/accordion-item.component */ "../kit/components/accordion/accordion-item/accordion-item.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../kit/components/accordion/accordion-item/accordion-item-content.directive */ "../kit/components/accordion/accordion-item/accordion-item-content.directive.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");




















const _c0 = ["content"];
var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2792641335962167728$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__2 = goog.getMsg("An element that allows to show and hide content in sections");
    I18N_1 = MSG_EXTERNAL_2792641335962167728$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__2;
}
else {
    I18N_1 = $localize `:␟4cc90c6d3ea5db2e013b136be35f02de111500fa␟2792641335962167728:An element that allows to show and hide content in sections`;
}
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1228742900437480485$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__4 = goog.getMsg("Only one section of accordion can be opened by default");
    I18N_3 = MSG_EXTERNAL_1228742900437480485$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟5520bb7e6c8c7e23e7dd8f6c3ded4561db0874bc␟1228742900437480485:Only one section of accordion can be opened by default`;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__6 = goog.getMsg("Basic");
    I18N_5 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9103653540782430214$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__9 = goog.getMsg("with custom design");
    I18N_8 = MSG_EXTERNAL_9103653540782430214$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟1ce49c32e6f22478794675bdec4de87d13585015␟9103653540782430214:with custom design`;
}
const _c10 = ["heading", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3790244074908877572$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__12 = goog.getMsg("alone");
    I18N_11 = MSG_EXTERNAL_3790244074908877572$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟419cfdcbd1bd84eea7e9f6dd269b30d29453085b␟3790244074908877572:alone`;
}
const _c13 = ["heading", I18N_11];
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3762343538857855737$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__15 = goog.getMsg("Eager and Lazy content");
    I18N_14 = MSG_EXTERNAL_3762343538857855737$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟fe7afecd2b546c4b383d1668b628aaa41c5b27fa␟3762343538857855737:Eager and Lazy content`;
}
const _c16 = ["heading", I18N_14];
function ExampleTuiAccordionComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](1, I18N_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](3, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](5, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "tui-accordion-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](8, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "tui-accordion-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](11, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "tui-accordion-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nAttributes"](14, _c16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "tui-accordion-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.example4);
} }
function ExampleTuiAccordionComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, " Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities ");
} }
function ExampleTuiAccordionComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Basic elements needed to develop components, directives and more using Taiga UI design system ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3501530258026681881$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____18 = goog.getMsg(" Other sections are closed when user opens one ");
    I18N_17 = MSG_EXTERNAL_3501530258026681881$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____18;
}
else {
    I18N_17 = $localize `:␟926dd95d67ad69063016fdcbabfd5eaeb26aabf9␟3501530258026681881: Other sections are closed when user opens one `;
}
function ExampleTuiAccordionComponent_ng_template_2_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_17);
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3460275408989515258$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____20 = goog.getMsg(" Rounded accordion style ");
    I18N_19 = MSG_EXTERNAL_3460275408989515258$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____20;
}
else {
    I18N_19 = $localize `:␟4bb08a552c5d432044b28d3c6bd7c43befc22aa8␟3460275408989515258: Rounded accordion style `;
}
function ExampleTuiAccordionComponent_ng_template_2_ng_template_11_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_19);
} }
function ExampleTuiAccordionComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExampleTuiAccordionComponent_ng_template_2_ng_template_11_ng_template_1_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_11_Template_ng_template_documentationPropertyValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.closeOthers = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExampleTuiAccordionComponent_ng_template_2_ng_template_11_ng_template_2_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_11_Template_ng_template_documentationPropertyValueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.rounded = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValue", ctx_r5.closeOthers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValue", ctx_r5.rounded);
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6499794863153942915$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____22 = goog.getMsg(" Waits for a custom event {$startTagCode}TUI_EXPAND_LOADED{$closeTagCode} before opening. Content is initialized when opening starts ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_21 = MSG_EXTERNAL_6499794863153942915$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____22;
}
else {
    I18N_21 = $localize `:␟c3ba2ea3e7296d0fa600f631402180947ac9051a␟6499794863153942915: Waits for a custom event ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:TUI_EXPAND_LOADED${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: before opening. Content is initialized when opening starts `;
}
function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](0, I18N_21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6941798965968576561$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____24 = goog.getMsg(" Borders variants ");
    I18N_23 = MSG_EXTERNAL_6941798965968576561$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____24;
}
else {
    I18N_23 = $localize `:␟9e235ced14e3dcb6d6dace1510193463beffc400␟6941798965968576561: Borders variants `;
}
function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_23);
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1625873562635610142$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____26 = goog.getMsg(" Disabled state for an item ");
    I18N_25 = MSG_EXTERNAL_1625873562635610142$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____26;
}
else {
    I18N_25 = $localize `:␟fdb8097bc01ba38531204836b7462cae300da02b␟1625873562635610142: Disabled state for an item `;
}
function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_25);
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4941222037875230927$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____28 = goog.getMsg(" Removes default paddings ");
    I18N_27 = MSG_EXTERNAL_4941222037875230927$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____28;
}
else {
    I18N_27 = $localize `:␟e375f33cd1afed2474b36981688f7110db9ce6b5␟4941222037875230927: Removes default paddings `;
}
function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_27);
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4817660741449421838$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____30 = goog.getMsg(" Disabled header hover state ");
    I18N_29 = MSG_EXTERNAL_4817660741449421838$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____30;
}
else {
    I18N_29 = $localize `:␟61e9921eeaf1ab0a06d8f22252fe392b587baf6d␟4817660741449421838: Disabled header hover state `;
}
function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_29);
} }
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5252016495199332761$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____32 = goog.getMsg(" Open / close state of section ");
    I18N_31 = MSG_EXTERNAL_5252016495199332761$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____32;
}
else {
    I18N_31 = $localize `:␟70c4c93b15b907cf921f4cef44ff700f49d5346e␟5252016495199332761: Open / close state of section `;
}
function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_31);
} }
var I18N_33;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5835961371073265785$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____34 = goog.getMsg(" Size of an accordion item ");
    I18N_33 = MSG_EXTERNAL_5835961371073265785$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____34;
}
else {
    I18N_33 = $localize `:␟6b06687c142632319f7ee4d3d446d832125cbc99␟5835961371073265785: Size of an accordion item `;
}
function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_33);
} }
var I18N_35;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3464494632133448854$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____36 = goog.getMsg(" Show / hide an arrow ");
    I18N_35 = MSG_EXTERNAL_3464494632133448854$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS____36;
}
else {
    I18N_35 = $localize `:␟da5b82128342b071feb0383de41dbe47ec0dac8b␟3464494632133448854: Show / hide an arrow `;
}
function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18n"](0, I18N_35);
} }
function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_1_Template, 2, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template_ng_template_documentationPropertyValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.async = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_2_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template_ng_template_documentationPropertyValueChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r23.borders = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_3_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r24.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_4_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r25.noPadding = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_5_Template, 1, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.disableHover = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_6_Template, 1, 0, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r27.onOpenChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_7_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_ng_template_8_Template, 1, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.showArrow = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValue", ctx_r6.async);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValues", ctx_r6.bordersVariants)("documentationPropertyValue", ctx_r6.borders);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValue", ctx_r6.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValue", ctx_r6.noPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValue", ctx_r6.disableHover);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValue", ctx_r6.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValues", ctx_r6.sizeVariants)("documentationPropertyValue", ctx_r6.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("documentationPropertyValue", ctx_r6.showArrow);
} }
function ExampleTuiAccordionComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tui-accordion", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tui-accordion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Taiga UI cdk ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ExampleTuiAccordionComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tui-accordion-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openChange", function ExampleTuiAccordionComponent_ng_template_2_Template_tui_accordion_item_openChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r30.onOpenChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Taiga UI core ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ExampleTuiAccordionComponent_ng_template_2_ng_template_7_Template, 3, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tui-accordion", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tui-accordion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " TuiAccordionComponent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ExampleTuiAccordionComponent_ng_template_2_ng_template_11_Template, 3, 2, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "tui-accordion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " TuiAccordionItemComponent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ExampleTuiAccordionComponent_ng_template_2_ng_template_14_Template, 9, 10, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", ctx_r1.closeOthers)("rounded", ctx_r1.rounded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("borders", ctx_r1.borders)("disabled", ctx_r1.disabled)("noPadding", ctx_r1.noPadding)("size", ctx_r1.size)("showArrow", ctx_r1.showArrow)("disableHover", ctx_r1.disableHover);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("borders", ctx_r1.borders)("disabled", ctx_r1.disabled)("noPadding", ctx_r1.noPadding)("size", ctx_r1.size)("showArrow", ctx_r1.showArrow)("disableHover", ctx_r1.disableHover)("async", ctx_r1.async)("open", ctx_r1.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("open", true);
} }
var I18N_37;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2396218993147096007$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__38 = goog.getMsg(" Import {$startTagCode}TuiAccordionModule{$closeTagCode} into a module where you want to use our component {$startTagTuiDocCode}{$closeTagTuiDocCode}", { "startTagCode": "\uFFFD#3\uFFFD", "closeTagCode": "\uFFFD/#3\uFFFD", "startTagTuiDocCode": "\uFFFD#4\uFFFD", "closeTagTuiDocCode": "\uFFFD/#4\uFFFD" });
    I18N_37 = MSG_EXTERNAL_2396218993147096007$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__38;
}
else {
    I18N_37 = $localize `:␟a07a65e6bca4e4abb6240aa4b35127e82aee4d7a␟2396218993147096007: Import ${"\uFFFD#3\uFFFD"}:START_TAG_CODE:TuiAccordionModule${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component ${"\uFFFD#4\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:`;
}
var I18N_39;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6000680102827131318$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__40 = goog.getMsg(" Add it into template: {$startTagTuiDocCode}{$closeTagTuiDocCode}", { "startTagTuiDocCode": "\uFFFD#7\uFFFD", "closeTagTuiDocCode": "\uFFFD/#7\uFFFD" });
    I18N_39 = MSG_EXTERNAL_6000680102827131318$$SRC_MODULES_COMPONENTS_ACCORDION_ACCORDION_COMPONENT_TS__40;
}
else {
    I18N_39 = $localize `:␟40d05d819ab3643ca776a45d1013135affb5b967␟6000680102827131318: Add it into template: ${"\uFFFD#7\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:`;
}
function ExampleTuiAccordionComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ol", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](2, I18N_37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "tui-doc-code", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](6, I18N_39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "tui-doc-code", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiAccordionComponent {
    constructor(documentRef) {
        this.documentRef = documentRef;
        this.async = false;
        this.closeOthers = true;
        this.disabled = false;
        this.noPadding = false;
        this.open = false;
        this.rounded = true;
        this.showArrow = true;
        this.disableHover = false;
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/2/index.less")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/3/index.less")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/4/index.less")),
        };
        this.bordersVariants = [`all`, `top-bottom`];
        this.borders = this.bordersVariants[0];
        this.sizeVariants = [`s`, `m`];
        this.size = this.sizeVariants[1];
    }
    onOpenChange(open) {
        this.open = open;
        if (!this.async || !open) {
            return;
        }
        setTimeout(() => {
            const event = Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiCustomEvent"])(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TUI_EXPAND_LOADED"], { bubbles: true }, this.documentRef);
            if (this.content) {
                this.content.nativeElement.dispatchEvent(event);
            }
        }, 3000);
    }
}
ExampleTuiAccordionComponent.ɵfac = function ExampleTuiAccordionComponent_Factory(t) { return new (t || ExampleTuiAccordionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
ExampleTuiAccordionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExampleTuiAccordionComponent, selectors: [["example-accordion"]], viewQuery: function ExampleTuiAccordionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, decls: 4, vars: 0, consts: [["header", "Accordion", "package", "KIT", "type", "components"], ["pageTab", ""], ["id", "base", 3, "content", 6, "heading"], ["id", "custom", 3, "content", 6, "heading"], ["id", "single", 3, "content", 6, "heading"], ["id", "eagerAndLazy", 3, "content", 6, "heading"], [3, "closeOthers", "rounded"], [3, "borders", "disabled", "noPadding", "size", "showArrow", "disableHover"], ["tuiAccordionItemContent", ""], [3, "borders", "disabled", "noPadding", "size", "showArrow", "disableHover", "async", "open", "openChange"], [1, "b-full-width", 3, "closeOthers"], [3, "open"], ["content", ""], ["documentationPropertyName", "closeOthers", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "rounded", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "async", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "borders", "documentationPropertyMode", "input", "documentationPropertyType", "'all' | 'top-bottom' | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "noPadding", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disableHover", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "open", "documentationPropertyMode", "input-output", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "showArrow", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiAccordionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExampleTuiAccordionComponent_ng_template_1_Template, 16, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExampleTuiAccordionComponent_ng_template_2_Template, 15, 18, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExampleTuiAccordionComponent_ng_template_3_Template, 8, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_8__["TuiAccordionExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_9__["TuiAccordionExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_10__["TuiAccordionExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_11__["TuiAccordionExample4"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocDemoComponent"], _kit_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_13__["TuiAccordionComponent"], _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_14__["TuiAccordionItemComponent"], _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_15__["TuiAccordionItemContentDirective"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_16__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_17__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_18__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiAccordionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `example-accordion`,
                templateUrl: `./accordion.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [`content`]
        }] }); })();


/***/ }),

/***/ "./src/modules/components/accordion/accordion.module.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/accordion/accordion.module.ts ***!
  \**************************************************************/
/*! exports provided: ExampleTuiAccordionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiAccordionModule", function() { return ExampleTuiAccordionModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _accordion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./accordion.component */ "./src/modules/components/accordion/accordion.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/accordion/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/accordion/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/accordion/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/accordion/examples/4/index.ts");















class ExampleTuiAccordionModule {
}
ExampleTuiAccordionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiAccordionModule });
ExampleTuiAccordionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiAccordionModule_Factory(t) { return new (t || ExampleTuiAccordionModule)(); }, imports: [[
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSelectModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiAccordionModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDataListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiDataListWrapperModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_accordion_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiAccordionComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiAccordionModule, { declarations: [_accordion_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiAccordionComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiAccordionExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiAccordionExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_11__["TuiAccordionExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_12__["TuiAccordionExample4"]], imports: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSelectModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiAccordionModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDataListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiDataListWrapperModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_accordion_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiAccordionComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiAccordionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSelectModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiAccordionModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDataListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiDataListWrapperModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_accordion_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiAccordionComponent"])),
                ],
                declarations: [
                    _accordion_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiAccordionComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiAccordionExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiAccordionExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_11__["TuiAccordionExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_12__["TuiAccordionExample4"],
                ],
                exports: [_accordion_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiAccordionComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/accordion/examples/1/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/accordion/examples/1/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiAccordionExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiAccordionExample1", function() { return TuiAccordionExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/accordion/accordion.component */ "../kit/components/accordion/accordion.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/accordion/accordion-item/accordion-item.component */ "../kit/components/accordion/accordion-item/accordion-item.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/accordion/accordion-item/accordion-item-content.directive */ "../kit/components/accordion/accordion-item/accordion-item-content.directive.ts");







function TuiAccordionExample1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities ");
} }
function TuiAccordionExample1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Basic elements needed to develop components, directives and more using Taiga UI design system ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TuiAccordionExample1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " The main set of components used to build Taiga UI based Angular applications ");
} }
class TuiAccordionExample1 {
}
TuiAccordionExample1.ɵfac = function TuiAccordionExample1_Factory(t) { return new (t || TuiAccordionExample1)(); };
TuiAccordionExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiAccordionExample1, selectors: [["tui-accordion-example-1"]], decls: 10, vars: 0, consts: [[1, "container"], ["tuiAccordionItemContent", ""], ["content", ""]], template: function TuiAccordionExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Taiga UI cdk ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiAccordionExample1_ng_template_3_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Taiga UI core ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TuiAccordionExample1_ng_template_6_Template, 3, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-accordion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Taiga UI kit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TuiAccordionExample1_ng_template_9_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_kit_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_3__["TuiAccordionComponent"], _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_4__["TuiAccordionItemComponent"], _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_5__["TuiAccordionItemContentDirective"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 37.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9hY2NvcmRpb24vZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2FjY29yZGlvbi9leGFtcGxlcy8xL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9hY2NvcmRpb24vZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAzNy41cmVtO1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzcuNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiAccordionExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-accordion-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/accordion/examples/2/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/accordion/examples/2/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiAccordionExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiAccordionExample2", function() { return TuiAccordionExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/accordion/accordion.component */ "../kit/components/accordion/accordion.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/accordion/accordion-item/accordion-item.component */ "../kit/components/accordion/accordion-item/accordion-item.component.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
/* harmony import */ var _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/money/money.component */ "../addon-commerce/components/money/money.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/accordion/accordion-item/accordion-item-content.directive */ "../kit/components/accordion/accordion-item/accordion-item-content.directive.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var _kit_components_select_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../kit/components/select/select.component */ "../kit/components/select/select.component.ts");
/* harmony import */ var _kit_components_select_select_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../kit/components/select/select.directive */ "../kit/components/select/select.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");




















function TuiAccordionExample2_tui_accordion_0_ng_template_15_tui_data_list_wrapper_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 23);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r5.accounts);
} }
function TuiAccordionExample2_tui_accordion_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payment form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Your name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Choose an account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TuiAccordionExample2_tui_accordion_0_ng_template_15_tui_data_list_wrapper_7_Template, 1, 1, "tui-data-list-wrapper", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.testForm);
} }
function TuiAccordionExample2_tui_accordion_0_ng_template_30_tui_data_list_wrapper_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 23);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r6.accounts);
} }
function TuiAccordionExample2_tui_accordion_0_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payment form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Your name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Choose an account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TuiAccordionExample2_tui_accordion_0_ng_template_30_tui_data_list_wrapper_7_Template, 1, 1, "tui-data-list-wrapper", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.testForm);
} }
function TuiAccordionExample2_tui_accordion_0_ng_template_45_tui_data_list_wrapper_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 23);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r7.accounts);
} }
function TuiAccordionExample2_tui_accordion_0_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payment form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Your name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Choose an account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TuiAccordionExample2_tui_accordion_0_ng_template_45_tui_data_list_wrapper_7_Template, 1, 1, "tui-data-list-wrapper", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.testForm);
} }
function TuiAccordionExample2_tui_accordion_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-accordion", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-accordion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 4 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "May");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Get your money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-money", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Waiting for approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TuiAccordionExample2_tui_accordion_0_ng_template_15_Template, 13, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tui-accordion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "May");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "tui-svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Get your money back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "tui-money", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Approved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TuiAccordionExample2_tui_accordion_0_ng_template_30_Template, 13, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tui-accordion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " 6 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "May");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "tui-svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Get your neighbor's money");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "tui-money", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Declined");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, TuiAccordionExample2_tui_accordion_0_ng_template_45_Template, 13, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lazySvg_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showArrow", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (lazySvg_r1 == null ? null : lazySvg_r1.default) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 23000);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showArrow", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (lazySvg_r1 == null ? null : lazySvg_r1.default) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 23000);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showArrow", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (lazySvg_r1 == null ? null : lazySvg_r1.default) || "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 23000);
} }
class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
    toString() {
        return `${this.name} (${this.balance})`;
    }
}
class TuiAccordionExample2 {
    constructor() {
        this.accounts = [
            new Account(`Rubles`, 500),
            new Account(`Dollar`, 237),
            new Account(`Euro`, 100),
        ];
        this.svgIcons = {
            rubles: __webpack_require__.e(/*! import() | !raw-loader!-rubles-svg */ "!!raw-loader!-rubles-svg").then(__webpack_require__.bind(null, /*! !raw-loader!./rubles.svg */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/accordion/examples/2/rubles.svg")),
        };
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``),
            accounts: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.accounts[0]),
        });
    }
}
TuiAccordionExample2.ɵfac = function TuiAccordionExample2_Factory(t) { return new (t || TuiAccordionExample2)(); };
TuiAccordionExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiAccordionExample2, selectors: [["tui-accordion-example-2"]], decls: 2, vars: 3, consts: [["class", "container", 3, "rounded", 4, "ngIf"], [1, "container", 3, "rounded"], ["borders", "top-bottom", 3, "showArrow"], [1, "operation-header"], [1, "operation-date"], [1, "operation-month"], [1, "operation-pic"], [1, "operation-icon", 3, "src"], [1, "operation-title"], [1, "operation-info"], [1, "operation-amount", 3, "value"], [1, "operation-status"], ["tuiAccordionItemContent", ""], [1, "operation-status", "operation-status_success"], [1, "operation-status", "operation-status_error"], [1, "form-title"], [1, "operation-form", 3, "formGroup"], ["tuiTextfieldExampleText", "Roman Sedov", "formControlName", "name", 1, "input"], ["formControlName", "accounts", 1, "input"], [3, "items", 4, "tuiDataList"], [1, "buttons"], ["tuiButton", "", "type", "submit", "size", "l", 1, "tui-space_right-2"], ["tuiButton", "", "type", "button", "appearance", "flat", "size", "l"], [3, "items"]], template: function TuiAccordionExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiAccordionExample2_tui_accordion_0_Template, 46, 10, "tui-accordion", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.svgIcons.rubles));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _kit_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_5__["TuiAccordionComponent"], _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_6__["TuiAccordionItemComponent"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_7__["TuiSvgComponent"], _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_8__["TuiMoneyComponent"], _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_9__["TuiAccordionItemContentDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_10__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_11__["TuiInputDirective"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_12__["TuiTextfieldExampleTextDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _kit_components_select_select_component__WEBPACK_IMPORTED_MODULE_13__["TuiSelectComponent"], _kit_components_select_select_directive__WEBPACK_IMPORTED_MODULE_14__["TuiSelectDirective"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_15__["TuiDataListDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_16__["TuiButtonComponent"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_17__["TuiDataListWrapperComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 46.875rem;\n}\n.operation-header[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-l);\n  display: flex;\n  align-items: center;\n}\n.operation-date[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-xl);\n  text-align: center;\n}\n.operation-date[_ngcontent-%COMP%], .operation-info[_ngcontent-%COMP%] {\n  color: var(--tui-text-02);\n}\n.operation-month[_ngcontent-%COMP%], .operation-status[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-s);\n}\n.operation-pic[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin: 0 1.5rem;\n  background: var(--tui-secondary-active);\n  border-radius: 100%;\n  width: 3rem;\n  height: 3rem;\n  color: var(--tui-text-03);\n}\n.operation-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-right: 1.5rem;\n  flex-grow: 1;\n}\n.operation-info[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.operation-status_success[_ngcontent-%COMP%] {\n  color: var(--tui-success-fill);\n}\n.operation-status_error[_ngcontent-%COMP%] {\n  color: var(--tui-error-fill);\n}\n.form-title[_ngcontent-%COMP%] {\n  font: var(--tui-font-heading-6);\n  margin: 0 0 1.25rem;\n}\n.input[_ngcontent-%COMP%] {\n  max-width: 28.75rem;\n  margin-bottom: 1.25rem;\n}\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9hY2NvcmRpb24vZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2FjY29yZGlvbi9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLG9CQUFBO0FES0o7QUNGQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FESUo7QUNEQTtFQUNJLDZCQUFBO0VBQ0Esa0JBQUE7QURHSjtBQ0FBOztFQUVJLHlCQUFBO0FERUo7QUNDQTs7RUFFSSw0QkFBQTtBRENKO0FDRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FEQUo7QUNHQTtFQ3lPSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUR6T0Esb0JBQUE7RUFDQSxZQUFBO0FEQ0o7QUNFQTtFQUNJLGlCQUFBO0FEQUo7QUNJSTtFQUNJLDhCQUFBO0FERlI7QUNLSTtFQUNJLDRCQUFBO0FESFI7QUNPQTtFQUNJLCtCQUFBO0VBQ0EsbUJBQUE7QURMSjtBQ1FBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBRE5KO0FDU0E7RUFDSSxhQUFBO0FEUEoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2FjY29yZGlvbi9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA0Ni44NzVyZW07XG59XG4ub3BlcmF0aW9uLWhlYWRlciB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub3BlcmF0aW9uLWRhdGUge1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXhsKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm9wZXJhdGlvbi1kYXRlLFxuLm9wZXJhdGlvbi1pbmZvIHtcbiAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAyKTtcbn1cbi5vcGVyYXRpb24tbW9udGgsXG4ub3BlcmF0aW9uLXN0YXR1cyB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG59XG4ub3BlcmF0aW9uLXBpYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luOiAwIDEuNXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHVpLXNlY29uZGFyeS1hY3RpdmUpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xufVxuLm9wZXJhdGlvbi10aXRsZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgZmxleC1ncm93OiAxO1xufVxuLm9wZXJhdGlvbi1pbmZvIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ub3BlcmF0aW9uLXN0YXR1c19zdWNjZXNzIHtcbiAgY29sb3I6IHZhcigtLXR1aS1zdWNjZXNzLWZpbGwpO1xufVxuLm9wZXJhdGlvbi1zdGF0dXNfZXJyb3Ige1xuICBjb2xvcjogdmFyKC0tdHVpLWVycm9yLWZpbGwpO1xufVxuLmZvcm0tdGl0bGUge1xuICBmb250OiB2YXIoLS10dWktZm9udC1oZWFkaW5nLTYpO1xuICBtYXJnaW46IDAgMCAxLjI1cmVtO1xufVxuLmlucHV0IHtcbiAgbWF4LXdpZHRoOiAyOC43NXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA0Ni44NzVyZW07XG59XG5cbi5vcGVyYXRpb24taGVhZGVyIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LWwpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm9wZXJhdGlvbi1kYXRlIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXhsKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5vcGVyYXRpb24tZGF0ZSxcbi5vcGVyYXRpb24taW5mbyB7XG4gICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAyKTtcbn1cblxuLm9wZXJhdGlvbi1tb250aCxcbi5vcGVyYXRpb24tc3RhdHVzIHtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXMpO1xufVxuXG4ub3BlcmF0aW9uLXBpYyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1hcmdpbjogMCAxLjVyZW07XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLXNlY29uZGFyeS1hY3RpdmUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDNyZW07XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG59XG5cbi5vcGVyYXRpb24tdGl0bGUge1xuICAgIC50ZXh0LW92ZXJmbG93KCk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4ub3BlcmF0aW9uLWluZm8ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ub3BlcmF0aW9uLXN0YXR1cyB7XG4gICAgJl9zdWNjZXNzIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS1zdWNjZXNzLWZpbGwpO1xuICAgIH1cblxuICAgICZfZXJyb3Ige1xuICAgICAgICBjb2xvcjogdmFyKC0tdHVpLWVycm9yLWZpbGwpO1xuICAgIH1cbn1cblxuLmZvcm0tdGl0bGUge1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LWhlYWRpbmctNik7XG4gICAgbWFyZ2luOiAwIDAgMS4yNXJlbTtcbn1cblxuLmlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDI4Ljc1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG59XG5cbi5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuIiwiLy8gY2VudGVyaW5nIHdpdGggdHJhbnNsYXRlXG4uY2VudGVyLWxlZnQoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuLmNlbnRlci10b3AoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4uY2VudGVyLWFsbCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vLyBjbGVhcmZpeFxuLmNsZWFyZml4KCkge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbn1cblxuLy8uZnVsbHNpemVcbi5mdWxsc2l6ZShAcG9zaXRpb246IGFic29sdXRlLCBAbW9kZTogaGVpZ2h0KSB7XG4gICAgcG9zaXRpb246IEBwb3NpdGlvbjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgICYgd2hlbiAoQG1vZGUgPSBoZWlnaHQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaW5zZXQpIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG5cbi5jbGVhcmJ0bigpIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uYXV0b2ZpbGwoQG1vZGU6ZGVmYXVsdCkge1xuICAgICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICAgICAgY2FyZXQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGVmYXVsdCkge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsKSBpbnNldCAhaW1wb3J0YW50OyAvLyB0byBvdmVybGF5IG5hdGl2ZSBiYWNrZ3JvdW5kXG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KSBpbnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2xlYXJpbnB1dChAbW9kZTogZGVmYXVsdCkge1xuICAgIC5hdXRvZmlsbChAbW9kZSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGN1cnJlbnRDb2xvcjsgLy8gZm9yIFNhZmFyaVxufVxuXG4udmlzdWFsbHktaGlkZGVuKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcbn1cblxuLy8gY3VzdG9taXplIG5hdGl2ZSBzY3JvbGxcbi5jdXN0b21pemUtc2Nyb2xsKCkge1xuICAgIC8vIGV4Y2x1ZGUgbm9uLXN1cHBvcnRpbmcgYnJvd3NlcnNcbiAgICBAbWVkaWEgYWxsIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSBhbmQgKG1pbi1yZXNvbHV0aW9uOiAwLjAwMWRwY20pIHtcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IDIuNjY3cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItaG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBzaGFkb3dcbi5zaGFkb3coQG1vZGU6IDEpIHtcbiAgICAvLyBEZWZhdWx0XG4gICAgJiB3aGVuIChAbW9kZSA9IDEpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIERyb3Bkb3duXG4gICAgJiB3aGVuIChAbW9kZSA9IDIpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsXG4gICAgJiB3aGVuIChAbW9kZSA9IDMpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxLjEyNXJlbSAxLjg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuNDgpO1xuICAgIH1cblxuICAgIC8vIFNpZGViYXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNCkge1xuICAgICAgICBib3gtc2hhZG93OiAwLjI1cmVtIDAgMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gSG92ZXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMi4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgICYgd2hlbiAoQG1vZGUgPSA2KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsIG1vYmlsZVxuICAgICYgd2hlbiAoQG1vZGUgPSA3KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTFyZW0gMS43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIH1cbn1cblxuLmluc2V0LWJvcmRlcihAZGlyZWN0aW9uOiBib3R0b20sIEBtb2RlOiBub25lKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdHJhbnNpdGlvblxuLnRyYW5zaXRpb24oQHBhcmFtLCBAc3BlZWQ6IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpKSB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHBhcmFtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEBzcGVlZDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cbi8vIGRhc2hlZCBib3JkZXJcbi5kYXNoZWQtYm9yZGVyKEBjb2xvcjogY3VycmVudENvbG9yLCBAYWxpZ25tZW50OiBib3R0b20sIEBzcGFjZTogNCkge1xuICAgIEBzaXplOiB1bml0KEBzcGFjZSwgcHgpO1xuICAgIEBwZXJjZW50YWdlOiAoMTAwJSAvIEBzcGFjZSAqIDIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQGNvbG9yIDAlLCBAY29sb3IgQHBlcmNlbnRhZ2UsIHRyYW5zcGFyZW50IEBwZXJjZW50YWdlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIEBhbGlnbm1lbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBAc2l6ZSAxcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyB0eXBpY2FsIG9wYWNpdHkgcHJvcGVydGllcyBmb3IgaWNvbnNcbi5vcGFjaXR5LWljb24oKSB7XG4gICAgb3BhY2l0eTogMC44O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaG92ZXJhYmxlLXdpdGgtc2hhZG93KCkge1xuICAgIC5zaGFkb3coKTtcbiAgICAudHJhbnNpdGlvbihhbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcblxuICAgICY6aG92ZXIge1xuICAgICAgICAuc2hhZG93KDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLUBzcGFjZSk7XG4gICAgfVxufVxuXG4vLyBncmFkaWVudFxuLmdyYWRpZW50KEBzdGFydC1jb2xvciwgQGVuZC1jb2xvciwgQGFuZ2xlOiA0NWRlZykge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChAYW5nbGUsIEBzdGFydC1jb2xvciAwJSwgQGVuZC1jb2xvciAxMDAlKTtcbn1cblxuLy8gdHlwaWNhbCBwcm9wZXJ0aWVzIGZvciB0ZXh0IG92ZXJmbG93IHdpdGggZWxsaXBzaXNcbi50ZXh0LW92ZXJmbG93KEB0eXBlOiBub3dyYXApIHtcbiAgICB3aGl0ZS1zcGFjZTogQHR5cGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4udGV4dC1vdmVyZmxvdy13aXRoLWZhZGUoQGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSksIEB0cmFuc3BhcmVudENvbG9yOiB0cmFuc3BhcmVudCwgQHdpZHRoOiAxLjg3NXJlbSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiBAd2lkdGg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAdHJhbnNwYXJlbnRDb2xvciAwJSwgQGNvbG9yIDgwJSwgQGNvbG9yIDEwMCUpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuXG4uY3JlYXRlU3RhY2tpbmdDb250ZXh0KCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4vL3NwYWNlc1xuLnR1aS1zcGFjZShAZGlyZWN0aW9uLCBAc2l6ZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGFsbCkge1xuICAgICAgICBtYXJnaW46IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdmVydGljYWwpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gaG9yaXpvbnRhbCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxufVxuXG4uY29udHJhc3QtYmFja2dyb3VuZChAYmFja2dyb3VuZCkge1xuICAgIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiBjb250cmFzdChAYmFja2dyb3VuZCwgIzMzMywgI2ZmZik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQoQGNvbG9yOiAjZmZmKSB7XG4gICAgYmFja2dyb3VuZDogZmFkZShAY29sb3IsIDcwJSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNDM3NXJlbSk7XG59XG5cbi5zY3JvbGxiYXItaGlkZGVuKCkge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIC8qIHN0eWxlbGludC1lbmFibGUqL1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG59XG5cbi8vIGhpZGUgYW4gZWxlbWVudCB2aXN1YWxseSB3aXRob3V0IGhpZGluZyBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG4uc3Itb25seSgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiAccordionExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-accordion-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/accordion/examples/3/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/accordion/examples/3/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiAccordionExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiAccordionExample3", function() { return TuiAccordionExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/accordion/accordion-item/accordion-item.component */ "../kit/components/accordion/accordion-item/accordion-item.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/accordion/accordion-item/accordion-item-content.directive */ "../kit/components/accordion/accordion-item/accordion-item-content.directive.ts");






function TuiAccordionExample3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Development kit consisting of the low level tools and abstractions used to develop Taiga UI Angular entities ");
} }
class TuiAccordionExample3 {
}
TuiAccordionExample3.ɵfac = function TuiAccordionExample3_Factory(t) { return new (t || TuiAccordionExample3)(); };
TuiAccordionExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiAccordionExample3, selectors: [["tui-accordion-example-3"]], decls: 3, vars: 0, consts: [[1, "container"], ["tuiAccordionItemContent", ""]], template: function TuiAccordionExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-accordion-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Taiga UI cdk ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiAccordionExample3_ng_template_2_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_3__["TuiAccordionItemComponent"], _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_4__["TuiAccordionItemContentDirective"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 37.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9hY2NvcmRpb24vZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2FjY29yZGlvbi9leGFtcGxlcy8zL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9hY2NvcmRpb24vZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAzNy41cmVtO1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzcuNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiAccordionExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-accordion-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/accordion/examples/4/index.ts":
/*!**************************************************************!*\
  !*** ./src/modules/components/accordion/examples/4/index.ts ***!
  \**************************************************************/
/*! exports provided: TuiAccordionExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiAccordionExample4", function() { return TuiAccordionExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/accordion/accordion-item/accordion-item.component */ "../kit/components/accordion/accordion-item/accordion-item.component.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/accordion/accordion-item/accordion-item-content.directive */ "../kit/components/accordion/accordion-item/accordion-item-content.directive.ts");
/* harmony import */ var _kit_components_accordion_accordion_item_accordion_item_eager_content_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/accordion/accordion-item/accordion-item-eager-content.directive */ "../kit/components/accordion/accordion-item/accordion-item-eager-content.directive.ts");







function TuiAccordionExample4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "I'm lazy content");
} }
class TuiAccordionExample4 {
}
TuiAccordionExample4.ɵfac = function TuiAccordionExample4_Factory(t) { return new (t || TuiAccordionExample4)(); };
TuiAccordionExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiAccordionExample4, selectors: [["tui-accordion-example-4"]], decls: 7, vars: 0, consts: [[1, "container"], ["tuiAccordionItemContent", ""]], template: function TuiAccordionExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-accordion-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Taiga UI lazy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiAccordionExample4_ng_template_2_Template, 1, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-accordion-item", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Taiga UI eager ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I'm eager content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_kit_components_accordion_accordion_item_accordion_item_component__WEBPACK_IMPORTED_MODULE_3__["TuiAccordionItemComponent"], _kit_components_accordion_accordion_item_accordion_item_content_directive__WEBPACK_IMPORTED_MODULE_4__["TuiAccordionItemContentDirective"], _kit_components_accordion_accordion_item_accordion_item_eager_content_directive__WEBPACK_IMPORTED_MODULE_5__["TuiAccordionItemEagerContentDirective"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 37.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9hY2NvcmRpb24vZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2FjY29yZGlvbi9leGFtcGxlcy80L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9hY2NvcmRpb24vZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAzNy41cmVtO1xufVxuIiwiLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMzcuNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiAccordionExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-accordion-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-accordion-accordion-module.js.map