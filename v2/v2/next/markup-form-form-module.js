(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["markup-form-form-module"],{

/***/ "./src/modules/markup/form/example/index.ts":
/*!**************************************************!*\
  !*** ./src/modules/markup/form/example/index.ts ***!
  \**************************************************/
/*! exports provided: TuiExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiExample", function() { return TuiExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _kit_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../kit/components/stepper/stepper.component */ "../kit/components/stepper/stepper.component.ts");
/* harmony import */ var _kit_components_stepper_step_step_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../kit/components/stepper/step/step.component */ "../kit/components/stepper/step/step.component.ts");
/* harmony import */ var _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../kit/components/input/input.component */ "../kit/components/input/input.component.ts");
/* harmony import */ var _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../kit/components/input/input.directive */ "../kit/components/input/input.directive.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../core/directives/textfield-controller/textfield-example-text.directive */ "../core/directives/textfield-controller/textfield-example-text.directive.ts");
/* harmony import */ var _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../core/directives/hint-controller/hint-controller.directive */ "../core/directives/hint-controller/hint-controller.directive.ts");
/* harmony import */ var _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../core/components/error/error.component */ "../core/components/error/error.component.ts");
/* harmony import */ var _kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../kit/components/input-date/input-date.component */ "../kit/components/input-date/input-date.component.ts");
/* harmony import */ var _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../kit/components/input-date/input-date.directive */ "../kit/components/input-date/input-date.directive.ts");
/* harmony import */ var _kit_components_input_password_input_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../kit/components/input-password/input-password.component */ "../kit/components/input-password/input-password.component.ts");
/* harmony import */ var _kit_components_input_password_input_password_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../kit/components/input-password/input-password.directive */ "../kit/components/input-password/input-password.directive.ts");
/* harmony import */ var _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../kit/components/input-number/input-number.component */ "../kit/components/input-number/input-number.component.ts");
/* harmony import */ var _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../kit/components/input-number/input-number.directive */ "../kit/components/input-number/input-number.directive.ts");
/* harmony import */ var _kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../kit/components/input-slider/input-slider.component */ "../kit/components/input-slider/input-slider.component.ts");
/* harmony import */ var _kit_components_select_select_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../kit/components/select/select.component */ "../kit/components/select/select.component.ts");
/* harmony import */ var _kit_components_select_select_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../../kit/components/select/select.directive */ "../kit/components/select/select.directive.ts");
/* harmony import */ var _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../core/components/data-list/data-list.directive */ "../core/components/data-list/data-list.directive.ts");
/* harmony import */ var _kit_components_input_phone_input_phone_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../../kit/components/input-phone/input-phone.component */ "../kit/components/input-phone/input-phone.component.ts");
/* harmony import */ var _kit_components_input_phone_input_phone_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../../kit/components/input-phone/input-phone.directive */ "../kit/components/input-phone/input-phone.directive.ts");
/* harmony import */ var _core_components_group_group_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../../core/components/group/group.directive */ "../core/components/group/group.directive.ts");
/* harmony import */ var _kit_components_radio_block_radio_block_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../../kit/components/radio-block/radio-block.component */ "../kit/components/radio-block/radio-block.component.ts");
/* harmony import */ var _kit_components_input_time_input_time_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../../../kit/components/input-time/input-time.component */ "../kit/components/input-time/input-time.component.ts");
/* harmony import */ var _kit_components_checkbox_labeled_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../../kit/components/checkbox-labeled/checkbox-labeled.component */ "../kit/components/checkbox-labeled/checkbox-labeled.component.ts");
/* harmony import */ var _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../../core/components/label/label.component */ "../core/components/label/label.component.ts");
/* harmony import */ var _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../../core/directives/textfield-controller/textfield-label-outside.directive */ "../core/directives/textfield-controller/textfield-label-outside.directive.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../../core/components/button/button.component */ "../core/components/button/button.component.ts");
/* harmony import */ var _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../../kit/components/data-list-wrapper/data-list-wrapper.component */ "../kit/components/data-list-wrapper/data-list-wrapper.component.ts");
/* harmony import */ var _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../../../addon-commerce/components/money/money.component */ "../addon-commerce/components/money/money.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../../../kit/pipes/field-error/field-error-pipe */ "../kit/pipes/field-error/field-error-pipe.ts");
/* harmony import */ var _addon_commerce_pipes_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../../../../addon-commerce/pipes/currency/currency.pipe */ "../addon-commerce/pipes/currency/currency.pipe.ts");





































function TuiExample_tui_data_list_wrapper_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 56);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.persons);
} }
function TuiExample_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", data_r7.firstName, " ", data_r7.lastName, "");
} }
function TuiExample_tui_data_list_wrapper_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 58);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r3.accounts)("itemContent", _r5);
} }
function TuiExample_tui_data_list_wrapper_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-data-list-wrapper", 58);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r4.accounts)("itemContent", _r5);
} }
function TuiExample_ng_template_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-money", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", account_r8.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", account_r8.amount);
} }
const _c0 = function () { return []; };
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
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
}
class TuiExample {
    constructor() {
        this.svgIcons = {
            common: `https://ng-web-apis.github.io/dist/assets/images/common.svg`,
            universal: `https://ng-web-apis.github.io/dist/assets/images/universal.svg`,
            intersection: `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`,
            mutation: `https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg`,
        };
        this.persons = [new User(`Roman`, `Sedov`), new User(`Alex`, `Inkin`)];
        this.pluralize = [`₽`, `₽`, `₽`];
        this.accounts = [
            new Account(`1`, `Common`, 24876.55, "RUB" /* Ruble */, this.svgIcons.common),
            new Account(`2`, `Universal`, 335, "USD" /* Dollar */, this.svgIcons.universal),
            new Account(`3`, `Intersection`, 10000, "EUR" /* Euro */, this.svgIcons.intersection),
            new Account(`4`, `Mutation`, 100, "GBP" /* Pound */, this.svgIcons.mutation),
        ];
        this.testForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nameValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            textValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            passwordValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            phoneValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](``, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            moneyValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`100`, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            periodValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"](2017, 2, 15), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            timeValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiTime"](12, 30), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            personValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.persons[0]),
            quantityValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            radioValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](`with-commission`),
            accountWherefrom: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            accountWhere: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            checkboxValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            osnoValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            usnValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            eshnValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            envdValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            usn2Value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            patentValue: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
        });
    }
}
TuiExample.ɵfac = function TuiExample_Factory(t) { return new (t || TuiExample)(); };
TuiExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiExample, selectors: [["tui-form-example-1"]], decls: 118, vars: 62, consts: [[1, "tui-container"], [1, "stepper"], [3, "activeItemIndex"], ["tuiStep", ""], ["tuiStep", "", 3, "disabled"], [3, "formGroup"], [1, "tui-row", "tui-row_sme"], [1, "tui-col_8"], [1, "tui-form__header", "tui-form__header_margin-top_none"], [1, "tui-form__row"], ["tuiTextfieldExampleText", "Field placeholder", "formControlName", "nameValue", "tuiHintContent", "A tooltip"], [1, "tui-required"], ["formControlName", "nameValue", 3, "error"], ["tuiTextfieldExampleText", "Placeholder", "formControlName", "periodValue"], ["formControlName", "periodValue", 3, "error"], [1, "tui-form__row", "tui-form__row_multi-fields"], [1, "tui-form__multi-field"], ["formControlName", "passwordValue"], ["formControlName", "passwordValue", 3, "error"], ["formControlName", "moneyValue", 3, "postfix"], ["formControlName", "moneyValue", 3, "error"], ["formControlName", "quantityValue", 3, "min", "max", "segments", "pluralize", "segmentsPluralize"], [1, "tui-form__field-note"], ["formControlName", "quantityValue", 3, "error"], ["formControlName", "personValue", 3, "valueContent"], [3, "items", 4, "tuiDataList"], ["personValueContent", ""], ["formControlName", "personValue", 3, "error"], ["formControlName", "phoneValue"], ["formControlName", "phoneValue", 3, "error"], [1, "tui-form__header"], ["tuiGroup", "", 1, "tui-form__row", 3, "adaptive", "collapsed"], ["contentAlign", "right", "formControlName", "radioValue", "item", "with-commission", "size", "l"], ["contentAlign", "right", "formControlName", "radioValue", "item", "without-commission", "size", "l"], [1, "tui-form__row", "tui-form__row_half-width"], ["formControlName", "timeValue"], [1, "tui-form__row", "tui-form__row_checkboxes"], ["formControlName", "osnoValue", "size", "l", 1, "tui-form__checkbox"], ["formControlName", "usnValue", "size", "l", 1, "tui-form__checkbox"], ["formControlName", "eshnValue", "size", "l", 1, "tui-form__checkbox"], ["formControlName", "envdValue", "size", "l", 1, "tui-form__checkbox"], ["formControlName", "usn2Value", "size", "l", 1, "tui-form__checkbox"], ["formControlName", "patentValue", "size", "l", 1, "tui-form__checkbox"], [1, "tui-form__header", "tui-form__header_margin-bottom_small"], ["tuiLabel", "", "label", "From"], ["formControlName", "accountWherefrom", 1, "accounts-select", 3, "tuiTextfieldLabelOutside", "valueContent"], [3, "items", "itemContent", 4, "tuiDataList"], ["tuiLabel", "", "label", "To"], ["formControlName", "accountWhere", 1, "accounts-select", 3, "tuiTextfieldLabelOutside", "valueContent"], ["tuiTextfieldExampleText", "Placeholder", "formControlName", "textValue", "tuiHintContent", "A tooltip"], [1, "tui-form__field-checkbox"], ["formControlName", "checkboxValue", "size", "l"], [1, "tui-form__buttons"], ["tuiButton", "", "size", "l", "type", "submit", 1, "tui-form__button"], ["tuiButton", "", "type", "button", "appearance", "flat", "size", "l", 1, "tui-form__button"], ["accountContent", ""], [3, "items"], [1, "uppercase-name"], [3, "items", "itemContent"], [1, "account"], [3, "value"]], template: function TuiExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-stepper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Second step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Third step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Fourth step ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "A header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tui-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Textfield ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "tui-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tui-input-date", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Input date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "tui-error", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tui-input-password", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Input password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "tui-error", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tui-input-number", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "tuiCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Input money ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "tui-error", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tui-input-slider", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Some slider ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Some additional text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "tui-error", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tui-select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Choose a person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TuiExample_tui_data_list_wrapper_56_Template, 1, 1, "tui-data-list-wrapper", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, TuiExample_ng_template_57_Template, 2, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "tui-error", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tui-input-phone", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Input phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "tui-error", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "tuiFieldError");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tui-radio-block", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " One option ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tui-radio-block", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " An alternative one ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "tui-input-time", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Input time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "tui-checkbox-labeled", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " First option ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "tui-checkbox-labeled", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Other option ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tui-checkbox-labeled", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Cool option ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tui-checkbox-labeled", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Your personal option ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tui-checkbox-labeled", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Doubtful option ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "tui-checkbox-labeled", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " One more value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "tui-select", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Choose an account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, TuiExample_tui_data_list_wrapper_97_Template, 1, 2, "tui-data-list-wrapper", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "tui-select", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Choose an account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, TuiExample_tui_data_list_wrapper_102_Template, 1, 2, "tui-data-list-wrapper", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h3", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tui-input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Textfield ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tui-checkbox-labeled", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Try this ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, TuiExample_ng_template_116_Template, 3, 2, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeItemIndex", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](55, _c0))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](56, _c0))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c0))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postfix", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 37, "RUB"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](58, _c0))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 50000)("max", 3000000)("segments", 1)("pluralize", ctx.pluralize)("segmentsPluralize", ctx.pluralize);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](59, _c0))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("valueContent", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 47, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](60, _c0))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 51, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 53, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](61, _c0))));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("adaptive", true)("collapsed", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("valueContent", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tuiTextfieldLabelOutside", true)("valueContent", _r5);
    } }, directives: [_kit_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_4__["TuiStepperComponent"], _kit_components_stepper_step_step_component__WEBPACK_IMPORTED_MODULE_5__["TuiStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _kit_components_input_input_component__WEBPACK_IMPORTED_MODULE_6__["TuiInputComponent"], _kit_components_input_input_directive__WEBPACK_IMPORTED_MODULE_7__["TuiInputDirective"], _core_directives_textfield_controller_textfield_example_text_directive__WEBPACK_IMPORTED_MODULE_8__["TuiTextfieldExampleTextDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _core_directives_hint_controller_hint_controller_directive__WEBPACK_IMPORTED_MODULE_9__["TuiHintControllerDirective"], _core_components_error_error_component__WEBPACK_IMPORTED_MODULE_10__["TuiErrorComponent"], _kit_components_input_date_input_date_component__WEBPACK_IMPORTED_MODULE_11__["TuiInputDateComponent"], _kit_components_input_date_input_date_directive__WEBPACK_IMPORTED_MODULE_12__["TuiInputDateDirective"], _kit_components_input_password_input_password_component__WEBPACK_IMPORTED_MODULE_13__["TuiInputPasswordComponent"], _kit_components_input_password_input_password_directive__WEBPACK_IMPORTED_MODULE_14__["TuiInputPasswordDirective"], _kit_components_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_15__["TuiInputNumberComponent"], _kit_components_input_number_input_number_directive__WEBPACK_IMPORTED_MODULE_16__["TuiInputNumberDirective"], _kit_components_input_slider_input_slider_component__WEBPACK_IMPORTED_MODULE_17__["TuiInputSliderComponent"], _kit_components_select_select_component__WEBPACK_IMPORTED_MODULE_18__["TuiSelectComponent"], _kit_components_select_select_directive__WEBPACK_IMPORTED_MODULE_19__["TuiSelectDirective"], _core_components_data_list_data_list_directive__WEBPACK_IMPORTED_MODULE_20__["TuiDataListDirective"], _kit_components_input_phone_input_phone_component__WEBPACK_IMPORTED_MODULE_21__["TuiInputPhoneComponent"], _kit_components_input_phone_input_phone_directive__WEBPACK_IMPORTED_MODULE_22__["TuiInputPhoneDirective"], _core_components_group_group_directive__WEBPACK_IMPORTED_MODULE_23__["TuiGroupDirective"], _kit_components_radio_block_radio_block_component__WEBPACK_IMPORTED_MODULE_24__["TuiRadioBlockComponent"], _kit_components_input_time_input_time_component__WEBPACK_IMPORTED_MODULE_25__["TuiInputTimeComponent"], _kit_components_checkbox_labeled_checkbox_labeled_component__WEBPACK_IMPORTED_MODULE_26__["TuiCheckboxLabeledComponent"], _core_components_label_label_component__WEBPACK_IMPORTED_MODULE_27__["TuiLabelComponent"], _core_directives_textfield_controller_textfield_label_outside_directive__WEBPACK_IMPORTED_MODULE_28__["TuiTextfieldLabelOutsideDirective"], _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_29__["TuiButtonComponent"], _kit_components_data_list_wrapper_data_list_wrapper_component__WEBPACK_IMPORTED_MODULE_30__["TuiDataListWrapperComponent"], _addon_commerce_components_money_money_component__WEBPACK_IMPORTED_MODULE_31__["TuiMoneyComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_32__["AsyncPipe"], _kit_pipes_field_error_field_error_pipe__WEBPACK_IMPORTED_MODULE_33__["TuiFieldErrorPipe"], _addon_commerce_pipes_currency_currency_pipe__WEBPACK_IMPORTED_MODULE_34__["TuiCurrencyPipe"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.stepper[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.uppercase-name[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.account[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL2Zvcm0vZXhhbXBsZS9pbmRleC5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9tYXJrdXAvZm9ybS9leGFtcGxlL2luZGV4LnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLGNBQUE7QURLSjtBQ0ZBO0VBQ0ksbUJBQUE7QURJSjtBQ0RBO0VBQ0kseUJBQUE7QURHSjtBQ0FBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSw4QkFBQTtBREVKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvbWFya3VwL2Zvcm0vZXhhbXBsZS9pbmRleC5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zdGVwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi51cHBlcmNhc2UtbmFtZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYWNjb3VudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3RlcHBlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnVwcGVyY2FzZS1uYW1lIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYWNjb3VudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-form-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/form/form.component.ts":
/*!***************************************************!*\
  !*** ./src/modules/markup/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _example_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./example/index */ "./src/modules/markup/form/example/index.ts");







var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6907807228975360219$$SRC_MODULES_MARKUP_FORM_FORM_COMPONENT_TS_1 = goog.getMsg("Form");
    I18N_0 = MSG_EXTERNAL_6907807228975360219$$SRC_MODULES_MARKUP_FORM_FORM_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟010339e6584e1c44f5aa721080c96cf7bb471761␟6907807228975360219:Form`;
}
const _c2 = ["header", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2511572234011757136$$SRC_MODULES_MARKUP_FORM_FORM_COMPONENT_TS__4 = goog.getMsg(" Use global {$startTagStrong}.tui-form{$closeTagStrong} class and its modifications: ", { "startTagStrong": "\uFFFD#2\uFFFD", "closeTagStrong": "\uFFFD/#2\uFFFD" });
    I18N_3 = MSG_EXTERNAL_2511572234011757136$$SRC_MODULES_MARKUP_FORM_FORM_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟3e7d01c17450214c31f429856a73e5c12bb630a6␟2511572234011757136: Use global ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:.tui-form${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG: class and its modifications: `;
}
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2261033779633505076$$SRC_MODULES_MARKUP_FORM_FORM_COMPONENT_TS__6 = goog.getMsg("{$startListItem}{$startTagCode}.tui-form__header{$closeTagCode} : form header. Margins: 32px top and 20px bottom. {$startUnorderedList}{$startListItem}{$startTagCode}.tui-form__header_margin-top_none{$closeTagCode} : nullifies {$startTagCode}margin-top{$closeTagCode}{$closeListItem}{$startListItem}{$startTagCode}.tui-form__header_margin-bottom_none{$closeTagCode} : nullifies {$startTagCode}margin-bottom{$closeTagCode}{$closeListItem}{$startListItem}{$startTagCode}.tui-form__header_margin-bottom_small{$closeTagCode} : reduced margin bottom (16px) {$startTagCode}margin-bottom{$closeTagCode}{$closeListItem}{$closeUnorderedList}{$closeListItem}{$startListItem}{$startTagCode}.tui-form__row{$closeTagCode} : form row. Margin between rows is 20px. {$startUnorderedList}{$startListItem}{$startTagCode}.tui-form__row_multi-fields{$closeTagCode} : row with several inputs with 20px margin between them {$closeListItem}{$startListItem}{$startTagCode}.tui-form__row_half-width{$closeTagCode} : a half width row {$closeListItem}{$startListItem}{$startTagCode}.tui-form__row_checkboxes{$closeTagCode} : a row with two columns for checkboxes {$closeListItem}{$closeUnorderedList}{$closeListItem}{$startListItem}{$startTagCode}.tui-form__multi-field{$closeTagCode} : field in a row {$startTagCode}tui-form__row_multi-fields{$closeTagCode} . fields with 20px margin between {$closeListItem}{$startListItem}{$startTagCode}.tui-form__checkbox{$closeTagCode} : checkbox with a label for two column case {$closeListItem}{$startListItem}{$startTagCode}.tui-form__field-note{$closeTagCode} : a secondary text under field {$closeListItem}{$startListItem}{$startTagCode}.tui-form__field-checkbox{$closeTagCode} : checkbox under a field {$closeListItem}{$startListItem}{$startTagCode}.tui-form__buttons{$closeTagCode} : a block with buttons and margin top 32px {$startUnorderedList}{$startListItem}{$startTagCode}.tui-form__buttons_align_end{$closeTagCode} : align buttons right {$closeListItem}{$startListItem}{$startTagCode}.tui-form__buttons_align_center{$closeTagCode} : align buttons center {$closeListItem}{$closeUnorderedList}{$closeListItem}{$startListItem}{$startTagCode}.tui-form__button{$closeTagCode} : a button of buttons block {$closeListItem}", { "startListItem": "[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]", "startTagCode": "[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]", "closeTagCode": "[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]", "startUnorderedList": "[\uFFFD#7\uFFFD|\uFFFD#19\uFFFD|\uFFFD#37\uFFFD]", "closeListItem": "[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]", "closeUnorderedList": "[\uFFFD/#7\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#37\uFFFD]" });
    I18N_5 = MSG_EXTERNAL_2261033779633505076$$SRC_MODULES_MARKUP_FORM_FORM_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟3918977fe679e3e44ddda056d7de56d98ca367c4␟2261033779633505076:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__header${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : form header. Margins: 32px top and 20px bottom. ${"[\uFFFD#7\uFFFD|\uFFFD#19\uFFFD|\uFFFD#37\uFFFD]"}:START_UNORDERED_LIST:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__header_margin-top_none${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : nullifies ${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:margin-top${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__header_margin-bottom_none${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : nullifies ${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:margin-bottom${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__header_margin-bottom_small${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : reduced margin bottom (16px) ${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:margin-bottom${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD/#7\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#37\uFFFD]"}:CLOSE_UNORDERED_LIST:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__row${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : form row. Margin between rows is 20px. ${"[\uFFFD#7\uFFFD|\uFFFD#19\uFFFD|\uFFFD#37\uFFFD]"}:START_UNORDERED_LIST:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__row_multi-fields${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : row with several inputs with 20px margin between them ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__row_half-width${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : a half width row ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__row_checkboxes${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : a row with two columns for checkboxes ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD/#7\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#37\uFFFD]"}:CLOSE_UNORDERED_LIST:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__multi-field${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : field in a row ${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:tui-form__row_multi-fields${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: . fields with 20px margin between ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__checkbox${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : checkbox with a label for two column case ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__field-note${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : a secondary text under field ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__field-checkbox${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : checkbox under a field ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__buttons${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : a block with buttons and margin top 32px ${"[\uFFFD#7\uFFFD|\uFFFD#19\uFFFD|\uFFFD#37\uFFFD]"}:START_UNORDERED_LIST:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__buttons_align_end${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : align buttons right ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__buttons_align_center${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : align buttons center ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD/#7\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#37\uFFFD]"}:CLOSE_UNORDERED_LIST:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__button${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : a button of buttons block ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:`;
}
I18N_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_5);
function FormComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](4, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "tui-form-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
} }
class FormComponent {
    constructor() {
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-example-index-ts */ "!!raw-loader!-example-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./example/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/form/example/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-example-index-html */ "!!raw-loader!-example-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./example/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/form/example/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-example-index-style-less */ "!!raw-loader!-example-index-style-less").then(__webpack_require__.bind(null, /*! !raw-loader!./example/index.style.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/markup/form/example/index.style.less")),
        };
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["example-form"]], decls: 3, vars: 0, consts: [[6, "header"], ["pageTab", ""], [1, "tui-space_bottom-3"], [1, "tui-list", "tui-list_small"], [1, "tui-list__item"], [1, "tui-list", "tui-list_linear", "tui-list_nested", "tui-list_extra-small"], ["id", "form", "heading", "Basic", 3, "content"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormComponent_ng_template_2_Template, 46, 1, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _example_index__WEBPACK_IMPORTED_MODULE_5__["TuiExample"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-form`,
                templateUrl: `form.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/markup/form/form.module.ts":
/*!************************************************!*\
  !*** ./src/modules/markup/form/form.module.ts ***!
  \************************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-commerce */ "../addon-commerce/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./example */ "./src/modules/markup/form/example/index.ts");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form.component */ "./src/modules/markup/form/form.component.ts");












class FormModule {
}
FormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FormModule });
FormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function FormModule_Factory(t) { return new (t || FormModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiStepperModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputDateModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputTimeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiTextAreaModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputSliderModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputRangeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiCheckboxLabeledModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioListModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiErrorModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputPasswordModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputPhoneModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputNumberModule"],
            _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCurrencyPipeModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputTagModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputCountModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSelectModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiGroupModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioBlockModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDataListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiDataListWrapperModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLabelModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FormModule, { declarations: [_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"], _example__WEBPACK_IMPORTED_MODULE_8__["TuiExample"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiStepperModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputDateModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputTimeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiTextAreaModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputSliderModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputRangeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiCheckboxLabeledModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioListModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiErrorModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputPasswordModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputPhoneModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputNumberModule"],
        _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCurrencyPipeModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputTagModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputCountModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSelectModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiGroupModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioBlockModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDataListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiDataListWrapperModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLabelModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiMoneyModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiStepperModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputDateModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputTimeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiTextAreaModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputSliderModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputRangeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiCheckboxLabeledModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioListModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiButtonModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiErrorModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiFieldErrorPipeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputPasswordModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputPhoneModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputNumberModule"],
                    _taiga_ui_addon_commerce__WEBPACK_IMPORTED_MODULE_4__["TuiCurrencyPipeModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputTagModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiInputCountModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiSelectModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiGroupModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiRadioBlockModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiTextfieldControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiHintControllerModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiDataListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_7__["TuiDataListWrapperModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiLabelModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"])),
                ],
                declarations: [_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"], _example__WEBPACK_IMPORTED_MODULE_8__["TuiExample"]],
                exports: [_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=markup-form-form-module.js.map