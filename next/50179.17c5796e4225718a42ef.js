"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[50179],{

/***/ 48001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ TuiArcChartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74788);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91211);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40287);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82298);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(66682);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96736);
/* harmony import */ var _cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36097);









const _c0 = ["arc"];

function TuiArcChartComponent__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnamespaceSVG"] */ .O4$();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "svg", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(1, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(2, "path", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const index_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵstyleProp"] */ .Udp("top", ctx_r0.getInset(index_r1), "em")("left", ctx_r0.getInset(index_r1), "em")("width", ctx_r0.getDiameter(index_r1), "em")("height", ctx_r0.getDiameter(index_r1), "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵstyleProp"] */ .Udp("stroke", ctx_r0.getColor(index_r1))("stroke-dasharray", ctx_r0.getLength(index_r1), "em")("stroke-dashoffset", ctx_r0.initialized ? ctx_r0.getOffset(index_r1) : ctx_r0.getLength(index_r1), "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵclassProp"] */ .ekj("t-value_inactive", ctx_r0.isInactive(index_r1));
  }
}

const _c1 = ["*"]; // 3/4 with 1% safety offset

const ARC = 0.76;
const SIZE = {
  m: 9,
  l: 11,
  xl: 16
};
const WIDTH = {
  m: 0.25,
  l: 0.375,
  xl: 0.5625
};
const GAP = {
  m: 0.125,
  l: 0.1875,
  xl: 0.25
};
class TuiArcChartComponent {
  constructor(sanitizer, changeDetectorRef) {
    this.sanitizer = sanitizer;
    this.arcs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .ReplaySubject */ .t(1);
    this.value = [];
    this.size = `m`;
    this.max = 100;
    this.minLabel = `0%`;
    this.maxLabel = `100%`;
    this.activeItemIndex = NaN;
    this.activeItemIndexChange = this.arcs$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .switchMap */ .w)(arcs => arcs.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .startWith */ .O)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .switchMap */ .w)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .merge */ .T)(...arcsToIndex(arcs))))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .tap */ .b)(index => {
      this.activeItemIndex = index;
    }));
    this.initialized = false; // So initial animation works

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

TuiArcChartComponent.ɵfac = function TuiArcChartComponent_Factory(t) {
  return new (t || TuiArcChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__/* .DomSanitizer */ .H7), _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_2__/* .ChangeDetectorRef */ .sBO));
};

TuiArcChartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiArcChartComponent,
  selectors: [["tui-arc-chart"]],
  viewQuery: function TuiArcChartComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵviewQuery"] */ .Gf(_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.arcs = _t);
    }
  },
  hostVars: 7,
  hostBindings: function TuiArcChartComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵattribute"] */ .uIk("data-size", ctx.size);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵstyleProp"] */ .Udp("width", ctx.width, "rem")("height", ctx.width, "rem")("stroke-width", ctx.strokeWidth, "rem");
    }
  },
  inputs: {
    value: "value",
    size: "size",
    max: "max",
    minLabel: "minLabel",
    maxLabel: "maxLabel",
    activeItemIndex: "activeItemIndex"
  },
  outputs: {
    activeItemIndexChange: "activeItemIndexChange"
  },
  ngContentSelectors: _c1,
  decls: 9,
  vars: 3,
  consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "-100 -100 200 200", "focusable", "false", "class", "t-svg", 3, "top", "left", "width", "height", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], [1, "t-content"], [1, "t-wrapper"], [1, "t-percent"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "-100 -100 200 200", "focusable", "false", 1, "t-svg"], ["vector-effect", "non-scaling-stroke", "d", "M -70 70 A 100 100 0 1 1 70 70"], ["vector-effect", "non-scaling-stroke", "d", "M -70 70 A 100 100 0 1 1 70 70", 1, "t-value"], ["arc", ""]],
  template: function TuiArcChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵprojectionDef"] */ .F$t();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(0, TuiArcChartComponent__svg_svg_0_Template, 4, 16, "svg", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵprojection"] */ .Hsn(3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(5, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(7, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("tuiRepeatTimesOf", ctx.value.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx.minLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx.maxLabel);
    }
  },
  directives: [_cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_1__/* .TuiRepeatTimesDirective */ .X],
  styles: ["[_nghost-%COMP%]{position:relative;display:block;flex-shrink:0}.t-svg[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;overflow:visible;fill:none;stroke:currentColor;stroke-linecap:round;color:var(--tui-secondary);font-size:1rem;pointer-events:none}.t-value[_ngcontent-%COMP%]{pointer-events:auto;transition:stroke-dashoffset var(--tui-duration) ease-in-out,opacity var(--tui-duration) ease-in-out .1s}.t-value_inactive[_ngcontent-%COMP%]{transition-property:stroke-dashoffset,opacity;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:.16}.t-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center;color:var(--tui-text-02);font:var(--tui-font-text-xs);pointer-events:none}[data-size=xl][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-m)}.t-wrapper[_ngcontent-%COMP%]{pointer-events:auto}.t-wrapper[_ngcontent-%COMP%]:first-line{color:var(--tui-text-01)}[data-size=m][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-text-s);font-weight:bold}[data-size=l][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-text-m);font-weight:bold}[data-size=xl][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-heading-5)}.t-percent[_ngcontent-%COMP%]{position:absolute;left:25%;bottom:11%;display:flex;width:50%;justify-content:space-between;font:var(--tui-font-text-xs);color:var(--tui-text-02)}[data-size=xl][_nghost-%COMP%]   .t-percent[_ngcontent-%COMP%]{font:var(--tui-font-text-m)}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiArcChartComponent.prototype, "value", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiArcChartComponent.prototype, "size", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiArcChartComponent.prototype, "max", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiArcChartComponent.prototype, "minLabel", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiArcChartComponent.prototype, "maxLabel", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiArcChartComponent.prototype, "activeItemIndex", void 0);

function arcsToIndex(arcs) {
  return arcs.map(({
    nativeElement
  }, index) => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__/* .merge */ .T)((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiTypedFromEvent */ .mLY)(nativeElement, `mouseenter`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .mapTo */ .h)(index)), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiTypedFromEvent */ .mLY)(nativeElement, `mouseleave`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__/* .mapTo */ .h)(NaN))));
}

/***/ }),

/***/ 70390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ TuiAxesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64762);
/* harmony import */ var _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42662);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40287);
/* harmony import */ var _taiga_ui_core_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47730);
/* harmony import */ var _taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12057);
/* harmony import */ var _cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36097);










function TuiAxesComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r7.axisYName, " ");
  }
}

function TuiAxesComponent_div_0_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const label_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r9.fallback(label_r10), " ");
  }
}

function TuiAxesComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, TuiAxesComponent_div_0_div_2_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r8.axisYLabels);
  }
}

function TuiAxesComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, TuiAxesComponent_div_0_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(2, TuiAxesComponent_div_0_div_2_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵclassProp"] */ .ekj("t-side_padding", ctx_r0.hasXLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.axisYName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r0.axisYInset);
  }
}

function TuiAxesComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(0, "div", 18);
  }

  if (rf & 2) {
    const index_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵstyleProp"] */ .Udp("border-right-style", ctx_r1.verticalLinesHandler(index_r11, ctx_r1.verticalLines));
  }
}

function TuiAxesComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelement"] */ ._UZ(0, "div", 19);
  }

  if (rf & 2) {
    const index_r12 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵstyleProp"] */ .Udp("border-top-style", ctx_r2.horizontalLinesHandler(index_r12, ctx_r2.horizontalLines));
  }
}

function TuiAxesComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const label_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r13.fallback(label_r14), " ");
  }
}

function TuiAxesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, TuiAxesComponent_div_7_div_1_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r3.axisYLabels);
  }
}

function TuiAxesComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const label_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r15.fallback(label_r16), " ");
  }
}

function TuiAxesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, TuiAxesComponent_div_8_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r4.axisYSecondaryLabels);
  }
}

function TuiAxesComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const label_r18 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵclassProp"] */ .ekj("t-label-x_transparent", label_r18 === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r17.fallback(label_r18), " ");
  }
}

function TuiAxesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, TuiAxesComponent_div_11_div_1_Template, 2, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r5.axisXLabels);
  }
}

function TuiAxesComponent_div_12_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const label_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r21.fallback(label_r22), " ");
  }
}

function TuiAxesComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, TuiAxesComponent_div_12_div_1_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r19.axisYSecondaryLabels);
  }
}

function TuiAxesComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r20.axisYSecondaryName, " ");
  }
}

function TuiAxesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(1, TuiAxesComponent_div_12_div_1_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(2, TuiAxesComponent_div_12_div_2_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵclassProp"] */ .ekj("t-side_padding", ctx_r6.hasXLabels);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", !ctx_r6.axisYSecondaryInset);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r6.axisYSecondaryName);
  }
}

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
    this.horizontalLinesHandler = _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_5__/* .TUI_ALWAYS_SOLID */ .Fy;
    this.verticalLines = 0;
    this.verticalLinesHandler = _taiga_ui_addon_charts_constants__WEBPACK_IMPORTED_MODULE_5__/* .TUI_ALWAYS_DASHED */ .oG;
  }

  get centeredXLabels() {
    return this.axisY === `none`;
  }

  get hasXLabels() {
    return !!this.axisXLabels.length;
  }

  get hasYLabels() {
    return !!this.axisYLabels.length && !this.axisYInset || !!this.axisYName;
  }

  get hasYSecondaryLabels() {
    return !!this.axisYSecondaryLabels.length && !this.axisYSecondaryInset || !!this.axisYSecondaryName;
  }

  fallback(label) {
    return label || _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .CHAR_NO_BREAK_SPACE */ .f$6;
  }

}

TuiAxesComponent.ɵfac = function TuiAxesComponent_Factory(t) {
  return new (t || TuiAxesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__/* .TUI_MODE */ .Au));
};

TuiAxesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiAxesComponent,
  selectors: [["tui-axes"]],
  hostVars: 2,
  hostBindings: function TuiAxesComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵlistener"] */ .NdJ("$.data-mode.attr", function TuiAxesComponent___data_mode_attr_HostBindingHandler() {
        return ctx.mode$;
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵclassProp"] */ .ekj("_centered", ctx.centeredXLabels);
    }
  },
  inputs: {
    axisX: "axisX",
    axisXLabels: "axisXLabels",
    axisY: "axisY",
    axisYInset: "axisYInset",
    axisYLabels: "axisYLabels",
    axisYName: "axisYName",
    axisYSecondaryInset: "axisYSecondaryInset",
    axisYSecondaryLabels: "axisYSecondaryLabels",
    axisYSecondaryName: "axisYSecondaryName",
    horizontalLines: "horizontalLines",
    horizontalLinesHandler: "horizontalLinesHandler",
    verticalLines: "verticalLines",
    verticalLinesHandler: "verticalLinesHandler"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵProvidersFeature"] */ ._Bn([_taiga_ui_core_providers__WEBPACK_IMPORTED_MODULE_1__/* .MODE_PROVIDER */ .CV])],
  ngContentSelectors: _c0,
  decls: 13,
  vars: 11,
  consts: [["class", "t-side", 3, "t-side_padding", 4, "ngIf"], [1, "t-wrapper"], [1, "t-grid"], [1, "t-vertical"], ["automation-id", "tui-axex__vertical-line", "class", "t-line t-line_vertical", 3, "borderRightStyle", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], [1, "t-horizontal"], ["automation-id", "tui-axex__horizontal-line", "class", "t-line", 3, "borderTopStyle", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["class", "t-labels-y t-labels-y_inset", 4, "ngIf"], ["class", "t-labels-y t-labels-y_inset t-labels-y_inset_secondary", 4, "ngIf"], [1, "t-content"], ["class", "t-labels-x", 4, "ngIf"], [1, "t-side"], ["automation-id", "tui-axex__axis-y-name", "class", "t-name t-name_primary", 4, "ngIf"], ["class", "t-labels-y t-labels-y_primary", 4, "ngIf"], ["automation-id", "tui-axex__axis-y-name", 1, "t-name", "t-name_primary"], [1, "t-labels-y", "t-labels-y_primary"], ["automation-id", "tui-axex__axis-y-label", "class", "t-label-y", 4, "ngFor", "ngForOf"], ["automation-id", "tui-axex__axis-y-label", 1, "t-label-y"], ["automation-id", "tui-axex__vertical-line", 1, "t-line", "t-line_vertical"], ["automation-id", "tui-axex__horizontal-line", 1, "t-line"], [1, "t-labels-y", "t-labels-y_inset"], [1, "t-labels-y", "t-labels-y_inset", "t-labels-y_inset_secondary"], ["automation-id", "tui-axex__axis-y-secondary-label", "class", "t-label-y", 4, "ngFor", "ngForOf"], ["automation-id", "tui-axex__axis-y-secondary-label", 1, "t-label-y"], [1, "t-labels-x"], ["automation-id", "tui-axex__axis-x-label", "class", "t-label-x", 3, "t-label-x_transparent", 4, "ngFor", "ngForOf"], ["automation-id", "tui-axex__axis-x-label", 1, "t-label-x"], ["class", "t-labels-y t-labels-y_secondary", 4, "ngIf"], ["automation-id", "tui-axex__axis-y-secondary-name", "class", "t-name", 4, "ngIf"], [1, "t-labels-y", "t-labels-y_secondary"], ["automation-id", "tui-axex__axis-y-secondary-name", 1, "t-name"]],
  template: function TuiAxesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵprojectionDef"] */ .F$t();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(0, TuiAxesComponent_div_0_Template, 3, 4, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(4, TuiAxesComponent_div_4_Template, 1, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(6, TuiAxesComponent_div_6_Template, 1, 2, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(7, TuiAxesComponent_div_7_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(8, TuiAxesComponent_div_8_Template, 2, 1, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementStart"] */ .TgZ(9, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵprojection"] */ .Hsn(10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(11, TuiAxesComponent_div_11_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵtemplate"] */ .YNc(12, TuiAxesComponent_div_12_Template, 3, 4, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.hasYLabels);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵstyleProp"] */ .Udp("border-left-style", ctx.axisY)("border-bottom-style", ctx.axisX);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("tuiRepeatTimesOf", ctx.verticalLines);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("tuiRepeatTimesOf", ctx.horizontalLines);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.axisYInset);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.axisYSecondaryInset);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.hasXLabels);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵadvance"] */ .xp6(1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.hasYSecondaryLabels);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgIf */ .O5, _cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_3__/* .TuiRepeatTimesDirective */ .X, _angular_common__WEBPACK_IMPORTED_MODULE_6__/* .NgForOf */ .sg],
  styles: ["[_nghost-%COMP%]{display:flex}.t-wrapper[_ngcontent-%COMP%]{display:flex;flex:1;height:100%;flex-direction:column}.t-grid[_ngcontent-%COMP%]{position:relative;z-index:0;display:flex;flex:1;justify-content:space-around;align-items:flex-end;border-width:1px;border-color:var(--tui-base-03)}[data-mode=onDark][_nghost-%COMP%]   .t-grid[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.48)}[data-mode=onLight][_nghost-%COMP%]   .t-grid[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.48)}.t-horizontal[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column}.t-vertical[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex}._centered[_nghost-%COMP%]   .t-vertical[_ngcontent-%COMP%]:after{content:\"\";display:block;flex:1 0 1px}.t-line[_ngcontent-%COMP%]{flex:2 0 1px;box-sizing:border-box;border-width:1px;border-color:var(--tui-base-03)}[data-mode=onDark][_nghost-%COMP%]   .t-line[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.48)}[data-mode=onLight][_nghost-%COMP%]   .t-line[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.48)}._centered[_nghost-%COMP%]   .t-line_vertical[_ngcontent-%COMP%]:first-child{flex:1 0 1px;pointer-events:none}.t-side[_ngcontent-%COMP%]{display:flex;align-items:stretch}.t-side_padding[_ngcontent-%COMP%]{padding-bottom:2rem}.t-name[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);-webkit-writing-mode:tb;writing-mode:tb;text-align:center;padding-left:.75rem;color:var(--tui-text-02)}.t-name_primary[_ngcontent-%COMP%]{transform:rotate(180deg)}[data-mode=onDark][_nghost-%COMP%]   .t-name[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}.t-labels-y[_ngcontent-%COMP%]{display:flex;font:var(--tui-font-text-xs);flex-direction:column-reverse;justify-content:space-between;color:var(--tui-text-02)}[data-mode=onDark][_nghost-%COMP%]   .t-labels-y[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}.t-labels-y_primary[_ngcontent-%COMP%]{text-align:right;padding-right:.75rem}.t-labels-y_secondary[_ngcontent-%COMP%]{padding-left:.75rem}.t-labels-y_transparent[_ngcontent-%COMP%]{border-color:transparent}.t-labels-y_inset[_ngcontent-%COMP%]{position:absolute;top:.5625rem;left:.25rem;bottom:-.75rem;pointer-events:none}.t-labels-y_inset_secondary[_ngcontent-%COMP%]{left:auto;right:.25rem;text-align:right}.t-labels-x[_ngcontent-%COMP%]{display:flex;font:var(--tui-font-text-xs);border-right:1px solid transparent;color:var(--tui-text-02)}.t-label-x[_ngcontent-%COMP%]{height:.4375rem;border-left:1px solid var(--tui-base-03);flex:1;margin-bottom:1.5625rem}[data-mode=onDark][_nghost-%COMP%]   .t-label-x[_ngcontent-%COMP%]{border-color:rgba(255,255,255,.48)}[data-mode=onLight][_nghost-%COMP%]   .t-label-x[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.48)}.t-label-x[_ngcontent-%COMP%]:before{content:\"\";display:block;height:.5625rem}.t-label-x_transparent[_ngcontent-%COMP%]{border-color:transparent}._centered[_nghost-%COMP%]   .t-label-x[_ngcontent-%COMP%]{height:2rem;text-align:center;border:none;margin:0}.t-label-y[_ngcontent-%COMP%]:first-child{margin-bottom:-.375rem}.t-label-y[_ngcontent-%COMP%]:last-child{margin-top:-.375rem}.t-content[_ngcontent-%COMP%]{position:absolute;top:0;left:-1px;right:0;bottom:-1px;display:flex;align-items:flex-end}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiAxesComponent.prototype, "axisX", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiAxesComponent.prototype, "axisXLabels", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiAxesComponent.prototype, "axisY", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiAxesComponent.prototype, "axisYInset", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiAxesComponent.prototype, "axisYLabels", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiAxesComponent.prototype, "axisYName", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiAxesComponent.prototype, "axisYSecondaryInset", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiAxesComponent.prototype, "axisYSecondaryLabels", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiAxesComponent.prototype, "axisYSecondaryName", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiAxesComponent.prototype, "horizontalLines", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiAxesComponent.prototype, "horizontalLinesHandler", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiAxesComponent.prototype, "verticalLines", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiAxesComponent.prototype, "verticalLinesHandler", void 0);

/***/ }),

/***/ 88549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ TuiBarChartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64762);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40287);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12057);
/* harmony import */ var _core_directives_hint_hint_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67446);
/* harmony import */ var _core_directives_hint_hint_driver_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29070);
/* harmony import */ var _core_directives_hint_hint_hover_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54255);
/* harmony import */ var _core_directives_hint_hint_position_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15491);
/* harmony import */ var _core_directives_hint_hint_host_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86683);
/* harmony import */ var _core_directives_hint_hint_describe_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(219);
/* harmony import */ var _bar_set_bar_set_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(54147);
/* harmony import */ var _cdk_directives_focusable_focusable_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48893);
/* harmony import */ var _cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35271);

















const _c0 = function (a0) {
  return {
    $implicit: a0
  };
};

function TuiBarChartComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵlistener"] */ .NdJ("mouseenter.once", function TuiBarChartComponent_div_0_Template_div_mouseenter_once_0_listener() {
      return 0;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementStart"] */ .TgZ(2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipe"] */ .ALo(3, "tuiMapper");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(4, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelement"] */ ._UZ(6, "tui-bar-set", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const set_r1 = ctx.$implicit;
    const index_r2 = ctx.index;

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵreference"] */ .MAs(5);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵclassProp"] */ .ekj("t-wrapper_hoverable", !!ctx_r0.hintContent)("t-wrapper_hovered", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind1"] */ .lcZ(1, 15, ctx_r0.drivers.get(index_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("tuiHintHost", _r3)("tuiHint", ctx_r0.hintContent)("tuiHintContext", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpureFunction1"] */ .VKq(22, _c0, index_r2))("tuiHintDescribe", ctx_r0.getHintId(index_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵstyleProp"] */ .Udp("height", _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵpipeBind4"] */ .gM2(3, 17, set_r1, ctx_r0.percentMapper, ctx_r0.collapsed, ctx_r0.computedMax), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵadvance"] */ .xp6(4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("id", ctx_r0.getHintId(index_r2))("tuiFocusable", !!ctx_r0.hintContent)("value", set_r1)("size", ctx_r0.size)("collapsed", ctx_r0.collapsed);
  }
}

function valueAssertion(value) {
  const valid = value.every(array => array.length === value[0].length);
  return valid;
}

const VALUE_ERROR = `All arrays must be of the same length`;
class TuiBarChartComponent {
  constructor(hintOptions, idService) {
    this.hintOptions = hintOptions;
    this.drivers = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_QUERY */ .Mmc;
    this.value = [];
    this.max = NaN;
    this.size = `m`;
    this.collapsed = false;

    this.percentMapper = (set, collapsed, max) => 100 * (collapsed ? (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiSum */ .smb)(...set) : Math.max(...set)) / max;

    this.autoIdString = idService.generate();
  }

  get hintContent() {
    var _a;

    return ((_a = this.hintOptions) === null || _a === void 0 ? void 0 : _a.content) || ``;
  }

  get transposed() {
    return this.transpose(this.value);
  }

  get computedMax() {
    return this.max || this.getMax(this.value, this.collapsed);
  }

  getHintId(index) {
    return `${this.autoIdString}_${index}`;
  }

  transpose(value) {
    return value.reduce((result, next) => next.map((_, index) => [...(result[index] || []), next[index]]), []);
  }

  getMax(values, collapsed) {
    return collapsed ? Math.max(...values.reduce((result, next) => result.map((value, index) => value + next[index]))) : values.reduce((max, value) => Math.max(...value, max), 0);
  }

}

TuiBarChartComponent.ɵfac = function TuiBarChartComponent_Factory(t) {
  return new (t || TuiBarChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .TuiHintOptionsDirective */ .bZA, 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .TuiIdService */ .llV));
};

TuiBarChartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiBarChartComponent,
  selectors: [["tui-bar-chart"]],
  viewQuery: function TuiBarChartComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵviewQuery"] */ .Gf(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .TuiDriver */ .kkl, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.drivers = _t);
    }
  },
  inputs: {
    value: "value",
    max: "max",
    size: "size",
    collapsed: "collapsed"
  },
  decls: 1,
  vars: 1,
  consts: [["tuiHintDirection", "top", "class", "t-wrapper", 3, "t-wrapper_hoverable", "t-wrapper_hovered", "tuiHintHost", "tuiHint", "tuiHintContext", "tuiHintDescribe", "mouseenter.once", 4, "ngFor", "ngForOf"], ["tuiHintDirection", "top", 1, "t-wrapper", 3, "tuiHintHost", "tuiHint", "tuiHintContext", "tuiHintDescribe", "mouseenter.once"], [1, "t-container"], [1, "t-host"], ["hintHost", ""], [1, "t-set", 3, "id", "tuiFocusable", "value", "size", "collapsed"]],
  template: function TuiBarChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵtemplate"] */ .YNc(0, TuiBarChartComponent_div_0_Template, 7, 24, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.transposed);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .NgForOf */ .sg, _core_directives_hint_hint_directive__WEBPACK_IMPORTED_MODULE_2__/* .TuiHintDirective */ .D, _core_directives_hint_hint_driver_directive__WEBPACK_IMPORTED_MODULE_3__/* .TuiHintDriverDirective */ .x, _core_directives_hint_hint_hover_directive__WEBPACK_IMPORTED_MODULE_4__/* .TuiHintHoverDirective */ .t, _core_directives_hint_hint_position_directive__WEBPACK_IMPORTED_MODULE_5__/* .TuiHintPositionDirective */ .D, _core_directives_hint_hint_host_directive__WEBPACK_IMPORTED_MODULE_6__/* .TuiHintHostDirective */ .X, _core_directives_hint_hint_describe_directive__WEBPACK_IMPORTED_MODULE_7__/* .TuiHintDescribeDirective */ .$, _bar_set_bar_set_component__WEBPACK_IMPORTED_MODULE_8__/* .TuiBarSetComponent */ .I, _cdk_directives_focusable_focusable_directive__WEBPACK_IMPORTED_MODULE_11__/* .TuiFocusableDirective */ .t],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__/* .AsyncPipe */ .Ov, _cdk_pipes_mapper_mapper_pipe__WEBPACK_IMPORTED_MODULE_12__/* .TuiMapperPipe */ .c],
  styles: ["[_nghost-%COMP%]{display:flex;flex:1;height:100%}.t-wrapper[_ngcontent-%COMP%]{transition-property:background-color;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:flex;flex:1;align-items:flex-end;justify-content:center;height:100%}.t-wrapper_hoverable[_ngcontent-%COMP%]{cursor:pointer}.t-wrapper_hoverable[_ngcontent-%COMP%]:hover, .t-wrapper_hoverable.t-wrapper_hovered[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.05)}.t-container[_ngcontent-%COMP%]{flex:1}.t-host[_ngcontent-%COMP%]{position:absolute;left:50%;right:50%}.t-set[_ngcontent-%COMP%]{border-radius:var(--tui-radius-m);pointer-events:none;outline:none}.t-set[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 2px var(--tui-focus)}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)(valueAssertion, VALUE_ERROR)], TuiBarChartComponent.prototype, "value", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiBarChartComponent.prototype, "max", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiBarChartComponent.prototype, "size", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiBarChartComponent.prototype, "collapsed", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiPure */ .UMq], TuiBarChartComponent.prototype, "transpose", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_13__/* .__decorate */ .gn)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiPure */ .UMq], TuiBarChartComponent.prototype, "getMax", null);

/***/ }),

/***/ 54147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ TuiBarSetComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64762);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12057);
/* harmony import */ var _bar_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25588);






const _c0 = function (a0, a1) {
  return {
    $implicit: a0,
    index: a1,
    flexible: false
  };
};

function TuiBarSetComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .GkF(0, 4);
  }

  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(4);

    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction2"] */ .WLB(2, _c0, item_r6, index_r7));
  }
}

function TuiBarSetComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, TuiBarSetComponent_ng_container_0_ng_container_1_Template, 1, 5, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r0.computedValue);
  }
}

const _c1 = function (a0, a1) {
  return {
    $implicit: a0,
    index: a1,
    flexible: true
  };
};

function TuiBarSetComponent_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementContainer"] */ .GkF(1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const index_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw(2);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(4);

    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵpureFunction2"] */ .WLB(2, _c1, item_r9, index_r10));
  }
}

function TuiBarSetComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(0, TuiBarSetComponent_ng_template_1_div_0_Template, 2, 5, "div", 5);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r2.computedValue);
  }
}

function TuiBarSetComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(0, "tui-bar", 7);
  }

  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const index_r12 = ctx.index;
    const flexible_r13 = ctx.flexible;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵstyleProp"] */ .Udp("height", ctx_r4.getHeight(item_r11), "%")("background", ctx_r4.getColor(index_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵclassProp"] */ .ekj("t-bar_flexible", flexible_r13)("t-bar_negative", item_r11 < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("value", ctx_r4.computedSegments)("size", ctx_r4.computedSize);
  }
}

const PERCENT = 100;
const EMPTY_ARRAY = [];
const FILLER_ARRAY = [1];
class TuiBarSetComponent {
  constructor() {
    this.value = [];
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
    return Math.abs(PERCENT * value / this.getLargest(this.computedValue));
  }

  getColor(index) {
    return `var(--tui-chart-${index}`;
  }

  getLargest(value) {
    return value.reduce((a, b) => a > b ? a : b, 0);
  }

}

TuiBarSetComponent.ɵfac = function TuiBarSetComponent_Factory(t) {
  return new (t || TuiBarSetComponent)();
};

TuiBarSetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiBarSetComponent,
  selectors: [["tui-bar-set"]],
  inputs: {
    value: "value",
    size: "size",
    collapsed: "collapsed"
  },
  decls: 5,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["flexible", ""], ["bar", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngFor", "ngForOf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "t-wrapper", 4, "ngFor", "ngForOf"], [1, "t-wrapper"], ["automation-id", "tui-bar-set__bar", 1, "t-bar", 3, "value", "size"]],
  template: function TuiBarSetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(0, TuiBarSetComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(1, TuiBarSetComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplate"] */ .YNc(3, TuiBarSetComponent_ng_template_3_Template, 1, 10, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵreference"] */ .MAs(2);

      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx.size)("ngIfElse", _r1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgForOf */ .sg, _angular_common__WEBPACK_IMPORTED_MODULE_3__/* .NgTemplateOutlet */ .tP, _bar_bar_component__WEBPACK_IMPORTED_MODULE_1__/* .TuiBarComponent */ .o],
  styles: ["[_nghost-%COMP%]{display:flex;height:100%;align-items:flex-end;justify-content:center}.t-wrapper[_ngcontent-%COMP%]{display:flex;flex:1;height:100%;align-items:flex-end}.t-wrapper[_ngcontent-%COMP%]:first-child{margin-left:25%}.t-wrapper[_ngcontent-%COMP%]:last-child{margin-right:25%}.t-bar[_ngcontent-%COMP%]{transform-origin:bottom center}.t-bar_negative[_ngcontent-%COMP%]{transform:rotate(180deg);opacity:var(--tui-disabled-opacity)}.t-bar.t-bar_flexible[_ngcontent-%COMP%]{max-width:none;width:75%;margin:0 auto}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiBarSetComponent.prototype, "value", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiBarSetComponent.prototype, "size", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiBarSetComponent.prototype, "collapsed", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_4__/* .__decorate */ .gn)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiPure */ .UMq], TuiBarSetComponent.prototype, "getLargest", null);

/***/ }),

/***/ 25588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ TuiBarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64762);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12057);





function TuiBarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵelement"] */ ._UZ(0, "div", 1);
  }

  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵstyleProp"] */ .Udp("height", ctx_r0.getHeight(item_r1), "%")("background", ctx_r0.getColor(index_r2));
  }
}

class TuiBarComponent {
  constructor() {
    this.value = [];
    this.size = `m`;
  }

  getHeight(value) {
    return 100 * value / this.getSum(this.value);
  }

  getColor(index) {
    return `var(--tui-chart-${index}`;
  }

  getSum(value) {
    return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiSum */ .smb)(...value);
  }

}

TuiBarComponent.ɵfac = function TuiBarComponent_Factory(t) {
  return new (t || TuiBarComponent)();
};

TuiBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiBarComponent,
  selectors: [["tui-bar"]],
  hostVars: 1,
  hostBindings: function TuiBarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵattribute"] */ .uIk("data-size", ctx.size);
    }
  },
  inputs: {
    value: "value",
    size: "size"
  },
  decls: 1,
  vars: 1,
  consts: [["automation-id", "tui-bar__bar", 3, "height", "background", 4, "ngFor", "ngForOf"], ["automation-id", "tui-bar__bar"]],
  template: function TuiBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵtemplate"] */ .YNc(0, TuiBarComponent_div_0_Template, 1, 4, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.value);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__/* .NgForOf */ .sg],
  styles: ["[_nghost-%COMP%]{display:flex;min-width:.125rem;flex-direction:column-reverse;border-top-left-radius:var(--tui-radius-l);border-top-right-radius:var(--tui-radius-l);overflow:hidden}[data-size=l][_nghost-%COMP%]{width:1rem;max-width:1rem;margin:0 .1875rem}[data-size=m][_nghost-%COMP%]{width:.5rem;max-width:.5rem;margin:0 .1875rem}[data-size=s][_nghost-%COMP%]{width:.25rem;max-width:.5rem;margin:0 .125rem}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiBarComponent.prototype, "value", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiBarComponent.prototype, "size", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiPure */ .UMq], TuiBarComponent.prototype, "getSum", null);

/***/ }),

/***/ 57416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ TuiLegendItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64762);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74788);
/* harmony import */ var _core_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76189);




const _c0 = [[["tui-primitive-checkbox"]], "*"];
const _c1 = ["tui-primitive-checkbox", "*"];
class TuiLegendItemComponent {
  constructor() {
    this.active = false;
    this.color = ``;
    this.text = ``;
    this.size = `m`;
    this.disabled = false;
  }

  get computedColor() {
    return this.color === `var(--tui-primary)` ? null : this.color;
  }

}

TuiLegendItemComponent.ɵfac = function TuiLegendItemComponent_Factory(t) {
  return new (t || TuiLegendItemComponent)();
};

TuiLegendItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiLegendItemComponent,
  selectors: [["tui-legend-item"]],
  hostVars: 5,
  hostBindings: function TuiLegendItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵattribute"] */ .uIk("data-size", ctx.size);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵstyleProp"] */ .Udp("--tui-primary", ctx.computedColor);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵclassProp"] */ .ekj("_disabled", ctx.disabled);
    }
  },
  inputs: {
    active: "active",
    color: "color",
    text: "text",
    size: "size",
    disabled: "disabled"
  },
  ngContentSelectors: _c1,
  decls: 7,
  vars: 4,
  consts: [["tuiButton", "", "type", "button", "size", "s", "appearance", "whiteblock", 1, "t-button", 3, "pseudoHover"], [1, "t-wrapper"], [1, "t-dot"], [1, "t-text"]],
  template: function TuiLegendItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵprojectionDef"] */ .F$t(_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵprojection"] */ .Hsn(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtext"] */ ._uU(5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵprojection"] */ .Hsn(6, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("pseudoHover", ctx.active || null);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵstyleProp"] */ .Udp("background-color", ctx.color || "var(--tui-primary)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵtextInterpolate"] */ .Oqu(ctx.text);
    }
  },
  directives: [_core_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__/* .TuiButtonComponent */ .v],
  styles: ["[_nghost-%COMP%]{display:inline-block}.t-button[_ngcontent-%COMP%]{height:2rem;font-weight:bold}[data-size=m][_nghost-%COMP%]   .t-button[_ngcontent-%COMP%]{height:2.25rem;font:var(--tui-font-text-m);font-weight:bold}.t-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;pointer-events:none}._disabled[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{color:var(--tui-text-03)}.t-dot[_ngcontent-%COMP%]{width:.5rem;height:.5rem;border-radius:100%}._disabled[_nghost-%COMP%]   .t-dot[_ngcontent-%COMP%]{background:var(--tui-base-04)}.t-dot[_ngcontent-%COMP%]:not(:first-child){display:none}.t-text[_ngcontent-%COMP%]{margin:0 .5rem;font-weight:normal}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiLegendItemComponent.prototype, "active", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiLegendItemComponent.prototype, "color", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiLegendItemComponent.prototype, "text", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiLegendItemComponent.prototype, "size", void 0);

/***/ }),

/***/ 83233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "VU": () => (/* reexport */ line_chart_component/* TuiLineChartComponent */.V),
  "Tk": () => (/* reexport */ line_chart_hint_directive/* TuiLineChartHintDirective */.T),
  "I2": () => (/* reexport */ TuiLineChartModule),
  "ed": () => (/* reexport */ line_chart_hint_directive/* tuiLineChartDrivers */.e)
});

// EXTERNAL MODULE: ./projects/addon-charts/components/line-chart/line-chart.component.ts
var line_chart_component = __webpack_require__(58413);
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 84 modules
var cdk = __webpack_require__(40287);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./projects/addon-charts/components/line-chart/line-chart-hint.directive.ts
var line_chart_hint_directive = __webpack_require__(69775);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
;// CONCATENATED MODULE: ./projects/addon-charts/components/line-chart/line-chart.module.ts







let TuiLineChartModule = /*#__PURE__*/(() => {
  class TuiLineChartModule {}

  TuiLineChartModule.ɵfac = function TuiLineChartModule_Factory(t) {
    return new (t || TuiLineChartModule)();
  };

  TuiLineChartModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: TuiLineChartModule
  });
  TuiLineChartModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core/* TuiHintModule */.goS, cdk/* TuiFocusableModule */.udY, cdk/* TuiLetModule */.WDk]]
  });
  return TuiLineChartModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(TuiLineChartModule, {
    declarations: [line_chart_component/* TuiLineChartComponent */.V, line_chart_hint_directive/* TuiLineChartHintDirective */.T],
    imports: [common/* CommonModule */.ez, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core/* TuiHintModule */.goS, cdk/* TuiFocusableModule */.udY, cdk/* TuiLetModule */.WDk],
    exports: [line_chart_component/* TuiLineChartComponent */.V, line_chart_hint_directive/* TuiLineChartHintDirective */.T]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-charts/components/line-chart/index.ts




/***/ }),

/***/ 69775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ TuiLineChartHintDirective),
/* harmony export */   "e": () => (/* binding */ tuiLineChartDrivers)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74788);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40287);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9112);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46782);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39761);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87519);
/* harmony import */ var _line_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58413);









class TuiLineChartHintDirective {
  constructor(renderer, destroy$, ngZone, hovered$) {
    this.renderer = renderer;
    this.destroy$ = destroy$;
    this.ngZone = ngZone;
    this.hovered$ = hovered$;
    this.charts = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_QUERY */ .Mmc;
    this.chartsRef = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_QUERY */ .Mmc;
    this.hint = ``;
  }

  ngAfterContentInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .combineLatest */ .aj)([tuiLineChartDrivers(this.charts), this.hovered$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .map */ .U)(([drivers, hovered]) => !drivers && !hovered), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .filter */ .h)(Boolean), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiZonefree */ .fL9)(this.ngZone), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .takeUntil */ .R)(this.destroy$)).subscribe(() => {
      this.charts.forEach(chart => chart.onHovered(NaN));
    });
  } // _chart is required by TuiLineDaysChartComponent that impersonates this directive


  getContext(index, _chart) {
    return this.computeContext(index, this.charts);
  } // _chart is required by TuiLineDaysChartComponent that impersonates this directive


  raise(index, _chart) {
    const current = this.charts.map(chart => chart.value[index]);
    const sorted = [...current].sort((a, b) => a[1] - b[1]);
    this.charts.forEach(chart => chart.onHovered(index));
    this.chartsRef.forEach(({
      nativeElement
    }, index) => this.renderer.setStyle(nativeElement, `z-index`, sorted.indexOf(current[index])));
  }

  computeContext(index, charts) {
    return {
      $implicit: charts.map(chart => chart.value[index]),
      index
    };
  }

}

TuiLineChartHintDirective.ɵfac = function TuiLineChartHintDirective_Factory(t) {
  return new (t || TuiLineChartHintDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* .Renderer2 */ .Qsj), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .TuiDestroyService */ .a31), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* .NgZone */ .R0b), _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .TuiHoveredService */ .gsq));
};

TuiLineChartHintDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineDirective"] */ .lG2({
  type: TuiLineChartHintDirective,
  selectors: [["", "tuiLineChartHint", ""]],
  contentQueries: function TuiLineChartHintDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵcontentQuery"] */ .Suo(dirIndex, _line_chart_component__WEBPACK_IMPORTED_MODULE_1__/* .TuiLineChartComponent */ .V, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵcontentQuery"] */ .Suo(dirIndex, _line_chart_component__WEBPACK_IMPORTED_MODULE_1__/* .TuiLineChartComponent */ .V, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* .ElementRef */ .SBq);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.charts = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.chartsRef = _t);
    }
  },
  inputs: {
    hint: ["tuiLineChartHint", "hint"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵProvidersFeature"] */ ._Bn([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .TuiDestroyService */ .a31, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .TuiHoveredService */ .gsq])]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiLineChartHintDirective.prototype, "hint", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_7__/* .__decorate */ .gn)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiPure */ .UMq], TuiLineChartHintDirective.prototype, "computeContext", null);

function tuiLineChartDrivers(charts) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__/* .combineLatest */ .aj)(charts.map(({
    drivers
  }) => drivers.map(driver => driver.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .startWith */ .O)(false)))).reduce((acc, drivers) => acc.concat(drivers), [])).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__/* .map */ .U)(values => values.some(Boolean)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__/* .distinctUntilChanged */ .x)());
}

/***/ }),

/***/ 58413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ TuiLineChartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(64762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(12057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74788);
/* harmony import */ var _taiga_ui_addon_charts_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61395);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40287);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66187);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(79765);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87519);
/* harmony import */ var _line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69775);
/* harmony import */ var _cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5723);
/* harmony import */ var _core_directives_hint_hint_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67446);
/* harmony import */ var _core_directives_hint_hint_driver_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29070);
/* harmony import */ var _core_directives_hint_hint_hover_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54255);
/* harmony import */ var _core_directives_hint_hint_position_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15491);
/* harmony import */ var _core_directives_hint_hint_host_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86683);
/* harmony import */ var _core_directives_hint_hint_describe_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(219);
/* harmony import */ var _cdk_directives_focusable_focusable_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(48893);























function TuiLineChartComponent_ng_container_0_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(0, "div", 9);
  }

  if (rf & 2) {
    const point_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵstyleProp"] */ .Udp("left", ctx_r5.getLeft(point_r6[0]), "%")("bottom", ctx_r5.getBottom(point_r6[1]), "%");
  }
}

function TuiLineChartComponent_ng_container_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnamespaceSVG"] */ .O4$();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnamespaceHTML"] */ .kcU();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(1, TuiLineChartComponent_ng_container_0_ng_container_8_div_1_Template, 1, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r2.value);
  }
}

function TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵgetCurrentView"] */ .EpF();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .NdJ("mouseenter", function TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_div_1_Template_div_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .CHM(_r15);
      const index_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw().index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw(3);
      return ctx_r13.onMouseEnter(index_r9);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .ALo(1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(3, "div", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵreference"] */ .MAs(4);

    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw();
    const index_r9 = ctx_r16.index;
    const point_r8 = ctx_r16.$implicit;
    const hovered_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw(2).tuiLet;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵstyleProp"] */ .Udp("left", ctx_r10.getLeft(ctx_r10.getX(index_r9)), "%")("width", ctx_r10.getWidth(index_r9), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵclassProp"] */ .ekj("t-column_hovered", hovered_r1 === index_r9)("t-column_hint_hovered", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .lcZ(1, 20, ctx_r10.drivers.get(index_r9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("tuiHintHost", _r12)("tuiHint", (ctx_r10.hintDirective == null ? null : ctx_r10.hintDirective.hint) || ctx_r10.hintContent)("tuiHintContext", ctx_r10.getContentContext(point_r8, index_r9))("tuiHintDescribe", ctx_r10.getHintId(index_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵstyleProp"] */ .Udp("left", ctx_r10.getOffset(index_r9), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵstyleProp"] */ .Udp("left", ctx_r10.getOffset(index_r9), "%")("bottom", ctx_r10.getBottom(point_r8[1]), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("tuiFocusable", ctx_r10.isFocusable)("id", ctx_r10.getHintId(index_r9));
  }
}

function TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(0, "div", 17);
  }

  if (rf & 2) {
    const point_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵstyleProp"] */ .Udp("bottom", ctx_r11.getBottom(point_r8[1]), "%");
  }
}

function TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(1, TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_div_1_Template, 5, 22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(2, TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_div_2_Template, 1, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r7.value.length > 1 || ctx_r7.dots);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r7.isFocusable);
  }
}

function TuiLineChartComponent_ng_container_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnamespaceSVG"] */ .O4$();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnamespaceHTML"] */ .kcU();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(1, TuiLineChartComponent_ng_container_0_ng_container_9_ng_container_1_Template, 3, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx_r3.value);
  }
}

function TuiLineChartComponent_ng_container_0_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const point_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵstyleProp"] */ .Udp("left", ctx_r20.getLeft(point_r19[0]), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r20.xStringify(point_r19[0]), " ");
  }
}

function TuiLineChartComponent_ng_container_0_ng_container_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const point_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw().ngIf;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵstyleProp"] */ .Udp("bottom", ctx_r21.getBottom(point_r19[1]), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtextInterpolate1"] */ .hij(" ", ctx_r21.yStringify(point_r19[1]), " ");
  }
}

function TuiLineChartComponent_ng_container_0_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnamespaceSVG"] */ .O4$();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnamespaceHTML"] */ .kcU();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(1, TuiLineChartComponent_ng_container_0_ng_container_10_div_1_Template, 2, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(2, TuiLineChartComponent_ng_container_0_ng_container_10_div_2_Template, 2, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r4.xStringify);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r4.yStringify);
  }
}

function TuiLineChartComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnamespaceSVG"] */ .O4$();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(1, "svg", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(2, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(3, "linearGradient", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(4, "stop", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(5, "stop", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(6, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(7, "path", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(8, TuiLineChartComponent_ng_container_0_ng_container_8_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(9, TuiLineChartComponent_ng_container_0_ng_container_9_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(10, TuiLineChartComponent_ng_container_0_ng_container_10_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const hovered_r1 = ctx.tuiLet;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵattribute"] */ .uIk("viewBox", ctx_r0.viewBox);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵattribute"] */ .uIk("id", ctx_r0.fillId);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵattribute"] */ .uIk("fill", ctx_r0.fill)("d", ctx_r0.fillD);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵattribute"] */ .uIk("d", ctx_r0.d);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.dots);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.hasHints);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("ngIf", ctx_r0.getHovered(hovered_r1));
  }
}

class TuiLineChartComponent {
  constructor(idService, ngZone, locationRef, hintDirective, hintOptions) {
    this.ngZone = ngZone;
    this.locationRef = locationRef;
    this.hintDirective = hintDirective;
    this.hintOptions = hintOptions;
    this._hovered$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__/* .Subject */ .xQ();
    this.drivers = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_QUERY */ .Mmc;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.smoothingFactor = 0;
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
    return this._hovered$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__/* .distinctUntilChanged */ .x)(), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiZoneOptimized */ .Yry)(this.ngZone));
  }

  get hintContent() {
    var _a;

    return ((_a = this.hintOptions) === null || _a === void 0 ? void 0 : _a.content) || ``;
  }

  get fillId() {
    return `tui-line-chart-${this.autoIdString}`;
  }

  get fill() {
    return this.filled ? `url(${this.locationRef.prepareExternalUrl(this.locationRef.path())}#${this.fillId})` : `none`;
  }

  get viewBox() {
    return `${this.x} ${this.y} ${this.width} ${this.height}`;
  }

  get d() {
    return this.getD(this.value, this.smoothingFactor);
  }

  get fillD() {
    return this.value.length ? `${this.d}V ${this.y} H ${this.value[0][0]} V ${this.value[0][1]}` : this.d;
  }

  get isFocusable() {
    return !this.hintDirective && this.hasHints;
  }

  get hasHints() {
    var _a;

    return !!this.xStringify || !!this.yStringify || !!((_a = this.hintDirective) === null || _a === void 0 ? void 0 : _a.hint) || !!this.hintContent;
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

    return index ? (this.value[index - 1][0] + this.value[index][0]) / 2 : 2 * this.value[0][0] - this.getX(1);
  }

  getWidth(index) {
    return 100 * this.computeWidth(index) / this.width;
  }

  getHintId(index) {
    return `${this.autoIdString}_${index}`;
  }

  getContentContext($implicit, index) {
    var _a;

    return ((_a = this.hintDirective) === null || _a === void 0 ? void 0 : _a.getContext(this.value.indexOf($implicit), this)) || {
      $implicit,
      index
    };
  }

  getHovered(hovered) {
    // This checks for NaN and null too since async pipe returns null before first item
    return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiIsPresent */ .PcC)(hovered) && Number.isInteger(hovered) ? this.value[hovered] : null;
  }

  getBottom(y) {
    return 100 * (y - this.y) / this.height;
  }

  getLeft(x) {
    return 100 * (x - this.x) / this.width;
  }

  getOffset(x) {
    return 100 * (this.value[x][0] - this.getX(x)) / this.computeWidth(x);
  }

  onMouseEnter(index) {
    if (this.hintDirective) {
      this.hintDirective.raise(index, this);
    } else {
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
    return value.reduce((d, point, index) => index ? `${d} ${(0,_taiga_ui_addon_charts_utils__WEBPACK_IMPORTED_MODULE_0__/* .tuiDraw */ .iP)(value, index, smoothingFactor)}` : `M ${point}`, ``);
  }

  computeWidth(index) {
    return index === this.value.length - 1 ? 2 * (this.value[index][0] - this.getX(index)) : this.getX(index + 1) - this.getX(index);
  }

}

TuiLineChartComponent.ɵfac = function TuiLineChartComponent_Factory(t) {
  return new (t || TuiLineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .TuiIdService */ .llV), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* .NgZone */ .R0b), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common__WEBPACK_IMPORTED_MODULE_13__/* .Location */ .Ye), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_line_chart_hint_directive__WEBPACK_IMPORTED_MODULE_3__/* .TuiLineChartHintDirective */ .T, 8), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .TuiHintOptionsDirective */ .bZA, 8));
};

TuiLineChartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiLineChartComponent,
  selectors: [["tui-line-chart"]],
  viewQuery: function TuiLineChartComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵviewQuery"] */ .Gf(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .TuiDriver */ .kkl, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.drivers = _t);
    }
  },
  hostBindings: function TuiLineChartComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .NdJ("mouseleave", function TuiLineChartComponent_mouseleave_HostBindingHandler() {
        return ctx.onMouseLeave();
      });
    }
  },
  inputs: {
    valueSetter: ["value", "valueSetter"],
    x: "x",
    y: "y",
    width: "width",
    height: "height",
    smoothingFactor: "smoothingFactor",
    xStringify: "xStringify",
    yStringify: "yStringify",
    filled: "filled",
    dots: "dots"
  },
  decls: 2,
  vars: 3,
  consts: [[4, "tuiLet"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", "preserveAspectRatio", "none", "width", "100%", "height", "100%", 1, "t-svg"], ["x1", "0", "x2", "0", "y1", "1", "y2", "0"], ["stop-color", "currentColor", "offset", "0%", "stop-opacity", "0.5"], ["stop-color", "currentColor", "offset", "100%", "stop-opacity", "0"], ["stroke", "none"], ["fill", "none", "stroke", "currentColor", "vector-effect", "non-scaling-stroke", "stroke-width", "2"], [4, "ngIf"], ["class", "t-dot", 3, "left", "bottom", 4, "ngFor", "ngForOf"], [1, "t-dot"], [4, "ngFor", "ngForOf"], ["tuiHintDirection", "top", "class", "t-column", 3, "t-column_hovered", "t-column_hint_hovered", "tuiHintHost", "tuiHint", "tuiHintContext", "tuiHintDescribe", "left", "width", "mouseenter", 4, "ngIf"], ["class", "t-line t-line_horizontal", 3, "bottom", 4, "ngIf"], ["tuiHintDirection", "top", 1, "t-column", 3, "tuiHintHost", "tuiHint", "tuiHintContext", "tuiHintDescribe", "mouseenter"], [1, "t-line", "t-line_vertical"], [1, "t-host", 3, "tuiFocusable", "id"], ["hintHost", ""], [1, "t-line", "t-line_horizontal"], ["class", "t-hint t-hint_x", 3, "left", 4, "ngIf"], ["class", "t-hint t-hint_y", 3, "bottom", 4, "ngIf"], [1, "t-hint", "t-hint_x"], [1, "t-hint", "t-hint_y"]],
  template: function TuiLineChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(0, TuiLineChartComponent_ng_container_0_Template, 11, 8, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipe"] */ .ALo(1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("tuiLet", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpipeBind1"] */ .lcZ(1, 1, ctx.hovered$));
    }
  },
  directives: [_cdk_directives_let_let_directive__WEBPACK_IMPORTED_MODULE_14__/* .TuiLetDirective */ .L, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgIf */ .O5, _angular_common__WEBPACK_IMPORTED_MODULE_13__/* .NgForOf */ .sg, _core_directives_hint_hint_directive__WEBPACK_IMPORTED_MODULE_4__/* .TuiHintDirective */ .D, _core_directives_hint_hint_driver_directive__WEBPACK_IMPORTED_MODULE_5__/* .TuiHintDriverDirective */ .x, _core_directives_hint_hint_hover_directive__WEBPACK_IMPORTED_MODULE_6__/* .TuiHintHoverDirective */ .t, _core_directives_hint_hint_position_directive__WEBPACK_IMPORTED_MODULE_7__/* .TuiHintPositionDirective */ .D, _core_directives_hint_hint_host_directive__WEBPACK_IMPORTED_MODULE_8__/* .TuiHintHostDirective */ .X, _core_directives_hint_hint_describe_directive__WEBPACK_IMPORTED_MODULE_9__/* .TuiHintDescribeDirective */ .$, _cdk_directives_focusable_focusable_directive__WEBPACK_IMPORTED_MODULE_15__/* .TuiFocusableDirective */ .t],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__/* .AsyncPipe */ .Ov],
  styles: ["[_nghost-%COMP%]{display:flex;width:100%;height:100%;pointer-events:none}.t-svg[_ngcontent-%COMP%]{transform:scaleY(-1)}.t-column[_ngcontent-%COMP%]{position:absolute;top:0;height:100%;pointer-events:auto}.t-dot[_ngcontent-%COMP%]{position:absolute;width:.375rem;height:.375rem;border-radius:100%;background:currentColor;margin:-.1875rem;box-shadow:0 0 0 2px #fff}.t-host[_ngcontent-%COMP%]{position:absolute;left:50%;width:.5rem;height:.5rem;border-radius:100%;opacity:0;background:#fff;margin:-.25rem;box-shadow:0 0 0 2px currentColor,0 .0625rem .1875rem .125rem rgba(0,0,0,.1);outline:none;pointer-events:none}.t-host[_ngcontent-%COMP%]:focus, .t-column_hovered[_ngcontent-%COMP%]   .t-host[_ngcontent-%COMP%], .t-column[_ngcontent-%COMP%]:hover   .t-host[_ngcontent-%COMP%], .t-column_hint_hovered[_ngcontent-%COMP%]   .t-host[_ngcontent-%COMP%]{opacity:1}.t-line[_ngcontent-%COMP%]{position:absolute;opacity:0;background:var(--tui-base-03)}.t-line_vertical[_ngcontent-%COMP%]{top:0;bottom:0;left:50%;width:1px}.t-line_horizontal[_ngcontent-%COMP%]{z-index:-1;width:100%;height:1px}[style^=\"z-index: 0\"][_nghost-%COMP%]   .t-column_hovered[_ngcontent-%COMP%]   .t-line[_ngcontent-%COMP%], [_nghost-%COMP%]:not([style])   .t-column[_ngcontent-%COMP%]:hover   .t-line[_ngcontent-%COMP%], [_nghost-%COMP%]:not([style])   .t-column_hint_hovered[_ngcontent-%COMP%]   .t-line[_ngcontent-%COMP%], [style^=\"z-index: 0\"][_nghost-%COMP%]   .t-column_hovered[_ngcontent-%COMP%] + .t-line[_ngcontent-%COMP%], [_nghost-%COMP%]:not([style])   .t-column[_ngcontent-%COMP%]:hover + .t-line[_ngcontent-%COMP%], [_nghost-%COMP%]:not([style])   .t-column_hint_hovered[_ngcontent-%COMP%] + .t-line[_ngcontent-%COMP%]{opacity:1}.t-hint[_ngcontent-%COMP%]{box-shadow:0 .25rem 1.5rem rgba(0,0,0,.12);position:absolute;font:var(--tui-font-text-xs);height:1.25rem;line-height:1.25rem;margin-bottom:-.625rem;padding:0 .375rem;white-space:nowrap;color:var(--tui-base-09);background:var(--tui-base-01);transform:translate(-50%)}.t-hint_x[_ngcontent-%COMP%]{bottom:0}.t-hint_y[_ngcontent-%COMP%]{left:0}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineChartComponent.prototype, "valueSetter", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineChartComponent.prototype, "x", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineChartComponent.prototype, "y", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineChartComponent.prototype, "width", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineChartComponent.prototype, "height", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)(smoothingFactor => (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiInRange */ .wfT)(smoothingFactor, 0, 100), `smoothingFactor must be between 0 and 100`)], TuiLineChartComponent.prototype, "smoothingFactor", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineChartComponent.prototype, "xStringify", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineChartComponent.prototype, "yStringify", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineChartComponent.prototype, "filled", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineChartComponent.prototype, "dots", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiPure */ .UMq], TuiLineChartComponent.prototype, "hovered$", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_16__/* .__decorate */ .gn)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiPure */ .UMq], TuiLineChartComponent.prototype, "getD", null);

/***/ }),

/***/ 19288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ TuiLineDaysChartHintDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74788);
/* harmony import */ var _taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83233);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40287);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9112);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46782);
/* harmony import */ var _line_days_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87748);









 // TODO: Consider extending TuiLineChartHintDirective

class TuiLineDaysChartHintDirective {
  constructor(destroy$, ngZone, hovered$) {
    this.destroy$ = destroy$;
    this.ngZone = ngZone;
    this.hovered$ = hovered$;
    this.charts = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_QUERY */ .Mmc;
    this.hint = ``;
  }

  ngAfterContentInit() {
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__/* .combineLatest */ .aj)([(0,_taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_0__/* .tuiLineChartDrivers */ .ed)(this.charts), this.hovered$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .map */ .U)(([drivers, hovered]) => !drivers && !hovered), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .filter */ .h)(Boolean), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiZonefree */ .fL9)(this.ngZone), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .takeUntil */ .R)(this.destroy$)).subscribe(() => {
      this.charts.forEach(chart => chart.onHovered(NaN));
    });
  }

  getContext(day) {
    return this.computeContext(day, this.charts);
  }

  raise(day) {
    const current = this.charts.map(({
      value
    }) => find(value, day)).filter(([_, value]) => !isNaN(value));
    const sorted = [...current].sort((a, b) => a[1] - b[1]);
    this.charts.forEach((chart, index) => {
      chart.onHovered(day);
      chart.zIndex = Math.max(sorted.indexOf(current[index]), 0);
    });
  }

  computeContext(day, charts) {
    return {
      $implicit: charts.map(({
        value
      }) => find(value, day))
    };
  }

}

TuiLineDaysChartHintDirective.ɵfac = function TuiLineDaysChartHintDirective_Factory(t) {
  return new (t || TuiLineDaysChartHintDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .TuiDestroyService */ .a31), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_7__/* .NgZone */ .R0b), _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .TuiHoveredService */ .gsq));
};

TuiLineDaysChartHintDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵdefineDirective"] */ .lG2({
  type: TuiLineDaysChartHintDirective,
  selectors: [["", "tuiLineChartHint", ""]],
  contentQueries: function TuiLineDaysChartHintDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵcontentQuery"] */ .Suo(dirIndex, _line_days_chart_component__WEBPACK_IMPORTED_MODULE_2__/* .TuiLineDaysChartComponent */ .r, 4);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.charts = _t);
    }
  },
  inputs: {
    hint: ["tuiLineChartHint", "hint"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__/* ["ɵɵProvidersFeature"] */ ._Bn([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .TuiDestroyService */ .a31, _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .TuiHoveredService */ .gsq])]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineDaysChartHintDirective.prototype, "hint", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_8__/* .__decorate */ .gn)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiPure */ .UMq], TuiLineDaysChartHintDirective.prototype, "computeContext", null);

function find(value, current) {
  return value.find(([day]) => day.daySame(current)) || [current, NaN];
}

/***/ }),

/***/ 87748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ TuiLineDaysChartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64762);
/* harmony import */ var _taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83233);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40287);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66187);
/* harmony import */ var _line_days_chart_hint_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74788);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12057);
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58413);
/* harmony import */ var _core_directives_hint_hint_options_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84848);
/* harmony import */ var _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89570);












function TuiLineDaysChartComponent_tui_line_chart_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelement"] */ ._UZ(0, "tui-line-chart", 2);
  }

  if (rf & 2) {
    const month_r3 = ctx.$implicit;
    const first_r4 = ctx.first;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵreference"] */ .MAs(2);

    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵstyleProp"] */ .Udp("z-index", ctx_r0.zIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("dots", ctx_r0.dots)("x", first_r4 ? 0 : ctx_r0.getX(month_r3[0][0]))("y", ctx_r0.y)("width", first_r4 ? ctx_r0.firstWidth : ctx_r0.getWidth(month_r3[0][0]))("height", ctx_r0.height)("value", month_r3)("smoothingFactor", ctx_r0.smoothingFactor)("tuiHintContent", ctx_r0.hintContent ? _r1 : "")("yStringify", ctx_r0.yStringify)("xStringify", ctx_r0.xStringify ? ctx_r0.daysStringify : null);
  }
}

function TuiLineDaysChartComponent_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementContainerStart"] */ .ynx(0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtext"] */ ._uU(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵelementContainerEnd"] */ .BQk();
  }

  if (rf & 2) {
    const text_r7 = ctx.polymorpheusOutlet;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵadvance"] */ .xp6(1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtextInterpolate1"] */ .hij(" ", text_r7, " ");
  }
}

function TuiLineDaysChartComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(0, TuiLineDaysChartComponent_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 3);
  }

  if (rf & 2) {
    const point_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("polymorpheusOutlet", ctx_r2.hintContent)("polymorpheusOutletContext", ctx_r2.getHintContext(point_r5[0], ctx_r2.value));
  }
}

const DUMMY = [NaN, NaN];
class TuiLineDaysChartComponent {
  constructor(hintDirective) {
    this.hintDirective = hintDirective;
    this.charts = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_QUERY */ .Mmc;
    this.drivers = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_QUERY */ .Mmc;
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
    const length = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .TuiDay.lengthBetween */ .TU1.lengthBetween(start, value[value.length - 1][0]) + 1;
    this.value = Array.from({
      length
    }, (_, day) => {
      const currentDay = start.append({
        day
      });
      const shifted = currentDay.daySame(mutable[0][0]) ? mutable.shift() : null;
      const currentValue = shifted ? shifted[1] : NaN;
      return [currentDay, currentValue];
    });
  }

  get months() {
    return this.value.length ? this.breakMonths(this.value) : _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_ARRAY */ .LZ8;
  }

  get firstWidth() {
    return this.months.length * this.value[0][0].daysCount;
  }

  get hint() {
    return this.hintDirective ? this.hintDirective.hint : this.hintContent;
  }

  getHintContext(x, value) {
    return {
      $implicit: value[x - value[0][0].day + 1]
    };
  }

  getX(index) {
    const current = this.getMonth(index);
    const months = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .TuiMonth.lengthBetween */ .qld.lengthBetween(this.value[0][0], current);
    const offset = months * current.daysCount;
    return index - offset;
  }

  onHovered(day) {
    if ((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiIsNumber */ .dtH)(day)) {
      this.charts.forEach(chart => chart.onHovered(NaN));
      return;
    }

    const index = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .TuiMonth.lengthBetween */ .qld.lengthBetween(this.value[0][0], day);
    const x = _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .TuiDay.lengthBetween */ .TU1.lengthBetween(this.value[0][0], day) + this.value[0][0].day - 1;
    const current = this.charts.get(index);
    this.charts.forEach(chart => {
      if (chart === current) {
        current.onHovered(current.value.findIndex(point => point[0] === x));
      } else {
        chart.onHovered(NaN);
      }
    });
  }

  raise(index, {
    value
  }) {
    const x = value[index][0];
    const month = this.getMonth(x);

    if (this.hintDirective) {
      this.hintDirective.raise(month);
    } else {
      this.onHovered(month);
    }
  }

  getWidth(index) {
    return this.getMonth(index).daysCount * this.months.length;
  }

  getContext(index, {
    value
  }) {
    const x = value[index][0];
    return this.hintDirective ? this.hintDirective.getContext(this.getMonth(x)) : this.getHintContext(x, this.value);
  }

  breakMonths(value) {
    const offset = value[0][0].day - 1;
    return Array.from({
      length: _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .TuiMonth.lengthBetween */ .qld.lengthBetween(value[0][0], value[value.length - 1][0]) + 1
    }, (_, i) => i + value[0][0].month + value[0][0].year * 12).map(absoluteMonth => value.map(([{
      month,
      year
    }, y], index) => month + year * 12 === absoluteMonth ? [index + offset, y] : null).filter(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiIsPresent */ .PcC)).map((month, index, array) => index === array.length - 1 ? month : [...month, array[index + 1].find(day => !isNaN(day[1])) || DUMMY]);
  }

  getMonth(index) {
    return this.value[index - this.value[0][0].day + 1][0];
  }

}

TuiLineDaysChartComponent.ɵfac = function TuiLineDaysChartComponent_Factory(t) {
  return new (t || TuiLineDaysChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdirectiveInject"] */ .Y36(_line_days_chart_hint_directive__WEBPACK_IMPORTED_MODULE_3__/* .TuiLineDaysChartHintDirective */ .w, 8));
};

TuiLineDaysChartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiLineDaysChartComponent,
  selectors: [["tui-line-days-chart"]],
  viewQuery: function TuiLineDaysChartComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵviewQuery"] */ .Gf(_taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_0__/* .TuiLineChartComponent */ .VU, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵviewQuery"] */ .Gf(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .TuiDriver */ .kkl, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.charts = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵqueryRefresh"] */ .iGM(_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵloadQuery"] */ .CRH()) && (ctx.drivers = _t);
    }
  },
  hostVars: 2,
  hostBindings: function TuiLineDaysChartComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵstyleProp"] */ .Udp("z-index", ctx.zIndex);
    }
  },
  inputs: {
    valueSetter: ["value", "valueSetter"],
    y: "y",
    height: "height",
    smoothingFactor: "smoothingFactor",
    hintContent: "hintContent",
    xStringify: "xStringify",
    yStringify: "yStringify",
    dots: "dots"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵProvidersFeature"] */ ._Bn([{
    provide: _taiga_ui_addon_charts_components_line_chart__WEBPACK_IMPORTED_MODULE_0__/* .TuiLineChartHintDirective */ .Tk,
    useExisting: TuiLineDaysChartComponent
  }])],
  decls: 3,
  vars: 1,
  consts: [["class", "t-chart", 3, "zIndex", "dots", "x", "y", "width", "height", "value", "smoothingFactor", "tuiHintContent", "yStringify", "xStringify", 4, "ngFor", "ngForOf"], ["hint", ""], [1, "t-chart", 3, "dots", "x", "y", "width", "height", "value", "smoothingFactor", "tuiHintContent", "yStringify", "xStringify"], [4, "polymorpheusOutlet", "polymorpheusOutletContext"]],
  template: function TuiLineDaysChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(0, TuiLineDaysChartComponent_tui_line_chart_0_Template, 1, 12, "tui-line-chart", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplate"] */ .YNc(1, TuiLineDaysChartComponent_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵtemplateRefExtractor"] */ .W1O);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__/* ["ɵɵproperty"] */ .Q6J("ngForOf", ctx.months);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__/* .NgForOf */ .sg, _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__/* .TuiLineChartComponent */ .V, _core_directives_hint_hint_options_directive__WEBPACK_IMPORTED_MODULE_5__/* .TuiHintOptionsDirective */ .b, _tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_8__/* .PolymorpheusOutletDirective */ .Li],
  styles: ["[_nghost-%COMP%]{display:block}.t-chart[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineDaysChartComponent.prototype, "valueSetter", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineDaysChartComponent.prototype, "y", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineDaysChartComponent.prototype, "height", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineDaysChartComponent.prototype, "smoothingFactor", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineDaysChartComponent.prototype, "hintContent", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineDaysChartComponent.prototype, "xStringify", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineDaysChartComponent.prototype, "yStringify", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiLineDaysChartComponent.prototype, "dots", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiPure */ .UMq], TuiLineDaysChartComponent.prototype, "getHintContext", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_9__/* .__decorate */ .gn)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiPure */ .UMq], TuiLineDaysChartComponent.prototype, "breakMonths", null);

/***/ }),

/***/ 65266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ TuiPieChartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(64762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(12057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(74788);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40287);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66187);
/* harmony import */ var _cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36097);
/* harmony import */ var _pie_chart_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51078);
/* harmony import */ var _core_directives_hint_hint_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67446);
/* harmony import */ var _core_directives_hint_hint_driver_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29070);
/* harmony import */ var _core_directives_hint_hint_hover_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54255);
/* harmony import */ var _core_directives_hint_hint_position_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15491);
/* harmony import */ var _core_directives_hint_hint_pointer_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(55433);
/* harmony import */ var _cdk_directives_hovered_hovered_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61369);


















const _c0 = function (a0) {
  return {
    $implicit: a0
  };
};

function TuiPieChartComponent__svg_path_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵgetCurrentView"] */ .EpF();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnamespaceSVG"] */ .O4$();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(0, "path", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵlistener"] */ .NdJ("tuiHoveredChange", function TuiPieChartComponent__svg_path_7_Template__svg_path_tuiHoveredChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵrestoreView"] */ .CHM(_r3);
      const index_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw();
      return ctx_r2.onHovered($event, index_r1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
  }

  if (rf & 2) {
    const index_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnextContext"] */ .oxw();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵstyleProp"] */ .Udp("color", ctx_r0.getColor(index_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("tuiPieChart", ctx_r0.segments[index_r1])("tuiHint", ctx_r0.hintContent)("tuiHintContext", _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵpureFunction1"] */ .VKq(6, _c0, index_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵattribute"] */ .uIk("transform", ctx_r0.getTransform(index_r1));
  }
}

const RADII = {
  xs: `50`,
  s: `50`,
  m: `77.8`,
  l: `81.9`,
  xl: `81.3`
};
const TRANSFORM = {
  xs: 1.15,
  s: 1.25,
  m: 1.11,
  l: 1.09,
  xl: 1.08
};
class TuiPieChartComponent {
  constructor(idService, locationRef, hintOptions) {
    this.locationRef = locationRef;
    this.hintOptions = hintOptions;
    this.value = [];
    this.size = `m`;
    this.masked = false;
    this.activeItemIndex = NaN;
    this.activeItemIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_10__/* .EventEmitter */ .vpe();
    this.autoIdString = idService.generate();

    if (this.hintOptions) {
      this.hintOptions.showDelay = 0;
      this.hintOptions.hideDelay = 0;
    }
  }

  get empty() {
    return !this.getSum(this.value);
  }

  get hintContent() {
    var _a;

    return ((_a = this.hintOptions) === null || _a === void 0 ? void 0 : _a.content) || ``;
  }

  get maskId() {
    return `tui-ring-chart-${this.autoIdString}`;
  }

  get mask() {
    return this.masked ? `url(${this.locationRef.prepareExternalUrl(this.locationRef.path())}#${this.maskId})` : null;
  }

  get radius() {
    return RADII[this.size];
  }

  get segments() {
    return this.getSegments(this.value);
  }

  getTransform(index) {
    const transform = this.masked ? `scale(${TRANSFORM[this.size]})` : `scale(${TRANSFORM.xs})`;
    return index === this.activeItemIndex ? transform : null;
  }

  onHovered(hovered, index) {
    this.updateActiveItemIndex(hovered ? index : NaN);
  }

  getColor(index) {
    return `var(--tui-chart-${index}`;
  }

  getSum(value) {
    return (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiSum */ .smb)(...value);
  }

  getSegments(value) {
    return value.map((initial, i, array) => array.reduce((sum, current, j) => j < i ? this.getDeg(current) + sum : sum, this.getDeg(initial))).map((angle, index, array) => [array[index - 1] || 0, Math.min(angle, 359.9999)]);
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

TuiPieChartComponent.ɵfac = function TuiPieChartComponent_Factory(t) {
  return new (t || TuiPieChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .TuiIdService */ .llV), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_common__WEBPACK_IMPORTED_MODULE_11__/* .Location */ .Ye), _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .TuiHintOptionsDirective */ .bZA, 8));
};

TuiPieChartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiPieChartComponent,
  selectors: [["tui-pie-chart"]],
  hostVars: 3,
  hostBindings: function TuiPieChartComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵattribute"] */ .uIk("data-size", ctx.size);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵclassProp"] */ .ekj("_empty", ctx.empty);
    }
  },
  inputs: {
    value: "value",
    size: "size",
    masked: "masked",
    activeItemIndex: "activeItemIndex"
  },
  outputs: {
    activeItemIndexChange: "activeItemIndexChange"
  },
  decls: 8,
  vars: 5,
  consts: [["xmlns", "http://www.w3.org/2000/svg", "height", "100%", "width", "100%", "viewBox", "-100 -100 200 200", "focusable", "false", 1, "t-svg"], ["x", "-200", "y", "-200", "width", "400", "height", "400", "fill", "white"], ["cx", "0", "cy", "0"], ["cx", "0", "cy", "0", "r", "100", 1, "t-placeholder"], ["fill", "currentColor", "automation-id", "tui-pie-chart__segment", "tuiHintPointer", "", "tuiHintAppearance", "onDark", "tuiHintDirection", "top-right", "d", "", "class", "t-segment", 3, "color", "tuiPieChart", "tuiHint", "tuiHintContext", "tuiHoveredChange", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["fill", "currentColor", "automation-id", "tui-pie-chart__segment", "tuiHintPointer", "", "tuiHintAppearance", "onDark", "tuiHintDirection", "top-right", "d", "", 1, "t-segment", 3, "tuiPieChart", "tuiHint", "tuiHintContext", "tuiHoveredChange"]],
  template: function TuiPieChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵnamespaceSVG"] */ .O4$();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(0, "svg", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(1, "defs");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(2, "mask");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(3, "rect", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(4, "circle", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementStart"] */ .TgZ(5, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelement"] */ ._UZ(6, "circle", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵtemplate"] */ .YNc(7, TuiPieChartComponent__svg_path_7_Template, 1, 8, "path", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵelementEnd"] */ .qZA();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵattribute"] */ .uIk("id", ctx.maskId);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵattribute"] */ .uIk("r", ctx.radius);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵstyleProp"] */ .Udp("mask", ctx.mask);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵadvance"] */ .xp6(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__/* ["ɵɵproperty"] */ .Q6J("tuiRepeatTimesOf", ctx.segments.length);
    }
  },
  directives: [_cdk_directives_repeat_times_repeat_times_directive__WEBPACK_IMPORTED_MODULE_2__/* .TuiRepeatTimesDirective */ .X, _pie_chart_directive__WEBPACK_IMPORTED_MODULE_3__/* .TuiPieChartDirective */ .K, _core_directives_hint_hint_directive__WEBPACK_IMPORTED_MODULE_4__/* .TuiHintDirective */ .D, _core_directives_hint_hint_driver_directive__WEBPACK_IMPORTED_MODULE_5__/* .TuiHintDriverDirective */ .x, _core_directives_hint_hint_hover_directive__WEBPACK_IMPORTED_MODULE_6__/* .TuiHintHoverDirective */ .t, _core_directives_hint_hint_position_directive__WEBPACK_IMPORTED_MODULE_7__/* .TuiHintPositionDirective */ .D, _core_directives_hint_hint_pointer_directive__WEBPACK_IMPORTED_MODULE_8__/* .TuiHintPointerDirective */ .q, _cdk_directives_hovered_hovered_directive__WEBPACK_IMPORTED_MODULE_9__/* .TuiHoveredDirective */ .c],
  styles: ["[_nghost-%COMP%]{position:relative;display:block}[data-size=xs][_nghost-%COMP%]{width:2rem;height:2rem;pointer-events:none}[data-size=s][_nghost-%COMP%]{width:4rem;height:4rem}[data-size=m][_nghost-%COMP%]{width:9rem;height:9rem}[data-size=l][_nghost-%COMP%]{width:11rem;height:11rem}[data-size=xl][_nghost-%COMP%]{width:16rem;height:16rem}.t-svg[_ngcontent-%COMP%]{position:relative;overflow:visible;transform:rotate(-90deg)}.t-segment[_ngcontent-%COMP%]{transition-property:transform;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}._empty[_nghost-%COMP%]   .t-segment[_ngcontent-%COMP%]{display:none}.t-placeholder[_ngcontent-%COMP%]{fill:var(--tui-base-03)}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiPieChartComponent.prototype, "value", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiPieChartComponent.prototype, "size", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiPieChartComponent.prototype, "masked", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiPieChartComponent.prototype, "activeItemIndex", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__decorate */ .gn)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiPure */ .UMq], TuiPieChartComponent.prototype, "getSum", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_12__/* .__decorate */ .gn)([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiPure */ .UMq], TuiPieChartComponent.prototype, "getSegments", null);

/***/ }),

/***/ 51078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ TuiPieChartDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74788);
/* harmony import */ var _ng_web_apis_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62579);
/* harmony import */ var _taiga_ui_addon_charts_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61395);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40287);
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66187);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59328);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70409);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46782);










class TuiPieChartDirective {
  constructor({
    nativeElement
  }, ngZone, destroy$, performance, animationFrame$, duration) {
    this.sector$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__/* .BehaviorSubject */ .X([0, 0]);
    this.sector$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__/* .pairwise */ .G)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__/* .switchMap */ .w)(([prev, cur]) => {
      const now = performance.now();
      const startDelta = cur[0] - prev[0];
      const endDelta = cur[1] - prev[1];
      return animationFrame$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .map */ .U)(timestamp => (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiEaseInOutQuad */ .Xg)((0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiClamp */ .Kiv)((timestamp - now) / duration, 0, 1))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__/* .takeWhile */ .o)(progress => progress < 1, true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__/* .map */ .U)(progress => [prev[0] + startDelta * progress, cur[1] > 359 ? cur[1] : prev[1] + endDelta * progress]));
    }), (0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiZonefree */ .fL9)(ngZone), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__/* .takeUntil */ .R)(destroy$)).subscribe(([start, end]) => {
      nativeElement.setAttribute(`d`, (0,_taiga_ui_addon_charts_utils__WEBPACK_IMPORTED_MODULE_0__/* .tuiDescribeSector */ .IP)(start, end));
    });
  }

  set tuiPieChart(sector) {
    this.sector$.next(sector);
  }

}

TuiPieChartDirective.ɵfac = function TuiPieChartDirective_Factory(t) {
  return new (t || TuiPieChartDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* .ElementRef */ .SBq), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_angular_core__WEBPACK_IMPORTED_MODULE_9__/* .NgZone */ .R0b), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .TuiDestroyService */ .a31), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_10__/* .PERFORMANCE */ .KS), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_10__/* .ANIMATION_FRAME */ .L1), _angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdirectiveInject"] */ .Y36(_taiga_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .TUI_ANIMATIONS_DURATION */ .dxT));
};

TuiPieChartDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵdefineDirective"] */ .lG2({
  type: TuiPieChartDirective,
  selectors: [["path", "tuiPieChart", ""]],
  inputs: {
    tuiPieChart: "tuiPieChart"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__/* ["ɵɵProvidersFeature"] */ ._Bn([_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .TuiDestroyService */ .a31])]
});

(0,tslib__WEBPACK_IMPORTED_MODULE_11__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__/* .tuiDefaultProp */ .THR)()], TuiPieChartDirective.prototype, "tuiPieChart", null);

/***/ }),

/***/ 57464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ TuiRingChartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74788);
/* harmony import */ var _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40287);
/* harmony import */ var _pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65266);





const _c0 = ["*"];
class TuiRingChartComponent {
  constructor() {
    this.value = [];
    this.size = `m`;
    this.activeItemIndex = NaN;
    this.activeItemIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__/* .EventEmitter */ .vpe();
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

TuiRingChartComponent.ɵfac = function TuiRingChartComponent_Factory(t) {
  return new (t || TuiRingChartComponent)();
};

TuiRingChartComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵdefineComponent"] */ .Xpm({
  type: TuiRingChartComponent,
  selectors: [["tui-ring-chart"]],
  hostVars: 1,
  hostBindings: function TuiRingChartComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵattribute"] */ .uIk("data-size", ctx.size);
    }
  },
  inputs: {
    value: "value",
    size: "size",
    activeItemIndex: "activeItemIndex"
  },
  outputs: {
    activeItemIndexChange: "activeItemIndexChange"
  },
  ngContentSelectors: _c0,
  decls: 5,
  vars: 4,
  consts: [[1, "t-content"], [1, "t-wrapper"], [3, "masked", "value", "size", "activeItemIndex", "activeItemIndexChange"], [1, "t-shield"]],
  template: function TuiRingChartComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵprojectionDef"] */ .F$t();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵprojection"] */ .Hsn(2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementStart"] */ .TgZ(3, "tui-pie-chart", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵlistener"] */ .NdJ("activeItemIndexChange", function TuiRingChartComponent_Template_tui_pie_chart_activeItemIndexChange_3_listener($event) {
        return ctx.onActiveItemIndexChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelementEnd"] */ .qZA();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵelement"] */ ._UZ(4, "div", 3);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵadvance"] */ .xp6(3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__/* ["ɵɵproperty"] */ .Q6J("masked", true)("value", ctx.value)("size", ctx.size)("activeItemIndex", ctx.activeItemIndex);
    }
  },
  directives: [_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_1__/* .TuiPieChartComponent */ .W],
  styles: ["[_nghost-%COMP%]{position:relative;display:block}[data-size=s][_nghost-%COMP%]{width:4rem;height:4rem}[data-size=m][_nghost-%COMP%]{width:9rem;height:9rem}[data-size=l][_nghost-%COMP%]{width:11rem;height:11rem}[data-size=xl][_nghost-%COMP%]{width:16rem;height:16rem}.t-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;font:var(--tui-font-text-m);max-height:100%;flex-direction:column;justify-content:center;text-align:center;padding:1.5rem;border-radius:100%;box-sizing:border-box;overflow:hidden;word-break:break-word;white-space:pre-wrap;color:var(--tui-text-02)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-xs)}.t-wrapper[_ngcontent-%COMP%]:first-line{color:var(--tui-text-01)}[data-size=l][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-text-l);font-weight:bold}[data-size=m][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:first-line{font:var(--tui-font-text-m);font-weight:bold}.t-shield[_ngcontent-%COMP%]{position:absolute;top:25%;left:25%;right:25%;bottom:25%;border-radius:100%}"],
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiRingChartComponent.prototype, "value", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiRingChartComponent.prototype, "size", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_3__/* .__decorate */ .gn)([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_0__/* .tuiDefaultProp */ .THR)()], TuiRingChartComponent.prototype, "activeItemIndex", void 0);

/***/ }),

/***/ 42662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oG": () => (/* binding */ TUI_ALWAYS_DASHED),
/* harmony export */   "Fy": () => (/* binding */ TUI_ALWAYS_SOLID),
/* harmony export */   "BK": () => (/* binding */ TUI_ALWAYS_NONE)
/* harmony export */ });
/* unused harmony export TUI_ALWAYS_DOTTED */
const TUI_ALWAYS_DASHED = () => `dashed`;
const TUI_ALWAYS_DOTTED = () => `dotted`;
const TUI_ALWAYS_SOLID = () => `solid`;
const TUI_ALWAYS_NONE = () => `none`;

/***/ }),

/***/ 50179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "oG": () => (/* reexport */ line_handlers/* TUI_ALWAYS_DASHED */.oG),
  "BK": () => (/* reexport */ line_handlers/* TUI_ALWAYS_NONE */.BK),
  "Fy": () => (/* reexport */ line_handlers/* TUI_ALWAYS_SOLID */.Fy),
  "Or": () => (/* reexport */ TuiArcChartModule),
  "Ep": () => (/* reexport */ TuiAxesModule),
  "dd": () => (/* reexport */ TuiBarChartModule),
  "r": () => (/* reexport */ TuiBarModule),
  "wY": () => (/* reexport */ TuiBarSetModule),
  "Gn": () => (/* reexport */ TuiLegendItemModule),
  "I2": () => (/* reexport */ line_chart/* TuiLineChartModule */.I2),
  "SX": () => (/* reexport */ TuiLineDaysChartModule),
  "UA": () => (/* reexport */ TuiPieChartModule),
  "R7": () => (/* reexport */ TuiRingChartModule)
});

// UNUSED EXPORTS: TUI_ALWAYS_DOTTED, TuiArcChartComponent, TuiAxesComponent, TuiBarChartComponent, TuiBarComponent, TuiBarSetComponent, TuiLegendItemComponent, TuiLineChartComponent, TuiLineChartHintDirective, TuiLineDaysChartComponent, TuiLineDaysChartHintDirective, TuiPieChartComponent, TuiPieChartDirective, TuiRingChartComponent, tuiLineChartDrivers

// EXTERNAL MODULE: ./projects/addon-charts/components/arc-chart/arc-chart.component.ts
var arc_chart_component = __webpack_require__(48001);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 84 modules
var cdk = __webpack_require__(40287);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
;// CONCATENATED MODULE: ./projects/addon-charts/components/arc-chart/arc-chart.module.ts



let TuiArcChartModule = /*#__PURE__*/(() => {
  class TuiArcChartModule {}

  TuiArcChartModule.ɵfac = function TuiArcChartModule_Factory(t) {
    return new (t || TuiArcChartModule)();
  };

  TuiArcChartModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: TuiArcChartModule
  });
  TuiArcChartModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[cdk/* TuiRepeatTimesModule */.IhY]]
  });
  return TuiArcChartModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(TuiArcChartModule, {
    declarations: [arc_chart_component/* TuiArcChartComponent */.O],
    imports: [cdk/* TuiRepeatTimesModule */.IhY],
    exports: [arc_chart_component/* TuiArcChartComponent */.O]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-charts/components/arc-chart/index.ts


// EXTERNAL MODULE: ./projects/addon-charts/components/axes/axes.component.ts
var axes_component = __webpack_require__(70390);
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
;// CONCATENATED MODULE: ./projects/addon-charts/components/axes/axes.module.ts




let TuiAxesModule = /*#__PURE__*/(() => {
  class TuiAxesModule {}

  TuiAxesModule.ɵfac = function TuiAxesModule_Factory(t) {
    return new (t || TuiAxesModule)();
  };

  TuiAxesModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: TuiAxesModule
  });
  TuiAxesModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, cdk/* TuiRepeatTimesModule */.IhY]]
  });
  return TuiAxesModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(TuiAxesModule, {
    declarations: [axes_component/* TuiAxesComponent */.v],
    imports: [common/* CommonModule */.ez, cdk/* TuiRepeatTimesModule */.IhY],
    exports: [axes_component/* TuiAxesComponent */.v]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-charts/components/axes/index.ts


// EXTERNAL MODULE: ./projects/addon-charts/components/bar/bar.component.ts
var bar_component = __webpack_require__(25588);
;// CONCATENATED MODULE: ./projects/addon-charts/components/bar/bar.module.ts



let TuiBarModule = /*#__PURE__*/(() => {
  class TuiBarModule {}

  TuiBarModule.ɵfac = function TuiBarModule_Factory(t) {
    return new (t || TuiBarModule)();
  };

  TuiBarModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: TuiBarModule
  });
  TuiBarModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez]]
  });
  return TuiBarModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(TuiBarModule, {
    declarations: [bar_component/* TuiBarComponent */.o],
    imports: [common/* CommonModule */.ez],
    exports: [bar_component/* TuiBarComponent */.o]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-charts/components/bar/index.ts


// EXTERNAL MODULE: ./projects/addon-charts/components/bar-chart/bar-chart.component.ts
var bar_chart_component = __webpack_require__(88549);
// EXTERNAL MODULE: ./projects/addon-charts/components/bar-set/bar-set.component.ts
var bar_set_component = __webpack_require__(54147);
;// CONCATENATED MODULE: ./projects/addon-charts/components/bar-set/bar-set.module.ts




let TuiBarSetModule = /*#__PURE__*/(() => {
  class TuiBarSetModule {}

  TuiBarSetModule.ɵfac = function TuiBarSetModule_Factory(t) {
    return new (t || TuiBarSetModule)();
  };

  TuiBarSetModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: TuiBarSetModule
  });
  TuiBarSetModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, TuiBarModule]]
  });
  return TuiBarSetModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(TuiBarSetModule, {
    declarations: [bar_set_component/* TuiBarSetComponent */.I],
    imports: [common/* CommonModule */.ez, TuiBarModule],
    exports: [bar_set_component/* TuiBarSetComponent */.I]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-charts/components/bar-set/index.ts


// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var projects_core = __webpack_require__(66187);
;// CONCATENATED MODULE: ./projects/addon-charts/components/bar-chart/bar-chart.module.ts






let TuiBarChartModule = /*#__PURE__*/(() => {
  class TuiBarChartModule {}

  TuiBarChartModule.ɵfac = function TuiBarChartModule_Factory(t) {
    return new (t || TuiBarChartModule)();
  };

  TuiBarChartModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: TuiBarChartModule
  });
  TuiBarChartModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, TuiBarSetModule, cdk/* TuiFocusableModule */.udY, projects_core/* TuiHintModule */.goS, cdk/* TuiMapperPipeModule */.I1h]]
  });
  return TuiBarChartModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(TuiBarChartModule, {
    declarations: [bar_chart_component/* TuiBarChartComponent */.g],
    imports: [common/* CommonModule */.ez, TuiBarSetModule, cdk/* TuiFocusableModule */.udY, projects_core/* TuiHintModule */.goS, cdk/* TuiMapperPipeModule */.I1h],
    exports: [bar_chart_component/* TuiBarChartComponent */.g]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-charts/components/bar-chart/index.ts


// EXTERNAL MODULE: ./projects/addon-charts/components/legend-item/legend-item.component.ts
var legend_item_component = __webpack_require__(57416);
;// CONCATENATED MODULE: ./projects/addon-charts/components/legend-item/legend-item.module.ts




let TuiLegendItemModule = /*#__PURE__*/(() => {
  class TuiLegendItemModule {}

  TuiLegendItemModule.ɵfac = function TuiLegendItemModule_Factory(t) {
    return new (t || TuiLegendItemModule)();
  };

  TuiLegendItemModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: TuiLegendItemModule
  });
  TuiLegendItemModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, projects_core/* TuiButtonModule */.fNO]]
  });
  return TuiLegendItemModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(TuiLegendItemModule, {
    declarations: [legend_item_component/* TuiLegendItemComponent */._],
    imports: [common/* CommonModule */.ez, projects_core/* TuiButtonModule */.fNO],
    exports: [legend_item_component/* TuiLegendItemComponent */._]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-charts/components/legend-item/index.ts


// EXTERNAL MODULE: ./projects/addon-charts/components/line-chart/index.ts + 1 modules
var line_chart = __webpack_require__(83233);
// EXTERNAL MODULE: ./projects/addon-charts/components/line-days-chart/line-days-chart.component.ts
var line_days_chart_component = __webpack_require__(87748);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./projects/addon-charts/components/line-days-chart/line-days-chart-hint.directive.ts
var line_days_chart_hint_directive = __webpack_require__(19288);
;// CONCATENATED MODULE: ./projects/addon-charts/components/line-days-chart/line-days-chart.module.ts







let TuiLineDaysChartModule = /*#__PURE__*/(() => {
  class TuiLineDaysChartModule {}

  TuiLineDaysChartModule.ɵfac = function TuiLineDaysChartModule_Factory(t) {
    return new (t || TuiLineDaysChartModule)();
  };

  TuiLineDaysChartModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: TuiLineDaysChartModule
  });
  TuiLineDaysChartModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, line_chart/* TuiLineChartModule */.I2, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, projects_core/* TuiHintModule */.goS]]
  });
  return TuiLineDaysChartModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(TuiLineDaysChartModule, {
    declarations: [line_days_chart_component/* TuiLineDaysChartComponent */.r, line_days_chart_hint_directive/* TuiLineDaysChartHintDirective */.w],
    imports: [common/* CommonModule */.ez, line_chart/* TuiLineChartModule */.I2, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, projects_core/* TuiHintModule */.goS],
    exports: [line_days_chart_component/* TuiLineDaysChartComponent */.r, line_days_chart_hint_directive/* TuiLineDaysChartHintDirective */.w]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-charts/components/line-days-chart/index.ts



// EXTERNAL MODULE: ./projects/addon-charts/components/pie-chart/pie-chart.component.ts
var pie_chart_component = __webpack_require__(65266);
// EXTERNAL MODULE: ./projects/addon-charts/components/pie-chart/pie-chart.directive.ts
var pie_chart_directive = __webpack_require__(51078);
;// CONCATENATED MODULE: ./projects/addon-charts/components/pie-chart/pie-chart.module.ts







let TuiPieChartModule = /*#__PURE__*/(() => {
  class TuiPieChartModule {}

  TuiPieChartModule.ɵfac = function TuiPieChartModule_Factory(t) {
    return new (t || TuiPieChartModule)();
  };

  TuiPieChartModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: TuiPieChartModule
  });
  TuiPieChartModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, cdk/* TuiRepeatTimesModule */.IhY, cdk/* TuiHoveredModule */.VE3, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, projects_core/* TuiHintModule */.goS]]
  });
  return TuiPieChartModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(TuiPieChartModule, {
    declarations: [pie_chart_component/* TuiPieChartComponent */.W, pie_chart_directive/* TuiPieChartDirective */.K],
    imports: [common/* CommonModule */.ez, cdk/* TuiRepeatTimesModule */.IhY, cdk/* TuiHoveredModule */.VE3, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, projects_core/* TuiHintModule */.goS],
    exports: [pie_chart_component/* TuiPieChartComponent */.W]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-charts/components/pie-chart/index.ts



// EXTERNAL MODULE: ./projects/addon-charts/components/ring-chart/ring-chart.component.ts
var ring_chart_component = __webpack_require__(57464);
;// CONCATENATED MODULE: ./projects/addon-charts/components/ring-chart/ring-chart.module.ts





let TuiRingChartModule = /*#__PURE__*/(() => {
  class TuiRingChartModule {}

  TuiRingChartModule.ɵfac = function TuiRingChartModule_Factory(t) {
    return new (t || TuiRingChartModule)();
  };

  TuiRingChartModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: TuiRingChartModule
  });
  TuiRingChartModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, TuiPieChartModule]]
  });
  return TuiRingChartModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(TuiRingChartModule, {
    declarations: [ring_chart_component/* TuiRingChartComponent */.i],
    imports: [common/* CommonModule */.ez, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, TuiPieChartModule],
    exports: [ring_chart_component/* TuiRingChartComponent */.i]
  });
})();
;// CONCATENATED MODULE: ./projects/addon-charts/components/ring-chart/index.ts


;// CONCATENATED MODULE: ./projects/addon-charts/components/index.ts










// EXTERNAL MODULE: ./projects/addon-charts/constants/line-handlers.ts
var line_handlers = __webpack_require__(42662);
;// CONCATENATED MODULE: ./projects/addon-charts/constants/index.ts

;// CONCATENATED MODULE: ./projects/addon-charts/index.ts





/***/ }),

/***/ 61395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "IP": () => (/* reexport */ tuiDescribeSector),
  "iP": () => (/* reexport */ tuiDraw)
});

// UNUSED EXPORTS: tuiControlPoint, tuiDrawCurve, tuiDrawLine, tuiLineAngle, tuiLineLength

// EXTERNAL MODULE: ./projects/cdk/index.ts + 84 modules
var cdk = __webpack_require__(40287);
;// CONCATENATED MODULE: ./projects/addon-charts/utils/describe-sector.ts

const EMPTY = `M 100 0 A 100 100 0 1 1 100 0 L 0 0`;
/**
 * Describes a normalized sector by angles. Normalized meaning it supposed to work with
 * SVG with viewBox="-1 -1 2 2" so that 0 coordinates in cartesian and polar match the same spot.
 * Everything is multiplied by 100 (including viewBox of SVG to host this) so IE properly
 * handles hover events.
 *
 * @param startAngle starting angle in degrees
 * @param endAngle ending angle in degrees
 */

function tuiDescribeSector(startAngle, endAngle) {
  const startRad = (0,cdk/* tuiToRadians */.VEV)(startAngle);
  const endRad = (0,cdk/* tuiToRadians */.VEV)(endAngle);
  const startX = Math.cos(startRad) * 100;
  const startY = Math.sin(startRad) * 100;
  const endX = Math.cos(endRad) * 100;
  const endY = Math.sin(endRad) * 100;
  const largeArcFlag = (0,cdk/* tuiToInt */.HWE)(endAngle - startAngle > 180);
  const result = [`M`, startX, startY, `A 100 100 0`, largeArcFlag, 1, endX, endY, `L 0 0`];
  return isNaN(endX) ? EMPTY : result.join(` `);
}
;// CONCATENATED MODULE: ./projects/addon-charts/utils/line-angle.ts
function tuiLineAngle(a, b) {
  const x = b[0] - a[0];
  const y = b[1] - a[1];
  return Math.atan2(y, x);
}
;// CONCATENATED MODULE: ./projects/addon-charts/utils/line-length.ts
function tuiLineLength(a, b) {
  const x = b[0] - a[0];
  const y = b[1] - a[1];
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
;// CONCATENATED MODULE: ./projects/addon-charts/utils/control-point.ts


function tuiControlPoint(current, previous, next, reverse = false, smoothing = 0.2) {
  const p = previous || current;
  const n = next || current;
  const angle = tuiLineAngle(p, n) + (reverse ? Math.PI : 0);
  const length = tuiLineLength(p, n) * smoothing;
  const x = current[0] + Math.cos(angle) * length;
  const y = current[1] + Math.sin(angle) * length;
  return [x, y];
}
;// CONCATENATED MODULE: ./projects/addon-charts/utils/draw-curve.ts

function tuiDrawCurve(array, index, smoothing) {
  const [cpsX, cpsY] = tuiControlPoint(array[index - 1], array[index - 2], array[index], false, smoothing);
  const [cpeX, cpeY] = tuiControlPoint(array[index], array[index - 1], array[index + 1], true, smoothing);
  return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${array[index][0]},${array[index][1]}`;
}
;// CONCATENATED MODULE: ./projects/addon-charts/utils/draw-line.ts
function tuiDrawLine(point) {
  return `L ${point}`;
}
;// CONCATENATED MODULE: ./projects/addon-charts/utils/draw.ts


const COEFFICIENT = 500;
function tuiDraw(array, index, smoothing) {
  return smoothing ? tuiDrawCurve(array, index, smoothing / COEFFICIENT) : tuiDrawLine([array[index][0], array[index][1]]);
}
;// CONCATENATED MODULE: ./projects/addon-charts/utils/index.ts








/***/ })

}]);