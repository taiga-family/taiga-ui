"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[33943],{

/***/ 97539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiRippleModule": () => (/* binding */ ExampleTuiRippleModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/addon-mobile/index.ts + 34 modules
var addon_mobile = __webpack_require__(75650);
// EXTERNAL MODULE: ./projects/kit/index.ts + 115 modules
var kit = __webpack_require__(56757);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/island/island.component.ts
var island_component = __webpack_require__(70329);
// EXTERNAL MODULE: ./projects/addon-mobile/directives/ripple/ripple.directive.ts
var ripple_directive = __webpack_require__(59759);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/ripple/examples/1/index.ts



let TuiRippleExample1 = /*#__PURE__*/(() => {
  class TuiRippleExample1 {}

  TuiRippleExample1.ɵfac = function TuiRippleExample1_Factory(t) {
    return new (t || TuiRippleExample1)();
  };

  TuiRippleExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiRippleExample1,
    selectors: [["tui-ripple-example-1"]],
    decls: 10,
    vars: 0,
    consts: [["tuiRipple", "radial-gradient(circle, #5c0067 0%, #00d4ff 100%)", 1, "tui-space_bottom-3"], ["tuiRipple", "skyblue", 1, "tui-space_bottom-3"], ["tuiRipple", "red", 1, "tui-space_bottom-3"], ["tuiRipple", "", 1, "tui-space_bottom-3"], ["tuiRipple", "blue", 1, "tui-space_bottom-3"]],
    template: function TuiRippleExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-island", 0);
        core/* ɵɵtext */._uU(1, " I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die.\n");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(2, "tui-island", 1);
        core/* ɵɵtext */._uU(3, " I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die.\n");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(4, "tui-island", 2);
        core/* ɵɵtext */._uU(5, " I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die.\n");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(6, "tui-island", 3);
        core/* ɵɵtext */._uU(7, " I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die.\n");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(8, "tui-island", 4);
        core/* ɵɵtext */._uU(9, " I've seen things you people wouldn't believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhauser gate. All those moments will be lost in time... like tears in rain... Time to die.\n");
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [island_component/* TuiIslandComponent */.h, ripple_directive/* TuiRippleDirective */.q],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiRippleExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/ripple/ripple.component.ts







function ExampleTuiRippleComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18n */.SDv(1, 3);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(3, "tui-ripple-example-1");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiRippleComponent_ng_template_2_Template(rf, ctx) {
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
    core/* ɵɵi18n */.SDv(8, 8);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(9, "tui-doc-code", 9);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleModule);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleHtml);
  }
}

let ExampleTuiRippleComponent = /*#__PURE__*/(() => {
  class ExampleTuiRippleComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 51794).then(__webpack_require__.t.bind(__webpack_require__, 51794, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 25005).then(__webpack_require__.t.bind(__webpack_require__, 25005, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 21736).then(__webpack_require__.t.bind(__webpack_require__, 21736, 17)),
        HTML: __webpack_require__.e(/* import() */ 67820).then(__webpack_require__.t.bind(__webpack_require__, 67820, 17))
      };
    }

  }

  ExampleTuiRippleComponent.ɵfac = function ExampleTuiRippleComponent_Factory(t) {
    return new (t || ExampleTuiRippleComponent)();
  };

  ExampleTuiRippleComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiRippleComponent,
    selectors: [["example-tui-ripple"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8353780137905022126$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_RIPPLE_RIPPLE_COMPONENT_TS_1 = goog.getMsg("Ripple");
        i18n_0 = MSG_EXTERNAL_8353780137905022126$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_RIPPLE_RIPPLE_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟78c3b0ca7675e1a115dc016090743e84d460affc␟8353780137905022126:Ripple`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_RIPPLE_RIPPLE_COMPONENT_TS_3 = goog.getMsg("Setup");
        i18n_2 = MSG_EXTERNAL_6492831808763156510$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_RIPPLE_RIPPLE_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1831144679796765667$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_RIPPLE_RIPPLE_COMPONENT_TS__5 = goog.getMsg("Directive for \u00ABripple\u00BB effect on mobile devices");
        i18n_4 = MSG_EXTERNAL_1831144679796765667$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_RIPPLE_RIPPLE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟f021a1b8f80003745801b9ee8a7e3f8d5170a0bc␟1831144679796765667:Directive for «ripple» effect on mobile devices`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_RIPPLE_RIPPLE_COMPONENT_TS__7 = goog.getMsg("Basic");
        i18n_6 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_RIPPLE_RIPPLE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4369203972757875729$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_RIPPLE_RIPPLE_COMPONENT_TS__9 = goog.getMsg(" Import an Angular module for forms and {$startTagCode}TuiRippleModule{$closeTagCode} in the same module where you want to use our directive: ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_4369203972757875729$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_RIPPLE_RIPPLE_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟442be652d45d09367739bf24d3cc691d2e2938e1␟4369203972757875729: Import an Angular module for forms and ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiRippleModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: in the same module where you want to use our directive: `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_RIPPLE_RIPPLE_COMPONENT_TS__11 = goog.getMsg("Add to the template:");
        i18n_10 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_RIPPLE_RIPPLE_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "ADDON-MOBILE", "type", "directives"], ["pageTab", ""], ["pageTab", i18n_2], i18n_4, ["id", "basic", "heading", i18n_6, 3, "content"], [1, "b-demo-steps"], i18n_8, ["filename", "myComponent.module.ts", 3, "code"], i18n_10, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiRippleComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiRippleComponent_ng_template_1_Template, 4, 1, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiRippleComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiRippleExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiRippleComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/ripple/ripple.module.ts









let ExampleTuiRippleModule = /*#__PURE__*/(() => {
  class ExampleTuiRippleModule {}

  ExampleTuiRippleModule.ɵfac = function ExampleTuiRippleModule_Factory(t) {
    return new (t || ExampleTuiRippleModule)();
  };

  ExampleTuiRippleModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiRippleModule
  });
  ExampleTuiRippleModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, kit.TuiIslandModule, addon_mobile.TuiRippleModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiRippleComponent))]]
  });
  return ExampleTuiRippleModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiRippleModule, {
    declarations: [ExampleTuiRippleComponent, TuiRippleExample1],
    imports: [common/* CommonModule */.ez, kit.TuiIslandModule, addon_mobile.TuiRippleModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiRippleComponent]
  });
})();

/***/ })

}]);