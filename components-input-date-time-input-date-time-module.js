(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-input-date-time-input-date-time-module"],{

/***/ "./src/modules/components/input-date-time/examples/1/index.ts":
/*!********************************************************************!*\
  !*** ./src/modules/components/input-date-time/examples/1/index.ts ***!
  \********************************************************************/
/*! exports provided: TuiInputDateTimeExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputDateTimeExample1", function() { return TuiInputDateTimeExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _kit_components_input_date_time_input_date_time_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-time/input-date-time.component */ "../kit/components/input-date-time/input-date-time.component.ts");
/* harmony import */ var _kit_components_input_date_time_input_date_time_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-time/input-date-time.directive */ "../kit/components/input-date-time/input-date-time.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");











var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7402895815395298696$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_1_INDEX_TS_1 = goog.getMsg("Form value:");
    I18N_0 = MSG_EXTERNAL_7402895815395298696$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_1_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟bdc1ac802a9f8ebac5423e543fafda4ef101dcd5␟7402895815395298696:Form value:`;
}
class TuiInputDateTimeExample1 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"](2017, 2, 15), null]),
        });
    }
}
TuiInputDateTimeExample1.ɵfac = function TuiInputDateTimeExample1_Factory(t) { return new (t || TuiInputDateTimeExample1)(); };
TuiInputDateTimeExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputDateTimeExample1, selectors: [["tui-input-date-time-example-1"]], decls: 10, vars: 4, consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue"], ["tuiTextfield", "", "placeholder", "OCT 26 1985 01:22"]], template: function TuiInputDateTimeExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-date-time", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Choose date and time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](5, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 2, ctx.testForm.value));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_date_time_input_date_time_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputDateTimeComponent"], _kit_components_input_date_time_input_date_time_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateTimeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["JsonPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputDateTimeExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-date-time-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-date-time/examples/2/index.ts":
/*!********************************************************************!*\
  !*** ./src/modules/components/input-date-time/examples/2/index.ts ***!
  \********************************************************************/
/*! exports provided: TuiInputDateTimeExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputDateTimeExample2", function() { return TuiInputDateTimeExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _kit_components_input_date_time_input_date_time_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-time/input-date-time.component */ "../kit/components/input-date-time/input-date-time.component.ts");
/* harmony import */ var _kit_components_input_date_time_input_date_time_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-time/input-date-time.directive */ "../kit/components/input-date-time/input-date-time.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");










var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2473136848054292961$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_2_INDEX_TS_1 = goog.getMsg("Default:");
    I18N_0 = MSG_EXTERNAL_2473136848054292961$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_2_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟f025901df0cbaf314e7b32707720772c7e995008␟2473136848054292961:Default:`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_48462401577556644$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_2_INDEX_TS_3 = goog.getMsg("With seconds:");
    I18N_2 = MSG_EXTERNAL_48462401577556644$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_2_INDEX_TS_3;
}
else {
    I18N_2 = $localize `:␟bc0c7a2511bfa61dc113f7119c46786f9621dffe␟48462401577556644:With seconds:`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4462643802911150950$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_2_INDEX_TS_5 = goog.getMsg("With SS and MS:");
    I18N_4 = MSG_EXTERNAL_4462643802911150950$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_2_INDEX_TS_5;
}
else {
    I18N_4 = $localize `:␟2e7211f1a6997fae0f9857838493f0658007bb74␟4462643802911150950:With SS and MS:`;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7402895815395298696$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_2_INDEX_TS_7 = goog.getMsg("Form value:");
    I18N_6 = MSG_EXTERNAL_7402895815395298696$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_2_INDEX_TS_7;
}
else {
    I18N_6 = $localize `:␟bdc1ac802a9f8ebac5423e543fafda4ef101dcd5␟7402895815395298696:Form value:`;
}
class TuiInputDateTimeExample2 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"](2017, 2, 15), null]),
        });
    }
}
TuiInputDateTimeExample2.ɵfac = function TuiInputDateTimeExample2_Factory(t) { return new (t || TuiInputDateTimeExample2)(); };
TuiInputDateTimeExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputDateTimeExample2, selectors: [["tui-input-date-time-example-2"]], decls: 19, vars: 4, consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue", "timeMode", "HH:MM"], ["formControlName", "testValue", "timeMode", "HH:MM:SS"], ["formControlName", "testValue", "timeMode", "HH:MM:SS.MSS"]], template: function TuiInputDateTimeExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input-date-time", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Choose date and time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, I18N_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tui-input-date-time", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Choose date and time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](10, I18N_4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-input-date-time", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Choose date and time ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, I18N_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 2, ctx.testForm.value));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_date_time_input_date_time_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputDateTimeComponent"], _kit_components_input_date_time_input_date_time_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateTimeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputDateTimeExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-date-time-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-date-time/examples/3/index.ts":
/*!********************************************************************!*\
  !*** ./src/modules/components/input-date-time/examples/3/index.ts ***!
  \********************************************************************/
/*! exports provided: TuiInputDateTimeExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputDateTimeExample3", function() { return TuiInputDateTimeExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _kit_components_input_date_time_input_date_time_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-time/input-date-time.component */ "../kit/components/input-date-time/input-date-time.component.ts");
/* harmony import */ var _kit_components_input_date_time_input_date_time_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-time/input-date-time.directive */ "../kit/components/input-date-time/input-date-time.directive.ts");









class TuiInputDateTimeExample3 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"](2017, 2, 15), new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiTime"](12, 30)]);
    }
}
TuiInputDateTimeExample3.ɵfac = function TuiInputDateTimeExample3_Factory(t) { return new (t || TuiInputDateTimeExample3)(); };
TuiInputDateTimeExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputDateTimeExample3, selectors: [["tui-input-date-time-example-3"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_DATE_FORMAT"], useValue: `YMD` },
            { provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_DATE_SEPARATOR"], useValue: `/` },
        ])], decls: 2, vars: 1, consts: [[1, "b-form", 3, "formControl"]], template: function TuiInputDateTimeExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-date-time", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Choose date and time\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
    } }, directives: [_kit_components_input_date_time_input_date_time_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputDateTimeComponent"], _kit_components_input_date_time_input_date_time_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateTimeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputDateTimeExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-date-time-example-3`,
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

/***/ "./src/modules/components/input-date-time/examples/4/index.ts":
/*!********************************************************************!*\
  !*** ./src/modules/components/input-date-time/examples/4/index.ts ***!
  \********************************************************************/
/*! exports provided: TuiInputDateTimeExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputDateTimeExample4", function() { return TuiInputDateTimeExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _value_transformer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./value-transformer */ "./src/modules/components/input-date-time/examples/4/value-transformer.ts");
/* harmony import */ var _kit_components_input_date_time_input_date_time_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-time/input-date-time.component */ "../kit/components/input-date-time/input-date-time.component.ts");
/* harmony import */ var _kit_components_input_date_time_input_date_time_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-time/input-date-time.directive */ "../kit/components/input-date-time/input-date-time.directive.ts");










class TuiInputDateTimeExample4 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`19.01.2022, 12:33`);
    }
}
TuiInputDateTimeExample4.ɵfac = function TuiInputDateTimeExample4_Factory(t) { return new (t || TuiInputDateTimeExample4)(); };
TuiInputDateTimeExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputDateTimeExample4, selectors: [["tui-input-date-time-example-4"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TUI_DATE_TIME_VALUE_TRANSFORMER"],
                useClass: _value_transformer__WEBPACK_IMPORTED_MODULE_5__["ExampleDateTimeTransformer"],
            },
        ])], decls: 7, vars: 2, consts: [[1, "b-form", 3, "formControl"]], template: function TuiInputDateTimeExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-date-time", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Choose date and time\n");
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
    } }, directives: [_kit_components_input_date_time_input_date_time_component__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateTimeComponent"], _kit_components_input_date_time_input_date_time_directive__WEBPACK_IMPORTED_MODULE_7__["TuiInputDateTimeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputDateTimeExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-date-time-example-4`,
                templateUrl: `./index.html`,
                providers: [
                    {
                        provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TUI_DATE_TIME_VALUE_TRANSFORMER"],
                        useClass: _value_transformer__WEBPACK_IMPORTED_MODULE_5__["ExampleDateTimeTransformer"],
                    },
                ],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-date-time/examples/4/value-transformer.ts":
/*!********************************************************************************!*\
  !*** ./src/modules/components/input-date-time/examples/4/value-transformer.ts ***!
  \********************************************************************************/
/*! exports provided: ExampleDateTimeTransformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDateTimeTransformer", function() { return ExampleDateTimeTransformer; });
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");

class ExampleDateTimeTransformer {
    constructor() {
        this.separator = `, `;
    }
    fromControlValue(controlValue) {
        const [day, time = ``] = controlValue.split(this.separator);
        return day
            ? [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__["TuiDay"].normalizeParse(day), time ? _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__["TuiTime"].fromString(time) : null]
            : [null, null];
    }
    toControlValue([day, time]) {
        return day
            ? day.toString() + (time ? `${this.separator}${time.toString()}` : ``)
            : ``;
    }
}


/***/ }),

/***/ "./src/modules/components/input-date-time/input-date-time.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/components/input-date-time/input-date-time.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ExampleTuiInputDateTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputDateTimeComponent", function() { return ExampleTuiInputDateTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _abstract_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../abstract/control */ "./src/modules/components/abstract/control.ts");
/* harmony import */ var _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../abstract/inherited-documentation/abstract-props-accessor */ "./src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/input-date-time/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/input-date-time/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/input-date-time/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/input-date-time/examples/4/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _kit_components_input_date_time_input_date_time_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../kit/components/input-date-time/input-date-time.component */ "../kit/components/input-date-time/input-date-time.component.ts");
/* harmony import */ var _kit_components_input_date_time_input_date_time_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../kit/components/input-date-time/input-date-time.directive */ "../kit/components/input-date-time/input-date-time.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-autocomplete.directive */ "../core/directives/textfield-controller/textfield-autocomplete.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
































var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4454597240613417998$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}InputDateTime{$closeTagCode} allows to input date and time ", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_4454597240613417998$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟044a4dc175f6a468120b459545b576929c5ece55␟4454597240613417998:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputDateTime${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows to input date and time `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9067186024080940878$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__3 = goog.getMsg("DI-tokens for date localization:");
    I18N_2 = MSG_EXTERNAL_9067186024080940878$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟44191f6f2084b7e19ed30289598f45f6dc88ef96␟9067186024080940878:DI-tokens for date localization:`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7722521738393615006$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__5 = goog.getMsg("{$startTagDt}{$startTagCode}TUI_DATE_FORMAT{$closeTagCode}{$closeTagDt}{$startTagDd} active date format ( {$startTagCode}'DMY' | 'MDY' | 'YMD'{$closeTagCode} ) {$closeTagDd}{$startTagDt}{$startTagCode}TUI_DATE_SEPARATOR{$closeTagCode}{$closeTagDt}{$startTagDd_1}single-character date's separator (dot, slash etc.){$closeTagDd}", { "startTagDt": "[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]", "startTagCode": "[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]", "closeTagCode": "[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]", "closeTagDt": "[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]", "startTagDd": "\uFFFD#9\uFFFD", "closeTagDd": "[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]", "startTagDd_1": "\uFFFD#13\uFFFD" });
    I18N_4 = MSG_EXTERNAL_7722521738393615006$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟4a9f8a78772cf0d29d68a56ec7d2e2e4cde207ba␟7722521738393615006:${"[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_DT:${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TUI_DATE_FORMAT${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_DT:${"\uFFFD#9\uFFFD"}:START_TAG_DD: active date format ( ${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:'DMY' | 'MDY' | 'YMD'${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE: ) ${"[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_DD:${"[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_DT:${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TUI_DATE_SEPARATOR${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_DT:${"\uFFFD#13\uFFFD"}:START_TAG_DD_1:single-character date's separator (dot, slash etc.)${"[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_DD:`;
}
I18N_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_4);
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4839071173512899768$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__7 = goog.getMsg("DI-tokens for input-configurations:");
    I18N_6 = MSG_EXTERNAL_4839071173512899768$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟1e189ebe2d938d6aaa6a9a2f9adeff1e3b372aac␟4839071173512899768:DI-tokens for input-configurations:`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3277359903153257463$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__9 = goog.getMsg("{$startTagDt}{$startTagCode}TUI_DATE_TIME_VALUE_TRANSFORMER{$closeTagCode}{$closeTagDt}{$startTagDd} custom format of control output ( {$startTagCode}[TuiDay | null, TuiTime | null]{$closeTagCode} is default). {$startParagraph}{$startLink} See example {$closeLink} with string as control's output. {$closeParagraph}{$closeTagDd}", { "startTagDt": "\uFFFD#22\uFFFD", "startTagCode": "[\uFFFD#23\uFFFD|\uFFFD#25\uFFFD]", "closeTagCode": "[\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD]", "closeTagDt": "\uFFFD/#22\uFFFD", "startTagDd": "\uFFFD#24\uFFFD", "startParagraph": "\uFFFD#26\uFFFD", "startLink": "\uFFFD#27\uFFFD", "closeLink": "\uFFFD/#27\uFFFD", "closeParagraph": "\uFFFD/#26\uFFFD", "closeTagDd": "\uFFFD/#24\uFFFD" });
    I18N_8 = MSG_EXTERNAL_3277359903153257463$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟9131d0fb644c4d5aaa930d7412f5df510b08e6be␟3277359903153257463:${"\uFFFD#22\uFFFD"}:START_TAG_DT:${"[\uFFFD#23\uFFFD|\uFFFD#25\uFFFD]"}:START_TAG_CODE:TUI_DATE_TIME_VALUE_TRANSFORMER${"[\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#22\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#24\uFFFD"}:START_TAG_DD: custom format of control output ( ${"[\uFFFD#23\uFFFD|\uFFFD#25\uFFFD]"}:START_TAG_CODE:[TuiDay | null, TuiTime | null]${"[\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD]"}:CLOSE_TAG_CODE: is default). ${"\uFFFD#26\uFFFD"}:START_PARAGRAPH:${"\uFFFD#27\uFFFD"}:START_LINK: See example ${"\uFFFD/#27\uFFFD"}:CLOSE_LINK: with string as control's output. ${"\uFFFD/#26\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD/#24\uFFFD"}:CLOSE_TAG_DD:`;
}
I18N_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_8);
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__11 = goog.getMsg("Basic");
    I18N_10 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c12 = ["heading", I18N_10];
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6778729094598431749$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__14 = goog.getMsg("With control's output as string");
    I18N_13 = MSG_EXTERNAL_6778729094598431749$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟c2d11aaec69642ed60bc139f0b022de0a9a109d7␟6778729094598431749:With control's output as string`;
}
const _c15 = ["heading", I18N_13];
function ExampleTuiInputDateTimeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " See example ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](29, _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tui-notification", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " If you need to set some attributes or listen to events on native ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " , you can put it inside with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Textfield");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " directive as shown below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "tui-input-date-time-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "tui-input-date-time-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tui-doc-example", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "tui-input-date-time-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tui-doc-example", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](44, _c15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "tui-input-date-time-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
} }
function ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-date-time", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Choose date and time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabledItemHandler", ctx_r3.disabledItemHandler)("formControl", ctx_r3.control)("focusable", ctx_r3.focusable)("min", ctx_r3.min)("max", ctx_r3.max)("defaultActiveYearMonth", ctx_r3.defaultActiveYearMonth)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoInvalid", ctx_r3.pseudoInvalid)("readOnly", ctx_r3.readOnly)("timeMode", ctx_r3.mode)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintMode", ctx_r3.hintMode)("tuiTextfieldAutocomplete", ctx_r3.autocomplete)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldExampleText", ctx_r3.exampleText)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___17 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_16 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
function ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A handler that gets a date and returns true if it is disabled.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Must be a pure function");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7105748595977480347$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___19 = goog.getMsg(" Min date ");
    I18N_18 = MSG_EXTERNAL_7105748595977480347$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `;
}
function ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_18);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6045744383953302270$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___21 = goog.getMsg(" Max date ");
    I18N_20 = MSG_EXTERNAL_6045744383953302270$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `;
}
function ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_20);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_777422566563462419$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___23 = goog.getMsg(" The default active month that is shown when you opens calendar for the first time ");
    I18N_22 = MSG_EXTERNAL_777422566563462419$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___23;
}
else {
    I18N_22 = $localize `:␟bc715c06fbc5fe4bc714850e286281145c441611␟777422566563462419: The default active month that is shown when you opens calendar for the first time `;
}
function ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_22);
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1953362032734413793$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___25 = goog.getMsg(" Time modes for SS and MS support ");
    I18N_24 = MSG_EXTERNAL_1953362032734413793$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___25;
}
else {
    I18N_24 = $localize `:␟c565c714bb04a047bd1bae3404031386d26d05d8␟1953362032734413793: Time modes for SS and MS support `;
}
function ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_24);
} }
function ExampleTuiInputDateTimeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_1_Template, 2, 19, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_4_Template, 4, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.disabledItemHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.min = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.defaultActiveYearMonth = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.mode = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "inherited-documentation", 18);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.defaultActiveYearMonthVariants)("documentationPropertyValue", ctx_r1.defaultActiveYearMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.modeVariants)("documentationPropertyValue", ctx_r1.mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropdown", true);
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5541686400640412405$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__27 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiInputDateTimeModule{$closeTagCode} in the same module where you want to use our component: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_26 = MSG_EXTERNAL_5541686400640412405$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__27;
}
else {
    I18N_26 = $localize `:␟5ac39f9a4865e1fa1076fe6bfc72e1ff99949f29␟5541686400640412405: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputDateTimeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
}
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__29 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", { "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]", "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]" });
    I18N_28 = MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__29;
}
else {
    I18N_28 = $localize `:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
}
I18N_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_28);
var I18N_30;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8794844667839774096$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__31 = goog.getMsg(" Use in template: {$startTagTuiDocCode}{$closeTagTuiDocCode}", { "startTagTuiDocCode": "\uFFFD#14\uFFFD", "closeTagTuiDocCode": "\uFFFD/#14\uFFFD" });
    I18N_30 = MSG_EXTERNAL_8794844667839774096$$SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__31;
}
else {
    I18N_30 = $localize `:␟76d52ae838e90b2ba174872346714a031dbc612d␟8794844667839774096: Use in template: ${"\uFFFD#14\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#14\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:`;
}
function ExampleTuiInputDateTimeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](8, I18N_28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-doc-code", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](13, I18N_30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tui-doc-code", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiInputDateTimeComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_5__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this.today = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"].currentLocal();
        this.exampleForm = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-declare-form-md */ "!!raw-loader!-examples-import-declare-form-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/declare-form.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/import/declare-form.md"));
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/3/index.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/4/index.html")),
            'value-transformer.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-4-value-transformer-ts */ "!!raw-loader!-examples-4-value-transformer-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/value-transformer.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date-time/examples/4/value-transformer.ts")),
        };
        this.minVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_FIRST_DAY"],
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2017, 2, 5),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](1900, 0, 1),
            [this.today.append({ day: -1 }), new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiTime"](12, 20)],
        ];
        this.min = this.minVariants[0];
        this.maxVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_LAST_DAY"],
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2017, 11, 11),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2020, 2, 5),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2300, 0, 1),
            [this.today.append({ day: +1 }), new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiTime"](16, 20)],
        ];
        this.max = this.maxVariants[0];
        this.defaultActiveYearMonthVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMonth"].currentLocal(),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMonth"](2020, 2),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMonth"](2017, 2),
        ];
        this.defaultActiveYearMonth = this.defaultActiveYearMonthVariants[0];
        this.disabledItemHandlerVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["ALWAYS_FALSE_HANDLER"],
            ({ day }) => day % 3 === 0,
        ];
        this.disabledItemHandler = this.disabledItemHandlerVariants[0];
        this.itemsVariants = [
            [],
            [new _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiNamedDay"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_LAST_DAY"].append({ year: -1 }), `Unill today`)],
        ];
        this.items = this.itemsVariants[0];
        this.autocompleteVariants = [`off`, `bday`];
        this.autocomplete = ``;
        this.cleaner = false;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.modeVariants = [`HH:MM`, `HH:MM:SS`, `HH:MM:SS.MSS`];
        this.mode = this.modeVariants[0];
    }
}
ExampleTuiInputDateTimeComponent.ɵfac = function ExampleTuiInputDateTimeComponent_Factory(t) { return ɵExampleTuiInputDateTimeComponent_BaseFactory(t || ExampleTuiInputDateTimeComponent); };
ExampleTuiInputDateTimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiInputDateTimeComponent, selectors: [["example-tui-input-date-time"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_6__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputDateTimeComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "InputDateTime", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-9"], [1, "tui-space_bottom-5"], ["tuiLink", "", "routerLink", ".", "fragment", "date-localization"], ["tuiLink", "", "routerLink", ".", "fragment", "string-control-output"], ["id", "base", 3, "content", 6, "heading"], [1, "tui-space_bottom-4", "b-form"], ["id", "modes", "heading", "Modes", 3, "content"], ["id", "date-localization", "heading", "Date localization", 3, "content"], ["id", "string-control-output", 3, "content", 6, "heading"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<TuiDay>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay | [TuiDay, TuiTime]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay | [TuiDay, TuiTime]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "defaultActiveYearMonth", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMonth", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "timeMode", "documentationPropertyMode", "input", "documentationPropertyType", "TuiTimeMode", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "dropdown"], [3, "disabledItemHandler", "formControl", "focusable", "min", "max", "defaultActiveYearMonth", "pseudoFocused", "pseudoHovered", "pseudoInvalid", "readOnly", "timeMode", "tuiHintContent", "tuiHintDirection", "tuiHintMode", "tuiTextfieldAutocomplete", "tuiTextfieldCleaner", "tuiTextfieldExampleText", "tuiTextfieldLabelOutside", "tuiTextfieldSize"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiInputDateTimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputDateTimeComponent_ng_template_1_Template, 46, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputDateTimeComponent_ng_template_2_Template, 10, 13, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputDateTimeComponent_ng_template_3_Template, 15, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_8__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_9__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocExampleComponent"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_12__["TuiNotificationComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_13__["TuiInputDateTimeExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_14__["TuiInputDateTimeExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_15__["TuiInputDateTimeExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_16__["TuiInputDateTimeExample4"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_17__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_18__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_19__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_20__["InheritedDocumentationComponent"], _kit_components_input_date_time_input_date_time_component__WEBPACK_IMPORTED_MODULE_21__["TuiInputDateTimeComponent"], _kit_components_input_date_time_input_date_time_directive__WEBPACK_IMPORTED_MODULE_22__["TuiInputDateTimeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_23__["TuiHintControllerDirective"], _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_24__["TuiTextfieldAutocompleteDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_25__["TuiTextfieldCleanerDirective"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_26__["TuiTextfieldExampleTextDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_27__["TuiTextfieldLabelOutsideDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_28__["TuiTextfieldSizeDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_29__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
const ɵExampleTuiInputDateTimeComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiInputDateTimeComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiInputDateTimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-input-date-time`,
                templateUrl: `./input-date-time.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_6__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputDateTimeComponent),
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-date-time/input-date-time.module.ts":
/*!**************************************************************************!*\
  !*** ./src/modules/components/input-date-time/input-date-time.module.ts ***!
  \**************************************************************************/
/*! exports provided: ExampleTuiInputDateTimeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputDateTimeModule", function() { return ExampleTuiInputDateTimeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/input-date-time/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/input-date-time/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/input-date-time/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/input-date-time/examples/4/index.ts");
/* harmony import */ var _input_date_time_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./input-date-time.component */ "./src/modules/components/input-date-time/input-date-time.component.ts");















class ExampleTuiInputDateTimeModule {
}
ExampleTuiInputDateTimeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiInputDateTimeModule });
ExampleTuiInputDateTimeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiInputDateTimeModule_Factory(t) { return new (t || ExampleTuiInputDateTimeModule)(); }, imports: [[
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateTimeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_date_time_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiInputDateTimeComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiInputDateTimeModule, { declarations: [_input_date_time_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiInputDateTimeComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiInputDateTimeExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiInputDateTimeExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiInputDateTimeExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_11__["TuiInputDateTimeExample4"]], imports: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateTimeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_input_date_time_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiInputDateTimeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiInputDateTimeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_7__["InheritedDocumentationModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateTimeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_date_time_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiInputDateTimeComponent"])),
                ],
                declarations: [
                    _input_date_time_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiInputDateTimeComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiInputDateTimeExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiInputDateTimeExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiInputDateTimeExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_11__["TuiInputDateTimeExample4"],
                ],
                exports: [_input_date_time_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiInputDateTimeComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-input-date-time-input-date-time-module.js.map