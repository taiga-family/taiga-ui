"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[36378],{

/***/ 36378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiArcChartModule": () => (/* binding */ ExampleTuiArcChartModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-charts/index.ts + 20 modules
var addon_charts = __webpack_require__(50179);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/kit/components/input-count/input-count.component.ts
var input_count_component = __webpack_require__(65009);
// EXTERNAL MODULE: ./projects/kit/components/input-count/input-count.directive.ts
var input_count_directive = __webpack_require__(10383);
// EXTERNAL MODULE: ./projects/addon-charts/components/arc-chart/arc-chart.component.ts
var arc_chart_component = __webpack_require__(48001);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/arc-chart/examples/1/index.ts






let TuiArcChartExample1 = /*#__PURE__*/(() => {
  class TuiArcChartExample1 {
    constructor() {
      this.value = [40, 30, 20, 10];
      this.activeItemIndex = NaN;
    }

  }

  TuiArcChartExample1.ɵfac = function TuiArcChartExample1_Factory(t) {
    return new (t || TuiArcChartExample1)();
  };

  TuiArcChartExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiArcChartExample1,
    selectors: [["tui-arc-chart-example-1"]],
    decls: 13,
    vars: 8,
    consts: [[1, "b-form", 3, "ngModel", "ngModelChange"], [1, "wrapper"], ["size", "m", 1, "tui-space_right-4", 3, "value", "activeItemIndex", "activeItemIndexChange"], ["size", "l", 1, "tui-space_right-4", 3, "value", "activeItemIndex", "activeItemIndexChange"], ["size", "xl", 1, "tui-space_right-4", 3, "value", "activeItemIndex", "activeItemIndexChange"], [3, "value"]],
    template: function TuiArcChartExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-input-count", 0);
        core/* ɵɵlistener */.NdJ("ngModelChange", function TuiArcChartExample1_Template_tui_input_count_ngModelChange_0_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        core/* ɵɵtext */._uU(1, " activeItemIndex\n");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(2, "div", 1);
        core/* ɵɵelementStart */.TgZ(3, "tui-arc-chart", 2);
        core/* ɵɵlistener */.NdJ("activeItemIndexChange", function TuiArcChartExample1_Template_tui_arc_chart_activeItemIndexChange_3_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        core/* ɵɵtext */._uU(4, " Total value ");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(5, "tui-arc-chart", 3);
        core/* ɵɵlistener */.NdJ("activeItemIndexChange", function TuiArcChartExample1_Template_tui_arc_chart_activeItemIndexChange_5_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        core/* ɵɵtext */._uU(6, " Total value ");
        core/* ɵɵelementStart */.TgZ(7, "div");
        core/* ɵɵtext */._uU(8, "Label");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementStart */.TgZ(9, "tui-arc-chart", 4);
        core/* ɵɵlistener */.NdJ("activeItemIndexChange", function TuiArcChartExample1_Template_tui_arc_chart_activeItemIndexChange_9_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        core/* ɵɵelement */._UZ(10, "tui-money", 5);
        core/* ɵɵelementStart */.TgZ(11, "div");
        core/* ɵɵtext */._uU(12, "Not bad!");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngModel", ctx.activeItemIndex);
        core/* ɵɵadvance */.xp6(3);
        core/* ɵɵproperty */.Q6J("value", ctx.value)("activeItemIndex", ctx.activeItemIndex);
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵproperty */.Q6J("value", ctx.value)("activeItemIndex", ctx.activeItemIndex);
        core/* ɵɵadvance */.xp6(4);
        core/* ɵɵproperty */.Q6J("value", ctx.value)("activeItemIndex", ctx.activeItemIndex);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("value", 123456);
      }
    },
    directives: [input_count_component/* TuiInputCountComponent */.E, input_count_directive/* TuiInputCountDirective */.a, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, arc_chart_component/* TuiArcChartComponent */.O, money_component/* TuiMoneyComponent */.o],
    styles: [".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:1rem;--tui-chart-0: var(--tui-support-12);--tui-chart-1: var(--tui-support-01);--tui-chart-2: var(--tui-support-03);--tui-chart-3: var(--tui-support-09)}"],
    changeDetection: 0
  });
  return TuiArcChartExample1;
})();
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/arc-chart/examples/2/index.ts




const _c0 = function () {
  return [40];
};

const _c1 = function () {
  return [20];
};

let TuiArcChartExample2 = /*#__PURE__*/(() => {
  class TuiArcChartExample2 {
    constructor() {
      this.labels = [`Food`, `Cafe`, `Open Source`, `Taxi`, `other`];
      this.value = [13769, 12367, 10172, 3018, 2592];
      this.sum = (0,cdk.tuiSum)(...this.value);
    }

    getValue(index) {
      return Number.isNaN(index) ? this.sum : this.value[index];
    }

    getLabel(index) {
      return Number.isNaN(index) ? `Total` : this.labels[index];
    }

  }

  TuiArcChartExample2.ɵfac = function TuiArcChartExample2_Factory(t) {
    return new (t || TuiArcChartExample2)();
  };

  TuiArcChartExample2.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiArcChartExample2,
    selectors: [["tui-arc-chart-example-2"]],
    decls: 6,
    vars: 4,
    consts: [[1, "wrapper"], ["size", "l", 3, "value"], ["size", "l", "minLabel", "", "maxLabel", "", 1, "stacked", 3, "value"]],
    template: function TuiArcChartExample2_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0);
        core/* ɵɵelement */._UZ(1, "tui-arc-chart", 1);
        core/* ɵɵelementStart */.TgZ(2, "tui-arc-chart", 2);
        core/* ɵɵtext */._uU(3, " +20% ");
        core/* ɵɵelementStart */.TgZ(4, "div");
        core/* ɵɵtext */._uU(5, "For filling in last name");
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("value", core/* ɵɵpureFunction0 */.DdM(2, _c0));
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("value", core/* ɵɵpureFunction0 */.DdM(3, _c1));
      }
    },
    directives: [arc_chart_component/* TuiArcChartComponent */.O],
    styles: [".wrapper[_ngcontent-%COMP%]{position:relative;--tui-chart-0: var(--tui-support-03)}.stacked[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;--tui-secondary: transparent;--tui-chart-0: var(--tui-support-04)}"],
    changeDetection: 0
  });
  return TuiArcChartExample2;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/arc-chart/arc-chart.component.ts












function ExampleTuiArcChartComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tui-doc-example", 2);
    core/* ɵɵelement */._UZ(1, "tui-arc-chart-example-1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    core/* ɵɵelement */._UZ(3, "tui-arc-chart-example-2");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiArcChartComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 11);
  }
}

function ExampleTuiArcChartComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 12);
  }
}

function ExampleTuiArcChartComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 13);
  }
}

function ExampleTuiArcChartComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleTuiArcChartComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiArcChartComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiArcChartComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = core/* ɵɵgetCurrentView */.EpF();

    core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    core/* ɵɵelementStart */.TgZ(1, "tui-arc-chart", 4);
    core/* ɵɵlistener */.NdJ("activeItemIndexChange", function ExampleTuiArcChartComponent_ng_template_2_Template_tui_arc_chart_activeItemIndexChange_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r9 = core/* ɵɵnextContext */.oxw();
      return ctx_r9.activeItemIndex = $event;
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    core/* ɵɵtemplate */.YNc(3, ExampleTuiArcChartComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 5);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiArcChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r11 = core/* ɵɵnextContext */.oxw();
      return ctx_r11.max = $event;
    });
    core/* ɵɵtemplate */.YNc(4, ExampleTuiArcChartComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 6);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiArcChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r12 = core/* ɵɵnextContext */.oxw();
      return ctx_r12.maxLabel = $event;
    });
    core/* ɵɵtemplate */.YNc(5, ExampleTuiArcChartComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 7);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiArcChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r13 = core/* ɵɵnextContext */.oxw();
      return ctx_r13.minLabel = $event;
    });
    core/* ɵɵtemplate */.YNc(6, ExampleTuiArcChartComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 8);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiArcChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r14 = core/* ɵɵnextContext */.oxw();
      return ctx_r14.size = $event;
    });
    core/* ɵɵtemplate */.YNc(7, ExampleTuiArcChartComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 9);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiArcChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r15 = core/* ɵɵnextContext */.oxw();
      return ctx_r15.value = $event;
    });
    core/* ɵɵtemplate */.YNc(8, ExampleTuiArcChartComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 10);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiArcChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r16 = core/* ɵɵnextContext */.oxw();
      return ctx_r16.activeItemIndex = $event;
    });
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("max", ctx_r1.max)("maxLabel", ctx_r1.maxLabel)("minLabel", ctx_r1.minLabel)("size", ctx_r1.size)("value", ctx_r1.value)("activeItemIndex", ctx_r1.activeItemIndex);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.maxLabel);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.minLabel);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.activeItemIndex);
  }
}

function ExampleTuiArcChartComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "ol", 17);
    core/* ɵɵelementStart */.TgZ(1, "li");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵi18nStart */.tHW(3, 18);
    core/* ɵɵelement */._UZ(4, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(5, "tui-doc-code", 19);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "li");
    core/* ɵɵelementStart */.TgZ(7, "p");
    core/* ɵɵi18n */.SDv(8, 20);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(9, "tui-doc-code", 21);
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

let ExampleTuiArcChartComponent = /*#__PURE__*/(() => {
  class ExampleTuiArcChartComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 85776).then(__webpack_require__.t.bind(__webpack_require__, 85776, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 1557).then(__webpack_require__.t.bind(__webpack_require__, 1557, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 96278).then(__webpack_require__.t.bind(__webpack_require__, 96278, 17)),
        HTML: __webpack_require__.e(/* import() */ 57749).then(__webpack_require__.t.bind(__webpack_require__, 57749, 17)),
        LESS: __webpack_require__.e(/* import() */ 63570).then(__webpack_require__.t.bind(__webpack_require__, 63570, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 6726).then(__webpack_require__.t.bind(__webpack_require__, 66156, 17)),
        HTML: __webpack_require__.e(/* import() */ 35868).then(__webpack_require__.t.bind(__webpack_require__, 35868, 17)),
        LESS: __webpack_require__.e(/* import() */ 36077).then(__webpack_require__.t.bind(__webpack_require__, 36077, 17))
      };
      this.valueVariants = [[42], [40, 30, 20, 10], [13769, 10172, 3018, 2592]];
      this.value = this.valueVariants[0];
      this.maxVariants = [100, 10000, 50000];
      this.max = this.maxVariants[0];
      this.sizeVariants = [`m`, `l`, `xl`];
      this.size = this.sizeVariants[0];
      this.minLabel = `0%`;
      this.maxLabel = `100%`;
      this.activeItemIndex = NaN;
    }

  }

  ExampleTuiArcChartComponent.ɵfac = function ExampleTuiArcChartComponent_Factory(t) {
    return new (t || ExampleTuiArcChartComponent)();
  };

  ExampleTuiArcChartComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiArcChartComponent,
    selectors: [["example-tui-arc-chart"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_433977682549774777$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS_1 = goog.getMsg("ArcChart");
        i18n_0 = MSG_EXTERNAL_433977682549774777$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟37b713ce5aea22bdc50004ec0f09e17107b9787c␟433977682549774777:ArcChart`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS__3 = goog.getMsg("Sizes");
        i18n_2 = MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1991766769963454924$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS__5 = goog.getMsg("Stacked");
        i18n_4 = MSG_EXTERNAL_1991766769963454924$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟acad9ee00b2dbfb003d340797809ce9fe3e1ec3d␟1991766769963454924:Stacked`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5999590176850087451$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS___7 = goog.getMsg(" Maximum value ");
        i18n_6 = MSG_EXTERNAL_5999590176850087451$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟5f25cd8a9234b487725d1fa48d60e56ef72a2373␟5999590176850087451: Maximum value `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_366902072652186200$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS___9 = goog.getMsg(" Label for maximum value ");
        i18n_8 = MSG_EXTERNAL_366902072652186200$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟17d58754566edc76573ee313c71d6ecc8dca894b␟366902072652186200: Label for maximum value `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4901338580057825614$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS___11 = goog.getMsg(" Label for minimum value ");
        i18n_10 = MSG_EXTERNAL_4901338580057825614$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟e606409e619e6757d5e8cc2834019a4604d04a87␟4901338580057825614: Label for minimum value `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS___13 = goog.getMsg(" Size ");
        i18n_12 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_206010917694362071$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS___15 = goog.getMsg(" Value ");
        i18n_14 = MSG_EXTERNAL_206010917694362071$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟616f8c85cb0c4ed37b94e8ba9c52e117da1a90c3␟206010917694362071: Value `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4355316937676670930$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS___17 = goog.getMsg(" Index of selected arc ");
        i18n_16 = MSG_EXTERNAL_4355316937676670930$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟c479266fb0898c58ca78245acf0a5e0907b25eb2␟4355316937676670930: Index of selected arc `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5154896617161139394$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS__19 = goog.getMsg(" Import {$startTagCode}TuiArcChartModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_5154896617161139394$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟2779bd2d7dd07772646294f6006a05d0ab57543c␟5154896617161139394: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiArcChartModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS__21 = goog.getMsg("Add to the template:");
        i18n_20 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_ARC_CHART_ARC_CHART_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "ADDON-CHARTS", "type", "components"], ["pageTab", ""], ["id", "sizes", "heading", i18n_2, 3, "content"], ["id", "stacked", "heading", i18n_4, 3, "content"], [1, "chart", 3, "max", "maxLabel", "minLabel", "size", "value", "activeItemIndex", "activeItemIndexChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "maxLabel", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "minLabel", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeXL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "readonly number[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "activeItemIndex", "documentationPropertyMode", "input-output", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, [1, "b-demo-steps"], i18n_18, ["filename", "myComponent.module.ts", 3, "code"], i18n_20, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiArcChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiArcChartComponent_ng_template_1_Template, 4, 2, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiArcChartComponent_ng_template_2_Template, 9, 15, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(3, ExampleTuiArcChartComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiArcChartExample1, TuiArcChartExample2, demo_component/* TuiDocDemoComponent */.F, arc_chart_component/* TuiArcChartComponent */.O, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: [".chart[_ngcontent-%COMP%]{margin:0 auto}"],
    changeDetection: 0
  });
  return ExampleTuiArcChartComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/arc-chart/arc-chart.module.ts












let ExampleTuiArcChartModule = /*#__PURE__*/(() => {
  class ExampleTuiArcChartModule {}

  ExampleTuiArcChartModule.ɵfac = function ExampleTuiArcChartModule_Factory(t) {
    return new (t || ExampleTuiArcChartModule)();
  };

  ExampleTuiArcChartModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiArcChartModule
  });
  ExampleTuiArcChartModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, router/* RouterModule */.Bz, fesm2015_forms/* FormsModule */.u5, kit.TuiInputCountModule, addon_charts.TuiArcChartModule, addon_commerce.TuiMoneyModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiArcChartComponent))]]
  });
  return ExampleTuiArcChartModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiArcChartModule, {
    declarations: [ExampleTuiArcChartComponent, TuiArcChartExample1, TuiArcChartExample2],
    imports: [common/* CommonModule */.ez, router/* RouterModule */.Bz, fesm2015_forms/* FormsModule */.u5, kit.TuiInputCountModule, addon_charts.TuiArcChartModule, addon_commerce.TuiMoneyModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiArcChartComponent]
  });
})();

/***/ })

}]);