"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[97466],{

/***/ 97466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiFormatNumberModule": () => (/* binding */ ExampleTuiFormatNumberModule)
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
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/pipes/format-number/format-number.pipe.ts
var format_number_pipe = __webpack_require__(59544);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/format-number/examples/1/index.ts



const _c0 = function () {
  return {
    decimalLimit: 4,
    decimalSeparator: "."
  };
};

let TuiFormatNumberExample1 = /*#__PURE__*/(() => {
  class TuiFormatNumberExample1 {}

  TuiFormatNumberExample1.ɵfac = function TuiFormatNumberExample1_Factory(t) {
    return new (t || TuiFormatNumberExample1)();
  };

  TuiFormatNumberExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFormatNumberExample1,
    selectors: [["tui-format-number-example-1"]],
    decls: 6,
    vars: 8,
    template: function TuiFormatNumberExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵtext */._uU(1);
        fesm2015_core/* ɵɵpipe */.ALo(2, "tuiFormatNumber");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
        fesm2015_core/* ɵɵtext */._uU(4);
        fesm2015_core/* ɵɵpipe */.ALo(5, "tuiFormatNumber");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Formatted number by default: ", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 2, 10500.33), "");
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Formatted number with custom params: ", fesm2015_core/* ɵɵpipeBind2 */.xi3(5, 4, 10500.33, fesm2015_core/* ɵɵpureFunction0 */.DdM(7, _c0)), "");
      }
    },
    pipes: [format_number_pipe/* TuiFormatNumberPipe */.m],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiFormatNumberExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/kit/components/input-slider/input-slider.component.ts
var input_slider_component = __webpack_require__(44056);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/format-number/format-number.component.ts















function ExampleTuiFormatNumberComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 3);
    fesm2015_core/* ɵɵelement */._UZ(4, "a", 4);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-format-number-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiFormatNumberComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 11);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiFormatNumberComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 12);
  }
}

const _c12 = function (a0, a1) {
  return {
    decimalLimit: a0,
    decimalSeparator: a1
  };
};

function ExampleTuiFormatNumberComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p", 6);
    fesm2015_core/* ɵɵi18n */.SDv(1, 7);
    fesm2015_core/* ɵɵpipe */.ALo(2, "tuiFormatNumber");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-input-slider", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function ExampleTuiFormatNumberComponent_ng_template_2_Template_tui_input_slider_ngModelChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r5.value = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiFormatNumberComponent_ng_template_2_ng_template_5_Template, 2, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiFormatNumberComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.decimalLimit = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiFormatNumberComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiFormatNumberComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r6);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.decimalSeparator = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵi18nExp */.pQV(fesm2015_core/* ɵɵpipeBind2 */.xi3(2, 8, ctx_r1.value, fesm2015_core/* ɵɵpureFunction2 */.WLB(11, _c12, ctx_r1.decimalLimit, ctx_r1.decimalSeparator)));
    fesm2015_core/* ɵɵi18nApply */.QtT(1);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("max", 10000000)("quantum", 0.111)("ngModel", ctx_r1.value);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.decimalLimitVariants)("documentationPropertyValue", ctx_r1.decimalLimit);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.decimalSeparatorVariants)("documentationPropertyValue", ctx_r1.decimalSeparator);
  }
}

function ExampleTuiFormatNumberComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 13);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 14);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 16);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 17);
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

let ExampleTuiFormatNumberComponent = /*#__PURE__*/(() => {
  class ExampleTuiFormatNumberComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 59969).then(__webpack_require__.t.bind(__webpack_require__, 59969, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 29178).then(__webpack_require__.t.bind(__webpack_require__, 29178, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 46844).then(__webpack_require__.t.bind(__webpack_require__, 46844, 17)),
        HTML: __webpack_require__.e(/* import() */ 48364).then(__webpack_require__.t.bind(__webpack_require__, 48364, 17))
      };
      this.value = 100;
      this.decimalLimitVariants = [Infinity, 0, 2, 4];
      this.decimalLimit = this.decimalLimitVariants[0];
      this.decimalSeparatorVariants = [`,`, `.`];
      this.decimalSeparator = this.decimalSeparatorVariants[0];
    }

  }

  ExampleTuiFormatNumberComponent.ɵfac = function ExampleTuiFormatNumberComponent_Factory(t) {
    return new (t || ExampleTuiFormatNumberComponent)();
  };

  ExampleTuiFormatNumberComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiFormatNumberComponent,
    selectors: [["example-tui-format-number"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4562263761854336809$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_NUMBER_FORMAT_NUMBER_COMPONENT_TS__1 = goog.getMsg("Pipe to format number values to separate thousands");
        i18n_0 = MSG_EXTERNAL_4562263761854336809$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_NUMBER_FORMAT_NUMBER_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟799bc21ea304574853b3a233c5fd7ade5ceb99f7␟4562263761854336809:Pipe to format number values to separate thousands`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6882510303030671599$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_NUMBER_FORMAT_NUMBER_COMPONENT_TS__3 = goog.getMsg(" Number formatting can be customized by using {$startLink} TUI_NUMBER_FORMAT {$closeLink}", {
          "startLink": "\uFFFD#4\uFFFD",
          "closeLink": "\uFFFD/#4\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_6882510303030671599$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_NUMBER_FORMAT_NUMBER_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟0e557432cc61605fc75bbddcf8b886ac4208be05␟6882510303030671599: Number formatting can be customized by using ${"\uFFFD#4\uFFFD"}:START_LINK: TUI_NUMBER_FORMAT ${"\uFFFD/#4\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_NUMBER_FORMAT_NUMBER_COMPONENT_TS__5 = goog.getMsg("Basic");
        i18n_4 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_NUMBER_FORMAT_NUMBER_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5203036668026514104$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_NUMBER_FORMAT_NUMBER_COMPONENT_TS__7 = goog.getMsg(" Formatted number: {$interpolation} ", {
          "interpolation": "\uFFFD0\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_5203036668026514104$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_NUMBER_FORMAT_NUMBER_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟13966cc749bf97a726355e70fb635c28565a816e␟5203036668026514104: Formatted number: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6225995838899144330$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_NUMBER_FORMAT_NUMBER_COMPONENT_TS___9 = goog.getMsg(" Digits after comma (use {$startTagCode}Infinity{$closeTagCode} not to change) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_6225995838899144330$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_NUMBER_FORMAT_NUMBER_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟7dfdba37d1e5f090c416c52a0927a8de9065d4b4␟6225995838899144330: Digits after comma (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:Infinity${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: not to change) `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_588884307384509273$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_NUMBER_FORMAT_NUMBER_COMPONENT_TS___11 = goog.getMsg(" Symbol for separating fraction ");
        i18n_10 = MSG_EXTERNAL_588884307384509273$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_NUMBER_FORMAT_NUMBER_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟66eb6cf6218c547a2ec9635a00ef187009e46892␟588884307384509273: Symbol for separating fraction `;
      }

      let i18n_13;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7595756697964133663$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_NUMBER_FORMAT_NUMBER_COMPONENT_TS__14 = goog.getMsg(" Import {$startTagCode}TuiFormatNumberPipeModule{$closeTagCode} into a module where you want to use the pipe ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_13 = MSG_EXTERNAL_7595756697964133663$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_NUMBER_FORMAT_NUMBER_COMPONENT_TS__14;
      } else {
        i18n_13 = $localize`:␟78c5ee781dca88ea4f05da2afe94a39a90c0b0a4␟7595756697964133663: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiFormatNumberPipeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use the pipe `;
      }

      let i18n_15;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1250387402385487280$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_NUMBER_FORMAT_NUMBER_COMPONENT_TS__16 = goog.getMsg("Use pipe in template with function and its arguments:");
        i18n_15 = MSG_EXTERNAL_1250387402385487280$$PROJECTS_DEMO_SRC_MODULES_PIPES_FORMAT_NUMBER_FORMAT_NUMBER_COMPONENT_TS__16;
      } else {
        i18n_15 = $localize`:␟6ef7ff8ead6f93c0fac4fb8403f5069f4439cc57␟1250387402385487280:Use pipe in template with function and its arguments:`;
      }

      return [["header", "FormatNumber", "package", "CORE", "type", "pipes"], ["pageTab", ""], i18n_0, i18n_2, ["tuiLink", "", "routerLink", "/utils/tokens", "fragment", "number-format"], ["id", "base", "heading", i18n_4, 3, "content"], [1, "text", "b-full-width"], i18n_6, ["tuiTextfieldSize", "m", 1, "slider", 3, "max", "quantum", "ngModel", "ngModelChange"], ["documentationPropertyName", "decimalLimit", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "decimalSeparator", "documentationPropertyType", "TuiDecimalSymbol", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_8, i18n_10, [1, "b-demo-steps"], i18n_13, ["filename", "myComponent.module.ts", 3, "code"], i18n_15, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiFormatNumberComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiFormatNumberComponent_ng_template_1_Template, 7, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiFormatNumberComponent_ng_template_2_Template, 7, 14, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiFormatNumberComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiFormatNumberExample1, input_slider_component/* TuiInputSliderComponent */.h, textfield_size_directive/* TuiTextfieldSizeDirective */.s, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    pipes: [format_number_pipe/* TuiFormatNumberPipe */.m],
    styles: [".text[_ngcontent-%COMP%]{font-size:1.1875rem}.slider[_ngcontent-%COMP%]{margin-top:.75rem;width:9.375rem}"],
    changeDetection: 0
  });
  return ExampleTuiFormatNumberComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/pipes/format-number/format-number.module.ts










let ExampleTuiFormatNumberModule = /*#__PURE__*/(() => {
  class ExampleTuiFormatNumberModule {}

  ExampleTuiFormatNumberModule.ɵfac = function ExampleTuiFormatNumberModule_Factory(t) {
    return new (t || ExampleTuiFormatNumberModule)();
  };

  ExampleTuiFormatNumberModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiFormatNumberModule
  });
  ExampleTuiFormatNumberModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[core.TuiFormatNumberPipeModule, kit.TuiInputSliderModule, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, kit.TuiRadioListModule, public_api/* TuiAddonDocModule */.fV, core.TuiLinkModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiFormatNumberComponent)), core.TuiTextfieldControllerModule]]
  });
  return ExampleTuiFormatNumberModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiFormatNumberModule, {
    declarations: [ExampleTuiFormatNumberComponent, TuiFormatNumberExample1],
    imports: [core.TuiFormatNumberPipeModule, kit.TuiInputSliderModule, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, kit.TuiRadioListModule, public_api/* TuiAddonDocModule */.fV, core.TuiLinkModule, router/* RouterModule */.Bz, core.TuiTextfieldControllerModule],
    exports: [ExampleTuiFormatNumberComponent]
  });
})();

/***/ })

}]);