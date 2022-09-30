"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[89114],{

/***/ 89114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputDateTimeModule": () => (/* binding */ ExampleTuiInputDateTimeModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-date-time/input-date-time.component.ts
var input_date_time_component = __webpack_require__(47094);
// EXTERNAL MODULE: ./projects/kit/components/input-date-time/input-date-time.directive.ts
var input_date_time_directive = __webpack_require__(64731);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date-time/examples/1/index.ts








let TuiInputDateTimeExample1 = /*#__PURE__*/(() => {
  class TuiInputDateTimeExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI([new cdk.TuiDay(2017, 2, 15), null])
      });
    }

  }

  TuiInputDateTimeExample1.ɵfac = function TuiInputDateTimeExample1_Factory(t) {
    return new (t || TuiInputDateTimeExample1)();
  };

  TuiInputDateTimeExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputDateTimeExample1,
    selectors: [["tui-input-date-time-example-1"]],
    decls: 10,
    vars: 4,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7402895815395298696$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_1_INDEX_TS_1 = goog.getMsg("Form value:");
        i18n_0 = MSG_EXTERNAL_7402895815395298696$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟bdc1ac802a9f8ebac5423e543fafda4ef101dcd5␟7402895815395298696:Form value:`;
      }

      return [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue"], ["tuiTextfield", "", "placeholder", "OCT 26 1985 01:22"], i18n_0];
    },
    template: function TuiInputDateTimeExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-date-time", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Choose date and time ");
        fesm2015_core/* ɵɵelement */._UZ(3, "input", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
        fesm2015_core/* ɵɵi18n */.SDv(5, 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "pre");
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "code");
        fesm2015_core/* ɵɵtext */._uU(8);
        fesm2015_core/* ɵɵpipe */.ALo(9, "json");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(8);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(fesm2015_core/* ɵɵpipeBind1 */.lcZ(9, 2, ctx.testForm.value));
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_date_time_component/* TuiInputDateTimeComponent */.u, input_date_time_directive/* TuiInputDateTimeDirective */.c, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_component/* TuiTextfieldComponent */.M],
    pipes: [common/* JsonPipe */.Ts],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputDateTimeExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date-time/examples/2/index.ts







let TuiInputDateTimeExample2 = /*#__PURE__*/(() => {
  class TuiInputDateTimeExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI([new cdk.TuiDay(2017, 2, 15), null])
      });
    }

  }

  TuiInputDateTimeExample2.ɵfac = function TuiInputDateTimeExample2_Factory(t) {
    return new (t || TuiInputDateTimeExample2)();
  };

  TuiInputDateTimeExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputDateTimeExample2,
    selectors: [["tui-input-date-time-example-2"]],
    decls: 19,
    vars: 4,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2473136848054292961$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_2_INDEX_TS_1 = goog.getMsg("Default:");
        i18n_0 = MSG_EXTERNAL_2473136848054292961$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_2_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟f025901df0cbaf314e7b32707720772c7e995008␟2473136848054292961:Default:`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_48462401577556644$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_2_INDEX_TS_3 = goog.getMsg("With seconds:");
        i18n_2 = MSG_EXTERNAL_48462401577556644$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_2_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟bc0c7a2511bfa61dc113f7119c46786f9621dffe␟48462401577556644:With seconds:`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4462643802911150950$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_2_INDEX_TS_5 = goog.getMsg("With SS and MS:");
        i18n_4 = MSG_EXTERNAL_4462643802911150950$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_2_INDEX_TS_5;
      } else {
        i18n_4 = $localize`:␟2e7211f1a6997fae0f9857838493f0658007bb74␟4462643802911150950:With SS and MS:`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7402895815395298696$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_2_INDEX_TS_7 = goog.getMsg("Form value:");
        i18n_6 = MSG_EXTERNAL_7402895815395298696$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_EXAMPLES_2_INDEX_TS_7;
      } else {
        i18n_6 = $localize`:␟bdc1ac802a9f8ebac5423e543fafda4ef101dcd5␟7402895815395298696:Form value:`;
      }

      return [[1, "b-form", 3, "formGroup"], i18n_0, ["formControlName", "testValue", "timeMode", "HH:MM"], i18n_2, ["formControlName", "testValue", "timeMode", "HH:MM:SS"], i18n_4, ["formControlName", "testValue", "timeMode", "HH:MM:SS.MSS"], i18n_6];
    },
    template: function TuiInputDateTimeExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵi18n */.SDv(2, 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input-date-time", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " Choose date and time ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
        fesm2015_core/* ɵɵi18n */.SDv(6, 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-input-date-time", 4);
        fesm2015_core/* ɵɵtext */._uU(8, " Choose date and time ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "p");
        fesm2015_core/* ɵɵi18n */.SDv(10, 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-input-date-time", 6);
        fesm2015_core/* ɵɵtext */._uU(12, " Choose date and time ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
        fesm2015_core/* ɵɵi18n */.SDv(14, 7);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "pre");
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "code");
        fesm2015_core/* ɵɵtext */._uU(17);
        fesm2015_core/* ɵɵpipe */.ALo(18, "json");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(17);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(fesm2015_core/* ɵɵpipeBind1 */.lcZ(18, 2, ctx.testForm.value));
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_date_time_component/* TuiInputDateTimeComponent */.u, input_date_time_directive/* TuiInputDateTimeDirective */.c, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    pipes: [common/* JsonPipe */.Ts],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputDateTimeExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date-time/examples/3/index.ts






let TuiInputDateTimeExample3 = /*#__PURE__*/(() => {
  class TuiInputDateTimeExample3 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI([new cdk.TuiDay(2017, 2, 15), new cdk.TuiTime(12, 30)]);
    }

  }

  TuiInputDateTimeExample3.ɵfac = function TuiInputDateTimeExample3_Factory(t) {
    return new (t || TuiInputDateTimeExample3)();
  };

  TuiInputDateTimeExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputDateTimeExample3,
    selectors: [["tui-input-date-time-example-3"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: cdk.TUI_DATE_FORMAT,
      useValue: `YMD`
    }, {
      provide: cdk.TUI_DATE_SEPARATOR,
      useValue: `/`
    }])],
    decls: 2,
    vars: 1,
    consts: [[1, "b-form", 3, "formControl"]],
    template: function TuiInputDateTimeExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-date-time", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Choose date and time\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control);
      }
    },
    directives: [input_date_time_component/* TuiInputDateTimeComponent */.u, input_date_time_directive/* TuiInputDateTimeDirective */.c, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputDateTimeExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date-time/examples/4/value-transformer.ts


let ExampleDateTimeTransformer = /*#__PURE__*/(() => {
  class ExampleDateTimeTransformer {
    constructor() {
      this.separator = `, `;
    }

    fromControlValue(controlValue) {
      const [day, time = ``] = controlValue.split(this.separator);
      return day ? [cdk.TuiDay.normalizeParse(day), time ? cdk.TuiTime.fromString(time) : null] : [null, null];
    }

    toControlValue([day, time]) {
      return day ? day.toString() + (time ? `${this.separator}${time.toString()}` : ``) : ``;
    }

  }

  ExampleDateTimeTransformer.ɵfac = function ExampleDateTimeTransformer_Factory(t) {
    return new (t || ExampleDateTimeTransformer)();
  };

  ExampleDateTimeTransformer.ɵprov = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjectable */.Yz7({
    token: ExampleDateTimeTransformer,
    factory: ExampleDateTimeTransformer.ɵfac
  });
  return ExampleDateTimeTransformer;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date-time/examples/4/index.ts







let TuiInputDateTimeExample4 = /*#__PURE__*/(() => {
  class TuiInputDateTimeExample4 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI(`19.01.2022, 12:33`);
    }

  }

  TuiInputDateTimeExample4.ɵfac = function TuiInputDateTimeExample4_Factory(t) {
    return new (t || TuiInputDateTimeExample4)();
  };

  TuiInputDateTimeExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputDateTimeExample4,
    selectors: [["tui-input-date-time-example-4"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: kit.TUI_DATE_TIME_VALUE_TRANSFORMER,
      useClass: ExampleDateTimeTransformer
    }])],
    decls: 7,
    vars: 2,
    consts: [[1, "b-form", 3, "formControl"]],
    template: function TuiInputDateTimeExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-date-time", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Choose date and time\n");
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
    directives: [input_date_time_component/* TuiInputDateTimeComponent */.u, input_date_time_directive/* TuiInputDateTimeDirective */.c, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputDateTimeExample4;
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
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-icon-left.directive.ts
var textfield_icon_left_directive = __webpack_require__(3729);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date-time/input-date-time.component.ts































function ExampleTuiInputDateTimeComponent_ng_template_1_Template(rf, ctx) {
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
    fesm2015_core/* ɵɵelement */._UZ(25, "code");
    fesm2015_core/* ɵɵelementStart */.TgZ(26, "p");
    fesm2015_core/* ɵɵelement */._UZ(27, "a", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(28, "tui-doc-example", 11);
    fesm2015_core/* ɵɵelementStart */.TgZ(29, "tui-notification", 12);
    fesm2015_core/* ɵɵtext */._uU(30, " If you need to set some attributes or listen to events on native ");
    fesm2015_core/* ɵɵelementStart */.TgZ(31, "code");
    fesm2015_core/* ɵɵtext */._uU(32, "input");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(33, " , you can put it inside with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(34, "code");
    fesm2015_core/* ɵɵtext */._uU(35, "Textfield");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(36, " directive as shown below ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(37, "tui-input-date-time-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(38, "tui-doc-example", 13);
    fesm2015_core/* ɵɵelement */._UZ(39, "tui-input-date-time-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(40, "tui-doc-example", 14);
    fesm2015_core/* ɵɵelement */._UZ(41, "tui-input-date-time-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(42, "tui-doc-example", 15);
    fesm2015_core/* ɵɵelement */._UZ(43, "tui-input-date-time-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(28);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
  }
}

function ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-date-time", 24);
    fesm2015_core/* ɵɵtext */._uU(1, " Choose date and time ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("disabledItemHandler", ctx_r3.disabledItemHandler)("formControl", ctx_r3.control)("focusable", ctx_r3.focusable)("min", ctx_r3.min)("max", ctx_r3.max)("defaultActiveYearMonth", ctx_r3.defaultActiveYearMonth)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoInvalid", ctx_r3.pseudoInvalid)("readOnly", ctx_r3.readOnly)("timeMode", ctx_r3.mode)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintAppearance", ctx_r3.hintAppearance)("tuiTextfieldIconLeft", ctx_r3.iconLeft)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size);
  }
}

function ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 25);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵtext */._uU(1, "A handler that gets a date and returns true if it is disabled.");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "strong");
    fesm2015_core/* ɵɵtext */._uU(3, "Must be a pure function");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 26);
  }
}

function ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 27);
  }
}

function ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 28);
  }
}

function ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 29);
  }
}

function ExampleTuiInputDateTimeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 16);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_1_Template, 2, 18, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_4_Template, 4, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.disabledItemHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 21);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.defaultActiveYearMonth = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiInputDateTimeComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 22);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputDateTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.mode = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "inherited-documentation", 23);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.defaultActiveYearMonthVariants)("documentationPropertyValue", ctx_r1.defaultActiveYearMonth);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.modeVariants)("documentationPropertyValue", ctx_r1.mode);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("dropdown", true);
  }
}

function ExampleTuiInputDateTimeComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 30);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 31);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 32);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 33);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 34);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵi18nStart */.tHW(13, 35);
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-doc-code", 36);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleForm);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiInputDateTimeComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputDateTimeComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.today = cdk.TuiDay.currentLocal();
      this.exampleForm = __webpack_require__.e(/* import() */ 93995).then(__webpack_require__.t.bind(__webpack_require__, 93995, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 13284).then(__webpack_require__.t.bind(__webpack_require__, 13284, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 90794).then(__webpack_require__.t.bind(__webpack_require__, 90794, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 12039).then(__webpack_require__.t.bind(__webpack_require__, 12039, 17)),
        HTML: __webpack_require__.e(/* import() */ 41018).then(__webpack_require__.t.bind(__webpack_require__, 41018, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 42673).then(__webpack_require__.t.bind(__webpack_require__, 42673, 17)),
        HTML: __webpack_require__.e(/* import() */ 85654).then(__webpack_require__.t.bind(__webpack_require__, 85654, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 34516).then(__webpack_require__.t.bind(__webpack_require__, 34516, 17)),
        HTML: __webpack_require__.e(/* import() */ 17152).then(__webpack_require__.t.bind(__webpack_require__, 17152, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 74832).then(__webpack_require__.t.bind(__webpack_require__, 74832, 17)),
        HTML: __webpack_require__.e(/* import() */ 30855).then(__webpack_require__.t.bind(__webpack_require__, 30855, 17)),
        'value-transformer.ts': __webpack_require__.e(/* import() */ 6014).then(__webpack_require__.t.bind(__webpack_require__, 6014, 17))
      };
      this.minVariants = [cdk.TUI_FIRST_DAY, new cdk.TuiDay(2017, 2, 5), new cdk.TuiDay(1900, 0, 1), [this.today.append({
        day: -1
      }), new cdk.TuiTime(12, 20)]];
      this.min = this.minVariants[0];
      this.maxVariants = [cdk.TUI_LAST_DAY, new cdk.TuiDay(2017, 11, 11), new cdk.TuiDay(2020, 2, 5), new cdk.TuiDay(2300, 0, 1), [this.today.append({
        day: +1
      }), new cdk.TuiTime(16, 20)]];
      this.max = this.maxVariants[0];
      this.defaultActiveYearMonthVariants = [cdk.TuiMonth.currentLocal(), new cdk.TuiMonth(2020, 2), new cdk.TuiMonth(2017, 2)];
      this.defaultActiveYearMonth = this.defaultActiveYearMonthVariants[0];
      this.disabledItemHandlerVariants = [cdk.ALWAYS_FALSE_HANDLER, ({
        day
      }) => day % 3 === 0];
      this.disabledItemHandler = this.disabledItemHandlerVariants[0];
      this.itemsVariants = [[], [new kit.TuiNamedDay(cdk.TUI_LAST_DAY.append({
        year: -1
      }), `Unill today`)]];
      this.items = this.itemsVariants[0];
      this.autocompleteVariants = [`off`, `bday`];
      this.autocomplete = ``;
      this.cleaner = false;
      this.control = new fesm2015_forms/* FormControl */.NI(null, fesm2015_forms/* Validators.required */.kI.required);
      this.modeVariants = [`HH:MM`, `HH:MM:SS`, `HH:MM:SS.MSS`];
      this.mode = this.modeVariants[0];
    }

  }

  ExampleTuiInputDateTimeComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputDateTimeComponent_BaseFactory;
    return function ExampleTuiInputDateTimeComponent_Factory(t) {
      return (ɵExampleTuiInputDateTimeComponent_BaseFactory || (ɵExampleTuiInputDateTimeComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputDateTimeComponent)))(t || ExampleTuiInputDateTimeComponent);
    };
  }();

  ExampleTuiInputDateTimeComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputDateTimeComponent,
    selectors: [["example-tui-input-date-time"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputDateTimeComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4454597240613417998$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}InputDateTime{$closeTagCode} allows to input date and time ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_4454597240613417998$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟044a4dc175f6a468120b459545b576929c5ece55␟4454597240613417998:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputDateTime${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows to input date and time `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9067186024080940878$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__3 = goog.getMsg("DI-tokens for date localization:");
        i18n_2 = MSG_EXTERNAL_9067186024080940878$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟44191f6f2084b7e19ed30289598f45f6dc88ef96␟9067186024080940878:DI-tokens for date localization:`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7722521738393615006$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__5 = goog.getMsg("{$startTagDt}{$startTagCode}TUI_DATE_FORMAT{$closeTagCode}{$closeTagDt}{$startTagDd} active date format ( {$startTagCode}'DMY' | 'MDY' | 'YMD'{$closeTagCode} ) {$closeTagDd}{$startTagDt}{$startTagCode}TUI_DATE_SEPARATOR{$closeTagCode}{$closeTagDt}{$startTagDd_1}single-character date's separator (dot, slash etc.){$closeTagDd}", {
          "startTagDt": "[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]",
          "startTagCode": "[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]",
          "closeTagCode": "[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]",
          "closeTagDt": "[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]",
          "startTagDd": "\uFFFD#9\uFFFD",
          "closeTagDd": "[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]",
          "startTagDd_1": "\uFFFD#13\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_7722521738393615006$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟4a9f8a78772cf0d29d68a56ec7d2e2e4cde207ba␟7722521738393615006:${"[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_DT:${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TUI_DATE_FORMAT${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_DT:${"\uFFFD#9\uFFFD"}:START_TAG_DD: active date format ( ${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:'DMY' | 'MDY' | 'YMD'${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE: ) ${"[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_DD:${"[\uFFFD#7\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_DT:${"[\uFFFD#8\uFFFD|\uFFFD#10\uFFFD|\uFFFD#12\uFFFD]"}:START_TAG_CODE:TUI_DATE_SEPARATOR${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD|\uFFFD/#12\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#7\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_DT:${"\uFFFD#13\uFFFD"}:START_TAG_DD_1:single-character date's separator (dot, slash etc.)${"[\uFFFD/#9\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_TAG_DD:`;
      }

      i18n_4 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_4);
      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4839071173512899768$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__7 = goog.getMsg("DI-tokens for input-configurations:");
        i18n_6 = MSG_EXTERNAL_4839071173512899768$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟1e189ebe2d938d6aaa6a9a2f9adeff1e3b372aac␟4839071173512899768:DI-tokens for input-configurations:`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3277359903153257463$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__9 = goog.getMsg("{$startTagDt}{$startTagCode}TUI_DATE_TIME_VALUE_TRANSFORMER{$closeTagCode}{$closeTagDt}{$startTagDd} custom format of control output ( {$startTagCode}[TuiDay | null, TuiTime | null]{$closeTagCode} is default). {$startParagraph}{$startLink} See example {$closeLink} with string as control's output. {$closeParagraph}{$closeTagDd}", {
          "startTagDt": "\uFFFD#22\uFFFD",
          "startTagCode": "[\uFFFD#23\uFFFD|\uFFFD#25\uFFFD]",
          "closeTagCode": "[\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD]",
          "closeTagDt": "\uFFFD/#22\uFFFD",
          "startTagDd": "\uFFFD#24\uFFFD",
          "startParagraph": "\uFFFD#26\uFFFD",
          "startLink": "\uFFFD#27\uFFFD",
          "closeLink": "\uFFFD/#27\uFFFD",
          "closeParagraph": "\uFFFD/#26\uFFFD",
          "closeTagDd": "\uFFFD/#24\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_3277359903153257463$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟9131d0fb644c4d5aaa930d7412f5df510b08e6be␟3277359903153257463:${"\uFFFD#22\uFFFD"}:START_TAG_DT:${"[\uFFFD#23\uFFFD|\uFFFD#25\uFFFD]"}:START_TAG_CODE:TUI_DATE_TIME_VALUE_TRANSFORMER${"[\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#22\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#24\uFFFD"}:START_TAG_DD: custom format of control output ( ${"[\uFFFD#23\uFFFD|\uFFFD#25\uFFFD]"}:START_TAG_CODE:[TuiDay | null, TuiTime | null]${"[\uFFFD/#23\uFFFD|\uFFFD/#25\uFFFD]"}:CLOSE_TAG_CODE: is default). ${"\uFFFD#26\uFFFD"}:START_PARAGRAPH:${"\uFFFD#27\uFFFD"}:START_LINK: See example ${"\uFFFD/#27\uFFFD"}:CLOSE_LINK: with string as control's output. ${"\uFFFD/#26\uFFFD"}:CLOSE_PARAGRAPH:${"\uFFFD/#24\uFFFD"}:CLOSE_TAG_DD:`;
      }

      i18n_8 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_8);
      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__11 = goog.getMsg("Basic");
        i18n_10 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6778729094598431749$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__13 = goog.getMsg("With control's output as string");
        i18n_12 = MSG_EXTERNAL_6778729094598431749$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟c2d11aaec69642ed60bc139f0b022de0a9a109d7␟6778729094598431749:With control's output as string`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___15 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7105748595977480347$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___17 = goog.getMsg(" Min date ");
        i18n_16 = MSG_EXTERNAL_7105748595977480347$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6045744383953302270$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___19 = goog.getMsg(" Max date ");
        i18n_18 = MSG_EXTERNAL_6045744383953302270$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_777422566563462419$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___21 = goog.getMsg(" The default active month that is shown when you opens calendar for the first time ");
        i18n_20 = MSG_EXTERNAL_777422566563462419$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟bc715c06fbc5fe4bc714850e286281145c441611␟777422566563462419: The default active month that is shown when you opens calendar for the first time `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1953362032734413793$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___23 = goog.getMsg(" Time modes for SS and MS support ");
        i18n_22 = MSG_EXTERNAL_1953362032734413793$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟c565c714bb04a047bd1bae3404031386d26d05d8␟1953362032734413793: Time modes for SS and MS support `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5541686400640412405$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__25 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiInputDateTimeModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_24 = MSG_EXTERNAL_5541686400640412405$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__25;
      } else {
        i18n_24 = $localize`:␟5ac39f9a4865e1fa1076fe6bfc72e1ff99949f29␟5541686400640412405: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputDateTimeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__27 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_26 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__27;
      } else {
        i18n_26 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_26 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_26);
      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8794844667839774096$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__29 = goog.getMsg(" Use in template: {$startTagTuiDocCode}{$closeTagTuiDocCode}", {
          "startTagTuiDocCode": "\uFFFD#14\uFFFD",
          "closeTagTuiDocCode": "\uFFFD/#14\uFFFD"
        });
        i18n_28 = MSG_EXTERNAL_8794844667839774096$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_DATE_TIME_INPUT_DATE_TIME_COMPONENT_TS__29;
      } else {
        i18n_28 = $localize`:␟76d52ae838e90b2ba174872346714a031dbc612d␟8794844667839774096: Use in template: ${"\uFFFD#14\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#14\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:`;
      }

      return [["header", "InputDateTime", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-9"], i18n_0, i18n_2, i18n_4, [1, "tui-space_bottom-5"], ["tuiLink", "", "routerLink", ".", "fragment", "date-localization"], i18n_6, i18n_8, ["tuiLink", "", "routerLink", ".", "fragment", "string-control-output"], ["id", "base", "heading", i18n_10, 3, "content"], [1, "tui-space_bottom-4", "b-form"], ["id", "modes", "heading", "Modes", 3, "content"], ["id", "date-localization", "heading", "Date localization", 3, "content"], ["id", "string-control-output", "heading", i18n_12, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<TuiDay>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay | [TuiDay, TuiTime]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay | [TuiDay, TuiTime]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "defaultActiveYearMonth", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMonth", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "timeMode", "documentationPropertyMode", "input", "documentationPropertyType", "TuiTimeMode", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "dropdown"], [3, "disabledItemHandler", "formControl", "focusable", "min", "max", "defaultActiveYearMonth", "pseudoFocus", "pseudoHover", "pseudoInvalid", "readOnly", "timeMode", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance", "tuiTextfieldIconLeft", "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "tuiTextfieldSize"], i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, [1, "b-demo-steps"], i18n_24, ["filename", "myComponent.module.ts", 3, "code"], i18n_26, ["filename", "myComponent.component.ts", 3, "code"], i18n_28, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiInputDateTimeComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputDateTimeComponent_ng_template_1_Template, 44, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputDateTimeComponent_ng_template_2_Template, 10, 13, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputDateTimeComponent_ng_template_3_Template, 15, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, notification_component/* TuiNotificationComponent */.L, TuiInputDateTimeExample1, TuiInputDateTimeExample2, TuiInputDateTimeExample3, TuiInputDateTimeExample4, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, input_date_time_component/* TuiInputDateTimeComponent */.u, input_date_time_directive/* TuiInputDateTimeDirective */.c, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, hint_options_directive/* TuiHintOptionsDirective */.bZ, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiInputDateTimeComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-date-time/input-date-time.module.ts














let ExampleTuiInputDateTimeModule = /*#__PURE__*/(() => {
  class ExampleTuiInputDateTimeModule {}

  ExampleTuiInputDateTimeModule.ɵfac = function ExampleTuiInputDateTimeModule_Factory(t) {
    return new (t || ExampleTuiInputDateTimeModule)();
  };

  ExampleTuiInputDateTimeModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputDateTimeModule
  });
  ExampleTuiInputDateTimeModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, core.TuiLinkModule, kit.TuiInputDateTimeModule, core.TuiHintModule, core.TuiTextfieldControllerModule, core.TuiNotificationModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputDateTimeComponent))]]
  });
  return ExampleTuiInputDateTimeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputDateTimeModule, {
    declarations: [ExampleTuiInputDateTimeComponent, TuiInputDateTimeExample1, TuiInputDateTimeExample2, TuiInputDateTimeExample3, TuiInputDateTimeExample4],
    imports: [public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, core.TuiLinkModule, kit.TuiInputDateTimeModule, core.TuiHintModule, core.TuiTextfieldControllerModule, core.TuiNotificationModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiInputDateTimeComponent]
  });
})();

/***/ })

}]);