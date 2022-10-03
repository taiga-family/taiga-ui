"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[61738],{

/***/ 61738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiHighlightModule": () => (/* binding */ ExampleTuiHighlightModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-icon-left.directive.ts
var textfield_icon_left_directive = __webpack_require__(3729);
// EXTERNAL MODULE: ./projects/kit/directives/highlight/highlight.directive.ts
var highlight_directive = __webpack_require__(14254);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/highlight/examples/1/index.ts








function TuiHighlightExample1_tr_12_td_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "td", 4);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const cell_r3 = ctx.$implicit;
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("tuiHighlight", ctx_r2.search)("tuiHighlightColor", "#228B22");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", cell_r3, " ");
  }
}

function TuiHighlightExample1_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tr");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiHighlightExample1_tr_12_td_1_Template, 2, 3, "td", 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const row_r1 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", row_r1);
  }
}

let TuiHighlightExample1 = /*#__PURE__*/(() => {
  class TuiHighlightExample1 {
    constructor() {
      this.search = ``;
      this.rows = [[`King Arthur`, `-`, `Arrested`], [`Sir Bedevere`, `The Wise`, `Arrested`], [`Sir Lancelot`, `The Brave`, `Arrested`], [`Sir Galahad`, `The Chaste`, `Killed`], [`Sir Robin`, `The Not-Quite-So-Brave-As-Sir-Lancelot`, `Killed`]];
    }

  }

  TuiHighlightExample1.ɵfac = function TuiHighlightExample1_Factory(t) {
    return new (t || TuiHighlightExample1)();
  };

  TuiHighlightExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiHighlightExample1,
    selectors: [["tui-highlight-example-1"]],
    decls: 13,
    vars: 2,
    consts: [["tuiTextfieldIconLeft", "tuiIconSearchLarge", 3, "ngModel", "ngModelChange"], [1, "tui-space_top-4"], [4, "ngFor", "ngForOf"], [3, "tuiHighlight", "tuiHighlightColor", 4, "ngFor", "ngForOf"], [3, "tuiHighlight", "tuiHighlightColor"]],
    template: function TuiHighlightExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiHighlightExample1_Template_tui_input_ngModelChange_0_listener($event) {
          return ctx.search = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Search\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "table", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "thead");
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tr");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "th");
        fesm2015_core/* ɵɵtext */._uU(6, "Member");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "th");
        fesm2015_core/* ɵɵtext */._uU(8, "Nickname");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "th");
        fesm2015_core/* ɵɵtext */._uU(10, "Fate");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "tbody");
        fesm2015_core/* ɵɵtemplate */.YNc(12, TuiHighlightExample1_tr_12_Template, 2, 1, "tr", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.search);
        fesm2015_core/* ɵɵadvance */.xp6(12);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.rows);
      }
    },
    directives: [input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, common/* NgForOf */.sg, highlight_directive/* TuiHighlightDirective */.h],
    styles: ["[_nghost-%COMP%]{display:block}table[_ngcontent-%COMP%]{width:100%;border-spacing:0}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:left;border:1px solid var(--tui-base-03);height:3.375rem;padding:0 1rem;vertical-align:middle}"],
    changeDetection: 0
  });
  return TuiHighlightExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/highlight/highlight.component.ts







function ExampleTuiHighlightComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-highlight-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiHighlightComponent_ng_template_2_Template(rf, ctx) {
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

let ExampleTuiHighlightComponent = /*#__PURE__*/(() => {
  class ExampleTuiHighlightComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 6688).then(__webpack_require__.t.bind(__webpack_require__, 6688, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 93041).then(__webpack_require__.t.bind(__webpack_require__, 93041, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 43881).then(__webpack_require__.t.bind(__webpack_require__, 43881, 17)),
        HTML: __webpack_require__.e(/* import() */ 69169).then(__webpack_require__.t.bind(__webpack_require__, 69169, 17))
      };
    }

  }

  ExampleTuiHighlightComponent.ɵfac = function ExampleTuiHighlightComponent_Factory(t) {
    return new (t || ExampleTuiHighlightComponent)();
  };

  ExampleTuiHighlightComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiHighlightComponent,
    selectors: [["example-tui-highlight"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5599513168032987944$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HIGHLIGHT_HIGHLIGHT_COMPONENT_TS_1 = goog.getMsg("Highlight");
        i18n_0 = MSG_EXTERNAL_5599513168032987944$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HIGHLIGHT_HIGHLIGHT_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟f185e98087502de76b6894bce571f8a70fb14c60␟5599513168032987944:Highlight`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HIGHLIGHT_HIGHLIGHT_COMPONENT_TS_3 = goog.getMsg("Setup");
        i18n_2 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HIGHLIGHT_HIGHLIGHT_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6078176785282218457$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HIGHLIGHT_HIGHLIGHT_COMPONENT_TS__5 = goog.getMsg("Directive is used to highlight text in element");
        i18n_4 = MSG_EXTERNAL_6078176785282218457$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HIGHLIGHT_HIGHLIGHT_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟ba57b44204882c051ec334109d721a4f82a4eb57␟6078176785282218457:Directive is used to highlight text in element`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HIGHLIGHT_HIGHLIGHT_COMPONENT_TS__7 = goog.getMsg("Usage");
        i18n_6 = MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HIGHLIGHT_HIGHLIGHT_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3652169362443248523$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HIGHLIGHT_HIGHLIGHT_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiHighlightModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_3652169362443248523$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HIGHLIGHT_HIGHLIGHT_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟7ce73655df793475720be734e146f4528dfd6e14␟3652169362443248523: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiHighlightModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HIGHLIGHT_HIGHLIGHT_COMPONENT_TS__11 = goog.getMsg("Add to the template:");
        i18n_10 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_HIGHLIGHT_HIGHLIGHT_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "KIT", "type", "directives"], ["pageTab", ""], ["pageTab", i18n_2], i18n_4, ["id", "usage", "heading", i18n_6, 3, "content"], [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.module.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiHighlightComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiHighlightComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiHighlightComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiHighlightExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiHighlightComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/highlight/highlight.module.ts










let ExampleTuiHighlightModule = /*#__PURE__*/(() => {
  class ExampleTuiHighlightModule {}

  ExampleTuiHighlightModule.ɵfac = function ExampleTuiHighlightModule_Factory(t) {
    return new (t || ExampleTuiHighlightModule)();
  };

  ExampleTuiHighlightModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiHighlightModule
  });
  ExampleTuiHighlightModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiInputModule, kit.TuiHighlightModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiHighlightComponent)), core.TuiTextfieldControllerModule]]
  });
  return ExampleTuiHighlightModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiHighlightModule, {
    declarations: [ExampleTuiHighlightComponent, TuiHighlightExample1],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiInputModule, kit.TuiHighlightModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz, core.TuiTextfieldControllerModule],
    exports: [ExampleTuiHighlightComponent]
  });
})();

/***/ })

}]);