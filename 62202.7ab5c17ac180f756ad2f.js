"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[62202],{

/***/ 62202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiBarChartModule": () => (/* binding */ ExampleTuiBarChartModule)
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
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/addon-charts/components/axes/axes.component.ts
var axes_component = __webpack_require__(70390);
// EXTERNAL MODULE: ./projects/addon-charts/components/bar-chart/bar-chart.component.ts
var bar_chart_component = __webpack_require__(88549);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/bar-chart/examples/1/index.ts




let TuiBarChartExample1 = /*#__PURE__*/(() => {
  class TuiBarChartExample1 {
    constructor() {
      this.value = [[3660, 8281, 1069, 9034, 5797, 6918, 8495, 3234, 6204, 1392, 2088, 8637, 8779], [3952, 3671, 3781, 5323, 3537, 4107, 2962, 3320, 8632, 4755, 9130, 1195, 3574]];
      this.labelsX = [`Jan 2019`, `Feb`, `Mar`];
      this.labelsY = [`0`, `10 000`];
    }

    getHeight(max) {
      return max / (0,cdk.tuiCeil)(max, -3) * 100;
    }

  }

  TuiBarChartExample1.ɵfac = function TuiBarChartExample1_Factory(t) {
    return new (t || TuiBarChartExample1)();
  };

  TuiBarChartExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiBarChartExample1,
    selectors: [["tui-bar-chart-example-1"]],
    decls: 2,
    vars: 4,
    consts: [[1, "axes", 3, "axisXLabels", "axisYLabels"], [3, "max", "value"]],
    template: function TuiBarChartExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-axes", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-bar-chart", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("axisXLabels", ctx.labelsX)("axisYLabels", ctx.labelsY);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("max", 10000)("value", ctx.value);
      }
    },
    directives: [axes_component/* TuiAxesComponent */.v, bar_chart_component/* TuiBarChartComponent */.g],
    styles: [".axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}"],
    changeDetection: 0
  });
  return TuiBarChartExample1;
})();
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/kit/components/select/select.component.ts
var select_component = __webpack_require__(50170);
// EXTERNAL MODULE: ./projects/kit/components/select/select.directive.ts
var select_directive = __webpack_require__(1414);
// EXTERNAL MODULE: ./projects/core/components/data-list/data-list.directive.ts
var data_list_directive = __webpack_require__(52219);
// EXTERNAL MODULE: ./projects/kit/components/data-list-wrapper/data-list-wrapper.component.ts
var data_list_wrapper_component = __webpack_require__(50020);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/bar-chart/examples/2/index.ts











function TuiBarChartExample2_tui_data_list_wrapper_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-data-list-wrapper", 6);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("items", ctx_r0.appearances);
  }
}

let TuiBarChartExample2 = /*#__PURE__*/(() => {
  class TuiBarChartExample2 {
    constructor() {
      this.value = [[1000, 8000, 4000, 3000, 4000], [6000, 2000, 4500, 7000, 5000]];
      this.labelsX = [`Jan 2021`, `Feb`, `Mar`];
      this.labelsY = [`0`, `10 000`];
      this.appearances = [`onDark`, `error`];
      this.appearance = `onDark`;

      this.hint = ({
        $implicit
      }) => this.value.reduce((result, set) => `${result}$${(0,core.tuiFormatNumber)(set[$implicit])}\n`, ``).trim();
    }

  }

  TuiBarChartExample2.ɵfac = function TuiBarChartExample2_Factory(t) {
    return new (t || TuiBarChartExample2)();
  };

  TuiBarChartExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiBarChartExample2,
    selectors: [["tui-bar-chart-example-2"]],
    decls: 8,
    vars: 14,
    consts: [[1, "flex"], [1, "axes", 3, "axisXLabels", "axisYLabels"], [3, "tuiHintAppearance", "max", "value", "tuiHintContent"], [3, "tuiHintAppearance", "max", "value", "collapsed", "tuiHintContent"], [1, "b-form", 3, "ngModel", "ngModelChange"], [3, "items", 4, "tuiDataList"], [3, "items"]],
    template: function TuiBarChartExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-axes", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-bar-chart", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-axes", 1);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-bar-chart", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-select", 4);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiBarChartExample2_Template_tui_select_ngModelChange_5_listener($event) {
          return ctx.appearance = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(6, " Hint appearance ");
        fesm2015_core/* ɵɵtemplate */.YNc(7, TuiBarChartExample2_tui_data_list_wrapper_7_Template, 1, 1, "tui-data-list-wrapper", 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("axisXLabels", ctx.labelsX)("axisYLabels", ctx.labelsY);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHintAppearance", ctx.appearance)("max", 10000)("value", ctx.value)("tuiHintContent", ctx.hint);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("axisXLabels", ctx.labelsX)("axisYLabels", ctx.labelsY);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHintAppearance", ctx.appearance)("max", 10000)("value", ctx.value)("collapsed", true)("tuiHintContent", ctx.hint);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.appearance);
      }
    },
    directives: [axes_component/* TuiAxesComponent */.v, bar_chart_component/* TuiBarChartComponent */.g, hint_options_directive/* TuiHintOptionsDirective */.bZ, select_component/* TuiSelectComponent */.u, select_directive/* TuiSelectDirective */.O, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, data_list_directive/* TuiDataListDirective */.g, data_list_wrapper_component/* TuiDataListWrapperComponent */.e],
    styles: [".axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}.axes[_ngcontent-%COMP%]:first-child{--tui-chart-0: gold;--tui-chart-1: purple}.axes[_ngcontent-%COMP%]:last-child{--tui-chart-0: skyblue;--tui-chart-1: violet}.flex[_ngcontent-%COMP%]{display:flex;min-width:31.25rem}"],
    changeDetection: 0
  });
  return TuiBarChartExample2;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/bar-chart/bar-chart.component.ts















const _c8 = function () {
  return ["/components/axes"];
};

function ExampleTuiBarChartComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "a", 3);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-bar-chart-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-notification", 6);
    fesm2015_core/* ɵɵtext */._uU(7, " Use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "a", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "code");
    fesm2015_core/* ɵɵtext */._uU(10, "Hint");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(11, " directive to enable hints with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "code");
    fesm2015_core/* ɵɵtext */._uU(13, "tuiHintContent");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-bar-chart-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("routerLink", fesm2015_core/* ɵɵpureFunction0 */.DdM(3, _c8));
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiBarChartComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 13);
  }
}

function ExampleTuiBarChartComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleTuiBarChartComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 15);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiBarChartComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiBarChartComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-bar-chart", 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiBarChartComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBarChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.collapsed = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiBarChartComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBarChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiBarChartComponent_ng_template_2_ng_template_5_Template, 2, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBarChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiBarChartComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBarChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.value = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("collapsed", ctx_r1.collapsed)("value", ctx_r1.value)("max", ctx_r1.max)("size", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.collapsed);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
  }
}

function ExampleTuiBarChartComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 17);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 18);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 19);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 20);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 21);
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

let ExampleTuiBarChartComponent = /*#__PURE__*/(() => {
  class ExampleTuiBarChartComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 15240).then(__webpack_require__.t.bind(__webpack_require__, 15240, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 26307).then(__webpack_require__.t.bind(__webpack_require__, 26307, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 37816).then(__webpack_require__.t.bind(__webpack_require__, 37816, 17)),
        HTML: __webpack_require__.e(/* import() */ 29156).then(__webpack_require__.t.bind(__webpack_require__, 29156, 17)),
        LESS: __webpack_require__.e(/* import() */ 65498).then(__webpack_require__.t.bind(__webpack_require__, 65498, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 57888).then(__webpack_require__.t.bind(__webpack_require__, 57888, 17)),
        HTML: __webpack_require__.e(/* import() */ 15294).then(__webpack_require__.t.bind(__webpack_require__, 15294, 17)),
        LESS: __webpack_require__.e(/* import() */ 71019).then(__webpack_require__.t.bind(__webpack_require__, 71019, 17))
      };
      this.collapsed = false;
      this.sizeVariants = [`s`, `m`, `l`];
      this.size = null;
      this.max = 0;
      this.valueVariants = [[[30000, 20500, 12345], [12422, 16124, 22424]], [[30, 65, 30, 80, 54], [98, 48, 33, 25, 11], [55, 10, 27, 36, 73]]];
      this.value = this.valueVariants[0];
    }

  }

  ExampleTuiBarChartComponent.ɵfac = function ExampleTuiBarChartComponent_Factory(t) {
    return new (t || ExampleTuiBarChartComponent)();
  };

  ExampleTuiBarChartComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiBarChartComponent,
    selectors: [["example-tui-bar-chart"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4972350692603623963$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS_1 = goog.getMsg("BarChart");
        i18n_0 = MSG_EXTERNAL_4972350692603623963$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟310e0a6c470048f0830207f8705fc98ddf83e09f␟4972350692603623963:BarChart`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7559748480779361253$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__3 = goog.getMsg(" Bar chart that can be used as a content to {$startLink} axes {$closeLink} . ", {
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "\uFFFD/#2\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_7559748480779361253$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟bbf1520055e253a96936868291170717aab058a6␟7559748480779361253: Bar chart that can be used as a content to ${"\uFFFD#2\uFFFD"}:START_LINK: axes ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: . `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2292984449512804094$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__5 = goog.getMsg("With axes");
        i18n_4 = MSG_EXTERNAL_2292984449512804094$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟91d85f7cd08523d464572a8331ae010403898036␟2292984449512804094:With axes`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3035164386238041785$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__7 = goog.getMsg("Same values with collapsed mode");
        i18n_6 = MSG_EXTERNAL_3035164386238041785$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟787e849982377e68816c88e2bab70d23391c75ce␟3035164386238041785:Same values with collapsed mode`;
      }

      let i18n_9;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1300461621231032697$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___10 = goog.getMsg(" Shows data set in a single bar ");
        i18n_9 = MSG_EXTERNAL_1300461621231032697$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___10;
      } else {
        i18n_9 = $localize`:␟c8c3cf5337c2dfc41b63a6be38ecb6b8e75a1940␟1300461621231032697: Shows data set in a single bar `;
      }

      let i18n_11;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8322206422380376347$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___12 = goog.getMsg(" Sets chart max manually ");
        i18n_11 = MSG_EXTERNAL_8322206422380376347$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___12;
      } else {
        i18n_11 = $localize`:␟82dfd714cac7d622a7e5aec2489be564da4184e5␟8322206422380376347: Sets chart max manually `;
      }

      let i18n_13;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7603555242726494831$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___14 = goog.getMsg(" Size (use {$startTagCode}null{$closeTagCode} for autosize) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_13 = MSG_EXTERNAL_7603555242726494831$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___14;
      } else {
        i18n_13 = $localize`:␟3830e7ef75ee17fa449e62db9388a201fdd9d420␟7603555242726494831: Size (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:null${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: for autosize) `;
      }

      let i18n_15;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5346468389743474194$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___16 = goog.getMsg(" Array of segments ");
        i18n_15 = MSG_EXTERNAL_5346468389743474194$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS___16;
      } else {
        i18n_15 = $localize`:␟5227918e5051fd4c9eac18c22be2f4f747ef8001␟5346468389743474194: Array of segments `;
      }

      let i18n_17;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3833152904251514807$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__18 = goog.getMsg(" Import {$startTagCode}TuiBarChartModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_17 = MSG_EXTERNAL_3833152904251514807$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__18;
      } else {
        i18n_17 = $localize`:␟1ee4fd2173f4ec5d3bee4852bc366c9afc95b96f␟3833152904251514807: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiBarChartModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_19;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__20 = goog.getMsg("Add to the template:");
        i18n_19 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_BAR_CHART_BAR_CHART_COMPONENT_TS__20;
      } else {
        i18n_19 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "ADDON-CHARTS", "type", "components"], ["pageTab", ""], i18n_2, ["tuiLink", "", 3, "routerLink"], ["id", "axes", "heading", i18n_4, 3, "content"], ["id", "collapsed", "heading", i18n_6, 3, "content"], [1, "tui-space_bottom-6"], ["routerLink", "/directives/hint", "tuiLink", ""], [1, "chart", 3, "collapsed", "value", "max", "size"], ["documentationPropertyName", "collapsed", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "ReadonlyArray<readonly number[]>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_9, i18n_11, i18n_13, i18n_15, [1, "b-demo-steps"], i18n_17, ["filename", "myComponent.module.ts", 3, "code"], i18n_19, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiBarChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiBarChartComponent_ng_template_1_Template, 15, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiBarChartComponent_ng_template_2_Template, 7, 10, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiBarChartComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiBarChartExample1, notification_component/* TuiNotificationComponent */.L, TuiBarChartExample2, demo_component/* TuiDocDemoComponent */.F, bar_chart_component/* TuiBarChartComponent */.g, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: [".chart[_ngcontent-%COMP%]{height:12.5rem}"],
    changeDetection: 0
  });
  return ExampleTuiBarChartComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/bar-chart/bar-chart.module.ts













let ExampleTuiBarChartModule = /*#__PURE__*/(() => {
  class ExampleTuiBarChartModule {}

  ExampleTuiBarChartModule.ɵfac = function ExampleTuiBarChartModule_Factory(t) {
    return new (t || ExampleTuiBarChartModule)();
  };

  ExampleTuiBarChartModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiBarChartModule
  });
  ExampleTuiBarChartModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, addon_charts.TuiAxesModule, addon_charts.TuiBarChartModule, core.TuiHintModule, core.TuiNotificationModule, core.TuiLinkModule, addon_commerce.TuiMoneyModule, kit.TuiSelectModule, kit.TuiDataListWrapperModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiBarChartComponent))]]
  });
  return ExampleTuiBarChartModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiBarChartModule, {
    declarations: [ExampleTuiBarChartComponent, TuiBarChartExample1, TuiBarChartExample2],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, addon_charts.TuiAxesModule, addon_charts.TuiBarChartModule, core.TuiHintModule, core.TuiNotificationModule, core.TuiLinkModule, addon_commerce.TuiMoneyModule, kit.TuiSelectModule, kit.TuiDataListWrapperModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiBarChartComponent]
  });
})();

/***/ })

}]);