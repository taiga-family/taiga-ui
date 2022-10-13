"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[69835],{

/***/ 69835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiLegendItemModule": () => (/* binding */ ExampleTuiLegendItemModule)
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
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-charts/components/ring-chart/ring-chart.component.ts
var ring_chart_component = __webpack_require__(57464);
// EXTERNAL MODULE: ./projects/addon-commerce/components/money/money.component.ts
var money_component = __webpack_require__(16996);
// EXTERNAL MODULE: ./projects/addon-charts/components/legend-item/legend-item.component.ts
var legend_item_component = __webpack_require__(57416);
// EXTERNAL MODULE: ./projects/cdk/directives/hovered/hovered.directive.ts
var hovered_directive = __webpack_require__(61369);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/legend-item/examples/1/index.ts








function TuiLegendItemExample1_tui_legend_item_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-legend-item", 5);
    fesm2015_core/* ɵɵlistener */.NdJ("tuiHoveredChange", function TuiLegendItemExample1_tui_legend_item_6_Template_tui_legend_item_tuiHoveredChange_0_listener($event) {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const index_r2 = restoredCtx.index;
      const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r3.onHover(index_r2, $event);
    });
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-money", 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const label_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("color", ctx_r0.getColor(index_r2))("text", label_r1)("active", ctx_r0.isItemActive(index_r2));
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("singleColor", true)("value", ctx_r0.value[index_r2]);
  }
}

let TuiLegendItemExample1 = /*#__PURE__*/(() => {
  class TuiLegendItemExample1 {
    constructor() {
      this.activeItemIndex = NaN;
      this.value = [13769, 12367, 10172, 3018, 2592];
      this.sum = (0,cdk.tuiSum)(...this.value);
      this.labels = [`Food`, `Cafe`, `Open Source`, `Taxi`, `Other`];
    }

    isItemActive(index) {
      return this.activeItemIndex === index;
    }

    onHover(index, hovered) {
      this.activeItemIndex = hovered ? index : 0;
    }

    getColor(index) {
      return `var(--tui-chart-${index})`;
    }

  }

  TuiLegendItemExample1.ɵfac = function TuiLegendItemExample1_Factory(t) {
    return new (t || TuiLegendItemExample1)();
  };

  TuiLegendItemExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiLegendItemExample1,
    selectors: [["tui-legend-item-example-1"]],
    decls: 7,
    vars: 5,
    consts: [[1, "wrapper"], [3, "value", "activeItemIndex", "activeItemIndexChange"], [3, "singleColor", "value"], [1, "legend"], ["size", "s", "class", "item", 3, "color", "text", "active", "tuiHoveredChange", 4, "ngFor", "ngForOf"], ["size", "s", 1, "item", 3, "color", "text", "active", "tuiHoveredChange"]],
    template: function TuiLegendItemExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-ring-chart", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("activeItemIndexChange", function TuiLegendItemExample1_Template_tui_ring_chart_activeItemIndexChange_1_listener($event) {
          return ctx.activeItemIndex = $event;
        });
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-money", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "div");
        fesm2015_core/* ɵɵtext */._uU(4, "Total");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "div", 3);
        fesm2015_core/* ɵɵtemplate */.YNc(6, TuiLegendItemExample1_tui_legend_item_6_Template, 2, 5, "tui-legend-item", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value)("activeItemIndex", ctx.activeItemIndex);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("singleColor", true)("value", ctx.sum);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.labels);
      }
    },
    directives: [ring_chart_component/* TuiRingChartComponent */.i, money_component/* TuiMoneyComponent */.o, common/* NgForOf */.sg, legend_item_component/* TuiLegendItemComponent */._, hovered_directive/* TuiHoveredDirective */.c],
    styles: ["[_nghost-%COMP%]{--tui-chart-0: #c779d0;--tui-chart-1: #feac5e;--tui-chart-2: #ff5f6d;--tui-chart-3: #4bc0c8;--tui-chart-4: #9795cd}.wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}@media screen and (max-width: 47.9625em){.wrapper[_ngcontent-%COMP%]{flex-direction:column}}.legend[_ngcontent-%COMP%]{margin:0 0 0 2rem}@media screen and (max-width: 47.9625em){.legend[_ngcontent-%COMP%]{margin:2rem 0 0}}.item[_ngcontent-%COMP%]{margin:0 .5rem .75rem 0}"],
    changeDetection: 0
  });
  return TuiLegendItemExample1;
})();
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/core/components/primitive-checkbox/primitive-checkbox.component.ts
var primitive_checkbox_component = __webpack_require__(80868);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/legend-item/examples/2/index.ts













function TuiLegendItemExample2_tui_legend_item_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-legend-item", 4, 5);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiLegendItemExample2_tui_legend_item_5_Template_tui_legend_item_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r5);
      const index_r2 = restoredCtx.index;
      const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r4.onClick(index_r2);
    })("keydown.delete", function TuiLegendItemExample2_tui_legend_item_5_Template_tui_legend_item_keydown_delete_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r5);
      const index_r2 = restoredCtx.index;
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.toggle(index_r2);
    });
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-primitive-checkbox", 6);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-money", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-svg", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("click.stop", function TuiLegendItemExample2_tui_legend_item_5_Template_tui_svg_click_stop_4_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r5);
      const index_r2 = restoredCtx.index;
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.toggle(index_r2);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const label_r1 = ctx.$implicit;
    const index_r2 = ctx.index;

    const _r3 = fesm2015_core/* ɵɵreference */.MAs(1);

    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("color", ctx_r0.getColor(index_r2))("text", label_r1)("disabled", !ctx_r0.isEnabled(index_r2));
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("value", !_r3.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("singleColor", true)("value", ctx_r0.data[index_r2]);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵclassProp */.ekj("disable_rotated", _r3.disabled);
  }
}

class TuiLegendItemExample2 {
  constructor(alertService) {
    this.alertService = alertService;
    this.enabled = new Array(5).fill(true);
    this.data = [13769, 12367, 10172, 3018, 2592];
    this.sum = (0,cdk.tuiSum)(...this.data);
    this.labels = [`Axes`, `Faxes`, `Taxes`, `Saxes`, `Other`];
  }

  get value() {
    return this.getValue(this.data, this.enabled);
  }

  isEnabled(index) {
    return this.enabled[index];
  }

  toggle(index) {
    this.enabled = this.enabled.map((value, i) => i === index ? !value : value);
  }

  onClick(index) {
    if (this.isEnabled(index)) {
      this.alertService.open(`Category spendings: ${(0,core.tuiFormatNumber)(this.data[index])} ₽`, {
        label: this.labels[index]
      }).subscribe();
    } else {
      this.toggle(index);
    }
  }

  getColor(index) {
    return `var(--tui-chart-${index})`;
  }

  getValue(data, enabled) {
    return data.map((value, index) => enabled[index] ? value : 0);
  }

}

TuiLegendItemExample2.ɵfac = function TuiLegendItemExample2_Factory(t) {
  return new (t || TuiLegendItemExample2)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
};

TuiLegendItemExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: TuiLegendItemExample2,
  selectors: [["tui-legend-item-example-2"]],
  decls: 6,
  vars: 2,
  consts: [[1, "wrapper"], ["size", "s", 1, "chart", 3, "value"], [1, "legend"], ["class", "item", 3, "color", "text", "disabled", "click", "keydown.delete", 4, "ngFor", "ngForOf"], [1, "item", 3, "color", "text", "disabled", "click", "keydown.delete"], ["item", ""], [3, "value"], [3, "singleColor", "value"], ["src", "tuiIconCloseLarge", 1, "disable", 3, "click.stop"]],
  template: function TuiLegendItemExample2_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-notification");
      fesm2015_core/* ɵɵtext */._uU(1, " In case you need to be able to toggle a category by separate action, for example, if clicking on it should expand it for more details\n");
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 0);
      fesm2015_core/* ɵɵelement */._UZ(3, "tui-ring-chart", 1);
      fesm2015_core/* ɵɵelementStart */.TgZ(4, "div", 2);
      fesm2015_core/* ɵɵtemplate */.YNc(5, TuiLegendItemExample2_tui_legend_item_5_Template, 5, 8, "tui-legend-item", 3);
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵelementEnd */.qZA();
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵadvance */.xp6(3);
      fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value);
      fesm2015_core/* ɵɵadvance */.xp6(2);
      fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.labels);
    }
  },
  directives: [notification_component/* TuiNotificationComponent */.L, ring_chart_component/* TuiRingChartComponent */.i, common/* NgForOf */.sg, legend_item_component/* TuiLegendItemComponent */._, primitive_checkbox_component/* TuiPrimitiveCheckboxComponent */.r, money_component/* TuiMoneyComponent */.o, svg_component/* TuiSvgComponent */.P],
  styles: ["[_nghost-%COMP%]{--tui-chart-0: #c779d0;--tui-chart-1: #feac5e;--tui-chart-2: #ff5f6d;--tui-chart-3: #4bc0c8;--tui-chart-4: #9795cd}.chart[_ngcontent-%COMP%]{pointer-events:none}.wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:1rem}@media screen and (max-width: 47.9625em){.wrapper[_ngcontent-%COMP%]{flex-direction:column}}.disable[_ngcontent-%COMP%]{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:.25rem;will-change:transform;color:var(--tui-text-02);pointer-events:auto}.disable[_ngcontent-%COMP%]:hover{color:var(--tui-text-01)}.disable_rotated[_ngcontent-%COMP%]{transform:rotate(45deg)}.legend[_ngcontent-%COMP%]{margin:0 0 0 2rem;justify-content:center}@media screen and (max-width: 47.9625em){.legend[_ngcontent-%COMP%]{margin:2rem 0 0}}.item[_ngcontent-%COMP%]{margin:0 .5rem .75rem 0}"],
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiLegendItemExample2.prototype, "getValue", null);
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/legend-item/legend-item.component.ts













function ExampleTuiLegendItemComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-legend-item-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-legend-item-example-2");
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

function ExampleTuiLegendItemComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 13);
  }
}

function ExampleTuiLegendItemComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleTuiLegendItemComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiLegendItemComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiLegendItemComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 17);
  }
}

function ExampleTuiLegendItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-legend-item", 5);
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-money", 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(4, 7);
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiLegendItemComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLegendItemComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.active = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiLegendItemComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLegendItemComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.color = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiLegendItemComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLegendItemComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiLegendItemComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLegendItemComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiLegendItemComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLegendItemComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.text = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("active", ctx_r1.active)("disabled", ctx_r1.disabled)("color", ctx_r1.color)("text", ctx_r1.text)("size", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("value", 123456)("singleColor", true);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.active);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.colorVariants)("documentationPropertyValue", ctx_r1.color);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.text);
  }
}

function ExampleTuiLegendItemComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 18);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 19);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 20);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 21);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 22);
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

let ExampleTuiLegendItemComponent = /*#__PURE__*/(() => {
  class ExampleTuiLegendItemComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 53914).then(__webpack_require__.t.bind(__webpack_require__, 53914, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 20330).then(__webpack_require__.t.bind(__webpack_require__, 20330, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 56292).then(__webpack_require__.t.bind(__webpack_require__, 56292, 17)),
        HTML: __webpack_require__.e(/* import() */ 34778).then(__webpack_require__.t.bind(__webpack_require__, 34778, 17)),
        LESS: __webpack_require__.e(/* import() */ 50623).then(__webpack_require__.t.bind(__webpack_require__, 50623, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 90751).then(__webpack_require__.t.bind(__webpack_require__, 90751, 17)),
        HTML: __webpack_require__.e(/* import() */ 50646).then(__webpack_require__.t.bind(__webpack_require__, 50646, 17)),
        LESS: __webpack_require__.e(/* import() */ 20738).then(__webpack_require__.t.bind(__webpack_require__, 20738, 17))
      };
      this.text = `Text inside`;
      this.active = false;
      this.sizeVariants = [`s`, `m`];
      this.colorVariants = [`var(--tui-support-04)`, `var(--tui-primary)`, `var(--tui-secondary)`];
      this.size = this.sizeVariants[0];
      this.disabled = false;
      this.color = ``;
    }

  }

  ExampleTuiLegendItemComponent.ɵfac = function ExampleTuiLegendItemComponent_Factory(t) {
    return new (t || ExampleTuiLegendItemComponent)();
  };

  ExampleTuiLegendItemComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiLegendItemComponent,
    selectors: [["example-tui-legend-item"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1570614066977040018$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS_1 = goog.getMsg("LegendItem");
        i18n_0 = MSG_EXTERNAL_1570614066977040018$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟c3d93006062f75d305b66685eaedb021d62229ea␟1570614066977040018:LegendItem`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6137055992947046886$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS__3 = goog.getMsg("A button for a legend of ring or pie charts");
        i18n_2 = MSG_EXTERNAL_6137055992947046886$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟a984adcd40e5ae696a4b3641b5ebd09b4e409959␟6137055992947046886:A button for a legend of ring or pie charts`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1963043015047934208$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS__5 = goog.getMsg("With a ring chart");
        i18n_4 = MSG_EXTERNAL_1963043015047934208$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟c5f83f5f1db2e4c97d30936845035e24a84e150c␟1963043015047934208:With a ring chart`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5802298788264875787$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS__7 = goog.getMsg("Toggling");
        i18n_6 = MSG_EXTERNAL_5802298788264875787$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟5abc3c7f09f347eb78d681bbc90e16a25693d41b␟5802298788264875787:Toggling`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4646256599536584910$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS__9 = goog.getMsg("{$startTagCode}tui-money{$closeTagCode} is used to format currency and fraction ", {
          "startTagCode": "\uFFFD#5\uFFFD",
          "closeTagCode": "\uFFFD/#5\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_4646256599536584910$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟40d57b3cc3417571e6bc8c7bf65f54c61f261bd0␟4646256599536584910:${"\uFFFD#5\uFFFD"}:START_TAG_CODE:tui-money${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_CODE: is used to format currency and fraction `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4436855227670865152$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS___11 = goog.getMsg(" Active state from outside ");
        i18n_10 = MSG_EXTERNAL_4436855227670865152$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟341b67b8b895f827a618e320d690de69209958c9␟4436855227670865152: Active state from outside `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3329374499952540134$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS___13 = goog.getMsg(" Indicator color ");
        i18n_12 = MSG_EXTERNAL_3329374499952540134$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟a6f48a1d27dd6e40e08f07ea7d1c2c39684112e5␟3329374499952540134: Indicator color `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4151472353635131004$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS___15 = goog.getMsg(" Disabled item (i.e. hidden from the related chart) ");
        i18n_14 = MSG_EXTERNAL_4151472353635131004$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟59f0d21ea503569692512c570b231cddeb9cd489␟4151472353635131004: Disabled item (i.e. hidden from the related chart) `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS___17 = goog.getMsg(" Size ");
        i18n_16 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7702365343132985223$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS___19 = goog.getMsg(" Text inside ");
        i18n_18 = MSG_EXTERNAL_7702365343132985223$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟998a01f32aef31a3065d9bfa168ba0a037f2ce0a␟7702365343132985223: Text inside `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7576166659982546507$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS__21 = goog.getMsg(" Import {$startTagCode}TuiBarModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_7576166659982546507$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟9e13c6dcecd09092521578f08847018f409f0433␟7576166659982546507: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiBarModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS__23 = goog.getMsg("Add to the template:");
        i18n_22 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LEGEND_ITEM_LEGEND_ITEM_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", i18n_0, "package", "ADDON-CHARTS", "type", "components"], ["pageTab", ""], i18n_2, ["id", "ring", "heading", i18n_4, 3, "content"], ["id", "toggle", "heading", i18n_6, 3, "content"], [3, "active", "disabled", "color", "text", "size"], [3, "value", "singleColor"], i18n_8, ["documentationPropertyName", "active", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "color", "documentationPropertyMode", "input", "documentationPropertyType", "TuiColor | string | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, [1, "b-demo-steps"], i18n_20, ["filename", "myComponent.module.ts", 3, "code"], i18n_22, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiLegendItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiLegendItemComponent_ng_template_1_Template, 6, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiLegendItemComponent_ng_template_2_Template, 12, 14, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiLegendItemComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiLegendItemExample1, TuiLegendItemExample2, demo_component/* TuiDocDemoComponent */.F, legend_item_component/* TuiLegendItemComponent */._, money_component/* TuiMoneyComponent */.o, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiLegendItemComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/legend-item/legend-item.module.ts













let ExampleTuiLegendItemModule = /*#__PURE__*/(() => {
  class ExampleTuiLegendItemModule {}

  ExampleTuiLegendItemModule.ɵfac = function ExampleTuiLegendItemModule_Factory(t) {
    return new (t || ExampleTuiLegendItemModule)();
  };

  ExampleTuiLegendItemModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiLegendItemModule
  });
  ExampleTuiLegendItemModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, addon_charts.TuiLegendItemModule, addon_charts.TuiRingChartModule, addon_commerce.TuiMoneyModule, core.TuiPrimitiveCheckboxModule, core.TuiSvgModule, core.TuiNotificationModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, cdk.TuiHoveredModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiLegendItemComponent))]]
  });
  return ExampleTuiLegendItemModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiLegendItemModule, {
    declarations: [ExampleTuiLegendItemComponent, TuiLegendItemExample1, TuiLegendItemExample2],
    imports: [common/* CommonModule */.ez, addon_charts.TuiLegendItemModule, addon_charts.TuiRingChartModule, addon_commerce.TuiMoneyModule, core.TuiPrimitiveCheckboxModule, core.TuiSvgModule, core.TuiNotificationModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, cdk.TuiHoveredModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiLegendItemComponent]
  });
})();

/***/ })

}]);