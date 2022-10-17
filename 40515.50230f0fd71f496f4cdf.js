"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[40515],{

/***/ 40515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputDateModule": () => (/* binding */ ExampleTuiInputDateModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/addon-mobile/index.ts + 34 modules
var addon_mobile = __webpack_require__(75650);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/kit/components/input-date/input-date.component.ts
var input_date_component = __webpack_require__(41833);
// EXTERNAL MODULE: ./projects/kit/components/input-date/input-date.directive.ts
var input_date_directive = __webpack_require__(40813);
// EXTERNAL MODULE: ./projects/kit/directives/unfinished-validator/unfinished-validator.directive.ts
var unfinished_validator_directive = __webpack_require__(31510);
// EXTERNAL MODULE: ./projects/core/components/error/error.component.ts
var error_component = __webpack_require__(36951);
// EXTERNAL MODULE: ./projects/kit/pipes/field-error/field-error-pipe.ts
var field_error_pipe = __webpack_require__(7114);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date/examples/1/index.ts












const _c2 = function () {
  return [];
};

let TuiInputDateExample1 = /*#__PURE__*/(() => {
  class TuiInputDateExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(new cdk.TuiDay(2017, 0, 15))
      });
    }

  }

  TuiInputDateExample1.ɵfac = function TuiInputDateExample1_Factory(t) {
    return new (t || TuiInputDateExample1)();
  };

  TuiInputDateExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputDateExample1,
    selectors: [["tui-input-date-example-1"]],
    decls: 9,
    vars: 8,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_918573850120182890$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_EXAMPLES_1_INDEX_TS_1 = goog.getMsg(" If a field is optional, but unfinished field should be marked as invalid, use {$startTagCode}tuiUnfinishedValidator{$closeTagCode} directive ", {
          "startTagCode": "\uFFFD#3\uFFFD",
          "closeTagCode": "\uFFFD/#3\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_918573850120182890$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟94fc108253bd1502cd271951ce40db76787fe618␟918573850120182890: If a field is optional, but unfinished field should be marked as invalid, use ${"\uFFFD#3\uFFFD"}:START_TAG_CODE:tuiUnfinishedValidator${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE: directive `;
      }

      return [[1, "b-form", 3, "formGroup", "tuiTextfieldCleaner"], i18n_0, ["tuiUnfinishedValidator", "Finish filling the field", "formControlName", "testValue"], ["formControlName", "testValue", 3, "error"]];
    },
    template: function TuiInputDateExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(2, 1);
        fesm2015_core/* ɵɵelement */._UZ(3, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-input-date", 2);
        fesm2015_core/* ɵɵtext */._uU(5, " Choose a date ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(6, "tui-error", 3);
        fesm2015_core/* ɵɵpipe */.ALo(7, "async");
        fesm2015_core/* ɵɵpipe */.ALo(8, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm)("tuiTextfieldCleaner", true);
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(7, 3, fesm2015_core/* ɵɵpipeBind1 */.lcZ(8, 5, fesm2015_core/* ɵɵpureFunction0 */.DdM(7, _c2))));
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, input_date_component/* TuiInputDateComponent */.j, input_date_directive/* TuiInputDateDirective */.k, unfinished_validator_directive/* TuiUnfinishedValidatorDirective */.Q, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, error_component/* TuiErrorComponent */.v],
    pipes: [common/* AsyncPipe */.Ov, field_error_pipe/* TuiFieldErrorPipe */.A],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputDateExample1;
})();
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date/examples/2/index.ts








let TuiInputDateExample2 = /*#__PURE__*/(() => {
  class TuiInputDateExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(new cdk.TuiDay(2017, 2, 15))
      });
    }

  }

  TuiInputDateExample2.ɵfac = function TuiInputDateExample2_Factory(t) {
    return new (t || TuiInputDateExample2)();
  };

  TuiInputDateExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputDateExample2,
    selectors: [["tui-input-date-example-2"]],
    decls: 7,
    vars: 2,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue", "tuiTextfieldSize", "s"], ["formControlName", "testValue", "tuiTextfieldSize", "m", 1, "tui-space_vertical-4", 3, "tuiTextfieldLabelOutside"], ["formControlName", "testValue", "tuiTextfieldSize", "l"]],
    template: function TuiInputDateExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-date", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Choose a date ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input-date", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " Choose a date ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-input-date", 3);
        fesm2015_core/* ɵɵtext */._uU(6, " Choose a date ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_date_component/* TuiInputDateComponent */.j, input_date_directive/* TuiInputDateDirective */.k, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputDateExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date/examples/3/index.ts






let TuiInputDateExample3 = /*#__PURE__*/(() => {
  class TuiInputDateExample3 {
    constructor() {
      this.from = null;
      this.to = null;
      this.min = new cdk.TuiDay(2017, 9, 4);
      this.max = cdk.TuiDay.currentLocal();
      this.items = [new kit.TuiNamedDay(cdk.TUI_LAST_DAY.append({
        year: -1
      }), `Until today`, cdk.TuiDay.currentLocal())];
    }

  }

  TuiInputDateExample3.ɵfac = function TuiInputDateExample3_Factory(t) {
    return new (t || TuiInputDateExample3)();
  };

  TuiInputDateExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputDateExample3,
    selectors: [["tui-input-date-example-3"]],
    decls: 8,
    vars: 6,
    consts: [[1, "tui-text_h4"], [1, "b-form"], [3, "min", "max", "ngModel", "ngModelChange"], [3, "min", "items", "ngModel", "ngModelChange"]],
    template: function TuiInputDateExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "h2", 0);
        fesm2015_core/* ɵɵtext */._uU(1, "Taiga UI usage experience");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "p", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input-date", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiInputDateExample3_Template_tui_input_date_ngModelChange_3_listener($event) {
          return ctx.from = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(4, " Start ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "p", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-input-date", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiInputDateExample3_Template_tui_input_date_ngModelChange_6_listener($event) {
          return ctx.to = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(7, " Finish ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("min", ctx.min)("max", ctx.max)("ngModel", ctx.from);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("min", ctx.from || ctx.min)("items", ctx.items)("ngModel", ctx.to);
      }
    },
    directives: [input_date_component/* TuiInputDateComponent */.j, input_date_directive/* TuiInputDateDirective */.k, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputDateExample3;
})();
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date/examples/4/index.ts








let TuiInputDateExample4 = /*#__PURE__*/(() => {
  class TuiInputDateExample4 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI(new cdk.TuiDay(2017, 0, 15));
    }

  }

  TuiInputDateExample4.ɵfac = function TuiInputDateExample4_Factory(t) {
    return new (t || TuiInputDateExample4)();
  };

  TuiInputDateExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputDateExample4,
    selectors: [["tui-input-date-example-4"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: cdk.TUI_DATE_FORMAT,
      useValue: `YMD`
    }, {
      provide: cdk.TUI_DATE_SEPARATOR,
      useValue: `/`
    }])],
    decls: 11,
    vars: 1,
    consts: [[1, "tui-space_bottom-4", "b-form"], [1, "b-form", 3, "formControl"], ["tuiTextfield", "", "autocomplete", "bday"]],
    template: function TuiInputDateExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-notification", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " If you need to set some attributes or listen to events on native ");
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "code");
        fesm2015_core/* ɵɵtext */._uU(3, "input");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(4, " , you can put it inside with ");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "code");
        fesm2015_core/* ɵɵtext */._uU(6, "Textfield");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(7, " directive as shown below\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-input-date", 1);
        fesm2015_core/* ɵɵtext */._uU(9, " Choose a date ");
        fesm2015_core/* ɵɵelement */._UZ(10, "input", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(8);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control);
      }
    },
    directives: [notification_component/* TuiNotificationComponent */.L, input_date_component/* TuiInputDateComponent */.j, input_date_directive/* TuiInputDateDirective */.k, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_component/* TuiTextfieldComponent */.M],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputDateExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date/examples/5/native-date-transformer.directive.ts



let ExampleTransformer = /*#__PURE__*/(() => {
  class ExampleTransformer {
    fromControlValue(controlValue) {
      return controlValue && cdk.TuiDay.fromLocalNativeDate(controlValue);
    }

    toControlValue(componentValue) {
      return (componentValue === null || componentValue === void 0 ? void 0 : componentValue.toLocalNativeDate()) || null;
    }

  }

  ExampleTransformer.ɵfac = function ExampleTransformer_Factory(t) {
    return new (t || ExampleTransformer)();
  };

  ExampleTransformer.ɵprov = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjectable */.Yz7({
    token: ExampleTransformer,
    factory: ExampleTransformer.ɵfac
  });
  return ExampleTransformer;
})();
let ExampleNativeDateTransformerDirective = /*#__PURE__*/(() => {
  class ExampleNativeDateTransformerDirective {}

  ExampleNativeDateTransformerDirective.ɵfac = function ExampleNativeDateTransformerDirective_Factory(t) {
    return new (t || ExampleNativeDateTransformerDirective)();
  };

  ExampleNativeDateTransformerDirective.ɵdir = /*@__PURE__*/fesm2015_core/* ɵɵdefineDirective */.lG2({
    type: ExampleNativeDateTransformerDirective,
    selectors: [["tui-input-date", "toNativeDate", ""]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: kit.TUI_DATE_VALUE_TRANSFORMER,
      useClass: ExampleTransformer
    }])]
  });
  return ExampleNativeDateTransformerDirective;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date/examples/5/index.ts







let TuiInputDateExample5 = /*#__PURE__*/(() => {
  class TuiInputDateExample5 {
    constructor() {
      this.nativeDateControl = new fesm2015_forms/* FormControl */.NI(new Date(2022, 0, 26));
      this.defaultControl = new fesm2015_forms/* FormControl */.NI(new cdk.TuiDay(2022, 0, 26));
    }

  }

  TuiInputDateExample5.ɵfac = function TuiInputDateExample5_Factory(t) {
    return new (t || TuiInputDateExample5)();
  };

  TuiInputDateExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputDateExample5,
    selectors: [["tui-input-date-example-5"]],
    decls: 24,
    vars: 4,
    consts: [[1, "b-form", 3, "formControl"], ["toNativeDate", "", 1, "b-form", 3, "formControl"]],
    template: function TuiInputDateExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "h3");
        fesm2015_core/* ɵɵtext */._uU(1, "Control's output as TuiDay (default)");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input-date", 0);
        fesm2015_core/* ɵɵtext */._uU(3, " Choose a date\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
        fesm2015_core/* ɵɵtext */._uU(5, "Stringified control value:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "code");
        fesm2015_core/* ɵɵtext */._uU(8);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(9, "hr");
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "h3");
        fesm2015_core/* ɵɵtext */._uU(11, "Control's output as native Date");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "p");
        fesm2015_core/* ɵɵtext */._uU(13, " (see ");
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "code");
        fesm2015_core/* ɵɵtext */._uU(15, "toNativeDate");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(16, " directive)\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(17, "tui-input-date", 1);
        fesm2015_core/* ɵɵtext */._uU(18, " Choose a date\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(19, "p");
        fesm2015_core/* ɵɵtext */._uU(20, "Stringified control value:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(21, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(22, "code");
        fesm2015_core/* ɵɵtext */._uU(23);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.defaultControl);
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx.defaultControl.value);
        fesm2015_core/* ɵɵadvance */.xp6(9);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.nativeDateControl);
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx.nativeDateControl.value);
      }
    },
    directives: [input_date_component/* TuiInputDateComponent */.j, input_date_directive/* TuiInputDateDirective */.k, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, ExampleNativeDateTransformerDirective],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputDateExample5;
})();
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/control.ts
var control = __webpack_require__(82880);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts
var abstract_props_accessor = __webpack_require__(98204);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts
var inherited_documentation_component = __webpack_require__(54218);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-icon-left.directive.ts
var textfield_icon_left_directive = __webpack_require__(3729);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date/input-date.component.ts
































function ExampleTuiInputDateComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "h3");
    fesm2015_core/* ɵɵi18n */.SDv(4, 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "dl");
    fesm2015_core/* ɵɵi18nStart */.tHW(6, 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "dt");
    fesm2015_core/* ɵɵelement */._UZ(8, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "dd", 6);
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "dt");
    fesm2015_core/* ɵɵelement */._UZ(12, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(13, "dd");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "p", 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "a", 7);
    fesm2015_core/* ɵɵtext */._uU(16, " See example ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(17, " with the usage of these tokens. ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(18, "h3");
    fesm2015_core/* ɵɵi18n */.SDv(19, 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "dl");
    fesm2015_core/* ɵɵi18nStart */.tHW(21, 9);
    fesm2015_core/* ɵɵelementStart */.TgZ(22, "dt");
    fesm2015_core/* ɵɵelement */._UZ(23, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(24, "dd");
    fesm2015_core/* ɵɵelement */._UZ(25, "a", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(26, "p");
    fesm2015_core/* ɵɵelement */._UZ(27, "a", 11);
    fesm2015_core/* ɵɵelement */._UZ(28, "a", 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(29, "tui-doc-example", 13);
    fesm2015_core/* ɵɵelement */._UZ(30, "tui-input-date-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(31, "tui-doc-example", 14);
    fesm2015_core/* ɵɵelement */._UZ(32, "tui-input-date-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(33, "tui-doc-example", 15);
    fesm2015_core/* ɵɵelement */._UZ(34, "tui-input-date-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(35, "tui-doc-example", 16);
    fesm2015_core/* ɵɵelement */._UZ(36, "tui-input-date-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(37, "tui-doc-example", 17);
    fesm2015_core/* ɵɵelement */._UZ(38, "tui-input-date-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(29);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
  }
}

function ExampleTuiInputDateComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-date", 26);
    fesm2015_core/* ɵɵtext */._uU(1, " Choose a date ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("focusable", ctx_r3.focusable)("min", ctx_r3.min)("max", ctx_r3.max)("markerHandler", ctx_r3.markerHandler)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoInvalid", ctx_r3.pseudoInvalid)("readOnly", ctx_r3.readOnly)("disabledItemHandler", ctx_r3.disabledItemHandler)("items", ctx_r3.items)("tuiTextfieldIconLeft", ctx_r3.iconLeft)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintAppearance", ctx_r3.hintAppearance);
  }
}

function ExampleTuiInputDateComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 27);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputDateComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 28);
    fesm2015_core/* ɵɵelement */._UZ(1, "div");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputDateComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 29);
  }
}

function ExampleTuiInputDateComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 30);
  }
}

function ExampleTuiInputDateComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 31);
  }
}

function ExampleTuiInputDateComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 32);
  }
}

function ExampleTuiInputDateComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 18);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputDateComponent_ng_template_2_ng_template_1_Template, 2, 18, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputDateComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputDateComponent_ng_template_2_ng_template_4_Template, 3, 0, "ng-template", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.disabledItemHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiInputDateComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 21);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.items = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputDateComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 22);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.markerHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiInputDateComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 23);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiInputDateComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 24);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.max = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "inherited-documentation", 25);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.itemsVariants)("documentationPropertyValue", ctx_r1.items);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.markerHandlerVariants)("documentationPropertyValue", ctx_r1.markerHandler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("dropdown", true);
  }
}

function ExampleTuiInputDateComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 33);
    fesm2015_core/* ɵɵelement */._UZ(2, "a", 34);
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵelement */._UZ(5, "a", 35);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "ol", 36);
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(9, 37);
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 38);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(14, 39);
    fesm2015_core/* ɵɵelement */._UZ(15, "code");
    fesm2015_core/* ɵɵelement */._UZ(16, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(17, "tui-doc-code", 40);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(18, "li");
    fesm2015_core/* ɵɵtext */._uU(19, " Use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "code");
    fesm2015_core/* ɵɵtext */._uU(21, "TuiInputDate");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(22, " in template: ");
    fesm2015_core/* ɵɵelement */._UZ(23, "tui-doc-code", 41);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(11);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleForm);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

const TWO_DOTS = [`var(--tui-primary)`, `var(--tui-info-fill)`];
const ONE_DOT = [`var(--tui-success-fill)`];
let ExampleTuiInputDateComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputDateComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleForm = __webpack_require__.e(/* import() */ 90463).then(__webpack_require__.t.bind(__webpack_require__, 90463, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 83168).then(__webpack_require__.t.bind(__webpack_require__, 83168, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 20862).then(__webpack_require__.t.bind(__webpack_require__, 20862, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 84625).then(__webpack_require__.t.bind(__webpack_require__, 84625, 17)),
        HTML: __webpack_require__.e(/* import() */ 99226).then(__webpack_require__.t.bind(__webpack_require__, 99226, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 31617).then(__webpack_require__.t.bind(__webpack_require__, 31617, 17)),
        HTML: __webpack_require__.e(/* import() */ 64576).then(__webpack_require__.t.bind(__webpack_require__, 64576, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 96459).then(__webpack_require__.t.bind(__webpack_require__, 96459, 17)),
        HTML: __webpack_require__.e(/* import() */ 74187).then(__webpack_require__.t.bind(__webpack_require__, 74187, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 54884).then(__webpack_require__.t.bind(__webpack_require__, 54884, 17)),
        HTML: __webpack_require__.e(/* import() */ 54075).then(__webpack_require__.t.bind(__webpack_require__, 54075, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 39403).then(__webpack_require__.t.bind(__webpack_require__, 39403, 17)),
        HTML: __webpack_require__.e(/* import() */ 54544).then(__webpack_require__.t.bind(__webpack_require__, 54544, 17)),
        'native-date-transformer.directive.ts': __webpack_require__.e(/* import() */ 43784).then(__webpack_require__.t.bind(__webpack_require__, 43784, 17))
      };
      this.minVariants = [cdk.TUI_FIRST_DAY, new cdk.TuiDay(2017, 2, 5), new cdk.TuiDay(1900, 0, 1)];
      this.min = this.minVariants[0];
      this.maxVariants = [cdk.TUI_LAST_DAY, new cdk.TuiDay(2017, 11, 11), new cdk.TuiDay(2020, 2, 5), new cdk.TuiDay(2300, 0, 1)];
      this.max = this.maxVariants[0];
      this.disabledItemHandlerVariants = [cdk.ALWAYS_FALSE_HANDLER, ({
        day
      }) => day % 3 === 0];
      this.disabledItemHandler = this.disabledItemHandlerVariants[0];
      this.itemsVariants = [[], [new kit.TuiNamedDay(cdk.TUI_LAST_DAY.append({
        year: -1
      }), `Until today`)]];
      this.markerHandlerVariants = [core.TUI_DEFAULT_MARKER_HANDLER, day => day.day % 2 === 0 ? TWO_DOTS : ONE_DOT];
      this.markerHandler = this.markerHandlerVariants[0];
      this.items = this.itemsVariants[0];
      this.autocompleteVariants = [`off`, `bday`];
      this.autocomplete = ``;
      this.cleaner = false;
      this.control = new fesm2015_forms/* FormControl */.NI(null, fesm2015_forms/* Validators.required */.kI.required);
    }

  }

  ExampleTuiInputDateComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputDateComponent_BaseFactory;
    return function ExampleTuiInputDateComponent_Factory(t) {
      return (ɵExampleTuiInputDateComponent_BaseFactory || (ɵExampleTuiInputDateComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputDateComponent)))(t || ExampleTuiInputDateComponent);
    };
  }();

  ExampleTuiInputDateComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputDateComponent,
    selectors: [["example-tui-input-date"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputDateComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2917939038176412665$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}InputDate{$closeTagCode} \u2013 input with a calendar. ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_2917939038176412665$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟fc2811ea354291326a11dd08fc35a97719f75c2d␟2917939038176412665:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputDate${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: – input with a calendar. `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9067186024080940878$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__3 = goog.getMsg("DI-tokens for date localization:");
        i18n_2 = MSG_EXTERNAL_9067186024080940878$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟44191f6f2084b7e19ed30289598f45f6dc88ef96␟9067186024080940878:DI-tokens for date localization:`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5888187430077433259$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__5 = goog.getMsg("{$startTagDt}{$startTagCode}TUI_DATE_FORMAT{$closeTagCode}{$closeTagDt}{$startTagDd} active date format ( {$startTagCode}'DMY' | 'MDY' | 'YMD'{$closeTagCode} ). {$closeTagDd}{$startTagDt}{$startTagCode}TUI_DATE_SEPARATOR{$closeTagCode}{$closeTagDt}{$startTagDd_1}single-character date's separator (dot, slash etc.).{$closeTagDd}", {
          "startTagDt": "[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]",
          "startTagCode": "[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]",
          "closeTagCode": "[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]",
          "closeTagDt": "[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]",
          "startTagDd": "\uFFFD#9\uFFFD",
          "closeTagDd": "[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]",
          "startTagDd_1": "\uFFFD#13\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_5888187430077433259$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟ce9790eaf90c30d2b6ab0af894665e9a649da178␟5888187430077433259:${"[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_DT:${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TUI_DATE_FORMAT${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_DT:${"\uFFFD#9\uFFFD"}:START_TAG_DD: active date format ( ${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:'DMY' | 'MDY' | 'YMD'${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE: ). ${"[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_DD:${"[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_DT:${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TUI_DATE_SEPARATOR${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_DT:${"\uFFFD#13\uFFFD"}:START_TAG_DD_1:single-character date's separator (dot, slash etc.).${"[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_DD:`;
      }

      i18n_4 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_4);
      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4839071173512899768$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__7 = goog.getMsg("DI-tokens for input-configurations:");
        i18n_6 = MSG_EXTERNAL_4839071173512899768$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟1e189ebe2d938d6aaa6a9a2f9adeff1e3b372aac␟4839071173512899768:DI-tokens for input-configurations:`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8174380454533362440$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__9 = goog.getMsg("{$startTagDt}{$startTagCode}TUI_DATE_VALUE_TRANSFORMER{$closeTagCode}{$closeTagDt}{$startTagDd} custom format of control output ( {$startLink} TuiDay {$closeLink} is default). {$startParagraph}{$startLink_1} See example {$closeLink} with built-in {$startLink_2} Date {$closeLink} object as control's output. {$closeParagraph}{$closeTagDd}", {
          "startTagDt": "\uFFFD#22\uFFFD",
          "startTagCode": "\uFFFD#23\uFFFD",
          "closeTagCode": "\uFFFD/#23\uFFFD",
          "closeTagDt": "\uFFFD/#22\uFFFD",
          "startTagDd": "\uFFFD#24\uFFFD",
          "startLink": "\uFFFD#25\uFFFD",
          "closeLink": "[\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD]",
          "startParagraph": "\uFFFD#26\uFFFD",
          "startLink_1": "\uFFFD#27\uFFFD",
          "startLink_2": "\uFFFD#28\uFFFD",
          "closeParagraph": "\uFFFD/#26\uFFFD",
          "closeTagDd": "\uFFFD/#24\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_8174380454533362440$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟c3dbb47cc33bb0541b868b672596570b063d5377␟8174380454533362440:${"\uFFFD#22\uFFFD"}:START_TAG_DT:${"\uFFFD#23\uFFFD"}:START_TAG_CODE:TUI_DATE_VALUE_TRANSFORMER${"\uFFFD/#23\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#22\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#24\uFFFD"}:START_TAG_DD: custom format of control output ( ${"\uFFFD#25\uFFFD"}:START_LINK: TuiDay ${"[\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD]"}:CLOSE_LINK: is default). ${"\uFFFD#26\uFFFD"}:START_PARAGRAPH:${"\uFFFD#27\uFFFD"}:START_LINK_1: See example ${"[\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD]"}:CLOSE_LINK: with built-in ${"\uFFFD#28\uFFFD"}:START_LINK_2: Date ${"[\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#28\uFFFD]"}:CLOSE_LINK: object as control's output. ${"\uFFFD/#26\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD/#24\uFFFD"}:CLOSE_TAG_DD:`;
      }

      i18n_8 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_8);
      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__11 = goog.getMsg("Basic");
        i18n_10 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__13 = goog.getMsg("sizes");
        i18n_12 = MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6714747026286972804$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__15 = goog.getMsg("With named dates");
        i18n_14 = MSG_EXTERNAL_6714747026286972804$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟eb73759f9121c31958ef3331f1a481a509877cb5␟6714747026286972804:With named dates`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6669974721565177418$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__17 = goog.getMsg("Date localization");
        i18n_16 = MSG_EXTERNAL_6669974721565177418$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟d72cd49783dcc040c08cd98ae2904eab57a0bb2e␟6669974721565177418:Date localization`;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4905475235330782118$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__19 = goog.getMsg("With native Date output");
        i18n_18 = MSG_EXTERNAL_4905475235330782118$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟8b48bfc50979dda56f42928887986fe0052cbc99␟4905475235330782118:With native Date output`;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___21 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8655647082077231883$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___23 = goog.getMsg("{$startTagDiv}A handler that gets a date and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", {
          "startTagDiv": "\uFFFD#1\uFFFD",
          "closeTagDiv": "\uFFFD/#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_22 = MSG_EXTERNAL_8655647082077231883$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6619372356871511006$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___25 = goog.getMsg(" A list of preset dates for dropdown ");
        i18n_24 = MSG_EXTERNAL_6619372356871511006$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟537796d614601f54059199b6f42a55fd283fa400␟6619372356871511006: A list of preset dates for dropdown `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7126872511108805662$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___27 = goog.getMsg(" A handler that gets date and returns null or a tuple with circled marker colors ");
        i18n_26 = MSG_EXTERNAL_7126872511108805662$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟23c9859665a49041525158245d62b03eb6e0bb77␟7126872511108805662: A handler that gets date and returns null or a tuple with circled marker colors `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_228579238578588280$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___29 = goog.getMsg(" Minimum date ");
        i18n_28 = MSG_EXTERNAL_228579238578588280$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___29;
      } else {
        i18n_28 = $localize`:␟4154b59e6a74ee1968fd07ad38c2a5b5329c1a78␟228579238578588280: Minimum date `;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2371503113949525542$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___31 = goog.getMsg(" Maximum date ");
        i18n_30 = MSG_EXTERNAL_2371503113949525542$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS___31;
      } else {
        i18n_30 = $localize`:␟ce93c802f63dbda020cc57d47ed04f9f56fed31f␟2371503113949525542: Maximum date `;
      }

      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7181776168306782987$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__33 = goog.getMsg(" Mobile calendar does not use the same dropdown with calendar as desktop uses. It uses digital keyboard. If you want to open {$startLink} mobile calendar {$closeLink} , add imports of {$startTagCode}TuiMobileCalendarDialogModule{$closeTagCode} and {$startTagCode}TuiDialogModule{$closeTagCode} into your root module. Also, check that you did not forget about {$startLink_1} tui-root {$closeLink}", {
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD]",
          "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]",
          "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]",
          "startLink_1": "\uFFFD#5\uFFFD"
        });
        i18n_32 = MSG_EXTERNAL_7181776168306782987$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__33;
      } else {
        i18n_32 = $localize`:␟5616c14157b3a5879b9da1e6c8a1e9fb827ff4d9␟7181776168306782987: Mobile calendar does not use the same dropdown with calendar as desktop uses. It uses digital keyboard. If you want to open ${"\uFFFD#2\uFFFD"}:START_LINK: mobile calendar ${"[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_LINK: , add imports of ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:TuiDialogModule${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: into your root module. Also, check that you did not forget about ${"\uFFFD#5\uFFFD"}:START_LINK_1: tui-root ${"[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_LINK:`;
      }

      i18n_32 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_32);
      let i18n_34;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6680887665039790545$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__35 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiInputDateModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#10\uFFFD",
          "closeTagCode": "\uFFFD/#10\uFFFD"
        });
        i18n_34 = MSG_EXTERNAL_6680887665039790545$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__35;
      } else {
        i18n_34 = $localize`:␟592c56416c0d2ae15744eba65a71a0c074426731␟6680887665039790545: Import an Angular module for forms and ${"\uFFFD#10\uFFFD"}:START_TAG_CODE:TuiInputDateModule${"\uFFFD/#10\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_36;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__37 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]",
          "closeTagCode": "[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"
        });
        i18n_36 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_INPUT_DATE_COMPONENT_TS__37;
      } else {
        i18n_36 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_36 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_36);
      return [["header", "InputDate", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-9"], i18n_0, i18n_2, i18n_4, [1, "tui-space_bottom-5"], ["tuiLink", "", "routerLink", ".", "fragment", "date-localization"], i18n_6, i18n_8, ["tuiLink", "", "target", "_blank", "href", "https://github.com/Tinkoff/taiga-ui/blob/main/projects/cdk/date-time/day.ts"], ["tuiLink", "", "routerLink", ".", "fragment", "native-date-output"], ["tuiLink", "", "target", "_blank", "href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"], ["id", "base", "heading", i18n_10, 3, "content"], ["id", "sizes", "heading", i18n_12, 3, "content"], ["id", "named", "heading", i18n_14, 3, "content"], ["id", "date-localization", "heading", i18n_16, 3, "content"], ["id", "native-date-output", "heading", i18n_18, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<TuiDay>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "items", "documentationPropertyMode", "input", "documentationPropertyType", "TuiNamedDay[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "markerHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMarkerHandler", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "dropdown"], [3, "formControl", "focusable", "min", "max", "markerHandler", "pseudoFocus", "pseudoHover", "pseudoInvalid", "readOnly", "disabledItemHandler", "items", "tuiTextfieldIconLeft", "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance"], i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, i18n_30, i18n_32, ["tuiLink", "", "routerLink", "/components/mobile-calendar"], ["tuiLink", "", "routerLink", "/getting-started"], [1, "b-demo-steps"], i18n_34, ["filename", "myComponent.module.ts", 3, "code"], i18n_36, ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiInputDateComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputDateComponent_ng_template_1_Template, 39, 5, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputDateComponent_ng_template_2_Template, 10, 13, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputDateComponent_ng_template_3_Template, 24, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiInputDateExample1, TuiInputDateExample2, TuiInputDateExample3, TuiInputDateExample4, TuiInputDateExample5, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, input_date_component/* TuiInputDateComponent */.j, input_date_directive/* TuiInputDateDirective */.k, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, hint_options_directive/* TuiHintOptionsDirective */.bZ, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiInputDateComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date/input-date.module.ts

















let ExampleTuiInputDateModule = /*#__PURE__*/(() => {
  class ExampleTuiInputDateModule {}

  ExampleTuiInputDateModule.ɵfac = function ExampleTuiInputDateModule_Factory(t) {
    return new (t || ExampleTuiInputDateModule)();
  };

  ExampleTuiInputDateModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputDateModule
  });
  ExampleTuiInputDateModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, core.TuiLinkModule, kit.TuiRadioListModule, core.TuiButtonModule, kit.TuiInputDateModule, addon_mobile.TuiMobileCalendarDialogModule, kit.TuiUnfinishedValidatorModule, core.TuiTextfieldControllerModule, core.TuiHintModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, core.TuiNotificationModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputDateComponent))]]
  });
  return ExampleTuiInputDateModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputDateModule, {
    declarations: [ExampleTuiInputDateComponent, TuiInputDateExample1, TuiInputDateExample2, TuiInputDateExample3, TuiInputDateExample4, TuiInputDateExample5, ExampleNativeDateTransformerDirective],
    imports: [public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, core.TuiLinkModule, kit.TuiRadioListModule, core.TuiButtonModule, kit.TuiInputDateModule, addon_mobile.TuiMobileCalendarDialogModule, kit.TuiUnfinishedValidatorModule, core.TuiTextfieldControllerModule, core.TuiHintModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, core.TuiNotificationModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiInputDateComponent]
  });
})();

/***/ })

}]);