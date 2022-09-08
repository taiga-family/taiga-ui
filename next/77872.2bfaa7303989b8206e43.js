"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[77872],{

/***/ 77872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputDateRangeModule": () => (/* binding */ ExampleTuiInputDateRangeModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/addon-mobile/index.ts + 33 modules
var addon_mobile = __webpack_require__(36518);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 84 modules
var cdk = __webpack_require__(40287);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-date-range/input-date-range.component.ts
var input_date_range_component = __webpack_require__(92483);
// EXTERNAL MODULE: ./projects/kit/components/input-date-range/input-date-range.directive.ts
var input_date_range_directive = __webpack_require__(48706);
// EXTERNAL MODULE: ./projects/kit/directives/unfinished-validator/unfinished-validator.directive.ts
var unfinished_validator_directive = __webpack_require__(31510);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date-range/examples/1/index.ts








let TuiInputDateRangeExample1 = /*#__PURE__*/(() => {
  class TuiInputDateRangeExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(new cdk/* TuiDayRange */.VRe(new cdk/* TuiDay */.TU1(2018, 2, 10), new cdk/* TuiDay */.TU1(2018, 3, 20)))
      });
      this.min = new cdk/* TuiDay */.TU1(2000, 2, 20);
      this.max = new cdk/* TuiDay */.TU1(2040, 2, 20);
    }

  }

  TuiInputDateRangeExample1.ɵfac = function TuiInputDateRangeExample1_Factory(t) {
    return new (t || TuiInputDateRangeExample1)();
  };

  TuiInputDateRangeExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputDateRangeExample1,
    selectors: [["tui-input-date-range-example-1"]],
    decls: 7,
    vars: 3,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_918573850120182890$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_EXAMPLES_1_INDEX_TS_1 = goog.getMsg(" If a field is optional, but unfinished field should be marked as invalid, use {$startTagCode}tuiUnfinishedValidator{$closeTagCode} directive ", {
          "startTagCode": "\uFFFD#3\uFFFD",
          "closeTagCode": "\uFFFD/#3\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_918573850120182890$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟94fc108253bd1502cd271951ce40db76787fe618␟918573850120182890: If a field is optional, but unfinished field should be marked as invalid, use ${"\uFFFD#3\uFFFD"}:START_TAG_CODE:tuiUnfinishedValidator${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE: directive `;
      }

      return [[1, "b-form", 3, "formGroup"], i18n_0, ["tuiUnfinishedValidator", "Finish filling the field", "formControlName", "testValue", 3, "min", "max"], ["tuiTextfield", "", "placeholder", "From - To"]];
    },
    template: function TuiInputDateRangeExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(2, 1);
        fesm2015_core/* ɵɵelement */._UZ(3, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-input-date-range", 2);
        fesm2015_core/* ɵɵtext */._uU(5, " Choose dates ");
        fesm2015_core/* ɵɵelement */._UZ(6, "input", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("min", ctx.min)("max", ctx.max);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_date_range_component/* TuiInputDateRangeComponent */.H, input_date_range_directive/* TuiInputDateRangeDirective */.d, unfinished_validator_directive/* TuiUnfinishedValidatorDirective */.Q, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_component/* TuiTextfieldComponent */.M],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputDateRangeExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date-range/examples/2/index.ts






let TuiInputDateRangeExample2 = /*#__PURE__*/(() => {
  class TuiInputDateRangeExample2 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI(new cdk/* TuiDayRange */.VRe(new cdk/* TuiDay */.TU1(2018, 2, 10), new cdk/* TuiDay */.TU1(2018, 3, 20)));
    }

  }

  TuiInputDateRangeExample2.ɵfac = function TuiInputDateRangeExample2_Factory(t) {
    return new (t || TuiInputDateRangeExample2)();
  };

  TuiInputDateRangeExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputDateRangeExample2,
    selectors: [["tui-input-date-range-example-2"]],
    decls: 2,
    vars: 1,
    consts: [[1, "b-form", 3, "formControl"]],
    template: function TuiInputDateRangeExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-date-range", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Choose dates\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control);
      }
    },
    directives: [input_date_range_component/* TuiInputDateRangeComponent */.H, input_date_range_directive/* TuiInputDateRangeDirective */.d, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputDateRangeExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date-range/examples/3/index.ts






let TuiInputDateRangeExample3 = /*#__PURE__*/(() => {
  class TuiInputDateRangeExample3 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI(new cdk/* TuiDayRange */.VRe(new cdk/* TuiDay */.TU1(2018, 2, 10), new cdk/* TuiDay */.TU1(2018, 3, 20)));
    }

  }

  TuiInputDateRangeExample3.ɵfac = function TuiInputDateRangeExample3_Factory(t) {
    return new (t || TuiInputDateRangeExample3)();
  };

  TuiInputDateRangeExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputDateRangeExample3,
    selectors: [["tui-input-date-range-example-3"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: cdk/* TUI_DATE_FORMAT */.P_B,
      useValue: `YMD`
    }, {
      provide: cdk/* TUI_DATE_SEPARATOR */.q_$,
      useValue: `/`
    }])],
    decls: 2,
    vars: 1,
    consts: [[1, "b-form", 3, "formControl"]],
    template: function TuiInputDateRangeExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-date-range", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Choose dates\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control);
      }
    },
    directives: [input_date_range_component/* TuiInputDateRangeComponent */.H, input_date_range_directive/* TuiInputDateRangeDirective */.d, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputDateRangeExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date-range/examples/4/value-transformers.ts


let ExampleDateTransformer = /*#__PURE__*/(() => {
  class ExampleDateTransformer {
    fromControlValue(controlValue) {
      return controlValue && cdk/* TuiDay.fromLocalNativeDate */.TU1.fromLocalNativeDate(controlValue);
    }

    toControlValue(componentValue) {
      return (componentValue === null || componentValue === void 0 ? void 0 : componentValue.toLocalNativeDate()) || null;
    }

  }

  ExampleDateTransformer.ɵfac = function ExampleDateTransformer_Factory(t) {
    return new (t || ExampleDateTransformer)();
  };

  ExampleDateTransformer.ɵprov = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjectable */.Yz7({
    token: ExampleDateTransformer,
    factory: ExampleDateTransformer.ɵfac
  });
  return ExampleDateTransformer;
})();

class ExampleDateRangeTransformer {
  constructor(dateTransformer) {
    this.dateTransformer = dateTransformer;
  }

  fromControlValue(controlValue) {
    const [transformedFrom, transformedTo] = controlValue || [null, null];
    const from = transformedFrom && this.dateTransformer.fromControlValue(transformedFrom);
    const to = transformedTo && this.dateTransformer.fromControlValue(transformedTo);
    return from && to && new cdk/* TuiDayRange */.VRe(from, to);
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date-range/examples/4/index.ts







let TuiInputDateRangeExample4 = /*#__PURE__*/(() => {
  class TuiInputDateRangeExample4 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI([new Date(2018, 2, 10), new Date(2018, 3, 20)]);
    }

  }

  TuiInputDateRangeExample4.ɵfac = function TuiInputDateRangeExample4_Factory(t) {
    return new (t || TuiInputDateRangeExample4)();
  };

  TuiInputDateRangeExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputDateRangeExample4,
    selectors: [["tui-input-date-range-example-4"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: kit/* TUI_DATE_VALUE_TRANSFORMER */.HFz,
      useClass: ExampleDateTransformer
    }, {
      provide: kit/* TUI_DATE_RANGE_VALUE_TRANSFORMER */.LDu,
      deps: [kit/* TUI_DATE_VALUE_TRANSFORMER */.HFz],
      useFactory: getExampleDateRangeTransformer
    }])],
    decls: 7,
    vars: 2,
    consts: [[1, "b-form", 3, "formControl"]],
    template: function TuiInputDateRangeExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-date-range", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Choose dates\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
        fesm2015_core/* ɵɵtext */._uU(3, "Stringified control value:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "code");
        fesm2015_core/* ɵɵtext */._uU(6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control);
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx.control.value);
      }
    },
    directives: [input_date_range_component/* TuiInputDateRangeComponent */.H, input_date_range_directive/* TuiInputDateRangeDirective */.d, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputDateRangeExample4;
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
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
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
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date-range/input-date-range.component.ts
































function ExampleTuiInputDateRangeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p", 2);
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
    fesm2015_core/* ɵɵtext */._uU(16, " See an example ");
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
    fesm2015_core/* ɵɵelement */._UZ(28, "code");
    fesm2015_core/* ɵɵelement */._UZ(29, "code");
    fesm2015_core/* ɵɵelement */._UZ(30, "a", 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(31, "tui-doc-example", 13);
    fesm2015_core/* ɵɵelementStart */.TgZ(32, "tui-notification", 14);
    fesm2015_core/* ɵɵtext */._uU(33, " If you need to set some attributes or listen to events on native ");
    fesm2015_core/* ɵɵelementStart */.TgZ(34, "code");
    fesm2015_core/* ɵɵtext */._uU(35, "input");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(36, " , you can put it inside with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(37, "code");
    fesm2015_core/* ɵɵtext */._uU(38, "Textfield");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(39, " directive as shown below ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(40, "tui-input-date-range-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(41, "tui-doc-example", 15);
    fesm2015_core/* ɵɵelement */._UZ(42, "tui-input-date-range-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(43, "tui-doc-example", 16);
    fesm2015_core/* ɵɵelement */._UZ(44, "tui-input-date-range-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(45, "tui-doc-example", 17);
    fesm2015_core/* ɵɵelement */._UZ(46, "tui-input-date-range-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(31);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
  }
}

function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-date-range", 28);
    fesm2015_core/* ɵɵtext */._uU(1, " Choose dates ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("focusable", ctx_r3.focusable)("formControl", ctx_r3.control)("defaultViewedMonth", ctx_r3.defaultViewedMonth)("items", ctx_r3.items)("markerHandler", ctx_r3.markerHandler)("min", ctx_r3.min)("max", ctx_r3.max)("minLength", ctx_r3.minLength)("maxLength", ctx_r3.maxLength)("tuiTextfieldIconLeft", ctx_r3.iconLeft)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoInvalid", ctx_r3.pseudoInvalid)("readOnly", ctx_r3.readOnly)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintAppearance", ctx_r3.hintAppearance)("disabledItemHandler", ctx_r3.disabledItemHandler);
  }
}

function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 29);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 30);
  }
}

function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 31);
    fesm2015_core/* ɵɵelement */._UZ(1, "div");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 32);
  }
}

function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 33);
  }
}

function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 34);
  }
}

function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 35);
  }
}

function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 36);
  }
}

function ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 37);
  }
}

function ExampleTuiInputDateRangeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 18);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_1_Template, 2, 21, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.defaultViewedMonth = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_5_Template, 3, 0, "ng-template", 21);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.disabledItemHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 22);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.items = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 23);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.markerHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 24);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r19.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 25);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r20.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 26);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r21.minLength = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiInputDateRangeComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 27);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r22 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r22.maxLength = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(12, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.defaultViewedMonthVariants)("documentationPropertyValue", ctx_r1.defaultViewedMonth);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.itemsVariants)("documentationPropertyValue", ctx_r1.items);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.markerHandlerVariants)("documentationPropertyValue", ctx_r1.markerHandler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.dayVariants)("documentationPropertyValue", ctx_r1.min);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.dayVariants)("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.minLengthVariants)("documentationPropertyValue", ctx_r1.minLength);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxLengthVariants)("documentationPropertyValue", ctx_r1.maxLength);
  }
}

function ExampleTuiInputDateRangeComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 38);
    fesm2015_core/* ɵɵelement */._UZ(2, "a", 39);
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵelement */._UZ(5, "a", 40);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "ol", 41);
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(9, 42);
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 43);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(14, 44);
    fesm2015_core/* ɵɵelement */._UZ(15, "code");
    fesm2015_core/* ɵɵelement */._UZ(16, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(17, "tui-doc-code", 45);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(18, "li");
    fesm2015_core/* ɵɵtext */._uU(19, " Use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "code");
    fesm2015_core/* ɵɵtext */._uU(21, "TuiInputDateRange");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(22, " in template: ");
    fesm2015_core/* ɵɵelement */._UZ(23, "tui-doc-code", 46);
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
let ExampleTuiInputDateRangeComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputDateRangeComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 94912).then(__webpack_require__.t.bind(__webpack_require__, 94912, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 41413).then(__webpack_require__.t.bind(__webpack_require__, 16086, 17));
      this.exampleForm = __webpack_require__.e(/* import() */ 83906).then(__webpack_require__.t.bind(__webpack_require__, 83906, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 47311).then(__webpack_require__.t.bind(__webpack_require__, 47311, 17)),
        HTML: __webpack_require__.e(/* import() */ 1425).then(__webpack_require__.t.bind(__webpack_require__, 1425, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 43390).then(__webpack_require__.t.bind(__webpack_require__, 43390, 17)),
        HTML: __webpack_require__.e(/* import() */ 68943).then(__webpack_require__.t.bind(__webpack_require__, 68943, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 87660).then(__webpack_require__.t.bind(__webpack_require__, 87660, 17)),
        HTML: __webpack_require__.e(/* import() */ 16320).then(__webpack_require__.t.bind(__webpack_require__, 16320, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 90376).then(__webpack_require__.t.bind(__webpack_require__, 90376, 17)),
        HTML: __webpack_require__.e(/* import() */ 90772).then(__webpack_require__.t.bind(__webpack_require__, 90772, 17)),
        'value-transformers.ts': __webpack_require__.e(/* import() */ 23274).then(__webpack_require__.t.bind(__webpack_require__, 23274, 17))
      };
      this.dayVariants = [cdk/* TUI_FIRST_DAY */.nNo, new cdk/* TuiDay */.TU1(2021, 2, 5), new cdk/* TuiDay */.TU1(1900, 0, 1), new cdk/* TuiDay */.TU1(2300, 0, 1), cdk/* TUI_LAST_DAY */.OyN];
      this.min = this.dayVariants[0];
      this.minLengthVariants = [{
        day: 3
      }, {
        day: 15
      }];
      this.minLength = null;
      this.maxLengthVariants = [{
        day: 5
      }, {
        month: 1
      }, {
        year: 1
      }];
      this.maxLength = null;
      this.max = this.dayVariants[this.dayVariants.length - 1];
      this.markerHandlerVariants = [core/* TUI_DEFAULT_MARKER_HANDLER */.zE9, day => day.day % 2 === 0 ? TWO_DOTS : ONE_DOT];
      this.markerHandler = this.markerHandlerVariants[0];
      this.cleaner = false;
      this.disabledItemHandlerVariants = [cdk/* ALWAYS_FALSE_HANDLER */.IyD, ({
        day
      }) => day % 3 === 0];
      this.disabledItemHandler = this.disabledItemHandlerVariants[0];
      this.control = new fesm2015_forms/* FormControl */.NI(null, fesm2015_forms/* Validators.required */.kI.required);
      this.itemsVariants = [[], (0,kit/* tuiCreateDefaultDayRangePeriods */.GnQ)()];
      this.items = this.itemsVariants[0];
      this.defaultViewedMonthVariants = [cdk/* TuiMonth.currentLocal */.qld.currentLocal(), cdk/* TuiMonth.currentLocal */.qld.currentLocal().append({
        month: 1
      }), new cdk/* TuiMonth */.qld(2007, 5)];
      this.defaultViewedMonth = this.defaultViewedMonthVariants[0];
    }

  }

  ExampleTuiInputDateRangeComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputDateRangeComponent_BaseFactory;
    return function ExampleTuiInputDateRangeComponent_Factory(t) {
      return (ɵExampleTuiInputDateRangeComponent_BaseFactory || (ɵExampleTuiInputDateRangeComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputDateRangeComponent)))(t || ExampleTuiInputDateRangeComponent);
    };
  }();

  ExampleTuiInputDateRangeComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputDateRangeComponent,
    selectors: [["example-tui-input-date-range"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputDateRangeComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6250893485944821333$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}InputDate{$closeTagCode} is a field to input a range of dates. ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_6250893485944821333$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟d2d0c7a3331cfc0abccc0a31c9be9ed11b568504␟6250893485944821333:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputDate${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: is a field to input a range of dates. `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9067186024080940878$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__3 = goog.getMsg("DI-tokens for date localization:");
        i18n_2 = MSG_EXTERNAL_9067186024080940878$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟44191f6f2084b7e19ed30289598f45f6dc88ef96␟9067186024080940878:DI-tokens for date localization:`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7722521738393615006$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__5 = goog.getMsg("{$startTagDt}{$startTagCode}TUI_DATE_FORMAT{$closeTagCode}{$closeTagDt}{$startTagDd} active date format ( {$startTagCode}'DMY' | 'MDY' | 'YMD'{$closeTagCode} ) {$closeTagDd}{$startTagDt}{$startTagCode}TUI_DATE_SEPARATOR{$closeTagCode}{$closeTagDt}{$startTagDd_1}single-character date's separator (dot, slash etc.){$closeTagDd}", {
          "startTagDt": "[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]",
          "startTagCode": "[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]",
          "closeTagCode": "[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]",
          "closeTagDt": "[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]",
          "startTagDd": "\uFFFD#9\uFFFD",
          "closeTagDd": "[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]",
          "startTagDd_1": "\uFFFD#13\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_7722521738393615006$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟4a9f8a78772cf0d29d68a56ec7d2e2e4cde207ba␟7722521738393615006:${"[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_DT:${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TUI_DATE_FORMAT${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_DT:${"\uFFFD#9\uFFFD"}:START_TAG_DD: active date format ( ${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:'DMY' | 'MDY' | 'YMD'${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE: ) ${"[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_DD:${"[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_DT:${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TUI_DATE_SEPARATOR${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_DT:${"\uFFFD#13\uFFFD"}:START_TAG_DD_1:single-character date's separator (dot, slash etc.)${"[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_DD:`;
      }

      i18n_4 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_4);
      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4839071173512899768$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__7 = goog.getMsg("DI-tokens for input-configurations:");
        i18n_6 = MSG_EXTERNAL_4839071173512899768$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟1e189ebe2d938d6aaa6a9a2f9adeff1e3b372aac␟4839071173512899768:DI-tokens for input-configurations:`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1221854426540962093$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__9 = goog.getMsg("{$startTagDt}{$startTagCode}TUI_DATE_RANGE_VALUE_TRANSFORMER{$closeTagCode}{$closeTagDt}{$startTagDd} custom format of control output ( {$startLink} TuiDayRange {$closeLink} is default). {$startParagraph}{$startLink_1} See an example {$closeLink} of how to provide transformers for {$startTagCode}InputDate{$closeTagCode} and {$startTagCode}InputDateRange{$closeTagCode} to work with native {$startLink_2} Date {$closeLink} objects. {$closeParagraph}{$closeTagDd}", {
          "startTagDt": "\uFFFD#22\uFFFD",
          "startTagCode": "[\uFFFD#23\uFFFD|\uFFFD#28\uFFFD|\uFFFD#29\uFFFD]",
          "closeTagCode": "[\uFFFD/#23\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#29\uFFFD]",
          "closeTagDt": "\uFFFD/#22\uFFFD",
          "startTagDd": "\uFFFD#24\uFFFD",
          "startLink": "\uFFFD#25\uFFFD",
          "closeLink": "[\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD]",
          "startParagraph": "\uFFFD#26\uFFFD",
          "startLink_1": "\uFFFD#27\uFFFD",
          "startLink_2": "\uFFFD#30\uFFFD",
          "closeParagraph": "\uFFFD/#26\uFFFD",
          "closeTagDd": "\uFFFD/#24\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_1221854426540962093$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟a889115d6a437c86488d83937a6a773891b3c218␟1221854426540962093:${"\uFFFD#22\uFFFD"}:START_TAG_DT:${"[\uFFFD#23\uFFFD|\uFFFD#28\uFFFD|\uFFFD#29\uFFFD]"}:START_TAG_CODE:TUI_DATE_RANGE_VALUE_TRANSFORMER${"[\uFFFD/#23\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#29\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#22\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#24\uFFFD"}:START_TAG_DD: custom format of control output ( ${"\uFFFD#25\uFFFD"}:START_LINK: TuiDayRange ${"[\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD]"}:CLOSE_LINK: is default). ${"\uFFFD#26\uFFFD"}:START_PARAGRAPH:${"\uFFFD#27\uFFFD"}:START_LINK_1: See an example ${"[\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD]"}:CLOSE_LINK: of how to provide transformers for ${"[\uFFFD#23\uFFFD|\uFFFD#28\uFFFD|\uFFFD#29\uFFFD]"}:START_TAG_CODE:InputDate${"[\uFFFD/#23\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#29\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#23\uFFFD|\uFFFD#28\uFFFD|\uFFFD#29\uFFFD]"}:START_TAG_CODE:InputDateRange${"[\uFFFD/#23\uFFFD|\uFFFD/#28\uFFFD|\uFFFD/#29\uFFFD]"}:CLOSE_TAG_CODE: to work with native ${"\uFFFD#30\uFFFD"}:START_LINK_2: Date ${"[\uFFFD/#25\uFFFD|\uFFFD/#27\uFFFD|\uFFFD/#30\uFFFD]"}:CLOSE_LINK: objects. ${"\uFFFD/#26\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD/#24\uFFFD"}:CLOSE_TAG_DD:`;
      }

      i18n_8 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_8);
      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__11 = goog.getMsg("Basic");
        i18n_10 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9065652012369821232$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__13 = goog.getMsg("Big size");
        i18n_12 = MSG_EXTERNAL_9065652012369821232$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟5091f6acf0fbf0b72c4958189d20c85b8d7f42f0␟9065652012369821232:Big size`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4905475235330782118$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__15 = goog.getMsg("With native Date output");
        i18n_14 = MSG_EXTERNAL_4905475235330782118$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟8b48bfc50979dda56f42928887986fe0052cbc99␟4905475235330782118:With native Date output`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___17 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4370073840573771249$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___19 = goog.getMsg(" Default month to show ");
        i18n_18 = MSG_EXTERNAL_4370073840573771249$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟cee5a8a5054c8a1eed4236e17142f509a2da3c3a␟4370073840573771249: Default month to show `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8655647082077231883$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___21 = goog.getMsg("{$startTagDiv}A handler that gets a date and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", {
          "startTagDiv": "\uFFFD#1\uFFFD",
          "closeTagDiv": "\uFFFD/#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_8655647082077231883$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1585752593868985764$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___23 = goog.getMsg(" Fixed intervals (shows 2 calendars with empty array) ");
        i18n_22 = MSG_EXTERNAL_1585752593868985764$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟0600d93e5689970aa785fe0413acf4c5da35b682␟1585752593868985764: Fixed intervals (shows 2 calendars with empty array) `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7126872511108805662$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___25 = goog.getMsg(" A handler that gets date and returns null or a tuple with circled marker colors ");
        i18n_24 = MSG_EXTERNAL_7126872511108805662$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟23c9859665a49041525158245d62b03eb6e0bb77␟7126872511108805662: A handler that gets date and returns null or a tuple with circled marker colors `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7105748595977480347$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___27 = goog.getMsg(" Min date ");
        i18n_26 = MSG_EXTERNAL_7105748595977480347$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6045744383953302270$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___29 = goog.getMsg(" Max date ");
        i18n_28 = MSG_EXTERNAL_6045744383953302270$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___29;
      } else {
        i18n_28 = $localize`:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4884270346610812155$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___31 = goog.getMsg(" Minimal length of range ");
        i18n_30 = MSG_EXTERNAL_4884270346610812155$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___31;
      } else {
        i18n_30 = $localize`:␟309c0b4024f636a71dea973f24cd05b0d38af82b␟4884270346610812155: Minimal length of range `;
      }

      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1253745446557993958$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___33 = goog.getMsg(" Maximal length of range ");
        i18n_32 = MSG_EXTERNAL_1253745446557993958$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS___33;
      } else {
        i18n_32 = $localize`:␟69cef120f415885c1d7258c5de495aa3cae21f85␟1253745446557993958: Maximal length of range `;
      }

      let i18n_34;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7181776168306782987$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__35 = goog.getMsg(" Mobile calendar does not use the same dropdown with calendar as desktop uses. It uses digital keyboard. If you want to open {$startLink} mobile calendar {$closeLink} , add imports of {$startTagCode}TuiMobileCalendarDialogModule{$closeTagCode} and {$startTagCode}TuiDialogModule{$closeTagCode} into your root module. Also, check that you did not forget about {$startLink_1} tui-root {$closeLink}", {
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD]",
          "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]",
          "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]",
          "startLink_1": "\uFFFD#5\uFFFD"
        });
        i18n_34 = MSG_EXTERNAL_7181776168306782987$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__35;
      } else {
        i18n_34 = $localize`:␟5616c14157b3a5879b9da1e6c8a1e9fb827ff4d9␟7181776168306782987: Mobile calendar does not use the same dropdown with calendar as desktop uses. It uses digital keyboard. If you want to open ${"\uFFFD#2\uFFFD"}:START_LINK: mobile calendar ${"[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_LINK: , add imports of ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:TuiMobileCalendarDialogModule${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:TuiDialogModule${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: into your root module. Also, check that you did not forget about ${"\uFFFD#5\uFFFD"}:START_LINK_1: tui-root ${"[\uFFFD/#2\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_LINK:`;
      }

      i18n_34 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_34);
      let i18n_36;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7275600632239735393$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__37 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiInputDateRangeModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#10\uFFFD",
          "closeTagCode": "\uFFFD/#10\uFFFD"
        });
        i18n_36 = MSG_EXTERNAL_7275600632239735393$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__37;
      } else {
        i18n_36 = $localize`:␟9b96102ad80a0d3a11e4fbb8383fedba8bc52a2b␟7275600632239735393: Import an Angular module for forms and ${"\uFFFD#10\uFFFD"}:START_TAG_CODE:TuiInputDateRangeModule${"\uFFFD/#10\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_38;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__39 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]",
          "closeTagCode": "[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"
        });
        i18n_38 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_RANGE_INPUT_DATE_RANGE_COMPONENT_TS__39;
      } else {
        i18n_38 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#15\uFFFD|\uFFFD#16\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#15\uFFFD|\uFFFD/#16\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_38 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_38);
      return [["header", "InputDateRange", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-9"], i18n_0, i18n_2, i18n_4, [1, "tui-space_bottom-5"], ["tuiLink", "", "routerLink", ".", "fragment", "date-localization"], i18n_6, i18n_8, ["tuiLink", "", "target", "_blank", "href", "https://github.com/Tinkoff/taiga-ui/blob/main/projects/cdk/date-time/day-range.ts"], ["tuiLink", "", "routerLink", ".", "fragment", "native-date-output"], ["tuiLink", "", "target", "_blank", "href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"], ["id", "base", "heading", i18n_10, 3, "content"], [1, "tui-space_bottom-4", "b-form"], ["id", "large", "heading", i18n_12, 3, "content"], ["id", "date-localization", "heading", "Date localization", 3, "content"], ["id", "native-date-output", "heading", i18n_14, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "defaultViewedMonth", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMonth", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<TuiDay>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "items", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDayRangePeriod[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "markerHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMarkerHandler", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "minLength", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDayLike | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "maxLength", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDayLike | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-control", 3, "focusable", "formControl", "defaultViewedMonth", "items", "markerHandler", "min", "max", "minLength", "maxLength", "tuiTextfieldIconLeft", "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "pseudoFocus", "pseudoHover", "pseudoInvalid", "readOnly", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance", "disabledItemHandler"], i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, i18n_30, i18n_32, i18n_34, ["tuiLink", "", "routerLink", "/components/mobile-calendar"], ["tuiLink", "", "routerLink", "/getting-started"], [1, "b-demo-steps"], i18n_36, ["filename", "myComponent.module.ts", 3, "code"], i18n_38, ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiInputDateRangeComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputDateRangeComponent_ng_template_1_Template, 47, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputDateRangeComponent_ng_template_2_Template, 13, 18, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputDateRangeComponent_ng_template_3_Template, 24, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, notification_component/* TuiNotificationComponent */.L, TuiInputDateRangeExample1, TuiInputDateRangeExample2, TuiInputDateRangeExample3, TuiInputDateRangeExample4, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, input_date_range_component/* TuiInputDateRangeComponent */.H, input_date_range_directive/* TuiInputDateRangeDirective */.d, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, hint_options_directive/* TuiHintOptionsDirective */.b, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiInputDateRangeComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date-range/input-date-range.module.ts















let ExampleTuiInputDateRangeModule = /*#__PURE__*/(() => {
  class ExampleTuiInputDateRangeModule {}

  ExampleTuiInputDateRangeModule.ɵfac = function ExampleTuiInputDateRangeModule_Factory(t) {
    return new (t || ExampleTuiInputDateRangeModule)();
  };

  ExampleTuiInputDateRangeModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputDateRangeModule
  });
  ExampleTuiInputDateRangeModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, kit/* TuiInputDateRangeModule */.sR_, fesm2015_forms/* ReactiveFormsModule */.UX, inherited_documentation_module/* InheritedDocumentationModule */.f, core/* TuiButtonModule */.fNO, core/* TuiLinkModule */.jzK, addon_mobile/* TuiMobileCalendarDialogModule */.nw, core/* TuiTextfieldControllerModule */.cnw, core/* TuiHintModule */.goS, core/* TuiNotificationModule */.HiG, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputDateRangeComponent)), kit/* TuiUnfinishedValidatorModule */.hsT]]
  });
  return ExampleTuiInputDateRangeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputDateRangeModule, {
    declarations: [ExampleTuiInputDateRangeComponent, TuiInputDateRangeExample1, TuiInputDateRangeExample2, TuiInputDateRangeExample3, TuiInputDateRangeExample4],
    imports: [common/* CommonModule */.ez, kit/* TuiInputDateRangeModule */.sR_, fesm2015_forms/* ReactiveFormsModule */.UX, inherited_documentation_module/* InheritedDocumentationModule */.f, core/* TuiButtonModule */.fNO, core/* TuiLinkModule */.jzK, addon_mobile/* TuiMobileCalendarDialogModule */.nw, core/* TuiTextfieldControllerModule */.cnw, core/* TuiHintModule */.goS, core/* TuiNotificationModule */.HiG, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz, kit/* TuiUnfinishedValidatorModule */.hsT],
    exports: [ExampleTuiInputDateRangeComponent]
  });
})();

/***/ })

}]);