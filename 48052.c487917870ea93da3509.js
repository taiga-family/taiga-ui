"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[48052],{

/***/ 48052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiTextAreaModule": () => (/* binding */ ExampleTuiTextAreaModule)
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
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/text-area/text-area.component.ts
var text_area_component = __webpack_require__(40329);
// EXTERNAL MODULE: ./projects/kit/components/text-area/text-area.directive.ts
var text_area_directive = __webpack_require__(78665);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/text-area/examples/1/index.ts





let TuiTextAreaExample1 = /*#__PURE__*/(() => {
  class TuiTextAreaExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(`A field`, fesm2015_forms/* Validators.required */.kI.required),
        testValue2: new fesm2015_forms/* FormControl */.NI(`This one can be expanded`, fesm2015_forms/* Validators.required */.kI.required)
      });
    }

  }

  TuiTextAreaExample1.ɵfac = function TuiTextAreaExample1_Factory(t) {
    return new (t || TuiTextAreaExample1)();
  };

  TuiTextAreaExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTextAreaExample1,
    selectors: [["tui-text-area-example-1"]],
    decls: 10,
    vars: 2,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2215147492012374849$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_EXAMPLES_1_INDEX_TS_1 = goog.getMsg(" It has a fixed size and content scroll by default. But there is also an expandable mode with height increase from content inside\n");
        i18n_0 = MSG_EXTERNAL_2215147492012374849$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟9349a6be5a6fcea2e58cdeff56fc9429cfebc9a4␟2215147492012374849: It has a fixed size and content scroll by default. But there is also an expandable mode with height increase from content inside
`;
      }

      return [i18n_0, [1, "container", 3, "formGroup"], [1, "tui-row"], [1, "tui-col_md-6"], ["formControlName", "testValue1"], ["formControlName", "testValue2", 3, "expandable"]];
    },
    template: function TuiTextAreaExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18n */.SDv(1, 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "form", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "div", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-text-area", 4);
        fesm2015_core/* ɵɵtext */._uU(6, "Type a text");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "div", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-text-area", 5);
        fesm2015_core/* ɵɵtext */._uU(9, " Type a text ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵproperty */.Q6J("expandable", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, text_area_component/* TuiTextAreaComponent */.Jl, text_area_directive/* TuiTextAreaDirective */.e, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: ["[_nghost-%COMP%]{display:block}.container[_ngcontent-%COMP%]{margin-bottom:1.25rem;max-width:43.75rem}"],
    changeDetection: 0
  });
  return TuiTextAreaExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/text-area/examples/2/index.ts





let TuiTextAreaExample2 = /*#__PURE__*/(() => {
  class TuiTextAreaExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(`A field`, fesm2015_forms/* Validators.required */.kI.required)
      });
    }

  }

  TuiTextAreaExample2.ɵfac = function TuiTextAreaExample2_Factory(t) {
    return new (t || TuiTextAreaExample2)();
  };

  TuiTextAreaExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTextAreaExample2,
    selectors: [["tui-text-area-example-2"]],
    decls: 11,
    vars: 4,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2874902685291106196$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_EXAMPLES_2_INDEX_TS_1 = goog.getMsg("You can set a custom min-height for component");
        i18n_0 = MSG_EXTERNAL_2874902685291106196$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_EXAMPLES_2_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟24c99562aed3fa3a2e251380380be625ceeaf326␟2874902685291106196:You can set a custom min-height for component`;
      }

      return [i18n_0, [3, "formGroup"], [1, "tui-row"], [1, "tui-col_md-6"], ["formControlName", "testValue1", 1, "tui-space_bottom-4", "field-large"], ["formControlName", "testValue1", 1, "tui-space_bottom-4", "field-small", 3, "expandable"], ["formControlName", "testValue1", 1, "field-medium", 3, "expandable", "maxLength"]];
    },
    template: function TuiTextAreaExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18n */.SDv(1, 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "form", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "div", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-text-area", 4);
        fesm2015_core/* ɵɵtext */._uU(6, " Type a text ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-text-area", 5);
        fesm2015_core/* ɵɵtext */._uU(8, " Type a text ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-text-area", 6);
        fesm2015_core/* ɵɵtext */._uU(10, " Type a text ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("expandable", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("expandable", true)("maxLength", 30);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, text_area_component/* TuiTextAreaComponent */.Jl, text_area_directive/* TuiTextAreaDirective */.e, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".field-large[_ngcontent-%COMP%]{min-height:9.375rem}.field-small[_ngcontent-%COMP%]{min-height:3.5rem}.field-medium[_ngcontent-%COMP%]{min-height:5rem}"],
    changeDetection: 0
  });
  return TuiTextAreaExample2;
})();
// EXTERNAL MODULE: ./projects/core/components/label/label.component.ts
var label_component = __webpack_require__(88135);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/text-area/examples/3/index.ts







let TuiTextAreaExample3 = /*#__PURE__*/(() => {
  class TuiTextAreaExample3 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(`A field`, fesm2015_forms/* Validators.required */.kI.required)
      });
    }

  }

  TuiTextAreaExample3.ɵfac = function TuiTextAreaExample3_Factory(t) {
    return new (t || TuiTextAreaExample3)();
  };

  TuiTextAreaExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTextAreaExample3,
    selectors: [["tui-text-area-example-3"]],
    decls: 6,
    vars: 2,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3036146691798610079$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_EXAMPLES_3_INDEX_TS_1 = goog.getMsg(" You can use label outside mode with {$startTagCode}tuiLabel{$closeTagCode}", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_3036146691798610079$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_EXAMPLES_3_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟d79d1199bdb06711520d14b4a2ccc7357a9b44c2␟3036146691798610079: You can use label outside mode with ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiLabel${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      return [i18n_0, [1, "tui-row", 3, "formGroup"], ["tuiLabel", "Type a text", 1, "tui-col_md-6"], ["formControlName", "testValue1", 1, "tui-space_bottom-4", 3, "tuiTextfieldLabelOutside"]];
    },
    template: function TuiTextAreaExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(1, 0);
        fesm2015_core/* ɵɵelement */._UZ(2, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "form", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "label", 2);
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-text-area", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, label_component/* TuiLabelComponent */.A, text_area_component/* TuiTextAreaComponent */.Jl, text_area_directive/* TuiTextAreaDirective */.e, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x],
    styles: [".field[_ngcontent-%COMP%]{min-height:3.5rem}"],
    changeDetection: 0
  });
  return TuiTextAreaExample3;
})();
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/core/components/error/error.component.ts
var error_component = __webpack_require__(36951);
// EXTERNAL MODULE: ./projects/kit/pipes/field-error/field-error-pipe.ts
var field_error_pipe = __webpack_require__(7114);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/text-area/examples/4/index.ts













const _c2 = function () {
  return [];
};

const LONG_TEXT_EXAMPLE = `
In Java: everything is an object.
In Clojure: everything is a list.
In JavaScript: everything is a terrible mistake.
`;
function maxLengthMessageFactory(context) {
  return `Maximum length — ${context.requiredLength}`;
}
let TuiTextAreaExample4 = /*#__PURE__*/(() => {
  class TuiTextAreaExample4 {
    constructor() {
      this.maxLength = 97;
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(LONG_TEXT_EXAMPLE.trim(), [fesm2015_forms/* Validators.required */.kI.required, fesm2015_forms/* Validators.maxLength */.kI.maxLength(this.maxLength)])
      });
      this.testForm.markAllAsTouched();
    }

  }

  TuiTextAreaExample4.ɵfac = function TuiTextAreaExample4_Factory(t) {
    return new (t || TuiTextAreaExample4)();
  };

  TuiTextAreaExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTextAreaExample4,
    selectors: [["tui-text-area-example-4"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: kit.TUI_VALIDATION_ERRORS,
      useValue: {
        required: `Enter this!`,
        maxlength: maxLengthMessageFactory
      }
    }])],
    decls: 14,
    vars: 10,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3377972609534968427$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_EXAMPLES_4_INDEX_TS_1 = goog.getMsg(" To highlight extra characters: {$startUnorderedList}{$startListItem} use {$startTagCode}maxLength{$closeTagCode} input {$closeListItem}{$startListItem_1} (Optional) Dont forget to set form validator (for example, {$startTagCode}Validators.maxLength{$closeTagCode} ) if you want to make field invalid on exceeding the characters limit {$closeListItem}{$closeUnorderedList}", {
          "startUnorderedList": "\uFFFD#2\uFFFD",
          "startListItem": "\uFFFD#3\uFFFD",
          "startTagCode": "[\uFFFD#4\uFFFD|\uFFFD#6\uFFFD]",
          "closeTagCode": "[\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]",
          "closeListItem": "[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]",
          "startListItem_1": "\uFFFD#5\uFFFD",
          "closeUnorderedList": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_3377972609534968427$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_EXAMPLES_4_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟7ba3202ceb89fabf22fb937035946029eba5ced2␟3377972609534968427: To highlight extra characters: ${"\uFFFD#2\uFFFD"}:START_UNORDERED_LIST:${"\uFFFD#3\uFFFD"}:START_LIST_ITEM: use ${"[\uFFFD#4\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:maxLength${"[\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: input ${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_LIST_ITEM:${"\uFFFD#5\uFFFD"}:START_LIST_ITEM_1: (Optional) Dont forget to set form validator (for example, ${"[\uFFFD#4\uFFFD|\uFFFD#6\uFFFD]"}:START_TAG_CODE:Validators.maxLength${"[\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_CODE: ) if you want to make field invalid on exceeding the characters limit ${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_LIST_ITEM:${"\uFFFD/#2\uFFFD"}:CLOSE_UNORDERED_LIST:`;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      return [[1, "description"], i18n_0, [1, "steps"], [1, "steps_optional"], [1, "form", "tui-row", 3, "formGroup"], ["tuiLabel", "Write a wise thought", 1, "tui-col_md-6"], ["formControlName", "testValue1", "tuiHintContent", "it's just a joke", 3, "expandable", "maxLength", "tuiTextfieldLabelOutside"], ["formControlName", "testValue1", 3, "error"]];
    },
    template: function TuiTextAreaExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵi18nStart */.tHW(1, 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "ul", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "li");
        fesm2015_core/* ɵɵelement */._UZ(4, "code");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "li", 3);
        fesm2015_core/* ɵɵelement */._UZ(6, "code");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "form", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "label", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-text-area", 6);
        fesm2015_core/* ɵɵtext */._uU(10, " Type it ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(11, "tui-error", 7);
        fesm2015_core/* ɵɵpipe */.ALo(12, "async");
        fesm2015_core/* ɵɵpipe */.ALo(13, "tuiFieldError");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(7);
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("expandable", true)("maxLength", ctx.maxLength)("tuiTextfieldLabelOutside", true);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("error", fesm2015_core/* ɵɵpipeBind1 */.lcZ(12, 5, fesm2015_core/* ɵɵpipeBind1 */.lcZ(13, 7, fesm2015_core/* ɵɵpureFunction0 */.DdM(9, _c2))));
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, label_component/* TuiLabelComponent */.A, text_area_component/* TuiTextAreaComponent */.Jl, text_area_directive/* TuiTextAreaDirective */.e, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, hint_options_directive/* TuiHintOptionsDirective */.bZ, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, error_component/* TuiErrorComponent */.v],
    pipes: [common/* AsyncPipe */.Ov, field_error_pipe/* TuiFieldErrorPipe */.A],
    styles: [".description[_ngcontent-%COMP%]{margin-bottom:2rem}.steps[_ngcontent-%COMP%]{list-style-type:disc;padding-left:.9375rem;margin:1rem 0}.steps_optional[_ngcontent-%COMP%]{list-style-type:circle}tui-root._mobile[_nghost-%COMP%]   .form[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .form[_ngcontent-%COMP%]{width:100%}"],
    changeDetection: 0
  });
  return TuiTextAreaExample4;
})();
// EXTERNAL MODULE: ./projects/core/components/primitive-textfield/textfield/textfield.component.ts
var textfield_component = __webpack_require__(91030);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/text-area/examples/5/index.ts





let TuiTextAreaExample5 = /*#__PURE__*/(() => {
  class TuiTextAreaExample5 {
    constructor() {
      this.value = ``;
    }

  }

  TuiTextAreaExample5.ɵfac = function TuiTextAreaExample5_Factory(t) {
    return new (t || TuiTextAreaExample5)();
  };

  TuiTextAreaExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTextAreaExample5,
    selectors: [["tui-text-area-example-5"]],
    decls: 3,
    vars: 1,
    consts: [[1, "b-form", 3, "ngModel", "ngModelChange"], ["tuiTextfield", "", "maxlength", "97", "placeholder", "Write a few words about yourself"]],
    template: function TuiTextAreaExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-text-area", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTextAreaExample5_Template_tui_text_area_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Bio ");
        fesm2015_core/* ɵɵelement */._UZ(2, "textarea", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.value);
      }
    },
    directives: [text_area_component/* TuiTextAreaComponent */.Jl, text_area_directive/* TuiTextAreaDirective */.e, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, textfield_component/* TuiTextfieldComponent */.M],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTextAreaExample5;
})();
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/text-area/examples/6/index.ts







let TuiTextAreaExample6 = /*#__PURE__*/(() => {
  class TuiTextAreaExample6 {
    constructor() {
      this.value = `مونتى پايثون و ساعات معروفين انهم ذى پايثونز كانو مجموعة كوميديا سرياليه من بريطانيا`;
    }

  }

  TuiTextAreaExample6.ɵfac = function TuiTextAreaExample6_Factory(t) {
    return new (t || TuiTextAreaExample6)();
  };

  TuiTextAreaExample6.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTextAreaExample6,
    selectors: [["tui-text-area-example-6"]],
    decls: 3,
    vars: 3,
    consts: [["tuiHintContent", "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0634\u062E\u0635\u064A\u0647", "tuiHintDirection", "bottom-right", 1, "input", 3, "maxLength", "tuiTextfieldCleaner", "ngModel", "ngModelChange"], ["tuiTextfield", ""]],
    template: function TuiTextAreaExample6_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-text-area", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiTextAreaExample6_Template_tui_text_area_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(1, " \u0645\u0648\u0646\u062A\u0649 \u0628\u0627\u064A\u062B\u0648\u0646 ");
        fesm2015_core/* ɵɵelement */._UZ(2, "textarea", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("maxLength", 100)("tuiTextfieldCleaner", true)("ngModel", ctx.value);
      }
    },
    directives: [text_area_component/* TuiTextAreaComponent */.Jl, text_area_directive/* TuiTextAreaDirective */.e, hint_options_directive/* TuiHintOptionsDirective */.bZ, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, textfield_component/* TuiTextfieldComponent */.M],
    styles: [".input[_ngcontent-%COMP%]{width:20rem;direction:rtl;text-align:right}"],
    changeDetection: 0
  });
  return TuiTextAreaExample6;
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
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts
var inherited_documentation_component = __webpack_require__(54218);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/text-area/text-area.component.ts





























function ExampleTuiTextAreaComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-text-area-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-text-area-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-text-area-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-text-area-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-notification", 8);
    fesm2015_core/* ɵɵtext */._uU(12, " If you need to set some attributes or listen to events on native ");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "code");
    fesm2015_core/* ɵɵtext */._uU(14, "textarea");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(15, " , you can put it inside with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "code");
    fesm2015_core/* ɵɵtext */._uU(17, "Textfield");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(18, " directive as shown below ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(19, "tui-text-area-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(21, "tui-text-area-example-6");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example6);
  }
}

function ExampleTuiTextAreaComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiTextAreaComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 17);
  }
}

function ExampleTuiTextAreaComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 18);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiTextAreaComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 19);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiTextAreaComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-text-area", 10);
    fesm2015_core/* ɵɵtext */._uU(2, " Textfield for multiline input. It can grow with its content. ");
    fesm2015_core/* ɵɵelement */._UZ(3, "textarea", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiTextAreaComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTextAreaComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiTextAreaComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTextAreaComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.expandable = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiTextAreaComponent_ng_template_2_ng_template_7_Template, 2, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTextAreaComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.maxLength = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiTextAreaComponent_ng_template_2_ng_template_8_Template, 2, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTextAreaComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.rows = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r1.control)("focusable", ctx_r1.focusable)("tuiTextfieldCleaner", ctx_r1.cleaner)("tuiTextfieldLabelOutside", ctx_r1.labelOutside)("tuiTextfieldSize", ctx_r1.size)("maxLength", ctx_r1.maxLength)("expandable", ctx_r1.expandable)("pseudoInvalid", ctx_r1.pseudoInvalid)("pseudoFocus", ctx_r1.pseudoFocused)("pseudoHover", ctx_r1.pseudoHovered)("readOnly", ctx_r1.readOnly)("rows", ctx_r1.rows)("tuiHintContent", ctx_r1.hintContent)("tuiHintDirection", ctx_r1.hintDirection)("tuiHintAppearance", ctx_r1.hintAppearance);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.expandable);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxLengthVariants)("documentationPropertyValue", ctx_r1.maxLength);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.rowsVariants)("documentationPropertyValue", ctx_r1.rows);
  }
}

function ExampleTuiTextAreaComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 20);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 21);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 22);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 23);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18n */.SDv(14, 25);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-doc-code", 26);
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
  }
}

let ExampleTuiTextAreaComponent = /*#__PURE__*/(() => {
  class ExampleTuiTextAreaComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 73510).then(__webpack_require__.t.bind(__webpack_require__, 73510, 17)),
        HTML: __webpack_require__.e(/* import() */ 32737).then(__webpack_require__.t.bind(__webpack_require__, 32737, 17)),
        LESS: __webpack_require__.e(/* import() */ 5973).then(__webpack_require__.t.bind(__webpack_require__, 5973, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 28686).then(__webpack_require__.t.bind(__webpack_require__, 28686, 17)),
        HTML: __webpack_require__.e(/* import() */ 55487).then(__webpack_require__.t.bind(__webpack_require__, 55487, 17)),
        LESS: __webpack_require__.e(/* import() */ 20554).then(__webpack_require__.t.bind(__webpack_require__, 20554, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 152).then(__webpack_require__.t.bind(__webpack_require__, 152, 17)),
        HTML: __webpack_require__.e(/* import() */ 64136).then(__webpack_require__.t.bind(__webpack_require__, 64136, 17)),
        LESS: __webpack_require__.e(/* import() */ 70276).then(__webpack_require__.t.bind(__webpack_require__, 70276, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 88112).then(__webpack_require__.t.bind(__webpack_require__, 88112, 17)),
        HTML: __webpack_require__.e(/* import() */ 25634).then(__webpack_require__.t.bind(__webpack_require__, 25634, 17)),
        LESS: __webpack_require__.e(/* import() */ 37730).then(__webpack_require__.t.bind(__webpack_require__, 37730, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 1390).then(__webpack_require__.t.bind(__webpack_require__, 1390, 17)),
        HTML: __webpack_require__.e(/* import() */ 13584).then(__webpack_require__.t.bind(__webpack_require__, 13584, 17))
      };
      this.example6 = {
        TypeScript: __webpack_require__.e(/* import() */ 84729).then(__webpack_require__.t.bind(__webpack_require__, 84729, 17)),
        HTML: __webpack_require__.e(/* import() */ 12869).then(__webpack_require__.t.bind(__webpack_require__, 43378, 17)),
        LESS: __webpack_require__.e(/* import() */ 66783).then(__webpack_require__.t.bind(__webpack_require__, 66783, 17))
      };
      this.exampleModule = __webpack_require__.e(/* import() */ 93135).then(__webpack_require__.t.bind(__webpack_require__, 93135, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 89482).then(__webpack_require__.t.bind(__webpack_require__, 89482, 17));
      this.exampleForm = __webpack_require__.e(/* import() */ 51738).then(__webpack_require__.t.bind(__webpack_require__, 51738, 17));
      this.maxLengthVariants = [50, 100, 500];
      this.maxLength = null;
      this.rowsVariants = [8, 15, 30];
      this.rows = this.rowsVariants[0];
      this.expandable = false;
      this.control = new fesm2015_forms/* FormControl */.NI();
      this.sizeVariants = [`m`, `l`];
      this.size = this.sizeVariants[1];
    }

  }

  ExampleTuiTextAreaComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiTextAreaComponent_BaseFactory;
    return function ExampleTuiTextAreaComponent_Factory(t) {
      return (ɵExampleTuiTextAreaComponent_BaseFactory || (ɵExampleTuiTextAreaComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiTextAreaComponent)))(t || ExampleTuiTextAreaComponent);
    };
  }();

  ExampleTuiTextAreaComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiTextAreaComponent,
    selectors: [["example-tui-text-area"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiTextAreaComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3415839972003360203$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__1 = goog.getMsg("Textfield for multiline input. It can grow with its content.");
        i18n_0 = MSG_EXTERNAL_3415839972003360203$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟d8e68a67668ed36e11149af4b05578aba184f2d8␟3415839972003360203:Textfield for multiline input. It can grow with its content.`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_947387158256125293$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__3 = goog.getMsg("A simple field and expandable");
        i18n_2 = MSG_EXTERNAL_947387158256125293$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟edc570a1a3344698bc10ae22435fcd850d8e1d5c␟947387158256125293:A simple field and expandable`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_991068879248914444$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__5 = goog.getMsg("Custom size");
        i18n_4 = MSG_EXTERNAL_991068879248914444$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟a1516856d096185f3cd2e884d1c53927efe37878␟991068879248914444:Custom size`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4716735227862695980$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__7 = goog.getMsg("With label outside");
        i18n_6 = MSG_EXTERNAL_4716735227862695980$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟109f3df315d219bfc11667dd1c45293fef91d174␟4716735227862695980:With label outside`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4290224686448141191$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__9 = goog.getMsg("With extra characters highlight");
        i18n_8 = MSG_EXTERNAL_4290224686448141191$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟fea4a8a30133ed301fa9c3aa2501016eb2920272␟4290224686448141191:With extra characters highlight`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8180212294898737649$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__11 = goog.getMsg("Native attributes");
        i18n_10 = MSG_EXTERNAL_8180212294898737649$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟e4897a811bb51b166e64728f6812355f0de6cc4a␟8180212294898737649:Native attributes`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2885218428372331823$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__13 = goog.getMsg("Direction: RTL");
        i18n_12 = MSG_EXTERNAL_2885218428372331823$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟e79e58f2fd2e2018afeb160923b2810951e9dbfc␟2885218428372331823:Direction: RTL`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9000685466486669878$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS___15 = goog.getMsg(" Disabled state (formControl.disable()) ");
        i18n_14 = MSG_EXTERNAL_9000685466486669878$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟28350648cac40c192feced71459023195fd07d01␟9000685466486669878: Disabled state (formControl.disable()) `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8181128573063666297$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS___17 = goog.getMsg(" Control height can be expanded to show all content ");
        i18n_16 = MSG_EXTERNAL_8181128573063666297$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟fe3440932d8de8493b95c5bb7b80235d8019c4e7␟8181128573063666297: Control height can be expanded to show all content `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2865148364212366262$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS___19 = goog.getMsg(" Use maxLength for highlighting extra characters. If you want to limit the number of characters, add {$startTagCode}<textarea tuiTextfield></textarea>{$closeTagCode} with native maxlength attribute. ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_2865148364212366262$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟51f367a1f3e3906979597a5579a7d3e0536a79b7␟2865148364212366262: Use maxLength for highlighting extra characters. If you want to limit the number of characters, add ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:<textarea tuiTextfield></textarea>${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: with native maxlength attribute. `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3033193110728465870$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS___21 = goog.getMsg(" A number of visible rows in {$startTagCode}expandable{$closeTagCode} mode ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_3033193110728465870$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟a96e8afcd84a7e13d809bf3cf105ae4fceb93ee3␟3033193110728465870: A number of visible rows in ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:expandable${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: mode `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_103194612379487642$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__23 = goog.getMsg(" Import {$startTagCode}TuiTextAreaModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_22 = MSG_EXTERNAL_103194612379487642$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟aeec6378605dd6e8426702c0c1a0ac3534fb3376␟103194612379487642: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTextAreaModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__25 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_24 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__25;
      } else {
        i18n_24 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_24 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_24);
      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__27 = goog.getMsg("Add to the template:");
        i18n_26 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TEXT_AREA_TEXT_AREA_COMPONENT_TS__27;
      } else {
        i18n_26 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "TextArea", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "large", "heading", i18n_4, 3, "content"], ["id", "label-outside", "heading", i18n_6, 3, "content"], ["id", "extra-chars-highlight", "heading", i18n_8, 3, "content"], ["id", "native", "heading", i18n_10, 3, "content"], [1, "tui-space_bottom-4", "b-form"], ["id", "rtl", "heading", i18n_12, 3, "content"], [1, "b-form", 3, "formControl", "focusable", "tuiTextfieldCleaner", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "maxLength", "expandable", "pseudoInvalid", "pseudoFocus", "pseudoHover", "readOnly", "rows", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance"], ["tuiTextfield", "", "placeholder", "Placeholder"], ["documentationPropertyName", "disabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "expandable", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "maxLength", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "rows", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_14, i18n_16, i18n_18, i18n_20, [1, "b-demo-steps"], i18n_22, ["filename", "myComponent.module.ts", 3, "code"], i18n_24, ["filename", "myComponent.component.ts", 3, "code"], i18n_26, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiTextAreaComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiTextAreaComponent_ng_template_1_Template, 22, 6, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiTextAreaComponent_ng_template_2_Template, 10, 21, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiTextAreaComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiTextAreaExample1, TuiTextAreaExample2, TuiTextAreaExample3, TuiTextAreaExample4, notification_component/* TuiNotificationComponent */.L, TuiTextAreaExample5, TuiTextAreaExample6, demo_component/* TuiDocDemoComponent */.F, text_area_component/* TuiTextAreaComponent */.Jl, text_area_directive/* TuiTextAreaDirective */.e, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, hint_options_directive/* TuiHintOptionsDirective */.bZ, textfield_component/* TuiTextfieldComponent */.M, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiTextAreaComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/text-area/text-area.module.ts
















let ExampleTuiTextAreaModule = /*#__PURE__*/(() => {
  class ExampleTuiTextAreaModule {}

  ExampleTuiTextAreaModule.ɵfac = function ExampleTuiTextAreaModule_Factory(t) {
    return new (t || ExampleTuiTextAreaModule)();
  };

  ExampleTuiTextAreaModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiTextAreaModule
  });
  ExampleTuiTextAreaModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[kit.TuiTextAreaModule, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, core.TuiSvgModule, common/* CommonModule */.ez, kit.TuiRadioListModule, core.TuiButtonModule, core.TuiLinkModule, core.TuiLabelModule, core.TuiTextfieldControllerModule, core.TuiHintModule, core.TuiNotificationModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiTextAreaComponent))]]
  });
  return ExampleTuiTextAreaModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiTextAreaModule, {
    declarations: [ExampleTuiTextAreaComponent, TuiTextAreaExample1, TuiTextAreaExample2, TuiTextAreaExample3, TuiTextAreaExample4, TuiTextAreaExample5, TuiTextAreaExample6],
    imports: [kit.TuiTextAreaModule, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, core.TuiSvgModule, common/* CommonModule */.ez, kit.TuiRadioListModule, core.TuiButtonModule, core.TuiLinkModule, core.TuiLabelModule, core.TuiTextfieldControllerModule, core.TuiHintModule, core.TuiNotificationModule, core.TuiErrorModule, kit.TuiFieldErrorPipeModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiTextAreaComponent]
  });
})();

/***/ })

}]);