"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[44577],{

/***/ 44577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiPresentModule": () => (/* binding */ ExampleTuiPresentModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/cdk/directives/hovered/hovered.directive.ts
var hovered_directive = __webpack_require__(61369);
// EXTERNAL MODULE: ./projects/kit/directives/present/present.directive.ts
var present_directive = __webpack_require__(9568);
// EXTERNAL MODULE: ./projects/kit/components/badge/badge.component.ts
var badge_component = __webpack_require__(4123);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/present/examples/1/index.ts






function TuiPresentExample1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = core/* ɵɵgetCurrentView */.EpF();

    core/* ɵɵi18nStart */.tHW(0, 1, 1);
    core/* ɵɵelementStart */.TgZ(1, "span", 2);
    core/* ɵɵlistener */.NdJ("tuiPresentChange", function TuiPresentExample1_span_3_Template_span_tuiPresentChange_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r2);
      const ctx_r1 = core/* ɵɵnextContext */.oxw();
      return ctx_r1.onIf($event);
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵi18nEnd */.N_p();
  }
}

let TuiPresentExample1 = /*#__PURE__*/(() => {
  class TuiPresentExample1 {
    constructor() {
      this.counterCSS = 0;
      this.counterIf = 0;
      this.hovered = false;
    }

    onHovered(hovered) {
      this.hovered = hovered;
    }

    onCSS(visible) {
      this.counterCSS += visible ? 1 : -1;
    }

    onIf(visible) {
      this.counterIf += visible ? 1 : -1;
    }

  }

  TuiPresentExample1.ɵfac = function TuiPresentExample1_Factory(t) {
    return new (t || TuiPresentExample1)();
  };

  TuiPresentExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiPresentExample1,
    selectors: [["tui-present-example-1"]],
    decls: 12,
    vars: 5,
    consts: function () {
      let i18n_1;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9077025469050371295$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PRESENT_EXAMPLES_1_INDEX_TS_2 = goog.getMsg("Counter of component appearance minus counter of its disappearance:");
        i18n_1 = MSG_EXTERNAL_9077025469050371295$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PRESENT_EXAMPLES_1_INDEX_TS_2;
      } else {
        i18n_1 = $localize`:␟ae22a3cf2aa4f558b8e5339a8828934dca1db1cc␟9077025469050371295:Counter of component appearance minus counter of its disappearance:`;
      }

      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7044645915109166344$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PRESENT_EXAMPLES_1_INDEX_TS__3 = goog.getMsg(" Hover {$startTagSpan} I am a component hidden with CSS {$closeTagSpan}{$startTagSpan_1} I am a component hidden with *ngIf {$closeTagSpan}", {
          "startTagSpan": "\uFFFD#2\uFFFD",
          "closeTagSpan": "[\uFFFD/#2\uFFFD|\uFFFD/#1:1\uFFFD\uFFFD/*3:1\uFFFD]",
          "startTagSpan_1": "\uFFFD*3:1\uFFFD\uFFFD#1:1\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_7044645915109166344$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PRESENT_EXAMPLES_1_INDEX_TS__3;
      } else {
        i18n_0 = $localize`:␟7cd644c498b69bc3f7194ce48190b3df87292d9e␟7044645915109166344: Hover ${"\uFFFD#2\uFFFD"}:START_TAG_SPAN: I am a component hidden with CSS ${"[\uFFFD/#2\uFFFD|\uFFFD/#1:1\uFFFD\uFFFD/*3:1\uFFFD]"}:CLOSE_TAG_SPAN:${"\uFFFD*3:1\uFFFD\uFFFD#1:1\uFFFD"}:START_TAG_SPAN_1: I am a component hidden with *ngIf ${"[\uFFFD/#2\uFFFD|\uFFFD/#1:1\uFFFD\uFFFD/*3:1\uFFFD]"}:CLOSE_TAG_SPAN:`;
      }

      i18n_0 = core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      return [[3, "tuiHoveredChange"], i18n_0, [3, "tuiPresentChange"], [3, "tuiPresentChange", 4, "ngIf"], i18n_1, [3, "value"]];
    },
    template: function TuiPresentExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "p", 0);
        core/* ɵɵlistener */.NdJ("tuiHoveredChange", function TuiPresentExample1_Template_p_tuiHoveredChange_0_listener($event) {
          return ctx.onHovered($event);
        });
        core/* ɵɵi18nStart */.tHW(1, 1);
        core/* ɵɵelementStart */.TgZ(2, "span", 2);
        core/* ɵɵlistener */.NdJ("tuiPresentChange", function TuiPresentExample1_Template_span_tuiPresentChange_2_listener($event) {
          return ctx.onCSS($event);
        });
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵtemplate */.YNc(3, TuiPresentExample1_span_3_Template, 2, 0, "span", 3);
        core/* ɵɵi18nEnd */.N_p();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(4, "p");
        core/* ɵɵi18n */.SDv(5, 4);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(6, "p");
        core/* ɵɵtext */._uU(7, " CSS: ");
        core/* ɵɵelement */._UZ(8, "tui-badge", 5);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(9, "p");
        core/* ɵɵtext */._uU(10, " ngIf: ");
        core/* ɵɵelement */._UZ(11, "tui-badge", 5);
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵclassProp */.ekj("hidden", !ctx.hovered);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngIf", ctx.hovered);
        core/* ɵɵadvance */.xp6(5);
        core/* ɵɵproperty */.Q6J("value", ctx.counterCSS);
        core/* ɵɵadvance */.xp6(3);
        core/* ɵɵproperty */.Q6J("value", ctx.counterIf);
      }
    },
    directives: [hovered_directive/* TuiHoveredDirective */.c, present_directive/* TuiPresentDirective */.j, common/* NgIf */.O5, badge_component/* TuiBadgeComponent */.g],
    styles: [".hidden[_ngcontent-%COMP%]{display:none}"],
    changeDetection: 0
  });
  return TuiPresentExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/present/present.component.ts







function ExampleTuiPresentComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18nStart */.tHW(1, 3);
    core/* ɵɵelement */._UZ(2, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(4, "tui-present-example-1");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function ExampleTuiPresentComponent_ng_template_2_Template(rf, ctx) {
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

let ExampleTuiPresentComponent = /*#__PURE__*/(() => {
  class ExampleTuiPresentComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 86320).then(__webpack_require__.t.bind(__webpack_require__, 86320, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 45589).then(__webpack_require__.t.bind(__webpack_require__, 45589, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 98146).then(__webpack_require__.t.bind(__webpack_require__, 70995, 17)),
        HTML: __webpack_require__.e(/* import() */ 89409).then(__webpack_require__.t.bind(__webpack_require__, 89409, 17)),
        LESS: __webpack_require__.e(/* import() */ 59274).then(__webpack_require__.t.bind(__webpack_require__, 59274, 17))
      };
    }

  }

  ExampleTuiPresentComponent.ɵfac = function ExampleTuiPresentComponent_Factory(t) {
    return new (t || ExampleTuiPresentComponent)();
  };

  ExampleTuiPresentComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiPresentComponent,
    selectors: [["example-tui-present"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6522877977962061564$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS_1 = goog.getMsg("Present");
        i18n_0 = MSG_EXTERNAL_6522877977962061564$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟9acc685ba486c486bf39972d10827622a7acbd02␟6522877977962061564:Present`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9105695448473968927$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS__3 = goog.getMsg("{$startTagCode}tuiPresentChange{$closeTagCode} allows to detect appearance of elements in DOM ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_9105695448473968927$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟68ffa88b424884f6f5d007587d01553dd130a576␟9105695448473968927:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiPresentChange${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows to detect appearance of elements in DOM `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS__5 = goog.getMsg("Basic");
        i18n_4 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3451653107334231798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS__7 = goog.getMsg(" Import {$startTagCode}TuiPresentModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_3451653107334231798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟a8301097342fdee8e7a9cce37a8a87560c6f4cd7␟3451653107334231798: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiPresentModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS__9 = goog.getMsg("Add to the template:");
        i18n_8 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_PRESENT_PRESENT_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "CORE", "path", "kit/directives/present"], ["pageTab", ""], ["pageTab", "Setup"], i18n_2, ["id", "base", "heading", i18n_4, 3, "content"], [1, "b-demo-steps"], i18n_6, ["filename", "myComponent.module.ts", 3, "code"], i18n_8, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiPresentComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiPresentComponent_ng_template_1_Template, 5, 1, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiPresentComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiPresentExample1, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiPresentComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/present/present.module.ts









let ExampleTuiPresentModule = /*#__PURE__*/(() => {
  class ExampleTuiPresentModule {}

  ExampleTuiPresentModule.ɵfac = function ExampleTuiPresentModule_Factory(t) {
    return new (t || ExampleTuiPresentModule)();
  };

  ExampleTuiPresentModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiPresentModule
  });
  ExampleTuiPresentModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, cdk.TuiLetModule, kit.TuiPresentModule, cdk.TuiHoveredModule, kit.TuiBadgeModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiPresentComponent))]]
  });
  return ExampleTuiPresentModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiPresentModule, {
    declarations: [ExampleTuiPresentComponent, TuiPresentExample1],
    imports: [common/* CommonModule */.ez, cdk.TuiLetModule, kit.TuiPresentModule, cdk.TuiHoveredModule, kit.TuiBadgeModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiPresentComponent]
  });
})();

/***/ })

}]);