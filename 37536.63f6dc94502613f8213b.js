"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[37536],{

/***/ 37536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiRangeModule": () => (/* binding */ ExampleTuiRangeModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/range/range.component.ts
var range_component = __webpack_require__(48740);
// EXTERNAL MODULE: ./projects/kit/components/range/range-change.directive.ts
var range_change_directive = __webpack_require__(87231);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/range/examples/1/index.ts





let TuiRangeExample1 = /*#__PURE__*/(() => {
  class TuiRangeExample1 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI([4, 6]);
    }

  }

  TuiRangeExample1.ɵfac = function TuiRangeExample1_Factory(t) {
    return new (t || TuiRangeExample1)();
  };

  TuiRangeExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRangeExample1,
    selectors: [["tui-range-example-1"]],
    decls: 1,
    vars: 3,
    consts: [[3, "formControl", "max", "step"]],
    template: function TuiRangeExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-range", 0);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.control)("max", 10)("step", 1);
      }
    },
    directives: [range_component/* TuiRangeComponent */.U, range_change_directive/* TuiRangeChangeDirective */.H, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiRangeExample1;
})();
// EXTERNAL MODULE: ./projects/kit/components/island/island.component.ts
var island_component = __webpack_require__(70329);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/range/examples/2/index.ts







let TuiRangeExample2 = /*#__PURE__*/(() => {
  class TuiRangeExample2 {
    constructor() {
      this.smallRangeValue = [0, 40];
      this.bigRangeControl = new fesm2015_forms/* FormControl */.NI([40, 60]);
    }

  }

  TuiRangeExample2.ɵfac = function TuiRangeExample2_Factory(t) {
    return new (t || TuiRangeExample2)();
  };

  TuiRangeExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRangeExample2,
    selectors: [["tui-range-example-2"]],
    decls: 20,
    vars: 10,
    consts: [[1, "island"], [1, "tui-island__title"], ["id", "s-size-range", "size", "s", 1, "range", 3, "max", "ngModel", "ngModelChange"], [1, "tui-island__paragraph"], ["for", "s-size-range"], ["id", "m-size-range", "size", "m", 1, "range", 3, "formControl", "max"], ["for", "m-size-range"]],
    template: function TuiRangeExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-island", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "h3", 1);
        fesm2015_core/* ɵɵtext */._uU(2, "S-size");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-range", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiRangeExample2_Template_tui_range_ngModelChange_3_listener($event) {
          return ctx.smallRangeValue = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "p", 3);
        fesm2015_core/* ɵɵtext */._uU(5, " Control value: ");
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "output", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "code");
        fesm2015_core/* ɵɵtext */._uU(8);
        fesm2015_core/* ɵɵpipe */.ALo(9, "json");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-island", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "h3", 1);
        fesm2015_core/* ɵɵtext */._uU(12, "M-size");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(13, "tui-range", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "p", 3);
        fesm2015_core/* ɵɵtext */._uU(15, " Control value: ");
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "output", 6);
        fesm2015_core/* ɵɵelementStart */.TgZ(17, "code");
        fesm2015_core/* ɵɵtext */._uU(18);
        fesm2015_core/* ɵɵpipe */.ALo(19, "json");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("max", 100)("ngModel", ctx.smallRangeValue);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(fesm2015_core/* ɵɵpipeBind1 */.lcZ(9, 6, ctx.smallRangeValue));
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.bigRangeControl)("max", 100);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(fesm2015_core/* ɵɵpipeBind1 */.lcZ(19, 8, ctx.bigRangeControl.value));
      }
    },
    directives: [island_component/* TuiIslandComponent */.h, range_component/* TuiRangeComponent */.U, range_change_directive/* TuiRangeChangeDirective */.H, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, fesm2015_forms/* FormControlDirective */.oH],
    pipes: [common/* JsonPipe */.Ts],
    styles: ["[_nghost-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;grid-row-gap:1rem;row-gap:1rem}.island[_ngcontent-%COMP%]{box-sizing:border-box;width:49%}@media screen and (max-width: 47.9625em){.island[_ngcontent-%COMP%]{width:100%}}.range[_ngcontent-%COMP%]{margin:2rem 0}"],
    changeDetection: 0
  });
  return TuiRangeExample2;
})();
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/range/examples/3/index.ts







function TuiRangeExample3_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵpipe */.ALo(2, "i18nPlural");
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const label_r3 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r4 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", fesm2015_core/* ɵɵpipeBind2 */.xi3(2, 1, label_r3, ctx_r4.pluralMap), " ");
  }
}

function TuiRangeExample3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiRangeExample3_div_2_ng_container_1_Template, 3, 4, "ng-container", 6);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const label_r3 = ctx.$implicit;
    fesm2015_core/* ɵɵnextContext */.oxw();

    const _r1 = fesm2015_core/* ɵɵreference */.MAs(4);

    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", label_r3 !== 750)("ngIfElse", _r1);
  }
}

function TuiRangeExample3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "div");
    fesm2015_core/* ɵɵtext */._uU(2, "3/4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

let TuiRangeExample3 = /*#__PURE__*/(() => {
  class TuiRangeExample3 {
    constructor() {
      this.min = 0;
      this.max = 1000;
      this.step = 250;
      this.segments = 4;
      this.labels = [...new Array(this.segments + 1).keys()].map(i => this.min + this.step * i);
      this.value = [0, 250]; // https://angular.io/api/common/I18nPluralPipe

      this.pluralMap = {
        '=0': `0`,
        '=1': `# item`,
        '=1000': `MAX`,
        other: `# items`
      };
    }

  }

  TuiRangeExample3.ɵfac = function TuiRangeExample3_Factory(t) {
    return new (t || TuiRangeExample3)();
  };

  TuiRangeExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRangeExample3,
    selectors: [["tui-range-example-3"]],
    decls: 11,
    vars: 9,
    consts: [["id", "range-with-segments", "size", "m", 1, "range", 3, "min", "max", "step", "segments", "ngModel", "ngModelChange"], [1, "ticks-labels"], [4, "ngFor", "ngForOf"], ["labelWithIcon", ""], [1, "tui-space_top-12", "tui-space_bottom-0"], ["for", "range-with-segments"], [4, "ngIf", "ngIfElse"], ["src", "tuiIconArrowUp"]],
    template: function TuiRangeExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-range", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiRangeExample3_Template_tui_range_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiRangeExample3_div_2_Template, 2, 2, "div", 2);
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiRangeExample3_ng_template_3_Template, 3, 0, "ng-template", null, 3, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "p", 4);
        fesm2015_core/* ɵɵtext */._uU(6, " Control value: ");
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "output", 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "code");
        fesm2015_core/* ɵɵtext */._uU(9);
        fesm2015_core/* ɵɵpipe */.ALo(10, "json");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("min", ctx.min)("max", ctx.max)("step", ctx.step)("segments", ctx.segments)("ngModel", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.labels);
        fesm2015_core/* ɵɵadvance */.xp6(7);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(fesm2015_core/* ɵɵpipeBind1 */.lcZ(10, 7, ctx.value));
      }
    },
    directives: [range_component/* TuiRangeComponent */.U, range_change_directive/* TuiRangeChangeDirective */.H, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, common/* NgForOf */.sg, common/* NgIf */.O5, svg_component/* TuiSvgComponent */.P],
    pipes: [common/* JsonPipe */.Ts, common/* I18nPluralPipe */.Gx],
    styles: [".range[_ngcontent-%COMP%]{z-index:1}.range[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:-.5rem;bottom:-1.5rem;width:100%}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],
    changeDetection: 0
  });
  return TuiRangeExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/range/examples/4/index.ts






function TuiRangeExample4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "span");
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const label_r1 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(label_r1);
  }
}

let TuiRangeExample4 = /*#__PURE__*/(() => {
  class TuiRangeExample4 {
    constructor() {
      this.ticksLabels = [`0`, `10K`, `100K`, `500k`, `1000K`];
      this.segments = this.ticksLabels.length - 1; // 12.5% (of total distance) per step

      this.stepPercentage = 100 / (2 * this.segments);
      this.value = [0, 100000];
      this.keySteps = [// [percent, value]
      [0, 0], [25, 10000], [50, 100000], [75, 500000], [100, 1000000]];
    }

  }

  TuiRangeExample4.ɵfac = function TuiRangeExample4_Factory(t) {
    return new (t || TuiRangeExample4)();
  };

  TuiRangeExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiRangeExample4,
    selectors: [["tui-range-example-4"]],
    decls: 9,
    vars: 8,
    consts: [["id", "range-with-key-steps", "size", "m", 1, "range", 3, "step", "keySteps", "segments", "ngModel", "ngModelChange"], [1, "ticks-labels"], [4, "ngFor", "ngForOf"], [1, "tui-space_top-12", "tui-space_bottom-0"], ["for", "range-with-key-steps"]],
    template: function TuiRangeExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-range", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiRangeExample4_Template_tui_range_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiRangeExample4_span_2_Template, 2, 1, "span", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "p", 3);
        fesm2015_core/* ɵɵtext */._uU(4, " Control value: ");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "output", 4);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "code");
        fesm2015_core/* ɵɵtext */._uU(7);
        fesm2015_core/* ɵɵpipe */.ALo(8, "json");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("step", ctx.stepPercentage)("keySteps", ctx.keySteps)("segments", ctx.segments)("ngModel", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.ticksLabels);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(fesm2015_core/* ɵɵpipeBind1 */.lcZ(8, 6, ctx.value));
      }
    },
    directives: [range_component/* TuiRangeComponent */.U, range_change_directive/* TuiRangeChangeDirective */.H, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, common/* NgForOf */.sg],
    pipes: [common/* JsonPipe */.Ts],
    styles: [".range[_ngcontent-%COMP%]{z-index:1}.range[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:-.5rem;bottom:-1.5rem;width:100%}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],
    changeDetection: 0
  });
  return TuiRangeExample4;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/range/range.component.ts


















function ExampleTuiRangeComponent_ng_template_1_Template(rf, ctx) {
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
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-notification", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "p", 7);
    fesm2015_core/* ɵɵi18nStart */.tHW(9, 8);
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(12, 9);
    fesm2015_core/* ɵɵelement */._UZ(13, "code");
    fesm2015_core/* ɵɵelement */._UZ(14, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-range-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelement */._UZ(17, "tui-range-example-4");
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
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
  }
}

function ExampleTuiRangeComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-range", 19);
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("min", ctx_r3.min)("max", ctx_r3.max)("step", ctx_r3.step)("segments", ctx_r3.segments)("keySteps", ctx_r3.keySteps)("size", ctx_r3.size);
  }
}

function ExampleTuiRangeComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 20);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiRangeComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 21);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiRangeComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 22);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiRangeComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 23);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiRangeComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 24);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiRangeComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 25);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiRangeComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 26);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiRangeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 11);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiRangeComponent_ng_template_2_ng_template_1_Template, 1, 7, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiRangeComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiRangeComponent_ng_template_2_ng_template_4_Template, 3, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiRangeComponent_ng_template_2_ng_template_5_Template, 3, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiRangeComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.step = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiRangeComponent_ng_template_2_ng_template_7_Template, 3, 0, "ng-template", 16);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiRangeComponent_ng_template_2_ng_template_8_Template, 3, 0, "ng-template", 17);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.segments = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiRangeComponent_ng_template_2_ng_template_9_Template, 3, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.keySteps = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.min);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.step);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.segments);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.keyStepsVariants)("documentationPropertyValue", ctx_r1.keySteps);
  }
}

function ExampleTuiRangeComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 27);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵtext */._uU(2, " Import an Angular module for forms and ");
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "code");
    fesm2015_core/* ɵɵtext */._uU(4, "TuiRangeModule");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(5, " in the same module where you want to use our component: ");
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-doc-code", 28);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(9, 29);
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵelement */._UZ(11, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-doc-code", 30);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "p");
    fesm2015_core/* ɵɵi18n */.SDv(15, 31);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(16, "tui-doc-code", 32);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleForm);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleTuiRangeComponent = /*#__PURE__*/(() => {
  class ExampleTuiRangeComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 92677).then(__webpack_require__.t.bind(__webpack_require__, 92677, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 38951).then(__webpack_require__.t.bind(__webpack_require__, 38951, 17));
      this.exampleForm = __webpack_require__.e(/* import() */ 92136).then(__webpack_require__.t.bind(__webpack_require__, 92136, 17));
      this.example1 = {
        HTML: __webpack_require__.e(/* import() */ 45417).then(__webpack_require__.t.bind(__webpack_require__, 45417, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 76697).then(__webpack_require__.t.bind(__webpack_require__, 76697, 17))
      };
      this.example2 = {
        HTML: __webpack_require__.e(/* import() */ 25090).then(__webpack_require__.t.bind(__webpack_require__, 25090, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 34100).then(__webpack_require__.t.bind(__webpack_require__, 34100, 17)),
        LESS: __webpack_require__.e(/* import() */ 96585).then(__webpack_require__.t.bind(__webpack_require__, 96585, 17))
      };
      this.example3 = {
        HTML: __webpack_require__.e(/* import() */ 82509).then(__webpack_require__.t.bind(__webpack_require__, 82509, 17)),
        LESS: __webpack_require__.e(/* import() */ 91770).then(__webpack_require__.t.bind(__webpack_require__, 91770, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 81679).then(__webpack_require__.t.bind(__webpack_require__, 81679, 17))
      };
      this.example4 = {
        HTML: __webpack_require__.e(/* import() */ 85407).then(__webpack_require__.t.bind(__webpack_require__, 85407, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 7182).then(__webpack_require__.t.bind(__webpack_require__, 7182, 17)),
        LESS: __webpack_require__.e(/* import() */ 67607).then(__webpack_require__.t.bind(__webpack_require__, 67607, 17))
      };
      this.control = new fesm2015_forms/* FormControl */.NI([0, 0]);
      this.sizeVariants = [`s`, `m`];
      this.size = this.sizeVariants[1];
      this.min = 0;
      this.max = 100;
      this.step = 1;
      this.segments = 1;
      this.keyStepsVariants = [[[0, 0], [50, 1000], [100, 10000]]];
      this.keySteps = null;
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

  ExampleTuiRangeComponent.ɵfac = function ExampleTuiRangeComponent_Factory(t) {
    return new (t || ExampleTuiRangeComponent)();
  };

  ExampleTuiRangeComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiRangeComponent,
    selectors: [["example-range"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2601219398064138169$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__1 = goog.getMsg("Component allows to choose a part of a range");
        i18n_0 = MSG_EXTERNAL_2601219398064138169$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟39507a5d0ef5f798ed73885e520e5ac975a9e93f␟2601219398064138169:Component allows to choose a part of a range`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__5 = goog.getMsg("Sizes");
        i18n_4 = MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7433618922144942348$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__7 = goog.getMsg("Visual segments + labels for ticks");
        i18n_6 = MSG_EXTERNAL_7433618922144942348$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟da3ee626899400b20e2eec11b3ddadea8a3ddcc5␟7433618922144942348:Visual segments + labels for ticks`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7222770680801212686$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__9 = goog.getMsg(" Use mixin {$startTagCode}tui-slider-ticks-labels{$closeTagCode} to arrange ticks' labels (it places them strictly below ticks). ", {
          "startTagCode": "\uFFFD#10\uFFFD",
          "closeTagCode": "\uFFFD/#10\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_7222770680801212686$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟b71cff54548c311b9382985ce173ddbd05b1455a␟7222770680801212686: Use mixin ${"\uFFFD#10\uFFFD"}:START_TAG_CODE:tui-slider-ticks-labels${"\uFFFD/#10\uFFFD"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7490709384902699339$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__11 = goog.getMsg(" The mixin accepts only a single argument \u2013 size of the slider ( {$startTagCode}m{$closeTagCode} or {$startTagCode}s{$closeTagCode} ). ", {
          "startTagCode": "[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]",
          "closeTagCode": "[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]"
        });
        i18n_10 = MSG_EXTERNAL_7490709384902699339$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟b43e37a55c51eed01f3c7b31c7fb8c20e9ea09ce␟7490709384902699339: The mixin accepts only a single argument – size of the slider ( ${"[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:m${"[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE: or ${"[\uFFFD#13\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:s${"[\uFFFD/#13\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE: ). `;
      }

      i18n_10 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_10);
      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8285530445387044058$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__13 = goog.getMsg("KeySteps");
        i18n_12 = MSG_EXTERNAL_8285530445387044058$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟1c2f048f4281e4ee3db216fc44e19c2c36fb4478␟8285530445387044058:KeySteps`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___15 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5635388352294250683$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___17 = goog.getMsg(" The lowest value in the range of permitted values. {$startParagraph} The default is {$startTagCode}0{$closeTagCode} . {$closeParagraph}", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_5635388352294250683$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟b8f13e24037b8e37136220f2fcfa67de66368405␟5635388352294250683: The lowest value in the range of permitted values. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: The default is ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:0${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: . ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3066049154007365132$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___19 = goog.getMsg(" The greatest value in the range of permitted values. {$startParagraph} The default is {$startTagCode}100{$closeTagCode} . {$closeParagraph}", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_3066049154007365132$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟bac956ac180d4051388e367a22fb96a00f688ca3␟3066049154007365132: The greatest value in the range of permitted values. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: The default is ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:100${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: . ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7112676481597050736$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___21 = goog.getMsg(" A number that specifies the granularity that the value must adhere. {$startParagraph} The default is {$startTagCode}1{$closeTagCode} . {$closeParagraph}", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_7112676481597050736$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟519baa2ec87d2212fe4db94e72d31abddb37bed2␟7112676481597050736: A number that specifies the granularity that the value must adhere. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: The default is ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:1${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: . ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7523554682254599073$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___23 = goog.getMsg(" Size {$startParagraph} The default is {$startTagCode}m{$closeTagCode} . {$closeParagraph}", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD"
        });
        i18n_22 = MSG_EXTERNAL_7523554682254599073$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟3022be8ed39aab591dcea6f66fe5d8e1fc16b760␟7523554682254599073: Size ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: The default is ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:m${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: . ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5983131530842327313$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___25 = goog.getMsg(" A number of visual segments. {$startParagraph} The default is {$startTagCode}1{$closeTagCode} (no ticks). {$closeParagraph}", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD"
        });
        i18n_24 = MSG_EXTERNAL_5983131530842327313$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟e0d12b22b6fb62f9d55529a92d17732756812f37␟5983131530842327313: A number of visual segments. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: The default is ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:1${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: (no ticks). ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4663723342255442280$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___27 = goog.getMsg(" Anchor points of non-uniform format between value and position. {$startParagraph} The default is {$startTagCode}null{$closeTagCode} . {$closeParagraph}", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD"
        });
        i18n_26 = MSG_EXTERNAL_4663723342255442280$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟7eea5e25c7c779de0c243e63c903a01c765cee78␟4663723342255442280: Anchor points of non-uniform format between value and position. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: The default is ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:null${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: . ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__29 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]",
          "closeTagCode": "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]"
        });
        i18n_28 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__29;
      } else {
        i18n_28 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_28 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_28);
      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__31 = goog.getMsg("Add to the template:");
        i18n_30 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_RANGE_RANGE_COMPONENT_TS__31;
      } else {
        i18n_30 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Range", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "sizes", "heading", i18n_4, 3, "content"], ["id", "segments", "heading", i18n_6, 3, "content"], [1, "tui-space_bottom-8"], [1, "tui-space_top-0"], i18n_8, i18n_10, ["id", "key-steps", "heading", i18n_12, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "step", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "segments", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "keySteps", "documentationPropertyMode", "input", "documentationPropertyType", "TuiKeySteps | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formControl", "min", "max", "step", "segments", "keySteps", "size"], i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], i18n_28, ["filename", "myComponent.component.ts", 3, "code"], i18n_30, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiRangeComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiRangeComponent_ng_template_1_Template, 18, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiRangeComponent_ng_template_2_Template, 10, 10, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiRangeComponent_ng_template_3_Template, 17, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiRangeExample1, TuiRangeExample2, notification_component/* TuiNotificationComponent */.L, TuiRangeExample3, TuiRangeExample4, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, range_component/* TuiRangeComponent */.U, range_change_directive/* TuiRangeChangeDirective */.H, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiRangeComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/range/range.module.ts













let ExampleTuiRangeModule = /*#__PURE__*/(() => {
  class ExampleTuiRangeModule {}

  ExampleTuiRangeModule.ɵfac = function ExampleTuiRangeModule_Factory(t) {
    return new (t || ExampleTuiRangeModule)();
  };

  ExampleTuiRangeModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiRangeModule
  });
  ExampleTuiRangeModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[kit.TuiRadioListModule, kit.TuiRangeModule, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, kit.TuiIslandModule, core.TuiNotificationModule, core.TuiSvgModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiRangeComponent))]]
  });
  return ExampleTuiRangeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiRangeModule, {
    declarations: [ExampleTuiRangeComponent, TuiRangeExample1, TuiRangeExample2, TuiRangeExample3, TuiRangeExample4],
    imports: [kit.TuiRadioListModule, kit.TuiRangeModule, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, kit.TuiIslandModule, core.TuiNotificationModule, core.TuiSvgModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiRangeComponent]
  });
})();

/***/ })

}]);