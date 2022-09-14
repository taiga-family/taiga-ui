(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-line-days-chart-line-days-chart-module"],{

/***/ "./src/modules/charts/line-days-chart/examples/1/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/charts/line-days-chart/examples/1/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiLineDaysChartExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLineDaysChartExample1", function() { return TuiLineDaysChartExample1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _kit_components_input_date_range_input_date_range_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-range/input-date-range.component */ "../kit/components/input-date-range/input-date-range.component.ts");
/* harmony import */ var _kit_components_input_date_range_input_date_range_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-range/input-date-range.directive */ "../kit/components/input-date-range/input-date-range.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/axes/axes.component */ "../addon-charts/components/axes/axes.component.ts");
/* harmony import */ var _addon_charts_components_line_days_chart_line_days_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/line-days-chart/line-days-chart.component */ "../addon-charts/components/line-days-chart/line-days-chart.component.ts");















function TuiLineDaysChartExample1_tui_axes_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-axes", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "tui-line-days-chart", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const labels_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("verticalLines", labels_r1.length)("horizontalLines", 4)("axisXLabels", labels_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 200)("value", ctx_r0.value)("yStringify", ctx_r0.yStringify)("xStringify", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 7, ctx_r0.xStringify$));
} }
// @dynamic
class TuiLineDaysChartExample1 {
    constructor(months$) {
        this.months$ = months$;
        this.range = new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDayRange"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"].currentLocal(), _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"].currentLocal().append({ year: 1 }));
        this.maxLength = { month: 12 };
        this.xStringify$ = this.months$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(months => ({ month, day }) => `${months[month]}, ${day}`));
        this.yStringify = y => `${(10 * y).toLocaleString(`en-US`, { maximumFractionDigits: 0 })} $`;
    }
    get value() {
        return this.computeValue(this.range);
    }
    computeLabels$({ from, to }) {
        return this.months$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(months => Array.from({ length: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiMonth"].lengthBetween(from, to) + 1 }, (_, i) => months[from.append({ month: i }).month])));
    }
    computeValue({ from, to }) {
        return new Array(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDay"].lengthBetween(from, to) + 1)
            .fill(0)
            .reduce((array, _, i) => [
            ...array,
            [
                from.append({ day: i }),
                (i ? array[i - 1][1] : 100) + Math.random() * 10 - 5,
            ],
        ], []);
    }
}
TuiLineDaysChartExample1.ɵfac = function TuiLineDaysChartExample1_Factory(t) { return new (t || TuiLineDaysChartExample1)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TUI_MONTHS"])); };
TuiLineDaysChartExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiLineDaysChartExample1, selectors: [["tui-line-days-chart-example-1"]], decls: 5, vars: 5, consts: [[1, "b-form"], [3, "maxLength", "ngModel", "ngModelChange"], ["class", "axes", 3, "verticalLines", "horizontalLines", "axisXLabels", 4, "ngIf"], [1, "axes", 3, "verticalLines", "horizontalLines", "axisXLabels"], [1, "chart", 3, "height", "value", "yStringify", "xStringify"]], template: function TuiLineDaysChartExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tui-input-date-range", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TuiLineDaysChartExample1_Template_tui_input_date_range_ngModelChange_1_listener($event) { return ctx.range = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Range ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TuiLineDaysChartExample1_tui_axes_3_Template, 3, 9, "tui-axes", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxLength", ctx.maxLength)("ngModel", ctx.range);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 3, ctx.computeLabels$(ctx.range)));
    } }, directives: [_kit_components_input_date_range_input_date_range_component__WEBPACK_IMPORTED_MODULE_8__["TuiInputDateRangeComponent"], _kit_components_input_date_range_input_date_range_directive__WEBPACK_IMPORTED_MODULE_9__["TuiInputDateRangeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_12__["TuiAxesComponent"], _addon_charts_components_line_days_chart_line_days_chart_component__WEBPACK_IMPORTED_MODULE_13__["TuiLineDaysChartComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [".axes[_ngcontent-%COMP%] {\n  height: 12.5rem;\n  color: #bc71c9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2xpbmUtZGF5cy1jaGFydC9leGFtcGxlcy8xL2luZGV4Lmxlc3MiLCJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NoYXJ0cy9saW5lLWRheXMtY2hhcnQvZXhhbXBsZXMvMS9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NoYXJ0cy9saW5lLWRheXMtY2hhcnQvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmF4ZXMge1xuICAgIGhlaWdodDogMTIuNXJlbTtcbiAgICBjb2xvcjogI2JjNzFjOTtcbn1cbiIsIi5heGVzIHtcbiAgaGVpZ2h0OiAxMi41cmVtO1xuICBjb2xvcjogI2JjNzFjOTtcbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiPure"]
], TuiLineDaysChartExample1.prototype, "computeLabels$", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiPure"]
], TuiLineDaysChartExample1.prototype, "computeValue", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiLineDaysChartExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-line-days-chart-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], function () { return [{ type: rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TUI_MONTHS"]]
            }] }]; }, { computeLabels$: [], computeValue: [] }); })();


/***/ }),

/***/ "./src/modules/charts/line-days-chart/examples/2/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/charts/line-days-chart/examples/2/index.ts ***!
  \****************************************************************/
/*! exports provided: TuiLineDaysChartExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLineDaysChartExample2", function() { return TuiLineDaysChartExample2; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _kit_components_input_date_range_input_date_range_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-range/input-date-range.component */ "../kit/components/input-date-range/input-date-range.component.ts");
/* harmony import */ var _kit_components_input_date_range_input_date_range_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/input-date-range/input-date-range.directive */ "../kit/components/input-date-range/input-date-range.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/axes/axes.component */ "../addon-charts/components/axes/axes.component.ts");
/* harmony import */ var _addon_charts_components_line_chart_line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/line-chart/line-chart-hint.directive */ "../addon-charts/components/line-chart/line-chart-hint.directive.ts");
/* harmony import */ var _addon_charts_components_line_days_chart_line_days_chart_hint_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/line-days-chart/line-days-chart-hint.directive */ "../addon-charts/components/line-days-chart/line-days-chart-hint.directive.ts");
/* harmony import */ var _addon_charts_components_line_days_chart_line_days_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/line-days-chart/line-days-chart.component */ "../addon-charts/components/line-days-chart/line-days-chart.component.ts");
/* harmony import */ var _addon_charts_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/line-chart/line-chart.component */ "../addon-charts/components/line-chart/line-chart.component.ts");
/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipe */ "./src/modules/charts/line-days-chart/examples/2/pipe.ts");
/* harmony import */ var _cdk_pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../../cdk/pipes/filter/filter.pipe */ "../cdk/pipes/filter/filter.pipe.ts");
/* harmony import */ var _cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../../cdk/pipes/mapper/mapper.pipe */ "../cdk/pipes/mapper/mapper.pipe.ts");


















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6846673182472139923$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_EXAMPLES_2_INDEX_TS_1 = goog.getMsg("{$startTagCode}TuiLineDaysChart{$closeTagCode} is used to show data of several months to simplify working with different number of days in months\n", { "startTagCode": "\uFFFD#2\uFFFD", "closeTagCode": "\uFFFD/#2\uFFFD" });
    I18N_0 = MSG_EXTERNAL_6846673182472139923$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_EXAMPLES_2_INDEX_TS_1;
}
else {
    I18N_0 = $localize `:␟54790dc0dc9d3d244bf99ebbb89d1a8a62195075␟6846673182472139923:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:TuiLineDaysChart${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: is used to show data of several months to simplify working with different number of days in months
`;
}
function TuiLineDaysChartExample2_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Chart ", index_r5 + 1, "");
} }
function TuiLineDaysChartExample2_tui_axes_10_ng_container_1_tui_line_days_chart_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tui-line-days-chart", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "tuiFilter");
} if (rf & 2) {
    const chart_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 200)("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 2, chart_r11, ctx_r10.filter, ctx_r10.range));
} }
function TuiLineDaysChartExample2_tui_axes_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiLineDaysChartExample2_tui_axes_10_ng_container_1_tui_line_days_chart_1_Template, 2, 6, "tui-line-days-chart", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.days);
} }
function TuiLineDaysChartExample2_tui_axes_10_ng_template_2_tui_line_chart_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tui-line-chart", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "tuiMapper");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "tuiFilter");
} if (rf & 2) {
    const chart_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", 200)("width", ctx_r12.getWidth(ctx_r12.range))("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 7, chart_r13, ctx_r12.filter, ctx_r12.range), ctx_r12.toNumbers, ctx_r12.range));
} }
function TuiLineDaysChartExample2_tui_axes_10_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiLineDaysChartExample2_tui_axes_10_ng_template_2_tui_line_chart_0_Template, 3, 11, "tui-line-chart", 14);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.days);
} }
function TuiLineDaysChartExample2_tui_axes_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-axes", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiLineDaysChartExample2_tui_axes_10_ng_container_1_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TuiLineDaysChartExample2_tui_axes_10_ng_template_2_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const labels_r6 = ctx.ngIf;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("verticalLines", labels_r6.length)("horizontalLines", 4)("axisXLabels", labels_r6)("tuiLineChartHint", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.getWidth(ctx_r1.show) > 90)("ngIfElse", _r8);
} }
function TuiLineDaysChartExample2_ng_template_13_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", point_r16[1].toFixed(0), "");
} }
function TuiLineDaysChartExample2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TuiLineDaysChartExample2_ng_template_13_div_4_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r14 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.getDate(data_r14[0][0], ctx_r3.range.from));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", data_r14);
} }
class TuiLineDaysChartExample2 {
    constructor() {
        this.data = new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDayRange"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"].currentLocal(), _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"].currentLocal().append({ month: 5 }));
        this.show = this.data;
        this.days = this.computeArrays(this.data);
        this.maxLength = { month: 6 };
        this.filter = ([day], { from, to }) => day.daySameOrAfter(from) && day.daySameOrBefore(to);
        this.toNumbers = (days, { from }) => days.map(([day, value]) => [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"].lengthBetween(from, day), value]);
    }
    get range() {
        return this.computeRange(this.show);
    }
    getWidth({ from, to }) {
        return _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"].lengthBetween(from, to);
    }
    getDate(day, date) {
        return day instanceof _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"] ? day : date.append({ day });
    }
    onDataChange(data) {
        this.days = this.computeArrays(data);
    }
    computeRange(range) {
        const { from, to } = range;
        const length = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"].lengthBetween(from, to);
        const dayOfWeekFrom = from.dayOfWeek();
        const dayOfWeekTo = to.dayOfWeek();
        const mondayFrom = dayOfWeekFrom ? from.append({ day: 7 - dayOfWeekFrom }) : from;
        const mondayTo = dayOfWeekTo ? to.append({ day: 7 - dayOfWeekTo }) : to;
        const mondaysLength = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"].lengthBetween(mondayFrom, mondayTo);
        if (length > 60) {
            return new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDayRange"](mondayFrom, mondayTo.append({ day: mondaysLength % 14 }));
        }
        if (length > 14) {
            return new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDayRange"](mondayFrom, mondayTo);
        }
        if (length > 7) {
            return new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDayRange"](from, to.append({ day: length % 2 }));
        }
        return range;
    }
    // Random data generation
    computeData({ from, to }, initial) {
        return new Array(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"].lengthBetween(from, to) + 1)
            .fill(0)
            .reduce((array, _, i) => [
            ...array,
            [
                from.append({ day: i }),
                Math.max((i ? array[i - 1][1] : initial) + Math.random() * 10 - 5, 0),
            ],
        ], [])
            .filter(([day]) => day.dayOfWeek() < 5);
    }
    computeArrays(data) {
        return [
            this.computeData(data, 100),
            this.computeData(data, 75),
            this.computeData(data, 50),
        ];
    }
}
TuiLineDaysChartExample2.ɵfac = function TuiLineDaysChartExample2_Factory(t) { return new (t || TuiLineDaysChartExample2)(); };
TuiLineDaysChartExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiLineDaysChartExample2, selectors: [["tui-line-days-chart-example-2"]], decls: 15, vars: 10, consts: [[1, "controls"], [1, "b-form", 3, "maxLength", "ngModel", "ngModelChange"], [1, "b-form", "tui-space_left-4", 3, "maxLength", "ngModel", "ngModelChange"], [1, "legend"], ["class", "item", 4, "ngFor", "ngForOf"], ["class", "axes", 3, "verticalLines", "horizontalLines", "axisXLabels", "tuiLineChartHint", 4, "ngIf"], ["hint", ""], [1, "item"], [1, "name"], [1, "axes", 3, "verticalLines", "horizontalLines", "axisXLabels", "tuiLineChartHint"], [4, "ngIf", "ngIfElse"], ["line", ""], ["class", "chart", 3, "height", "value", 4, "ngFor", "ngForOf"], [1, "chart", 3, "height", "value"], ["class", "chart", 3, "height", "width", "value", 4, "ngFor", "ngForOf"], [1, "chart", 3, "height", "width", "value"], [1, "tui-space_bottom-2"], [1, "value"]], template: function TuiLineDaysChartExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tui-notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nStart"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tui-input-date-range", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TuiLineDaysChartExample2_Template_tui_input_date_range_ngModelChange_4_listener($event) { return ctx.data = $event; })("ngModelChange", function TuiLineDaysChartExample2_Template_tui_input_date_range_ngModelChange_4_listener($event) { return ctx.onDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "tui-input-date-range", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TuiLineDaysChartExample2_Template_tui_input_date_range_ngModelChange_6_listener($event) { return ctx.show = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Visible range ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TuiLineDaysChartExample2_span_9_Template, 3, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TuiLineDaysChartExample2_tui_axes_10_Template, 4, 6, "tui-axes", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, TuiLineDaysChartExample2_ng_template_13_Template, 5, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxLength", ctx.maxLength)("ngModel", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxLength", ctx.maxLength)("ngModel", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.days);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 8, ctx.show)));
    } }, directives: [_core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__["TuiNotificationComponent"], _kit_components_input_date_range_input_date_range_component__WEBPACK_IMPORTED_MODULE_5__["TuiInputDateRangeComponent"], _kit_components_input_date_range_input_date_range_directive__WEBPACK_IMPORTED_MODULE_6__["TuiInputDateRangeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_9__["TuiAxesComponent"], _addon_charts_components_line_chart_line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_10__["TuiLineChartHintDirective"], _addon_charts_components_line_days_chart_line_days_chart_hint_directive__WEBPACK_IMPORTED_MODULE_11__["TuiLineDaysChartHintDirective"], _addon_charts_components_line_days_chart_line_days_chart_component__WEBPACK_IMPORTED_MODULE_12__["TuiLineDaysChartComponent"], _addon_charts_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_13__["TuiLineChartComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _pipe__WEBPACK_IMPORTED_MODULE_14__["LabelsPipe"], _cdk_pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["TuiFilterPipe"], _cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_16__["TuiMapperPipe"]], styles: [".axes[_ngcontent-%COMP%] {\n  height: 12.5rem;\n}\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n}\n.controls[_ngcontent-%COMP%]   .b-form[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.legend[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.item[_ngcontent-%COMP%] {\n  color: var(--tui-support-01);\n  display: flex;\n  align-items: center;\n  margin: 0 0.75rem;\n}\n.item[_ngcontent-%COMP%]:first-child {\n  color: var(--tui-support-08);\n}\n.item[_ngcontent-%COMP%]:last-child {\n  color: var(--tui-support-12);\n}\n.item[_ngcontent-%COMP%]:before {\n  content: '';\n  border-bottom: 0.125rem solid;\n  width: 1rem;\n  margin-right: 0.5rem;\n}\n.name[_ngcontent-%COMP%] {\n  color: var(--tui-text-01);\n}\n.value[_ngcontent-%COMP%] {\n  color: var(--tui-text-01-night);\n}\n.chart[_ngcontent-%COMP%] {\n  color: var(--tui-support-01);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.chart[_ngcontent-%COMP%]:first-child {\n  color: var(--tui-support-08);\n}\n.chart[_ngcontent-%COMP%]:last-child {\n  color: var(--tui-support-12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2xpbmUtZGF5cy1jaGFydC9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NoYXJ0cy9saW5lLWRheXMtY2hhcnQvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL21peGlucy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDU0Q7RUFDSSxlQUFBO0FEUEo7QUNVQTtFQUNJLGFBQUE7QURSSjtBQ09BO0VBSVEsT0FBQTtBRFJSO0FDWUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRFZKO0FDYUE7RUE3QkksNEJBQUE7RUErQkEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURYSjtBQ3BCSTtFQUNJLDRCQUFBO0FEc0JSO0FDbkJJO0VBQ0ksNEJBQUE7QURxQlI7QUNPSTtFQUNJLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBRExSO0FDU0E7RUFDSSx5QkFBQTtBRFBKO0FDVUE7RUFDSSwrQkFBQTtBRFJKO0FDV0E7RUFuREksNEJBQUE7RUM0QkEsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUdJLFdBQUE7RUFDQSxZQUFBO0FGY1I7QUM5Q0k7RUFDSSw0QkFBQTtBRGdEUjtBQzdDSTtFQUNJLDRCQUFBO0FEK0NSIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2xpbmUtZGF5cy1jaGFydC9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG4uYXhlcyB7XG4gIGhlaWdodDogMTIuNXJlbTtcbn1cbi5jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udHJvbHMgLmItZm9ybSB7XG4gIGZsZXg6IDE7XG59XG4ubGVnZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaXRlbSB7XG4gIGNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC0wMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwLjc1cmVtO1xufVxuLml0ZW06Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtMDgpO1xufVxuLml0ZW06bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC0xMik7XG59XG4uaXRlbTpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgYm9yZGVyLWJvdHRvbTogMC4xMjVyZW0gc29saWQ7XG4gIHdpZHRoOiAxcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbn1cbi5uYW1lIHtcbiAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKTtcbn1cbi52YWx1ZSB7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMS1uaWdodCk7XG59XG4uY2hhcnQge1xuICBjb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtMDEpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jaGFydDpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC0wOCk7XG59XG4uY2hhcnQ6bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC0xMik7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5jb2xvcigpIHtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXN1cHBvcnQtMDEpO1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10dWktc3VwcG9ydC0wOCk7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS1zdXBwb3J0LTEyKTtcbiAgICB9XG59XG5cbi5heGVzIHtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG59XG5cbi5jb250cm9scyB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5iLWZvcm0ge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbn1cblxuLmxlZ2VuZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaXRlbSB7XG4gICAgLmNvbG9yKCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMCAwLjc1cmVtO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4xMjVyZW0gc29saWQ7XG4gICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICB9XG59XG5cbi5uYW1lIHtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpO1xufVxuXG4udmFsdWUge1xuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMS1uaWdodCk7XG59XG5cbi5jaGFydCB7XG4gICAgLmNvbG9yKCk7XG4gICAgLmZ1bGxzaXplKCk7XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiPure"]
], TuiLineDaysChartExample2.prototype, "getWidth", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiPure"]
], TuiLineDaysChartExample2.prototype, "getDate", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiPure"]
], TuiLineDaysChartExample2.prototype, "computeRange", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiPure"]
], TuiLineDaysChartExample2.prototype, "computeData", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiLineDaysChartExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-line-days-chart-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], null, { getWidth: [], getDate: [], computeRange: [], computeData: [] }); })();


/***/ }),

/***/ "./src/modules/charts/line-days-chart/examples/2/pipe.ts":
/*!***************************************************************!*\
  !*** ./src/modules/charts/line-days-chart/examples/2/pipe.ts ***!
  \***************************************************************/
/*! exports provided: LabelsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelsPipe", function() { return LabelsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");







// @dynamic
class LabelsPipe {
    constructor(months$) {
        this.months$ = months$;
    }
    transform({ from, to }) {
        const length = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiDay"].lengthBetween(from, to);
        if (length > 90) {
            return this.months$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(months => Array.from({ length: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiMonth"].lengthBetween(from, to) + 1 }, (_, i) => months[from.append({ month: i }).month])));
        }
        const range = Array.from({ length }, (_, day) => from.append({ day }));
        const mondays = onlyMondays(range);
        const days = range.map(String);
        if (length > 60) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(even(mondays));
        }
        if (length > 14) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(mondays);
        }
        if (length > 7) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(even(days));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(days);
    }
}
LabelsPipe.ɵfac = function LabelsPipe_Factory(t) { return new (t || LabelsPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TUI_MONTHS"])); };
LabelsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "labels", type: LabelsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabelsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: `labels`,
            }]
    }], function () { return [{ type: rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TUI_MONTHS"]]
            }] }]; }, null); })();
function onlyMondays(range) {
    return range.filter(day => !day.dayOfWeek()).map(String);
}
function even(array) {
    return array.filter((_, i) => !(i % 2));
}


/***/ }),

/***/ "./src/modules/charts/line-days-chart/line-days-chart.component.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/charts/line-days-chart/line-days-chart.component.ts ***!
  \*************************************************************************/
/*! exports provided: ExampleTuiLineDaysChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiLineDaysChartComponent", function() { return ExampleTuiLineDaysChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/charts/line-days-chart/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/charts/line-days-chart/examples/2/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-charts/components/axes/axes.component */ "../addon-charts/components/axes/axes.component.ts");
/* harmony import */ var _addon_charts_components_line_days_chart_line_days_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-charts/components/line-days-chart/line-days-chart.component */ "../addon-charts/components/line-days-chart/line-days-chart.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");



















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_590759144044987818$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__1 = goog.getMsg("Line chart but for days");
    I18N_0 = MSG_EXTERNAL_590759144044987818$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟8b3686ee0181ab81f9ff51025cf35b0a03e625e7␟590759144044987818:Line chart but for days`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__3 = goog.getMsg("Basic");
    I18N_2 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c4 = ["heading", I18N_2];
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7049130908974374044$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__6 = goog.getMsg("Complex");
    I18N_5 = MSG_EXTERNAL_7049130908974374044$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__6;
}
else {
    I18N_5 = $localize `:␟e75362b1b5b0d9038fcafc9670ef18bba17e61d0␟7049130908974374044:Complex`;
}
const _c7 = ["heading", I18N_5];
function ExampleTuiLineDaysChartComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](3, _c4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "tui-line-days-chart-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](6, _c7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "tui-line-days-chart-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
} }
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4740076445307023096$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___9 = goog.getMsg(" Show dots on chart ");
    I18N_8 = MSG_EXTERNAL_4740076445307023096$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___9;
}
else {
    I18N_8 = $localize `:␟c4d83e70435953f62ccae3cbf6016420df475424␟4740076445307023096: Show dots on chart `;
}
function ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_8);
} }
var I18N_10;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6338178794566893901$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___11 = goog.getMsg(" Content of hint for hover. It has {$startTagCode}$implicit{$closeTagCode} in context with a tuple {$startTagCode}[TuiDay, number]{$closeTagCode}", { "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]", "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]" });
    I18N_10 = MSG_EXTERNAL_6338178794566893901$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___11;
}
else {
    I18N_10 = $localize `:␟bedcb3b37d5f24d2f77a8c3cb483fdf13759efd7␟6338178794566893901: Content of hint for hover. It has ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_TAG_CODE:$implicit${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_TAG_CODE: in context with a tuple ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_TAG_CODE:[TuiDay, number]${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_TAG_CODE:`;
}
I18N_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_10);
function ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4329060505650601384$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___13 = goog.getMsg(" Axis Y range, pixel scale is 1:1 ");
    I18N_12 = MSG_EXTERNAL_4329060505650601384$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___13;
}
else {
    I18N_12 = $localize `:␟1148b851b9d07a503fe83074185fada4c56bc932␟4329060505650601384: Axis Y range, pixel scale is 1:1 `;
}
function ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_12);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9084820970498059965$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___15 = goog.getMsg(" Start of Y axis ");
    I18N_14 = MSG_EXTERNAL_9084820970498059965$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟f33f8b3f2cfd7ef519194cc1ae13fc8fb91fb8d7␟9084820970498059965: Start of Y axis `;
}
function ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_14);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7622132382477188848$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___17 = goog.getMsg(" Smoothing factor from 0 to 99 ");
    I18N_16 = MSG_EXTERNAL_7622132382477188848$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟dbcff3658adbc7241a4e120d0403b9b59203cf6f␟7622132382477188848: Smoothing factor from 0 to 99 `;
}
function ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_16);
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_620827304048157009$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___19 = goog.getMsg(" Array of data ");
    I18N_18 = MSG_EXTERNAL_620827304048157009$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟2eb20b3adec45476e892d48624603eec29f04ca7␟620827304048157009: Array of data `;
}
function ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_18);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8840512580092681625$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___21 = goog.getMsg(" Function to stringify a value number to a string in axis X hint ");
    I18N_20 = MSG_EXTERNAL_8840512580092681625$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟a95376fd00f2c7de89ef1205191f686e9bb93ceb␟8840512580092681625: Function to stringify a value number to a string in axis X hint `;
}
function ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_20);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8439308556823064311$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___23 = goog.getMsg(" Function to stringify a value number to a string in axis Y hint ");
    I18N_22 = MSG_EXTERNAL_8439308556823064311$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS___23;
}
else {
    I18N_22 = $localize `:␟aa03eea8f292367391947b1ee6d45d8e5fe1c884␟8439308556823064311: Function to stringify a value number to a string in axis Y hint `;
}
function ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_22);
} }
const _c24 = function () { return []; };
function ExampleTuiLineDaysChartComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-axes", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-line-days-chart", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineDaysChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.dots = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineDaysChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.hintContent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineDaysChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.height = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineDaysChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.y = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineDaysChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.smoothingFactor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineDaysChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineDaysChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.xStringify = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExampleTuiLineDaysChartComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineDaysChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.yStringify = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("verticalLines", 3)("horizontalLines", 4)("axisXLabels", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 23, ctx_r1.labels$) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c24));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.value)("y", ctx_r1.y)("height", ctx_r1.height)("hintContent", ctx_r1.hintContent)("xStringify", ctx_r1.xStringify)("yStringify", ctx_r1.yStringify)("smoothingFactor", ctx_r1.smoothingFactor)("dots", ctx_r1.dots);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.dots);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 25, ctx_r1.hintContentVariants$))("documentationPropertyValue", ctx_r1.hintContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.smoothingFactor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 27, ctx_r1.xStringifyVariants$))("documentationPropertyValue", ctx_r1.xStringify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.yStringifyVariants)("documentationPropertyValue", ctx_r1.yStringify);
} }
var I18N_25;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5226796676451500758$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__26 = goog.getMsg(" Import {$startTagCode}TuiLineDaysChartModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_25 = MSG_EXTERNAL_5226796676451500758$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__26;
}
else {
    I18N_25 = $localize `:␟3faf4a45d660c91f821e2f11c0184ec80a25404a␟5226796676451500758: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiLineDaysChartModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_27;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__28 = goog.getMsg("Add to the template:");
    I18N_27 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_CHARTS_LINE_DAYS_CHART_LINE_DAYS_CHART_COMPONENT_TS__28;
}
else {
    I18N_27 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiLineDaysChartComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
// @dynamic
class ExampleTuiLineDaysChartComponent {
    constructor(months$) {
        this.months$ = months$;
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-days-chart/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-days-chart/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-days-chart/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-days-chart/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-days-chart/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-days-chart/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-days-chart/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-days-chart/examples/2/index.less")),
            'pipe.ts': __webpack_require__.e(/*! import() | !raw-loader!-examples-2-pipe-ts */ "!!raw-loader!-examples-2-pipe-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/pipe.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-days-chart/examples/2/pipe.ts")),
        };
        this.valueVariants = [
            new Array(91)
                .fill(0)
                .reduce((array, _, i) => [
                ...array,
                [
                    new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](2020, 0, 1).append({ day: i }),
                    (i ? array[i - 1][1] : 100) + Math.random() * 20 - 10,
                ],
            ], []),
            [
                [new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](2020, 1, 10), 10],
                [new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](2020, 1, 15), 150],
                [new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](2020, 1, 17), 10],
                [new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](2020, 1, 20), 10],
                [new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](2020, 1, 25), 150],
                [new _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiDay"](2020, 1, 27), 10],
            ],
        ];
        this.value = this.valueVariants[0];
        this.labels$ = this.months$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(months => Array.from({ length: 3 }, (_, i) => months[i])));
        this.yStringifyVariants = [
            y => `${(10 * y).toLocaleString(`en-US`, { maximumFractionDigits: 0 })} $`,
        ];
        this.xStringifyVariants$ = this.months$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(months => [({ month, day }) => `${months[month]}, ${day}`]));
        this.hintContentVariants$ = this.months$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(months => [
            ``,
            ({ $implicit }) => `${months[$implicit[0].month]}, ${$implicit[0].day}\n${(10 * $implicit[1]).toLocaleString(`en-US`, {
                maximumFractionDigits: 0,
            })} $`,
        ]));
        this.yStringify = null;
        this.xStringify = null;
        this.hintContent = ``;
        this.dots = false;
        this.smoothingFactor = 0;
        this.y = 0;
        this.height = 200;
    }
}
ExampleTuiLineDaysChartComponent.ɵfac = function ExampleTuiLineDaysChartComponent_Factory(t) { return new (t || ExampleTuiLineDaysChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TUI_MONTHS"])); };
ExampleTuiLineDaysChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiLineDaysChartComponent, selectors: [["example-tui-line-days-chart"]], decls: 4, vars: 0, consts: [["header", "LineDaysChart", "package", "ADDON-CHARTS", "type", "components"], ["pageTab", ""], ["id", "base", 3, "content", 6, "heading"], ["id", "complex", 3, "content", 6, "heading"], [1, "axes", 3, "verticalLines", "horizontalLines", "axisXLabels"], [3, "value", "y", "height", "hintContent", "xStringify", "yStringify", "smoothingFactor", "dots"], ["documentationPropertyName", "dots", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hintContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "height", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "y", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "smoothingFactor", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "[TuiDay, number][]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "xStringify", "documentationPropertyMode", "input", "documentationPropertyType", "TuiStringHandler<TuiDay> | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "yStringify", "documentationPropertyMode", "input", "documentationPropertyType", "TuiStringHandler<number> | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiLineDaysChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiLineDaysChartComponent_ng_template_1_Template, 8, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiLineDaysChartComponent_ng_template_2_Template, 15, 30, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiLineDaysChartComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_8__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_9__["TuiLineDaysChartExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_10__["TuiLineDaysChartExample2"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDemoComponent"], _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_12__["TuiAxesComponent"], _addon_charts_components_line_days_chart_line_days_chart_component__WEBPACK_IMPORTED_MODULE_13__["TuiLineDaysChartComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_14__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_15__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_16__["TuiDocCodeComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"]], styles: [".axes[_ngcontent-%COMP%] {\n  height: 12.5rem;\n  width: 45.5rem;\n  color: #bc71c9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2xpbmUtZGF5cy1jaGFydC9saW5lLWRheXMtY2hhcnQuc3R5bGUubGVzcyIsInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2xpbmUtZGF5cy1jaGFydC9saW5lLWRheXMtY2hhcnQuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2xpbmUtZGF5cy1jaGFydC9saW5lLWRheXMtY2hhcnQuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5heGVzIHtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG4gICAgd2lkdGg6IDQ1LjVyZW07XG4gICAgY29sb3I6ICNiYzcxYzk7XG59XG4iLCIuYXhlcyB7XG4gIGhlaWdodDogMTIuNXJlbTtcbiAgd2lkdGg6IDQ1LjVyZW07XG4gIGNvbG9yOiAjYmM3MWM5O1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiLineDaysChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-line-days-chart`,
                templateUrl: `./line-days-chart.template.html`,
                styleUrls: [`./line-days-chart.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], function () { return [{ type: rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TUI_MONTHS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/modules/charts/line-days-chart/line-days-chart.module.ts":
/*!**********************************************************************!*\
  !*** ./src/modules/charts/line-days-chart/line-days-chart.module.ts ***!
  \**********************************************************************/
/*! exports provided: ExampleTuiLineDaysChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiLineDaysChartModule", function() { return ExampleTuiLineDaysChartModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-charts */ "../addon-charts/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/charts/line-days-chart/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/charts/line-days-chart/examples/2/index.ts");
/* harmony import */ var _examples_2_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/2/pipe */ "./src/modules/charts/line-days-chart/examples/2/pipe.ts");
/* harmony import */ var _line_days_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./line-days-chart.component */ "./src/modules/charts/line-days-chart/line-days-chart.component.ts");















class ExampleTuiLineDaysChartModule {
}
ExampleTuiLineDaysChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiLineDaysChartModule });
ExampleTuiLineDaysChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiLineDaysChartModule_Factory(t) { return new (t || ExampleTuiLineDaysChartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiAxesModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiSelectModule"],
            _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiLineChartModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiMapperPipeModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiNotificationModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiFilterPipeModule"],
            _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiLineDaysChartModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiInputDateRangeModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_line_days_chart_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiLineDaysChartComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiLineDaysChartModule, { declarations: [_line_days_chart_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiLineDaysChartComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiLineDaysChartExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiLineDaysChartExample2"],
        _examples_2_pipe__WEBPACK_IMPORTED_MODULE_11__["LabelsPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiAxesModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiSelectModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiLineChartModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiMapperPipeModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiNotificationModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiFilterPipeModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiLineDaysChartModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiInputDateRangeModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_line_days_chart_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiLineDaysChartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiLineDaysChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiAxesModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiSelectModule"],
                    _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiLineChartModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiMapperPipeModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_7__["TuiNotificationModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__["TuiFilterPipeModule"],
                    _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiLineDaysChartModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_8__["TuiInputDateRangeModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_line_days_chart_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiLineDaysChartComponent"])),
                ],
                declarations: [
                    _line_days_chart_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiLineDaysChartComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_9__["TuiLineDaysChartExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_10__["TuiLineDaysChartExample2"],
                    _examples_2_pipe__WEBPACK_IMPORTED_MODULE_11__["LabelsPipe"],
                ],
                exports: [_line_days_chart_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiLineDaysChartComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=charts-line-days-chart-line-days-chart-module.js.map