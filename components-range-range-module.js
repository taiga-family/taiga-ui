(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-range-range-module"],{

/***/ "./src/modules/components/range/examples/1/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/range/examples/1/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiRangeExample1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiRangeExample1", function() { return TuiRangeExample1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/range/range.component */ "../kit/components/range/range.component.ts");
/* harmony import */ var _kit_components_range_range_change_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/range/range-change.directive */ "../kit/components/range/range-change.directive.ts");








class TuiRangeExample1 {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([4, 6]);
    }
}
TuiRangeExample1.ɵfac = function TuiRangeExample1_Factory(t) { return new (t || TuiRangeExample1)(); };
TuiRangeExample1.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiRangeExample1, selectors: [["tui-range-example-1"]], decls: 1, vars: 3, consts: [[3, "formControl", "max", "quantum"]], template: function TuiRangeExample1_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-range", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.control)("max", 10)("quantum", 1);
    } }, directives: [_kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_4__["TuiRangeComponent"], _kit_components_range_range_change_directive__WEBPACK_IMPORTED_MODULE_5__["TuiRangeChangeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiRangeExample1, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-range-example-1`,
                templateUrl: `./index.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/range/examples/2/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/range/examples/2/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiRangeExample2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiRangeExample2", function() { return TuiRangeExample2; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_island_island_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/island/island.component */ "../kit/components/island/island.component.ts");
/* harmony import */ var _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../kit/components/range/range.component */ "../kit/components/range/range.component.ts");
/* harmony import */ var _kit_components_range_range_change_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../kit/components/range/range-change.directive */ "../kit/components/range/range-change.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");










class TuiRangeExample2 {
    constructor() {
        this.smallRangeValue = [0, 40];
        this.bigRangeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([40, 60]);
    }
}
TuiRangeExample2.ɵfac = function TuiRangeExample2_Factory(t) { return new (t || TuiRangeExample2)(); };
TuiRangeExample2.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiRangeExample2, selectors: [["tui-range-example-2"]], decls: 20, vars: 10, consts: [[1, "island"], [1, "tui-island__title"], ["id", "s-size-range", "size", "s", 1, "range", 3, "max", "ngModel", "ngModelChange"], [1, "tui-island__paragraph"], ["for", "s-size-range"], ["id", "m-size-range", "size", "m", 1, "range", 3, "formControl", "max"], ["for", "m-size-range"]], template: function TuiRangeExample2_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-island", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "S-size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tui-range", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiRangeExample2_Template_tui_range_ngModelChange_3_listener($event) { return ctx.smallRangeValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Control value: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "output", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tui-island", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "M-size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tui-range", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Control value: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "output", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("max", 100)("ngModel", ctx.smallRangeValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, ctx.smallRangeValue));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.bigRangeControl)("max", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 8, ctx.bigRangeControl.value));
    } }, directives: [_kit_components_island_island_component__WEBPACK_IMPORTED_MODULE_4__["TuiIslandComponent"], _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_5__["TuiRangeComponent"], _kit_components_range_range_change_directive__WEBPACK_IMPORTED_MODULE_6__["TuiRangeChangeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  row-gap: 1rem;\n}\n.island[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 49%;\n}\n@media screen and (max-width: 37.4625em) {\n  .island[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.range[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9yYW5nZS9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvcmFuZ2UvZXhhbXBsZXMvMi9pbmRleC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBREtKO0FDRkE7RUFDSSxzQkFBQTtFQUNBLFVBQUE7QURJSjtBQ0ZJO0VBQUE7SUFDSSxXQUFBO0VES047QUFDRjtBQ0ZBO0VBQ0ksY0FBQTtBRElKIiwiZmlsZSI6InByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9yYW5nZS9leGFtcGxlcy8yL2luZGV4Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1tYXgtc3BlY2lmaWNpdHkgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKlxuRXZlcnkgbWF4LXdpZHRoIG9mIGJyZWFrcG9pbnQgaXMgZXF1YWw6XG5uZXh0IG1pbi13aWR0aCAtIDYwJSBmcm9tIDFweCAoMS8xNiAqIDAuNiA9IDAuMDM3NSlcbiovXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICByb3ctZ2FwOiAxcmVtO1xufVxuLmlzbGFuZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiA0OSU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNy40NjI1ZW0pIHtcbiAgLmlzbGFuZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5yYW5nZSB7XG4gIG1hcmdpbjogMnJlbSAwO1xufVxuIiwiQGltcG9ydCAndGFpZ2EtdWktbG9jYWwnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHJvdy1nYXA6IDFyZW07XG59XG5cbi5pc2xhbmQge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDQ5JTtcblxuICAgIEBtZWRpYSBAbW9iaWxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4ucmFuZ2Uge1xuICAgIG1hcmdpbjogMnJlbSAwO1xufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiRangeExample2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-range-example-2`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_3__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/range/examples/3/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/range/examples/3/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiRangeExample3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiRangeExample3", function() { return TuiRangeExample3; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/range/range.component */ "../kit/components/range/range.component.ts");
/* harmony import */ var _kit_components_range_range_change_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/range/range-change.directive */ "../kit/components/range/range-change.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../../core/components/svg/svg.component */ "../core/components/svg/svg.component.ts");









function TuiRangeExample3_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "i18nPlural");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const label_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, label_r3, ctx_r4.pluralMap), " ");
} }
function TuiRangeExample3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TuiRangeExample3_div_2_ng_container_1_Template, 3, 4, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", label_r3 !== 750)("ngIfElse", _r1);
} }
function TuiRangeExample3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "3/4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TuiRangeExample3 {
    constructor() {
        this.min = 0;
        this.max = 1000;
        this.quantum = 250;
        this.segments = 4;
        this.labels = [...new Array(this.segments + 1).keys()].map(i => this.min + this.quantum * i);
        this.value = [0, 250];
        // https://angular.io/api/common/I18nPluralPipe
        this.pluralMap = { '=0': `0`, '=1': `# item`, '=1000': `MAX`, other: `# items` };
    }
}
TuiRangeExample3.ɵfac = function TuiRangeExample3_Factory(t) { return new (t || TuiRangeExample3)(); };
TuiRangeExample3.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiRangeExample3, selectors: [["tui-range-example-3"]], decls: 11, vars: 9, consts: [["id", "range-with-segments", "new", "", "size", "m", 1, "range", 3, "min", "max", "quantum", "segments", "ngModel", "ngModelChange"], [1, "ticks-labels"], [4, "ngFor", "ngForOf"], ["labelWithIcon", ""], [1, "tui-space_top-12", "tui-space_bottom-0"], ["for", "range-with-segments"], [4, "ngIf", "ngIfElse"], ["src", "tuiIconArrowUp"]], template: function TuiRangeExample3_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-range", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiRangeExample3_Template_tui_range_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiRangeExample3_div_2_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TuiRangeExample3_ng_template_3_Template, 3, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Control value: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "output", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("quantum", ctx.quantum)("segments", ctx.segments)("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.labels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, ctx.value));
    } }, directives: [_kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_3__["TuiRangeComponent"], _kit_components_range_range_change_directive__WEBPACK_IMPORTED_MODULE_4__["TuiRangeChangeDirective"], _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_3__["TuiNewRangeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _core_components_svg_svg_component__WEBPACK_IMPORTED_MODULE_7__["TuiSvgComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["I18nPluralPipe"]], styles: [".range[_ngcontent-%COMP%] {\n  z-index: 1;\n  \n}\n.range[_ngcontent-%COMP%]:after {\n  content: '';\n  position: absolute;\n  top: -0.5rem;\n  bottom: -1.5rem;\n  width: 100%;\n}\n.ticks-labels[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0.5rem;\n  font: var(--tui-font-text-s);\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 2;\n  text-align: center;\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -0.5rem;\n  flex: 1;\n  text-align: left;\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -0.5rem;\n  flex: 1;\n  text-align: right;\n}\ntui-input-slider[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%] {\n  margin-left: calc(var(--tui-radius-m) / 2 + 0.5rem);\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9yYW5nZS9leGFtcGxlcy8zL2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvcmFuZ2UvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL3NsaWRlci5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxVQUFBO0VES0YsbURBQW1EO0FBQ3JEO0FDSEk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QURLUjtBQ0RBO0VDUkksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUZZSjtBRVZJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUZZUjtBRVZRO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBRllaO0FFVFE7RUFDSSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FGV1o7QUVQSTtFQUNJLG1EQUFBO0FGU1I7QUVOSTs7RUFHSSxpQkFBQTtFQUNBLGtCQUFBO0FGT1I7QUVKWTs7RUFDSSxXQUFBO0FGT2hCO0FFSlk7O0VBQ0ksWUFBQTtBRk9oQiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvcmFuZ2UvZXhhbXBsZXMvMy9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLnJhbmdlIHtcbiAgei1pbmRleDogMTtcbiAgLyogKE9wdGlvbmFsbHkpIGV4cGFuZCBjbGlja2FibGUgYXJlYSBhcyB5b3Ugd2lzaCAqL1xufVxuLnJhbmdlOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMC41cmVtO1xuICBib3R0b206IC0xLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRpY2tzLWxhYmVscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAwLjVyZW07XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG59XG4udGlja3MtbGFiZWxzID4gKiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpY2tzLWxhYmVscyA+ICo6Zmlyc3QtY2hpbGQge1xuICBsZWZ0OiAtMC41cmVtO1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRpY2tzLWxhYmVscyA+ICo6bGFzdC1jaGlsZCB7XG4gIHJpZ2h0OiAtMC41cmVtO1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbnR1aS1pbnB1dC1zbGlkZXIgKyAudGlja3MtbGFiZWxzIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tdHVpLXJhZGl1cy1tKSAvIDIgKyAwLjVyZW0pO1xufVxudHVpLWlucHV0LXJhbmdlICsgLnRpY2tzLWxhYmVscyxcbnR1aS1yYW5nZSArIC50aWNrcy1sYWJlbHMge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxudHVpLWlucHV0LXJhbmdlICsgLnRpY2tzLWxhYmVscyA+ICo6Zmlyc3QtY2hpbGQsXG50dWktcmFuZ2UgKyAudGlja3MtbGFiZWxzID4gKjpmaXJzdC1jaGlsZCB7XG4gIGxlZnQ6IC0xcmVtO1xufVxudHVpLWlucHV0LXJhbmdlICsgLnRpY2tzLWxhYmVscyA+ICo6bGFzdC1jaGlsZCxcbnR1aS1yYW5nZSArIC50aWNrcy1sYWJlbHMgPiAqOmxhc3QtY2hpbGQge1xuICByaWdodDogLTFyZW07XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5yYW5nZSB7XG4gICAgei1pbmRleDogMTtcblxuICAgIC8qIChPcHRpb25hbGx5KSBleHBhbmQgY2xpY2thYmxlIGFyZWEgYXMgeW91IHdpc2ggKi9cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMC41cmVtO1xuICAgICAgICBib3R0b206IC0xLjVyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnRpY2tzLWxhYmVscyB7XG4gICAgLnR1aS1zbGlkZXItdGlja3MtbGFiZWxzKG0pO1xufVxuIiwiQHRodW1iLWRpYW1ldGVyczoge1xuICAgIEBzOiAwLjVyZW07XG4gICAgQG06IDFyZW07XG59O1xuXG4udHVpLXNsaWRlci10aWNrcy1sYWJlbHMoQGlucHV0LXNpemU6IG0pIHtcbiAgICBAZmlyc3QtdGljay1jZW50ZXI6IChAdGh1bWItZGlhbWV0ZXJzWyBAQGlucHV0LXNpemVdIC8gMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgQGZpcnN0LXRpY2stY2VudGVyO1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG5cbiAgICAmID4gKiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZmxleDogMjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbGVmdDogLUBmaXJzdC10aWNrLWNlbnRlcjtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHJpZ2h0OiAtQGZpcnN0LXRpY2stY2VudGVyO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHVpLWlucHV0LXNsaWRlciArICYge1xuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS10dWktcmFkaXVzLW0pIC8gMiArIEBmaXJzdC10aWNrLWNlbnRlcik7XG4gICAgfVxuXG4gICAgdHVpLWlucHV0LXJhbmdlICsgJixcbiAgICB0dWktcmFuZ2UgKyAmIHtcbiAgICAgICAgQHRodW1iOiBAdGh1bWItZGlhbWV0ZXJzWyBAQGlucHV0LXNpemVdO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHRodW1iO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEB0aHVtYjtcblxuICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtQHRodW1iO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtQHRodW1iO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiRangeExample3, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-range-example-3`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/range/examples/4/index.ts":
/*!**********************************************************!*\
  !*** ./src/modules/components/range/examples/4/index.ts ***!
  \**********************************************************/
/*! exports provided: TuiRangeExample4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TuiRangeExample4", function() { return TuiRangeExample4; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/encapsulation */ "./src/emulate/view-encapsulation.ts");
/* harmony import */ var _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../kit/components/range/range.component */ "../kit/components/range/range.component.ts");
/* harmony import */ var _kit_components_range_range_change_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../kit/components/range/range-change.directive */ "../kit/components/range/range-change.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");








function TuiRangeExample4_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const label_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](label_r1);
} }
class TuiRangeExample4 {
    constructor() {
        this.min = 0;
        this.max = 1000000;
        this.ticksLabels = [`0`, `10K`, `100K`, `500k`, `1000K`];
        this.segments = this.ticksLabels.length - 1;
        this.value = [0, 100000];
        this.keySteps = [
            // [percent, value]
            [0, this.min],
            [25, 10000],
            [50, 100000],
            [75, 500000],
            [100, this.max],
        ];
    }
}
TuiRangeExample4.ɵfac = function TuiRangeExample4_Factory(t) { return new (t || TuiRangeExample4)(); };
TuiRangeExample4.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TuiRangeExample4, selectors: [["tui-range-example-4"]], decls: 9, vars: 10, consts: [["id", "range-with-key-steps", "new", "", "size", "m", 1, "range", 3, "min", "max", "keySteps", "steps", "segments", "ngModel", "ngModelChange"], [1, "ticks-labels"], [4, "ngFor", "ngForOf"], [1, "tui-space_top-12", "tui-space_bottom-0"], ["for", "range-with-key-steps"]], template: function TuiRangeExample4_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-range", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TuiRangeExample4_Template_tui_range_ngModelChange_0_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TuiRangeExample4_span_2_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Control value: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "output", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", ctx.min)("max", ctx.max)("keySteps", ctx.keySteps)("steps", 2 * ctx.segments)("segments", ctx.segments)("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticksLabels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 8, ctx.value));
    } }, directives: [_kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_3__["TuiRangeComponent"], _kit_components_range_range_change_directive__WEBPACK_IMPORTED_MODULE_4__["TuiRangeChangeDirective"], _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_3__["TuiNewRangeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]], styles: [".range[_ngcontent-%COMP%] {\n  z-index: 1;\n  \n}\n.range[_ngcontent-%COMP%]:after {\n  content: '';\n  position: absolute;\n  top: -0.5rem;\n  bottom: -1.5rem;\n  width: 100%;\n}\n.ticks-labels[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 0.5rem;\n  font: var(--tui-font-text-s);\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 2;\n  text-align: center;\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -0.5rem;\n  flex: 1;\n  text-align: left;\n}\n.ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -0.5rem;\n  flex: 1;\n  text-align: right;\n}\ntui-input-slider[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%] {\n  margin-left: calc(var(--tui-radius-m) / 2 + 0.5rem);\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  left: -1rem;\n}\ntui-input-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%]    + .ticks-labels[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  right: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2RlbW8vc3JjL21vZHVsZXMvY29tcG9uZW50cy9yYW5nZS9leGFtcGxlcy80L2luZGV4Lmxlc3MiLCIvaG9tZS9ydW5uZXIvd29yay90YWlnYS11aS90YWlnYS11aS9wcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvcmFuZ2UvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwiL2hvbWUvcnVubmVyL3dvcmsvdGFpZ2EtdWkvdGFpZ2EtdWkvcHJvamVjdHMvY29yZS9zdHlsZXMvbWl4aW5zL3NsaWRlci5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUM7OztDQUdDO0FDSEQ7RUFDSSxVQUFBO0VES0YsbURBQW1EO0FBQ3JEO0FDSEk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QURLUjtBQ0RBO0VDUkksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUZZSjtBRVZJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUZZUjtBRVZRO0VBQ0ksYUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBRllaO0FFVFE7RUFDSSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGlCQUFBO0FGV1o7QUVQSTtFQUNJLG1EQUFBO0FGU1I7QUVOSTs7RUFHSSxpQkFBQTtFQUNBLGtCQUFBO0FGT1I7QUVKWTs7RUFDSSxXQUFBO0FGT2hCO0FFSlk7O0VBQ0ksWUFBQTtBRk9oQiIsImZpbGUiOiJwcm9qZWN0cy9kZW1vL3NyYy9tb2R1bGVzL2NvbXBvbmVudHMvcmFuZ2UvZXhhbXBsZXMvNC9pbmRleC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLyogc3R5bGVsaW50LWRpc2FibGUgc2VsZWN0b3ItbWF4LXNwZWNpZmljaXR5ICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlIHNlbGVjdG9yLW1heC1zcGVjaWZpY2l0eSAqL1xuLypcbkV2ZXJ5IG1heC13aWR0aCBvZiBicmVha3BvaW50IGlzIGVxdWFsOlxubmV4dCBtaW4td2lkdGggLSA2MCUgZnJvbSAxcHggKDEvMTYgKiAwLjYgPSAwLjAzNzUpXG4qL1xuLnJhbmdlIHtcbiAgei1pbmRleDogMTtcbiAgLyogKE9wdGlvbmFsbHkpIGV4cGFuZCBjbGlja2FibGUgYXJlYSBhcyB5b3Ugd2lzaCAqL1xufVxuLnJhbmdlOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMC41cmVtO1xuICBib3R0b206IC0xLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRpY2tzLWxhYmVscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCAwLjVyZW07XG4gIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG59XG4udGlja3MtbGFiZWxzID4gKiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRpY2tzLWxhYmVscyA+ICo6Zmlyc3QtY2hpbGQge1xuICBsZWZ0OiAtMC41cmVtO1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRpY2tzLWxhYmVscyA+ICo6bGFzdC1jaGlsZCB7XG4gIHJpZ2h0OiAtMC41cmVtO1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbnR1aS1pbnB1dC1zbGlkZXIgKyAudGlja3MtbGFiZWxzIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tdHVpLXJhZGl1cy1tKSAvIDIgKyAwLjVyZW0pO1xufVxudHVpLWlucHV0LXJhbmdlICsgLnRpY2tzLWxhYmVscyxcbnR1aS1yYW5nZSArIC50aWNrcy1sYWJlbHMge1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxudHVpLWlucHV0LXJhbmdlICsgLnRpY2tzLWxhYmVscyA+ICo6Zmlyc3QtY2hpbGQsXG50dWktcmFuZ2UgKyAudGlja3MtbGFiZWxzID4gKjpmaXJzdC1jaGlsZCB7XG4gIGxlZnQ6IC0xcmVtO1xufVxudHVpLWlucHV0LXJhbmdlICsgLnRpY2tzLWxhYmVscyA+ICo6bGFzdC1jaGlsZCxcbnR1aS1yYW5nZSArIC50aWNrcy1sYWJlbHMgPiAqOmxhc3QtY2hpbGQge1xuICByaWdodDogLTFyZW07XG59XG4iLCJAaW1wb3J0ICd0YWlnYS11aS1sb2NhbCc7XG5cbi5yYW5nZSB7XG4gICAgei1pbmRleDogMTtcblxuICAgIC8qIChPcHRpb25hbGx5KSBleHBhbmQgY2xpY2thYmxlIGFyZWEgYXMgeW91IHdpc2ggKi9cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMC41cmVtO1xuICAgICAgICBib3R0b206IC0xLjVyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnRpY2tzLWxhYmVscyB7XG4gICAgLnR1aS1zbGlkZXItdGlja3MtbGFiZWxzKG0pO1xufVxuIiwiQHRodW1iLWRpYW1ldGVyczoge1xuICAgIEBzOiAwLjVyZW07XG4gICAgQG06IDFyZW07XG59O1xuXG4udHVpLXNsaWRlci10aWNrcy1sYWJlbHMoQGlucHV0LXNpemU6IG0pIHtcbiAgICBAZmlyc3QtdGljay1jZW50ZXI6IChAdGh1bWItZGlhbWV0ZXJzWyBAQGlucHV0LXNpemVdIC8gMik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDAgQGZpcnN0LXRpY2stY2VudGVyO1xuICAgIGZvbnQ6IHZhcigtLXR1aS1mb250LXRleHQtcyk7XG5cbiAgICAmID4gKiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZmxleDogMjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbGVmdDogLUBmaXJzdC10aWNrLWNlbnRlcjtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHJpZ2h0OiAtQGZpcnN0LXRpY2stY2VudGVyO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHVpLWlucHV0LXNsaWRlciArICYge1xuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS10dWktcmFkaXVzLW0pIC8gMiArIEBmaXJzdC10aWNrLWNlbnRlcik7XG4gICAgfVxuXG4gICAgdHVpLWlucHV0LXJhbmdlICsgJixcbiAgICB0dWktcmFuZ2UgKyAmIHtcbiAgICAgICAgQHRodW1iOiBAdGh1bWItZGlhbWV0ZXJzWyBAQGlucHV0LXNpemVdO1xuICAgICAgICBtYXJnaW4tbGVmdDogQHRodW1iO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IEB0aHVtYjtcblxuICAgICAgICAmID4gKiB7XG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtQHRodW1iO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtQHRodW1iO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TuiRangeExample4, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `tui-range-example-4`,
                templateUrl: `./index.html`,
                styleUrls: [`./index.less`],
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_1__["changeDetection"],
                encapsulation: _demo_emulate_encapsulation__WEBPACK_IMPORTED_MODULE_2__["encapsulation"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/range/range.component.ts":
/*!*********************************************************!*\
  !*** ./src/modules/components/range/range.component.ts ***!
  \*********************************************************/
/*! exports provided: ExampleTuiRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiRangeComponent", function() { return ExampleTuiRangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @demo/emulate/change-detection */ "./src/emulate/change-detection-strategy.ts");
/* harmony import */ var _addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page.component */ "../addon-doc/src/components/page/page.component.ts");
/* harmony import */ var _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/page/page-tab.directive */ "../addon-doc/src/components/page/page-tab.directive.ts");
/* harmony import */ var _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/components/notification/notification.component */ "../core/components/notification/notification.component.ts");
/* harmony import */ var _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/example/example.component */ "../addon-doc/src/components/example/example.component.ts");
/* harmony import */ var _examples_1_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1/index */ "./src/modules/components/range/examples/1/index.ts");
/* harmony import */ var _examples_2_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2/index */ "./src/modules/components/range/examples/2/index.ts");
/* harmony import */ var _examples_3_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/3/index */ "./src/modules/components/range/examples/3/index.ts");
/* harmony import */ var _examples_4_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/4/index */ "./src/modules/components/range/examples/4/index.ts");
/* harmony import */ var _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/demo/demo.component */ "../addon-doc/src/components/demo/demo.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation.component */ "../addon-doc/src/components/documentation/documentation.component.ts");
/* harmony import */ var _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/documentation/documentation-property-connector.directive */ "../addon-doc/src/components/documentation/documentation-property-connector.directive.ts");
/* harmony import */ var _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../kit/components/range/range.component */ "../kit/components/range/range.component.ts");
/* harmony import */ var _kit_components_range_range_change_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../kit/components/range/range-change.directive */ "../kit/components/range/range-change.directive.ts");
/* harmony import */ var _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../core/components/link/link.component */ "../core/components/link/link.component.ts");
/* harmony import */ var _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../addon-doc/src/components/code/code.component */ "../addon-doc/src/components/code/code.component.ts");




















var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2601219398064138169$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__1 = goog.getMsg("Component allows to choose a part of a range");
    I18N_0 = MSG_EXTERNAL_2601219398064138169$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟39507a5d0ef5f798ed73885e520e5ac975a9e93f␟2601219398064138169:Component allows to choose a part of a range`;
}
var I18N_2;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_1346465782286970335$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__3 = goog.getMsg(" This component is being refactored. Soon\u00A0(next\u00A0major\u00A0release) you will see the fresh version of it! ");
    I18N_2 = MSG_EXTERNAL_1346465782286970335$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__3;
}
else {
    I18N_2 = $localize `:␟09456f65f3a00702ca9aedfa0f1bedf1b28d63ea␟1346465782286970335: This component is being refactored. Soon (next major release) you will see the fresh version of it! `;
}
var I18N_4;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5861899087121976760$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__5 = goog.getMsg(" Of course, we keep backward compatibility in mind (for 2.x.x). You can still use old version of {$startTagCode}Range{$closeTagCode} . ", { "startTagCode": "\uFFFD#7\uFFFD", "closeTagCode": "\uFFFD/#7\uFFFD" });
    I18N_4 = MSG_EXTERNAL_5861899087121976760$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__5;
}
else {
    I18N_4 = $localize `:␟f4ca6accec772a62b559fc95d86e63a49afb8a4e␟5861899087121976760: Of course, we keep backward compatibility in mind (for 2.x.x). You can still use old version of ${"\uFFFD#7\uFFFD"}:START_TAG_CODE:Range${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_CODE: . `;
}
var I18N_6;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_559627014458016143$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__7 = goog.getMsg(" However, if you are going to use this component, we recommend to use new version. To enable the \"new version\"-mode, add {$startTagCode}new{$closeTagCode} directive. Example:\u00A0 {$startTagCode}<tui\u2011range\u00A0new\u00A0...>{$closeTagCode}", { "startTagCode": "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]", "closeTagCode": "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]" });
    I18N_6 = MSG_EXTERNAL_559627014458016143$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__7;
}
else {
    I18N_6 = $localize `:␟02ad0f5e7f445802501f951f04d033f492b1e40c␟559627014458016143: However, if you are going to use this component, we recommend to use new version. To enable the "new version"-mode, add ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:new${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE: directive. Example:  ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:<tui‑range new ...>${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE:`;
}
I18N_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_6);
var I18N_8;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__9 = goog.getMsg("Basic");
    I18N_8 = MSG_EXTERNAL_8643289769990675407$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__9;
}
else {
    I18N_8 = $localize `:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
}
const _c10 = ["heading", I18N_8];
var I18N_11;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2165905371258601036$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__12 = goog.getMsg("Sizes");
    I18N_11 = MSG_EXTERNAL_2165905371258601036$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__12;
}
else {
    I18N_11 = $localize `:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`;
}
const _c13 = ["heading", I18N_11];
var I18N_14;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7433618922144942348$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__15 = goog.getMsg("Visual segments + labels for ticks");
    I18N_14 = MSG_EXTERNAL_7433618922144942348$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__15;
}
else {
    I18N_14 = $localize `:␟da3ee626899400b20e2eec11b3ddadea8a3ddcc5␟7433618922144942348:Visual segments + labels for ticks`;
}
const _c16 = ["heading", I18N_14];
var I18N_17;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7222770680801212686$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__18 = goog.getMsg(" Use mixin {$startTagCode}tui-slider-ticks-labels{$closeTagCode} to arrange ticks' labels (it places them strictly below ticks). ", { "startTagCode": "\uFFFD#23\uFFFD", "closeTagCode": "\uFFFD/#23\uFFFD" });
    I18N_17 = MSG_EXTERNAL_7222770680801212686$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__18;
}
else {
    I18N_17 = $localize `:␟b71cff54548c311b9382985ce173ddbd05b1455a␟7222770680801212686: Use mixin ${"\uFFFD#23\uFFFD"}:START_TAG_CODE:tui-slider-ticks-labels${"\uFFFD/#23\uFFFD"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `;
}
var I18N_19;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7490709384902699339$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__20 = goog.getMsg(" The mixin accepts only a single argument \u2013 size of the slider ( {$startTagCode}m{$closeTagCode} or {$startTagCode}s{$closeTagCode} ). ", { "startTagCode": "[\uFFFD#26\uFFFD|\uFFFD#27\uFFFD]", "closeTagCode": "[\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD]" });
    I18N_19 = MSG_EXTERNAL_7490709384902699339$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__20;
}
else {
    I18N_19 = $localize `:␟b43e37a55c51eed01f3c7b31c7fb8c20e9ea09ce␟7490709384902699339: The mixin accepts only a single argument – size of the slider ( ${"[\uFFFD#26\uFFFD|\uFFFD#27\uFFFD]"}:START_TAG_CODE:m${"[\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD]"}:CLOSE_TAG_CODE: or ${"[\uFFFD#26\uFFFD|\uFFFD#27\uFFFD]"}:START_TAG_CODE:s${"[\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD]"}:CLOSE_TAG_CODE: ). `;
}
I18N_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_19);
var I18N_21;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8285530445387044058$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__22 = goog.getMsg("KeySteps");
    I18N_21 = MSG_EXTERNAL_8285530445387044058$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__22;
}
else {
    I18N_21 = $localize `:␟1c2f048f4281e4ee3db216fc44e19c2c36fb4478␟8285530445387044058:KeySteps`;
}
const _c23 = ["heading", I18N_21];
function ExampleTuiRangeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-notification", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](6, I18N_4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](9, I18N_6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tui-doc-example", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](13, _c10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tui-range-example-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tui-doc-example", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](16, _c13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "tui-range-example-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tui-doc-example", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](19, _c16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tui-notification", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](22, I18N_17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](25, I18N_19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "tui-range-example-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tui-doc-example", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](30, _c23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "tui-range-example-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("content", ctx_r0.example4);
} }
function ExampleTuiRangeComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tui-range", 19);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.control)("min", ctx_r3.min)("max", ctx_r3.max)("steps", ctx_r3.steps)("segments", ctx_r3.segments)("pluralize", ctx_r3.pluralize)("keySteps", ctx_r3.keySteps)("size", ctx_r3.size)("quantum", ctx_r3.quantum);
} }
var I18N_24;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___25 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", { "startTagCode": "\uFFFD#1\uFFFD", "closeTagCode": "\uFFFD/#1\uFFFD" });
    I18N_24 = MSG_EXTERNAL_616675194705061558$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___25;
}
else {
    I18N_24 = $localize `:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
}
function ExampleTuiRangeComponent_ng_template_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
var I18N_26;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5313959728516521310$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___27 = goog.getMsg(" Min value ");
    I18N_26 = MSG_EXTERNAL_5313959728516521310$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___27;
}
else {
    I18N_26 = $localize `:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `;
}
function ExampleTuiRangeComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_26);
} }
var I18N_28;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7525448588827957289$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___29 = goog.getMsg(" Max value ");
    I18N_28 = MSG_EXTERNAL_7525448588827957289$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___29;
}
else {
    I18N_28 = $localize `:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `;
}
function ExampleTuiRangeComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_28);
} }
var I18N_30;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_2083976673220646394$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___31 = goog.getMsg(" Number of actual discrete slider steps ");
    I18N_30 = MSG_EXTERNAL_2083976673220646394$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___31;
}
else {
    I18N_30 = $localize `:␟8dfc46111873255f9a00be9bbc894f8b5f38f108␟2083976673220646394: Number of actual discrete slider steps `;
}
function ExampleTuiRangeComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_30);
} }
var I18N_32;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6434524407760308527$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___33 = goog.getMsg(" Quantum ");
    I18N_32 = MSG_EXTERNAL_6434524407760308527$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___33;
}
else {
    I18N_32 = $localize `:␟23f30119daeff6564906dba6e420104007f78835␟6434524407760308527: Quantum `;
}
function ExampleTuiRangeComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_32);
} }
var I18N_34;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4941460931129258402$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___35 = goog.getMsg(" A number of visual segments ");
    I18N_34 = MSG_EXTERNAL_4941460931129258402$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___35;
}
else {
    I18N_34 = $localize `:␟7d601e1c1a940ef8835249f19cb47d2311d8fd1e␟4941460931129258402: A number of visual segments `;
}
function ExampleTuiRangeComponent_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_34);
} }
var I18N_36;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5861269790634284762$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___37 = goog.getMsg(" Anchor points of non-uniform format between value and position ");
    I18N_36 = MSG_EXTERNAL_5861269790634284762$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___37;
}
else {
    I18N_36 = $localize `:␟2883d0ab4e0e0af2984d0424198392cd5a3d234d␟5861269790634284762: Anchor points of non-uniform format between value and position `;
}
function ExampleTuiRangeComponent_ng_template_2_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_36);
} }
var I18N_38;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___39 = goog.getMsg(" Size ");
    I18N_38 = MSG_EXTERNAL_5919257397270847364$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___39;
}
else {
    I18N_38 = $localize `:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
}
function ExampleTuiRangeComponent_ng_template_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](0, I18N_38);
} }
var I18N_40;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_3604160805509190513$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___41 = goog.getMsg(" Plural forms for labels. TuiPluralize array is deprecated. Use object that mimics the {$startLink} ICU format {$closeLink} for i18nPlural {$startParagraph}{$startTagStrong} See examples how create labels for ticks without this property (outside of the component). {$closeTagStrong}{$closeParagraph}", { "startLink": "\uFFFD#1\uFFFD", "closeLink": "\uFFFD/#1\uFFFD", "startParagraph": "\uFFFD#2\uFFFD", "startTagStrong": "\uFFFD#3\uFFFD", "closeTagStrong": "\uFFFD/#3\uFFFD", "closeParagraph": "\uFFFD/#2\uFFFD" });
    I18N_40 = MSG_EXTERNAL_3604160805509190513$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___41;
}
else {
    I18N_40 = $localize `:␟63d35ea4b9b1256bf46c9b74912fa614224022bc␟3604160805509190513: Plural forms for labels. TuiPluralize array is deprecated. Use object that mimics the ${"\uFFFD#1\uFFFD"}:START_LINK: ICU format ${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: for i18nPlural ${"\uFFFD#2\uFFFD"}:START_PARAGRAPH:${"\uFFFD#3\uFFFD"}:START_TAG_STRONG: See examples how create labels for ticks without this property (outside of the component). ${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#2\uFFFD"}:CLOSE_PARAGRAPH:`;
}
function ExampleTuiRangeComponent_ng_template_2_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](0, I18N_40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
} }
function ExampleTuiRangeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-demo", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiRangeComponent_ng_template_2_ng_template_1_Template, 1, 9, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tui-doc-documentation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiRangeComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.disabled = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExampleTuiRangeComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.min = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExampleTuiRangeComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.max = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExampleTuiRangeComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.steps = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExampleTuiRangeComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.quantum = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExampleTuiRangeComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.segments = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExampleTuiRangeComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.keySteps = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExampleTuiRangeComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.size = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExampleTuiRangeComponent_ng_template_2_ng_template_11_Template, 4, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("documentationPropertyValueChange", function ExampleTuiRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.pluralize = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.control);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.min);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.stepsVariants)("documentationPropertyValue", ctx_r1.steps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.quantumVariants)("documentationPropertyValue", ctx_r1.quantum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValue", ctx_r1.segments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.keyStepsVariants)("documentationPropertyValue", ctx_r1.keySteps);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("documentationPropertyDeprecated", true)("documentationPropertyValues", ctx_r1.pluralizeVariants)("documentationPropertyValue", ctx_r1.pluralize);
} }
var I18N_42;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__43 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", { "startTagCode": "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]", "closeTagCode": "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]" });
    I18N_42 = MSG_EXTERNAL_6039324497180220606$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__43;
}
else {
    I18N_42 = $localize `:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
}
I18N_42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nPostprocess"](I18N_42);
var I18N_44;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__45 = goog.getMsg("Add to the template:");
    I18N_44 = MSG_EXTERNAL_8042412267862615798$$SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__45;
}
else {
    I18N_44 = $localize `:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
}
function ExampleTuiRangeComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Import an Angular module for forms and ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "TuiRangeModule");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " in the same module where you want to use our component: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "tui-doc-code", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](9, I18N_42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "tui-doc-code", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](15, I18N_44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "tui-doc-code", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleModule);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx_r2.exampleHtml);
} }
class ExampleTuiRangeComponent {
    constructor() {
        this.exampleModule = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-import-module-md */ "!!raw-loader!-examples-import-import-module-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/import-module.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/import/import-module.md"));
        this.exampleHtml = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-insert-template-md */ "!!raw-loader!-examples-import-insert-template-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/insert-template.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/import/insert-template.md"));
        this.exampleForm = __webpack_require__.e(/*! import() | !raw-loader!-examples-import-declare-form-md */ "!!raw-loader!-examples-import-declare-form-md").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/import/declare-form.md */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/import/declare-form.md"));
        this.example1 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index-html */ "!!raw-loader!-examples-1-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/1/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-1-index */ "!!raw-loader!-examples-1-index").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/1/index */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/1/index.ts")),
        };
        this.example2 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-html */ "!!raw-loader!-examples-2-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/2/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index */ "!!raw-loader!-examples-2-index").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/2/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-2-index-less */ "!!raw-loader!-examples-2-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/2/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/2/index.less")),
        };
        this.example3 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-html */ "!!raw-loader!-examples-3-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/3/index.html")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index-less */ "!!raw-loader!-examples-3-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/3/index.less")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-3-index */ "!!raw-loader!-examples-3-index").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/3/index */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/3/index.ts")),
        };
        this.example4 = {
            HTML: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-html */ "!!raw-loader!-examples-4-index-html").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/4/index.html")),
            TypeScript: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index */ "!!raw-loader!-examples-4-index").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/4/index.ts")),
            LESS: __webpack_require__.e(/*! import() | !raw-loader!-examples-4-index-less */ "!!raw-loader!-examples-4-index-less").then(__webpack_require__.bind(null, /*! !raw-loader!./examples/4/index.less */ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/range/examples/4/index.less")),
        };
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([0, 0]);
        this.sizeVariants = [`s`, `m`];
        this.size = this.sizeVariants[1];
        this.min = 0;
        this.max = 100;
        this.segments = 0;
        this.stepsVariants = [0, 4, 10];
        this.steps = this.stepsVariants[0];
        this.pluralizeVariants = [
            [`year`, `years`, `years`],
            { one: `thing`, few: `things`, many: `things`, other: `things` },
            {
                one: `year`,
                other: `years`,
            },
        ];
        this.pluralize = null;
        this.keyStepsVariants = [[[50, 1000]]];
        this.keySteps = null;
        this.quantumVariants = [0.01, 0.1, 1, 10];
        this.quantum = this.quantumVariants[0];
    }
    get disabled() {
        return this.control.disabled;
    }
    set disabled(value) {
        if (value) {
            this.control.disable();
            return;
        }
        this.control.enable();
    }
}
ExampleTuiRangeComponent.ɵfac = function ExampleTuiRangeComponent_Factory(t) { return new (t || ExampleTuiRangeComponent)(); };
ExampleTuiRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExampleTuiRangeComponent, selectors: [["example-range"]], decls: 4, vars: 0, consts: [["header", "Range", "package", "KIT", "type", "components"], ["pageTab", ""], ["status", "warning"], [1, "tui-space_top-0"], ["id", "base", 3, "content", 6, "heading"], ["id", "sizes", 3, "content", 6, "heading"], ["id", "segments", 3, "content", 6, "heading"], [1, "tui-space_bottom-8"], ["id", "key-steps", 3, "content", 6, "heading"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "steps", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "quantum", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "segments", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "keySteps", "documentationPropertyMode", "input", "documentationPropertyType", "TuiKeySteps", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pluralize", "documentationPropertyMode", "input", "documentationPropertyType", "TuiPluralize | Record<string, string>", 3, "documentationPropertyDeprecated", "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formControl", "min", "max", "steps", "segments", "pluralize", "keySteps", "size", "quantum"], ["tuiLink", "", "href", "https://unicode-org.github.io/icu/userguide/format_parse/messages/"], [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], ["filename", "myComponent.component.ts", 3, "code"], ["filename", "myComponent.template.html", 3, "code"]], template: function ExampleTuiRangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tui-doc-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExampleTuiRangeComponent_ng_template_1_Template, 32, 4, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExampleTuiRangeComponent_ng_template_2_Template, 12, 16, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExampleTuiRangeComponent_ng_template_3_Template, 17, 3, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_addon_doc_src_components_page_page_component__WEBPACK_IMPORTED_MODULE_3__["TuiDocPageComponent"], _addon_doc_src_components_page_page_tab_directive__WEBPACK_IMPORTED_MODULE_4__["TuiDocPageTabConnectorDirective"], _core_components_notification_notification_component__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationComponent"], _addon_doc_src_components_example_example_component__WEBPACK_IMPORTED_MODULE_6__["TuiDocExampleComponent"], _examples_1_index__WEBPACK_IMPORTED_MODULE_7__["TuiRangeExample1"], _examples_2_index__WEBPACK_IMPORTED_MODULE_8__["TuiRangeExample2"], _examples_3_index__WEBPACK_IMPORTED_MODULE_9__["TuiRangeExample3"], _examples_4_index__WEBPACK_IMPORTED_MODULE_10__["TuiRangeExample4"], _addon_doc_src_components_demo_demo_component__WEBPACK_IMPORTED_MODULE_11__["TuiDocDemoComponent"], _addon_doc_src_components_documentation_documentation_component__WEBPACK_IMPORTED_MODULE_12__["TuiDocDocumentationComponent"], _addon_doc_src_components_documentation_documentation_property_connector_directive__WEBPACK_IMPORTED_MODULE_13__["TuiDocDocumentationPropertyConnectorDirective"], _kit_components_range_range_component__WEBPACK_IMPORTED_MODULE_14__["TuiRangeComponent"], _kit_components_range_range_change_directive__WEBPACK_IMPORTED_MODULE_15__["TuiRangeChangeDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _core_components_link_link_component__WEBPACK_IMPORTED_MODULE_16__["TuiLinkComponent"], _addon_doc_src_components_code_code_component__WEBPACK_IMPORTED_MODULE_17__["TuiDocCodeComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExampleTuiRangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: `example-range`,
                templateUrl: `./range.template.html`,
                changeDetection: _demo_emulate_change_detection__WEBPACK_IMPORTED_MODULE_2__["changeDetection"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/modules/components/range/range.module.ts":
/*!******************************************************!*\
  !*** ./src/modules/components/range/range.module.ts ***!
  \******************************************************/
/*! exports provided: ExampleTuiRangeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleTuiRangeModule", function() { return ExampleTuiRangeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @taiga-ui/addon-doc */ "../addon-doc/src/public-api.ts");
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @taiga-ui/core */ "../core/index.ts");
/* harmony import */ var _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @taiga-ui/kit */ "../kit/index.ts");
/* harmony import */ var _examples_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/1 */ "./src/modules/components/range/examples/1/index.ts");
/* harmony import */ var _examples_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/2 */ "./src/modules/components/range/examples/2/index.ts");
/* harmony import */ var _examples_3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./examples/3 */ "./src/modules/components/range/examples/3/index.ts");
/* harmony import */ var _examples_4__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./examples/4 */ "./src/modules/components/range/examples/4/index.ts");
/* harmony import */ var _range_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./range.component */ "./src/modules/components/range/range.component.ts");














class ExampleTuiRangeModule {
}
ExampleTuiRangeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExampleTuiRangeModule });
ExampleTuiRangeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExampleTuiRangeModule_Factory(t) { return new (t || ExampleTuiRangeModule)(); }, imports: [[
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRangeModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
            _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
            _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiIslandModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
            _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_range_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiRangeComponent"])),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExampleTuiRangeModule, { declarations: [_range_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiRangeComponent"],
        _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiRangeExample1"],
        _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiRangeExample2"],
        _examples_3__WEBPACK_IMPORTED_MODULE_9__["TuiRangeExample3"],
        _examples_4__WEBPACK_IMPORTED_MODULE_10__["TuiRangeExample4"]], imports: [_taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRangeModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
        _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
        _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiIslandModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
        _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_range_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiRangeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExampleTuiRangeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRadioListModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiRangeModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiLinkModule"],
                    _taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["TuiAddonDocModule"],
                    _taiga_ui_kit__WEBPACK_IMPORTED_MODULE_6__["TuiIslandModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiNotificationModule"],
                    _taiga_ui_core__WEBPACK_IMPORTED_MODULE_5__["TuiSvgModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(Object(_taiga_ui_addon_doc__WEBPACK_IMPORTED_MODULE_4__["generateRoutes"])(_range_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiRangeComponent"])),
                ],
                declarations: [
                    _range_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiRangeComponent"],
                    _examples_1__WEBPACK_IMPORTED_MODULE_7__["TuiRangeExample1"],
                    _examples_2__WEBPACK_IMPORTED_MODULE_8__["TuiRangeExample2"],
                    _examples_3__WEBPACK_IMPORTED_MODULE_9__["TuiRangeExample3"],
                    _examples_4__WEBPACK_IMPORTED_MODULE_10__["TuiRangeExample4"],
                ],
                exports: [_range_component__WEBPACK_IMPORTED_MODULE_11__["ExampleTuiRangeComponent"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=components-range-range-module.js.map