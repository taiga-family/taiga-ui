"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[48339],{

/***/ 48339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputCountModule": () => (/* binding */ ExampleTuiInputCountModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/label/label.component.ts
var label_component = __webpack_require__(88135);
// EXTERNAL MODULE: ./projects/kit/components/input-count/input-count.component.ts
var input_count_component = __webpack_require__(65009);
// EXTERNAL MODULE: ./projects/kit/components/input-count/input-count.directive.ts
var input_count_directive = __webpack_require__(10383);
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-count/examples/1/index.ts








let TuiInputCountExample1 = /*#__PURE__*/(() => {
  class TuiInputCountExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(10, fesm2015_forms/* Validators.required */.kI.required),
        testValue2: new fesm2015_forms/* FormControl */.NI(10, fesm2015_forms/* Validators.required */.kI.required),
        testValue3: new fesm2015_forms/* FormControl */.NI(-10, fesm2015_forms/* Validators.required */.kI.required)
      });
    }

  }

  TuiInputCountExample1.ɵfac = function TuiInputCountExample1_Factory(t) {
    return new (t || TuiInputCountExample1)();
  };

  TuiInputCountExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputCountExample1,
    selectors: [["tui-input-count-example-1"]],
    decls: 9,
    vars: 8,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4517713429238727398$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_1_INDEX_TS_1 = goog.getMsg("Step is 1 by default");
        i18n_0 = MSG_EXTERNAL_4517713429238727398$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟b159ec7c42ae077a8407364cc726a54b1adb6b12␟4517713429238727398:Step is 1 by default`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2290251155545250605$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_1_INDEX_TS_3 = goog.getMsg("Step is 100");
        i18n_2 = MSG_EXTERNAL_2290251155545250605$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_1_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟c81f9040e56ff2939bfcc8f7303ea190fc62a518␟2290251155545250605:Step is 100`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2074374908429047288$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_1_INDEX_TS_5 = goog.getMsg("Also works with negative values");
        i18n_4 = MSG_EXTERNAL_2074374908429047288$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_1_INDEX_TS_5;
      } else {
        i18n_4 = $localize`:␟b4300d745195687ae85fb9b2cbcbdb97af131830␟2074374908429047288:Also works with negative values`;
      }

      return [[1, "b-form", 3, "formGroup"], ["tuiLabel", i18n_0], ["formControlName", "testValue1", 3, "min", "max"], ["tuiTextfield", "", "placeholder", "1.. 2.. 3.."], ["tuiLabel", i18n_2, 1, "tui-space_top-4"], ["formControlName", "testValue2", 3, "tuiTextfieldLabelOutside", "step"], ["tuiLabel", i18n_4, 1, "tui-space_top-4"], ["formControlName", "testValue3", 3, "tuiTextfieldLabelOutside", "min", "max"]];
    },
    template: function TuiInputCountExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "label", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input-count", 2);
        fesm2015_core/* ɵɵtext */._uU(3, " Count something ");
        fesm2015_core/* ɵɵelement */._UZ(4, "input", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "label", 4);
        fesm2015_core/* ɵɵelement */._UZ(6, "tui-input-count", 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "label", 6);
        fesm2015_core/* ɵɵelement */._UZ(8, "tui-input-count", 7);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("min", 1)("max", 200);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("step", 100);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true)("min", -100)("max", 100);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, label_component/* TuiLabelComponent */.A, input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_component/* TuiTextfieldComponent */.M, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputCountExample1;
})();
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-count/examples/2/index.ts








let TuiInputCountExample2 = /*#__PURE__*/(() => {
  class TuiInputCountExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(10, fesm2015_forms/* Validators.required */.kI.required),
        testValue2: new fesm2015_forms/* FormControl */.NI(10, fesm2015_forms/* Validators.required */.kI.required)
      });
    }

  }

  TuiInputCountExample2.ɵfac = function TuiInputCountExample2_Factory(t) {
    return new (t || TuiInputCountExample2)();
  };

  TuiInputCountExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputCountExample2,
    selectors: [["tui-input-count-example-2"]],
    decls: 5,
    vars: 6,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4517713429238727398$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_2_INDEX_TS_1 = goog.getMsg("Step is 1 by default");
        i18n_0 = MSG_EXTERNAL_4517713429238727398$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_2_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟b159ec7c42ae077a8407364cc726a54b1adb6b12␟4517713429238727398:Step is 1 by default`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2290251155545250605$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_2_INDEX_TS_3 = goog.getMsg("Step is 100");
        i18n_2 = MSG_EXTERNAL_2290251155545250605$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_2_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟c81f9040e56ff2939bfcc8f7303ea190fc62a518␟2290251155545250605:Step is 100`;
      }

      return [[1, "b-form", 3, "formGroup"], ["tuiLabel", i18n_0], ["formControlName", "testValue1", "tuiTextfieldSize", "m", 3, "max", "tuiTextfieldLabelOutside"], ["tuiLabel", i18n_2, 1, "tui-space_top-4"], ["formControlName", "testValue2", "tuiTextfieldSize", "m", 3, "step", "max", "tuiTextfieldLabelOutside"]];
    },
    template: function TuiInputCountExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "label", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-input-count", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "label", 3);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-input-count", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("max", 999999)("tuiTextfieldLabelOutside", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("step", 100)("max", 999999)("tuiTextfieldLabelOutside", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, label_component/* TuiLabelComponent */.A, input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputCountExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-count/examples/3/index.ts









let TuiInputCountExample3 = /*#__PURE__*/(() => {
  class TuiInputCountExample3 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(10, fesm2015_forms/* Validators.required */.kI.required),
        testValue2: new fesm2015_forms/* FormControl */.NI(10, fesm2015_forms/* Validators.required */.kI.required)
      });
    }

  }

  TuiInputCountExample3.ɵfac = function TuiInputCountExample3_Factory(t) {
    return new (t || TuiInputCountExample3)();
  };

  TuiInputCountExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputCountExample3,
    selectors: [["tui-input-count-example-3"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([(0,kit.tuiInputCountOptionsProvider)({
      icons: {
        up: `tuiIconChevronUp`,
        down: `tuiIconChevronDown`
      },
      appearance: `secondary`,
      step: 10,
      min: 10,
      max: 100
    })])],
    decls: 5,
    vars: 3,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5758694726409722369$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_3_INDEX_TS_1 = goog.getMsg("With custom options");
        i18n_0 = MSG_EXTERNAL_5758694726409722369$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_3_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟ca426ccdbb6cc86ab33b1135e42c32e2786d4700␟5758694726409722369:With custom options`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2713636921764569690$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_3_INDEX_TS_3 = goog.getMsg("With custom options and medium size");
        i18n_2 = MSG_EXTERNAL_2713636921764569690$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_EXAMPLES_3_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟bf0cf1e190f62dac6e22474c00ebd6f99d2889b0␟2713636921764569690:With custom options and medium size`;
      }

      return [[1, "b-form", 3, "formGroup"], ["tuiLabel", i18n_0], ["formControlName", "testValue1", 3, "tuiTextfieldLabelOutside"], ["tuiLabel", i18n_2, 1, "tui-space_top-4"], ["formControlName", "testValue2", "tuiTextfieldSize", "m", 3, "tuiTextfieldLabelOutside"]];
    },
    template: function TuiInputCountExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "label", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-input-count", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "label", 3);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-input-count", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, label_component/* TuiLabelComponent */.A, input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiInputCountExample3;
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
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-count/input-count.component.ts


























function ExampleTuiInputCountComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 2);
    fesm2015_core/* ɵɵi18n */.SDv(4, 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
    fesm2015_core/* ɵɵi18n */.SDv(6, 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "a", 7);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-notification", 9);
    fesm2015_core/* ɵɵtext */._uU(12, " If you need to set some attributes or listen to events on native ");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "code");
    fesm2015_core/* ɵɵtext */._uU(14, "input");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(15, " , you can put it inside with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "code");
    fesm2015_core/* ɵɵtext */._uU(17, "Textfield");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(18, " directive as shown below ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(19, "tui-input-count-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelement */._UZ(21, "tui-input-count-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(22, "tui-doc-example", 11);
    fesm2015_core/* ɵɵelement */._UZ(23, "tui-input-count-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiInputCountComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-count", 20);
    fesm2015_core/* ɵɵtext */._uU(1, " Number of accounts ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("focusable", ctx_r3.focusable)("min", ctx_r3.min)("max", ctx_r3.max)("hideButtons", ctx_r3.hideButtons)("step", ctx_r3.step)("prefix", ctx_r3.prefix)("postfix", ctx_r3.postfix)("readOnly", ctx_r3.readOnly)("tuiTextfieldIconLeft", ctx_r3.iconLeft)("tuiTextfieldLabelOutside", ctx_r3.labelOutside)("tuiTextfieldSize", ctx_r3.size);
  }
}

function ExampleTuiInputCountComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 21);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputCountComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

function ExampleTuiInputCountComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 23);
  }
}

function ExampleTuiInputCountComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 24);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputCountComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 25);
  }
}

function ExampleTuiInputCountComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 26);
  }
}

function ExampleTuiInputCountComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 27);
  }
}

function ExampleTuiInputCountComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 12);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputCountComponent_ng_template_2_ng_template_1_Template, 2, 12, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputCountComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCountComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputCountComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCountComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.hideButtons = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiInputCountComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCountComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputCountComponent_ng_template_2_ng_template_6_Template, 2, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCountComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiInputCountComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCountComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.prefix = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiInputCountComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCountComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.postfix = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiInputCountComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputCountComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.step = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(10, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.hideButtons);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.min);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.prefix);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.postfix);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.stepValues)("documentationPropertyValue", ctx_r1.step);
  }
}

function ExampleTuiInputCountComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 28);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 29);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 30);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 31);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 32);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18n */.SDv(14, 33);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-doc-code", 34);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(18, 35);
    fesm2015_core/* ɵɵelement */._UZ(19, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(20, "tui-doc-code", 30);
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

let ExampleTuiInputCountComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputCountComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleForm = __webpack_require__.e(/* import() */ 45884).then(__webpack_require__.t.bind(__webpack_require__, 45884, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 566).then(__webpack_require__.t.bind(__webpack_require__, 566, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 14847).then(__webpack_require__.t.bind(__webpack_require__, 14847, 17));
      this.exampleOptions = __webpack_require__.e(/* import() */ 45252).then(__webpack_require__.t.bind(__webpack_require__, 45252, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 63227).then(__webpack_require__.t.bind(__webpack_require__, 63227, 17)),
        HTML: __webpack_require__.e(/* import() */ 84798).then(__webpack_require__.t.bind(__webpack_require__, 84798, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 49084).then(__webpack_require__.t.bind(__webpack_require__, 49084, 17)),
        HTML: __webpack_require__.e(/* import() */ 14108).then(__webpack_require__.t.bind(__webpack_require__, 14108, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 17486).then(__webpack_require__.t.bind(__webpack_require__, 17486, 17)),
        HTML: __webpack_require__.e(/* import() */ 6701).then(__webpack_require__.t.bind(__webpack_require__, 6701, 17))
      };
      this.min = 0;
      this.max = 999;
      this.step = 1;
      this.stepValues = [1, 2, 3, 4, 5];
      this.sizeVariants = [`m`, `l`];
      this.size = this.sizeVariants[1];
      this.hideButtons = false;
      this.control = new fesm2015_forms/* FormControl */.NI();
      this.prefix = ``;
      this.postfix = ``;
    }

  }

  ExampleTuiInputCountComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputCountComponent_BaseFactory;
    return function ExampleTuiInputCountComponent_Factory(t) {
      return (ɵExampleTuiInputCountComponent_BaseFactory || (ɵExampleTuiInputCountComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputCountComponent)))(t || ExampleTuiInputCountComponent);
    };
  }();

  ExampleTuiInputCountComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputCountComponent,
    selectors: [["example-tui-input-count"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputCountComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7116640048935486801$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}InputCount{$closeTagCode} is a good choice to input integer positive numbers under 999 ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_7116640048935486801$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟b9669bf4d7cd2041365aecab26edefeae395b627␟7116640048935486801:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputCount${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: is a good choice to input integer positive numbers under 999 `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6434254909743697518$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__3 = goog.getMsg(" It allows limit value with min and max and handles such cases ");
        i18n_2 = MSG_EXTERNAL_6434254909743697518$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟93ac744bf41984c8f980cafd646b71db909b71a3␟6434254909743697518: It allows limit value with min and max and handles such cases `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3317726340623526124$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__5 = goog.getMsg("It does not indicate validation status");
        i18n_4 = MSG_EXTERNAL_3317726340623526124$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟756f0b4a649d274f59cdcd92ecebd22121a58de5␟3317726340623526124:It does not indicate validation status`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6882510303030671599$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__7 = goog.getMsg(" Number formatting can be customized by using {$startLink} TUI_NUMBER_FORMAT {$closeLink}", {
          "startLink": "\uFFFD#9\uFFFD",
          "closeLink": "\uFFFD/#9\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_6882510303030671599$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟0e557432cc61605fc75bbddcf8b886ac4208be05␟6882510303030671599: Number formatting can be customized by using ${"\uFFFD#9\uFFFD"}:START_LINK: TUI_NUMBER_FORMAT ${"\uFFFD/#9\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__9 = goog.getMsg("Basic");
        i18n_8 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7861254305604213764$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__11 = goog.getMsg("Size M");
        i18n_10 = MSG_EXTERNAL_7861254305604213764$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟0d72ce2c862fae2cccbe564228d17758c058bc20␟7861254305604213764:Size M`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8432562579042371182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__13 = goog.getMsg("Options");
        i18n_12 = MSG_EXTERNAL_8432562579042371182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___15 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4295858242233154356$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___17 = goog.getMsg(" Hide icon buttons ");
        i18n_16 = MSG_EXTERNAL_4295858242233154356$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟ea14b95b26f0ac7cd0db32a42bd60e8ef5eb7cdc␟4295858242233154356: Hide icon buttons `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1090761179854672750$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___19 = goog.getMsg(" Minimum value ");
        i18n_18 = MSG_EXTERNAL_1090761179854672750$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟41d4dbb03bf5617301e95d4fbce6b0e39ca47f01␟1090761179854672750: Minimum value `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4080008404588596650$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___21 = goog.getMsg(" Maximum value ( {$startTagCode}Infinity{$closeTagCode} by default) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_4080008404588596650$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟ff319fe89f5215270e87674b1c4bc8696341e90a␟4080008404588596650: Maximum value ( ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:Infinity${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: by default) `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_889438292388771446$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___23 = goog.getMsg(" A prefix symbol, like currency ");
        i18n_22 = MSG_EXTERNAL_889438292388771446$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟658adf15e902084053811153efcee4ab1a098c01␟889438292388771446: A prefix symbol, like currency `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7436553299672149610$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___25 = goog.getMsg(" Some string after value ");
        i18n_24 = MSG_EXTERNAL_7436553299672149610$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟f5cf6d36f821cf714fb502d79cd966b650bfa4f7␟7436553299672149610: Some string after value `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5700630542385259856$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___27 = goog.getMsg(" Step for buttons ");
        i18n_26 = MSG_EXTERNAL_5700630542385259856$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟95f52be4795cdd2b39ffd9707f83e9721e0e17e9␟5700630542385259856: Step for buttons `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5253084050799099966$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__29 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiInputCountModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_28 = MSG_EXTERNAL_5253084050799099966$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__29;
      } else {
        i18n_28 = $localize`:␟4033559e8c5b3ecd794da4fd8d5d21edd63b93eb␟5253084050799099966: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputCountModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__31 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_30 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__31;
      } else {
        i18n_30 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_30 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_30);
      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__33 = goog.getMsg("Add to the template:");
        i18n_32 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__33;
      } else {
        i18n_32 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      let i18n_34;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6054484045241435137$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__35 = goog.getMsg(" Optionally use the {$startTagCode}TUI_INPUT_COUNT_OPTIONS{$closeTagCode} injection token to override the default options for the component. ", {
          "startTagCode": "\uFFFD#19\uFFFD",
          "closeTagCode": "\uFFFD/#19\uFFFD"
        });
        i18n_34 = MSG_EXTERNAL_6054484045241435137$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_COUNT_INPUT_COUNT_COMPONENT_TS__35;
      } else {
        i18n_34 = $localize`:␟5159db99b1a8aa0ecf3deb24f56aaf37ea98f7b0␟6054484045241435137: Optionally use the ${"\uFFFD#19\uFFFD"}:START_TAG_CODE:TUI_INPUT_COUNT_OPTIONS${"\uFFFD/#19\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;
      }

      return [["header", "InputCount", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_0, i18n_2, i18n_4, i18n_6, ["tuiLink", "", "routerLink", "/utils/tokens", "fragment", "number-format"], ["id", "base", "heading", i18n_8, 3, "content"], [1, "tui-space_bottom-4", "b-form"], ["id", "medium-large", "heading", i18n_10, 3, "content"], ["id", "options", "heading", i18n_12, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hideButtons", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "prefix", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "postfix", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "step", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formControl", "focusable", "min", "max", "hideButtons", "step", "prefix", "postfix", "readOnly", "tuiTextfieldIconLeft", "tuiTextfieldLabelOutside", "tuiTextfieldSize"], i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, [1, "b-demo-steps"], i18n_28, ["filename", "myComponent.module.ts", 3, "code"], i18n_30, ["filename", "myComponent.component.ts", 3, "code"], i18n_32, ["filename", "myComponent.template.html", 3, "code"], i18n_34];
    },
    template: function ExampleTuiInputCountComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputCountComponent_ng_template_1_Template, 24, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputCountComponent_ng_template_2_Template, 11, 9, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputCountComponent_ng_template_3_Template, 21, 4, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, notification_component/* TuiNotificationComponent */.L, TuiInputCountExample1, TuiInputCountExample2, TuiInputCountExample3, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiInputCountComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-count/input-count.module.ts













let ExampleTuiInputCountModule = /*#__PURE__*/(() => {
  class ExampleTuiInputCountModule {}

  ExampleTuiInputCountModule.ɵfac = function ExampleTuiInputCountModule_Factory(t) {
    return new (t || ExampleTuiInputCountModule)();
  };

  ExampleTuiInputCountModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputCountModule
  });
  ExampleTuiInputCountModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiInputCountModule, core.TuiLabelModule, core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, core.TuiTextfieldControllerModule, core.TuiNotificationModule, inherited_documentation_module/* InheritedDocumentationModule */.f, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputCountComponent))]]
  });
  return ExampleTuiInputCountModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputCountModule, {
    declarations: [ExampleTuiInputCountComponent, TuiInputCountExample1, TuiInputCountExample2, TuiInputCountExample3],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, kit.TuiInputCountModule, core.TuiLabelModule, core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, core.TuiTextfieldControllerModule, core.TuiNotificationModule, inherited_documentation_module/* InheritedDocumentationModule */.f, router/* RouterModule */.Bz],
    exports: [ExampleTuiInputCountComponent]
  });
})();

/***/ })

}]);