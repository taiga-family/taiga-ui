"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[29160],{

/***/ 29160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiAxesModule": () => (/* binding */ ExampleTuiAxesModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
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
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-charts/components/axes/axes.component.ts
var axes_component = __webpack_require__(70390);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/axes/examples/1/index.ts


let TuiAxesExample1 = /*#__PURE__*/(() => {
  class TuiAxesExample1 {
    constructor() {
      this.axisXLabels = [`Jan 2019`, `Feb`, `Mar`];
      this.axisYLabels = [``, `25%`, `50%`, `75%`, `100%`];
      this.axisYSecondaryLabels = [`80 k`, `100 k`, `120 k`];

      this.verticalLinesHandler = (index, total) => index === total - 1 ? `none` : `dashed`;
    }

  }

  TuiAxesExample1.ɵfac = function TuiAxesExample1_Factory(t) {
    return new (t || TuiAxesExample1)();
  };

  TuiAxesExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiAxesExample1,
    selectors: [["tui-axes-example-1"]],
    decls: 1,
    vars: 7,
    consts: [["axisYName", "Target", "axisYSecondaryName", "Sum", 1, "axes", 3, "axisYInset", "horizontalLines", "verticalLines", "axisXLabels", "axisYLabels", "axisYSecondaryLabels", "verticalLinesHandler"]],
    template: function TuiAxesExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-axes", 0);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("axisYInset", true)("horizontalLines", 2)("verticalLines", 3)("axisXLabels", ctx.axisXLabels)("axisYLabels", ctx.axisYLabels)("axisYSecondaryLabels", ctx.axisYSecondaryLabels)("verticalLinesHandler", ctx.verticalLinesHandler);
      }
    },
    directives: [axes_component/* TuiAxesComponent */.v],
    styles: [".axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}"],
    changeDetection: 0
  });
  return TuiAxesExample1;
})();
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/addon-charts/components/bar-chart/bar-chart.component.ts
var bar_chart_component = __webpack_require__(88549);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/axes/examples/2/index.ts










function TuiAxesExample2_ng_template_2_p_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p", 4);
    fesm2015_core/* ɵɵelement */._UZ(1, "span", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "span", 6);
    fesm2015_core/* ɵɵtext */._uU(3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-money", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    const setIndex_r2 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵstyleProp */.Udp("background", ctx_r3.getBackground(index_r5));
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx_r3.getSetName(index_r5));
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("singleColor", true)("value", item_r4[setIndex_r2] * 1000);
  }
}

function TuiAxesExample2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtemplate */.YNc(0, TuiAxesExample2_ng_template_2_p_0_Template, 5, 5, "p", 3);
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r1.value);
  }
}

const BENJI = 100;
class TuiAxesExample2 {
  constructor() {
    this.setNames = [`cdk`, `core`, `kit`, `charts`];
    this.value = [[10, 20, 3, 7], [15, 18, 24, 1], [34, 23, 12, 9], [30, 14, 18, 14]];
    this.axisYSecondaryLabels = [``, `${this.getMax(this.value) / 2} k`, `${this.getMax(this.value)} k`];
    this.axisXLabels = [`Q1`, `Q2`, `Q3`, `Q4`];
    this.horizontalLinesHandler = addon_charts.TUI_ALWAYS_DASHED;
    this.verticalLinesHandler = addon_charts.TUI_ALWAYS_NONE;
  }

  getPercent(set) {
    return BENJI * Math.max(...set) / this.getMax(this.value);
  }

  getSetName(index) {
    return this.setNames[index];
  }

  getBackground(index) {
    return `var(--tui-chart-${index})`;
  }

  getMax(value) {
    return (0,cdk.tuiCeil)(value.reduce((max, value) => Math.max(...value, max), 0), -1);
  }

}

TuiAxesExample2.ɵfac = function TuiAxesExample2_Factory(t) {
  return new (t || TuiAxesExample2)();
};

TuiAxesExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: TuiAxesExample2,
  selectors: [["tui-axes-example-2"]],
  decls: 4,
  vars: 8,
  consts: [["axisY", "none", 1, "axes", 3, "axisXLabels", "axisYSecondaryLabels", "horizontalLines", "verticalLines", "horizontalLinesHandler", "verticalLinesHandler"], [1, "chart", 3, "value", "tuiHintContent"], ["hint", ""], ["class", "hint", 4, "ngFor", "ngForOf"], [1, "hint"], [1, "dot"], [1, "name"], [3, "singleColor", "value"]],
  template: function TuiAxesExample2_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-axes", 0);
      fesm2015_core/* ɵɵelement */._UZ(1, "tui-bar-chart", 1);
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵtemplate */.YNc(2, TuiAxesExample2_ng_template_2_Template, 1, 1, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    }

    if (rf & 2) {
      const _r0 = fesm2015_core/* ɵɵreference */.MAs(3);

      fesm2015_core/* ɵɵproperty */.Q6J("axisXLabels", ctx.axisXLabels)("axisYSecondaryLabels", ctx.axisYSecondaryLabels)("horizontalLines", 2)("verticalLines", 4)("horizontalLinesHandler", ctx.horizontalLinesHandler)("verticalLinesHandler", ctx.verticalLinesHandler);
      fesm2015_core/* ɵɵadvance */.xp6(1);
      fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value)("tuiHintContent", _r0);
    }
  },
  directives: [axes_component/* TuiAxesComponent */.v, bar_chart_component/* TuiBarChartComponent */.g, hint_options_directive/* TuiHintOptionsDirective */.bZ, common/* NgForOf */.sg, money_component/* TuiMoneyComponent */.o],
  styles: ["[_nghost-%COMP%], .hint[_ngcontent-%COMP%]{--tui-chart-0: #c779d0;--tui-chart-1: #feac5e;--tui-chart-2: #ff5f6d;--tui-chart-3: #4bc0c8}.axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}.chart[_ngcontent-%COMP%]{height:100%}.wrapper[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;align-items:flex-end;justify-content:center;height:100%;margin-bottom:-.0625rem;cursor:pointer}.wrapper[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.05)}.hint[_ngcontent-%COMP%]{display:flex;align-items:center}.dot[_ngcontent-%COMP%]{border-radius:100%;width:.75rem;height:.75rem;margin-right:.5rem}.name[_ngcontent-%COMP%]{margin-right:.5rem}"],
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiAxesExample2.prototype, "getMax", null);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/axes/axes.component.ts













function ExampleTuiAxesComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-axes-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-axes-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiAxesComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiAxesComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 20);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiAxesComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiAxesComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

function ExampleTuiAxesComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 23);
  }
}

function ExampleTuiAxesComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 24);
  }
}

function ExampleTuiAxesComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 25);
  }
}

function ExampleTuiAxesComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 26);
  }
}

function ExampleTuiAxesComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 27);
  }
}

function ExampleTuiAxesComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 28);
  }
}

function ExampleTuiAxesComponent_ng_template_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 29);
  }
}

function ExampleTuiAxesComponent_ng_template_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 30);
  }
}

function ExampleTuiAxesComponent_ng_template_2_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 31);
  }
}

function ExampleTuiAxesComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-axes", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiAxesComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.axisX = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiAxesComponent_ng_template_2_ng_template_4_Template, 2, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.axisXLabels = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiAxesComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r19.axisY = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiAxesComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r20.axisYInset = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiAxesComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r21.axisYLabels = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiAxesComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r22 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r22.axisYName = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiAxesComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r23 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r23.axisYSecondaryInset = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiAxesComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r24 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r24.axisYSecondaryLabels = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiAxesComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r25 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r25.axisYSecondaryName = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiAxesComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r26 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r26.horizontalLines = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(13, ExampleTuiAxesComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r27 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r27.horizontalLinesHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(14, ExampleTuiAxesComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r28 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r28.verticalLines = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(15, ExampleTuiAxesComponent_ng_template_2_ng_template_15_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiAxesComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_15_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r29 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r29.verticalLinesHandler = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("axisX", ctx_r1.axisX)("axisXLabels", ctx_r1.axisXLabels)("axisY", ctx_r1.axisY)("axisYInset", ctx_r1.axisYInset)("axisYLabels", ctx_r1.axisYLabels)("axisYName", ctx_r1.axisYName)("axisYSecondaryInset", ctx_r1.axisYSecondaryInset)("axisYSecondaryLabels", ctx_r1.axisYSecondaryLabels)("axisYSecondaryName", ctx_r1.axisYSecondaryName)("horizontalLines", ctx_r1.horizontalLines)("horizontalLinesHandler", ctx_r1.horizontalLinesHandler)("verticalLines", ctx_r1.verticalLines)("verticalLinesHandler", ctx_r1.verticalLinesHandler);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.lineVariants)("documentationPropertyValue", ctx_r1.axisX);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.labelsXVariants)("documentationPropertyValue", ctx_r1.axisXLabels);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.lineVariants)("documentationPropertyValue", ctx_r1.axisY);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.axisYInset);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.labelsYVariants)("documentationPropertyValue", ctx_r1.axisYLabels);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.axisYName);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.axisYSecondaryInset);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.labelsYVariants)("documentationPropertyValue", ctx_r1.axisYSecondaryLabels);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.axisYSecondaryName);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.horizontalLines);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.handlerVariants)("documentationPropertyValue", ctx_r1.horizontalLinesHandler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.verticalLines);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.handlerVariants)("documentationPropertyValue", ctx_r1.verticalLinesHandler);
  }
}

function ExampleTuiAxesComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 32);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 33);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 34);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 35);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 36);
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

let ExampleTuiAxesComponent = /*#__PURE__*/(() => {
  class ExampleTuiAxesComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 49477).then(__webpack_require__.t.bind(__webpack_require__, 49477, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 70123).then(__webpack_require__.t.bind(__webpack_require__, 70123, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 79766).then(__webpack_require__.t.bind(__webpack_require__, 79766, 17)),
        HTML: __webpack_require__.e(/* import() */ 67112).then(__webpack_require__.t.bind(__webpack_require__, 67112, 17)),
        LESS: __webpack_require__.e(/* import() */ 43475).then(__webpack_require__.t.bind(__webpack_require__, 43475, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 77781).then(__webpack_require__.t.bind(__webpack_require__, 77781, 17)),
        HTML: __webpack_require__.e(/* import() */ 72570).then(__webpack_require__.t.bind(__webpack_require__, 72570, 17)),
        LESS: __webpack_require__.e(/* import() */ 49767).then(__webpack_require__.t.bind(__webpack_require__, 49767, 17))
      };
      this.lineVariants = [`solid`, `dashed`, `none`, `hidden`];
      this.labelsXVariants = [[], [``, `25%`, `50%`, `100%`], [`One`, `Two`, `Three`], [`One`, null, ``, `Two and a half`, `Three`, null]];
      this.labelsYVariants = [[], [``, `25%`, `50%`, `100%`], [`One`, `Two`, `Three`], [`One`, ``, `Two and a half`, `Three`]];
      this.handlerVariants = [addon_charts.TUI_ALWAYS_SOLID, addon_charts.TUI_ALWAYS_DASHED, index => index % 2 ? `dashed` : `solid`];
      this.axisX = this.lineVariants[0];
      this.axisXLabels = this.labelsXVariants[0];
      this.axisY = this.lineVariants[0];
      this.axisYInset = false;
      this.axisYLabels = this.labelsYVariants[0];
      this.axisYName = ``;
      this.axisYSecondaryInset = false;
      this.axisYSecondaryLabels = this.labelsYVariants[0];
      this.axisYSecondaryName = ``;
      this.horizontalLines = 0;
      this.horizontalLinesHandler = this.handlerVariants[0];
      this.verticalLines = 0;
      this.verticalLinesHandler = this.handlerVariants[1];
    }

  }

  ExampleTuiAxesComponent.ɵfac = function ExampleTuiAxesComponent_Factory(t) {
    return new (t || ExampleTuiAxesComponent)();
  };

  ExampleTuiAxesComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiAxesComponent,
    selectors: [["example-tui-axes"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3176053473328457908$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS_1 = goog.getMsg("Axes");
        i18n_0 = MSG_EXTERNAL_3176053473328457908$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟157063b95e7de3b711a5e65f8b1b4a66bf51a9a7␟3176053473328457908:Axes`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3749794859286359761$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__3 = goog.getMsg("Just axes for charts");
        i18n_2 = MSG_EXTERNAL_3749794859286359761$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟299892581b7c29a4afe856bb50e83f932e7c19f9␟3749794859286359761:Just axes for charts`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5400608477820076858$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__5 = goog.getMsg("Cool one");
        i18n_4 = MSG_EXTERNAL_5400608477820076858$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟9b735478d27ada48a6cc734cb7f499ffe3b60f31␟5400608477820076858:Cool one`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_927609271953315702$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__7 = goog.getMsg("With bars");
        i18n_6 = MSG_EXTERNAL_927609271953315702$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟befa476ed5c37d3ed4be47fe5759c340c6e24cd4␟927609271953315702:With bars`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7040174970690647937$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___9 = goog.getMsg(" Axis X ");
        i18n_8 = MSG_EXTERNAL_7040174970690647937$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟f64e1f5d1e794dab4b787c26bf022a2c9898d1ef␟7040174970690647937: Axis X `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5270458325684962839$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___11 = goog.getMsg(" Labels for X. Emptry string is empty stroke, {$startTagCode}null{$closeTagCode} \u2014 no stroke ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_5270458325684962839$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟2f8e23a3f6977505fbbb8b3213e5912e32a2188d␟5270458325684962839: Labels for X. Emptry string is empty stroke, ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:null${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: — no stroke `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5140923464869546529$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___13 = goog.getMsg(" Axis Y ");
        i18n_12 = MSG_EXTERNAL_5140923464869546529$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟2642d8e7bc40dbf7276fb69cb640c80ac1c07be9␟5140923464869546529: Axis Y `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2837390181413385612$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___15 = goog.getMsg(" Inset of labels on axis Y ");
        i18n_14 = MSG_EXTERNAL_2837390181413385612$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟60800456eca99202fc6cebb2fc9f5a10a5e0a72d␟2837390181413385612: Inset of labels on axis Y `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2657129922321475589$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___17 = goog.getMsg(" Labels for Y ");
        i18n_16 = MSG_EXTERNAL_2657129922321475589$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟06d8e98f8b5258586ff187e97dae0d16518e9ab5␟2657129922321475589: Labels for Y `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4037762709948884159$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___19 = goog.getMsg(" Name of Y axis ");
        i18n_18 = MSG_EXTERNAL_4037762709948884159$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟7e478ef44515adc35026c32852851c7f7d84d651␟4037762709948884159: Name of Y axis `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1884145993509521583$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___21 = goog.getMsg(" Inset labels for Y ");
        i18n_20 = MSG_EXTERNAL_1884145993509521583$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟ac60157a8311a55856019cafd6b36016eb669dab␟1884145993509521583: Inset labels for Y `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5391635047792570800$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___23 = goog.getMsg(" Secondary Y axis labels ");
        i18n_22 = MSG_EXTERNAL_5391635047792570800$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟83b47ed4c100d02f8d9266656e0a0cd4868829a1␟5391635047792570800: Secondary Y axis labels `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1495535954616436734$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___25 = goog.getMsg(" Secondary Y axis name ");
        i18n_24 = MSG_EXTERNAL_1495535954616436734$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟264edf3e9d07bdae2defe9a9a8083e92d020d303␟1495535954616436734: Secondary Y axis name `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8249773395630076811$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___27 = goog.getMsg(" Horizontal lines number ");
        i18n_26 = MSG_EXTERNAL_8249773395630076811$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟b320bfbd957dcc40c0482581c996f149ec3ffbf5␟8249773395630076811: Horizontal lines number `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7177151488130232990$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___29 = goog.getMsg(" Horizontal lines type handler ");
        i18n_28 = MSG_EXTERNAL_7177151488130232990$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___29;
      } else {
        i18n_28 = $localize`:␟36af86f2988f299294e7c3e39259c33da740851b␟7177151488130232990: Horizontal lines type handler `;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6546346680735354696$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___31 = goog.getMsg(" Number of vertical lines ");
        i18n_30 = MSG_EXTERNAL_6546346680735354696$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___31;
      } else {
        i18n_30 = $localize`:␟5495dd2570db74aef538977c664775059a1554c9␟6546346680735354696: Number of vertical lines `;
      }

      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1142374539392645294$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___33 = goog.getMsg(" Vertical lines type handler ");
        i18n_32 = MSG_EXTERNAL_1142374539392645294$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS___33;
      } else {
        i18n_32 = $localize`:␟cf738f0fc8a03a466440318b0f21a2b9199b10c6␟1142374539392645294: Vertical lines type handler `;
      }

      let i18n_34;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2561454909924995663$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__35 = goog.getMsg(" Import {$startTagCode}TuiAxesModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_34 = MSG_EXTERNAL_2561454909924995663$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__35;
      } else {
        i18n_34 = $localize`:␟44a035fbfcb4f3f0ef301785a4fea1e80b4afe55␟2561454909924995663: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiAxesModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_36;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__37 = goog.getMsg("Add to the template:");
        i18n_36 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_AXES_AXES_COMPONENT_TS__37;
      } else {
        i18n_36 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "ADDON-CHARTS", "type", "components"], ["pageTab", ""], i18n_2, ["id", "advanced", "heading", i18n_4, 3, "content"], ["id", "bars", "heading", i18n_6, 3, "content"], [1, "axes", 3, "axisX", "axisXLabels", "axisY", "axisYInset", "axisYLabels", "axisYName", "axisYSecondaryInset", "axisYSecondaryLabels", "axisYSecondaryName", "horizontalLines", "horizontalLinesHandler", "verticalLines", "verticalLinesHandler"], ["documentationPropertyName", "axisX", "documentationPropertyMode", "input", "documentationPropertyType", "TuiLineTypeT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "axisXLabels", "documentationPropertyMode", "input", "documentationPropertyType", "ReadonlyArray<string | null>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "axisY", "documentationPropertyMode", "input", "documentationPropertyType", "TuiLineTypeT", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "axisYInset", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "axisYLabels", "documentationPropertyMode", "input", "documentationPropertyType", "readonly string[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "axisYName", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "axisYSecondaryInset", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "axisYSecondaryLabels", "documentationPropertyMode", "input", "documentationPropertyType", "readonly string[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "axisYSecondaryName", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "horizontalLines", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "horizontalLinesHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiLineHandler", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "verticalLines", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "verticalLinesHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiLineHandler", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, i18n_30, i18n_32, [1, "b-demo-steps"], i18n_34, ["filename", "myComponent.module.ts", 3, "code"], i18n_36, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiAxesComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiAxesComponent_ng_template_1_Template, 6, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiAxesComponent_ng_template_2_Template, 16, 33, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiAxesComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiAxesExample1, TuiAxesExample2, demo_component/* TuiDocDemoComponent */.F, axes_component/* TuiAxesComponent */.v, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: [".axes[_ngcontent-%COMP%]{height:12.5rem}"],
    changeDetection: 0
  });
  return ExampleTuiAxesComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/axes/axes.module.ts












let ExampleTuiAxesModule = /*#__PURE__*/(() => {
  class ExampleTuiAxesModule {}

  ExampleTuiAxesModule.ɵfac = function ExampleTuiAxesModule_Factory(t) {
    return new (t || ExampleTuiAxesModule)();
  };

  ExampleTuiAxesModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiAxesModule
  });
  ExampleTuiAxesModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, router/* RouterModule */.Bz, addon_charts.TuiAxesModule, addon_charts.TuiBarChartModule, core.TuiHintModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, addon_commerce.TuiMoneyModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiAxesComponent))]]
  });
  return ExampleTuiAxesModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiAxesModule, {
    declarations: [ExampleTuiAxesComponent, TuiAxesExample1, TuiAxesExample2],
    imports: [common/* CommonModule */.ez, router/* RouterModule */.Bz, addon_charts.TuiAxesModule, addon_charts.TuiBarChartModule, core.TuiHintModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, addon_commerce.TuiMoneyModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiAxesComponent]
  });
})();

/***/ })

}]);