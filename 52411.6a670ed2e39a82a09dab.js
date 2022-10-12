"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[52411],{

/***/ 52411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiCalendarModule": () => (/* binding */ ExampleTuiCalendarModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
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
// EXTERNAL MODULE: ./projects/core/components/calendar/calendar.component.ts
var calendar_component = __webpack_require__(49746);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/calendar/examples/1/index.ts




function TuiCalendarExample1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵi18nExp */.pQV(ctx_r0.value);
    fesm2015_core/* ɵɵi18nApply */.QtT(1);
  }
}

let TuiCalendarExample1 = /*#__PURE__*/(() => {
  class TuiCalendarExample1 {
    constructor() {
      this.value = null;
    }

    onDayClick(day) {
      this.value = day;
    }

  }

  TuiCalendarExample1.ɵfac = function TuiCalendarExample1_Factory(t) {
    return new (t || TuiCalendarExample1)();
  };

  TuiCalendarExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCalendarExample1,
    selectors: [["tui-calendar-example-1"]],
    decls: 2,
    vars: 2,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2620900202482217567$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_EXAMPLES_1_INDEX_TS__1 = goog.getMsg(" Chosen date: {$interpolation}\n", {
          "interpolation": "\uFFFD0\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_2620900202482217567$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_EXAMPLES_1_INDEX_TS__1;
      } else {
        i18n_0 = $localize`:␟2feeb35068c5f0d54e2e1997546b856a08da841d␟2620900202482217567: Chosen date: ${"\uFFFD0\uFFFD"}:INTERPOLATION:
`;
      }

      return [[3, "value", "dayClick"], [4, "ngIf"], i18n_0];
    },
    template: function TuiCalendarExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-calendar", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("dayClick", function TuiCalendarExample1_Template_tui_calendar_dayClick_0_listener($event) {
          return ctx.onDayClick($event);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiCalendarExample1_div_1_Template, 2, 1, "div", 1);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx.value);
      }
    },
    directives: [calendar_component/* TuiCalendarComponent */.a, common/* NgIf */.O5],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiCalendarExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/calendar/examples/2/index.ts





function TuiCalendarExample2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵi18n */.SDv(1, 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵi18nExp */.pQV(ctx_r0.value);
    fesm2015_core/* ɵɵi18nApply */.QtT(1);
  }
}

let TuiCalendarExample2 = /*#__PURE__*/(() => {
  class TuiCalendarExample2 {
    constructor() {
      this.value = null;
      this.firstMonth = cdk.TuiMonth.currentLocal();
      this.middleMonth = cdk.TuiMonth.currentLocal().append({
        month: 1
      });
      this.lastMonth = cdk.TuiMonth.currentLocal().append({
        month: 2
      });
      this.hoveredItem = null;
    }

    onDayClick(day) {
      if (this.value === null || !this.value.isSingleDay) {
        this.value = new cdk.TuiDayRange(day, day);
      }

      this.value = cdk.TuiDayRange.sort(this.value.from, day);
    }

    onMonthChangeFirst(month) {
      this.firstMonth = month;
      this.middleMonth = month.append({
        month: 1
      });
      this.lastMonth = month.append({
        month: 2
      });
    }

    onMonthChangeMiddle(month) {
      this.firstMonth = month.append({
        month: -1
      });
      this.middleMonth = month;
      this.lastMonth = month.append({
        month: 1
      });
    }

    onMonthChangeLast(month) {
      this.firstMonth = month.append({
        month: -2
      });
      this.middleMonth = month.append({
        month: -1
      });
      this.lastMonth = month;
    }

  }

  TuiCalendarExample2.ɵfac = function TuiCalendarExample2_Factory(t) {
    return new (t || TuiCalendarExample2)();
  };

  TuiCalendarExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCalendarExample2,
    selectors: [["tui-calendar-example-2"]],
    decls: 5,
    vars: 17,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4859697449568186620$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_EXAMPLES_2_INDEX_TS__1 = goog.getMsg(" Chosen dates: {$interpolation}\n", {
          "interpolation": "\uFFFD0\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_4859697449568186620$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_EXAMPLES_2_INDEX_TS__1;
      } else {
        i18n_0 = $localize`:␟6a61580d370f4de6560593a882e91d078a887bd0␟4859697449568186620: Chosen dates: ${"\uFFFD0\uFFFD"}:INTERPOLATION:
`;
      }

      return [[1, "wrapper"], [3, "value", "showAdjacent", "maxViewedMonth", "month", "hoveredItem", "hoveredItemChange", "monthChange", "dayClick"], [3, "value", "showAdjacent", "month", "minViewedMonth", "maxViewedMonth", "hoveredItem", "hoveredItemChange", "monthChange", "dayClick"], [3, "value", "showAdjacent", "minViewedMonth", "month", "hoveredItem", "hoveredItemChange", "monthChange", "dayClick"], [4, "ngIf"], i18n_0];
    },
    template: function TuiCalendarExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-calendar", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("hoveredItemChange", function TuiCalendarExample2_Template_tui_calendar_hoveredItemChange_1_listener($event) {
          return ctx.hoveredItem = $event;
        })("monthChange", function TuiCalendarExample2_Template_tui_calendar_monthChange_1_listener($event) {
          return ctx.onMonthChangeFirst($event);
        })("dayClick", function TuiCalendarExample2_Template_tui_calendar_dayClick_1_listener($event) {
          return ctx.onDayClick($event);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-calendar", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("hoveredItemChange", function TuiCalendarExample2_Template_tui_calendar_hoveredItemChange_2_listener($event) {
          return ctx.hoveredItem = $event;
        })("monthChange", function TuiCalendarExample2_Template_tui_calendar_monthChange_2_listener($event) {
          return ctx.onMonthChangeMiddle($event);
        })("dayClick", function TuiCalendarExample2_Template_tui_calendar_dayClick_2_listener($event) {
          return ctx.onDayClick($event);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-calendar", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("hoveredItemChange", function TuiCalendarExample2_Template_tui_calendar_hoveredItemChange_3_listener($event) {
          return ctx.hoveredItem = $event;
        })("monthChange", function TuiCalendarExample2_Template_tui_calendar_monthChange_3_listener($event) {
          return ctx.onMonthChangeLast($event);
        })("dayClick", function TuiCalendarExample2_Template_tui_calendar_dayClick_3_listener($event) {
          return ctx.onDayClick($event);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiCalendarExample2_div_4_Template, 2, 1, "div", 4);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value)("showAdjacent", false)("maxViewedMonth", ctx.firstMonth)("month", ctx.firstMonth)("hoveredItem", ctx.hoveredItem);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value)("showAdjacent", false)("month", ctx.middleMonth)("minViewedMonth", ctx.middleMonth)("maxViewedMonth", ctx.middleMonth)("hoveredItem", ctx.hoveredItem);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value)("showAdjacent", false)("minViewedMonth", ctx.lastMonth)("month", ctx.lastMonth)("hoveredItem", ctx.hoveredItem);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx.value);
      }
    },
    directives: [calendar_component/* TuiCalendarComponent */.a, common/* NgIf */.O5],
    styles: [".wrapper[_ngcontent-%COMP%]{display:flex}"],
    changeDetection: 0
  });
  return TuiCalendarExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/calendar/examples/3/index.ts





function TuiCalendarExample3_div_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵi18n */.SDv(1, 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵi18nExp */.pQV(ctx_r0.value);
    fesm2015_core/* ɵɵi18nApply */.QtT(1);
  }
}

const TWO_DOTS = [`var(--tui-primary)`, `var(--tui-info-fill)`];
const ONE_DOT = [`var(--tui-success-fill)`];
let TuiCalendarExample3 = /*#__PURE__*/(() => {
  class TuiCalendarExample3 {
    constructor() {
      this.value = null;
      this.firstMonth = cdk.TuiMonth.currentLocal();
      this.middleMonth = cdk.TuiMonth.currentLocal().append({
        month: 1
      });
      this.lastMonth = cdk.TuiMonth.currentLocal().append({
        month: 2
      });
      this.hoveredItem = null;

      this.markerHandler = day => // Attention: do not create new arrays in handler, use constants intead
      day.day % 2 === 0 ? TWO_DOTS : ONE_DOT;
    }

    onDayClick(day) {
      if (this.value === null || !this.value.isSingleDay) {
        this.value = new cdk.TuiDayRange(day, day);
      }

      this.value = cdk.TuiDayRange.sort(this.value.from, day);
    }

    onMonthChangeFirst(month) {
      this.firstMonth = month;
      this.middleMonth = month.append({
        month: 1
      });
      this.lastMonth = month.append({
        month: 2
      });
    }

    onMonthChangeMiddle(month) {
      this.firstMonth = month.append({
        month: -1
      });
      this.middleMonth = month;
      this.lastMonth = month.append({
        month: 1
      });
    }

    onMonthChangeLast(month) {
      this.firstMonth = month.append({
        month: -2
      });
      this.middleMonth = month.append({
        month: -1
      });
      this.lastMonth = month;
    }

  }

  TuiCalendarExample3.ɵfac = function TuiCalendarExample3_Factory(t) {
    return new (t || TuiCalendarExample3)();
  };

  TuiCalendarExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCalendarExample3,
    selectors: [["tui-calendar-example-3"]],
    decls: 5,
    vars: 20,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4859697449568186620$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_EXAMPLES_3_INDEX_TS__1 = goog.getMsg(" Chosen dates: {$interpolation}\n", {
          "interpolation": "\uFFFD0\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_4859697449568186620$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_EXAMPLES_3_INDEX_TS__1;
      } else {
        i18n_0 = $localize`:␟6a61580d370f4de6560593a882e91d078a887bd0␟4859697449568186620: Chosen dates: ${"\uFFFD0\uFFFD"}:INTERPOLATION:
`;
      }

      return [[1, "wrapper"], [3, "value", "showAdjacent", "markerHandler", "maxViewedMonth", "month", "hoveredItem", "hoveredItemChange", "monthChange", "dayClick"], [3, "value", "showAdjacent", "markerHandler", "month", "minViewedMonth", "maxViewedMonth", "hoveredItem", "hoveredItemChange", "monthChange", "dayClick"], [3, "value", "showAdjacent", "markerHandler", "minViewedMonth", "month", "hoveredItem", "hoveredItemChange", "monthChange", "dayClick"], [4, "ngIf"], i18n_0];
    },
    template: function TuiCalendarExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-calendar", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("hoveredItemChange", function TuiCalendarExample3_Template_tui_calendar_hoveredItemChange_1_listener($event) {
          return ctx.hoveredItem = $event;
        })("monthChange", function TuiCalendarExample3_Template_tui_calendar_monthChange_1_listener($event) {
          return ctx.onMonthChangeFirst($event);
        })("dayClick", function TuiCalendarExample3_Template_tui_calendar_dayClick_1_listener($event) {
          return ctx.onDayClick($event);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-calendar", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("hoveredItemChange", function TuiCalendarExample3_Template_tui_calendar_hoveredItemChange_2_listener($event) {
          return ctx.hoveredItem = $event;
        })("monthChange", function TuiCalendarExample3_Template_tui_calendar_monthChange_2_listener($event) {
          return ctx.onMonthChangeMiddle($event);
        })("dayClick", function TuiCalendarExample3_Template_tui_calendar_dayClick_2_listener($event) {
          return ctx.onDayClick($event);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-calendar", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("hoveredItemChange", function TuiCalendarExample3_Template_tui_calendar_hoveredItemChange_3_listener($event) {
          return ctx.hoveredItem = $event;
        })("monthChange", function TuiCalendarExample3_Template_tui_calendar_monthChange_3_listener($event) {
          return ctx.onMonthChangeLast($event);
        })("dayClick", function TuiCalendarExample3_Template_tui_calendar_dayClick_3_listener($event) {
          return ctx.onDayClick($event);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiCalendarExample3_div_4_Template, 2, 1, "div", 4);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value)("showAdjacent", false)("markerHandler", ctx.markerHandler)("maxViewedMonth", ctx.firstMonth)("month", ctx.firstMonth)("hoveredItem", ctx.hoveredItem);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value)("showAdjacent", false)("markerHandler", ctx.markerHandler)("month", ctx.middleMonth)("minViewedMonth", ctx.middleMonth)("maxViewedMonth", ctx.middleMonth)("hoveredItem", ctx.hoveredItem);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value)("showAdjacent", false)("markerHandler", ctx.markerHandler)("minViewedMonth", ctx.lastMonth)("month", ctx.lastMonth)("hoveredItem", ctx.hoveredItem);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx.value);
      }
    },
    directives: [calendar_component/* TuiCalendarComponent */.a, common/* NgIf */.O5],
    styles: [".wrapper[_ngcontent-%COMP%]{display:flex}"],
    changeDetection: 0
  });
  return TuiCalendarExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/calendar/examples/4/index.ts



let TuiCalendarExample4 = /*#__PURE__*/(() => {
  class TuiCalendarExample4 {}

  TuiCalendarExample4.ɵfac = function TuiCalendarExample4_Factory(t) {
    return new (t || TuiCalendarExample4)();
  };

  TuiCalendarExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiCalendarExample4,
    selectors: [["tui-calendar-example-4"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: core.TUI_FIRST_DAY_OF_WEEK,
      useValue: 0
      /* Sunday */

    }])],
    decls: 1,
    vars: 0,
    template: function TuiCalendarExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-calendar");
      }
    },
    directives: [calendar_component/* TuiCalendarComponent */.a],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiCalendarExample4;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/calendar/calendar.component.ts



















function ExampleTuiCalendarComponent_ng_template_1_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 8);
    fesm2015_core/* ɵɵtext */._uU(2, " TUI_FIRST_DAY_OF_WEEK ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(3, " token to change start day of the week (Monday by default). ");
  }
}

const _c8 = function () {
  return ["/components/input-date"];
};

const _c9 = function () {
  return ["/components/input-date-range"];
};

function ExampleTuiCalendarComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵtext */._uU(1, " A simple calendar. If you want a textfield with date, see ");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "a", 2);
    fesm2015_core/* ɵɵtext */._uU(3, " InputDate ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(4, " and ");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "a", 2);
    fesm2015_core/* ɵɵtext */._uU(6, " InputDateRange ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-calendar-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-calendar-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-calendar-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-doc-example", 6);
    fesm2015_core/* ɵɵtemplate */.YNc(14, ExampleTuiCalendarComponent_ng_template_1_ng_template_14_Template, 4, 0, "ng-template", null, 7, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelement */._UZ(16, "tui-calendar-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r3 = fesm2015_core/* ɵɵreference */.MAs(15);

    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("routerLink", fesm2015_core/* ɵɵpureFunction0 */.DdM(7, _c8));
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("routerLink", fesm2015_core/* ɵɵpureFunction0 */.DdM(8, _c9));
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4)("description", _r3);
  }
}

function ExampleTuiCalendarComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 21);
    fesm2015_core/* ɵɵelement */._UZ(1, "div");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiCalendarComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

function ExampleTuiCalendarComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 23);
  }
}

function ExampleTuiCalendarComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 24);
  }
}

function ExampleTuiCalendarComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 25);
  }
}

function ExampleTuiCalendarComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 26);
  }
}

function ExampleTuiCalendarComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 27);
  }
}

function ExampleTuiCalendarComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 28);
  }
}

function ExampleTuiCalendarComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 29);
  }
}

function ExampleTuiCalendarComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 30);
  }
}

function ExampleTuiCalendarComponent_ng_template_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 31);
  }
}

function ExampleTuiCalendarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-calendar", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("monthChange", function ExampleTuiCalendarComponent_ng_template_2_Template_tui_calendar_monthChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.month = $event;
    })("hoveredItemChange", function ExampleTuiCalendarComponent_ng_template_2_Template_tui_calendar_hoveredItemChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.hoveredItem = $event;
    })("dayClick", function ExampleTuiCalendarComponent_ng_template_2_Template_tui_calendar_dayClick_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r19.onDayClick($event);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiCalendarComponent_ng_template_2_ng_template_3_Template, 3, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r20.disabledItemHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiCalendarComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r21.showAdjacent = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiCalendarComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r22 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r22.hoveredItem = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiCalendarComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r23 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r23.markerHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiCalendarComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r24 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r24.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiCalendarComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r25 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r25.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiCalendarComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r26 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r26.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiCalendarComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r27 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r27.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiCalendarComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r28 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r28.month = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiCalendarComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r17);
      const ctx_r29 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r29.value = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(13, ExampleTuiCalendarComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 20);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("value", ctx_r1.value)("disabledItemHandler", ctx_r1.disabledItemHandler)("min", ctx_r1.min)("max", ctx_r1.max)("markerHandler", ctx_r1.markerHandler)("minViewedMonth", ctx_r1.minViewedMonth)("maxViewedMonth", ctx_r1.maxViewedMonth)("showAdjacent", ctx_r1.showAdjacent)("month", ctx_r1.month)("hoveredItem", ctx_r1.hoveredItem);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.showAdjacent);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.hoveredItem);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.markerHandlerVariants)("documentationPropertyValue", ctx_r1.markerHandler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.month);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
  }
}

function ExampleTuiCalendarComponent_ng_template_3_Template(rf, ctx) {
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

const calendar_component_TWO_DOTS = [`var(--tui-primary)`, `var(--tui-info-fill)`];
const calendar_component_ONE_DOT = [`var(--tui-success-fill)`];
let ExampleTuiCalendarComponent = /*#__PURE__*/(() => {
  class ExampleTuiCalendarComponent {
    constructor(alertService) {
      this.alertService = alertService;
      this.exampleModule = __webpack_require__.e(/* import() */ 21580).then(__webpack_require__.t.bind(__webpack_require__, 21580, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 84034).then(__webpack_require__.t.bind(__webpack_require__, 84034, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 73773).then(__webpack_require__.t.bind(__webpack_require__, 73773, 17)),
        HTML: __webpack_require__.e(/* import() */ 22029).then(__webpack_require__.t.bind(__webpack_require__, 22029, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 80785).then(__webpack_require__.t.bind(__webpack_require__, 80785, 17)),
        HTML: __webpack_require__.e(/* import() */ 97571).then(__webpack_require__.t.bind(__webpack_require__, 97571, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 38596).then(__webpack_require__.t.bind(__webpack_require__, 38596, 17)),
        HTML: __webpack_require__.e(/* import() */ 38918).then(__webpack_require__.t.bind(__webpack_require__, 38918, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 92432).then(__webpack_require__.t.bind(__webpack_require__, 92432, 17)),
        HTML: __webpack_require__.e(/* import() */ 48887).then(__webpack_require__.t.bind(__webpack_require__, 48887, 17))
      };
      this.showAdjacent = true;
      this.minVariants = [cdk.TUI_FIRST_DAY, new cdk.TuiDay(2017, 2, 5), new cdk.TuiDay(1900, 0, 1)];
      this.min = this.minVariants[0];
      this.maxVariants = [cdk.TUI_LAST_DAY, new cdk.TuiDay(2020, 3, 30), new cdk.TuiDay(2300, 0, 1)];
      this.max = this.maxVariants[0];
      this.minViewedMonthVariants = [new cdk.TuiMonth(0, 0), new cdk.TuiMonth(2017, 2), new cdk.TuiMonth(1900, 0)];
      this.minViewedMonth = this.minViewedMonthVariants[0];
      this.maxViewedMonthVariants = [cdk.TUI_LAST_DAY, new cdk.TuiMonth(2020, 3), new cdk.TuiMonth(2300, 0)];
      this.maxViewedMonth = this.maxViewedMonthVariants[0];
      this.disabledItemHandlerVariants = [cdk.ALWAYS_FALSE_HANDLER, ({
        day
      }) => day % 3 === 0];
      this.disabledItemHandler = this.disabledItemHandlerVariants[0];
      this.markerHandlerVariants = [core.TUI_DEFAULT_MARKER_HANDLER, day => day.day % 2 === 0 ? calendar_component_TWO_DOTS : calendar_component_ONE_DOT];
      this.markerHandler = this.markerHandlerVariants[0];
      this.valueVariants = [cdk.TuiDay.currentLocal(), new cdk.TuiDayRange(cdk.TuiDay.currentLocal(), cdk.TuiDay.currentLocal().append({
        day: 3
      })), new cdk.TuiDay(2020, 3, 21)];
      this.value = null;
      this.month = cdk.TuiMonth.currentLocal();
      this.hoveredItem = null;
    }

    onDayClick(day) {
      this.alertService.open(String(day)).subscribe();
    }

  }

  ExampleTuiCalendarComponent.ɵfac = function ExampleTuiCalendarComponent_Factory(t) {
    return new (t || ExampleTuiCalendarComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  ExampleTuiCalendarComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiCalendarComponent,
    selectors: [["example-tui-calendar"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__1 = goog.getMsg("Basic");
        i18n_0 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8823844911216143942$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__3 = goog.getMsg("range");
        i18n_2 = MSG_EXTERNAL_8823844911216143942$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟0ed6cbeb3b69bb940c9e3365663a6bff540311e7␟8823844911216143942:range`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5871122953070556647$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__5 = goog.getMsg("With markers");
        i18n_4 = MSG_EXTERNAL_5871122953070556647$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟f0ad0067675751d24dcae9afde2a56fe3ecf3c45␟5871122953070556647:With markers`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2732752787737094710$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__7 = goog.getMsg("Localization");
        i18n_6 = MSG_EXTERNAL_2732752787737094710$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟e061ac5bfcd825eb1f33d30b974df79546114460␟2732752787737094710:Localization`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8655647082077231883$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___11 = goog.getMsg("{$startTagDiv}A handler that gets a date and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", {
          "startTagDiv": "\uFFFD#1\uFFFD",
          "closeTagDiv": "\uFFFD/#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_8655647082077231883$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_427026901846333904$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___13 = goog.getMsg(" Show adjacent months days ");
        i18n_12 = MSG_EXTERNAL_427026901846333904$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟93468ee263f0453e046cd2a7d140d971a77a21d6␟427026901846333904: Show adjacent months days `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_285023532423922220$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___15 = goog.getMsg(" Hovered date ");
        i18n_14 = MSG_EXTERNAL_285023532423922220$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟eda1485e51ac095aaacc17acf52331ccf5582c55␟285023532423922220: Hovered date `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7126872511108805662$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___17 = goog.getMsg(" A handler that gets date and returns null or a tuple with circled marker colors ");
        i18n_16 = MSG_EXTERNAL_7126872511108805662$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟23c9859665a49041525158245d62b03eb6e0bb77␟7126872511108805662: A handler that gets date and returns null or a tuple with circled marker colors `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_945025041805688144$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___19 = goog.getMsg(" Maximal date to choose ");
        i18n_18 = MSG_EXTERNAL_945025041805688144$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟0ec2997ebb79ee39672ca03c45b62d3720263ca6␟945025041805688144: Maximal date to choose `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4446534518832798635$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___21 = goog.getMsg(" Maximal month to access ");
        i18n_20 = MSG_EXTERNAL_4446534518832798635$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟76712405dc083e287b7d84203f246883bf2195c8␟4446534518832798635: Maximal month to access `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2791094226136211105$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___23 = goog.getMsg(" Minimum date to choose ");
        i18n_22 = MSG_EXTERNAL_2791094226136211105$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟5e6b74ad89b862a2b83b5d77e43f763b57137112␟2791094226136211105: Minimum date to choose `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4181665065525097983$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___25 = goog.getMsg(" Minimum month to access ");
        i18n_24 = MSG_EXTERNAL_4181665065525097983$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟7b0768860406832abc45b69314b993a46a099dc6␟4181665065525097983: Minimum month to access `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3915704723653985372$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___27 = goog.getMsg(" Current month ");
        i18n_26 = MSG_EXTERNAL_3915704723653985372$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟cac850ce7e80ef75f9715f1603460f9575f1df49␟3915704723653985372: Current month `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2084704973569232503$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___29 = goog.getMsg(" Selected day or range ");
        i18n_28 = MSG_EXTERNAL_2084704973569232503$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___29;
      } else {
        i18n_28 = $localize`:␟06c2894e3ec228f0e65407118a02fbd4a6947389␟2084704973569232503: Selected day or range `;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1956037044112739727$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___31 = goog.getMsg(" Date click ");
        i18n_30 = MSG_EXTERNAL_1956037044112739727$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS___31;
      } else {
        i18n_30 = $localize`:␟30dc64dde7c5b72b981802ac51cffe74453e08c2␟1956037044112739727: Date click `;
      }

      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9069493769412225703$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__33 = goog.getMsg(" Import {$startTagCode}TuiCalendarModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_32 = MSG_EXTERNAL_9069493769412225703$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__33;
      } else {
        i18n_32 = $localize`:␟a7ee2d166f9049940b6c8619f3c1e4a0e35a5c25␟9069493769412225703: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCalendarModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_34;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__35 = goog.getMsg("Add to the template:");
        i18n_34 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_CALENDAR_COMPONENT_TS__35;
      } else {
        i18n_34 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Calendar", "package", "CORE", "type", "components"], ["pageTab", ""], ["tuiLink", "", 3, "routerLink"], ["id", "base", "heading", i18n_0, 3, "content"], ["id", "range", "heading", i18n_2, 3, "content"], ["id", "markers", "heading", i18n_4, 3, "content"], ["id", "localization", "heading", i18n_6, 3, "content", "description"], ["localizationDescription", ""], ["tuiLink", "", "routerLink", "/utils/tokens", "fragment", "first-day-of-week"], [3, "value", "disabledItemHandler", "min", "max", "markerHandler", "minViewedMonth", "maxViewedMonth", "showAdjacent", "month", "hoveredItem", "monthChange", "hoveredItemChange", "dayClick"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<TuiDay>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "showAdjacent", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hoveredItem", "documentationPropertyMode", "input-output", "documentationPropertyType", "TuiDay | null", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "markerHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMarkerHandler", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "maxViewedMonth", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMonth", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "minViewedMonth", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMonth", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "month", "documentationPropertyMode", "input-output", "documentationPropertyType", "TuiMonth", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay | TuiDayRange | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "dayClick", "documentationPropertyMode", "output", "documentationPropertyType", "TuiDay"], i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, i18n_30, [1, "b-demo-steps"], i18n_32, ["filename", "myComponent.module.ts", 3, "code"], i18n_34, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiCalendarComponent_ng_template_1_Template, 17, 9, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiCalendarComponent_ng_template_2_Template, 14, 27, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiCalendarComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiCalendarExample1, TuiCalendarExample2, TuiCalendarExample3, TuiCalendarExample4, demo_component/* TuiDocDemoComponent */.F, calendar_component/* TuiCalendarComponent */.a, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiCalendarComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/calendar/calendar.module.ts











let ExampleTuiCalendarModule = /*#__PURE__*/(() => {
  class ExampleTuiCalendarModule {}

  ExampleTuiCalendarModule.ɵfac = function ExampleTuiCalendarModule_Factory(t) {
    return new (t || ExampleTuiCalendarModule)();
  };

  ExampleTuiCalendarModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiCalendarModule
  });
  ExampleTuiCalendarModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, router/* RouterModule */.Bz, core.TuiLinkModule, core.TuiCalendarModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiCalendarComponent))]]
  });
  return ExampleTuiCalendarModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiCalendarModule, {
    declarations: [ExampleTuiCalendarComponent, TuiCalendarExample1, TuiCalendarExample2, TuiCalendarExample3, TuiCalendarExample4],
    imports: [common/* CommonModule */.ez, router/* RouterModule */.Bz, core.TuiLinkModule, core.TuiCalendarModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiCalendarComponent]
  });
})();

/***/ })

}]);