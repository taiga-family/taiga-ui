"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[66581],{

/***/ 66581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiFieldErrorModule": () => (/* binding */ ExampleTuiFieldErrorModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/addon-table/index.ts + 3 modules
var addon_table = __webpack_require__(36256);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/label/label.component.ts
var label_component = __webpack_require__(88135);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/components/error/error.component.ts
var error_component = __webpack_require__(36951);
// EXTERNAL MODULE: ./projects/kit/pipes/field-error/field-error-pipe.ts
var field_error_pipe = __webpack_require__(7114);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/field-error/examples/1/index.ts












const _c6 = function () {
  return [];
};

const latinChars = /^[a-zA-Z]+$/;
function passwordValidator(field) {
  return field.value && latinChars.test(field.value) ? null : {
    other: `Only latin letters are allowed`
  };
}
function superComputerValidator(field) {
  return field.value === `42` ? null : {
    other: `Wrong`
  };
}
let TuiFieldErrorPipeExample1 = /*#__PURE__*/(() => {
  class TuiFieldErrorPipeExample1 {
    constructor() {
      this.testValue1 = new fesm2015_forms/* FormControl */.NI(``, [fesm2015_forms/* Validators.required */.kI.required, passwordValidator]);
      this.testValue3 = new fesm2015_forms/* FormControl */.NI(``, [fesm2015_forms/* Validators.required */.kI.required, passwordValidator]);
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: this.testValue1,
        testValue2: new fesm2015_forms/* FormControl */.NI(``, [fesm2015_forms/* Validators.required */.kI.required, superComputerValidator])
      });
      this.testValue1.valueChanges.subscribe(() => {
        this.testValue1.markAsTouched();
      });
    }

  }

  TuiFieldErrorPipeExample1.ɵfac = function TuiFieldErrorPipeExample1_Factory(t) {
    return new (t || TuiFieldErrorPipeExample1)();
  };

  TuiFieldErrorPipeExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFieldErrorPipeExample1,
    selectors: [["tui-field-error-pipe-example-1"]],
    decls: 15,
    vars: 15,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3772154377692784553$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_1_INDEX_TS_1 = goog.getMsg("Type the ultimate answer");
        i18n_0 = MSG_EXTERNAL_3772154377692784553$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟c2f188eeca60463782738d8247914bf170df5098␟3772154377692784553:Type the ultimate answer`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8591875090862306452$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_1_INDEX_TS_3 = goog.getMsg("Set a password");
        i18n_2 = MSG_EXTERNAL_8591875090862306452$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_1_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟4de3cc8dba3c7b052f74a1db4752f51bda859e9c␟8591875090862306452:Set a password`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5532503478235461752$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_1_INDEX_TS_5 = goog.getMsg(" If you need to show validation message as early as a user started to type something, subscribe on form value changes and call markAsTouched on control on first value change ");
        i18n_4 = MSG_EXTERNAL_5532503478235461752$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_1_INDEX_TS_5;
      } else {
        i18n_4 = $localize`:␟55293e53f2eaf13c5a165765c4319f4527d577a4␟5532503478235461752: If you need to show validation message as early as a user started to type something, subscribe on form value changes and call markAsTouched on control on first value change `;
      }

      return [[1, "b-form", 3, "formGroup"], ["tuiLabel", i18n_0, 1, "tui-space_bottom-4"], ["formControlName", "testValue2", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"], ["formControlName", "testValue2", 3, "error"], ["tuiLabel", i18n_2], ["formControlName", "testValue1", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"], ["formControlName", "testValue1", 3, "error"], i18n_4];
    },
    template: function TuiFieldErrorPipeExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "label", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input", 2);
        fesm2015_core/* ɵɵtext */._uU(3, " to the Question of Life, the Universe, and Everything ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-error", 3);
        fesm2015_core/* ɵɵpipe */.ALo(5, "async");
        fesm2015_core/* ɵɵpipe */.ALo(6, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "label", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-input", 5);
        fesm2015_core/* ɵɵtext */._uU(9, " Latin letters only ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(10, "tui-error", 6);
        fesm2015_core/* ɵɵpipe */.ALo(11, "async");
        fesm2015_core/* ɵɵpipe */.ALo(12, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
        fesm2015_core/* ɵɵi18n */.SDv(14, 7);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(5, 5, fesm2015_core/* ɵɵpipeBind1 */.lcZ(6, 7, fesm2015_core/* ɵɵpureFunction0 */.DdM(13, _c6))));
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(11, 9, fesm2015_core/* ɵɵpipeBind1 */.lcZ(12, 11, fesm2015_core/* ɵɵpureFunction0 */.DdM(14, _c6))));
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, label_component/* TuiLabelComponent */.A, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, error_component/* TuiErrorComponent */.v],
    pipes: [common/* AsyncPipe */.Ov, field_error_pipe/* TuiFieldErrorPipe */.A],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiFieldErrorPipeExample1;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/interval.js
var interval = __webpack_require__(20945);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/scan.js
var scan = __webpack_require__(42145);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__(88002);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/startWith.js
var startWith = __webpack_require__(39761);
// EXTERNAL MODULE: ./projects/kit/components/input-count/input-count.component.ts
var input_count_component = __webpack_require__(65009);
// EXTERNAL MODULE: ./projects/kit/components/input-count/input-count.directive.ts
var input_count_directive = __webpack_require__(10383);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/field-error/examples/2/index.ts

















const _c2 = function () {
  return [];
};

function maxLengthValidator(context) {
  return `Maximum length — ${context.requiredLength}`;
}
function minLengthValidator(context) {
  return `Minimum length — ${context.requiredLength}`;
}
let TuiFieldErrorPipeExample2 = /*#__PURE__*/(() => {
  class TuiFieldErrorPipeExample2 {
    constructor() {
      this.testValue1 = new fesm2015_forms/* FormControl */.NI(``, [fesm2015_forms/* Validators.minLength */.kI.minLength(4), fesm2015_forms/* Validators.maxLength */.kI.maxLength(4)]);
      this.testValue2 = new fesm2015_forms/* FormControl */.NI(``, [fesm2015_forms/* Validators.required */.kI.required, fesm2015_forms/* Validators.email */.kI.email]);
      this.testValue3 = new fesm2015_forms/* FormControl */.NI(2, [fesm2015_forms/* Validators.min */.kI.min(3)]);
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: this.testValue1,
        testValue2: this.testValue2,
        testValue3: this.testValue3
      });
      this.testValue1.valueChanges.subscribe(() => {
        this.testValue1.markAsTouched();
      });
    }

  }

  TuiFieldErrorPipeExample2.ɵfac = function TuiFieldErrorPipeExample2_Factory(t) {
    return new (t || TuiFieldErrorPipeExample2)();
  };

  TuiFieldErrorPipeExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFieldErrorPipeExample2,
    selectors: [["tui-field-error-pipe-example-2"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: kit.TUI_VALIDATION_ERRORS,
      useValue: {
        required: `Enter this!`,
        email: `Enter a valid email`,
        maxlength: maxLengthValidator,
        minlength: minLengthValidator,
        min: (0,interval/* interval */.F)(2000).pipe((0,scan/* scan */.R)(acc => !acc, false), (0,map/* map */.U)(val => val ? `Fix please` : `Min number 3`), (0,startWith/* startWith */.O)(`Min number 3`))
      }
    }])],
    decls: 19,
    vars: 20,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3646762244302681891$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_2_INDEX_TS_1 = goog.getMsg(" Required ");
        i18n_0 = MSG_EXTERNAL_3646762244302681891$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_2_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟87a9e0f6ceb1444cab6185424f933a376357a91c␟3646762244302681891: Required `;
      }

      return [[1, "b-form", 3, "formGroup"], ["tuiLabel", "Enter an email", 1, "tui-space_bottom-4"], ["formControlName", "testValue2", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"], i18n_0, ["formControlName", "testValue2", 3, "error"], ["tuiLabel", "Minimum and maximum length", 1, "tui-space_bottom-4"], ["formControlName", "testValue1", "tuiTextfieldSize", "m"], ["formControlName", "testValue1", 3, "error"], ["tuiLabel", "Minimum number"], ["formControlName", "testValue3", "tuiTextfieldSize", "m"], ["formControlName", "testValue3", 3, "error"]];
    },
    template: function TuiFieldErrorPipeExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "label", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input", 2);
        fesm2015_core/* ɵɵi18n */.SDv(3, 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-error", 4);
        fesm2015_core/* ɵɵpipe */.ALo(5, "async");
        fesm2015_core/* ɵɵpipe */.ALo(6, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "label", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-input", 6);
        fesm2015_core/* ɵɵtext */._uU(9, " 4 letters word... ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(10, "tui-error", 7);
        fesm2015_core/* ɵɵpipe */.ALo(11, "async");
        fesm2015_core/* ɵɵpipe */.ALo(12, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "label", 8);
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-input-count", 9);
        fesm2015_core/* ɵɵtext */._uU(15, " number ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(16, "tui-error", 10);
        fesm2015_core/* ɵɵpipe */.ALo(17, "async");
        fesm2015_core/* ɵɵpipe */.ALo(18, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(5, 5, fesm2015_core/* ɵɵpipeBind1 */.lcZ(6, 7, fesm2015_core/* ɵɵpureFunction0 */.DdM(17, _c2))));
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(11, 9, fesm2015_core/* ɵɵpipeBind1 */.lcZ(12, 11, fesm2015_core/* ɵɵpureFunction0 */.DdM(18, _c2))));
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(17, 13, fesm2015_core/* ɵɵpipeBind1 */.lcZ(18, 15, fesm2015_core/* ɵɵpureFunction0 */.DdM(19, _c2))));
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, label_component/* TuiLabelComponent */.A, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, error_component/* TuiErrorComponent */.v, input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a],
    pipes: [common/* AsyncPipe */.Ov, field_error_pipe/* TuiFieldErrorPipe */.A],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiFieldErrorPipeExample2;
})();
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/field-error/examples/3/index.ts













const _c0 = ["errorContent"];
const _c1 = ["bigErrorContent"];

function TuiFieldErrorPipeExample3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Secret number must contain ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "strong");
    fesm2015_core/* ɵɵtext */._uU(2, "10 or 12 digits");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(3, " . ");
  }
}

function TuiFieldErrorPipeExample3_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " This company is already registered ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 9);
    fesm2015_core/* ɵɵtext */._uU(2, " It is mine ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

const _c4 = function () {
  return ["required", "inn"];
};

const _c5 = function () {
  return [];
};

const secretRegexTen = /^\d{10}$/;
const secretRegexTwelve = /^\d{12}$/;
function innValidator(field) {
  return field.value && (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value)) ? null : {
    inn: new TuiValidationError(`Secret number contains 10 or 12 digits`)
  };
}
let TuiFieldErrorPipeExample3 = /*#__PURE__*/(() => {
  class TuiFieldErrorPipeExample3 {
    constructor() {
      this.errorContent = ``;
      this.bigErrorContent = ``;
      this.testValue2 = new fesm2015_forms/* FormControl */.NI(``);
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(``, [fesm2015_forms/* Validators.required */.kI.required, this.getSecretValidator()]),
        testValue2: this.testValue2
      });

      this.companyValidator = field => field.value ? {
        inn: new cdk.TuiValidationError(this.bigErrorContent)
      } : null;
    }

    ngOnInit() {
      this.testValue2.setValidators([fesm2015_forms/* Validators.required */.kI.required, this.companyValidator]);
    }

    getSecretValidator() {
      return field => field.value && (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value)) ? null : {
        secret: new cdk.TuiValidationError(this.errorContent)
      };
    }

  }

  TuiFieldErrorPipeExample3.ɵfac = function TuiFieldErrorPipeExample3_Factory(t) {
    return new (t || TuiFieldErrorPipeExample3)();
  };

  TuiFieldErrorPipeExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFieldErrorPipeExample3,
    selectors: [["tui-field-error-pipe-example-3"]],
    viewQuery: function TuiFieldErrorPipeExample3_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(_c0, 5);
        fesm2015_core/* ɵɵviewQuery */.Gf(_c1, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.errorContent = _t.first);
        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.bigErrorContent = _t.first);
      }
    },
    decls: 15,
    vars: 15,
    consts: function () {
      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2295031025708706060$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_3_INDEX_TS_3 = goog.getMsg("Enter company name");
        i18n_2 = MSG_EXTERNAL_2295031025708706060$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_EXAMPLES_3_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟7d66ae66a6f955b1eb6f5c00aac4d4e2584cdeed␟2295031025708706060:Enter company name`;
      }

      return [[1, "b-form", 3, "formGroup"], ["tuiLabel", "Secret number"], ["formControlName", "testValue1", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"], ["errorContent", ""], ["formControlName", "testValue1", 3, "error"], ["tuiLabel", i18n_2, 1, "tui-space_top-4"], ["formControlName", "testValue2", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"], ["bigErrorContent", ""], ["formControlName", "testValue2", 3, "error"], ["tuiButton", "", "type", "button", 1, "tui-space_top-2"]];
    },
    template: function TuiFieldErrorPipeExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "label", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-input", 2);
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiFieldErrorPipeExample3_ng_template_3_Template, 4, 0, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-error", 4);
        fesm2015_core/* ɵɵpipe */.ALo(6, "async");
        fesm2015_core/* ɵɵpipe */.ALo(7, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "label", 5);
        fesm2015_core/* ɵɵelement */._UZ(9, "tui-input", 6);
        fesm2015_core/* ɵɵtemplate */.YNc(10, TuiFieldErrorPipeExample3_ng_template_10_Template, 3, 0, "ng-template", null, 7, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelement */._UZ(12, "tui-error", 8);
        fesm2015_core/* ɵɵpipe */.ALo(13, "async");
        fesm2015_core/* ɵɵpipe */.ALo(14, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(6, 5, fesm2015_core/* ɵɵpipeBind1 */.lcZ(7, 7, fesm2015_core/* ɵɵpureFunction0 */.DdM(13, _c4))));
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(13, 9, fesm2015_core/* ɵɵpipeBind1 */.lcZ(14, 11, fesm2015_core/* ɵɵpureFunction0 */.DdM(14, _c5))));
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, label_component/* TuiLabelComponent */.A, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, error_component/* TuiErrorComponent */.v, button_component/* TuiButtonComponent */.v],
    pipes: [common/* AsyncPipe */.Ov, field_error_pipe/* TuiFieldErrorPipe */.A],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiFieldErrorPipeExample3;
})();
// EXTERNAL MODULE: ./projects/kit/components/input-phone/input-phone.component.ts
var input_phone_component = __webpack_require__(78750);
// EXTERNAL MODULE: ./projects/kit/components/input-phone/input-phone.directive.ts
var input_phone_directive = __webpack_require__(45303);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/field-error/examples/4/index.ts














const _4_c0 = ["phoneErrorContent"];

function TuiFieldErrorPipeExample4_label_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, "Invalid phone number length");
  }
}

const _4_c1 = function () {
  return [];
};

function TuiFieldErrorPipeExample4_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "label", 4);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "span", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input-phone", 6);
    fesm2015_core/* ɵɵelement */._UZ(3, "input", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "button", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiFieldErrorPipeExample4_label_1_Template_button_click_4_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const i_r2 = restoredCtx.index;
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r5.removePhone(i_r2);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(5, TuiFieldErrorPipeExample4_label_1_ng_template_5_Template, 1, 0, "ng-template", null, 9, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-error", 10);
    fesm2015_core/* ɵɵpipe */.ALo(8, "async");
    fesm2015_core/* ɵɵpipe */.ALo(9, "tuiFieldError");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const i_r2 = ctx.index;
    fesm2015_core/* ɵɵpropertyInterpolate1 */.MGl("tuiLabel", "Phone number ", i_r2 + 1, "");
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵpropertyInterpolate */.s9C("formControlName", i_r2);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵpropertyInterpolate */.s9C("formControlName", i_r2);
    fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(8, 5, fesm2015_core/* ɵɵpipeBind1 */.lcZ(9, 7, fesm2015_core/* ɵɵpureFunction0 */.DdM(9, _4_c1))));
  }
}

let TuiFieldErrorPipeExample4 = /*#__PURE__*/(() => {
  class TuiFieldErrorPipeExample4 {
    constructor() {
      this.phoneErrorContent = ``;
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        phones: new fesm2015_forms/* FormArray */.Oe([new fesm2015_forms/* FormControl */.NI(``, [fesm2015_forms/* Validators.required */.kI.required, this.getPhoneLengthValidator()])], [this.getPhoneArrayValidator()])
      });
    }

    get formData() {
      return this.testForm.get(`phones`);
    }

    addPhone() {
      this.formData.push(new fesm2015_forms/* FormControl */.NI(``, this.addValidators()));
    }

    removePhone(index) {
      this.formData.removeAt(index);
      let n = 0;

      while (n <= 1 && this.formData.controls[n]) {
        this.formData.controls[n].setValidators([fesm2015_forms/* Validators.required */.kI.required, this.getPhoneLengthValidator()]);
        n++;
      }
    }

    addValidators() {
      return this.formData.controls.length < 2 ? [fesm2015_forms/* Validators.required */.kI.required, this.getPhoneLengthValidator()] : null;
    }

    getPhoneLengthValidator() {
      return field => field.value.length !== 12 ? {
        length: new cdk.TuiValidationError(this.phoneErrorContent)
      } : null;
    }

    getPhoneArrayValidator() {
      return array => array.controls.length < 2 || !!array.controls.filter(item => item.errors).length && array.controls.length ? {
        length: new cdk.TuiValidationError(`You should add at least 2 phone number`)
      } : null;
    }

  }

  TuiFieldErrorPipeExample4.ɵfac = function TuiFieldErrorPipeExample4_Factory(t) {
    return new (t || TuiFieldErrorPipeExample4)();
  };

  TuiFieldErrorPipeExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFieldErrorPipeExample4,
    selectors: [["tui-field-error-pipe-example-4"]],
    viewQuery: function TuiFieldErrorPipeExample4_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(_4_c0, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.phoneErrorContent = _t.first);
      }
    },
    decls: 7,
    vars: 8,
    consts: [[3, "formGroup"], ["formArrayName", "phones", "class", "tui-space_bottom-4", 3, "tuiLabel", 4, "ngFor", "ngForOf"], ["formArrayName", "phones", 1, "form-array-error", 3, "error"], ["tuiButton", "", "type", "button", "size", "s", 1, "tui-space_top-4", 3, "click"], ["formArrayName", "phones", 1, "tui-space_bottom-4", 3, "tuiLabel"], [1, "row"], ["tuiTextfieldSize", "m", 1, "input", 3, "formControlName", "tuiTextfieldLabelOutside"], ["tuiTextfield", "", "autocomplete", "off"], ["tuiIconButton", "", "type", "button", "size", "m", "title", "Delete phone number", "appearance", "icon", "icon", "tuiIconTrash", 1, "tui-space_left-2", "icon", 3, "click"], ["phoneErrorContent", ""], [3, "formControlName", "error"]],
    template: function TuiFieldErrorPipeExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiFieldErrorPipeExample4_label_1_Template, 10, 10, "label", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-error", 2);
        fesm2015_core/* ɵɵpipe */.ALo(3, "async");
        fesm2015_core/* ɵɵpipe */.ALo(4, "tuiFieldError");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiFieldErrorPipeExample4_Template_button_click_5_listener() {
          return ctx.addPhone();
        });
        fesm2015_core/* ɵɵtext */._uU(6, " Add a phone number ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.formData.controls);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(3, 3, fesm2015_core/* ɵɵpipeBind1 */.lcZ(4, 5, fesm2015_core/* ɵɵpureFunction0 */.DdM(7, _4_c1))));
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, common/* NgForOf */.sg, error_component/* TuiErrorComponent */.v, fesm2015_forms/* FormArrayName */.CE, button_component/* TuiButtonComponent */.v, label_component/* TuiLabelComponent */.A, input_phone_component/* TuiInputPhoneComponent */.y, input_phone_directive/* TuiInputPhoneDirective */.X, textfield_size_directive/* TuiTextfieldSizeDirective */.s, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_component/* TuiTextfieldComponent */.M],
    pipes: [common/* AsyncPipe */.Ov, field_error_pipe/* TuiFieldErrorPipe */.A],
    styles: [".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],
    changeDetection: 0
  });
  return TuiFieldErrorPipeExample4;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(25917);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/delay.js + 1 modules
var delay = __webpack_require__(71289);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/field-error/examples/5/index.ts












const _5_c0 = function () {
  return [];
};

const _5_latinChars = /^[a-zA-Z]+$/;

function asyncValidatorFn(isCypress) {
  return field => {
    return field.value && _5_latinChars.test(field.value) ? (0,of.of)(null) : (0,of.of)({
      error: new cdk.TuiValidationError(`Only latin letters allowed`)
    }).pipe(isCypress ? (0,delay/* delay */.g)(0) : (0,delay/* delay */.g)(5000));
  };
}

let TuiFieldErrorPipeExample5 = /*#__PURE__*/(() => {
  class TuiFieldErrorPipeExample5 {
    constructor(fb, isCypress) {
      this.fb = fb;
      this.form = this.fb.group({
        text: [`русский текст`, fesm2015_forms/* Validators.required */.kI.required]
      });
      this.form.controls[`text`].setAsyncValidators(asyncValidatorFn(isCypress));
      this.form.controls[`text`].markAsTouched();
    }

  }

  TuiFieldErrorPipeExample5.ɵfac = function TuiFieldErrorPipeExample5_Factory(t) {
    return new (t || TuiFieldErrorPipeExample5)(fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_forms/* FormBuilder */.qu), fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TUI_IS_CYPRESS));
  };

  TuiFieldErrorPipeExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFieldErrorPipeExample5,
    selectors: [["tui-field-error-pipe-example-5"]],
    decls: 7,
    vars: 7,
    consts: [[3, "formGroup"], [1, "tui-form__row"], ["formControlName", "text", 1, "input"], ["formControlName", "text", 3, "error"]],
    template: function TuiFieldErrorPipeExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input", 2);
        fesm2015_core/* ɵɵtext */._uU(3, " Enter some text ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-error", 3);
        fesm2015_core/* ɵɵpipe */.ALo(5, "async");
        fesm2015_core/* ɵɵpipe */.ALo(6, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.form);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(5, 2, fesm2015_core/* ɵɵpipeBind1 */.lcZ(6, 4, fesm2015_core/* ɵɵpureFunction0 */.DdM(6, _5_c0))));
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, error_component/* TuiErrorComponent */.v],
    pipes: [common/* AsyncPipe */.Ov, field_error_pipe/* TuiFieldErrorPipe */.A],
    styles: [".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],
    changeDetection: 0
  });
  return TuiFieldErrorPipeExample5;
})();
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/table.directive.ts
var table_directive = __webpack_require__(19582);
// EXTERNAL MODULE: ./projects/addon-table/components/table/th-group/th-group.component.ts
var th_group_component = __webpack_require__(222);
// EXTERNAL MODULE: ./projects/addon-table/components/table/th/th.component.ts
var th_component = __webpack_require__(96408);
// EXTERNAL MODULE: ./projects/addon-table/components/table/tbody/tbody.component.ts
var tbody_component = __webpack_require__(57681);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/row.directive.ts
var row_directive = __webpack_require__(35459);
// EXTERNAL MODULE: ./projects/addon-table/components/table/tr/tr.component.ts
var tr_component = __webpack_require__(84190);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/cell.directive.ts
var cell_directive = __webpack_require__(62818);
// EXTERNAL MODULE: ./projects/addon-table/components/table/td/td.component.ts
var td_component = __webpack_require__(48598);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.component.ts
var input_number_component = __webpack_require__(16753);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.directive.ts
var input_number_directive = __webpack_require__(13735);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint.directive.ts
var hint_directive = __webpack_require__(67446);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-driver.directive.ts
var hint_driver_directive = __webpack_require__(29070);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-hover.directive.ts
var hint_hover_directive = __webpack_require__(54255);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-position.directive.ts
var hint_position_directive = __webpack_require__(15491);
// EXTERNAL MODULE: ./projects/addon-commerce/pipes/currency/currency.pipe.ts
var currency_pipe = __webpack_require__(99886);
// EXTERNAL MODULE: ./projects/kit/pipes/field-error/field-error-content-pipe.ts
var field_error_content_pipe = __webpack_require__(44457);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/field-error/examples/6/index.ts





















function TuiFieldErrorContentPipeExample6_tr_8_td_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 8);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r1 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r1.name, " ");
  }
}

const _6_c0 = function () {
  return [];
};

function TuiFieldErrorContentPipeExample6_tr_8_td_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 8);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-number", 9);
    fesm2015_core/* ɵɵpipe */.ALo(2, "tuiCurrency");
    fesm2015_core/* ɵɵpipe */.ALo(3, "tuiFieldErrorContent");
    fesm2015_core/* ɵɵtext */._uU(4, " Price ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const i_r2 = fesm2015_core/* ɵɵnextContext */.oxw().index;
    const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("postfix", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 3, "UGX"))("formControl", ctx_r4.controls[i_r2])("tuiHint", fesm2015_core/* ɵɵpipeBind1 */.lcZ(3, 5, fesm2015_core/* ɵɵpureFunction0 */.DdM(7, _6_c0)));
  }
}

function TuiFieldErrorContentPipeExample6_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tr", 6);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiFieldErrorContentPipeExample6_tr_8_td_1_Template, 2, 1, "td", 7);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiFieldErrorContentPipeExample6_tr_8_td_2_Template, 5, 8, "td", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "name");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiCell", "price");
  }
}

let TuiFieldErrorContentPipeExample6 = /*#__PURE__*/(() => {
  class TuiFieldErrorContentPipeExample6 {
    constructor() {
      this.data = [{
        name: `Latte`
      }, {
        name: `Cappuccino`
      }];
      this.latteControl = new fesm2015_forms/* FormControl */.NI(null, [fesm2015_forms/* Validators.required */.kI.required, fesm2015_forms/* Validators.max */.kI.max(6)]);
      this.cappuccinoControl = new fesm2015_forms/* FormControl */.NI(null, [fesm2015_forms/* Validators.required */.kI.required, fesm2015_forms/* Validators.max */.kI.max(5)]);
      this.controls = [this.latteControl, this.cappuccinoControl];
      this.columns = [`name`, `price`];
    }

  }

  TuiFieldErrorContentPipeExample6.ɵfac = function TuiFieldErrorContentPipeExample6_Factory(t) {
    return new (t || TuiFieldErrorContentPipeExample6)();
  };

  TuiFieldErrorContentPipeExample6.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFieldErrorContentPipeExample6,
    selectors: [["tui-field-error-content-pipe-example-6"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: kit.TUI_VALIDATION_ERRORS,
      useValue: {
        required: `Enter this!`,
        max: context => `Too expensive, max ${context.max}`
      }
    }])],
    decls: 9,
    vars: 4,
    consts: [["tuiTable", "", 1, "table", 3, "columns"], ["tuiThGroup", ""], ["tuiTh", "", 3, "resizable"], ["tuiTh", ""], ["tuiTbody", "", 3, "data"], ["tuiTr", "", 4, "tuiRow", "tuiRowOf"], ["tuiTr", ""], ["tuiTd", "", 4, "tuiCell"], ["tuiTd", ""], ["tuiHintDirection", "right", 3, "postfix", "formControl", "tuiHint"]],
    template: function TuiFieldErrorContentPipeExample6_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "table", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "thead");
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tr", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "th", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " Name ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "th", 3);
        fesm2015_core/* ɵɵtext */._uU(6, "Price");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tbody", 4);
        fesm2015_core/* ɵɵtemplate */.YNc(8, TuiFieldErrorContentPipeExample6_tr_8_Template, 3, 2, "tr", 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("columns", ctx.columns);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("resizable", true);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("data", ctx.data);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiRowOf", ctx.data);
      }
    },
    directives: [table_directive/* TuiTableDirective */.c, th_group_component/* TuiThGroupComponent */.E, th_component/* TuiThComponent */.W, tbody_component/* TuiTbodyComponent */.j, row_directive/* TuiRowDirective */.L, tr_component/* TuiTrComponent */.f, cell_directive/* TuiCellDirective */.B, td_component/* TuiTdComponent */.K, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, hint_directive/* TuiHintDirective */.D, hint_driver_directive/* TuiHintDriverDirective */.x, hint_hover_directive/* TuiHintHoverDirective */.t, hint_position_directive/* TuiHintPositionDirective */.D],
    pipes: [currency_pipe/* TuiCurrencyPipe */.i, field_error_content_pipe/* TuiFieldErrorContentPipe */.y],
    styles: [".table[_ngcontent-%COMP%]{width:100%;table-layout:fixed}.error[_ngcontent-%COMP%]{color:#fff}"],
    changeDetection: 0
  });
  return TuiFieldErrorContentPipeExample6;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/field-error/field-error.component.ts














function ExampleTuiFieldErrorPipeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵelement */._UZ(6, "code");
    fesm2015_core/* ɵɵelement */._UZ(7, "a", 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-field-error-pipe-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-field-error-pipe-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(13, "tui-field-error-pipe-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-field-error-pipe-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(17, "tui-field-error-pipe-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(18, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelement */._UZ(19, "tui-field-error-content-pipe-example-6");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(8);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example6);
  }
}

function ExampleTuiFieldErrorPipeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 11);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 12);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 13);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 14);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleHtml);
  }
}

let ExampleTuiFieldErrorPipeComponent = /*#__PURE__*/(() => {
  class ExampleTuiFieldErrorPipeComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 97011).then(__webpack_require__.t.bind(__webpack_require__, 97011, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 85093).then(__webpack_require__.t.bind(__webpack_require__, 85093, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 98695).then(__webpack_require__.t.bind(__webpack_require__, 98695, 17)),
        HTML: __webpack_require__.e(/* import() */ 72178).then(__webpack_require__.t.bind(__webpack_require__, 72178, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 14720).then(__webpack_require__.t.bind(__webpack_require__, 14720, 17)),
        HTML: __webpack_require__.e(/* import() */ 93850).then(__webpack_require__.t.bind(__webpack_require__, 93850, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 4697).then(__webpack_require__.t.bind(__webpack_require__, 4697, 17)),
        HTML: __webpack_require__.e(/* import() */ 18777).then(__webpack_require__.t.bind(__webpack_require__, 18777, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 79147).then(__webpack_require__.t.bind(__webpack_require__, 79147, 17)),
        HTML: __webpack_require__.e(/* import() */ 39218).then(__webpack_require__.t.bind(__webpack_require__, 39218, 17)),
        LESS: __webpack_require__.e(/* import() */ 37605).then(__webpack_require__.t.bind(__webpack_require__, 37605, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 19684).then(__webpack_require__.t.bind(__webpack_require__, 19684, 17)),
        HTML: __webpack_require__.e(/* import() */ 52261).then(__webpack_require__.t.bind(__webpack_require__, 52261, 17)),
        LESS: __webpack_require__.e(/* import() */ 74547).then(__webpack_require__.t.bind(__webpack_require__, 74547, 17))
      };
      this.example6 = {
        TypeScript: __webpack_require__.e(/* import() */ 52108).then(__webpack_require__.t.bind(__webpack_require__, 52108, 17)),
        HTML: __webpack_require__.e(/* import() */ 91072).then(__webpack_require__.t.bind(__webpack_require__, 91072, 17)),
        LESS: __webpack_require__.e(/* import() */ 67129).then(__webpack_require__.t.bind(__webpack_require__, 67129, 17))
      };
    }

  }

  ExampleTuiFieldErrorPipeComponent.ɵfac = function ExampleTuiFieldErrorPipeComponent_Factory(t) {
    return new (t || ExampleTuiFieldErrorPipeComponent)();
  };

  ExampleTuiFieldErrorPipeComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiFieldErrorPipeComponent,
    selectors: [["example-field-error-pipe"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__2 = goog.getMsg("Basic");
        i18n_1 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8087109270529539309$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__4 = goog.getMsg("With custom messages for validators");
        i18n_3 = MSG_EXTERNAL_8087109270529539309$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟878e6fe461fd9ca2712122350e24522f5de8fd18␟8087109270529539309:With custom messages for validators`;
      }

      let i18n_5;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7592818721454246340$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__6 = goog.getMsg("with a template");
        i18n_5 = MSG_EXTERNAL_7592818721454246340$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__6;
      } else {
        i18n_5 = $localize`:␟beedd8b329a8f8773c3b0f41eefeeb5e601578a9␟7592818721454246340:with a template`;
      }

      let i18n_7;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_296183290148574667$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__8 = goog.getMsg("With adding new controls (FormArray)");
        i18n_7 = MSG_EXTERNAL_296183290148574667$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__8;
      } else {
        i18n_7 = $localize`:␟f168335edcd7a2503812f5cdb86f5fdf3f53881e␟296183290148574667:With adding new controls (FormArray)`;
      }

      let i18n_9;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2219993318238885702$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__10 = goog.getMsg("async validator");
        i18n_9 = MSG_EXTERNAL_2219993318238885702$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__10;
      } else {
        i18n_9 = $localize`:␟4dd4c0a5cc2f0b5edcf6ce49c7de250516eb991e␟2219993318238885702:async validator`;
      }

      let i18n_11;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2645314855951305243$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__12 = goog.getMsg("tuiFieldErrorContentPipe");
        i18n_11 = MSG_EXTERNAL_2645314855951305243$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__12;
      } else {
        i18n_11 = $localize`:␟cd32fd6943404603d4285581b8c6fc926a23eec0␟2645314855951305243:tuiFieldErrorContentPipe`;
      }

      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_362690177758388643$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__13 = goog.getMsg("{$startParagraph} FieldErrorPipe takes order of errors as array and transform it to {$startTagCode}TuiValidationError{$closeTagCode} . Can be used with {$startTagCode}TuiError{$closeTagCode}{$closeParagraph}{$startParagraph} You can also use {$startTagCode}tuiFieldErrorContentPipe{$closeTagCode} with {$startTagCode}TuiHint{$closeTagCode} (see {$startLink} tuiFieldErrorContentPipe example {$closeLink} ). It returns a content of the TuiValidationError. {$closeParagraph}{$startTagTuiDocExample}{$startTagTuiFieldErrorPipeExample_1}{$closeTagTuiFieldErrorPipeExample_1}{$closeTagTuiDocExample}{$startTagTuiDocExample_1}{$startTagTuiFieldErrorPipeExample_2}{$closeTagTuiFieldErrorPipeExample_2}{$closeTagTuiDocExample}{$startTagTuiDocExample_2}{$startTagTuiFieldErrorPipeExample_3}{$closeTagTuiFieldErrorPipeExample_3}{$closeTagTuiDocExample}{$startTagTuiDocExample_3}{$startTagTuiFieldErrorPipeExample_4}{$closeTagTuiFieldErrorPipeExample_4}{$closeTagTuiDocExample}{$startTagTuiDocExample_4}{$startTagTuiFieldErrorPipeExample_5}{$closeTagTuiFieldErrorPipeExample_5}{$closeTagTuiDocExample}{$startTagTuiDocExample_5}{$startTagTuiFieldErrorContentPipeExample_6}{$closeTagTuiFieldErrorContentPipeExample_6}{$closeTagTuiDocExample}", {
          "startParagraph": "[\uFFFD#1\uFFFD|\uFFFD#4\uFFFD]",
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]",
          "closeParagraph": "[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD]",
          "startLink": "\uFFFD#7\uFFFD",
          "closeLink": "\uFFFD/#7\uFFFD",
          "startTagTuiDocExample": "\uFFFD#8\uFFFD",
          "startTagTuiFieldErrorPipeExample_1": "\uFFFD#9\uFFFD",
          "closeTagTuiFieldErrorPipeExample_1": "\uFFFD/#9\uFFFD",
          "closeTagTuiDocExample": "[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD]",
          "startTagTuiDocExample_1": "\uFFFD#10\uFFFD",
          "startTagTuiFieldErrorPipeExample_2": "\uFFFD#11\uFFFD",
          "closeTagTuiFieldErrorPipeExample_2": "\uFFFD/#11\uFFFD",
          "startTagTuiDocExample_2": "\uFFFD#12\uFFFD",
          "startTagTuiFieldErrorPipeExample_3": "\uFFFD#13\uFFFD",
          "closeTagTuiFieldErrorPipeExample_3": "\uFFFD/#13\uFFFD",
          "startTagTuiDocExample_3": "\uFFFD#14\uFFFD",
          "startTagTuiFieldErrorPipeExample_4": "\uFFFD#15\uFFFD",
          "closeTagTuiFieldErrorPipeExample_4": "\uFFFD/#15\uFFFD",
          "startTagTuiDocExample_4": "\uFFFD#16\uFFFD",
          "startTagTuiFieldErrorPipeExample_5": "\uFFFD#17\uFFFD",
          "closeTagTuiFieldErrorPipeExample_5": "\uFFFD/#17\uFFFD",
          "startTagTuiDocExample_5": "\uFFFD#18\uFFFD",
          "startTagTuiFieldErrorContentPipeExample_6": "\uFFFD#19\uFFFD",
          "closeTagTuiFieldErrorContentPipeExample_6": "\uFFFD/#19\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_362690177758388643$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__13;
      } else {
        i18n_0 = $localize`:␟42c69b6d2ac097886f22a489d25b3d405635b997␟362690177758388643:${"[\uFFFD#1\uFFFD|\uFFFD#4\uFFFD]"}:START_PARAGRAPH: FieldErrorPipe takes order of errors as array and transform it to ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:TuiValidationError${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: . Can be used with ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:TuiError${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_PARAGRAPH:${"[\uFFFD#1\uFFFD|\uFFFD#4\uFFFD]"}:START_PARAGRAPH: You can also use ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:tuiFieldErrorContentPipe${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: with ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:TuiHint${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: (see ${"\uFFFD#7\uFFFD"}:START_LINK: tuiFieldErrorContentPipe example ${"\uFFFD/#7\uFFFD"}:CLOSE_LINK: ). It returns a content of the TuiValidationError. ${"[\uFFFD/#1\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_PARAGRAPH:${"\uFFFD#8\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#9\uFFFD"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_1:${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_1:${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#10\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\uFFFD#11\uFFFD"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_2:${"\uFFFD/#11\uFFFD"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_2:${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#12\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_2:${"\uFFFD#13\uFFFD"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_3:${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_3:${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#14\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_3:${"\uFFFD#15\uFFFD"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_4:${"\uFFFD/#15\uFFFD"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_4:${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#16\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_4:${"\uFFFD#17\uFFFD"}:START_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_5:${"\uFFFD/#17\uFFFD"}:CLOSE_TAG_TUI_FIELD_ERROR_PIPE_EXAMPLE_5:${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#18\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_5:${"\uFFFD#19\uFFFD"}:START_TAG_TUI_FIELD_ERROR_CONTENT_PIPE_EXAMPLE_6:${"\uFFFD/#19\uFFFD"}:CLOSE_TAG_TUI_FIELD_ERROR_CONTENT_PIPE_EXAMPLE_6:${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD|\uFFFD/#16\uFFFD|\uFFFD/#18\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3384755420899190664$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__15 = goog.getMsg(" Import {$startTagCode}TuiFieldErrorPipeModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_3384755420899190664$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟121f4dac7c3383d54e07bb2845ac74f2ade59411␟3384755420899190664: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiFieldErrorPipeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_412868639087182729$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__17 = goog.getMsg("Use pipe in template:");
        i18n_16 = MSG_EXTERNAL_412868639087182729$$PROJECTS_DEMO_SRC_MODULES_PIPES_FIELD_ERROR_FIELD_ERROR_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟0946c7e6e1334eb04ea506cdd9864968aecc69cb␟412868639087182729:Use pipe in template:`;
      }

      return [["header", "FieldError", "package", "KIT", "type", "pipes"], ["pageTab", ""], ["pageTab", "Setup"], i18n_0, ["tuiLink", "", "routerLink", ".", "fragment", "content"], ["id", "base", "heading", i18n_1, 3, "content"], ["id", "customMessages", "heading", i18n_3, 3, "content"], ["id", "patterns", "heading", i18n_5, 3, "content"], ["id", "formArray", "heading", i18n_7, 3, "content"], ["id", "async", "heading", i18n_9, 3, "content"], ["id", "content", "heading", i18n_11, 3, "content"], [1, "b-demo-steps"], i18n_14, ["filename", "myComponent.module.ts", 3, "code"], i18n_16, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiFieldErrorPipeComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiFieldErrorPipeComponent_ng_template_1_Template, 20, 6, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiFieldErrorPipeComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiFieldErrorPipeExample1, TuiFieldErrorPipeExample2, TuiFieldErrorPipeExample3, TuiFieldErrorPipeExample4, TuiFieldErrorPipeExample5, TuiFieldErrorContentPipeExample6, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiFieldErrorPipeComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/field-error/field-error.module.ts


















let ExampleTuiFieldErrorModule = /*#__PURE__*/(() => {
  class ExampleTuiFieldErrorModule {}

  ExampleTuiFieldErrorModule.ɵfac = function ExampleTuiFieldErrorModule_Factory(t) {
    return new (t || ExampleTuiFieldErrorModule)();
  };

  ExampleTuiFieldErrorModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiFieldErrorModule
  });
  ExampleTuiFieldErrorModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, core.TuiTextfieldControllerModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, core.TuiLabelModule, core.TuiHintModule, kit.TuiInputModule, core.TuiButtonModule, kit.TuiInputPhoneModule, kit.TuiInputCountModule, core.TuiLinkModule, addon_table.TuiTableModule, core.TuiHintModule, kit.TuiInputNumberModule, addon_commerce.TuiCurrencyPipeModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiFieldErrorPipeComponent))]]
  });
  return ExampleTuiFieldErrorModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiFieldErrorModule, {
    declarations: [ExampleTuiFieldErrorPipeComponent, TuiFieldErrorPipeExample1, TuiFieldErrorPipeExample2, TuiFieldErrorPipeExample3, TuiFieldErrorPipeExample4, TuiFieldErrorPipeExample5, TuiFieldErrorContentPipeExample6],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, core.TuiTextfieldControllerModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, core.TuiLabelModule, core.TuiHintModule, kit.TuiInputModule, core.TuiButtonModule, kit.TuiInputPhoneModule, kit.TuiInputCountModule, core.TuiLinkModule, addon_table.TuiTableModule, core.TuiHintModule, kit.TuiInputNumberModule, addon_commerce.TuiCurrencyPipeModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, router/* RouterModule */.Bz],
    exports: [ExampleTuiFieldErrorPipeComponent]
  });
})();

/***/ })

}]);