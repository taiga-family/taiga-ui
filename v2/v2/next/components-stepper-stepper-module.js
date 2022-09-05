(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-stepper-stepper-module"],{

/***/ "./src/modules/components/stepper/examples/1/index.ts":
/*!************************************************************!*\
  !*** ./src/modules/components/stepper/examples/1/index.ts ***!
  \************************************************************/
/*! exports provided: TuiStepperExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiStepperExample1", function() { return TuiStepperExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/stepper/stepper.component */ "../kit/components/stepper/stepper.component.ts");
/* harmony import */ var _kit_components_stepper_step_step_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/stepper/step/step.component */ "../kit/components/stepper/step/step.component.ts");






class TuiStepperExample1 {
}
TuiStepperExample1.ɵfac = function TuiStepperExample1_Factory(t) { return new (t || TuiStepperExample1)(); };
TuiStepperExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiStepperExample1, selectors: [["tui-stepper-example-1"]], decls: 11, vars: 1, consts: [[3, "activeItemIndex"], ["tuiStep", "", "state", "pass"], ["tuiStep", ""], ["tuiStep", "", "state", "error"], ["tuiStep", "", "disabled", ""], ["tuiStep", "", "icon", "tuiIconTimeLarge"]], template: function TuiStepperExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-stepper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Finished step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Simple step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Error step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Disabled step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Step with an icon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeItemIndex", 1);
    } }, directives: [_kit_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_3__["TuiStepperComponent"], _kit_components_stepper_step_step_component__WEBPACK_IMPORTED_MODULE_4__["TuiStepComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiStepperExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-stepper-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/stepper/examples/2/index.ts":
/*!************************************************************!*\
  !*** ./src/modules/components/stepper/examples/2/index.ts ***!
  \************************************************************/
/*! exports provided: TuiStepperExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiStepperExample2", function() { return TuiStepperExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/stepper/stepper.component */ "../kit/components/stepper/stepper.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_components_stepper_step_step_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/stepper/step/step.component */ "../kit/components/stepper/step/step.component.ts");







function TuiStepperExample2_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const step_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", step_r1, " ");
} }
class TuiStepperExample2 {
    constructor() {
        this.steps = [`Start Up`, `Cash In`, `Sell Out`, `Bro Down`];
    }
}
TuiStepperExample2.ɵfac = function TuiStepperExample2_Factory(t) { return new (t || TuiStepperExample2)(); };
TuiStepperExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiStepperExample2, selectors: [["tui-stepper-example-2"]], decls: 2, vars: 2, consts: [["orientation", "vertical", 3, "activeItemIndex"], ["tuiStep", "", 4, "ngFor", "ngForOf"], ["tuiStep", ""]], template: function TuiStepperExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-stepper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiStepperExample2_button_1_Template, 2, 1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeItemIndex", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);
    } }, directives: [_kit_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_3__["TuiStepperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _kit_components_stepper_step_step_component__WEBPACK_IMPORTED_MODULE_5__["TuiStepComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiStepperExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-stepper-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/stepper/stepper.component.ts":
/*!*************************************************************!*\
  !*** ./src/modules/components/stepper/stepper.component.ts ***!
  \*************************************************************/
/*! exports provided: ExampleTuiStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiStepperComponent", function() { return ExampleTuiStepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/stepper/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/stepper/examples/2/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _kit_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../kit/components/stepper/stepper.component */ "../kit/components/stepper/stepper.component.ts");
/* harmony import */ var _kit_components_stepper_step_step_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../kit/components/stepper/step/step.component */ "../kit/components/stepper/step/step.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");














var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4182533721007312825$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS_1 = goog.getMsg("Stepper");
    I18N_0 = MSG_EXTERNAL_4182533721007312825$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟d3380eafd2964129c0f2494ac124f7ee3ec18773␟4182533721007312825:Stepper`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7773050250158572107$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS__4 = goog.getMsg("Stepper makes visual step navigation");
    I18N_3 = MSG_EXTERNAL_7773050250158572107$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟490cac10bf1b9dbae7bb9b4d439cb5de3a31b887␟7773050250158572107:Stepper makes visual step navigation`;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS__6 = goog.getMsg("Basic");
    I18N_5 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c7 = ["heading", I18N_5];
function ExampleTuiStepperComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-stepper-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-stepper-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2107304068844688435$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS___9 = goog.getMsg(" Steps direction ");
    I18N_8 = MSG_EXTERNAL_2107304068844688435$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:␟2478a860994d0761c58bbd3f7dd3f03d465a8d19␟2107304068844688435: Steps direction `;
}
function ExampleTuiStepperComponent_ng_template_3_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_8);
} }
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1062293258822311131$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS___11 = goog.getMsg(" Active step index ");
    I18N_10 = MSG_EXTERNAL_1062293258822311131$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS___11;
}
else {
    I18N_10 = $localize `:␟ee3142d9eaaea0b924d9d01805d271f4069fa81d␟1062293258822311131: Active step index `;
}
function ExampleTuiStepperComponent_ng_template_3_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_10);
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3689121194833681634$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS___13 = goog.getMsg(" Step state ");
    I18N_12 = MSG_EXTERNAL_3689121194833681634$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS___13;
}
else {
    I18N_12 = $localize `:␟4c20ec0c2e6451c09e8f66381ebb03153f9a2138␟3689121194833681634: Step state `;
}
function ExampleTuiStepperComponent_ng_template_3_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_12);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5578787756132554741$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS___15 = goog.getMsg(" Step custom icon ");
    I18N_14 = MSG_EXTERNAL_5578787756132554741$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟9c9a93b5087be17cbebeca00ceb9e84e3b09fd02␟5578787756132554741: Step custom icon `;
}
function ExampleTuiStepperComponent_ng_template_3_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_14);
} }
function ExampleTuiStepperComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-stepper", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeItemIndexChange", function ExampleTuiStepperComponent_ng_template_3_Template_tui_stepper_activeItemIndexChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.activeItemIndex = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Simple step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Simple step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Simple step ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Simple step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Simple step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tui-doc-documentation", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleTuiStepperComponent_ng_template_3_ng_template_13_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiStepperComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.orientation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExampleTuiStepperComponent_ng_template_3_ng_template_14_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiStepperComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.activeItemIndex = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tui-doc-documentation", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ExampleTuiStepperComponent_ng_template_3_ng_template_16_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiStepperComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.state = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ExampleTuiStepperComponent_ng_template_3_ng_template_17_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiStepperComponent_ng_template_3_Template_ng_template_documentationPropertyValueChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.icon = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orientation", ctx_r1.orientation)("activeItemIndex", ctx_r1.activeItemIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r1.state)("icon", ctx_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.orientationVariants)("documentationPropertyValue", ctx_r1.orientation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.activeItemIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.stateVariants)("documentationPropertyValue", ctx_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.iconVariants)("documentationPropertyValue", ctx_r1.icon);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1361292692274604913$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS__17 = goog.getMsg(" Import {$startTagCode}TuiStepperModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_16 = MSG_EXTERNAL_1361292692274604913$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS__17;
}
else {
    I18N_16 = $localize `:␟1a30b934dd4f85022d1df7b9bd54d8266dae8965␟1361292692274604913: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiStepperModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS__19 = goog.getMsg("Add to the template:");
    I18N_18 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_STEPPER_STEPPER_COMPONENT_TS__19;
}
else {
    I18N_18 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiStepperComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiStepperComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/stepper/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/stepper/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/stepper/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/stepper/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/stepper/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/stepper/examples/2/index.html")),
        };
        this.activeItemIndex = 0;
        this.orientationVariants = [`horizontal`, `vertical`];
        this.orientation = this.orientationVariants[0];
        this.iconVariants = [``, `tuiIconTimeLarge`, `tuiIconHeart`];
        this.icon = this.iconVariants[0];
        this.stateVariants = [`normal`, `pass`, `error`];
        this.state = this.stateVariants[0];
    }
}
ExampleTuiStepperComponent.ɵfac = function ExampleTuiStepperComponent_Factory(t) { return new (t || ExampleTuiStepperComponent)(); };
ExampleTuiStepperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiStepperComponent, selectors: [["example-tui-stepper"]], decls: 5, vars: 0, consts: [["package", "KIT", "type", "components", 6, "header"], ["pageTab", ""], ["id", "base", 3, "content", 6, "heading"], ["id", "vertical", "heading", "Vertical", 3, "content"], [3, "orientation", "activeItemIndex", "activeItemIndexChange"], ["tuiStep", ""], ["tuiStep", "", 3, "state", "icon"], ["heading", "Stepper"], ["documentationPropertyName", "orientation", "documentationPropertyMode", "input", "documentationPropertyType", "TuiOrientationT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "activeItemIndex", "documentationPropertyMode", "input-output", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["heading", "Step"], ["documentationPropertyName", "state", "documentationPropertyMode", "input", "documentationPropertyType", "'normal' | 'pass' | 'error'", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "icon", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiStepperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiStepperComponent_ng_template_2_Template, 7, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiStepperComponent_ng_template_3_Template, 18, 11, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiStepperComponent_ng_template_4_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiStepperExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiStepperExample2"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocDemoComponent"], _kit_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_8__["TuiStepperComponent"], _kit_components_stepper_step_step_component__WEBPACK_IMPORTED_MODULE_9__["TuiStepComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_11__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiStepperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-stepper`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                templateUrl: `./stepper.template.html`,
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/stepper/stepper.module.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/stepper/stepper.module.ts ***!
  \**********************************************************/
/*! exports provided: ExampleTuiStepperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiStepperModule", function() { return ExampleTuiStepperModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/stepper/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/stepper/examples/2/index.ts");
/* harmony import */ var _stepper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stepper.component */ "./src/modules/components/stepper/stepper.component.ts");











class ExampleTuiStepperModule {
}
ExampleTuiStepperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiStepperModule });
ExampleTuiStepperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiStepperModule_Factory(t) { return new (t || ExampleTuiStepperModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiStepperModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_stepper_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStepperComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiStepperModule, { declarations: [_stepper_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStepperComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiStepperExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiStepperExample2"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiStepperModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_stepper_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStepperComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiStepperModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiStepperModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiLinkModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_3__["generateRoutes"])(_stepper_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStepperComponent"])),
                ],
                declarations: [_stepper_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStepperComponent"], _examples_1__WEBPACK_IMPORTED_MODULE_6__["TuiStepperExample1"], _examples_2__WEBPACK_IMPORTED_MODULE_7__["TuiStepperExample2"]],
                exports: [_stepper_component__WEBPACK_IMPORTED_MODULE_8__["ExampleTuiStepperComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-stepper-stepper-module.js.map