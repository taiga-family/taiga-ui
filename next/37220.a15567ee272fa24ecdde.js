"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[37220],{

/***/ 37220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiLineChartModule": () => (/* binding */ ExampleTuiLineChartModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-charts/index.ts + 20 modules
var addon_charts = __webpack_require__(50179);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-charts/components/axes/axes.component.ts
var axes_component = __webpack_require__(70390);
// EXTERNAL MODULE: ./projects/addon-charts/components/line-chart/line-chart.component.ts
var line_chart_component = __webpack_require__(58413);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/line-chart/examples/1/index.ts




let TuiLineChartExample1 = /*#__PURE__*/(() => {
  class TuiLineChartExample1 {
    constructor() {
      this.value = [[50, 50], [100, 75], [150, 50], [200, 150], [250, 155], [300, 190], [350, 90]];
      this.stringify = cdk.TUI_DEFAULT_STRINGIFY;
    }

  }

  TuiLineChartExample1.ɵfac = function TuiLineChartExample1_Factory(t) {
    return new (t || TuiLineChartExample1)();
  };

  TuiLineChartExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLineChartExample1,
    selectors: [["tui-line-chart-example-1"]],
    decls: 2,
    vars: 10,
    consts: [[1, "axes", 3, "verticalLines", "horizontalLines"], [3, "x", "y", "width", "height", "dots", "value", "xStringify", "yStringify"]],
    template: function TuiLineChartExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-axes", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-line-chart", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("verticalLines", 4)("horizontalLines", 2);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("x", 0)("y", 0)("width", 400)("height", 200)("dots", true)("value", ctx.value)("xStringify", ctx.stringify)("yStringify", ctx.stringify);
      }
    },
    directives: [axes_component/* TuiAxesComponent */.v, line_chart_component/* TuiLineChartComponent */.V],
    styles: [".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem;color:#bc71c9}"],
    changeDetection: 0
  });
  return TuiLineChartExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/line-chart/examples/2/index.ts



let TuiLineChartExample2 = /*#__PURE__*/(() => {
  class TuiLineChartExample2 {
    constructor() {
      this.value = [[50, 50], [100, 75], [150, 50], [200, 150], [250, 155], [300, 190], [350, 90]];
    }

  }

  TuiLineChartExample2.ɵfac = function TuiLineChartExample2_Factory(t) {
    return new (t || TuiLineChartExample2)();
  };

  TuiLineChartExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLineChartExample2,
    selectors: [["tui-line-chart-example-2"]],
    decls: 2,
    vars: 9,
    consts: [[1, "axes", 3, "verticalLines", "horizontalLines"], [3, "x", "y", "width", "height", "smoothingFactor", "value", "filled"]],
    template: function TuiLineChartExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-axes", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-line-chart", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("verticalLines", 4)("horizontalLines", 2);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("x", 0)("y", 0)("width", 400)("height", 200)("smoothingFactor", 50)("value", ctx.value)("filled", true);
      }
    },
    directives: [axes_component/* TuiAxesComponent */.v, line_chart_component/* TuiLineChartComponent */.V],
    styles: [".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem;color:#bc71c9}"],
    changeDetection: 0
  });
  return TuiLineChartExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/line-chart/examples/3/index.ts



let TuiLineChartExample3 = /*#__PURE__*/(() => {
  class TuiLineChartExample3 {
    constructor() {
      this.dotted = [[50, 50], [100, 75], [150, 50]];
      this.solid = [[150, 50], [200, 150], [250, 155]];
      this.dashed = [[250, 155], [300, 190], [350, 90]];
    }

  }

  TuiLineChartExample3.ɵfac = function TuiLineChartExample3_Factory(t) {
    return new (t || TuiLineChartExample3)();
  };

  TuiLineChartExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLineChartExample3,
    selectors: [["tui-line-chart-example-3"]],
    decls: 4,
    vars: 20,
    consts: [[1, "axes", 3, "verticalLines", "horizontalLines"], [1, "chart", "chart_dotted", 3, "dots", "x", "y", "width", "height", "value"], [1, "chart", 3, "dots", "x", "y", "width", "height", "value"], [1, "chart", "chart_dashed", 3, "dots", "x", "y", "width", "height", "value"]],
    template: function TuiLineChartExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-axes", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-line-chart", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-line-chart", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-line-chart", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("verticalLines", 4)("horizontalLines", 2);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("dots", true)("x", 0)("y", 0)("width", 400)("height", 200)("value", ctx.dotted);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("dots", true)("x", 0)("y", 0)("width", 400)("height", 200)("value", ctx.solid);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("dots", true)("x", 0)("y", 0)("width", 400)("height", 200)("value", ctx.dashed);
      }
    },
    directives: [axes_component/* TuiAxesComponent */.v, line_chart_component/* TuiLineChartComponent */.V],
    styles: [".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem;color:#bc71c9}.chart[_ngcontent-%COMP%]{position:absolute;top:0;left:0}.chart_dotted[_ngcontent-%COMP%]{stroke-dasharray:2}.chart_dashed[_ngcontent-%COMP%]{stroke-dasharray:4}"],
    changeDetection: 0
  });
  return TuiLineChartExample3;
})();
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/line-chart/examples/4/index.ts





function TuiLineChartExample4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "div");
    fesm2015_core/* ɵɵtext */._uU(3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "div");
    fesm2015_core/* ɵɵtext */._uU(5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const value_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij("Vertical: ", value_r2[0], "");
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij("Horizontal: ", value_r2[1], "");
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij("index: ", index_r3, "");
  }
}

let TuiLineChartExample4 = /*#__PURE__*/(() => {
  class TuiLineChartExample4 {
    constructor() {
      this.value = [[50, 50], [100, 75], [150, 50], [200, 150], [250, 155], [300, 190], [350, 90]];
      this.singleValue = [[200, 150]];

      this.hint = ({
        $implicit
      }) => `Vertical: ${$implicit[1]}\nHorizontal: ${$implicit[0]}`;
    }

  }

  TuiLineChartExample4.ɵfac = function TuiLineChartExample4_Factory(t) {
    return new (t || TuiLineChartExample4)();
  };

  TuiLineChartExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLineChartExample4,
    selectors: [["tui-line-chart-example-4"]],
    decls: 6,
    vars: 17,
    consts: [[1, "axes", 3, "verticalLines", "horizontalLines"], [3, "x", "y", "width", "height", "value", "tuiHintContent"], [1, "axes", "tui-space_top-10", 3, "verticalLines", "horizontalLines"], ["tuiHintAppearance", "error", 3, "tuiHintContent", "x", "y", "width", "height", "value", "dots"], ["hintContent", ""]],
    template: function TuiLineChartExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-axes", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-line-chart", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-axes", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-line-chart", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiLineChartExample4_ng_template_4_Template, 6, 3, "ng-template", null, 4, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(5);

        fesm2015_core/* ɵɵproperty */.Q6J("verticalLines", 4)("horizontalLines", 2);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("x", 0)("y", 0)("width", 400)("height", 200)("value", ctx.value)("tuiHintContent", ctx.hint);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("verticalLines", 4)("horizontalLines", 2);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHintContent", _r0)("x", 0)("y", 0)("width", 400)("height", 200)("value", ctx.singleValue)("dots", true);
      }
    },
    directives: [axes_component/* TuiAxesComponent */.v, line_chart_component/* TuiLineChartComponent */.V, hint_options_directive/* TuiHintOptionsDirective */.bZ],
    styles: [".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem;color:#bc71c9}"],
    changeDetection: 0
  });
  return TuiLineChartExample4;
})();
// EXTERNAL MODULE: ./projects/addon-charts/components/line-chart/line-chart-hint.directive.ts
var line_chart_hint_directive = __webpack_require__(69775);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/line-chart/examples/5/index.ts






function TuiLineChartExample5_tui_line_chart_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-line-chart", 2);
  }

  if (rf & 2) {
    const value_r1 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("x", 0)("y", 0)("width", 400)("height", 200)("value", value_r1);
  }
}

let TuiLineChartExample5 = /*#__PURE__*/(() => {
  class TuiLineChartExample5 {
    constructor() {
      this.values = [[[50, 50], [100, 75], [150, 50], [200, 150], [250, 155], [300, 190], [350, 90]], [[50, 40], [100, 60], [150, 90], [200, 120], [250, 150], [300, 110], [350, 130]], [[50, 30], [100, 90], [150, 80], [200, 50], [250, 130], [300, 190], [350, 150]]];

      this.hint = ({
        $implicit
      }) => `${$implicit[0][0]} items:\n\n${$implicit.map(([_, y]) => y).join(`$\n`)}$`;
    }

  }

  TuiLineChartExample5.ɵfac = function TuiLineChartExample5_Factory(t) {
    return new (t || TuiLineChartExample5)();
  };

  TuiLineChartExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLineChartExample5,
    selectors: [["tui-line-chart-example-5"]],
    decls: 2,
    vars: 4,
    consts: [[1, "axes", 3, "verticalLines", "horizontalLines", "tuiLineChartHint"], ["class", "chart", 3, "x", "y", "width", "height", "value", 4, "ngFor", "ngForOf"], [1, "chart", 3, "x", "y", "width", "height", "value"]],
    template: function TuiLineChartExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-axes", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiLineChartExample5_tui_line_chart_1_Template, 1, 5, "tui-line-chart", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("verticalLines", 4)("horizontalLines", 2)("tuiLineChartHint", ctx.hint);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.values);
      }
    },
    directives: [axes_component/* TuiAxesComponent */.v, line_chart_hint_directive/* TuiLineChartHintDirective */.T, common/* NgForOf */.sg, line_chart_component/* TuiLineChartComponent */.V],
    styles: [".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem}.chart[_ngcontent-%COMP%]{position:absolute;color:#ffb74c}.chart[_ngcontent-%COMP%]:first-child{color:#bc71c9}.chart[_ngcontent-%COMP%]:last-child{color:#4dc3f7}"],
    changeDetection: 0
  });
  return TuiLineChartExample5;
})();
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/line-chart/line-chart.component.ts



















function ExampleTuiLineChartComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-example", 2);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-line-chart-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-line-chart-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-line-chart-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-notification", 6);
    fesm2015_core/* ɵɵtext */._uU(8, " Use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "a", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "code");
    fesm2015_core/* ɵɵtext */._uU(11, "Hint");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(12, " directive to enable hints with ");
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "code");
    fesm2015_core/* ɵɵtext */._uU(14, "tuiHintContent");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-line-chart-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(17, "tui-line-chart-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
  }
}

function ExampleTuiLineChartComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiLineChartComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

function ExampleTuiLineChartComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 23);
  }
}

function ExampleTuiLineChartComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 24);
  }
}

function ExampleTuiLineChartComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 25);
  }
}

function ExampleTuiLineChartComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 26);
  }
}

function ExampleTuiLineChartComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 27);
  }
}

function ExampleTuiLineChartComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 28);
  }
}

function ExampleTuiLineChartComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 29);
  }
}

function ExampleTuiLineChartComponent_ng_template_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 30);
  }
}

function ExampleTuiLineChartComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-axes", 9);
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-line-chart", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiLineChartComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.dots = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiLineChartComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.filled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiLineChartComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.height = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiLineChartComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.y = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiLineChartComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.width = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiLineChartComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r19.x = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiLineChartComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r20.smoothingFactor = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiLineChartComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiLineChartComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r21.xStringify = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(13, ExampleTuiLineChartComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r22 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r22.yStringify = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("verticalLines", 4)("horizontalLines", 2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("x", ctx_r1.x)("y", ctx_r1.y)("width", ctx_r1.width)("height", ctx_r1.height)("smoothingFactor", ctx_r1.smoothingFactor)("value", ctx_r1.value)("filled", ctx_r1.filled)("dots", ctx_r1.dots)("xStringify", ctx_r1.xStringify)("yStringify", ctx_r1.yStringify);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.dots);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.filled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.height);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.y);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.width);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.x);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.smoothingFactor);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.xStringifyVariants)("documentationPropertyValue", ctx_r1.xStringify);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.yStringifyVariants)("documentationPropertyValue", ctx_r1.yStringify);
  }
}

function ExampleTuiLineChartComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 31);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 32);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 33);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 34);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 35);
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

let ExampleTuiLineChartComponent = /*#__PURE__*/(() => {
  class ExampleTuiLineChartComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 66278).then(__webpack_require__.t.bind(__webpack_require__, 66278, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 13518).then(__webpack_require__.t.bind(__webpack_require__, 13518, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 18708).then(__webpack_require__.t.bind(__webpack_require__, 18708, 17)),
        HTML: __webpack_require__.e(/* import() */ 52026).then(__webpack_require__.t.bind(__webpack_require__, 52026, 17)),
        LESS: __webpack_require__.e(/* import() */ 16613).then(__webpack_require__.t.bind(__webpack_require__, 16613, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 46931).then(__webpack_require__.t.bind(__webpack_require__, 46931, 17)),
        HTML: __webpack_require__.e(/* import() */ 27863).then(__webpack_require__.t.bind(__webpack_require__, 27863, 17)),
        LESS: __webpack_require__.e(/* import() */ 93046).then(__webpack_require__.t.bind(__webpack_require__, 93046, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 41598).then(__webpack_require__.t.bind(__webpack_require__, 41598, 17)),
        HTML: __webpack_require__.e(/* import() */ 31592).then(__webpack_require__.t.bind(__webpack_require__, 31592, 17)),
        LESS: __webpack_require__.e(/* import() */ 94492).then(__webpack_require__.t.bind(__webpack_require__, 94492, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 54493).then(__webpack_require__.t.bind(__webpack_require__, 54493, 17)),
        HTML: __webpack_require__.e(/* import() */ 91501).then(__webpack_require__.t.bind(__webpack_require__, 55846, 17)),
        LESS: __webpack_require__.e(/* import() */ 73712).then(__webpack_require__.t.bind(__webpack_require__, 73712, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 12572).then(__webpack_require__.t.bind(__webpack_require__, 12572, 17)),
        HTML: __webpack_require__.e(/* import() */ 38558).then(__webpack_require__.t.bind(__webpack_require__, 38558, 17)),
        LESS: __webpack_require__.e(/* import() */ 7213).then(__webpack_require__.t.bind(__webpack_require__, 7213, 17))
      };
      this.value = [[50, 50], [100, 75], [150, 50], [200, 150], [250, 155], [300, 190], [350, 90]];
      this.yStringifyVariants = [y => `${(10 * y).toLocaleString(`ru-RU`, {
        maximumFractionDigits: 0
      })} $`];
      this.xStringifyVariants = [x => `${100 * x}`];
      this.yStringify = null;
      this.xStringify = null;
      this.x = 0;
      this.y = 0;
      this.width = 400;
      this.height = 200;
      this.smoothingFactor = 0;
      this.filled = false;
      this.dots = false;
    }

  }

  ExampleTuiLineChartComponent.ɵfac = function ExampleTuiLineChartComponent_Factory(t) {
    return new (t || ExampleTuiLineChartComponent)();
  };

  ExampleTuiLineChartComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiLineChartComponent,
    selectors: [["example-tui-line-chart"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8543119714580512727$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__1 = goog.getMsg("Line");
        i18n_0 = MSG_EXTERNAL_8543119714580512727$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟af942a24234fa47efa01bf2d4236dad05131a5a0␟8543119714580512727:Line`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4272334652167271438$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__3 = goog.getMsg("Smooth");
        i18n_2 = MSG_EXTERNAL_4272334652167271438$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟d98cf87828e8a5c956667d9a8b9c12145824ee0f␟4272334652167271438:Smooth`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2812108764688288077$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__5 = goog.getMsg("Dotted");
        i18n_4 = MSG_EXTERNAL_2812108764688288077$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟86baef6e3d5572968c0da4f1709f97c74190d36e␟2812108764688288077:Dotted`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5135659169158832318$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__7 = goog.getMsg("Hint");
        i18n_6 = MSG_EXTERNAL_5135659169158832318$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟1560319447dbaf27b0d1b06e594c573c85d89d96␟5135659169158832318:Hint`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4740076445307023096$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___9 = goog.getMsg(" Show dots on chart ");
        i18n_8 = MSG_EXTERNAL_4740076445307023096$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟c4d83e70435953f62ccae3cbf6016420df475424␟4740076445307023096: Show dots on chart `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6311054337495080517$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___11 = goog.getMsg(" Filled with gradient ");
        i18n_10 = MSG_EXTERNAL_6311054337495080517$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟9baeb452de4b3e87de2854d7d7299ae8e5349371␟6311054337495080517: Filled with gradient `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4329060505650601384$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___13 = goog.getMsg(" Axis Y range, pixel scale is 1:1 ");
        i18n_12 = MSG_EXTERNAL_4329060505650601384$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟1148b851b9d07a503fe83074185fada4c56bc932␟4329060505650601384: Axis Y range, pixel scale is 1:1 `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9084820970498059965$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___15 = goog.getMsg(" Start of Y axis ");
        i18n_14 = MSG_EXTERNAL_9084820970498059965$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟f33f8b3f2cfd7ef519194cc1ae13fc8fb91fb8d7␟9084820970498059965: Start of Y axis `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8347772747848156772$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___17 = goog.getMsg(" Axis X range, pixel scale is 1:1 ");
        i18n_16 = MSG_EXTERNAL_8347772747848156772$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟f4bba10989219b2e80f0c07cb583e5975596b805␟8347772747848156772: Axis X range, pixel scale is 1:1 `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_715212499497888512$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___19 = goog.getMsg(" Start of X axis ");
        i18n_18 = MSG_EXTERNAL_715212499497888512$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟792c21644049857ec7d2abd21a018da6feeaf8f3␟715212499497888512: Start of X axis `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7622132382477188848$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___21 = goog.getMsg(" Smoothing factor from 0 to 99 ");
        i18n_20 = MSG_EXTERNAL_7622132382477188848$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟dbcff3658adbc7241a4e120d0403b9b59203cf6f␟7622132382477188848: Smoothing factor from 0 to 99 `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_620827304048157009$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___23 = goog.getMsg(" Array of data ");
        i18n_22 = MSG_EXTERNAL_620827304048157009$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟2eb20b3adec45476e892d48624603eec29f04ca7␟620827304048157009: Array of data `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8840512580092681625$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___25 = goog.getMsg(" Function to stringify a value number to a string in axis X hint ");
        i18n_24 = MSG_EXTERNAL_8840512580092681625$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟a95376fd00f2c7de89ef1205191f686e9bb93ceb␟8840512580092681625: Function to stringify a value number to a string in axis X hint `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8439308556823064311$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___27 = goog.getMsg(" Function to stringify a value number to a string in axis Y hint ");
        i18n_26 = MSG_EXTERNAL_8439308556823064311$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟aa03eea8f292367391947b1ee6d45d8e5fe1c884␟8439308556823064311: Function to stringify a value number to a string in axis Y hint `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4207828476122780700$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__29 = goog.getMsg(" Import {$startTagCode}TuiLineChartModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_28 = MSG_EXTERNAL_4207828476122780700$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__29;
      } else {
        i18n_28 = $localize`:␟30a5ab566dceb0cacf69465ffadb6bd0c272f1c4␟4207828476122780700: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiLineChartModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__31 = goog.getMsg("Add to the template:");
        i18n_30 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__31;
      } else {
        i18n_30 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "LineChart", "package", "ADDON-CHARTS", "type", "components"], ["pageTab", ""], ["id", "line", "heading", i18n_0, 3, "content"], ["id", "curve", "heading", i18n_2, 3, "content"], ["id", "dash", "heading", i18n_4, 3, "content"], ["id", "hint", "heading", i18n_6, 3, "content"], [1, "tui-space_bottom-6"], ["routerLink", "/directives/hint", "tuiLink", ""], ["id", "multiple", "heading", "Several lines with hints", 3, "content"], [1, "axes", 3, "verticalLines", "horizontalLines"], [3, "x", "y", "width", "height", "smoothingFactor", "value", "filled", "dots", "xStringify", "yStringify"], ["documentationPropertyName", "dots", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "filled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "height", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "y", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "width", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "x", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "smoothingFactor", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "TuiPoint[]"], ["documentationPropertyName", "xStringify", "documentationPropertyMode", "input", "documentationPropertyType", "TuiStringHandler<number> | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "yStringify", "documentationPropertyMode", "input", "documentationPropertyType", "TuiStringHandler<number> | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, [1, "b-demo-steps"], i18n_28, ["filename", "myComponent.module.ts", 3, "code"], i18n_30, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiLineChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiLineChartComponent_ng_template_1_Template, 18, 5, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiLineChartComponent_ng_template_2_Template, 14, 23, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiLineChartComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiLineChartExample1, TuiLineChartExample2, TuiLineChartExample3, notification_component/* TuiNotificationComponent */.L, router/* RouterLinkWithHref */.yS, link_component/* TuiLinkComponent */.V, TuiLineChartExample4, TuiLineChartExample5, demo_component/* TuiDocDemoComponent */.F, axes_component/* TuiAxesComponent */.v, line_chart_component/* TuiLineChartComponent */.V, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: [".axes[_ngcontent-%COMP%]{height:12.5rem;width:25rem;color:#bc71c9}"],
    changeDetection: 0
  });
  return ExampleTuiLineChartComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/line-chart/line-chart.module.ts














let ExampleTuiLineChartModule = /*#__PURE__*/(() => {
  class ExampleTuiLineChartModule {}

  ExampleTuiLineChartModule.ɵfac = function ExampleTuiLineChartModule_Factory(t) {
    return new (t || ExampleTuiLineChartModule)();
  };

  ExampleTuiLineChartModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiLineChartModule
  });
  ExampleTuiLineChartModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, core.TuiLinkModule, core.TuiHintModule, addon_charts.TuiAxesModule, core.TuiNotificationModule, addon_charts.TuiLineChartModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiLineChartComponent))]]
  });
  return ExampleTuiLineChartModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiLineChartModule, {
    declarations: [ExampleTuiLineChartComponent, TuiLineChartExample1, TuiLineChartExample2, TuiLineChartExample3, TuiLineChartExample4, TuiLineChartExample5],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, core.TuiLinkModule, core.TuiHintModule, addon_charts.TuiAxesModule, core.TuiNotificationModule, addon_charts.TuiLineChartModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiLineChartComponent]
  });
})();

/***/ })

}]);