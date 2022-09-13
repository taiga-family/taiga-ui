(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["decorators-required-setter-required-setter-module"],{

/***/ "./src/modules/decorators/required-setter/required-setter-demo.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/modules/decorators/required-setter/required-setter-demo.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ExampleTuiRequiredSetterDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiRequiredSetterDemoComponent", function() { return ExampleTuiRequiredSetterDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");






function ExampleTuiRequiredSetterDemoComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2665");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
// @dynamic
class ExampleTuiRequiredSetterDemoComponent {
    constructor() {
        this.items = [];
    }
    set quantity(quantity) {
        this.items = new Array(quantity).fill(Math.floor(Math.random() * Math.floor(100)));
    }
}
ExampleTuiRequiredSetterDemoComponent.ɵfac = function ExampleTuiRequiredSetterDemoComponent_Factory(t) { return new (t || ExampleTuiRequiredSetterDemoComponent)(); };
ExampleTuiRequiredSetterDemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExampleTuiRequiredSetterDemoComponent, selectors: [["example-tui-required-setter-demo"]], inputs: { quantity: "quantity" }, decls: 1, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function ExampleTuiRequiredSetterDemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ExampleTuiRequiredSetterDemoComponent_span_0_Template, 2, 0, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiRequiredSetter"])(quantity => Number.isInteger(quantity) && quantity >= 5, `Should be integer number more than min value`)
], ExampleTuiRequiredSetterDemoComponent.prototype, "quantity", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiRequiredSetterDemoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `example-tui-required-setter-demo`,
                template: `
        <span *ngFor="let item of items">♥</span>
    `,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], null, { quantity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/modules/decorators/required-setter/required-setter.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/decorators/required-setter/required-setter.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ExampleTuiRequiredSetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiRequiredSetterComponent", function() { return ExampleTuiRequiredSetterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _required_setter_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./required-setter-demo.component */ "./src/modules/decorators/required-setter/required-setter-demo.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../kit/components/input-count/input-count.component */ "../kit/components/input-count/input-count.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../kit/components/input-count/input-count.directive */ "../kit/components/input-count/input-count.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");













var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2367293663967371431$$SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS_1 = goog.getMsg("RequiredSetter");
    I18N_0 = MSG_EXTERNAL_2367293663967371431$$SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟d72935e6ff64a11259561cf6e2fd9e2038d79f56␟2367293663967371431:RequiredSetter`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2999749383994622770$$SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__4 = goog.getMsg("Decorator setter @Input");
    I18N_3 = MSG_EXTERNAL_2999749383994622770$$SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟95c1055c7445d625ddf1b130f7f49ba1f5734478␟2999749383994622770:Decorator setter @Input`;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1741815834115405259$$SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__6 = goog.getMsg(" Decorator stops {$startTagCode}undefined{$closeTagCode} values if they were passed into setter input. If it gets {$startTagCode}undefined{$closeTagCode} , setter will not be called and it will show an error message about the problem in console in dev mode. ", { "startTagCode": "[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]", "closeTagCode": "[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]" });
    I18N_5 = MSG_EXTERNAL_1741815834115405259$$SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟ad9e2bc19537c8a04f714a5a8819e12a35a46703␟1741815834115405259: Decorator stops ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:undefined${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: values if they were passed into setter input. If it gets ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:undefined${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: , setter will not be called and it will show an error message about the problem in console in dev mode. `;
}
I18N_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_5);
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1191829810746348448$$SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__8 = goog.getMsg("See console. Min value is 5");
    I18N_7 = MSG_EXTERNAL_1191829810746348448$$SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟bbd1f9f56a2c3fe7bb73c5fd19c82bb37d867b3f␟1191829810746348448:See console. Min value is 5`;
}
function ExampleTuiRequiredSetterComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "example-tui-required-setter-demo", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-input-count", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExampleTuiRequiredSetterComponent_ng_template_2_Template_tui_input_count_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExampleTuiRequiredSetterComponent_ng_template_2_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.setUndefined(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Set undefined ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("quantity", ctx_r0.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.quantity);
} }
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3681048247412483149$$SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__10 = goog.getMsg(" You can also pass contract function of type {$startTagCode}TuiBooleanHandler<T>{$closeTagCode} with the component instance as {$startTagCode}this{$closeTagCode} . If check is unsuccessful, it shows an error message about the problem in console in dev mode. ", { "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]", "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]" });
    I18N_9 = MSG_EXTERNAL_3681048247412483149$$SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__10;
}
else {
    I18N_9 = $localize `:␟a9bcea955a7d713b61905813ac19969c8b949d5a␟3681048247412483149: You can also pass contract function of type ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:TuiBooleanHandler<T>${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: with the component instance as ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:this${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: . If check is unsuccessful, it shows an error message about the problem in console in dev mode. `;
}
I18N_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_9);
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7696177181775490329$$SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS___12 = goog.getMsg(" Optional argument, contract function {$startParagraph}{$startTagStrong}Warning:{$closeTagStrong} Angular Compiler does not allow arrow functions in decorators with {$startTagCode}strictMetadataEmit{$closeTagCode} (by default). Add {$startTagCode}// @dynamic{$closeTagCode} comment right above your {$startTagCode}@Component{$closeTagCode} decorator to use them {$closeParagraph}", { "startParagraph": "\uFFFD#1\uFFFD", "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD", "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]", "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]", "closeParagraph": "\uFFFD/#1\uFFFD" });
    I18N_11 = MSG_EXTERNAL_7696177181775490329$$SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS___12;
}
else {
    I18N_11 = $localize `:␟a6168cda02acde5706ae7cd74f05d4a00f2c7587␟7696177181775490329: Optional argument, contract function ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Warning:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG: Angular Compiler does not allow arrow functions in decorators with ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:strictMetadataEmit${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: (by default). Add ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:// @dynamic${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: comment right above your ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:@Component${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: decorator to use them ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
}
I18N_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_11);
function ExampleTuiRequiredSetterComponent_ng_template_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6460611501050052701$$SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS___14 = goog.getMsg(" Arguments for console.error if check is unsuccessful ");
    I18N_13 = MSG_EXTERNAL_6460611501050052701$$SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS___14;
}
else {
    I18N_13 = $localize `:␟ebcfa697b45b5a9b73277d1ce04941b18254fb2f␟6460611501050052701: Arguments for console.error if check is unsuccessful `;
}
function ExampleTuiRequiredSetterComponent_ng_template_3_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_13);
} }
function ExampleTuiRequiredSetterComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiRequiredSetterComponent_ng_template_3_ng_template_5_Template, 6, 0, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiRequiredSetterComponent_ng_template_3_ng_template_6_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_15;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5881789180302744425$$SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__16 = goog.getMsg(" Add {$startTagCode}@tuiRequiredSetter{$closeTagCode} to setter input of your component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_15 = MSG_EXTERNAL_5881789180302744425$$SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__16;
}
else {
    I18N_15 = $localize `:␟aa0c59f743ad0b0bf2fe9edaa3942733037f813b␟5881789180302744425: Add ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:@tuiRequiredSetter${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: to setter input of your component `;
}
function ExampleTuiRequiredSetterComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleDecorator);
} }
class ExampleTuiRequiredSetterComponent {
    constructor() {
        this.exampleDecorator = __webpack_require__.e(/*! import() | !raw-loader!-import-example-decorator-md */ "!!raw-loader!-import-example-decorator-md").then(__webpack_require__.bind(null, /*! !raw-loader!./import/example-decorator.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/decorators/required-setter/import/example-decorator.md"));
    }
    setUndefined() {
        this.quantity = undefined;
    }
}
ExampleTuiRequiredSetterComponent.ɵfac = function ExampleTuiRequiredSetterComponent_Factory(t) { return new (t || ExampleTuiRequiredSetterComponent)(); };
ExampleTuiRequiredSetterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiRequiredSetterComponent, selectors: [["example-tui-required-setter"]], decls: 5, vars: 0, consts: [["package", "CDK", "path", "cdk/decorators/required-setter.ts", 6, "header"], ["pageTab", ""], [3, "quantity"], [1, "tui-space_top-4", 3, "ngModel", "ngModelChange"], ["tuiButton", "", "type", "button", 1, "tui-space_top-4", "tui-space_bottom-8", 3, "click"], ["documentationPropertyName", "assertion", "documentationPropertyType", "TuiBooleanHandler<T>"], ["documentationPropertyName", "args", "documentationPropertyType", "any"], [1, "b-demo-steps"], ["filename", "myComponent.component.ts", 3, "code"]], template: function ExampleTuiRequiredSetterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiRequiredSetterComponent_ng_template_2_Template, 14, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiRequiredSetterComponent_ng_template_3_Template, 7, 0, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiRequiredSetterComponent_ng_template_4_Template, 6, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _required_setter_demo_component__WEBPACK_IMPORTED_MODULE_4__["ExampleTuiRequiredSetterDemoComponent"], _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputCountComponent"], _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputCountDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_8__["TuiButtonComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_10__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiRequiredSetterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-required-setter`,
                templateUrl: `./required-setter.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/decorators/required-setter/required-setter.module.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/decorators/required-setter/required-setter.module.ts ***!
  \**************************************************************************/
/*! exports provided: ExampleTuiRequiredSetterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiRequiredSetterModule", function() { return ExampleTuiRequiredSetterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _required_setter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./required-setter.component */ "./src/modules/decorators/required-setter/required-setter.component.ts");
/* harmony import */ var _required_setter_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./required-setter-demo.component */ "./src/modules/decorators/required-setter/required-setter-demo.component.ts");











class ExampleTuiRequiredSetterModule {
}
ExampleTuiRequiredSetterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiRequiredSetterModule });
ExampleTuiRequiredSetterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiRequiredSetterModule_Factory(t) { return new (t || ExampleTuiRequiredSetterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputCountModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_required_setter_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiRequiredSetterComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiRequiredSetterModule, { declarations: [_required_setter_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiRequiredSetterComponent"],
        _required_setter_demo_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiRequiredSetterDemoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputCountModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_required_setter_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiRequiredSetterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiRequiredSetterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputCountModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_required_setter_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiRequiredSetterComponent"])),
                ],
                declarations: [
                    _required_setter_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiRequiredSetterComponent"],
                    _required_setter_demo_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiRequiredSetterDemoComponent"],
                ],
                exports: [_required_setter_component__WEBPACK_IMPORTED_MODULE_7__["ExampleTuiRequiredSetterComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=decorators-required-setter-required-setter-module.js.map