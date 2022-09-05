(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~charts-arc-chart-arc-chart-module~charts-axes-axes-module~charts-bar-bar-module~charts-bar-c~6e29fb7b"],{

/***/ "../addon-charts/components/arc-chart/arc-chart.component.ts":
/*!*******************************************************************!*\
  !*** ../addon-charts/components/arc-chart/arc-chart.component.ts ***!
  \*******************************************************************/
/*! exports provided: TuiArcChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiArcChartComponent", function() { return TuiArcChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../cdk/directives/repeat-times/repeat-times.directive */ "../cdk/directives/repeat-times/repeat-times.directive.ts");









const _c0 = ["arc"];
function TuiArcChartComponent__svg_svg_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx_r0.getInset(index_r1), "em")("left", ctx_r0.getInset(index_r1), "em")("width", ctx_r0.getDiameter(index_r1), "em")("height", ctx_r0.getDiameter(index_r1), "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("stroke", ctx_r0.getColor(index_r1))("stroke-dasharray", ctx_r0.getLength(index_r1), "em")("stroke-dashoffset", ctx_r0.initialized ? ctx_r0.getOffset(index_r1) : ctx_r0.getLength(index_r1), "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-value_inactive", ctx_r0.isInactive(index_r1));
} }
const _c1 = ["*"];
// 3/4 with 1% safety offset
const ARC = 0.76;
const SIZE = {
    m: 9,
    l: 11,
    xl: 16,
};
const WIDTH = {
    m: 0.25,
    l: 0.375,
    xl: 0.5625,
};
const GAP = {
    m: 0.125,
    l: 0.1875,
    xl: 0.25,
};
class TuiArcChartComponent {
    constructor(sanitizer, changeDetectorRef) {
        this.sanitizer = sanitizer;
        this.arcs$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"](1);
        this.value = [];
        this.size = `m`;
        this.max = 100;
        this.minLabel = `0%`;
        this.maxLabel = `100%`;
        this.activeItemIndex = NaN;
        this.activeItemIndexChange = this.arcs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(arcs => arcs.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(...arcsToIndex(arcs))))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(index => {
            this.activeItemIndex = index;
        }));
        this.initialized = false;
        // So initial animation works
        setTimeout(() => {
            this.initialized = true;
            changeDetectorRef.markForCheck();
        });
    }
    set arcs(arcs) {
        this.arcs$.next(arcs);
    }
    get width() {
        return SIZE[this.size];
    }
    get strokeWidth() {
        return WIDTH[this.size];
    }
    isInactive(index) {
        return !isNaN(this.activeItemIndex) && index !== this.activeItemIndex;
    }
    getInset(index) {
        return this.strokeWidth / 2 + index * (this.strokeWidth + GAP[this.size]);
    }
    getDiameter(index) {
        return SIZE[this.size] - 2 * this.getInset(index);
    }
    getLength(index) {
        return Math.PI * this.getDiameter(index) * ARC;
    }
    getOffset(index) {
        return this.getLength(index) * (1 - Math.min(this.value[index] / this.max, 1));
    }
    getColor(index) {
        return this.sanitizer.bypassSecurityTrustStyle(`var(--tui-chart-${index}, var(--tui-support-0${index + 1}))`);
    }
}
TuiArcChartComponent.ɵfac = function TuiArcChartComponent_Factory(t) { return new (t || TuiArcChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
TuiArcChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiArcChartComponent, selectors: [["tui-arc-chart"]], viewQuery: function TuiArcChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.arcs = _t);
    } }, hostVars: 7, hostBindings: function TuiArcChartComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-size", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width, "rem")("height", ctx.width, "rem")("stroke-width", ctx.strokeWidth, "rem");
    } }, inputs: { value: "value", size: "size", max: "max", minLabel: "minLabel", maxLabel: "maxLabel", activeItemIndex: "activeItemIndex" }, outputs: { activeItemIndexChange: "activeItemIndexChange" }, ngContentSelectors: _c1, decls: 9, vars: 3, consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "-100 -100 200 200", "focusable", "false", "class", "t-svg", 3, "top", "left", "width", "height", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], [1, "t-content"], [1, "t-wrapper"], [1, "t-percent"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "-100 -100 200 200", "focusable", "false", 1, "t-svg"], ["vector-effect", "non-scaling-stroke", "d", "M -70 70 A 100 100 0 1 1 70 70"], ["vector-effect", "non-scaling-stroke", "d", "M -70 70 A 100 100 0 1 1 70 70", 1, "t-value"], ["arc", ""]], template: function TuiArcChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiArcChartComponent__svg_svg_0_Template, 4, 16, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tuiRepeatTimesOf", ctx.value.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.minLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.maxLabel);
    } }, directives: [_cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_6__["TuiRepeatTimesDirective"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n  flex-shrink: 0;\n}\n.t-svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: visible;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  color: var(--tui-secondary);\n  font-size: 1rem;\n  pointer-events: none;\n}\n.t-value[_ngcontent-%COMP%] {\n  pointer-events: auto;\n  transition: stroke-dashoffset var(--tui-duration) ease-in-out, opacity var(--tui-duration) ease-in-out 0.1s;\n}\n.t-value_inactive[_ngcontent-%COMP%] {\n  transition-property: stroke-dashoffset, opacity;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  opacity: 0.16;\n}\n.t-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: var(--tui-text-02);\n  font: var(--tui-font-text-xs);\n  pointer-events: none;\n}\n[data-size='xl'][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-m);\n}\n.t-wrapper[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.t-wrapper[_ngcontent-%COMP%]:first-line {\n  color: var(--tui-text-01);\n}\n[data-size='m'][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line {\n  font: var(--tui-font-text-s);\n  font-weight: bold;\n}\n[data-size='l'][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line {\n  font: var(--tui-font-text-m);\n  font-weight: bold;\n}\n[data-size='xl'][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line {\n  font: var(--tui-font-heading-5);\n}\n.t-percent[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 25%;\n  bottom: 11%;\n  display: flex;\n  width: 50%;\n  justify-content: space-between;\n  font: var(--tui-font-text-xs);\n  color: var(--tui-text-02);\n}\n[data-size='xl'][_nghost-%COMP%]   .t-percent[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-m);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2FyYy1jaGFydC9hcmMtY2hhcnQuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2FyYy1jaGFydC9hcmMtY2hhcnQuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2NvcmUvc3R5bGVzL21peGlucy9taXhpbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBREtKO0FDRkE7RUN1Qkksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQVFJLFNBQUE7RUFDQSxRQUFBO0VEaENKLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBRFFKO0FDTEE7RUFDSSxvQkFBQTtFQUNBLDJHQUFBO0FET0o7QUNMSTtFQzhNQSwrQ0FBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7RUQ5TUksYUFBQTtBRFNSO0FDTEE7RUNFSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBR0ksV0FBQTtFQUNBLFlBQUE7RUROSixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0FEV0o7QUNUSTtFQUNJLDRCQUFBO0FEV1I7QUNQQTtFQUNJLG9CQUFBO0FEU0o7QUNQSTtFQUNJLHlCQUFBO0FEU1I7QUNQUTtFQUNJLDRCQUFBO0VBQ0EsaUJBQUE7QURTWjtBQ05RO0VBQ0ksNEJBQUE7RUFDQSxpQkFBQTtBRFFaO0FDTFE7RUFDSSwrQkFBQTtBRE9aO0FDRkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QURJSjtBQ0ZJO0VBQ0ksNEJBQUE7QURJUiIsImZpbGUiOiJwcm9qZWN0cy9hZGRvbi1jaGFydHMvY29tcG9uZW50cy9hcmMtY2hhcnQvYXJjLWNoYXJ0LnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG46aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLnQtc3ZnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBjb2xvcjogdmFyKC0tdHVpLXNlY29uZGFyeSk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4udC12YWx1ZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCB2YXIoLS10dWktZHVyYXRpb24pIGVhc2UtaW4tb3V0LCBvcGFjaXR5IHZhcigtLXR1aS1kdXJhdGlvbikgZWFzZS1pbi1vdXQgMC4xcztcbn1cbi50LXZhbHVlX2luYWN0aXZlIHtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogc3Ryb2tlLWRhc2hvZmZzZXQsIG9wYWNpdHk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIG9wYWNpdHk6IDAuMTY7XG59XG4udC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQteHMpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbjpob3N0W2RhdGEtc2l6ZT0neGwnXSAudC1jb250ZW50IHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1tKTtcbn1cbi50LXdyYXBwZXIge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi50LXdyYXBwZXI6Zmlyc3QtbGluZSB7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSk7XG59XG46aG9zdFtkYXRhLXNpemU9J20nXSAudC13cmFwcGVyOmZpcnN0LWxpbmUge1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXMpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjpob3N0W2RhdGEtc2l6ZT0nbCddIC50LXdyYXBwZXI6Zmlyc3QtbGluZSB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuOmhvc3RbZGF0YS1zaXplPSd4bCddIC50LXdyYXBwZXI6Zmlyc3QtbGluZSB7XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LWhlYWRpbmctNSk7XG59XG4udC1wZXJjZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyNSU7XG4gIGJvdHRvbTogMTElO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQteHMpO1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDIpO1xufVxuOmhvc3RbZGF0YS1zaXplPSd4bCddIC50LXBlcmNlbnQge1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LW0pO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG46aG9zdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4udC1zdmcge1xuICAgIC5mdWxsc2l6ZShhYnNvbHV0ZSwgaW5zZXQpO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIGNvbG9yOiB2YXIoLS10dWktc2Vjb25kYXJ5KTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi50LXZhbHVlIHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCB2YXIoLS10dWktZHVyYXRpb24pIGVhc2UtaW4tb3V0LCBvcGFjaXR5IHZhcigtLXR1aS1kdXJhdGlvbikgZWFzZS1pbi1vdXQgMC4xcztcblxuICAgICZfaW5hY3RpdmUge1xuICAgICAgICAudHJhbnNpdGlvbih+J3N0cm9rZS1kYXNob2Zmc2V0LCBvcGFjaXR5Jyk7XG4gICAgICAgIG9wYWNpdHk6IDAuMTY7XG4gICAgfVxufVxuXG4udC1jb250ZW50IHtcbiAgICAuZnVsbHNpemUoKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC14cyk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICA6aG9zdFtkYXRhLXNpemU9J3hsJ10gJiB7XG4gICAgICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG4gICAgfVxufVxuXG4udC13cmFwcGVyIHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcblxuICAgICY6Zmlyc3QtbGluZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSk7XG5cbiAgICAgICAgOmhvc3RbZGF0YS1zaXplPSdtJ10gJiB7XG4gICAgICAgICAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXMpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdFtkYXRhLXNpemU9J2wnXSAmIHtcbiAgICAgICAgICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbSk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0W2RhdGEtc2l6ZT0neGwnXSAmIHtcbiAgICAgICAgICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LWhlYWRpbmctNSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50LXBlcmNlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyNSU7XG4gICAgYm90dG9tOiAxMSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXhzKTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDIpO1xuXG4gICAgOmhvc3RbZGF0YS1zaXplPSd4bCddICYge1xuICAgICAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LW0pO1xuICAgIH1cbn1cbiIsIi8vIGNlbnRlcmluZyB3aXRoIHRyYW5zbGF0ZVxuLmNlbnRlci1sZWZ0KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG59XG5cbi5jZW50ZXItdG9wKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cblxuLmNlbnRlci1hbGwoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLy8gY2xlYXJmaXhcbi5jbGVhcmZpeCgpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59XG5cbi8vLmZ1bGxzaXplXG4uZnVsbHNpemUoQHBvc2l0aW9uOiBhYnNvbHV0ZSwgQG1vZGU6IGhlaWdodCkge1xuICAgIHBvc2l0aW9uOiBAcG9zaXRpb247XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaGVpZ2h0KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAbW9kZSA9IGluc2V0KSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxufVxuXG4uY2xlYXJidG4oKSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmF1dG9maWxsKEBtb2RlOmRlZmF1bHQpIHtcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XG4gICAgICAgIGNhcmV0LWNvbG9yOiB2YXIoLS10dWktYmFzZS0wOSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRlZmF1bHQpIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsKTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbCkgaW5zZXQgIWltcG9ydGFudDsgLy8gdG8gb3ZlcmxheSBuYXRpdmUgYmFja2dyb3VuZFxuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMS1uaWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCkgaW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNsZWFyaW5wdXQoQG1vZGU6IGRlZmF1bHQpIHtcbiAgICAuYXV0b2ZpbGwoQG1vZGUpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8vIGZvciBTYWZhcmlcbn1cblxuLnZpc3VhbGx5LWhpZGRlbigpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoMCk7XG59XG5cbi8vIGN1c3RvbWl6ZSBuYXRpdmUgc2Nyb2xsXG4uY3VzdG9taXplLXNjcm9sbCgpIHtcbiAgICAvLyBleGNsdWRlIG5vbi1zdXBwb3J0aW5nIGJyb3dzZXJzXG4gICAgQG1lZGlhIGFsbCBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMCkgYW5kIChtaW4tcmVzb2x1dGlvbjogMC4wMDFkcGNtKSB7XG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICAgICAgYm9yZGVyOiAyLjY2N3JlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWhvdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1hY3RpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gc2hhZG93XG4uc2hhZG93KEBtb2RlOiAxKSB7XG4gICAgLy8gRGVmYXVsdFxuICAgICYgd2hlbiAoQG1vZGUgPSAxKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBEcm9wZG93blxuICAgICYgd2hlbiAoQG1vZGUgPSAyKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbFxuICAgICYgd2hlbiAoQG1vZGUgPSAzKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMS4xMjVyZW0gMS44NzVyZW0gcmdiYSgwLCAwLCAwLCAwLjQ4KTtcbiAgICB9XG5cbiAgICAvLyBTaWRlYmFyXG4gICAgJiB3aGVuIChAbW9kZSA9IDQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMC4yNXJlbSAwIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIEhvdmVyXG4gICAgJiB3aGVuIChAbW9kZSA9IDUpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDIuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cblxuICAgIC8vIE5hdmlnYXRpb25cbiAgICAmIHdoZW4gKEBtb2RlID0gNikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbCBtb2JpbGVcbiAgICAmIHdoZW4gKEBtb2RlID0gNykge1xuICAgICAgICBib3gtc2hhZG93OiAwIC0xcmVtIDEuNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB9XG59XG5cbi5pbnNldC1ib3JkZXIoQGRpcmVjdGlvbjogYm90dG9tLCBAbW9kZTogbm9uZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHRyYW5zaXRpb25cbi50cmFuc2l0aW9uKEBwYXJhbSwgQHNwZWVkOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKSkge1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IEBwYXJhbTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBAc3BlZWQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG4vLyBkYXNoZWQgYm9yZGVyXG4uZGFzaGVkLWJvcmRlcihAY29sb3I6IGN1cnJlbnRDb2xvciwgQGFsaWdubWVudDogYm90dG9tLCBAc3BhY2U6IDQpIHtcbiAgICBAc2l6ZTogdW5pdChAc3BhY2UsIHB4KTtcbiAgICBAcGVyY2VudGFnZTogKDEwMCUgLyBAc3BhY2UgKiAyKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEBjb2xvciAwJSwgQGNvbG9yIEBwZXJjZW50YWdlLCB0cmFuc3BhcmVudCBAcGVyY2VudGFnZSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBAYWxpZ25tZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogQHNpemUgMXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gdHlwaWNhbCBvcGFjaXR5IHByb3BlcnRpZXMgZm9yIGljb25zXG4ub3BhY2l0eS1pY29uKCkge1xuICAgIG9wYWNpdHk6IDAuODtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLmhvdmVyYWJsZS13aXRoLXNoYWRvdygpIHtcbiAgICAuc2hhZG93KCk7XG4gICAgLnRyYW5zaXRpb24oYWxsKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLnNoYWRvdyg1KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC1Ac3BhY2UpO1xuICAgIH1cbn1cblxuLy8gZ3JhZGllbnRcbi5ncmFkaWVudChAc3RhcnQtY29sb3IsIEBlbmQtY29sb3IsIEBhbmdsZTogNDVkZWcpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoQGFuZ2xlLCBAc3RhcnQtY29sb3IgMCUsIEBlbmQtY29sb3IgMTAwJSk7XG59XG5cbi8vIHR5cGljYWwgcHJvcGVydGllcyBmb3IgdGV4dCBvdmVyZmxvdyB3aXRoIGVsbGlwc2lzXG4udGV4dC1vdmVyZmxvdyhAdHlwZTogbm93cmFwKSB7XG4gICAgd2hpdGUtc3BhY2U6IEB0eXBlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLnRleHQtb3ZlcmZsb3ctd2l0aC1mYWRlKEBjb2xvcjogdmFyKC0tdHVpLWJhc2UtMDEpLCBAdHJhbnNwYXJlbnRDb2xvcjogdHJhbnNwYXJlbnQsIEB3aWR0aDogMS44NzVyZW0pIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogQHdpZHRoO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQHRyYW5zcGFyZW50Q29sb3IgMCUsIEBjb2xvciA4MCUsIEBjb2xvciAxMDAlKTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cblxuLmNyZWF0ZVN0YWNraW5nQ29udGV4dCgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMDtcbn1cblxuLy9zcGFjZXNcbi50dWktc3BhY2UoQGRpcmVjdGlvbiwgQHNpemUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBhbGwpIHtcbiAgICAgICAgbWFyZ2luOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHZlcnRpY2FsKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGhvcml6b250YWwpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cbn1cblxuLmNvbnRyYXN0LWJhY2tncm91bmQoQGJhY2tncm91bmQpIHtcbiAgICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZDtcbiAgICBjb2xvcjogY29udHJhc3QoQGJhY2tncm91bmQsICMzMzMsICNmZmYpO1xufVxuXG4uYmx1cnJlZC1iYWNrZ3JvdW5kKEBjb2xvcjogI2ZmZikge1xuICAgIGJhY2tncm91bmQ6IGZhZGUoQGNvbG9yLCA3MCUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjQzNzVyZW0pO1xufVxuXG4uc2Nyb2xsYmFyLWhpZGRlbigpIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAvKiBzdHlsZWxpbnQtZW5hYmxlKi9cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgfVxufVxuXG4vLyBoaWRlIGFuIGVsZW1lbnQgdmlzdWFsbHkgd2l0aG91dCBoaWRpbmcgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuLnNyLW9ubHkoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDUwJSk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiArcChartComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiArcChartComponent.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiArcChartComponent.prototype, "max", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiArcChartComponent.prototype, "minLabel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiArcChartComponent.prototype, "maxLabel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiArcChartComponent.prototype, "activeItemIndex", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiArcChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-arc-chart`,
                templateUrl: `./arc-chart.template.html`,
                styleUrls: [`./arc-chart.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]
            }] }]; }, { arcs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: [`arc`]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`attr.data-size`]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], minLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], maxLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], activeItemIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], activeItemIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`style.width.rem`]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`style.height.rem`]
        }], strokeWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`style.strokeWidth.rem`]
        }] }); })();
function arcsToIndex(arcs) {
    return arcs
        .toArray()
        .map(({ nativeElement }, index) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["typedFromEvent"])(nativeElement, `mouseenter`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(index)), Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["typedFromEvent"])(nativeElement, `mouseleave`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(NaN))));
}


/***/ }),

/***/ "../addon-charts/components/arc-chart/arc-chart.module.ts":
/*!****************************************************************!*\
  !*** ../addon-charts/components/arc-chart/arc-chart.module.ts ***!
  \****************************************************************/
/*! exports provided: TuiArcChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiArcChartModule", function() { return TuiArcChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _arc_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arc-chart.component */ "../addon-charts/components/arc-chart/arc-chart.component.ts");




class TuiArcChartModule {
}
TuiArcChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TuiArcChartModule });
TuiArcChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TuiArcChartModule_Factory(t) { return new (t || TuiArcChartModule)(); }, imports: [[_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiRepeatTimesModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TuiArcChartModule, { declarations: [_arc_chart_component__WEBPACK_IMPORTED_MODULE_2__["TuiArcChartComponent"]], imports: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiRepeatTimesModule"]], exports: [_arc_chart_component__WEBPACK_IMPORTED_MODULE_2__["TuiArcChartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiArcChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__["TuiRepeatTimesModule"]],
                declarations: [_arc_chart_component__WEBPACK_IMPORTED_MODULE_2__["TuiArcChartComponent"]],
                exports: [_arc_chart_component__WEBPACK_IMPORTED_MODULE_2__["TuiArcChartComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-charts/components/arc-chart/index.ts":
/*!*****************************************************!*\
  !*** ../addon-charts/components/arc-chart/index.ts ***!
  \*****************************************************/
/*! exports provided: TuiArcChartComponent, TuiArcChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arc_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arc-chart.component */ "../addon-charts/components/arc-chart/arc-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiArcChartComponent", function() { return _arc_chart_component__WEBPACK_IMPORTED_MODULE_0__["TuiArcChartComponent"]; });

/* harmony import */ var _arc_chart_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arc-chart.module */ "../addon-charts/components/arc-chart/arc-chart.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiArcChartModule", function() { return _arc_chart_module__WEBPACK_IMPORTED_MODULE_1__["TuiArcChartModule"]; });





/***/ }),

/***/ "../addon-charts/components/axes/axes.component.ts":
/*!*********************************************************!*\
  !*** ../addon-charts/components/axes/axes.component.ts ***!
  \*********************************************************/
/*! exports provided: TuiAxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiAxesComponent", function() { return TuiAxesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-charts/constants */ "../addon-charts/constants/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core_providers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core/providers */ "../core/providers/index.ts");
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core/tokens */ "../core/tokens/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../cdk/directives/repeat-times/repeat-times.directive */ "../cdk/directives/repeat-times/repeat-times.directive.ts");










function TuiAxesComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.axisYName, " ");
} }
function TuiAxesComponent_div_0_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.fallback(label_r10), " ");
} }
function TuiAxesComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiAxesComponent_div_0_div_2_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.axisYLabels);
} }
function TuiAxesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiAxesComponent_div_0_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TuiAxesComponent_div_0_div_2_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-side_padding", ctx_r0.hasXLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.axisYName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.axisYInset);
} }
function TuiAxesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 18);
} if (rf & 2) {
    const index_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("border-right-style", ctx_r1.verticalLinesHandler(index_r11, ctx_r1.verticalLines));
} }
function TuiAxesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 19);
} if (rf & 2) {
    const index_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("border-top-style", ctx_r2.horizontalLinesHandler(index_r12, ctx_r2.horizontalLines));
} }
function TuiAxesComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r13.fallback(label_r14), " ");
} }
function TuiAxesComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiAxesComponent_div_7_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.axisYLabels);
} }
function TuiAxesComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r15.fallback(label_r16), " ");
} }
function TuiAxesComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiAxesComponent_div_8_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.axisYSecondaryLabels);
} }
function TuiAxesComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-label-x_transparent", label_r18 === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r17.fallback(label_r18), " ");
} }
function TuiAxesComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiAxesComponent_div_11_div_1_Template, 2, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.axisXLabels);
} }
function TuiAxesComponent_div_12_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r21.fallback(label_r22), " ");
} }
function TuiAxesComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiAxesComponent_div_12_div_1_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r19.axisYSecondaryLabels);
} }
function TuiAxesComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r20.axisYSecondaryName, " ");
} }
function TuiAxesComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiAxesComponent_div_12_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TuiAxesComponent_div_12_div_2_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-side_padding", ctx_r6.hasXLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.axisYSecondaryInset);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.axisYSecondaryName);
} }
const _c0 = ["*"];
class TuiAxesComponent {
    constructor(mode$) {
        this.mode$ = mode$;
        this.axisX = `solid`;
        this.axisXLabels = [];
        this.axisY = `solid`;
        this.axisYInset = false;
        this.axisYLabels = [];
        this.axisYName = ``;
        this.axisYSecondaryInset = false;
        this.axisYSecondaryLabels = [];
        this.axisYSecondaryName = ``;
        this.horizontalLines = 0;
        this.horizontalLinesHandler = _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_2__["TUI_ALWAYS_SOLID"];
        this.verticalLines = 0;
        this.verticalLinesHandler = _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_2__["TUI_ALWAYS_DASHED"];
    }
    get centeredXLabels() {
        return this.axisY === `none`;
    }
    get hasXLabels() {
        return !!this.axisXLabels.length;
    }
    get hasYLabels() {
        return (!!this.axisYLabels.length && !this.axisYInset) || !!this.axisYName;
    }
    get hasYSecondaryLabels() {
        return ((!!this.axisYSecondaryLabels.length && !this.axisYSecondaryInset) ||
            !!this.axisYSecondaryName);
    }
    fallback(label) {
        return label || _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["CHAR_NO_BREAK_SPACE"];
    }
}
TuiAxesComponent.ɵfac = function TuiAxesComponent_Factory(t) { return new (t || TuiAxesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_5__["TUI_MODE"])); };
TuiAxesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiAxesComponent, selectors: [["tui-axes"]], hostVars: 2, hostBindings: function TuiAxesComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("$.data-mode.attr", function TuiAxesComponent___data_mode_attr_HostBindingHandler() { return ctx.mode$; });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_centered", ctx.centeredXLabels);
    } }, inputs: { axisX: "axisX", axisXLabels: "axisXLabels", axisY: "axisY", axisYInset: "axisYInset", axisYLabels: "axisYLabels", axisYName: "axisYName", axisYSecondaryInset: "axisYSecondaryInset", axisYSecondaryLabels: "axisYSecondaryLabels", axisYSecondaryName: "axisYSecondaryName", horizontalLines: "horizontalLines", horizontalLinesHandler: "horizontalLinesHandler", verticalLines: "verticalLines", verticalLinesHandler: "verticalLinesHandler" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_taiga_ui_core_providers__WEBPACK_IMPORTED_MODULE_4__["MODE_PROVIDER"]])], ngContentSelectors: _c0, decls: 13, vars: 11, consts: [["class", "t-side", 3, "t-side_padding", 4, "ngIf"], [1, "t-wrapper"], [1, "t-grid"], [1, "t-vertical"], ["automation-id", "tui-axex__vertical-line", "class", "t-line t-line_vertical", 3, "borderRightStyle", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], [1, "t-horizontal"], ["automation-id", "tui-axex__horizontal-line", "class", "t-line", 3, "borderTopStyle", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["class", "t-labels-y t-labels-y_inset", 4, "ngIf"], ["class", "t-labels-y t-labels-y_inset t-labels-y_inset_secondary", 4, "ngIf"], [1, "t-content"], ["class", "t-labels-x", 4, "ngIf"], [1, "t-side"], ["automation-id", "tui-axex__axis-y-name", "class", "t-name t-name_primary", 4, "ngIf"], ["class", "t-labels-y t-labels-y_primary", 4, "ngIf"], ["automation-id", "tui-axex__axis-y-name", 1, "t-name", "t-name_primary"], [1, "t-labels-y", "t-labels-y_primary"], ["automation-id", "tui-axex__axis-y-label", "class", "t-label-y", 4, "ngFor", "ngForOf"], ["automation-id", "tui-axex__axis-y-label", 1, "t-label-y"], ["automation-id", "tui-axex__vertical-line", 1, "t-line", "t-line_vertical"], ["automation-id", "tui-axex__horizontal-line", 1, "t-line"], [1, "t-labels-y", "t-labels-y_inset"], [1, "t-labels-y", "t-labels-y_inset", "t-labels-y_inset_secondary"], ["automation-id", "tui-axex__axis-y-secondary-label", "class", "t-label-y", 4, "ngFor", "ngForOf"], ["automation-id", "tui-axex__axis-y-secondary-label", 1, "t-label-y"], [1, "t-labels-x"], ["automation-id", "tui-axex__axis-x-label", "class", "t-label-x", 3, "t-label-x_transparent", 4, "ngFor", "ngForOf"], ["automation-id", "tui-axex__axis-x-label", 1, "t-label-x"], ["class", "t-labels-y t-labels-y_secondary", 4, "ngIf"], ["automation-id", "tui-axex__axis-y-secondary-name", "class", "t-name", 4, "ngIf"], [1, "t-labels-y", "t-labels-y_secondary"], ["automation-id", "tui-axex__axis-y-secondary-name", 1, "t-name"]], template: function TuiAxesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiAxesComponent_div_0_Template, 3, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TuiAxesComponent_div_4_Template, 1, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TuiAxesComponent_div_6_Template, 1, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TuiAxesComponent_div_7_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TuiAxesComponent_div_8_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TuiAxesComponent_div_11_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TuiAxesComponent_div_12_Template, 3, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasYLabels);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("border-left-style", ctx.axisY)("border-bottom-style", ctx.axisX);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tuiRepeatTimesOf", ctx.verticalLines);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tuiRepeatTimesOf", ctx.horizontalLines);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.axisYInset);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.axisYSecondaryInset);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasXLabels);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasYSecondaryLabels);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_8__["TuiRepeatTimesDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n}\n.t-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  height: 100%;\n  flex-direction: column;\n}\n.t-grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 0;\n  display: flex;\n  flex: 1;\n  justify-content: space-around;\n  align-items: flex-end;\n  border-width: 1px;\n  border-color: var(--tui-base-03);\n}\n[data-mode='onDark'][_nghost-%COMP%]   .t-grid[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.48);\n}\n[data-mode='onLight'][_nghost-%COMP%]   .t-grid[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.48);\n}\n.t-horizontal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.t-vertical[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n._centered[_nghost-%COMP%]   .t-vertical[_ngcontent-%COMP%]:after {\n  content: '';\n  display: block;\n  flex: 1 0 1px;\n}\n.t-line[_ngcontent-%COMP%] {\n  flex: 2 0 1px;\n  box-sizing: border-box;\n  border-width: 1px;\n  border-color: var(--tui-base-03);\n}\n[data-mode='onDark'][_nghost-%COMP%]   .t-line[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.48);\n}\n[data-mode='onLight'][_nghost-%COMP%]   .t-line[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.48);\n}\n._centered[_nghost-%COMP%]   .t-line_vertical[_ngcontent-%COMP%]:first-child {\n  flex: 1 0 1px;\n  pointer-events: none;\n}\n.t-side[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n}\n.t-side_padding[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n.t-name[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-xs);\n  -webkit-writing-mode: tb;\n          writing-mode: tb;\n  text-align: center;\n  padding-left: 0.75rem;\n  color: var(--tui-text-02);\n}\n.t-name_primary[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n[data-mode='onDark'][_nghost-%COMP%]   .t-name[_ngcontent-%COMP%] {\n  color: var(--tui-text-02-night);\n}\n.t-labels-y[_ngcontent-%COMP%] {\n  display: flex;\n  font: var(--tui-font-text-xs);\n  flex-direction: column-reverse;\n  justify-content: space-between;\n  color: var(--tui-text-02);\n}\n[data-mode='onDark'][_nghost-%COMP%]   .t-labels-y[_ngcontent-%COMP%] {\n  color: var(--tui-text-02-night);\n}\n.t-labels-y_primary[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-right: 0.75rem;\n}\n.t-labels-y_secondary[_ngcontent-%COMP%] {\n  padding-left: 0.75rem;\n}\n.t-labels-y_transparent[_ngcontent-%COMP%] {\n  border-color: transparent;\n}\n.t-labels-y_inset[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5625rem;\n  left: 0.25rem;\n  bottom: -0.75rem;\n  pointer-events: none;\n}\n.t-labels-y_inset_secondary[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0.25rem;\n  text-align: right;\n}\n.t-labels-x[_ngcontent-%COMP%] {\n  display: flex;\n  font: var(--tui-font-text-xs);\n  border-right: 1px solid transparent;\n  color: var(--tui-text-02);\n}\n.t-label-x[_ngcontent-%COMP%] {\n  height: 0.4375rem;\n  border-left: 1px solid var(--tui-base-03);\n  flex: 1;\n  margin-bottom: 1.5625rem;\n}\n[data-mode='onDark'][_nghost-%COMP%]   .t-label-x[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, 0.48);\n}\n[data-mode='onLight'][_nghost-%COMP%]   .t-label-x[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.48);\n}\n.t-label-x[_ngcontent-%COMP%]:before {\n  content: '';\n  display: block;\n  height: 0.5625rem;\n}\n.t-label-x_transparent[_ngcontent-%COMP%] {\n  border-color: transparent;\n}\n._centered[_nghost-%COMP%]   .t-label-x[_ngcontent-%COMP%] {\n  height: 2rem;\n  text-align: center;\n  border: none;\n  margin: 0;\n}\n.t-label-y[_ngcontent-%COMP%]:first-child {\n  margin-bottom: -0.375rem;\n}\n.t-label-y[_ngcontent-%COMP%]:last-child {\n  margin-top: -0.375rem;\n}\n.t-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: -1px;\n  right: 0;\n  bottom: -1px;\n  display: flex;\n  align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2F4ZXMvYXhlcy5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvYWRkb24tY2hhcnRzL2NvbXBvbmVudHMvYXhlcy9heGVzLnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLGFBQUE7QURLSjtBQ0ZBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QURJSjtBQ0RBO0VDNFJJLGtCQUFBO0VBQ0EsVUFBQTtFRDNSQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FESUo7QUNGSTtFQUNJLHVDQUFBO0FESVI7QUNESTtFQUNJLGlDQUFBO0FER1I7QUNDQTtFQ0FJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFHSSxXQUFBO0VBQ0EsWUFBQTtFREpKLGFBQUE7RUFDQSxzQkFBQTtBREtKO0FDRkE7RUNOSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBR0ksV0FBQTtFQUNBLFlBQUE7RURFSixhQUFBO0FEUUo7QUNOSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBRFFSO0FDSkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FETUo7QUNKSTtFQUNJLHVDQUFBO0FETVI7QUNISTtFQUNJLGlDQUFBO0FES1I7QUNEUTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBREdaO0FDRUE7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7QURBSjtBQ0VJO0VBQ0ksb0JBQUE7QURBUjtBQ0lBO0VBQ0ksNkJBQUE7RUFDQSx3QkFBQTtVQUFBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FERko7QUNJSTtFQUNJLHlCQUFBO0FERlI7QUNLSTtFQUNJLCtCQUFBO0FESFI7QUNPQTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBRExKO0FDT0k7RUFDSSwrQkFBQTtBRExSO0FDUUk7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0FETlI7QUNTSTtFQUNJLHFCQUFBO0FEUFI7QUNVSTtFQUNJLHlCQUFBO0FEUlI7QUNXSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FEVFI7QUNXUTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QURUWjtBQ2NBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtBRFpKO0FDZUE7RUFDSSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0EsT0FBQTtFQUNBLHdCQUFBO0FEYko7QUNlSTtFQUNJLHVDQUFBO0FEYlI7QUNnQkk7RUFDSSxpQ0FBQTtBRGRSO0FDaUJJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBRGZSO0FDa0JJO0VBQ0kseUJBQUE7QURoQlI7QUNtQkk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBRGpCUjtBQ3NCSTtFQUNJLHdCQUFBO0FEcEJSO0FDdUJJO0VBQ0kscUJBQUE7QURyQlI7QUN5QkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUR2QkoiLCJmaWxlIjoicHJvamVjdHMvYWRkb24tY2hhcnRzL2NvbXBvbmVudHMvYXhlcy9heGVzLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnQtZ3JpZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDMpO1xufVxuOmhvc3RbZGF0YS1tb2RlPSdvbkRhcmsnXSAudC1ncmlkIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDgpO1xufVxuOmhvc3RbZGF0YS1tb2RlPSdvbkxpZ2h0J10gLnQtZ3JpZCB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ4KTtcbn1cbi50LWhvcml6b250YWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi50LXZlcnRpY2FsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdC5fY2VudGVyZWQgLnQtdmVydGljYWw6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXg6IDEgMCAxcHg7XG59XG4udC1saW5lIHtcbiAgZmxleDogMiAwIDFweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDMpO1xufVxuOmhvc3RbZGF0YS1tb2RlPSdvbkRhcmsnXSAudC1saW5lIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDgpO1xufVxuOmhvc3RbZGF0YS1tb2RlPSdvbkxpZ2h0J10gLnQtbGluZSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ4KTtcbn1cbjpob3N0Ll9jZW50ZXJlZCAudC1saW5lX3ZlcnRpY2FsOmZpcnN0LWNoaWxkIHtcbiAgZmxleDogMSAwIDFweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4udC1zaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4udC1zaWRlX3BhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cbi50LW5hbWUge1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXhzKTtcbiAgd3JpdGluZy1tb2RlOiB0YjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG59XG4udC1uYW1lX3ByaW1hcnkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuOmhvc3RbZGF0YS1tb2RlPSdvbkRhcmsnXSAudC1uYW1lIHtcbiAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAyLW5pZ2h0KTtcbn1cbi50LWxhYmVscy15IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC14cyk7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDIpO1xufVxuOmhvc3RbZGF0YS1tb2RlPSdvbkRhcmsnXSAudC1sYWJlbHMteSB7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMi1uaWdodCk7XG59XG4udC1sYWJlbHMteV9wcmltYXJ5IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG59XG4udC1sYWJlbHMteV9zZWNvbmRhcnkge1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG59XG4udC1sYWJlbHMteV90cmFuc3BhcmVudCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4udC1sYWJlbHMteV9pbnNldCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjU2MjVyZW07XG4gIGxlZnQ6IDAuMjVyZW07XG4gIGJvdHRvbTogLTAuNzVyZW07XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnQtbGFiZWxzLXlfaW5zZXRfc2Vjb25kYXJ5IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDAuMjVyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnQtbGFiZWxzLXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LXhzKTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG59XG4udC1sYWJlbC14IHtcbiAgaGVpZ2h0OiAwLjQzNzVyZW07XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tdHVpLWJhc2UtMDMpO1xuICBmbGV4OiAxO1xuICBtYXJnaW4tYm90dG9tOiAxLjU2MjVyZW07XG59XG46aG9zdFtkYXRhLW1vZGU9J29uRGFyayddIC50LWxhYmVsLXgge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OCk7XG59XG46aG9zdFtkYXRhLW1vZGU9J29uTGlnaHQnXSAudC1sYWJlbC14IHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDgpO1xufVxuLnQtbGFiZWwteDpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMC41NjI1cmVtO1xufVxuLnQtbGFiZWwteF90cmFuc3BhcmVudCB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG46aG9zdC5fY2VudGVyZWQgLnQtbGFiZWwteCB7XG4gIGhlaWdodDogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbi50LWxhYmVsLXk6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAtMC4zNzVyZW07XG59XG4udC1sYWJlbC15Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAtMC4zNzVyZW07XG59XG4udC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0xcHg7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IC0xcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnQtZ3JpZCB7XG4gICAgLmNyZWF0ZVN0YWNraW5nQ29udGV4dCgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICA6aG9zdFtkYXRhLW1vZGU9J29uRGFyayddICYge1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OCk7XG4gICAgfVxuXG4gICAgOmhvc3RbZGF0YS1tb2RlPSdvbkxpZ2h0J10gJiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ4KTtcbiAgICB9XG59XG5cbi50LWhvcml6b250YWwge1xuICAgIC5mdWxsc2l6ZSgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnQtdmVydGljYWwge1xuICAgIC5mdWxsc2l6ZSgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICA6aG9zdC5fY2VudGVyZWQgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxleDogMSAwIDFweDtcbiAgICB9XG59XG5cbi50LWxpbmUge1xuICAgIGZsZXg6IDIgMCAxcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgIDpob3N0W2RhdGEtbW9kZT0nb25EYXJrJ10gJiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ4KTtcbiAgICB9XG5cbiAgICA6aG9zdFtkYXRhLW1vZGU9J29uTGlnaHQnXSAmIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDgpO1xuICAgIH1cblxuICAgICZfdmVydGljYWwge1xuICAgICAgICA6aG9zdC5fY2VudGVyZWQgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBmbGV4OiAxIDAgMXB4O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50LXNpZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbiAgICAmX3BhZGRpbmcge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICB9XG59XG5cbi50LW5hbWUge1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQteHMpO1xuICAgIHdyaXRpbmctbW9kZTogdGI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDIpO1xuXG4gICAgJl9wcmltYXJ5IHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG5cbiAgICA6aG9zdFtkYXRhLW1vZGU9J29uRGFyayddICYge1xuICAgICAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDItbmlnaHQpO1xuICAgIH1cbn1cblxuLnQtbGFiZWxzLXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC14cyk7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDIpO1xuXG4gICAgOmhvc3RbZGF0YS1tb2RlPSdvbkRhcmsnXSAmIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAyLW5pZ2h0KTtcbiAgICB9XG5cbiAgICAmX3ByaW1hcnkge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbiAgICB9XG5cbiAgICAmX3NlY29uZGFyeSB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgICB9XG5cbiAgICAmX3RyYW5zcGFyZW50IHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmX2luc2V0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDAuNTYyNXJlbTtcbiAgICAgICAgbGVmdDogMC4yNXJlbTtcbiAgICAgICAgYm90dG9tOiAtMC43NXJlbTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgICAgJl9zZWNvbmRhcnkge1xuICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgIHJpZ2h0OiAwLjI1cmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50LWxhYmVscy14IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQteHMpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG59XG5cbi50LWxhYmVsLXgge1xuICAgIGhlaWdodDogMC40Mzc1cmVtO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tdHVpLWJhc2UtMDMpO1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuXG4gICAgOmhvc3RbZGF0YS1tb2RlPSdvbkRhcmsnXSAmIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDgpO1xuICAgIH1cblxuICAgIDpob3N0W2RhdGEtbW9kZT0nb25MaWdodCddICYge1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMC41NjI1cmVtO1xuICAgIH1cblxuICAgICZfdHJhbnNwYXJlbnQge1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIDpob3N0Ll9jZW50ZXJlZCAmIHtcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cblxuLnQtbGFiZWwteSB7XG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0wLjM3NXJlbTtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMC4zNzVyZW07XG4gICAgfVxufVxuXG4udC1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAtMXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuIiwiLy8gY2VudGVyaW5nIHdpdGggdHJhbnNsYXRlXG4uY2VudGVyLWxlZnQoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuLmNlbnRlci10b3AoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4uY2VudGVyLWFsbCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vLyBjbGVhcmZpeFxuLmNsZWFyZml4KCkge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbn1cblxuLy8uZnVsbHNpemVcbi5mdWxsc2l6ZShAcG9zaXRpb246IGFic29sdXRlLCBAbW9kZTogaGVpZ2h0KSB7XG4gICAgcG9zaXRpb246IEBwb3NpdGlvbjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgICYgd2hlbiAoQG1vZGUgPSBoZWlnaHQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaW5zZXQpIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG5cbi5jbGVhcmJ0bigpIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uYXV0b2ZpbGwoQG1vZGU6ZGVmYXVsdCkge1xuICAgICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICAgICAgY2FyZXQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGVmYXVsdCkge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsKSBpbnNldCAhaW1wb3J0YW50OyAvLyB0byBvdmVybGF5IG5hdGl2ZSBiYWNrZ3JvdW5kXG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KSBpbnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2xlYXJpbnB1dChAbW9kZTogZGVmYXVsdCkge1xuICAgIC5hdXRvZmlsbChAbW9kZSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGN1cnJlbnRDb2xvcjsgLy8gZm9yIFNhZmFyaVxufVxuXG4udmlzdWFsbHktaGlkZGVuKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcbn1cblxuLy8gY3VzdG9taXplIG5hdGl2ZSBzY3JvbGxcbi5jdXN0b21pemUtc2Nyb2xsKCkge1xuICAgIC8vIGV4Y2x1ZGUgbm9uLXN1cHBvcnRpbmcgYnJvd3NlcnNcbiAgICBAbWVkaWEgYWxsIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSBhbmQgKG1pbi1yZXNvbHV0aW9uOiAwLjAwMWRwY20pIHtcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IDIuNjY3cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItaG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBzaGFkb3dcbi5zaGFkb3coQG1vZGU6IDEpIHtcbiAgICAvLyBEZWZhdWx0XG4gICAgJiB3aGVuIChAbW9kZSA9IDEpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIERyb3Bkb3duXG4gICAgJiB3aGVuIChAbW9kZSA9IDIpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsXG4gICAgJiB3aGVuIChAbW9kZSA9IDMpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxLjEyNXJlbSAxLjg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuNDgpO1xuICAgIH1cblxuICAgIC8vIFNpZGViYXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNCkge1xuICAgICAgICBib3gtc2hhZG93OiAwLjI1cmVtIDAgMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gSG92ZXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMi4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgICYgd2hlbiAoQG1vZGUgPSA2KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsIG1vYmlsZVxuICAgICYgd2hlbiAoQG1vZGUgPSA3KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTFyZW0gMS43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIH1cbn1cblxuLmluc2V0LWJvcmRlcihAZGlyZWN0aW9uOiBib3R0b20sIEBtb2RlOiBub25lKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdHJhbnNpdGlvblxuLnRyYW5zaXRpb24oQHBhcmFtLCBAc3BlZWQ6IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpKSB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHBhcmFtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEBzcGVlZDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cbi8vIGRhc2hlZCBib3JkZXJcbi5kYXNoZWQtYm9yZGVyKEBjb2xvcjogY3VycmVudENvbG9yLCBAYWxpZ25tZW50OiBib3R0b20sIEBzcGFjZTogNCkge1xuICAgIEBzaXplOiB1bml0KEBzcGFjZSwgcHgpO1xuICAgIEBwZXJjZW50YWdlOiAoMTAwJSAvIEBzcGFjZSAqIDIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQGNvbG9yIDAlLCBAY29sb3IgQHBlcmNlbnRhZ2UsIHRyYW5zcGFyZW50IEBwZXJjZW50YWdlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIEBhbGlnbm1lbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBAc2l6ZSAxcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyB0eXBpY2FsIG9wYWNpdHkgcHJvcGVydGllcyBmb3IgaWNvbnNcbi5vcGFjaXR5LWljb24oKSB7XG4gICAgb3BhY2l0eTogMC44O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaG92ZXJhYmxlLXdpdGgtc2hhZG93KCkge1xuICAgIC5zaGFkb3coKTtcbiAgICAudHJhbnNpdGlvbihhbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcblxuICAgICY6aG92ZXIge1xuICAgICAgICAuc2hhZG93KDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLUBzcGFjZSk7XG4gICAgfVxufVxuXG4vLyBncmFkaWVudFxuLmdyYWRpZW50KEBzdGFydC1jb2xvciwgQGVuZC1jb2xvciwgQGFuZ2xlOiA0NWRlZykge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChAYW5nbGUsIEBzdGFydC1jb2xvciAwJSwgQGVuZC1jb2xvciAxMDAlKTtcbn1cblxuLy8gdHlwaWNhbCBwcm9wZXJ0aWVzIGZvciB0ZXh0IG92ZXJmbG93IHdpdGggZWxsaXBzaXNcbi50ZXh0LW92ZXJmbG93KEB0eXBlOiBub3dyYXApIHtcbiAgICB3aGl0ZS1zcGFjZTogQHR5cGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4udGV4dC1vdmVyZmxvdy13aXRoLWZhZGUoQGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSksIEB0cmFuc3BhcmVudENvbG9yOiB0cmFuc3BhcmVudCwgQHdpZHRoOiAxLjg3NXJlbSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiBAd2lkdGg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAdHJhbnNwYXJlbnRDb2xvciAwJSwgQGNvbG9yIDgwJSwgQGNvbG9yIDEwMCUpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuXG4uY3JlYXRlU3RhY2tpbmdDb250ZXh0KCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4vL3NwYWNlc1xuLnR1aS1zcGFjZShAZGlyZWN0aW9uLCBAc2l6ZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGFsbCkge1xuICAgICAgICBtYXJnaW46IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdmVydGljYWwpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gaG9yaXpvbnRhbCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxufVxuXG4uY29udHJhc3QtYmFja2dyb3VuZChAYmFja2dyb3VuZCkge1xuICAgIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiBjb250cmFzdChAYmFja2dyb3VuZCwgIzMzMywgI2ZmZik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQoQGNvbG9yOiAjZmZmKSB7XG4gICAgYmFja2dyb3VuZDogZmFkZShAY29sb3IsIDcwJSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNDM3NXJlbSk7XG59XG5cbi5zY3JvbGxiYXItaGlkZGVuKCkge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIC8qIHN0eWxlbGludC1lbmFibGUqL1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG59XG5cbi8vIGhpZGUgYW4gZWxlbWVudCB2aXN1YWxseSB3aXRob3V0IGhpZGluZyBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG4uc3Itb25seSgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiAxesComponent.prototype, "axisX", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiAxesComponent.prototype, "axisXLabels", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiAxesComponent.prototype, "axisY", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiAxesComponent.prototype, "axisYInset", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiAxesComponent.prototype, "axisYLabels", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiAxesComponent.prototype, "axisYName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiAxesComponent.prototype, "axisYSecondaryInset", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiAxesComponent.prototype, "axisYSecondaryLabels", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiAxesComponent.prototype, "axisYSecondaryName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiAxesComponent.prototype, "horizontalLines", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiAxesComponent.prototype, "horizontalLinesHandler", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiAxesComponent.prototype, "verticalLines", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiAxesComponent.prototype, "verticalLinesHandler", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiAxesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-axes`,
                templateUrl: `./axes.template.html`,
                styleUrls: [`./axes.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [_taiga_ui_core_providers__WEBPACK_IMPORTED_MODULE_4__["MODE_PROVIDER"]],
                host: {
                    '($.data-mode.attr)': `mode$`,
                },
            }]
    }], function () { return [{ type: rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_5__["TUI_MODE"]]
            }] }]; }, { axisX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], axisXLabels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], axisY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], axisYInset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], axisYLabels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], axisYName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], axisYSecondaryInset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], axisYSecondaryLabels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], axisYSecondaryName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], horizontalLines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], horizontalLinesHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], verticalLines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], verticalLinesHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], centeredXLabels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`class._centered`]
        }] }); })();


/***/ }),

/***/ "../addon-charts/components/axes/axes.module.ts":
/*!******************************************************!*\
  !*** ../addon-charts/components/axes/axes.module.ts ***!
  \******************************************************/
/*! exports provided: TuiAxesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiAxesModule", function() { return TuiAxesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _axes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./axes.component */ "../addon-charts/components/axes/axes.component.ts");





class TuiAxesModule {
}
TuiAxesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TuiAxesModule });
TuiAxesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TuiAxesModule_Factory(t) { return new (t || TuiAxesModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiRepeatTimesModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TuiAxesModule, { declarations: [_axes_component__WEBPACK_IMPORTED_MODULE_3__["TuiAxesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiRepeatTimesModule"]], exports: [_axes_component__WEBPACK_IMPORTED_MODULE_3__["TuiAxesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiAxesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiRepeatTimesModule"]],
                declarations: [_axes_component__WEBPACK_IMPORTED_MODULE_3__["TuiAxesComponent"]],
                exports: [_axes_component__WEBPACK_IMPORTED_MODULE_3__["TuiAxesComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-charts/components/axes/index.ts":
/*!************************************************!*\
  !*** ../addon-charts/components/axes/index.ts ***!
  \************************************************/
/*! exports provided: TuiAxesComponent, TuiAxesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axes.component */ "../addon-charts/components/axes/axes.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiAxesComponent", function() { return _axes_component__WEBPACK_IMPORTED_MODULE_0__["TuiAxesComponent"]; });

/* harmony import */ var _axes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./axes.module */ "../addon-charts/components/axes/axes.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiAxesModule", function() { return _axes_module__WEBPACK_IMPORTED_MODULE_1__["TuiAxesModule"]; });





/***/ }),

/***/ "../addon-charts/components/bar-chart/bar-chart.component.ts":
/*!*******************************************************************!*\
  !*** ../addon-charts/components/bar-chart/bar-chart.component.ts ***!
  \*******************************************************************/
/*! exports provided: valueAssertion, TuiBarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueAssertion", function() { return valueAssertion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBarChartComponent", function() { return TuiBarChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-charts/constants */ "../addon-charts/constants/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_directives_hint_hint_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/directives/hint/hint.directive */ "../core/directives/hint/hint.directive.ts");
/* harmony import */ var _bar_set_bar_set_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bar-set/bar-set.component */ "../addon-charts/components/bar-set/bar-set.component.ts");
/* harmony import */ var _core_directives_described_by_described_by_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/directives/described-by/described-by.directive */ "../core/directives/described-by/described-by.directive.ts");
/* harmony import */ var _cdk_directives_focusable_focusable_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../cdk/directives/focusable/focusable.directive */ "../cdk/directives/focusable/focusable.directive.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../cdk/pipes/mapper/mapper.pipe */ "../cdk/pipes/mapper/mapper.pipe.ts");













function TuiBarChartComponent_div_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 8);
} if (rf & 2) {
    const index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r5.hintContent)("context", ctx_r5.getContentContext(index_r2));
} }
function TuiBarChartComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "tuiMapper");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "tui-bar-set", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TuiBarChartComponent_div_0_ng_template_6_Template, 1, 2, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const set_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-wrapper_hoverable", ctx_r0.hasHint);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tuiHintHost", _r3)("tuiHintId", ctx_r0.getHintId(index_r2))("tuiHint", ctx_r0.getHint(_r4))("tuiHintMode", ctx_r0.hintMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](2, 14, set_r1, ctx_r0.percentMapper, ctx_r0.collapsed, ctx_r0.computedMax), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tuiDescribedBy", ctx_r0.getHintId(index_r2))("tuiFocusable", ctx_r0.hasHint)("value", set_r1)("size", ctx_r0.size)("collapsed", ctx_r0.collapsed)("colorHandler", ctx_r0.colorHandler);
} }
// eslint-disable-next-line @typescript-eslint/naming-convention
function valueAssertion(value) {
    const valid = value.every(array => array.length === value[0].length);
    return valid;
}
const VALUE_ERROR = `All arrays must be of the same length`;
class TuiBarChartComponent {
    constructor(idService) {
        this.value = [];
        this.max = NaN;
        this.colorHandler = _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_2__["TUI_DEFAULT_COLOR_HANDLER"];
        this.size = `m`;
        this.collapsed = false;
        this.hintContent = ``;
        this.hintMode = null;
        this.percentMapper = (set, collapsed, max) => (100 * (collapsed ? Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["sum"])(...set) : Math.max(...set))) / max;
        this.autoIdString = idService.generate();
    }
    get hasHint() {
        return !!this.hintContent;
    }
    get transposed() {
        return this.transpose(this.value);
    }
    get computedMax() {
        return this.max || this.getMax(this.value, this.collapsed);
    }
    getContentContext(index) {
        return {
            $implicit: index,
        };
    }
    getHint(hint) {
        return this.hasHint ? hint : ``;
    }
    getHintId(index) {
        return `${this.autoIdString}_${index}`;
    }
    transpose(value) {
        return value.reduce((result, next) => next.map((_, index) => [...(result[index] || []), next[index]]), []);
    }
    getMax(values, collapsed) {
        return collapsed
            ? Math.max(...values.reduce((result, next) => result.map((value, index) => value + next[index])))
            : values.reduce((max, value) => Math.max(...value, max), 0);
    }
}
TuiBarChartComponent.ɵfac = function TuiBarChartComponent_Factory(t) { return new (t || TuiBarChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiIdService"])); };
TuiBarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiBarChartComponent, selectors: [["tui-bar-chart"]], inputs: { value: "value", max: "max", colorHandler: "colorHandler", size: "size", collapsed: "collapsed", hintContent: "hintContent", hintMode: "hintMode" }, decls: 1, vars: 1, consts: [["tuiHintDirection", "top-left", "class", "t-wrapper", 3, "t-wrapper_hoverable", "tuiHintHost", "tuiHintId", "tuiHint", "tuiHintMode", 4, "ngFor", "ngForOf"], ["tuiHintDirection", "top-left", 1, "t-wrapper", 3, "tuiHintHost", "tuiHintId", "tuiHint", "tuiHintMode"], [1, "t-container"], [1, "t-host"], ["hintHost", ""], [1, "t-set", 3, "tuiDescribedBy", "tuiFocusable", "value", "size", "collapsed", "colorHandler"], ["polymorpheus", ""], ["hint", "polymorpheus"], ["polymorpheus-outlet", "", 1, "t-text", 3, "content", "context"]], template: function TuiBarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiBarChartComponent_div_0_Template, 8, 19, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.transposed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _core_directives_hint_hint_directive__WEBPACK_IMPORTED_MODULE_5__["TuiHintDirective"], _bar_set_bar_set_component__WEBPACK_IMPORTED_MODULE_6__["TuiBarSetComponent"], _core_directives_described_by_described_by_directive__WEBPACK_IMPORTED_MODULE_7__["TuiDescribedByDirective"], _cdk_directives_focusable_focusable_directive__WEBPACK_IMPORTED_MODULE_8__["TuiFocusableDirective"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__["PolymorpheusTemplate"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_9__["PolymorpheusOutletComponent"]], pipes: [_cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_10__["TuiMapperPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n  height: 100%;\n}\n.t-wrapper[_ngcontent-%COMP%] {\n  transition-property: background-color;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n  position: relative;\n  display: flex;\n  flex: 1;\n  align-items: flex-end;\n  justify-content: center;\n  height: 100%;\n}\n.t-wrapper_hoverable._hint_hovered[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n}\n.t-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.t-host[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  right: 50%;\n}\n.t-set[_ngcontent-%COMP%] {\n  border-radius: var(--tui-radius-m);\n  pointer-events: none;\n  outline: none;\n}\n.t-set[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 2px var(--tui-focus);\n}\n.t-text[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2Jhci1jaGFydC9iYXItY2hhcnQuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2Jhci1jaGFydC9iYXItY2hhcnQuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2NvcmUvc3R5bGVzL21peGlucy9taXhpbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FES0o7QUNGQTtFQzZOSSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7RUQ3TkEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FETUo7QUNKSTtFQUNJLHFDQUFBO0VBQ0EsZUFBQTtBRE1SO0FDRkE7RUFDSSxPQUFBO0FESUo7QUNEQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURHSjtBQ0FBO0VBQ0ksa0NBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QURFSjtBQ0FJO0VBQ0ksc0NBQUE7QURFUjtBQ0VBO0VBQ0kscUJBQUE7QURBSiIsImZpbGUiOiJwcm9qZWN0cy9hZGRvbi1jaGFydHMvY29tcG9uZW50cy9iYXItY2hhcnQvYmFyLWNoYXJ0LnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbn1cbi50LXdyYXBwZXIge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLWNvbG9yO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKTtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi50LXdyYXBwZXJfaG92ZXJhYmxlLl9oaW50X2hvdmVyZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udC1jb250YWluZXIge1xuICBmbGV4OiAxO1xufVxuLnQtaG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICByaWdodDogNTAlO1xufVxuLnQtc2V0IHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tdHVpLXJhZGl1cy1tKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4udC1zZXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggdmFyKC0tdHVpLWZvY3VzKTtcbn1cbi50LXRleHQge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udC13cmFwcGVyIHtcbiAgICAudHJhbnNpdGlvbihiYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAmX2hvdmVyYWJsZS5faGludF9ob3ZlcmVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLnQtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xufVxuXG4udC1ob3N0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHJpZ2h0OiA1MCU7XG59XG5cbi50LXNldCB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tdHVpLXJhZGl1cy1tKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS10dWktZm9jdXMpO1xuICAgIH1cbn1cblxuLnQtdGV4dCB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuIiwiLy8gY2VudGVyaW5nIHdpdGggdHJhbnNsYXRlXG4uY2VudGVyLWxlZnQoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbn1cblxuLmNlbnRlci10b3AoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4uY2VudGVyLWFsbCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vLyBjbGVhcmZpeFxuLmNsZWFyZml4KCkge1xuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbn1cblxuLy8uZnVsbHNpemVcbi5mdWxsc2l6ZShAcG9zaXRpb246IGFic29sdXRlLCBAbW9kZTogaGVpZ2h0KSB7XG4gICAgcG9zaXRpb246IEBwb3NpdGlvbjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcblxuICAgICYgd2hlbiAoQG1vZGUgPSBoZWlnaHQpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaW5zZXQpIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG5cbi5jbGVhcmJ0bigpIHtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4uYXV0b2ZpbGwoQG1vZGU6ZGVmYXVsdCkge1xuICAgICY6LXdlYmtpdC1hdXRvZmlsbCxcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcbiAgICAgICAgY2FyZXQtY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGVmYXVsdCkge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsKSBpbnNldCAhaW1wb3J0YW50OyAvLyB0byBvdmVybGF5IG5hdGl2ZSBiYWNrZ3JvdW5kXG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAxLW5pZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAxMDByZW0gdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KSBpbnNldCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uY2xlYXJpbnB1dChAbW9kZTogZGVmYXVsdCkge1xuICAgIC5hdXRvZmlsbChAbW9kZSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IGN1cnJlbnRDb2xvcjsgLy8gZm9yIFNhZmFyaVxufVxuXG4udmlzdWFsbHktaGlkZGVuKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBib3JkZXI6IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCgwKTtcbn1cblxuLy8gY3VzdG9taXplIG5hdGl2ZSBzY3JvbGxcbi5jdXN0b21pemUtc2Nyb2xsKCkge1xuICAgIC8vIGV4Y2x1ZGUgbm9uLXN1cHBvcnRpbmcgYnJvd3NlcnNcbiAgICBAbWVkaWEgYWxsIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSBhbmQgKG1pbi1yZXNvbHV0aW9uOiAwLjAwMWRwY20pIHtcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNi4yNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgICAgICBib3JkZXI6IDIuNjY3cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItaG92ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWFjdGl2ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjphY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBzaGFkb3dcbi5zaGFkb3coQG1vZGU6IDEpIHtcbiAgICAvLyBEZWZhdWx0XG4gICAgJiB3aGVuIChAbW9kZSA9IDEpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIERyb3Bkb3duXG4gICAgJiB3aGVuIChAbW9kZSA9IDIpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsXG4gICAgJiB3aGVuIChAbW9kZSA9IDMpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxLjEyNXJlbSAxLjg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuNDgpO1xuICAgIH1cblxuICAgIC8vIFNpZGViYXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNCkge1xuICAgICAgICBib3gtc2hhZG93OiAwLjI1cmVtIDAgMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gSG92ZXJcbiAgICAmIHdoZW4gKEBtb2RlID0gNSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMi4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuXG4gICAgLy8gTmF2aWdhdGlvblxuICAgICYgd2hlbiAoQG1vZGUgPSA2KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICAgIH1cblxuICAgIC8vIE1vZGFsIG1vYmlsZVxuICAgICYgd2hlbiAoQG1vZGUgPSA3KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTFyZW0gMS43NXJlbSByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICAgIH1cbn1cblxuLmluc2V0LWJvcmRlcihAZGlyZWN0aW9uOiBib3R0b20sIEBtb2RlOiBub25lKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gdHJhbnNpdGlvblxuLnRyYW5zaXRpb24oQHBhcmFtLCBAc3BlZWQ6IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpKSB7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogQHBhcmFtO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IEBzcGVlZDtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG5cbi8vIGRhc2hlZCBib3JkZXJcbi5kYXNoZWQtYm9yZGVyKEBjb2xvcjogY3VycmVudENvbG9yLCBAYWxpZ25tZW50OiBib3R0b20sIEBzcGFjZTogNCkge1xuICAgIEBzaXplOiB1bml0KEBzcGFjZSwgcHgpO1xuICAgIEBwZXJjZW50YWdlOiAoMTAwJSAvIEBzcGFjZSAqIDIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQGNvbG9yIDAlLCBAY29sb3IgQHBlcmNlbnRhZ2UsIHRyYW5zcGFyZW50IEBwZXJjZW50YWdlKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIEBhbGlnbm1lbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBAc2l6ZSAxcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyB0eXBpY2FsIG9wYWNpdHkgcHJvcGVydGllcyBmb3IgaWNvbnNcbi5vcGFjaXR5LWljb24oKSB7XG4gICAgb3BhY2l0eTogMC44O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uaG92ZXJhYmxlLXdpdGgtc2hhZG93KCkge1xuICAgIC5zaGFkb3coKTtcbiAgICAudHJhbnNpdGlvbihhbGwpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcblxuICAgICY6aG92ZXIge1xuICAgICAgICAuc2hhZG93KDUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLUBzcGFjZSk7XG4gICAgfVxufVxuXG4vLyBncmFkaWVudFxuLmdyYWRpZW50KEBzdGFydC1jb2xvciwgQGVuZC1jb2xvciwgQGFuZ2xlOiA0NWRlZykge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChAYW5nbGUsIEBzdGFydC1jb2xvciAwJSwgQGVuZC1jb2xvciAxMDAlKTtcbn1cblxuLy8gdHlwaWNhbCBwcm9wZXJ0aWVzIGZvciB0ZXh0IG92ZXJmbG93IHdpdGggZWxsaXBzaXNcbi50ZXh0LW92ZXJmbG93KEB0eXBlOiBub3dyYXApIHtcbiAgICB3aGl0ZS1zcGFjZTogQHR5cGU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4udGV4dC1vdmVyZmxvdy13aXRoLWZhZGUoQGNvbG9yOiB2YXIoLS10dWktYmFzZS0wMSksIEB0cmFuc3BhcmVudENvbG9yOiB0cmFuc3BhcmVudCwgQHdpZHRoOiAxLjg3NXJlbSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiBAd2lkdGg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAdHJhbnNwYXJlbnRDb2xvciAwJSwgQGNvbG9yIDgwJSwgQGNvbG9yIDEwMCUpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuXG4uY3JlYXRlU3RhY2tpbmdDb250ZXh0KCkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4vL3NwYWNlc1xuLnR1aS1zcGFjZShAZGlyZWN0aW9uLCBAc2l6ZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGFsbCkge1xuICAgICAgICBtYXJnaW46IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHRvcCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdmVydGljYWwpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHJpZ2h0KSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gaG9yaXpvbnRhbCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxufVxuXG4uY29udHJhc3QtYmFja2dyb3VuZChAYmFja2dyb3VuZCkge1xuICAgIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiBjb250cmFzdChAYmFja2dyb3VuZCwgIzMzMywgI2ZmZik7XG59XG5cbi5ibHVycmVkLWJhY2tncm91bmQoQGNvbG9yOiAjZmZmKSB7XG4gICAgYmFja2dyb3VuZDogZmFkZShAY29sb3IsIDcwJSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNDM3NXJlbSk7XG59XG5cbi5zY3JvbGxiYXItaGlkZGVuKCkge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlKi9cbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgIC8qIHN0eWxlbGludC1lbmFibGUqL1xuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG59XG5cbi8vIGhpZGUgYW4gZWxlbWVudCB2aXN1YWxseSB3aXRob3V0IGhpZGluZyBpdCBmcm9tIHNjcmVlbiByZWFkZXJzXG4uc3Itb25seSgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoNTAlKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG59XG4iXX0= */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])(valueAssertion, VALUE_ERROR)
], TuiBarChartComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiBarChartComponent.prototype, "max", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiBarChartComponent.prototype, "colorHandler", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiBarChartComponent.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiBarChartComponent.prototype, "collapsed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiBarChartComponent.prototype, "hintContent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiBarChartComponent.prototype, "hintMode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiPure"]
], TuiBarChartComponent.prototype, "getContentContext", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiPure"]
], TuiBarChartComponent.prototype, "transpose", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiPure"]
], TuiBarChartComponent.prototype, "getMax", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiBarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-bar-chart`,
                templateUrl: `./bar-chart.template.html`,
                styleUrls: [`./bar-chart.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiIdService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiIdService"]]
            }] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], colorHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], collapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hintContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hintMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], getContentContext: [], transpose: [], getMax: [] }); })();


/***/ }),

/***/ "../addon-charts/components/bar-chart/bar-chart.module.ts":
/*!****************************************************************!*\
  !*** ../addon-charts/components/bar-chart/bar-chart.module.ts ***!
  \****************************************************************/
/*! exports provided: TuiBarChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBarChartModule", function() { return TuiBarChartModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_charts_components_bar_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-charts/components/bar-set */ "../addon-charts/components/bar-set/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _bar_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bar-chart.component */ "../addon-charts/components/bar-chart/bar-chart.component.ts");








class TuiBarChartModule {
}
TuiBarChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TuiBarChartModule });
TuiBarChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TuiBarChartModule_Factory(t) { return new (t || TuiBarChartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiDescribedByModule"],
            _taiga_ui_addon_charts_components_bar_set__WEBPACK_IMPORTED_MODULE_2__["TuiBarSetModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiFocusableModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiHintModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMapperPipeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TuiBarChartModule, { declarations: [_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__["TuiBarChartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiDescribedByModule"],
        _taiga_ui_addon_charts_components_bar_set__WEBPACK_IMPORTED_MODULE_2__["TuiBarSetModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiFocusableModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiHintModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMapperPipeModule"]], exports: [_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__["TuiBarChartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiBarChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_5__["PolymorpheusModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiDescribedByModule"],
                    _taiga_ui_addon_charts_components_bar_set__WEBPACK_IMPORTED_MODULE_2__["TuiBarSetModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiFocusableModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["TuiHintModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMapperPipeModule"],
                ],
                declarations: [_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__["TuiBarChartComponent"]],
                exports: [_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__["TuiBarChartComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-charts/components/bar-chart/index.ts":
/*!*****************************************************!*\
  !*** ../addon-charts/components/bar-chart/index.ts ***!
  \*****************************************************/
/*! exports provided: valueAssertion, TuiBarChartComponent, TuiBarChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bar_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar-chart.component */ "../addon-charts/components/bar-chart/bar-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueAssertion", function() { return _bar_chart_component__WEBPACK_IMPORTED_MODULE_0__["valueAssertion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarChartComponent", function() { return _bar_chart_component__WEBPACK_IMPORTED_MODULE_0__["TuiBarChartComponent"]; });

/* harmony import */ var _bar_chart_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-chart.module */ "../addon-charts/components/bar-chart/bar-chart.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarChartModule", function() { return _bar_chart_module__WEBPACK_IMPORTED_MODULE_1__["TuiBarChartModule"]; });





/***/ }),

/***/ "../addon-charts/components/bar-set/bar-set.component.ts":
/*!***************************************************************!*\
  !*** ../addon-charts/components/bar-set/bar-set.component.ts ***!
  \***************************************************************/
/*! exports provided: TuiBarSetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBarSetComponent", function() { return TuiBarSetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-charts/constants */ "../addon-charts/constants/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bar_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bar/bar.component */ "../addon-charts/components/bar/bar.component.ts");










const _c0 = function (a0, a1) { return { $implicit: a0, index: a1, flexible: false }; };
function TuiBarSetComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0, 4);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, item_r6, index_r7));
} }
function TuiBarSetComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiBarSetComponent_ng_container_0_ng_container_1_Template, 1, 5, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.computedValue);
} }
const _c1 = function (a0, a1) { return { $implicit: a0, index: a1, flexible: true }; };
function TuiBarSetComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const index_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, item_r9, index_r10));
} }
function TuiBarSetComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiBarSetComponent_ng_template_1_div_0_Template, 2, 5, "div", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.computedValue);
} }
function TuiBarSetComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tui-bar", 7);
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const index_r12 = ctx.index;
    const flexible_r13 = ctx.flexible;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r4.getHeight(item_r11), "%")("background", ctx_r4.getColor(index_r12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("t-bar_flexible", flexible_r13)("t-bar_negative", item_r11 < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r4.computedSegments)("size", ctx_r4.computedSize)("colorHandler", ctx_r4.colorHandler);
} }
const PERCENT = 100;
const EMPTY_ARRAY = [];
const FILLER_ARRAY = [1];
// TODO: 3.0 Remove sanitizer when Angular version is bumped
class TuiBarSetComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.value = [];
        this.colorHandler = _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_3__["TUI_DEFAULT_COLOR_HANDLER"];
        this.size = `m`;
        this.collapsed = false;
    }
    get computedValue() {
        return this.collapsed ? FILLER_ARRAY : this.value;
    }
    get computedSegments() {
        return this.collapsed ? this.value : EMPTY_ARRAY;
    }
    get computedSize() {
        return this.size || `m`;
    }
    getHeight(value) {
        return Math.abs((PERCENT * value) / this.getLargest(this.computedValue));
    }
    getColor(index) {
        return this.sanitizer.bypassSecurityTrustStyle(`var(--tui-chart-${index}, ${Object(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["colorFallback"])(this.colorHandler(index))})`);
    }
    getLargest(value) {
        return value.reduce((a, b) => (a > b ? a : b), 0);
    }
}
TuiBarSetComponent.ɵfac = function TuiBarSetComponent_Factory(t) { return new (t || TuiBarSetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
TuiBarSetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiBarSetComponent, selectors: [["tui-bar-set"]], inputs: { value: "value", colorHandler: "colorHandler", size: "size", collapsed: "collapsed" }, decls: 5, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["flexible", ""], ["bar", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "t-wrapper", 4, "ngFor", "ngForOf"], [1, "t-wrapper"], ["automation-id", "tui-bar-set__bar", 1, "t-bar", 3, "value", "size", "colorHandler"]], template: function TuiBarSetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiBarSetComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiBarSetComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TuiBarSetComponent_ng_template_3_Template, 1, 11, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.size)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _bar_bar_component__WEBPACK_IMPORTED_MODULE_7__["TuiBarComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: flex-end;\n  justify-content: center;\n}\n.t-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  height: 100%;\n  align-items: flex-end;\n}\n.t-wrapper[_ngcontent-%COMP%]:first-child {\n  margin-left: 25%;\n}\n.t-wrapper[_ngcontent-%COMP%]:last-child {\n  margin-right: 25%;\n}\n.t-bar[_ngcontent-%COMP%] {\n  transform-origin: bottom center;\n}\n.t-bar_negative[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  opacity: var(--tui-disabled-opacity);\n}\n.t-bar.t-bar_flexible[_ngcontent-%COMP%] {\n  max-width: none;\n  width: 75%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2Jhci1zZXQvYmFyLXNldC5zdHlsZS5sZXNzIiwicHJvamVjdHMvYWRkb24tY2hhcnRzL2NvbXBvbmVudHMvYmFyLXNldC9iYXItc2V0LnN0eWxlLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7QUNDSjtBREVBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNBSjtBREVJO0VBQ0ksZ0JBQUE7QUNBUjtBREdJO0VBQ0ksaUJBQUE7QUNEUjtBREtBO0VBQ0ksK0JBQUE7QUNISjtBREtJO0VBQ0kseUJBQUE7RUFDQSxvQ0FBQTtBQ0hSO0FETUk7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNKUiIsImZpbGUiOiJwcm9qZWN0cy9hZGRvbi1jaGFydHMvY29tcG9uZW50cy9iYXItc2V0L2Jhci1zZXQuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gICAgfVxufVxuXG4udC1iYXIge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBjZW50ZXI7XG5cbiAgICAmX25lZ2F0aXZlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tdHVpLWRpc2FibGVkLW9wYWNpdHkpO1xuICAgIH1cblxuICAgICYmX2ZsZXhpYmxlIHtcbiAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi50LXdyYXBwZXI6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuLnQtd3JhcHBlcjpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNSU7XG59XG4udC1iYXIge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xufVxuLnQtYmFyX25lZ2F0aXZlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgb3BhY2l0eTogdmFyKC0tdHVpLWRpc2FibGVkLW9wYWNpdHkpO1xufVxuLnQtYmFyLnQtYmFyX2ZsZXhpYmxlIHtcbiAgbWF4LXdpZHRoOiBub25lO1xuICB3aWR0aDogNzUlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiBarSetComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiBarSetComponent.prototype, "colorHandler", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiBarSetComponent.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiBarSetComponent.prototype, "collapsed", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiPure"]
], TuiBarSetComponent.prototype, "getLargest", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiBarSetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-bar-set`,
                templateUrl: `./bar-set.template.html`,
                styleUrls: [`./bar-set.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]]
            }] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], colorHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], collapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], getLargest: [] }); })();


/***/ }),

/***/ "../addon-charts/components/bar-set/bar-set.module.ts":
/*!************************************************************!*\
  !*** ../addon-charts/components/bar-set/bar-set.module.ts ***!
  \************************************************************/
/*! exports provided: TuiBarSetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBarSetModule", function() { return TuiBarSetModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_charts_components_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-charts/components/bar */ "../addon-charts/components/bar/index.ts");
/* harmony import */ var _bar_set_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-set.component */ "../addon-charts/components/bar-set/bar-set.component.ts");





class TuiBarSetModule {
}
TuiBarSetModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TuiBarSetModule });
TuiBarSetModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TuiBarSetModule_Factory(t) { return new (t || TuiBarSetModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_addon_charts_components_bar__WEBPACK_IMPORTED_MODULE_2__["TuiBarModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TuiBarSetModule, { declarations: [_bar_set_component__WEBPACK_IMPORTED_MODULE_3__["TuiBarSetComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_addon_charts_components_bar__WEBPACK_IMPORTED_MODULE_2__["TuiBarModule"]], exports: [_bar_set_component__WEBPACK_IMPORTED_MODULE_3__["TuiBarSetComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiBarSetModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_addon_charts_components_bar__WEBPACK_IMPORTED_MODULE_2__["TuiBarModule"]],
                declarations: [_bar_set_component__WEBPACK_IMPORTED_MODULE_3__["TuiBarSetComponent"]],
                exports: [_bar_set_component__WEBPACK_IMPORTED_MODULE_3__["TuiBarSetComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-charts/components/bar-set/index.ts":
/*!***************************************************!*\
  !*** ../addon-charts/components/bar-set/index.ts ***!
  \***************************************************/
/*! exports provided: TuiBarSetComponent, TuiBarSetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bar_set_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar-set.component */ "../addon-charts/components/bar-set/bar-set.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarSetComponent", function() { return _bar_set_component__WEBPACK_IMPORTED_MODULE_0__["TuiBarSetComponent"]; });

/* harmony import */ var _bar_set_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar-set.module */ "../addon-charts/components/bar-set/bar-set.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarSetModule", function() { return _bar_set_module__WEBPACK_IMPORTED_MODULE_1__["TuiBarSetModule"]; });





/***/ }),

/***/ "../addon-charts/components/bar/bar.component.ts":
/*!*******************************************************!*\
  !*** ../addon-charts/components/bar/bar.component.ts ***!
  \*******************************************************/
/*! exports provided: TuiBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBarComponent", function() { return TuiBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-charts/constants */ "../addon-charts/constants/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");









function TuiBarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 1);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx_r0.getHeight(item_r1), "%")("background", ctx_r0.getColor(index_r2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);
} }
// TODO: 3.0 Remove sanitizer when Angular version is bumped
class TuiBarComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.value = [];
        this.colorHandler = _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_3__["TUI_DEFAULT_COLOR_HANDLER"];
        this.size = `m`;
    }
    getHeight(value) {
        return (100 * value) / this.getSum(this.value);
    }
    getColor(index) {
        return this.sanitizer.bypassSecurityTrustStyle(`var(--tui-chart-${index}, ${Object(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["colorFallback"])(this.colorHandler(index))})`);
    }
    getSum(value) {
        return Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["sum"])(...value);
    }
}
TuiBarComponent.ɵfac = function TuiBarComponent_Factory(t) { return new (t || TuiBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
TuiBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiBarComponent, selectors: [["tui-bar"]], hostVars: 1, hostBindings: function TuiBarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-size", ctx.size);
    } }, inputs: { value: "value", colorHandler: "colorHandler", size: "size" }, decls: 1, vars: 1, consts: [["automation-id", "tui-bar__bar", 3, "height", "background", 4, "ngFor", "ngForOf"], ["automation-id", "tui-bar__bar"]], template: function TuiBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiBarComponent_div_0_Template, 1, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.value);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  min-width: 0.125rem;\n  flex-direction: column-reverse;\n  border-top-left-radius: var(--tui-radius-l);\n  border-top-right-radius: var(--tui-radius-l);\n  overflow: hidden;\n}\n[data-size='l'][_nghost-%COMP%] {\n  width: 1rem;\n  max-width: 1rem;\n  margin: 0 0.1875rem;\n}\n[data-size='m'][_nghost-%COMP%] {\n  width: 0.5rem;\n  max-width: 0.5rem;\n  margin: 0 0.1875rem;\n}\n[data-size='s'][_nghost-%COMP%] {\n  width: 0.25rem;\n  max-width: 0.5rem;\n  margin: 0 0.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2Jhci9iYXIuc3R5bGUubGVzcyIsInByb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2Jhci9iYXIuc3R5bGUubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDUjtBREVJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREdJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNEUiIsImZpbGUiOiJwcm9qZWN0cy9hZGRvbi1jaGFydHMvY29tcG9uZW50cy9iYXIvYmFyLnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6IDAuMTI1cmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS10dWktcmFkaXVzLWwpO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS10dWktcmFkaXVzLWwpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmW2RhdGEtc2l6ZT0nbCddIHtcbiAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgIG1heC13aWR0aDogMXJlbTtcbiAgICAgICAgbWFyZ2luOiAwIDAuMTg3NXJlbTtcbiAgICB9XG5cbiAgICAmW2RhdGEtc2l6ZT0nbSddIHtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgbWF4LXdpZHRoOiAwLjVyZW07XG4gICAgICAgIG1hcmdpbjogMCAwLjE4NzVyZW07XG4gICAgfVxuXG4gICAgJltkYXRhLXNpemU9J3MnXSB7XG4gICAgICAgIHdpZHRoOiAwLjI1cmVtO1xuICAgICAgICBtYXgtd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwIDAuMTI1cmVtO1xuICAgIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLXdpZHRoOiAwLjEyNXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS10dWktcmFkaXVzLWwpO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tdHVpLXJhZGl1cy1sKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0W2RhdGEtc2l6ZT0nbCddIHtcbiAgd2lkdGg6IDFyZW07XG4gIG1heC13aWR0aDogMXJlbTtcbiAgbWFyZ2luOiAwIDAuMTg3NXJlbTtcbn1cbjpob3N0W2RhdGEtc2l6ZT0nbSddIHtcbiAgd2lkdGg6IDAuNXJlbTtcbiAgbWF4LXdpZHRoOiAwLjVyZW07XG4gIG1hcmdpbjogMCAwLjE4NzVyZW07XG59XG46aG9zdFtkYXRhLXNpemU9J3MnXSB7XG4gIHdpZHRoOiAwLjI1cmVtO1xuICBtYXgtd2lkdGg6IDAuNXJlbTtcbiAgbWFyZ2luOiAwIDAuMTI1cmVtO1xufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiBarComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiBarComponent.prototype, "colorHandler", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiBarComponent.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiPure"]
], TuiBarComponent.prototype, "getSum", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-bar`,
                templateUrl: `./bar.template.html`,
                styleUrls: [`./bar.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]]
            }] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], colorHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`attr.data-size`]
        }], getSum: [] }); })();


/***/ }),

/***/ "../addon-charts/components/bar/bar.module.ts":
/*!****************************************************!*\
  !*** ../addon-charts/components/bar/bar.module.ts ***!
  \****************************************************/
/*! exports provided: TuiBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiBarModule", function() { return TuiBarModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar.component */ "../addon-charts/components/bar/bar.component.ts");




class TuiBarModule {
}
TuiBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TuiBarModule });
TuiBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TuiBarModule_Factory(t) { return new (t || TuiBarModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TuiBarModule, { declarations: [_bar_component__WEBPACK_IMPORTED_MODULE_2__["TuiBarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_bar_component__WEBPACK_IMPORTED_MODULE_2__["TuiBarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                declarations: [_bar_component__WEBPACK_IMPORTED_MODULE_2__["TuiBarComponent"]],
                exports: [_bar_component__WEBPACK_IMPORTED_MODULE_2__["TuiBarComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-charts/components/bar/index.ts":
/*!***********************************************!*\
  !*** ../addon-charts/components/bar/index.ts ***!
  \***********************************************/
/*! exports provided: TuiBarComponent, TuiBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar.component */ "../addon-charts/components/bar/bar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarComponent", function() { return _bar_component__WEBPACK_IMPORTED_MODULE_0__["TuiBarComponent"]; });

/* harmony import */ var _bar_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bar.module */ "../addon-charts/components/bar/bar.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarModule", function() { return _bar_module__WEBPACK_IMPORTED_MODULE_1__["TuiBarModule"]; });





/***/ }),

/***/ "../addon-charts/components/index.ts":
/*!*******************************************!*\
  !*** ../addon-charts/components/index.ts ***!
  \*******************************************/
/*! exports provided: TuiArcChartComponent, TuiArcChartModule, TuiAxesComponent, TuiAxesModule, TuiBarComponent, TuiBarModule, valueAssertion, TuiBarChartComponent, TuiBarChartModule, TuiBarSetComponent, TuiBarSetModule, TuiLegendItemComponent, TuiLegendItemModule, smoothingAssertion, TuiLineChartComponent, TuiLineChartModule, TuiLineChartHintDirective, TuiLineDaysChartComponent, TuiLineDaysChartModule, TuiLineDaysChartHintDirective, TuiPieChartComponent, TuiPieChartDirective, TuiPieChartModule, TuiRingChartComponent, TuiRingChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taiga_ui_addon_charts_components_arc_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/addon-charts/components/arc-chart */ "../addon-charts/components/arc-chart/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiArcChartComponent", function() { return _taiga_ui_addon_charts_components_arc_chart__WEBPACK_IMPORTED_MODULE_0__["TuiArcChartComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiArcChartModule", function() { return _taiga_ui_addon_charts_components_arc_chart__WEBPACK_IMPORTED_MODULE_0__["TuiArcChartModule"]; });

/* harmony import */ var _taiga_ui_addon_charts_components_axes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-charts/components/axes */ "../addon-charts/components/axes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiAxesComponent", function() { return _taiga_ui_addon_charts_components_axes__WEBPACK_IMPORTED_MODULE_1__["TuiAxesComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiAxesModule", function() { return _taiga_ui_addon_charts_components_axes__WEBPACK_IMPORTED_MODULE_1__["TuiAxesModule"]; });

/* harmony import */ var _taiga_ui_addon_charts_components_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-charts/components/bar */ "../addon-charts/components/bar/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarComponent", function() { return _taiga_ui_addon_charts_components_bar__WEBPACK_IMPORTED_MODULE_2__["TuiBarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarModule", function() { return _taiga_ui_addon_charts_components_bar__WEBPACK_IMPORTED_MODULE_2__["TuiBarModule"]; });

/* harmony import */ var _taiga_ui_addon_charts_components_bar_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-charts/components/bar-chart */ "../addon-charts/components/bar-chart/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueAssertion", function() { return _taiga_ui_addon_charts_components_bar_chart__WEBPACK_IMPORTED_MODULE_3__["valueAssertion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarChartComponent", function() { return _taiga_ui_addon_charts_components_bar_chart__WEBPACK_IMPORTED_MODULE_3__["TuiBarChartComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarChartModule", function() { return _taiga_ui_addon_charts_components_bar_chart__WEBPACK_IMPORTED_MODULE_3__["TuiBarChartModule"]; });

/* harmony import */ var _taiga_ui_addon_charts_components_bar_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-charts/components/bar-set */ "../addon-charts/components/bar-set/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarSetComponent", function() { return _taiga_ui_addon_charts_components_bar_set__WEBPACK_IMPORTED_MODULE_4__["TuiBarSetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarSetModule", function() { return _taiga_ui_addon_charts_components_bar_set__WEBPACK_IMPORTED_MODULE_4__["TuiBarSetModule"]; });

/* harmony import */ var _taiga_ui_addon_charts_components_legend_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/addon-charts/components/legend-item */ "../addon-charts/components/legend-item/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLegendItemComponent", function() { return _taiga_ui_addon_charts_components_legend_item__WEBPACK_IMPORTED_MODULE_5__["TuiLegendItemComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLegendItemModule", function() { return _taiga_ui_addon_charts_components_legend_item__WEBPACK_IMPORTED_MODULE_5__["TuiLegendItemModule"]; });

/* harmony import */ var _taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/addon-charts/components/line-chart */ "../addon-charts/components/line-chart/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "smoothingAssertion", function() { return _taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_6__["smoothingAssertion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartComponent", function() { return _taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_6__["TuiLineChartComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartModule", function() { return _taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_6__["TuiLineChartModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartHintDirective", function() { return _taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_6__["TuiLineChartHintDirective"]; });

/* harmony import */ var _taiga_ui_addon_charts_components_line_days_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @taiga-ui/addon-charts/components/line-days-chart */ "../addon-charts/components/line-days-chart/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineDaysChartComponent", function() { return _taiga_ui_addon_charts_components_line_days_chart__WEBPACK_IMPORTED_MODULE_7__["TuiLineDaysChartComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineDaysChartModule", function() { return _taiga_ui_addon_charts_components_line_days_chart__WEBPACK_IMPORTED_MODULE_7__["TuiLineDaysChartModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineDaysChartHintDirective", function() { return _taiga_ui_addon_charts_components_line_days_chart__WEBPACK_IMPORTED_MODULE_7__["TuiLineDaysChartHintDirective"]; });

/* harmony import */ var _taiga_ui_addon_charts_components_pie_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @taiga-ui/addon-charts/components/pie-chart */ "../addon-charts/components/pie-chart/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiPieChartComponent", function() { return _taiga_ui_addon_charts_components_pie_chart__WEBPACK_IMPORTED_MODULE_8__["TuiPieChartComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiPieChartDirective", function() { return _taiga_ui_addon_charts_components_pie_chart__WEBPACK_IMPORTED_MODULE_8__["TuiPieChartDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiPieChartModule", function() { return _taiga_ui_addon_charts_components_pie_chart__WEBPACK_IMPORTED_MODULE_8__["TuiPieChartModule"]; });

/* harmony import */ var _taiga_ui_addon_charts_components_ring_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @taiga-ui/addon-charts/components/ring-chart */ "../addon-charts/components/ring-chart/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiRingChartComponent", function() { return _taiga_ui_addon_charts_components_ring_chart__WEBPACK_IMPORTED_MODULE_9__["TuiRingChartComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiRingChartModule", function() { return _taiga_ui_addon_charts_components_ring_chart__WEBPACK_IMPORTED_MODULE_9__["TuiRingChartModule"]; });













/***/ }),

/***/ "../addon-charts/components/legend-item/index.ts":
/*!*******************************************************!*\
  !*** ../addon-charts/components/legend-item/index.ts ***!
  \*******************************************************/
/*! exports provided: TuiLegendItemComponent, TuiLegendItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _legend_item_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legend-item.component */ "../addon-charts/components/legend-item/legend-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLegendItemComponent", function() { return _legend_item_component__WEBPACK_IMPORTED_MODULE_0__["TuiLegendItemComponent"]; });

/* harmony import */ var _legend_item_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legend-item.module */ "../addon-charts/components/legend-item/legend-item.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLegendItemModule", function() { return _legend_item_module__WEBPACK_IMPORTED_MODULE_1__["TuiLegendItemModule"]; });





/***/ }),

/***/ "../addon-charts/components/legend-item/legend-item.component.ts":
/*!***********************************************************************!*\
  !*** ../addon-charts/components/legend-item/legend-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: TuiLegendItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLegendItemComponent", function() { return TuiLegendItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/components/button/button.component */ "../core/components/button/button.component.ts");






const _c0 = [[["tui-primitive-checkbox"]], "*"];
const _c1 = ["tui-primitive-checkbox", "*"];
// TODO: 3.0 Remove fallback
class TuiLegendItemComponent {
    constructor() {
        this.active = false;
        this.color = ``;
        this.text = ``;
        this.size = `m`;
        this.disabled = false;
    }
    get computedColor() {
        if (this.color === `var(--tui-primary)`) {
            return null;
        }
        return this.color.startsWith(`var(`) ? this.color : Object(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["colorFallback"])(this.color);
    }
}
TuiLegendItemComponent.ɵfac = function TuiLegendItemComponent_Factory(t) { return new (t || TuiLegendItemComponent)(); };
TuiLegendItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiLegendItemComponent, selectors: [["tui-legend-item"]], hostVars: 5, hostBindings: function TuiLegendItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-size", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("--tui-primary", ctx.computedColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_disabled", ctx.disabled);
    } }, inputs: { active: "active", color: "color", text: "text", size: "size", disabled: "disabled" }, ngContentSelectors: _c1, decls: 7, vars: 2, consts: [["tuiButton", "", "type", "button", "size", "s", "appearance", "whiteblock", 1, "t-button", 3, "pseudoHovered"], [1, "t-wrapper"], [1, "t-dot"], [1, "t-text"]], template: function TuiLegendItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pseudoHovered", ctx.active || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.text);
    } }, directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["TuiButtonComponent"]], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n.t-button[_ngcontent-%COMP%] {\n  height: 2rem;\n  font-weight: bold;\n}\n[data-size='m'][_nghost-%COMP%]   .t-button[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  font: var(--tui-font-text-m);\n  font-weight: bold;\n}\n.t-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  pointer-events: none;\n}\n._disabled[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%] {\n  color: var(--tui-text-03);\n}\n.t-dot[_ngcontent-%COMP%] {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 100%;\n  background: var(--tui-primary);\n}\n._disabled[_nghost-%COMP%]   .t-dot[_ngcontent-%COMP%] {\n  background: var(--tui-base-04);\n}\n.t-dot[_ngcontent-%COMP%]:not(:first-child) {\n  display: none;\n}\n.t-text[_ngcontent-%COMP%] {\n  margin: 0 0.5rem;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2xlZ2VuZC1pdGVtL2xlZ2VuZC1pdGVtLnN0eWxlLmxlc3MiLCJwcm9qZWN0cy9hZGRvbi1jaGFydHMvY29tcG9uZW50cy9sZWdlbmQtaXRlbS9sZWdlbmQtaXRlbS5zdHlsZS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSjtBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQUo7QURFSTtFQUNJLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FDQVI7QURJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDRko7QURJSTtFQUNJLHlCQUFBO0FDRlI7QURNQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0pKO0FETUk7RUFDSSw4QkFBQTtBQ0pSO0FET0k7RUFDSSxhQUFBO0FDTFI7QURTQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNQSiIsImZpbGUiOiJwcm9qZWN0cy9hZGRvbi1jaGFydHMvY29tcG9uZW50cy9sZWdlbmQtaXRlbS9sZWdlbmQtaXRlbS5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnQtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICA6aG9zdFtkYXRhLXNpemU9J20nXSAmIHtcbiAgICAgICAgaGVpZ2h0OiAyLjI1cmVtO1xuICAgICAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LW0pO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbi50LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIDpob3N0Ll9kaXNhYmxlZCAmIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcbiAgICB9XG59XG5cbi50LWRvdCB7XG4gICAgd2lkdGg6IDAuNXJlbTtcbiAgICBoZWlnaHQ6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1wcmltYXJ5KTtcblxuICAgIDpob3N0Ll9kaXNhYmxlZCAmIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhc2UtMDQpO1xuICAgIH1cblxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLnQtdGV4dCB7XG4gICAgbWFyZ2luOiAwIDAuNXJlbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4udC1idXR0b24ge1xuICBoZWlnaHQ6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuOmhvc3RbZGF0YS1zaXplPSdtJ10gLnQtYnV0dG9uIHtcbiAgaGVpZ2h0OiAyLjI1cmVtO1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LW0pO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbjpob3N0Ll9kaXNhYmxlZCAudC13cmFwcGVyIHtcbiAgY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcbn1cbi50LWRvdCB7XG4gIHdpZHRoOiAwLjVyZW07XG4gIGhlaWdodDogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktcHJpbWFyeSk7XG59XG46aG9zdC5fZGlzYWJsZWQgLnQtZG90IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhc2UtMDQpO1xufVxuLnQtZG90Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi50LXRleHQge1xuICBtYXJnaW46IDAgMC41cmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiLegendItemComponent.prototype, "active", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiLegendItemComponent.prototype, "color", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiLegendItemComponent.prototype, "text", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["tuiDefaultProp"])()
], TuiLegendItemComponent.prototype, "size", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiLegendItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-legend-item`,
                templateUrl: `./legend-item.template.html`,
                styleUrls: [`./legend-item.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`attr.data-size`]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`class._disabled`]
        }], computedColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`style.--tui-primary`]
        }] }); })();


/***/ }),

/***/ "../addon-charts/components/legend-item/legend-item.module.ts":
/*!********************************************************************!*\
  !*** ../addon-charts/components/legend-item/legend-item.module.ts ***!
  \********************************************************************/
/*! exports provided: TuiLegendItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLegendItemModule", function() { return TuiLegendItemModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _legend_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./legend-item.component */ "../addon-charts/components/legend-item/legend-item.component.ts");





class TuiLegendItemModule {
}
TuiLegendItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TuiLegendItemModule });
TuiLegendItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TuiLegendItemModule_Factory(t) { return new (t || TuiLegendItemModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiButtonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TuiLegendItemModule, { declarations: [_legend_item_component__WEBPACK_IMPORTED_MODULE_3__["TuiLegendItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiButtonModule"]], exports: [_legend_item_component__WEBPACK_IMPORTED_MODULE_3__["TuiLegendItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiLegendItemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__["TuiButtonModule"]],
                declarations: [_legend_item_component__WEBPACK_IMPORTED_MODULE_3__["TuiLegendItemComponent"]],
                exports: [_legend_item_component__WEBPACK_IMPORTED_MODULE_3__["TuiLegendItemComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-charts/components/line-chart/index.ts":
/*!******************************************************!*\
  !*** ../addon-charts/components/line-chart/index.ts ***!
  \******************************************************/
/*! exports provided: smoothingAssertion, TuiLineChartComponent, TuiLineChartModule, TuiLineChartHintDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _line_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-chart.component */ "../addon-charts/components/line-chart/line-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "smoothingAssertion", function() { return _line_chart_component__WEBPACK_IMPORTED_MODULE_0__["smoothingAssertion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartComponent", function() { return _line_chart_component__WEBPACK_IMPORTED_MODULE_0__["TuiLineChartComponent"]; });

/* harmony import */ var _line_chart_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-chart.module */ "../addon-charts/components/line-chart/line-chart.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartModule", function() { return _line_chart_module__WEBPACK_IMPORTED_MODULE_1__["TuiLineChartModule"]; });

/* harmony import */ var _line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-chart-hint.directive */ "../addon-charts/components/line-chart/line-chart-hint.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartHintDirective", function() { return _line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_2__["TuiLineChartHintDirective"]; });






/***/ }),

/***/ "../addon-charts/components/line-chart/line-chart-hint.directive.ts":
/*!**************************************************************************!*\
  !*** ../addon-charts/components/line-chart/line-chart-hint.directive.ts ***!
  \**************************************************************************/
/*! exports provided: TuiLineChartHintDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartHintDirective", function() { return TuiLineChartHintDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-web-apis/common */ "../../node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _line_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./line-chart.component */ "../addon-charts/components/line-chart/line-chart.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");










class TuiLineChartHintDirective {
    constructor(renderer, destroy$, { nativeElement }, ngZone, animationFrame$) {
        this.renderer = renderer;
        this.charts = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["EMPTY_QUERY"];
        this.chartsRef = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["EMPTY_QUERY"];
        this.hint = ``;
        animationFrame$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["throttleTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => !!nativeElement.querySelector(`.${_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["HINT_HOVERED_CLASS"]}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(v => !v), Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiZonefree"])(ngZone), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(destroy$))
            .subscribe(() => {
            this.charts.forEach(chart => chart.onHovered(NaN));
        });
    }
    // _chart is required by TuiLineDaysChartComponent that impersonates this directive
    getContext(index, _chart) {
        return this.computeContext(index, this.charts);
    }
    // _chart is required by TuiLineDaysChartComponent that impersonates this directive
    raise(index, _chart) {
        const current = this.charts.map(chart => chart.value[index]);
        const sorted = [...current].sort((a, b) => a[1] - b[1]);
        this.charts.forEach(chart => chart.onHovered(index));
        this.chartsRef.forEach(({ nativeElement }, index) => this.renderer.setStyle(nativeElement, `z-index`, sorted.indexOf(current[index])));
    }
    computeContext(index, charts) {
        return {
            $implicit: charts.map(chart => chart.value[index]),
            index,
        };
    }
}
TuiLineChartHintDirective.ɵfac = function TuiLineChartHintDirective_Factory(t) { return new (t || TuiLineChartHintDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_FRAME"])); };
TuiLineChartHintDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TuiLineChartHintDirective, selectors: [["", "tuiLineChartHint", ""]], contentQueries: function TuiLineChartHintDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _line_chart_component__WEBPACK_IMPORTED_MODULE_6__["TuiLineChartComponent"], false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _line_chart_component__WEBPACK_IMPORTED_MODULE_6__["TuiLineChartComponent"], false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.charts = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chartsRef = _t);
    } }, inputs: { hint: ["tuiLineChartHint", "hint"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]])] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiLineChartHintDirective.prototype, "hint", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiPure"]
], TuiLineChartHintDirective.prototype, "computeContext", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiLineChartHintDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `[tuiLineChartHint]`,
                providers: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]
            }] }, { type: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]
            }] }, { type: rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_FRAME"]]
            }] }]; }, { charts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _line_chart_component__WEBPACK_IMPORTED_MODULE_6__["TuiLineChartComponent"])]
        }], chartsRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _line_chart_component__WEBPACK_IMPORTED_MODULE_6__["TuiLineChartComponent"]), { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]
        }], hint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: [`tuiLineChartHint`]
        }], computeContext: [] }); })();


/***/ }),

/***/ "../addon-charts/components/line-chart/line-chart.component.ts":
/*!*********************************************************************!*\
  !*** ../addon-charts/components/line-chart/line-chart.component.ts ***!
  \*********************************************************************/
/*! exports provided: smoothingAssertion, TuiLineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "smoothingAssertion", function() { return smoothingAssertion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartComponent", function() { return TuiLineChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_charts_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-charts/utils */ "../addon-charts/utils/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./line-chart-hint.directive */ "../addon-charts/components/line-chart/line-chart-hint.directive.ts");
/* harmony import */ var _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../cdk/directives/let/let.directive */ "../cdk/directives/let/let.directive.ts");
/* harmony import */ var _core_directives_hint_hint_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/directives/hint/hint.directive */ "../core/directives/hint/hint.directive.ts");
/* harmony import */ var _cdk_directives_focusable_focusable_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../cdk/directives/focusable/focusable.directive */ "../cdk/directives/focusable/focusable.directive.ts");
/* harmony import */ var _core_directives_described_by_described_by_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/directives/described-by/described-by.directive */ "../core/directives/described-by/described-by.directive.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");

















function TuiLineChartComponent_ng_container_0_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 9);
} if (rf & 2) {
    const point_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx_r5.getLeft(point_r6[0]), "%")("bottom", ctx_r5.getBottom(point_r6[1]), "%");
} }
function TuiLineChartComponent_ng_container_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TuiLineChartComponent_ng_container_0_ng_container_8_div_1_Template, 1, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.value);
} }
function TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_div_1_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const index_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r15.onMouseEnter(index_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const index_r9 = ctx_r18.index;
    const point_r8 = ctx_r18.$implicit;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const hovered_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).tuiLet;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx_r10.getLeft(ctx_r10.getX(index_r9)), "%")("width", ctx_r10.getWidth(index_r9), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("t-column_hovered", hovered_r1 === index_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tuiHintHost", _r14)("tuiHint", ctx_r10.hintDirective || ctx_r10.hintContent ? _r12 : "")("tuiHintId", ctx_r10.getHintId(index_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx_r10.getOffset(index_r9), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx_r10.getOffset(index_r9), "%")("bottom", ctx_r10.getBottom(point_r8[1]), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tuiFocusable", ctx_r10.isFocusable)("tuiDescribedBy", ctx_r10.getHintId(index_r9));
} }
function TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 18);
} if (rf & 2) {
    const point_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("bottom", ctx_r11.getBottom(point_r8[1]), "%");
} }
function TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 21);
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const point_r8 = ctx_r24.$implicit;
    const index_r9 = ctx_r24.index;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx_r21.hintDirective.hint)("context", ctx_r21.getContentContext(point_r8, index_r9));
} }
const _c0 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_ng_template_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 21);
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const point_r8 = ctx_r25.$implicit;
    const index_r9 = ctx_r25.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx_r23.hintContent)("context", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](2, _c0, point_r8, index_r9));
} }
function TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_ng_template_3_div_0_Template, 1, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_ng_template_3_ng_template_1_Template, 1, 5, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r13.hintDirective)("ngIfElse", _r22);
} }
function TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_div_1_Template, 4, 17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_div_2_Template, 1, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_ng_template_3_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.value.length > 1 || ctx_r7.dots);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r7.isFocusable);
} }
function TuiLineChartComponent_ng_container_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_Template, 5, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.value);
} }
function TuiLineChartComponent_ng_container_0_ng_container_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("left", ctx_r27.getLeft(point_r26[0]), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r27.xStringify(point_r26[0]), " ");
} }
function TuiLineChartComponent_ng_container_0_ng_container_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const point_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("bottom", ctx_r28.getBottom(point_r26[1]), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r28.yStringify(point_r26[1]), " ");
} }
function TuiLineChartComponent_ng_container_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TuiLineChartComponent_ng_container_0_ng_container_10_div_1_Template, 2, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TuiLineChartComponent_ng_container_0_ng_container_10_div_2_Template, 2, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.xStringify);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.yStringify);
} }
function TuiLineChartComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "linearGradient", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "stop", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "stop", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TuiLineChartComponent_ng_container_0_ng_container_8_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TuiLineChartComponent_ng_container_0_ng_container_9_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TuiLineChartComponent_ng_container_0_ng_container_10_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const hovered_r1 = ctx.tuiLet;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("viewBox", ctx_r0.viewBox);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx_r0.fillId);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("fill", ctx_r0.fill)("d", ctx_r0.fillD);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("d", ctx_r0.d);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.dots);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.hasHints);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.getHovered(hovered_r1));
} }
// eslint-disable-next-line @typescript-eslint/naming-convention
function smoothingAssertion(smoothingFactor) {
    return Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["inRange"])(smoothingFactor, 0, 100);
}
const SMOOTHING_MESSAGE = `smoothingFactor must be between 0 and 100`;
class TuiLineChartComponent {
    constructor(idService, ngZone, locationRef, hintDirective) {
        this.ngZone = ngZone;
        this.locationRef = locationRef;
        this.hintDirective = hintDirective;
        this._hovered$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.smoothingFactor = 0;
        this.hintContent = ``;
        this.xStringify = null;
        this.yStringify = null;
        this.filled = false;
        this.dots = false;
        this.value = [];
        this.autoIdString = idService.generate();
    }
    set valueSetter(value) {
        this.value = value.filter(item => !item.some(isNaN));
    }
    get hovered$() {
        return this._hovered$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiZoneOptimized"])(this.ngZone));
    }
    get fillId() {
        return `tui-line-chart-${this.autoIdString}`;
    }
    get fill() {
        return this.filled
            ? `url(${this.locationRef.prepareExternalUrl(this.locationRef.path())}#${this.fillId})`
            : `none`;
    }
    get viewBox() {
        return `${this.x} ${this.y} ${this.width} ${this.height}`;
    }
    get d() {
        return this.getD(this.value, this.smoothingFactor);
    }
    get fillD() {
        return this.value.length
            ? `${this.d}V ${this.y} H ${this.value[0][0]} V ${this.value[0][1]}`
            : this.d;
    }
    get isFocusable() {
        return !this.hintDirective && this.hasHints;
    }
    get hasHints() {
        var _a;
        return (!!this.xStringify ||
            !!this.yStringify ||
            !!((_a = this.hintDirective) === null || _a === void 0 ? void 0 : _a.hint) ||
            !!this.hintContent);
    }
    onMouseLeave() {
        if (!this.hintDirective) {
            this.onHovered(NaN);
        }
    }
    getX(index) {
        if (this.isSinglePoint) {
            return this.value[0][0] / 2;
        }
        return index
            ? (this.value[index - 1][0] + this.value[index][0]) / 2
            : 2 * this.value[0][0] - this.getX(1);
    }
    getWidth(index) {
        return (100 * this.computeWidth(index)) / this.width;
    }
    getHintId(index) {
        return `${this.autoIdString}_${index}`;
    }
    getContentContext($implicit, index) {
        var _a;
        return (((_a = this.hintDirective) === null || _a === void 0 ? void 0 : _a.getContext(this.value.indexOf($implicit), this)) || {
            $implicit: [],
            index,
        });
    }
    getHovered(hovered) {
        // This checks for NaN and null too since async pipe returns null before first item
        return Number.isInteger(hovered) ? this.value[hovered] : null;
    }
    getBottom(y) {
        return (100 * (y - this.y)) / this.height;
    }
    getLeft(x) {
        return (100 * (x - this.x)) / this.width;
    }
    getOffset(x) {
        return (100 * (this.value[x][0] - this.getX(x))) / this.computeWidth(x);
    }
    onMouseEnter(index) {
        if (this.hintDirective) {
            this.hintDirective.raise(index, this);
        }
        else {
            this.onHovered(index);
        }
    }
    onHovered(index) {
        this._hovered$.next(index);
    }
    get isSinglePoint() {
        return this.value.length === 1;
    }
    getD(value, smoothingFactor) {
        return value.reduce((d, point, index) => index ? `${d} ${Object(_taiga_ui_addon_charts_utils__WEBPACK_IMPORTED_MODULE_3__["draw"])(value, index, smoothingFactor)}` : `M ${point}`, ``);
    }
    computeWidth(index) {
        return index === this.value.length - 1
            ? 2 * (this.value[index][0] - this.getX(index))
            : this.getX(index + 1) - this.getX(index);
    }
}
TuiLineChartComponent.ɵfac = function TuiLineChartComponent_Factory(t) { return new (t || TuiLineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_7__["TuiLineChartHintDirective"], 8)); };
TuiLineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TuiLineChartComponent, selectors: [["tui-line-chart"]], hostBindings: function TuiLineChartComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseleave", function TuiLineChartComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { valueSetter: ["value", "valueSetter"], x: "x", y: "y", width: "width", height: "height", smoothingFactor: "smoothingFactor", hintContent: "hintContent", xStringify: "xStringify", yStringify: "yStringify", filled: "filled", dots: "dots" }, decls: 2, vars: 3, consts: [[4, "tuiLet"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", "preserveAspectRatio", "none", "width", "100%", "height", "100%", 1, "t-svg"], ["x1", "0", "x2", "0", "y1", "1", "y2", "0"], ["stop-color", "currentColor", "offset", "0%", "stop-opacity", "0.5"], ["stop-color", "currentColor", "offset", "100%", "stop-opacity", "0"], ["stroke", "none"], ["fill", "none", "stroke", "currentColor", "vector-effect", "non-scaling-stroke", "stroke-width", "2"], [4, "ngIf"], ["class", "t-dot", 3, "left", "bottom", 4, "ngFor", "ngForOf"], [1, "t-dot"], [4, "ngFor", "ngForOf"], ["tuiHintDirection", "top-left", "class", "t-column", 3, "t-column_hovered", "tuiHintHost", "tuiHint", "tuiHintId", "left", "width", "mouseenter", 4, "ngIf"], ["class", "t-line t-line_horizontal", 3, "bottom", 4, "ngIf"], ["hint", ""], ["tuiHintDirection", "top-left", 1, "t-column", 3, "tuiHintHost", "tuiHint", "tuiHintId", "mouseenter"], [1, "t-line", "t-line_vertical"], [1, "t-host", 3, "tuiFocusable", "tuiDescribedBy"], ["hintHost", ""], [1, "t-line", "t-line_horizontal"], ["polymorpheus-outlet", "", "class", "t-text", 3, "content", "context", 4, "ngIf", "ngIfElse"], ["single", ""], ["polymorpheus-outlet", "", 1, "t-text", 3, "content", "context"], ["class", "t-hint t-hint_x", 3, "left", 4, "ngIf"], ["class", "t-hint t-hint_y", 3, "bottom", 4, "ngIf"], [1, "t-hint", "t-hint_x"], [1, "t-hint", "t-hint_y"]], template: function TuiLineChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, TuiLineChartComponent_ng_container_0_Template, 11, 8, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tuiLet", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, ctx.hovered$));
    } }, directives: [_cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_8__["TuiLetDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _core_directives_hint_hint_directive__WEBPACK_IMPORTED_MODULE_9__["TuiHintDirective"], _cdk_directives_focusable_focusable_directive__WEBPACK_IMPORTED_MODULE_10__["TuiFocusableDirective"], _core_directives_described_by_described_by_directive__WEBPACK_IMPORTED_MODULE_11__["TuiDescribedByDirective"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_12__["PolymorpheusOutletComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.t-svg[_ngcontent-%COMP%] {\n  transform: scale(1, -1);\n}\n.t-column[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  pointer-events: auto;\n}\n.t-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0.375rem;\n  height: 0.375rem;\n  border-radius: 100%;\n  background: currentColor;\n  margin: -0.1875rem;\n  box-shadow: 0 0 0 2px #fff;\n}\n.t-host[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 100%;\n  opacity: 0;\n  background: #fff;\n  margin: -0.25rem;\n  box-shadow: 0 0 0 2px currentColor, 0 0.0625rem 0.1875rem 0.125rem rgba(0, 0, 0, 0.1);\n  outline: none;\n  pointer-events: none;\n}\n.t-host[_ngcontent-%COMP%]:focus, .t-column_hovered[_ngcontent-%COMP%]   .t-host[_ngcontent-%COMP%], .t-column[_ngcontent-%COMP%]:hover   .t-host[_ngcontent-%COMP%], .t-column._hint_hovered[_ngcontent-%COMP%]   .t-host[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.t-line[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  background: var(--tui-base-03);\n}\n.t-line_vertical[_ngcontent-%COMP%] {\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 1px;\n}\n.t-line_horizontal[_ngcontent-%COMP%] {\n  z-index: -1;\n  width: 100%;\n  height: 1px;\n}\n[style^='z-index: 0'][_nghost-%COMP%]   .t-column_hovered[_ngcontent-%COMP%]   .t-line[_ngcontent-%COMP%], [_nghost-%COMP%]:not([style])   .t-column[_ngcontent-%COMP%]:hover   .t-line[_ngcontent-%COMP%], [_nghost-%COMP%]:not([style])   .t-column._hint_hovered[_ngcontent-%COMP%]   .t-line[_ngcontent-%COMP%], [style^='z-index: 0'][_nghost-%COMP%]   .t-column_hovered[_ngcontent-%COMP%]    + .t-line[_ngcontent-%COMP%], [_nghost-%COMP%]:not([style])   .t-column[_ngcontent-%COMP%]:hover    + .t-line[_ngcontent-%COMP%], [_nghost-%COMP%]:not([style])   .t-column._hint_hovered[_ngcontent-%COMP%]    + .t-line[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.t-text[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n.t-hint[_ngcontent-%COMP%] {\n  box-shadow: 0 0.25rem 1.5rem rgba(0, 0, 0, 0.12);\n  position: absolute;\n  font: var(--tui-font-text-xs);\n  height: 1.25rem;\n  line-height: 1.25rem;\n  margin-bottom: -0.625rem;\n  padding: 0 0.375rem;\n  white-space: nowrap;\n  color: var(--tui-base-09);\n  background: var(--tui-base-01);\n  transform: translate3d(-50%, 0, 0);\n}\n.t-hint_x[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n.t-hint_y[_ngcontent-%COMP%] {\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvYWRkb24tY2hhcnRzL2NvbXBvbmVudHMvbGluZS1jaGFydC9saW5lLWNoYXJ0LnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNIRDtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FES0o7QUNGQTtFQUNJLHVCQUFBO0FESUo7QUNEQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBREdKO0FDQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FERUo7QUNDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFGQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNDSTs7OztFQUlJLFVBQUE7QURDUjtBQ0dBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QURESjtBQ0dJO0VBQ0ksTUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRERSO0FDSUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QURGUjtBQ0tJOzs7Ozs7RUFNSSxVQUFBO0FESFI7QUNPQTtFQUNJLHFCQUFBO0FETEo7QUNRQTtFQzREUSxnREFBQTtFRDFESixrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0FETko7QUNRSTtFQUNJLFNBQUE7QUROUjtBQ1NJO0VBQ0ksT0FBQTtBRFBSIiwiZmlsZSI6InByb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5zdHlsZS5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi50LXN2ZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xufVxuLnQtY29sdW1uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4udC1kb3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwLjM3NXJlbTtcbiAgaGVpZ2h0OiAwLjM3NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xuICBtYXJnaW46IC0wLjE4NzVyZW07XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZmZmO1xufVxuLnQtaG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMC41cmVtO1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAtMC4yNXJlbTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IGN1cnJlbnRDb2xvciwgMCAwLjA2MjVyZW0gMC4xODc1cmVtIDAuMTI1cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4udC1ob3N0OmZvY3VzLFxuLnQtY29sdW1uX2hvdmVyZWQgLnQtaG9zdCxcbi50LWNvbHVtbjpob3ZlciAudC1ob3N0LFxuLnQtY29sdW1uLl9oaW50X2hvdmVyZWQgLnQtaG9zdCB7XG4gIG9wYWNpdHk6IDE7XG59XG4udC1saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dWktYmFzZS0wMyk7XG59XG4udC1saW5lX3ZlcnRpY2FsIHtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDFweDtcbn1cbi50LWxpbmVfaG9yaXpvbnRhbCB7XG4gIHotaW5kZXg6IC0xO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG59XG46aG9zdFtzdHlsZV49J3otaW5kZXg6IDAnXSAudC1jb2x1bW5faG92ZXJlZCAudC1saW5lLFxuOmhvc3Q6bm90KFtzdHlsZV0pIC50LWNvbHVtbjpob3ZlciAudC1saW5lLFxuOmhvc3Q6bm90KFtzdHlsZV0pIC50LWNvbHVtbi5faGludF9ob3ZlcmVkIC50LWxpbmUsXG46aG9zdFtzdHlsZV49J3otaW5kZXg6IDAnXSAudC1jb2x1bW5faG92ZXJlZCArIC50LWxpbmUsXG46aG9zdDpub3QoW3N0eWxlXSkgLnQtY29sdW1uOmhvdmVyICsgLnQtbGluZSxcbjpob3N0Om5vdChbc3R5bGVdKSAudC1jb2x1bW4uX2hpbnRfaG92ZXJlZCArIC50LWxpbmUge1xuICBvcGFjaXR5OiAxO1xufVxuLnQtdGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbi50LWhpbnQge1xuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC14cyk7XG4gIGhlaWdodDogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IC0wLjYyNXJlbTtcbiAgcGFkZGluZzogMCAwLjM3NXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6IHZhcigtLXR1aS1iYXNlLTA5KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhc2UtMDEpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIDAsIDApO1xufVxuLnQtaGludF94IHtcbiAgYm90dG9tOiAwO1xufVxuLnQtaGludF95IHtcbiAgbGVmdDogMDtcbn1cbiIsIkBpbXBvcnQgJ3RhaWdhLXVpLWxvY2FsJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udC1zdmcge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpO1xufVxuXG4udC1jb2x1bW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4udC1kb3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMC4zNzVyZW07XG4gICAgaGVpZ2h0OiAwLjM3NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcbiAgICBtYXJnaW46IC0wLjE4NzVyZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNmZmY7XG59XG5cbi50LWhvc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDAuNXJlbTtcbiAgICBoZWlnaHQ6IDAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW46IC0wLjI1cmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCBjdXJyZW50Q29sb3IsIDAgMC4wNjI1cmVtIDAuMTg3NXJlbSAwLjEyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICY6Zm9jdXMsXG4gICAgLnQtY29sdW1uX2hvdmVyZWQgJixcbiAgICAudC1jb2x1bW46aG92ZXIgJixcbiAgICAudC1jb2x1bW4uX2hpbnRfaG92ZXJlZCAmIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi50LWxpbmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICZfdmVydGljYWwge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgIH1cblxuICAgICZfaG9yaXpvbnRhbCB7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgfVxuXG4gICAgOmhvc3Rbc3R5bGVePSd6LWluZGV4OiAwJ10gLnQtY29sdW1uX2hvdmVyZWQgJixcbiAgICA6aG9zdDpub3QoW3N0eWxlXSkgLnQtY29sdW1uOmhvdmVyICYsXG4gICAgOmhvc3Q6bm90KFtzdHlsZV0pIC50LWNvbHVtbi5faGludF9ob3ZlcmVkICYsXG4gICAgOmhvc3Rbc3R5bGVePSd6LWluZGV4OiAwJ10gLnQtY29sdW1uX2hvdmVyZWQgKyAmLFxuICAgIDpob3N0Om5vdChbc3R5bGVdKSAudC1jb2x1bW46aG92ZXIgKyAmLFxuICAgIDpob3N0Om5vdChbc3R5bGVdKSAudC1jb2x1bW4uX2hpbnRfaG92ZXJlZCArICYge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLnQtdGV4dCB7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuXG4udC1oaW50IHtcbiAgICAuc2hhZG93KCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQteHMpO1xuICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAtMC42MjVyZW07XG4gICAgcGFkZGluZzogMCAwLjM3NXJlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiB2YXIoLS10dWktYmFzZS0wOSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHVpLWJhc2UtMDEpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgMCwgMCk7XG5cbiAgICAmX3gge1xuICAgICAgICBib3R0b206IDA7XG4gICAgfVxuXG4gICAgJl95IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiLineChartComponent.prototype, "valueSetter", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiLineChartComponent.prototype, "x", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiLineChartComponent.prototype, "y", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiLineChartComponent.prototype, "width", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiLineChartComponent.prototype, "height", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])(smoothingAssertion, SMOOTHING_MESSAGE)
], TuiLineChartComponent.prototype, "smoothingFactor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiLineChartComponent.prototype, "hintContent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiLineChartComponent.prototype, "xStringify", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiLineChartComponent.prototype, "yStringify", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiLineChartComponent.prototype, "filled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiLineChartComponent.prototype, "dots", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiPure"]
], TuiLineChartComponent.prototype, "hovered$", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiPure"]
], TuiLineChartComponent.prototype, "getD", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TuiLineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: `tui-line-chart`,
                templateUrl: `./line-chart.template.html`,
                styleUrls: [`./line-chart.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiIdService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiIdService"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]]
            }] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]]
            }] }, { type: _line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_7__["TuiLineChartHintDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_7__["TuiLineChartHintDirective"]]
            }] }]; }, { valueSetter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: [`value`]
        }], x: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], y: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], smoothingFactor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], hintContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], xStringify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], yStringify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], filled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], dots: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], hovered$: [], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: [`mouseleave`]
        }], getD: [] }); })();


/***/ }),

/***/ "../addon-charts/components/line-chart/line-chart.module.ts":
/*!******************************************************************!*\
  !*** ../addon-charts/components/line-chart/line-chart.module.ts ***!
  \******************************************************************/
/*! exports provided: TuiLineChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartModule", function() { return TuiLineChartModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _line_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./line-chart.component */ "../addon-charts/components/line-chart/line-chart.component.ts");
/* harmony import */ var _line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./line-chart-hint.directive */ "../addon-charts/components/line-chart/line-chart-hint.directive.ts");








class TuiLineChartModule {
}
TuiLineChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TuiLineChartModule });
TuiLineChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TuiLineChartModule_Factory(t) { return new (t || TuiLineChartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__["PolymorpheusModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiHintModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiFocusableModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDescribedByModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiLetModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TuiLineChartModule, { declarations: [_line_chart_component__WEBPACK_IMPORTED_MODULE_5__["TuiLineChartComponent"], _line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_6__["TuiLineChartHintDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__["PolymorpheusModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiHintModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiFocusableModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDescribedByModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiLetModule"]], exports: [_line_chart_component__WEBPACK_IMPORTED_MODULE_5__["TuiLineChartComponent"], _line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_6__["TuiLineChartHintDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiLineChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__["PolymorpheusModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiHintModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiFocusableModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiDescribedByModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiLetModule"],
                ],
                declarations: [_line_chart_component__WEBPACK_IMPORTED_MODULE_5__["TuiLineChartComponent"], _line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_6__["TuiLineChartHintDirective"]],
                exports: [_line_chart_component__WEBPACK_IMPORTED_MODULE_5__["TuiLineChartComponent"], _line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_6__["TuiLineChartHintDirective"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-charts/components/line-days-chart/index.ts":
/*!***********************************************************!*\
  !*** ../addon-charts/components/line-days-chart/index.ts ***!
  \***********************************************************/
/*! exports provided: TuiLineDaysChartComponent, TuiLineDaysChartModule, TuiLineDaysChartHintDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _line_days_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-days-chart.component */ "../addon-charts/components/line-days-chart/line-days-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineDaysChartComponent", function() { return _line_days_chart_component__WEBPACK_IMPORTED_MODULE_0__["TuiLineDaysChartComponent"]; });

/* harmony import */ var _line_days_chart_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-days-chart.module */ "../addon-charts/components/line-days-chart/line-days-chart.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineDaysChartModule", function() { return _line_days_chart_module__WEBPACK_IMPORTED_MODULE_1__["TuiLineDaysChartModule"]; });

/* harmony import */ var _line_days_chart_hint_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-days-chart-hint.directive */ "../addon-charts/components/line-days-chart/line-days-chart-hint.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineDaysChartHintDirective", function() { return _line_days_chart_hint_directive__WEBPACK_IMPORTED_MODULE_2__["TuiLineDaysChartHintDirective"]; });






/***/ }),

/***/ "../addon-charts/components/line-days-chart/line-days-chart-hint.directive.ts":
/*!************************************************************************************!*\
  !*** ../addon-charts/components/line-days-chart/line-days-chart-hint.directive.ts ***!
  \************************************************************************************/
/*! exports provided: TuiLineDaysChartHintDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLineDaysChartHintDirective", function() { return TuiLineDaysChartHintDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-web-apis/common */ "../../node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _line_days_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./line-days-chart.component */ "../addon-charts/components/line-days-chart/line-days-chart.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");










class TuiLineDaysChartHintDirective {
    constructor(destroy$, { nativeElement }, ngZone, animationFrame$) {
        this.charts = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["EMPTY_QUERY"];
        this.hint = ``;
        animationFrame$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["throttleTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => !!nativeElement.querySelector(`.${_taiga_ui_core__WEBPACK_IMPORTED_MODULE_4__["HINT_HOVERED_CLASS"]}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(), Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiZonefree"])(ngZone), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(v => !v), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(destroy$))
            .subscribe(() => {
            this.charts.forEach(chart => chart.onHovered(null));
        });
    }
    getContext(day) {
        return this.computeContext(day, this.charts);
    }
    raise(day) {
        const current = this.charts
            .map(({ value }) => find(value, day))
            .filter(([_, value]) => !isNaN(value));
        const sorted = [...current].sort((a, b) => a[1] - b[1]);
        this.charts.forEach((chart, index) => {
            chart.onHovered(day);
            chart.zIndex = Math.max(sorted.indexOf(current[index]), 0);
        });
    }
    computeContext(day, charts) {
        return {
            $implicit: charts.map(({ value }) => find(value, day)),
        };
    }
}
TuiLineDaysChartHintDirective.ɵfac = function TuiLineDaysChartHintDirective_Factory(t) { return new (t || TuiLineDaysChartHintDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_FRAME"])); };
TuiLineDaysChartHintDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TuiLineDaysChartHintDirective, selectors: [["", "tuiLineChartHint", ""]], contentQueries: function TuiLineDaysChartHintDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _line_days_chart_component__WEBPACK_IMPORTED_MODULE_6__["TuiLineDaysChartComponent"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.charts = _t);
    } }, inputs: { hint: ["tuiLineChartHint", "hint"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]])] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiLineDaysChartHintDirective.prototype, "hint", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiPure"]
], TuiLineDaysChartHintDirective.prototype, "computeContext", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiLineDaysChartHintDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `[tuiLineChartHint]`,
                providers: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]],
            }]
    }], function () { return [{ type: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDestroyService"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]
            }] }, { type: rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_FRAME"]]
            }] }]; }, { charts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _line_days_chart_component__WEBPACK_IMPORTED_MODULE_6__["TuiLineDaysChartComponent"])]
        }], hint: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: [`tuiLineChartHint`]
        }], computeContext: [] }); })();
function find(value, current) {
    return value.find(([day]) => day.daySame(current)) || [current, NaN];
}


/***/ }),

/***/ "../addon-charts/components/line-days-chart/line-days-chart.component.ts":
/*!*******************************************************************************!*\
  !*** ../addon-charts/components/line-days-chart/line-days-chart.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TuiLineDaysChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLineDaysChartComponent", function() { return TuiLineDaysChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-charts/components/line-chart */ "../addon-charts/components/line-chart/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _line_days_chart_hint_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./line-days-chart-hint.directive */ "../addon-charts/components/line-days-chart/line-days-chart-hint.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../line-chart/line-chart.component */ "../addon-charts/components/line-chart/line-chart.component.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");










function TuiLineDaysChartComponent_tui_line_chart_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tui-line-chart", 2);
} if (rf & 2) {
    const month_r3 = ctx.$implicit;
    const first_r4 = ctx.first;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx_r0.zIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dots", ctx_r0.dots)("x", first_r4 ? 0 : ctx_r0.getX(month_r3[0][0]))("y", ctx_r0.y)("width", first_r4 ? ctx_r0.firstWidth : ctx_r0.getWidth(month_r3[0][0]))("height", ctx_r0.height)("value", month_r3)("smoothingFactor", ctx_r0.smoothingFactor)("hintContent", ctx_r0.hintContent ? _r1 : "")("yStringify", ctx_r0.yStringify)("xStringify", ctx_r0.xStringify ? ctx_r0.daysStringify : null);
} }
function TuiLineDaysChartComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 3);
} if (rf & 2) {
    const point_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r2.hintContent)("context", ctx_r2.getHintContext(point_r5[0], ctx_r2.value));
} }
const DUMMY = [NaN, NaN];
class TuiLineDaysChartComponent {
    constructor(hintDirective) {
        this.hintDirective = hintDirective;
        this.charts = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["EMPTY_QUERY"];
        this.y = 0;
        this.height = 0;
        this.smoothingFactor = 0;
        this.hintContent = ``;
        this.xStringify = null;
        this.yStringify = null;
        this.dots = false;
        this.zIndex = 0;
        this.value = [];
        this.daysStringify = index => this.xStringify ? this.xStringify(this.getMonth(index)) : ``;
    }
    set valueSetter(value) {
        if (!value.length) {
            this.value = [];
            return;
        }
        const start = value[0][0];
        const mutable = [...value];
        const length = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"].lengthBetween(start, value[value.length - 1][0]) + 1;
        this.value = Array.from({ length }, (_, day) => {
            const currentDay = start.append({ day });
            const shifted = currentDay.daySame(mutable[0][0]) ? mutable.shift() : null;
            const currentValue = shifted ? shifted[1] : NaN;
            return [currentDay, currentValue];
        });
    }
    get months() {
        return this.value.length ? this.breakMonths(this.value) : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["EMPTY_ARRAY"];
    }
    get firstWidth() {
        return this.months.length * this.value[0][0].daysCount;
    }
    get hint() {
        return this.hintDirective ? this.hintDirective.hint : this.hintContent;
    }
    getHintContext(x, value) {
        return {
            $implicit: value[x - value[0][0].day + 1],
        };
    }
    getX(index) {
        const current = this.getMonth(index);
        const months = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMonth"].lengthBetween(this.value[0][0], current);
        const offset = months * current.daysCount;
        return index - offset;
    }
    onHovered(day) {
        if (!day) {
            this.charts.forEach(chart => chart.onHovered(NaN));
            return;
        }
        const index = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMonth"].lengthBetween(this.value[0][0], day);
        const x = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiDay"].lengthBetween(this.value[0][0], day) + this.value[0][0].day - 1;
        const array = this.charts.toArray();
        const current = array[index];
        const { value } = current;
        array.forEach(chart => {
            if (chart === current) {
                current.onHovered(value.findIndex(point => point[0] === x));
            }
            else {
                chart.onHovered(NaN);
            }
        });
    }
    raise(index, { value }) {
        const x = value[index][0];
        const month = this.getMonth(x);
        if (this.hintDirective) {
            this.hintDirective.raise(month);
        }
        else {
            this.onHovered(month);
        }
    }
    getWidth(index) {
        return this.getMonth(index).daysCount * this.months.length;
    }
    getContext(index, { value }) {
        const x = value[index][0];
        return this.hintDirective
            ? this.hintDirective.getContext(this.getMonth(x))
            : this.getHintContext(x, this.value);
    }
    breakMonths(value) {
        const offset = value[0][0].day - 1;
        return Array.from({ length: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["TuiMonth"].lengthBetween(value[0][0], value[value.length - 1][0]) + 1 }, (_, i) => i + value[0][0].month + value[0][0].year * 12)
            .map(absoluteMonth => value
            .map(([{ month, year }, y], index) => month + year * 12 === absoluteMonth ? [index + offset, y] : null)
            .filter(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["isPresent"]))
            .map((month, index, array) => index === array.length - 1
            ? month
            : [...month, array[index + 1].find(day => !isNaN(day[1])) || DUMMY]);
    }
    getMonth(index) {
        return this.value[index - this.value[0][0].day + 1][0];
    }
}
TuiLineDaysChartComponent.ɵfac = function TuiLineDaysChartComponent_Factory(t) { return new (t || TuiLineDaysChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_line_days_chart_hint_directive__WEBPACK_IMPORTED_MODULE_4__["TuiLineDaysChartHintDirective"], 8)); };
TuiLineDaysChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiLineDaysChartComponent, selectors: [["tui-line-days-chart"]], viewQuery: function TuiLineDaysChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_2__["TuiLineChartComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.charts = _t);
    } }, hostVars: 2, hostBindings: function TuiLineDaysChartComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx.zIndex);
    } }, inputs: { valueSetter: ["value", "valueSetter"], y: "y", height: "height", smoothingFactor: "smoothingFactor", hintContent: "hintContent", xStringify: "xStringify", yStringify: "yStringify", dots: "dots" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            {
                provide: _taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_2__["TuiLineChartHintDirective"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TuiLineDaysChartComponent),
            },
        ])], decls: 3, vars: 1, consts: [["class", "t-chart", 3, "zIndex", "dots", "x", "y", "width", "height", "value", "smoothingFactor", "hintContent", "yStringify", "xStringify", 4, "ngFor", "ngForOf"], ["hint", ""], [1, "t-chart", 3, "dots", "x", "y", "width", "height", "value", "smoothingFactor", "hintContent", "yStringify", "xStringify"], ["polymorpheus-outlet", "", 3, "content", "context"]], template: function TuiLineDaysChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TuiLineDaysChartComponent_tui_line_chart_0_Template, 1, 12, "tui-line-chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiLineDaysChartComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.months);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_6__["TuiLineChartComponent"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__["PolymorpheusOutletComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.t-chart[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2xpbmUtZGF5cy1jaGFydC9saW5lLWRheXMtY2hhcnQuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2xpbmUtZGF5cy1jaGFydC9saW5lLWRheXMtY2hhcnQuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2NvcmUvc3R5bGVzL21peGlucy9taXhpbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0hEO0VBQ0ksY0FBQTtBREtKO0FDRkE7RUN5Qkksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUdJLFdBQUE7RUFDQSxZQUFBO0FGdEJSIiwiZmlsZSI6InByb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL2xpbmUtZGF5cy1jaGFydC9saW5lLWRheXMtY2hhcnQuc3R5bGUubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qXG5FdmVyeSBtYXgtd2lkdGggb2YgYnJlYWtwb2ludCBpcyBlcXVhbDpcbm5leHQgbWluLXdpZHRoIC0gNjAlIGZyb20gMXB4ICgxLzE2ICogMC42ID0gMC4wMzc1KVxuKi9cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udC1jaGFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50LWNoYXJ0IHtcbiAgICAuZnVsbHNpemUoKTtcbn1cbiIsIi8vIGNlbnRlcmluZyB3aXRoIHRyYW5zbGF0ZVxuLmNlbnRlci1sZWZ0KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG59XG5cbi5jZW50ZXItdG9wKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cblxuLmNlbnRlci1hbGwoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLy8gY2xlYXJmaXhcbi5jbGVhcmZpeCgpIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG59XG5cbi8vLmZ1bGxzaXplXG4uZnVsbHNpemUoQHBvc2l0aW9uOiBhYnNvbHV0ZSwgQG1vZGU6IGhlaWdodCkge1xuICAgIHBvc2l0aW9uOiBAcG9zaXRpb247XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG5cbiAgICAmIHdoZW4gKEBtb2RlID0gaGVpZ2h0KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAbW9kZSA9IGluc2V0KSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxufVxuXG4uY2xlYXJidG4oKSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cblxuLmF1dG9maWxsKEBtb2RlOmRlZmF1bHQpIHtcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGwsXG4gICAgJjotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyB7XG4gICAgICAgIGNhcmV0LWNvbG9yOiB2YXIoLS10dWktYmFzZS0wOSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRlZmF1bHQpIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsKTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbCkgaW5zZXQgIWltcG9ydGFudDsgLy8gdG8gb3ZlcmxheSBuYXRpdmUgYmFja2dyb3VuZFxuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMS1uaWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVpLWF1dG9maWxsLW5pZ2h0KTtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMTAwcmVtIHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCkgaW5zZXQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNsZWFyaW5wdXQoQG1vZGU6IGRlZmF1bHQpIHtcbiAgICAuYXV0b2ZpbGwoQG1vZGUpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8vIGZvciBTYWZhcmlcbn1cblxuLnZpc3VhbGx5LWhpZGRlbigpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICAgIGNsaXAtcGF0aDogaW5zZXQoMCk7XG59XG5cbi8vIGN1c3RvbWl6ZSBuYXRpdmUgc2Nyb2xsXG4uY3VzdG9taXplLXNjcm9sbCgpIHtcbiAgICAvLyBleGNsdWRlIG5vbi1zdXBwb3J0aW5nIGJyb3dzZXJzXG4gICAgQG1lZGlhIGFsbCBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMCkgYW5kIChtaW4tcmVzb2x1dGlvbjogMC4wMDFkcGNtKSB7XG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDYuMjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAgICAgICAgICAgYm9yZGVyOiAyLjY2N3JlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVpLWNsZWFyLWhvdmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1hY3RpdmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS10ZXh0LTAzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gc2hhZG93XG4uc2hhZG93KEBtb2RlOiAxKSB7XG4gICAgLy8gRGVmYXVsdFxuICAgICYgd2hlbiAoQG1vZGUgPSAxKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBEcm9wZG93blxuICAgICYgd2hlbiAoQG1vZGUgPSAyKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbFxuICAgICYgd2hlbiAoQG1vZGUgPSAzKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMS4xMjVyZW0gMS44NzVyZW0gcmdiYSgwLCAwLCAwLCAwLjQ4KTtcbiAgICB9XG5cbiAgICAvLyBTaWRlYmFyXG4gICAgJiB3aGVuIChAbW9kZSA9IDQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMC4yNXJlbSAwIDEuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIH1cblxuICAgIC8vIEhvdmVyXG4gICAgJiB3aGVuIChAbW9kZSA9IDUpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDIuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIH1cblxuICAgIC8vIE5hdmlnYXRpb25cbiAgICAmIHdoZW4gKEBtb2RlID0gNikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgICB9XG5cbiAgICAvLyBNb2RhbCBtb2JpbGVcbiAgICAmIHdoZW4gKEBtb2RlID0gNykge1xuICAgICAgICBib3gtc2hhZG93OiAwIC0xcmVtIDEuNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB9XG59XG5cbi5pbnNldC1ib3JkZXIoQGRpcmVjdGlvbjogYm90dG9tLCBAbW9kZTogbm9uZSkge1xuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCB2YXIoLS10dWktYmFzZS0wMyk7XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGxpZ2h0KSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHJnYmEoNTEsIDUxLCA1MSwgMC4yNCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHRyYW5zaXRpb25cbi50cmFuc2l0aW9uKEBwYXJhbSwgQHNwZWVkOiB2YXIoLS10dWktZHVyYXRpb24sIDMwMG1zKSkge1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IEBwYXJhbTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBAc3BlZWQ7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuXG4vLyBkYXNoZWQgYm9yZGVyXG4uZGFzaGVkLWJvcmRlcihAY29sb3I6IGN1cnJlbnRDb2xvciwgQGFsaWdubWVudDogYm90dG9tLCBAc3BhY2U6IDQpIHtcbiAgICBAc2l6ZTogdW5pdChAc3BhY2UsIHB4KTtcbiAgICBAcGVyY2VudGFnZTogKDEwMCUgLyBAc3BhY2UgKiAyKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEBjb2xvciAwJSwgQGNvbG9yIEBwZXJjZW50YWdlLCB0cmFuc3BhcmVudCBAcGVyY2VudGFnZSk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCBAYWxpZ25tZW50O1xuICAgIGJhY2tncm91bmQtc2l6ZTogQHNpemUgMXB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbn1cblxuLy8gdHlwaWNhbCBvcGFjaXR5IHByb3BlcnRpZXMgZm9yIGljb25zXG4ub3BhY2l0eS1pY29uKCkge1xuICAgIG9wYWNpdHk6IDAuODtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbn1cblxuLmhvdmVyYWJsZS13aXRoLXNoYWRvdygpIHtcbiAgICAuc2hhZG93KCk7XG4gICAgLnRyYW5zaXRpb24oYWxsKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm0sIGJveC1zaGFkb3c7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLnNoYWRvdyg1KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC1Ac3BhY2UpO1xuICAgIH1cbn1cblxuLy8gZ3JhZGllbnRcbi5ncmFkaWVudChAc3RhcnQtY29sb3IsIEBlbmQtY29sb3IsIEBhbmdsZTogNDVkZWcpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoQGFuZ2xlLCBAc3RhcnQtY29sb3IgMCUsIEBlbmQtY29sb3IgMTAwJSk7XG59XG5cbi8vIHR5cGljYWwgcHJvcGVydGllcyBmb3IgdGV4dCBvdmVyZmxvdyB3aXRoIGVsbGlwc2lzXG4udGV4dC1vdmVyZmxvdyhAdHlwZTogbm93cmFwKSB7XG4gICAgd2hpdGUtc3BhY2U6IEB0eXBlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLnRleHQtb3ZlcmZsb3ctd2l0aC1mYWRlKEBjb2xvcjogdmFyKC0tdHVpLWJhc2UtMDEpLCBAdHJhbnNwYXJlbnRDb2xvcjogdHJhbnNwYXJlbnQsIEB3aWR0aDogMS44NzVyZW0pIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogQHdpZHRoO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgQHRyYW5zcGFyZW50Q29sb3IgMCUsIEBjb2xvciA4MCUsIEBjb2xvciAxMDAlKTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuLyogc3R5bGVsaW50LWVuYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cblxuLmNyZWF0ZVN0YWNraW5nQ29udGV4dCgpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMDtcbn1cblxuLy9zcGFjZXNcbi50dWktc3BhY2UoQGRpcmVjdGlvbiwgQHNpemUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBhbGwpIHtcbiAgICAgICAgbWFyZ2luOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB0b3ApIHtcbiAgICAgICAgbWFyZ2luLXRvcDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYm90dG9tKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IHZlcnRpY2FsKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBsZWZ0KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSByaWdodCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGhvcml6b250YWwpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cbn1cblxuLmNvbnRyYXN0LWJhY2tncm91bmQoQGJhY2tncm91bmQpIHtcbiAgICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZDtcbiAgICBjb2xvcjogY29udHJhc3QoQGJhY2tncm91bmQsICMzMzMsICNmZmYpO1xufVxuXG4uYmx1cnJlZC1iYWNrZ3JvdW5kKEBjb2xvcjogI2ZmZikge1xuICAgIGJhY2tncm91bmQ6IGZhZGUoQGNvbG9yLCA3MCUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjQzNzVyZW0pO1xufVxuXG4uc2Nyb2xsYmFyLWhpZGRlbigpIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZSovXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAvKiBzdHlsZWxpbnQtZW5hYmxlKi9cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgfVxufVxuXG4vLyBoaWRlIGFuIGVsZW1lbnQgdmlzdWFsbHkgd2l0aG91dCBoaWRpbmcgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuLnNyLW9ubHkoKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDUwJSk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xufVxuIl19 */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiLineDaysChartComponent.prototype, "valueSetter", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiLineDaysChartComponent.prototype, "y", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiLineDaysChartComponent.prototype, "height", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiLineDaysChartComponent.prototype, "smoothingFactor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiLineDaysChartComponent.prototype, "hintContent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiLineDaysChartComponent.prototype, "xStringify", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiLineDaysChartComponent.prototype, "yStringify", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiLineDaysChartComponent.prototype, "dots", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiPure"]
], TuiLineDaysChartComponent.prototype, "getHintContext", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiPure"]
], TuiLineDaysChartComponent.prototype, "breakMonths", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiLineDaysChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-line-days-chart`,
                templateUrl: `./line-days-chart.template.html`,
                styleUrls: [`./line-days-chart.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                providers: [
                    {
                        provide: _taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_2__["TuiLineChartHintDirective"],
                        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => TuiLineDaysChartComponent),
                    },
                ],
            }]
    }], function () { return [{ type: _line_days_chart_hint_directive__WEBPACK_IMPORTED_MODULE_4__["TuiLineDaysChartHintDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_line_days_chart_hint_directive__WEBPACK_IMPORTED_MODULE_4__["TuiLineDaysChartHintDirective"]]
            }] }]; }, { charts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: [_taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_2__["TuiLineChartComponent"]]
        }], valueSetter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: [`value`]
        }], y: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], smoothingFactor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], hintContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], xStringify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], yStringify: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dots: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`style.zIndex`]
        }], getHintContext: [], breakMonths: [] }); })();


/***/ }),

/***/ "../addon-charts/components/line-days-chart/line-days-chart.module.ts":
/*!****************************************************************************!*\
  !*** ../addon-charts/components/line-days-chart/line-days-chart.module.ts ***!
  \****************************************************************************/
/*! exports provided: TuiLineDaysChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLineDaysChartModule", function() { return TuiLineDaysChartModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-charts/components/line-chart */ "../addon-charts/components/line-chart/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _line_days_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./line-days-chart.component */ "../addon-charts/components/line-days-chart/line-days-chart.component.ts");
/* harmony import */ var _line_days_chart_hint_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./line-days-chart-hint.directive */ "../addon-charts/components/line-days-chart/line-days-chart-hint.directive.ts");







class TuiLineDaysChartModule {
}
TuiLineDaysChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TuiLineDaysChartModule });
TuiLineDaysChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TuiLineDaysChartModule_Factory(t) { return new (t || TuiLineDaysChartModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_2__["TuiLineChartModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__["PolymorpheusModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TuiLineDaysChartModule, { declarations: [_line_days_chart_component__WEBPACK_IMPORTED_MODULE_4__["TuiLineDaysChartComponent"], _line_days_chart_hint_directive__WEBPACK_IMPORTED_MODULE_5__["TuiLineDaysChartHintDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_2__["TuiLineChartModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__["PolymorpheusModule"]], exports: [_line_days_chart_component__WEBPACK_IMPORTED_MODULE_4__["TuiLineDaysChartComponent"], _line_days_chart_hint_directive__WEBPACK_IMPORTED_MODULE_5__["TuiLineDaysChartHintDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiLineDaysChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_2__["TuiLineChartModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__["PolymorpheusModule"]],
                declarations: [_line_days_chart_component__WEBPACK_IMPORTED_MODULE_4__["TuiLineDaysChartComponent"], _line_days_chart_hint_directive__WEBPACK_IMPORTED_MODULE_5__["TuiLineDaysChartHintDirective"]],
                exports: [_line_days_chart_component__WEBPACK_IMPORTED_MODULE_4__["TuiLineDaysChartComponent"], _line_days_chart_hint_directive__WEBPACK_IMPORTED_MODULE_5__["TuiLineDaysChartHintDirective"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-charts/components/pie-chart/index.ts":
/*!*****************************************************!*\
  !*** ../addon-charts/components/pie-chart/index.ts ***!
  \*****************************************************/
/*! exports provided: TuiPieChartComponent, TuiPieChartDirective, TuiPieChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pie_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pie-chart.component */ "../addon-charts/components/pie-chart/pie-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiPieChartComponent", function() { return _pie_chart_component__WEBPACK_IMPORTED_MODULE_0__["TuiPieChartComponent"]; });

/* harmony import */ var _pie_chart_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pie-chart.directive */ "../addon-charts/components/pie-chart/pie-chart.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiPieChartDirective", function() { return _pie_chart_directive__WEBPACK_IMPORTED_MODULE_1__["TuiPieChartDirective"]; });

/* harmony import */ var _pie_chart_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pie-chart.module */ "../addon-charts/components/pie-chart/pie-chart.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiPieChartModule", function() { return _pie_chart_module__WEBPACK_IMPORTED_MODULE_2__["TuiPieChartModule"]; });






/***/ }),

/***/ "../addon-charts/components/pie-chart/pie-chart.component.ts":
/*!*******************************************************************!*\
  !*** ../addon-charts/components/pie-chart/pie-chart.component.ts ***!
  \*******************************************************************/
/*! exports provided: TuiPieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPieChartComponent", function() { return TuiPieChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-charts/constants */ "../addon-charts/constants/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../cdk/directives/repeat-times/repeat-times.directive */ "../cdk/directives/repeat-times/repeat-times.directive.ts");
/* harmony import */ var _pie_chart_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pie-chart.directive */ "../addon-charts/components/pie-chart/pie-chart.directive.ts");
/* harmony import */ var _core_directives_pointer_hint_pointer_hint_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/directives/pointer-hint/pointer-hint.directive */ "../core/directives/pointer-hint/pointer-hint.directive.ts");
/* harmony import */ var _cdk_directives_hovered_hovered_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../cdk/directives/hovered/hovered.directive */ "../cdk/directives/hovered/hovered.directive.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
















const _c0 = function (a0) { return { $implicit: a0 }; };
function TuiPieChartComponent__svg_path_7__svg_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0, 8);
} if (rf & 2) {
    const index_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, index_r3));
} }
function TuiPieChartComponent__svg_path_7_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("tuiHoveredChange", function TuiPieChartComponent__svg_path_7_Template__svg_path_tuiHoveredChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const index_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onHovered($event, index_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TuiPieChartComponent__svg_path_7__svg_ng_template_1_Template, 1, 4, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r3 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r0.getColor(index_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tuiPieChart", ctx_r0.segments[index_r3])("tuiPointerHint", ctx_r0.getHint(_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("transform", ctx_r0.getTransform(index_r3));
} }
function TuiPieChartComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 9);
} if (rf & 2) {
    const index_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", ctx_r2.hintContent)("context", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, index_r9));
} }
const RADII = {
    xs: `50`,
    s: `50`,
    m: `77.8`,
    l: `81.9`,
    xl: `81.3`,
};
const TRANSFORM = {
    xs: 1.15,
    s: 1.25,
    m: 1.11,
    l: 1.09,
    xl: 1.08,
};
// TODO: 3.0 Remove sanitizer when Angular version is bumped
class TuiPieChartComponent {
    constructor(idService, locationRef, sanitizer) {
        this.locationRef = locationRef;
        this.sanitizer = sanitizer;
        this.value = [];
        this.size = `m`;
        this.colorHandler = _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_4__["TUI_DEFAULT_COLOR_HANDLER"];
        this.hintContent = ``;
        this.masked = false;
        this.activeItemIndex = NaN;
        this.activeItemIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.autoIdString = idService.generate();
    }
    get empty() {
        return !this.getSum(this.value);
    }
    get maskId() {
        return `tui-ring-chart-${this.autoIdString}`;
    }
    get mask() {
        return this.masked
            ? `url(${this.locationRef.prepareExternalUrl(this.locationRef.path())}#${this.maskId})`
            : null;
    }
    get radius() {
        return RADII[this.size];
    }
    get segments() {
        return this.getSegments(this.value);
    }
    getTransform(index) {
        const transform = this.masked
            ? `scale(${TRANSFORM[this.size]})`
            : `scale(${TRANSFORM.xs})`;
        return index === this.activeItemIndex ? transform : null;
    }
    getHint(hint) {
        return this.hintContent ? hint : ``;
    }
    onHovered(hovered, index) {
        this.updateActiveItemIndex(hovered ? index : NaN);
    }
    getColor(index) {
        return this.sanitizer.bypassSecurityTrustStyle(`var(--tui-chart-${index}, ${Object(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_6__["colorFallback"])(this.colorHandler(index))})`);
    }
    getSum(value) {
        return Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["sum"])(...value);
    }
    getSegments(value) {
        return value
            .map((initial, i, array) => array.reduce((sum, current, j) => (j < i ? this.getDeg(current) + sum : sum), this.getDeg(initial)))
            .map((angle, index, array) => [
            array[index - 1] || 0,
            Math.min(angle, 359.9999),
        ]);
    }
    getDeg(value) {
        return 360 * (value / this.getSum(this.value));
    }
    updateActiveItemIndex(index) {
        if (index === this.activeItemIndex) {
            return;
        }
        this.activeItemIndex = index;
        this.activeItemIndexChange.next(index);
    }
}
TuiPieChartComponent.ɵfac = function TuiPieChartComponent_Factory(t) { return new (t || TuiPieChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiIdService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
TuiPieChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TuiPieChartComponent, selectors: [["tui-pie-chart"]], hostVars: 3, hostBindings: function TuiPieChartComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("data-size", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("_empty", ctx.empty);
    } }, inputs: { value: "value", size: "size", colorHandler: "colorHandler", hintContent: "hintContent", masked: "masked", activeItemIndex: "activeItemIndex" }, outputs: { activeItemIndexChange: "activeItemIndexChange" }, decls: 10, vars: 5, consts: [["xmlns", "http://www.w3.org/2000/svg", "height", "100%", "width", "100%", "viewBox", "-100 -100 200 200", "focusable", "false", 1, "t-svg"], ["x", "-200", "y", "-200", "width", "400", "height", "400", "fill", "white"], ["cx", "0", "cy", "0"], ["cx", "0", "cy", "0", "r", "100", 1, "t-placeholder"], ["fill", "currentColor", "automation-id", "tui-pie-chart__segment", "tuiHintMode", "onDark", "tuiHintDirection", "top-right", "d", "", "class", "t-segment", 3, "color", "tuiPieChart", "tuiPointerHint", "tuiHoveredChange", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["template", ""], ["fill", "currentColor", "automation-id", "tui-pie-chart__segment", "tuiHintMode", "onDark", "tuiHintDirection", "top-right", "d", "", 1, "t-segment", 3, "tuiPieChart", "tuiPointerHint", "tuiHoveredChange"], ["hint", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["polymorpheus-outlet", "", 1, "t-text", 3, "content", "context"]], template: function TuiPieChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mask");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "rect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "circle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "circle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TuiPieChartComponent__svg_path_7_Template, 3, 5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TuiPieChartComponent_ng_template_8_Template, 1, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.maskId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("r", ctx.radius);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("mask", ctx.mask);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("tuiRepeatTimesOf", ctx.segments.length);
    } }, directives: [_cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_7__["TuiRepeatTimesDirective"], _pie_chart_directive__WEBPACK_IMPORTED_MODULE_8__["TuiPieChartDirective"], _core_directives_pointer_hint_pointer_hint_directive__WEBPACK_IMPORTED_MODULE_9__["TuiPointerHintDirective"], _cdk_directives_hovered_hovered_directive__WEBPACK_IMPORTED_MODULE_10__["TuiHoveredDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_11__["PolymorpheusOutletComponent"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n}\n[data-size='xs'][_nghost-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  pointer-events: none;\n}\n[data-size='s'][_nghost-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n}\n[data-size='m'][_nghost-%COMP%] {\n  width: 9rem;\n  height: 9rem;\n}\n[data-size='l'][_nghost-%COMP%] {\n  width: 11rem;\n  height: 11rem;\n}\n[data-size='xl'][_nghost-%COMP%] {\n  width: 16rem;\n  height: 16rem;\n}\n.t-svg[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: visible;\n  transform: rotate(-90deg);\n}\n.t-segment[_ngcontent-%COMP%] {\n  transition-property: transform;\n  transition-duration: var(--tui-duration, 300ms);\n  transition-timing-function: ease-in-out;\n}\n._empty[_nghost-%COMP%]   .t-segment[_ngcontent-%COMP%] {\n  display: none;\n}\n.t-placeholder[_ngcontent-%COMP%] {\n  fill: var(--tui-base-03);\n}\n.t-text[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL3BpZS1jaGFydC9waWUtY2hhcnQuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL3BpZS1jaGFydC9waWUtY2hhcnQuc3R5bGUubGVzcyIsIi9ob21lL3J1bm5lci93b3JrL3RhaWdhLXVpL3RhaWdhLXVpL3Byb2plY3RzL2NvcmUvc3R5bGVzL21peGlucy9taXhpbnMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDOzs7Q0FHQztBQ0dEO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FEREo7QUNHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUREUjtBQ0lJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURGUjtBQ0tJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QURIUjtBQ01JO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QURKUjtBQ09JO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QURMUjtBQ1NBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FEUEo7QUNVQTtFQ3dMSSw4QkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUNBQUE7QUYvTEo7QUNRSTtFQUNJLGFBQUE7QUROUjtBQ1VBO0VBQ0ksd0JBQUE7QURSSjtBQ1dBO0VBQ0kscUJBQUE7QURUSiIsImZpbGUiOiJwcm9qZWN0cy9hZGRvbi1jaGFydHMvY29tcG9uZW50cy9waWUtY2hhcnQvcGllLWNoYXJ0LnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG46aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdFtkYXRhLXNpemU9J3hzJ10ge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbjpob3N0W2RhdGEtc2l6ZT0ncyddIHtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbn1cbjpob3N0W2RhdGEtc2l6ZT0nbSddIHtcbiAgd2lkdGg6IDlyZW07XG4gIGhlaWdodDogOXJlbTtcbn1cbjpob3N0W2RhdGEtc2l6ZT0nbCddIHtcbiAgd2lkdGg6IDExcmVtO1xuICBoZWlnaHQ6IDExcmVtO1xufVxuOmhvc3RbZGF0YS1zaXplPSd4bCddIHtcbiAgd2lkdGg6IDE2cmVtO1xuICBoZWlnaHQ6IDE2cmVtO1xufVxuLnQtc3ZnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn1cbi50LXNlZ21lbnQge1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXR1aS1kdXJhdGlvbiwgMzAwbXMpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG46aG9zdC5fZW1wdHkgLnQtc2VnbWVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udC1wbGFjZWhvbGRlciB7XG4gIGZpbGw6IHZhcigtLXR1aS1iYXNlLTAzKTtcbn1cbi50LXRleHQge1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbkBzaXplLXhzOiAycmVtO1xuQHNpemUtczogNHJlbTtcbkBzaXplLW06IDlyZW07XG5Ac2l6ZS1sOiAxMXJlbTtcbkBzaXplLXhsOiAxNnJlbTtcblxuOmhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICZbZGF0YS1zaXplPSd4cyddIHtcbiAgICAgICAgd2lkdGg6IEBzaXplLXhzO1xuICAgICAgICBoZWlnaHQ6IEBzaXplLXhzO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG5cbiAgICAmW2RhdGEtc2l6ZT0ncyddIHtcbiAgICAgICAgd2lkdGg6IEBzaXplLXM7XG4gICAgICAgIGhlaWdodDogQHNpemUtcztcbiAgICB9XG5cbiAgICAmW2RhdGEtc2l6ZT0nbSddIHtcbiAgICAgICAgd2lkdGg6IEBzaXplLW07XG4gICAgICAgIGhlaWdodDogQHNpemUtbTtcbiAgICB9XG5cbiAgICAmW2RhdGEtc2l6ZT0nbCddIHtcbiAgICAgICAgd2lkdGg6IEBzaXplLWw7XG4gICAgICAgIGhlaWdodDogQHNpemUtbDtcbiAgICB9XG5cbiAgICAmW2RhdGEtc2l6ZT0neGwnXSB7XG4gICAgICAgIHdpZHRoOiBAc2l6ZS14bDtcbiAgICAgICAgaGVpZ2h0OiBAc2l6ZS14bDtcbiAgICB9XG59XG5cbi50LXN2ZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG5cbi50LXNlZ21lbnQge1xuICAgIC50cmFuc2l0aW9uKHRyYW5zZm9ybSk7XG5cbiAgICA6aG9zdC5fZW1wdHkgJiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4udC1wbGFjZWhvbGRlciB7XG4gICAgZmlsbDogdmFyKC0tdHVpLWJhc2UtMDMpO1xufVxuXG4udC10ZXh0IHtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiDefaultProp"])()
], TuiPieChartComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiDefaultProp"])()
], TuiPieChartComponent.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiDefaultProp"])()
], TuiPieChartComponent.prototype, "colorHandler", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiDefaultProp"])()
], TuiPieChartComponent.prototype, "hintContent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiDefaultProp"])()
], TuiPieChartComponent.prototype, "masked", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiDefaultProp"])()
], TuiPieChartComponent.prototype, "activeItemIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiPure"]
], TuiPieChartComponent.prototype, "getSum", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["tuiPure"]
], TuiPieChartComponent.prototype, "getSegments", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TuiPieChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: `tui-pie-chart`,
                templateUrl: `./pie-chart.template.html`,
                styleUrls: [`./pie-chart.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiIdService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_5__["TuiIdService"]]
            }] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]]
            }] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]]
            }] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: [`attr.data-size`]
        }], colorHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], hintContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], masked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], activeItemIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], activeItemIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], empty: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: [`class._empty`]
        }], getSum: [], getSegments: [] }); })();


/***/ }),

/***/ "../addon-charts/components/pie-chart/pie-chart.directive.ts":
/*!*******************************************************************!*\
  !*** ../addon-charts/components/pie-chart/pie-chart.directive.ts ***!
  \*******************************************************************/
/*! exports provided: TuiPieChartDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPieChartDirective", function() { return TuiPieChartDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-web-apis/common */ "../../node_modules/@ng-web-apis/common/fesm2015/ng-web-apis-common.js");
/* harmony import */ var _taiga_ui_addon_charts_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/addon-charts/utils */ "../addon-charts/utils/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");










// @dynamic
class TuiPieChartDirective {
    constructor({ nativeElement }, ngZone, destroy$, performance, animationFrame$, duration) {
        this.sector$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([0, 0]);
        this.sector$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(([prev, cur]) => {
            const now = performance.now();
            const startDelta = cur[0] - prev[0];
            const endDelta = cur[1] - prev[1];
            return animationFrame$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(timestamp => Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["easeInOutQuad"])(Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["clamp"])((timestamp - now) / duration, 0, 1))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeWhile"])(progress => progress < 1, true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(progress => [
                prev[0] + startDelta * progress,
                cur[1] > 359 ? cur[1] : prev[1] + endDelta * progress,
            ]));
        }), Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiZonefree"])(ngZone), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(destroy$))
            .subscribe(([start, end]) => {
            nativeElement.setAttribute(`d`, Object(_taiga_ui_addon_charts_utils__WEBPACK_IMPORTED_MODULE_3__["describeSector"])(start, end));
        });
    }
    set tuiPieChart(sector) {
        this.sector$.next(sector);
    }
}
TuiPieChartDirective.ɵfac = function TuiPieChartDirective_Factory(t) { return new (t || TuiPieChartDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDestroyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_2__["PERFORMANCE"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_FRAME"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TUI_ANIMATIONS_DURATION"])); };
TuiPieChartDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TuiPieChartDirective, selectors: [["path", "tuiPieChart", ""]], inputs: { tuiPieChart: "tuiPieChart" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDestroyService"]])] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["tuiDefaultProp"])()
], TuiPieChartDirective.prototype, "tuiPieChart", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiPieChartDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: `path[tuiPieChart]`,
                providers: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDestroyService"]],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]]
            }] }, { type: rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_4__["TuiDestroyService"]]
            }] }, { type: Performance, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_2__["PERFORMANCE"]]
            }] }, { type: rxjs__WEBPACK_IMPORTED_MODULE_6__["Observable"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_FRAME"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TUI_ANIMATIONS_DURATION"]]
            }] }]; }, { tuiPieChart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "../addon-charts/components/pie-chart/pie-chart.module.ts":
/*!****************************************************************!*\
  !*** ../addon-charts/components/pie-chart/pie-chart.module.ts ***!
  \****************************************************************/
/*! exports provided: TuiPieChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiPieChartModule", function() { return TuiPieChartModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _pie_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pie-chart.component */ "../addon-charts/components/pie-chart/pie-chart.component.ts");
/* harmony import */ var _pie_chart_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pie-chart.directive */ "../addon-charts/components/pie-chart/pie-chart.directive.ts");








class TuiPieChartModule {
}
TuiPieChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TuiPieChartModule });
TuiPieChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TuiPieChartModule_Factory(t) { return new (t || TuiPieChartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiRepeatTimesModule"],
            _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiHoveredModule"],
            _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__["PolymorpheusModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiPointerHintModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TuiPieChartModule, { declarations: [_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__["TuiPieChartComponent"], _pie_chart_directive__WEBPACK_IMPORTED_MODULE_6__["TuiPieChartDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiRepeatTimesModule"],
        _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiHoveredModule"],
        _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__["PolymorpheusModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiPointerHintModule"]], exports: [_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__["TuiPieChartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiPieChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiRepeatTimesModule"],
                    _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__["TuiHoveredModule"],
                    _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_4__["PolymorpheusModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_3__["TuiPointerHintModule"],
                ],
                declarations: [_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__["TuiPieChartComponent"], _pie_chart_directive__WEBPACK_IMPORTED_MODULE_6__["TuiPieChartDirective"]],
                exports: [_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__["TuiPieChartComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-charts/components/ring-chart/index.ts":
/*!******************************************************!*\
  !*** ../addon-charts/components/ring-chart/index.ts ***!
  \******************************************************/
/*! exports provided: TuiRingChartComponent, TuiRingChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ring_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ring-chart.component */ "../addon-charts/components/ring-chart/ring-chart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiRingChartComponent", function() { return _ring_chart_component__WEBPACK_IMPORTED_MODULE_0__["TuiRingChartComponent"]; });

/* harmony import */ var _ring_chart_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ring-chart.module */ "../addon-charts/components/ring-chart/ring-chart.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiRingChartModule", function() { return _ring_chart_module__WEBPACK_IMPORTED_MODULE_1__["TuiRingChartModule"]; });





/***/ }),

/***/ "../addon-charts/components/ring-chart/ring-chart.component.ts":
/*!*********************************************************************!*\
  !*** ../addon-charts/components/ring-chart/ring-chart.component.ts ***!
  \*********************************************************************/
/*! exports provided: TuiRingChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiRingChartComponent", function() { return TuiRingChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-charts/constants */ "../addon-charts/constants/index.ts");
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pie-chart/pie-chart.component */ "../addon-charts/components/pie-chart/pie-chart.component.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");








const _c0 = function (a0, a1) { return { $implicit: a0, value: a1 }; };
function TuiRingChartComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("content", ctx_r0.content)("context", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, ctx_r0.activeItemIndex, ctx_r0.value));
} }
function TuiRingChartComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = ["*"];
// TODO: 3.0 Refactor to use ng-content
class TuiRingChartComponent {
    constructor() {
        this.value = [];
        this.size = `m`;
        /** @deprecated */
        this.colorHandler = _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_2__["TUI_DEFAULT_COLOR_HANDLER"];
        /** @deprecated */
        this.content = ``;
        this.masked = true;
        this.activeItemIndex = NaN;
        this.activeItemIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onActiveItemIndexChange(index) {
        this.updateActiveItemIndex(index);
    }
    updateActiveItemIndex(index) {
        if (index === this.activeItemIndex) {
            return;
        }
        this.activeItemIndex = index;
        this.activeItemIndexChange.next(index);
    }
}
TuiRingChartComponent.ɵfac = function TuiRingChartComponent_Factory(t) { return new (t || TuiRingChartComponent)(); };
TuiRingChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TuiRingChartComponent, selectors: [["tui-ring-chart"]], hostVars: 1, hostBindings: function TuiRingChartComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-size", ctx.size);
    } }, inputs: { value: "value", size: "size", colorHandler: "colorHandler", content: "content", masked: "masked", activeItemIndex: "activeItemIndex" }, outputs: { activeItemIndexChange: "activeItemIndexChange" }, ngContentSelectors: _c1, decls: 6, vars: 7, consts: [[1, "t-content"], ["polymorpheus-outlet", "", "automation-id", "tui-ring-chart__content", "class", "t-wrapper", 3, "content", "context", 4, "ngIf", "ngIfElse"], ["ngContent", ""], [3, "masked", "value", "colorHandler", "size", "activeItemIndex", "activeItemIndexChange"], [1, "t-shield"], ["polymorpheus-outlet", "", "automation-id", "tui-ring-chart__content", 1, "t-wrapper", 3, "content", "context"], [1, "t-wrapper"]], template: function TuiRingChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TuiRingChartComponent_div_1_Template, 1, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TuiRingChartComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "tui-pie-chart", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activeItemIndexChange", function TuiRingChartComponent_Template_tui_pie_chart_activeItemIndexChange_4_listener($event) { return ctx.onActiveItemIndexChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.content)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("masked", true)("value", ctx.value)("colorHandler", ctx.colorHandler)("size", ctx.size)("activeItemIndex", ctx.activeItemIndex);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_5__["TuiPieChartComponent"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_6__["PolymorpheusOutletComponent"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: block;\n}\n[data-size='s'][_nghost-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n}\n[data-size='m'][_nghost-%COMP%] {\n  width: 9rem;\n  height: 9rem;\n}\n[data-size='l'][_nghost-%COMP%] {\n  width: 11rem;\n  height: 11rem;\n}\n[data-size='xl'][_nghost-%COMP%] {\n  width: 16rem;\n  height: 16rem;\n}\n.t-content[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  font: var(--tui-font-text-m);\n  max-height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  padding: 1.5rem;\n  border-radius: 100%;\n  box-sizing: border-box;\n  overflow: hidden;\n  word-break: break-word;\n  white-space: pre-wrap;\n  color: var(--tui-text-02);\n}\n[data-size='m'][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%] {\n  font: var(--tui-font-text-xs);\n}\n.t-wrapper[_ngcontent-%COMP%]:first-line {\n  color: var(--tui-text-01);\n}\n[data-size='l'][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line {\n  font: var(--tui-font-text-l);\n  font-weight: bold;\n}\n[data-size='m'][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line {\n  font: var(--tui-font-text-m);\n  font-weight: bold;\n}\n.t-shield[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 25%;\n  left: 25%;\n  right: 25%;\n  bottom: 25%;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FkZG9uLWNoYXJ0cy9jb21wb25lbnRzL3JpbmctY2hhcnQvcmluZy1jaGFydC5zdHlsZS5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvYWRkb24tY2hhcnRzL2NvbXBvbmVudHMvcmluZy1jaGFydC9yaW5nLWNoYXJ0LnN0eWxlLmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9jb3JlL3N0eWxlcy9taXhpbnMvbWl4aW5zLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0NBQStDO0FBQy9DLDhDQUE4QztBQUM5Qzs7O0NBR0M7QUNFRDtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBREFKO0FDRUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBREFSO0FDR0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBRERSO0FDSUk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBREZSO0FDS0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBREhSO0FDT0E7RUNESSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBR0ksV0FBQTtFQUNBLFlBQUE7RURISixhQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QURESjtBQ0dJO0VBQ0ksNkJBQUE7QUREUjtBQ0tBO0VBQ0kseUJBQUE7QURISjtBQ0tJO0VBQ0ksNEJBQUE7RUFDQSxpQkFBQTtBREhSO0FDTUk7RUFDSSw0QkFBQTtFQUNBLGlCQUFBO0FESlI7QUNRQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FETkoiLCJmaWxlIjoicHJvamVjdHMvYWRkb24tY2hhcnRzL2NvbXBvbmVudHMvcmluZy1jaGFydC9yaW5nLWNoYXJ0LnN0eWxlLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG46aG9zdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdFtkYXRhLXNpemU9J3MnXSB7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG59XG46aG9zdFtkYXRhLXNpemU9J20nXSB7XG4gIHdpZHRoOiA5cmVtO1xuICBoZWlnaHQ6IDlyZW07XG59XG46aG9zdFtkYXRhLXNpemU9J2wnXSB7XG4gIHdpZHRoOiAxMXJlbTtcbiAgaGVpZ2h0OiAxMXJlbTtcbn1cbjpob3N0W2RhdGEtc2l6ZT0neGwnXSB7XG4gIHdpZHRoOiAxNnJlbTtcbiAgaGVpZ2h0OiAxNnJlbTtcbn1cbi50LWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1tKTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMS41cmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIGNvbG9yOiB2YXIoLS10dWktdGV4dC0wMik7XG59XG46aG9zdFtkYXRhLXNpemU9J20nXSAudC1jb250ZW50IHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC14cyk7XG59XG4udC13cmFwcGVyOmZpcnN0LWxpbmUge1xuICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpO1xufVxuOmhvc3RbZGF0YS1zaXplPSdsJ10gLnQtd3JhcHBlcjpmaXJzdC1saW5lIHtcbiAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1sKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46aG9zdFtkYXRhLXNpemU9J20nXSAudC13cmFwcGVyOmZpcnN0LWxpbmUge1xuICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LW0pO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50LXNoaWVsZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNSU7XG4gIGxlZnQ6IDI1JTtcbiAgcmlnaHQ6IDI1JTtcbiAgYm90dG9tOiAyNSU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbkBzaXplLXM6IDRyZW07XG5Ac2l6ZS1tOiA5cmVtO1xuQHNpemUtbDogMTFyZW07XG5Ac2l6ZS14bDogMTZyZW07XG5cbjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAmW2RhdGEtc2l6ZT0ncyddIHtcbiAgICAgICAgd2lkdGg6IEBzaXplLXM7XG4gICAgICAgIGhlaWdodDogQHNpemUtcztcbiAgICB9XG5cbiAgICAmW2RhdGEtc2l6ZT0nbSddIHtcbiAgICAgICAgd2lkdGg6IEBzaXplLW07XG4gICAgICAgIGhlaWdodDogQHNpemUtbTtcbiAgICB9XG5cbiAgICAmW2RhdGEtc2l6ZT0nbCddIHtcbiAgICAgICAgd2lkdGg6IEBzaXplLWw7XG4gICAgICAgIGhlaWdodDogQHNpemUtbDtcbiAgICB9XG5cbiAgICAmW2RhdGEtc2l6ZT0neGwnXSB7XG4gICAgICAgIHdpZHRoOiBAc2l6ZS14bDtcbiAgICAgICAgaGVpZ2h0OiBAc2l6ZS14bDtcbiAgICB9XG59XG5cbi50LWNvbnRlbnQge1xuICAgIC5mdWxsc2l6ZSgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udDogdmFyKC0tdHVpLWZvbnQtdGV4dC1tKTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDIpO1xuXG4gICAgOmhvc3RbZGF0YS1zaXplPSdtJ10gJiB7XG4gICAgICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQteHMpO1xuICAgIH1cbn1cblxuLnQtd3JhcHBlcjpmaXJzdC1saW5lIHtcbiAgICBjb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpO1xuXG4gICAgOmhvc3RbZGF0YS1zaXplPSdsJ10gJiB7XG4gICAgICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtbCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIDpob3N0W2RhdGEtc2l6ZT0nbSddICYge1xuICAgICAgICBmb250OiB2YXIoLS10dWktZm9udC10ZXh0LW0pO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbi50LXNoaWVsZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjUlO1xuICAgIGxlZnQ6IDI1JTtcbiAgICByaWdodDogMjUlO1xuICAgIGJvdHRvbTogMjUlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4iLCIvLyBjZW50ZXJpbmcgd2l0aCB0cmFuc2xhdGVcbi5jZW50ZXItbGVmdCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xufVxuXG4uY2VudGVyLXRvcCgpIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5jZW50ZXItYWxsKCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi8vIGNsZWFyZml4XG4uY2xlYXJmaXgoKSB7XG4gICAgJjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxufVxuXG4vLy5mdWxsc2l6ZVxuLmZ1bGxzaXplKEBwb3NpdGlvbjogYWJzb2x1dGUsIEBtb2RlOiBoZWlnaHQpIHtcbiAgICBwb3NpdGlvbjogQHBvc2l0aW9uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuXG4gICAgJiB3aGVuIChAbW9kZSA9IGhlaWdodCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgICYgd2hlbiAoQG1vZGUgPSBpbnNldCkge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsZWFyYnRuKCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5hdXRvZmlsbChAbW9kZTpkZWZhdWx0KSB7XG4gICAgJjotd2Via2l0LWF1dG9maWxsLFxuICAgICY6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbiAgICAmOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tdHVpLWJhc2UtMDkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkZWZhdWx0KSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwpIGluc2V0ICFpbXBvcnRhbnQ7IC8vIHRvIG92ZXJsYXkgbmF0aXZlIGJhY2tncm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tdHVpLXRleHQtMDEtbmlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXR1aS1hdXRvZmlsbC1uaWdodCk7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDEwMHJlbSB2YXIoLS10dWktYXV0b2ZpbGwtbmlnaHQpIGluc2V0ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jbGVhcmlucHV0KEBtb2RlOiBkZWZhdWx0KSB7XG4gICAgLmF1dG9maWxsKEBtb2RlKTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogY3VycmVudENvbG9yOyAvLyBmb3IgU2FmYXJpXG59XG5cbi52aXN1YWxseS1oaWRkZW4oKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcbiAgICBjbGlwLXBhdGg6IGluc2V0KDApO1xufVxuXG4vLyBjdXN0b21pemUgbmF0aXZlIHNjcm9sbFxuLmN1c3RvbWl6ZS1zY3JvbGwoKSB7XG4gICAgLy8gZXhjbHVkZSBub24tc3VwcG9ydGluZyBicm93c2Vyc1xuICAgIEBtZWRpYSBhbGwgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2LjI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbiAgICAgICAgICAgIGJvcmRlcjogMi42NjdyZW0gc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1aS1jbGVhci1ob3Zlcik7XG4gICAgICAgIH1cblxuICAgICAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktY2xlYXItYWN0aXZlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dWktdGV4dC0wMyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHNoYWRvd1xuLnNoYWRvdyhAbW9kZTogMSkge1xuICAgIC8vIERlZmF1bHRcbiAgICAmIHdoZW4gKEBtb2RlID0gMSkge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMS41cmVtIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgfVxuXG4gICAgLy8gRHJvcGRvd25cbiAgICAmIHdoZW4gKEBtb2RlID0gMikge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gICAgfVxuXG4gICAgLy8gTW9kYWxcbiAgICAmIHdoZW4gKEBtb2RlID0gMykge1xuICAgICAgICBib3gtc2hhZG93OiAwIDEuMTI1cmVtIDEuODc1cmVtIHJnYmEoMCwgMCwgMCwgMC40OCk7XG4gICAgfVxuXG4gICAgLy8gU2lkZWJhclxuICAgICYgd2hlbiAoQG1vZGUgPSA0KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMCAxLjVyZW0gcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG5cbiAgICAvLyBIb3ZlclxuICAgICYgd2hlbiAoQG1vZGUgPSA1KSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMC43NXJlbSAyLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG5cbiAgICAvLyBOYXZpZ2F0aW9uXG4gICAgJiB3aGVuIChAbW9kZSA9IDYpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgbW9iaWxlXG4gICAgJiB3aGVuIChAbW9kZSA9IDcpIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAtMXJlbSAxLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gICAgfVxufVxuXG4uaW5zZXQtYm9yZGVyKEBkaXJlY3Rpb246IGJvdHRvbSwgQG1vZGU6IG5vbmUpIHtcbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBib3R0b20pIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gZGFyaykge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggcmdiYSg1MSwgNTEsIDUxLCAwLjI0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGxlZnQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgdmFyKC0tdHVpLWJhc2UtMDMpO1xuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBsaWdodCkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgd2hlbiAoQG1vZGUgPSBkYXJrKSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAxcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIHZhcigtLXR1aS1iYXNlLTAzKTtcblxuICAgICAgICAmIHdoZW4gKEBtb2RlID0gbGlnaHQpIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiB3aGVuIChAbW9kZSA9IGRhcmspIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IC0xcHggMCByZ2JhKDUxLCA1MSwgNTEsIDAuMjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0cmFuc2l0aW9uXG4udHJhbnNpdGlvbihAcGFyYW0sIEBzcGVlZDogdmFyKC0tdHVpLWR1cmF0aW9uLCAzMDBtcykpIHtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBAcGFyYW07XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogQHNwZWVkO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbn1cblxuLy8gZGFzaGVkIGJvcmRlclxuLmRhc2hlZC1ib3JkZXIoQGNvbG9yOiBjdXJyZW50Q29sb3IsIEBhbGlnbm1lbnQ6IGJvdHRvbSwgQHNwYWNlOiA0KSB7XG4gICAgQHNpemU6IHVuaXQoQHNwYWNlLCBweCk7XG4gICAgQHBlcmNlbnRhZ2U6ICgxMDAlIC8gQHNwYWNlICogMik7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBAY29sb3IgMCUsIEBjb2xvciBAcGVyY2VudGFnZSwgdHJhbnNwYXJlbnQgQHBlcmNlbnRhZ2UpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgQGFsaWdubWVudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IEBzaXplIDFweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIHR5cGljYWwgb3BhY2l0eSBwcm9wZXJ0aWVzIGZvciBpY29uc1xuLm9wYWNpdHktaWNvbigpIHtcbiAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5ob3ZlcmFibGUtd2l0aC1zaGFkb3coKSB7XG4gICAgLnNoYWRvdygpO1xuICAgIC50cmFuc2l0aW9uKGFsbCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgYm94LXNoYWRvdztcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBib3gtc2hhZG93O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5zaGFkb3coNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtQHNwYWNlKTtcbiAgICB9XG59XG5cbi8vIGdyYWRpZW50XG4uZ3JhZGllbnQoQHN0YXJ0LWNvbG9yLCBAZW5kLWNvbG9yLCBAYW5nbGU6IDQ1ZGVnKSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KEBhbmdsZSwgQHN0YXJ0LWNvbG9yIDAlLCBAZW5kLWNvbG9yIDEwMCUpO1xufVxuXG4vLyB0eXBpY2FsIHByb3BlcnRpZXMgZm9yIHRleHQgb3ZlcmZsb3cgd2l0aCBlbGxpcHNpc1xuLnRleHQtb3ZlcmZsb3coQHR5cGU6IG5vd3JhcCkge1xuICAgIHdoaXRlLXNwYWNlOiBAdHlwZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi50ZXh0LW92ZXJmbG93LXdpdGgtZmFkZShAY29sb3I6IHZhcigtLXR1aS1iYXNlLTAxKSwgQHRyYW5zcGFyZW50Q29sb3I6IHRyYW5zcGFyZW50LCBAd2lkdGg6IDEuODc1cmVtKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgd2lkdGg6IEB3aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIEB0cmFuc3BhcmVudENvbG9yIDAlLCBAY29sb3IgODAlLCBAY29sb3IgMTAwJSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG5cbi5jcmVhdGVTdGFja2luZ0NvbnRleHQoKSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi8vc3BhY2VzXG4udHVpLXNwYWNlKEBkaXJlY3Rpb24sIEBzaXplKSB7XG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gYWxsKSB7XG4gICAgICAgIG1hcmdpbjogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gdG9wKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IEBzcGFjZSAqIEBzaXplO1xuICAgIH1cblxuICAgICYgd2hlbiAoQGRpcmVjdGlvbiA9IGJvdHRvbSkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSB2ZXJ0aWNhbCkge1xuICAgICAgICBtYXJnaW4tdG9wOiBAc3BhY2UgKiBAc2l6ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gbGVmdCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogQHNwYWNlICogQHNpemU7XG4gICAgfVxuXG4gICAgJiB3aGVuIChAZGlyZWN0aW9uID0gcmlnaHQpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG5cbiAgICAmIHdoZW4gKEBkaXJlY3Rpb24gPSBob3Jpem9udGFsKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogQHNwYWNlICogQHNpemU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKiBAc2l6ZTtcbiAgICB9XG59XG5cbi5jb250cmFzdC1iYWNrZ3JvdW5kKEBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZDogQGJhY2tncm91bmQ7XG4gICAgY29sb3I6IGNvbnRyYXN0KEBiYWNrZ3JvdW5kLCAjMzMzLCAjZmZmKTtcbn1cblxuLmJsdXJyZWQtYmFja2dyb3VuZChAY29sb3I6ICNmZmYpIHtcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKEBjb2xvciwgNzAlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC40Mzc1cmVtKTtcbn1cblxuLnNjcm9sbGJhci1oaWRkZW4oKSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgLyogc3R5bGVsaW50LWVuYWJsZSovXG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhcixcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cblxuLy8gaGlkZSBhbiBlbGVtZW50IHZpc3VhbGx5IHdpdGhvdXQgaGlkaW5nIGl0IGZyb20gc2NyZWVuIHJlYWRlcnNcbi5zci1vbmx5KCkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gICAgY2xpcC1wYXRoOiBpbnNldCg1MCUpO1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiRingChartComponent.prototype, "value", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiRingChartComponent.prototype, "size", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiRingChartComponent.prototype, "colorHandler", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiRingChartComponent.prototype, "content", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiRingChartComponent.prototype, "masked", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__["tuiDefaultProp"])()
], TuiRingChartComponent.prototype, "activeItemIndex", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiRingChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: `tui-ring-chart`,
                templateUrl: `./ring-chart.template.html`,
                styleUrls: [`./ring-chart.style.less`],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: [`attr.data-size`]
        }], colorHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], masked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], activeItemIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], activeItemIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "../addon-charts/components/ring-chart/ring-chart.module.ts":
/*!******************************************************************!*\
  !*** ../addon-charts/components/ring-chart/ring-chart.module.ts ***!
  \******************************************************************/
/*! exports provided: TuiRingChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiRingChartModule", function() { return TuiRingChartModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _taiga_ui_addon_charts_components_pie_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-charts/components/pie-chart */ "../addon-charts/components/pie-chart/index.ts");
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tinkoff/ng-polymorpheus */ "../../node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js");
/* harmony import */ var _ring_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ring-chart.component */ "../addon-charts/components/ring-chart/ring-chart.component.ts");






class TuiRingChartModule {
}
TuiRingChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TuiRingChartModule });
TuiRingChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TuiRingChartModule_Factory(t) { return new (t || TuiRingChartModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__["PolymorpheusModule"], _taiga_ui_addon_charts_components_pie_chart__WEBPACK_IMPORTED_MODULE_2__["TuiPieChartModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TuiRingChartModule, { declarations: [_ring_chart_component__WEBPACK_IMPORTED_MODULE_4__["TuiRingChartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__["PolymorpheusModule"], _taiga_ui_addon_charts_components_pie_chart__WEBPACK_IMPORTED_MODULE_2__["TuiPieChartModule"]], exports: [_ring_chart_component__WEBPACK_IMPORTED_MODULE_4__["TuiRingChartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TuiRingChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_3__["PolymorpheusModule"], _taiga_ui_addon_charts_components_pie_chart__WEBPACK_IMPORTED_MODULE_2__["TuiPieChartModule"]],
                declarations: [_ring_chart_component__WEBPACK_IMPORTED_MODULE_4__["TuiRingChartComponent"]],
                exports: [_ring_chart_component__WEBPACK_IMPORTED_MODULE_4__["TuiRingChartComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../addon-charts/constants/default-color-handler.ts":
/*!**********************************************************!*\
  !*** ../addon-charts/constants/default-color-handler.ts ***!
  \**********************************************************/
/*! exports provided: TUI_DEFAULT_COLOR_HANDLER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_DEFAULT_COLOR_HANDLER", function() { return TUI_DEFAULT_COLOR_HANDLER; });
/* harmony import */ var _default_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-colors */ "../addon-charts/constants/default-colors.ts");

/** @deprecated use CSS variables */
const TUI_DEFAULT_COLOR_HANDLER = index => _default_colors__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_COLORS"][index];


/***/ }),

/***/ "../addon-charts/constants/default-colors.ts":
/*!***************************************************!*\
  !*** ../addon-charts/constants/default-colors.ts ***!
  \***************************************************/
/*! exports provided: DEFAULT_COLORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_COLORS", function() { return DEFAULT_COLORS; });
/** @deprecated */
const DEFAULT_COLORS = [
    "primary" /* Primary */,
    "support-13" /* Havelock */,
    "support-21" /* Feijoa */,
    "support-11" /* Lilac */,
    `base-05`,
    "support-01" /* Mustard */,
    "support-02" /* Texas */,
    "support-03" /* Tan */,
    "support-04" /* Salmon */,
    "support-05" /* Sienna */,
    "support-06" /* Bittersweet */,
    "support-07" /* Pinkie */,
    "support-08" /* Charm */,
    "support-09" /* Amethist */,
    "support-10" /* Helio */,
    "support-12" /* Malibu */,
    "support-14" /* Picton */,
    "support-15" /* Mint */,
    "support-16" /* Fountain */,
    "support-17" /* Puertorico */,
    "support-18" /* Bay */,
    "support-19" /* Forest */,
    "support-20" /* York */,
    "error" /* Error */,
    "success" /* Success */,
    "secondary" /* Secondary */,
];


/***/ }),

/***/ "../addon-charts/constants/index.ts":
/*!******************************************!*\
  !*** ../addon-charts/constants/index.ts ***!
  \******************************************/
/*! exports provided: TUI_DEFAULT_COLOR_HANDLER, DEFAULT_COLORS, TUI_ALWAYS_DASHED, TUI_ALWAYS_DOTTED, TUI_ALWAYS_SOLID, TUI_ALWAYS_NONE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_color_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-color-handler */ "../addon-charts/constants/default-color-handler.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_DEFAULT_COLOR_HANDLER", function() { return _default_color_handler__WEBPACK_IMPORTED_MODULE_0__["TUI_DEFAULT_COLOR_HANDLER"]; });

/* harmony import */ var _default_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-colors */ "../addon-charts/constants/default-colors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_COLORS", function() { return _default_colors__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_COLORS"]; });

/* harmony import */ var _line_handlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-handlers */ "../addon-charts/constants/line-handlers.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_ALWAYS_DASHED", function() { return _line_handlers__WEBPACK_IMPORTED_MODULE_2__["TUI_ALWAYS_DASHED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_ALWAYS_DOTTED", function() { return _line_handlers__WEBPACK_IMPORTED_MODULE_2__["TUI_ALWAYS_DOTTED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_ALWAYS_SOLID", function() { return _line_handlers__WEBPACK_IMPORTED_MODULE_2__["TUI_ALWAYS_SOLID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_ALWAYS_NONE", function() { return _line_handlers__WEBPACK_IMPORTED_MODULE_2__["TUI_ALWAYS_NONE"]; });






/***/ }),

/***/ "../addon-charts/constants/line-handlers.ts":
/*!**************************************************!*\
  !*** ../addon-charts/constants/line-handlers.ts ***!
  \**************************************************/
/*! exports provided: TUI_ALWAYS_DASHED, TUI_ALWAYS_DOTTED, TUI_ALWAYS_SOLID, TUI_ALWAYS_NONE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_ALWAYS_DASHED", function() { return TUI_ALWAYS_DASHED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_ALWAYS_DOTTED", function() { return TUI_ALWAYS_DOTTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_ALWAYS_SOLID", function() { return TUI_ALWAYS_SOLID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TUI_ALWAYS_NONE", function() { return TUI_ALWAYS_NONE; });
const TUI_ALWAYS_DASHED = () => `dashed`;
const TUI_ALWAYS_DOTTED = () => `dotted`;
const TUI_ALWAYS_SOLID = () => `solid`;
const TUI_ALWAYS_NONE = () => `none`;


/***/ }),

/***/ "../addon-charts/enums/index.ts":
/*!**************************************!*\
  !*** ../addon-charts/enums/index.ts ***!
  \**************************************/
/*! exports provided: TuiLineType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _line_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-type */ "../addon-charts/enums/line-type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineType", function() { return _line_type__WEBPACK_IMPORTED_MODULE_0__["TuiLineType"]; });




/***/ }),

/***/ "../addon-charts/enums/line-type.ts":
/*!******************************************!*\
  !*** ../addon-charts/enums/line-type.ts ***!
  \******************************************/
/*! exports provided: TuiLineType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiLineType", function() { return TuiLineType; });
/**
 * Native CSS border-style options
 * @deprecated use join type {@link TuiLineTypeT}
 */
var TuiLineType;
(function (TuiLineType) {
    TuiLineType["Solid"] = "solid";
    TuiLineType["Dashed"] = "dashed";
    TuiLineType["Dotted"] = "dotted";
    TuiLineType["None"] = "none";
    TuiLineType["Hidden"] = "hidden";
})(TuiLineType || (TuiLineType = {}));


/***/ }),

/***/ "../addon-charts/index.ts":
/*!********************************!*\
  !*** ../addon-charts/index.ts ***!
  \********************************/
/*! exports provided: TuiArcChartComponent, TuiArcChartModule, TuiAxesComponent, TuiAxesModule, TuiBarComponent, TuiBarModule, valueAssertion, TuiBarChartComponent, TuiBarChartModule, TuiBarSetComponent, TuiBarSetModule, TuiLegendItemComponent, TuiLegendItemModule, smoothingAssertion, TuiLineChartComponent, TuiLineChartModule, TuiLineChartHintDirective, TuiLineDaysChartComponent, TuiLineDaysChartModule, TuiLineDaysChartHintDirective, TuiPieChartComponent, TuiPieChartDirective, TuiPieChartModule, TuiRingChartComponent, TuiRingChartModule, TUI_DEFAULT_COLOR_HANDLER, DEFAULT_COLORS, TUI_ALWAYS_DASHED, TUI_ALWAYS_DOTTED, TUI_ALWAYS_SOLID, TUI_ALWAYS_NONE, TuiLineType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/addon-charts/components */ "../addon-charts/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiArcChartComponent", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiArcChartComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiArcChartModule", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiArcChartModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiAxesComponent", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiAxesComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiAxesModule", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiAxesModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarComponent", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiBarComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarModule", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiBarModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueAssertion", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["valueAssertion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarChartComponent", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiBarChartComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarChartModule", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiBarChartModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarSetComponent", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiBarSetComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiBarSetModule", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiBarSetModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLegendItemComponent", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiLegendItemComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLegendItemModule", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiLegendItemModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "smoothingAssertion", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["smoothingAssertion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartComponent", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiLineChartComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartModule", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiLineChartModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineChartHintDirective", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiLineChartHintDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineDaysChartComponent", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiLineDaysChartComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineDaysChartModule", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiLineDaysChartModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineDaysChartHintDirective", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiLineDaysChartHintDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiPieChartComponent", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiPieChartComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiPieChartDirective", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiPieChartDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiPieChartModule", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiPieChartModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiRingChartComponent", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiRingChartComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiRingChartModule", function() { return _taiga_ui_addon_charts_components__WEBPACK_IMPORTED_MODULE_0__["TuiRingChartModule"]; });

/* harmony import */ var _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @taiga-ui/addon-charts/constants */ "../addon-charts/constants/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_DEFAULT_COLOR_HANDLER", function() { return _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_1__["TUI_DEFAULT_COLOR_HANDLER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_COLORS", function() { return _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_COLORS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_ALWAYS_DASHED", function() { return _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_1__["TUI_ALWAYS_DASHED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_ALWAYS_DOTTED", function() { return _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_1__["TUI_ALWAYS_DOTTED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_ALWAYS_SOLID", function() { return _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_1__["TUI_ALWAYS_SOLID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TUI_ALWAYS_NONE", function() { return _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_1__["TUI_ALWAYS_NONE"]; });

/* harmony import */ var _taiga_ui_addon_charts_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @taiga-ui/addon-charts/enums */ "../addon-charts/enums/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TuiLineType", function() { return _taiga_ui_addon_charts_enums__WEBPACK_IMPORTED_MODULE_2__["TuiLineType"]; });






/***/ }),

/***/ "../addon-charts/utils/control-point.ts":
/*!**********************************************!*\
  !*** ../addon-charts/utils/control-point.ts ***!
  \**********************************************/
/*! exports provided: controlPoint, tuiControlPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controlPoint", function() { return controlPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiControlPoint", function() { return tuiControlPoint; });
/* harmony import */ var _line_angle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-angle */ "../addon-charts/utils/line-angle.ts");
/* harmony import */ var _line_length__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-length */ "../addon-charts/utils/line-length.ts");


/**
 * @deprecated: use {@link tuiControlPoint} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function controlPoint(current, previous, next, reverse = false, smoothing = 0.2) {
    const p = previous || current;
    const n = next || current;
    const angle = Object(_line_angle__WEBPACK_IMPORTED_MODULE_0__["lineAngle"])(p, n) + (reverse ? Math.PI : 0);
    const length = Object(_line_length__WEBPACK_IMPORTED_MODULE_1__["lineLength"])(p, n) * smoothing;
    const x = current[0] + Math.cos(angle) * length;
    const y = current[1] + Math.sin(angle) * length;
    return [x, y];
}
const tuiControlPoint = controlPoint;


/***/ }),

/***/ "../addon-charts/utils/describe-sector.ts":
/*!************************************************!*\
  !*** ../addon-charts/utils/describe-sector.ts ***!
  \************************************************/
/*! exports provided: describeSector, tuiDescribeSector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "describeSector", function() { return describeSector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiDescribeSector", function() { return tuiDescribeSector; });
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taiga-ui/cdk */ "../cdk/index.ts");

const EMPTY = `M 100 0 A 100 100 0 1 1 100 0 L 0 0`;
/**
 * @deprecated: use {@link tuiDescribeSector} instead
 * Describes a normalized sector by angles. Normalized meaning it supposed to work with
 * SVG with viewBox="-1 -1 2 2" so that 0 coordinates in cartesian and polar match the same spot.
 * Everything is multiplied by 100 (including viewBox of SVG to host this) so IE properly
 * handles hover events.
 *
 * @param startAngle starting angle in degrees
 * @param endAngle ending angle in degrees
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function describeSector(startAngle, endAngle) {
    const startRad = Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__["toRadians"])(startAngle);
    const endRad = Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__["toRadians"])(endAngle);
    const startX = Math.cos(startRad) * 100;
    const startY = Math.sin(startRad) * 100;
    const endX = Math.cos(endRad) * 100;
    const endY = Math.sin(endRad) * 100;
    const largeArcFlag = Object(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__["toInt"])(endAngle - startAngle > 180);
    const result = [
        `M`,
        startX,
        startY,
        `A 100 100 0`,
        largeArcFlag,
        1,
        endX,
        endY,
        `L 0 0`,
    ];
    return isNaN(endX) ? EMPTY : result.join(` `);
}
const tuiDescribeSector = describeSector;


/***/ }),

/***/ "../addon-charts/utils/draw-curve.ts":
/*!*******************************************!*\
  !*** ../addon-charts/utils/draw-curve.ts ***!
  \*******************************************/
/*! exports provided: drawCurve, tuiDrawCurve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawCurve", function() { return drawCurve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiDrawCurve", function() { return tuiDrawCurve; });
/* harmony import */ var _control_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-point */ "../addon-charts/utils/control-point.ts");

/**
 * @deprecated: use {@link tuiDrawCurve} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function drawCurve(array, index, smoothing) {
    const [cpsX, cpsY] = Object(_control_point__WEBPACK_IMPORTED_MODULE_0__["controlPoint"])(array[index - 1], array[index - 2], array[index], false, smoothing);
    const [cpeX, cpeY] = Object(_control_point__WEBPACK_IMPORTED_MODULE_0__["controlPoint"])(array[index], array[index - 1], array[index + 1], true, smoothing);
    return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${array[index][0]},${array[index][1]}`;
}
const tuiDrawCurve = drawCurve;


/***/ }),

/***/ "../addon-charts/utils/draw-line.ts":
/*!******************************************!*\
  !*** ../addon-charts/utils/draw-line.ts ***!
  \******************************************/
/*! exports provided: drawLine, tuiDrawLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawLine", function() { return drawLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiDrawLine", function() { return tuiDrawLine; });
/**
 * @deprecated: use {@link drawLine} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function drawLine(point) {
    return `L ${point}`;
}
const tuiDrawLine = drawLine;


/***/ }),

/***/ "../addon-charts/utils/draw.ts":
/*!*************************************!*\
  !*** ../addon-charts/utils/draw.ts ***!
  \*************************************/
/*! exports provided: draw, tuiDraw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiDraw", function() { return tuiDraw; });
/* harmony import */ var _draw_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw-curve */ "../addon-charts/utils/draw-curve.ts");
/* harmony import */ var _draw_line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw-line */ "../addon-charts/utils/draw-line.ts");


const COEFFICIENT = 500;
/**
 * @deprecated: use {@link tuiDraw} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function draw(array, index, smoothing) {
    return smoothing
        ? Object(_draw_curve__WEBPACK_IMPORTED_MODULE_0__["drawCurve"])(array, index, smoothing / COEFFICIENT)
        : Object(_draw_line__WEBPACK_IMPORTED_MODULE_1__["drawLine"])([array[index][0], array[index][1]]);
}
const tuiDraw = draw;


/***/ }),

/***/ "../addon-charts/utils/index.ts":
/*!**************************************!*\
  !*** ../addon-charts/utils/index.ts ***!
  \**************************************/
/*! exports provided: controlPoint, tuiControlPoint, describeSector, tuiDescribeSector, draw, tuiDraw, drawCurve, tuiDrawCurve, drawLine, tuiDrawLine, lineAngle, tuiLineAngle, lineLength, tuiLineLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _control_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./control-point */ "../addon-charts/utils/control-point.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "controlPoint", function() { return _control_point__WEBPACK_IMPORTED_MODULE_0__["controlPoint"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiControlPoint", function() { return _control_point__WEBPACK_IMPORTED_MODULE_0__["tuiControlPoint"]; });

/* harmony import */ var _describe_sector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./describe-sector */ "../addon-charts/utils/describe-sector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "describeSector", function() { return _describe_sector__WEBPACK_IMPORTED_MODULE_1__["describeSector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiDescribeSector", function() { return _describe_sector__WEBPACK_IMPORTED_MODULE_1__["tuiDescribeSector"]; });

/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./draw */ "../addon-charts/utils/draw.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return _draw__WEBPACK_IMPORTED_MODULE_2__["draw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiDraw", function() { return _draw__WEBPACK_IMPORTED_MODULE_2__["tuiDraw"]; });

/* harmony import */ var _draw_curve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./draw-curve */ "../addon-charts/utils/draw-curve.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drawCurve", function() { return _draw_curve__WEBPACK_IMPORTED_MODULE_3__["drawCurve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiDrawCurve", function() { return _draw_curve__WEBPACK_IMPORTED_MODULE_3__["tuiDrawCurve"]; });

/* harmony import */ var _draw_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./draw-line */ "../addon-charts/utils/draw-line.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drawLine", function() { return _draw_line__WEBPACK_IMPORTED_MODULE_4__["drawLine"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiDrawLine", function() { return _draw_line__WEBPACK_IMPORTED_MODULE_4__["tuiDrawLine"]; });

/* harmony import */ var _line_angle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./line-angle */ "../addon-charts/utils/line-angle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineAngle", function() { return _line_angle__WEBPACK_IMPORTED_MODULE_5__["lineAngle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiLineAngle", function() { return _line_angle__WEBPACK_IMPORTED_MODULE_5__["tuiLineAngle"]; });

/* harmony import */ var _line_length__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./line-length */ "../addon-charts/utils/line-length.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lineLength", function() { return _line_length__WEBPACK_IMPORTED_MODULE_6__["lineLength"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tuiLineLength", function() { return _line_length__WEBPACK_IMPORTED_MODULE_6__["tuiLineLength"]; });










/***/ }),

/***/ "../addon-charts/utils/line-angle.ts":
/*!*******************************************!*\
  !*** ../addon-charts/utils/line-angle.ts ***!
  \*******************************************/
/*! exports provided: lineAngle, tuiLineAngle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineAngle", function() { return lineAngle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiLineAngle", function() { return tuiLineAngle; });
/**
 * @deprecated: use {@link tuiLineAngle} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function lineAngle(a, b) {
    const x = b[0] - a[0];
    const y = b[1] - a[1];
    return Math.atan2(y, x);
}
const tuiLineAngle = lineAngle;


/***/ }),

/***/ "../addon-charts/utils/line-length.ts":
/*!********************************************!*\
  !*** ../addon-charts/utils/line-length.ts ***!
  \********************************************/
/*! exports provided: lineLength, tuiLineLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineLength", function() { return lineLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuiLineLength", function() { return tuiLineLength; });
/**
 * @deprecated: use {@link tuiLineLength} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function lineLength(a, b) {
    const x = b[0] - a[0];
    const y = b[1] - a[1];
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
const tuiLineLength = lineLength;


/***/ })

}]);
//# sourceMappingURL=default~charts-arc-chart-arc-chart-module~charts-axes-axes-module~charts-bar-bar-module~charts-bar-c~6e29fb7b.js.map