"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[31378],{

/***/ 31378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiForModule": () => (/* binding */ ExampleTuiForModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 84 modules
var cdk = __webpack_require__(40287);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__(26215);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/cdk/directives/for/for.directive.ts
var for_directive = __webpack_require__(85739);
// EXTERNAL MODULE: ./projects/core/components/loader/loader.component.ts
var loader_component = __webpack_require__(23184);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/for/examples/1/index.ts







function TuiForExample1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r5, "\n");
  }
}

function TuiForExample1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-loader");
  }
}

function TuiForExample1_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, "Data is not available");
  }
}

let TuiForExample1 = /*#__PURE__*/(() => {
  class TuiForExample1 {
    constructor() {
      this.items$ = new BehaviorSubject/* BehaviorSubject */.X([]);
    }

    refresh() {
      this.items$.next(null);
      const delay = Math.round(Math.random() * 2000);
      setTimeout(() => {
        this.items$.next(delay % 2 ? [] : [`William "Bill" S. Preston Esq.`, `Ted "Theodore" Logan`]);
      }, delay);
    }

  }

  TuiForExample1.ɵfac = function TuiForExample1_Factory(t) {
    return new (t || TuiForExample1)();
  };

  TuiForExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiForExample1,
    selectors: [["tui-for-example-1"]],
    decls: 9,
    vars: 5,
    consts: [["tuiButton", "", 3, "click"], [4, "ngFor", "ngForOf", "ngForElse", "ngForEmpty"], ["loading", ""], ["blank", ""]],
    template: function TuiForExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiForExample1_Template_button_click_1_listener() {
          return ctx.refresh();
        });
        fesm2015_core/* ɵɵtext */._uU(2, " Refresh ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiForExample1_div_3_Template, 2, 1, "div", 1);
        fesm2015_core/* ɵɵpipe */.ALo(4, "async");
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiForExample1_ng_template_5_Template, 1, 0, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵtemplate */.YNc(7, TuiForExample1_ng_template_7_Template, 1, 0, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r1 = fesm2015_core/* ɵɵreference */.MAs(6);

        const _r3 = fesm2015_core/* ɵɵreference */.MAs(8);

        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(4, 3, ctx.items$))("ngForElse", _r1)("ngForEmpty", _r3);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, common/* NgForOf */.sg, for_directive/* TuiForDirective */.i, loader_component/* TuiLoaderComponent */.k],
    pipes: [common/* AsyncPipe */.Ov],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiForExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/for/for.component.ts







function ExampleTuiForComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "em");
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-for-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiForComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 6);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-doc-code", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "p");
    fesm2015_core/* ɵɵi18n */.SDv(9, 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-doc-code", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleHtml);
  }
}

let ExampleTuiForComponent = /*#__PURE__*/(() => {
  class ExampleTuiForComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 67696).then(__webpack_require__.t.bind(__webpack_require__, 67696, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 28517).then(__webpack_require__.t.bind(__webpack_require__, 28517, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 17237).then(__webpack_require__.t.bind(__webpack_require__, 17237, 17)),
        HTML: __webpack_require__.e(/* import() */ 69615).then(__webpack_require__.t.bind(__webpack_require__, 69615, 17))
      };
    }

  }

  ExampleTuiForComponent.ɵfac = function ExampleTuiForComponent_Factory(t) {
    return new (t || ExampleTuiForComponent)();
  };

  ExampleTuiForComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiForComponent,
    selectors: [["example-tui-for"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_FOR_FOR_COMPONENT_TS_1 = goog.getMsg("Setup");
        i18n_0 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_FOR_FOR_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2123984987254208710$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_FOR_FOR_COMPONENT_TS__3 = goog.getMsg(" This directive augments built-in {$startTagCode}ngFor{$closeTagCode} with ability to provide loading template (for {$startEmphasisedText}falsy{$closeEmphasisedText} values, like {$startTagCode}null{$closeTagCode} while {$startTagCode}async{$closeTagCode} pipe is waiting for the response) and empty template for empty array case. ", {
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]",
          "startEmphasisedText": "\uFFFD#3\uFFFD",
          "closeEmphasisedText": "\uFFFD/#3\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_2123984987254208710$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_FOR_FOR_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟4ce47783c4951b7920184fe9e1898cf54283be46␟2123984987254208710: This directive augments built-in ${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:ngFor${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: with ability to provide loading template (for ${"\uFFFD#3\uFFFD"}:START_EMPHASISED_TEXT:falsy${"\uFFFD/#3\uFFFD"}:CLOSE_EMPHASISED_TEXT: values, like ${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:null${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: while ${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:async${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: pipe is waiting for the response) and empty template for empty array case. `;
      }

      i18n_2 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_2);
      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_FOR_FOR_COMPONENT_TS__5 = goog.getMsg("Usage");
        i18n_4 = MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_FOR_FOR_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6142263569409994003$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_FOR_FOR_COMPONENT_TS__7 = goog.getMsg(" Import {$startTagCode}TuiForModule{$closeTagCode} and Angular's {$startTagCode}CommonModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]",
          "closeTagCode": "[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"
        });
        i18n_6 = MSG_EXTERNAL_6142263569409994003$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_FOR_FOR_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟db2d069cb5813e2b51cbb5d7cf901e729096a0b5␟6142263569409994003: Import ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiForModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: and Angular's ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:CommonModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      i18n_6 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_6);
      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_FOR_FOR_COMPONENT_TS__9 = goog.getMsg("Add to the template:");
        i18n_8 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_FOR_FOR_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "For", "package", "CDK", "type", "directives"], ["pageTab", ""], ["pageTab", i18n_0], i18n_2, ["id", "usage", "heading", i18n_4, 3, "content"], [1, "b-demo-steps"], i18n_6, ["filename", "myComponent.module.ts", 3, "code"], i18n_8, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiForComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiForComponent_ng_template_1_Template, 8, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiForComponent_ng_template_2_Template, 11, 2, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiForExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiForComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/for/for.module.ts









let ExampleTuiForModule = /*#__PURE__*/(() => {
  class ExampleTuiForModule {}

  ExampleTuiForModule.ɵfac = function ExampleTuiForModule_Factory(t) {
    return new (t || ExampleTuiForModule)();
  };

  ExampleTuiForModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiForModule
  });
  ExampleTuiForModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core/* TuiButtonModule */.fNO, core/* TuiLoaderModule */.dSp, cdk/* TuiForModule */.dfb, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiForComponent))]]
  });
  return ExampleTuiForModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiForModule, {
    declarations: [ExampleTuiForComponent, TuiForExample1],
    imports: [common/* CommonModule */.ez, core/* TuiButtonModule */.fNO, core/* TuiLoaderModule */.dSp, cdk/* TuiForModule */.dfb, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiForComponent]
  });
})();

/***/ })

}]);