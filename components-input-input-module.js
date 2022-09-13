(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-input-input-module"],{

/***/ "./src/modules/components/input/examples/1/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/input/examples/1/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiInputExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputExample1", function() { return TuiInputExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");









class TuiInputExample1 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`mail@mail.ru`),
        });
    }
}
TuiInputExample1.ɵfac = function TuiInputExample1_Factory(t) { return new (t || TuiInputExample1)(); };
TuiInputExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputExample1, selectors: [["tui-input-example-1"]], decls: 4, vars: 1, consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue"], ["tuiTextfield", "", "type", "email"]], template: function TuiInputExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Type an email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input/examples/2/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/input/examples/2/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiInputExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputExample2", function() { return TuiInputExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");













class TuiInputExample2 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`mail@mail.ru`),
        });
    }
}
TuiInputExample2.ɵfac = function TuiInputExample2_Factory(t) { return new (t || TuiInputExample2)(); };
TuiInputExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputExample2, selectors: [["tui-input-example-2"]], decls: 14, vars: 3, consts: [[1, "b-form", 3, "formGroup"], ["tuiTextfieldSize", "s", "formControlName", "testValue"], ["tuiTextfield", "", "type", "email"], ["tuiTextfieldSize", "m", "formControlName", "testValue", 3, "tuiTextfieldLabelOutside"], ["formControlName", "testValue", "tuiHintContent", "It will be used for sending documents", 3, "tuiTextfieldCleaner"], [1, "tui-required"], ["tuiTextfield", "", "placeholder", "mail@mail.ru", "type", "email"]], template: function TuiInputExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Type an email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Type an email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Type an email\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldCleaner", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__["TuiInputDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldSizeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldComponent"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldLabelOutsideDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_9__["TuiHintControllerDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_10__["TuiTextfieldCleanerDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-example-2`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input/examples/3/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/input/examples/3/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiInputExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputExample3", function() { return TuiInputExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-text-mask */ "../../node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");













var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_635445321066308389$$SRC_MODULES_COMPONENTS_INPUT_EXAMPLES_3_INDEX_TS_1 = goog.getMsg(" Taiga UI input is compatible with {$startLink} angular2-text-mask {$closeLink}", { "startLink": "\uFFFD#3\uFFFD", "closeLink": "\uFFFD/#3\uFFFD" });
    I18N_0 = MSG_EXTERNAL_635445321066308389$$SRC_MODULES_COMPONENTS_INPUT_EXAMPLES_3_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟d218c12c88253a58b80e126649e878ed0216bd4c␟635445321066308389: Taiga UI input is compatible with ${"\uFFFD#3\uFFFD"}:START_LINK: angular2-text-mask ${"\uFFFD/#3\uFFFD"}:CLOSE_LINK:`;
}
class TuiInputExample3 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``),
            testValue2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``),
        });
        this.textMaskOptions1 = {
            guide: false,
            mask: [/\d/, /\d/, /\d/, /\d/, ` `, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        };
        this.textMaskOptions2 = {
            guide: false,
            mask: [
                /\d/,
                /\d/,
                /\d/,
                `-`,
                /\d/,
                /\d/,
                /\d/,
                `-`,
                /\d/,
                /\d/,
                /\d/,
                `-`,
                /\d/,
                /\d/,
            ],
        };
    }
}
TuiInputExample3.ɵfac = function TuiInputExample3_Factory(t) { return new (t || TuiInputExample3)(); };
TuiInputExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputExample3, selectors: [["tui-input-example-3"]], decls: 17, vars: 6, consts: [[1, "b-form", 3, "formGroup"], ["tuiLink", "", "href", "https://www.npmjs.com/package/angular2-text-mask", "target", "_blank"], ["formControlName", "testValue1", 3, "textMask"], ["tuiTextfield", "", "inputmode", "numeric"], ["formControlName", "testValue2", 3, "textMask"]], template: function TuiInputExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](2, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Document number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Secret number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Value is stored in control with mask applied:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textMask", ctx.textMaskOptions1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("textMask", ctx.textMaskOptions2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 4, ctx.testForm.value));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__["TuiLinkComponent"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__["MaskedInputDirective"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_9__["TuiTextfieldComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["JsonPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-example-3`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input/examples/4/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/input/examples/4/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiInputExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputExample4", function() { return TuiInputExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _file_loader_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !file-loader!../../../../../assets/images/avatar.jpg */ "../../node_modules/file-loader/dist/cjs.js!./src/assets/images/avatar.jpg");
/* harmony import */ var _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../cdk/directives/let/let.directive */ "../cdk/directives/let/let.directive.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _addon_commerce_components_input_card_input_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/input-card/input-card.component */ "../addon-commerce/components/input-card/input-card.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_custom_content_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-custom-content.directive */ "../core/directives/textfield-controller/textfield-custom-content.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.component */ "../core/components/data-list/data-list.component.ts");
/* harmony import */ var _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/option/option.component */ "../core/components/data-list/option/option.component.ts");
/* harmony import */ var _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../kit/components/avatar/avatar.component */ "../kit/components/avatar/avatar.component.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../../addon-commerce/components/money/money.component */ "../addon-commerce/components/money/money.component.ts");























const _c0 = ["avatar"];
function TuiInputExample4_tui_input_1_ng_container_3_tui_data_list_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiInputExample4_tui_input_1_ng_container_3_tui_data_list_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const user_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r11.onSelected(user_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r10.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r10, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatarUrl", user_r10.avatarUrl || null)("text", user_r10.toString());
} }
function TuiInputExample4_tui_input_1_ng_container_3_tui_data_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-data-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputExample4_tui_input_1_ng_container_3_tui_data_list_1_button_1_Template, 3, 4, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).tuiLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", users_r6);
} }
function TuiInputExample4_tui_input_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputExample4_tui_input_1_ng_container_3_tui_data_list_1_Template, 2, 1, "tui-data-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TuiInputExample4_tui_input_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiInputExample4_tui_input_1_ng_container_3_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r6 = ctx.tuiLet;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldCustomContent", ctx_r0.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", users_r6.length);
} }
function TuiInputExample4_ng_template_3_tui_avatar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-avatar", 15);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rounded", true)("avatarUrl", ctx_r14.lastUser.avatarUrl || null)("text", ctx_r14.lastUser.toString());
} }
function TuiInputExample4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiInputExample4_ng_template_3_tui_avatar_0_Template, 1, 3, "tui-avatar", 14);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.lastUser);
} }
function TuiInputExample4_tui_data_list_wrapper_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 16);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r3.accounts)("itemContent", _r4);
} }
function TuiInputExample4_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-money", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", account_r15.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", account_r15.amount);
} }
class User {
    constructor(firstName, lastName, avatarUrl = null, accounts = [], card = ``) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatarUrl = avatarUrl;
        this.accounts = accounts;
        this.card = card;
    }
    toString() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Account {
    constructor(id, name, amount, currency, cardSvg) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.currency = currency;
        this.cardSvg = cardSvg;
    }
    toString() {
        return this.name;
    }
}
const accountsRoman = [
    new Account(`1`, `RUB`, 24876.55, "RUB" /* Ruble */, `https://ng-web-apis.github.io/dist/assets/images/common.svg`),
    new Account(`2`, `USD`, 335, "USD" /* Dollar */, `https://ng-web-apis.github.io/dist/assets/images/geolocation.svg`),
];
const accountsAlex = [
    new Account(`3`, `EUR`, 10000, "EUR" /* Euro */, `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`),
    new Account(`4`, `PND`, 100, "GBP" /* Pound */, `https://ng-web-apis.github.io/dist/assets/images/payment-request.svg`),
];
const USERS = [
    new User(`Roman`, `Sedov`, `http://marsibarsi.me/images/1x1small.jpg`, accountsRoman),
    new User(`Alex`, `Inkin`, _file_loader_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_6__["default"], accountsAlex, `1234123412341234`),
    new User(`Dmitriy`, `Demenskiy`),
    new User(`Evgeniy`, `Mamaev`),
    new User(`Ivan`, `Ishmametiev`),
    new User(`Igor`, `Katsuba`),
    new User(`Yulia`, `Tsareva`),
];
class TuiInputExample4 {
    constructor() {
        this.avatar = ``;
        this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``);
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            user: this.user,
            account: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``),
            card: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``),
        });
        this.lastUser = null;
        this.users$ = Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiReplayedValueChangesFrom"])(this.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => {
            const filtered = USERS.filter(user => Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_DEFAULT_MATCHER"])(user, value));
            if (filtered.length !== 1 ||
                String(filtered[0]).toLowerCase() !== value.toLowerCase()) {
                return filtered;
            }
            this.onSelected(filtered[0]);
            return [];
        }));
    }
    get card() {
        const value = this.testForm.get(`card`).value;
        if (value.length < 7) {
            return null;
        }
        switch (value.charAt(0)) {
            case `0`:
            case `1`:
            case `2`:
                return `https://ng-web-apis.github.io/dist/assets/images/common.svg`;
            case `3`:
            case `4`:
            case `5`:
                return `https://ng-web-apis.github.io/dist/assets/images/geolocation.svg`;
            case `6`:
            case `7`:
                return `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`;
            case `8`:
            case `9`:
            default:
                return `https://ng-web-apis.github.io/dist/assets/images/payment-request.svg`;
        }
    }
    get isUserSelected() {
        return (this.lastUser !== null &&
            this.lastUser.toString().toLowerCase() ===
                this.testForm.get(`user`).value.toLowerCase());
    }
    get content() {
        return this.avatar && this.isUserSelected ? this.avatar : ``;
    }
    get accounts() {
        return this.isUserSelected ? this.lastUser.accounts : [];
    }
    onSelected(user) {
        this.lastUser = user;
        this.testForm.get(`card`).setValue(user.card);
    }
}
TuiInputExample4.ɵfac = function TuiInputExample4_Factory(t) { return new (t || TuiInputExample4)(); };
TuiInputExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputExample4, selectors: [["tui-input-example-4"]], viewQuery: function TuiInputExample4_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.avatar = _t.first);
    } }, decls: 12, vars: 6, consts: [[1, "container", 3, "formGroup"], ["formControlName", "user", 3, "tuiTextfieldCustomContent", 4, "tuiLet"], ["avatar", ""], ["formControlName", "account", 1, "tui-space_vertical-5"], [3, "items", "itemContent", 4, "tuiDataList"], ["accountContent", ""], ["formControlName", "card", 3, "tuiTextfieldCleaner", "cardSrc"], ["formControlName", "user", 3, "tuiTextfieldCustomContent"], ["tuiTextfield", "", "placeholder", "Type your name or surname"], [4, "ngIf"], [4, "tuiDataList"], ["tuiOption", "", 3, "value", "click", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "value", "click"], ["size", "xs", 3, "avatarUrl", "text"], ["size", "s", 3, "rounded", "avatarUrl", "text", 4, "ngIf"], ["size", "s", 3, "rounded", "avatarUrl", "text"], [3, "items", "itemContent"], [3, "value"]], template: function TuiInputExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputExample4_tui_input_1_Template, 4, 2, "tui-input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiInputExample4_ng_template_3_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TuiInputExample4_tui_data_list_wrapper_7_Template, 1, 2, "tui-data-list-wrapper", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TuiInputExample4_ng_template_8_Template, 3, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-input-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Card number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiLet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.users$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldCleaner", true)("cardSrc", ctx.card);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_7__["TuiLetDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_8__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_9__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_10__["TuiDataListDirective"], _addon_commerce_components_input_card_input_card_component__WEBPACK_IMPORTED_MODULE_11__["TuiInputCardComponent"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_12__["TuiTextfieldCleanerDirective"], _core_directives_textfield_controller_textfield_custom_content_directive__WEBPACK_IMPORTED_MODULE_13__["TuiTextfieldCustomContentDirective"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_14__["TuiTextfieldComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_16__["TuiDataListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_17__["TuiOptionComponent"], _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_18__["TuiAvatarComponent"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_19__["TuiDataListWrapperComponent"], _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_20__["TuiMoneyComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 18rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQvZXhhbXBsZXMvNC9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxOHJlbTtcbn1cbiIsIi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDE4cmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, { avatar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [`avatar`]
        }] }); })();


/***/ }),

/***/ "./src/modules/components/input/examples/5/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/input/examples/5/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiInputExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputExample5", function() { return TuiInputExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");
/* harmony import */ var _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/directives/mode/mode.directive */ "../core/directives/mode/mode.directive.ts");














var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9175192015403980059$$SRC_MODULES_COMPONENTS_INPUT_EXAMPLES_5_INDEX_TS_1 = goog.getMsg(" Custom mode is set with {$startLink}{$startTagCode}tuiMode{$closeTagCode}{$closeLink} directive ", { "startLink": "\uFFFD#3\uFFFD", "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD", "closeLink": "\uFFFD/#3\uFFFD" });
    I18N_0 = MSG_EXTERNAL_9175192015403980059$$SRC_MODULES_COMPONENTS_INPUT_EXAMPLES_5_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟51aed7677842d8f5e8b7ea838d2b71c7509ae7a5␟9175192015403980059: Custom mode is set with ${"\uFFFD#3\uFFFD"}:START_LINK:${"\uFFFD#4\uFFFD"}:START_TAG_CODE:tuiMode${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#3\uFFFD"}:CLOSE_LINK: directive `;
}
class TuiInputExample5 {
    constructor() {
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            testValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`mail@mail.ru`),
        });
    }
}
TuiInputExample5.ɵfac = function TuiInputExample5_Factory(t) { return new (t || TuiInputExample5)(); };
TuiInputExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputExample5, selectors: [["tui-input-example-5"]], decls: 19, vars: 4, consts: [[1, "b-form", 3, "formGroup"], ["tuiLink", "", "routerLink", "/directives/mode"], ["formControlName", "testValue", 3, "tuiTextfieldCleaner"], ["tuiTextfield", "", "placeholder", "mail@mail.ru", "type", "email"], [1, "wrapper", "wrapper_dark"], ["formControlName", "testValue", "tuiMode", "onDark", 3, "tuiTextfieldCleaner"], [1, "wrapper", "wrapper_light"], ["formControlName", "testValue", "tuiMode", "onLight", 3, "tuiTextfieldCleaner"]], template: function TuiInputExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](2, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Type an email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tui-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Type an email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tui-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Type an email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldCleaner", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldCleaner", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldCleaner", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationComponent"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_5__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_7__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_8__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_9__["TuiTextfieldCleanerDirective"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_10__["TuiTextfieldComponent"], _core_directives_mode_mode_directive__WEBPACK_IMPORTED_MODULE_11__["TuiModeDirective"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n}\n.wrapper_dark[_ngcontent-%COMP%] {\n  background-color: #30406a;\n}\n.wrapper_light[_ngcontent-%COMP%] {\n  background-color: #e5e7ea;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC9leGFtcGxlcy81L2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQvZXhhbXBsZXMvNS9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjtBRENJO0VBQ0kseUJBQUE7QUNDUjtBREVJO0VBQ0kseUJBQUE7QUNBUiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICAgIHBhZGRpbmc6IDAuNzVyZW07XG5cbiAgICAmX2Rhcmsge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0MDZhO1xuICAgIH1cblxuICAgICZfbGlnaHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2VhO1xuICAgIH1cbn1cbiIsIi53cmFwcGVyIHtcbiAgcGFkZGluZzogMC43NXJlbTtcbn1cbi53cmFwcGVyX2Rhcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA0MDZhO1xufVxuLndyYXBwZXJfbGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2VhO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-example-5`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input/examples/6/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/input/examples/6/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiInputExample6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputExample6", function() { return TuiInputExample6; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/directives/table.directive */ "../addon-table/components/table/directives/table.directive.ts");
/* harmony import */ var _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/th/th.component */ "../addon-table/components/table/th/th.component.ts");
/* harmony import */ var _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../addon-table/components/table/td/td.component */ "../addon-table/components/table/td/td.component.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");
/* harmony import */ var _kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date/input-date.component */ "../kit/components/input-date/input-date.component.ts");
/* harmony import */ var _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date/input-date.directive */ "../kit/components/input-date/input-date.directive.ts");
/* harmony import */ var _kit_components_select_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../kit/components/select/select.component */ "../kit/components/select/select.component.ts");
/* harmony import */ var _kit_components_select_select_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../kit/components/select/select.directive */ "../kit/components/select/select.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../../kit/components/input-count/input-count.component */ "../kit/components/input-count/input-count.component.ts");
/* harmony import */ var _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../../kit/components/input-count/input-count.directive */ "../kit/components/input-count/input-count.directive.ts");
/* harmony import */ var _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.component */ "../kit/components/input-number/input-number.component.ts");
/* harmony import */ var _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../../kit/components/input-number/input-number.directive */ "../kit/components/input-number/input-number.directive.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
























var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_591298722245182546$$SRC_MODULES_COMPONENTS_INPUT_EXAMPLES_6_INDEX_TS_1 = goog.getMsg("{$startTagCode}tuiTable{$closeTagCode} directive from {$startTagCode}@taiga-ui/addon-table{$closeTagCode}", { "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]", "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]" });
    I18N_0 = MSG_EXTERNAL_591298722245182546$$SRC_MODULES_COMPONENTS_INPUT_EXAMPLES_6_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟c469520c7e9da06dc5be994b601cbe1b68d24aed␟591298722245182546:${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:tuiTable${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: directive from ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:@taiga-ui/addon-table${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE:`;
}
I18N_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_0);
function TuiInputExample6_tui_data_list_wrapper_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 12);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.items);
} }
class TuiInputExample6 {
    constructor() {
        this.items = [`Black`, `Gold`, `Silver`];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            sum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](255),
        });
    }
}
TuiInputExample6.ɵfac = function TuiInputExample6_Factory(t) { return new (t || TuiInputExample6)(); };
TuiInputExample6.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputExample6, selectors: [["tui-input-example-6"]], decls: 37, vars: 3, consts: [["tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside", "formGroup"], ["tuiTable", "", 1, "table"], ["tuiTh", "", 1, "name"], ["tuiTh", ""], ["tuiTd", ""], ["formControlName", "name"], ["tuiTextfield", "", "placeholder", "Ivan Ivanov"], ["formControlName", "date"], ["formControlName", "color"], [3, "items", 4, "tuiDataList"], ["formControlName", "quantity"], ["formControlName", "sum", 3, "readOnly"], [3, "items"]], template: function TuiInputExample6_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Sum, $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tui-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tui-input-date", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tui-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TuiInputExample6_tui_data_list_wrapper_30_Template, 1, 1, "tui-data-list-wrapper", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tui-input-count", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tui-input-number", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Sum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_4__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_5__["TuiTextfieldLabelOutsideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _addon_table_components_table_directives_table_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTableDirective"], _addon_table_components_table_th_th_component__WEBPACK_IMPORTED_MODULE_7__["TuiThComponent"], _addon_table_components_table_td_td_component__WEBPACK_IMPORTED_MODULE_8__["TuiTdComponent"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_9__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_10__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_11__["TuiTextfieldComponent"], _kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_12__["TuiInputDateComponent"], _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_13__["TuiInputDateDirective"], _kit_components_select_select_component__WEBPACK_IMPORTED_MODULE_14__["TuiSelectComponent"], _kit_components_select_select_directive__WEBPACK_IMPORTED_MODULE_15__["TuiSelectDirective"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_16__["TuiDataListDirective"], _kit_components_input_count_input_count_component__WEBPACK_IMPORTED_MODULE_17__["TuiInputCountComponent"], _kit_components_input_count_input_count_directive__WEBPACK_IMPORTED_MODULE_18__["TuiInputCountDirective"], _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_19__["TuiInputNumberComponent"], _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_20__["TuiInputNumberDirective"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_21__["TuiDataListWrapperComponent"]], styles: [".table[_ngcontent-%COMP%] {\n  width: 40rem;\n}\n.name[_ngcontent-%COMP%] {\n  width: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC9leGFtcGxlcy82L2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQvZXhhbXBsZXMvNi9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxZQUFBO0FES0o7QUNGQTtFQUNJLFlBQUE7QURJSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQvZXhhbXBsZXMvNi9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLnRhYmxlIHtcbiAgd2lkdGg6IDQwcmVtO1xufVxuLm5hbWUge1xuICB3aWR0aDogMTByZW07XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi50YWJsZSB7XG4gICAgd2lkdGg6IDQwcmVtO1xufVxuXG4ubmFtZSB7XG4gICAgd2lkdGg6IDEwcmVtO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputExample6, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-example-6`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input/examples/7/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/input/examples/7/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiInputExample7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputExample7", function() { return TuiInputExample7; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_custom_content_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-custom-content.directive */ "../core/directives/textfield-controller/textfield-custom-content.directive.ts");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");












function TuiInputExample7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 2);
} }
class TuiInputExample7 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
        ]);
    }
}
TuiInputExample7.ɵfac = function TuiInputExample7_Factory(t) { return new (t || TuiInputExample7)(); };
TuiInputExample7.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputExample7, selectors: [["tui-input-example-7"]], decls: 4, vars: 3, consts: [["tuiHintContent", "Type 5 letters or more", 1, "b-form", 3, "tuiTextfieldCleaner", "tuiTextfieldCustomContent", "formControl"], ["success", ""], ["src", "tuiIconCheckLarge", 1, "success", "tui-space_left-3"]], template: function TuiInputExample7_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hello\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiInputExample7_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldCleaner", true)("tuiTextfieldCustomContent", ctx.control.valid ? _r0 : "")("formControl", ctx.control);
    } }, directives: [_kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_4__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_5__["TuiInputDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_7__["TuiTextfieldCleanerDirective"], _core_directives_textfield_controller_textfield_custom_content_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldCustomContentDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_9__["TuiSvgComponent"]], styles: [".success[_ngcontent-%COMP%] {\n  position: relative;\n  color: var(--tui-success-fill);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC9leGFtcGxlcy83L2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQvZXhhbXBsZXMvNy9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSw4QkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC9leGFtcGxlcy83L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VjY2VzcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiB2YXIoLS10dWktc3VjY2Vzcy1maWxsKTtcbn1cbiIsIi5zdWNjZXNzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogdmFyKC0tdHVpLXN1Y2Nlc3MtZmlsbCk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputExample7, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-example-7`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input/examples/8/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/input/examples/8/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiInputExample8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputExample8", function() { return TuiInputExample8; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _file_loader_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! !file-loader!../../../../../assets/images/avatar.jpg */ "../../node_modules/file-loader/dist/cjs.js!./src/assets/images/avatar.jpg");
/* harmony import */ var _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../cdk/directives/let/let.directive */ "../cdk/directives/let/let.directive.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/data-list.component */ "../core/components/data-list/data-list.component.ts");
/* harmony import */ var _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../../core/components/data-list/option/option.component */ "../core/components/data-list/option/option.component.ts");
/* harmony import */ var _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../kit/components/avatar/avatar.component */ "../kit/components/avatar/avatar.component.ts");


















function TuiInputExample8_tui_input_0_ng_container_2_tui_data_list_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TuiInputExample8_tui_input_0_ng_container_2_tui_data_list_1_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const item_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r6.onClick(item_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-avatar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5)("disabled", item_r5.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("avatarUrl", item_r5.avatarUrl || null)("text", item_r5.toString());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5);
} }
function TuiInputExample8_tui_input_0_ng_container_2_tui_data_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-data-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputExample8_tui_input_0_ng_container_2_tui_data_list_1_button_1_Template, 4, 5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).tuiLet;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r1);
} }
function TuiInputExample8_tui_input_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiInputExample8_tui_input_0_ng_container_2_tui_data_list_1_Template, 2, 1, "tui-data-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function TuiInputExample8_tui_input_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter your name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiInputExample8_tui_input_0_ng_container_2_Template, 2, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r1 = ctx.tuiLet;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r1.length);
} }
class User {
    constructor(firstName, lastName, avatarUrl = null, disabled = false) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.avatarUrl = avatarUrl;
        this.disabled = disabled;
    }
    toString() {
        return `${this.firstName} ${this.lastName}`;
    }
}
const DATA = [
    new User(`Roman`, `Sedov`, `http://marsibarsi.me/images/1x1small.jpg`),
    new User(`Alex`, `Inkin`, _file_loader_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_7__["default"]),
    new User(`Gabriel José`, `de la Concordia «Gabo» García Márquez`),
];
class TuiInputExample8 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``);
        this.firstName = ``;
        this.lastName = ``;
        this.items$ = this.control.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(``), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(value => this.request(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(response => {
            if (response.length === 1 && String(response[0]) === value) {
                this.onClick(response[0]);
                return [];
            }
            else {
                return response;
            }
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(DATA));
    }
    onClick({ lastName, firstName }) {
        this.lastName = lastName;
        this.firstName = firstName;
    }
    // Request imitation
    request(query) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(DATA.filter(item => Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TUI_DEFAULT_MATCHER"])(item, query)));
    }
}
TuiInputExample8.ɵfac = function TuiInputExample8_Factory(t) { return new (t || TuiInputExample8)(); };
TuiInputExample8.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputExample8, selectors: [["tui-input-example-8"]], decls: 5, vars: 5, consts: [["class", "b-form", 3, "formControl", 4, "tuiLet"], [1, "b-form", 3, "formControl"], [4, "ngIf"], [4, "tuiDataList"], ["tuiOption", "", 3, "value", "disabled", "click", 4, "ngFor", "ngForOf"], ["tuiOption", "", 3, "value", "disabled", "click"], ["size", "xs", 1, "avatar", 3, "avatarUrl", "text"], [1, "name"]], template: function TuiInputExample8_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TuiInputExample8_tui_input_0_Template, 3, 2, "tui-input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Parsed on complete match:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiLet", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, ctx.items$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\n", ctx.firstName, " ", ctx.lastName, "\n");
    } }, directives: [_cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_8__["TuiLetDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_9__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_10__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_12__["TuiDataListDirective"], _core_components_data_list_data_list_component__WEBPACK_IMPORTED_MODULE_13__["TuiDataListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _core_components_data_list_option_option_component__WEBPACK_IMPORTED_MODULE_14__["TuiOptionComponent"], _kit_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_15__["TuiAvatarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [".avatar[_ngcontent-%COMP%] {\n  margin: 0 0.5rem 0 0;\n  flex-shrink: 0;\n}\n.name[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex-shrink: 1;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC9leGFtcGxlcy84L2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQvZXhhbXBsZXMvOC9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL21peGlucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxvQkFBQTtFQUNBLGNBQUE7QURLSjtBQ0ZBO0VDMFFJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFRDFRQSxjQUFBO0VBQ0Esa0JBQUE7QURNSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQvZXhhbXBsZXMvOC9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLmF2YXRhciB7XG4gIG1hcmdpbjogMCAwLjVyZW0gMCAwO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5uYW1lIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5hdmF0YXIge1xuICAgIG1hcmdpbjogMCBAc3BhY2UgKiAyIDAgMDtcbiAgICBmbGV4LXNocmluazogMDtcbn1cblxuLm5hbWUge1xuICAgIC50ZXh0LW92ZXJmbG93KCk7XG4gICAgZmxleC1zaHJpbms6IDE7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuIiwiLy8gY2VudGVyaW5nIHdpdGggdHJhbnNsYXRlXG4uY2VudGVyLWxlZnQoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuLmNlbnRlci10b3AoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4uY2VudGVyLWFsbCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vLyBjbGVhcmZpeFxuLmNsZWFyZml4KCkge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbn1cblxuLy8uZnVsbHNpemVcbi5mdWxsc2l6ZShAcG9zaXRpb246IGFic29sdXRlLCBAbW9kZTogaGVpZ2h0KSB7XG4gICAgcG9zaXRpb246IEBwb3NpdGlvbjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgICYgd2hlbiAoQG1vZGUgPSBoZWlnaHQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaW5zZXQpIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG5cbi5jbGVhcmJ0bigpIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uYXV0b2ZpbGwoQG1vZGU6ZGVmYXVsdCkge1xuICAgICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICAgICAgY2FyZXQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGVmYXVsdCkge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsKSBpbnNldCAhaW1wb3J0YW50OyAvLyB0byBvdmVybGF5IG5hdGl2ZSBiYWNrZ3JvdW5kXG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KSBpbnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2xlYXJpbnB1dChAbW9kZTogZGVmYXVsdCkge1xuICAgIC5hdXRvZmlsbChAbW9kZSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGN1cnJlbnRDb2xvcjsgLy8gZm9yIFNhZmFyaVxufVxuXG4udmlzdWFsbHktaGlkZGVuKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcbn1cblxuLy8gY3VzdG9taXplIG5hdGl2ZSBzY3JvbGxcbi5jdXN0b21pemUtc2Nyb2xsKCkge1xuICAgIC8vIGV4Y2x1ZGUgbm9uLXN1cHBvcnRpbmcgYnJvd3NlcnNcbiAgICBAbWVkaWEgYWxsIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSBhbmQgKG1pbi1yZXNvbHV0aW9uOiAwLjAwMWRwY20pIHtcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IDIuNjY3cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItaG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBzaGFkb3dcbi5zaGFkb3coQG1vZGU6IDEpIHtcbiAgICAvLyBEZWZhdWx0XG4gICAgJiB3aGVuIChAbW9kZSA9IDEpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIERyb3Bkb3duXG4gICAgJiB3aGVuIChAbW9kZSA9IDIpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsXG4gICAgJiB3aGVuIChAbW9kZSA9IDMpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxLjEyNXJlbSAxLjg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuNDgpO1xuICAgIH1cblxuICAgIC8vIFNpZGViYXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNCkge1xuICAgICAgICBib3gtc2hhZG93OiAwLjI1cmVtIDAgMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gSG92ZXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMi4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgICYgd2hlbiAoQG1vZGUgPSA2KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsIG1vYmlsZVxuICAgICYgd2hlbiAoQG1vZGUgPSA3KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTFyZW0gMS43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIH1cbn1cblxuLmluc2V0LWJvcmRlcihAZGlyZWN0aW9uOiBib3R0b20sIEBtb2RlOiBub25lKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdHJhbnNpdGlvblxuLnRyYW5zaXRpb24oQHBhcmFtLCBAc3BlZWQ6IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpKSB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHBhcmFtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEBzcGVlZDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cbi8vIGRhc2hlZCBib3JkZXJcbi5kYXNoZWQtYm9yZGVyKEBjb2xvcjogY3VycmVudENvbG9yLCBAYWxpZ25tZW50OiBib3R0b20sIEBzcGFjZTogNCkge1xuICAgIEBzaXplOiB1bml0KEBzcGFjZSwgcHgpO1xuICAgIEBwZXJjZW50YWdlOiAoMTAwJSAvIEBzcGFjZSAqIDIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQGNvbG9yIDAlLCBAY29sb3IgQHBlcmNlbnRhZ2UsIHRyYW5zcGFyZW50IEBwZXJjZW50YWdlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIEBhbGlnbm1lbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBAc2l6ZSAxcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyB0eXBpY2FsIG9wYWNpdHkgcHJvcGVydGllcyBmb3IgaWNvbnNcbi5vcGFjaXR5LWljb24oKSB7XG4gICAgb3BhY2l0eTogMC44O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaG92ZXJhYmxlLXdpdGgtc2hhZG93KCkge1xuICAgIC5zaGFkb3coKTtcbiAgICAudHJhbnNpdGlvbihhbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcblxuICAgICY6aG92ZXIge1xuICAgICAgICAuc2hhZG93KDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLUBzcGFjZSk7XG4gICAgfVxufVxuXG4vLyBncmFkaWVudFxuLmdyYWRpZW50KEBzdGFydC1jb2xvciwgQGVuZC1jb2xvciwgQGFuZ2xlOiA0NWRlZykge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChAYW5nbGUsIEBzdGFydC1jb2xvciAwJSwgQGVuZC1jb2xvciAxMDAlKTtcbn1cblxuLy8gdHlwaWNhbCBwcm9wZXJ0aWVzIGZvciB0ZXh0IG92ZXJmbG93IHdpdGggZWxsaXBzaXNcbi50ZXh0LW92ZXJmbG93KEB0eXBlOiBub3dyYXApIHtcbiAgICB3aGl0ZS1zcGFjZTogQHR5cGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4udGV4dC1vdmVyZmxvdy13aXRoLWZhZGUoQGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSksIEB0cmFuc3BhcmVudENvbG9yOiB0cmFuc3BhcmVudCwgQHdpZHRoOiAxLjg3NXJlbSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiBAd2lkdGg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAdHJhbnNwYXJlbnRDb2xvciAwJSwgQGNvbG9yIDgwJSwgQGNvbG9yIDEwMCUpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuXG4uY3JlYXRlU3RhY2tpbmdDb250ZXh0KCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4vL3NwYWNlc1xuLnR1aS1zcGFjZShAZGlyZWN0aW9uLCBAc2l6ZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGFsbCkge1xuICAgICAgICBtYXJnaW46IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdmVydGljYWwpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gaG9yaXpvbnRhbCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxufVxuXG4uY29udHJhc3QtYmFja2dyb3VuZChAYmFja2dyb3VuZCkge1xuICAgIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiBjb250cmFzdChAYmFja2dyb3VuZCwgIzMzMywgI2ZmZik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQoQGNvbG9yOiAjZmZmKSB7XG4gICAgYmFja2dyb3VuZDogZmFkZShAY29sb3IsIDcwJSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNDM3NXJlbSk7XG59XG5cbi5zY3JvbGxiYXItaGlkZGVuKCkge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIC8qIHN0eWxlbGludC1lbmFibGUqL1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG59XG5cbi8vIGhpZGUgYW4gZWxlbWVudCB2aXN1YWxseSB3aXRob3V0IGhpZGluZyBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG4uc3Itb25seSgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputExample8, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-example-8`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input/examples/9/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/input/examples/9/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiInputExample9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiInputExample9", function() { return TuiInputExample9; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../core/components/primitive-textfield/textfield/textfield.component */ "../core/components/primitive-textfield/textfield/textfield.component.ts");










class TuiInputExample9 {
    constructor() {
        this.value = ``;
    }
}
TuiInputExample9.ɵfac = function TuiInputExample9_Factory(t) { return new (t || TuiInputExample9)(); };
TuiInputExample9.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiInputExample9, selectors: [["tui-input-example-9"]], decls: 3, vars: 2, consts: [["icon", "tuiIconSearchLarge", "iconAlign", "left", "tuiHintContent", "\u0644\u0627 \u064A\u062F\u0639\u0645\u0647 Safari \u0623\u062F\u0646\u0627\u0647 12.1", "tuiHintDirection", "bottom-right", 1, "input", 3, "tuiTextfieldCleaner", "ngModel", "ngModelChange"], ["tuiTextfield", "", "placeholder", "\u0627\u0643\u062A\u0628 \u0627\u0644\u0627\u0633\u062A\u0639\u0644\u0627\u0645 \u0627\u0644\u062E\u0627\u0635 \u0628\u0643"]], template: function TuiInputExample9_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiInputExample9_Template_tui_input_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0628\u062D\u062B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldCleaner", true)("ngModel", ctx.value);
    } }, directives: [_kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_3__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_4__["TuiInputDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_5__["TuiHintControllerDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldCleanerDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _core_components_primitive_textfield_textfield_textfield_component__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldComponent"]], styles: [".input[_ngcontent-%COMP%] {\n  width: 20rem;\n  direction: rtl;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC9leGFtcGxlcy85L2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvaW5wdXQvZXhhbXBsZXMvOS9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC9leGFtcGxlcy85L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQge1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbiIsIi5pbnB1dCB7XG4gIHdpZHRoOiAyMHJlbTtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiInputExample9, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-input-example-9`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/input/input.component.ts":
/*!*********************************************************!*\
  !*** ./src/modules/components/input/input.component.ts ***!
  \*********************************************************/
/*! exports provided: ExampleTuiInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputComponent", function() { return ExampleTuiInputComponent; });
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
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/input/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/input/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/input/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/input/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/components/input/examples/5/index.ts");
/* harmony import */ var _examples_6_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/6/index */ "./src/modules/components/input/examples/6/index.ts");
/* harmony import */ var _examples_7_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/7/index */ "./src/modules/components/input/examples/7/index.ts");
/* harmony import */ var _examples_8_index__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./examples/8/index */ "./src/modules/components/input/examples/8/index.ts");
/* harmony import */ var _examples_9_index__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/9/index */ "./src/modules/components/input/examples/9/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.component */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_type_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-type.directive */ "../core/directives/textfield-controller/textfield-type.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_custom_content_directive__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-custom-content.directive */ "../core/directives/textfield-controller/textfield-custom-content.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-autocomplete.directive */ "../core/directives/textfield-controller/textfield-autocomplete.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_input_mode_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-input-mode.directive */ "../core/directives/textfield-controller/textfield-input-mode.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-size.directive */ "../core/directives/textfield-controller/textfield-size.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-cleaner.directive */ "../core/directives/textfield-controller/textfield-cleaner.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_max_length_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../../core/directives/textfield-controller/textfield-max-length.directive */ "../core/directives/textfield-controller/textfield-max-length.directive.ts");
/* harmony import */ var _core_directives_dropdown_controller_dropdown_controller_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../../../core/directives/dropdown-controller/dropdown-controller.directive */ "../core/directives/dropdown-controller/dropdown-controller.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../../../addon-commerce/components/money/money.component */ "../addon-commerce/components/money/money.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");









































const _c0 = ["justLongText"];
var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1209704458858517185$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__2 = goog.getMsg(" Input\u00A0\u2014 is a single-line textfield. It's not recommended to use it with numbers, because the value type of this component is a string ");
    I18N_1 = MSG_EXTERNAL_1209704458858517185$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__2;
}
else {
    I18N_1 = $localize `:␟ba34c78a5f69b2c5b9fd666dec92a282652da94e␟1209704458858517185: Input — is a single-line textfield. It's not recommended to use it with numbers, because the value type of this component is a string `;
}
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4210017677519690278$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__4 = goog.getMsg("Inputs for other types of data:");
    I18N_3 = MSG_EXTERNAL_4210017677519690278$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟3f64aab9dcba4eea04c9d0333c87985f9252c078␟4210017677519690278:Inputs for other types of data:`;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8758129556954662013$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__6 = goog.getMsg("{$startListItem}{$startLink}{$startTagCode}TextArea{$closeTagCode}{$closeLink} \u2014 for multiline text {$closeListItem}{$startListItem}{$startLink_1}{$startTagCode}InputDate{$closeTagCode}{$closeLink} \u2014 for dates {$closeListItem}{$startListItem}{$startLink_2}{$startTagCode}InputDateRange{$closeTagCode}{$closeLink} \u2014 for a range of dates {$closeListItem}{$startListItem}{$startLink_3}{$startTagCode}InputNumber{$closeTagCode}{$closeLink} \u2014 for number (with measurement postfix) {$closeListItem}{$startListItem}{$startLink_4}{$startTagCode}InputPassword{$closeTagCode}{$closeLink} \u2014 for passwords {$closeListItem}{$startListItem}{$startLink_5}{$startTagCode}InputPhone{$closeTagCode}{$closeLink} \u2014 for phone numbers {$closeListItem}{$startListItem}{$startLink_6}{$startTagCode}InputTag{$closeTagCode}{$closeLink} \u2014 for inputing tags {$closeListItem}{$startListItem}{$startLink_7}{$startTagCode}InputRange{$closeTagCode}{$closeLink} , {$startLink_8}{$startTagCode}InputSlider{$closeTagCode}{$closeLink} \u2014 for accurate number values {$closeListItem}{$startListItem}{$startLink_9}{$startTagCode}Slider{$closeTagCode}{$closeLink} , {$startLink_10}{$startTagCode}Range{$closeTagCode}{$closeLink} \u2014 for not accurate number values {$closeListItem}{$startListItem}{$startLink_11}{$startTagCode}InputCount{$closeTagCode}{$closeLink} \u2014 for integer number of smth {$closeListItem}", { "startListItem": "[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]", "startLink": "\uFFFD#8\uFFFD", "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]", "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]", "closeLink": "[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]", "closeListItem": "[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]", "startLink_1": "\uFFFD#11\uFFFD", "startLink_2": "\uFFFD#14\uFFFD", "startLink_3": "\uFFFD#17\uFFFD", "startLink_4": "\uFFFD#20\uFFFD", "startLink_5": "\uFFFD#23\uFFFD", "startLink_6": "\uFFFD#26\uFFFD", "startLink_7": "\uFFFD#29\uFFFD", "startLink_8": "\uFFFD#31\uFFFD", "startLink_9": "\uFFFD#34\uFFFD", "startLink_10": "\uFFFD#36\uFFFD", "startLink_11": "\uFFFD#39\uFFFD" });
    I18N_5 = MSG_EXTERNAL_8758129556954662013$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟97df0ee7b5d7cae9aef5869c5745456ee8e695b5␟8758129556954662013:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#8\uFFFD"}:START_LINK:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:TextArea${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for multiline text ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#11\uFFFD"}:START_LINK_1:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputDate${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for dates ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#14\uFFFD"}:START_LINK_2:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputDateRange${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for a range of dates ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#17\uFFFD"}:START_LINK_3:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputNumber${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for number (with measurement postfix) ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#20\uFFFD"}:START_LINK_4:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputPassword${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for passwords ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#23\uFFFD"}:START_LINK_5:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputPhone${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for phone numbers ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#26\uFFFD"}:START_LINK_6:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputTag${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for inputing tags ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#29\uFFFD"}:START_LINK_7:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputRange${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: , ${"\uFFFD#31\uFFFD"}:START_LINK_8:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputSlider${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for accurate number values ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#34\uFFFD"}:START_LINK_9:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:Slider${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: , ${"\uFFFD#36\uFFFD"}:START_LINK_10:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:Range${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for not accurate number values ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#7\uFFFD|\uFFFD#10\uFFFD|\uFFFD#13\uFFFD|\uFFFD#16\uFFFD|\uFFFD#19\uFFFD|\uFFFD#22\uFFFD|\uFFFD#25\uFFFD|\uFFFD#28\uFFFD|\uFFFD#33\uFFFD|\uFFFD#38\uFFFD]"}:START_LIST_ITEM:${"\uFFFD#39\uFFFD"}:START_LINK_11:${"[\uFFFD#9\uFFFD|\uFFFD#12\uFFFD|\uFFFD#15\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#24\uFFFD|\uFFFD#27\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#35\uFFFD|\uFFFD#37\uFFFD|\uFFFD#40\uFFFD]"}:START_TAG_CODE:InputCount${"[\uFFFD/#9\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#37\uFFFD|\uFFFD/#40\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD]"}:CLOSE_LINK: — for integer number of smth ${"[\uFFFD/#7\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD]"}:CLOSE_LIST_ITEM:`;
}
I18N_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_5);
var I18N_7;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__8 = goog.getMsg("Basic");
    I18N_7 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__8;
}
else {
    I18N_7 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c9 = ["heading", I18N_7];
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5960739619447908905$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__11 = goog.getMsg("sizes");
    I18N_10 = MSG_EXTERNAL_5960739619447908905$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__11;
}
else {
    I18N_10 = $localize `:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
}
const _c12 = ["heading", I18N_10];
var I18N_13;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3729048585447425716$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__14 = goog.getMsg("Mask");
    I18N_13 = MSG_EXTERNAL_3729048585447425716$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__14;
}
else {
    I18N_13 = $localize `:␟977b4e5f8a71ea3d77cbf0bbbfb7955dc31bb109␟3729048585447425716:Mask`;
}
const _c15 = ["heading", I18N_13];
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6507738516307254402$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__17 = goog.getMsg("Autocomplete");
    I18N_16 = MSG_EXTERNAL_6507738516307254402$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__17;
}
else {
    I18N_16 = $localize `:␟fba3e700d434667e68ec31f38b2fed451955b6a3␟6507738516307254402:Autocomplete`;
}
const _c18 = ["heading", I18N_16];
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1387438809102966566$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__20 = goog.getMsg("Modes");
    I18N_19 = MSG_EXTERNAL_1387438809102966566$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__20;
}
else {
    I18N_19 = $localize `:␟84179be0a765ac2da1a2bcf6b5b476a4e9253aab␟1387438809102966566:Modes`;
}
const _c21 = ["heading", I18N_19];
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1358239534403218079$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__23 = goog.getMsg("Table");
    I18N_22 = MSG_EXTERNAL_1358239534403218079$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__23;
}
else {
    I18N_22 = $localize `:␟5c8ea0443990792280e53ee2cc87e577940c95cf␟1358239534403218079:Table`;
}
const _c24 = ["heading", I18N_22];
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9041078670559726454$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__26 = goog.getMsg("Check");
    I18N_25 = MSG_EXTERNAL_9041078670559726454$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__26;
}
else {
    I18N_25 = $localize `:␟ad817cf4269e54829d82b4224d36766ad5f0b3e6␟9041078670559726454:Check`;
}
const _c27 = ["heading", I18N_25];
function ExampleTuiInputComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](3, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](6, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tui-doc-example", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](42, _c9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tui-notification", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " If you need to set some attributes or listen to events on native ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "input");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " , you can put it inside with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Textfield");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " directive as shown below ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "tui-input-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tui-doc-example", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](53, _c12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "tui-input-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tui-doc-example", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](56, _c15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "tui-input-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tui-doc-example", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](59, _c18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "tui-input-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tui-doc-example", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](62, _c21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "tui-input-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tui-doc-example", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](65, _c24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "tui-input-example-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tui-doc-example", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](68, _c27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "tui-input-example-7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tui-doc-example", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "tui-input-example-8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tui-doc-example", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "tui-input-example-9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example9);
} }
function ExampleTuiInputComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " placeholder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "strong text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.control)("focusable", ctx_r5.focusable)("pseudoInvalid", ctx_r5.pseudoInvalid)("pseudoFocused", ctx_r5.pseudoFocused)("pseudoHovered", ctx_r5.pseudoHovered)("icon", ctx_r5.icon)("iconAlign", ctx_r5.iconAlign)("readOnly", ctx_r5.readOnly)("tuiTextfieldType", ctx_r5.type)("tuiTextfieldExampleText", ctx_r5.exampleText)("tuiTextfieldLabelOutside", ctx_r5.labelOutside)("tuiTextfieldCustomContent", ctx_r5.customContent)("tuiTextfieldAutocomplete", ctx_r5.autocomplete)("tuiTextfieldInputMode", ctx_r5.inputMode)("tuiTextfieldSize", ctx_r5.size)("tuiTextfieldCleaner", ctx_r5.cleaner)("tuiTextfieldMaxLength", ctx_r5.maxLength)("tuiDropdownAlign", ctx_r5.dropdownAlign)("tuiDropdownDirection", ctx_r5.dropdownDirection)("tuiDropdownLimitWidth", ctx_r5.dropdownLimitWidth)("tuiDropdownMinHeight", ctx_r5.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r5.dropdownMaxHeight)("tuiHintContent", ctx_r5.hintContent)("tuiHintDirection", ctx_r5.hintDirection)("tuiHintMode", ctx_r5.hintMode);
} }
function ExampleTuiInputComponent_ng_template_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-money", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r11.balance);
} }
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS___29 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_28 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS___29;
}
else {
    I18N_28 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiInputComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_30;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4275468601899207994$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS___31 = goog.getMsg(" An icon. It can be stringified svg or a name of icon registered in {$startLink}{$startTagCode}SvgService{$closeTagCode}{$closeLink}", { "startLink": "\uFFFD#1\uFFFD", "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD", "closeLink": "\uFFFD/#1\uFFFD" });
    I18N_30 = MSG_EXTERNAL_4275468601899207994$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS___31;
}
else {
    I18N_30 = $localize `:␟acedafda2219bad0373461a93b48a42684d1c408␟4275468601899207994: An icon. It can be stringified svg or a name of icon registered in ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:SvgService${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:`;
}
function ExampleTuiInputComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_32;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_561630626973828969$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS___33 = goog.getMsg(" Icon align ");
    I18N_32 = MSG_EXTERNAL_561630626973828969$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS___33;
}
else {
    I18N_32 = $localize `:␟ad56fc4e1a9650890c372aa93c2c426f8467baab␟561630626973828969: Icon align `;
}
function ExampleTuiInputComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_32);
} }
function ExampleTuiInputComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputComponent_ng_template_2_ng_template_1_Template, 4, 25, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputComponent_ng_template_2_ng_template_2_Template, 4, 2, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiInputComponent_ng_template_2_ng_template_5_Template, 2, 0, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiInputComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.icon = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiInputComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiInputComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.iconAlign = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "inherited-documentation", 31);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.iconVariants)("documentationPropertyValue", ctx_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.iconAlignVariants)("documentationPropertyValue", ctx_r1.iconAlign);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropdown", true);
} }
var I18N_34;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2238425626124076884$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__35 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiInputModule{$closeTagCode} in the same module where you want to use our component: ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_34 = MSG_EXTERNAL_2238425626124076884$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__35;
}
else {
    I18N_34 = $localize `:␟b87ebd9a23ff23ca85a00e40c87f9f20c5aac1fa␟2238425626124076884: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
}
var I18N_36;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__37 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", { "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]", "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]" });
    I18N_36 = MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__37;
}
else {
    I18N_36 = $localize `:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
}
I18N_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_36);
var I18N_38;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__39 = goog.getMsg("Add to the template:");
    I18N_38 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_INPUT_INPUT_COMPONENT_TS__39;
}
else {
    I18N_38 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiInputComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](8, I18N_36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-doc-code", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, I18N_38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "tui-doc-code", 40);
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
} }
function ExampleTuiInputComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "LongTextContent");
} }
const LONG_TEXT_TEMPLATE = `<span>LongTextContent</span>`;
class ExampleTuiInputComponent extends _abstract_control__WEBPACK_IMPORTED_MODULE_3__["AbstractExampleTuiControl"] {
    constructor() {
        super(...arguments);
        this._customContentSelected = null;
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/import/insert-template.md"));
        this.exampleForm = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-declare-form-md */ "!!raw-loader!-examples-import-declare-form-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/declare-form.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/import/declare-form.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/1/index.html")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/2/index.html")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/3/index.html")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/4/index.less")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/5/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-less */ "!!raw-loader!-examples-5-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/5/index.less")),
        };
        this.example6 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-ts */ "!!raw-loader!-examples-6-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/6/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-html */ "!!raw-loader!-examples-6-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/6/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-6-index-less */ "!!raw-loader!-examples-6-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/6/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/6/index.less")),
        };
        this.example7 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-7-index-ts */ "!!raw-loader!-examples-7-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/7/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-7-index-html */ "!!raw-loader!-examples-7-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/7/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-7-index-less */ "!!raw-loader!-examples-7-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/7/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/7/index.less")),
        };
        this.example8 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-8-index-ts */ "!!raw-loader!-examples-8-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/8/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/8/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-8-index-html */ "!!raw-loader!-examples-8-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/8/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/8/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-8-index-less */ "!!raw-loader!-examples-8-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/8/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/8/index.less")),
        };
        this.example9 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-9-index-ts */ "!!raw-loader!-examples-9-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/9/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/9/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-9-index-html */ "!!raw-loader!-examples-9-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/9/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/9/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-9-index-less */ "!!raw-loader!-examples-9-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/9/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/input/examples/9/index.less")),
        };
        this.iconVariants = [null, `tuiIconSearch`, `tuiIconCalendar`];
        this.icon = this.iconVariants[0];
        this.iconAlignVariants = [`left`, `right`];
        this.iconAlign = this.iconAlignVariants[1];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`111`, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.customContentVariants = [
            `tuiIconSearchLarge`,
            `tuiIconCalendarLarge`,
            `tuiIconVisaMono`,
            `tuiIconMastercardMono`,
            LONG_TEXT_TEMPLATE,
        ];
    }
    get customContentSelected() {
        return this._customContentSelected === LONG_TEXT_TEMPLATE
            ? this.longTextRef
            : this._customContentSelected;
    }
    set customContentSelected(newValue) {
        this._customContentSelected = newValue;
    }
}
ExampleTuiInputComponent.ɵfac = function ExampleTuiInputComponent_Factory(t) { return ɵExampleTuiInputComponent_BaseFactory(t || ExampleTuiInputComponent); };
ExampleTuiInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiInputComponent, selectors: [["example-tui-input"]], viewQuery: function ExampleTuiInputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.longTextRef = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputComponent),
            },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 0, consts: [["header", "Input", "package", "KIT", "type", "components"], ["pageTab", ""], ["justLongText", ""], [1, "tui-space_bottom-3"], ["tuiLink", "", "routerLink", "/components/text-area"], ["tuiLink", "", "routerLink", "/components/input-date"], ["tuiLink", "", "routerLink", "/components/input-date-range"], ["tuiLink", "", "routerLink", "/components/input-number"], ["tuiLink", "", "routerLink", "/components/input-password"], ["tuiLink", "", "routerLink", "/components/input-phone"], ["tuiLink", "", "routerLink", "/components/input-tag"], ["tuiLink", "", "routerLink", "/components/input-range"], ["tuiLink", "", "routerLink", "/components/input-slider"], ["tuiLink", "", "routerLink", "/components/slider"], ["tuiLink", "", "routerLink", "/components/range"], ["tuiLink", "", "routerLink", "/components/input-count"], ["id", "base", 3, "content", 6, "heading"], [1, "tui-space_bottom-4", "b-form"], ["id", "sizes", 3, "content", 6, "heading"], ["id", "mask", 3, "content", 6, "heading"], ["id", "autocomplete", 3, "content", 6, "heading"], ["id", "modes", 3, "content", 6, "heading"], ["id", "table", 3, "content", 6, "heading"], ["id", "success", "description", "A check mark by success validation", 3, "content", 6, "heading"], ["id", "datalist", "heading", "DataList", 3, "content"], ["id", "rtl", "heading", "Direction: RTL", 3, "content"], [3, "control"], ["itemContent", ""], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "icon", "documentationPropertyMode", "input", "documentationPropertyType", "string | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "iconAlign", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHorizontalDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "dropdown"], [3, "formControl", "focusable", "pseudoInvalid", "pseudoFocused", "pseudoHovered", "icon", "iconAlign", "readOnly", "tuiTextfieldType", "tuiTextfieldExampleText", "tuiTextfieldLabelOutside", "tuiTextfieldCustomContent", "tuiTextfieldAutocomplete", "tuiTextfieldInputMode", "tuiTextfieldSize", "tuiTextfieldCleaner", "tuiTextfieldMaxLength", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "tuiHintContent", "tuiHintDirection", "tuiHintMode"], [1, "account"], [1, "name"], [3, "value"], ["tuiLink", "", "routerLink", "/services/svg-service"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiInputComponent_ng_template_1_Template, 74, 9, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiInputComponent_ng_template_2_Template, 9, 7, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiInputComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiInputComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_5__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageTabConnectorDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_7__["TuiLinkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_9__["TuiDocExampleComponent"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_10__["TuiNotificationComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_11__["TuiInputExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_12__["TuiInputExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_13__["TuiInputExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_14__["TuiInputExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_15__["TuiInputExample5"], _examples_6_index__WEBPACK_IMPORTED_MODULE_16__["TuiInputExample6"], _examples_7_index__WEBPACK_IMPORTED_MODULE_17__["TuiInputExample7"], _examples_8_index__WEBPACK_IMPORTED_MODULE_18__["TuiInputExample8"], _examples_9_index__WEBPACK_IMPORTED_MODULE_19__["TuiInputExample9"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_20__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_21__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_22__["TuiDocDocumentationPropertyConnectorDirective"], _abstract_inherited_documentation_inherited_documentation_component__WEBPACK_IMPORTED_MODULE_23__["InheritedDocumentationComponent"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_24__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_25__["TuiInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_directives_textfield_controller_textfield_type_directive__WEBPACK_IMPORTED_MODULE_26__["TuiTextfieldTypeDirective"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_27__["TuiTextfieldExampleTextDirective"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_28__["TuiTextfieldLabelOutsideDirective"], _core_directives_textfield_controller_textfield_custom_content_directive__WEBPACK_IMPORTED_MODULE_29__["TuiTextfieldCustomContentDirective"], _core_directives_textfield_controller_textfield_autocomplete_directive__WEBPACK_IMPORTED_MODULE_30__["TuiTextfieldAutocompleteDirective"], _core_directives_textfield_controller_textfield_input_mode_directive__WEBPACK_IMPORTED_MODULE_31__["TuiTextfieldInputModeDirective"], _core_directives_textfield_controller_textfield_size_directive__WEBPACK_IMPORTED_MODULE_32__["TuiTextfieldSizeDirective"], _core_directives_textfield_controller_textfield_cleaner_directive__WEBPACK_IMPORTED_MODULE_33__["TuiTextfieldCleanerDirective"], _core_directives_textfield_controller_textfield_max_length_directive__WEBPACK_IMPORTED_MODULE_34__["TuiTextfieldMaxLengthDirective"], _core_directives_dropdown_controller_dropdown_controller_directive__WEBPACK_IMPORTED_MODULE_35__["TuiDropdownControllerDirective"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_36__["TuiHintControllerDirective"], _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_37__["TuiMoneyComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_38__["TuiDocCodeComponent"]], styles: [".account[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 3.5rem;\n  padding: 0.5rem 0;\n  box-sizing: border-box;\n}\n.name[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5zdHlsZS5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0L2lucHV0LnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0NKO0FERUE7RUFDSSxZQUFBO0FDQUoiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jb21wb25lbnRzL2lucHV0L2lucHV0LnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMy41cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5uYW1lIHtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG4iLCIuYWNjb3VudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMy41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5uYW1lIHtcbiAgb3BhY2l0eTogMC43O1xufVxuIl19 */"], changeDetection: 0 });
const ɵExampleTuiInputComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ExampleTuiInputComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-input`,
                templateUrl: `./input.template.html`,
                styleUrls: [`./input.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                providers: [
                    {
                        provide: _abstract_inherited_documentation_abstract_props_accessor__WEBPACK_IMPORTED_MODULE_4__["ABSTRACT_PROPS_ACCESSOR"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => ExampleTuiInputComponent),
                    },
                ],
            }]
    }], null, { longTextRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [`justLongText`, { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/modules/components/input/input.module.ts":
/*!******************************************************!*\
  !*** ./src/modules/components/input/input.module.ts ***!
  \******************************************************/
/*! exports provided: ExampleTuiInputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiInputModule", function() { return ExampleTuiInputModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-table */ "../addon-table/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-text-mask */ "../../node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../abstract/inherited-documentation/inherited-documentation.module */ "./src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/input/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/input/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/input/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/input/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/components/input/examples/5/index.ts");
/* harmony import */ var _examples_6__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./examples/6 */ "./src/modules/components/input/examples/6/index.ts");
/* harmony import */ var _examples_7__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./examples/7 */ "./src/modules/components/input/examples/7/index.ts");
/* harmony import */ var _examples_8__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./examples/8 */ "./src/modules/components/input/examples/8/index.ts");
/* harmony import */ var _examples_9__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./examples/9 */ "./src/modules/components/input/examples/9/index.ts");
/* harmony import */ var _input_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./input.component */ "./src/modules/components/input/input.component.ts");

























class ExampleTuiInputModule {
}
ExampleTuiInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiInputModule });
ExampleTuiInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiInputModule_Factory(t) { return new (t || ExampleTuiInputModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_12__["InheritedDocumentationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiInputModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiInputNumberModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiInputCountModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiSelectModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiGroupModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__["TuiMapperPipeModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiLinkModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiModeModule"],
            _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_6__["TuiTableModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiInputDateModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiNotificationModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__["TuiRepeatTimesModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiSvgModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiRadioListModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiButtonModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiInputCardModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiAvatarModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiPrimitiveTextfieldModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiHintControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiDropdownControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiDataListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiDataListWrapperModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__["TuiLetModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_10__["PolymorpheusModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_input_component__WEBPACK_IMPORTED_MODULE_22__["ExampleTuiInputComponent"])),
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__["TextMaskModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiInputModule, { declarations: [_input_component__WEBPACK_IMPORTED_MODULE_22__["ExampleTuiInputComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_13__["TuiInputExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_14__["TuiInputExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_15__["TuiInputExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_16__["TuiInputExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_17__["TuiInputExample5"],
        _examples_6__WEBPACK_IMPORTED_MODULE_18__["TuiInputExample6"],
        _examples_7__WEBPACK_IMPORTED_MODULE_19__["TuiInputExample7"],
        _examples_8__WEBPACK_IMPORTED_MODULE_20__["TuiInputExample8"],
        _examples_9__WEBPACK_IMPORTED_MODULE_21__["TuiInputExample9"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_12__["InheritedDocumentationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiInputModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiInputNumberModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiInputCountModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiSelectModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiGroupModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__["TuiMapperPipeModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiLinkModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiModeModule"],
        _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_6__["TuiTableModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiInputDateModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiNotificationModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__["TuiRepeatTimesModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiSvgModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiRadioListModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiButtonModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiInputCardModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiAvatarModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiPrimitiveTextfieldModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiHintControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiDropdownControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiDataListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiDataListWrapperModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__["TuiLetModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_10__["PolymorpheusModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__["TextMaskModule"]], exports: [_input_component__WEBPACK_IMPORTED_MODULE_22__["ExampleTuiInputComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                    _abstract_inherited_documentation_inherited_documentation_module__WEBPACK_IMPORTED_MODULE_12__["InheritedDocumentationModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiInputModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiInputNumberModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiInputCountModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiSelectModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiGroupModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__["TuiMapperPipeModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiLinkModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiModeModule"],
                    _taiga_ui_addon_table__WEBPACK_IMPORTED_MODULE_6__["TuiTableModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiInputDateModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiNotificationModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__["TuiRepeatTimesModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiSvgModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiRadioListModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiButtonModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiInputCardModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiAvatarModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiPrimitiveTextfieldModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiHintControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiDropdownControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_8__["TuiDataListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_9__["TuiDataListWrapperModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_7__["TuiLetModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_10__["PolymorpheusModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_input_component__WEBPACK_IMPORTED_MODULE_22__["ExampleTuiInputComponent"])),
                    angular2_text_mask__WEBPACK_IMPORTED_MODULE_11__["TextMaskModule"],
                ],
                declarations: [
                    _input_component__WEBPACK_IMPORTED_MODULE_22__["ExampleTuiInputComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_13__["TuiInputExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_14__["TuiInputExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_15__["TuiInputExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_16__["TuiInputExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_17__["TuiInputExample5"],
                    _examples_6__WEBPACK_IMPORTED_MODULE_18__["TuiInputExample6"],
                    _examples_7__WEBPACK_IMPORTED_MODULE_19__["TuiInputExample7"],
                    _examples_8__WEBPACK_IMPORTED_MODULE_20__["TuiInputExample8"],
                    _examples_9__WEBPACK_IMPORTED_MODULE_21__["TuiInputExample9"],
                ],
                exports: [_input_component__WEBPACK_IMPORTED_MODULE_22__["ExampleTuiInputComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-input-input-module.js.map