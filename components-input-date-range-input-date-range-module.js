(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-input-date-range-input-date-range-module"],{

/***/ "./src/modules/components/input-date-range/examples/1/index.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/components/input-date-range/examples/1/index.ts ***!
  \*********************************************************************/
/*! exports provided: TuiInputDateRangeExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputDateRangeExample1", function() { return TuiInputDateRangeExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _kit_components_input_date_range_input_date_range_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-range/input-date-range.component */ "../kit/components/input-date-range/input-date-range.component.ts");
/* harmony import */ var _kit_components_input_date_range_input_date_range_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-range/input-date-range.directive */ "../kit/components/input-date-range/input-date-range.directive.ts");
/* harmony import */ var _kit_directives_unfinished_validator_unfinished_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/directives/unfinished-validator/unfinished-validator.directive */ "../kit/directives/unfinished-validator/unfinished-validator.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");











var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_918573850120182890$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_EXAMPLES_1_INDEX_TS_1 = goog.getMsg(" If a field is optional, but unfinished field should be marked as invalid, use {$startTagCode}tuiUnfinishedValidator{$closeTagCode} directive ", { "startTagCode": "\uFFFD#3\uFFFD", "closeTagCode": "\uFFFD/#3\uFFFD" });
    I18N_0 = MSG_EXTERNAL_918573850120182890$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_EXAMPLES_1_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟94fc108253bd1502cd271951ce40db76787fe618␟918573850120182890: If a field is optional, but unfinished field should be marked as invalid, use ${"\uFFFD#3\uFFFD"}:START_TAG_CODE:tuiUnfinishedValidator${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE: directive `;
}
class TuiInputDateRangeExample1 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDayRange"](new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"](2018, 2, 10), new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"](2018, 3, 20))),
        });
        this.min = new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"](2000, 2, 20);
        this.max = new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"](2040, 2, 20);
    }
}
TuiInputDateRangeExample1.ɵfac = function TuiInputDateRangeExample1_Factory(t) { return new (t || TuiInputDateRangeExample1)(); };
TuiInputDateRangeExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputDateRangeExample1, selectors: [["tui-input-date-range-example-1"]], decls: 7, vars: 3, consts: [[1, "b-form", 3, "formGroup"], ["tuiUnfinishedValidator", "Finish filling the field", "formControlName", "testValue", 3, "min", "max"], ["tuiTextfield", "", "placeholder", "From - To"]], template: function TuiInputDateRangeExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](2, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-input-date-range", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Choose dates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_date_range_input_date_range_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputDateRangeComponent"], _kit_components_input_date_range_input_date_range_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateRangeDirective"], _kit_directives_unfinished_validator_unfinished_validator_directive__WEBPACK_IMPORTED_MODULE_7__["TuiUnfinishedValidatorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputDateRangeExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-date-range-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-date-range/examples/2/index.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/components/input-date-range/examples/2/index.ts ***!
  \*********************************************************************/
/*! exports provided: TuiInputDateRangeExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputDateRangeExample2", function() { return TuiInputDateRangeExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _kit_components_input_date_range_input_date_range_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-range/input-date-range.component */ "../kit/components/input-date-range/input-date-range.component.ts");
/* harmony import */ var _kit_components_input_date_range_input_date_range_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-range/input-date-range.directive */ "../kit/components/input-date-range/input-date-range.directive.ts");









class TuiInputDateRangeExample2 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDayRange"](new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"](2018, 2, 10), new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"](2018, 3, 20)));
    }
}
TuiInputDateRangeExample2.ɵfac = function TuiInputDateRangeExample2_Factory(t) { return new (t || TuiInputDateRangeExample2)(); };
TuiInputDateRangeExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputDateRangeExample2, selectors: [["tui-input-date-range-example-2"]], decls: 2, vars: 1, consts: [[1, "b-form", 3, "formControl"]], template: function TuiInputDateRangeExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-date-range", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Choose dates\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
    } }, directives: [_kit_components_input_date_range_input_date_range_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputDateRangeComponent"], _kit_components_input_date_range_input_date_range_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateRangeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputDateRangeExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-date-range-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-date-range/examples/3/index.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/components/input-date-range/examples/3/index.ts ***!
  \*********************************************************************/
/*! exports provided: TuiInputDateRangeExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputDateRangeExample3", function() { return TuiInputDateRangeExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _kit_components_input_date_range_input_date_range_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-range/input-date-range.component */ "../kit/components/input-date-range/input-date-range.component.ts");
/* harmony import */ var _kit_components_input_date_range_input_date_range_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-range/input-date-range.directive */ "../kit/components/input-date-range/input-date-range.directive.ts");









class TuiInputDateRangeExample3 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDayRange"](new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"](2018, 2, 10), new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"](2018, 3, 20)));
    }
}
TuiInputDateRangeExample3.ɵfac = function TuiInputDateRangeExample3_Factory(t) { return new (t || TuiInputDateRangeExample3)(); };
TuiInputDateRangeExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputDateRangeExample3, selectors: [["tui-input-date-range-example-3"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_DATE_FORMAT"], useValue: `YMD` },
            { provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_DATE_SEPARATOR"], useValue: `/` },
        ])], decls: 2, vars: 1, consts: [[1, "b-form", 3, "formControl"]], template: function TuiInputDateRangeExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-date-range", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Choose dates\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
    } }, directives: [_kit_components_input_date_range_input_date_range_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputDateRangeComponent"], _kit_components_input_date_range_input_date_range_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateRangeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputDateRangeExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-date-range-example-3`,
                templateUrl: `./index.html`,
                providers: [
                    { provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_DATE_FORMAT"], useValue: `YMD` },
                    { provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_DATE_SEPARATOR"], useValue: `/` },
                ],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-date-range/examples/4/index.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/components/input-date-range/examples/4/index.ts ***!
  \*********************************************************************/
/*! exports provided: TuiInputDateRangeExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputDateRangeExample4", function() { return TuiInputDateRangeExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _value_transformers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./value-transformers */ "./src/modules/components/input-date-range/examples/4/value-transformers.ts");
/* harmony import */ var _kit_components_input_date_range_input_date_range_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-range/input-date-range.component */ "../kit/components/input-date-range/input-date-range.component.ts");
/* harmony import */ var _kit_components_input_date_range_input_date_range_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-range/input-date-range.directive */ "../kit/components/input-date-range/input-date-range.directive.ts");










class TuiInputDateRangeExample4 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([new Date(2018, 2, 10), new Date(2018, 3, 20)]);
    }
}
TuiInputDateRangeExample4.ɵfac = function TuiInputDateRangeExample4_Factory(t) { return new (t || TuiInputDateRangeExample4)(); };
TuiInputDateRangeExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputDateRangeExample4, selectors: [["tui-input-date-range-example-4"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TUI_DATE_VALUE_TRANSFORMER"],
                useClass: _value_transformers__WEBPACK_IMPORTED_MODULE_5__["ExampleDateTransformer"],
            },
            {
                provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TUI_DATE_RANGE_VALUE_TRANSFORMER"],
                deps: [_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TUI_DATE_VALUE_TRANSFORMER"]],
                useFactory: _value_transformers__WEBPACK_IMPORTED_MODULE_5__["getExampleDateRangeTransformer"],
            },
        ])], decls: 7, vars: 2, consts: [[1, "b-form", 3, "formControl"]], template: function TuiInputDateRangeExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-date-range", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Choose dates\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Stringified control value:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.control.value);
    } }, directives: [_kit_components_input_date_range_input_date_range_component__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateRangeComponent"], _kit_components_input_date_range_input_date_range_directive__WEBPACK_IMPORTED_MODULE_7__["TuiInputDateRangeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputDateRangeExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-date-range-example-4`,
                templateUrl: `./index.html`,
                providers: [
                    {
                        provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TUI_DATE_VALUE_TRANSFORMER"],
                        useClass: _value_transformers__WEBPACK_IMPORTED_MODULE_5__["ExampleDateTransformer"],
                    },
                    {
                        provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TUI_DATE_RANGE_VALUE_TRANSFORMER"],
                        deps: [_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TUI_DATE_VALUE_TRANSFORMER"]],
                        useFactory: _value_transformers__WEBPACK_IMPORTED_MODULE_5__["getExampleDateRangeTransformer"],
                    },
                ],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-date-range/examples/4/value-transformers.ts":
/*!**********************************************************************************!*\
  !*** ./src/modules/components/input-date-range/examples/4/value-transformers.ts ***!
  \**********************************************************************************/
/*! exports provided: ExampleDateTransformer, getExampleDateRangeTransformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDateTransformer", function() { return ExampleDateTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExampleDateRangeTransformer", function() { return getExampleDateRangeTransformer; });
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");

class ExampleDateTransformer {
    fromControlValue(controlValue) {
        return controlValue && _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__["TuiDay"].fromLocalNativeDate(controlValue);
    }
    toControlValue(componentValue) {
        return (componentValue === null || componentValue === void 0 ? void 0 : componentValue.toLocalNativeDate()) || null;
    }
}
class ExampleDateRangeTransformer {
    constructor(dateTransformer) {
        this.dateTransformer = dateTransformer;
    }
    fromControlValue(controlValue) {
        const [transformedFrom, transformedTo] = controlValue || [null, null];
        const from = transformedFrom && this.dateTransformer.fromControlValue(transformedFrom);
        const to = transformedTo && this.dateTransformer.fromControlValue(transformedTo);
        return from && to && new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__["TuiDayRange"](from, to);
    }
    toControlValue(componentValue) {
        const from = componentValue && this.dateTransformer.toControlValue(componentValue.from);
        const to = componentValue && this.dateTransformer.toControlValue(componentValue.to);
        return from && to && [from, to];
    }
}
function getExampleDateRangeTransformer(dateTransformer) {
    return dateTransformer && new ExampleDateRangeTransformer(dateTransformer);
}


/***/ }),

/***/ "./src/modules/components/input-date-range/input-date-range.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/modules/components/input-date-range/input-date-range.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ExampleTuiInputDateRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputDateRangeComponent", function() { return ExampleTuiInputDateRangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _abstract_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abstract/control */ "./src/modules/components/abstract/control.ts");
/* harmony import */ var _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/input-date-range/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/input-date-range/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/input-date-range/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/input-date-range/examples/4/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _kit_components_input_date_range_input_date_range_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../kit/components/input-date-range/input-date-range.component */ "../kit/components/input-date-range/input-date-range.component.ts");
/* harmony import */ var _kit_components_input_date_range_input_date_range_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../kit/components/input-date-range/input-date-range.directive */ "../kit/components/input-date-range/input-date-range.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
































var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6250893485944821333$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}InputDate{$closeTagCode} is a field to input a range of dates. ", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_6250893485944821333$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟d2d0c7a3331cfc0abccc0a31c9be9ed11b568504␟6250893485944821333:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputDate${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: is a field to input a range of dates. `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9067186024080940878$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__3 = goog.getMsg("DI-tokens for date localization:");
    I18N_2 = MSG_EXTERNAL_9067186024080940878$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟44191f6f2084b7e19ed30289598f45f6dc88ef96␟9067186024080940878:DI-tokens for date localization:`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7722521738393615006$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__5 = goog.getMsg("{$startTagDt}{$startTagCode}TUI_DATE_FORMAT{$closeTagCode}{$closeTagDt}{$startTagDd} active date format ( {$startTagCode}'DMY' | 'MDY' | 'YMD'{$closeTagCode} ) {$closeTagDd}{$startTagDt}{$startTagCode}TUI_DATE_SEPARATOR{$closeTagCode}{$closeTagDt}{$startTagDd_1}single-character date's separator (dot, slash etc.){$closeTagDd}", { "startTagDt": "[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]", "startTagCode": "[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]", "closeTagCode": "[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]", "closeTagDt": "[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]", "startTagDd": "\uFFFD#9\uFFFD", "closeTagDd": "[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]", "startTagDd_1": "\uFFFD#13\uFFFD" });
    I18N_4 = MSG_EXTERNAL_7722521738393615006$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟4a9f8a78772cf0d29d68a56ec7d2e2e4cde207ba␟7722521738393615006:${"[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_DT:${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TUI_DATE_FORMAT${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_DT:${"\uFFFD#9\uFFFD"}:START_TAG_DD: active date format ( ${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:'DMY' | 'MDY' | 'YMD'${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE: ) ${"[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_DD:${"[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_DT:${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TUI_DATE_SEPARATOR${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_DT:${"\uFFFD#13\uFFFD"}:START_TAG_DD_1:single-character date's separator (dot, slash etc.)${"[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_DD:`;
}
I18N_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_4);
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4839071173512899768$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__7 = goog.getMsg("DI-tokens for input-configurations:");
    I18N_6 = MSG_EXTERNAL_4839071173512899768$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟1e189ebe2d938d6aaa6a9a2f9adeff1e3b372aac␟4839071173512899768:DI-tokens for input-configurations:`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1221854426540962093$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__9 = goog.getMsg("{$startTagDt}{$startTagCode}TUI_DATE_RANGE_VALUE_TRANSFORMER{$closeTagCode}{$closeTagDt}{$startTagDd} custom format of control output ( {$startLink} TuiDayRange {$closeLink} is default). {$startParagraph}{$startLink_1} See an example {$closeLink} of how to provide transformers for {$startTagCode}InputDate{$closeTagCode} and {$startTagCode}InputDateRange{$closeTagCode} to work with native {$startLink_2} Date {$closeLink} objects. {$closeParagraph}{$closeTagDd}", { "startTagDt": "\uFFFD#22\uFFFD", "startTagCode": "[\uFFFD#23\uFFFD|\uFFFD#28\uFFFD|\uFFFD#29\uFFFD]", "closeTagCode": "[\uFFFD/#23\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#29\uFFFD]", "closeTagDt": "\uFFFD/#22\uFFFD", "startTagDd": "\uFFFD#24\uFFFD", "startLink": "\uFFFD#25\uFFFD", "closeLink": "[\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD]", "startParagraph": "\uFFFD#26\uFFFD", "startLink_1": "\uFFFD#27\uFFFD", "startLink_2": "\uFFFD#30\uFFFD", "closeParagraph": "\uFFFD/#26\uFFFD", "closeTagDd": "\uFFFD/#24\uFFFD" });
    I18N_8 = MSG_EXTERNAL_1221854426540962093$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟a889115d6a437c86488d83937a6a773891b3c218␟1221854426540962093:${"\uFFFD#22\uFFFD"}:START_TAG_DT:${"[\uFFFD#23\uFFFD|\uFFFD#28\uFFFD|\uFFFD#29\uFFFD]"}:START_TAG_CODE:TUI_DATE_RANGE_VALUE_TRANSFORMER${"[\uFFFD/#23\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#29\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#22\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#24\uFFFD"}:START_TAG_DD: custom format of control output ( ${"\uFFFD#25\uFFFD"}:START_LINK: TuiDayRange ${"[\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD]"}:CLOSE_LINK: is default). ${"\uFFFD#26\uFFFD"}:START_PARAGRAPH:${"\uFFFD#27\uFFFD"}:START_LINK_1: See an example ${"[\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD]"}:CLOSE_LINK: of how to provide transformers for ${"[\uFFFD#23\uFFFD|\uFFFD#28\uFFFD|\uFFFD#29\uFFFD]"}:START_TAG_CODE:InputDate${"[\uFFFD/#23\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#29\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#23\uFFFD|\uFFFD#28\uFFFD|\uFFFD#29\uFFFD]"}:START_TAG_CODE:InputDateRange${"[\uFFFD/#23\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#29\uFFFD]"}:CLOSE_TAG_CODE: to work with native ${"\uFFFD#30\uFFFD"}:START_LINK_2: Date ${"[\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD]"}:CLOSE_LINK: objects. ${"\uFFFD/#26\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD/#24\uFFFD"}:CLOSE_TAG_DD:`;
}
I18N_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_8);
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__11 = goog.getMsg("Basic");
    I18N_10 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c12 = ["heading", I18N_10];
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9065652012369821232$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__14 = goog.getMsg("Big size");
    I18N_13 = MSG_EXTERNAL_9065652012369821232$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟5091f6acf0fbf0b72c4958189d20c85b8d7f42f0␟9065652012369821232:Big size`;
}
const _c15 = ["heading", I18N_13];
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4905475235330782118$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__17 = goog.getMsg("With native Date output");
    I18N_16 = MSG_EXTERNAL_4905475235330782118$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__17;
}
else {
    I18N_16 = $localize `:␟8b48bfc50979dda56f42928887986fe0052cbc99␟4905475235330782118:With native Date output`;
}
const _c18 = ["heading", I18N_16];
function ExampleTuiInputDateRangeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](6, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "dd", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " See an example ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " with the usage of these tokens. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](19, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "dl");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](21, I18N_8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "dt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "dd");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](32, _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tui-notification", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " If you need to set some attributes or listen to events on native ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " , you can put it inside with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Textfield");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " directive as shown below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "tui-input-date-range-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tui-doc-example", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](43, _c15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "tui-input-date-range-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tui-doc-example", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "tui-input-date-range-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tui-doc-example", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](48, _c18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "tui-input-date-range-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
} }
function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-date-range", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Choose dates ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("focusable", ctx_r3.focusable)("formControl", ctx_r3.control)("defaultViewedMonth", ctx_r3.defaultViewedMonth)("items", ctx_r3.items)("markerHandler", ctx_r3.markerHandler)("min", ctx_r3.min)("max", ctx_r3.max)("minLength", ctx_r3.minLength)("maxLength", ctx_r3.maxLength)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldExampleText", ctx_r3.exampleText)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoInvalid", ctx_r3.pseudoInvalid)("readOnly", ctx_r3.readOnly)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintMode", ctx_r3.hintMode)("disabledItemHandler", ctx_r3.disabledItemHandler);
} }
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___20 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_19 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___20;
}
else {
    I18N_19 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4370073840573771249$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___22 = goog.getMsg(" Default month to show ");
    I18N_21 = MSG_EXTERNAL_4370073840573771249$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___22;
}
else {
    I18N_21 = $localize `:␟cee5a8a5054c8a1eed4236e17142f509a2da3c3a␟4370073840573771249: Default month to show `;
}
function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_21);
} }
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8655647082077231883$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___24 = goog.getMsg("{$startTagDiv}A handler that gets a date and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", { "startTagDiv": "\uFFFD#1\uFFFD", "closeTagDiv": "\uFFFD/#1\uFFFD", "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD" });
    I18N_23 = MSG_EXTERNAL_8655647082077231883$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___24;
}
else {
    I18N_23 = $localize `:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
}
function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1585752593868985764$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___26 = goog.getMsg(" Fixed intervals (shows 2 calendars with empty array) ");
    I18N_25 = MSG_EXTERNAL_1585752593868985764$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___26;
}
else {
    I18N_25 = $localize `:␟0600d93e5689970aa785fe0413acf4c5da35b682␟1585752593868985764: Fixed intervals (shows 2 calendars with empty array) `;
}
function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_25);
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7126872511108805662$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___28 = goog.getMsg(" A handler that gets date and returns null or a tuple with circled marker colors ");
    I18N_27 = MSG_EXTERNAL_7126872511108805662$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___28;
}
else {
    I18N_27 = $localize `:␟23c9859665a49041525158245d62b03eb6e0bb77␟7126872511108805662: A handler that gets date and returns null or a tuple with circled marker colors `;
}
function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_27);
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7105748595977480347$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___30 = goog.getMsg(" Min date ");
    I18N_29 = MSG_EXTERNAL_7105748595977480347$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___30;
}
else {
    I18N_29 = $localize `:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `;
}
function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_29);
} }
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6045744383953302270$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___32 = goog.getMsg(" Max date ");
    I18N_31 = MSG_EXTERNAL_6045744383953302270$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___32;
}
else {
    I18N_31 = $localize `:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `;
}
function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_31);
} }
var I18N_33;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4884270346610812155$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___34 = goog.getMsg(" Minimal length of range ");
    I18N_33 = MSG_EXTERNAL_4884270346610812155$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___34;
}
else {
    I18N_33 = $localize `:␟309c0b4024f636a71dea973f24cd05b0d38af82b␟4884270346610812155: Minimal length of range `;
}
function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_33);
} }
var I18N_35;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1253745446557993958$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___36 = goog.getMsg(" Maximal length of range ");
    I18N_35 = MSG_EXTERNAL_1253745446557993958$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___36;
}
else {
    I18N_35 = $localize `:␟69cef120f415885c1d7258c5de495aa3cae21f85␟1253745446557993958: Maximal length of range `;
}
function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_35);
} }
function ExampleTuiInputDateRangeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_1_Template, 2, 21, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.defaultViewedMonth = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_5_Template, 3, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.disabledItemHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.items = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.markerHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.min = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.minLength = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.maxLength = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "inherited-documentation");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.defaultViewedMonthVariants)("documentationPropertyValue", ctx_r1.defaultViewedMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.itemsVariants)("documentationPropertyValue", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.markerHandlerVariants)("documentationPropertyValue", ctx_r1.markerHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.dayVariants)("documentationPropertyValue", ctx_r1.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.dayVariants)("documentationPropertyValue", ctx_r1.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.minLengthVariants)("documentationPropertyValue", ctx_r1.minLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.maxLengthVariants)("documentationPropertyValue", ctx_r1.maxLength);
} }
var I18N_37;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7181776168306782987$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__38 = goog.getMsg(" Mobile calendar does not use the same dropdown with calendar as desktop uses. It uses digital keyboard. If you want to open {$startLink} mobile calendar {$closeLink} , add imports of {$startTagCode}TuiMobileCalendarDialogModule{$closeTagCode} and {$startTagCode}TuiDialogModule{$closeTagCode} into your root module. Also, check that you did not forget about {$startLink_1} tui-root {$closeLink}", { "startLink": "\uFFFD#2\uFFFD", "closeLink": "[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD]", "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]", "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]", "startLink_1": "\uFFFD#5\uFFFD" });
    I18N_37 = MSG_EXTERNAL_7181776168306782987$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__38;
}
else {
    I18N_37 = $localize `:␟5616c14157b3a5879b9da1e6c8a1e9fb827ff4d9␟7181776168306782987: Mobile calendar does not use the same dropdown with calendar as desktop uses. It uses digital keyboard. If you want to open ${"\uFFFD#2\uFFFD"}:START_LINK: mobile calendar ${"[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_LINK: , add imports of ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:TuiDialogModule${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: into your root module. Also, check that you did not forget about ${"\uFFFD#5\uFFFD"}:START_LINK_1: tui-root ${"[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_LINK:`;
}
I18N_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_37);
var I18N_39;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7275600632239735393$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__40 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiInputDateRangeModule{$closeTagCode} in the same module where you want to use our component: ", { "startTagCode": "\uFFFD#10\uFFFD", "closeTagCode": "\uFFFD/#10\uFFFD" });
    I18N_39 = MSG_EXTERNAL_7275600632239735393$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__40;
}
else {
    I18N_39 = $localize `:␟9b96102ad80a0d3a11e4fbb8383fedba8bc52a2b␟7275600632239735393: Import an Angular module for forms and ${"\uFFFD#10\uFFFD"}:START_TAG_CODE:TuiInputDateRangeModule${"\uFFFD/#10\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
}
var I18N_41;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__42 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", { "startTagCode": "[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]", "closeTagCode": "[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]" });
    I18N_41 = MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__42;
}
else {
    I18N_41 = $localize `:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
}
I18N_41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_41);
function ExampleTuiInputDateRangeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](9, I18N_39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-doc-code", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](14, I18N_41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "tui-doc-code", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "TuiInputDateRange");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " in template: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "tui-doc-code", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
const TWO_DOTS = ["primary" /* Primary */, "secondary" /* Secondary */];
const ONE_DOT = ["success" /* Success */];
class ExampleTuiInputDateRangeComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_6__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/import/insert-template.md"));
        this.exampleForm = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-declare-form-md */ "!!raw-loader!-examples-import-declare-form-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/declare-form.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/import/declare-form.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/3/index.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/4/index.html")),
            'value-transformers.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-4-value-transformers-ts */ "!!raw-loader!-examples-4-value-transformers-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/value-transformers.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-range/examples/4/value-transformers.ts")),
        };
        this.dayVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_FIRST_DAY"],
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2021, 2, 5),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](1900, 0, 1),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2300, 0, 1),
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_LAST_DAY"],
        ];
        this.min = this.dayVariants[0];
        this.minLengthVariants = [{ day: 3 }, { day: 15 }];
        this.minLength = null;
        this.maxLengthVariants = [{ day: 5 }, { month: 1 }, { year: 1 }];
        this.maxLength = null;
        this.max = this.dayVariants[this.dayVariants.length - 1];
        this.markerHandlerVariants = [
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TUI_DEFAULT_MARKER_HANDLER"],
            (day) => (day.day % 2 === 0 ? TWO_DOTS : ONE_DOT),
        ];
        this.markerHandler = this.markerHandlerVariants[0];
        this.cleaner = false;
        this.disabledItemHandlerVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["ALWAYS_FALSE_HANDLER"],
            ({ day }) => day % 3 === 0,
        ];
        this.disabledItemHandler = this.disabledItemHandlerVariants[0];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.itemsVariants = [
            [],
            Object(_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["tuiCreateDefaultDayRangePeriods"])(),
        ];
        this.items = this.itemsVariants[0];
        this.defaultViewedMonthVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMonth"].currentLocal(),
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMonth"].currentLocal().append({ month: 1 }),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMonth"](2007, 5),
        ];
        this.defaultViewedMonth = this.defaultViewedMonthVariants[0];
    }
}
ExampleTuiInputDateRangeComponent.ɵfac = function ExampleTuiInputDateRangeComponent_Factory(t) { return ɵExampleTuiInputDateRangeComponent_BaseFactory(t || ExampleTuiInputDateRangeComponent); };
ExampleTuiInputDateRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiInputDateRangeComponent, selectors: [["example-tui-input-date-range"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_7__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputDateRangeComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "InputDateRange", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-9"], [1, "tui-space_bottom-5"], ["tuiLink", "", "routerLink", ".", "fragment", "date-localization"], ["tuiLink", "", "target", "_blank", "href", "https://github.com/Tinkoff/taiga-ui/blob/main/projects/cdk/date-time/day-range.ts"], ["tuiLink", "", "routerLink", ".", "fragment", "native-date-output"], ["tuiLink", "", "target", "_blank", "href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"], ["id", "base", 3, "content", 6, "heading"], [1, "tui-space_bottom-4", "b-form"], ["id", "large", 3, "content", 6, "heading"], ["id", "date-localization", "heading", "Date localization", 3, "content"], ["id", "native-date-output", 3, "content", 6, "heading"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "defaultViewedMonth", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMonth", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<TuiDay>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "items", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDayRangePeriod[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "markerHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMarkerHandler", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "minLength", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDayLike | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "maxLength", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDayLike | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-control", 3, "focusable", "formControl", "defaultViewedMonth", "items", "markerHandler", "min", "max", "minLength", "maxLength", "tuiTextfieldCleaner", "tuiTextfieldExampleText", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "pseudoFocused", "pseudoHovered", "pseudoInvalid", "readOnly", "tuiHintContent", "tuiHintDirection", "tuiHintMode", "disabledItemHandler"], ["tuiLink", "", "routerLink", "/components/mobile-calendar"], ["tuiLink", "", "routerLink", "/getting-started"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiInputDateRangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputDateRangeComponent_ng_template_1_Template, 50, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputDateRangeComponent_ng_template_2_Template, 13, 18, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputDateRangeComponent_ng_template_3_Template, 24, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_9__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_10__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocExampleComponent"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["TuiNotificationComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_14__["TuiInputDateRangeExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_15__["TuiInputDateRangeExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_16__["TuiInputDateRangeExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_17__["TuiInputDateRangeExample4"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_18__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_19__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_20__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_21__["InheritedDocumentationComponent"], _kit_components_input_date_range_input_date_range_component__WEBPACK_IMPORTED_MODULE_22__["TuiInputDateRangeComponent"], _kit_components_input_date_range_input_date_range_directive__WEBPACK_IMPORTED_MODULE_23__["TuiInputDateRangeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_24__["TuiTextfieldCleanerDirective"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_25__["TuiTextfieldExampleTextDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_26__["TuiTextfieldLabelOutsideDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_27__["TuiTextfieldSizeDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_28__["TuiHintControllerDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_29__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
const ɵExampleTuiInputDateRangeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiInputDateRangeComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiInputDateRangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-input-date-range`,
                templateUrl: `./input-date-range.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_7__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputDateRangeComponent),
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-date-range/input-date-range.module.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/components/input-date-range/input-date-range.module.ts ***!
  \****************************************************************************/
/*! exports provided: ExampleTuiInputDateRangeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputDateRangeModule", function() { return ExampleTuiInputDateRangeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-mobile */ "../addon-mobile/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/input-date-range/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/input-date-range/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/input-date-range/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/input-date-range/examples/4/index.ts");
/* harmony import */ var _input_date_range_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./input-date-range.component */ "./src/modules/components/input-date-range/input-date-range.component.ts");
















class ExampleTuiInputDateRangeModule {
}
ExampleTuiInputDateRangeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiInputDateRangeModule });
ExampleTuiInputDateRangeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiInputDateRangeModule_Factory(t) { return new (t || ExampleTuiInputDateRangeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputDateRangeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__["TuiMobileCalendarDialogModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_date_range_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputDateRangeComponent"])),
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiUnfinishedValidatorModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiInputDateRangeModule, { declarations: [_input_date_range_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputDateRangeComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiInputDateRangeExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiInputDateRangeExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_11__["TuiInputDateRangeExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_12__["TuiInputDateRangeExample4"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputDateRangeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__["TuiMobileCalendarDialogModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiUnfinishedValidatorModule"]], exports: [_input_date_range_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputDateRangeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiInputDateRangeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputDateRangeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__["TuiMobileCalendarDialogModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_date_range_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputDateRangeComponent"])),
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiUnfinishedValidatorModule"],
                ],
                declarations: [
                    _input_date_range_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputDateRangeComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiInputDateRangeExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiInputDateRangeExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_11__["TuiInputDateRangeExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_12__["TuiInputDateRangeExample4"],
                ],
                exports: [_input_date_range_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiInputDateRangeComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-input-date-range-input-date-range-module.js.map