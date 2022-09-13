"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[50606],{

/***/ 44146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiAutoFocusModule": () => (/* binding */ ExampleTuiAutoFocusModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/cdk/directives/auto-focus/autofocus.directive.ts
var autofocus_directive = __webpack_require__(20986);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/auto-focus/examples/1/index.ts








function TuiAutoFocusExample1_tui_input_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input", 2);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiAutoFocusExample1_tui_input_2_Template_tui_input_ngModelChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r2);
      const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r1.model = $event;
    });
    fesm2015_core/* ɵɵtext */._uU(1, " Focusable tui-input\n");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx_r0.model);
  }
}

let TuiAutoFocusExample1 = /*#__PURE__*/(() => {
  class TuiAutoFocusExample1 {
    constructor() {
      this.showInput = false;
      this.model = `Focused after its appearance`;
    }

    onClick() {
      this.showInput = true;
    }

  }

  TuiAutoFocusExample1.ɵfac = function TuiAutoFocusExample1_Factory(t) {
    return new (t || TuiAutoFocusExample1)();
  };

  TuiAutoFocusExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiAutoFocusExample1,
    selectors: [["tui-auto-focus-example-1"]],
    decls: 3,
    vars: 1,
    consts: [["tuiButton", "", "type", "button", 1, "tui-space_bottom-5", 3, "click"], ["tuiAutoFocus", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["tuiAutoFocus", "", 3, "ngModel", "ngModelChange"]],
    template: function TuiAutoFocusExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiAutoFocusExample1_Template_button_click_0_listener() {
          return ctx.onClick();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Show input\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiAutoFocusExample1_tui_input_2_Template, 2, 1, "tui-input", 1);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx.showInput);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, common/* NgIf */.O5, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, autofocus_directive/* TuiAutoFocusDirective */.k, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiAutoFocusExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/auto-focus/auto-focus.component.ts







function ExampleTuiAutoFocusComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-auto-focus-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiAutoFocusComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 6);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleHtml);
  }
}

let ExampleTuiAutoFocusComponent = /*#__PURE__*/(() => {
  class ExampleTuiAutoFocusComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 41226).then(__webpack_require__.t.bind(__webpack_require__, 41226, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 55342).then(__webpack_require__.t.bind(__webpack_require__, 55342, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 12839).then(__webpack_require__.t.bind(__webpack_require__, 12839, 17)),
        HTML: __webpack_require__.e(/* import() */ 45503).then(__webpack_require__.t.bind(__webpack_require__, 45503, 17))
      };
    }

  }

  ExampleTuiAutoFocusComponent.ɵfac = function ExampleTuiAutoFocusComponent_Factory(t) {
    return new (t || ExampleTuiAutoFocusComponent)();
  };

  ExampleTuiAutoFocusComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiAutoFocusComponent,
    selectors: [["example-tui-auto-focus"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2512553398889197442$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_AUTO_FOCUS_AUTO_FOCUS_COMPONENT_TS_1 = goog.getMsg("AutoFocus");
        i18n_0 = MSG_EXTERNAL_2512553398889197442$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_AUTO_FOCUS_AUTO_FOCUS_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟f9edaaf6c41c9cded402e1e3a7d560f335226273␟2512553398889197442:AutoFocus`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_AUTO_FOCUS_AUTO_FOCUS_COMPONENT_TS_3 = goog.getMsg("Setup");
        i18n_2 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_AUTO_FOCUS_AUTO_FOCUS_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3379878611927621068$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_AUTO_FOCUS_AUTO_FOCUS_COMPONENT_TS__5 = goog.getMsg("{$startTagCode}tuiAutoFocus{$closeTagCode} allows to focus HTML-element right after its appearance. It works also with focusable Taiga UI components ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_3379878611927621068$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_AUTO_FOCUS_AUTO_FOCUS_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟4985c4f63a3ecbe11b6f78c1fcdbe92ce6c51b80␟3379878611927621068:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiAutoFocus${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows to focus HTML-element right after its appearance. It works also with focusable Taiga UI components `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_AUTO_FOCUS_AUTO_FOCUS_COMPONENT_TS__7 = goog.getMsg("Basic");
        i18n_6 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_AUTO_FOCUS_AUTO_FOCUS_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1923648485573346644$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_AUTO_FOCUS_AUTO_FOCUS_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiAutoFocus{$closeTagCode} into a module where you want to use our directive ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_1923648485573346644$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_AUTO_FOCUS_AUTO_FOCUS_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟6eb38541c615c02bbbaa2361faeb207881234045␟1923648485573346644: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiAutoFocus${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our directive `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_AUTO_FOCUS_AUTO_FOCUS_COMPONENT_TS__11 = goog.getMsg("Add to the template:");
        i18n_10 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_AUTO_FOCUS_AUTO_FOCUS_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "CDK", "type", "directives"], ["pageTab", ""], ["pageTab", i18n_2], i18n_4, ["id", "base", "heading", i18n_6, 3, "content"], [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.module.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiAutoFocusComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiAutoFocusComponent_ng_template_1_Template, 5, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiAutoFocusComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiAutoFocusExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiAutoFocusComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/auto-focus/auto-focus.module.ts











let ExampleTuiAutoFocusModule = /*#__PURE__*/(() => {
  class ExampleTuiAutoFocusModule {}

  ExampleTuiAutoFocusModule.ɵfac = function ExampleTuiAutoFocusModule_Factory(t) {
    return new (t || ExampleTuiAutoFocusModule)();
  };

  ExampleTuiAutoFocusModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiAutoFocusModule
  });
  ExampleTuiAutoFocusModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiInputModule, cdk.TuiAutoFocusModule, core.TuiButtonModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiAutoFocusComponent))]]
  });
  return ExampleTuiAutoFocusModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiAutoFocusModule, {
    declarations: [ExampleTuiAutoFocusComponent, TuiAutoFocusExample1],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiInputModule, cdk.TuiAutoFocusModule, core.TuiButtonModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiAutoFocusComponent]
  });
})();

/***/ })

}]);