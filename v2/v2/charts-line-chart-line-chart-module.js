(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-line-chart-line-chart-module"],{

/***/ "./src/modules/charts/line-chart/examples/1/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/charts/line-chart/examples/1/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiLineChartExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartExample1", function() { return TuiLineChartExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/axes/axes.component */ "../addon-charts/components/axes/axes.component.ts");
/* harmony import */ var _addon_charts_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/line-chart/line-chart.component */ "../addon-charts/components/line-chart/line-chart.component.ts");







class TuiLineChartExample1 {
    constructor() {
        this.value = [
            [50, 50],
            [100, 75],
            [150, 50],
            [200, 150],
            [250, 155],
            [300, 190],
            [350, 90],
        ];
        this.stringify = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TUI_DEFAULT_STRINGIFY"];
    }
}
TuiLineChartExample1.ɵfac = function TuiLineChartExample1_Factory(t) { return new (t || TuiLineChartExample1)(); };
TuiLineChartExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiLineChartExample1, selectors: [["tui-line-chart-example-1"]], decls: 2, vars: 10, consts: [[1, "axes", 3, "verticalLines", "horizontalLines"], [3, "x", "y", "width", "height", "dots", "value", "xStringify", "yStringify"]], template: function TuiLineChartExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-axes", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-line-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("verticalLines", 4)("horizontalLines", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 0)("y", 0)("width", 400)("height", 200)("dots", true)("value", ctx.value)("xStringify", ctx.stringify)("yStringify", ctx.stringify);
    } }, directives: [_addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_4__["TuiAxesComponent"], _addon_charts_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_5__["TuiLineChartComponent"]], styles: [".axes[_ngcontent-%COMP%] {\n  height: 12.5rem;\n  width: 25rem;\n  color: #bc71c9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2xpbmUtY2hhcnQvZXhhbXBsZXMvMS9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvbGluZS1jaGFydC9leGFtcGxlcy8xL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NoYXJ0cy9saW5lLWNoYXJ0L2V4YW1wbGVzLzEvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5heGVzIHtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG4gICAgd2lkdGg6IDI1cmVtO1xuICAgIGNvbG9yOiAjYmM3MWM5O1xufVxuIiwiLmF4ZXMge1xuICBoZWlnaHQ6IDEyLjVyZW07XG4gIHdpZHRoOiAyNXJlbTtcbiAgY29sb3I6ICNiYzcxYzk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiLineChartExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-line-chart-example-1`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/line-chart/examples/2/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/charts/line-chart/examples/2/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiLineChartExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartExample2", function() { return TuiLineChartExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/axes/axes.component */ "../addon-charts/components/axes/axes.component.ts");
/* harmony import */ var _addon_charts_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/line-chart/line-chart.component */ "../addon-charts/components/line-chart/line-chart.component.ts");






class TuiLineChartExample2 {
    constructor() {
        this.value = [
            [50, 50],
            [100, 75],
            [150, 50],
            [200, 150],
            [250, 155],
            [300, 190],
            [350, 90],
        ];
    }
}
TuiLineChartExample2.ɵfac = function TuiLineChartExample2_Factory(t) { return new (t || TuiLineChartExample2)(); };
TuiLineChartExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiLineChartExample2, selectors: [["tui-line-chart-example-2"]], decls: 2, vars: 9, consts: [[1, "axes", 3, "verticalLines", "horizontalLines"], [3, "x", "y", "width", "height", "smoothingFactor", "value", "filled"]], template: function TuiLineChartExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-axes", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-line-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("verticalLines", 4)("horizontalLines", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 0)("y", 0)("width", 400)("height", 200)("smoothingFactor", 50)("value", ctx.value)("filled", true);
    } }, directives: [_addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_3__["TuiAxesComponent"], _addon_charts_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__["TuiLineChartComponent"]], styles: [".axes[_ngcontent-%COMP%] {\n  height: 12.5rem;\n  width: 25rem;\n  color: #bc71c9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2xpbmUtY2hhcnQvZXhhbXBsZXMvMi9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvbGluZS1jaGFydC9leGFtcGxlcy8yL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NoYXJ0cy9saW5lLWNoYXJ0L2V4YW1wbGVzLzIvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5heGVzIHtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG4gICAgd2lkdGg6IDI1cmVtO1xuICAgIGNvbG9yOiAjYmM3MWM5O1xufVxuIiwiLmF4ZXMge1xuICBoZWlnaHQ6IDEyLjVyZW07XG4gIHdpZHRoOiAyNXJlbTtcbiAgY29sb3I6ICNiYzcxYzk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiLineChartExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-line-chart-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/line-chart/examples/3/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/charts/line-chart/examples/3/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiLineChartExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartExample3", function() { return TuiLineChartExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/axes/axes.component */ "../addon-charts/components/axes/axes.component.ts");
/* harmony import */ var _addon_charts_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/line-chart/line-chart.component */ "../addon-charts/components/line-chart/line-chart.component.ts");






class TuiLineChartExample3 {
    constructor() {
        this.dotted = [
            [50, 50],
            [100, 75],
            [150, 50],
        ];
        this.solid = [
            [150, 50],
            [200, 150],
            [250, 155],
        ];
        this.dashed = [
            [250, 155],
            [300, 190],
            [350, 90],
        ];
    }
}
TuiLineChartExample3.ɵfac = function TuiLineChartExample3_Factory(t) { return new (t || TuiLineChartExample3)(); };
TuiLineChartExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiLineChartExample3, selectors: [["tui-line-chart-example-3"]], decls: 4, vars: 20, consts: [[1, "axes", 3, "verticalLines", "horizontalLines"], [1, "chart", "chart_dotted", 3, "dots", "x", "y", "width", "height", "value"], [1, "chart", 3, "dots", "x", "y", "width", "height", "value"], [1, "chart", "chart_dashed", 3, "dots", "x", "y", "width", "height", "value"]], template: function TuiLineChartExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-axes", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-line-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-line-chart", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-line-chart", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("verticalLines", 4)("horizontalLines", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dots", true)("x", 0)("y", 0)("width", 400)("height", 200)("value", ctx.dotted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dots", true)("x", 0)("y", 0)("width", 400)("height", 200)("value", ctx.solid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dots", true)("x", 0)("y", 0)("width", 400)("height", 200)("value", ctx.dashed);
    } }, directives: [_addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_3__["TuiAxesComponent"], _addon_charts_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__["TuiLineChartComponent"]], styles: [".axes[_ngcontent-%COMP%] {\n  height: 12.5rem;\n  width: 25rem;\n  color: #bc71c9;\n}\n.chart[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.chart_dotted[_ngcontent-%COMP%] {\n  stroke-dasharray: 2;\n}\n.chart_dashed[_ngcontent-%COMP%] {\n  stroke-dasharray: 4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2xpbmUtY2hhcnQvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvbGluZS1jaGFydC9leGFtcGxlcy8zL2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDSjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ0FKO0FERUk7RUFDSSxtQkFBQTtBQ0FSO0FER0k7RUFDSSxtQkFBQTtBQ0RSIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2xpbmUtY2hhcnQvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmF4ZXMge1xuICAgIGhlaWdodDogMTIuNXJlbTtcbiAgICB3aWR0aDogMjVyZW07XG4gICAgY29sb3I6ICNiYzcxYzk7XG59XG5cbi5jaGFydCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJl9kb3R0ZWQge1xuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAyO1xuICAgIH1cblxuICAgICZfZGFzaGVkIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogNDtcbiAgICB9XG59XG4iLCIuYXhlcyB7XG4gIGhlaWdodDogMTIuNXJlbTtcbiAgd2lkdGg6IDI1cmVtO1xuICBjb2xvcjogI2JjNzFjOTtcbn1cbi5jaGFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuLmNoYXJ0X2RvdHRlZCB7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDI7XG59XG4uY2hhcnRfZGFzaGVkIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogNDtcbn1cbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiLineChartExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-line-chart-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/line-chart/examples/4/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/charts/line-chart/examples/4/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiLineChartExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartExample4", function() { return TuiLineChartExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/axes/axes.component */ "../addon-charts/components/axes/axes.component.ts");
/* harmony import */ var _addon_charts_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/line-chart/line-chart.component */ "../addon-charts/components/line-chart/line-chart.component.ts");






function TuiLineChartExample4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r2 = ctx.$implicit;
    const index_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Vertical: ", value_r2[0], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Horizontal: ", value_r2[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("index: ", index_r3, "");
} }
class TuiLineChartExample4 {
    constructor() {
        this.value = [
            [50, 50],
            [100, 75],
            [150, 50],
            [200, 150],
            [250, 155],
            [300, 190],
            [350, 90],
        ];
        this.singleValue = [[200, 150]];
        this.hint = ({ $implicit }) => `Vertical: ${$implicit[1]}\nHorizontal: ${$implicit[0]}`;
    }
}
TuiLineChartExample4.ɵfac = function TuiLineChartExample4_Factory(t) { return new (t || TuiLineChartExample4)(); };
TuiLineChartExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiLineChartExample4, selectors: [["tui-line-chart-example-4"]], decls: 6, vars: 17, consts: [[1, "axes", 3, "verticalLines", "horizontalLines"], [3, "x", "y", "width", "height", "value", "hintContent"], [1, "axes", "tui-space_top-10", 3, "verticalLines", "horizontalLines"], [3, "x", "y", "width", "height", "value", "dots", "hintContent"], ["hintContent", ""]], template: function TuiLineChartExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-axes", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tui-line-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-axes", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "tui-line-chart", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TuiLineChartExample4_ng_template_4_Template, 6, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("verticalLines", 4)("horizontalLines", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 0)("y", 0)("width", 400)("height", 200)("value", ctx.value)("hintContent", ctx.hint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("verticalLines", 4)("horizontalLines", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 0)("y", 0)("width", 400)("height", 200)("value", ctx.singleValue)("dots", true)("hintContent", _r0);
    } }, directives: [_addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_3__["TuiAxesComponent"], _addon_charts_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__["TuiLineChartComponent"]], styles: [".axes[_ngcontent-%COMP%] {\n  height: 12.5rem;\n  width: 25rem;\n  color: #bc71c9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2xpbmUtY2hhcnQvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvbGluZS1jaGFydC9leGFtcGxlcy80L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NoYXJ0cy9saW5lLWNoYXJ0L2V4YW1wbGVzLzQvaW5kZXgubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5heGVzIHtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG4gICAgd2lkdGg6IDI1cmVtO1xuICAgIGNvbG9yOiAjYmM3MWM5O1xufVxuIiwiLmF4ZXMge1xuICBoZWlnaHQ6IDEyLjVyZW07XG4gIHdpZHRoOiAyNXJlbTtcbiAgY29sb3I6ICNiYzcxYzk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiLineChartExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-line-chart-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/line-chart/examples/5/index.ts":
/*!***********************************************************!*\
  !*** ./src/modules/charts/line-chart/examples/5/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiLineChartExample5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartExample5", function() { return TuiLineChartExample5; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/axes/axes.component */ "../addon-charts/components/axes/axes.component.ts");
/* harmony import */ var _addon_charts_components_line_chart_line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/line-chart/line-chart-hint.directive */ "../addon-charts/components/line-chart/line-chart-hint.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _addon_charts_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../addon-charts/components/line-chart/line-chart.component */ "../addon-charts/components/line-chart/line-chart.component.ts");








function TuiLineChartExample5_tui_line_chart_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-line-chart", 2);
} if (rf & 2) {
    const value_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 0)("y", 0)("width", 400)("height", 200)("value", value_r1);
} }
class TuiLineChartExample5 {
    constructor() {
        this.values = [
            [
                [50, 50],
                [100, 75],
                [150, 50],
                [200, 150],
                [250, 155],
                [300, 190],
                [350, 90],
            ],
            [
                [50, 40],
                [100, 60],
                [150, 90],
                [200, 120],
                [250, 150],
                [300, 110],
                [350, 130],
            ],
            [
                [50, 30],
                [100, 90],
                [150, 80],
                [200, 50],
                [250, 130],
                [300, 190],
                [350, 150],
            ],
        ];
        this.hint = ({ $implicit, }) => `${$implicit[0][0]} items:\n\n${$implicit.map(([_, y]) => y).join(`$\n`)}$`;
    }
}
TuiLineChartExample5.ɵfac = function TuiLineChartExample5_Factory(t) { return new (t || TuiLineChartExample5)(); };
TuiLineChartExample5.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiLineChartExample5, selectors: [["tui-line-chart-example-5"]], decls: 2, vars: 4, consts: [[1, "axes", 3, "verticalLines", "horizontalLines", "tuiLineChartHint"], ["class", "chart", 3, "x", "y", "width", "height", "value", 4, "ngFor", "ngForOf"], [1, "chart", 3, "x", "y", "width", "height", "value"]], template: function TuiLineChartExample5_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-axes", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiLineChartExample5_tui_line_chart_1_Template, 1, 5, "tui-line-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("verticalLines", 4)("horizontalLines", 2)("tuiLineChartHint", ctx.hint);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.values);
    } }, directives: [_addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_3__["TuiAxesComponent"], _addon_charts_components_line_chart_line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_4__["TuiLineChartHintDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _addon_charts_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_6__["TuiLineChartComponent"]], styles: [".axes[_ngcontent-%COMP%] {\n  height: 12.5rem;\n  width: 25rem;\n}\n.chart[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #ffb74c;\n}\n.chart[_ngcontent-%COMP%]:first-child {\n  color: #bc71c9;\n}\n.chart[_ngcontent-%COMP%]:last-child {\n  color: #4dc3f7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2xpbmUtY2hhcnQvZXhhbXBsZXMvNS9pbmRleC5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvbGluZS1jaGFydC9leGFtcGxlcy81L2luZGV4Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUNBSjtBREVJO0VBQ0ksY0FBQTtBQ0FSO0FER0k7RUFDSSxjQUFBO0FDRFIiLCJmaWxlIjoicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvbGluZS1jaGFydC9leGFtcGxlcy81L2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXhlcyB7XG4gICAgaGVpZ2h0OiAxMi41cmVtO1xuICAgIHdpZHRoOiAyNXJlbTtcbn1cblxuLmNoYXJ0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICNmZmI3NGM7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgY29sb3I6ICNiYzcxYzk7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgY29sb3I6ICM0ZGMzZjc7XG4gICAgfVxufVxuIiwiLmF4ZXMge1xuICBoZWlnaHQ6IDEyLjVyZW07XG4gIHdpZHRoOiAyNXJlbTtcbn1cbi5jaGFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNmZmI3NGM7XG59XG4uY2hhcnQ6Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogI2JjNzFjOTtcbn1cbi5jaGFydDpsYXN0LWNoaWxkIHtcbiAgY29sb3I6ICM0ZGMzZjc7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiLineChartExample5, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-line-chart-example-5`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/line-chart/line-chart.component.ts":
/*!***************************************************************!*\
  !*** ./src/modules/charts/line-chart/line-chart.component.ts ***!
  \***************************************************************/
/*! exports provided: ExampleTuiLineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiLineChartComponent", function() { return ExampleTuiLineChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/charts/line-chart/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/charts/line-chart/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/charts/line-chart/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/charts/line-chart/examples/4/index.ts");
/* harmony import */ var _examples_5_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/5/index */ "./src/modules/charts/line-chart/examples/5/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-charts/components/axes/axes.component */ "../addon-charts/components/axes/axes.component.ts");
/* harmony import */ var _addon_charts_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-charts/components/line-chart/line-chart.component */ "../addon-charts/components/line-chart/line-chart.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");

















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8543119714580512727$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__1 = goog.getMsg("Line");
    I18N_0 = MSG_EXTERNAL_8543119714580512727$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟af942a24234fa47efa01bf2d4236dad05131a5a0␟8543119714580512727:Line`;
}
const _c2 = ["heading", I18N_0];
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4272334652167271438$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__4 = goog.getMsg("Smooth");
    I18N_3 = MSG_EXTERNAL_4272334652167271438$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__4;
}
else {
    I18N_3 = $localize `:␟d98cf87828e8a5c956667d9a8b9c12145824ee0f␟4272334652167271438:Smooth`;
}
const _c5 = ["heading", I18N_3];
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2812108764688288077$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__7 = goog.getMsg("Dotted");
    I18N_6 = MSG_EXTERNAL_2812108764688288077$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟86baef6e3d5572968c0da4f1709f97c74190d36e␟2812108764688288077:Dotted`;
}
const _c8 = ["heading", I18N_6];
var I18N_9;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5135659169158832318$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__10 = goog.getMsg("Hint");
    I18N_9 = MSG_EXTERNAL_5135659169158832318$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__10;
}
else {
    I18N_9 = $localize `:␟1560319447dbaf27b0d1b06e594c573c85d89d96␟5135659169158832318:Hint`;
}
const _c11 = ["heading", I18N_9];
function ExampleTuiLineChartComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-example", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](1, _c2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-line-chart-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-example", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, _c5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-line-chart-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, _c8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "tui-line-chart-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](10, _c11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "tui-line-chart-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-line-chart-example-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example5);
} }
var I18N_12;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4740076445307023096$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___13 = goog.getMsg(" Show dots on chart ");
    I18N_12 = MSG_EXTERNAL_4740076445307023096$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___13;
}
else {
    I18N_12 = $localize `:␟c4d83e70435953f62ccae3cbf6016420df475424␟4740076445307023096: Show dots on chart `;
}
function ExampleTuiLineChartComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_12);
} }
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6311054337495080517$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___15 = goog.getMsg(" Filled with gradient ");
    I18N_14 = MSG_EXTERNAL_6311054337495080517$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___15;
}
else {
    I18N_14 = $localize `:␟9baeb452de4b3e87de2854d7d7299ae8e5349371␟6311054337495080517: Filled with gradient `;
}
function ExampleTuiLineChartComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_14);
} }
var I18N_16;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5098898074892729168$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___17 = goog.getMsg(" Content of hint for hover. It has {$startTagCode}$implicit{$closeTagCode} in context with a tuple {$startTagCode}[TuiPoint, number]{$closeTagCode}", { "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]", "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]" });
    I18N_16 = MSG_EXTERNAL_5098898074892729168$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___17;
}
else {
    I18N_16 = $localize `:␟962b0408fa0aa5b665e0e2ce9afa1c9d031023ec␟5098898074892729168: Content of hint for hover. It has ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_TAG_CODE:$implicit${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_TAG_CODE: in context with a tuple ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_TAG_CODE:[TuiPoint, number]${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_TAG_CODE:`;
}
I18N_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_16);
function ExampleTuiLineChartComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_18;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4329060505650601384$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___19 = goog.getMsg(" Axis Y range, pixel scale is 1:1 ");
    I18N_18 = MSG_EXTERNAL_4329060505650601384$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___19;
}
else {
    I18N_18 = $localize `:␟1148b851b9d07a503fe83074185fada4c56bc932␟4329060505650601384: Axis Y range, pixel scale is 1:1 `;
}
function ExampleTuiLineChartComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_18);
} }
var I18N_20;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_9084820970498059965$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___21 = goog.getMsg(" Start of Y axis ");
    I18N_20 = MSG_EXTERNAL_9084820970498059965$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___21;
}
else {
    I18N_20 = $localize `:␟f33f8b3f2cfd7ef519194cc1ae13fc8fb91fb8d7␟9084820970498059965: Start of Y axis `;
}
function ExampleTuiLineChartComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_20);
} }
var I18N_22;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8347772747848156772$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___23 = goog.getMsg(" Axis X range, pixel scale is 1:1 ");
    I18N_22 = MSG_EXTERNAL_8347772747848156772$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___23;
}
else {
    I18N_22 = $localize `:␟f4bba10989219b2e80f0c07cb583e5975596b805␟8347772747848156772: Axis X range, pixel scale is 1:1 `;
}
function ExampleTuiLineChartComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_22);
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_715212499497888512$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___25 = goog.getMsg(" Start of X axis ");
    I18N_24 = MSG_EXTERNAL_715212499497888512$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___25;
}
else {
    I18N_24 = $localize `:␟792c21644049857ec7d2abd21a018da6feeaf8f3␟715212499497888512: Start of X axis `;
}
function ExampleTuiLineChartComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_24);
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7622132382477188848$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___27 = goog.getMsg(" Smoothing factor from 0 to 99 ");
    I18N_26 = MSG_EXTERNAL_7622132382477188848$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___27;
}
else {
    I18N_26 = $localize `:␟dbcff3658adbc7241a4e120d0403b9b59203cf6f␟7622132382477188848: Smoothing factor from 0 to 99 `;
}
function ExampleTuiLineChartComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_26);
} }
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_620827304048157009$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___29 = goog.getMsg(" Array of data ");
    I18N_28 = MSG_EXTERNAL_620827304048157009$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___29;
}
else {
    I18N_28 = $localize `:␟2eb20b3adec45476e892d48624603eec29f04ca7␟620827304048157009: Array of data `;
}
function ExampleTuiLineChartComponent_ng_template_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_28);
} }
var I18N_30;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8840512580092681625$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___31 = goog.getMsg(" Function to stringify a value number to a string in axis X hint ");
    I18N_30 = MSG_EXTERNAL_8840512580092681625$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___31;
}
else {
    I18N_30 = $localize `:␟a95376fd00f2c7de89ef1205191f686e9bb93ceb␟8840512580092681625: Function to stringify a value number to a string in axis X hint `;
}
function ExampleTuiLineChartComponent_ng_template_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_30);
} }
var I18N_32;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8439308556823064311$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___33 = goog.getMsg(" Function to stringify a value number to a string in axis Y hint ");
    I18N_32 = MSG_EXTERNAL_8439308556823064311$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS___33;
}
else {
    I18N_32 = $localize `:␟aa03eea8f292367391947b1ee6d45d8e5fe1c884␟8439308556823064311: Function to stringify a value number to a string in axis Y hint `;
}
function ExampleTuiLineChartComponent_ng_template_2_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_32);
} }
function ExampleTuiLineChartComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tui-axes", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "tui-line-chart", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiLineChartComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.dots = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiLineChartComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.filled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiLineChartComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.hintContent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiLineChartComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.height = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiLineChartComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.y = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiLineChartComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.width = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiLineChartComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.x = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiLineChartComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.smoothingFactor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExampleTuiLineChartComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ExampleTuiLineChartComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.xStringify = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ExampleTuiLineChartComponent_ng_template_2_ng_template_14_Template, 1, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiLineChartComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.yStringify = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("verticalLines", 4)("horizontalLines", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", ctx_r1.x)("y", ctx_r1.y)("width", ctx_r1.width)("height", ctx_r1.height)("smoothingFactor", ctx_r1.smoothingFactor)("value", ctx_r1.value)("filled", ctx_r1.filled)("dots", ctx_r1.dots)("hintContent", ctx_r1.hintContent)("xStringify", ctx_r1.xStringify)("yStringify", ctx_r1.yStringify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.dots);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.filled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.hintContentVariants)("documentationPropertyValue", ctx_r1.hintContent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.height);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.y);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.x);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.smoothingFactor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.xStringifyVariants)("documentationPropertyValue", ctx_r1.xStringify);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.yStringifyVariants)("documentationPropertyValue", ctx_r1.yStringify);
} }
var I18N_34;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4207828476122780700$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__35 = goog.getMsg(" Import {$startTagCode}TuiLineChartModule{$closeTagCode} into a module where you want to use our component ", { "startTagCode": "\uFFFD#4\uFFFD", "closeTagCode": "\uFFFD/#4\uFFFD" });
    I18N_34 = MSG_EXTERNAL_4207828476122780700$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__35;
}
else {
    I18N_34 = $localize `:␟30a5ab566dceb0cacf69465ffadb6bd0c272f1c4␟4207828476122780700: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiLineChartModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
}
var I18N_36;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__37 = goog.getMsg("Add to the template:");
    I18N_36 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_CHARTS_LINE_CHART_LINE_CHART_COMPONENT_TS__37;
}
else {
    I18N_36 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiLineChartComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](3, I18N_34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "tui-doc-code", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](8, I18N_36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "tui-doc-code", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiLineChartComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/import/insert-template.md"));
        this.example1 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-ts */ "!!raw-loader!-examples-1-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/1/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/1/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-less */ "!!raw-loader!-examples-1-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/1/index.less")),
        };
        this.example2 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-ts */ "!!raw-loader!-examples-2-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/2/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/2/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/2/index.less")),
        };
        this.example3 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-ts */ "!!raw-loader!-examples-3-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/3/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/3/index.less")),
        };
        this.example4 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-ts */ "!!raw-loader!-examples-4-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/4/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/4/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/4/index.less")),
        };
        this.example5 = {
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-ts */ "!!raw-loader!-examples-5-index-ts").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.ts */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/5/index.ts")),
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-html */ "!!raw-loader!-examples-5-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/5/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-5-index-less */ "!!raw-loader!-examples-5-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/5/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/charts/line-chart/examples/5/index.less")),
        };
        this.value = [
            [50, 50],
            [100, 75],
            [150, 50],
            [200, 150],
            [250, 155],
            [300, 190],
            [350, 90],
        ];
        this.yStringifyVariants = [
            y => `${(10 * y).toLocaleString(`ru-RU`, { maximumFractionDigits: 0 })} $`,
        ];
        this.xStringifyVariants = [
            x => `${100 * x}`,
        ];
        this.hintContentVariants = [
            ``,
            ({ $implicit }) => `${100 * $implicit[0]}\n${(10 * $implicit[1]).toLocaleString(`ru-RU`, {
                maximumFractionDigits: 0,
            })} $`,
        ];
        this.yStringify = null;
        this.xStringify = null;
        this.hintContent = this.hintContentVariants[0];
        this.x = 0;
        this.y = 0;
        this.width = 400;
        this.height = 200;
        this.smoothingFactor = 0;
        this.filled = false;
        this.dots = false;
    }
}
ExampleTuiLineChartComponent.ɵfac = function ExampleTuiLineChartComponent_Factory(t) { return new (t || ExampleTuiLineChartComponent)(); };
ExampleTuiLineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiLineChartComponent, selectors: [["example-tui-line-chart"]], decls: 4, vars: 0, consts: [["header", "LineChart", "package", "ADDON-CHARTS", "type", "components"], ["pageTab", ""], ["id", "line", 3, "content", 6, "heading"], ["id", "curve", 3, "content", 6, "heading"], ["id", "dash", 3, "content", 6, "heading"], ["id", "hint", 3, "content", 6, "heading"], ["id", "multiple", "heading", "Several lines with hints", 3, "content"], [1, "axes", 3, "verticalLines", "horizontalLines"], [3, "x", "y", "width", "height", "smoothingFactor", "value", "filled", "dots", "hintContent", "xStringify", "yStringify"], ["documentationPropertyName", "dots", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "filled", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hintContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "height", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "y", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "width", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "x", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "smoothingFactor", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "TuiPoint[]"], ["documentationPropertyName", "xStringify", "documentationPropertyMode", "input", "documentationPropertyType", "TuiStringHandler<number> | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "yStringify", "documentationPropertyMode", "input", "documentationPropertyType", "TuiStringHandler<number> | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiLineChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiLineChartComponent_ng_template_1_Template, 14, 5, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiLineChartComponent_ng_template_2_Template, 15, 26, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiLineChartComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_2__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageTabConnectorDirective"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_4__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_5__["TuiLineChartExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_6__["TuiLineChartExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_7__["TuiLineChartExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_8__["TuiLineChartExample4"], _examples_5_index__WEBPACK_IMPORTED_MODULE_9__["TuiLineChartExample5"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_10__["TuiDocDemoComponent"], _addon_charts_components_axes_axes_component__WEBPACK_IMPORTED_MODULE_11__["TuiAxesComponent"], _addon_charts_components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["TuiLineChartComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_14__["TuiDocDocumentationPropertyConnectorDirective"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_15__["TuiDocCodeComponent"]], styles: [".axes[_ngcontent-%COMP%] {\n  height: 12.5rem;\n  width: 25rem;\n  color: #bc71c9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY2hhcnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5zdHlsZS5sZXNzIiwicHJvamVjdHMvZGVtby9zcmMvbW9kdWxlcy9jaGFydHMvbGluZS1jaGFydC9saW5lLWNoYXJ0LnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NoYXJ0cy9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5heGVzIHtcbiAgICBoZWlnaHQ6IDEyLjVyZW07XG4gICAgd2lkdGg6IDI1cmVtO1xuICAgIGNvbG9yOiAjYmM3MWM5O1xufVxuIiwiLmF4ZXMge1xuICBoZWlnaHQ6IDEyLjVyZW07XG4gIHdpZHRoOiAyNXJlbTtcbiAgY29sb3I6ICNiYzcxYzk7XG59XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiLineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-tui-line-chart`,
                templateUrl: `./line-chart.template.html`,
                styleUrls: [`./line-chart.style.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/charts/line-chart/line-chart.module.ts":
/*!************************************************************!*\
  !*** ./src/modules/charts/line-chart/line-chart.module.ts ***!
  \************************************************************/
/*! exports provided: ExampleTuiLineChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiLineChartModule", function() { return ExampleTuiLineChartModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-charts */ "../addon-charts/index.ts");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/charts/line-chart/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/charts/line-chart/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/charts/line-chart/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/charts/line-chart/examples/4/index.ts");
/* harmony import */ var _examples_5__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples/5 */ "./src/modules/charts/line-chart/examples/5/index.ts");
/* harmony import */ var _line_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./line-chart.component */ "./src/modules/charts/line-chart/line-chart.component.ts");















class ExampleTuiLineChartModule {
}
ExampleTuiLineChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiLineChartModule });
ExampleTuiLineChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiLineChartModule_Factory(t) { return new (t || ExampleTuiLineChartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiAxesModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
            _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiLineChartModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiLineChartComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiLineChartModule, { declarations: [_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiLineChartComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiLineChartExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiLineChartExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_9__["TuiLineChartExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_10__["TuiLineChartExample4"],
        _examples_5__WEBPACK_IMPORTED_MODULE_11__["TuiLineChartExample5"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiAxesModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
        _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiLineChartModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiLineChartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiLineChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiAxesModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["TuiNotificationModule"],
                    _taiga_ui_addon_charts__WEBPACK_IMPORTED_MODULE_4__["TuiLineChartModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["TuiAddonDocModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_5__["generateRoutes"])(_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiLineChartComponent"])),
                ],
                declarations: [
                    _line_chart_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiLineChartComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiLineChartExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiLineChartExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_9__["TuiLineChartExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_10__["TuiLineChartExample4"],
                    _examples_5__WEBPACK_IMPORTED_MODULE_11__["TuiLineChartExample5"],
                ],
                exports: [_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["ExampleTuiLineChartComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=charts-line-chart-line-chart-module.js.map