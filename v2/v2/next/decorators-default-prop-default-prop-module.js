(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["decorators-default-prop-default-prop-module"],{

/***/ "./src/modules/decorators/default-prop/default-prop-demo.component.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/decorators/default-prop/default-prop-demo.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExampleTuiDefaultPropDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiDefaultPropDemoComponent", function() { return ExampleTuiDefaultPropDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");





// @dynamic
class ExampleTuiDefaultPropDemoComponent {
    constructor() {
        this.quantity = 10;
    }
}
ExampleTuiDefaultPropDemoComponent.ɵfac = function ExampleTuiDefaultPropDemoComponent_Factory(t) { return new (t || ExampleTuiDefaultPropDemoComponent)(); };
ExampleTuiDefaultPropDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExampleTuiDefaultPropDemoComponent, selectors: [["example-tui-default-prop-demo"]], inputs: { quantity: "quantity" }, decls: 1, vars: 1, template: function ExampleTuiDefaultPropDemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Value: ", ctx.quantity, " ");
    } }, encapsulation: 2, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])(quantity => Number.isInteger(quantity) && quantity >= 5, `Should be integer number more than min value`)
], ExampleTuiDefaultPropDemoComponent.prototype, "quantity", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiDefaultPropDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `example-tui-default-prop-demo`,
                template: `
        Value: {{ quantity }}
    `,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], null, { quantity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/modules/decorators/default-prop/default-prop.component.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/decorators/default-prop/default-prop.component.ts ***!
  \***********************************************************************/
/*! exports provided: ExampleTuiDefaultPropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiDefaultPropComponent", function() { return ExampleTuiDefaultPropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _default_prop_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default-prop-demo.component */ "./src/modules/decorators/default-prop/default-prop-demo.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../kit/components/input-count/input-count.component */ "../kit/components/input-count/input-count.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../kit/components/input-count/input-count.directive */ "../kit/components/input-count/input-count.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_522844369784178860$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS_1 = goog.getMsg("DefaultProp");
    I18N_0 = MSG_EXTERNAL_522844369784178860$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟bd478366cc63c9ccb5b3e92f86050c481b7591b5␟522844369784178860:DefaultProp`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7864857168300771288$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__4 = goog.getMsg(" Decorator for {$startTagCode}@Input{$closeTagCode} with default value ", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_3 = MSG_EXTERNAL_7864857168300771288$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟b479593d371922844693f61ecc8c2d2c83095263␟7864857168300771288: Decorator for ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:@Input${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: with default value `;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_513026917173447768$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__6 = goog.getMsg("{$startTagStrong}Warning:{$closeTagStrong} decorator overrides getter/setter of input ", { "startTagStrong": "\uFFFD#5\uFFFD", "closeTagStrong": "\uFFFD/#5\uFFFD" });
    I18N_5 = MSG_EXTERNAL_513026917173447768$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟1a3f8851a234dde79761d6a9557bf35119e641f5␟513026917173447768:${"\uFFFD#5\uFFFD"}:START_TAG_STRONG:Warning:${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_STRONG: decorator overrides getter/setter of input `;
}
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1154495950552112516$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__8 = goog.getMsg(" Decorator stops {$startTagCode}undefined{$closeTagCode} values if they were passed into input. If it gets {$startTagCode}undefined{$closeTagCode} , it will use default value and show an error message about the problem in console in dev mode. ", { "startTagCode": "[\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]", "closeTagCode": "[\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]" });
    I18N_7 = MSG_EXTERNAL_1154495950552112516$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟fba6b15cd88a236beca1ec53bf2c1ab833c2708d␟1154495950552112516: Decorator stops ${"[\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:undefined${"[\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE: values if they were passed into input. If it gets ${"[\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:undefined${"[\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE: , it will use default value and show an error message about the problem in console in dev mode. `;
}
I18N_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_7);
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8401742800971685051$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__10 = goog.getMsg(" See {$startLink} RequiredSetter {$closeLink} for work with setters ", { "startLink": "\uFFFD#12\uFFFD", "closeLink": "\uFFFD/#12\uFFFD" });
    I18N_9 = MSG_EXTERNAL_8401742800971685051$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__10;
}
else {
    I18N_9 = $localize `:␟1966746bf1c3090742685460bf263070f01e6d1b␟8401742800971685051: See ${"\uFFFD#12\uFFFD"}:START_LINK: RequiredSetter ${"\uFFFD/#12\uFFFD"}:CLOSE_LINK: for work with setters `;
}
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1191829810746348448$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__12 = goog.getMsg("See console. Min value is 5");
    I18N_11 = MSG_EXTERNAL_1191829810746348448$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟bbd1f9f56a2c3fe7bb73c5fd19c82bb37d867b3f␟1191829810746348448:See console. Min value is 5`;
}
const _c13 = function () { return ["/decorators/required-setter"]; };
function ExampleTuiDefaultPropComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](4, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](7, I18N_7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](11, I18N_9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, I18N_11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "example-tui-default-prop-demo", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tui-input-count", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExampleTuiDefaultPropComponent_ng_template_2_Template_tui_input_count_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleTuiDefaultPropComponent_ng_template_2_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.setUndefined(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Set undefined ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("quantity", ctx_r0.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.quantity);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3681048247412483149$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__15 = goog.getMsg(" You can also pass contract function of type {$startTagCode}TuiBooleanHandler<T>{$closeTagCode} with the component instance as {$startTagCode}this{$closeTagCode} . If check is unsuccessful, it shows an error message about the problem in console in dev mode. ", { "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]", "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]" });
    I18N_14 = MSG_EXTERNAL_3681048247412483149$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟a9bcea955a7d713b61905813ac19969c8b949d5a␟3681048247412483149: You can also pass contract function of type ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:TuiBooleanHandler<T>${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: with the component instance as ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:this${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: . If check is unsuccessful, it shows an error message about the problem in console in dev mode. `;
}
I18N_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_14);
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7696177181775490329$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS___17 = goog.getMsg(" Optional argument, contract function {$startParagraph}{$startTagStrong}Warning:{$closeTagStrong} Angular Compiler does not allow arrow functions in decorators with {$startTagCode}strictMetadataEmit{$closeTagCode} (by default). Add {$startTagCode}// @dynamic{$closeTagCode} comment right above your {$startTagCode}@Component{$closeTagCode} decorator to use them {$closeParagraph}", { "startParagraph": "\uFFFD#1\uFFFD", "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD", "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]", "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]", "closeParagraph": "\uFFFD/#1\uFFFD" });
    I18N_16 = MSG_EXTERNAL_7696177181775490329$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟a6168cda02acde5706ae7cd74f05d4a00f2c7587␟7696177181775490329: Optional argument, contract function ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Warning:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG: Angular Compiler does not allow arrow functions in decorators with ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:strictMetadataEmit${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: (by default). Add ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:// @dynamic${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: comment right above your ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:@Component${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: decorator to use them ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
}
I18N_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_16);
function ExampleTuiDefaultPropComponent_ng_template_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6460611501050052701$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS___19 = goog.getMsg(" Arguments for console.error if check is unsuccessful ");
    I18N_18 = MSG_EXTERNAL_6460611501050052701$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟ebcfa697b45b5a9b73277d1ce04941b18254fb2f␟6460611501050052701: Arguments for console.error if check is unsuccessful `;
}
function ExampleTuiDefaultPropComponent_ng_template_3_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_18);
} }
function ExampleTuiDefaultPropComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiDefaultPropComponent_ng_template_3_ng_template_5_Template, 6, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiDefaultPropComponent_ng_template_3_ng_template_6_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5682654845346006339$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__21 = goog.getMsg(" Add {$startTagCode}@tuiDefaultProp{$closeTagCode} to input of your component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_20 = MSG_EXTERNAL_5682654845346006339$$SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__21;
}
else {
    I18N_20 = $localize `:␟70fdf68f9880c2f40203f1ff7fe9c47e379498b9␟5682654845346006339: Add ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:@tuiDefaultProp${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: to input of your component `;
}
function ExampleTuiDefaultPropComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleDecorator);
} }
class ExampleTuiDefaultPropComponent {
    constructor() {
        this.exampleDecorator = __webpack_require__.e(/*! import() | !raw-loader!-import-example-decorator-md */ "!!raw-loader!-import-example-decorator-md").then(__webpack_require__.bind(null, /*! !raw-loader!./import/example-decorator.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/decorators/default-prop/import/example-decorator.md"));
        this.quantity = 10;
    }
    setUndefined() {
        this.quantity = undefined;
    }
}
ExampleTuiDefaultPropComponent.ɵfac = function ExampleTuiDefaultPropComponent_Factory(t) { return new (t || ExampleTuiDefaultPropComponent)(); };
ExampleTuiDefaultPropComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiDefaultPropComponent, selectors: [["example-tui-default-prop"]], decls: 5, vars: 0, consts: [["package", "CDK", "path", "cdk/decorators/default-prop.ts", 6, "header"], ["pageTab", ""], [1, "tui-space_bottom-3"], ["tuiLink", "", 3, "routerLink"], [3, "quantity"], [1, "tui-space_top-4", 3, "ngModel", "ngModelChange"], ["tuiButton", "", "type", "button", 1, "tui-space_top-4", "tui-space_bottom-8", 3, "click"], ["documentationPropertyName", "assertion", "documentationPropertyType", "TuiBooleanHandler<T>"], ["documentationPropertyName", "args", "documentationPropertyType", "any"], [1, "b-demo-steps"], ["filename", "myComponent.component.ts", 3, "code"]], template: function ExampleTuiDefaultPropComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiDefaultPropComponent_ng_template_2_Template, 21, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiDefaultPropComponent_ng_template_3_Template, 7, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiDefaultPropComponent_ng_template_4_Template, 6, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _default_prop_demo_component__WEBPACK_IMPORTED_MODULE_6__["ExampleTuiDefaultPropDemoComponent"], _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_7__["TuiInputCountComponent"], _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_8__["TuiInputCountDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_10__["TuiButtonComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_12__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiDefaultPropComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-default-prop`,
                templateUrl: `./default-prop.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/decorators/default-prop/default-prop.module.ts":
/*!********************************************************************!*\
  !*** ./src/modules/decorators/default-prop/default-prop.module.ts ***!
  \********************************************************************/
/*! exports provided: ExampleTuiDefaultPropModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiDefaultPropModule", function() { return ExampleTuiDefaultPropModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _default_prop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default-prop.component */ "./src/modules/decorators/default-prop/default-prop.component.ts");
/* harmony import */ var _default_prop_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default-prop-demo.component */ "./src/modules/decorators/default-prop/default-prop-demo.component.ts");











class ExampleTuiDefaultPropModule {
}
ExampleTuiDefaultPropModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiDefaultPropModule });
ExampleTuiDefaultPropModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiDefaultPropModule_Factory(t) { return new (t || ExampleTuiDefaultPropModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputCountModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_default_prop_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiDefaultPropComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiDefaultPropModule, { declarations: [_default_prop_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiDefaultPropComponent"], _default_prop_demo_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiDefaultPropDemoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputCountModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_default_prop_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiDefaultPropComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiDefaultPropModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputCountModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_default_prop_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiDefaultPropComponent"])),
                ],
                declarations: [_default_prop_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiDefaultPropComponent"], _default_prop_demo_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiDefaultPropDemoComponent"]],
                exports: [_default_prop_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiDefaultPropComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=decorators-default-prop-default-prop-module.js.map