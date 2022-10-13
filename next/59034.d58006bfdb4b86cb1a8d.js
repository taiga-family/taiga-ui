"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[59034],{

/***/ 59034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiRingChartModule": () => (/* binding */ ExampleTuiRingChartModule)
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
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-charts/components/ring-chart/ring-chart.component.ts
var ring_chart_component = __webpack_require__(57464);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/ring-chart/examples/1/index.ts


let TuiRingChartExample1 = /*#__PURE__*/(() => {
  class TuiRingChartExample1 {
    constructor() {
      this.value = [40, 30, 20, 10];
    }

  }

  TuiRingChartExample1.ɵfac = function TuiRingChartExample1_Factory(t) {
    return new (t || TuiRingChartExample1)();
  };

  TuiRingChartExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiRingChartExample1,
    selectors: [["tui-ring-chart-example-1"]],
    decls: 5,
    vars: 4,
    consts: [[1, "wrapper"], ["size", "s", 1, "tui-space_right-4", 3, "value"], ["size", "m", 1, "tui-space_right-4", 3, "value"], ["size", "l", 1, "tui-space_right-4", 3, "value"], ["size", "xl", 1, "tui-space_right-4", 3, "value"]],
    template: function TuiRingChartExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0);
        core/* ɵɵelement */._UZ(1, "tui-ring-chart", 1);
        core/* ɵɵelement */._UZ(2, "tui-ring-chart", 2);
        core/* ɵɵelement */._UZ(3, "tui-ring-chart", 3);
        core/* ɵɵelement */._UZ(4, "tui-ring-chart", 4);
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("value", ctx.value);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("value", ctx.value);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("value", ctx.value);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("value", ctx.value);
      }
    },
    directives: [ring_chart_component/* TuiRingChartComponent */.i],
    styles: [".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],
    changeDetection: 0
  });
  return TuiRingChartExample1;
})();
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/ring-chart/examples/2/index.ts




let TuiRingChartExample2 = /*#__PURE__*/(() => {
  class TuiRingChartExample2 {
    constructor() {
      this.labels = [`Food`, `Cafe`, `Open Source`, `Taxi`, `other`];
      this.value = [13769, 12367, 10172, 3018, 2592];
      this.total = (0,cdk.tuiSum)(...this.value);
      this.index = NaN;
    }

    get sum() {
      return isNaN(this.index) ? this.total : this.value[this.index];
    }

    get label() {
      return isNaN(this.index) ? `Total` : this.labels[this.index];
    }

  }

  TuiRingChartExample2.ɵfac = function TuiRingChartExample2_Factory(t) {
    return new (t || TuiRingChartExample2)();
  };

  TuiRingChartExample2.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiRingChartExample2,
    selectors: [["tui-ring-chart-example-2"]],
    decls: 4,
    vars: 4,
    consts: [[3, "value", "activeItemIndex", "activeItemIndexChange"], [3, "value"]],
    template: function TuiRingChartExample2_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-ring-chart", 0);
        core/* ɵɵlistener */.NdJ("activeItemIndexChange", function TuiRingChartExample2_Template_tui_ring_chart_activeItemIndexChange_0_listener($event) {
          return ctx.index = $event;
        });
        core/* ɵɵelement */._UZ(1, "tui-money", 1);
        core/* ɵɵelementStart */.TgZ(2, "div");
        core/* ɵɵtext */._uU(3);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("value", ctx.value)("activeItemIndex", ctx.index);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("value", ctx.sum);
        core/* ɵɵadvance */.xp6(2);
        core/* ɵɵtextInterpolate */.Oqu(ctx.label);
      }
    },
    directives: [ring_chart_component/* TuiRingChartComponent */.i, money_component/* TuiMoneyComponent */.o],
    styles: ["[_nghost-%COMP%]{--tui-chart-0: #c779d0;--tui-chart-1: #feac5e;--tui-chart-2: #ff5f6d;--tui-chart-3: #4bc0c8;--tui-chart-4: #9795cd}"],
    changeDetection: 0
  });
  return TuiRingChartExample2;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/ring-chart/ring-chart.component.ts












function ExampleTuiRingChartComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tui-doc-example", 2);
    core/* ɵɵelement */._UZ(1, "tui-ring-chart-example-1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    core/* ɵɵelement */._UZ(3, "tui-ring-chart-example-2");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiRingChartComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 8);
  }
}

function ExampleTuiRingChartComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 9);
  }
}

function ExampleTuiRingChartComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 10);
  }
}

function ExampleTuiRingChartComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = core/* ɵɵgetCurrentView */.EpF();

    core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    core/* ɵɵelementStart */.TgZ(1, "tui-ring-chart", 4);
    core/* ɵɵlistener */.NdJ("activeItemIndexChange", function ExampleTuiRingChartComponent_ng_template_2_Template_tui_ring_chart_activeItemIndexChange_1_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = core/* ɵɵnextContext */.oxw();
      return ctx_r6.activeItemIndex = $event;
    });
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    core/* ɵɵtemplate */.YNc(3, ExampleTuiRingChartComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 5);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRingChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r8 = core/* ɵɵnextContext */.oxw();
      return ctx_r8.activeItemIndex = $event;
    });
    core/* ɵɵtemplate */.YNc(4, ExampleTuiRingChartComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 6);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRingChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r9 = core/* ɵɵnextContext */.oxw();
      return ctx_r9.size = $event;
    });
    core/* ɵɵtemplate */.YNc(5, ExampleTuiRingChartComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 7);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRingChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r10 = core/* ɵɵnextContext */.oxw();
      return ctx_r10.value = $event;
    });
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("value", ctx_r1.value)("size", ctx_r1.size)("activeItemIndex", ctx_r1.activeItemIndex);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.activeItemIndexVariants)("documentationPropertyValue", ctx_r1.activeItemIndex);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
  }
}

function ExampleTuiRingChartComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "ol", 11);
    core/* ɵɵelementStart */.TgZ(1, "li");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵi18nStart */.tHW(3, 12);
    core/* ɵɵelement */._UZ(4, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(5, "tui-doc-code", 13);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "li");
    core/* ɵɵelementStart */.TgZ(7, "p");
    core/* ɵɵi18n */.SDv(8, 14);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(9, "tui-doc-code", 15);
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

let ExampleTuiRingChartComponent = /*#__PURE__*/(() => {
  class ExampleTuiRingChartComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 29262).then(__webpack_require__.t.bind(__webpack_require__, 29262, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 68855).then(__webpack_require__.t.bind(__webpack_require__, 68855, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 46783).then(__webpack_require__.t.bind(__webpack_require__, 46783, 17)),
        HTML: __webpack_require__.e(/* import() */ 38027).then(__webpack_require__.t.bind(__webpack_require__, 38027, 17)),
        LESS: __webpack_require__.e(/* import() */ 69240).then(__webpack_require__.t.bind(__webpack_require__, 69240, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 18463).then(__webpack_require__.t.bind(__webpack_require__, 18463, 17)),
        HTML: __webpack_require__.e(/* import() */ 24214).then(__webpack_require__.t.bind(__webpack_require__, 24214, 17)),
        LESS: __webpack_require__.e(/* import() */ 98330).then(__webpack_require__.t.bind(__webpack_require__, 98330, 17))
      };
      this.valueVariants = [[40, 30, 20, 10], [13769, 10172, 3018, 2592]];
      this.value = this.valueVariants[0];
      this.activeItemIndexVariants = [NaN, 0, 1, 2];
      this.activeItemIndex = this.activeItemIndexVariants[0];
      this.sizeVariants = [`s`, `m`, `l`, `xl`];
      this.size = this.sizeVariants[1];
    }

  }

  ExampleTuiRingChartComponent.ɵfac = function ExampleTuiRingChartComponent_Factory(t) {
    return new (t || ExampleTuiRingChartComponent)();
  };

  ExampleTuiRingChartComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiRingChartComponent,
    selectors: [["example-tui-ring-chart"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8113053841165912126$$PROJECTS_DEMO_SRC_MODULES_CHARTS_RING_CHART_RING_CHART_COMPONENT_TS_1 = goog.getMsg("RingChart");
        i18n_0 = MSG_EXTERNAL_8113053841165912126$$PROJECTS_DEMO_SRC_MODULES_CHARTS_RING_CHART_RING_CHART_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟00214e46cd923ee161d8a9dc643a348f16675b61␟8113053841165912126:RingChart`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_CHARTS_RING_CHART_RING_CHART_COMPONENT_TS__3 = goog.getMsg("sizes");
        i18n_2 = MSG_EXTERNAL_5960739619447908905$$PROJECTS_DEMO_SRC_MODULES_CHARTS_RING_CHART_RING_CHART_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1028344547250868618$$PROJECTS_DEMO_SRC_MODULES_CHARTS_RING_CHART_RING_CHART_COMPONENT_TS__5 = goog.getMsg("With labels");
        i18n_4 = MSG_EXTERNAL_1028344547250868618$$PROJECTS_DEMO_SRC_MODULES_CHARTS_RING_CHART_RING_CHART_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟20fea4a90c025dc5f782601c437174dcdc02db7e␟1028344547250868618:With labels`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2888725611708468887$$PROJECTS_DEMO_SRC_MODULES_CHARTS_RING_CHART_RING_CHART_COMPONENT_TS___7 = goog.getMsg(" Active fragment ");
        i18n_6 = MSG_EXTERNAL_2888725611708468887$$PROJECTS_DEMO_SRC_MODULES_CHARTS_RING_CHART_RING_CHART_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟3723984460cea02b3cfdfdd74bf637291ba195b1␟2888725611708468887: Active fragment `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_CHARTS_RING_CHART_RING_CHART_COMPONENT_TS___9 = goog.getMsg(" Size ");
        i18n_8 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_CHARTS_RING_CHART_RING_CHART_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_206010917694362071$$PROJECTS_DEMO_SRC_MODULES_CHARTS_RING_CHART_RING_CHART_COMPONENT_TS___11 = goog.getMsg(" Value ");
        i18n_10 = MSG_EXTERNAL_206010917694362071$$PROJECTS_DEMO_SRC_MODULES_CHARTS_RING_CHART_RING_CHART_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟616f8c85cb0c4ed37b94e8ba9c52e117da1a90c3␟206010917694362071: Value `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3397391964644299834$$PROJECTS_DEMO_SRC_MODULES_CHARTS_RING_CHART_RING_CHART_COMPONENT_TS__13 = goog.getMsg(" Import {$startTagCode}TuiRingChartModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_3397391964644299834$$PROJECTS_DEMO_SRC_MODULES_CHARTS_RING_CHART_RING_CHART_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟76dcbcd752be692265a3b79e5ef1a60d9fdecc08␟3397391964644299834: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiRingChartModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_RING_CHART_RING_CHART_COMPONENT_TS__15 = goog.getMsg("Add to the template:");
        i18n_14 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_RING_CHART_RING_CHART_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "ADDON-CHARTS", "type", "components"], ["pageTab", ""], ["id", "sizes", "heading", i18n_2, 3, "content"], ["id", "labels", "heading", i18n_4, 3, "content"], [1, "chart", 3, "value", "size", "activeItemIndex", "activeItemIndexChange"], ["documentationPropertyName", "activeItemIndex", "documentationPropertyMode", "input-output", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeXL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "readonly number[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_6, i18n_8, i18n_10, [1, "b-demo-steps"], i18n_12, ["filename", "myComponent.module.ts", 3, "code"], i18n_14, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiRingChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleTuiRingChartComponent_ng_template_1_Template, 4, 2, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleTuiRingChartComponent_ng_template_2_Template, 6, 9, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(3, ExampleTuiRingChartComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiRingChartExample1, TuiRingChartExample2, demo_component/* TuiDocDemoComponent */.F, ring_chart_component/* TuiRingChartComponent */.i, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: [".chart[_ngcontent-%COMP%]{margin:0 auto}"],
    changeDetection: 0
  });
  return ExampleTuiRingChartComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/ring-chart/ring-chart.module.ts











let ExampleTuiRingChartModule = /*#__PURE__*/(() => {
  class ExampleTuiRingChartModule {}

  ExampleTuiRingChartModule.ɵfac = function ExampleTuiRingChartModule_Factory(t) {
    return new (t || ExampleTuiRingChartModule)();
  };

  ExampleTuiRingChartModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiRingChartModule
  });
  ExampleTuiRingChartModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, router/* RouterModule */.Bz, addon_charts.TuiRingChartModule, addon_commerce.TuiMoneyModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiRingChartComponent))]]
  });
  return ExampleTuiRingChartModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiRingChartModule, {
    declarations: [ExampleTuiRingChartComponent, TuiRingChartExample1, TuiRingChartExample2],
    imports: [common/* CommonModule */.ez, router/* RouterModule */.Bz, addon_charts.TuiRingChartModule, addon_commerce.TuiMoneyModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiRingChartComponent]
  });
})();

/***/ })

}]);