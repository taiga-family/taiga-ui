"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[47686],{

/***/ 47686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiModeModule": () => (/* binding */ ExampleTuiModeModule)
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
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/directives/mode/mode.directive.ts
var mode_directive = __webpack_require__(30644);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/kit/components/toggle/toggle.component.ts
var toggle_component = __webpack_require__(82535);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.component.ts
var input_number_component = __webpack_require__(16753);
// EXTERNAL MODULE: ./projects/kit/components/input-number/input-number.directive.ts
var input_number_directive = __webpack_require__(13735);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/mode/examples/1/index.ts








let TuiModeExample1 = /*#__PURE__*/(() => {
  class TuiModeExample1 {
    constructor() {
      this.toggle = false;
      this.text = ``;
      this.money = 237;
    }

  }

  TuiModeExample1.ɵfac = function TuiModeExample1_Factory(t) {
    return new (t || TuiModeExample1)();
  };

  TuiModeExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiModeExample1,
    selectors: [["tui-mode-example-1"]],
    decls: 18,
    vars: 7,
    consts: [["tuiMode", "onDark", 1, "dark"], [3, "ngModel", "ngModelChange"], [1, "light", 3, "tuiMode"]],
    template: function TuiModeExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-input", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiModeExample1_Template_tui_input_ngModelChange_2_listener($event) {
          return ctx.text = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(3, "Text");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-toggle", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiModeExample1_Template_tui_toggle_ngModelChange_5_listener($event) {
          return ctx.toggle = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-input-number", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiModeExample1_Template_tui_input_number_ngModelChange_7_listener($event) {
          return ctx.money = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(8, "Sum");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-input", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiModeExample1_Template_tui_input_ngModelChange_11_listener($event) {
          return ctx.text = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(12, "Text");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-toggle", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiModeExample1_Template_tui_toggle_ngModelChange_14_listener($event) {
          return ctx.toggle = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-input-number", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiModeExample1_Template_tui_input_number_ngModelChange_16_listener($event) {
          return ctx.money = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(17, "Sum");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.text);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.toggle);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.money);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiMode", null);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.text);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.toggle);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.money);
      }
    },
    directives: [mode_directive/* TuiModeDirective */.w, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, toggle_component/* TuiToggleComponent */.p, input_number_component/* TuiInputNumberComponent */.q, input_number_directive/* TuiInputNumberDirective */.g],
    styles: [".dark[_ngcontent-%COMP%]{width:18.75rem;padding:.625rem 1.25rem 1.25rem;background:#454e58;border-radius:.25rem}.light[_ngcontent-%COMP%]{padding:.625rem 1.25rem;background:var(--tui-base-01);border-radius:.25rem}"],
    changeDetection: 0
  });
  return TuiModeExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/mode/mode.component.ts







function ExampleTuiModeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-mode-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiModeComponent_ng_template_2_Template(rf, ctx) {
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

let ExampleTuiModeComponent = /*#__PURE__*/(() => {
  class ExampleTuiModeComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 43798).then(__webpack_require__.t.bind(__webpack_require__, 43798, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 15599).then(__webpack_require__.t.bind(__webpack_require__, 15599, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 78146).then(__webpack_require__.t.bind(__webpack_require__, 78146, 17)),
        HTML: __webpack_require__.e(/* import() */ 15934).then(__webpack_require__.t.bind(__webpack_require__, 15934, 17)),
        LESS: __webpack_require__.e(/* import() */ 97416).then(__webpack_require__.t.bind(__webpack_require__, 97416, 17))
      };
    }

  }

  ExampleTuiModeComponent.ɵfac = function ExampleTuiModeComponent_Factory(t) {
    return new (t || ExampleTuiModeComponent)();
  };

  ExampleTuiModeComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiModeComponent,
    selectors: [["example-tui-mode"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1713271461473302108$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MODE_MODE_COMPONENT_TS_1 = goog.getMsg("Mode");
        i18n_0 = MSG_EXTERNAL_1713271461473302108$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MODE_MODE_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟37e10df2d9c0c25ef04ac112c9c9a7723e8efae0␟1713271461473302108:Mode`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5879191733669304166$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MODE_MODE_COMPONENT_TS__3 = goog.getMsg("{$startTagCode}tuiMode{$closeTagCode} allows to set style for a scope of interface ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_5879191733669304166$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MODE_MODE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟039bf11a5a93f248fcc126d926bcd7d356da4f0b␟5879191733669304166:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiMode${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows to set style for a scope of interface `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MODE_MODE_COMPONENT_TS__5 = goog.getMsg("Basic");
        i18n_4 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MODE_MODE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7433968950430021885$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MODE_MODE_COMPONENT_TS__7 = goog.getMsg(" Import {$startTagCode}TuiModeModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_7433968950430021885$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MODE_MODE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟eae1cb555dd60174d960d49b2ff5d977a0c52269␟7433968950430021885: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiModeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MODE_MODE_COMPONENT_TS__9 = goog.getMsg("Add to the template:");
        i18n_8 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_MODE_MODE_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "CORE", "type", "directives"], ["pageTab", ""], ["pageTab", "Setup"], i18n_2, ["id", "base", "heading", i18n_4, 3, "content"], [1, "b-demo-steps"], i18n_6, ["filename", "myComponent.module.ts", 3, "code"], i18n_8, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiModeComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiModeComponent_ng_template_1_Template, 5, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiModeComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiModeExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiModeComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/mode/mode.module.ts










let ExampleTuiModeModule = /*#__PURE__*/(() => {
  class ExampleTuiModeModule {}

  ExampleTuiModeModule.ɵfac = function ExampleTuiModeModule_Factory(t) {
    return new (t || ExampleTuiModeModule)();
  };

  ExampleTuiModeModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiModeModule
  });
  ExampleTuiModeModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, core/* TuiModeModule */.zw7, kit/* TuiInputModule */.QfL, kit/* TuiToggleModule */.YMv, kit/* TuiInputNumberModule */._Hh, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiModeComponent))]]
  });
  return ExampleTuiModeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiModeModule, {
    declarations: [ExampleTuiModeComponent, TuiModeExample1],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, core/* TuiModeModule */.zw7, kit/* TuiInputModule */.QfL, kit/* TuiToggleModule */.YMv, kit/* TuiInputNumberModule */._Hh, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiModeComponent]
  });
})();

/***/ })

}]);