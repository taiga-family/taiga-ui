"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[77702],{

/***/ 77702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BrowsersModule": () => (/* binding */ BrowsersModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
;// CONCATENATED MODULE: ./projects/demo/src/modules/info/browsers/browsers.component.ts


let BrowsersComponent = /*#__PURE__*/(() => {
  class BrowsersComponent {}

  BrowsersComponent.ɵfac = function BrowsersComponent_Factory(t) {
    return new (t || BrowsersComponent)();
  };

  BrowsersComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: BrowsersComponent,
    selectors: [["browsers"]],
    decls: 91,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3338558811204685160$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_1 = goog.getMsg("Browser support");
        i18n_0 = MSG_EXTERNAL_3338558811204685160$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟c35184cc597987be93f6657134f83fd08ae31274␟3338558811204685160:Browser support`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5064942338735502667$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_3 = goog.getMsg(" Desktop ");
        i18n_2 = MSG_EXTERNAL_5064942338735502667$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟d784d00eeedb06dad7f6d4bb903640cecc7a9be0␟5064942338735502667: Desktop `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8094593321207135476$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_5 = goog.getMsg(" Browser ");
        i18n_4 = MSG_EXTERNAL_8094593321207135476$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_5;
      } else {
        i18n_4 = $localize`:␟01bdf8a378d3d1d6f65a33f2b7af8c5e36509fe7␟8094593321207135476: Browser `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7166106447224345547$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_7 = goog.getMsg(" Version ");
        i18n_6 = MSG_EXTERNAL_7166106447224345547$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_7;
      } else {
        i18n_6 = $localize`:␟dfe80f1266f7693728f7986a705ed56d5dd292bb␟7166106447224345547: Version `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3399932745716012972$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_9 = goog.getMsg(" Mobile ");
        i18n_8 = MSG_EXTERNAL_3399932745716012972$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_9;
      } else {
        i18n_8 = $localize`:␟92ab0748d27aeb8b7529e1abcb68679c44da7f56␟3399932745716012972: Mobile `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8094593321207135476$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_11 = goog.getMsg(" Browser ");
        i18n_10 = MSG_EXTERNAL_8094593321207135476$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_11;
      } else {
        i18n_10 = $localize`:␟01bdf8a378d3d1d6f65a33f2b7af8c5e36509fe7␟8094593321207135476: Browser `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7166106447224345547$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_13 = goog.getMsg(" Version ");
        i18n_12 = MSG_EXTERNAL_7166106447224345547$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_13;
      } else {
        i18n_12 = $localize`:␟dfe80f1266f7693728f7986a705ed56d5dd292bb␟7166106447224345547: Version `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_544861641165090794$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_15 = goog.getMsg(" Last three major versions ");
        i18n_14 = MSG_EXTERNAL_544861641165090794$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_15;
      } else {
        i18n_14 = $localize`:␟285e60c3b73030434b5c2ff137afe943fdc7ec13␟544861641165090794: Last three major versions `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_544861641165090794$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_17 = goog.getMsg(" Last three major versions ");
        i18n_16 = MSG_EXTERNAL_544861641165090794$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_17;
      } else {
        i18n_16 = $localize`:␟285e60c3b73030434b5c2ff137afe943fdc7ec13␟544861641165090794: Last three major versions `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_544861641165090794$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_19 = goog.getMsg(" Last three major versions ");
        i18n_18 = MSG_EXTERNAL_544861641165090794$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_19;
      } else {
        i18n_18 = $localize`:␟285e60c3b73030434b5c2ff137afe943fdc7ec13␟544861641165090794: Last three major versions `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_544861641165090794$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_21 = goog.getMsg(" Last three major versions ");
        i18n_20 = MSG_EXTERNAL_544861641165090794$$PROJECTS_DEMO_SRC_MODULES_INFO_BROWSERS_BROWSERS_COMPONENT_TS_21;
      } else {
        i18n_20 = $localize`:␟285e60c3b73030434b5c2ff137afe943fdc7ec13␟544861641165090794: Last three major versions `;
      }

      return [["header", i18n_0], [1, "tui-text_h4", "tui-space_top-0", "tui-space_bottom-3"], i18n_2, [1, "tui-table"], [1, "tui-table__tr"], [1, "tui-table__th"], i18n_4, i18n_6, [1, "tui-table__td", "cell"], [1, "tui-table__td"], [1, "tui-text_h4", "tui-space_top-6", "tui-space_bottom-3"], i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20];
    },
    template: function BrowsersComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "h1", 1);
        fesm2015_core/* ɵɵi18n */.SDv(2, 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "table", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tbody");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tr", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "th", 5);
        fesm2015_core/* ɵɵi18n */.SDv(7, 6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "th", 5);
        fesm2015_core/* ɵɵi18n */.SDv(9, 7);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "tr", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "td", 8);
        fesm2015_core/* ɵɵtext */._uU(12, "Google Chrome");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(14, "49+");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "tr", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(17, "Yandex.Browser");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(19, "14+");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(20, "tr", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(21, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(22, "Safari");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(23, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(24, "12.1+");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(25, "tr", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(26, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(27, "Mozilla Firefox");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(28, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(29, "52+");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(30, "tr", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(31, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(32, "Opera");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(33, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(34, "36+");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(35, "tr", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(36, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(37, "Edge (Chromium)");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(38, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(39, "80+");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(40, "tr", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(41, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(42, "Microsoft Internet Explorer");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(43, "td", 9);
        fesm2015_core/* ɵɵelementStart */.TgZ(44, "strong");
        fesm2015_core/* ɵɵtext */._uU(45, "Not supported");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(46, "tr", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(47, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(48, "Edge (EdgeHTML)");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(49, "td", 9);
        fesm2015_core/* ɵɵelementStart */.TgZ(50, "strong");
        fesm2015_core/* ɵɵtext */._uU(51, "Not supported");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(52, "h1", 10);
        fesm2015_core/* ɵɵi18n */.SDv(53, 11);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(54, "table", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(55, "tbody");
        fesm2015_core/* ɵɵelementStart */.TgZ(56, "tr", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(57, "th", 5);
        fesm2015_core/* ɵɵi18n */.SDv(58, 12);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(59, "th", 5);
        fesm2015_core/* ɵɵi18n */.SDv(60, 13);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(61, "tr", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(62, "td", 8);
        fesm2015_core/* ɵɵtext */._uU(63, "Google Chrome");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(64, "td", 9);
        fesm2015_core/* ɵɵi18n */.SDv(65, 14);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(66, "tr", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(67, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(68, "Safari");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(69, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(70, "12.1+");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(71, "tr", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(72, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(73, "Yandex.Browser");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(74, "td", 9);
        fesm2015_core/* ɵɵi18n */.SDv(75, 15);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(76, "tr", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(77, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(78, "Mozilla Firefox");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(79, "td", 9);
        fesm2015_core/* ɵɵi18n */.SDv(80, 16);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(81, "tr", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(82, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(83, "Opera Mobile");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(84, "td", 9);
        fesm2015_core/* ɵɵi18n */.SDv(85, 17);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(86, "tr", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(87, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(88, "UC Browser");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(89, "td", 9);
        fesm2015_core/* ɵɵtext */._uU(90, "12+");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q],
    styles: ["[_nghost-%COMP%]{display:block}.cell[_ngcontent-%COMP%]{width:18.75rem}"],
    changeDetection: 0
  });
  return BrowsersComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/info/browsers/browsers.module.ts






let BrowsersModule = /*#__PURE__*/(() => {
  class BrowsersModule {}

  BrowsersModule.ɵfac = function BrowsersModule_Factory(t) {
    return new (t || BrowsersModule)();
  };

  BrowsersModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: BrowsersModule
  });
  BrowsersModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(BrowsersComponent))]]
  });
  return BrowsersModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(BrowsersModule, {
    declarations: [BrowsersComponent],
    imports: [core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [BrowsersComponent]
  });
})();

/***/ })

}]);