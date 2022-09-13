"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[75953],{

/***/ 75953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiCalendarRangeModule": () => (/* binding */ ExampleTuiCalendarRangeModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/kit/components/calendar-range/calendar-range.component.ts
var calendar_range_component = __webpack_require__(85385);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/calendar-range/examples/1/index.ts


let TuiRangeExample1 = /*#__PURE__*/(() => {
  class TuiRangeExample1 {}

  TuiRangeExample1.ɵfac = function TuiRangeExample1_Factory(t) {
    return new (t || TuiRangeExample1)();
  };

  TuiRangeExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRangeExample1,
    selectors: [["tui-range-example-1"]],
    decls: 1,
    vars: 0,
    template: function TuiRangeExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-calendar-range");
      }
    },
    directives: [calendar_range_component/* TuiCalendarRangeComponent */.m],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiRangeExample1;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(25917);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/calendar-range/examples/2/index.ts





const calendarStream$ = (0,of.of)(new cdk.TuiDayRange(new cdk.TuiDay(2019, 2, 11), new cdk.TuiDay(2019, 2, 14)));
let TuiRangeExample2 = /*#__PURE__*/(() => {
  class TuiRangeExample2 {}

  TuiRangeExample2.ɵfac = function TuiRangeExample2_Factory(t) {
    return new (t || TuiRangeExample2)();
  };

  TuiRangeExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRangeExample2,
    selectors: [["tui-range-example-2"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: kit.TUI_CALENDAR_DATE_STREAM,
      useValue: calendarStream$
    }])],
    decls: 1,
    vars: 0,
    template: function TuiRangeExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-calendar-range");
      }
    },
    directives: [calendar_range_component/* TuiCalendarRangeComponent */.m],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiRangeExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/calendar-range/examples/3/index.ts



let TuiRangeExample3 = /*#__PURE__*/(() => {
  class TuiRangeExample3 {
    constructor() {
      this.items = (0,kit.tuiCreateDefaultDayRangePeriods)();
    }

  }

  TuiRangeExample3.ɵfac = function TuiRangeExample3_Factory(t) {
    return new (t || TuiRangeExample3)();
  };

  TuiRangeExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRangeExample3,
    selectors: [["tui-range-example-3"]],
    decls: 1,
    vars: 1,
    consts: [[3, "items"]],
    template: function TuiRangeExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-calendar-range", 0);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("items", ctx.items);
      }
    },
    directives: [calendar_range_component/* TuiCalendarRangeComponent */.m],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiRangeExample3;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/calendar-range/calendar-range.component.ts
















function ExampleTuiCalendarRangeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-range-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-range-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-range-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
  }
}

function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 17);
  }
}

function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 18);
    fesm2015_core/* ɵɵelement */._UZ(1, "div");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 20);
  }
}

function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 23);
  }
}

function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 24);
  }
}

function ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 25);
  }
}

function ExampleTuiCalendarRangeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-calendar-range", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("valueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_tui_calendar_range_valueChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);

      const _r11 = fesm2015_core/* ɵɵreference */.MAs(12);

      return _r11.emitEvent($event);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.defaultViewedMonth = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_4_Template, 3, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.disabledItemHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.items = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.markerHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r19.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r20.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r21.minLength = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r22 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r22.maxLength = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiCalendarRangeComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 15, 16, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("defaultViewedMonth", ctx_r1.defaultViewedMonth)("disabledItemHandler", ctx_r1.disabledItemHandler)("items", ctx_r1.items)("markerHandler", ctx_r1.markerHandler)("min", ctx_r1.min)("max", ctx_r1.max)("minLength", ctx_r1.minLength)("maxLength", ctx_r1.maxLength);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.defaultViewedMonthVariants)("documentationPropertyValue", ctx_r1.defaultViewedMonth);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.itemsVariants)("documentationPropertyValue", ctx_r1.items);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.markerHandlerVariants)("documentationPropertyValue", ctx_r1.markerHandler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.minLengthVariants)("documentationPropertyValue", ctx_r1.minLength);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxLengthVariants)("documentationPropertyValue", ctx_r1.maxLength);
  }
}

function ExampleTuiCalendarRangeComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 26);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 27);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 28);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
  }
}

const TWO_DOTS = [`var(--tui-primary)`, `var(--tui-info-fill)`];
const ONE_DOT = [`var(--tui-success-fill)`];
let ExampleTuiCalendarRangeComponent = /*#__PURE__*/(() => {
  class ExampleTuiCalendarRangeComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 17130).then(__webpack_require__.t.bind(__webpack_require__, 17130, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 91210).then(__webpack_require__.t.bind(__webpack_require__, 91210, 17)),
        HTML: __webpack_require__.e(/* import() */ 95087).then(__webpack_require__.t.bind(__webpack_require__, 95087, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 16725).then(__webpack_require__.t.bind(__webpack_require__, 16725, 17)),
        HTML: __webpack_require__.e(/* import() */ 83211).then(__webpack_require__.t.bind(__webpack_require__, 83211, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 88133).then(__webpack_require__.t.bind(__webpack_require__, 88133, 17)),
        HTML: __webpack_require__.e(/* import() */ 69735).then(__webpack_require__.t.bind(__webpack_require__, 69735, 17))
      };
      this.minVariants = [cdk.TUI_FIRST_DAY, new cdk.TuiDay(2017, 2, 5), new cdk.TuiDay(1900, 0, 1)];
      this.maxVariants = [cdk.TUI_LAST_DAY, new cdk.TuiDay(2018, 9, 30), new cdk.TuiDay(2020, 2, 5), new cdk.TuiDay(2300, 0, 1)];
      this.disabledItemHandlerVariants = [cdk.ALWAYS_FALSE_HANDLER, ({
        day
      }) => day % 3 === 0];
      this.defaultViewedMonthVariants = [cdk.TuiMonth.currentLocal(), cdk.TuiMonth.currentLocal().append({
        month: 1
      }), new cdk.TuiMonth(2007, 5)];
      this.itemsVariants = [[], (0,kit.tuiCreateDefaultDayRangePeriods)()];
      this.minLengthVariants = [{
        day: 3
      }, {
        day: 15
      }];
      this.maxLengthVariants = [{
        day: 5
      }, {
        month: 1
      }, {
        year: 1
      }];
      this.markerHandlerVariants = [core.TUI_DEFAULT_MARKER_HANDLER, day => day.day % 2 === 0 ? TWO_DOTS : ONE_DOT];
      this.markerHandler = this.markerHandlerVariants[0];
      this.min = this.minVariants[0];
      this.max = this.maxVariants[0];
      this.cleaner = false;
      this.disabledItemHandler = this.disabledItemHandlerVariants[0];
      this.items = this.itemsVariants[0];
      this.defaultViewedMonth = this.defaultViewedMonthVariants[0];
      this.minLength = null;
      this.maxLength = null;
    }

  }

  ExampleTuiCalendarRangeComponent.ɵfac = function ExampleTuiCalendarRangeComponent_Factory(t) {
    return new (t || ExampleTuiCalendarRangeComponent)();
  };

  ExampleTuiCalendarRangeComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiCalendarRangeComponent,
    selectors: [["example-calendar-range"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_842862008044170165$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__1 = goog.getMsg("Component for choosing date range in calendar");
        i18n_0 = MSG_EXTERNAL_842862008044170165$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟b48c5893d5adbcf3c4ac85c5b908de4d514cb60e␟842862008044170165:Component for choosing date range in calendar`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4518567138108504452$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__5 = goog.getMsg("with value");
        i18n_4 = MSG_EXTERNAL_4518567138108504452$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟e3eea3bf6a2e13ad5a46e302dca1a26c30d11a80␟4518567138108504452:with value`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8390180780322976594$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__7 = goog.getMsg("with ranges");
        i18n_6 = MSG_EXTERNAL_8390180780322976594$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟fa41f8dfd47a9a9b9671f2e2c5867ac089540670␟8390180780322976594:with ranges`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4370073840573771249$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___9 = goog.getMsg(" Default month to show ");
        i18n_8 = MSG_EXTERNAL_4370073840573771249$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟cee5a8a5054c8a1eed4236e17142f509a2da3c3a␟4370073840573771249: Default month to show `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8655647082077231883$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___11 = goog.getMsg("{$startTagDiv}A handler that gets a date and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", {
          "startTagDiv": "\uFFFD#1\uFFFD",
          "closeTagDiv": "\uFFFD/#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_8655647082077231883$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1585752593868985764$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___13 = goog.getMsg(" Fixed intervals (shows 2 calendars with empty array) ");
        i18n_12 = MSG_EXTERNAL_1585752593868985764$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟0600d93e5689970aa785fe0413acf4c5da35b682␟1585752593868985764: Fixed intervals (shows 2 calendars with empty array) `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7126872511108805662$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___15 = goog.getMsg(" A handler that gets date and returns null or a tuple with circled marker colors ");
        i18n_14 = MSG_EXTERNAL_7126872511108805662$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟23c9859665a49041525158245d62b03eb6e0bb77␟7126872511108805662: A handler that gets date and returns null or a tuple with circled marker colors `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7105748595977480347$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___17 = goog.getMsg(" Min date ");
        i18n_16 = MSG_EXTERNAL_7105748595977480347$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6045744383953302270$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___19 = goog.getMsg(" Max date ");
        i18n_18 = MSG_EXTERNAL_6045744383953302270$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4884270346610812155$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___21 = goog.getMsg(" Minimal length of range ");
        i18n_20 = MSG_EXTERNAL_4884270346610812155$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟309c0b4024f636a71dea973f24cd05b0d38af82b␟4884270346610812155: Minimal length of range `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1253745446557993958$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___23 = goog.getMsg(" Maximal length of range ");
        i18n_22 = MSG_EXTERNAL_1253745446557993958$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟69cef120f415885c1d7258c5de495aa3cae21f85␟1253745446557993958: Maximal length of range `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_157320158054980427$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___25 = goog.getMsg(" Selected date range ");
        i18n_24 = MSG_EXTERNAL_157320158054980427$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟461a4fddac18488926c8f2f71d423c0c79f6eb4a␟157320158054980427: Selected date range `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5891685687892601785$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__27 = goog.getMsg(" Import {$startTagCode}TuiCalendarRangeModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_26 = MSG_EXTERNAL_5891685687892601785$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_RANGE_CALENDAR_RANGE_COMPONENT_TS__27;
      } else {
        i18n_26 = $localize`:␟656daa25b58e47eb47175cd1e017550bfec5eae2␟5891685687892601785: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCalendarRangeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      return [["header", "CalendarRange", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "with-value", "heading", i18n_4, 3, "content"], ["id", "periods", "heading", i18n_6, 3, "content"], [3, "defaultViewedMonth", "disabledItemHandler", "items", "markerHandler", "min", "max", "minLength", "maxLength", "valueChange"], ["documentationPropertyName", "defaultViewedMonth", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMonth", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<TuiDay>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "items", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDayRangePeriod[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "markerHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMarkerHandler", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDay", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "minLength", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDayLike | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "maxLength", "documentationPropertyMode", "input", "documentationPropertyType", "TuiDayLike | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "rangeChange", "documentationPropertyMode", "output", "documentationPropertyType", "TuiDayRange"], ["documentationPropertyRangeChange", "documentationProperty"], i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, [1, "b-demo-steps"], i18n_26, ["filename", "myComponent.module.ts", 3, "code"]];
    },
    template: function ExampleTuiCalendarRangeComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiCalendarRangeComponent_ng_template_1_Template, 8, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiCalendarRangeComponent_ng_template_2_Template, 13, 24, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiCalendarRangeComponent_ng_template_3_Template, 6, 1, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiRangeExample1, TuiRangeExample2, TuiRangeExample3, demo_component/* TuiDocDemoComponent */.F, calendar_range_component/* TuiCalendarRangeComponent */.m, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiCalendarRangeComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/calendar-range/calendar-range.module.ts










let ExampleTuiCalendarRangeModule = /*#__PURE__*/(() => {
  class ExampleTuiCalendarRangeModule {}

  ExampleTuiCalendarRangeModule.ɵfac = function ExampleTuiCalendarRangeModule_Factory(t) {
    return new (t || ExampleTuiCalendarRangeModule)();
  };

  ExampleTuiCalendarRangeModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiCalendarRangeModule
  });
  ExampleTuiCalendarRangeModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[kit.TuiCalendarRangeModule, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiCalendarRangeComponent))]]
  });
  return ExampleTuiCalendarRangeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiCalendarRangeModule, {
    declarations: [ExampleTuiCalendarRangeComponent, TuiRangeExample1, TuiRangeExample2, TuiRangeExample3],
    imports: [kit.TuiCalendarRangeModule, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiCalendarRangeComponent]
  });
})();

/***/ })

}]);