"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[12508],{

/***/ 12508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SsrModule": () => (/* binding */ SsrModule)
});

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
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
;// CONCATENATED MODULE: ./projects/demo/src/modules/info/ssr/ssr.component.ts



let SsrComponent = /*#__PURE__*/(() => {
  class SsrComponent {}

  SsrComponent.ɵfac = function SsrComponent_Factory(t) {
    return new (t || SsrComponent)();
  };

  SsrComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: SsrComponent,
    selectors: [["ssr"]],
    decls: 36,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8859455073616570225$$PROJECTS_DEMO_SRC_MODULES_INFO_SSR_SSR_COMPONENT_TS_1 = goog.getMsg("Server Side Rendering (SSR)");
        i18n_0 = MSG_EXTERNAL_8859455073616570225$$PROJECTS_DEMO_SRC_MODULES_INFO_SSR_SSR_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟7dc4e663b884d6aae49dc6225bb11259847d4247␟8859455073616570225:Server Side Rendering (SSR)`;
      }

      return [["header", i18n_0], ["tuiLink", "", "href", "https://github.com/ng-web-apis/common", "target", "_blank", "rel", "noreferrer noopener"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/universal", "target", "_blank", "rel", "noreferrer noopener"], ["tuiLink", "", "href", "https://github.com/ng-web-apis/universal#mocks", "target", "_blank", "rel", "noreferrer noopener"]];
    },
    template: function SsrComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "h2");
        fesm2015_core/* ɵɵtext */._uU(2, "Tokens");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
        fesm2015_core/* ɵɵtext */._uU(4, " Taiga UI does not access global variables like ");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "code");
        fesm2015_core/* ɵɵtext */._uU(6, "window");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(7, " or ");
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "code");
        fesm2015_core/* ɵɵtext */._uU(9, "navigator");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(10, " directly. Instead, we rely on DI tokens for simplicity of testing and cross-environment support. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "p");
        fesm2015_core/* ɵɵtext */._uU(12, " A separate library called ");
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "code");
        fesm2015_core/* ɵɵtext */._uU(14, "@ng-web-apis/common");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(15, " is dedicated solely to this purpose. It is a direct dependency and is installed with Taiga UI, you can find docs ");
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "a", 1);
        fesm2015_core/* ɵɵtext */._uU(17, " here ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "h2");
        fesm2015_core/* ɵɵtext */._uU(19, "Fallback");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(20, "p");
        fesm2015_core/* ɵɵtext */._uU(21, " For Server Side Rendering (SSR), a sister library ");
        fesm2015_core/* ɵɵelementStart */.TgZ(22, "code");
        fesm2015_core/* ɵɵtext */._uU(23, "@ng-web-apis/universal");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(24, " can be used. It has advanced mocks and tools to extract user agent and location info from server side requests. If you want to use SSR with Taiga UI you need to install this package and follow instructions from ");
        fesm2015_core/* ɵɵelementStart */.TgZ(25, "a", 2);
        fesm2015_core/* ɵɵtext */._uU(26, " README ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(27, " . Note that this is also applicable to Jest which is a server side testing suite. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(28, "p");
        fesm2015_core/* ɵɵtext */._uU(29, " Taiga UI uses modern JavaScript with classes that might be not available in server side environment. To add mocks for those classes you can also use ");
        fesm2015_core/* ɵɵelementStart */.TgZ(30, "code");
        fesm2015_core/* ɵɵtext */._uU(31, "@ng-web-apis/universal");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(32, " package (see ");
        fesm2015_core/* ɵɵelementStart */.TgZ(33, "a", 3);
        fesm2015_core/* ɵɵtext */._uU(34, " this section ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(35, " of README). ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, link_component/* TuiLinkComponent */.V],
    encapsulation: 2,
    changeDetection: 0
  });
  return SsrComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/info/ssr/ssr.module.ts






let SsrModule = /*#__PURE__*/(() => {
  class SsrModule {}

  SsrModule.ɵfac = function SsrModule_Factory(t) {
    return new (t || SsrModule)();
  };

  SsrModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: SsrModule
  });
  SsrModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(SsrComponent))]]
  });
  return SsrModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(SsrModule, {
    declarations: [SsrComponent],
    imports: [core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [SsrComponent]
  });
})();

/***/ })

}]);