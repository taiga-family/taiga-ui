"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[38147],{

/***/ 38147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiCheckboxModule": () => (/* binding */ ExampleTuiCheckboxModule)
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
// EXTERNAL MODULE: ./node_modules/ngx-markdown/fesm2015/ngx-markdown.js + 1 modules
var ngx_markdown = __webpack_require__(27035);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
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
// EXTERNAL MODULE: ./projects/kit/components/checkbox/checkbox.component.ts
var checkbox_component = __webpack_require__(29270);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/checkbox/examples/1/index.ts




let TuiCheckboxExample1 = /*#__PURE__*/(() => {
  class TuiCheckboxExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(true),
        testValue2: new fesm2015_forms/* FormControl */.NI(false),
        testValue3: new fesm2015_forms/* FormControl */.NI({
          value: true,
          disabled: true
        }),
        testValue4: new fesm2015_forms/* FormControl */.NI({
          value: false,
          disabled: true
        })
      });
    }

  }

  TuiCheckboxExample1.ɵfac = function TuiCheckboxExample1_Factory(t) {
    return new (t || TuiCheckboxExample1)();
  };

  TuiCheckboxExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCheckboxExample1,
    selectors: [["tui-checkbox-example-1"]],
    decls: 5,
    vars: 1,
    consts: [[3, "formGroup"], ["formControlName", "testValue1", 1, "tui-space_bottom-3"], ["formControlName", "testValue2", 1, "tui-space_bottom-3"], ["formControlName", "testValue3", 1, "tui-space_bottom-3"], ["formControlName", "testValue4"]],
    template: function TuiCheckboxExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-checkbox", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-checkbox", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-checkbox", 3);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-checkbox", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, checkbox_component/* TuiCheckboxComponent */.f, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiCheckboxExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/checkbox/examples/2/index.ts




let TuiCheckboxExample2 = /*#__PURE__*/(() => {
  class TuiCheckboxExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(true),
        testValue2: new fesm2015_forms/* FormControl */.NI(false),
        testValue3: new fesm2015_forms/* FormControl */.NI({
          value: true,
          disabled: true
        }),
        testValue4: new fesm2015_forms/* FormControl */.NI({
          value: false,
          disabled: true
        })
      });
    }

  }

  TuiCheckboxExample2.ɵfac = function TuiCheckboxExample2_Factory(t) {
    return new (t || TuiCheckboxExample2)();
  };

  TuiCheckboxExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCheckboxExample2,
    selectors: [["tui-checkbox-example-2"]],
    decls: 5,
    vars: 1,
    consts: [[3, "formGroup"], ["formControlName", "testValue1", "size", "l", 1, "tui-space_bottom-3"], ["formControlName", "testValue2", "size", "l", 1, "tui-space_bottom-3"], ["formControlName", "testValue3", "size", "l", 1, "tui-space_bottom-3"], ["formControlName", "testValue4", "size", "l"]],
    template: function TuiCheckboxExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-checkbox", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-checkbox", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-checkbox", 3);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-checkbox", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, checkbox_component/* TuiCheckboxComponent */.f, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiCheckboxExample2;
})();
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/checkbox/checkbox.component.ts




















function ExampleTuiCheckboxComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "a", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "a", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-checkbox-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-checkbox-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(8);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiCheckboxComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 11);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-checkbox", 12);
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-checkbox", 13);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-checkbox", 14);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx_r3.control);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("readOnly", ctx_r3.readOnly)("focusable", ctx_r3.focusable)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("size", ctx_r3.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("readOnly", ctx_r3.readOnly)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("size", ctx_r3.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("readOnly", ctx_r3.readOnly)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("size", ctx_r3.size);
  }
}

function ExampleTuiCheckboxComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 15);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiCheckboxComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiCheckboxComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 8);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiCheckboxComponent_ng_template_2_ng_template_1_Template, 4, 20, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiCheckboxComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiCheckboxComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCheckboxComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.size = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "inherited-documentation");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
  }
}

function ExampleTuiCheckboxComponent_ng_template_3_Template(rf, ctx) {
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
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-doc-code", 19);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(13, 21);
    fesm2015_core/* ɵɵelement */._UZ(14, "code");
    fesm2015_core/* ɵɵelement */._UZ(15, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(16, "tui-doc-code", 22);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(18, "p");
    fesm2015_core/* ɵɵi18n */.SDv(19, 23);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(20, "tui-doc-code", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleOptions);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleForm);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiCheckboxComponent = /*#__PURE__*/(() => {
  class ExampleTuiCheckboxComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleForm = __webpack_require__.e(/* import() */ 96188).then(__webpack_require__.t.bind(__webpack_require__, 96188, 17));
      this.exampleOptions = __webpack_require__.e(/* import() */ 83795).then(__webpack_require__.t.bind(__webpack_require__, 83795, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 47797).then(__webpack_require__.t.bind(__webpack_require__, 47797, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 69074).then(__webpack_require__.t.bind(__webpack_require__, 69074, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 41895).then(__webpack_require__.t.bind(__webpack_require__, 41895, 17)),
        HTML: __webpack_require__.e(/* import() */ 72901).then(__webpack_require__.t.bind(__webpack_require__, 72901, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 65258).then(__webpack_require__.t.bind(__webpack_require__, 65258, 17)),
        HTML: __webpack_require__.e(/* import() */ 38143).then(__webpack_require__.t.bind(__webpack_require__, 38143, 17))
      };
      this.sizeVariants = [`m`, `l`];
      this.size = this.sizeVariants[0];
      this.control = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(false),
        testValue2: new fesm2015_forms/* FormControl */.NI(),
        testValue3: new fesm2015_forms/* FormControl */.NI(true)
      });
    }

  }

  ExampleTuiCheckboxComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiCheckboxComponent_BaseFactory;
    return function ExampleTuiCheckboxComponent_Factory(t) {
      return (ɵExampleTuiCheckboxComponent_BaseFactory || (ɵExampleTuiCheckboxComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiCheckboxComponent)))(t || ExampleTuiCheckboxComponent);
    };
  }();

  ExampleTuiCheckboxComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiCheckboxComponent,
    selectors: [["example-tui-checkbox"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiCheckboxComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6982607201143515774$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__1 = goog.getMsg(" Checkbox without a label. For {$startTagCode}indeterminate{$closeTagCode} state, set {$startTagCode}null{$closeTagCode} as value. If you need a labeled checkbox, see {$startLink}{$startTagCode}CheckboxLabeled{$closeTagCode}{$closeLink} . If you need a checkbox inside a button, see {$startLink_1}{$startTagCode}CheckboxBlock{$closeTagCode}{$closeLink} . ", {
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]",
          "startLink": "\uFFFD#4\uFFFD",
          "closeLink": "[\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]",
          "startLink_1": "\uFFFD#6\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_6982607201143515774$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟50ef91028a4e8c7492ab70d6ad1f074f666f2b51␟6982607201143515774: Checkbox without a label. For ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:indeterminate${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE: state, set ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:null${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE: as value. If you need a labeled checkbox, see ${"\uFFFD#4\uFFFD"}:START_LINK:${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:CheckboxLabeled${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_LINK: . If you need a checkbox inside a button, see ${"\uFFFD#6\uFFFD"}:START_LINK_1:${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:CheckboxBlock${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_LINK: . `;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9065652012369821232$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__5 = goog.getMsg("Big size");
        i18n_4 = MSG_EXTERNAL_9065652012369821232$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟5091f6acf0fbf0b72c4958189d20c85b8d7f42f0␟9065652012369821232:Big size`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS___7 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS___9 = goog.getMsg(" Size ");
        i18n_8 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5341688968123749469$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__11 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiCheckboxModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_5341688968123749469$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟97df8e00c6ae0abac63f742146146bd9145927e3␟5341688968123749469: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCheckboxModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8938389394037259502$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__13 = goog.getMsg(" Optionally use the {$startTagCode}TUI_CHECKBOX_OPTIONS{$closeTagCode} injection token to override the default options for the component. ", {
          "startTagCode": "\uFFFD#9\uFFFD",
          "closeTagCode": "\uFFFD/#9\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_8938389394037259502$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟410936608524ecabcc7a9de975eb34bffbc61acd␟8938389394037259502: Optionally use the ${"\uFFFD#9\uFFFD"}:START_TAG_CODE:TUI_CHECKBOX_OPTIONS${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__15 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]",
          "closeTagCode": "[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"
        });
        i18n_14 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#14\uFFFD|\uFFFD#15\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#14\uFFFD|\uFFFD/#15\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_14 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_14);
      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__17 = goog.getMsg("Add to the template:");
        i18n_16 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_CHECKBOX_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Checkbox", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_0, ["tuiLink", "", "routerLink", "/components/checkbox-labeled"], ["tuiLink", "", "routerLink", "/components/checkbox-block"], ["id", "base", "heading", i18n_2, 3, "content"], ["id", "large", "heading", i18n_4, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formGroup"], ["formControlName", "testValue1", 1, "tui-space_bottom-3", 3, "readOnly", "focusable", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "size"], ["formControlName", "testValue2", 1, "tui-space_bottom-3", 3, "readOnly", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "size"], ["formControlName", "testValue3", 1, "tui-space_bottom-3", 3, "readOnly", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "size"], i18n_6, i18n_8, [1, "b-demo-steps"], i18n_10, ["filename", "myComponent.module.ts", 3, "code"], i18n_12, i18n_14, ["filename", "myComponent.component.ts", 3, "code"], i18n_16, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiCheckboxComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiCheckboxComponent_ng_template_1_Template, 12, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiCheckboxComponent_ng_template_2_Template, 6, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiCheckboxComponent_ng_template_3_Template, 21, 4, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiCheckboxExample1, TuiCheckboxExample2, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, checkbox_component/* TuiCheckboxComponent */.f, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiCheckboxComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/checkbox/checkbox.module.ts













let ExampleTuiCheckboxModule = /*#__PURE__*/(() => {
  class ExampleTuiCheckboxModule {}

  ExampleTuiCheckboxModule.ɵfac = function ExampleTuiCheckboxModule_Factory(t) {
    return new (t || ExampleTuiCheckboxModule)();
  };

  ExampleTuiCheckboxModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiCheckboxModule
  });
  ExampleTuiCheckboxModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, router/* RouterModule */.Bz, kit/* TuiCheckboxModule */.xlX, core/* TuiLinkModule */.jzK, ngx_markdown/* MarkdownModule */.JP, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiCheckboxComponent))]]
  });
  return ExampleTuiCheckboxModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiCheckboxModule, {
    declarations: [ExampleTuiCheckboxComponent, TuiCheckboxExample1, TuiCheckboxExample2],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, router/* RouterModule */.Bz, kit/* TuiCheckboxModule */.xlX, core/* TuiLinkModule */.jzK, ngx_markdown/* MarkdownModule */.JP, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, router/* RouterModule */.Bz],
    exports: [ExampleTuiCheckboxComponent]
  });
})();

/***/ })

}]);