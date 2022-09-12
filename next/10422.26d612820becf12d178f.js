"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[10422],{

/***/ 10422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiBarSetModule": () => (/* binding */ ExampleTuiBarSetModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-charts/index.ts + 20 modules
var addon_charts = __webpack_require__(50179);
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
// EXTERNAL MODULE: ./projects/addon-charts/components/bar-set/bar-set.component.ts
var bar_set_component = __webpack_require__(54147);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/bar-set/examples/1/index.ts


let TuiBarSetExample1 = /*#__PURE__*/(() => {
  class TuiBarSetExample1 {
    constructor() {
      this.value = [30, 15, 10];
    }

  }

  TuiBarSetExample1.ɵfac = function TuiBarSetExample1_Factory(t) {
    return new (t || TuiBarSetExample1)();
  };

  TuiBarSetExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiBarSetExample1,
    selectors: [["tui-bar-set-example-1"]],
    decls: 1,
    vars: 2,
    consts: [[1, "bars", 3, "value", "size"]],
    template: function TuiBarSetExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelement */._UZ(0, "tui-bar-set", 0);
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("value", ctx.value)("size", null);
      }
    },
    directives: [bar_set_component/* TuiBarSetComponent */.I],
    styles: [".bars[_ngcontent-%COMP%]{height:6.25rem;width:10rem;box-shadow:0 1px var(--tui-base-03)}"],
    changeDetection: 0
  });
  return TuiBarSetExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/bar-set/examples/2/index.ts


let TuiBarSetExample2 = /*#__PURE__*/(() => {
  class TuiBarSetExample2 {
    constructor() {
      this.value = [30, 15, 10];
    }

  }

  TuiBarSetExample2.ɵfac = function TuiBarSetExample2_Factory(t) {
    return new (t || TuiBarSetExample2)();
  };

  TuiBarSetExample2.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiBarSetExample2,
    selectors: [["tui-bar-set-example-2"]],
    decls: 1,
    vars: 1,
    consts: [["size", "m", 1, "bars", 3, "value"]],
    template: function TuiBarSetExample2_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelement */._UZ(0, "tui-bar-set", 0);
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("value", ctx.value);
      }
    },
    directives: [bar_set_component/* TuiBarSetComponent */.I],
    styles: [".bars[_ngcontent-%COMP%]{height:6.25rem;width:10rem;box-shadow:0 1px var(--tui-base-03)}"],
    changeDetection: 0
  });
  return TuiBarSetExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/bar-set/examples/3/index.ts


let TuiBarSetExample3 = /*#__PURE__*/(() => {
  class TuiBarSetExample3 {
    constructor() {
      this.value = [30, -15];
    }

  }

  TuiBarSetExample3.ɵfac = function TuiBarSetExample3_Factory(t) {
    return new (t || TuiBarSetExample3)();
  };

  TuiBarSetExample3.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiBarSetExample3,
    selectors: [["tui-bar-set-example-3"]],
    decls: 1,
    vars: 1,
    consts: [[1, "bars", 3, "value"]],
    template: function TuiBarSetExample3_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelement */._UZ(0, "tui-bar-set", 0);
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("value", ctx.value);
      }
    },
    directives: [bar_set_component/* TuiBarSetComponent */.I],
    styles: [".bars[_ngcontent-%COMP%]{height:6.25rem;width:3.75rem;margin-bottom:3.125rem;box-shadow:0 1px var(--tui-base-03);--tui-chart-0: var(--tui-primary);--tui-chart-1: var(--tui-primary)}"],
    changeDetection: 0
  });
  return TuiBarSetExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/bar-set/examples/4/index.ts


let TuiBarSetExample4 = /*#__PURE__*/(() => {
  class TuiBarSetExample4 {
    constructor() {
      this.value = [30, 45, 12, 6, 20];
    }

  }

  TuiBarSetExample4.ɵfac = function TuiBarSetExample4_Factory(t) {
    return new (t || TuiBarSetExample4)();
  };

  TuiBarSetExample4.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiBarSetExample4,
    selectors: [["tui-bar-set-example-4"]],
    decls: 2,
    vars: 1,
    consts: [[1, "wrapper"], [1, "bars", 3, "value"]],
    template: function TuiBarSetExample4_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0);
        core/* ɵɵelement */._UZ(1, "tui-bar-set", 1);
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("value", ctx.value);
      }
    },
    directives: [bar_set_component/* TuiBarSetComponent */.I],
    styles: [".wrapper[_ngcontent-%COMP%]{height:6.25rem}.bars[_ngcontent-%COMP%]{height:12.5rem;width:6.25rem;margin-bottom:3.125rem;box-shadow:0 1px var(--tui-base-03);transform-origin:bottom left;transform:rotate(90deg) translate(-12.5rem);--tui-chart-0: linear-gradient(#ffc500, #c21500);--tui-chart-1: linear-gradient(#26a0da, #314755);--tui-chart-2: linear-gradient(#f64f59, #c471ed, #12c2e9);--tui-chart-3: linear-gradient(#c94b4b, #4b134f);--tui-chart-4: linear-gradient(#114357, #f29492)}"],
    changeDetection: 0
  });
  return TuiBarSetExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/bar-set/examples/5/index.ts


let TuiBarSetExample5 = /*#__PURE__*/(() => {
  class TuiBarSetExample5 {
    constructor() {
      this.value = [45, 30, 20, 12, 6];
    }

  }

  TuiBarSetExample5.ɵfac = function TuiBarSetExample5_Factory(t) {
    return new (t || TuiBarSetExample5)();
  };

  TuiBarSetExample5.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiBarSetExample5,
    selectors: [["tui-bar-set-example-5"]],
    decls: 1,
    vars: 2,
    consts: [[1, "bars", 3, "collapsed", "value"]],
    template: function TuiBarSetExample5_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelement */._UZ(0, "tui-bar-set", 0);
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("collapsed", true)("value", ctx.value);
      }
    },
    directives: [bar_set_component/* TuiBarSetComponent */.I],
    styles: [".bars[_ngcontent-%COMP%]{height:7.5rem;width:5rem;box-shadow:0 1px var(--tui-base-03)}"],
    changeDetection: 0
  });
  return TuiBarSetExample5;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/bar-set/bar-set.component.ts















function ExampleTuiBarSetComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵi18n */.SDv(1, 2);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    core/* ɵɵelement */._UZ(3, "tui-bar-set-example-1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    core/* ɵɵelement */._UZ(5, "tui-bar-set-example-2");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    core/* ɵɵelement */._UZ(7, "tui-bar-set-example-3");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    core/* ɵɵelement */._UZ(9, "tui-bar-set-example-4");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 7);
    core/* ɵɵelement */._UZ(11, "tui-bar-set-example-5");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
  }
}

function ExampleTuiBarSetComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 12);
  }
}

function ExampleTuiBarSetComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18nStart */.tHW(0, 13);
    core/* ɵɵelement */._UZ(1, "code");
    core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiBarSetComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleTuiBarSetComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = core/* ɵɵgetCurrentView */.EpF();

    core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    core/* ɵɵelement */._UZ(1, "tui-bar-set", 8);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    core/* ɵɵtemplate */.YNc(3, ExampleTuiBarSetComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 9);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBarSetComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = core/* ɵɵnextContext */.oxw();
      return ctx_r6.collapsed = $event;
    });
    core/* ɵɵtemplate */.YNc(4, ExampleTuiBarSetComponent_ng_template_2_ng_template_4_Template, 2, 0, "ng-template", 10);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBarSetComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r8 = core/* ɵɵnextContext */.oxw();
      return ctx_r8.size = $event;
    });
    core/* ɵɵtemplate */.YNc(5, ExampleTuiBarSetComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 11);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBarSetComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r9 = core/* ɵɵnextContext */.oxw();
      return ctx_r9.value = $event;
    });
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("collapsed", ctx_r1.collapsed)("value", ctx_r1.value)("size", ctx_r1.size);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.collapsed);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
  }
}

function ExampleTuiBarSetComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "ol", 15);
    core/* ɵɵelementStart */.TgZ(1, "li");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵi18nStart */.tHW(3, 16);
    core/* ɵɵelement */._UZ(4, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(5, "tui-doc-code", 17);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "li");
    core/* ɵɵelementStart */.TgZ(7, "p");
    core/* ɵɵi18n */.SDv(8, 18);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(9, "tui-doc-code", 19);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiBarSetComponent = /*#__PURE__*/(() => {
  class ExampleTuiBarSetComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 13027).then(__webpack_require__.t.bind(__webpack_require__, 13027, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 78433).then(__webpack_require__.t.bind(__webpack_require__, 78433, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 43993).then(__webpack_require__.t.bind(__webpack_require__, 43993, 17)),
        HTML: __webpack_require__.e(/* import() */ 56920).then(__webpack_require__.t.bind(__webpack_require__, 56920, 17)),
        LESS: __webpack_require__.e(/* import() */ 63896).then(__webpack_require__.t.bind(__webpack_require__, 63896, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 14340).then(__webpack_require__.t.bind(__webpack_require__, 14340, 17)),
        HTML: __webpack_require__.e(/* import() */ 93221).then(__webpack_require__.t.bind(__webpack_require__, 93221, 17)),
        LESS: __webpack_require__.e(/* import() */ 32766).then(__webpack_require__.t.bind(__webpack_require__, 32766, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 82016).then(__webpack_require__.t.bind(__webpack_require__, 82016, 17)),
        HTML: __webpack_require__.e(/* import() */ 31706).then(__webpack_require__.t.bind(__webpack_require__, 31706, 17)),
        LESS: __webpack_require__.e(/* import() */ 80750).then(__webpack_require__.t.bind(__webpack_require__, 80750, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 97628).then(__webpack_require__.t.bind(__webpack_require__, 97628, 17)),
        HTML: __webpack_require__.e(/* import() */ 37079).then(__webpack_require__.t.bind(__webpack_require__, 37079, 17)),
        LESS: __webpack_require__.e(/* import() */ 62848).then(__webpack_require__.t.bind(__webpack_require__, 62848, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 13531).then(__webpack_require__.t.bind(__webpack_require__, 13531, 17)),
        HTML: __webpack_require__.e(/* import() */ 82803).then(__webpack_require__.t.bind(__webpack_require__, 82803, 17)),
        LESS: __webpack_require__.e(/* import() */ 76828).then(__webpack_require__.t.bind(__webpack_require__, 76828, 17))
      };
      this.collapsed = false;
      this.sizeVariants = [`s`, `m`, `l`];
      this.size = null;
      this.valueVariants = [[30, 20, 10], [237, -50, 10, 5, 1]];
      this.value = this.valueVariants[0];
    }

  }

  ExampleTuiBarSetComponent.ɵfac = function ExampleTuiBarSetComponent_Factory(t) {
    return new (t || ExampleTuiBarSetComponent)();
  };

  ExampleTuiBarSetComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiBarSetComponent,
    selectors: [["example-tui-bar-set"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3857656113643577938$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS_1 = goog.getMsg("BarSet");
        i18n_0 = MSG_EXTERNAL_3857656113643577938$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟663c89ab67d644820007bdd3acb345936fd82cd6␟3857656113643577938:BarSet`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1990999015787992299$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__3 = goog.getMsg("A group of bars for bar chart");
        i18n_2 = MSG_EXTERNAL_1990999015787992299$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟17339786f993f82e7a0dfda57ea361199a4746ad␟1990999015787992299:A group of bars for bar chart`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2734923032520642265$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__5 = goog.getMsg("Dynamic size");
        i18n_4 = MSG_EXTERNAL_2734923032520642265$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟f63ad923919ae0f90cc865b2ec01ec2d178613f7␟2734923032520642265:Dynamic size`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7612070527746743628$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__7 = goog.getMsg("Fixed size");
        i18n_6 = MSG_EXTERNAL_7612070527746743628$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟b8e94cfe6bc09b41fd9500aa0b256dd1221957b8␟7612070527746743628:Fixed size`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_192535799609256534$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__9 = goog.getMsg("With negative values");
        i18n_8 = MSG_EXTERNAL_192535799609256534$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟b0746c469ef8c605b1cb2fee9256a06846b822ed␟192535799609256534:With negative values`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8382375758916799432$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__11 = goog.getMsg("Horizontal");
        i18n_10 = MSG_EXTERNAL_8382375758916799432$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟174a9da560259a6d38344b93f89039ca6c660dd7␟8382375758916799432:Horizontal`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3054064021834682613$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__13 = goog.getMsg("Collapsed");
        i18n_12 = MSG_EXTERNAL_3054064021834682613$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟e5e231ca221230aaf2382fd907523c7ec6f110ce␟3054064021834682613:Collapsed`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1300461621231032697$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS___15 = goog.getMsg(" Shows data set in a single bar ");
        i18n_14 = MSG_EXTERNAL_1300461621231032697$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟c8c3cf5337c2dfc41b63a6be38ecb6b8e75a1940␟1300461621231032697: Shows data set in a single bar `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7603555242726494831$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS___17 = goog.getMsg(" Size (use {$startTagCode}null{$closeTagCode} for autosize) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_7603555242726494831$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟3830e7ef75ee17fa449e62db9388a201fdd9d420␟7603555242726494831: Size (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:null${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: for autosize) `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5346468389743474194$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS___19 = goog.getMsg(" Array of segments ");
        i18n_18 = MSG_EXTERNAL_5346468389743474194$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟5227918e5051fd4c9eac18c22be2f4f747ef8001␟5346468389743474194: Array of segments `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_995564356833384032$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__21 = goog.getMsg(" Import {$startTagCode}TuiBarSetModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_995564356833384032$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟ac2cae696dd7ce1732b3cff782ce2b8f1810a2b9␟995564356833384032: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiBarSetModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__23 = goog.getMsg("Add to the template:");
        i18n_22 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_SET_BAR_SET_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "ADDON-CHARTS", "type", "components"], ["pageTab", ""], i18n_2, ["id", "flexible", "heading", i18n_4, 3, "content"], ["id", "fixed", "heading", i18n_6, 3, "content"], ["id", "negative", "heading", i18n_8, 3, "content"], ["id", "horizontal", "heading", i18n_10, 3, "content"], ["id", "collapsed", "heading", i18n_12, 3, "content"], [1, "bars", 3, "collapsed", "value", "size"], ["documentationPropertyName", "collapsed", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "readonly number[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_14, i18n_16, i18n_18, [1, "b-demo-steps"], i18n_20, ["filename", "myComponent.module.ts", 3, "code"], i18n_22, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiBarSetComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiBarSetComponent_ng_template_1_Template, 12, 5, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiBarSetComponent_ng_template_2_Template, 6, 8, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(3, ExampleTuiBarSetComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiBarSetExample1, TuiBarSetExample2, TuiBarSetExample3, TuiBarSetExample4, TuiBarSetExample5, demo_component/* TuiDocDemoComponent */.F, bar_set_component/* TuiBarSetComponent */.I, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: [".bars[_ngcontent-%COMP%]{height:10rem;width:6.25rem;box-shadow:0 1px var(--tui-base-03)}"],
    changeDetection: 0
  });
  return ExampleTuiBarSetComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/bar-set/bar-set.module.ts












let ExampleTuiBarSetModule = /*#__PURE__*/(() => {
  class ExampleTuiBarSetModule {}

  ExampleTuiBarSetModule.ɵfac = function ExampleTuiBarSetModule_Factory(t) {
    return new (t || ExampleTuiBarSetModule)();
  };

  ExampleTuiBarSetModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiBarSetModule
  });
  ExampleTuiBarSetModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, router/* RouterModule */.Bz, addon_charts.TuiBarSetModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiBarSetComponent))]]
  });
  return ExampleTuiBarSetModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiBarSetModule, {
    declarations: [ExampleTuiBarSetComponent, TuiBarSetExample1, TuiBarSetExample2, TuiBarSetExample3, TuiBarSetExample4, TuiBarSetExample5],
    imports: [common/* CommonModule */.ez, router/* RouterModule */.Bz, addon_charts.TuiBarSetModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiBarSetComponent]
  });
})();

/***/ })

}]);