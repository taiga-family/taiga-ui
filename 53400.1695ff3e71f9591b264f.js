"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[53400],{

/***/ 53400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiMobileDialogModule": () => (/* binding */ ExampleTuiMobileDialogModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/addon-mobile/index.ts + 34 modules
var addon_mobile = __webpack_require__(75650);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/mobile-dialog/examples/1/index.ts








let TuiMobileDialogExample1 = /*#__PURE__*/(() => {
  class TuiMobileDialogExample1 {
    constructor(dialogService, alertService) {
      this.dialogService = dialogService;
      this.alertService = alertService;
    }

    show() {
      const actions = [`No thanks`, `Remind me later`, `Rate now`];
      this.dialogService.open(`If you like this app, please take a moment to leave a positive rating.`, {
        label: `What do you think?`,
        actions
      }).pipe((0,switchMap/* switchMap */.w)(index => this.alertService.open(`Selected: ${actions[index]}`))).subscribe();
    }

  }

  TuiMobileDialogExample1.ɵfac = function TuiMobileDialogExample1_Factory(t) {
    return new (t || TuiMobileDialogExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(addon_mobile.TuiMobileDialogService), fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  TuiMobileDialogExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMobileDialogExample1,
    selectors: [["tui-mobile-dialog-example-1"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: cdk.TUI_IS_IOS,
      useValue: false
    }])],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1762522912961222062$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_DIALOG_EXAMPLES_1_INDEX_TS_1 = goog.getMsg("Choose iPhone into DevTools to see iOS styled dialog.");
        i18n_0 = MSG_EXTERNAL_1762522912961222062$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_DIALOG_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟a1ac22cbf3e8b8cd6fb77e5af9144ed418580c37␟1762522912961222062:Choose iPhone into DevTools to see iOS styled dialog.`;
      }

      return [i18n_0, ["tuiButton", "", "type", "button", 3, "click"]];
    },
    template: function TuiMobileDialogExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18n */.SDv(1, 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiMobileDialogExample1_Template_button_click_2_listener() {
          return ctx.show();
        });
        fesm2015_core/* ɵɵtext */._uU(3, " Show dialog\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [button_component/* TuiButtonComponent */.v],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMobileDialogExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/mobile-dialog/mobile-dialog.component.ts







function ExampleTuiMobileDialogComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-mobile-dialog-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiMobileDialogComponent_ng_template_2_Template(rf, ctx) {
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
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleInsertComponent);
  }
}

let ExampleTuiMobileDialogComponent = /*#__PURE__*/(() => {
  class ExampleTuiMobileDialogComponent {
    constructor() {
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 11836).then(__webpack_require__.t.bind(__webpack_require__, 11836, 17)),
        HTML: __webpack_require__.e(/* import() */ 53072).then(__webpack_require__.t.bind(__webpack_require__, 35203, 17))
      };
      this.exampleModule = __webpack_require__.e(/* import() */ 68462).then(__webpack_require__.t.bind(__webpack_require__, 68462, 17));
      this.exampleInsertComponent = __webpack_require__.e(/* import() */ 93177).then(__webpack_require__.t.bind(__webpack_require__, 93177, 17));
    }

  }

  ExampleTuiMobileDialogComponent.ɵfac = function ExampleTuiMobileDialogComponent_Factory(t) {
    return new (t || ExampleTuiMobileDialogComponent)();
  };

  ExampleTuiMobileDialogComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiMobileDialogComponent,
    selectors: [["example-mobile-dialog"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_DIALOG_MOBILE_DIALOG_COMPONENT_TS_1 = goog.getMsg("Setup");
        i18n_0 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_DIALOG_MOBILE_DIALOG_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9137228641915038521$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_DIALOG_MOBILE_DIALOG_COMPONENT_TS__3 = goog.getMsg(" Component for showing a dialog on mobile devices. It emulates appearance of native alerts on iOS and Android ");
        i18n_2 = MSG_EXTERNAL_9137228641915038521$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_DIALOG_MOBILE_DIALOG_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟ee880be28e74945c5b1b23bf1cb0ac757599aec5␟9137228641915038521: Component for showing a dialog on mobile devices. It emulates appearance of native alerts on iOS and Android `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_DIALOG_MOBILE_DIALOG_COMPONENT_TS__5 = goog.getMsg("Basic");
        i18n_4 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_DIALOG_MOBILE_DIALOG_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3639391024646583640$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_DIALOG_MOBILE_DIALOG_COMPONENT_TS__7 = goog.getMsg(" Import {$startTagCode}TuiMobileDialogModule{$closeTagCode} to your {$startTagCode}AppModule{$closeTagCode}", {
          "startTagCode": "[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]",
          "closeTagCode": "[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"
        });
        i18n_6 = MSG_EXTERNAL_3639391024646583640$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_DIALOG_MOBILE_DIALOG_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟4ac5c76bf1d0e6a6b56d25b951863735a838975a␟3639391024646583640: Import ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:TuiMobileDialogModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: to your ${"[\uFFFD#4\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:AppModule${"[\uFFFD/#4\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE:`;
      }

      i18n_6 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_6);
      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8851886848912378945$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_DIALOG_MOBILE_DIALOG_COMPONENT_TS__9 = goog.getMsg("Use it in component");
        i18n_8 = MSG_EXTERNAL_8851886848912378945$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_MOBILE_DIALOG_MOBILE_DIALOG_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟406023e62926140d7e1398ca0791caa8ac93ddfd␟8851886848912378945:Use it in component`;
      }

      return [["header", "MobileDialog", "package", "ADDON-MOBILE", "type", "components"], ["pageTab", ""], ["pageTab", i18n_0], i18n_2, ["id", "base", "heading", i18n_4, 3, "content"], [1, "b-demo-steps"], i18n_6, ["filename", "myComponent.module.ts", 3, "code"], i18n_8, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiMobileDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiMobileDialogComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiMobileDialogComponent_ng_template_2_Template, 11, 2, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiMobileDialogExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiMobileDialogComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/mobile-dialog/mobile-dialog.module.ts









let ExampleTuiMobileDialogModule = /*#__PURE__*/(() => {
  class ExampleTuiMobileDialogModule {}

  ExampleTuiMobileDialogModule.ɵfac = function ExampleTuiMobileDialogModule_Factory(t) {
    return new (t || ExampleTuiMobileDialogModule)();
  };

  ExampleTuiMobileDialogModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiMobileDialogModule
  });
  ExampleTuiMobileDialogModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, addon_mobile.TuiMobileDialogModule, core.TuiButtonModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiMobileDialogComponent))]]
  });
  return ExampleTuiMobileDialogModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiMobileDialogModule, {
    declarations: [ExampleTuiMobileDialogComponent, TuiMobileDialogExample1],
    imports: [common/* CommonModule */.ez, addon_mobile.TuiMobileDialogModule, core.TuiButtonModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiMobileDialogComponent]
  });
})();

/***/ })

}]);