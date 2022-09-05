(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-badge-badge-module"],{

/***/ "./src/modules/components/badge/badge.component.ts":
/*!*********************************************************!*\
  !*** ./src/modules/components/badge/badge.component.ts ***!
  \*********************************************************/
/*! exports provided: ExampleTuiBadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiBadgeComponent", function() { return ExampleTuiBadgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/badge/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/badge/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/badge/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/badge/examples/4/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../kit/components/toggle/toggle.component */ "../kit/components/toggle/toggle.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _kit_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../kit/components/badge/badge.component */ "../kit/components/badge/badge.component.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");



















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6226238482124767620$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__1 = goog.getMsg(" Badges show text and number values. Number values may show new message or notifications. ");
    I18N_0 = MSG_EXTERNAL_6226238482124767620$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟ca6efa872e6057ac47526bf61ae8ad55a93562cf␟6226238482124767620: Badges show text and number values. Number values may show new message or notifications. `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4867078294231331621$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__3 = goog.getMsg(" Use badges to attract attenton to a new or updated content. Number values may also be with \"+\" sign that shows that number is more than maximum value to show. ");
    I18N_2 = MSG_EXTERNAL_4867078294231331621$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟39838c102c049312ecb539610d6ab78253805f38␟4867078294231331621: Use badges to attract attenton to a new or updated content. Number values may also be with "+" sign that shows that number is more than maximum value to show. `;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__5 = goog.getMsg("Basic");
    I18N_4 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c6 = ["heading", I18N_4];
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4786079975066246634$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__8 = goog.getMsg("Sizes and hoverable");
    I18N_7 = MSG_EXTERNAL_4786079975066246634$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟0e61a2113a8f4bbd6ba3c991a972a4a5ca0386a3␟4786079975066246634:Sizes and hoverable`;
}
const _c9 = ["heading", I18N_7];
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7590013429208346303$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__11 = goog.getMsg("Custom");
    I18N_10 = MSG_EXTERNAL_7590013429208346303$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`;
}
const _c12 = ["heading", I18N_10];
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7005100758555430198$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__14 = goog.getMsg("With icon");
    I18N_13 = MSG_EXTERNAL_7005100758555430198$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟27ce7fa0c6db3c8f4d7045c3661f318da6ee9a9b␟7005100758555430198:With icon`;
}
const _c15 = ["heading", I18N_13];
function ExampleTuiBadgeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, _c6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-badge-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](8, _c9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-badge-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](11, _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-badge-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](14, _c15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-badge-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
} }
function ExampleTuiBadgeComponent_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-badge", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-svg", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverable", ctx_r3.hoverable)("size", ctx_r3.size)("status", ctx_r3.status)("value", ctx_r3.values[ctx_r3.value]);
} }
function ExampleTuiBadgeComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-badge", 14);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverable", ctx_r5.hoverable)("size", ctx_r5.size)("status", ctx_r5.status)("value", ctx_r5.values[ctx_r5.value]);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5631539240413317224$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS___17 = goog.getMsg(" Enable hovered state ");
    I18N_16 = MSG_EXTERNAL_5631539240413317224$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟835de877756233ad75dbf3f8b110329410fc6301␟5631539240413317224: Enable hovered state `;
}
function ExampleTuiBadgeComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_16);
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS___19 = goog.getMsg(" Size ");
    I18N_18 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiBadgeComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_18);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_588461094090172118$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS___21 = goog.getMsg(" Status changes badge color ");
    I18N_20 = MSG_EXTERNAL_588461094090172118$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟17264c5271356d4f957e279750570d27172c0a55␟588461094090172118: Status changes badge color `;
}
function ExampleTuiBadgeComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_20);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_47851853443220007$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS___23 = goog.getMsg(" Value. If value is a number and is more than 99, it will be replaced with \u00AB99+\u00BB ");
    I18N_22 = MSG_EXTERNAL_47851853443220007$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS___23;
}
else {
    I18N_22 = $localize `:␟0e38907576c8a8914ae8334668488260e57d319b␟47851853443220007: Value. If value is a number and is more than 99, it will be replaced with «99+» `;
}
function ExampleTuiBadgeComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_22);
} }
function ExampleTuiBadgeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiBadgeComponent_ng_template_2_ng_container_2_Template, 3, 4, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiBadgeComponent_ng_template_2_ng_template_3_Template, 1, 4, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " with icon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-toggle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExampleTuiBadgeComponent_ng_template_2_Template_tui_toggle_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.withIcon = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiBadgeComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiBadgeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.hoverable = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiBadgeComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiBadgeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiBadgeComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiBadgeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiBadgeComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiBadgeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.withIcon)("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("singleColor", true)("ngModel", ctx_r1.withIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.hoverable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.statusVariants)("documentationPropertyValue", ctx_r1.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4105165941448790841$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__25 = goog.getMsg(" Import {$startTagCode}TuiBadgeModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_24 = MSG_EXTERNAL_4105165941448790841$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__25;
}
else {
    I18N_24 = $localize `:␟d7a9c88967367a9da85db9cd9ada562102836da0␟4105165941448790841: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiBadgeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__27 = goog.getMsg("Add to the template:");
    I18N_26 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__27;
}
else {
    I18N_26 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiBadgeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiBadgeComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/3/index.less")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/badge/examples/4/index.html")),
        };
        this.statusVariants = [
            `default`,
            `primary`,
            `custom`,
            `success`,
            `error`,
            `warning`,
            `info`,
            `neutral`,
        ];
        this.status = this.statusVariants[0];
        this.values = {
            Taiga: `Taiga`,
            '5': 5,
            '100': 100,
            '"100"': `100`,
            '""': ``,
        };
        this.sizeVariants = [`xs`, `s`, `m`, `l`];
        this.size = this.sizeVariants[1];
        this.valueVariants = Object.keys(this.values);
        this.value = `Taiga`;
        this.hoverable = false;
        this.withIcon = false;
    }
}
ExampleTuiBadgeComponent.ɵfac = function ExampleTuiBadgeComponent_Factory(t) { return new (t || ExampleTuiBadgeComponent)(); };
ExampleTuiBadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiBadgeComponent, selectors: [["example-badge"]], decls: 4, vars: 0, consts: [["header", "Badge", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], ["id", "base", 3, "content", 6, "heading"], ["id", "size", 3, "content", 6, "heading"], ["id", "custom", 3, "content", 6, "heading"], ["id", "icons", 3, "content", 6, "heading"], [4, "ngIf", "ngIfElse"], ["withoutIcon", ""], [1, "tui-space_horizontal-2", 3, "singleColor", "ngModel", "ngModelChange"], ["documentationPropertyName", "hoverable", "documentationPropertyType", "boolean", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "status", "documentationPropertyMode", "input", "documentationPropertyType", "TuiStatus | TuiSupportColor", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "string | number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "hoverable", "size", "status", "value"], ["src", "tuiIconTooltip"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiBadgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiBadgeComponent_ng_template_1_Template, 16, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiBadgeComponent_ng_template_2_Template, 12, 11, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiBadgeComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiBadgeExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiBadgeExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_7__["TuiBadgeExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_8__["TuiBadgeExample4"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocDemoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _kit_components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_11__["TuiToggleComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__["TuiDocDocumentationPropertyConnectorDirective"], _kit_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_15__["TuiBadgeComponent"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_16__["TuiSvgComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_17__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiBadgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-badge`,
                templateUrl: `./badge.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/badge/badge.module.ts":
/*!******************************************************!*\
  !*** ./src/modules/components/badge/badge.module.ts ***!
  \******************************************************/
/*! exports provided: ExampleTuiBadgeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiBadgeModule", function() { return ExampleTuiBadgeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _badge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./badge.component */ "./src/modules/components/badge/badge.component.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/badge/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/badge/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/badge/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/badge/examples/4/index.ts");















class ExampleTuiBadgeModule {
}
ExampleTuiBadgeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiBadgeModule });
ExampleTuiBadgeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiBadgeModule_Factory(t) { return new (t || ExampleTuiBadgeModule)(); }, imports: [[
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiBadgeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiRepeatTimesModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_badge_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiBadgeComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiBadgeModule, { declarations: [_badge_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiBadgeComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiBadgeExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiBadgeExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_11__["TuiBadgeExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_12__["TuiBadgeExample4"]], imports: [_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiBadgeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiRepeatTimesModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiToggleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_badge_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiBadgeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiBadgeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiBadgeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiModeModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiRepeatTimesModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiSvgModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiToggleModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_badge_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiBadgeComponent"])),
                ],
                declarations: [
                    _badge_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiBadgeComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiBadgeExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiBadgeExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_11__["TuiBadgeExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_12__["TuiBadgeExample4"],
                ],
                exports: [_badge_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiBadgeComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/badge/examples/1/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/badge/examples/1/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiBadgeExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBadgeExample1", function() { return TuiBadgeExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/badge/badge.component */ "../kit/components/badge/badge.component.ts");
/* harmony import */ var _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/directives/mode/mode.directive */ "../core/directives/mode/mode.directive.ts");
/* harmony import */ var _cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../cdk/directives/repeat-times/repeat-times.directive */ "../cdk/directives/repeat-times/repeat-times.directive.ts");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5168008278809915722$$SRC_MODULES_COMPONENTS_BADGE_EXAMPLES_1_INDEX_TS_1 = goog.getMsg("Statuses");
    I18N_0 = MSG_EXTERNAL_5168008278809915722$$SRC_MODULES_COMPONENTS_BADGE_EXAMPLES_1_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟8a35b7aecbc09fd6b111ade416a7ed11371d95bd␟5168008278809915722:Statuses`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2548294080585673098$$SRC_MODULES_COMPONENTS_BADGE_EXAMPLES_1_INDEX_TS_3 = goog.getMsg(" Use CSS and {$startTagCode}status=\"custom\"{$closeTagCode} for support colors\n", { "startTagCode": "\uFFFD#15\uFFFD", "closeTagCode": "\uFFFD/#15\uFFFD" });
    I18N_2 = MSG_EXTERNAL_2548294080585673098$$SRC_MODULES_COMPONENTS_BADGE_EXAMPLES_1_INDEX_TS_3;
}
else {
    I18N_2 = $localize `:␟341ba0ba17100259ad46610fb7ae5593897d9335␟2548294080585673098: Use CSS and ${"\uFFFD#15\uFFFD"}:START_TAG_CODE:status="custom"${"\uFFFD/#15\uFFFD"}:CLOSE_TAG_CODE: for support colors
`;
}
function TuiBadgeExample1_tui_badge_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-badge", 11);
} if (rf & 2) {
    const index_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("tui-space_horizontal-2 tui-space_vertical-2 support-", index_r1 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverable", true);
} }
class TuiBadgeExample1 {
}
TuiBadgeExample1.ɵfac = function TuiBadgeExample1_Factory(t) { return new (t || TuiBadgeExample1)(); };
TuiBadgeExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiBadgeExample1, selectors: [["tui-badge-example-1"]], decls: 17, vars: 5, consts: [[1, "tui-space_right-2", 3, "value"], ["status", "primary", 1, "tui-space_right-2", 3, "value"], ["status", "success", "value", "Success", 1, "tui-space_right-2"], ["status", "error", "value", "Error", 1, "tui-space_right-2"], ["status", "warning", "value", "Warning", 1, "tui-space_right-2"], ["status", "neutral", "value", "Neutral", 1, "tui-space_right-2"], ["status", "info", "value", "Info", 1, "tui-space_right-2"], ["tuiMode", "onLight", 1, "tui-space_right-2", "outline", "outline_dark"], [3, "value"], ["tuiMode", "onDark", 1, "outline", "outline_light"], ["status", "custom", "value", "Taiga", 3, "class", "hoverable", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["status", "custom", "value", "Taiga", 3, "hoverable"]], template: function TuiBadgeExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-badge", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-badge", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-badge", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-badge", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-badge", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-badge", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-badge", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-badge", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-badge", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](14, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TuiBadgeExample1_tui_badge_16_Template, 1, 4, "tui-badge", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0 - 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiRepeatTimesOf", 20);
    } }, directives: [_kit_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_3__["TuiBadgeComponent"], _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_4__["TuiModeDirective"], _cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_5__["TuiRepeatTimesDirective"]], styles: [".outline[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem;\n  margin: -0.25rem 0;\n}\n.outline_light[_ngcontent-%COMP%] {\n  background: #30406a;\n}\n.outline_dark[_ngcontent-%COMP%] {\n  background: #e5e7ea;\n}\n.support-20[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-20, var(--tui-support-020));\n}\n.support-19[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-19, var(--tui-support-019));\n}\n.support-18[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-18, var(--tui-support-018));\n}\n.support-17[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-17, var(--tui-support-017));\n}\n.support-16[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-16, var(--tui-support-016));\n}\n.support-15[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-15, var(--tui-support-015));\n}\n.support-14[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-14, var(--tui-support-014));\n}\n.support-13[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-13, var(--tui-support-013));\n}\n.support-12[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-12, var(--tui-support-012));\n}\n.support-11[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-11, var(--tui-support-011));\n}\n.support-10[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-10, var(--tui-support-010));\n}\n.support-9[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-9, var(--tui-support-09));\n}\n.support-8[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-8, var(--tui-support-08));\n}\n.support-7[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-7, var(--tui-support-07));\n}\n.support-6[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-6, var(--tui-support-06));\n}\n.support-5[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-5, var(--tui-support-05));\n}\n.support-4[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-4, var(--tui-support-04));\n}\n.support-3[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-3, var(--tui-support-03));\n}\n.support-2[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-2, var(--tui-support-02));\n}\n.support-1[_ngcontent-%COMP%] {\n  background-color: var(--tui-support-1, var(--tui-support-01));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9iYWRnZS9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvYmFkZ2UvZXhhbXBsZXMvMS9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDSTtFQUNJLG1CQUFBO0FDQ1I7QURFSTtFQUNJLG1CQUFBO0FDQVI7QURWQztFQWtCTywrREFBQTtBQ0xSO0FEYkM7RUFrQk8sK0RBQUE7QUNGUjtBRGhCQztFQWtCTywrREFBQTtBQ0NSO0FEbkJDO0VBa0JPLCtEQUFBO0FDSVI7QUR0QkM7RUFrQk8sK0RBQUE7QUNPUjtBRHpCQztFQWtCTywrREFBQTtBQ1VSO0FENUJDO0VBa0JPLCtEQUFBO0FDYVI7QUQvQkM7RUFrQk8sK0RBQUE7QUNnQlI7QURsQ0M7RUFrQk8sK0RBQUE7QUNtQlI7QURyQ0M7RUFrQk8sK0RBQUE7QUNzQlI7QUR4Q0M7RUFrQk8sK0RBQUE7QUN5QlI7QUQzQ0M7RUFrQk8sNkRBQUE7QUM0QlI7QUQ5Q0M7RUFrQk8sNkRBQUE7QUMrQlI7QURqREM7RUFrQk8sNkRBQUE7QUNrQ1I7QURwREM7RUFrQk8sNkRBQUE7QUNxQ1I7QUR2REM7RUFrQk8sNkRBQUE7QUN3Q1I7QUQxREM7RUFrQk8sNkRBQUE7QUMyQ1I7QUQ3REM7RUFrQk8sNkRBQUE7QUM4Q1I7QURoRUM7RUFrQk8sNkRBQUE7QUNpRFI7QURuRUM7RUFrQk8sNkRBQUE7QUNvRFIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2JhZGdlL2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRsaW5lIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICBtYXJnaW46IC0wLjI1cmVtIDA7XG5cbiAgICAmX2xpZ2h0IHtcbiAgICAgICAgYmFja2dyb3VuZDogIzMwNDA2YTtcbiAgICB9XG5cbiAgICAmX2Rhcmsge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTVlN2VhO1xuICAgIH1cbn1cblxuQGl0ZXJhdGlvbnM6IDIwO1xuXG4ubG9vcCAoQGkpIHdoZW4gKEBpID4gMCkge1xuICAgIC5zdXBwb3J0LUB7aX0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB+J3ZhcigtLXR1aS1zdXBwb3J0LUB7aX0sIHZhcigtLXR1aS1zdXBwb3J0LTBAe2l9KSknO1xuICAgIH1cbiAgICAubG9vcChAaSAtIDEpO1xufVxuLmxvb3AgKEBpdGVyYXRpb25zKTtcbiIsIi5vdXRsaW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBtYXJnaW46IC0wLjI1cmVtIDA7XG59XG4ub3V0bGluZV9saWdodCB7XG4gIGJhY2tncm91bmQ6ICMzMDQwNmE7XG59XG4ub3V0bGluZV9kYXJrIHtcbiAgYmFja2dyb3VuZDogI2U1ZTdlYTtcbn1cbi5zdXBwb3J0LTIwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtMjAsIHZhcigtLXR1aS1zdXBwb3J0LTAyMCkpO1xufVxuLnN1cHBvcnQtMTkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC0xOSwgdmFyKC0tdHVpLXN1cHBvcnQtMDE5KSk7XG59XG4uc3VwcG9ydC0xOCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTE4LCB2YXIoLS10dWktc3VwcG9ydC0wMTgpKTtcbn1cbi5zdXBwb3J0LTE3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtMTcsIHZhcigtLXR1aS1zdXBwb3J0LTAxNykpO1xufVxuLnN1cHBvcnQtMTYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC0xNiwgdmFyKC0tdHVpLXN1cHBvcnQtMDE2KSk7XG59XG4uc3VwcG9ydC0xNSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTE1LCB2YXIoLS10dWktc3VwcG9ydC0wMTUpKTtcbn1cbi5zdXBwb3J0LTE0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtMTQsIHZhcigtLXR1aS1zdXBwb3J0LTAxNCkpO1xufVxuLnN1cHBvcnQtMTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC0xMywgdmFyKC0tdHVpLXN1cHBvcnQtMDEzKSk7XG59XG4uc3VwcG9ydC0xMiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTEyLCB2YXIoLS10dWktc3VwcG9ydC0wMTIpKTtcbn1cbi5zdXBwb3J0LTExIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtMTEsIHZhcigtLXR1aS1zdXBwb3J0LTAxMSkpO1xufVxuLnN1cHBvcnQtMTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC0xMCwgdmFyKC0tdHVpLXN1cHBvcnQtMDEwKSk7XG59XG4uc3VwcG9ydC05IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtOSwgdmFyKC0tdHVpLXN1cHBvcnQtMDkpKTtcbn1cbi5zdXBwb3J0LTgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC04LCB2YXIoLS10dWktc3VwcG9ydC0wOCkpO1xufVxuLnN1cHBvcnQtNyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTcsIHZhcigtLXR1aS1zdXBwb3J0LTA3KSk7XG59XG4uc3VwcG9ydC02IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtNiwgdmFyKC0tdHVpLXN1cHBvcnQtMDYpKTtcbn1cbi5zdXBwb3J0LTUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC01LCB2YXIoLS10dWktc3VwcG9ydC0wNSkpO1xufVxuLnN1cHBvcnQtNCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTQsIHZhcigtLXR1aS1zdXBwb3J0LTA0KSk7XG59XG4uc3VwcG9ydC0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtMywgdmFyKC0tdHVpLXN1cHBvcnQtMDMpKTtcbn1cbi5zdXBwb3J0LTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC0yLCB2YXIoLS10dWktc3VwcG9ydC0wMikpO1xufVxuLnN1cHBvcnQtMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTEsIHZhcigtLXR1aS1zdXBwb3J0LTAxKSk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiBadgeExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-badge-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/badge/examples/2/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/badge/examples/2/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiBadgeExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBadgeExample2", function() { return TuiBadgeExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/badge/badge.component */ "../kit/components/badge/badge.component.ts");





class TuiBadgeExample2 {
}
TuiBadgeExample2.ɵfac = function TuiBadgeExample2_Factory(t) { return new (t || TuiBadgeExample2)(); };
TuiBadgeExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiBadgeExample2, selectors: [["tui-badge-example-2"]], decls: 4, vars: 4, consts: [["size", "xs", "value", "Badge", 1, "tui-space_right-2", 3, "hoverable"], ["size", "s", "value", "Badge", 1, "tui-space_right-2", 3, "hoverable"], ["size", "m", "value", "Badge", 1, "tui-space_right-2", 3, "hoverable"], ["size", "l", "value", "Badge", 3, "hoverable"]], template: function TuiBadgeExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-badge", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-badge", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-badge", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-badge", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hoverable", true);
    } }, directives: [_kit_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_3__["TuiBadgeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiBadgeExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-badge-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/badge/examples/3/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/badge/examples/3/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiBadgeExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBadgeExample3", function() { return TuiBadgeExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/badge/badge.component */ "../kit/components/badge/badge.component.ts");





class TuiBadgeExample3 {
}
TuiBadgeExample3.ɵfac = function TuiBadgeExample3_Factory(t) { return new (t || TuiBadgeExample3)(); };
TuiBadgeExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiBadgeExample3, selectors: [["tui-badge-example-3"]], decls: 1, vars: 2, consts: [["size", "l", 1, "badge", 3, "value", "hoverable"]], template: function TuiBadgeExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-badge", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100)("hoverable", true);
    } }, directives: [_kit_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_3__["TuiBadgeComponent"]], styles: [".badge[_ngcontent-%COMP%] {\n  background-image: linear-gradient(45deg, #c86dd7 0%, #3023ae 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9iYWRnZS9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvYmFkZ2UvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL21peGlucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUMwUUksa0VBQUE7QUZwUUoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2JhZGdlL2V4YW1wbGVzLzMvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbi5iYWRnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2M4NmRkNyAwJSwgIzMwMjNhZSAxMDAlKTtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuLmJhZGdlIHtcbiAgICAuZ3JhZGllbnQoI2M4NmRkNywgIzMwMjNhZSk7XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiBadgeExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-badge-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/badge/examples/4/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/badge/examples/4/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiBadgeExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBadgeExample4", function() { return TuiBadgeExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/badge/badge.component */ "../kit/components/badge/badge.component.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");






class TuiBadgeExample4 {
}
TuiBadgeExample4.ɵfac = function TuiBadgeExample4_Factory(t) { return new (t || TuiBadgeExample4)(); };
TuiBadgeExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiBadgeExample4, selectors: [["tui-badge-example-4"]], decls: 8, vars: 0, consts: [["status", "success", "value", "Taiga", 1, "tui-space_right-2"], ["src", "tuiIconTooltip"], ["status", "error", "value", "Taiga", 1, "tui-space_right-2"], ["status", "default", 1, "tui-space_right-2"], ["status", "error", "value", "Custom template", 1, "tui-space_right-2"], [1, "custom-content"]], template: function TuiBadgeExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-badge", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-badge", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-badge", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-badge", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_kit_components_badge_badge_component__WEBPACK_IMPORTED_MODULE_3__["TuiBadgeComponent"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_4__["TuiSvgComponent"]], styles: [".custom-content[_ngcontent-%COMP%] {\n  margin: 0 0.5625rem 0 0.25rem;\n  width: 0.375rem;\n  height: 0.375rem;\n  background: currentColor;\n  display: block;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9iYWRnZS9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvYmFkZ2UvZXhhbXBsZXMvNC9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9iYWRnZS9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMCAwLjU2MjVyZW0gMCAwLjI1cmVtO1xuICAgIHdpZHRoOiAwLjM3NXJlbTtcbiAgICBoZWlnaHQ6IDAuMzc1cmVtO1xuICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iLCIuY3VzdG9tLWNvbnRlbnQge1xuICBtYXJnaW46IDAgMC41NjI1cmVtIDAgMC4yNXJlbTtcbiAgd2lkdGg6IDAuMzc1cmVtO1xuICBoZWlnaHQ6IDAuMzc1cmVtO1xuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiBadgeExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-badge-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-badge-badge-module.js.map