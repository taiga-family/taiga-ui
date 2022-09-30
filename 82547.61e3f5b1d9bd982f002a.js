"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[82547],{

/***/ 82547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiMobileThemesModule": () => (/* binding */ ExampleTuiMobileThemesModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/addon-mobile/index.ts + 34 modules
var addon_mobile = __webpack_require__(75650);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-mobile/components/theme-android/theme-android.component.ts
var theme_android_component = __webpack_require__(28742);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/addon-mobile/directives/ripple/ripple.directive.ts
var ripple_directive = __webpack_require__(59759);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/kit/components/island/island.component.ts
var island_component = __webpack_require__(70329);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/mobile-themes/examples/1/index.ts







let TuiMobileThemesExample1 = /*#__PURE__*/(() => {
  class TuiMobileThemesExample1 {}

  TuiMobileThemesExample1.ɵfac = function TuiMobileThemesExample1_Factory(t) {
    return new (t || TuiMobileThemesExample1)();
  };

  TuiMobileThemesExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMobileThemesExample1,
    selectors: [["tui-mobile-themes-example-1"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: cdk.TUI_IS_MOBILE,
      useValue: true
    }, {
      provide: cdk.TUI_IS_ANDROID,
      useValue: true
    }, {
      provide: cdk.TUI_IS_IOS,
      useValue: false
    }])],
    decls: 13,
    vars: 0,
    consts: [["tuiButton", "", "tuiRipple", "", "size", "m"], ["tuiLink", "", "href", "http://ng-web-apis.github.io/", "target", "_blank"], ["tuiRipple", ""]],
    template: function TuiMobileThemesExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-theme-android");
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵtext */._uU(2, "Button:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 0);
        fesm2015_core/* ɵɵtext */._uU(4, " Hello\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
        fesm2015_core/* ɵɵtext */._uU(6, "Link:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "a", 1);
        fesm2015_core/* ɵɵtext */._uU(8, " Let's check it\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "p");
        fesm2015_core/* ɵɵtext */._uU(10, "Island:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-island", 2);
        fesm2015_core/* ɵɵtext */._uU(12, "Wow!");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [theme_android_component/* TuiThemeAndroidComponent */.X, button_component/* TuiButtonComponent */.v, ripple_directive/* TuiRippleDirective */.q, link_component/* TuiLinkComponent */.V, island_component/* TuiIslandComponent */.h],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMobileThemesExample1;
})();
// EXTERNAL MODULE: ./projects/addon-mobile/components/theme-ios/theme-ios.component.ts
var theme_ios_component = __webpack_require__(21532);
// EXTERNAL MODULE: ./projects/addon-mobile/directives/touchable/touchable.directive.ts
var touchable_directive = __webpack_require__(18620);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/mobile-themes/examples/2/index.ts







let TuiMobileThemesExample2 = /*#__PURE__*/(() => {
  class TuiMobileThemesExample2 {}

  TuiMobileThemesExample2.ɵfac = function TuiMobileThemesExample2_Factory(t) {
    return new (t || TuiMobileThemesExample2)();
  };

  TuiMobileThemesExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMobileThemesExample2,
    selectors: [["tui-mobile-themes-example-2"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: cdk.TUI_IS_MOBILE,
      useValue: true
    }, {
      provide: cdk.TUI_IS_ANDROID,
      useValue: false
    }, {
      provide: cdk.TUI_IS_IOS,
      useValue: true
    }])],
    decls: 13,
    vars: 0,
    consts: [["tuiButton", "", "tuiTouchable", "", "size", "m"], ["tuiLink", "", "href", "http://ng-web-apis.github.io/", "tuiTouchable", "", "target", "_blank"], ["tuiTouchable", ""]],
    template: function TuiMobileThemesExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-theme-ios");
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵtext */._uU(2, "Button:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 0);
        fesm2015_core/* ɵɵtext */._uU(4, " Hello\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
        fesm2015_core/* ɵɵtext */._uU(6, "Link:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "a", 1);
        fesm2015_core/* ɵɵtext */._uU(8, " Let's check it\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "p");
        fesm2015_core/* ɵɵtext */._uU(10, "Island:");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-island", 2);
        fesm2015_core/* ɵɵtext */._uU(12, "Wow!");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [theme_ios_component/* TuiThemeIosComponent */.t, button_component/* TuiButtonComponent */.v, touchable_directive/* TuiTouchableDirective */.u, link_component/* TuiLinkComponent */.V, island_component/* TuiIslandComponent */.h],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMobileThemesExample2;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/mobile-themes/mobile-themes.component.ts







function ExampleTuiMobileThemesComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 3);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-mobile-themes-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiMobileThemesComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 5);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-mobile-themes-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r1.example2);
  }
}

let ExampleTuiMobileThemesComponent = /*#__PURE__*/(() => {
  class ExampleTuiMobileThemesComponent {
    constructor() {
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 39203).then(__webpack_require__.t.bind(__webpack_require__, 39203, 17)),
        HTML: __webpack_require__.e(/* import() */ 48771).then(__webpack_require__.t.bind(__webpack_require__, 48771, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 81427).then(__webpack_require__.t.bind(__webpack_require__, 81427, 17)),
        HTML: __webpack_require__.e(/* import() */ 49270).then(__webpack_require__.t.bind(__webpack_require__, 49270, 17))
      };
    }

  }

  ExampleTuiMobileThemesComponent.ɵfac = function ExampleTuiMobileThemesComponent_Factory(t) {
    return new (t || ExampleTuiMobileThemesComponent)();
  };

  ExampleTuiMobileThemesComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiMobileThemesComponent,
    selectors: [["example-tui-mobile-themes"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2330057393679301185$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_THEMES_MOBILE_THEMES_COMPONENT_TS__1 = goog.getMsg(" Import {$startTagCode}TuiThemeAndroidModule{$closeTagCode} into your app.module and add {$startTagCode}tui-theme-android{$closeTagCode} component to enable Android theme. {$startTagCode}TUI_IS_ANDROID{$closeTagCode} can help to recognize Android user {$startTagTuiDocExample}{$startTagTuiMobileThemesExample_1}{$closeTagTuiMobileThemesExample_1}{$closeTagTuiDocExample}", {
          "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]",
          "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]",
          "startTagTuiDocExample": "\uFFFD#4\uFFFD",
          "startTagTuiMobileThemesExample_1": "\uFFFD#5\uFFFD",
          "closeTagTuiMobileThemesExample_1": "\uFFFD/#5\uFFFD",
          "closeTagTuiDocExample": "\uFFFD/#4\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_2330057393679301185$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_THEMES_MOBILE_THEMES_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟f335ff8e36625de8856949704ea7aa92c4ffa60e␟2330057393679301185: Import ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:TuiThemeAndroidModule${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: into your app.module and add ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:tui-theme-android${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: component to enable Android theme. ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:TUI_IS_ANDROID${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: can help to recognize Android user ${"\uFFFD#4\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#5\uFFFD"}:START_TAG_TUI_MOBILE_THEMES_EXAMPLE_1:${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_TUI_MOBILE_THEMES_EXAMPLE_1:${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3212179631166384013$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_THEMES_MOBILE_THEMES_COMPONENT_TS__3 = goog.getMsg(" Import {$startTagCode}TuiThemeIosModule{$closeTagCode} into your app.module and add {$startTagCode}tui-theme-ios{$closeTagCode} . {$startTagCode}TUI_IS_IOS{$closeTagCode} can help to recognize iOS user {$startTagTuiDocExample}{$startTagTuiMobileThemesExample_2}{$closeTagTuiMobileThemesExample_2}{$closeTagTuiDocExample}", {
          "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]",
          "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]",
          "startTagTuiDocExample": "\uFFFD#4\uFFFD",
          "startTagTuiMobileThemesExample_2": "\uFFFD#5\uFFFD",
          "closeTagTuiMobileThemesExample_2": "\uFFFD/#5\uFFFD",
          "closeTagTuiDocExample": "\uFFFD/#4\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_3212179631166384013$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_THEMES_MOBILE_THEMES_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟0307acf4cd2436711e977da31caf365fd5624557␟3212179631166384013: Import ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:TuiThemeIosModule${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: into your app.module and add ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:tui-theme-ios${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: . ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:TUI_IS_IOS${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: can help to recognize iOS user ${"\uFFFD#4\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#5\uFFFD"}:START_TAG_TUI_MOBILE_THEMES_EXAMPLE_2:${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_TUI_MOBILE_THEMES_EXAMPLE_2:${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_TUI_DOC_EXAMPLE:`;
      }

      i18n_2 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_2);
      return [["header", "Mobile themes", "package", "ADDON-MOBILE", "type", "components"], ["pageTab", "Android"], ["pageTab", "IOS"], i18n_0, ["id", "Android", "heading", "Android", 3, "content"], i18n_2, ["id", "IOS", "heading", "IOS", 3, "content"]];
    },
    template: function ExampleTuiMobileThemesComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiMobileThemesComponent_ng_template_1_Template, 6, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiMobileThemesComponent_ng_template_2_Template, 6, 1, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiMobileThemesExample1, TuiMobileThemesExample2],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiMobileThemesComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/mobile-themes/mobile-themes.module.ts











let ExampleTuiMobileThemesModule = /*#__PURE__*/(() => {
  class ExampleTuiMobileThemesModule {}

  ExampleTuiMobileThemesModule.ɵfac = function ExampleTuiMobileThemesModule_Factory(t) {
    return new (t || ExampleTuiMobileThemesModule)();
  };

  ExampleTuiMobileThemesModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiMobileThemesModule
  });
  ExampleTuiMobileThemesModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, router/* RouterModule */.Bz, addon_mobile.TuiThemeIosModule, addon_mobile.TuiThemeAndroidModule, core.TuiButtonModule, core.TuiLinkModule, kit.TuiIslandModule, addon_mobile.TuiRippleModule, addon_mobile.TuiTouchableModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiMobileThemesComponent))]]
  });
  return ExampleTuiMobileThemesModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiMobileThemesModule, {
    declarations: [ExampleTuiMobileThemesComponent, TuiMobileThemesExample1, TuiMobileThemesExample2],
    imports: [common/* CommonModule */.ez, router/* RouterModule */.Bz, addon_mobile.TuiThemeIosModule, addon_mobile.TuiThemeAndroidModule, core.TuiButtonModule, core.TuiLinkModule, kit.TuiIslandModule, addon_mobile.TuiRippleModule, addon_mobile.TuiTouchableModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiMobileThemesComponent]
  });
})();

/***/ })

}]);