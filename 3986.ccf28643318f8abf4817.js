"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[3986],{

/***/ 3986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiCheckboxLabeledModule": () => (/* binding */ ExampleTuiCheckboxLabeledModule)
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
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
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
// EXTERNAL MODULE: ./projects/kit/components/checkbox-labeled/checkbox-labeled.component.ts
var checkbox_labeled_component = __webpack_require__(81894);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/checkbox-labeled/examples/1/index.ts




let TuiCheckboxLabeledExample1 = /*#__PURE__*/(() => {
  class TuiCheckboxLabeledExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(true),
        testValue2: new fesm2015_forms/* FormControl */.NI(false),
        testValue3: new fesm2015_forms/* FormControl */.NI(false)
      });
    }

  }

  TuiCheckboxLabeledExample1.ɵfac = function TuiCheckboxLabeledExample1_Factory(t) {
    return new (t || TuiCheckboxLabeledExample1)();
  };

  TuiCheckboxLabeledExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCheckboxLabeledExample1,
    selectors: [["tui-checkbox-labeled-example-1"]],
    decls: 13,
    vars: 1,
    consts: [[3, "formGroup"], ["formControlName", "testValue1"], [1, "example"], ["formControlName", "testValue2", 1, "tui-space_top-3"], ["formControlName", "testValue3", 1, "tui-space_top-3"]],
    template: function TuiCheckboxLabeledExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-checkbox-labeled", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Taiga UI ");
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 2);
        fesm2015_core/* ɵɵtext */._uU(4, "Angular UI Kit for awesome people");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-checkbox-labeled", 3);
        fesm2015_core/* ɵɵtext */._uU(6, " ng-polymorpheus ");
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "div", 2);
        fesm2015_core/* ɵɵtext */._uU(8, "A tiny library for polymorphic templates in Angular.");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-checkbox-labeled", 4);
        fesm2015_core/* ɵɵtext */._uU(10, " ng-dompurify ");
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "div", 2);
        fesm2015_core/* ɵɵtext */._uU(12, "Inclusive Angular API for DOMPurify");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, checkbox_labeled_component/* TuiCheckboxLabeledComponent */.p, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    styles: [".example[_ngcontent-%COMP%]{color:var(--tui-text-03)}"],
    changeDetection: 0
  });
  return TuiCheckboxLabeledExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/checkbox-labeled/examples/2/index.ts




let TuiCheckboxLabeledExample2 = /*#__PURE__*/(() => {
  class TuiCheckboxLabeledExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(true),
        testValue2: new fesm2015_forms/* FormControl */.NI(false),
        testValue3: new fesm2015_forms/* FormControl */.NI(false)
      });
    }

  }

  TuiCheckboxLabeledExample2.ɵfac = function TuiCheckboxLabeledExample2_Factory(t) {
    return new (t || TuiCheckboxLabeledExample2)();
  };

  TuiCheckboxLabeledExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCheckboxLabeledExample2,
    selectors: [["tui-checkbox-labeled-example-2"]],
    decls: 7,
    vars: 1,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_104365820191270829$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_EXAMPLES_2_INDEX_TS_1 = goog.getMsg(" An option ");
        i18n_0 = MSG_EXTERNAL_104365820191270829$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_EXAMPLES_2_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟69efbcb41a4551f0ad6927cc83ab53c124c6e694␟104365820191270829: An option `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5628301487851595098$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_EXAMPLES_2_INDEX_TS_3 = goog.getMsg(" An alternative one ");
        i18n_2 = MSG_EXTERNAL_5628301487851595098$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_EXAMPLES_2_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟cb5da4d5464b6527737746f8cf768dfb0118a7bf␟5628301487851595098: An alternative one `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_975551376150052152$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_EXAMPLES_2_INDEX_TS_5 = goog.getMsg(" Other ");
        i18n_4 = MSG_EXTERNAL_975551376150052152$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_EXAMPLES_2_INDEX_TS_5;
      } else {
        i18n_4 = $localize`:␟a27c8f9ab4f8da80c60be3dce3cc3630310e6b4c␟975551376150052152: Other `;
      }

      return [[3, "formGroup"], ["formControlName", "testValue1", "size", "l"], i18n_0, ["formControlName", "testValue2", "size", "l", 1, "tui-space_top-5"], i18n_2, ["formControlName", "testValue3", "size", "l", 1, "tui-space_top-5"], i18n_4];
    },
    template: function TuiCheckboxLabeledExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-checkbox-labeled", 1);
        fesm2015_core/* ɵɵi18n */.SDv(2, 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-checkbox-labeled", 3);
        fesm2015_core/* ɵɵi18n */.SDv(4, 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-checkbox-labeled", 5);
        fesm2015_core/* ɵɵi18n */.SDv(6, 6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, checkbox_labeled_component/* TuiCheckboxLabeledComponent */.p, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiCheckboxLabeledExample2;
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/checkbox-labeled/checkbox-labeled.component.ts




















function ExampleTuiCheckboxLabeledComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "a", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-checkbox-labeled-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-checkbox-labeled-example-2");
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

function ExampleTuiCheckboxLabeledComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-checkbox-labeled", 11);
    fesm2015_core/* ɵɵi18n */.SDv(2, 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-checkbox-labeled", 13);
    fesm2015_core/* ɵɵi18n */.SDv(4, 14);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-checkbox-labeled", 15);
    fesm2015_core/* ɵɵi18n */.SDv(6, 16);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx_r3.control);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("focusable", ctx_r3.focusable)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("readOnly", ctx_r3.readOnly)("size", ctx_r3.size);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("focusable", ctx_r3.focusable)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("readOnly", ctx_r3.readOnly)("size", ctx_r3.size);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("focusable", ctx_r3.focusable)("pseudoInvalid", ctx_r3.pseudoInvalid)("pseudoFocus", ctx_r3.pseudoFocused)("pseudoHover", ctx_r3.pseudoHovered)("pseudoActive", ctx_r3.pseudoPressed)("readOnly", ctx_r3.readOnly)("size", ctx_r3.size);
  }
}

function ExampleTuiCheckboxLabeledComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 17);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiCheckboxLabeledComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 18);
  }
}

function ExampleTuiCheckboxLabeledComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 7);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiCheckboxLabeledComponent_ng_template_2_ng_template_1_Template, 7, 22, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiCheckboxLabeledComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCheckboxLabeledComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiCheckboxLabeledComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCheckboxLabeledComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
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

function ExampleTuiCheckboxLabeledComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 19);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 20);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 21);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(8, 22);
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-doc-code", 23);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵi18n */.SDv(14, 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-doc-code", 25);
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

let ExampleTuiCheckboxLabeledComponent = /*#__PURE__*/(() => {
  class ExampleTuiCheckboxLabeledComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super();
      this.exampleForm = __webpack_require__.e(/* import() */ 58740).then(__webpack_require__.t.bind(__webpack_require__, 13666, 17));
      this.exampleModule = __webpack_require__.e(/* import() */ 81613).then(__webpack_require__.t.bind(__webpack_require__, 81613, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 44875).then(__webpack_require__.t.bind(__webpack_require__, 44875, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 850).then(__webpack_require__.t.bind(__webpack_require__, 850, 17)),
        HTML: __webpack_require__.e(/* import() */ 34918).then(__webpack_require__.t.bind(__webpack_require__, 34918, 17)),
        LESS: __webpack_require__.e(/* import() */ 18302).then(__webpack_require__.t.bind(__webpack_require__, 18302, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 11026).then(__webpack_require__.t.bind(__webpack_require__, 11026, 17)),
        HTML: __webpack_require__.e(/* import() */ 63648).then(__webpack_require__.t.bind(__webpack_require__, 63648, 17))
      };
      this.sizeVariants = [`m`, `l`];
      this.size = this.sizeVariants[0];
      this.control = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(false),
        testValue2: new fesm2015_forms/* FormControl */.NI(),
        testValue3: new fesm2015_forms/* FormControl */.NI(true)
      });
      this.control.get(`testValue1`).valueChanges.subscribe(value => {
        if (value) {
          this.control.get(`testValue1`).setValue(false);
        }
      });
    }

  }

  ExampleTuiCheckboxLabeledComponent.ɵfac = function ExampleTuiCheckboxLabeledComponent_Factory(t) {
    return new (t || ExampleTuiCheckboxLabeledComponent)();
  };

  ExampleTuiCheckboxLabeledComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiCheckboxLabeledComponent,
    selectors: [["example-tui-checkbox-labeled"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiCheckboxLabeledComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6739621284929473587$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}CheckboxLabeled{$closeTagCode} is a {$startTagCode}Checkbox{$closeTagCode} with a label. Click on label changes checkbox state. If you do not need a label, see {$startLink}{$startTagCode}Checkbox{$closeTagCode}{$closeLink} . ", {
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]",
          "startLink": "\uFFFD#4\uFFFD",
          "closeLink": "\uFFFD/#4\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_6739621284929473587$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟8fa2bfb8668e786db8828fdb9a8b5f038d5648ef␟6739621284929473587:${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:CheckboxLabeled${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: is a ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:Checkbox${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: with a label. Click on label changes checkbox state. If you do not need a label, see ${"\uFFFD#4\uFFFD"}:START_LINK:${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:Checkbox${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#4\uFFFD"}:CLOSE_LINK: . `;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9065652012369821232$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__5 = goog.getMsg("Big size");
        i18n_4 = MSG_EXTERNAL_9065652012369821232$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟5091f6acf0fbf0b72c4958189d20c85b8d7f42f0␟9065652012369821232:Big size`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7989365396689945569$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___7 = goog.getMsg(" An option ");
        i18n_6 = MSG_EXTERNAL_7989365396689945569$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟e1b323331f830508e98ab6e1917091cd3bfa6a8f␟7989365396689945569: An option `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_607557139639752863$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___9 = goog.getMsg(" An alternative one ");
        i18n_8 = MSG_EXTERNAL_607557139639752863$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟b681053bdf722eff22b48be89cf208cf1c73b769␟607557139639752863: An alternative one `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3232115946036118602$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___11 = goog.getMsg(" Other ");
        i18n_10 = MSG_EXTERNAL_3232115946036118602$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟55f4ecf19b8ccd0e8c44ae9fba34ebd0b55d31fc␟3232115946036118602: Other `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___13 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___15 = goog.getMsg(" Size ");
        i18n_14 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5489967928434473848$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__17 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiCheckboxLabeledModule{$closeTagCode} in the same module where you want to use our component: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_5489967928434473848$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟150958a91ba21b7235b4b3547f1dab1d3a9da2ac␟5489967928434473848: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCheckboxLabeledModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__19 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]",
          "closeTagCode": "[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"
        });
        i18n_18 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#9\uFFFD|\uFFFD#10\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#9\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_18 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_18);
      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__21 = goog.getMsg("Add to the template:");
        i18n_20 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CHECKBOX_LABELED_CHECKBOX_LABELED_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "CheckboxLabeled", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_0, ["tuiLink", "", "routerLink", "/components/checkbox"], ["id", "base", "heading", i18n_2, 3, "content"], ["id", "large", "heading", i18n_4, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formGroup"], ["formControlName", "testValue1", 3, "focusable", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "readOnly", "size"], i18n_6, ["formControlName", "testValue2", 1, "tui-space_top-2", 3, "focusable", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "readOnly", "size"], i18n_8, ["formControlName", "testValue3", 1, "tui-space_top-2", 3, "focusable", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "readOnly", "size"], i18n_10, i18n_12, i18n_14, [1, "b-demo-steps"], i18n_16, ["filename", "myComponent.module.ts", 3, "code"], i18n_18, ["filename", "myComponent.component.ts", 3, "code"], i18n_20, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiCheckboxLabeledComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiCheckboxLabeledComponent_ng_template_1_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiCheckboxLabeledComponent_ng_template_2_Template, 6, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiCheckboxLabeledComponent_ng_template_3_Template, 16, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiCheckboxLabeledExample1, TuiCheckboxLabeledExample2, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, checkbox_labeled_component/* TuiCheckboxLabeledComponent */.p, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiCheckboxLabeledComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/checkbox-labeled/checkbox-labeled.module.ts













let ExampleTuiCheckboxLabeledModule = /*#__PURE__*/(() => {
  class ExampleTuiCheckboxLabeledModule {}

  ExampleTuiCheckboxLabeledModule.ɵfac = function ExampleTuiCheckboxLabeledModule_Factory(t) {
    return new (t || ExampleTuiCheckboxLabeledModule)();
  };

  ExampleTuiCheckboxLabeledModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiCheckboxLabeledModule
  });
  ExampleTuiCheckboxLabeledModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, router/* RouterModule */.Bz, ngx_markdown/* MarkdownModule */.JP, kit.TuiCheckboxLabeledModule, core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiCheckboxLabeledComponent))]]
  });
  return ExampleTuiCheckboxLabeledModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiCheckboxLabeledModule, {
    declarations: [ExampleTuiCheckboxLabeledComponent, TuiCheckboxLabeledExample1, TuiCheckboxLabeledExample2],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, router/* RouterModule */.Bz, ngx_markdown/* MarkdownModule */.JP, kit.TuiCheckboxLabeledModule, core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, inherited_documentation_module/* InheritedDocumentationModule */.f, router/* RouterModule */.Bz],
    exports: [ExampleTuiCheckboxLabeledComponent]
  });
})();

/***/ })

}]);