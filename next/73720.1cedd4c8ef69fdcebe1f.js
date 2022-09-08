"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[73720],{

/***/ 73720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiCalendarMonthModule": () => (/* binding */ ExampleTuiCalendarMonthModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
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
// EXTERNAL MODULE: ./projects/kit/components/calendar-month/calendar-month.component.ts
var calendar_month_component = __webpack_require__(33313);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/calendar-month/examples/1/index.ts


let TuiMonthExample1 = /*#__PURE__*/(() => {
  class TuiMonthExample1 {
    constructor() {
      this.value = null;
      this.hoveredMonth = null;
    }

    onMonthClick(month) {
      this.value = month;
    }

    onMonthHovered(month) {
      this.hoveredMonth = month;
    }

  }

  TuiMonthExample1.ɵfac = function TuiMonthExample1_Factory(t) {
    return new (t || TuiMonthExample1)();
  };

  TuiMonthExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMonthExample1,
    selectors: [["tui-calendar-month-example-1"]],
    decls: 5,
    vars: 3,
    consts: [[3, "value", "monthClick", "hoveredItemChange"]],
    template: function TuiMonthExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-calendar-month", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("monthClick", function TuiMonthExample1_Template_tui_calendar_month_monthClick_0_listener($event) {
          return ctx.onMonthClick($event);
        })("hoveredItemChange", function TuiMonthExample1_Template_tui_calendar_month_hoveredItemChange_0_listener($event) {
          return ctx.onMonthHovered($event);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵtext */._uU(2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
        fesm2015_core/* ɵɵtext */._uU(4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Selected month: ", ctx.value, "");
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Hovered month: ", ctx.hoveredMonth, "");
      }
    },
    directives: [calendar_month_component/* TuiCalendarMonthComponent */.o],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMonthExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/calendar-month/examples/2/index.ts



let TuiMonthExample2 = /*#__PURE__*/(() => {
  class TuiMonthExample2 {
    constructor() {
      this.value = null;
      this.max = new cdk.TuiMonth(2021, 7);
      this.min = new cdk.TuiMonth(2019, 7);
    }

    onMonthClick(month) {
      if (this.value === null || !this.value.isSingleMonth) {
        this.value = new cdk.TuiMonthRange(month, month);
        return;
      }

      this.value = cdk.TuiMonthRange.sort(this.value.from, month);
    }

  }

  TuiMonthExample2.ɵfac = function TuiMonthExample2_Factory(t) {
    return new (t || TuiMonthExample2)();
  };

  TuiMonthExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiMonthExample2,
    selectors: [["tui-calendar-month-example-2"]],
    decls: 3,
    vars: 4,
    consts: [[3, "value", "min", "max", "monthClick"]],
    template: function TuiMonthExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-calendar-month", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("monthClick", function TuiMonthExample2_Template_tui_calendar_month_monthClick_0_listener($event) {
          return ctx.onMonthClick($event);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵtext */._uU(2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("value", ctx.value)("min", ctx.min)("max", ctx.max);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Selected range: ", ctx.value, "");
      }
    },
    directives: [calendar_month_component/* TuiCalendarMonthComponent */.o],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiMonthExample2;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/calendar-month/calendar-month.component.ts

















function ExampleTuiCalendarMonthComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "a", 3);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(4, "tui-calendar-month-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-calendar-month-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
  }
}

function ExampleTuiCalendarMonthComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 13);
    fesm2015_core/* ɵɵelement */._UZ(1, "div");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiCalendarMonthComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 14);
  }
}

function ExampleTuiCalendarMonthComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Minimal month ");
  }
}

function ExampleTuiCalendarMonthComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiCalendarMonthComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Current year ");
  }
}

function ExampleTuiCalendarMonthComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Selected month ");
  }
}

function ExampleTuiCalendarMonthComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-calendar-month", 6);
    fesm2015_core/* ɵɵlistener */.NdJ("monthClick", function ExampleTuiCalendarMonthComponent_ng_template_2_Template_tui_calendar_month_monthClick_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.onMonthClick($event);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiCalendarMonthComponent_ng_template_2_ng_template_3_Template, 3, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarMonthComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.disabledItemHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiCalendarMonthComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarMonthComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiCalendarMonthComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarMonthComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiCalendarMonthComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarMonthComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.value = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiCalendarMonthComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiCalendarMonthComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.year = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiCalendarMonthComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("disabledItemHandler", ctx_r1.disabledItemHandler)("min", ctx_r1.min)("max", ctx_r1.max)("year", ctx_r1.year)("value", ctx_r1.value);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.yearVariants)("documentationPropertyValue", ctx_r1.year);
  }
}

function ExampleTuiCalendarMonthComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 16);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 17);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 18);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 19);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 20);
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

let ExampleTuiCalendarMonthComponent = /*#__PURE__*/(() => {
  class ExampleTuiCalendarMonthComponent {
    constructor(alertService) {
      this.alertService = alertService;
      this.exampleModule = __webpack_require__.e(/* import() */ 1697).then(__webpack_require__.t.bind(__webpack_require__, 1697, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 79434).then(__webpack_require__.t.bind(__webpack_require__, 79434, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 89300).then(__webpack_require__.t.bind(__webpack_require__, 89300, 17)),
        HTML: __webpack_require__.e(/* import() */ 73106).then(__webpack_require__.t.bind(__webpack_require__, 73106, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 87945).then(__webpack_require__.t.bind(__webpack_require__, 87945, 17)),
        HTML: __webpack_require__.e(/* import() */ 50584).then(__webpack_require__.t.bind(__webpack_require__, 50584, 17))
      };
      this.minVariants = [cdk.TUI_FIRST_DAY, new cdk.TuiMonth(2019, 2), new cdk.TuiMonth(2007, 0)];
      this.maxVariants = [cdk.TUI_LAST_DAY, new cdk.TuiMonth(2020, 2), new cdk.TuiMonth(2023, 0), new cdk.TuiMonth(2019, 4)];
      this.min = this.minVariants[0];
      this.max = this.maxVariants[0];
      this.disabledItemHandlerVariants = [cdk.ALWAYS_FALSE_HANDLER, ({
        month
      }) => month % 3 === 0];
      this.disabledItemHandler = this.disabledItemHandlerVariants[0];
      this.valueVariants = [cdk.TuiDay.currentLocal(), new cdk.TuiMonthRange(cdk.TuiDay.currentLocal(), cdk.TuiDay.currentLocal().append({
        month: 3
      })), new cdk.TuiMonth(2007, 2)];
      this.value = null;
      this.yearVariants = [cdk.TuiDay.currentLocal(), new cdk.TuiYear(2007)];
      this.year = this.yearVariants[0];
    }

    onMonthClick(month) {
      this.alertService.open(String(month)).subscribe();
    }

  }

  ExampleTuiCalendarMonthComponent.ɵfac = function ExampleTuiCalendarMonthComponent_Factory(t) {
    return new (t || ExampleTuiCalendarMonthComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  ExampleTuiCalendarMonthComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiCalendarMonthComponent,
    selectors: [["example-tui-calendar-month"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7706503232819829138$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_MONTH_CALENDAR_MONTH_COMPONENT_TS__1 = goog.getMsg(" Month picker component. If you want a textfield, see {$startLink} InputMonthRange {$closeLink}", {
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "\uFFFD/#2\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_7706503232819829138$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_MONTH_CALENDAR_MONTH_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟1c677168edd7fab101b47647d0e0c6408932436e␟7706503232819829138: Month picker component. If you want a textfield, see ${"\uFFFD#2\uFFFD"}:START_LINK: InputMonthRange ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_MONTH_CALENDAR_MONTH_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_MONTH_CALENDAR_MONTH_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2348971518300945764$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_MONTH_CALENDAR_MONTH_COMPONENT_TS__5 = goog.getMsg("Range");
        i18n_4 = MSG_EXTERNAL_2348971518300945764$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_MONTH_CALENDAR_MONTH_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟0427b9c1f10441c6f4c53f1788242e2a97954be1␟2348971518300945764:Range`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3402892514282812900$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_MONTH_CALENDAR_MONTH_COMPONENT_TS___7 = goog.getMsg("{$startTagDiv}A handler that gets a month and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", {
          "startTagDiv": "\uFFFD#1\uFFFD",
          "closeTagDiv": "\uFFFD/#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_3402892514282812900$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_MONTH_CALENDAR_MONTH_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟5acb2fc15a092ea08e97136e74cb7441fee5a74b␟3402892514282812900:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a month and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2184035891904629249$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_MONTH_CALENDAR_MONTH_COMPONENT_TS___9 = goog.getMsg(" Maximal month ");
        i18n_8 = MSG_EXTERNAL_2184035891904629249$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_MONTH_CALENDAR_MONTH_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟21de36d65c8d90255cbe722536ad7ffd2dc18ba7␟2184035891904629249: Maximal month `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6121231479332733898$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_MONTH_CALENDAR_MONTH_COMPONENT_TS___11 = goog.getMsg(" A single month or a range of months ");
        i18n_10 = MSG_EXTERNAL_6121231479332733898$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_MONTH_CALENDAR_MONTH_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟10d55eb5861d4ee0970065a79e957f6374271b88␟6121231479332733898: A single month or a range of months `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2970267431945466119$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_MONTH_CALENDAR_MONTH_COMPONENT_TS__13 = goog.getMsg(" Import {$startTagCode}TuiCalendarMonthModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_2970267431945466119$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_MONTH_CALENDAR_MONTH_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟7e49cae11b32705d7cff0ad772b81e8e2f773f55␟2970267431945466119: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiCalendarMonthModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_MONTH_CALENDAR_MONTH_COMPONENT_TS__15 = goog.getMsg("Add to the template:");
        i18n_14 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_CALENDAR_MONTH_CALENDAR_MONTH_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "CalendarMonth", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["tuiLink", "", "routerLink", "/components/input-month-range"], ["id", "base", "heading", i18n_2, 3, "content"], ["id", "range", "heading", i18n_4, 3, "content"], [3, "disabledItemHandler", "min", "max", "year", "value", "monthClick"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandlerWithContext<TuiMonth, TuiMonthContext>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMonth", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMonth", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "TuiMonth | TuiMonthRange | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "year", "documentationPropertyMode", "input-output", "documentationPropertyType", "TuiYear", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "monthClick", "documentationPropertyMode", "output", "documentationPropertyType", "TuiMonth"], i18n_6, i18n_8, i18n_10, [1, "b-demo-steps"], i18n_12, ["filename", "myComponent.module.ts", 3, "code"], i18n_14, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiCalendarMonthComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiCalendarMonthComponent_ng_template_1_Template, 7, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiCalendarMonthComponent_ng_template_2_Template, 9, 15, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiCalendarMonthComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiMonthExample1, TuiMonthExample2, demo_component/* TuiDocDemoComponent */.F, calendar_month_component/* TuiCalendarMonthComponent */.o, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiCalendarMonthComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/calendar-month/calendar-month.module.ts










let ExampleTuiCalendarMonthModule = /*#__PURE__*/(() => {
  class ExampleTuiCalendarMonthModule {}

  ExampleTuiCalendarMonthModule.ɵfac = function ExampleTuiCalendarMonthModule_Factory(t) {
    return new (t || ExampleTuiCalendarMonthModule)();
  };

  ExampleTuiCalendarMonthModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiCalendarMonthModule
  });
  ExampleTuiCalendarMonthModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, router/* RouterModule */.Bz, core.TuiLinkModule, kit.TuiCalendarMonthModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiCalendarMonthComponent))]]
  });
  return ExampleTuiCalendarMonthModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiCalendarMonthModule, {
    declarations: [ExampleTuiCalendarMonthComponent, TuiMonthExample1, TuiMonthExample2],
    imports: [common/* CommonModule */.ez, router/* RouterModule */.Bz, core.TuiLinkModule, kit.TuiCalendarMonthModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiCalendarMonthComponent]
  });
})();

/***/ })

}]);