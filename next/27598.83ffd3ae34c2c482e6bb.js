"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[27598],{

/***/ 27598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiPieChartModule": () => (/* binding */ ExampleTuiPieChartModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-charts/index.ts + 20 modules
var addon_charts = __webpack_require__(50179);
// EXTERNAL MODULE: ./projects/addon-commerce/index.ts + 23 modules
var addon_commerce = __webpack_require__(23121);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-charts/components/pie-chart/pie-chart.component.ts
var pie_chart_component = __webpack_require__(65266);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/pie-chart/examples/1/index.ts


let TuiPieChartExample1 = /*#__PURE__*/(() => {
  class TuiPieChartExample1 {
    constructor() {
      this.value = [40, 30, 20, 10];
    }

  }

  TuiPieChartExample1.ɵfac = function TuiPieChartExample1_Factory(t) {
    return new (t || TuiPieChartExample1)();
  };

  TuiPieChartExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPieChartExample1,
    selectors: [["tui-pie-chart-example-1"]],
    decls: 6,
    vars: 5,
    consts: [[1, "wrapper"], ["size", "xs", 1, "tui-space_right-4", 3, "value"], ["size", "s", 1, "tui-space_right-4", 3, "value"], ["size", "m", 1, "tui-space_right-4", 3, "value"], ["size", "l", 1, "tui-space_right-4", 3, "value"], ["size", "xl", 1, "tui-space_right-4", 3, "value"]],
    template: function TuiPieChartExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-pie-chart", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-pie-chart", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-pie-chart", 3);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-pie-chart", 4);
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-pie-chart", 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value);
      }
    },
    directives: [pie_chart_component/* TuiPieChartComponent */.W],
    styles: [".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],
    changeDetection: 0
  });
  return TuiPieChartExample1;
})();
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/pie-chart/examples/2/index.ts





function TuiPieChartExample2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-money", 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div");
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const index_r2 = ctx.$implicit;
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("singleColor", true)("value", ctx_r1.value[index_r2]);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx_r1.labels[index_r2]);
  }
}

let TuiPieChartExample2 = /*#__PURE__*/(() => {
  class TuiPieChartExample2 {
    constructor() {
      this.value = [13769, 12367, 10172, 3018, 2592];
      this.labels = [`Food`, `Cafe`, `Open Source`, `Taxi`, `Other`];
    }

  }

  TuiPieChartExample2.ɵfac = function TuiPieChartExample2_Factory(t) {
    return new (t || TuiPieChartExample2)();
  };

  TuiPieChartExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiPieChartExample2,
    selectors: [["tui-pie-chart-example-2"]],
    decls: 3,
    vars: 2,
    consts: [[3, "value", "tuiHintContent"], ["content", ""], [3, "singleColor", "value"]],
    template: function TuiPieChartExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-pie-chart", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiPieChartExample2_ng_template_1_Template, 3, 3, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(2);

        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value)("tuiHintContent", _r0);
      }
    },
    directives: [pie_chart_component/* TuiPieChartComponent */.W, hint_options_directive/* TuiHintOptionsDirective */.bZ, money_component/* TuiMoneyComponent */.o],
    styles: ["[_nghost-%COMP%]{--tui-chart-0: #c779d0;--tui-chart-1: #feac5e;--tui-chart-2: #ff5f6d;--tui-chart-3: #4bc0c8;--tui-chart-4: #9795cd}"],
    changeDetection: 0
  });
  return TuiPieChartExample2;
})();
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/pie-chart/pie-chart.component.ts


















function ExampleTuiPieChartComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-example", 2);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-pie-chart-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-notification", 4);
    fesm2015_core/* ɵɵtext */._uU(4, " Use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "a", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "code");
    fesm2015_core/* ɵɵtext */._uU(7, "Hint");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(8, " directive to enable hints with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "code");
    fesm2015_core/* ɵɵtext */._uU(10, "tuiHintContent");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-pie-chart-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiPieChartComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 10);
  }
}

function ExampleTuiPieChartComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 11);
  }
}

function ExampleTuiPieChartComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 12);
  }
}

function ExampleTuiPieChartComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-pie-chart", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("activeItemIndexChange", function ExampleTuiPieChartComponent_ng_template_2_Template_tui_pie_chart_activeItemIndexChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.activeItemIndex = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiPieChartComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPieChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.activeItemIndex = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiPieChartComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPieChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiPieChartComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiPieChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.value = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("value", ctx_r1.value)("size", ctx_r1.size)("activeItemIndex", ctx_r1.activeItemIndex);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.activeItemIndexVariants)("documentationPropertyValue", ctx_r1.activeItemIndex);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
  }
}

function ExampleTuiPieChartComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 13);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 14);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 16);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 17);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiPieChartComponent = /*#__PURE__*/(() => {
  class ExampleTuiPieChartComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 92959).then(__webpack_require__.t.bind(__webpack_require__, 92959, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 41181).then(__webpack_require__.t.bind(__webpack_require__, 41181, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 18594).then(__webpack_require__.t.bind(__webpack_require__, 18594, 17)),
        HTML: __webpack_require__.e(/* import() */ 25394).then(__webpack_require__.t.bind(__webpack_require__, 25394, 17)),
        LESS: __webpack_require__.e(/* import() */ 45484).then(__webpack_require__.t.bind(__webpack_require__, 45484, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 85193).then(__webpack_require__.t.bind(__webpack_require__, 85193, 17)),
        HTML: __webpack_require__.e(/* import() */ 82584).then(__webpack_require__.t.bind(__webpack_require__, 82584, 17)),
        LESS: __webpack_require__.e(/* import() */ 87187).then(__webpack_require__.t.bind(__webpack_require__, 87187, 17))
      };
      this.valueVariants = [[0, 30, 20, 10], [40, 30, 20, 10], [13769, 12367, 10172, 3018, 2592]];
      this.value = this.valueVariants[0];
      this.activeItemIndexVariants = [NaN, 0, 1, 2];
      this.activeItemIndex = this.activeItemIndexVariants[0];
      this.sizeVariants = [`xs`, `s`, `m`, `l`, `xl`];
      this.size = this.sizeVariants[2];
      this.contentVariants = [``, ({
        $implicit
      }) => this.getPercent($implicit), ({
        $implicit
      }) => this.format($implicit)];
      this.hintContent = this.contentVariants[0];
    }

    getPercent(index) {
      return `${(0,cdk.tuiRound)(100 * this.value[index] / (0,cdk.tuiSum)(...this.value), 2)} %`;
    }

    format(index) {
      return `${(0,core.tuiFormatNumber)(this.value[index])} ${(0,addon_commerce.tuiGetCurrencySymbol)("RUB"
      /* Ruble */
      )}`;
    }

  }

  ExampleTuiPieChartComponent.ɵfac = function ExampleTuiPieChartComponent_Factory(t) {
    return new (t || ExampleTuiPieChartComponent)();
  };

  ExampleTuiPieChartComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiPieChartComponent,
    selectors: [["example-tui-pie-chart"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3897937897276997904$$PROJECTS_DEMO_SRC_MODULES_CHARTS_PIE_CHART_PIE_CHART_COMPONENT_TS_1 = goog.getMsg("PieChart");
        i18n_0 = MSG_EXTERNAL_3897937897276997904$$PROJECTS_DEMO_SRC_MODULES_CHARTS_PIE_CHART_PIE_CHART_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟7dac3f280da889b85be2a2b8bba73d80428b4303␟3897937897276997904:PieChart`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_CHARTS_PIE_CHART_PIE_CHART_COMPONENT_TS__3 = goog.getMsg("sizes");
        i18n_2 = MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_CHARTS_PIE_CHART_PIE_CHART_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1028344547250868618$$PROJECTS_DEMO_SRC_MODULES_CHARTS_PIE_CHART_PIE_CHART_COMPONENT_TS__5 = goog.getMsg("With labels");
        i18n_4 = MSG_EXTERNAL_1028344547250868618$$PROJECTS_DEMO_SRC_MODULES_CHARTS_PIE_CHART_PIE_CHART_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟20fea4a90c025dc5f782601c437174dcdc02db7e␟1028344547250868618:With labels`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2888725611708468887$$PROJECTS_DEMO_SRC_MODULES_CHARTS_PIE_CHART_PIE_CHART_COMPONENT_TS___7 = goog.getMsg(" Active fragment ");
        i18n_6 = MSG_EXTERNAL_2888725611708468887$$PROJECTS_DEMO_SRC_MODULES_CHARTS_PIE_CHART_PIE_CHART_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟3723984460cea02b3cfdfdd74bf637291ba195b1␟2888725611708468887: Active fragment `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_CHARTS_PIE_CHART_PIE_CHART_COMPONENT_TS___9 = goog.getMsg(" Size ");
        i18n_8 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_CHARTS_PIE_CHART_PIE_CHART_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_206010917694362071$$PROJECTS_DEMO_SRC_MODULES_CHARTS_PIE_CHART_PIE_CHART_COMPONENT_TS___11 = goog.getMsg(" Value ");
        i18n_10 = MSG_EXTERNAL_206010917694362071$$PROJECTS_DEMO_SRC_MODULES_CHARTS_PIE_CHART_PIE_CHART_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟616f8c85cb0c4ed37b94e8ba9c52e117da1a90c3␟206010917694362071: Value `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_629186206368566336$$PROJECTS_DEMO_SRC_MODULES_CHARTS_PIE_CHART_PIE_CHART_COMPONENT_TS__13 = goog.getMsg(" Import {$startTagCode}TuiPieChartModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_629186206368566336$$PROJECTS_DEMO_SRC_MODULES_CHARTS_PIE_CHART_PIE_CHART_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟2cfa99d8d152d2e60fcb26ff28e8b769aaebbbc7␟629186206368566336: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiPieChartModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_PIE_CHART_PIE_CHART_COMPONENT_TS__15 = goog.getMsg("Add to the template:");
        i18n_14 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_PIE_CHART_PIE_CHART_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "ADDON-CHARTS", "type", "components"], ["pageTab", ""], ["id", "sizes", "heading", i18n_2, 3, "content"], ["id", "labels", "heading", i18n_4, 3, "content"], [1, "tui-space_bottom-6"], ["routerLink", "/directives/hint", "tuiLink", ""], [1, "chart", 3, "value", "size", "activeItemIndex", "activeItemIndexChange"], ["documentationPropertyName", "activeItemIndex", "documentationPropertyMode", "input-output", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeXL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "readonly number[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_6, i18n_8, i18n_10, [1, "b-demo-steps"], i18n_12, ["filename", "myComponent.module.ts", 3, "code"], i18n_14, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiPieChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiPieChartComponent_ng_template_1_Template, 12, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiPieChartComponent_ng_template_2_Template, 6, 9, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiPieChartComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiPieChartExample1, notification_component/* TuiNotificationComponent */.L, router/* RouterLinkWithHref */.yS, link_component/* TuiLinkComponent */.V, TuiPieChartExample2, demo_component/* TuiDocDemoComponent */.F, pie_chart_component/* TuiPieChartComponent */.W, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: [".chart[_ngcontent-%COMP%]{margin:0 auto}"],
    changeDetection: 0
  });
  return ExampleTuiPieChartComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/pie-chart/pie-chart.module.ts












let ExampleTuiPieChartModule = /*#__PURE__*/(() => {
  class ExampleTuiPieChartModule {}

  ExampleTuiPieChartModule.ɵfac = function ExampleTuiPieChartModule_Factory(t) {
    return new (t || ExampleTuiPieChartModule)();
  };

  ExampleTuiPieChartModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiPieChartModule
  });
  ExampleTuiPieChartModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, router/* RouterModule */.Bz, addon_charts.TuiPieChartModule, addon_commerce.TuiMoneyModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, public_api/* TuiAddonDocModule */.fV, core.TuiHintModule, core.TuiNotificationModule, core.TuiLinkModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiPieChartComponent))]]
  });
  return ExampleTuiPieChartModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiPieChartModule, {
    declarations: [ExampleTuiPieChartComponent, TuiPieChartExample1, TuiPieChartExample2],
    imports: [common/* CommonModule */.ez, router/* RouterModule */.Bz, addon_charts.TuiPieChartModule, addon_commerce.TuiMoneyModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, public_api/* TuiAddonDocModule */.fV, core.TuiHintModule, core.TuiNotificationModule, core.TuiLinkModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiPieChartComponent]
  });
})();

/***/ })

}]);