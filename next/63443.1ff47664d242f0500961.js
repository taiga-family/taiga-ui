"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[63443],{

/***/ 63443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputMonthRangeModule": () => (/* binding */ ExampleTuiInputMonthRangeModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-month-range/input-month-range.component.ts
var input_month_range_component = __webpack_require__(12571);
// EXTERNAL MODULE: ./projects/kit/components/input-month-range/input-month-range.directive.ts
var input_month_range_directive = __webpack_require__(10638);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-month-range/examples/1/index.ts







let TuiInputMonthRangeExample1 = /*#__PURE__*/(() => {
  class TuiInputMonthRangeExample1 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI();
    }

  }

  TuiInputMonthRangeExample1.ɵfac = function TuiInputMonthRangeExample1_Factory(t) {
    return new (t || TuiInputMonthRangeExample1)();
  };

  TuiInputMonthRangeExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputMonthRangeExample1,
    selectors: [["tui-input-month-range-example-1"]],
    decls: 3,
    vars: 2,
    consts: [[1, "b-form", 3, "formControl", "tuiTextfieldCleaner"], ["tuiTextfield", "", "placeholder", "3 months or more"]],
    template: function TuiInputMonthRangeExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-month-range", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Choose a range of months ");
        fesm2015_core/* ɵɵelement */._UZ(2, "input", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("tuiTextfieldCleaner", true);
      }
    },
    directives: [input_month_range_component/* TuiInputMonthRangeComponent */.X, input_month_range_directive/* TuiInputMonthRangeDirective */.K, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_component/* TuiTextfieldComponent */.M],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputMonthRangeExample1;
})();
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-month-range/examples/2/index.ts






let TuiInputMonthRangeExample2 = /*#__PURE__*/(() => {
  class TuiInputMonthRangeExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(null)
      });
    }

  }

  TuiInputMonthRangeExample2.ɵfac = function TuiInputMonthRangeExample2_Factory(t) {
    return new (t || TuiInputMonthRangeExample2)();
  };

  TuiInputMonthRangeExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputMonthRangeExample2,
    selectors: [["tui-input-month-range-example-2"]],
    decls: 7,
    vars: 1,
    consts: [[1, "b-form", 3, "formGroup"], ["formControlName", "testValue", "tuiTextfieldSize", "s", 1, "tui-space_bottom-2"], ["formControlName", "testValue", "tuiTextfieldSize", "m", 1, "tui-space_vertical-4"], ["formControlName", "testValue"]],
    template: function TuiInputMonthRangeExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-month-range", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Choose a range of months ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input-month-range", 2);
        fesm2015_core/* ɵɵtext */._uU(4, " Choose a range of months ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-input-month-range", 3);
        fesm2015_core/* ɵɵtext */._uU(6, "Choose a range of months");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_month_range_component/* TuiInputMonthRangeComponent */.X, input_month_range_directive/* TuiInputMonthRangeDirective */.K, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_size_directive/* TuiTextfieldSizeDirective */.s],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputMonthRangeExample2;
})();
// EXTERNAL MODULE: ./projects/cdk/index.ts + 84 modules
var cdk = __webpack_require__(40287);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-month-range/examples/3/index.ts






let TuiInputMonthRangeExample3 = /*#__PURE__*/(() => {
  class TuiInputMonthRangeExample3 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(null)
      });

      this.disabledItemHandler = (item, context) => {
        return !!context && !!context.value && context.value instanceof cdk/* TuiMonthRange */.dtp && !!context.value.isSingleMonth && item.month < context.value.from.month + 2;
      };
    }

  }

  TuiInputMonthRangeExample3.ɵfac = function TuiInputMonthRangeExample3_Factory(t) {
    return new (t || TuiInputMonthRangeExample3)();
  };

  TuiInputMonthRangeExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputMonthRangeExample3,
    selectors: [["tui-input-month-range-example-3"]],
    decls: 6,
    vars: 2,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_524318922497344790$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_EXAMPLES_3_INDEX_TS_1 = goog.getMsg(" A sample with {$startTagCode}disabledItemHandler{$closeTagCode} when selecting a left value of range changes available right value: a range no more than one month\n", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_524318922497344790$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_EXAMPLES_3_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟7d001062311f184e8efdbff81e0be00c597c0496␟524318922497344790: A sample with ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:disabledItemHandler${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: when selecting a left value of range changes available right value: a range no more than one month
`;
      }

      return [i18n_0, [1, "b-form", 3, "formGroup"], ["formControlName", "testValue", 1, "tui-space_bottom-2", 3, "disabledItemHandler"]];
    },
    template: function TuiInputMonthRangeExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(1, 0);
        fesm2015_core/* ɵɵelement */._UZ(2, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "form", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-input-month-range", 2);
        fesm2015_core/* ɵɵtext */._uU(5, " Choose a range of months ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("disabledItemHandler", ctx.disabledItemHandler);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_month_range_component/* TuiInputMonthRangeComponent */.X, input_month_range_directive/* TuiInputMonthRangeDirective */.K, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputMonthRangeExample3;
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
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-month-range/input-month-range.component.ts



























function ExampleTuiInputMonthRangeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-notification", 4);
    fesm2015_core/* ɵɵtext */._uU(4, " If you need to set some attributes or listen to events on native ");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "code");
    fesm2015_core/* ɵɵtext */._uU(6, "input");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(7, " , you can put it inside with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "code");
    fesm2015_core/* ɵɵtext */._uU(9, "Textfield");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(10, " directive as shown below ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-input-month-range-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(13, "tui-input-month-range-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-input-month-range-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiInputMonthRangeComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-month-range", 12);
    fesm2015_core/* ɵɵtext */._uU(1, " Months ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("min", ctx_r3.min)("max", ctx_r3.max)("focusable", ctx_r3.focusable)("tuiTextfieldIconLeft", ctx_r3.iconLeft)("tuiTextfieldCleaner", ctx_r3.cleaner)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size)("tuiTextfieldCleaner", ctx_r3.cleaner)("readOnly", ctx_r3.readOnly)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("disabledItemHandler", ctx_r3.disabledItemHandler)("tuiHintContent", ctx_r3.hintContent)("tuiHintDirection", ctx_r3.hintDirection)("tuiHintAppearance", ctx_r3.hintAppearance);
  }
}

function ExampleTuiInputMonthRangeComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 13);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputMonthRangeComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 14);
    fesm2015_core/* ɵɵelement */._UZ(1, "div");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputMonthRangeComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiInputMonthRangeComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiInputMonthRangeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 7);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputMonthRangeComponent_ng_template_2_ng_template_1_Template, 2, 18, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputMonthRangeComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputMonthRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputMonthRangeComponent_ng_template_2_ng_template_4_Template, 3, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputMonthRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.disabledItemHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiInputMonthRangeComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputMonthRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputMonthRangeComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputMonthRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.max = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(7, "inherited-documentation");
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
  }
}

function ExampleTuiInputMonthRangeComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 17);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 18);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 19);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 20);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 21);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵtext */._uU(13, " Use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "code");
    fesm2015_core/* ɵɵtext */._uU(15, "TuiInputMonthComponent");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(16, " in template: ");
    fesm2015_core/* ɵɵelement */._UZ(17, "tui-doc-code", 22);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleForm);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiInputMonthRangeComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputMonthRangeComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleForm = __webpack_require__.e(/* import() */ 45722).then(__webpack_require__.t.bind(__webpack_require__, 45722, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 22580).then(__webpack_require__.t.bind(__webpack_require__, 22580, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 82082).then(__webpack_require__.t.bind(__webpack_require__, 82082, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 11176).then(__webpack_require__.t.bind(__webpack_require__, 11176, 17)),
        HTML: __webpack_require__.e(/* import() */ 57536).then(__webpack_require__.t.bind(__webpack_require__, 57536, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 46649).then(__webpack_require__.t.bind(__webpack_require__, 46649, 17)),
        HTML: __webpack_require__.e(/* import() */ 62394).then(__webpack_require__.t.bind(__webpack_require__, 62394, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 59990).then(__webpack_require__.t.bind(__webpack_require__, 59990, 17)),
        HTML: __webpack_require__.e(/* import() */ 5748).then(__webpack_require__.t.bind(__webpack_require__, 5748, 17))
      };
      this.minVariants = [cdk/* TUI_FIRST_DAY */.nNo, new cdk/* TuiMonth */.qld(2019, 2), new cdk/* TuiMonth */.qld(2007, 0)];
      this.maxVariants = [cdk/* TUI_LAST_DAY */.OyN, new cdk/* TuiMonth */.qld(2020, 2), new cdk/* TuiMonth */.qld(2023, 0)];
      this.min = this.minVariants[0];
      this.max = this.maxVariants[0];
      this.disabledItemHandlerVariants = [cdk/* ALWAYS_FALSE_HANDLER */.IyD, ({
        month
      }) => month % 3 === 0];
      this.disabledItemHandler = this.disabledItemHandlerVariants[0];
      this.cleaner = false;
      this.control = new fesm2015_forms/* FormControl */.NI(null, fesm2015_forms/* Validators.required */.kI.required);
    }

  }

  ExampleTuiInputMonthRangeComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputMonthRangeComponent_BaseFactory;
    return function ExampleTuiInputMonthRangeComponent_Factory(t) {
      return (ɵExampleTuiInputMonthRangeComponent_BaseFactory || (ɵExampleTuiInputMonthRangeComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputMonthRangeComponent)))(t || ExampleTuiInputMonthRangeComponent);
    };
  }();

  ExampleTuiInputMonthRangeComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputMonthRangeComponent,
    selectors: [["example-tui-input-month-range"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputMonthRangeComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7600412415333750041$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS__1 = goog.getMsg("Component to input a range of months");
        i18n_0 = MSG_EXTERNAL_7600412415333750041$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟2f97016068f46347a787d20f1d43451ccec5ed5d␟7600412415333750041:Component to input a range of months`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS__5 = goog.getMsg("sizes");
        i18n_4 = MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8131541999290053051$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS__7 = goog.getMsg("With a context usage in disabledItemHandler");
        i18n_6 = MSG_EXTERNAL_8131541999290053051$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟792a3526674c0e6247dd50b0d67e6f89d2580185␟8131541999290053051:With a context usage in disabledItemHandler`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS___9 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8655647082077231883$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS___11 = goog.getMsg("{$startTagDiv}A handler that gets a date and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", {
          "startTagDiv": "\uFFFD#1\uFFFD",
          "closeTagDiv": "\uFFFD/#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_8655647082077231883$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_228579238578588280$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS___13 = goog.getMsg(" Minimum date ");
        i18n_12 = MSG_EXTERNAL_228579238578588280$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟4154b59e6a74ee1968fd07ad38c2a5b5329c1a78␟228579238578588280: Minimum date `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2371503113949525542$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS___15 = goog.getMsg(" Maximum date ");
        i18n_14 = MSG_EXTERNAL_2371503113949525542$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟ce93c802f63dbda020cc57d47ed04f9f56fed31f␟2371503113949525542: Maximum date `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7892161855673473900$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS__17 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiInputMonthRangeModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_7892161855673473900$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟68f05b078a893528095914c11e82a34e214bdf59␟7892161855673473900: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputMonthRangeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS__19 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_18 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_MONTH_RANGE_INPUT_MONTH_RANGE_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_18 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_18);
      return [["header", "InputMonthRange", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], [1, "tui-space_bottom-4", "b-form"], ["id", "sizes", "heading", i18n_4, 3, "content"], ["id", "context", "heading", i18n_6, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMonth", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMonth", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formControl", "min", "max", "focusable", "tuiTextfieldIconLeft", "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "readOnly", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "disabledItemHandler", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance"], i18n_8, i18n_10, i18n_12, i18n_14, [1, "b-demo-steps"], i18n_16, ["filename", "myComponent.module.ts", 3, "code"], i18n_18, ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiInputMonthRangeComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputMonthRangeComponent_ng_template_1_Template, 16, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputMonthRangeComponent_ng_template_2_Template, 8, 8, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputMonthRangeComponent_ng_template_3_Template, 18, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, notification_component/* TuiNotificationComponent */.L, TuiInputMonthRangeExample1, TuiInputMonthRangeExample2, TuiInputMonthRangeExample3, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, input_month_range_component/* TuiInputMonthRangeComponent */.X, input_month_range_directive/* TuiInputMonthRangeDirective */.K, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, hint_options_directive/* TuiHintOptionsDirective */.b, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiInputMonthRangeComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-month-range/input-month-range.module.ts













let ExampleTuiInputMonthRangeModule = /*#__PURE__*/(() => {
  class ExampleTuiInputMonthRangeModule {}

  ExampleTuiInputMonthRangeModule.ɵfac = function ExampleTuiInputMonthRangeModule_Factory(t) {
    return new (t || ExampleTuiInputMonthRangeModule)();
  };

  ExampleTuiInputMonthRangeModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputMonthRangeModule
  });
  ExampleTuiInputMonthRangeModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, core/* TuiLinkModule */.jzK, core/* TuiButtonModule */.fNO, kit/* TuiInputMonthRangeModule */.qC6, core/* TuiTextfieldControllerModule */.cnw, core/* TuiHintModule */.goS, core/* TuiNotificationModule */.HiG, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputMonthRangeComponent))]]
  });
  return ExampleTuiInputMonthRangeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputMonthRangeModule, {
    declarations: [ExampleTuiInputMonthRangeComponent, TuiInputMonthRangeExample1, TuiInputMonthRangeExample2, TuiInputMonthRangeExample3],
    imports: [public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, core/* TuiLinkModule */.jzK, core/* TuiButtonModule */.fNO, kit/* TuiInputMonthRangeModule */.qC6, core/* TuiTextfieldControllerModule */.cnw, core/* TuiHintModule */.goS, core/* TuiNotificationModule */.HiG, router/* RouterModule */.Bz],
    exports: [ExampleTuiInputMonthRangeComponent]
  });
})();

/***/ })

}]);