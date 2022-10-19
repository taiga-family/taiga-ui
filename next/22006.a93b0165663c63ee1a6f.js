"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[22006],{

/***/ 22006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputTimeModule": () => (/* binding */ ExampleTuiInputTimeModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 115 modules
var kit = __webpack_require__(56757);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-time/input-time.component.ts
var input_time_component = __webpack_require__(86730);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/kit/directives/unfinished-validator/unfinished-validator.directive.ts
var unfinished_validator_directive = __webpack_require__(31510);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-time/examples/1/index.ts








let TuiInputTimeExample1 = /*#__PURE__*/(() => {
  class TuiInputTimeExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(new cdk.TuiTime(12, 30))
      });
    }

  }

  TuiInputTimeExample1.ɵfac = function TuiInputTimeExample1_Factory(t) {
    return new (t || TuiInputTimeExample1)();
  };

  TuiInputTimeExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputTimeExample1,
    selectors: [["tui-input-time-example-1"]],
    decls: 10,
    vars: 2,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_636934070228782456$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_EXAMPLES_1_INDEX_TS_1 = goog.getMsg(" If field is not required, but you want to mark it invalid if user did not complete it, use {$startTagCode}tuiUnfinishedValidator{$closeTagCode} directive ", {
          "startTagCode": "\uFFFD#7\uFFFD",
          "closeTagCode": "\uFFFD/#7\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_636934070228782456$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟61d588693acb4c2fd9ce18b72aa5c2ba2ed8b4d4␟636934070228782456: If field is not required, but you want to mark it invalid if user did not complete it, use ${"\uFFFD#7\uFFFD"}:START_TAG_CODE:tuiUnfinishedValidator${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_CODE: directive `;
      }

      return [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue", "tuiTextfieldSize", "s"], ["formControlName", "testValue", "tuiTextfieldSize", "m", 1, "tui-space_top-2", 3, "tuiTextfieldLabelOutside"], i18n_0, ["tuiUnfinishedValidator", "", "formControlName", "testValue"]];
    },
    template: function TuiInputTimeExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-time", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Input time ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input-time", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " Input time ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(6, 3);
        fesm2015_core/* ɵɵelement */._UZ(7, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-input-time", 4);
        fesm2015_core/* ɵɵtext */._uU(9, " Input time ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_time_component/* TuiInputTimeComponent */.G, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, unfinished_validator_directive/* TuiUnfinishedValidatorDirective */.Q],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputTimeExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-time/examples/2/index.ts





let TuiInputTimeExample2 = /*#__PURE__*/(() => {
  class TuiInputTimeExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(null)
      });
      this.items1 = (0,kit.tuiCreateTimePeriods)();
      this.items2 = (0,kit.tuiCreateTimePeriods)(10, 20, [0, 15, 30, 45]);
    }

  }

  TuiInputTimeExample2.ɵfac = function TuiInputTimeExample2_Factory(t) {
    return new (t || TuiInputTimeExample2)();
  };

  TuiInputTimeExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputTimeExample2,
    selectors: [["tui-input-time-example-2"]],
    decls: 5,
    vars: 4,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue", 3, "items"], ["formControlName", "testValue", 1, "tui-space_top-4", 3, "items", "strict"]],
    template: function TuiInputTimeExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-time", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Input time ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input-time", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " Input time ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("items", ctx.items1);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("items", ctx.items2)("strict", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_time_component/* TuiInputTimeComponent */.G, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputTimeExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-time/examples/3/index.ts





let TuiInputTimeExample3 = /*#__PURE__*/(() => {
  class TuiInputTimeExample3 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(null)
      });
      this.items1 = (0,kit.tuiCreateTimePeriods)();
    }

  }

  TuiInputTimeExample3.ɵfac = function TuiInputTimeExample3_Factory(t) {
    return new (t || TuiInputTimeExample3)();
  };

  TuiInputTimeExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputTimeExample3,
    selectors: [["tui-input-time-example-3"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([(0,kit.tuiInputTimeOptionsProvider)({
      icon: `tuiIconCheckCircleLarge`,
      mode: `HH:MM:SS`,
      itemSize: `s`
    })])],
    decls: 3,
    vars: 2,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue", 3, "items"]],
    template: function TuiInputTimeExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-time", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Input time ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("items", ctx.items1);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_time_component/* TuiInputTimeComponent */.G, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputTimeExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-time/examples/4/index.ts





let TuiInputTimeExample4 = /*#__PURE__*/(() => {
  class TuiInputTimeExample4 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(null)
      });
    }

  }

  TuiInputTimeExample4.ɵfac = function TuiInputTimeExample4_Factory(t) {
    return new (t || TuiInputTimeExample4)();
  };

  TuiInputTimeExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputTimeExample4,
    selectors: [["tui-input-time-example-4"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([(0,kit.tuiInputTimeOptionsProvider)({
      mode: `HH:MM`,
      postfix: `left`,
      maxValues: {
        HH: 47,
        MM: 59,
        SS: 59,
        MS: 999
      }
    })])],
    decls: 3,
    vars: 1,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue"]],
    template: function TuiInputTimeExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-time", 1);
        fesm2015_core/* ɵɵtext */._uU(2, "Max: 47h 59m");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_time_component/* TuiInputTimeComponent */.G, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputTimeExample4;
})();
// EXTERNAL MODULE: ./projects/kit/components/toggle/toggle.component.ts
var toggle_component = __webpack_require__(82535);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-time/examples/5/index.ts






let TuiInputTimeExample5 = /*#__PURE__*/(() => {
  class TuiInputTimeExample5 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(null),
        isPm: new fesm2015_forms/* FormControl */.NI(false)
      });
    }

    get postfix() {
      var _a;

      return ((_a = this.testForm.value) === null || _a === void 0 ? void 0 : _a.isPm) ? `PM` : `AM`;
    }

  }

  TuiInputTimeExample5.ɵfac = function TuiInputTimeExample5_Factory(t) {
    return new (t || TuiInputTimeExample5)();
  };

  TuiInputTimeExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputTimeExample5,
    selectors: [["tui-input-time-example-5"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([(0,kit.tuiInputTimeOptionsProvider)({
      mode: `HH:MM`,
      maxValues: {
        HH: 11,
        MM: 59,
        SS: 59,
        MS: 999
      }
    })])],
    decls: 4,
    vars: 2,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue", 1, "tui-space_bottom-2", 3, "postfix"], ["formControlName", "isPm", "size", "l"]],
    template: function TuiInputTimeExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-time", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " 12h time ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-toggle", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("postfix", ctx.postfix);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_time_component/* TuiInputTimeComponent */.G, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, toggle_component/* TuiToggleComponent */.p],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputTimeExample5;
})();
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/control.ts
var control = __webpack_require__(82880);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts
var abstract_props_accessor = __webpack_require__(98204);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
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
// EXTERNAL MODULE: ./projects/core/directives/dropdown/dropdown-options.directive.ts
var dropdown_options_directive = __webpack_require__(33250);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-time/input-time.component.ts




























function ExampleTuiInputTimeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-input-time-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-input-time-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-input-time-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-input-time-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-input-time-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
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

function ExampleTuiInputTimeComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-time", 15);
    fesm2015_core/* ɵɵtext */._uU(1, " Input time ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("focusable", ctx_r3.focusable)("disabledItemHandler", ctx_r3.disabledItemHandler)("tuiDropdownAlign", ctx_r3.dropdownAlign)("tuiDropdownDirection", ctx_r3.dropdownDirection)("tuiDropdownLimitWidth", ctx_r3.dropdownLimitWidth)("tuiDropdownMinHeight", ctx_r3.dropdownMinHeight)("tuiDropdownMaxHeight", ctx_r3.dropdownMaxHeight)("items", ctx_r3.items)("itemSize", ctx_r3.itemSize)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size)("mode", ctx_r3.mode)("readOnly", ctx_r3.readOnly)("strict", ctx_r3.strict)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintAppearance", ctx_r3.hintAppearance);
  }
}

function ExampleTuiInputTimeComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 16);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputTimeComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 17);
  }
}

function ExampleTuiInputTimeComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 18);
  }
}

function ExampleTuiInputTimeComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiInputTimeComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 20);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputTimeComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiInputTimeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 8);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputTimeComponent_ng_template_2_ng_template_1_Template, 2, 22, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputTimeComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputTimeComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.disabledItemHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiInputTimeComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.items = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputTimeComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.itemSize = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiInputTimeComponent_ng_template_2_ng_template_7_Template, 2, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.strict = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiInputTimeComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputTimeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.mode = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "inherited-documentation");
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
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.itemSizeVariants)("documentationPropertyValue", ctx_r1.itemSize);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.strict);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.modeVariants)("documentationPropertyValue", ctx_r1.mode);
  }
}

function ExampleTuiInputTimeComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 22);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 23);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 25);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 26);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18n */.SDv(14, 27);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-doc-code", 28);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(18, 29);
    fesm2015_core/* ɵɵelement */._UZ(19, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(20, "tui-doc-code", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleForm);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleOptions);
  }
}

let ExampleTuiInputTimeComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputTimeComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 72355).then(__webpack_require__.t.bind(__webpack_require__, 1392, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 93061).then(__webpack_require__.t.bind(__webpack_require__, 93061, 17));
      this.exampleForm = __webpack_require__.e(/* import() */ 55886).then(__webpack_require__.t.bind(__webpack_require__, 55886, 17));
      this.exampleOptions = __webpack_require__.e(/* import() */ 74121).then(__webpack_require__.t.bind(__webpack_require__, 74121, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 21210).then(__webpack_require__.t.bind(__webpack_require__, 21210, 17)),
        HTML: __webpack_require__.e(/* import() */ 53419).then(__webpack_require__.t.bind(__webpack_require__, 53419, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 3679).then(__webpack_require__.t.bind(__webpack_require__, 3679, 17)),
        HTML: __webpack_require__.e(/* import() */ 15040).then(__webpack_require__.t.bind(__webpack_require__, 15040, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 59021).then(__webpack_require__.t.bind(__webpack_require__, 59021, 17)),
        HTML: __webpack_require__.e(/* import() */ 61240).then(__webpack_require__.t.bind(__webpack_require__, 61240, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 50704).then(__webpack_require__.t.bind(__webpack_require__, 50704, 17)),
        HTML: __webpack_require__.e(/* import() */ 37998).then(__webpack_require__.t.bind(__webpack_require__, 37998, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 19707).then(__webpack_require__.t.bind(__webpack_require__, 19707, 17)),
        HTML: __webpack_require__.e(/* import() */ 87871).then(__webpack_require__.t.bind(__webpack_require__, 87871, 17))
      };
      this.cleaner = false;
      this.control = new fesm2015_forms/* FormControl */.NI(cdk.TuiTime.currentLocal(), fesm2015_forms/* Validators.required */.kI.required);
      this.disabledItemHandlerVariants = [cdk.ALWAYS_FALSE_HANDLER, item => {
        return String(item) === `06:00` || item > cdk.TuiTime.currentLocal();
      }];
      this.disabledItemHandler = this.disabledItemHandlerVariants[0];
      this.itemSizeVariants = [`s`, `m`, `l`];
      this.itemSize = this.itemSizeVariants[1];
      this.itemsVariants = [[], (0,kit.tuiCreateTimePeriods)()];
      this.items = this.itemsVariants[0];
      this.strict = false;
      this.modeVariants = [`HH:MM`, `HH:MM:SS`, `HH:MM:SS.MSS`];
      this.mode = this.modeVariants[0];
    }

  }

  ExampleTuiInputTimeComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputTimeComponent_BaseFactory;
    return function ExampleTuiInputTimeComponent_Factory(t) {
      return (ɵExampleTuiInputTimeComponent_BaseFactory || (ɵExampleTuiInputTimeComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputTimeComponent)))(t || ExampleTuiInputTimeComponent);
    };
  }();

  ExampleTuiInputTimeComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputTimeComponent,
    selectors: [["example-tui-input-time"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputTimeComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8615486962666750555$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}InputTime{$closeTagCode} allows input time in HH:MM format ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_8615486962666750555$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟e8a2bde0c996d748dfc42e17591970b8e5410497␟8615486962666750555:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputTime${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows input time in HH:MM format `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6575185929467550326$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__5 = goog.getMsg("Dropdown");
        i18n_4 = MSG_EXTERNAL_6575185929467550326$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟02877ac86ce0bf8a4be0038f3408197fb7185834␟6575185929467550326:Dropdown`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7910525381274771902$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__7 = goog.getMsg("You can set items for dropdown");
        i18n_6 = MSG_EXTERNAL_7910525381274771902$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟a0d1d61146f641ff9d97a0f45f4dcfbbbfc0c34c␟7910525381274771902:You can set items for dropdown`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2668720220261995343$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__9 = goog.getMsg("Options (icon)");
        i18n_8 = MSG_EXTERNAL_2668720220261995343$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟9255dd96897796d5affce74a61a2291eae9266ac␟2668720220261995343:Options (icon)`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2697690106240864393$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__11 = goog.getMsg("Options (max values)");
        i18n_10 = MSG_EXTERNAL_2697690106240864393$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟f129f43eeb78347ccc3266869fb0b22c60ad2e1d␟2697690106240864393:Options (max values)`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7977286649536497017$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__13 = goog.getMsg("Options (max values and postfix)");
        i18n_12 = MSG_EXTERNAL_7977286649536497017$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟878d7ca6fe7d9ae4ea0aef760a7ec6628c291159␟7977286649536497017:Options (max values and postfix)`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS___15 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5455519835188831701$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS___17 = goog.getMsg(" Hadler to disable some items ");
        i18n_16 = MSG_EXTERNAL_5455519835188831701$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟c7ab3fd1e5a42d5126408308618dadf4ff737951␟5455519835188831701: Hadler to disable some items `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1811722709754725185$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS___19 = goog.getMsg(" Items to choose ");
        i18n_18 = MSG_EXTERNAL_1811722709754725185$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟fcb0bfa7a00eafe45aafb6405e0163e556110008␟1811722709754725185: Items to choose `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3777218839065355099$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS___21 = goog.getMsg(" Item size ");
        i18n_20 = MSG_EXTERNAL_3777218839065355099$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟fd092eee471b2ec66fc4a2ff3d39a4208b43348b␟3777218839065355099: Item size `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_624474866634481224$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS___23 = goog.getMsg(" Only {$startTagCode}items{$closeTagCode} are allowed ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_22 = MSG_EXTERNAL_624474866634481224$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟631a650f62f703fab057c6cbb73fe7c72120f32e␟624474866634481224: Only ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:items${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: are allowed `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2941029810011146565$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS___25 = goog.getMsg(" Modes for seconds and ms support ");
        i18n_24 = MSG_EXTERNAL_2941029810011146565$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟b274f285a6f1cc8b44cf362a7ef1466d41003c58␟2941029810011146565: Modes for seconds and ms support `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3457683966234918968$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__27 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiInputTimeModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_26 = MSG_EXTERNAL_3457683966234918968$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__27;
      } else {
        i18n_26 = $localize`:␟d00ed7b0e838c2a5dde4ec5301c69ae275f8a906␟3457683966234918968: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputTimeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__29 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_28 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__29;
      } else {
        i18n_28 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_28 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_28);
      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__31 = goog.getMsg("Add to the template:");
        i18n_30 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__31;
      } else {
        i18n_30 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_615718100654416580$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__33 = goog.getMsg(" Optionally use the {$startTagCode}TUI_INPUT_TIME_OPTIONS{$closeTagCode} injection token to override the default options for the component. ", {
          "startTagCode": "\uFFFD#19\uFFFD",
          "closeTagCode": "\uFFFD/#19\uFFFD"
        });
        i18n_32 = MSG_EXTERNAL_615718100654416580$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_TIME_INPUT_TIME_COMPONENT_TS__33;
      } else {
        i18n_32 = $localize`:␟0de2f7374306f451fae92cf32ca6f094105da6b8␟615718100654416580: Optionally use the ${"\uFFFD#19\uFFFD"}:START_TAG_CODE:TUI_INPUT_TIME_OPTIONS${"\uFFFD/#19\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;
      }

      return [["header", "InputTime", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "dropdown", "heading", i18n_4, "description", i18n_6, 3, "content"], ["id", "options", "heading", i18n_8, 3, "content"], ["id", "options_max", "heading", i18n_10, 3, "content"], ["id", "options_ampm", "heading", i18n_12, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<TuiTime>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "items", "documentationPropertyMode", "input", "documentationPropertyType", "ReadonlyArray<TuiTime>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "itemSize", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "strict", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "mode", "documentationPropertyMode", "input", "documentationPropertyType", "TuiTimeMode", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formControl", "focusable", "disabledItemHandler", "tuiDropdownAlign", "tuiDropdownDirection", "tuiDropdownLimitWidth", "tuiDropdownMinHeight", "tuiDropdownMaxHeight", "items", "itemSize", "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "mode", "readOnly", "strict", "pseudoInvalid", "pseudoFocus", "pseudoHover", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance"], i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, [1, "b-demo-steps"], i18n_26, ["filename", "myComponent.module.ts", 3, "code"], i18n_28, ["filename", "myComponent.component.ts", 3, "code"], i18n_30, ["filename", "myComponent.template.html", 3, "code"], i18n_32];
    },
    template: function ExampleTuiInputTimeComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputTimeComponent_ng_template_1_Template, 13, 5, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputTimeComponent_ng_template_2_Template, 10, 11, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputTimeComponent_ng_template_3_Template, 21, 4, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiInputTimeExample1, TuiInputTimeExample2, TuiInputTimeExample3, TuiInputTimeExample4, TuiInputTimeExample5, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, input_time_component/* TuiInputTimeComponent */.G, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, dropdown_options_directive/* TuiDropdownOptionsDirective */.Ek, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, hint_options_directive/* TuiHintOptionsDirective */.bZ, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiInputTimeComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-time/input-time.module.ts















let ExampleTuiInputTimeModule = /*#__PURE__*/(() => {
  class ExampleTuiInputTimeModule {}

  ExampleTuiInputTimeModule.ɵfac = function ExampleTuiInputTimeModule_Factory(t) {
    return new (t || ExampleTuiInputTimeModule)();
  };

  ExampleTuiInputTimeModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputTimeModule
  });
  ExampleTuiInputTimeModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiInputTimeModule, core.TuiLinkModule, inherited_documentation_module/* InheritedDocumentationModule */.f, core.TuiButtonModule, core.TuiDropdownModule, core.TuiTextfieldControllerModule, core.TuiHintModule, kit.TuiToggleModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputTimeComponent)), kit.TuiUnfinishedValidatorModule]]
  });
  return ExampleTuiInputTimeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputTimeModule, {
    declarations: [ExampleTuiInputTimeComponent, TuiInputTimeExample1, TuiInputTimeExample2, TuiInputTimeExample3, TuiInputTimeExample4, TuiInputTimeExample5],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiInputTimeModule, core.TuiLinkModule, inherited_documentation_module/* InheritedDocumentationModule */.f, core.TuiButtonModule, core.TuiDropdownModule, core.TuiTextfieldControllerModule, core.TuiHintModule, kit.TuiToggleModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz, kit.TuiUnfinishedValidatorModule],
    exports: [ExampleTuiInputTimeComponent]
  });
})();

/***/ })

}]);