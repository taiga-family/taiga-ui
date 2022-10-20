"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[46408],{

/***/ 46408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FormModule": () => (/* binding */ FormModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 115 modules
var kit = __webpack_require__(56757);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/stepper/stepper.component.ts
var stepper_component = __webpack_require__(48758);
// EXTERNAL MODULE: ./projects/kit/components/stepper/step/step.component.ts
var step_component = __webpack_require__(72817);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/core/components/error/error.component.ts
var error_component = __webpack_require__(36951);
// EXTERNAL MODULE: ./projects/kit/components/input-date/input-date.component.ts
var input_date_component = __webpack_require__(41833);
// EXTERNAL MODULE: ./projects/kit/components/input-date/input-date.directive.ts
var input_date_directive = __webpack_require__(40813);
// EXTERNAL MODULE: ./projects/kit/components/input-password/input-password.component.ts
var input_password_component = __webpack_require__(52721);
// EXTERNAL MODULE: ./projects/kit/components/input-password/input-password.directive.ts
var input_password_directive = __webpack_require__(21991);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.component.ts
var input_number_component = __webpack_require__(16753);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.directive.ts
var input_number_directive = __webpack_require__(13735);
// EXTERNAL MODULE: ./projects/kit/components/input-slider/input-slider.component.ts
var input_slider_component = __webpack_require__(44056);
// EXTERNAL MODULE: ./projects/kit/components/select/select.component.ts
var select_component = __webpack_require__(50170);
// EXTERNAL MODULE: ./projects/kit/components/select/select.directive.ts
var select_directive = __webpack_require__(1414);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/kit/components/input-phone/input-phone.component.ts
var input_phone_component = __webpack_require__(78750);
// EXTERNAL MODULE: ./projects/kit/components/input-phone/input-phone.directive.ts
var input_phone_directive = __webpack_require__(45303);
// EXTERNAL MODULE: ./projects/core/components/group/group.directive.ts
var group_directive = __webpack_require__(39607);
// EXTERNAL MODULE: ./projects/kit/components/radio-block/radio-block.component.ts
var radio_block_component = __webpack_require__(61423);
// EXTERNAL MODULE: ./projects/kit/components/input-time/input-time.component.ts
var input_time_component = __webpack_require__(86730);
// EXTERNAL MODULE: ./projects/kit/components/checkbox-labeled/checkbox-labeled.component.ts
var checkbox_labeled_component = __webpack_require__(81894);
// EXTERNAL MODULE: ./projects/core/components/label/label.component.ts
var label_component = __webpack_require__(88135);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/kit/components/data-list-wrapper/data-list-wrapper.component.ts
var data_list_wrapper_component = __webpack_require__(50020);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
// EXTERNAL MODULE: ./projects/kit/pipes/field-error/field-error-pipe.ts
var field_error_pipe = __webpack_require__(7114);
// EXTERNAL MODULE: ./projects/addon-commerce/pipes/currency/currency.pipe.ts
var currency_pipe = __webpack_require__(99886);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/form/example/index.ts



































function TuiExample_tui_data_list_wrapper_61_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 57);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r0.persons);
  }
}

function TuiExample_ng_template_62_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 58);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate2 */.AsE("", data_r7.firstName, " ", data_r7.lastName, "");
  }
}

function TuiExample_tui_data_list_wrapper_102_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 59);
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();

    const _r5 = fesm2015_core/* ɵɵreference */.MAs(122);

    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r3.accounts)("itemContent", _r5);
  }
}

function TuiExample_tui_data_list_wrapper_107_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 59);
  }

  if (rf & 2) {
    const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw();

    const _r5 = fesm2015_core/* ɵɵreference */.MAs(122);

    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r4.accounts)("itemContent", _r5);
  }
}

function TuiExample_ng_template_121_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "span", 60);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-money", 61);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const account_r8 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", account_r8.name, " ");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("value", account_r8.amount);
  }
}

const _c0 = function () {
  return [];
};

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

let TuiExample = /*#__PURE__*/(() => {
  class TuiExample {
    constructor() {
      this.svgIcons = {
        common: `https://ng-web-apis.github.io/dist/assets/images/common.svg`,
        universal: `https://ng-web-apis.github.io/dist/assets/images/universal.svg`,
        intersection: `https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg`,
        mutation: `https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg`
      };
      this.persons = [new User(`Roman`, `Sedov`), new User(`Alex`, `Inkin`)];
      this.accounts = [new Account(`1`, `Common`, 24876.55, "RUB"
      /* Ruble */
      , this.svgIcons.common), new Account(`2`, `Universal`, 335, "USD"
      /* Dollar */
      , this.svgIcons.universal), new Account(`3`, `Intersection`, 10000, "EUR"
      /* Euro */
      , this.svgIcons.intersection), new Account(`4`, `Mutation`, 100, "GBP"
      /* Pound */
      , this.svgIcons.mutation)];
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        nameValue: new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required),
        textValue: new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required),
        passwordValue: new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required),
        phoneValue: new fesm2015_forms/* FormControl */.NI(``, fesm2015_forms/* Validators.required */.kI.required),
        moneyValue: new fesm2015_forms/* FormControl */.NI(`100`, fesm2015_forms/* Validators.required */.kI.required),
        periodValue: new fesm2015_forms/* FormControl */.NI(new cdk.TuiDay(2017, 2, 15), fesm2015_forms/* Validators.required */.kI.required),
        timeValue: new fesm2015_forms/* FormControl */.NI(new cdk.TuiTime(12, 30), fesm2015_forms/* Validators.required */.kI.required),
        personValue: new fesm2015_forms/* FormControl */.NI(this.persons[0]),
        quantityValue: new fesm2015_forms/* FormControl */.NI(50000, fesm2015_forms/* Validators.required */.kI.required),
        radioValue: new fesm2015_forms/* FormControl */.NI(`with-commission`),
        accountWherefrom: new fesm2015_forms/* FormControl */.NI(null),
        accountWhere: new fesm2015_forms/* FormControl */.NI(null),
        checkboxValue: new fesm2015_forms/* FormControl */.NI(false),
        osnoValue: new fesm2015_forms/* FormControl */.NI(false),
        usnValue: new fesm2015_forms/* FormControl */.NI(false),
        eshnValue: new fesm2015_forms/* FormControl */.NI(false),
        envdValue: new fesm2015_forms/* FormControl */.NI(false),
        usn2Value: new fesm2015_forms/* FormControl */.NI(false),
        patentValue: new fesm2015_forms/* FormControl */.NI(false)
      });
    }

  }

  TuiExample.ɵfac = function TuiExample_Factory(t) {
    return new (t || TuiExample)();
  };

  TuiExample.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiExample,
    selectors: [["tui-form-example-1"]],
    decls: 123,
    vars: 60,
    consts: [[1, "tui-container"], [1, "stepper"], [3, "activeItemIndex"], ["tuiStep", ""], ["tuiStep", "", 3, "disabled"], [3, "formGroup"], [1, "tui-row", "tui-row_sme"], [1, "tui-col_8"], [1, "tui-form__header", "tui-form__header_margin-top_none"], [1, "tui-form__row"], ["tuiTextfieldExampleText", "Field placeholder", "formControlName", "nameValue", "tuiHintContent", "A tooltip"], [1, "tui-required"], ["formControlName", "nameValue", 3, "error"], ["tuiTextfieldExampleText", "Placeholder", "formControlName", "periodValue"], ["formControlName", "periodValue", 3, "error"], [1, "tui-form__row", "tui-form__row_multi-fields"], [1, "tui-form__multi-field"], ["formControlName", "passwordValue"], ["formControlName", "passwordValue", 3, "error"], ["formControlName", "moneyValue", 3, "postfix"], ["formControlName", "moneyValue", 3, "error"], ["formControlName", "quantityValue", "postfix", "\u20BD", 3, "min", "max", "segments"], [1, "ticks-labels"], [1, "tui-form__field-note"], ["formControlName", "quantityValue", 3, "error"], ["formControlName", "personValue", 3, "valueContent"], [3, "items", 4, "tuiDataList"], ["personValueContent", ""], ["formControlName", "personValue", 3, "error"], ["formControlName", "phoneValue"], ["formControlName", "phoneValue", 3, "error"], [1, "tui-form__header"], ["tuiGroup", "", 1, "tui-form__row", 3, "adaptive", "collapsed"], ["contentAlign", "right", "formControlName", "radioValue", "item", "with-commission", "size", "l"], ["contentAlign", "right", "formControlName", "radioValue", "item", "without-commission", "size", "l"], [1, "tui-form__row", "tui-form__row_half-width"], ["formControlName", "timeValue"], [1, "tui-form__row", "tui-form__row_checkboxes"], ["formControlName", "osnoValue", "size", "l", 1, "tui-form__checkbox"], ["formControlName", "usnValue", "size", "l", 1, "tui-form__checkbox"], ["formControlName", "eshnValue", "size", "l", 1, "tui-form__checkbox"], ["formControlName", "envdValue", "size", "l", 1, "tui-form__checkbox"], ["formControlName", "usn2Value", "size", "l", 1, "tui-form__checkbox"], ["formControlName", "patentValue", "size", "l", 1, "tui-form__checkbox"], [1, "tui-form__header", "tui-form__header_margin-bottom_small"], ["tuiLabel", "From"], ["formControlName", "accountWherefrom", 1, "accounts-select", 3, "tuiTextfieldLabelOutside", "valueContent"], [3, "items", "itemContent", 4, "tuiDataList"], ["tuiLabel", "To"], ["formControlName", "accountWhere", 1, "accounts-select", 3, "tuiTextfieldLabelOutside", "valueContent"], ["tuiTextfieldExampleText", "Placeholder", "formControlName", "textValue", "tuiHintContent", "A tooltip"], [1, "tui-form__field-checkbox"], ["formControlName", "checkboxValue", "size", "l"], [1, "tui-form__buttons"], ["tuiButton", "", "size", "l", "type", "submit", 1, "tui-form__button"], ["tuiButton", "", "type", "button", "appearance", "flat", "size", "l", 1, "tui-form__button"], ["accountContent", ""], [3, "items"], [1, "uppercase-name"], [3, "items", "itemContent"], [1, "account"], [3, "value"]],
    template: function TuiExample_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-stepper", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 3);
        fesm2015_core/* ɵɵtext */._uU(4, "First step");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 4);
        fesm2015_core/* ɵɵtext */._uU(6, " Second step ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "button", 4);
        fesm2015_core/* ɵɵtext */._uU(8, " Third step ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "button", 4);
        fesm2015_core/* ɵɵtext */._uU(10, " Fourth step ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "form", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "div", 6);
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "div", 7);
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "h3", 8);
        fesm2015_core/* ɵɵtext */._uU(15, "A header");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "div", 9);
        fesm2015_core/* ɵɵelementStart */.TgZ(17, "tui-input", 10);
        fesm2015_core/* ɵɵtext */._uU(18, " Textfield ");
        fesm2015_core/* ɵɵelement */._UZ(19, "span", 11);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(20, "tui-error", 12);
        fesm2015_core/* ɵɵpipe */.ALo(21, "async");
        fesm2015_core/* ɵɵpipe */.ALo(22, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(23, "div", 9);
        fesm2015_core/* ɵɵelementStart */.TgZ(24, "tui-input-date", 13);
        fesm2015_core/* ɵɵtext */._uU(25, " Input date ");
        fesm2015_core/* ɵɵelement */._UZ(26, "span", 11);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(27, "tui-error", 14);
        fesm2015_core/* ɵɵpipe */.ALo(28, "async");
        fesm2015_core/* ɵɵpipe */.ALo(29, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(30, "div", 15);
        fesm2015_core/* ɵɵelementStart */.TgZ(31, "div", 16);
        fesm2015_core/* ɵɵelementStart */.TgZ(32, "tui-input-password", 17);
        fesm2015_core/* ɵɵtext */._uU(33, "Input password");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(34, "tui-error", 18);
        fesm2015_core/* ɵɵpipe */.ALo(35, "async");
        fesm2015_core/* ɵɵpipe */.ALo(36, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(37, "div", 16);
        fesm2015_core/* ɵɵelementStart */.TgZ(38, "tui-input-number", 19);
        fesm2015_core/* ɵɵpipe */.ALo(39, "tuiCurrency");
        fesm2015_core/* ɵɵtext */._uU(40, " Input money ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(41, "tui-error", 20);
        fesm2015_core/* ɵɵpipe */.ALo(42, "async");
        fesm2015_core/* ɵɵpipe */.ALo(43, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(44, "div", 9);
        fesm2015_core/* ɵɵelementStart */.TgZ(45, "tui-input-slider", 21);
        fesm2015_core/* ɵɵtext */._uU(46, " Some slider ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(47, "div", 22);
        fesm2015_core/* ɵɵelementStart */.TgZ(48, "span");
        fesm2015_core/* ɵɵtext */._uU(49, "from 50 000 \u20BD");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(50, "span");
        fesm2015_core/* ɵɵtext */._uU(51, "to 3 000 000 \u20BD");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(52, "div", 23);
        fesm2015_core/* ɵɵtext */._uU(53, "Some additional text");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(54, "tui-error", 24);
        fesm2015_core/* ɵɵpipe */.ALo(55, "async");
        fesm2015_core/* ɵɵpipe */.ALo(56, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(57, "div", 15);
        fesm2015_core/* ɵɵelementStart */.TgZ(58, "div", 16);
        fesm2015_core/* ɵɵelementStart */.TgZ(59, "tui-select", 25);
        fesm2015_core/* ɵɵtext */._uU(60, " Choose a person ");
        fesm2015_core/* ɵɵtemplate */.YNc(61, TuiExample_tui_data_list_wrapper_61_Template, 1, 1, "tui-data-list-wrapper", 26);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(62, TuiExample_ng_template_62_Template, 2, 2, "ng-template", null, 27, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelement */._UZ(64, "tui-error", 28);
        fesm2015_core/* ɵɵpipe */.ALo(65, "async");
        fesm2015_core/* ɵɵpipe */.ALo(66, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(67, "div", 16);
        fesm2015_core/* ɵɵelementStart */.TgZ(68, "tui-input-phone", 29);
        fesm2015_core/* ɵɵtext */._uU(69, "Input phone");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(70, "tui-error", 30);
        fesm2015_core/* ɵɵpipe */.ALo(71, "async");
        fesm2015_core/* ɵɵpipe */.ALo(72, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(73, "h3", 31);
        fesm2015_core/* ɵɵtext */._uU(74, "Header");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(75, "div", 32);
        fesm2015_core/* ɵɵelementStart */.TgZ(76, "tui-radio-block", 33);
        fesm2015_core/* ɵɵtext */._uU(77, " One option ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(78, "tui-radio-block", 34);
        fesm2015_core/* ɵɵtext */._uU(79, " An alternative one ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(80, "div", 35);
        fesm2015_core/* ɵɵelementStart */.TgZ(81, "tui-input-time", 36);
        fesm2015_core/* ɵɵtext */._uU(82, "Input time");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(83, "div", 37);
        fesm2015_core/* ɵɵelementStart */.TgZ(84, "tui-checkbox-labeled", 38);
        fesm2015_core/* ɵɵtext */._uU(85, " First option ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(86, "tui-checkbox-labeled", 39);
        fesm2015_core/* ɵɵtext */._uU(87, " Other option ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(88, "tui-checkbox-labeled", 40);
        fesm2015_core/* ɵɵtext */._uU(89, " Cool option ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(90, "tui-checkbox-labeled", 41);
        fesm2015_core/* ɵɵtext */._uU(91, " Your personal option ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(92, "tui-checkbox-labeled", 42);
        fesm2015_core/* ɵɵtext */._uU(93, " Doubtful option ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(94, "tui-checkbox-labeled", 43);
        fesm2015_core/* ɵɵtext */._uU(95, " One more value ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(96, "h3", 44);
        fesm2015_core/* ɵɵtext */._uU(97, "Header");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(98, "div", 9);
        fesm2015_core/* ɵɵelementStart */.TgZ(99, "label", 45);
        fesm2015_core/* ɵɵelementStart */.TgZ(100, "tui-select", 46);
        fesm2015_core/* ɵɵtext */._uU(101, " Choose an account ");
        fesm2015_core/* ɵɵtemplate */.YNc(102, TuiExample_tui_data_list_wrapper_102_Template, 1, 2, "tui-data-list-wrapper", 47);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(103, "div", 9);
        fesm2015_core/* ɵɵelementStart */.TgZ(104, "label", 48);
        fesm2015_core/* ɵɵelementStart */.TgZ(105, "tui-select", 49);
        fesm2015_core/* ɵɵtext */._uU(106, " Choose an account ");
        fesm2015_core/* ɵɵtemplate */.YNc(107, TuiExample_tui_data_list_wrapper_107_Template, 1, 2, "tui-data-list-wrapper", 47);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(108, "h3", 31);
        fesm2015_core/* ɵɵtext */._uU(109, "Header");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(110, "div", 9);
        fesm2015_core/* ɵɵelementStart */.TgZ(111, "tui-input", 50);
        fesm2015_core/* ɵɵtext */._uU(112, " Textfield ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(113, "div", 51);
        fesm2015_core/* ɵɵelementStart */.TgZ(114, "tui-checkbox-labeled", 52);
        fesm2015_core/* ɵɵtext */._uU(115, " Try this ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(116, "div", 53);
        fesm2015_core/* ɵɵelementStart */.TgZ(117, "button", 54);
        fesm2015_core/* ɵɵtext */._uU(118, " Submit ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(119, "button", 55);
        fesm2015_core/* ɵɵtext */._uU(120, " Cancel ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(121, TuiExample_ng_template_121_Template, 3, 2, "ng-template", null, 56, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r1 = fesm2015_core/* ɵɵreference */.MAs(63);

        const _r5 = fesm2015_core/* ɵɵreference */.MAs(122);

        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("activeItemIndex", 0);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("disabled", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("disabled", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("disabled", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(9);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(21, 23, fesm2015_core/* ɵɵpipeBind1 */.lcZ(22, 25, fesm2015_core/* ɵɵpureFunction0 */.DdM(53, _c0))));
        fesm2015_core/* ɵɵadvance */.xp6(7);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(28, 27, fesm2015_core/* ɵɵpipeBind1 */.lcZ(29, 29, fesm2015_core/* ɵɵpureFunction0 */.DdM(54, _c0))));
        fesm2015_core/* ɵɵadvance */.xp6(7);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(35, 31, fesm2015_core/* ɵɵpipeBind1 */.lcZ(36, 33, fesm2015_core/* ɵɵpureFunction0 */.DdM(55, _c0))));
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("postfix", fesm2015_core/* ɵɵpipeBind1 */.lcZ(39, 35, "RUB"));
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(42, 37, fesm2015_core/* ɵɵpipeBind1 */.lcZ(43, 39, fesm2015_core/* ɵɵpureFunction0 */.DdM(56, _c0))));
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("min", 50000)("max", 3000000)("segments", 1);
        fesm2015_core/* ɵɵadvance */.xp6(9);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(55, 41, fesm2015_core/* ɵɵpipeBind1 */.lcZ(56, 43, fesm2015_core/* ɵɵpureFunction0 */.DdM(57, _c0))));
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("valueContent", _r1);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(65, 45, fesm2015_core/* ɵɵpipeBind1 */.lcZ(66, 47, fesm2015_core/* ɵɵpureFunction0 */.DdM(58, _c0))));
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(71, 49, fesm2015_core/* ɵɵpipeBind1 */.lcZ(72, 51, fesm2015_core/* ɵɵpureFunction0 */.DdM(59, _c0))));
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("adaptive", true)("collapsed", true);
        fesm2015_core/* ɵɵadvance */.xp6(25);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("valueContent", _r5);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("valueContent", _r5);
      }
    },
    directives: [stepper_component/* TuiStepperComponent */.H, step_component/* TuiStepComponent */.Q, fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, hint_options_directive/* TuiHintOptionsDirective */.bZ, error_component/* TuiErrorComponent */.v, input_date_component/* TuiInputDateComponent */.j, input_date_directive/* TuiInputDateDirective */.k, input_password_component/* TuiInputPasswordComponent */.V, input_password_directive/* TuiInputPasswordDirective */.F, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, input_slider_component/* TuiInputSliderComponent */.h, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, data_list_directive/* TuiDataListDirective */.g, input_phone_component/* TuiInputPhoneComponent */.y, input_phone_directive/* TuiInputPhoneDirective */.X, group_directive/* TuiGroupDirective */.g, radio_block_component/* TuiRadioBlockComponent */._, input_time_component/* TuiInputTimeComponent */.G, checkbox_labeled_component/* TuiCheckboxLabeledComponent */.p, label_component/* TuiLabelComponent */.A, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, button_component/* TuiButtonComponent */.v, data_list_wrapper_component/* TuiDataListWrapperComponent */.e, money_component/* TuiMoneyComponent */.o],
    pipes: [common/* AsyncPipe */.Ov, field_error_pipe/* TuiFieldErrorPipe */.A, currency_pipe/* TuiCurrencyPipe */.i],
    styles: ["[_nghost-%COMP%]{display:block}.stepper[_ngcontent-%COMP%]{margin-bottom:2rem}.uppercase-name[_ngcontent-%COMP%]{text-transform:uppercase}.account[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:space-between}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.25rem .5rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],
    changeDetection: 0
  });
  return TuiExample;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/form/form.component.ts






function FormComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "ul", 4);
    fesm2015_core/* ɵɵi18nStart */.tHW(4, 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "li", 6);
    fesm2015_core/* ɵɵelement */._UZ(6, "code");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "ul", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "li", 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "li", 6);
    fesm2015_core/* ɵɵelement */._UZ(12, "code");
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "li", 6);
    fesm2015_core/* ɵɵelement */._UZ(15, "code");
    fesm2015_core/* ɵɵelement */._UZ(16, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "li", 6);
    fesm2015_core/* ɵɵelement */._UZ(18, "code");
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "ul", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "li", 6);
    fesm2015_core/* ɵɵelement */._UZ(21, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(22, "li", 6);
    fesm2015_core/* ɵɵelement */._UZ(23, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(24, "li", 6);
    fesm2015_core/* ɵɵelement */._UZ(25, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(26, "li", 6);
    fesm2015_core/* ɵɵelement */._UZ(27, "code");
    fesm2015_core/* ɵɵelement */._UZ(28, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(29, "li", 6);
    fesm2015_core/* ɵɵelement */._UZ(30, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(31, "li", 6);
    fesm2015_core/* ɵɵelement */._UZ(32, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(33, "li", 6);
    fesm2015_core/* ɵɵelement */._UZ(34, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(35, "li", 6);
    fesm2015_core/* ɵɵelement */._UZ(36, "code");
    fesm2015_core/* ɵɵelementStart */.TgZ(37, "ul", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(38, "li", 6);
    fesm2015_core/* ɵɵelement */._UZ(39, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(40, "li", 6);
    fesm2015_core/* ɵɵelement */._UZ(41, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(42, "li", 6);
    fesm2015_core/* ɵɵelement */._UZ(43, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(44, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(45, "tui-form-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(44);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

let FormComponent = /*#__PURE__*/(() => {
  class FormComponent {
    constructor() {
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 94598).then(__webpack_require__.t.bind(__webpack_require__, 94598, 17)),
        HTML: __webpack_require__.e(/* import() */ 95871).then(__webpack_require__.t.bind(__webpack_require__, 95871, 17)),
        LESS: __webpack_require__.e(/* import() */ 59168).then(__webpack_require__.t.bind(__webpack_require__, 59168, 17))
      };
    }

  }

  FormComponent.ɵfac = function FormComponent_Factory(t) {
    return new (t || FormComponent)();
  };

  FormComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: FormComponent,
    selectors: [["example-form"]],
    decls: 2,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6907807228975360219$$PROJECTS_DEMO_SRC_MODULES_MARKUP_FORM_FORM_COMPONENT_TS_1 = goog.getMsg("Form");
        i18n_0 = MSG_EXTERNAL_6907807228975360219$$PROJECTS_DEMO_SRC_MODULES_MARKUP_FORM_FORM_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟010339e6584e1c44f5aa721080c96cf7bb471761␟6907807228975360219:Form`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2511572234011757136$$PROJECTS_DEMO_SRC_MODULES_MARKUP_FORM_FORM_COMPONENT_TS__3 = goog.getMsg(" Use global {$startTagStrong}.tui-form{$closeTagStrong} class and its modifications: ", {
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_2511572234011757136$$PROJECTS_DEMO_SRC_MODULES_MARKUP_FORM_FORM_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟3e7d01c17450214c31f429856a73e5c12bb630a6␟2511572234011757136: Use global ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:.tui-form${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG: class and its modifications: `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2261033779633505076$$PROJECTS_DEMO_SRC_MODULES_MARKUP_FORM_FORM_COMPONENT_TS__5 = goog.getMsg("{$startListItem}{$startTagCode}.tui-form__header{$closeTagCode} : form header. Margins: 32px top and 20px bottom. {$startUnorderedList}{$startListItem}{$startTagCode}.tui-form__header_margin-top_none{$closeTagCode} : nullifies {$startTagCode}margin-top{$closeTagCode}{$closeListItem}{$startListItem}{$startTagCode}.tui-form__header_margin-bottom_none{$closeTagCode} : nullifies {$startTagCode}margin-bottom{$closeTagCode}{$closeListItem}{$startListItem}{$startTagCode}.tui-form__header_margin-bottom_small{$closeTagCode} : reduced margin bottom (16px) {$startTagCode}margin-bottom{$closeTagCode}{$closeListItem}{$closeUnorderedList}{$closeListItem}{$startListItem}{$startTagCode}.tui-form__row{$closeTagCode} : form row. Margin between rows is 20px. {$startUnorderedList}{$startListItem}{$startTagCode}.tui-form__row_multi-fields{$closeTagCode} : row with several inputs with 20px margin between them {$closeListItem}{$startListItem}{$startTagCode}.tui-form__row_half-width{$closeTagCode} : a half width row {$closeListItem}{$startListItem}{$startTagCode}.tui-form__row_checkboxes{$closeTagCode} : a row with two columns for checkboxes {$closeListItem}{$closeUnorderedList}{$closeListItem}{$startListItem}{$startTagCode}.tui-form__multi-field{$closeTagCode} : field in a row {$startTagCode}tui-form__row_multi-fields{$closeTagCode} . fields with 20px margin between {$closeListItem}{$startListItem}{$startTagCode}.tui-form__checkbox{$closeTagCode} : checkbox with a label for two column case {$closeListItem}{$startListItem}{$startTagCode}.tui-form__field-note{$closeTagCode} : a secondary text under field {$closeListItem}{$startListItem}{$startTagCode}.tui-form__field-checkbox{$closeTagCode} : checkbox under a field {$closeListItem}{$startListItem}{$startTagCode}.tui-form__buttons{$closeTagCode} : a block with buttons and margin top 32px {$startUnorderedList}{$startListItem}{$startTagCode}.tui-form__buttons_align_end{$closeTagCode} : align buttons right {$closeListItem}{$startListItem}{$startTagCode}.tui-form__buttons_align_center{$closeTagCode} : align buttons center {$closeListItem}{$closeUnorderedList}{$closeListItem}{$startListItem}{$startTagCode}.tui-form__button{$closeTagCode} : a button of buttons block {$closeListItem}", {
          "startListItem": "[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]",
          "startTagCode": "[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]",
          "closeTagCode": "[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]",
          "startUnorderedList": "[\uFFFD#7\uFFFD|\uFFFD#19\uFFFD|\uFFFD#37\uFFFD]",
          "closeListItem": "[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]",
          "closeUnorderedList": "[\uFFFD/#7\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#37\uFFFD]"
        });
        i18n_4 = MSG_EXTERNAL_2261033779633505076$$PROJECTS_DEMO_SRC_MODULES_MARKUP_FORM_FORM_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟3918977fe679e3e44ddda056d7de56d98ca367c4␟2261033779633505076:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__header${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : form header. Margins: 32px top and 20px bottom. ${"[\uFFFD#7\uFFFD|\uFFFD#19\uFFFD|\uFFFD#37\uFFFD]"}:START_UNORDERED_LIST:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__header_margin-top_none${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : nullifies ${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:margin-top${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__header_margin-bottom_none${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : nullifies ${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:margin-bottom${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__header_margin-bottom_small${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : reduced margin bottom (16px) ${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:margin-bottom${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD/#7\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#37\uFFFD]"}:CLOSE_UNORDERED_LIST:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__row${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : form row. Margin between rows is 20px. ${"[\uFFFD#7\uFFFD|\uFFFD#19\uFFFD|\uFFFD#37\uFFFD]"}:START_UNORDERED_LIST:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__row_multi-fields${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : row with several inputs with 20px margin between them ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__row_half-width${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : a half width row ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__row_checkboxes${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : a row with two columns for checkboxes ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD/#7\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#37\uFFFD]"}:CLOSE_UNORDERED_LIST:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__multi-field${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : field in a row ${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:tui-form__row_multi-fields${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: . fields with 20px margin between ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__checkbox${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : checkbox with a label for two column case ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__field-note${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : a secondary text under field ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__field-checkbox${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : checkbox under a field ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__buttons${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : a block with buttons and margin top 32px ${"[\uFFFD#7\uFFFD|\uFFFD#19\uFFFD|\uFFFD#37\uFFFD]"}:START_UNORDERED_LIST:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__buttons_align_end${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : align buttons right ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__buttons_align_center${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : align buttons center ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD/#7\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#37\uFFFD]"}:CLOSE_UNORDERED_LIST:${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:${"[\uFFFD#5\uFFFD|\uFFFD#8\uFFFD|\uFFFD#11\uFFFD|\uFFFD#14\uFFFD|\uFFFD#17\uFFFD|\uFFFD#20\uFFFD|\uFFFD#22\uFFFD|\uFFFD#24\uFFFD|\uFFFD#26\uFFFD|\uFFFD#29\uFFFD|\uFFFD#31\uFFFD|\uFFFD#33\uFFFD|\uFFFD#35\uFFFD|\uFFFD#38\uFFFD|\uFFFD#40\uFFFD|\uFFFD#42\uFFFD]"}:START_LIST_ITEM:${"[\uFFFD#6\uFFFD|\uFFFD#9\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD|\uFFFD#13\uFFFD|\uFFFD#15\uFFFD|\uFFFD#16\uFFFD|\uFFFD#18\uFFFD|\uFFFD#21\uFFFD|\uFFFD#23\uFFFD|\uFFFD#25\uFFFD|\uFFFD#27\uFFFD|\uFFFD#28\uFFFD|\uFFFD#30\uFFFD|\uFFFD#32\uFFFD|\uFFFD#34\uFFFD|\uFFFD#36\uFFFD|\uFFFD#39\uFFFD|\uFFFD#41\uFFFD|\uFFFD#43\uFFFD]"}:START_TAG_CODE:.tui-form__button${"[\uFFFD/#6\uFFFD|\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#13\uFFFD|\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD|\uFFFD/#21\uFFFD|\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#30\uFFFD|\uFFFD/#32\uFFFD|\uFFFD/#34\uFFFD|\uFFFD/#36\uFFFD|\uFFFD/#39\uFFFD|\uFFFD/#41\uFFFD|\uFFFD/#43\uFFFD]"}:CLOSE_TAG_CODE: : a button of buttons block ${"[\uFFFD/#8\uFFFD|\uFFFD/#11\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#20\uFFFD|\uFFFD/#22\uFFFD|\uFFFD/#24\uFFFD|\uFFFD/#17\uFFFD|\uFFFD/#26\uFFFD|\uFFFD/#29\uFFFD|\uFFFD/#31\uFFFD|\uFFFD/#33\uFFFD|\uFFFD/#38\uFFFD|\uFFFD/#40\uFFFD|\uFFFD/#35\uFFFD|\uFFFD/#42\uFFFD]"}:CLOSE_LIST_ITEM:`;
      }

      i18n_4 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_4);
      return [["header", i18n_0], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_2, [1, "tui-list", "tui-list_small"], i18n_4, [1, "tui-list__item"], [1, "tui-list", "tui-list_linear", "tui-list_nested", "tui-list_extra-small"], ["id", "form", "heading", "Basic", 3, "content"]];
    },
    template: function FormComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, FormComponent_ng_template_1_Template, 46, 1, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiExample],
    encapsulation: 2,
    changeDetection: 0
  });
  return FormComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/form/form.module.ts











let FormModule = /*#__PURE__*/(() => {
  class FormModule {}

  FormModule.ɵfac = function FormModule_Factory(t) {
    return new (t || FormModule)();
  };

  FormModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: FormModule
  });
  FormModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, addon_commerce.TuiMoneyModule, kit.TuiStepperModule, kit.TuiInputDateModule, kit.TuiInputTimeModule, kit.TuiTextAreaModule, kit.TuiInputSliderModule, kit.TuiInputRangeModule, kit.TuiCheckboxLabeledModule, kit.TuiRadioListModule, core.TuiButtonModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, kit.TuiInputPasswordModule, kit.TuiInputPhoneModule, kit.TuiInputModule, kit.TuiInputNumberModule, addon_commerce.TuiCurrencyPipeModule, kit.TuiInputTagModule, kit.TuiInputCountModule, kit.TuiSelectModule, core.TuiGroupModule, kit.TuiRadioBlockModule, core.TuiTextfieldControllerModule, core.TuiHintModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, core.TuiLabelModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(FormComponent))]]
  });
  return FormModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(FormModule, {
    declarations: [FormComponent, TuiExample],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, addon_commerce.TuiMoneyModule, kit.TuiStepperModule, kit.TuiInputDateModule, kit.TuiInputTimeModule, kit.TuiTextAreaModule, kit.TuiInputSliderModule, kit.TuiInputRangeModule, kit.TuiCheckboxLabeledModule, kit.TuiRadioListModule, core.TuiButtonModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, kit.TuiInputPasswordModule, kit.TuiInputPhoneModule, kit.TuiInputModule, kit.TuiInputNumberModule, addon_commerce.TuiCurrencyPipeModule, kit.TuiInputTagModule, kit.TuiInputCountModule, kit.TuiSelectModule, core.TuiGroupModule, kit.TuiRadioBlockModule, core.TuiTextfieldControllerModule, core.TuiHintModule, core.TuiDataListModule, kit.TuiDataListWrapperModule, core.TuiLabelModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [FormComponent]
  });
})();

/***/ })

}]);