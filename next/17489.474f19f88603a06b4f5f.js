"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[17489],{

/***/ 17489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiLazyLoadingModule": () => (/* binding */ ExampleTuiLazyLoadingModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/kit/index.ts + 115 modules
var kit = __webpack_require__(56757);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/directives/lazy-loading/lazy-loading.directive.ts
var lazy_loading_directive = __webpack_require__(41532);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/lazy-loading/examples/1/index.ts




function TuiLazyLoadingExample1_p_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵelement */._UZ(1, "img", 1);
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const src_r1 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("src", src_r1, core/* ɵɵsanitizeUrl */.LSH);
  }
}

let TuiLazyLoadingExample1 = /*#__PURE__*/(() => {
  class TuiLazyLoadingExample1 {
    constructor() {
      this.array = Array.from({
        length: 100
      }, (_, i) => `https://picsum.photos/${250 + i}/200`);
    }

  }

  TuiLazyLoadingExample1.ɵfac = function TuiLazyLoadingExample1_Factory(t) {
    return new (t || TuiLazyLoadingExample1)();
  };

  TuiLazyLoadingExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiLazyLoadingExample1,
    selectors: [["tui-lazy-loading-example-1"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngFor", "ngForOf"], ["height", "200", "width", "300", "loading", "lazy", "alt", "Random image", 3, "src"]],
    template: function TuiLazyLoadingExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, TuiLazyLoadingExample1_p_0_Template, 2, 1, "p", 0);
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngForOf", ctx.array);
      }
    },
    directives: [common/* NgForOf */.sg, lazy_loading_directive/* TuiLazyLoadingDirective */.B],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiLazyLoadingExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/lazy-loading/lazy-loading.component.ts







function ExampleTuiLazyLoadingComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18nStart */.tHW(1, 3);
    core/* ɵɵelement */._UZ(2, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(4, "tui-lazy-loading-example-1");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiLazyLoadingComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "ol", 5);
    core/* ɵɵelementStart */.TgZ(1, "li");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵi18nStart */.tHW(3, 6);
    core/* ɵɵelement */._UZ(4, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(5, "tui-doc-code", 7);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "li");
    core/* ɵɵelementStart */.TgZ(7, "p");
    core/* ɵɵi18nStart */.tHW(8, 8);
    core/* ɵɵelement */._UZ(9, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(10, "tui-doc-code", 9);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleModule);
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleHtml);
  }
}

let ExampleTuiLazyLoadingComponent = /*#__PURE__*/(() => {
  class ExampleTuiLazyLoadingComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 98780).then(__webpack_require__.t.bind(__webpack_require__, 98780, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 63758).then(__webpack_require__.t.bind(__webpack_require__, 63758, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 62772).then(__webpack_require__.t.bind(__webpack_require__, 62772, 17)),
        HTML: __webpack_require__.e(/* import() */ 84471).then(__webpack_require__.t.bind(__webpack_require__, 84471, 17))
      };
    }

  }

  ExampleTuiLazyLoadingComponent.ɵfac = function ExampleTuiLazyLoadingComponent_Factory(t) {
    return new (t || ExampleTuiLazyLoadingComponent)();
  };

  ExampleTuiLazyLoadingComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiLazyLoadingComponent,
    selectors: [["example-tui-lazy-loading"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3645814477080407331$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS_1 = goog.getMsg("LazyLoading");
        i18n_0 = MSG_EXTERNAL_3645814477080407331$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟4727a3a4fb6a8fce0cb812e9a92b5abec4560374␟3645814477080407331:LazyLoading`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS_3 = goog.getMsg("Setup");
        i18n_2 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4969273440499420724$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS__5 = goog.getMsg(" Directive can be used for image lazy loading. It is the same as {$startTagCode}loading=\"lazy\"{$closeTagCode} but supports also old browsers ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_4969273440499420724$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟ee0549f297efca2ad6925c188a6663569ba9b631␟4969273440499420724: Directive can be used for image lazy loading. It is the same as ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:loading="lazy"${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: but supports also old browsers `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS__7 = goog.getMsg("Usage");
        i18n_6 = MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6992622872536485913$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS__9 = goog.getMsg(" Import {$startTagCode}TuiLazyLoadingModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_6992622872536485913$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟da7842be9999dd0b75dd18ff949170e98e905fb6␟6992622872536485913: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiLazyLoadingModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8462337245784242323$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS__11 = goog.getMsg(" Add {$startTagCode}loading=\"lazy\"{$closeTagCode} for your elements: ", {
          "startTagCode": "\uFFFD#9\uFFFD",
          "closeTagCode": "\uFFFD/#9\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_8462337245784242323$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LAZY_LOADING_LAZY_LOADING_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟734b34a878966d6000f0b021e4fc34b8faf470d7␟8462337245784242323: Add ${"\uFFFD#9\uFFFD"}:START_TAG_CODE:loading="lazy"${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_CODE: for your elements: `;
      }

      return [["header", i18n_0, "package", "KIT", "type", "directives"], ["pageTab", ""], ["pageTab", i18n_2], i18n_4, ["id", "usage", "heading", i18n_6, 3, "content"], [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.module.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiLazyLoadingComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiLazyLoadingComponent_ng_template_1_Template, 5, 1, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiLazyLoadingComponent_ng_template_2_Template, 11, 2, "ng-template", 2);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiLazyLoadingExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiLazyLoadingComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/lazy-loading/lazy-loading.module.ts








let ExampleTuiLazyLoadingModule = /*#__PURE__*/(() => {
  class ExampleTuiLazyLoadingModule {}

  ExampleTuiLazyLoadingModule.ɵfac = function ExampleTuiLazyLoadingModule_Factory(t) {
    return new (t || ExampleTuiLazyLoadingModule)();
  };

  ExampleTuiLazyLoadingModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiLazyLoadingModule
  });
  ExampleTuiLazyLoadingModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, kit.TuiLazyLoadingModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiLazyLoadingComponent))]]
  });
  return ExampleTuiLazyLoadingModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiLazyLoadingModule, {
    declarations: [ExampleTuiLazyLoadingComponent, TuiLazyLoadingExample1],
    imports: [common/* CommonModule */.ez, kit.TuiLazyLoadingModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiLazyLoadingComponent]
  });
})();

/***/ })

}]);