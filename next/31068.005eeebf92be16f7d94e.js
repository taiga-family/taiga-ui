"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[31068],{

/***/ 31068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiRadioLabeledModule": () => (/* binding */ ExampleTuiRadioLabeledModule)
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
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/radio-labeled/radio-labeled.component.ts
var radio_labeled_component = __webpack_require__(96612);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio-labeled/examples/1/index.ts




let TuiRadioLabeledExample1 = /*#__PURE__*/(() => {
  class TuiRadioLabeledExample1 {
    constructor() {
      this.items = [{
        name: `tariff1`
      }, {
        name: `tariff2`
      }, {
        name: `tariff3`
      }];
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(this.items[0])
      });
    }

  }

  TuiRadioLabeledExample1.ɵfac = function TuiRadioLabeledExample1_Factory(t) {
    return new (t || TuiRadioLabeledExample1)();
  };

  TuiRadioLabeledExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRadioLabeledExample1,
    selectors: [["tui-radio-labeled-example-1"]],
    decls: 7,
    vars: 4,
    consts: [[3, "formGroup"], ["formControlName", "testValue1", 1, "tui-space_bottom-3", 3, "item"], ["formControlName", "testValue1", 3, "item"]],
    template: function TuiRadioLabeledExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-radio-labeled", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " One option ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-radio-labeled", 1);
        fesm2015_core/* ɵɵtext */._uU(4, " Other option ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-radio-labeled", 2);
        fesm2015_core/* ɵɵtext */._uU(6, " Alternative option ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("item", ctx.items[0]);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("item", ctx.items[1]);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("item", ctx.items[2]);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, radio_labeled_component/* TuiRadioLabeledComponent */.Y, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiRadioLabeledExample1;
})();
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio-labeled/examples/2/index.ts





let TuiRadioLabeledExample2 = /*#__PURE__*/(() => {
  class TuiRadioLabeledExample2 {
    constructor() {
      this.items = [{
        name: `tariff1`
      }, {
        name: `tariff2`
      }, {
        name: `tariff3`
      }];
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(this.items[0])
      });
    }

  }

  TuiRadioLabeledExample2.ɵfac = function TuiRadioLabeledExample2_Factory(t) {
    return new (t || TuiRadioLabeledExample2)();
  };

  TuiRadioLabeledExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRadioLabeledExample2,
    selectors: [["tui-radio-labeled-example-2"]],
    decls: 18,
    vars: 4,
    consts: [[3, "formGroup"], ["formControlName", "testValue1", 1, "tui-space_bottom-3", 3, "item"], [1, "description"], ["tuiLink", "", "href", "#", "onclick", "return false;"], ["formControlName", "testValue1", 3, "item"]],
    template: function TuiRadioLabeledExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-radio-labeled", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div");
        fesm2015_core/* ɵɵtext */._uU(3, "A simple option");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "div", 2);
        fesm2015_core/* ɵɵtext */._uU(5, "It is real simple option, take a look");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-radio-labeled", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "div");
        fesm2015_core/* ɵɵtext */._uU(8, "Advanced");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "div", 2);
        fesm2015_core/* ɵɵtext */._uU(10, " It can also be with a ");
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "a", 3);
        fesm2015_core/* ɵɵtext */._uU(12, " link ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-radio-labeled", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "div");
        fesm2015_core/* ɵɵtext */._uU(15, "PRO");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "div", 2);
        fesm2015_core/* ɵɵtext */._uU(17, "For true cool ultimate clients");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("item", ctx.items[0]);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("item", ctx.items[1]);
        fesm2015_core/* ɵɵadvance */.xp6(7);
        fesm2015_core/* ɵɵproperty */.Q6J("item", ctx.items[2]);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, radio_labeled_component/* TuiRadioLabeledComponent */.Y, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, link_component/* TuiLinkComponent */.V],
    styles: [".description[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);margin-top:.25rem;color:var(--tui-text-03)}"],
    changeDetection: 0
  });
  return TuiRadioLabeledExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio-labeled/examples/3/index.ts




let TuiRadioLabeledExample3 = /*#__PURE__*/(() => {
  class TuiRadioLabeledExample3 {
    constructor() {
      this.items = [{
        name: `ownership`
      }, {
        name: `lease`
      }, {
        name: `sublease`
      }];
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(this.items[0])
      });
    }

  }

  TuiRadioLabeledExample3.ɵfac = function TuiRadioLabeledExample3_Factory(t) {
    return new (t || TuiRadioLabeledExample3)();
  };

  TuiRadioLabeledExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRadioLabeledExample3,
    selectors: [["tui-radio-labeled-example-3"]],
    decls: 7,
    vars: 4,
    consts: [[3, "formGroup"], ["formControlName", "testValue1", "size", "l", 1, "tui-space_bottom-5", 3, "item"], ["formControlName", "testValue1", "size", "l", 3, "item"]],
    template: function TuiRadioLabeledExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-radio-labeled", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " One option ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-radio-labeled", 1);
        fesm2015_core/* ɵɵtext */._uU(4, " Other ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-radio-labeled", 2);
        fesm2015_core/* ɵɵtext */._uU(6, " Alternative ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("item", ctx.items[0]);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("item", ctx.items[1]);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("item", ctx.items[2]);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, radio_labeled_component/* TuiRadioLabeledComponent */.Y, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiRadioLabeledExample3;
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
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio-labeled/radio-labeled.component.ts





















function ExampleTuiRadioLabeledComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "a", 3);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-radio-labeled-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-radio-labeled-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-radio-labeled-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiRadioLabeledComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-radio-labeled", 12);
    fesm2015_core/* ɵɵtext */._uU(1, " One ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-radio-labeled", 12);
    fesm2015_core/* ɵɵtext */._uU(3, " Two ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-radio-labeled", 12);
    fesm2015_core/* ɵɵtext */._uU(5, " Three ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("item", ctx_r3.items[0])("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("pseudoDisabled", ctx_r3.pseudoDisabled)("size", ctx_r3.size)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("item", ctx_r3.items[1])("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("pseudoDisabled", ctx_r3.pseudoDisabled)("size", ctx_r3.size)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("item", ctx_r3.items[2])("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("pseudoDisabled", ctx_r3.pseudoDisabled)("size", ctx_r3.size)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly);
  }
}

function ExampleTuiRadioLabeledComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 13);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiRadioLabeledComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 14);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiRadioLabeledComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiRadioLabeledComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiRadioLabeledComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 7);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiRadioLabeledComponent_ng_template_2_ng_template_1_Template, 6, 30, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiRadioLabeledComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRadioLabeledComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiRadioLabeledComponent_ng_template_2_ng_template_4_Template, 3, 0, "ng-template", 9);
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiRadioLabeledComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRadioLabeledComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.pseudoDisabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiRadioLabeledComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRadioLabeledComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.size = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(7, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.pseudoDisabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
  }
}

function ExampleTuiRadioLabeledComponent_ng_template_3_Template(rf, ctx) {
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
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18n */.SDv(14, 22);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-doc-code", 23);
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

let ExampleTuiRadioLabeledComponent = /*#__PURE__*/(() => {
  class ExampleTuiRadioLabeledComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 53152).then(__webpack_require__.t.bind(__webpack_require__, 53152, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 48506).then(__webpack_require__.t.bind(__webpack_require__, 48506, 17));
      this.exampleForm = __webpack_require__.e(/* import() */ 29436).then(__webpack_require__.t.bind(__webpack_require__, 29436, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 55827).then(__webpack_require__.t.bind(__webpack_require__, 55827, 17)),
        HTML: __webpack_require__.e(/* import() */ 94774).then(__webpack_require__.t.bind(__webpack_require__, 94774, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 5710).then(__webpack_require__.t.bind(__webpack_require__, 5710, 17)),
        HTML: __webpack_require__.e(/* import() */ 30444).then(__webpack_require__.t.bind(__webpack_require__, 30444, 17)),
        LESS: __webpack_require__.e(/* import() */ 52170).then(__webpack_require__.t.bind(__webpack_require__, 52170, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 27737).then(__webpack_require__.t.bind(__webpack_require__, 27737, 17)),
        HTML: __webpack_require__.e(/* import() */ 19687).then(__webpack_require__.t.bind(__webpack_require__, 19687, 17))
      };
      this.items = [{
        name: `tariff1`
      }, {
        name: `tariff2`
      }, {
        name: `tariff3`
      }];
      this.sizeVariants = [`m`, `l`];
      this.size = this.sizeVariants[0];
      this.pseudoDisabled = false;
      this.control = new fesm2015_forms/* FormControl */.NI(this.items[0]);
    }

  }

  ExampleTuiRadioLabeledComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiRadioLabeledComponent_BaseFactory;
    return function ExampleTuiRadioLabeledComponent_Factory(t) {
      return (ɵExampleTuiRadioLabeledComponent_BaseFactory || (ɵExampleTuiRadioLabeledComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiRadioLabeledComponent)))(t || ExampleTuiRadioLabeledComponent);
    };
  }();

  ExampleTuiRadioLabeledComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiRadioLabeledComponent,
    selectors: [["example-tui-radio-labeled"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiRadioLabeledComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8728648714934733265$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}RadioLabeled{$closeTagCode} is a radio and a label. Label click changes form value. Without label: {$startLink}{$startTagCode}Radio{$closeTagCode}{$closeLink} . ", {
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]",
          "startLink": "\uFFFD#3\uFFFD",
          "closeLink": "\uFFFD/#3\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_8728648714934733265$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟3c9c2e605ce6ffd4939edf0fb763423e0f505c4e␟8728648714934733265:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:RadioLabeled${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: is a radio and a label. Label click changes form value. Without label: ${"\uFFFD#3\uFFFD"}:START_LINK:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:Radio${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#3\uFFFD"}:CLOSE_LINK: . `;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7460188960589272319$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS__3 = goog.getMsg("Label without formatting");
        i18n_2 = MSG_EXTERNAL_7460188960589272319$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟f3a1f68bb22c77f9f946993a9984a854784069a4␟7460188960589272319:Label without formatting`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4032363583829765410$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS__5 = goog.getMsg("Label with formatting");
        i18n_4 = MSG_EXTERNAL_4032363583829765410$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟77ffb94627956b8222a3d8b509c1a3491bae3ac3␟4032363583829765410:Label with formatting`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9065652012369821232$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS__7 = goog.getMsg("Big size");
        i18n_6 = MSG_EXTERNAL_9065652012369821232$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟5091f6acf0fbf0b72c4958189d20c85b8d7f42f0␟9065652012369821232:Big size`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS___9 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8367237806229821940$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS___11 = goog.getMsg(" Function that matches value and items, e.g. if objects are copied. Uses {$startTagCode}==={$closeTagCode} by default. {$startTagStrong}Must be a pure function{$closeTagStrong}", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_8367237806229821940$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟5d5550b6d81d9ae6434fc11a40439f0f0325dd5a␟8367237806229821940: Function that matches value and items, e.g. if objects are copied. Uses ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:===${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: by default. ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1513617794784776786$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS___13 = goog.getMsg(" Emulates disabled state without disabling a form ");
        i18n_12 = MSG_EXTERNAL_1513617794784776786$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟61196b55644500db48d300daa702002afe0c96f0␟1513617794784776786: Emulates disabled state without disabling a form `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS___15 = goog.getMsg(" Size ");
        i18n_14 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8297318048277020761$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS__17 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiRadioLabeledModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_8297318048277020761$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟d3855fa705beffb85b381370c48cd01776d01bfb␟8297318048277020761: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiRadioLabeledModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS__19 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_18 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_18 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_18);
      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS__21 = goog.getMsg("Add to the template:");
        i18n_20 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_LABELED_RADIO_LABELED_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "RadioLabeled", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["tuiLink", "", "routerLink", "/components/radio"], ["id", "base", "heading", i18n_2, 3, "content"], ["id", "custom", "heading", i18n_4, 3, "content"], ["id", "large", "heading", i18n_6, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "identityMatcher", "documentationPropertyMode", "input", "documentationPropertyType", "TuiIdentityMatcher"], ["documentationPropertyName", "pseudoDisabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "tui-space_bottom-3", 3, "formControl", "item", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "pseudoDisabled", "size", "focusable", "readOnly"], i18n_8, i18n_10, i18n_12, i18n_14, [1, "b-demo-steps"], i18n_16, ["filename", "myComponent.module.ts", 3, "code"], i18n_18, ["filename", "myComponent.component.ts", 3, "code"], i18n_20, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiRadioLabeledComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiRadioLabeledComponent_ng_template_1_Template, 11, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiRadioLabeledComponent_ng_template_2_Template, 8, 5, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiRadioLabeledComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiRadioLabeledExample1, TuiRadioLabeledExample2, TuiRadioLabeledExample3, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, radio_labeled_component/* TuiRadioLabeledComponent */.Y, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, code_component/* TuiDocCodeComponent */.c],
    styles: [".tariff[_ngcontent-%COMP%]{font:var(--tui-font-text-s);font-weight:bold}"],
    changeDetection: 0
  });
  return ExampleTuiRadioLabeledComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio-labeled/radio-labeled.module.ts













let ExampleTuiRadioLabeledModule = /*#__PURE__*/(() => {
  class ExampleTuiRadioLabeledModule {}

  ExampleTuiRadioLabeledModule.ɵfac = function ExampleTuiRadioLabeledModule_Factory(t) {
    return new (t || ExampleTuiRadioLabeledModule)();
  };

  ExampleTuiRadioLabeledModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiRadioLabeledModule
  });
  ExampleTuiRadioLabeledModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, router/* RouterModule */.Bz, kit.TuiRadioLabeledModule, core.TuiLinkModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiRadioLabeledComponent))]]
  });
  return ExampleTuiRadioLabeledModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiRadioLabeledModule, {
    declarations: [ExampleTuiRadioLabeledComponent, TuiRadioLabeledExample1, TuiRadioLabeledExample2, TuiRadioLabeledExample3],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, router/* RouterModule */.Bz, kit.TuiRadioLabeledModule, core.TuiLinkModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiRadioLabeledComponent]
  });
})();

/***/ })

}]);