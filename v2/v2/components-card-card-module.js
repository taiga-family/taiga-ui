(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-card-card-module"],{

/***/ "./src/modules/components/card/card.component.ts":
/*!*******************************************************!*\
  !*** ./src/modules/components/card/card.component.ts ***!
  \*******************************************************/
/*! exports provided: ExampleTuiCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCardComponent", function() { return ExampleTuiCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/card/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/card/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/card/examples/3/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_commerce_components_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-commerce/components/card/card.component */ "../addon-commerce/components/card/card.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");














var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3623372078257453959$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__1 = goog.getMsg("Customizable card logo");
    I18N_0 = MSG_EXTERNAL_3623372078257453959$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟0b966d034584d5636641d94059abe08fd0b2296a␟3623372078257453959:Customizable card logo`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__3 = goog.getMsg("Basic");
    I18N_2 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2165905371258601036$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__6 = goog.getMsg("Sizes");
    I18N_5 = MSG_EXTERNAL_2165905371258601036$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2200427043930517540$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__9 = goog.getMsg("A cool one");
    I18N_8 = MSG_EXTERNAL_2200427043930517540$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟c12a6a8cffc2a80e28c8a558ded81554d2d38e25␟2200427043930517540:A cool one`;
}
const _c10 = ["heading", I18N_8];
function ExampleTuiCardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-card-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-card-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-card-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
} }
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4994672454532149706$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___12 = goog.getMsg(" Active state ");
    I18N_11 = MSG_EXTERNAL_4994672454532149706$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___12;
}
else {
    I18N_11 = $localize `:␟5f9cbf4fd42dd0b95ec02b0296a830bd38597b34␟4994672454532149706: Active state `;
}
function ExampleTuiCardComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_11);
} }
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4673690951539350231$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___14 = goog.getMsg(" Bank logo ");
    I18N_13 = MSG_EXTERNAL_4673690951539350231$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___14;
}
else {
    I18N_13 = $localize `:␟bf47fac0e4bb70480d93c1a43e877ba4d2adbc41␟4673690951539350231: Bank logo `;
}
function ExampleTuiCardComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_13);
} }
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7001324086178749695$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___16 = goog.getMsg(" Last four card number ");
    I18N_15 = MSG_EXTERNAL_7001324086178749695$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___16;
}
else {
    I18N_15 = $localize `:␟7c284b3737d125f140234d26835a6a4ad331dd5f␟7001324086178749695: Last four card number `;
}
function ExampleTuiCardComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_15);
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2136630088762891236$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___18 = goog.getMsg(" Payment system ");
    I18N_17 = MSG_EXTERNAL_2136630088762891236$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___18;
}
else {
    I18N_17 = $localize `:␟0a8c8b840b083ee95cbd4744ba5fd39234a91dc4␟2136630088762891236: Payment system `;
}
function ExampleTuiCardComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_17);
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___20 = goog.getMsg(" Size ");
    I18N_19 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS___20;
}
else {
    I18N_19 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiCardComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_19);
} }
function ExampleTuiCardComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiCardComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCardComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.active = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiCardComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCardComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.brandLogo = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiCardComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCardComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.cardNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiCardComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCardComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.paymentSystem = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiCardComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiCardComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx_r1.active)("brandLogo", ctx_r1.brandLogo)("cardNumber", ctx_r1.cardNumber)("paymentSystem", ctx_r1.paymentSystem)("size", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.brandLogoVariants)("documentationPropertyValue", ctx_r1.brandLogo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.cardNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.paymentSystemVariants)("documentationPropertyValue", ctx_r1.paymentSystem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3272984137524923070$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__22 = goog.getMsg(" Import {$startTagCode}TuiCardModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_21 = MSG_EXTERNAL_3272984137524923070$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__22;
}
else {
    I18N_21 = $localize `:␟f8fdf0ee03e79268dfe1ae340baacb9a662033f2␟3272984137524923070: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCardModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__24 = goog.getMsg("Add to the template:");
    I18N_23 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__24;
}
else {
    I18N_23 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_509976644121340015$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__26 = goog.getMsg(" Set card styles with {$startTagCode}color{$closeTagCode} , {$startTagCode}background-color{$closeTagCode} , {$startTagCode}background-image{$closeTagCode} : {$startTagTuiDocCode}{$closeTagTuiDocCode}", { "startTagCode": "[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]", "closeTagCode": "[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]", "startTagTuiDocCode": "\uFFFD#15\uFFFD", "closeTagTuiDocCode": "\uFFFD/#15\uFFFD" });
    I18N_25 = MSG_EXTERNAL_509976644121340015$$SRC_MODULES_COMPONENTS_CARD_CARD_COMPONENT_TS__26;
}
else {
    I18N_25 = $localize `:␟7703480e7189ddf37a5da1780ede90fb3f0d2be5␟509976644121340015: Set card styles with ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:color${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:background-color${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE: , ${"[\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:background-image${"[\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE: : ${"\uFFFD#15\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#15\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:`;
}
I18N_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_25);
function ExampleTuiCardComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](11, I18N_25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-doc-code", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleCustomizeStyles);
} }
const BRAND_LOGOS = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">
        <path fill="#424242" d="M4.7.3c-.5.4-.8 1.1-.2 1.9-1.7 1.2-2 2.7-2 4 0 1.4-.3 1.2.1 2.6 0 .1 0 .1-.1.1C.8 7.7-.2 4 2.6 2c.1-.1 0-.1-.2 0C0 3.4-.2 5.9.2 7.7c.2.8-.1 1 .2 2.1.7 2.3 1.3 2.5 2.2 2.5 1.6 0 .5-.9.6-2 0-.1.1-.1.1 0 .9 2 1.5 3.9 3.7 3.7 1.3-.2.6-.9.5-1.2-1-3.3 1.4-4.1.7-.9-.4 1.9.9 1.7 1.9 1 1-.7 2.3-5.2 1.5-7.7 0-.2-.1-.1-.1 0 0 1.6-.9 3.3-2.8 3.3-.5 0-.3.8-1.2.4-.2-.3-.5-.2-.7-.2-.2.1-.5.2-.8-.4-.1-.3-.2-.4-.4-.4-1.9-.5-2.5-3.3-.8-5.5.3.2.5.2.8-.1.2-.2.5-.4.7-.4.4-.2.6-.3.3-1.1-.3-.6-.7-.8-1-.8-.4 0-.7.2-.9.3m1.8 8.6c.5.1 1 .2 1.3.2 0 .3-.3.4-.5.4-.4 0-.8-.2-.8-.6m3.2-7.6c-.3.5-.2.8.1 1 .2.1.6.4.8.7.4.6 1.1 0 1.3-.5.2-.4.1-.9-.4-1.4-.2-.2-.5-.3-.8-.4-.4 0-.7.2-1 .6M5.8 4.6c-1 .6-1 1.8-.4 2.1.7.3 1-.6 1.4-1v-.1c0-.6-.2-1.2-.7-1.2-.1.1-.2.2-.3.2m3.3.4c-.4 0-.6.4-.8.9V6c.4.4.4 1.8 1.4 1.2.6-.3.6-1.7-.2-2.1-.1-.1-.2-.1-.4-.1M6.9 7.5c-.5.1-.5.5-.3.5.2.1.4.1.6.4.2.3.1-.1.7-.2.4 0 .3-.4 0-.5-.4-.1-.7-.2-1-.2"/>
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
        <path fill="#1A9F29" d="M0 6.7v-.4l4.2 2.4 9-5.2c.5 1 .8 2.1.8 3.2 0 3.9-3.1 7.1-7 7.1s-7-3.2-7-7.1zm4.2 1.1L.1 5.5c.1-.3.1-.5.2-.8l3.9 2.2 8.1-4.7c.2.2.3.4.5.6l-8.6 5zm0-1.8L.6 4c.1-.2.2-.5.3-.7l3.3 1.9 7-4.1c.2.2.4.3.6.5L4.2 6zm0-1.8L1.3 2.6c.2-.2.3-.4.5-.6l2.4 1.4L9.7.2c.3.1.5.3.8.4L4.2 4.2z"/>
    </svg>`,
];
class ExampleTuiCardComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/import/insert-template.md"));
        this.exampleCustomizeStyles = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-customize-styles-md */ "!!raw-loader!-examples-import-customize-styles-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/customize-styles.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/import/customize-styles.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/2/index.less")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/card/examples/3/index.less")),
        };
        this.paymentSystemVariants = [
            "visa" /* Visa */,
            "maestro" /* Maestro */,
            "mastercard" /* Mastercard */,
            "mir" /* Mir */,
        ];
        this.brandLogoVariants = [``, ...BRAND_LOGOS];
        this.sizeVariants = [`s`, `m`];
        this.active = false;
        this.brandLogo = this.brandLogoVariants[0];
        this.cardNumber = `9999`;
        this.paymentSystem = null;
        this.size = `m`;
    }
}
ExampleTuiCardComponent.ɵfac = function ExampleTuiCardComponent_Factory(t) { return new (t || ExampleTuiCardComponent)(); };
ExampleTuiCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiCardComponent, selectors: [["example-tui-card"]], decls: 4, vars: 0, consts: [["header", "Card", "package", "ADDON-COMMERCE", "type", "components"], ["pageTab", ""], ["id", "base", 3, "content", 6, "heading"], ["id", "sizes", 3, "content", 6, "heading"], ["id", "best", 3, "content", 6, "heading"], [1, "logo", 3, "active", "brandLogo", "cardNumber", "paymentSystem", "size"], ["documentationPropertyName", "active", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "brandLogo", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "cardNumber", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "paymentSystem", "documentationPropertyMode", "input", "documentationPropertyType", "TuiPaymentSystem | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"], ["filename", "myComponent.style.less", 3, "code"]], template: function ExampleTuiCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiCardComponent_ng_template_1_Template, 11, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiCardComponent_ng_template_2_Template, 8, 13, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiCardComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiCardExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiCardExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_7__["TuiCardExample3"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocDemoComponent"], _addon_commerce_components_card_card_component__WEBPACK_IMPORTED_MODULE_9__["TuiCardComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocCodeComponent"]], styles: [".logo[_ngcontent-%COMP%] {\n  color: var(--tui-base-09);\n  background-color: var(--tui-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJkL2NhcmQuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJkL2NhcmQuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEO0VBQ0kseUJBQUE7RUFDQSxvQ0FBQTtBREtKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJkL2NhcmQuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi5sb2dvIHtcbiAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXByaW1hcnkpO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG4ubG9nbyB7XG4gICAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktcHJpbWFyeSk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-card`,
                templateUrl: `./card.template.html`,
                styleUrls: [`card.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/card/card.module.ts":
/*!****************************************************!*\
  !*** ./src/modules/components/card/card.module.ts ***!
  \****************************************************/
/*! exports provided: ExampleTuiCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiCardModule", function() { return ExampleTuiCardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card.component */ "./src/modules/components/card/card.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/card/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/card/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/card/examples/3/index.ts");











class ExampleTuiCardModule {
}
ExampleTuiCardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiCardModule });
ExampleTuiCardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiCardModule_Factory(t) { return new (t || ExampleTuiCardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiCardModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_card_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCardComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiCardModule, { declarations: [_card_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCardComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiCardExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiCardExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_8__["TuiCardExample3"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiCardModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_card_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiCardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_3__["TuiCardModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_card_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCardComponent"])),
                ],
                declarations: [
                    _card_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCardComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiCardExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiCardExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_8__["TuiCardExample3"],
                ],
                exports: [_card_component__WEBPACK_IMPORTED_MODULE_5__["ExampleTuiCardComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/card/examples/1/index.ts":
/*!*********************************************************!*\
  !*** ./src/modules/components/card/examples/1/index.ts ***!
  \*********************************************************/
/*! exports provided: TuiCardExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCardExample1", function() { return TuiCardExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_commerce_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/card/card.component */ "../addon-commerce/components/card/card.component.ts");





class TuiCardExample1 {
}
TuiCardExample1.ɵfac = function TuiCardExample1_Factory(t) { return new (t || TuiCardExample1)(); };
TuiCardExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCardExample1, selectors: [["tui-card-example-1"]], decls: 1, vars: 1, consts: [["cardNumber", "1234", "paymentSystem", "visa", 1, "logo", 3, "active"]], template: function TuiCardExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", true);
    } }, directives: [_addon_commerce_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["TuiCardComponent"]], styles: [".logo[_ngcontent-%COMP%] {\n  color: var(--tui-base-01);\n  background-color: var(--tui-base-09);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJkL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJkL2V4YW1wbGVzLzEvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esb0NBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvY2FyZC9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gICAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktYmFzZS0wOSk7XG59XG4iLCIubG9nbyB7XG4gIGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCardExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-card-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/card/examples/2/index.ts":
/*!*********************************************************!*\
  !*** ./src/modules/components/card/examples/2/index.ts ***!
  \*********************************************************/
/*! exports provided: TuiCardExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCardExample2", function() { return TuiCardExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_commerce_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/card/card.component */ "../addon-commerce/components/card/card.component.ts");





class TuiCardExample2 {
}
TuiCardExample2.ɵfac = function TuiCardExample2_Factory(t) { return new (t || TuiCardExample2)(); };
TuiCardExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCardExample2, selectors: [["tui-card-example-2"]], decls: 2, vars: 0, consts: [["size", "s", "cardNumber", "1234", "paymentSystem", "visa", 1, "logo"], ["cardNumber", "1234", "paymentSystem", "visa", 1, "logo"]], template: function TuiCardExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-card", 1);
    } }, directives: [_addon_commerce_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["TuiCardComponent"]], styles: [".logo[_ngcontent-%COMP%] {\n  color: var(--tui-base-09);\n  background-color: var(--tui-primary);\n  margin: 1rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJkL2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJkL2V4YW1wbGVzLzIvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2NhcmQvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAgIGNvbG9yOiB2YXIoLS10dWktYmFzZS0wOSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXByaW1hcnkpO1xuICAgIG1hcmdpbjogMXJlbSAwO1xufVxuIiwiLmxvZ28ge1xuICBjb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktcHJpbWFyeSk7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCardExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-card-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/card/examples/3/index.ts":
/*!*********************************************************!*\
  !*** ./src/modules/components/card/examples/3/index.ts ***!
  \*********************************************************/
/*! exports provided: TuiCardExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiCardExample3", function() { return TuiCardExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_commerce_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/card/card.component */ "../addon-commerce/components/card/card.component.ts");





class TuiCardExample3 {
    constructor() {
        this.paymentSystem = "mir" /* Mir */;
        this.brandLogo = `https://ng-web-apis.github.io/dist/assets/images/web-api.svg`;
    }
}
TuiCardExample3.ɵfac = function TuiCardExample3_Factory(t) { return new (t || TuiCardExample3)(); };
TuiCardExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiCardExample3, selectors: [["tui-card-example-3"]], decls: 1, vars: 2, consts: [["cardNumber", "7777", 1, "logo", 3, "brandLogo", "paymentSystem"]], template: function TuiCardExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-card", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("brandLogo", ctx.brandLogo)("paymentSystem", ctx.paymentSystem);
    } }, directives: [_addon_commerce_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["TuiCardComponent"]], styles: ["@-webkit-keyframes spinCard {\n  0% {\n    transform: rotateY(0);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);\n  }\n  12% {\n    transform: rotateY(90deg) rotateZ(6deg) scale(1.7);\n    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.3);\n  }\n  25% {\n    transform: rotateY(180deg);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);\n  }\n  50% {\n    transform: rotateY(180deg);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);\n  }\n  62% {\n    transform: rotateY(270deg) rotateZ(-8deg) scale(1.7);\n    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.3);\n  }\n  80% {\n    transform: rotateY(720deg);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);\n  }\n  100% {\n    transform: rotateY(720deg);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);\n  }\n}\n@keyframes spinCard {\n  0% {\n    transform: rotateY(0);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);\n  }\n  12% {\n    transform: rotateY(90deg) rotateZ(6deg) scale(1.7);\n    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.3);\n  }\n  25% {\n    transform: rotateY(180deg);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);\n  }\n  50% {\n    transform: rotateY(180deg);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);\n  }\n  62% {\n    transform: rotateY(270deg) rotateZ(-8deg) scale(1.7);\n    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.3);\n  }\n  80% {\n    transform: rotateY(720deg);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);\n  }\n  100% {\n    transform: rotateY(720deg);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3);\n  }\n}\n[_nghost-%COMP%] {\n  perspective: 50rem;\n}\n.logo[_ngcontent-%COMP%] {\n  color: var(--tui-base-01);\n  background-color: #7c48c3;\n  background-image: linear-gradient(45deg, #c86dd7 0%, #3023ae 100%);\n  margin-bottom: 1rem;\n  -webkit-animation: spinCard 5s infinite;\n          animation: spinCard 5s infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJkL2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9jYXJkL2V4YW1wbGVzLzMvaW5kZXgubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0kscUJBQUE7SUFDQSxzQ0FBQTtFQ0NOO0VERUU7SUFDSSxrREFBQTtJQUNBLGlEQUFBO0VDQU47RURHRTtJQUNJLDBCQUFBO0lBQ0Esc0NBQUE7RUNETjtFRElFO0lBQ0ksMEJBQUE7SUFDQSxzQ0FBQTtFQ0ZOO0VES0U7SUFDSSxvREFBQTtJQUNBLGlEQUFBO0VDSE47RURNRTtJQUNJLDBCQUFBO0lBQ0Esc0NBQUE7RUNKTjtFRE9FO0lBQ0ksMEJBQUE7SUFDQSxzQ0FBQTtFQ0xOO0FBQ0Y7QUQ3QkE7RUFDSTtJQUNJLHFCQUFBO0lBQ0Esc0NBQUE7RUNDTjtFREVFO0lBQ0ksa0RBQUE7SUFDQSxpREFBQTtFQ0FOO0VER0U7SUFDSSwwQkFBQTtJQUNBLHNDQUFBO0VDRE47RURJRTtJQUNJLDBCQUFBO0lBQ0Esc0NBQUE7RUNGTjtFREtFO0lBQ0ksb0RBQUE7SUFDQSxpREFBQTtFQ0hOO0VETUU7SUFDSSwwQkFBQTtJQUNBLHNDQUFBO0VDSk47RURPRTtJQUNJLDBCQUFBO0lBQ0Esc0NBQUE7RUNMTjtBQUNGO0FEUUE7RUFDSSxrQkFBQTtBQ05KO0FEU0E7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7QUNQSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvY2FyZC9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHNwaW5DYXJkIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgwKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgfVxuXG4gICAgMTIlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSByb3RhdGVaKDZkZWcpIHNjYWxlKDEuNyk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgfVxuXG4gICAgMjUlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB9XG5cbiAgICA2MiUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjcwZGVnKSByb3RhdGVaKC04ZGVnKSBzY2FsZSgxLjcpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC41cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIH1cblxuICAgIDgwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSg3MjBkZWcpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICB9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDcyMGRlZyk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIH1cbn1cblxuOmhvc3Qge1xuICAgIHBlcnNwZWN0aXZlOiA1MHJlbTtcbn1cblxuLmxvZ28ge1xuICAgIGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdjNDhjMztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNjODZkZDcgMCUsICMzMDIzYWUgMTAwJSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBhbmltYXRpb246IHNwaW5DYXJkIDVzIGluZmluaXRlO1xufVxuIiwiQGtleWZyYW1lcyBzcGluQ2FyZCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cbiAgMTIlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHJvdGF0ZVooNmRlZykgc2NhbGUoMS43KTtcbiAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC41cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuICA2MiUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgyNzBkZWcpIHJvdGF0ZVooLThkZWcpIHNjYWxlKDEuNyk7XG4gICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgfVxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg3MjBkZWcpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSg3MjBkZWcpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB9XG59XG46aG9zdCB7XG4gIHBlcnNwZWN0aXZlOiA1MHJlbTtcbn1cbi5sb2dvIHtcbiAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjNDhjMztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjYzg2ZGQ3IDAlLCAjMzAyM2FlIDEwMCUpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBhbmltYXRpb246IHNwaW5DYXJkIDVzIGluZmluaXRlO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiCardExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-card-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-card-card-module.js.map