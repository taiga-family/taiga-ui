"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[50587],{

/***/ 50587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiCurrencyModule": () => (/* binding */ ExampleTuiCurrencyModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 20 modules
var addon_commerce = __webpack_require__(55970);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-commerce/pipes/currency/currency.pipe.ts
var currency_pipe = __webpack_require__(99886);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/currency/examples/1/component.ts


let TuiCurrencyExample1 = /*#__PURE__*/(() => {
  class TuiCurrencyExample1 {}

  TuiCurrencyExample1.ɵfac = function TuiCurrencyExample1_Factory(t) {
    return new (t || TuiCurrencyExample1)();
  };

  TuiCurrencyExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCurrencyExample1,
    selectors: [["tui-currency-example1"]],
    decls: 3,
    vars: 3,
    template: function TuiCurrencyExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵtext */._uU(1);
        fesm2015_core/* ɵɵpipe */.ALo(2, "tuiCurrency");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("100 ", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 1, "RUB"), "");
      }
    },
    pipes: [currency_pipe/* TuiCurrencyPipe */.i],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiCurrencyExample1;
})();
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.component.ts
var input_number_component = __webpack_require__(16753);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.directive.ts
var input_number_directive = __webpack_require__(13735);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/currency/examples/2/component.ts






let TuiCurrencyExample2 = /*#__PURE__*/(() => {
  class TuiCurrencyExample2 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue: new fesm2015_forms/* FormControl */.NI(100)
      });
    }

  }

  TuiCurrencyExample2.ɵfac = function TuiCurrencyExample2_Factory(t) {
    return new (t || TuiCurrencyExample2)();
  };

  TuiCurrencyExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCurrencyExample2,
    selectors: [["tui-currency-example2"]],
    decls: 4,
    vars: 4,
    consts: [[3, "formGroup"], ["formControlName", "testValue", 3, "postfix"]],
    template: function TuiCurrencyExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-number", 1);
        fesm2015_core/* ɵɵpipe */.ALo(2, "tuiCurrency");
        fesm2015_core/* ɵɵtext */._uU(3, " Type a sum ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("postfix", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 2, 826));
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    pipes: [currency_pipe/* TuiCurrencyPipe */.i],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiCurrencyExample2;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/currency/currency.component.ts


















function ExampleTuiCurrencyComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-currency-example1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-currency-example2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiCurrencyComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-number", 8);
    fesm2015_core/* ɵɵpipe */.ALo(1, "tuiCurrency");
    fesm2015_core/* ɵɵtext */._uU(2, " Type a sum ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("postfix", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 2, ctx_r3.currency));
  }
}

function ExampleTuiCurrencyComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 9);
  }
}

function ExampleTuiCurrencyComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-documentation");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-doc-demo", 6);
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiCurrencyComponent_ng_template_2_ng_template_2_Template, 3, 4, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiCurrencyComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCurrencyComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r5.currency = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.currencyVariants)("documentationPropertyValue", ctx_r1.currency);
  }
}

function ExampleTuiCurrencyComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 11);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 13);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 14);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiCurrencyComponent = /*#__PURE__*/(() => {
  class ExampleTuiCurrencyComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 92845).then(__webpack_require__.t.bind(__webpack_require__, 92845, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 96591).then(__webpack_require__.t.bind(__webpack_require__, 96591, 17));
      this.example1 = {
        HTML: __webpack_require__.e(/* import() */ 39152).then(__webpack_require__.t.bind(__webpack_require__, 39152, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 59982).then(__webpack_require__.t.bind(__webpack_require__, 59982, 17)),
        HTML: __webpack_require__.e(/* import() */ 85468).then(__webpack_require__.t.bind(__webpack_require__, 85468, 17))
      };
      this.currencyVariants = [null, 826, 840, `EUR`, `RUB`, `UGX`, `USD`];
      this.currency = this.currencyVariants[0];
      this.control = new fesm2015_forms/* FormControl */.NI(6432, fesm2015_forms/* Validators.required */.kI.required);
    }

  }

  ExampleTuiCurrencyComponent.ɵfac = function ExampleTuiCurrencyComponent_Factory(t) {
    return new (t || ExampleTuiCurrencyComponent)();
  };

  ExampleTuiCurrencyComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiCurrencyComponent,
    selectors: [["example-tui-currency"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__2 = goog.getMsg("Basic");
        i18n_1 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2572384218273688291$$PROJECTS_DEMO_SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__4 = goog.getMsg("With Input");
        i18n_3 = MSG_EXTERNAL_2572384218273688291$$PROJECTS_DEMO_SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟96bdc0b7f954e93557510ae70b833743c300d653␟2572384218273688291:With Input`;
      }

      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1811243633647313273$$PROJECTS_DEMO_SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__5 = goog.getMsg(" Pipe for transforming number into money. It is usually used with {$startLink}{$startTagCode}InputNumber{$closeTagCode}{$closeLink}{$startTagTuiDocExample}{$startTagTuiCurrencyExample1}{$closeTagTuiCurrencyExample1}{$closeTagTuiDocExample}{$startTagTuiDocExample_1}{$startTagTuiCurrencyExample2}{$closeTagTuiCurrencyExample2}{$closeTagTuiDocExample}", {
          "startLink": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeLink": "\uFFFD/#1\uFFFD",
          "startTagTuiDocExample": "\uFFFD#3\uFFFD",
          "startTagTuiCurrencyExample1": "\uFFFD#4\uFFFD",
          "closeTagTuiCurrencyExample1": "\uFFFD/#4\uFFFD",
          "closeTagTuiDocExample": "[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]",
          "startTagTuiDocExample_1": "\uFFFD#5\uFFFD",
          "startTagTuiCurrencyExample2": "\uFFFD#6\uFFFD",
          "closeTagTuiCurrencyExample2": "\uFFFD/#6\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_1811243633647313273$$PROJECTS_DEMO_SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__5;
      } else {
        i18n_0 = $localize`:␟c9d1e275ce56cedba8fb6c09babe88f7db78b1c9␟1811243633647313273: Pipe for transforming number into money. It is usually used with ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:InputNumber${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:${"\uFFFD#3\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#4\uFFFD"}:START_TAG_TUI_CURRENCY_EXAMPLE1:${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_TUI_CURRENCY_EXAMPLE1:${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#5\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE_1:${"\uFFFD#6\uFFFD"}:START_TAG_TUI_CURRENCY_EXAMPLE2:${"\uFFFD/#6\uFFFD"}:CLOSE_TAG_TUI_CURRENCY_EXAMPLE2:${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1951189859517522583$$PROJECTS_DEMO_SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS___7 = goog.getMsg(" Currency symbol ");
        i18n_6 = MSG_EXTERNAL_1951189859517522583$$PROJECTS_DEMO_SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟530c774891e15083e0ccaeafe4c297a539edf552␟1951189859517522583: Currency symbol `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_960347934321337844$$PROJECTS_DEMO_SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiCurrencyPipeModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_960347934321337844$$PROJECTS_DEMO_SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟1bad6b65fccb2e60efe1ce559d3436a49cf19565␟960347934321337844: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCurrencyPipeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3015667190571581067$$PROJECTS_DEMO_SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__11 = goog.getMsg("Use pipe in template with input:");
        i18n_10 = MSG_EXTERNAL_3015667190571581067$$PROJECTS_DEMO_SRC_MODULES_PIPES_CURRENCY_CURRENCY_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟0ea7f0392ec03341377efee339ad5f8d8de0d93d␟3015667190571581067:Use pipe in template with input:`;
      }

      return [["header", "Currency", "package", "ADDON-COMMERCE", "path", "addon-commerce/pipes/currency.pipe.ts"], ["pageTab", ""], i18n_0, ["tuiLink", "", "routerLink", "/components/input-number"], ["id", "base", "heading", i18n_1, 3, "content"], ["id", "withInput", "heading", i18n_3, 3, "content"], [3, "control"], ["documentationPropertyName", "currency", "documentationPropertyMode", "input", "documentationPropertyType", "TuiCurrencyVariants", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formControl", "postfix"], i18n_6, [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.module.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiCurrencyComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiCurrencyComponent_ng_template_1_Template, 7, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiCurrencyComponent_ng_template_2_Template, 4, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiCurrencyComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiCurrencyExample1, TuiCurrencyExample2, documentation_component/* TuiDocDocumentationComponent */.z, demo_component/* TuiDocDemoComponent */.F, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, code_component/* TuiDocCodeComponent */.c],
    pipes: [currency_pipe/* TuiCurrencyPipe */.i],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiCurrencyComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/currency/currency.module.ts












let ExampleTuiCurrencyModule = /*#__PURE__*/(() => {
  class ExampleTuiCurrencyModule {}

  ExampleTuiCurrencyModule.ɵfac = function ExampleTuiCurrencyModule_Factory(t) {
    return new (t || ExampleTuiCurrencyModule)();
  };

  ExampleTuiCurrencyModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiCurrencyModule
  });
  ExampleTuiCurrencyModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[addon_commerce/* TuiCurrencyPipeModule */.wc, kit/* TuiInputNumberModule */._Hh, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, addon_commerce/* TuiMoneyModule */.DC, core/* TuiLinkModule */.jzK, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiCurrencyComponent))]]
  });
  return ExampleTuiCurrencyModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiCurrencyModule, {
    declarations: [ExampleTuiCurrencyComponent, TuiCurrencyExample2, TuiCurrencyExample1],
    imports: [addon_commerce/* TuiCurrencyPipeModule */.wc, kit/* TuiInputNumberModule */._Hh, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, addon_commerce/* TuiMoneyModule */.DC, core/* TuiLinkModule */.jzK, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiCurrencyComponent]
  });
})();

/***/ })

}]);