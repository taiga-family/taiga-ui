"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[81070],{

/***/ 81070:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiRadioModule": () => (/* binding */ ExampleTuiRadioModule)
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
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/radio/radio.component.ts
var radio_component = __webpack_require__(70779);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio/examples/1/index.ts




let TuiRadioExample1 = /*#__PURE__*/(() => {
  class TuiRadioExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(`One`),
        testValue2: new fesm2015_forms/* FormControl */.NI({
          value: `One`,
          disabled: true
        })
      });
    }

  }

  TuiRadioExample1.ɵfac = function TuiRadioExample1_Factory(t) {
    return new (t || TuiRadioExample1)();
  };

  TuiRadioExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRadioExample1,
    selectors: [["tui-radio-example-1"]],
    decls: 5,
    vars: 1,
    consts: [[3, "formGroup"], ["formControlName", "testValue1", "item", "One", 1, "tui-space_bottom-3"], ["formControlName", "testValue1", "item", "Two", 1, "tui-space_bottom-3"], ["formControlName", "testValue2", "item", "One", 1, "tui-space_bottom-3"], ["formControlName", "testValue2", "item", "Two"]],
    template: function TuiRadioExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-radio", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-radio", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-radio", 3);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-radio", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, radio_component/* TuiRadioComponent */._, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiRadioExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio/examples/2/index.ts




let TuiRadioExample2 = /*#__PURE__*/(() => {
  class TuiRadioExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(`One`),
        testValue2: new fesm2015_forms/* FormControl */.NI({
          value: `One`,
          disabled: true
        })
      });
    }

  }

  TuiRadioExample2.ɵfac = function TuiRadioExample2_Factory(t) {
    return new (t || TuiRadioExample2)();
  };

  TuiRadioExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRadioExample2,
    selectors: [["tui-radio-example-2"]],
    decls: 5,
    vars: 1,
    consts: [[3, "formGroup"], ["formControlName", "testValue1", "size", "l", "item", "One", 1, "tui-space_bottom-3"], ["formControlName", "testValue1", "size", "l", "item", "Two", 1, "tui-space_bottom-3"], ["formControlName", "testValue2", "size", "l", "item", "One", 1, "tui-space_bottom-3"], ["formControlName", "testValue2", "size", "l", "item", "Two"]],
    template: function TuiRadioExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-radio", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-radio", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-radio", 3);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-radio", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, radio_component/* TuiRadioComponent */._, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiRadioExample2;
})();
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
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
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts
var inherited_documentation_component = __webpack_require__(54218);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio/radio.component.ts






















function ExampleTuiRadioComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "a", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "a", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-radio-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-radio-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiRadioComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-radio", 14);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-radio", 14);
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-radio", 14);
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("item", null)("identityMatcher", ctx_r3.identityMatcher)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("pseudoDisabled", ctx_r3.pseudoDisabled)("size", ctx_r3.size)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("item", ctx_r3.items[1])("identityMatcher", ctx_r3.identityMatcher)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("pseudoDisabled", ctx_r3.pseudoDisabled)("size", ctx_r3.size)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("item", ctx_r3.items[2])("identityMatcher", ctx_r3.identityMatcher)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("pseudoDisabled", ctx_r3.pseudoDisabled)("size", ctx_r3.size)("focusable", ctx_r3.focusable)("readOnly", ctx_r3.readOnly);
  }
}

function ExampleTuiRadioComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 15);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiRadioComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 16);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiRadioComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 17);
  }
}

function ExampleTuiRadioComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 18);
  }
}

function ExampleTuiRadioComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 7);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiRadioComponent_ng_template_2_ng_template_1_Template, 3, 33, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiRadioComponent_ng_template_2_Template_button_click_2_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.onClick();
    });
    fesm2015_core/* ɵɵi18n */.SDv(3, 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiRadioComponent_ng_template_2_ng_template_5_Template, 2, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRadioComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiRadioComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRadioComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.identityMatcher = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiRadioComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRadioComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.pseudoDisabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiRadioComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRadioComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.size = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.identityMatcherVariants)("documentationPropertyValue", ctx_r1.identityMatcher);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.pseudoDisabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
  }
}

function ExampleTuiRadioComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 19);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵtext */._uU(2, " Import an Angular module for forms and ");
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "code");
    fesm2015_core/* ɵɵtext */._uU(4, "TuiRadioModule");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(5, " in the same module where you want to use our component: ");
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-doc-code", 20);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "li");
    fesm2015_core/* ɵɵtext */._uU(8, " Optionally use the ");
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "code");
    fesm2015_core/* ɵɵtext */._uU(10, "TUI_RADIO_OPTIONS");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(11, " injection token to override the default options for the component. ");
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-doc-code", 20);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(15, 21);
    fesm2015_core/* ɵɵelement */._UZ(16, "code");
    fesm2015_core/* ɵɵelement */._UZ(17, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(18, "tui-doc-code", 22);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "p");
    fesm2015_core/* ɵɵi18n */.SDv(21, 23);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(22, "tui-doc-code", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleOptions);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleForm);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiRadioComponent = /*#__PURE__*/(() => {
  class ExampleTuiRadioComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 27714).then(__webpack_require__.t.bind(__webpack_require__, 27714, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 55480).then(__webpack_require__.t.bind(__webpack_require__, 55480, 17));
      this.exampleForm = __webpack_require__.e(/* import() */ 87466).then(__webpack_require__.t.bind(__webpack_require__, 13401, 17));
      this.exampleOptions = __webpack_require__.e(/* import() */ 67669).then(__webpack_require__.t.bind(__webpack_require__, 67669, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 11910).then(__webpack_require__.t.bind(__webpack_require__, 11910, 17)),
        HTML: __webpack_require__.e(/* import() */ 63563).then(__webpack_require__.t.bind(__webpack_require__, 63563, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 82142).then(__webpack_require__.t.bind(__webpack_require__, 82142, 17)),
        HTML: __webpack_require__.e(/* import() */ 69464).then(__webpack_require__.t.bind(__webpack_require__, 69464, 17))
      };
      this.items = [{
        id: 0,
        value: `One`
      }, {
        id: 1,
        value: `Two`
      }, {
        id: 2,
        value: `Three`
      }];
      this.sizeVariants = [`m`, `l`];
      this.size = this.sizeVariants[0];
      this.pseudoDisabled = false;
      this.identityMatcherVariants = [cdk.TUI_DEFAULT_IDENTITY_MATCHER, (item1, item2) => item1.id === item2.id];
      this.identityMatcher = this.identityMatcherVariants[0];
      this.control = new fesm2015_forms/* FormControl */.NI(this.items[1]);
    }

    onClick() {
      this.control.setValue({
        id: 0,
        value: `One`
      });
    }

  }

  ExampleTuiRadioComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiRadioComponent_BaseFactory;
    return function ExampleTuiRadioComponent_Factory(t) {
      return (ɵExampleTuiRadioComponent_BaseFactory || (ɵExampleTuiRadioComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiRadioComponent)))(t || ExampleTuiRadioComponent);
    };
  }();

  ExampleTuiRadioComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiRadioComponent,
    selectors: [["example-tui-radio"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiRadioComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6675688252058721736$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS__1 = goog.getMsg(" Radio button without a label. If you want to use it with a label, see {$startLink}{$startTagCode}RadioLabeled{$closeTagCode}{$closeLink} , and inside button \u2014 see {$startLink_1}{$startTagCode}RadioBlock{$closeTagCode}{$closeLink} . ", {
          "startLink": "\uFFFD#2\uFFFD",
          "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]",
          "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]",
          "closeLink": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]",
          "startLink_1": "\uFFFD#4\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_6675688252058721736$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟48d690b7e637a58a86b2dd74e32ce82f8c01c42e␟6675688252058721736: Radio button without a label. If you want to use it with a label, see ${"\uFFFD#2\uFFFD"}:START_LINK:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:RadioLabeled${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_LINK: , and inside button — see ${"\uFFFD#4\uFFFD"}:START_LINK_1:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:RadioBlock${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_LINK: . `;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9065652012369821232$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS__5 = goog.getMsg("Big size");
        i18n_4 = MSG_EXTERNAL_9065652012369821232$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟5091f6acf0fbf0b72c4958189d20c85b8d7f42f0␟9065652012369821232:Big size`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4993950338252650457$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS__7 = goog.getMsg(" Set a value with a copy ");
        i18n_6 = MSG_EXTERNAL_4993950338252650457$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟d47d2d40a03109513925d6d8b6a05cb5a1a69bc2␟4993950338252650457: Set a value with a copy `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS___9 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8367237806229821940$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS___11 = goog.getMsg(" Function that matches value and items, e.g. if objects are copied. Uses {$startTagCode}==={$closeTagCode} by default. {$startTagStrong}Must be a pure function{$closeTagStrong}", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_8367237806229821940$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟5d5550b6d81d9ae6434fc11a40439f0f0325dd5a␟8367237806229821940: Function that matches value and items, e.g. if objects are copied. Uses ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:===${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: by default. ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1513617794784776786$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS___13 = goog.getMsg(" Emulates disabled state without disabling a form ");
        i18n_12 = MSG_EXTERNAL_1513617794784776786$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟61196b55644500db48d300daa702002afe0c96f0␟1513617794784776786: Emulates disabled state without disabling a form `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS___15 = goog.getMsg(" Size ");
        i18n_14 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS__17 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#16\uFFFD|\uFFFD#17\uFFFD]",
          "closeTagCode": "[\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD]"
        });
        i18n_16 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#16\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#16\uFFFD|\uFFFD#17\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#16\uFFFD|\uFFFD/#17\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_16 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_16);
      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS__19 = goog.getMsg("Add to the template:");
        i18n_18 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RADIO_RADIO_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Radio", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["tuiLink", "", "routerLink", "/components/radio-labeled"], ["tuiLink", "", "routerLink", "/components/radio-block"], ["id", "base", "heading", i18n_2, 3, "content"], ["id", "large", "heading", i18n_4, 3, "content"], [3, "control"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"], i18n_6, ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "identityMatcher", "documentationPropertyMode", "input", "documentationPropertyType", "TuiIdentityMatcher", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pseudoDisabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "tui-space_bottom-3", 3, "formControl", "item", "identityMatcher", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "pseudoDisabled", "size", "focusable", "readOnly"], i18n_8, i18n_10, i18n_12, i18n_14, [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], i18n_16, ["filename", "myComponent.component.ts", 3, "code"], i18n_18, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiRadioComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiRadioComponent_ng_template_1_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiRadioComponent_ng_template_2_Template, 10, 7, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiRadioComponent_ng_template_3_Template, 23, 4, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiRadioExample1, TuiRadioExample2, demo_component/* TuiDocDemoComponent */.F, button_component/* TuiButtonComponent */.v, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, radio_component/* TuiRadioComponent */._, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiRadioComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/radio/radio.module.ts












let ExampleTuiRadioModule = /*#__PURE__*/(() => {
  class ExampleTuiRadioModule {}

  ExampleTuiRadioModule.ɵfac = function ExampleTuiRadioModule_Factory(t) {
    return new (t || ExampleTuiRadioModule)();
  };

  ExampleTuiRadioModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiRadioModule
  });
  ExampleTuiRadioModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, router/* RouterModule */.Bz, kit.TuiRadioModule, core.TuiButtonModule, core.TuiLinkModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiRadioComponent))]]
  });
  return ExampleTuiRadioModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiRadioModule, {
    declarations: [ExampleTuiRadioComponent, TuiRadioExample1, TuiRadioExample2],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, router/* RouterModule */.Bz, kit.TuiRadioModule, core.TuiButtonModule, core.TuiLinkModule, inherited_documentation_module/* InheritedDocumentationModule */.f, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiRadioComponent]
  });
})();

/***/ })

}]);