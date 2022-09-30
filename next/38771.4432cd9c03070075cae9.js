"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[38771],{

/***/ 38771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiLetModule": () => (/* binding */ ExampleTuiLetModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/interval.js
var interval = __webpack_require__(20945);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/startWith.js
var startWith = __webpack_require__(39761);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/cdk/directives/let/let.directive.ts
var let_directive = __webpack_require__(40939);
// EXTERNAL MODULE: ./projects/kit/components/badge/badge.component.ts
var badge_component = __webpack_require__(4123);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/let/examples/1/index.ts







function TuiLetExample1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementContainerStart */.ynx(0);
    core/* ɵɵelementStart */.TgZ(1, "p");
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "p");
    core/* ɵɵtext */._uU(4, " It can be used many times: ");
    core/* ɵɵelement */._UZ(5, "tui-badge", 1);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "p");
    core/* ɵɵtext */._uU(7, "It subsribed once and async pipe unsubsribes it after component destroy");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const time_r1 = ctx.tuiLet;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate1 */.hij("Timer value: ", time_r1, "");
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("value", time_r1);
  }
}

let TuiLetExample1 = /*#__PURE__*/(() => {
  class TuiLetExample1 {
    constructor() {
      this.timer$ = (0,interval/* interval */.F)(1000).pipe((0,startWith/* startWith */.O)(0));
    }

  }

  TuiLetExample1.ɵfac = function TuiLetExample1_Factory(t) {
    return new (t || TuiLetExample1)();
  };

  TuiLetExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiLetExample1,
    selectors: [["tui-let-example-1"]],
    decls: 2,
    vars: 3,
    consts: [[4, "tuiLet"], [3, "value"]],
    template: function TuiLetExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, TuiLetExample1_ng_container_0_Template, 8, 2, "ng-container", 0);
        core/* ɵɵpipe */.ALo(1, "async");
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("tuiLet", core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx.timer$));
      }
    },
    directives: [let_directive/* TuiLetDirective */.L, badge_component/* TuiBadgeComponent */.g],
    pipes: [common/* AsyncPipe */.Ov],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiLetExample1;
})();
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var projects_core = __webpack_require__(90987);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/let/examples/2/index.ts






function TuiLetExample2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "div");
    core/* ɵɵelementStart */.TgZ(1, "p");
    core/* ɵɵtext */._uU(2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "p");
    core/* ɵɵtext */._uU(4, " That can be used many times: ");
    core/* ɵɵelement */._UZ(5, "tui-badge", 1);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "p");
    core/* ɵɵtext */._uU(7, "And getter is called only once.");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const value_r1 = ctx.tuiLet;
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate1 */.hij("Calculated with getter value: ", value_r1, "");
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("value", value_r1);
  }
}

let TuiLetExample2 = /*#__PURE__*/(() => {
  class TuiLetExample2 {
    constructor(alertService) {
      this.alertService = alertService;
    }

    get getter() {
      this.alertService.open(`Getter called`).subscribe();
      return `🐳`;
    }

  }

  TuiLetExample2.ɵfac = function TuiLetExample2_Factory(t) {
    return new (t || TuiLetExample2)(core/* ɵɵdirectiveInject */.Y36(projects_core.TuiAlertService));
  };

  TuiLetExample2.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiLetExample2,
    selectors: [["tui-let-example-2"]],
    decls: 1,
    vars: 1,
    consts: [[4, "tuiLet"], [3, "value"]],
    template: function TuiLetExample2_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, TuiLetExample2_div_0_Template, 8, 2, "div", 0);
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("tuiLet", ctx.getter);
      }
    },
    directives: [let_directive/* TuiLetDirective */.L, badge_component/* TuiBadgeComponent */.g],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiLetExample2;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/let/let.component.ts








function ExampleTuiLetComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18nStart */.tHW(1, 3);
    core/* ɵɵelement */._UZ(2, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(4, "tui-let-example-1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 5);
    core/* ɵɵelement */._UZ(6, "tui-let-example-2");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(3);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiLetComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "ol", 6);
    core/* ɵɵelementStart */.TgZ(1, "li");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵi18nStart */.tHW(3, 7);
    core/* ɵɵelement */._UZ(4, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(5, "tui-doc-code", 8);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "li");
    core/* ɵɵelementStart */.TgZ(7, "p");
    core/* ɵɵi18n */.SDv(8, 9);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(9, "tui-doc-code", 10);
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

let ExampleTuiLetComponent = /*#__PURE__*/(() => {
  class ExampleTuiLetComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 89065).then(__webpack_require__.t.bind(__webpack_require__, 89065, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 10686).then(__webpack_require__.t.bind(__webpack_require__, 10686, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 33542).then(__webpack_require__.t.bind(__webpack_require__, 33542, 17)),
        HTML: __webpack_require__.e(/* import() */ 757).then(__webpack_require__.t.bind(__webpack_require__, 757, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 43846).then(__webpack_require__.t.bind(__webpack_require__, 43846, 17)),
        HTML: __webpack_require__.e(/* import() */ 38782).then(__webpack_require__.t.bind(__webpack_require__, 38782, 17))
      };
    }

  }

  ExampleTuiLetComponent.ɵfac = function ExampleTuiLetComponent_Factory(t) {
    return new (t || ExampleTuiLetComponent)();
  };

  ExampleTuiLetComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiLetComponent,
    selectors: [["example-tui-let"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8326979193506336947$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LET_LET_COMPONENT_TS_1 = goog.getMsg("Let");
        i18n_0 = MSG_EXTERNAL_8326979193506336947$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LET_LET_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟2b4b6c9f7e73ce6aef2d91dd38ed32e42dfbb287␟8326979193506336947:Let`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2859072350697962150$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LET_LET_COMPONENT_TS__3 = goog.getMsg(" Directive {$startTagCode}tuiLet{$closeTagCode} allows to reuse computed value in several places in template to avoid recalculations of getters or many async pipes ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_2859072350697962150$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LET_LET_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟0b86f52a4851e254f625dcfa6c3693c670ffe4a0␟2859072350697962150: Directive ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:tuiLet${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: allows to reuse computed value in several places in template to avoid recalculations of getters or many async pipes `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4468319477322216439$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LET_LET_COMPONENT_TS__5 = goog.getMsg(" Import {$startTagCode}TuiLetModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_4468319477322216439$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LET_LET_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟dcd5be68c9d00f31c19f8588105dcefcd365c747␟4468319477322216439: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiLetModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LET_LET_COMPONENT_TS__7 = goog.getMsg("Add to the template:");
        i18n_6 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_DIRECTIVES_LET_LET_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "CDK", "type", "directives"], ["pageTab", ""], ["pageTab", "Setup"], i18n_2, ["id", "pipe", "heading", "With Pipe", 3, "content"], ["id", "getter", "heading", "With getter", 3, "content"], [1, "b-demo-steps"], i18n_4, ["filename", "myComponent.module.ts", 3, "code"], i18n_6, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiLetComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiLetComponent_ng_template_1_Template, 7, 2, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiLetComponent_ng_template_2_Template, 10, 2, "ng-template", 2);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiLetExample1, TuiLetExample2, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiLetComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/directives/let/let.module.ts










let ExampleTuiLetModule = /*#__PURE__*/(() => {
  class ExampleTuiLetModule {}

  ExampleTuiLetModule.ɵfac = function ExampleTuiLetModule_Factory(t) {
    return new (t || ExampleTuiLetModule)();
  };

  ExampleTuiLetModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiLetModule
  });
  ExampleTuiLetModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, cdk.TuiLetModule, kit.TuiBadgeModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiLetComponent))]]
  });
  return ExampleTuiLetModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiLetModule, {
    declarations: [ExampleTuiLetComponent, TuiLetExample1, TuiLetExample2],
    imports: [common/* CommonModule */.ez, cdk.TuiLetModule, kit.TuiBadgeModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiLetComponent]
  });
})();

/***/ })

}]);