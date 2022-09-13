(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-input-date-input-date-module"],{

/***/ "./src/modules/components/input-date/examples/1/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/input-date/examples/1/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiInputDateExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputDateExample1", function() { return TuiInputDateExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date/input-date.component */ "../kit/components/input-date/input-date.component.ts");
/* harmony import */ var _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date/input-date.directive */ "../kit/components/input-date/input-date.directive.ts");
/* harmony import */ var _kit_directives_unfinished_validator_unfinished_validator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/directives/unfinished-validator/unfinished-validator.directive */ "../kit/directives/unfinished-validator/unfinished-validator.directive.ts");
/* harmony import */ var _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/error/error.component */ "../core/components/error/error.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../kit/pipes/field-error/field-error-pipe */ "../kit/pipes/field-error/field-error-pipe.ts");














var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_918573850120182890$$SRC_MODULES_COMPONENTS_INPUT_DATE_EXAMPLES_1_INDEX_TS_1 = goog.getMsg(" If a field is optional, but unfinished field should be marked as invalid, use {$startTagCode}tuiUnfinishedValidator{$closeTagCode} directive ", { "startTagCode": "\uFFFD#3\uFFFD", "closeTagCode": "\uFFFD/#3\uFFFD" });
    I18N_0 = MSG_EXTERNAL_918573850120182890$$SRC_MODULES_COMPONENTS_INPUT_DATE_EXAMPLES_1_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟94fc108253bd1502cd271951ce40db76787fe618␟918573850120182890: If a field is optional, but unfinished field should be marked as invalid, use ${"\uFFFD#3\uFFFD"}:START_TAG_CODE:tuiUnfinishedValidator${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE: directive `;
}
const _c2 = function () { return []; };
class TuiInputDateExample1 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"](2017, 0, 15)),
        });
    }
}
TuiInputDateExample1.ɵfac = function TuiInputDateExample1_Factory(t) { return new (t || TuiInputDateExample1)(); };
TuiInputDateExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputDateExample1, selectors: [["tui-input-date-example-1"]], decls: 9, vars: 8, consts: [[1, "b-form", 3, "formGroup", "tuiTextfieldCleaner"], ["tuiUnfinishedValidator", "Finish filling the field", "formControlName", "testValue"], ["formControlName", "testValue", 3, "error"]], template: function TuiInputDateExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](2, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-input-date", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Choose a date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm)("tuiTextfieldCleaner", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2))));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldCleanerDirective"], _kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateComponent"], _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_7__["TuiInputDateDirective"], _kit_directives_unfinished_validator_unfinished_validator_directive__WEBPACK_IMPORTED_MODULE_8__["TuiUnfinishedValidatorDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_9__["TuiErrorComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_11__["TuiFieldErrorPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputDateExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-date-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-date/examples/2/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/input-date/examples/2/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiInputDateExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputDateExample2", function() { return TuiInputDateExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date/input-date.component */ "../kit/components/input-date/input-date.component.ts");
/* harmony import */ var _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date/input-date.directive */ "../kit/components/input-date/input-date.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");











class TuiInputDateExample2 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"](2017, 2, 15)),
        });
    }
}
TuiInputDateExample2.ɵfac = function TuiInputDateExample2_Factory(t) { return new (t || TuiInputDateExample2)(); };
TuiInputDateExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputDateExample2, selectors: [["tui-input-date-example-2"]], decls: 7, vars: 2, consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue", "tuiTextfieldSize", "s"], ["formControlName", "testValue", "tuiTextfieldSize", "m", 1, "tui-space_vertical-4", 3, "tuiTextfieldLabelOutside"], ["formControlName", "testValue", "tuiTextfieldSize", "l"]], template: function TuiInputDateExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-date", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Choose a date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input-date", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Choose a date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-input-date", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Choose a date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputDateComponent"], _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldLabelOutsideDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputDateExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-date-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-date/examples/3/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/input-date/examples/3/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiInputDateExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputDateExample3", function() { return TuiInputDateExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date/input-date.component */ "../kit/components/input-date/input-date.component.ts");
/* harmony import */ var _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date/input-date.directive */ "../kit/components/input-date/input-date.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");









class TuiInputDateExample3 {
    constructor() {
        this.from = null;
        this.to = null;
        this.min = new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2017, 9, 4);
        this.max = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"].currentLocal();
        this.items = [
            new _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TuiNamedDay"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_LAST_DAY"].append({ year: -1 }), `Until today`, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"].currentLocal()),
        ];
    }
}
TuiInputDateExample3.ɵfac = function TuiInputDateExample3_Factory(t) { return new (t || TuiInputDateExample3)(); };
TuiInputDateExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputDateExample3, selectors: [["tui-input-date-example-3"]], decls: 8, vars: 6, consts: [[1, "tui-text_h4"], [1, "b-form"], [3, "min", "max", "ngModel", "ngModelChange"], [3, "min", "items", "ngModel", "ngModelChange"]], template: function TuiInputDateExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Taiga UI usage experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input-date", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiInputDateExample3_Template_tui_input_date_ngModelChange_3_listener($event) { return ctx.from = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-input-date", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiInputDateExample3_Template_tui_input_date_ngModelChange_6_listener($event) { return ctx.to = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Finish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("ngModel", ctx.from);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.from || ctx.min)("items", ctx.items)("ngModel", ctx.to);
    } }, directives: [_kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputDateComponent"], _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputDateExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-date-example-3`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-date/examples/4/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/input-date/examples/4/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiInputDateExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputDateExample4", function() { return TuiInputDateExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date/input-date.component */ "../kit/components/input-date/input-date.component.ts");
/* harmony import */ var _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date/input-date.directive */ "../kit/components/input-date/input-date.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");











class TuiInputDateExample4 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"](2017, 0, 15));
    }
}
TuiInputDateExample4.ɵfac = function TuiInputDateExample4_Factory(t) { return new (t || TuiInputDateExample4)(); };
TuiInputDateExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputDateExample4, selectors: [["tui-input-date-example-4"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            { provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_DATE_FORMAT"], useValue: `YMD` },
            { provide: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_DATE_SEPARATOR"], useValue: `/` },
        ])], decls: 11, vars: 1, consts: [[1, "tui-space_bottom-4", "b-form"], [1, "b-form", 3, "formControl"], ["tuiTextfield", "", "autocomplete", "bday"]], template: function TuiInputDateExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-notification", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " If you need to set some attributes or listen to events on native ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " , you can put it inside with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Textfield");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " directive as shown below\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-input-date", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Choose a date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control);
    } }, directives: [_core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationComponent"], _kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateComponent"], _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_7__["TuiInputDateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputDateExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-date-example-4`,
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

/***/ "./src/modules/components/input-date/examples/5/index.ts":
/*!***************************************************************!*\
  !*** ./src/modules/components/input-date/examples/5/index.ts ***!
  \***************************************************************/
/*! exports provided: TuiInputDateExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputDateExample5", function() { return TuiInputDateExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date/input-date.component */ "../kit/components/input-date/input-date.component.ts");
/* harmony import */ var _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date/input-date.directive */ "../kit/components/input-date/input-date.directive.ts");
/* harmony import */ var _native_date_transformer_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./native-date-transformer.directive */ "./src/modules/components/input-date/examples/5/native-date-transformer.directive.ts");










class TuiInputDateExample5 {
    constructor() {
        this.nativeDateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new Date(2022, 0, 26));
        this.defaultControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"](2022, 0, 26));
    }
}
TuiInputDateExample5.ɵfac = function TuiInputDateExample5_Factory(t) { return new (t || TuiInputDateExample5)(); };
TuiInputDateExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputDateExample5, selectors: [["tui-input-date-example-5"]], decls: 24, vars: 4, consts: [[1, "b-form", 3, "formControl"], ["toNativeDate", "", 1, "b-form", 3, "formControl"]], template: function TuiInputDateExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Control's output as TuiDay (default)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-input-date", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Choose a date\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Stringified control value:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Control's output as native Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " (see ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "toNativeDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " directive)\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tui-input-date", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Choose a date\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Stringified control value:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.defaultControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.defaultControl.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.nativeDateControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.nativeDateControl.value);
    } }, directives: [_kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputDateComponent"], _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _native_date_transformer_directive__WEBPACK_IMPORTED_MODULE_7__["ExampleNativeDateTransformerDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputDateExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-date-example-5`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-date/examples/5/native-date-transformer.directive.ts":
/*!*******************************************************************************************!*\
  !*** ./src/modules/components/input-date/examples/5/native-date-transformer.directive.ts ***!
  \*******************************************************************************************/
/*! exports provided: ExampleNativeDateTransformerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleNativeDateTransformerDirective", function() { return ExampleNativeDateTransformerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");




class ExampleTransformer {
    fromControlValue(controlValue) {
        return controlValue && _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiDay"].fromLocalNativeDate(controlValue);
    }
    toControlValue(componentValue) {
        return (componentValue === null || componentValue === void 0 ? void 0 : componentValue.toLocalNativeDate()) || null;
    }
}
class ExampleNativeDateTransformerDirective {
}
ExampleNativeDateTransformerDirective.ɵfac = function ExampleNativeDateTransformerDirective_Factory(t) { return new (t || ExampleNativeDateTransformerDirective)(); };
ExampleNativeDateTransformerDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ExampleNativeDateTransformerDirective, selectors: [["tui-input-date", "toNativeDate", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_2__["TUI_DATE_VALUE_TRANSFORMER"],
                useClass: ExampleTransformer,
            },
        ])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleNativeDateTransformerDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: `tui-input-date[toNativeDate]`,
                providers: [
                    {
                        provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_2__["TUI_DATE_VALUE_TRANSFORMER"],
                        useClass: ExampleTransformer,
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-date/input-date.component.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/components/input-date/input-date.component.ts ***!
  \*******************************************************************/
/*! exports provided: ExampleTuiInputDateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputDateComponent", function() { return ExampleTuiInputDateComponent; });
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
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/input-date/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/input-date/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/input-date/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/input-date/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/components/input-date/examples/5/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../kit/components/input-date/input-date.component */ "../kit/components/input-date/input-date.component.ts");
/* harmony import */ var _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../kit/components/input-date/input-date.directive */ "../kit/components/input-date/input-date.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-autocomplete.directive */ "../core/directives/textfield-controller/textfield-autocomplete.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");

































var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2917939038176412665$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}InputDate{$closeTagCode} \u2013 input with a calendar. ", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_2917939038176412665$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟fc2811ea354291326a11dd08fc35a97719f75c2d␟2917939038176412665:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputDate${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: – input with a calendar. `;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9067186024080940878$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__3 = goog.getMsg("DI-tokens for date localization:");
    I18N_2 = MSG_EXTERNAL_9067186024080940878$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟44191f6f2084b7e19ed30289598f45f6dc88ef96␟9067186024080940878:DI-tokens for date localization:`;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5888187430077433259$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__5 = goog.getMsg("{$startTagDt}{$startTagCode}TUI_DATE_FORMAT{$closeTagCode}{$closeTagDt}{$startTagDd} active date format ( {$startTagCode}'DMY' | 'MDY' | 'YMD'{$closeTagCode} ). {$closeTagDd}{$startTagDt}{$startTagCode}TUI_DATE_SEPARATOR{$closeTagCode}{$closeTagDt}{$startTagDd_1}single-character date's separator (dot, slash etc.).{$closeTagDd}", { "startTagDt": "[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]", "startTagCode": "[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]", "closeTagCode": "[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]", "closeTagDt": "[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]", "startTagDd": "\uFFFD#9\uFFFD", "closeTagDd": "[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]", "startTagDd_1": "\uFFFD#13\uFFFD" });
    I18N_4 = MSG_EXTERNAL_5888187430077433259$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟ce9790eaf90c30d2b6ab0af894665e9a649da178␟5888187430077433259:${"[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_DT:${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TUI_DATE_FORMAT${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_DT:${"\uFFFD#9\uFFFD"}:START_TAG_DD: active date format ( ${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:'DMY' | 'MDY' | 'YMD'${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE: ). ${"[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_DD:${"[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_DT:${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TUI_DATE_SEPARATOR${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_DT:${"\uFFFD#13\uFFFD"}:START_TAG_DD_1:single-character date's separator (dot, slash etc.).${"[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_DD:`;
}
I18N_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_4);
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4839071173512899768$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__7 = goog.getMsg("DI-tokens for input-configurations:");
    I18N_6 = MSG_EXTERNAL_4839071173512899768$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟1e189ebe2d938d6aaa6a9a2f9adeff1e3b372aac␟4839071173512899768:DI-tokens for input-configurations:`;
}
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8174380454533362440$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__9 = goog.getMsg("{$startTagDt}{$startTagCode}TUI_DATE_VALUE_TRANSFORMER{$closeTagCode}{$closeTagDt}{$startTagDd} custom format of control output ( {$startLink} TuiDay {$closeLink} is default). {$startParagraph}{$startLink_1} See example {$closeLink} with built-in {$startLink_2} Date {$closeLink} object as control's output. {$closeParagraph}{$closeTagDd}", { "startTagDt": "\uFFFD#22\uFFFD", "startTagCode": "\uFFFD#23\uFFFD", "closeTagCode": "\uFFFD/#23\uFFFD", "closeTagDt": "\uFFFD/#22\uFFFD", "startTagDd": "\uFFFD#24\uFFFD", "startLink": "\uFFFD#25\uFFFD", "closeLink": "[\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD]", "startParagraph": "\uFFFD#26\uFFFD", "startLink_1": "\uFFFD#27\uFFFD", "startLink_2": "\uFFFD#28\uFFFD", "closeParagraph": "\uFFFD/#26\uFFFD", "closeTagDd": "\uFFFD/#24\uFFFD" });
    I18N_8 = MSG_EXTERNAL_8174380454533362440$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟c3dbb47cc33bb0541b868b672596570b063d5377␟8174380454533362440:${"\uFFFD#22\uFFFD"}:START_TAG_DT:${"\uFFFD#23\uFFFD"}:START_TAG_CODE:TUI_DATE_VALUE_TRANSFORMER${"\uFFFD/#23\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#22\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#24\uFFFD"}:START_TAG_DD: custom format of control output ( ${"\uFFFD#25\uFFFD"}:START_LINK: TuiDay ${"[\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD]"}:CLOSE_LINK: is default). ${"\uFFFD#26\uFFFD"}:START_PARAGRAPH:${"\uFFFD#27\uFFFD"}:START_LINK_1: See example ${"[\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD]"}:CLOSE_LINK: with built-in ${"\uFFFD#28\uFFFD"}:START_LINK_2: Date ${"[\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD]"}:CLOSE_LINK: object as control's output. ${"\uFFFD/#26\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD/#24\uFFFD"}:CLOSE_TAG_DD:`;
}
I18N_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_8);
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__11 = goog.getMsg("Basic");
    I18N_10 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c12 = ["heading", I18N_10];
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5960739619447908905$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__14 = goog.getMsg("sizes");
    I18N_13 = MSG_EXTERNAL_5960739619447908905$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
}
const _c15 = ["heading", I18N_13];
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6714747026286972804$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__17 = goog.getMsg("With named dates");
    I18N_16 = MSG_EXTERNAL_6714747026286972804$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__17;
}
else {
    I18N_16 = $localize `:␟eb73759f9121c31958ef3331f1a481a509877cb5␟6714747026286972804:With named dates`;
}
const _c18 = ["heading", I18N_16];
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6669974721565177418$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__20 = goog.getMsg("Date localization");
    I18N_19 = MSG_EXTERNAL_6669974721565177418$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__20;
}
else {
    I18N_19 = $localize `:␟d72cd49783dcc040c08cd98ae2904eab57a0bb2e␟6669974721565177418:Date localization`;
}
const _c21 = ["heading", I18N_19];
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4905475235330782118$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__23 = goog.getMsg("With native Date output");
    I18N_22 = MSG_EXTERNAL_4905475235330782118$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__23;
}
else {
    I18N_22 = $localize `:␟8b48bfc50979dda56f42928887986fe0052cbc99␟4905475235330782118:With native Date output`;
}
const _c24 = ["heading", I18N_22];
function ExampleTuiInputDateComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](30, _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "tui-input-date-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tui-doc-example", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](33, _c15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "tui-input-date-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tui-doc-example", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](36, _c18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "tui-input-date-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tui-doc-example", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](39, _c21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "tui-input-date-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tui-doc-example", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](42, _c24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "tui-input-date-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
} }
function ExampleTuiInputDateComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input-date", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Choose a date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.control)("focusable", ctx_r3.focusable)("min", ctx_r3.min)("max", ctx_r3.max)("markerHandler", ctx_r3.markerHandler)("pseudoFocused", ctx_r3.pseudoFocused)("pseudoHovered", ctx_r3.pseudoHovered)("pseudoInvalid", ctx_r3.pseudoInvalid)("readOnly", ctx_r3.readOnly)("disabledItemHandler", ctx_r3.disabledItemHandler)("items", ctx_r3.items)("tuiTextfieldAutocomplete", ctx_r3.autocomplete)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldExampleText", ctx_r3.exampleText)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintMode", ctx_r3.hintMode);
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___26 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_25 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___26;
}
else {
    I18N_25 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputDateComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8655647082077231883$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___28 = goog.getMsg("{$startTagDiv}A handler that gets a date and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", { "startTagDiv": "\uFFFD#1\uFFFD", "closeTagDiv": "\uFFFD/#1\uFFFD", "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD" });
    I18N_27 = MSG_EXTERNAL_8655647082077231883$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___28;
}
else {
    I18N_27 = $localize `:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
}
function ExampleTuiInputDateComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_29;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6619372356871511006$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___30 = goog.getMsg(" A list of preset dates for dropdown ");
    I18N_29 = MSG_EXTERNAL_6619372356871511006$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___30;
}
else {
    I18N_29 = $localize `:␟537796d614601f54059199b6f42a55fd283fa400␟6619372356871511006: A list of preset dates for dropdown `;
}
function ExampleTuiInputDateComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_29);
} }
var I18N_31;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7126872511108805662$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___32 = goog.getMsg(" A handler that gets date and returns null or a tuple with circled marker colors ");
    I18N_31 = MSG_EXTERNAL_7126872511108805662$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___32;
}
else {
    I18N_31 = $localize `:␟23c9859665a49041525158245d62b03eb6e0bb77␟7126872511108805662: A handler that gets date and returns null or a tuple with circled marker colors `;
}
function ExampleTuiInputDateComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_31);
} }
var I18N_33;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_228579238578588280$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___34 = goog.getMsg(" Minimum date ");
    I18N_33 = MSG_EXTERNAL_228579238578588280$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___34;
}
else {
    I18N_33 = $localize `:␟4154b59e6a74ee1968fd07ad38c2a5b5329c1a78␟228579238578588280: Minimum date `;
}
function ExampleTuiInputDateComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_33);
} }
var I18N_35;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2371503113949525542$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___36 = goog.getMsg(" Maximum date ");
    I18N_35 = MSG_EXTERNAL_2371503113949525542$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___36;
}
else {
    I18N_35 = $localize `:␟ce93c802f63dbda020cc57d47ed04f9f56fed31f␟2371503113949525542: Maximum date `;
}
function ExampleTuiInputDateComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_35);
} }
function ExampleTuiInputDateComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputDateComponent_ng_template_2_ng_template_1_Template, 2, 19, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputDateComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiInputDateComponent_ng_template_2_ng_template_4_Template, 3, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.disabledItemHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiInputDateComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.items = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiInputDateComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.markerHandler = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiInputDateComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.min = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiInputDateComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputDateComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "inherited-documentation", 20);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.itemsVariants)("documentationPropertyValue", ctx_r1.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.markerHandlerVariants)("documentationPropertyValue", ctx_r1.markerHandler);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropdown", true);
} }
var I18N_37;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7181776168306782987$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__38 = goog.getMsg(" Mobile calendar does not use the same dropdown with calendar as desktop uses. It uses digital keyboard. If you want to open {$startLink} mobile calendar {$closeLink} , add imports of {$startTagCode}TuiMobileCalendarDialogModule{$closeTagCode} and {$startTagCode}TuiDialogModule{$closeTagCode} into your root module. Also, check that you did not forget about {$startLink_1} tui-root {$closeLink}", { "startLink": "\uFFFD#2\uFFFD", "closeLink": "[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD]", "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]", "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]", "startLink_1": "\uFFFD#5\uFFFD" });
    I18N_37 = MSG_EXTERNAL_7181776168306782987$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__38;
}
else {
    I18N_37 = $localize `:␟5616c14157b3a5879b9da1e6c8a1e9fb827ff4d9␟7181776168306782987: Mobile calendar does not use the same dropdown with calendar as desktop uses. It uses digital keyboard. If you want to open ${"\uFFFD#2\uFFFD"}:START_LINK: mobile calendar ${"[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_LINK: , add imports of ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:TuiDialogModule${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: into your root module. Also, check that you did not forget about ${"\uFFFD#5\uFFFD"}:START_LINK_1: tui-root ${"[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_LINK:`;
}
I18N_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_37);
var I18N_39;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6680887665039790545$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__40 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiInputDateModule{$closeTagCode} in the same module where you want to use our component: ", { "startTagCode": "\uFFFD#10\uFFFD", "closeTagCode": "\uFFFD/#10\uFFFD" });
    I18N_39 = MSG_EXTERNAL_6680887665039790545$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__40;
}
else {
    I18N_39 = $localize `:␟592c56416c0d2ae15744eba65a71a0c074426731␟6680887665039790545: Import an Angular module for forms and ${"\uFFFD#10\uFFFD"}:START_TAG_CODE:TuiInputDateModule${"\uFFFD/#10\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
}
var I18N_41;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__42 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", { "startTagCode": "[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]", "closeTagCode": "[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]" });
    I18N_41 = MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__42;
}
else {
    I18N_41 = $localize `:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
}
I18N_41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_41);
function ExampleTuiInputDateComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](9, I18N_39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-doc-code", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](14, I18N_41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "tui-doc-code", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "TuiInputDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " in template: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "tui-doc-code", 27);
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
class ExampleTuiInputDateComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_6__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this.exampleForm = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-declare-form-md */ "!!raw-loader!-examples-import-declare-form-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/declare-form.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/import/declare-form.md"));
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/3/index.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/4/index.html")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/5/index.html")),
            'native-date-transformer.directive.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-5-native-date-transformer-directive-ts */ "!!raw-loader!-examples-5-native-date-transformer-directive-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/native-date-transformer.directive.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input-date/examples/5/native-date-transformer.directive.ts")),
        };
        this.minVariants = [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_FIRST_DAY"], new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2017, 2, 5), new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](1900, 0, 1)];
        this.min = this.minVariants[0];
        this.maxVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_LAST_DAY"],
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2017, 11, 11),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2020, 2, 5),
            new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2300, 0, 1),
        ];
        this.max = this.maxVariants[0];
        this.disabledItemHandlerVariants = [
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["ALWAYS_FALSE_HANDLER"],
            ({ day }) => day % 3 === 0,
        ];
        this.disabledItemHandler = this.disabledItemHandlerVariants[0];
        this.itemsVariants = [
            [],
            [new _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_5__["TuiNamedDay"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_LAST_DAY"].append({ year: -1 }), `Until today`)],
        ];
        this.markerHandlerVariants = [
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TUI_DEFAULT_MARKER_HANDLER"],
            (day) => (day.day % 2 === 0 ? TWO_DOTS : ONE_DOT),
        ];
        this.markerHandler = this.markerHandlerVariants[0];
        this.items = this.itemsVariants[0];
        this.autocompleteVariants = [`off`, `bday`];
        this.autocomplete = ``;
        this.cleaner = false;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
}
ExampleTuiInputDateComponent.ɵfac = function ExampleTuiInputDateComponent_Factory(t) { return ɵExampleTuiInputDateComponent_BaseFactory(t || ExampleTuiInputDateComponent); };
ExampleTuiInputDateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiInputDateComponent, selectors: [["example-tui-input-date"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_7__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputDateComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 0, consts: [["header", "InputDate", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-9"], [1, "tui-space_bottom-5"], ["tuiLink", "", "routerLink", ".", "fragment", "date-localization"], ["tuiLink", "", "target", "_blank", "href", "https://github.com/Tinkoff/taiga-ui/blob/main/projects/cdk/date-time/day.ts"], ["tuiLink", "", "routerLink", ".", "fragment", "native-date-output"], ["tuiLink", "", "target", "_blank", "href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"], ["id", "base", 3, "content", 6, "heading"], ["id", "sizes", 3, "content", 6, "heading"], ["id", "named", 3, "content", 6, "heading"], ["id", "date-localization", 3, "content", 6, "heading"], ["id", "native-date-output", 3, "content", 6, "heading"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<TuiDay>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "items", "documentationPropertyMode", "input", "documentationPropertyType", "TuiNamedDay[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "markerHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMarkerHandler", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "dropdown"], [3, "formControl", "focusable", "min", "max", "markerHandler", "pseudoFocused", "pseudoHovered", "pseudoInvalid", "readOnly", "disabledItemHandler", "items", "tuiTextfieldAutocomplete", "tuiTextfieldCleaner", "tuiTextfieldExampleText", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "tuiHintContent", "tuiHintDirection", "tuiHintMode"], ["tuiLink", "", "routerLink", "/components/mobile-calendar"], ["tuiLink", "", "routerLink", "/getting-started"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiInputDateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputDateComponent_ng_template_1_Template, 44, 5, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputDateComponent_ng_template_2_Template, 10, 13, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputDateComponent_ng_template_3_Template, 24, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_9__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_10__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_13__["TuiInputDateExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_14__["TuiInputDateExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_15__["TuiInputDateExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_16__["TuiInputDateExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_17__["TuiInputDateExample5"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_18__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_19__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_20__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_21__["InheritedDocumentationComponent"], _kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_22__["TuiInputDateComponent"], _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_23__["TuiInputDateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_24__["TuiTextfieldAutocompleteDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_25__["TuiTextfieldCleanerDirective"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_26__["TuiTextfieldExampleTextDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_27__["TuiTextfieldLabelOutsideDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_28__["TuiTextfieldSizeDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_29__["TuiHintControllerDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_30__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
const ɵExampleTuiInputDateComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiInputDateComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiInputDateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-input-date`,
                templateUrl: `./input-date.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_7__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputDateComponent),
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input-date/input-date.module.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/input-date/input-date.module.ts ***!
  \****************************************************************/
/*! exports provided: ExampleTuiInputDateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputDateModule", function() { return ExampleTuiInputDateModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-mobile */ "../addon-mobile/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/input-date/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/input-date/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/input-date/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/input-date/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/components/input-date/examples/5/index.ts");
/* harmony import */ var _examples_5_native_date_transformer_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/5/native-date-transformer.directive */ "./src/modules/components/input-date/examples/5/native-date-transformer.directive.ts");
/* harmony import */ var _input_date_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./input-date.component */ "./src/modules/components/input-date/input-date.component.ts");


















class ExampleTuiInputDateModule {
}
ExampleTuiInputDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiInputDateModule });
ExampleTuiInputDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiInputDateModule_Factory(t) { return new (t || ExampleTuiInputDateModule)(); }, imports: [[
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioListModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputDateModule"],
            _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__["TuiMobileCalendarDialogModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiUnfinishedValidatorModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiErrorModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_date_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiInputDateComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiInputDateModule, { declarations: [_input_date_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiInputDateComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiInputDateExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiInputDateExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_11__["TuiInputDateExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_12__["TuiInputDateExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_13__["TuiInputDateExample5"],
        _examples_5_native_date_transformer_directive__WEBPACK_IMPORTED_MODULE_14__["ExampleNativeDateTransformerDirective"]], imports: [_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioListModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputDateModule"],
        _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__["TuiMobileCalendarDialogModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiUnfinishedValidatorModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiErrorModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_input_date_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiInputDateComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiInputDateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_8__["InheritedDocumentationModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLinkModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioListModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputDateModule"],
                    _taiga_ui_addon_mobile__WEBPACK_IMPORTED_MODULE_5__["TuiMobileCalendarDialogModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiUnfinishedValidatorModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiErrorModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_input_date_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiInputDateComponent"])),
                ],
                declarations: [
                    _input_date_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiInputDateComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiInputDateExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiInputDateExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_11__["TuiInputDateExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_12__["TuiInputDateExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_13__["TuiInputDateExample5"],
                    _examples_5_native_date_transformer_directive__WEBPACK_IMPORTED_MODULE_14__["ExampleNativeDateTransformerDirective"],
                ],
                exports: [_input_date_component__WEBPACK_IMPORTED_MODULE_15__["ExampleTuiInputDateComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-input-date-input-date-module.js.map