"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[57031],{

/***/ 57031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiPullToRefreshModule": () => (/* binding */ ExampleTuiPullToRefreshModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/addon-mobile/index.ts + 34 modules
var addon_mobile = __webpack_require__(75650);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/Subject.js
var Subject = __webpack_require__(79765);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-mobile/components/pull-to-refresh/pull-to-refresh.component.ts
var pull_to_refresh_component = __webpack_require__(14471);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pull-to-refresh/examples/1/index.ts








const loaded$ = new Subject/* Subject */.xQ();
let TuiPullToRefreshExample1 = /*#__PURE__*/(() => {
  class TuiPullToRefreshExample1 {
    constructor(alertService) {
      this.alertService = alertService;
    }

    onPull() {
      this.alertService.open(`Loading...`).subscribe();
    }

    finishLoading() {
      loaded$.next();
    }

  }

  TuiPullToRefreshExample1.ɵfac = function TuiPullToRefreshExample1_Factory(t) {
    return new (t || TuiPullToRefreshExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  TuiPullToRefreshExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPullToRefreshExample1,
    selectors: [["tui-pull-to-refresh-example-1"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: cdk.TUI_IS_IOS,
      useValue: false
    }, {
      provide: cdk.TUI_IS_ANDROID,
      useValue: true
    }, {
      provide: addon_mobile.TUI_LOADED,
      useValue: loaded$.asObservable()
    }])],
    decls: 4,
    vars: 0,
    consts: [[3, "pulled"], ["tuiButton", "", "type", "button", 1, "tui-space_top-8", "tui-space_bottom-8", 3, "click"]],
    template: function TuiPullToRefreshExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-pull-to-refresh", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("pulled", function TuiPullToRefreshExample1_Template_tui_pull_to_refresh_pulled_0_listener() {
          return ctx.onPull();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPullToRefreshExample1_Template_button_click_2_listener() {
          return ctx.finishLoading();
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Finish loading ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [pull_to_refresh_component/* TuiPullToRefreshComponent */.z, button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiPullToRefreshExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pull-to-refresh/examples/2/index.ts








const _2_loaded$ = new Subject/* Subject */.xQ();
let TuiPullToRefreshExample2 = /*#__PURE__*/(() => {
  class TuiPullToRefreshExample2 {
    constructor(alertService) {
      this.alertService = alertService;
    }

    onPull() {
      this.alertService.open(`Loading...`).subscribe();
    }

    finishLoading() {
      _2_loaded$.next();
    }

  }

  TuiPullToRefreshExample2.ɵfac = function TuiPullToRefreshExample2_Factory(t) {
    return new (t || TuiPullToRefreshExample2)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  TuiPullToRefreshExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPullToRefreshExample2,
    selectors: [["tui-pull-to-refresh-example-2"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: cdk.TUI_IS_IOS,
      useValue: true
    }, {
      provide: cdk.TUI_IS_ANDROID,
      useValue: false
    }, {
      provide: addon_mobile.TUI_LOADED,
      useValue: _2_loaded$.asObservable()
    }])],
    decls: 4,
    vars: 0,
    consts: [[3, "pulled"], ["tuiButton", "", "type", "button", 1, "tui-space_top-8", "tui-space_bottom-8", 3, "click"]],
    template: function TuiPullToRefreshExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-pull-to-refresh", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("pulled", function TuiPullToRefreshExample2_Template_tui_pull_to_refresh_pulled_0_listener() {
          return ctx.onPull();
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ");
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiPullToRefreshExample2_Template_button_click_2_listener() {
          return ctx.finishLoading();
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Finish loading ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [pull_to_refresh_component/* TuiPullToRefreshComponent */.z, button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiPullToRefreshExample2;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pull-to-refresh/pull-to-refresh.component.ts









function ExampleTuiPullToRefreshComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-notification", 4);
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "div");
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "div", 6);
    fesm2015_core/* ɵɵelement */._UZ(7, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-pull-to-refresh-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-pull-to-refresh-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(8);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiPullToRefreshComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 9);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 10);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 13);
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

let ExampleTuiPullToRefreshComponent = /*#__PURE__*/(() => {
  class ExampleTuiPullToRefreshComponent {
    constructor() {
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 75002).then(__webpack_require__.t.bind(__webpack_require__, 75002, 17)),
        HTML: __webpack_require__.e(/* import() */ 63708).then(__webpack_require__.t.bind(__webpack_require__, 63708, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 39551).then(__webpack_require__.t.bind(__webpack_require__, 39551, 17)),
        HTML: __webpack_require__.e(/* import() */ 96966).then(__webpack_require__.t.bind(__webpack_require__, 96966, 17))
      };
      this.exampleModule = __webpack_require__.e(/* import() */ 37397).then(__webpack_require__.t.bind(__webpack_require__, 37397, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 59525).then(__webpack_require__.t.bind(__webpack_require__, 59525, 17));
    }

  }

  ExampleTuiPullToRefreshComponent.ɵfac = function ExampleTuiPullToRefreshComponent_Factory(t) {
    return new (t || ExampleTuiPullToRefreshComponent)();
  };

  ExampleTuiPullToRefreshComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiPullToRefreshComponent,
    selectors: [["example-mobile-pull-to-refresh-page"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS_1 = goog.getMsg("Setup");
        i18n_0 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4432508614424882371$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS__3 = goog.getMsg(" Component to refresh content after pull top. It emulates appearance of native iOS and Android components ");
        i18n_2 = MSG_EXTERNAL_4432508614424882371$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟8aef567038ca46da2e608edf00b4c1318aa2565d␟4432508614424882371: Component to refresh content after pull top. It emulates appearance of native iOS and Android components `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4348148278078655557$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS__5 = goog.getMsg("{$startTagDiv} It emits {$startTagCode}(pulled){$closeTagCode} event when user wants to start loading. {$closeTagDiv}{$startTagDiv_1} You can finish loading with {$startTagCode}TUI_LOADED{$closeTagCode} stream token that can be provided in DI {$closeTagDiv}", {
          "startTagDiv": "\uFFFD#4\uFFFD",
          "startTagCode": "[\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]",
          "closeTagCode": "[\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]",
          "closeTagDiv": "[\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]",
          "startTagDiv_1": "\uFFFD#6\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_4348148278078655557$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟c3974c8157d46bb344ac821f0e0916067b4fb2e7␟4348148278078655557:${"\uFFFD#4\uFFFD"}:START_TAG_DIV: It emits ${"[\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:(pulled)${"[\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE: event when user wants to start loading. ${"[\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_DIV:${"\uFFFD#6\uFFFD"}:START_TAG_DIV_1: You can finish loading with ${"[\uFFFD#5\uFFFD|\uFFFD#7\uFFFD]"}:START_TAG_CODE:TUI_LOADED${"[\uFFFD/#5\uFFFD|\uFFFD/#7\uFFFD]"}:CLOSE_TAG_CODE: stream token that can be provided in DI ${"[\uFFFD/#4\uFFFD|\uFFFD/#6\uFFFD]"}:CLOSE_TAG_DIV:`;
      }

      i18n_4 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_4);
      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6177879691998756452$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS__7 = goog.getMsg(" Import {$startTagCode}TuiPullToRefreshModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_6177879691998756452$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟5fbbdc188855f8b538e3cbc4ed0a0f6157c29e25␟6177879691998756452: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiPullToRefreshModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS__9 = goog.getMsg("Add to the template:");
        i18n_8 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PULL_TO_REFRESH_PULL_TO_REFRESH_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "PullToRefresh", "package", "ADDON-MOBILE", "type", "components"], ["pageTab", ""], ["pageTab", i18n_0], i18n_2, [1, "tui-space_top-4"], i18n_4, [1, "tui-space_top-2"], ["id", "android", "heading", "Android", 3, "content"], ["id", "ios", "heading", "iOS", 3, "content"], [1, "b-demo-steps"], i18n_6, ["filename", "myComponent.module.ts", 3, "code"], i18n_8, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiPullToRefreshComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiPullToRefreshComponent_ng_template_1_Template, 12, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiPullToRefreshComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, notification_component/* TuiNotificationComponent */.L, example_component/* TuiDocExampleComponent */.f, TuiPullToRefreshExample1, TuiPullToRefreshExample2, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiPullToRefreshComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/pull-to-refresh/pull-to-refresh.module.ts










let ExampleTuiPullToRefreshModule = /*#__PURE__*/(() => {
  class ExampleTuiPullToRefreshModule {}

  ExampleTuiPullToRefreshModule.ɵfac = function ExampleTuiPullToRefreshModule_Factory(t) {
    return new (t || ExampleTuiPullToRefreshModule)();
  };

  ExampleTuiPullToRefreshModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiPullToRefreshModule
  });
  ExampleTuiPullToRefreshModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, addon_mobile.TuiPullToRefreshModule, core.TuiButtonModule, core.TuiNotificationModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiPullToRefreshComponent))]]
  });
  return ExampleTuiPullToRefreshModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiPullToRefreshModule, {
    declarations: [ExampleTuiPullToRefreshComponent, TuiPullToRefreshExample1, TuiPullToRefreshExample2],
    imports: [common/* CommonModule */.ez, addon_mobile.TuiPullToRefreshModule, core.TuiButtonModule, core.TuiNotificationModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiPullToRefreshComponent]
  });
})();

/***/ })

}]);