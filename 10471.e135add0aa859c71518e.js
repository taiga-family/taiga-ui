"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[10471],{

/***/ 10471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiActiveZoneModule": () => (/* binding */ ExampleTuiActiveZoneModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/cdk/directives/active-zone/active-zone.directive.ts
var active_zone_directive = __webpack_require__(17163);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/active-zone/examples/1/index.ts





let TuiActiveZoneExample1 = /*#__PURE__*/(() => {
  class TuiActiveZoneExample1 {
    constructor() {
      this.childActive = false;
      this.parentActive = false;
      this.items = [1, 2, 3];
    }

    onParentActiveZone(active) {
      this.parentActive = active;
    }

    onChildActiveZone(active) {
      this.childActive = active;
    }

    onClick({
      nativeFocusableElement
    }) {
      if (nativeFocusableElement) {
        nativeFocusableElement.focus();
      }
    }

  }

  TuiActiveZoneExample1.ɵfac = function TuiActiveZoneExample1_Factory(t) {
    return new (t || TuiActiveZoneExample1)();
  };

  TuiActiveZoneExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiActiveZoneExample1,
    selectors: [["tui-active-zone-example-1"]],
    decls: 30,
    vars: 7,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6238607653600005463$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_EXAMPLES_1_INDEX_TS_1 = goog.getMsg(" You can bind different elements with {$startTagCode}[tuiActiveZoneParent]{$closeTagCode} directive ", {
          "startTagCode": "\uFFFD#23\uFFFD",
          "closeTagCode": "\uFFFD/#23\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_6238607653600005463$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟a5c932c71cc41af03986749d41d4e3c1ec8b9644␟6238607653600005463: You can bind different elements with ${"\uFFFD#23\uFFFD"}:START_TAG_CODE:[tuiActiveZoneParent]${"\uFFFD/#23\uFFFD"}:CLOSE_TAG_CODE: directive `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1484761029469449608$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_EXAMPLES_1_INDEX_TS_3 = goog.getMsg("Zone keeps active after browser tab change");
        i18n_2 = MSG_EXTERNAL_1484761029469449608$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_EXAMPLES_1_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟a18de0931ff43128131c2fcc6058c5f7542df1e0␟1484761029469449608:Zone keeps active after browser tab change`;
      }

      return [["placeholder", "input outside a zone"], [1, "active-zone", 3, "tuiActiveZoneChange"], ["parent", "tuiActiveZone"], ["tuiButton", "", "type", "button"], [1, "active-zone", 3, "tuiActiveZoneParent", "tuiActiveZoneChange"], ["input", ""], i18n_0, ["placeholder", "input outside zone"], [3, "click"], i18n_2];
    },
    template: function TuiActiveZoneExample1_Template(rf, ctx) {
      if (rf & 1) {
        const _r2 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵtext */._uU(1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
        fesm2015_core/* ɵɵtext */._uU(3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
        fesm2015_core/* ɵɵelement */._UZ(5, "input", 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "div", 1, 2);
        fesm2015_core/* ɵɵlistener */.NdJ("tuiActiveZoneChange", function TuiActiveZoneExample1_Template_div_tuiActiveZoneChange_6_listener($event) {
          return ctx.onParentActiveZone($event);
        });
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "h2");
        fesm2015_core/* ɵɵtext */._uU(9, "Parent zone");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "button", 3);
        fesm2015_core/* ɵɵtext */._uU(11, " A button inside zone ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "button");
        fesm2015_core/* ɵɵtext */._uU(14, "A button outside of zone");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "div", 4);
        fesm2015_core/* ɵɵlistener */.NdJ("tuiActiveZoneChange", function TuiActiveZoneExample1_Template_div_tuiActiveZoneChange_15_listener($event) {
          return ctx.onChildActiveZone($event);
        });
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "h2");
        fesm2015_core/* ɵɵtext */._uU(17, "Child zone");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "tui-input", null, 5);
        fesm2015_core/* ɵɵtext */._uU(20, "Input inside zone");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(21, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(22, 6);
        fesm2015_core/* ɵɵelement */._UZ(23, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(24, "p");
        fesm2015_core/* ɵɵelement */._UZ(25, "input", 7);
        fesm2015_core/* ɵɵelementStart */.TgZ(26, "button", 8);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiActiveZoneExample1_Template_button_click_26_listener() {
          fesm2015_core/* ɵɵrestoreView */.CHM(_r2);

          const _r1 = fesm2015_core/* ɵɵreference */.MAs(19);

          return ctx.onClick(_r1);
        });
        fesm2015_core/* ɵɵtext */._uU(27, "Focus input in zone");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(28, "p");
        fesm2015_core/* ɵɵi18n */.SDv(29, 9);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(7);

        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Parent zone: ", ctx.parentActive, "");
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Child zone: ", ctx.childActive, "");
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵclassProp */.ekj("active-zone_active", ctx.parentActive);
        fesm2015_core/* ɵɵadvance */.xp6(9);
        fesm2015_core/* ɵɵclassProp */.ekj("active-zone_active", ctx.childActive);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiActiveZoneParent", _r0);
      }
    },
    directives: [active_zone_directive/* TuiActiveZoneDirective */.e, button_component/* TuiButtonComponent */.v, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w],
    styles: [".active-zone[_ngcontent-%COMP%]{padding:1.25rem;border:2px solid}.active-zone_active[_ngcontent-%COMP%]{border-color:var(--tui-primary)}"],
    changeDetection: 0
  });
  return TuiActiveZoneExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/active-zone/active-zone.component.ts







function ExampleTuiActiveZoneComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 3);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-active-zone-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiActiveZoneComponent_ng_template_2_Template(rf, ctx) {
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
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-doc-code", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleHtml);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleComponent);
  }
}

let ExampleTuiActiveZoneComponent = /*#__PURE__*/(() => {
  class ExampleTuiActiveZoneComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 20226).then(__webpack_require__.t.bind(__webpack_require__, 20226, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 61323).then(__webpack_require__.t.bind(__webpack_require__, 61323, 17));
      this.exampleComponent = __webpack_require__.e(/* import() */ 40410).then(__webpack_require__.t.bind(__webpack_require__, 40410, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 41349).then(__webpack_require__.t.bind(__webpack_require__, 41349, 17)),
        HTML: __webpack_require__.e(/* import() */ 75177).then(__webpack_require__.t.bind(__webpack_require__, 75177, 17))
      };
    }

  }

  ExampleTuiActiveZoneComponent.ɵfac = function ExampleTuiActiveZoneComponent_Factory(t) {
    return new (t || ExampleTuiActiveZoneComponent)();
  };

  ExampleTuiActiveZoneComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiActiveZoneComponent,
    selectors: [["example-tui-active-zone"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4573156301401658203$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS_1 = goog.getMsg("ActiveZone");
        i18n_0 = MSG_EXTERNAL_4573156301401658203$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟12cbb0bfca7aa943e6579cb408b6e5cad88c810b␟4573156301401658203:ActiveZone`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5491960160291226248$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS__3 = goog.getMsg("{$startTagCode}tuiActiveZone{$closeTagCode} allows to track a scope that user interacts with. For example, for closing dropdown on blur ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_5491960160291226248$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟c21d9e6d201daf36fd245fa08f46330abfdd8b11␟5491960160291226248:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiActiveZone${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows to track a scope that user interacts with. For example, for closing dropdown on blur `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8188585896827437796$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS__5 = goog.getMsg("Composite zone");
        i18n_4 = MSG_EXTERNAL_8188585896827437796$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟dbc6ad292bce741b6302c6fc70a32a796734e2fa␟8188585896827437796:Composite zone`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4423300948625175026$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS__7 = goog.getMsg(" Import {$startTagCode}TuiActiveZoneModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_4423300948625175026$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟565d5c4a6d667762251f4fdeb1e747718456c702␟4423300948625175026: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiActiveZoneModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3799636229807761262$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS__9 = goog.getMsg("Add to the template and subscribe to a change:");
        i18n_8 = MSG_EXTERNAL_3799636229807761262$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_ACTIVE_ZONE_ACTIVE_ZONE_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟17eb6975c7e319b982144e2bd8f0ee6999e9eb2e␟3799636229807761262:Add to the template and subscribe to a change:`;
      }

      return [["header", i18n_0, "package", "CDK", "type", "directives"], ["pageTab", ""], ["pageTab", "Setup"], i18n_2, ["id", "multiple", "heading", i18n_4, 3, "content"], [1, "b-demo-steps"], i18n_6, ["filename", "myComponent.module.ts", 3, "code"], i18n_8, ["filename", "myComponent.template.html", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"]];
    },
    template: function ExampleTuiActiveZoneComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiActiveZoneComponent_ng_template_1_Template, 5, 1, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiActiveZoneComponent_ng_template_2_Template, 11, 3, "ng-template", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiActiveZoneExample1, code_component/* TuiDocCodeComponent */.c],
    styles: [".dropdown[_ngcontent-%COMP%]{max-width:20rem;padding:.5rem 1.25rem}"],
    changeDetection: 0
  });
  return ExampleTuiActiveZoneComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/active-zone/active-zone.module.ts










let ExampleTuiActiveZoneModule = /*#__PURE__*/(() => {
  class ExampleTuiActiveZoneModule {}

  ExampleTuiActiveZoneModule.ɵfac = function ExampleTuiActiveZoneModule_Factory(t) {
    return new (t || ExampleTuiActiveZoneModule)();
  };

  ExampleTuiActiveZoneModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiActiveZoneModule
  });
  ExampleTuiActiveZoneModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, kit.TuiInputModule, core.TuiButtonModule, cdk.TuiActiveZoneModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiActiveZoneComponent))]]
  });
  return ExampleTuiActiveZoneModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiActiveZoneModule, {
    declarations: [ExampleTuiActiveZoneComponent, TuiActiveZoneExample1],
    imports: [common/* CommonModule */.ez, kit.TuiInputModule, core.TuiButtonModule, cdk.TuiActiveZoneModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiActiveZoneComponent]
  });
})();

/***/ })

}]);