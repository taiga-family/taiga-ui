"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[16234],{

/***/ 16234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiTouchableModule": () => (/* binding */ ExampleTuiTouchableModule)
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
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/island/island.component.ts
var island_component = __webpack_require__(70329);
// EXTERNAL MODULE: ./projects/addon-mobile/directives/touchable/touchable.directive.ts
var touchable_directive = __webpack_require__(18620);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/touchable/examples/1/index.ts



let TuiTouchableExample1 = /*#__PURE__*/(() => {
  class TuiTouchableExample1 {}

  TuiTouchableExample1.ɵfac = function TuiTouchableExample1_Factory(t) {
    return new (t || TuiTouchableExample1)();
  };

  TuiTouchableExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTouchableExample1,
    selectors: [["tui-touchable-example-1"]],
    decls: 12,
    vars: 0,
    consts: [["tuiTouchable", "transform", 1, "tui-space_bottom-3"], ["tuiTouchable", "opacity", 1, "tui-space_bottom-3"], ["tuiTouchable", "background", 1, "tui-space_bottom-3"]],
    template: function TuiTouchableExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-island", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "h1");
        fesm2015_core/* ɵɵtext */._uU(2, "transform");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(3, " I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die.\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-island", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "h1");
        fesm2015_core/* ɵɵtext */._uU(6, "opacity");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(7, " I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die.\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-island", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "h1");
        fesm2015_core/* ɵɵtext */._uU(10, "background");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(11, " I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die.\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [island_component/* TuiIslandComponent */.h, touchable_directive/* TuiTouchableDirective */.u],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTouchableExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/touchable/touchable.component.ts







function ExampleTuiTouchableComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-touchable-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiTouchableComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 6);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 9);
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

let ExampleTuiTouchableComponent = /*#__PURE__*/(() => {
  class ExampleTuiTouchableComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 79380).then(__webpack_require__.t.bind(__webpack_require__, 79380, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 83355).then(__webpack_require__.t.bind(__webpack_require__, 83355, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 56710).then(__webpack_require__.t.bind(__webpack_require__, 67498, 17)),
        HTML: __webpack_require__.e(/* import() */ 23551).then(__webpack_require__.t.bind(__webpack_require__, 23551, 17))
      };
    }

  }

  ExampleTuiTouchableComponent.ɵfac = function ExampleTuiTouchableComponent_Factory(t) {
    return new (t || ExampleTuiTouchableComponent)();
  };

  ExampleTuiTouchableComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiTouchableComponent,
    selectors: [["example-tui-touchable"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2654736697039324375$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TOUCHABLE_TOUCHABLE_COMPONENT_TS_1 = goog.getMsg("Touchable");
        i18n_0 = MSG_EXTERNAL_2654736697039324375$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TOUCHABLE_TOUCHABLE_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟e1fc0e517baac7f3ff8088d30a293e51a042fa91␟2654736697039324375:Touchable`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TOUCHABLE_TOUCHABLE_COMPONENT_TS_3 = goog.getMsg("Setup");
        i18n_2 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TOUCHABLE_TOUCHABLE_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6052132377359813438$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TOUCHABLE_TOUCHABLE_COMPONENT_TS__5 = goog.getMsg("Directive to emulate native iOS touches");
        i18n_4 = MSG_EXTERNAL_6052132377359813438$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TOUCHABLE_TOUCHABLE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟f2a5e9fd092187f91f56d0aceda641ecc6ec7898␟6052132377359813438:Directive to emulate native iOS touches`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TOUCHABLE_TOUCHABLE_COMPONENT_TS__7 = goog.getMsg("Basic");
        i18n_6 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TOUCHABLE_TOUCHABLE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1292057992314856238$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TOUCHABLE_TOUCHABLE_COMPONENT_TS__9 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiTouchableModule{$closeTagCode} in the same module where you want to use our directive: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_1292057992314856238$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TOUCHABLE_TOUCHABLE_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟7306c17dd6f8193a7dd80cfe4fadefce88040466␟1292057992314856238: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTouchableModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our directive: `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TOUCHABLE_TOUCHABLE_COMPONENT_TS__11 = goog.getMsg("Add to the template:");
        i18n_10 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_TOUCHABLE_TOUCHABLE_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "ADDON-MOBILE", "type", "directives"], ["pageTab", ""], ["pageTab", i18n_2], i18n_4, ["id", "basic", "heading", i18n_6, 3, "content"], [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.module.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiTouchableComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiTouchableComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiTouchableComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiTouchableExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiTouchableComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/touchable/touchable.module.ts










let ExampleTuiTouchableModule = /*#__PURE__*/(() => {
  class ExampleTuiTouchableModule {}

  ExampleTuiTouchableModule.ɵfac = function ExampleTuiTouchableModule_Factory(t) {
    return new (t || ExampleTuiTouchableModule)();
  };

  ExampleTuiTouchableModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiTouchableModule
  });
  ExampleTuiTouchableModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, kit.TuiIslandModule, core.TuiLinkModule, addon_mobile.TuiTouchableModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiTouchableComponent))]]
  });
  return ExampleTuiTouchableModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiTouchableModule, {
    declarations: [ExampleTuiTouchableComponent, TuiTouchableExample1],
    imports: [common/* CommonModule */.ez, kit.TuiIslandModule, core.TuiLinkModule, addon_mobile.TuiTouchableModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiTouchableComponent]
  });
})();

/***/ })

}]);