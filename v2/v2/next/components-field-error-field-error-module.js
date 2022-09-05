(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-field-error-field-error-module"],{

/***/ "./src/modules/components/field-error/examples/1/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/field-error/examples/1/index.ts ***!
  \****************************************************************/
/*! exports provided: passwordValidator, superComputerValidator, TuiFieldErrorExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordValidator", function() { return passwordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superComputerValidator", function() { return superComputerValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFieldErrorExample1", function() { return TuiFieldErrorExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/label/label.component */ "../core/components/label/label.component.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _kit_components_field_error_field_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/field-error/field-error.component */ "../kit/components/field-error/field-error.component.ts");












var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3772154377692784553$$SRC_MODULES_COMPONENTS_FIELD_ERROR_EXAMPLES_1_INDEX_TS_1 = goog.getMsg("Type the ultimate answer");
    I18N_0 = MSG_EXTERNAL_3772154377692784553$$SRC_MODULES_COMPONENTS_FIELD_ERROR_EXAMPLES_1_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟c2f188eeca60463782738d8247914bf170df5098␟3772154377692784553:Type the ultimate answer`;
}
const _c2 = ["label", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8591875090862306452$$SRC_MODULES_COMPONENTS_FIELD_ERROR_EXAMPLES_1_INDEX_TS_4 = goog.getMsg("Set a password");
    I18N_3 = MSG_EXTERNAL_8591875090862306452$$SRC_MODULES_COMPONENTS_FIELD_ERROR_EXAMPLES_1_INDEX_TS_4;
}
else {
    I18N_3 = $localize `:␟4de3cc8dba3c7b052f74a1db4752f51bda859e9c␟8591875090862306452:Set a password`;
}
const _c5 = ["label", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5532503478235461752$$SRC_MODULES_COMPONENTS_FIELD_ERROR_EXAMPLES_1_INDEX_TS_7 = goog.getMsg(" If you need to show validation message as early as a user started to type something, subscribe on form value changes and call markAsTouched on control on first value change ");
    I18N_6 = MSG_EXTERNAL_5532503478235461752$$SRC_MODULES_COMPONENTS_FIELD_ERROR_EXAMPLES_1_INDEX_TS_7;
}
else {
    I18N_6 = $localize `:␟55293e53f2eaf13c5a165765c4319f4527d577a4␟5532503478235461752: If you need to show validation message as early as a user started to type something, subscribe on form value changes and call markAsTouched on control on first value change `;
}
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
class TuiFieldErrorExample1 {
    constructor() {
        this.testValue1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, passwordValidator]);
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: this.testValue1,
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, superComputerValidator]),
        });
        this.testValue1.valueChanges.subscribe(() => {
            this.testValue1.markAsTouched();
        });
    }
}
TuiFieldErrorExample1.ɵfac = function TuiFieldErrorExample1_Factory(t) { return new (t || TuiFieldErrorExample1)(); };
TuiFieldErrorExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFieldErrorExample1, selectors: [["tui-field-error-example-1"]], decls: 13, vars: 3, consts: [[1, "b-form", 3, "formGroup"], ["tuiLabel", "", 1, "tui-space_bottom-4", 6, "label"], ["formControlName", "testValue2", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"], ["formControlName", "testValue2"], ["tuiLabel", "", 6, "label"], ["formControlName", "testValue1", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"], ["formControlName", "testValue1"]], template: function TuiFieldErrorExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](2, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " to the Question of Life, the Universe, and Everything ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-field-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, _c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tui-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Latin letters only ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "tui-field-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, I18N_6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_4__["TuiLabelComponent"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldLabelOutsideDirective"], _kit_components_field_error_field_error_component__WEBPACK_IMPORTED_MODULE_9__["TuiFieldErrorComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFieldErrorExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-field-error-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/modules/components/field-error/examples/2/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/field-error/examples/2/index.ts ***!
  \****************************************************************/
/*! exports provided: innValidator, TuiFieldErrorExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "innValidator", function() { return innValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFieldErrorExample2", function() { return TuiFieldErrorExample2; });
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
/* harmony import */ var _kit_components_field_error_field_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/field-error/field-error.component */ "../kit/components/field-error/field-error.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");














const _c0 = ["errorContent"];
const _c1 = ["bigErrorContent"];
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2295031025708706060$$SRC_MODULES_COMPONENTS_FIELD_ERROR_EXAMPLES_2_INDEX_TS_3 = goog.getMsg("Enter company name");
    I18N_2 = MSG_EXTERNAL_2295031025708706060$$SRC_MODULES_COMPONENTS_FIELD_ERROR_EXAMPLES_2_INDEX_TS_3;
}
else {
    I18N_2 = $localize `:␟7d66ae66a6f955b1eb6f5c00aac4d4e2584cdeed␟2295031025708706060:Enter company name`;
}
const _c4 = ["label", I18N_2];
function TuiFieldErrorExample2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Secret number must contain ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "10 or 12 digits");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " . ");
} }
function TuiFieldErrorExample2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " This company is already registered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " It is mine ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c5 = function () { return ["required", "inn"]; };
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
class TuiFieldErrorExample2 {
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
TuiFieldErrorExample2.ɵfac = function TuiFieldErrorExample2_Factory(t) { return new (t || TuiFieldErrorExample2)(); };
TuiFieldErrorExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFieldErrorExample2, selectors: [["tui-field-error-example-2"]], viewQuery: function TuiFieldErrorExample2_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.errorContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bigErrorContent = _t.first);
    } }, decls: 12, vars: 5, consts: [[1, "b-form", 3, "formGroup"], ["tuiLabel", "", "label", "Secret number"], ["formControlName", "testValue1", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"], ["errorContent", ""], ["formControlName", "testValue1", 3, "order"], ["tuiLabel", "", 1, "tui-space_top-4", 6, "label"], ["formControlName", "testValue2", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"], ["bigErrorContent", ""], ["formControlName", "testValue2"], ["tuiButton", "", "type", "button", 1, "tui-space_top-2"]], template: function TuiFieldErrorExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiFieldErrorExample2_ng_template_3_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-field-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, _c4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TuiFieldErrorExample2_ng_template_9_Template, 3, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-field-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_5__["TuiLabelComponent"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_9__["TuiTextfieldLabelOutsideDirective"], _kit_components_field_error_field_error_component__WEBPACK_IMPORTED_MODULE_10__["TuiFieldErrorComponent"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_11__["TuiButtonComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFieldErrorExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-field-error-example-2`,
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

/***/ "./src/modules/components/field-error/examples/3/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/field-error/examples/3/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiFieldErrorExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFieldErrorExample3", function() { return TuiFieldErrorExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_components_field_error_field_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/field-error/field-error.component */ "../kit/components/field-error/field-error.component.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/components/label/label.component */ "../core/components/label/label.component.ts");
/* harmony import */ var _kit_components_input_phone_input_phone_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/input-phone/input-phone.component */ "../kit/components/input-phone/input-phone.component.ts");
/* harmony import */ var _kit_components_input_phone_input_phone_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/input-phone/input-phone.directive */ "../kit/components/input-phone/input-phone.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-autocomplete.directive */ "../core/directives/textfield-controller/textfield-autocomplete.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
















const _c0 = ["phoneErrorContent"];
function TuiFieldErrorExample3_label_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Invalid phone number length");
} }
function TuiFieldErrorExample3_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-input-phone", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiFieldErrorExample3_label_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.removePhone(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiFieldErrorExample3_label_1_ng_template_4_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-field-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("label", "Phone number ", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("formControlName", i_r2);
} }
class TuiFieldErrorExample3 {
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
                lenght: new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiValidationError"](this.phoneErrorContent),
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
TuiFieldErrorExample3.ɵfac = function TuiFieldErrorExample3_Factory(t) { return new (t || TuiFieldErrorExample3)(); };
TuiFieldErrorExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFieldErrorExample3, selectors: [["tui-field-error-example-3"]], viewQuery: function TuiFieldErrorExample3_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.phoneErrorContent = _t.first);
    } }, decls: 5, vars: 2, consts: [[3, "formGroup"], ["tuiLabel", "", "formArrayName", "phones", "class", "tui-space_bottom-4", 3, "label", 4, "ngFor", "ngForOf"], ["formArrayName", "phones", 1, "form-array-error"], ["tuiButton", "", "type", "button", "size", "s", 1, "tui-space_top-4", 3, "click"], ["tuiLabel", "", "formArrayName", "phones", 1, "tui-space_bottom-4", 3, "label"], [1, "row"], ["tuiTextfieldAutocomplete", "off", "tuiTextfieldSize", "m", 1, "input", 3, "formControlName", "tuiTextfieldLabelOutside"], ["tuiIconButton", "", "type", "button", "size", "m", "title", "Delete phone number", "appearance", "icon", "icon", "tuiIconTrash", 1, "tui-space_left-2", "icon", 3, "click"], ["phoneErrorContent", ""], [3, "formControlName"]], template: function TuiFieldErrorExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiFieldErrorExample3_label_1_Template, 7, 4, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-field-error", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiFieldErrorExample3_Template_button_click_3_listener() { return ctx.addPhone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add a phone number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formData.controls);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _kit_components_field_error_field_error_component__WEBPACK_IMPORTED_MODULE_6__["TuiFieldErrorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_7__["TuiButtonComponent"], _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_8__["TuiLabelComponent"], _kit_components_input_phone_input_phone_component__WEBPACK_IMPORTED_MODULE_9__["TuiInputPhoneComponent"], _kit_components_input_phone_input_phone_directive__WEBPACK_IMPORTED_MODULE_10__["TuiInputPhoneDirective"], _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_11__["TuiTextfieldAutocompleteDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_12__["TuiTextfieldSizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_13__["TuiTextfieldLabelOutsideDirective"]], styles: [".input[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.form-array-error[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9maWVsZC1lcnJvci9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvZmllbGQtZXJyb3IvZXhhbXBsZXMvMy9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKO0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREdBO0VBQ0ksbUJBQUE7QUNESiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvZmllbGQtZXJyb3IvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcbiAgICB3aWR0aDogMjByZW07XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm0tYXJyYXktZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4iLCIuaW5wdXQge1xuICB3aWR0aDogMjByZW07XG59XG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb3JtLWFycmF5LWVycm9yIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFieldErrorExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-field-error-example-3`,
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

/***/ "./src/modules/components/field-error/examples/4/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/field-error/examples/4/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiFieldErrorExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFieldErrorExample4", function() { return TuiFieldErrorExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _kit_components_field_error_field_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/field-error/field-error.component */ "../kit/components/field-error/field-error.component.ts");












const latinChars = /^[a-zA-Z]+$/;
function asyncValidatorFn(isCypress, cd) {
    return (field) => {
        return field.value && latinChars.test(field.value)
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({
                error: new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiValidationError"](`Only latin letters allowed`),
            }).pipe(isCypress ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["delay"])(0) : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["delay"])(5000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => cd.markForCheck()));
    };
}
class TuiFieldErrorExample4 {
    constructor(fb, isCypress, cd) {
        this.fb = fb;
        this.form = this.fb.group({
            text: [`русский текст`, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.form.controls[`text`].setAsyncValidators(asyncValidatorFn(isCypress, cd));
        this.form.controls[`text`].markAsTouched();
    }
}
TuiFieldErrorExample4.ɵfac = function TuiFieldErrorExample4_Factory(t) { return new (t || TuiFieldErrorExample4)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_IS_CYPRESS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
TuiFieldErrorExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFieldErrorExample4, selectors: [["tui-field-error-example-4"]], decls: 5, vars: 1, consts: [[3, "formGroup"], [1, "tui-form__row"], ["formControlName", "text", 1, "input"], ["formControlName", "text"]], template: function TuiFieldErrorExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Enter some text ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-field-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_8__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _kit_components_field_error_field_error_component__WEBPACK_IMPORTED_MODULE_9__["TuiFieldErrorComponent"]], styles: [".input[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.form-array-error[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9maWVsZC1lcnJvci9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvZmllbGQtZXJyb3IvZXhhbXBsZXMvNC9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKO0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREdBO0VBQ0ksbUJBQUE7QUNESiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvZmllbGQtZXJyb3IvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcbiAgICB3aWR0aDogMjByZW07XG59XG5cbi5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm0tYXJyYXktZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG4iLCIuaW5wdXQge1xuICB3aWR0aDogMjByZW07XG59XG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb3JtLWFycmF5LWVycm9yIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFieldErrorExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-field-error-example-4`,
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
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/field-error/examples/5/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/components/field-error/examples/5/index.ts ***!
  \****************************************************************/
/*! exports provided: maxLengthValidator, minLengthValidator, TuiFieldErrorExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLengthValidator", function() { return maxLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minLengthValidator", function() { return minLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiFieldErrorExample5", function() { return TuiFieldErrorExample5; });
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
/* harmony import */ var _kit_components_field_error_field_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../kit/components/field-error/field-error.component */ "../kit/components/field-error/field-error.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../kit/components/input-count/input-count.component */ "../kit/components/input-count/input-count.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../kit/components/input-count/input-count.directive */ "../kit/components/input-count/input-count.directive.ts");

















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3646762244302681891$$SRC_MODULES_COMPONENTS_FIELD_ERROR_EXAMPLES_5_INDEX_TS_1 = goog.getMsg(" Required ");
    I18N_0 = MSG_EXTERNAL_3646762244302681891$$SRC_MODULES_COMPONENTS_FIELD_ERROR_EXAMPLES_5_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟87a9e0f6ceb1444cab6185424f933a376357a91c␟3646762244302681891: Required `;
}
function maxLengthValidator(context) {
    return `Maximum length — ${context.requiredLength}`;
}
function minLengthValidator(context) {
    return `Minimum length — ${context.requiredLength}`;
}
class TuiFieldErrorExample5 {
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
TuiFieldErrorExample5.ɵfac = function TuiFieldErrorExample5_Factory(t) { return new (t || TuiFieldErrorExample5)(); };
TuiFieldErrorExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiFieldErrorExample5, selectors: [["tui-field-error-example-5"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
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
        ])], decls: 13, vars: 2, consts: [[1, "b-form", 3, "formGroup"], ["tuiLabel", "", "label", "Enter an email", 1, "tui-space_bottom-4"], ["formControlName", "testValue2", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"], ["formControlName", "testValue2"], ["tuiLabel", "", "label", "Minimum and maximum length", 1, "tui-space_bottom-4"], ["formControlName", "testValue1", "tuiTextfieldSize", "m"], ["formControlName", "testValue1"], ["tuiLabel", "", "label", "Minimum number"], ["formControlName", "testValue3", "tuiTextfieldSize", "m"], ["formControlName", "testValue3"]], template: function TuiFieldErrorExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-field-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 4 letters word... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-field-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-input-count", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-field-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_7__["TuiLabelComponent"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_8__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_9__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_10__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_11__["TuiTextfieldLabelOutsideDirective"], _kit_components_field_error_field_error_component__WEBPACK_IMPORTED_MODULE_12__["TuiFieldErrorComponent"], _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_13__["TuiInputCountComponent"], _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_14__["TuiInputCountDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiFieldErrorExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-field-error-example-5`,
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

/***/ "./src/modules/components/field-error/field-error.component.ts":
/*!*********************************************************************!*\
  !*** ./src/modules/components/field-error/field-error.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExampleTuiFieldErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiFieldErrorComponent", function() { return ExampleTuiFieldErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/field-error/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/field-error/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/field-error/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/field-error/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/components/field-error/examples/5/index.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS_1 = goog.getMsg("Setup");
    I18N_0 = MSG_EXTERNAL_6492831808763156510$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
}
const _c2 = ["pageTab", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3207439097338829675$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__4 = goog.getMsg("{$startTagCode}FieldError{$closeTagCode} shows a validation error of a field. If you do not use forms, see {$startLink}{$startTagCode}TuiError{$closeTagCode}{$closeLink} . ", { "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]", "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]", "startLink": "\uFFFD#3\uFFFD", "closeLink": "\uFFFD/#3\uFFFD" });
    I18N_3 = MSG_EXTERNAL_3207439097338829675$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟3f27c72dea09d55e44acaf9c2da962eca6048e41␟3207439097338829675:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:FieldError${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: shows a validation error of a field. If you do not use forms, see ${"\uFFFD#3\uFFFD"}:START_LINK:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:TuiError${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#3\uFFFD"}:CLOSE_LINK: . `;
}
I18N_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_3);
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__6 = goog.getMsg("Basic");
    I18N_5 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c7 = ["heading", I18N_5];
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7592818721454246340$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__9 = goog.getMsg("with a template");
    I18N_8 = MSG_EXTERNAL_7592818721454246340$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟beedd8b329a8f8773c3b0f41eefeeb5e601578a9␟7592818721454246340:with a template`;
}
const _c10 = ["heading", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_296183290148574667$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__12 = goog.getMsg("With adding new controls (FormArray)");
    I18N_11 = MSG_EXTERNAL_296183290148574667$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟f168335edcd7a2503812f5cdb86f5fdf3f53881e␟296183290148574667:With adding new controls (FormArray)`;
}
const _c13 = ["heading", I18N_11];
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2219993318238885702$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__15 = goog.getMsg("async validator");
    I18N_14 = MSG_EXTERNAL_2219993318238885702$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟4dd4c0a5cc2f0b5edcf6ce49c7de250516eb991e␟2219993318238885702:async validator`;
}
const _c16 = ["heading", I18N_14];
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8087109270529539309$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__18 = goog.getMsg("With custom messages for validators");
    I18N_17 = MSG_EXTERNAL_8087109270529539309$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__18;
}
else {
    I18N_17 = $localize `:␟878e6fe461fd9ca2712122350e24522f5de8fd18␟8087109270529539309:With custom messages for validators`;
}
const _c19 = ["heading", I18N_17];
const _c20 = function () { return ["/components/error"]; };
function ExampleTuiFieldErrorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-notification", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Deprecated.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Use ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "tuiFieldError");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " pipe from ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " TuiFieldErrorPipeModule ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](15, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-field-error-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tui-doc-example", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](18, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "tui-field-error-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](21, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "tui-field-error-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tui-doc-example", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](24, _c16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "tui-field-error-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tui-doc-example", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](27, _c19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "tui-field-error-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c20));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
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
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6845184443201904975$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__22 = goog.getMsg(" Import {$startTagCode}TuiFieldErrorModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_21 = MSG_EXTERNAL_6845184443201904975$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__22;
}
else {
    I18N_21 = $localize `:␟642fb8eaf79852b6d813ddb81c4dbf7f3529ebeb␟6845184443201904975: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiFieldErrorModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_23;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__24 = goog.getMsg("Add to the template:");
    I18N_23 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__24;
}
else {
    I18N_23 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiFieldErrorComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r1.exampleHtml);
} }
class ExampleTuiFieldErrorComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/3/index.less")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/3/index.less")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/4/index.less")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/field-error/examples/5/index.html")),
        };
    }
}
ExampleTuiFieldErrorComponent.ɵfac = function ExampleTuiFieldErrorComponent_Factory(t) { return new (t || ExampleTuiFieldErrorComponent)(); };
ExampleTuiFieldErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiFieldErrorComponent, selectors: [["example-tui-field-error"]], decls: 4, vars: 0, consts: [["header", "FieldError", "package", "KIT", "type", "components", "deprecated", ""], ["pageTab", ""], [6, "pageTab"], ["tuiLink", "", 3, "routerLink"], ["status", "error"], ["tuiLink", "", "routerLink", "/pipes/field-error"], ["id", "base", 3, "content", 6, "heading"], ["id", "patterns", 3, "content", 6, "heading"], ["id", "formArray", 3, "content", 6, "heading"], ["id", "async", 3, "content", 6, "heading"], ["id", "customMessages", 3, "content", 6, "heading"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiFieldErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiFieldErrorComponent_ng_template_1_Template, 29, 7, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiFieldErrorComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_4__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_7__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_8__["TuiFieldErrorExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_9__["TuiFieldErrorExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_10__["TuiFieldErrorExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_11__["TuiFieldErrorExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_12__["TuiFieldErrorExample5"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiFieldErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-field-error`,
                templateUrl: `./field-error.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/field-error/field-error.module.ts":
/*!******************************************************************!*\
  !*** ./src/modules/components/field-error/field-error.module.ts ***!
  \******************************************************************/
/*! exports provided: ExampleTuiFieldErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiFieldErrorModule", function() { return ExampleTuiFieldErrorModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/field-error/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/field-error/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/field-error/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/field-error/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/components/field-error/examples/5/index.ts");
/* harmony import */ var _field_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./field-error.component */ "./src/modules/components/field-error/field-error.component.ts");
















class ExampleTuiFieldErrorModule {
}
ExampleTuiFieldErrorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiFieldErrorModule });
ExampleTuiFieldErrorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiFieldErrorModule_Factory(t) { return new (t || ExampleTuiFieldErrorModule)(); }, imports: [[
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFieldErrorModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLabelModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputPhoneModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputCountModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_field_error_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiFieldErrorComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiFieldErrorModule, { declarations: [_field_error_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiFieldErrorComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiFieldErrorExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiFieldErrorExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiFieldErrorExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_11__["TuiFieldErrorExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_12__["TuiFieldErrorExample5"]], imports: [_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFieldErrorModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLabelModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputPhoneModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputCountModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_field_error_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiFieldErrorComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiFieldErrorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiFieldErrorModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLabelModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputPhoneModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiInputCountModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldControllerModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_field_error_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiFieldErrorComponent"])),
                ],
                declarations: [
                    _field_error_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiFieldErrorComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_8__["TuiFieldErrorExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_9__["TuiFieldErrorExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_10__["TuiFieldErrorExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_11__["TuiFieldErrorExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_12__["TuiFieldErrorExample5"],
                ],
                exports: [_field_error_component__WEBPACK_IMPORTED_MODULE_13__["ExampleTuiFieldErrorComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-field-error-field-error-module.js.map