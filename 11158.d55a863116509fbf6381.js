"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[11158],{

/***/ 11158:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiErrorModule": () => (/* binding */ ExampleTuiErrorModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
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
// EXTERNAL MODULE: ./projects/kit/components/toggle/toggle.component.ts
var toggle_component = __webpack_require__(82535);
// EXTERNAL MODULE: ./projects/core/components/error/error.component.ts
var error_component = __webpack_require__(36951);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/error/examples/1/index.ts





let TuiErrorExample1 = /*#__PURE__*/(() => {
  class TuiErrorExample1 {
    constructor() {
      this.enabled = false;
      this.error = new cdk.TuiValidationError(`An error`);
    }

    get computedError() {
      return this.enabled ? this.error : null;
    }

  }

  TuiErrorExample1.ɵfac = function TuiErrorExample1_Factory(t) {
    return new (t || TuiErrorExample1)();
  };

  TuiErrorExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiErrorExample1,
    selectors: [["tui-error-example-1"]],
    decls: 3,
    vars: 2,
    consts: [[3, "ngModel", "ngModelChange"], [3, "error"]],
    template: function TuiErrorExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-toggle", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiErrorExample1_Template_tui_toggle_ngModelChange_0_listener($event) {
          return ctx.enabled = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(1, "Show");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-error", 1);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.enabled);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("error", ctx.computedError);
      }
    },
    directives: [toggle_component/* TuiToggleComponent */.p, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, error_component/* TuiErrorComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiErrorExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/error/error.component.ts













const _c0 = ["errorContent"];

const _c5 = function () {
  return ["/pipes/field-error"];
};

function ExampleTuiErrorComponent_ng_template_1_Template(rf, ctx) {
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
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-error-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("routerLink", fesm2015_core/* ɵɵpureFunction0 */.DdM(2, _c5));
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiErrorComponent_ng_template_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Error with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "em");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "strong");
    fesm2015_core/* ɵɵtext */._uU(3, "HTML");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiErrorComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 8);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiErrorComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-error", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiErrorComponent_ng_template_2_ng_template_2_Template, 4, 0, "ng-template", null, 6, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiErrorComponent_ng_template_2_ng_template_5_Template, 2, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiErrorComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.selectedError = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("error", ctx_r1.error);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.errorVariants)("documentationPropertyValue", ctx_r1.selectedError);
  }
}

function ExampleTuiErrorComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 9);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 10);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 13);
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

let ExampleTuiErrorComponent = /*#__PURE__*/(() => {
  class ExampleTuiErrorComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 51620).then(__webpack_require__.t.bind(__webpack_require__, 51620, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 50166).then(__webpack_require__.t.bind(__webpack_require__, 50166, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 9295).then(__webpack_require__.t.bind(__webpack_require__, 9295, 17)),
        HTML: __webpack_require__.e(/* import() */ 72729).then(__webpack_require__.t.bind(__webpack_require__, 72729, 17))
      };
      this.errorVariants = [`Error as string`, `Error as HTML content`];
      this.selectedError = this.errorVariants[0];
    }

    get error() {
      if (this.selectedError === null) {
        return null;
      }

      if (this.selectedError === this.errorVariants[0]) {
        return this.selectedError;
      }

      return new cdk.TuiValidationError(this.errorContent || ``);
    }

  }

  ExampleTuiErrorComponent.ɵfac = function ExampleTuiErrorComponent_Factory(t) {
    return new (t || ExampleTuiErrorComponent)();
  };

  ExampleTuiErrorComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiErrorComponent,
    selectors: [["example-tui-error"]],
    viewQuery: function ExampleTuiErrorComponent_Query(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵviewQuery */.Gf(_c0, 5);
      }

      if (rf & 2) {
        let _t;

        fesm2015_core/* ɵɵqueryRefresh */.iGM(_t = fesm2015_core/* ɵɵloadQuery */.CRH()) && (ctx.errorContent = _t.first);
      }
    },
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6514627498355334136$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ERROR_ERROR_COMPONENT_TS__2 = goog.getMsg("{$startTagCode}Error{$closeTagCode} allows to show an error. If you work with a form, see {$startLink}{$startTagCode}tuiFieldError{$closeTagCode}{$closeLink} . ", {
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]",
          "startLink": "\uFFFD#3\uFFFD",
          "closeLink": "\uFFFD/#3\uFFFD"
        });
        i18n_1 = MSG_EXTERNAL_6514627498355334136$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ERROR_ERROR_COMPONENT_TS__2;
      } else {
        i18n_1 = $localize`:␟e3a016b8e7670ad0631485363cf4a2807fa23877␟6514627498355334136:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:Error${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: allows to show an error. If you work with a form, see ${"\uFFFD#3\uFFFD"}:START_LINK:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:tuiFieldError${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#3\uFFFD"}:CLOSE_LINK: . `;
      }

      i18n_1 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_1);
      let i18n_3;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ERROR_ERROR_COMPONENT_TS__4 = goog.getMsg("Basic");
        i18n_3 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ERROR_ERROR_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2999611618373406443$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ERROR_ERROR_COMPONENT_TS___7 = goog.getMsg(" Active state for {$startTagCode}routerLinkActive{$closeTagCode} , for example ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_2999611618373406443$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ERROR_ERROR_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟6bb0fe2848c9231f09868951164d61899af84e77␟2999611618373406443: Active state for ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:routerLinkActive${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: , for example `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2233161597921029410$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ERROR_ERROR_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiErrorModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_2233161597921029410$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ERROR_ERROR_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟b1de08c442ae1c5128ffb30368c65f72085703ff␟2233161597921029410: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiErrorModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ERROR_ERROR_COMPONENT_TS__11 = goog.getMsg("Add to the template:");
        i18n_10 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_ERROR_ERROR_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Error", "package", "CORE", "type", "components"], ["pageTab", ""], i18n_1, ["tuiLink", "", 3, "routerLink"], ["id", "base", "heading", i18n_3, 3, "content"], [3, "error"], ["errorContent", ""], ["documentationPropertyName", "error", "documentationPropertyMode", "input", "documentationPropertyType", "TuiValidationError | string | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_6, [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.module.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiErrorComponent_ng_template_1_Template, 7, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiErrorComponent_ng_template_2_Template, 6, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiErrorComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiErrorExample1, demo_component/* TuiDocDemoComponent */.F, error_component/* TuiErrorComponent */.v, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiErrorComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/error/error.module.ts












let ExampleTuiErrorModule = /*#__PURE__*/(() => {
  class ExampleTuiErrorModule {}

  ExampleTuiErrorModule.ɵfac = function ExampleTuiErrorModule_Factory(t) {
    return new (t || ExampleTuiErrorModule)();
  };

  ExampleTuiErrorModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiErrorModule
  });
  ExampleTuiErrorModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiToggleModule, core.TuiErrorModule, core.TuiLinkModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, cdk.TuiMapperPipeModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiErrorComponent))]]
  });
  return ExampleTuiErrorModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiErrorModule, {
    declarations: [ExampleTuiErrorComponent, TuiErrorExample1],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiToggleModule, core.TuiErrorModule, core.TuiLinkModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, cdk.TuiMapperPipeModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiErrorComponent]
  });
})();

/***/ })

}]);