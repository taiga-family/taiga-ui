"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[44844],{

/***/ 44844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiLineDaysChartModule": () => (/* binding */ ExampleTuiLineDaysChartModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-charts/index.ts + 20 modules
var addon_charts = __webpack_require__(50179);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__(88002);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-date-range/input-date-range.component.ts
var input_date_range_component = __webpack_require__(92483);
// EXTERNAL MODULE: ./projects/kit/components/input-date-range/input-date-range.directive.ts
var input_date_range_directive = __webpack_require__(48706);
// EXTERNAL MODULE: ./projects/addon-charts/components/axes/axes.component.ts
var axes_component = __webpack_require__(70390);
// EXTERNAL MODULE: ./projects/addon-charts/components/line-days-chart/line-days-chart.component.ts
var line_days_chart_component = __webpack_require__(87748);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/line-days-chart/examples/1/index.ts













function TuiLineDaysChartExample1_tui_axes_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-axes", 3);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-line-days-chart", 4);
    fesm2015_core/* ɵɵpipe */.ALo(2, "async");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const labels_r1 = ctx.ngIf;
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("verticalLines", labels_r1.length)("horizontalLines", 4)("axisXLabels", labels_r1);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("height", 200)("value", ctx_r0.value)("yStringify", ctx_r0.yStringify)("xStringify", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 7, ctx_r0.xStringify$));
  }
}

class TuiLineDaysChartExample1 {
  constructor(months$) {
    this.months$ = months$;
    this.range = new cdk.TuiDayRange(cdk.TuiDay.currentLocal(), cdk.TuiDay.currentLocal().append({
      year: 1
    }));
    this.maxLength = {
      month: 12
    };
    this.xStringify$ = this.months$.pipe((0,map/* map */.U)(months => ({
      month,
      day
    }) => `${months[month]}, ${day}`));

    this.yStringify = y => `${(10 * y).toLocaleString(`en-US`, {
      maximumFractionDigits: 0
    })} $`;
  }

  get value() {
    return this.computeValue(this.range);
  }

  computeLabels$({
    from,
    to
  }) {
    return this.months$.pipe((0,map/* map */.U)(months => Array.from({
      length: cdk.TuiMonth.lengthBetween(from, to) + 1
    }, (_, i) => months[from.append({
      month: i
    }).month])));
  }

  computeValue({
    from,
    to
  }) {
    return new Array(cdk.TuiDay.lengthBetween(from, to) + 1).fill(0).reduce((array, _, i) => [...array, [from.append({
      day: i
    }), (i ? array[i - 1][1] : 100) + Math.random() * 10 - 5]], []);
  }

}

TuiLineDaysChartExample1.ɵfac = function TuiLineDaysChartExample1_Factory(t) {
  return new (t || TuiLineDaysChartExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TUI_MONTHS));
};

TuiLineDaysChartExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: TuiLineDaysChartExample1,
  selectors: [["tui-line-days-chart-example-1"]],
  decls: 5,
  vars: 5,
  consts: [[1, "b-form"], [3, "maxLength", "ngModel", "ngModelChange"], ["class", "axes", 3, "verticalLines", "horizontalLines", "axisXLabels", 4, "ngIf"], [1, "axes", 3, "verticalLines", "horizontalLines", "axisXLabels"], [1, "chart", 3, "height", "value", "yStringify", "xStringify"]],
  template: function TuiLineDaysChartExample1_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "p", 0);
      fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-date-range", 1);
      fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiLineDaysChartExample1_Template_tui_input_date_range_ngModelChange_1_listener($event) {
        return ctx.range = $event;
      });
      fesm2015_core/* ɵɵtext */._uU(2, " Range ");
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵtemplate */.YNc(3, TuiLineDaysChartExample1_tui_axes_3_Template, 3, 9, "tui-axes", 2);
      fesm2015_core/* ɵɵpipe */.ALo(4, "async");
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵadvance */.xp6(1);
      fesm2015_core/* ɵɵproperty */.Q6J("maxLength", ctx.maxLength)("ngModel", ctx.range);
      fesm2015_core/* ɵɵadvance */.xp6(2);
      fesm2015_core/* ɵɵproperty */.Q6J("ngIf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(4, 3, ctx.computeLabels$(ctx.range)));
    }
  },
  directives: [input_date_range_component/* TuiInputDateRangeComponent */.H, input_date_range_directive/* TuiInputDateRangeDirective */.d, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, common/* NgIf */.O5, axes_component/* TuiAxesComponent */.v, line_days_chart_component/* TuiLineDaysChartComponent */.r],
  pipes: [common/* AsyncPipe */.Ov],
  styles: [".axes[_ngcontent-%COMP%]{height:12.5rem;color:#bc71c9}"],
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiLineDaysChartExample1.prototype, "computeLabels$", null);

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiLineDaysChartExample1.prototype, "computeValue", null);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/addon-charts/components/line-chart/line-chart-hint.directive.ts
var line_chart_hint_directive = __webpack_require__(69775);
// EXTERNAL MODULE: ./projects/addon-charts/components/line-days-chart/line-days-chart-hint.directive.ts
var line_days_chart_hint_directive = __webpack_require__(19288);
// EXTERNAL MODULE: ./projects/addon-charts/components/line-chart/line-chart.component.ts
var line_chart_component = __webpack_require__(58413);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(25917);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/line-days-chart/examples/2/pipe.ts






let LabelsPipe = /*#__PURE__*/(() => {
  class LabelsPipe {
    constructor(months$) {
      this.months$ = months$;
    }

    transform({
      from,
      to
    }) {
      const length = cdk.TuiDay.lengthBetween(from, to);

      if (length > 90) {
        return this.months$.pipe((0,map/* map */.U)(months => Array.from({
          length: cdk.TuiMonth.lengthBetween(from, to) + 1
        }, (_, i) => months[from.append({
          month: i
        }).month])));
      }

      const range = Array.from({
        length
      }, (_, day) => from.append({
        day
      }));
      const mondays = onlyMondays(range);
      const days = range.map(String);

      if (length > 60) {
        return (0,of.of)(even(mondays));
      }

      if (length > 14) {
        return (0,of.of)(mondays);
      }

      if (length > 7) {
        return (0,of.of)(even(days));
      }

      return (0,of.of)(days);
    }

  }

  LabelsPipe.ɵfac = function LabelsPipe_Factory(t) {
    return new (t || LabelsPipe)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TUI_MONTHS, 16));
  };

  LabelsPipe.ɵpipe = /*@__PURE__*/fesm2015_core/* ɵɵdefinePipe */.Yjl({
    name: "labels",
    type: LabelsPipe,
    pure: true
  });
  return LabelsPipe;
})();

function onlyMondays(range) {
  return range.filter(day => !day.dayOfWeek()).map(String);
}

function even(array) {
  return array.filter((_, i) => !(i % 2));
}
// EXTERNAL MODULE: ./projects/cdk/pipes/filter/filter.pipe.ts
var filter_pipe = __webpack_require__(47305);
// EXTERNAL MODULE: ./projects/cdk/pipes/mapper/mapper.pipe.ts
var mapper_pipe = __webpack_require__(35271);
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/line-days-chart/examples/2/index.ts

















function TuiLineDaysChartExample2_span_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "span", 8);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "small", 9);
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const index_r5 = ctx.index;
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij("Chart ", index_r5 + 1, "");
  }
}

function TuiLineDaysChartExample2_tui_axes_10_ng_container_1_tui_line_days_chart_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-line-days-chart", 14);
    fesm2015_core/* ɵɵpipe */.ALo(1, "tuiFilter");
  }

  if (rf & 2) {
    const chart_r11 = ctx.$implicit;
    const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵproperty */.Q6J("height", 200)("value", fesm2015_core/* ɵɵpipeBind3 */.Dn7(1, 2, chart_r11, ctx_r10.filter, ctx_r10.range));
  }
}

function TuiLineDaysChartExample2_tui_axes_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiLineDaysChartExample2_tui_axes_10_ng_container_1_tui_line_days_chart_1_Template, 2, 6, "tui-line-days-chart", 13);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r7.days);
  }
}

function TuiLineDaysChartExample2_tui_axes_10_ng_template_2_tui_line_chart_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-line-chart", 16);
    fesm2015_core/* ɵɵpipe */.ALo(1, "tuiMapper");
    fesm2015_core/* ɵɵpipe */.ALo(2, "tuiFilter");
  }

  if (rf & 2) {
    const chart_r13 = ctx.$implicit;
    const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw(3);
    fesm2015_core/* ɵɵproperty */.Q6J("height", 200)("width", ctx_r12.getWidth(ctx_r12.range))("value", fesm2015_core/* ɵɵpipeBind3 */.Dn7(1, 3, fesm2015_core/* ɵɵpipeBind3 */.Dn7(2, 7, chart_r13, ctx_r12.filter, ctx_r12.range), ctx_r12.toNumbers, ctx_r12.range));
  }
}

function TuiLineDaysChartExample2_tui_axes_10_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtemplate */.YNc(0, TuiLineDaysChartExample2_tui_axes_10_ng_template_2_tui_line_chart_0_Template, 3, 11, "tui-line-chart", 15);
  }

  if (rf & 2) {
    const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r9.days);
  }
}

function TuiLineDaysChartExample2_tui_axes_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-axes", 10);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiLineDaysChartExample2_tui_axes_10_ng_container_1_Template, 2, 1, "ng-container", 11);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiLineDaysChartExample2_tui_axes_10_ng_template_2_Template, 1, 1, "ng-template", null, 12, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const labels_r6 = ctx.ngIf;

    const _r8 = fesm2015_core/* ɵɵreference */.MAs(3);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();

    const _r2 = fesm2015_core/* ɵɵreference */.MAs(14);

    fesm2015_core/* ɵɵproperty */.Q6J("verticalLines", labels_r6.length)("horizontalLines", 4)("axisXLabels", labels_r6)("tuiLineChartHint", _r2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.getWidth(ctx_r1.show) > 90)("ngIfElse", _r8);
  }
}

function TuiLineDaysChartExample2_ng_template_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 8);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "span", 18);
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const point_r16 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij("$", point_r16[1].toFixed(0), "");
  }
}

function TuiLineDaysChartExample2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 17);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "strong");
    fesm2015_core/* ɵɵtext */._uU(2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "div");
    fesm2015_core/* ɵɵtemplate */.YNc(4, TuiLineDaysChartExample2_ng_template_13_div_4_Template, 3, 1, "div", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const data_r14 = ctx.$implicit;
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx_r3.getDate(data_r14[0][0], ctx_r3.range.from));
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", data_r14);
  }
}

class TuiLineDaysChartExample2 {
  constructor() {
    this.data = new cdk.TuiDayRange(cdk.TuiDay.currentLocal(), cdk.TuiDay.currentLocal().append({
      month: 5
    }));
    this.show = this.data;
    this.days = this.computeArrays(this.data);
    this.maxLength = {
      month: 6
    };

    this.filter = ([day], {
      from,
      to
    }) => day.daySameOrAfter(from) && day.daySameOrBefore(to);

    this.toNumbers = (days, {
      from
    }) => days.map(([day, value]) => [cdk.TuiDay.lengthBetween(from, day), value]);
  }

  get range() {
    return this.computeRange(this.show);
  }

  getWidth({
    from,
    to
  }) {
    return cdk.TuiDay.lengthBetween(from, to);
  }

  getDate(day, date) {
    return day instanceof cdk.TuiDay ? day : date.append({
      day
    });
  }

  onDataChange(data) {
    this.days = this.computeArrays(data);
  }

  computeRange(range) {
    const {
      from,
      to
    } = range;
    const length = cdk.TuiDay.lengthBetween(from, to);
    const dayOfWeekFrom = from.dayOfWeek();
    const dayOfWeekTo = to.dayOfWeek();
    const mondayFrom = dayOfWeekFrom ? from.append({
      day: 7 - dayOfWeekFrom
    }) : from;
    const mondayTo = dayOfWeekTo ? to.append({
      day: 7 - dayOfWeekTo
    }) : to;
    const mondaysLength = cdk.TuiDay.lengthBetween(mondayFrom, mondayTo);

    if (length > 60) {
      return new cdk.TuiDayRange(mondayFrom, mondayTo.append({
        day: mondaysLength % 14
      }));
    }

    if (length > 14) {
      return new cdk.TuiDayRange(mondayFrom, mondayTo);
    }

    if (length > 7) {
      return new cdk.TuiDayRange(from, to.append({
        day: length % 2
      }));
    }

    return range;
  } // Random data generation


  computeData({
    from,
    to
  }, initial) {
    return new Array(cdk.TuiDay.lengthBetween(from, to) + 1).fill(0).reduce((array, _, i) => [...array, [from.append({
      day: i
    }), Math.max((i ? array[i - 1][1] : initial) + Math.random() * 10 - 5, 0)]], []).filter(([day]) => day.dayOfWeek() < 5);
  }

  computeArrays(data) {
    return [this.computeData(data, 100), this.computeData(data, 75), this.computeData(data, 50)];
  }

}

TuiLineDaysChartExample2.ɵfac = function TuiLineDaysChartExample2_Factory(t) {
  return new (t || TuiLineDaysChartExample2)();
};

TuiLineDaysChartExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: TuiLineDaysChartExample2,
  selectors: [["tui-line-days-chart-example-2"]],
  decls: 15,
  vars: 10,
  consts: function () {
    let i18n_0;

    if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
      const MSG_EXTERNAL_6846673182472139923$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_EXAMPLES_2_INDEX_TS_1 = goog.getMsg("{$startTagCode}TuiLineDaysChart{$closeTagCode} is used to show data of several months to simplify working with different number of days in months\n", {
        "startTagCode": "\uFFFD#2\uFFFD",
        "closeTagCode": "\uFFFD/#2\uFFFD"
      });
      i18n_0 = MSG_EXTERNAL_6846673182472139923$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_EXAMPLES_2_INDEX_TS_1;
    } else {
      i18n_0 = $localize`:␟54790dc0dc9d3d244bf99ebbb89d1a8a62195075␟6846673182472139923:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:TuiLineDaysChart${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: is used to show data of several months to simplify working with different number of days in months
`;
    }

    return [i18n_0, [1, "controls"], [1, "b-form", 3, "maxLength", "ngModel", "ngModelChange"], [1, "b-form", "tui-space_left-4", 3, "maxLength", "ngModel", "ngModelChange"], [1, "legend"], ["class", "item", 4, "ngFor", "ngForOf"], ["class", "axes", 3, "verticalLines", "horizontalLines", "axisXLabels", "tuiLineChartHint", 4, "ngIf"], ["hint", ""], [1, "item"], [1, "name"], [1, "axes", 3, "verticalLines", "horizontalLines", "axisXLabels", "tuiLineChartHint"], [4, "ngIf", "ngIfElse"], ["line", ""], ["class", "chart", 3, "height", "value", 4, "ngFor", "ngForOf"], [1, "chart", 3, "height", "value"], ["class", "chart", 3, "height", "width", "value", 4, "ngFor", "ngForOf"], [1, "chart", 3, "height", "width", "value"], [1, "tui-space_bottom-2"], [1, "value"]];
  },
  template: function TuiLineDaysChartExample2_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-notification");
      fesm2015_core/* ɵɵi18nStart */.tHW(1, 0);
      fesm2015_core/* ɵɵelement */._UZ(2, "code");
      fesm2015_core/* ɵɵi18nEnd */.N_p();
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵelementStart */.TgZ(3, "p", 1);
      fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-input-date-range", 2);
      fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiLineDaysChartExample2_Template_tui_input_date_range_ngModelChange_4_listener($event) {
        return ctx.data = $event;
      })("ngModelChange", function TuiLineDaysChartExample2_Template_tui_input_date_range_ngModelChange_4_listener($event) {
        return ctx.onDataChange($event);
      });
      fesm2015_core/* ɵɵtext */._uU(5, " Data ");
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-input-date-range", 3);
      fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiLineDaysChartExample2_Template_tui_input_date_range_ngModelChange_6_listener($event) {
        return ctx.show = $event;
      });
      fesm2015_core/* ɵɵtext */._uU(7, " Visible range ");
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵelementStart */.TgZ(8, "p", 4);
      fesm2015_core/* ɵɵtemplate */.YNc(9, TuiLineDaysChartExample2_span_9_Template, 3, 1, "span", 5);
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵtemplate */.YNc(10, TuiLineDaysChartExample2_tui_axes_10_Template, 4, 6, "tui-axes", 6);
      fesm2015_core/* ɵɵpipe */.ALo(11, "async");
      fesm2015_core/* ɵɵpipe */.ALo(12, "labels");
      fesm2015_core/* ɵɵtemplate */.YNc(13, TuiLineDaysChartExample2_ng_template_13_Template, 5, 2, "ng-template", null, 7, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵadvance */.xp6(4);
      fesm2015_core/* ɵɵproperty */.Q6J("maxLength", ctx.maxLength)("ngModel", ctx.data);
      fesm2015_core/* ɵɵadvance */.xp6(2);
      fesm2015_core/* ɵɵproperty */.Q6J("maxLength", ctx.maxLength)("ngModel", ctx.show);
      fesm2015_core/* ɵɵadvance */.xp6(3);
      fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.days);
      fesm2015_core/* ɵɵadvance */.xp6(1);
      fesm2015_core/* ɵɵproperty */.Q6J("ngIf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(11, 6, fesm2015_core/* ɵɵpipeBind1 */.lcZ(12, 8, ctx.show)));
    }
  },
  directives: [notification_component/* TuiNotificationComponent */.L, input_date_range_component/* TuiInputDateRangeComponent */.H, input_date_range_directive/* TuiInputDateRangeDirective */.d, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, common/* NgForOf */.sg, common/* NgIf */.O5, axes_component/* TuiAxesComponent */.v, line_chart_hint_directive/* TuiLineChartHintDirective */.T, line_days_chart_hint_directive/* TuiLineDaysChartHintDirective */.w, line_days_chart_component/* TuiLineDaysChartComponent */.r, line_chart_component/* TuiLineChartComponent */.V],
  pipes: [common/* AsyncPipe */.Ov, LabelsPipe, filter_pipe/* TuiFilterPipe */.S, mapper_pipe/* TuiMapperPipe */.c],
  styles: [".axes[_ngcontent-%COMP%]{height:12.5rem}.controls[_ngcontent-%COMP%]{display:flex}.controls[_ngcontent-%COMP%]   .b-form[_ngcontent-%COMP%]{flex:1}.legend[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.item[_ngcontent-%COMP%]{color:var(--tui-support-01);display:flex;align-items:center;margin:0 .75rem}.item[_ngcontent-%COMP%]:first-child{color:var(--tui-support-08)}.item[_ngcontent-%COMP%]:last-child{color:var(--tui-support-12)}.item[_ngcontent-%COMP%]:before{content:\"\";border-bottom:.125rem solid;width:1rem;margin-right:.5rem}.name[_ngcontent-%COMP%]{color:var(--tui-text-01)}.value[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.chart[_ngcontent-%COMP%]{color:var(--tui-support-01);position:absolute;top:0;left:0;width:100%;height:100%}.chart[_ngcontent-%COMP%]:first-child{color:var(--tui-support-08)}.chart[_ngcontent-%COMP%]:last-child{color:var(--tui-support-12)}"],
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiLineDaysChartExample2.prototype, "getWidth", null);

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiLineDaysChartExample2.prototype, "getDate", null);

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiLineDaysChartExample2.prototype, "computeRange", null);

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiLineDaysChartExample2.prototype, "computeData", null);
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/line-days-chart/line-days-chart.component.ts


















function ExampleTuiLineDaysChartComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-line-days-chart-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-line-days-chart-example-2");
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

function ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 16);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 17);
  }
}

function ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 18);
  }
}

function ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 20);
  }
}

function ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

const _c22 = function () {
  return [];
};

function ExampleTuiLineDaysChartComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-axes", 5);
    fesm2015_core/* ɵɵpipe */.ALo(2, "async");
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-line-days-chart", 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineDaysChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.dots = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 8);
    fesm2015_core/* ɵɵpipe */.ALo(7, "async");
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineDaysChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.hintContent = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineDaysChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.height = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineDaysChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.y = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineDaysChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.smoothingFactor = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineDaysChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.value = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵpipe */.ALo(13, "async");
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineDaysChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.xStringify = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(14, ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiLineDaysChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r19 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r19.yStringify = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("verticalLines", 3)("horizontalLines", 4)("axisXLabels", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 23, ctx_r1.labels$) || fesm2015_core/* ɵɵpureFunction0 */.DdM(29, _c22));
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("value", ctx_r1.value)("y", ctx_r1.y)("height", ctx_r1.height)("hintContent", ctx_r1.hintContent)("xStringify", ctx_r1.xStringify)("yStringify", ctx_r1.yStringify)("smoothingFactor", ctx_r1.smoothingFactor)("dots", ctx_r1.dots);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.dots);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", fesm2015_core/* ɵɵpipeBind1 */.lcZ(7, 25, ctx_r1.hintContentVariants$))("documentationPropertyValue", ctx_r1.hintContent);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.height);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.y);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.smoothingFactor);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", fesm2015_core/* ɵɵpipeBind1 */.lcZ(13, 27, ctx_r1.xStringifyVariants$))("documentationPropertyValue", ctx_r1.xStringify);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.yStringifyVariants)("documentationPropertyValue", ctx_r1.yStringify);
  }
}

function ExampleTuiLineDaysChartComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 23);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 24);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 25);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 26);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 27);
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

let ExampleTuiLineDaysChartComponent = /*#__PURE__*/(() => {
  class ExampleTuiLineDaysChartComponent {
    constructor(months$) {
      this.months$ = months$;
      this.exampleModule = __webpack_require__.e(/* import() */ 83405).then(__webpack_require__.t.bind(__webpack_require__, 83405, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 42231).then(__webpack_require__.t.bind(__webpack_require__, 42231, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 18807).then(__webpack_require__.t.bind(__webpack_require__, 18807, 17)),
        HTML: __webpack_require__.e(/* import() */ 23889).then(__webpack_require__.t.bind(__webpack_require__, 23889, 17)),
        LESS: __webpack_require__.e(/* import() */ 43743).then(__webpack_require__.t.bind(__webpack_require__, 43743, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 28904).then(__webpack_require__.t.bind(__webpack_require__, 28904, 17)),
        HTML: __webpack_require__.e(/* import() */ 66161).then(__webpack_require__.t.bind(__webpack_require__, 66161, 17)),
        LESS: __webpack_require__.e(/* import() */ 27918).then(__webpack_require__.t.bind(__webpack_require__, 27918, 17)),
        'pipe.ts': __webpack_require__.e(/* import() */ 9361).then(__webpack_require__.t.bind(__webpack_require__, 9361, 17))
      };
      this.valueVariants = [new Array(91).fill(0).reduce((array, _, i) => [...array, [new cdk.TuiDay(2020, 0, 1).append({
        day: i
      }), (i ? array[i - 1][1] : 100) + Math.random() * 20 - 10]], []), [[new cdk.TuiDay(2020, 1, 10), 10], [new cdk.TuiDay(2020, 1, 15), 150], [new cdk.TuiDay(2020, 1, 17), 10], [new cdk.TuiDay(2020, 1, 20), 10], [new cdk.TuiDay(2020, 1, 25), 150], [new cdk.TuiDay(2020, 1, 27), 10]]];
      this.value = this.valueVariants[0];
      this.labels$ = this.months$.pipe((0,map/* map */.U)(months => Array.from({
        length: 3
      }, (_, i) => months[i])));
      this.yStringifyVariants = [y => `${(10 * y).toLocaleString(`en-US`, {
        maximumFractionDigits: 0
      })} $`];
      this.xStringifyVariants$ = this.months$.pipe((0,map/* map */.U)(months => [({
        month,
        day
      }) => `${months[month]}, ${day}`]));
      this.hintContentVariants$ = this.months$.pipe((0,map/* map */.U)(months => [``, ({
        $implicit
      }) => `${months[$implicit[0].month]}, ${$implicit[0].day}\n${(10 * $implicit[1]).toLocaleString(`en-US`, {
        maximumFractionDigits: 0
      })} $`]));
      this.yStringify = null;
      this.xStringify = null;
      this.hintContent = ``;
      this.dots = false;
      this.smoothingFactor = 0;
      this.y = 0;
      this.height = 200;
    }

  }

  ExampleTuiLineDaysChartComponent.ɵfac = function ExampleTuiLineDaysChartComponent_Factory(t) {
    return new (t || ExampleTuiLineDaysChartComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TUI_MONTHS));
  };

  ExampleTuiLineDaysChartComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiLineDaysChartComponent,
    selectors: [["example-tui-line-days-chart"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_590759144044987818$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__1 = goog.getMsg("Line chart but for days");
        i18n_0 = MSG_EXTERNAL_590759144044987818$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟8b3686ee0181ab81f9ff51025cf35b0a03e625e7␟590759144044987818:Line chart but for days`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7049130908974374044$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__5 = goog.getMsg("Complex");
        i18n_4 = MSG_EXTERNAL_7049130908974374044$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟e75362b1b5b0d9038fcafc9670ef18bba17e61d0␟7049130908974374044:Complex`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4740076445307023096$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___7 = goog.getMsg(" Show dots on chart ");
        i18n_6 = MSG_EXTERNAL_4740076445307023096$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟c4d83e70435953f62ccae3cbf6016420df475424␟4740076445307023096: Show dots on chart `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6338178794566893901$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___9 = goog.getMsg(" Content of hint for hover. It has {$startTagCode}$implicit{$closeTagCode} in context with a tuple {$startTagCode}[TuiDay, number]{$closeTagCode}", {
          "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]",
          "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"
        });
        i18n_8 = MSG_EXTERNAL_6338178794566893901$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟bedcb3b37d5f24d2f77a8c3cb483fdf13759efd7␟6338178794566893901: Content of hint for hover. It has ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_TAG_CODE:$implicit${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_TAG_CODE: in context with a tuple ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_TAG_CODE:[TuiDay, number]${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_TAG_CODE:`;
      }

      i18n_8 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_8);
      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4329060505650601384$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___11 = goog.getMsg(" Axis Y range, pixel scale is 1:1 ");
        i18n_10 = MSG_EXTERNAL_4329060505650601384$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟1148b851b9d07a503fe83074185fada4c56bc932␟4329060505650601384: Axis Y range, pixel scale is 1:1 `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9084820970498059965$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___13 = goog.getMsg(" Start of Y axis ");
        i18n_12 = MSG_EXTERNAL_9084820970498059965$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟f33f8b3f2cfd7ef519194cc1ae13fc8fb91fb8d7␟9084820970498059965: Start of Y axis `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7622132382477188848$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___15 = goog.getMsg(" Smoothing factor from 0 to 99 ");
        i18n_14 = MSG_EXTERNAL_7622132382477188848$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟dbcff3658adbc7241a4e120d0403b9b59203cf6f␟7622132382477188848: Smoothing factor from 0 to 99 `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_620827304048157009$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___17 = goog.getMsg(" Array of data ");
        i18n_16 = MSG_EXTERNAL_620827304048157009$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟2eb20b3adec45476e892d48624603eec29f04ca7␟620827304048157009: Array of data `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8840512580092681625$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___19 = goog.getMsg(" Function to stringify a value number to a string in axis X hint ");
        i18n_18 = MSG_EXTERNAL_8840512580092681625$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟a95376fd00f2c7de89ef1205191f686e9bb93ceb␟8840512580092681625: Function to stringify a value number to a string in axis X hint `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8439308556823064311$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___21 = goog.getMsg(" Function to stringify a value number to a string in axis Y hint ");
        i18n_20 = MSG_EXTERNAL_8439308556823064311$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟aa03eea8f292367391947b1ee6d45d8e5fe1c884␟8439308556823064311: Function to stringify a value number to a string in axis Y hint `;
      }

      let i18n_23;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5226796676451500758$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__24 = goog.getMsg(" Import {$startTagCode}TuiLineDaysChartModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_23 = MSG_EXTERNAL_5226796676451500758$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__24;
      } else {
        i18n_23 = $localize`:␟3faf4a45d660c91f821e2f11c0184ec80a25404a␟5226796676451500758: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiLineDaysChartModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_25;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__26 = goog.getMsg("Add to the template:");
        i18n_25 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__26;
      } else {
        i18n_25 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "LineDaysChart", "package", "ADDON-CHARTS", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "complex", "heading", i18n_4, 3, "content"], [1, "axes", 3, "verticalLines", "horizontalLines", "axisXLabels"], [3, "value", "y", "height", "hintContent", "xStringify", "yStringify", "smoothingFactor", "dots"], ["documentationPropertyName", "dots", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hintContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "height", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "y", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "smoothingFactor", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "[TuiDay, number][]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "xStringify", "documentationPropertyMode", "input", "documentationPropertyType", "TuiStringHandler<TuiDay> | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "yStringify", "documentationPropertyMode", "input", "documentationPropertyType", "TuiStringHandler<number> | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_6, i18n_8, i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, [1, "b-demo-steps"], i18n_23, ["filename", "myComponent.module.ts", 3, "code"], i18n_25, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiLineDaysChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiLineDaysChartComponent_ng_template_1_Template, 6, 2, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiLineDaysChartComponent_ng_template_2_Template, 15, 30, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiLineDaysChartComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiLineDaysChartExample1, TuiLineDaysChartExample2, demo_component/* TuiDocDemoComponent */.F, axes_component/* TuiAxesComponent */.v, line_days_chart_component/* TuiLineDaysChartComponent */.r, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".axes[_ngcontent-%COMP%]{height:12.5rem;width:45.5rem;color:#bc71c9}"],
    changeDetection: 0
  });
  return ExampleTuiLineDaysChartComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/charts/line-days-chart/line-days-chart.module.ts














let ExampleTuiLineDaysChartModule = /*#__PURE__*/(() => {
  class ExampleTuiLineDaysChartModule {}

  ExampleTuiLineDaysChartModule.ɵfac = function ExampleTuiLineDaysChartModule_Factory(t) {
    return new (t || ExampleTuiLineDaysChartModule)();
  };

  ExampleTuiLineDaysChartModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiLineDaysChartModule
  });
  ExampleTuiLineDaysChartModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, addon_charts.TuiAxesModule, kit.TuiSelectModule, addon_charts.TuiLineChartModule, cdk.TuiMapperPipeModule, core.TuiNotificationModule, cdk.TuiFilterPipeModule, addon_charts.TuiLineDaysChartModule, kit.TuiInputDateRangeModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiLineDaysChartComponent))]]
  });
  return ExampleTuiLineDaysChartModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiLineDaysChartModule, {
    declarations: [ExampleTuiLineDaysChartComponent, TuiLineDaysChartExample1, TuiLineDaysChartExample2, LabelsPipe],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, addon_charts.TuiAxesModule, kit.TuiSelectModule, addon_charts.TuiLineChartModule, cdk.TuiMapperPipeModule, core.TuiNotificationModule, cdk.TuiFilterPipeModule, addon_charts.TuiLineDaysChartModule, kit.TuiInputDateRangeModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiLineDaysChartComponent]
  });
})();

/***/ })

}]);