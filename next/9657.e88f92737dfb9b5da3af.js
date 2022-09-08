"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[9657],{

/***/ 9657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiRequiredSetterModule": () => (/* binding */ ExampleTuiRequiredSetterModule)
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
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
;// CONCATENATED MODULE: ./projects/demo/src/modules/decorators/required-setter/required-setter-demo.component.ts





function ExampleTuiRequiredSetterDemoComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "span");
    fesm2015_core/* ɵɵtext */._uU(1, "\u2665");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

class ExampleTuiRequiredSetterDemoComponent {
  constructor() {
    this.items = [];
  }

  set quantity(quantity) {
    this.items = new Array(quantity).fill(Math.floor(Math.random() * Math.floor(100)));
  }

}

ExampleTuiRequiredSetterDemoComponent.ɵfac = function ExampleTuiRequiredSetterDemoComponent_Factory(t) {
  return new (t || ExampleTuiRequiredSetterDemoComponent)();
};

ExampleTuiRequiredSetterDemoComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: ExampleTuiRequiredSetterDemoComponent,
  selectors: [["example-tui-required-setter-demo"]],
  inputs: {
    quantity: "quantity"
  },
  decls: 1,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"]],
  template: function ExampleTuiRequiredSetterDemoComponent_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵtemplate */.YNc(0, ExampleTuiRequiredSetterDemoComponent_span_0_Template, 2, 0, "span", 0);
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.items);
    }
  },
  directives: [common/* NgForOf */.sg],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([(0,cdk.tuiRequiredSetter)(quantity => Number.isInteger(quantity) && quantity >= 5, `Should be integer number more than min value`)], ExampleTuiRequiredSetterDemoComponent.prototype, "quantity", null);
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/decorators/required-setter/required-setter.component.ts












function ExampleTuiRequiredSetterComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 3);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "div");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "example-tui-required-setter-demo", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-input-count", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function ExampleTuiRequiredSetterComponent_ng_template_1_Template_tui_input_count_ngModelChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r3.quantity = $event;
    });
    fesm2015_core/* ɵɵtext */._uU(11, " quantity ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "button", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function ExampleTuiRequiredSetterComponent_ng_template_1_Template_button_click_12_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r5.setUndefined();
    });
    fesm2015_core/* ɵɵtext */._uU(13, " Set undefined ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(9);
    fesm2015_core/* ɵɵproperty */.Q6J("quantity", ctx_r0.quantity);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx_r0.quantity);
  }
}

function ExampleTuiRequiredSetterComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 11);
  }
}

function ExampleTuiRequiredSetterComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 12);
  }
}

function ExampleTuiRequiredSetterComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 8);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiRequiredSetterComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiRequiredSetterComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiRequiredSetterComponent_ng_template_3_Template(rf, ctx) {
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
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleDecorator);
  }
}

let ExampleTuiRequiredSetterComponent = /*#__PURE__*/(() => {
  class ExampleTuiRequiredSetterComponent {
    constructor() {
      this.exampleDecorator = __webpack_require__.e(/* import() */ 92029).then(__webpack_require__.t.bind(__webpack_require__, 92029, 17));
    }

    setUndefined() {
      this.quantity = undefined;
    }

  }

  ExampleTuiRequiredSetterComponent.ɵfac = function ExampleTuiRequiredSetterComponent_Factory(t) {
    return new (t || ExampleTuiRequiredSetterComponent)();
  };

  ExampleTuiRequiredSetterComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiRequiredSetterComponent,
    selectors: [["example-tui-required-setter"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2367293663967371431$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS_1 = goog.getMsg("RequiredSetter");
        i18n_0 = MSG_EXTERNAL_2367293663967371431$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟d72935e6ff64a11259561cf6e2fd9e2038d79f56␟2367293663967371431:RequiredSetter`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2999749383994622770$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__3 = goog.getMsg("Decorator setter @Input");
        i18n_2 = MSG_EXTERNAL_2999749383994622770$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟95c1055c7445d625ddf1b130f7f49ba1f5734478␟2999749383994622770:Decorator setter @Input`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1741815834115405259$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__5 = goog.getMsg(" Decorator stops {$startTagCode}undefined{$closeTagCode} values if they were passed into setter input. If it gets {$startTagCode}undefined{$closeTagCode} , setter will not be called and it will show an error message about the problem in console in dev mode. ", {
          "startTagCode": "[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]",
          "closeTagCode": "[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"
        });
        i18n_4 = MSG_EXTERNAL_1741815834115405259$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟ad9e2bc19537c8a04f714a5a8819e12a35a46703␟1741815834115405259: Decorator stops ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:undefined${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: values if they were passed into setter input. If it gets ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:undefined${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: , setter will not be called and it will show an error message about the problem in console in dev mode. `;
      }

      i18n_4 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_4);
      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1191829810746348448$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__7 = goog.getMsg("See console. Min value is 5");
        i18n_6 = MSG_EXTERNAL_1191829810746348448$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟bbd1f9f56a2c3fe7bb73c5fd19c82bb37d867b3f␟1191829810746348448:See console. Min value is 5`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3681048247412483149$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__9 = goog.getMsg(" You can also pass contract function of type {$startTagCode}TuiBooleanHandler<T>{$closeTagCode} with the component instance as {$startTagCode}this{$closeTagCode} . If check is unsuccessful, it shows an error message about the problem in console in dev mode. ", {
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"
        });
        i18n_8 = MSG_EXTERNAL_3681048247412483149$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟a9bcea955a7d713b61905813ac19969c8b949d5a␟3681048247412483149: You can also pass contract function of type ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:TuiBooleanHandler<T>${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: with the component instance as ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:this${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: . If check is unsuccessful, it shows an error message about the problem in console in dev mode. `;
      }

      i18n_8 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_8);
      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1057939464540239635$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS___11 = goog.getMsg(" Optional argument, contract function ");
        i18n_10 = MSG_EXTERNAL_1057939464540239635$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟fe033ba03534400a884724a2300c90e5a77f568a␟1057939464540239635: Optional argument, contract function `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6460611501050052701$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS___13 = goog.getMsg(" Arguments for console.error if check is unsuccessful ");
        i18n_12 = MSG_EXTERNAL_6460611501050052701$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟ebcfa697b45b5a9b73277d1ce04941b18254fb2f␟6460611501050052701: Arguments for console.error if check is unsuccessful `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5881789180302744425$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__15 = goog.getMsg(" Add {$startTagCode}@tuiRequiredSetter{$closeTagCode} to setter input of your component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_5881789180302744425$$PROJECTS_DEMO_SRC_MODULES_DECORATORS_REQUIRED_SETTER_REQUIRED_SETTER_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟aa0c59f743ad0b0bf2fe9edaa3942733037f813b␟5881789180302744425: Add ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:@tuiRequiredSetter${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: to setter input of your component `;
      }

      return [["header", i18n_0, "package", "CDK", "path", "cdk/decorators/required-setter.ts"], ["pageTab", ""], i18n_2, i18n_4, i18n_6, [3, "quantity"], [1, "tui-space_top-4", 3, "ngModel", "ngModelChange"], ["tuiButton", "", "type", "button", 1, "tui-space_top-4", "tui-space_bottom-8", 3, "click"], i18n_8, ["documentationPropertyName", "assertion", "documentationPropertyType", "TuiBooleanHandler<T>"], ["documentationPropertyName", "args", "documentationPropertyType", "any"], i18n_10, i18n_12, [1, "b-demo-steps"], i18n_14, ["filename", "myComponent.component.ts", 3, "code"]];
    },
    template: function ExampleTuiRequiredSetterComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiRequiredSetterComponent_ng_template_1_Template, 14, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiRequiredSetterComponent_ng_template_2_Template, 7, 0, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiRequiredSetterComponent_ng_template_3_Template, 6, 1, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, ExampleTuiRequiredSetterDemoComponent, input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, button_component/* TuiButtonComponent */.v, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiRequiredSetterComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/decorators/required-setter/required-setter.module.ts










let ExampleTuiRequiredSetterModule = /*#__PURE__*/(() => {
  class ExampleTuiRequiredSetterModule {}

  ExampleTuiRequiredSetterModule.ɵfac = function ExampleTuiRequiredSetterModule_Factory(t) {
    return new (t || ExampleTuiRequiredSetterModule)();
  };

  ExampleTuiRequiredSetterModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiRequiredSetterModule
  });
  ExampleTuiRequiredSetterModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiInputCountModule, core.TuiButtonModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiRequiredSetterComponent))]]
  });
  return ExampleTuiRequiredSetterModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiRequiredSetterModule, {
    declarations: [ExampleTuiRequiredSetterComponent, ExampleTuiRequiredSetterDemoComponent],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiInputCountModule, core.TuiButtonModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiRequiredSetterComponent]
  });
})();

/***/ })

}]);