"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[25892],{

/***/ 25892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiDefaultPropModule": () => (/* binding */ ExampleTuiDefaultPropModule)
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
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
;// CONCATENATED MODULE: ./projects/demo/src/modules/decorators/default-prop/default-prop-demo.component.ts



class ExampleTuiDefaultPropDemoComponent {
  constructor() {
    this.quantity = 10;
  }

}

ExampleTuiDefaultPropDemoComponent.ɵfac = function ExampleTuiDefaultPropDemoComponent_Factory(t) {
  return new (t || ExampleTuiDefaultPropDemoComponent)();
};

ExampleTuiDefaultPropDemoComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: ExampleTuiDefaultPropDemoComponent,
  selectors: [["example-tui-default-prop-demo"]],
  inputs: {
    quantity: "quantity"
  },
  decls: 1,
  vars: 1,
  template: function ExampleTuiDefaultPropDemoComponent_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵtext */._uU(0);
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵtextInterpolate1 */.hij(" Value: ", ctx.quantity, " ");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([(0,cdk.tuiDefaultProp)(quantity => Number.isInteger(quantity) && quantity >= 5, `Should be integer number more than min value`)], ExampleTuiDefaultPropDemoComponent.prototype, "quantity", void 0);
// EXTERNAL MODULE: ./projects/kit/components/input-count/input-count.component.ts
var input_count_component = __webpack_require__(65009);
// EXTERNAL MODULE: ./projects/kit/components/input-count/input-count.directive.ts
var input_count_directive = __webpack_require__(10383);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/decorators/default-prop/default-prop.component.ts














const _c12 = function () {
  return ["/decorators/required-setter"];
};

function ExampleTuiDefaultPropComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 2);
    fesm2015_core/* ɵɵi18nStart */.tHW(4, 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(7, 5);
    fesm2015_core/* ɵɵelement */._UZ(8, "code");
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "div");
    fesm2015_core/* ɵɵi18nStart */.tHW(11, 6);
    fesm2015_core/* ɵɵelement */._UZ(12, "a", 7);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "div");
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "p");
    fesm2015_core/* ɵɵi18n */.SDv(15, 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(16, "example-tui-default-prop-demo", 9);
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "tui-input-count", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function ExampleTuiDefaultPropComponent_ng_template_1_Template_tui_input_count_ngModelChange_17_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r3.quantity = $event;
    });
    fesm2015_core/* ɵɵtext */._uU(18, " quantity ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "button", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiDefaultPropComponent_ng_template_1_Template_button_click_19_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r5.setUndefined();
    });
    fesm2015_core/* ɵɵtext */._uU(20, " Set undefined ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(12);
    fesm2015_core/* ɵɵproperty */.Q6J("routerLink", fesm2015_core/* ɵɵpureFunction0 */.DdM(3, _c12));
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("quantity", ctx_r0.quantity);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx_r0.quantity);
  }
}

function ExampleTuiDefaultPropComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiDefaultPropComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiDefaultPropComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 12);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiDefaultPropComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiDefaultPropComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiDefaultPropComponent_ng_template_3_Template(rf, ctx) {
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
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleDecorator);
  }
}

let ExampleTuiDefaultPropComponent = /*#__PURE__*/(() => {
  class ExampleTuiDefaultPropComponent {
    constructor() {
      this.exampleDecorator = __webpack_require__.e(/* import() */ 49317).then(__webpack_require__.t.bind(__webpack_require__, 49317, 17));
      this.quantity = 10;
    }

    setUndefined() {
      this.quantity = undefined;
    }

  }

  ExampleTuiDefaultPropComponent.ɵfac = function ExampleTuiDefaultPropComponent_Factory(t) {
    return new (t || ExampleTuiDefaultPropComponent)();
  };

  ExampleTuiDefaultPropComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiDefaultPropComponent,
    selectors: [["example-tui-default-prop"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_522844369784178860$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS_1 = goog.getMsg("DefaultProp");
        i18n_0 = MSG_EXTERNAL_522844369784178860$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟bd478366cc63c9ccb5b3e92f86050c481b7591b5␟522844369784178860:DefaultProp`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7864857168300771288$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__3 = goog.getMsg(" Decorator for {$startTagCode}@Input{$closeTagCode} with default value ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_7864857168300771288$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟b479593d371922844693f61ecc8c2d2c83095263␟7864857168300771288: Decorator for ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:@Input${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: with default value `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_513026917173447768$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__5 = goog.getMsg("{$startTagStrong}Warning:{$closeTagStrong} decorator overrides getter/setter of input ", {
          "startTagStrong": "\uFFFD#5\uFFFD",
          "closeTagStrong": "\uFFFD/#5\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_513026917173447768$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟1a3f8851a234dde79761d6a9557bf35119e641f5␟513026917173447768:${"\uFFFD#5\uFFFD"}:START_TAG_STRONG:Warning:${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_STRONG: decorator overrides getter/setter of input `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1154495950552112516$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__7 = goog.getMsg(" Decorator stops {$startTagCode}undefined{$closeTagCode} values if they were passed into input. If it gets {$startTagCode}undefined{$closeTagCode} , it will use default value and show an error message about the problem in console in dev mode. ", {
          "startTagCode": "[\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]",
          "closeTagCode": "[\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]"
        });
        i18n_6 = MSG_EXTERNAL_1154495950552112516$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟fba6b15cd88a236beca1ec53bf2c1ab833c2708d␟1154495950552112516: Decorator stops ${"[\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:undefined${"[\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE: values if they were passed into input. If it gets ${"[\uFFFD#8\uFFFD|\uFFFD#9\uFFFD]"}:START_TAG_CODE:undefined${"[\uFFFD/#8\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_TAG_CODE: , it will use default value and show an error message about the problem in console in dev mode. `;
      }

      i18n_6 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_6);
      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8401742800971685051$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__9 = goog.getMsg(" See {$startLink} RequiredSetter {$closeLink} for work with setters ", {
          "startLink": "\uFFFD#12\uFFFD",
          "closeLink": "\uFFFD/#12\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_8401742800971685051$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟1966746bf1c3090742685460bf263070f01e6d1b␟8401742800971685051: See ${"\uFFFD#12\uFFFD"}:START_LINK: RequiredSetter ${"\uFFFD/#12\uFFFD"}:CLOSE_LINK: for work with setters `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1191829810746348448$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__11 = goog.getMsg("See console. Min value is 5");
        i18n_10 = MSG_EXTERNAL_1191829810746348448$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟bbd1f9f56a2c3fe7bb73c5fd19c82bb37d867b3f␟1191829810746348448:See console. Min value is 5`;
      }

      let i18n_13;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3681048247412483149$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__14 = goog.getMsg(" You can also pass contract function of type {$startTagCode}TuiBooleanHandler<T>{$closeTagCode} with the component instance as {$startTagCode}this{$closeTagCode} . If check is unsuccessful, it shows an error message about the problem in console in dev mode. ", {
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"
        });
        i18n_13 = MSG_EXTERNAL_3681048247412483149$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__14;
      } else {
        i18n_13 = $localize`:␟a9bcea955a7d713b61905813ac19969c8b949d5a␟3681048247412483149: You can also pass contract function of type ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:TuiBooleanHandler<T>${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: with the component instance as ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:this${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: . If check is unsuccessful, it shows an error message about the problem in console in dev mode. `;
      }

      i18n_13 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_13);
      let i18n_15;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1057939464540239635$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS___16 = goog.getMsg(" Optional argument, contract function ");
        i18n_15 = MSG_EXTERNAL_1057939464540239635$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS___16;
      } else {
        i18n_15 = $localize`:␟fe033ba03534400a884724a2300c90e5a77f568a␟1057939464540239635: Optional argument, contract function `;
      }

      let i18n_17;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6460611501050052701$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS___18 = goog.getMsg(" Arguments for console.error if check is unsuccessful ");
        i18n_17 = MSG_EXTERNAL_6460611501050052701$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS___18;
      } else {
        i18n_17 = $localize`:␟ebcfa697b45b5a9b73277d1ce04941b18254fb2f␟6460611501050052701: Arguments for console.error if check is unsuccessful `;
      }

      let i18n_19;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5682654845346006339$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__20 = goog.getMsg(" Add {$startTagCode}@tuiDefaultProp{$closeTagCode} to input of your component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_19 = MSG_EXTERNAL_5682654845346006339$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_DEFAULT_PROP_DEFAULT_PROP_COMPONENT_TS__20;
      } else {
        i18n_19 = $localize`:␟70fdf68f9880c2f40203f1ff7fe9c47e379498b9␟5682654845346006339: Add ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:@tuiDefaultProp${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: to input of your component `;
      }

      return [["header", i18n_0, "package", "CDK", "path", "cdk/decorators/default-prop.ts"], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_2, i18n_4, i18n_6, i18n_8, ["tuiLink", "", 3, "routerLink"], i18n_10, [3, "quantity"], [1, "tui-space_top-4", 3, "ngModel", "ngModelChange"], ["tuiButton", "", "type", "button", 1, "tui-space_top-4", "tui-space_bottom-8", 3, "click"], i18n_13, ["documentationPropertyName", "assertion", "documentationPropertyType", "TuiBooleanHandler<T>"], ["documentationPropertyName", "args", "documentationPropertyType", "any"], i18n_15, i18n_17, [1, "b-demo-steps"], i18n_19, ["filename", "myComponent.component.ts", 3, "code"]];
    },
    template: function ExampleTuiDefaultPropComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiDefaultPropComponent_ng_template_1_Template, 21, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiDefaultPropComponent_ng_template_2_Template, 7, 0, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiDefaultPropComponent_ng_template_3_Template, 6, 1, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, ExampleTuiDefaultPropDemoComponent, input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, button_component/* TuiButtonComponent */.v, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiDefaultPropComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/decorators/default-prop/default-prop.module.ts










let ExampleTuiDefaultPropModule = /*#__PURE__*/(() => {
  class ExampleTuiDefaultPropModule {}

  ExampleTuiDefaultPropModule.ɵfac = function ExampleTuiDefaultPropModule_Factory(t) {
    return new (t || ExampleTuiDefaultPropModule)();
  };

  ExampleTuiDefaultPropModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiDefaultPropModule
  });
  ExampleTuiDefaultPropModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, core.TuiLinkModule, kit.TuiInputCountModule, core.TuiButtonModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiDefaultPropComponent))]]
  });
  return ExampleTuiDefaultPropModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiDefaultPropModule, {
    declarations: [ExampleTuiDefaultPropComponent, ExampleTuiDefaultPropDemoComponent],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, core.TuiLinkModule, kit.TuiInputCountModule, core.TuiButtonModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiDefaultPropComponent]
  });
})();

/***/ })

}]);