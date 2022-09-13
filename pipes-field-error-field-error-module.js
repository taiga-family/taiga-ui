(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pipes-field-error-field-error-module"],{

/***/ "./src/modules/pipes/field-error/examples/1/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/pipes/field-error/examples/1/index.ts ***!
  \***********************************************************/
/*! exports provided: passwordValidator, superComputerValidator, TuiFieldErrorPipeExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordValidator", function() { return passwordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superComputerValidator", function() { return superComputerValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFieldErrorPipeExample1", function() { return TuiFieldErrorPipeExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/label/label.component */ "../core/components/label/label.component.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/error/error.component */ "../core/components/error/error.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../kit/pipes/field-error/field-error-pipe */ "../kit/pipes/field-error/field-error-pipe.ts");














var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3772154377692784553$$SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_1_INDEX_TS_1 = goog.getMsg("Type the ultimate answer");
    I18N_0 = MSG_EXTERNAL_3772154377692784553$$SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_1_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟c2f188eeca60463782738d8247914bf170df5098␟3772154377692784553:Type the ultimate answer`;
}
const _c2 = ["label", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8591875090862306452$$SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_1_INDEX_TS_4 = goog.getMsg("Set a password");
    I18N_3 = MSG_EXTERNAL_8591875090862306452$$SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_1_INDEX_TS_4;
}
else {
    I18N_3 = $localize `:␟4de3cc8dba3c7b052f74a1db4752f51bda859e9c␟8591875090862306452:Set a password`;
}
const _c5 = ["label", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5532503478235461752$$SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_1_INDEX_TS_7 = goog.getMsg(" If you need to show validation message as early as a user started to type something, subscribe on form value changes and call markAsTouched on control on first value change ");
    I18N_6 = MSG_EXTERNAL_5532503478235461752$$SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_1_INDEX_TS_7;
}
else {
    I18N_6 = $localize `:␟55293e53f2eaf13c5a165765c4319f4527d577a4␟5532503478235461752: If you need to show validation message as early as a user started to type something, subscribe on form value changes and call markAsTouched on control on first value change `;
}
const _c8 = function () { return []; };
const latinChars = /^[a-zA-Z]+$/;
function passwordValidator(field) {
    return field.value && latinChars.test(field.value)
        ? null
        : {
            other: `Only latin letters are allowed`,
        };
}
function superComputerValidator(field) {
    return field.value === `42`
        ? null
        : {
            other: `Wrong`,
        };
}
class TuiFieldErrorPipeExample1 {
    constructor() {
        this.testValue1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, passwordValidator]);
        this.testValue3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, passwordValidator]);
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: this.testValue1,
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, superComputerValidator]),
        });
        this.testValue1.valueChanges.subscribe(() => {
            this.testValue1.markAsTouched();
        });
    }
}
TuiFieldErrorPipeExample1.ɵfac = function TuiFieldErrorPipeExample1_Factory(t) { return new (t || TuiFieldErrorPipeExample1)(); };
TuiFieldErrorPipeExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFieldErrorPipeExample1, selectors: [["tui-field-error-pipe-example-1"]], decls: 17, vars: 15, consts: [[1, "b-form", 3, "formGroup"], ["tuiLabel", "", 1, "tui-space_bottom-4", 6, "label"], ["formControlName", "testValue2", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"], ["formControlName", "testValue2", 3, "error"], ["tuiLabel", "", 6, "label"], ["formControlName", "testValue1", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"], ["formControlName", "testValue1", 3, "error"]], template: function TuiFieldErrorPipeExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](2, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " to the Question of Life, the Universe, and Everything ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Latin letters only ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](16, I18N_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c8))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c8))));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_4__["TuiLabelComponent"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldLabelOutsideDirective"], _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_9__["TuiErrorComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_11__["TuiFieldErrorPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFieldErrorPipeExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-field-error-pipe-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/modules/pipes/field-error/examples/2/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/pipes/field-error/examples/2/index.ts ***!
  \***********************************************************/
/*! exports provided: maxLengthValidator, minLengthValidator, TuiFieldErrorPipeExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLengthValidator", function() { return maxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minLengthValidator", function() { return minLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFieldErrorPipeExample2", function() { return TuiFieldErrorPipeExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/label/label.component */ "../core/components/label/label.component.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../core/components/error/error.component */ "../core/components/error/error.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../kit/components/input-count/input-count.component */ "../kit/components/input-count/input-count.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../kit/components/input-count/input-count.directive */ "../kit/components/input-count/input-count.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../kit/pipes/field-error/field-error-pipe */ "../kit/pipes/field-error/field-error-pipe.ts");



















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3646762244302681891$$SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_2_INDEX_TS_1 = goog.getMsg(" Required ");
    I18N_0 = MSG_EXTERNAL_3646762244302681891$$SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_2_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟87a9e0f6ceb1444cab6185424f933a376357a91c␟3646762244302681891: Required `;
}
const _c2 = function () { return []; };
function maxLengthValidator(context) {
    return `Maximum length — ${context.requiredLength}`;
}
function minLengthValidator(context) {
    return `Minimum length — ${context.requiredLength}`;
}
class TuiFieldErrorPipeExample2 {
    constructor() {
        this.testValue1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4),
        ]);
        this.testValue2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.testValue3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](2, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(3)]);
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: this.testValue1,
            testValue2: this.testValue2,
            testValue3: this.testValue3,
        });
        this.testValue1.valueChanges.subscribe(() => {
            this.testValue1.markAsTouched();
        });
    }
}
TuiFieldErrorPipeExample2.ɵfac = function TuiFieldErrorPipeExample2_Factory(t) { return new (t || TuiFieldErrorPipeExample2)(); };
TuiFieldErrorPipeExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFieldErrorPipeExample2, selectors: [["tui-field-error-pipe-example-2"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TUI_VALIDATION_ERRORS"],
                useValue: {
                    required: `Enter this!`,
                    email: `Enter a valid email`,
                    maxlength: maxLengthValidator,
                    minlength: minLengthValidator,
                    min: Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["scan"])(acc => !acc, false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(val => (val ? `Fix please` : `Min number 3`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(`Min number 3`)),
                },
            },
        ])], decls: 19, vars: 20, consts: [[1, "b-form", 3, "formGroup"], ["tuiLabel", "", "label", "Enter an email", 1, "tui-space_bottom-4"], ["formControlName", "testValue2", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"], ["formControlName", "testValue2", 3, "error"], ["tuiLabel", "", "label", "Minimum and maximum length", 1, "tui-space_bottom-4"], ["formControlName", "testValue1", "tuiTextfieldSize", "m"], ["formControlName", "testValue1", 3, "error"], ["tuiLabel", "", "label", "Minimum number"], ["formControlName", "testValue3", "tuiTextfieldSize", "m"], ["formControlName", "testValue3", 3, "error"]], template: function TuiFieldErrorPipeExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " 4 letters word... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-input-count", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2))));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_7__["TuiLabelComponent"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_8__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_9__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_10__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_11__["TuiTextfieldLabelOutsideDirective"], _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_12__["TuiErrorComponent"], _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_13__["TuiInputCountComponent"], _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_14__["TuiInputCountDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"], _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_16__["TuiFieldErrorPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFieldErrorPipeExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-field-error-pipe-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
                providers: [
                    {
                        provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TUI_VALIDATION_ERRORS"],
                        useValue: {
                            required: `Enter this!`,
                            email: `Enter a valid email`,
                            maxlength: maxLengthValidator,
                            minlength: minLengthValidator,
                            min: Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["interval"])(2000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["scan"])(acc => !acc, false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(val => (val ? `Fix please` : `Min number 3`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(`Min number 3`)),
                        },
                    },
                ],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/modules/pipes/field-error/examples/3/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/pipes/field-error/examples/3/index.ts ***!
  \***********************************************************/
/*! exports provided: innValidator, TuiFieldErrorPipeExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innValidator", function() { return innValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFieldErrorPipeExample3", function() { return TuiFieldErrorPipeExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/label/label.component */ "../core/components/label/label.component.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/components/error/error.component */ "../core/components/error/error.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../kit/pipes/field-error/field-error-pipe */ "../kit/pipes/field-error/field-error-pipe.ts");
















const _c0 = ["errorContent"];
const _c1 = ["bigErrorContent"];
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2295031025708706060$$SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_3_INDEX_TS_3 = goog.getMsg("Enter company name");
    I18N_2 = MSG_EXTERNAL_2295031025708706060$$SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_3_INDEX_TS_3;
}
else {
    I18N_2 = $localize `:␟7d66ae66a6f955b1eb6f5c00aac4d4e2584cdeed␟2295031025708706060:Enter company name`;
}
const _c4 = ["label", I18N_2];
function TuiFieldErrorPipeExample3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Secret number must contain ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "10 or 12 digits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " . ");
} }
function TuiFieldErrorPipeExample3_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " This company is already registered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " It is mine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c5 = function () { return ["required", "inn"]; };
const _c6 = function () { return []; };
const secretRegexTen = /^\d{10}$/;
const secretRegexTwelve = /^\d{12}$/;
function innValidator(field) {
    return field.value &&
        (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))
        ? null
        : {
            inn: new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiValidationError"](`Secret number contains 10 or 12 digits`),
        };
}
class TuiFieldErrorPipeExample3 {
    constructor() {
        this.errorContent = ``;
        this.bigErrorContent = ``;
        this.testValue2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``);
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.getSecretValidator()]),
            testValue2: this.testValue2,
        });
        this.companyValidator = (field) => field.value
            ? {
                inn: new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiValidationError"](this.bigErrorContent),
            }
            : null;
    }
    ngOnInit() {
        this.testValue2.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.companyValidator]);
    }
    getSecretValidator() {
        return (field) => field.value &&
            (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))
            ? null
            : {
                secret: new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiValidationError"](this.errorContent),
            };
    }
}
TuiFieldErrorPipeExample3.ɵfac = function TuiFieldErrorPipeExample3_Factory(t) { return new (t || TuiFieldErrorPipeExample3)(); };
TuiFieldErrorPipeExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFieldErrorPipeExample3, selectors: [["tui-field-error-pipe-example-3"]], viewQuery: function TuiFieldErrorPipeExample3_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.errorContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bigErrorContent = _t.first);
    } }, decls: 16, vars: 15, consts: [[1, "b-form", 3, "formGroup"], ["tuiLabel", "", "label", "Secret number"], ["formControlName", "testValue1", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"], ["errorContent", ""], ["formControlName", "testValue1", 3, "error"], ["tuiLabel", "", 1, "tui-space_top-4", 6, "label"], ["formControlName", "testValue2", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"], ["bigErrorContent", ""], ["formControlName", "testValue2", 3, "error"], ["tuiButton", "", "type", "button", 1, "tui-space_top-2"]], template: function TuiFieldErrorPipeExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiFieldErrorPipeExample3_ng_template_3_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TuiFieldErrorPipeExample3_ng_template_11_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c6))));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_5__["TuiLabelComponent"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_9__["TuiTextfieldLabelOutsideDirective"], _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_10__["TuiErrorComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_11__["TuiButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"], _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_13__["TuiFieldErrorPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFieldErrorPipeExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-field-error-pipe-example-3`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, { errorContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [`errorContent`]
        }], bigErrorContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [`bigErrorContent`]
        }] }); })();


/***/ }),

/***/ "./src/modules/pipes/field-error/examples/4/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/pipes/field-error/examples/4/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiFieldErrorPipeExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFieldErrorPipeExample4", function() { return TuiFieldErrorPipeExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/error/error.component */ "../core/components/error/error.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/components/label/label.component */ "../core/components/label/label.component.ts");
/* harmony import */ var _kit_components_input_phone_input_phone_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/input-phone/input-phone.component */ "../kit/components/input-phone/input-phone.component.ts");
/* harmony import */ var _kit_components_input_phone_input_phone_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/input-phone/input-phone.directive */ "../kit/components/input-phone/input-phone.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-autocomplete.directive */ "../core/directives/textfield-controller/textfield-autocomplete.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../kit/pipes/field-error/field-error-pipe */ "../kit/pipes/field-error/field-error-pipe.ts");

















const _c0 = ["phoneErrorContent"];
function TuiFieldErrorPipeExample4_label_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Invalid phone number length");
} }
const _c1 = function () { return []; };
function TuiFieldErrorPipeExample4_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-input-phone", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiFieldErrorPipeExample4_label_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removePhone(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiFieldErrorPipeExample4_label_1_ng_template_4_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "tuiFieldError");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("label", "Phone number ", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1))));
} }
class TuiFieldErrorPipeExample4 {
    constructor() {
        this.phoneErrorContent = ``;
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            phones: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.getPhoneLengthValidator()])], [this.getPhoneArrayValidator()]),
        });
    }
    get formData() {
        return this.testForm.get(`phones`);
    }
    addPhone() {
        this.formData.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, this.addValidators()));
    }
    removePhone(index) {
        this.formData.removeAt(index);
        let n = 0;
        while (n <= 1 && this.formData.controls[n]) {
            this.formData.controls[n].setValidators([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                this.getPhoneLengthValidator(),
            ]);
            n++;
        }
    }
    addValidators() {
        return this.formData.controls.length < 2
            ? [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.getPhoneLengthValidator()]
            : null;
    }
    getPhoneLengthValidator() {
        return (field) => field.value.length !== 12
            ? {
                length: new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiValidationError"](this.phoneErrorContent),
            }
            : null;
    }
    getPhoneArrayValidator() {
        return ((array) => array.controls.length < 2 ||
            (!!array.controls.filter(item => item.errors).length && array.controls.length)
            ? {
                length: new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiValidationError"](`You should add at least 2 phone number`),
            }
            : null);
    }
}
TuiFieldErrorPipeExample4.ɵfac = function TuiFieldErrorPipeExample4_Factory(t) { return new (t || TuiFieldErrorPipeExample4)(); };
TuiFieldErrorPipeExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFieldErrorPipeExample4, selectors: [["tui-field-error-pipe-example-4"]], viewQuery: function TuiFieldErrorPipeExample4_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.phoneErrorContent = _t.first);
    } }, decls: 7, vars: 8, consts: [[3, "formGroup"], ["tuiLabel", "", "formArrayName", "phones", "class", "tui-space_bottom-4", 3, "label", 4, "ngFor", "ngForOf"], ["formArrayName", "phones", 1, "form-array-error", 3, "error"], ["tuiButton", "", "type", "button", "size", "s", 1, "tui-space_top-4", 3, "click"], ["tuiLabel", "", "formArrayName", "phones", 1, "tui-space_bottom-4", 3, "label"], [1, "row"], ["tuiTextfieldAutocomplete", "off", "tuiTextfieldSize", "m", 1, "input", 3, "formControlName", "tuiTextfieldLabelOutside"], ["tuiIconButton", "", "type", "button", "size", "m", "title", "Delete phone number", "appearance", "icon", "icon", "tuiIconTrash", 1, "tui-space_left-2", "icon", 3, "click"], ["phoneErrorContent", ""], [3, "formControlName", "error"]], template: function TuiFieldErrorPipeExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiFieldErrorPipeExample4_label_1_Template, 9, 10, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiFieldErrorPipeExample4_Template_button_click_5_listener() { return ctx.addPhone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add a phone number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formData.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1))));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_6__["TuiErrorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["TuiButtonComponent"], _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_8__["TuiLabelComponent"], _kit_components_input_phone_input_phone_component__WEBPACK_IMPORTED_MODULE_9__["TuiInputPhoneComponent"], _kit_components_input_phone_input_phone_directive__WEBPACK_IMPORTED_MODULE_10__["TuiInputPhoneDirective"], _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_11__["TuiTextfieldAutocompleteDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_12__["TuiTextfieldSizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_13__["TuiTextfieldLabelOutsideDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_14__["TuiFieldErrorPipe"]], styles: [".input[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.form-array-error[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvcGlwZXMvZmllbGQtZXJyb3IvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9waXBlcy9maWVsZC1lcnJvci9leGFtcGxlcy80L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0E7RUFDSSxtQkFBQTtBQ0RKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvcGlwZXMvZmllbGQtZXJyb3IvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcbiAgICB3aWR0aDogMjByZW07XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm0tYXJyYXktZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4iLCIuaW5wdXQge1xuICB3aWR0aDogMjByZW07XG59XG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb3JtLWFycmF5LWVycm9yIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFieldErrorPipeExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-field-error-pipe-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, { phoneErrorContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [`phoneErrorContent`]
        }] }); })();


/***/ }),

/***/ "./src/modules/pipes/field-error/examples/5/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/pipes/field-error/examples/5/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiFieldErrorPipeExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFieldErrorPipeExample5", function() { return TuiFieldErrorPipeExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/error/error.component */ "../core/components/error/error.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../kit/pipes/field-error/field-error-pipe */ "../kit/pipes/field-error/field-error-pipe.ts");














const _c0 = function () { return []; };
const latinChars = /^[a-zA-Z]+$/;
function asyncValidatorFn(isCypress) {
    return (field) => {
        return field.value && latinChars.test(field.value)
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({
                error: new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiValidationError"](`Only latin letters allowed`),
            }).pipe(isCypress ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["delay"])(0) : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["delay"])(5000));
    };
}
class TuiFieldErrorPipeExample5 {
    constructor(fb, isCypress) {
        this.fb = fb;
        this.form = this.fb.group({
            text: [`русский текст`, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.form.controls[`text`].setAsyncValidators(asyncValidatorFn(isCypress));
        this.form.controls[`text`].markAsTouched();
    }
}
TuiFieldErrorPipeExample5.ɵfac = function TuiFieldErrorPipeExample5_Factory(t) { return new (t || TuiFieldErrorPipeExample5)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_IS_CYPRESS"])); };
TuiFieldErrorPipeExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFieldErrorPipeExample5, selectors: [["tui-field-error-pipe-example-5"]], decls: 7, vars: 7, consts: [[3, "formGroup"], [1, "tui-form__row"], ["formControlName", "text", 1, "input"], ["formControlName", "text", 3, "error"]], template: function TuiFieldErrorPipeExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Enter some text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_8__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_9__["TuiErrorComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_11__["TuiFieldErrorPipe"]], styles: [".input[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.form-array-error[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvcGlwZXMvZmllbGQtZXJyb3IvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9waXBlcy9maWVsZC1lcnJvci9leGFtcGxlcy81L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0E7RUFDSSxtQkFBQTtBQ0RKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvcGlwZXMvZmllbGQtZXJyb3IvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcbiAgICB3aWR0aDogMjByZW07XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm0tYXJyYXktZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4iLCIuaW5wdXQge1xuICB3aWR0aDogMjByZW07XG59XG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb3JtLWFycmF5LWVycm9yIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFieldErrorPipeExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-field-error-pipe-example-5`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_IS_CYPRESS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/pipes/field-error/examples/6/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/pipes/field-error/examples/6/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiFieldErrorContentPipeExample6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFieldErrorContentPipeExample6", function() { return TuiFieldErrorContentPipeExample6; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony import */ var _addon_table_components_table_th_group_th_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/th-group/th-group.component */ "../addon-table/components/table/th-group/th-group.component.ts");
/* harmony import */ var _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/th/th.component */ "../addon-table/components/table/th/th.component.ts");
/* harmony import */ var _addon_table_components_table_tbody_tbody_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/tbody/tbody.component */ "../addon-table/components/table/tbody/tbody.component.ts");
/* harmony import */ var _addon_table_components_table_directives_row_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/row.directive */ "../addon-table/components/table/directives/row.directive.ts");
/* harmony import */ var _addon_table_components_table_tr_tr_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/tr/tr.component */ "../addon-table/components/table/tr/tr.component.ts");
/* harmony import */ var _addon_table_components_table_directives_cell_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/cell.directive */ "../addon-table/components/table/directives/cell.directive.ts");
/* harmony import */ var _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/td/td.component */ "../addon-table/components/table/td/td.component.ts");
/* harmony import */ var _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.component */ "../kit/components/input-number/input-number.component.ts");
/* harmony import */ var _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.directive */ "../kit/components/input-number/input-number.directive.ts");
/* harmony import */ var _core_directives_hint_hint_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../core/directives/hint/hint.directive */ "../core/directives/hint/hint.directive.ts");
/* harmony import */ var _addon_commerce_pipes_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../addon-commerce/pipes/currency/currency.pipe */ "../addon-commerce/pipes/currency/currency.pipe.ts");
/* harmony import */ var _kit_pipes_field_error_field_error_content_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../kit/pipes/field-error/field-error-content-pipe */ "../kit/pipes/field-error/field-error-content-pipe.ts");




















function TuiFieldErrorContentPipeExample6_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
} }
const _c0 = function () { return []; };
function TuiFieldErrorContentPipeExample6_tr_8_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input-number", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "tuiCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "tuiFieldErrorContent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postfix", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "UGX"))("formControl", ctx_r4.controls[i_r2])("tuiHint", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0)));
} }
function TuiFieldErrorContentPipeExample6_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiFieldErrorContentPipeExample6_tr_8_td_1_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiFieldErrorContentPipeExample6_tr_8_td_2_Template, 5, 8, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiCell", "price");
} }
class TuiFieldErrorContentPipeExample6 {
    constructor() {
        this.data = [{ name: `Latte` }, { name: `Cappuccino` }];
        this.latteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(6)]);
        this.cappuccinoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(5)]);
        this.controls = [this.latteControl, this.cappuccinoControl];
        this.columns = [`name`, `price`];
    }
}
TuiFieldErrorContentPipeExample6.ɵfac = function TuiFieldErrorContentPipeExample6_Factory(t) { return new (t || TuiFieldErrorContentPipeExample6)(); };
TuiFieldErrorContentPipeExample6.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFieldErrorContentPipeExample6, selectors: [["tui-field-error-content-pipe-example-6"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TUI_VALIDATION_ERRORS"],
                useValue: {
                    required: `Enter this!`,
                    max: (context) => `Too expensive, max ${context.max}`,
                },
            },
        ])], decls: 9, vars: 4, consts: [["tuiTable", "", 1, "table", 3, "columns"], ["tuiThGroup", ""], ["tuiTh", "", 3, "resizable"], ["tuiTh", ""], ["tuiTbody", "", 3, "data"], ["tuiTr", "", 4, "tuiRow", "tuiRowOf"], ["tuiTr", ""], ["tuiTd", "", 4, "tuiCell"], ["tuiTd", ""], ["tuiHintDirection", "right", 3, "postfix", "formControl", "tuiHint"]], template: function TuiFieldErrorContentPipeExample6_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TuiFieldErrorContentPipeExample6_tr_8_Template, 3, 2, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizable", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiRowOf", ctx.data);
    } }, directives: [_addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_5__["TuiTableDirective"], _addon_table_components_table_th_group_th_group_component__WEBPACK_IMPORTED_MODULE_6__["TuiThGroupComponent"], _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_7__["TuiThComponent"], _addon_table_components_table_tbody_tbody_component__WEBPACK_IMPORTED_MODULE_8__["TuiTbodyComponent"], _addon_table_components_table_directives_row_directive__WEBPACK_IMPORTED_MODULE_9__["TuiRowDirective"], _addon_table_components_table_tr_tr_component__WEBPACK_IMPORTED_MODULE_10__["TuiTrComponent"], _addon_table_components_table_directives_cell_directive__WEBPACK_IMPORTED_MODULE_11__["TuiCellDirective"], _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_12__["TuiTdComponent"], _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_13__["TuiInputNumberComponent"], _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_14__["TuiInputNumberDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_hint_hint_directive__WEBPACK_IMPORTED_MODULE_15__["TuiHintDirective"]], pipes: [_addon_commerce_pipes_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_16__["TuiCurrencyPipe"], _kit_pipes_field_error_field_error_content_pipe__WEBPACK_IMPORTED_MODULE_17__["TuiFieldErrorContentPipe"]], styles: [".table[_ngcontent-%COMP%] {\n  width: 100%;\n  table-layout: fixed;\n}\n.error[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvcGlwZXMvZmllbGQtZXJyb3IvZXhhbXBsZXMvNi9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9waXBlcy9maWVsZC1lcnJvci9leGFtcGxlcy82L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREVBO0VBQ0ksWUFBQTtBQ0FKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvcGlwZXMvZmllbGQtZXJyb3IvZXhhbXBsZXMvNi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiIsIi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuLmVycm9yIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFieldErrorContentPipeExample6, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-field-error-content-pipe-example-6`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
                providers: [
                    {
                        provide: _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_4__["TUI_VALIDATION_ERRORS"],
                        useValue: {
                            required: `Enter this!`,
                            max: (context) => `Too expensive, max ${context.max}`,
                        },
                    },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/pipes/field-error/field-error.component.ts":
/*!****************************************************************!*\
  !*** ./src/modules/pipes/field-error/field-error.component.ts ***!
  \****************************************************************/
/*! exports provided: ExampleTuiFieldErrorPipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiFieldErrorPipeComponent", function() { return ExampleTuiFieldErrorPipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/pipes/field-error/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/pipes/field-error/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/pipes/field-error/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/pipes/field-error/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/pipes/field-error/examples/5/index.ts");
/* harmony import */ var _examples_6_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/6/index */ "./src/modules/pipes/field-error/examples/6/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");















var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__2 = goog.getMsg("Basic");
    I18N_1 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__2;
}
else {
    I18N_1 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c3 = ["heading", I18N_1];
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8087109270529539309$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__5 = goog.getMsg("With custom messages for validators");
    I18N_4 = MSG_EXTERNAL_8087109270529539309$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟878e6fe461fd9ca2712122350e24522f5de8fd18␟8087109270529539309:With custom messages for validators`;
}
const _c6 = ["heading", I18N_4];
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7592818721454246340$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__8 = goog.getMsg("with a template");
    I18N_7 = MSG_EXTERNAL_7592818721454246340$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟beedd8b329a8f8773c3b0f41eefeeb5e601578a9␟7592818721454246340:with a template`;
}
const _c9 = ["heading", I18N_7];
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_296183290148574667$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__11 = goog.getMsg("With adding new controls (FormArray)");
    I18N_10 = MSG_EXTERNAL_296183290148574667$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟f168335edcd7a2503812f5cdb86f5fdf3f53881e␟296183290148574667:With adding new controls (FormArray)`;
}
const _c12 = ["heading", I18N_10];
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2219993318238885702$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__14 = goog.getMsg("async validator");
    I18N_13 = MSG_EXTERNAL_2219993318238885702$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟4dd4c0a5cc2f0b5edcf6ce49c7de250516eb991e␟2219993318238885702:async validator`;
}
const _c15 = ["heading", I18N_13];
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2645314855951305243$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__17 = goog.getMsg("tuiFieldErrorContentPipe");
    I18N_16 = MSG_EXTERNAL_2645314855951305243$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__17;
}
else {
    I18N_16 = $localize `:␟cd32fd6943404603d4285581b8c6fc926a23eec0␟2645314855951305243:tuiFieldErrorContentPipe`;
}
const _c18 = ["heading", I18N_16];
var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_362690177758388643$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__19 = goog.getMsg("{$startParagraph} FieldErrorPipe takes order of errors as array and transform it to {$startTagCode}TuiValidationError{$closeTagCode} . Can be used with {$startTagCode}TuiError{$closeTagCode}{$closeParagraph}{$startParagraph} You can also use {$startTagCode}tuiFieldErrorContentPipe{$closeTagCode} with {$startTagCode}TuiHint{$closeTagCode} (see {$startLink} tuiFieldErrorContentPipe example {$closeLink} ). It returns a content of the TuiValidationError. {$closeParagraph}{$startTagTuiDocExample}{$startTagTuiFieldErrorPipeExample_1}{$closeTagTuiFieldErrorPipeExample_1}{$closeTagTuiDocExample}{$startTagTuiDocExample_1}{$startTagTuiFieldErrorPipeExample_2}{$closeTagTuiFieldErrorPipeExample_2}{$closeTagTuiDocExample}{$startTagTuiDocExample_2}{$startTagTuiFieldErrorPipeExample_3}{$closeTagTuiFieldErrorPipeExample_3}{$closeTagTuiDocExample}{$startTagTuiDocExample_3}{$startTagTuiFieldErrorPipeExample_4}{$closeTagTuiFieldErrorPipeExample_4}{$closeTagTuiDocExample}{$startTagTuiDocExample_4}{$startTagTuiFieldErrorPipeExample_5}{$closeTagTuiFieldErrorPipeExample_5}{$closeTagTuiDocExample}{$startTagTuiDocExample_5}{$startTagTuiFieldErrorContentPipeExample_6}{$closeTagTuiFieldErrorContentPipeExample_6}{$closeTagTuiDocExample}", { "startParagraph": "[\uFFFD#1\uFFFD|\uFFFD#4\uFFFD]", "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]", "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]", "closeParagraph": "[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD]", "startLink": "\uFFFD#7\uFFFD", "closeLink": "\uFFFD/#7\uFFFD", "startTagTuiDocExample": "\uFFFD#8\uFFFD", "startTagTuiFieldErrorPipeExample_1": "\uFFFD#10\uFFFD", "closeTagTuiFieldErrorPipeExample_1": "\uFFFD/#10\uFFFD", "closeTagTuiDocExample": "[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD]", "startTagTuiDocExample_1": "\uFFFD#11\uFFFD", "startTagTuiFieldErrorPipeExample_2": "\uFFFD#13\uFFFD", "closeTagTuiFieldErrorPipeExample_2": "\uFFFD/#13\uFFFD", "startTagTuiDocExample_2": "\uFFFD#14\uFFFD", "startTagTuiFieldErrorPipeExample_3": "\uFFFD#16\uFFFD", "closeTagTuiFieldErrorPipeExample_3": "\uFFFD/#16\uFFFD", "startTagTuiDocExample_3": "\uFFFD#17\uFFFD", "startTagTuiFieldErrorPipeExample_4": "\uFFFD#19\uFFFD", "closeTagTuiFieldErrorPipeExample_4": "\uFFFD/#19\uFFFD", "startTagTuiDocExample_4": "\uFFFD#20\uFFFD", "startTagTuiFieldErrorPipeExample_5": "\uFFFD#22\uFFFD", "closeTagTuiFieldErrorPipeExample_5": "\uFFFD/#22\uFFFD", "startTagTuiDocExample_5": "\uFFFD#23\uFFFD", "startTagTuiFieldErrorContentPipeExample_6": "\uFFFD#25\uFFFD", "closeTagTuiFieldErrorContentPipeExample_6": "\uFFFD/#25\uFFFD" });
    I18N_0 = MSG_EXTERNAL_362690177758388643$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__19;
}
else {
    I18N_0 = $localize `:␟42c69b6d2ac097886f22a489d25b3d405635b997␟362690177758388643:${"[\uFFFD#1\uFFFD|\uFFFD#4\uFFFD]"}:START_PARAGRAPH: FieldErrorPipe takes order of errors as array and transform it to ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:TuiValidationError${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: . Can be used with ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:TuiError${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_PARAGRAPH:${"[\uFFFD#1\uFFFD|\uFFFD#4\uFFFD]"}:START_PARAGRAPH: You can also use ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:tuiFieldErrorContentPipe${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: with ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:TuiHint${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: (see ${"\uFFFD#7\uFFFD"}:START_LINK: tuiFieldErrorContentPipe example ${"\uFFFD/#7\uFFFD"}:CLOSE_LINK: ). It returns a content of the TuiValidationError. ${"[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_PARAGRAPH:${"\uFFFD#8\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#10\uFFFD"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_1:${"\uFFFD/#10\uFFFD"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_1:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#11\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\uFFFD#13\uFFFD"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_2:${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_2:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#14\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_2:${"\uFFFD#16\uFFFD"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_3:${"\uFFFD/#16\uFFFD"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_3:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#17\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_3:${"\uFFFD#19\uFFFD"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_4:${"\uFFFD/#19\uFFFD"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_4:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#20\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_4:${"\uFFFD#22\uFFFD"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_5:${"\uFFFD/#22\uFFFD"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_5:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#23\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_5:${"\uFFFD#25\uFFFD"}:START_TAG_TUI_FIELD_ERROR_CONTENT_PIPE_EXAMPLE_6:${"\uFFFD/#25\uFFFD"}:CLOSE_TAG_TUI_FIELD_ERROR_CONTENT_PIPE_EXAMPLE_6:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
function ExampleTuiFieldErrorPipeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](9, _c3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-field-error-pipe-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](12, _c6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-field-error-pipe-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](15, _c9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-field-error-pipe-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](18, _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "tui-field-error-pipe-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](21, _c15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "tui-field-error-pipe-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tui-doc-example", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](24, _c18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "tui-field-error-content-pipe-example-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example6);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3384755420899190664$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__21 = goog.getMsg(" Import {$startTagCode}TuiFieldErrorPipeModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_20 = MSG_EXTERNAL_3384755420899190664$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__21;
}
else {
    I18N_20 = $localize `:␟121f4dac7c3383d54e07bb2845ac74f2ade59411␟3384755420899190664: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiFieldErrorPipeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_412868639087182729$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__23 = goog.getMsg("Use pipe in template:");
    I18N_22 = MSG_EXTERNAL_412868639087182729$$SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__23;
}
else {
    I18N_22 = $localize `:␟0946c7e6e1334eb04ea506cdd9864968aecc69cb␟412868639087182729:Use pipe in template:`;
}
function ExampleTuiFieldErrorPipeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleHtml);
} }
class ExampleTuiFieldErrorPipeComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/3/index.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/4/index.less")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/5/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-less */ "!!raw-loader!-examples-5-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/5/index.less")),
        };
        this.example6 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-ts */ "!!raw-loader!-examples-6-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/6/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-html */ "!!raw-loader!-examples-6-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/6/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-less */ "!!raw-loader!-examples-6-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/pipes/field-error/examples/6/index.less")),
        };
    }
}
ExampleTuiFieldErrorPipeComponent.ɵfac = function ExampleTuiFieldErrorPipeComponent_Factory(t) { return new (t || ExampleTuiFieldErrorPipeComponent)(); };
ExampleTuiFieldErrorPipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiFieldErrorPipeComponent, selectors: [["example-field-error-pipe"]], decls: 3, vars: 0, consts: [["header", "FieldError", "package", "KIT", "type", "pipes"], ["pageTab", ""], ["pageTab", "Setup"], ["tuiLink", "", "routerLink", ".", "fragment", "content"], ["id", "base", 3, "content", 6, "heading"], ["id", "customMessages", 3, "content", 6, "heading"], ["id", "patterns", 3, "content", 6, "heading"], ["id", "formArray", 3, "content", 6, "heading"], ["id", "async", 3, "content", 6, "heading"], ["id", "content", 3, "content", 6, "heading"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiFieldErrorPipeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiFieldErrorPipeComponent_ng_template_1_Template, 26, 6, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiFieldErrorPipeComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipeExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_8__["TuiFieldErrorPipeExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_9__["TuiFieldErrorPipeExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_10__["TuiFieldErrorPipeExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_11__["TuiFieldErrorPipeExample5"], _examples_6_index__WEBPACK_IMPORTED_MODULE_12__["TuiFieldErrorContentPipeExample6"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiFieldErrorPipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-field-error-pipe`,
                templateUrl: `./field-error.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/pipes/field-error/field-error.module.ts":
/*!*************************************************************!*\
  !*** ./src/modules/pipes/field-error/field-error.module.ts ***!
  \*************************************************************/
/*! exports provided: ExampleTuiFieldErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiFieldErrorModule", function() { return ExampleTuiFieldErrorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-table */ "../addon-table/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _taiga_ui_kit_pipes_field_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/kit/pipes/field-error */ "../kit/pipes/field-error/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/pipes/field-error/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/pipes/field-error/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/pipes/field-error/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/pipes/field-error/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/pipes/field-error/examples/5/index.ts");
/* harmony import */ var _examples_6__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/6 */ "./src/modules/pipes/field-error/examples/6/index.ts");
/* harmony import */ var _field_error_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./field-error.component */ "./src/modules/pipes/field-error/field-error.component.ts");




















class ExampleTuiFieldErrorModule {
}
ExampleTuiFieldErrorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiFieldErrorModule });
ExampleTuiFieldErrorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiFieldErrorModule_Factory(t) { return new (t || ExampleTuiFieldErrorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiErrorModule"],
            _taiga_ui_kit_pipes_field_error__WEBPACK_IMPORTED_MODULE_9__["TuiFieldErrorPipeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLabelModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiHintModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiInputModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiInputPhoneModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiInputCountModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
            _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_6__["TuiTableModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiHintModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiInputNumberModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCurrencyPipeModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_10__["PolymorpheusModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_field_error_component__WEBPACK_IMPORTED_MODULE_17__["ExampleTuiFieldErrorPipeComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiFieldErrorModule, { declarations: [_field_error_component__WEBPACK_IMPORTED_MODULE_17__["ExampleTuiFieldErrorPipeComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_11__["TuiFieldErrorPipeExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_12__["TuiFieldErrorPipeExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_13__["TuiFieldErrorPipeExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_14__["TuiFieldErrorPipeExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_15__["TuiFieldErrorPipeExample5"],
        _examples_6__WEBPACK_IMPORTED_MODULE_16__["TuiFieldErrorContentPipeExample6"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiErrorModule"],
        _taiga_ui_kit_pipes_field_error__WEBPACK_IMPORTED_MODULE_9__["TuiFieldErrorPipeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLabelModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiHintModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiInputModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiInputPhoneModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiInputCountModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_6__["TuiTableModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiHintModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiInputNumberModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCurrencyPipeModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_10__["PolymorpheusModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_field_error_component__WEBPACK_IMPORTED_MODULE_17__["ExampleTuiFieldErrorPipeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiFieldErrorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiErrorModule"],
                    _taiga_ui_kit_pipes_field_error__WEBPACK_IMPORTED_MODULE_9__["TuiFieldErrorPipeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLabelModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiHintModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiInputModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiButtonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiInputPhoneModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiInputCountModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiLinkModule"],
                    _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_6__["TuiTableModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiHintModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiInputNumberModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCurrencyPipeModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_10__["PolymorpheusModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_field_error_component__WEBPACK_IMPORTED_MODULE_17__["ExampleTuiFieldErrorPipeComponent"])),
                ],
                declarations: [
                    _field_error_component__WEBPACK_IMPORTED_MODULE_17__["ExampleTuiFieldErrorPipeComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_11__["TuiFieldErrorPipeExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_12__["TuiFieldErrorPipeExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_13__["TuiFieldErrorPipeExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_14__["TuiFieldErrorPipeExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_15__["TuiFieldErrorPipeExample5"],
                    _examples_6__WEBPACK_IMPORTED_MODULE_16__["TuiFieldErrorContentPipeExample6"],
                ],
                exports: [_field_error_component__WEBPACK_IMPORTED_MODULE_17__["ExampleTuiFieldErrorPipeComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pipes-field-error-field-error-module.js.map