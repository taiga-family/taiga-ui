(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-input-count-input-count-module"],{

/***/ "./src/modules/components/input-count/examples/1/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/input-count/examples/1/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiInputCountExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputCountExample1", function() { return TuiInputCountExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/label/label.component */ "../core/components/label/label.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-count/input-count.component */ "../kit/components/input-count/input-count.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-count/input-count.directive */ "../kit/components/input-count/input-count.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");











var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4517713429238727398$$SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_1_INDEX_TS_1 = goog.getMsg("Step is 1 by default");
    I18N_0 = MSG_EXTERNAL_4517713429238727398$$SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_1_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟b159ec7c42ae077a8407364cc726a54b1adb6b12␟4517713429238727398:Step is 1 by default`;
}
const _c2 = ["label", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2290251155545250605$$SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_1_INDEX_TS_4 = goog.getMsg("Step is 100");
    I18N_3 = MSG_EXTERNAL_2290251155545250605$$SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_1_INDEX_TS_4;
}
else {
    I18N_3 = $localize `:␟c81f9040e56ff2939bfcc8f7303ea190fc62a518␟2290251155545250605:Step is 100`;
}
const _c5 = ["label", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2074374908429047288$$SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_1_INDEX_TS_7 = goog.getMsg("Also works with negative values");
    I18N_6 = MSG_EXTERNAL_2074374908429047288$$SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_1_INDEX_TS_7;
}
else {
    I18N_6 = $localize `:␟b4300d745195687ae85fb9b2cbcbdb97af131830␟2074374908429047288:Also works with negative values`;
}
const _c8 = ["label", I18N_6];
class TuiInputCountExample1 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](10, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](10, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            testValue3: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](-10, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
}
TuiInputCountExample1.ɵfac = function TuiInputCountExample1_Factory(t) { return new (t || TuiInputCountExample1)(); };
TuiInputCountExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputCountExample1, selectors: [["tui-input-count-example-1"]], decls: 12, vars: 8, consts: [[1, "b-form", 3, "formGroup"], ["tuiLabel", "", 6, "label"], ["formControlName", "testValue1", 3, "min", "max"], ["tuiTextfield", "", "placeholder", "1.. 2.. 3.."], ["tuiLabel", "", 1, "tui-space_top-4", 6, "label"], ["formControlName", "testValue2", 3, "tuiTextfieldLabelOutside", "step"], ["formControlName", "testValue3", 3, "tuiTextfieldLabelOutside", "min", "max"]], template: function TuiInputCountExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](2, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input-count", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Count something ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-input-count", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](10, _c8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-input-count", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 1)("max", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("step", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("min", 0 - 100)("max", 100);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_4__["TuiLabelComponent"], _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputCountComponent"], _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputCountDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldComponent"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldLabelOutsideDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputCountExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-count-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-count/examples/2/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/input-count/examples/2/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiInputCountExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputCountExample2", function() { return TuiInputCountExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/label/label.component */ "../core/components/label/label.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-count/input-count.component */ "../kit/components/input-count/input-count.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-count/input-count.directive */ "../kit/components/input-count/input-count.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");











var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4517713429238727398$$SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_2_INDEX_TS_1 = goog.getMsg("Step is 1 by default");
    I18N_0 = MSG_EXTERNAL_4517713429238727398$$SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_2_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟b159ec7c42ae077a8407364cc726a54b1adb6b12␟4517713429238727398:Step is 1 by default`;
}
const _c2 = ["label", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2290251155545250605$$SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_2_INDEX_TS_4 = goog.getMsg("Step is 100");
    I18N_3 = MSG_EXTERNAL_2290251155545250605$$SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_2_INDEX_TS_4;
}
else {
    I18N_3 = $localize `:␟c81f9040e56ff2939bfcc8f7303ea190fc62a518␟2290251155545250605:Step is 100`;
}
const _c5 = ["label", I18N_3];
class TuiInputCountExample2 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](10, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](10, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
}
TuiInputCountExample2.ɵfac = function TuiInputCountExample2_Factory(t) { return new (t || TuiInputCountExample2)(); };
TuiInputCountExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputCountExample2, selectors: [["tui-input-count-example-2"]], decls: 7, vars: 6, consts: [[1, "b-form", 3, "formGroup"], ["tuiLabel", "", 6, "label"], ["formControlName", "testValue1", "tuiTextfieldSize", "m", 3, "max", "tuiTextfieldLabelOutside"], ["tuiLabel", "", 1, "tui-space_top-4", 6, "label"], ["formControlName", "testValue2", "tuiTextfieldSize", "m", 3, "step", "max", "tuiTextfieldLabelOutside"]], template: function TuiInputCountExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](2, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-input-count", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-input-count", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 999999)("tuiTextfieldLabelOutside", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", 100)("max", 999999)("tuiTextfieldLabelOutside", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_4__["TuiLabelComponent"], _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputCountComponent"], _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputCountDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldLabelOutsideDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputCountExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-count-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-count/examples/3/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/input-count/examples/3/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiInputCountExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputCountExample3", function() { return TuiInputCountExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/label/label.component */ "../core/components/label/label.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-count/input-count.component */ "../kit/components/input-count/input-count.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input-count/input-count.directive */ "../kit/components/input-count/input-count.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");












var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5758694726409722369$$SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_3_INDEX_TS_1 = goog.getMsg("With custom options");
    I18N_0 = MSG_EXTERNAL_5758694726409722369$$SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_3_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟ca426ccdbb6cc86ab33b1135e42c32e2786d4700␟5758694726409722369:With custom options`;
}
const _c2 = ["label", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2713636921764569690$$SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_3_INDEX_TS_4 = goog.getMsg("With custom options and medium size");
    I18N_3 = MSG_EXTERNAL_2713636921764569690$$SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_3_INDEX_TS_4;
}
else {
    I18N_3 = $localize `:␟bf0cf1e190f62dac6e22474c00ebd6f99d2889b0␟2713636921764569690:With custom options and medium size`;
}
const _c5 = ["label", I18N_3];
class TuiInputCountExample3 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](10, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](10, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
}
TuiInputCountExample3.ɵfac = function TuiInputCountExample3_Factory(t) { return new (t || TuiInputCountExample3)(); };
TuiInputCountExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputCountExample3, selectors: [["tui-input-count-example-3"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            Object(_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["tuiInputCountOptionsProvider"])({
                icons: {
                    up: `tuiIconChevronUp`,
                    down: `tuiIconChevronDown`,
                },
                appearance: `secondary`,
                step: 10,
                min: 10,
                max: 100,
            }),
        ])], decls: 7, vars: 3, consts: [[1, "b-form", 3, "formGroup"], ["tuiLabel", "", 6, "label"], ["formControlName", "testValue1", 3, "tuiTextfieldLabelOutside"], ["tuiLabel", "", 1, "tui-space_top-4", 6, "label"], ["formControlName", "testValue2", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"]], template: function TuiInputCountExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](2, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-input-count", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](5, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-input-count", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_5__["TuiLabelComponent"], _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_6__["TuiInputCountComponent"], _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_7__["TuiInputCountDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldLabelOutsideDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_9__["TuiTextfieldSizeDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputCountExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-count-example-3`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
                providers: [
                    Object(_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["tuiInputCountOptionsProvider"])({
                        icons: {
                            up: `tuiIconChevronUp`,
                            down: `tuiIconChevronDown`,
                        },
                        appearance: `secondary`,
                        step: 10,
                        min: 10,
                        max: 100,
                    }),
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-count/input-count.component.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/components/input-count/input-count.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExampleTuiInputCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputCountComponent", function() { return ExampleTuiInputCountComponent; });
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
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/input-count/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/input-count/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/input-count/examples/3/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../kit/components/input-count/input-count.component */ "../kit/components/input-count/input-count.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../kit/components/input-count/input-count.directive */ "../kit/components/input-count/input-count.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");

























var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7116640048935486801$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}InputCount{$closeTagCode} is a good choice to input integer positive numbers under 999 ", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_7116640048935486801$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟b9669bf4d7cd2041365aecab26edefeae395b627␟7116640048935486801:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputCount${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: is a good choice to input integer positive numbers under 999 `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6434254909743697518$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__3 = goog.getMsg(" It allows limit value with min and max and handles such cases ");
    I18N_2 = MSG_EXTERNAL_6434254909743697518$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟93ac744bf41984c8f980cafd646b71db909b71a3␟6434254909743697518: It allows limit value with min and max and handles such cases `;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3317726340623526124$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__5 = goog.getMsg("It does not indicate validation status");
    I18N_4 = MSG_EXTERNAL_3317726340623526124$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟756f0b4a649d274f59cdcd92ecebd22121a58de5␟3317726340623526124:It does not indicate validation status`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6882510303030671599$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__7 = goog.getMsg(" Number formatting can be customized by using {$startLink} TUI_NUMBER_FORMAT {$closeLink}", { "startLink": "\uFFFD#9\uFFFD", "closeLink": "\uFFFD/#9\uFFFD" });
    I18N_6 = MSG_EXTERNAL_6882510303030671599$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟0e557432cc61605fc75bbddcf8b886ac4208be05␟6882510303030671599: Number formatting can be customized by using ${"\uFFFD#9\uFFFD"}:START_LINK: TUI_NUMBER_FORMAT ${"\uFFFD/#9\uFFFD"}:CLOSE_LINK:`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__9 = goog.getMsg("Basic");
    I18N_8 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c10 = ["heading", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7861254305604213764$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__12 = goog.getMsg("Size M");
    I18N_11 = MSG_EXTERNAL_7861254305604213764$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟0d72ce2c862fae2cccbe564228d17758c058bc20␟7861254305604213764:Size M`;
}
const _c13 = ["heading", I18N_11];
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8432562579042371182$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__15 = goog.getMsg("Options");
    I18N_14 = MSG_EXTERNAL_8432562579042371182$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`;
}
const _c16 = ["heading", I18N_14];
function ExampleTuiInputCountComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](8, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](11, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tui-notification", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " If you need to set some attributes or listen to events on native ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " , you can put it inside with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Textfield");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " directive as shown below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "tui-input-count-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](22, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "tui-input-count-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](25, _c16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "tui-input-count-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
} }
function ExampleTuiInputCountComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-count", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Number of accounts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.control)("focusable", ctx_r3.focusable)("min", ctx_r3.min)("max", ctx_r3.max)("hideButtons", ctx_r3.hideButtons)("step", ctx_r3.step)("prefix", ctx_r3.prefix)("postfix", ctx_r3.postfix)("readOnly", ctx_r3.readOnly)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size);
} }
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___18 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_17 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___18;
}
else {
    I18N_17 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputCountComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4295858242233154356$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___20 = goog.getMsg(" Hide icon buttons ");
    I18N_19 = MSG_EXTERNAL_4295858242233154356$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___20;
}
else {
    I18N_19 = $localize `:␟ea14b95b26f0ac7cd0db32a42bd60e8ef5eb7cdc␟4295858242233154356: Hide icon buttons `;
}
function ExampleTuiInputCountComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_19);
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1090761179854672750$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___22 = goog.getMsg(" Minimum value ");
    I18N_21 = MSG_EXTERNAL_1090761179854672750$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___22;
}
else {
    I18N_21 = $localize `:␟41d4dbb03bf5617301e95d4fbce6b0e39ca47f01␟1090761179854672750: Minimum value `;
}
function ExampleTuiInputCountComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_21);
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4080008404588596650$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___24 = goog.getMsg(" Maximum value ( {$startTagCode}Infinity{$closeTagCode} by default) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_23 = MSG_EXTERNAL_4080008404588596650$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___24;
}
else {
    I18N_23 = $localize `:␟ff319fe89f5215270e87674b1c4bc8696341e90a␟4080008404588596650: Maximum value ( ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:Infinity${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: by default) `;
}
function ExampleTuiInputCountComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_889438292388771446$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___26 = goog.getMsg(" A prefix symbol, like currency ");
    I18N_25 = MSG_EXTERNAL_889438292388771446$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___26;
}
else {
    I18N_25 = $localize `:␟658adf15e902084053811153efcee4ab1a098c01␟889438292388771446: A prefix symbol, like currency `;
}
function ExampleTuiInputCountComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_25);
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7436553299672149610$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___28 = goog.getMsg(" Some string after value ");
    I18N_27 = MSG_EXTERNAL_7436553299672149610$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___28;
}
else {
    I18N_27 = $localize `:␟f5cf6d36f821cf714fb502d79cd966b650bfa4f7␟7436553299672149610: Some string after value `;
}
function ExampleTuiInputCountComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_27);
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5700630542385259856$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___30 = goog.getMsg(" Step for buttons ");
    I18N_29 = MSG_EXTERNAL_5700630542385259856$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___30;
}
else {
    I18N_29 = $localize `:␟95f52be4795cdd2b39ffd9707f83e9721e0e17e9␟5700630542385259856: Step for buttons `;
}
function ExampleTuiInputCountComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_29);
} }
function ExampleTuiInputCountComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputCountComponent_ng_template_2_ng_template_1_Template, 2, 11, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputCountComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCountComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiInputCountComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCountComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.hideButtons = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiInputCountComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCountComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.min = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiInputCountComponent_ng_template_2_ng_template_6_Template, 2, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCountComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiInputCountComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCountComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.prefix = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiInputCountComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCountComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.postfix = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiInputCountComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputCountComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.step = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "inherited-documentation");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.hideButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.prefix);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.postfix);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.stepValues)("documentationPropertyValue", ctx_r1.step);
} }
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5253084050799099966$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__32 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiInputCountModule{$closeTagCode} in the same module where you want to use our component: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_31 = MSG_EXTERNAL_5253084050799099966$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__32;
}
else {
    I18N_31 = $localize `:␟4033559e8c5b3ecd794da4fd8d5d21edd63b93eb␟5253084050799099966: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputCountModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
}
var I18N_33;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__34 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", { "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]", "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]" });
    I18N_33 = MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__34;
}
else {
    I18N_33 = $localize `:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
}
I18N_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_33);
var I18N_35;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__36 = goog.getMsg("Add to the template:");
    I18N_35 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__36;
}
else {
    I18N_35 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
var I18N_37;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6054484045241435137$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__38 = goog.getMsg(" Optionally use the {$startTagCode}TUI_INPUT_COUNT_OPTIONS{$closeTagCode} injection token to override the default options for the component. ", { "startTagCode": "\uFFFD#19\uFFFD", "closeTagCode": "\uFFFD/#19\uFFFD" });
    I18N_37 = MSG_EXTERNAL_6054484045241435137$$SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__38;
}
else {
    I18N_37 = $localize `:␟5159db99b1a8aa0ecf3deb24f56aaf37ea98f7b0␟6054484045241435137: Optionally use the ${"\uFFFD#19\uFFFD"}:START_TAG_CODE:TUI_INPUT_COUNT_OPTIONS${"\uFFFD/#19\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;
}
function ExampleTuiInputCountComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](8, I18N_33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-doc-code", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, I18N_35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-doc-code", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](18, I18N_37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "tui-doc-code", 18);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleOptions);
} }
class ExampleTuiInputCountComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_3__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this.exampleForm = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-declare-form-md */ "!!raw-loader!-examples-import-declare-form-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/declare-form.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/import/declare-form.md"));
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/import/insert-template.md"));
        this.exampleOptions = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-define-options-md */ "!!raw-loader!-examples-import-define-options-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/define-options.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/import/define-options.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-count/examples/3/index.html")),
        };
        this.min = 0;
        this.max = 999;
        this.step = 1;
        this.stepValues = [1, 2, 3, 4, 5];
        this.sizeVariants = [`m`, `l`];
        this.size = this.sizeVariants[1];
        this.hideButtons = false;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.prefix = ``;
        this.postfix = ``;
    }
}
ExampleTuiInputCountComponent.ɵfac = function ExampleTuiInputCountComponent_Factory(t) { return ɵExampleTuiInputCountComponent_BaseFactory(t || ExampleTuiInputCountComponent); };
ExampleTuiInputCountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiInputCountComponent, selectors: [["example-tui-input-count"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputCountComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "InputCount", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], ["tuiLink", "", "routerLink", "/utils/tokens", "fragment", "number-format"], ["id", "base", 3, "content", 6, "heading"], [1, "tui-space_bottom-4", "b-form"], ["id", "medium-large", 3, "content", 6, "heading"], ["id", "options", 3, "content", 6, "heading"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hideButtons", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "prefix", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "postfix", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "step", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formControl", "focusable", "min", "max", "hideButtons", "step", "prefix", "postfix", "readOnly", "tuiTextfieldLabelOutside", "tuiTextfieldSize"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiInputCountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputCountComponent_ng_template_1_Template, 27, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputCountComponent_ng_template_2_Template, 11, 9, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputCountComponent_ng_template_3_Template, 21, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocExampleComponent"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["TuiNotificationComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_11__["TuiInputCountExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_12__["TuiInputCountExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_13__["TuiInputCountExample3"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_14__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_15__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_16__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_17__["InheritedDocumentationComponent"], _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_18__["TuiInputCountComponent"], _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_19__["TuiInputCountDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_20__["TuiTextfieldLabelOutsideDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_21__["TuiTextfieldSizeDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_22__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
const ɵExampleTuiInputCountComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiInputCountComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiInputCountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-input-count`,
                templateUrl: `./input-count.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputCountComponent),
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-count/input-count.module.ts":
/*!******************************************************************!*\
  !*** ./src/modules/components/input-count/input-count.module.ts ***!
  \******************************************************************/
/*! exports provided: ExampleTuiInputCountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputCountModule", function() { return ExampleTuiInputCountModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/input-count/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/input-count/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/input-count/examples/3/index.ts");
/* harmony import */ var _input_count_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input-count.component */ "./src/modules/components/input-count/input-count.component.ts");














class ExampleTuiInputCountModule {
}
ExampleTuiInputCountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiInputCountModule });
ExampleTuiInputCountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiInputCountModule_Factory(t) { return new (t || ExampleTuiInputCountModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputCountModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLabelModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_count_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputCountComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiInputCountModule, { declarations: [_input_count_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputCountComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiInputCountExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiInputCountExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiInputCountExample3"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputCountModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLabelModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_input_count_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputCountComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiInputCountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputCountModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLabelModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_count_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputCountComponent"])),
                ],
                declarations: [
                    _input_count_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputCountComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiInputCountExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiInputCountExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiInputCountExample3"],
                ],
                exports: [_input_count_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiInputCountComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-input-count-input-count-module.js.map