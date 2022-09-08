"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[72501],{

/***/ 72501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleBrowserModule": () => (/* binding */ ExampleBrowserModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js
var ng_web_apis_common = __webpack_require__(62579);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 84 modules
var cdk = __webpack_require__(40287);
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/browser/examples/1/index.ts



let TuiBrowserExample1 = /*#__PURE__*/(() => {
  class TuiBrowserExample1 {
    constructor(userAgent) {
      this.userAgent = userAgent;
    }

    get aboutMyBrowser() {
      if ((0,cdk/* tuiIsEdge */.VpE)(this.userAgent)) {
        if ((0,cdk/* tuiIsEdgeOlderThan */.xz3)(13, this.userAgent)) {
          return `Edge older than 13`;
        }

        return `Edge until 13`;
      }

      if ((0,cdk/* tuiIsFirefox */.oKA)(this.userAgent)) {
        return `Okay, you have Firefox!`;
      }

      return `You have Chromium based browser, cool!`;
    }

  }

  TuiBrowserExample1.ɵfac = function TuiBrowserExample1_Factory(t) {
    return new (t || TuiBrowserExample1)(core/* ɵɵdirectiveInject */.Y36(ng_web_apis_common/* USER_AGENT */.yZ));
  };

  TuiBrowserExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiBrowserExample1,
    selectors: [["tui-browser-example-1"]],
    decls: 4,
    vars: 1,
    template: function TuiBrowserExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "label");
        core/* ɵɵtext */._uU(1, "Your browser is:");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(2, "p");
        core/* ɵɵtext */._uU(3);
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵadvance */.xp6(3);
        core/* ɵɵtextInterpolate */.Oqu(ctx.aboutMyBrowser);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiBrowserExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/browser/browser.component.ts







function ExampleBrowserComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18n */.SDv(1, 3);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(3, "tui-browser-example-1");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleBrowserComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "ol", 5);
    core/* ɵɵelementStart */.TgZ(1, "li");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵi18n */.SDv(3, 6);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(4, "tui-doc-code", 7);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("code", ctx_r1.importComponentExample);
  }
}

let ExampleBrowserComponent = /*#__PURE__*/(() => {
  class ExampleBrowserComponent {
    constructor() {
      this.importComponentExample = __webpack_require__.e(/* import() */ 18224).then(__webpack_require__.t.bind(__webpack_require__, 18224, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 76049).then(__webpack_require__.t.bind(__webpack_require__, 76049, 17)),
        HTML: __webpack_require__.e(/* import() */ 58781).then(__webpack_require__.t.bind(__webpack_require__, 58781, 17))
      };
    }

  }

  ExampleBrowserComponent.ɵfac = function ExampleBrowserComponent_Factory(t) {
    return new (t || ExampleBrowserComponent)();
  };

  ExampleBrowserComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleBrowserComponent,
    selectors: [["example-browser"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1141403969432151030$$PROJECTS_DEMO_SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS_1 = goog.getMsg("Browser utils");
        i18n_0 = MSG_EXTERNAL_1141403969432151030$$PROJECTS_DEMO_SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟f9c6a0ed822ca3080f9a3110255f7e8337323d18␟1141403969432151030:Browser utils`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS_3 = goog.getMsg("Setup");
        i18n_2 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5545918984621976325$$PROJECTS_DEMO_SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS__5 = goog.getMsg("A set of tools for work with browser");
        i18n_4 = MSG_EXTERNAL_5545918984621976325$$PROJECTS_DEMO_SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟40ec2c87f7f7e9226eff45bce9c943aa0c744f71␟5545918984621976325:A set of tools for work with browser`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6921954424489541591$$PROJECTS_DEMO_SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS__7 = goog.getMsg("Browser detection");
        i18n_6 = MSG_EXTERNAL_6921954424489541591$$PROJECTS_DEMO_SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟1e0d211c5dc58e7091fbbdd270900b2936cfd886␟6921954424489541591:Browser detection`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5059560669993049040$$PROJECTS_DEMO_SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS__9 = goog.getMsg("Import into component and use:");
        i18n_8 = MSG_EXTERNAL_5059560669993049040$$PROJECTS_DEMO_SRC_MODULES_UTILS_BROWSER_BROWSER_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;
      }

      return [["header", i18n_0, "package", "CDK", "path", "cdk/utils/browser"], ["pageTab", ""], ["pageTab", i18n_2], i18n_4, ["id", "browser", "heading", i18n_6, 3, "content"], [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.component.ts", 3, "code"]];
    },
    template: function ExampleBrowserComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleBrowserComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleBrowserComponent_ng_template_2_Template, 5, 1, "ng-template", 2);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiBrowserExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleBrowserComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/utils/browser/browser.module.ts







let ExampleBrowserModule = /*#__PURE__*/(() => {
  class ExampleBrowserModule {}

  ExampleBrowserModule.ɵfac = function ExampleBrowserModule_Factory(t) {
    return new (t || ExampleBrowserModule)();
  };

  ExampleBrowserModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleBrowserModule
  });
  ExampleBrowserModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleBrowserComponent))]]
  });
  return ExampleBrowserModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleBrowserModule, {
    declarations: [ExampleBrowserComponent, TuiBrowserExample1],
    imports: [common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleBrowserComponent]
  });
})();

/***/ })

}]);