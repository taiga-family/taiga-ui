"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[83965],{

/***/ 83965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DisableAnimationModule": () => (/* binding */ DisableAnimationModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/info/testing/disable-animation/disable-animation.component.ts




let DisableAnimationComponent = /*#__PURE__*/(() => {
  class DisableAnimationComponent {
    constructor() {
      this.disableAnimationExample = __webpack_require__.e(/* import() */ 71493).then(__webpack_require__.t.bind(__webpack_require__, 71493, 17));
    }

  }

  DisableAnimationComponent.ɵfac = function DisableAnimationComponent_Factory(t) {
    return new (t || DisableAnimationComponent)();
  };

  DisableAnimationComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: DisableAnimationComponent,
    selectors: [["disable-animation"]],
    decls: 26,
    vars: 1,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3431486840313958011$$PROJECTS_DEMO_SRC_MODULES_INFO_TESTING_DISABLE_ANIMATION_DISABLE_ANIMATION_COMPONENT_TS_1 = goog.getMsg("Disable animation");
        i18n_0 = MSG_EXTERNAL_3431486840313958011$$PROJECTS_DEMO_SRC_MODULES_INFO_TESTING_DISABLE_ANIMATION_DISABLE_ANIMATION_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟df2b9a3517093d8eefd3d80f4dcf9bab451cc925␟3431486840313958011:Disable animation`;
      }

      return [["header", i18n_0], ["tuiLink", "", "target", "_blank", "href", "https://www.cypress.io/"], [1, "tui-list"], [1, "tui-list__item"], ["filename", "app.module.ts", 3, "code"]];
    },
    template: function DisableAnimationComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵtext */._uU(2, " During integration testing you can face with problem of flaky tests caused by animation. It is especially crucial if you are writing screenshot tests. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
        fesm2015_core/* ɵɵtext */._uU(4, " For example, you want to make screenshot of dialog content: you click button which opens dialog and make screenshot. Sometimes screenshots can be made too early (before dialog fully opens) and test fails. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
        fesm2015_core/* ɵɵtext */._uU(6, " To avoid this ");
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "strong");
        fesm2015_core/* ɵɵtext */._uU(8, "we recommend to toggle all animation off while integration test works.");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "p");
        fesm2015_core/* ɵɵtext */._uU(10, " For example, we use ");
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "a", 1);
        fesm2015_core/* ɵɵtext */._uU(12, " Cypress ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(13, " for screenshot testing of our ui-kit components. ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "ol", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "li", 3);
        fesm2015_core/* ɵɵtext */._uU(16, " To detect if app is running under Cypress we use token ");
        fesm2015_core/* ɵɵelementStart */.TgZ(17, "code");
        fesm2015_core/* ɵɵtext */._uU(18, "TUI_IS_CYPRESS");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(19, " . ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(20, "li", 3);
        fesm2015_core/* ɵɵtext */._uU(21, " To disable animation in ALL Taiga UI components we use token ");
        fesm2015_core/* ɵɵelementStart */.TgZ(22, "code");
        fesm2015_core/* ɵɵtext */._uU(23, "TUI_ANIMATIONS_DURATION");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(24, " . ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(25, "tui-doc-code", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(25);
        fesm2015_core/* ɵɵproperty */.Q6J("code", ctx.disableAnimationExample);
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, link_component/* TuiLinkComponent */.V, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return DisableAnimationComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/info/testing/disable-animation/disable-animation.module.ts







let DisableAnimationModule = /*#__PURE__*/(() => {
  class DisableAnimationModule {}

  DisableAnimationModule.ɵfac = function DisableAnimationModule_Factory(t) {
    return new (t || DisableAnimationModule)();
  };

  DisableAnimationModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: DisableAnimationModule
  });
  DisableAnimationModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, core.TuiLinkModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(DisableAnimationComponent))]]
  });
  return DisableAnimationModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(DisableAnimationModule, {
    declarations: [DisableAnimationComponent],
    imports: [common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, core.TuiLinkModule, router/* RouterModule */.Bz]
  });
})();

/***/ })

}]);