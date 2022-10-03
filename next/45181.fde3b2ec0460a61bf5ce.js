"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[45181],{

/***/ 45181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleDomModule": () => (/* binding */ ExampleDomModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/dom/dom.component.ts






function ExampleDomComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(2, " Visit ");
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "a", 4);
    fesm2015_core/* ɵɵtext */._uU(4, " CDK wiki ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(5, " to see docs ");
  }
}

function ExampleDomComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18n */.SDv(3, 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-doc-code", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.importComponentExample);
  }
}

let ExampleDomComponent = /*#__PURE__*/(() => {
  class ExampleDomComponent {
    constructor() {
      this.importComponentExample = __webpack_require__.e(/* import() */ 74699).then(__webpack_require__.t.bind(__webpack_require__, 74699, 17));
    }

  }

  ExampleDomComponent.ɵfac = function ExampleDomComponent_Factory(t) {
    return new (t || ExampleDomComponent)();
  };

  ExampleDomComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleDomComponent,
    selectors: [["example-dom"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4308777752876515035$$PROJECTS_DEMO_SRC_MODULES_UTILS_DOM_DOM_COMPONENT_TS_1 = goog.getMsg("DOM utils");
        i18n_0 = MSG_EXTERNAL_4308777752876515035$$PROJECTS_DEMO_SRC_MODULES_UTILS_DOM_DOM_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟bb5615509d3fd1afb301415503bb6ba96c7b49e5␟4308777752876515035:DOM utils`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4157454857949229078$$PROJECTS_DEMO_SRC_MODULES_UTILS_DOM_DOM_COMPONENT_TS__3 = goog.getMsg("A set of tools for easy DOM manipulations");
        i18n_2 = MSG_EXTERNAL_4157454857949229078$$PROJECTS_DEMO_SRC_MODULES_UTILS_DOM_DOM_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟d2d3830d11dbde5e5834d483140a76ef5b9f0bb4␟4157454857949229078:A set of tools for easy DOM manipulations`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5059560669993049040$$PROJECTS_DEMO_SRC_MODULES_UTILS_DOM_DOM_COMPONENT_TS__5 = goog.getMsg("Import into component and use:");
        i18n_4 = MSG_EXTERNAL_5059560669993049040$$PROJECTS_DEMO_SRC_MODULES_UTILS_DOM_DOM_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;
      }

      return [["header", i18n_0, "package", "CDK", "path", "cdk/utils/dom"], ["pageTab", ""], ["pageTab", "Setup"], i18n_2, ["tuiLink", "", "target", "_blank", "href", "https://github.com/tinkoff/taiga-ui/wiki/DOM"], [1, "b-demo-steps"], i18n_4, ["filename", "myComponent.component.ts", 3, "code"]];
    },
    template: function ExampleDomComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleDomComponent_ng_template_1_Template, 6, 0, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleDomComponent_ng_template_2_Template, 5, 1, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, code_component/* TuiDocCodeComponent */.c],
    styles: [".description-header[_ngcontent-%COMP%]{font:var(--tui-font-text-l);font-weight:bold;line-height:2.875rem;height:2.1875rem}"],
    changeDetection: 0
  });
  return ExampleDomComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/dom/dom.module.ts







let ExampleDomModule = /*#__PURE__*/(() => {
  class ExampleDomModule {}

  ExampleDomModule.ɵfac = function ExampleDomModule_Factory(t) {
    return new (t || ExampleDomModule)();
  };

  ExampleDomModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleDomModule
  });
  ExampleDomModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core.TuiLinkModule, core.TuiSvgModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleDomComponent))]]
  });
  return ExampleDomModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleDomModule, {
    declarations: [ExampleDomComponent],
    imports: [common/* CommonModule */.ez, core.TuiLinkModule, core.TuiSvgModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleDomComponent]
  });
})();

/***/ })

}]);