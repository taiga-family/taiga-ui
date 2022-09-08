"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[26555],{

/***/ 26555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputRangeModule": () => (/* binding */ ExampleTuiInputRangeModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-range/input-range.component.ts
var input_range_component = __webpack_require__(71290);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-range/examples/1/index.ts






let TuiInputRangeExample1 = /*#__PURE__*/(() => {
  class TuiInputRangeExample1 {
    constructor() {
      this.min = 0;
      this.max = 20;
      this.sliderStep = 1;
      this.steps = (this.max - this.min) / this.sliderStep;
      this.quantum = 0.00001;
      this.control = new fesm2015_forms/* FormControl */.NI([3.14159, 15]);
    }

  }

  TuiInputRangeExample1.ɵfac = function TuiInputRangeExample1_Factory(t) {
    return new (t || TuiInputRangeExample1)();
  };

  TuiInputRangeExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputRangeExample1,
    selectors: [["tui-input-range-example-1"]],
    decls: 1,
    vars: 7,
    consts: [[3, "min", "max", "quantum", "steps", "formControl", "tuiTextfieldSize", "tuiTextfieldLabelOutside"]],
    template: function TuiInputRangeExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-input-range", 0);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("min", ctx.min)("max", ctx.max)("quantum", ctx.quantum)("steps", ctx.steps)("formControl", ctx.control)("tuiTextfieldSize", "m")("tuiTextfieldLabelOutside", true);
      }
    },
    directives: [input_range_component/* TuiInputRangeComponent */.E, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x],
    styles: ["tui-input-range[_ngcontent-%COMP%]{max-width:30rem}"],
    changeDetection: 0
  });
  return TuiInputRangeExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-range/examples/2/index.ts






let TuiInputRangeExample2 = /*#__PURE__*/(() => {
  class TuiInputRangeExample2 {
    constructor() {
      this.max = 50000001;
      this.min = 5001;
      this.control = new fesm2015_forms/* FormControl */.NI([this.min, this.max / 2]);
    }

  }

  TuiInputRangeExample2.ɵfac = function TuiInputRangeExample2_Factory(t) {
    return new (t || TuiInputRangeExample2)();
  };

  TuiInputRangeExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputRangeExample2,
    selectors: [["tui-input-range-example-2"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: core/* TUI_NUMBER_FORMAT */.HOy,
      useValue: {
        decimalSeparator: `.`,
        thousandSeparator: `,`,
        zeroPadding: true
      }
    }])],
    decls: 1,
    vars: 4,
    consts: [[3, "min", "max", "formControl", "tuiTextfieldLabelOutside"]],
    template: function TuiInputRangeExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-input-range", 0);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("min", ctx.min)("max", ctx.max)("formControl", ctx.control)("tuiTextfieldLabelOutside", true);
      }
    },
    directives: [input_range_component/* TuiInputRangeComponent */.E, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x],
    styles: ["tui-input-range[_ngcontent-%COMP%]{max-width:30rem}"],
    changeDetection: 0
  });
  return TuiInputRangeExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-range/examples/3/index.ts






function TuiInputRangeExample3_ng_template_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "span");
    fesm2015_core/* ɵɵtext */._uU(1, "Today");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiInputRangeExample3_ng_template_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "span");
    fesm2015_core/* ɵɵtext */._uU(1, "Tomorrow");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiInputRangeExample3_ng_template_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "span");
    fesm2015_core/* ɵɵtext */._uU(1, "In a week");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function TuiInputRangeExample3_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "span");
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵpipe */.ALo(2, "i18nPlural");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const value_r2 = fesm2015_core/* ɵɵnextContext */.oxw().$implicit;
    const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate2 */.AsE("", value_r2, "\u00A0", fesm2015_core/* ɵɵpipeBind2 */.xi3(2, 2, value_r2, ctx_r6.pluralize), "");
  }
}

function TuiInputRangeExample3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0, 2);
    fesm2015_core/* ɵɵtemplate */.YNc(1, TuiInputRangeExample3_ng_template_2_span_1_Template, 2, 0, "span", 3);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiInputRangeExample3_ng_template_2_span_2_Template, 2, 0, "span", 3);
    fesm2015_core/* ɵɵtemplate */.YNc(3, TuiInputRangeExample3_ng_template_2_span_3_Template, 2, 0, "span", 3);
    fesm2015_core/* ɵɵtemplate */.YNc(4, TuiInputRangeExample3_ng_template_2_span_4_Template, 3, 5, "span", 4);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const value_r2 = ctx.$implicit;
    fesm2015_core/* ɵɵproperty */.Q6J("ngSwitch", value_r2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngSwitchCase", 0);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngSwitchCase", 1);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngSwitchCase", 7);
  }
}

let TuiInputRangeExample3 = /*#__PURE__*/(() => {
  class TuiInputRangeExample3 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI([0, 7]); // See https://angular.io/api/common/I18nPluralPipe

      this.pluralize = {
        '=0': `days later`,
        '=1': `day later`,
        other: `days later`
      };
    }

  }

  TuiInputRangeExample3.ɵfac = function TuiInputRangeExample3_Factory(t) {
    return new (t || TuiInputRangeExample3)();
  };

  TuiInputRangeExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputRangeExample3,
    selectors: [["tui-input-range-example-3"]],
    decls: 4,
    vars: 6,
    consts: [[3, "min", "max", "leftValueContent", "rightValueContent", "pluralize", "formControl"], ["valueContent", ""], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"]],
    template: function TuiInputRangeExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-range", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Desired departure day\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiInputRangeExample3_ng_template_2_Template, 5, 4, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(3);

        fesm2015_core/* ɵɵproperty */.Q6J("min", 0)("max", 10)("leftValueContent", _r0)("rightValueContent", _r0)("pluralize", ctx.pluralize)("formControl", ctx.control);
      }
    },
    directives: [input_range_component/* TuiInputRangeComponent */.E, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, common/* NgSwitch */.RF, common/* NgSwitchCase */.n9, common/* NgSwitchDefault */.ED],
    pipes: [common/* I18nPluralPipe */.Gx],
    styles: ["tui-input-range[_ngcontent-%COMP%]{max-width:30rem}"],
    changeDetection: 0
  });
  return TuiInputRangeExample3;
})();
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-range/examples/4/index.ts





let TuiInputRangeExample4 = /*#__PURE__*/(() => {
  class TuiInputRangeExample4 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI([20, 40]); // See https://angular.io/api/common/I18nPluralPipe

      this.pluralize = {
        other: `%`
      };
    }

  }

  TuiInputRangeExample4.ɵfac = function TuiInputRangeExample4_Factory(t) {
    return new (t || TuiInputRangeExample4)();
  };

  TuiInputRangeExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputRangeExample4,
    selectors: [["tui-input-range-example-4"]],
    decls: 16,
    vars: 6,
    consts: [[1, "wrapper"], [3, "min", "max", "segments", "steps", "pluralize", "formControl"], [1, "ticks-labels"], ["src", "tuiIconSoundOff"], ["src", "tuiIconSound"]],
    template: function TuiInputRangeExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-range", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Select volume range ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "span");
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-svg", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "span");
        fesm2015_core/* ɵɵtext */._uU(7, "20%");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "span");
        fesm2015_core/* ɵɵtext */._uU(9, "40%");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "span");
        fesm2015_core/* ɵɵtext */._uU(11, "60%");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "span");
        fesm2015_core/* ɵɵtext */._uU(13, "80%");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "span");
        fesm2015_core/* ɵɵelement */._UZ(15, "tui-svg", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("min", 0)("max", 100)("segments", 5)("steps", 5)("pluralize", ctx.pluralize)("formControl", ctx.control);
      }
    },
    directives: [input_range_component/* TuiInputRangeComponent */.E, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, svg_component/* TuiSvgComponent */.P],
    styles: [".wrapper[_ngcontent-%COMP%]{max-width:30rem}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.25rem .5rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02);align-items:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],
    changeDetection: 0
  });
  return TuiInputRangeExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-range/examples/5/index.ts






function TuiInputRangeExample5_span_4_Template(rf, ctx) {
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

let TuiInputRangeExample5 = /*#__PURE__*/(() => {
  class TuiInputRangeExample5 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI([100000, 500000]);
      this.max = 1000000;
      this.min = 0;
      this.totalSteps = 100;
      this.ticksLabels = [`0`, `10K`, `100K`, `500k`, `1000K`];
      this.segments = this.ticksLabels.length - 1;
      this.keySteps = [// [percent, value]
      [0, this.min], [25, 10000], [50, 100000], [75, 500000], [100, this.max]];
    }

  }

  TuiInputRangeExample5.ɵfac = function TuiInputRangeExample5_Factory(t) {
    return new (t || TuiInputRangeExample5)();
  };

  TuiInputRangeExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputRangeExample5,
    selectors: [["tui-input-range-example-5"]],
    decls: 11,
    vars: 10,
    consts: [[1, "wrapper"], ["id", "input-range-with-key-steps", 3, "min", "max", "steps", "keySteps", "segments", "formControl"], [1, "ticks-labels"], [4, "ngFor", "ngForOf"], [1, "tui-space_top-12", "tui-space_bottom-0"], ["for", "input-range-with-key-steps"]],
    template: function TuiInputRangeExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-range", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Not linear growing sliders ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 2);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiInputRangeExample5_span_4_Template, 2, 1, "span", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
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
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("min", ctx.min)("max", ctx.max)("steps", ctx.totalSteps)("keySteps", ctx.keySteps)("segments", ctx.segments)("formControl", ctx.control);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.ticksLabels);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(fesm2015_core/* ɵɵpipeBind1 */.lcZ(10, 8, ctx.control.value));
      }
    },
    directives: [input_range_component/* TuiInputRangeComponent */.E, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, common/* NgForOf */.sg],
    pipes: [common/* JsonPipe */.Ts],
    styles: [".wrapper[_ngcontent-%COMP%]{max-width:30rem}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.25rem .5rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],
    changeDetection: 0
  });
  return TuiInputRangeExample5;
})();
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/control.ts
var control = __webpack_require__(82880);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/abstract-props-accessor.ts
var abstract_props_accessor = __webpack_require__(98204);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-range/input-range.component.ts

























function ExampleTuiInputRangeComponent_ng_template_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵtext */._uU(1, " Look into this example to understand difference between input-props ");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "code");
    fesm2015_core/* ɵɵtext */._uU(3, "[steps]");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(4, " and ");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "code");
    fesm2015_core/* ɵɵtext */._uU(6, "[quantum]");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(7, " . ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiInputRangeComponent_ng_template_1_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 17);
    fesm2015_core/* ɵɵelement */._UZ(2, "a", 4);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiInputRangeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 3);
    fesm2015_core/* ɵɵelement */._UZ(4, "a", 4);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 5);
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputRangeComponent_ng_template_1_ng_template_6_Template, 8, 0, "ng-template", null, 6, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "p", 7);
    fesm2015_core/* ɵɵtext */._uU(9, " Slider's step changes value by ");
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "code");
    fesm2015_core/* ɵɵtext */._uU(11, "1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(12, " . ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
    fesm2015_core/* ɵɵtext */._uU(14, " But text inputs allow to type decimal number which is multiple of ");
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "code");
    fesm2015_core/* ɵɵtext */._uU(16, "0.00001");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(17, " . ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(18, "tui-input-range-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "tui-doc-example", 8);
    fesm2015_core/* ɵɵtemplate */.YNc(20, ExampleTuiInputRangeComponent_ng_template_1_ng_template_20_Template, 3, 0, "ng-template", null, 9, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelement */._UZ(22, "tui-input-range-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(23, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelement */._UZ(24, "tui-input-range-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(25, "tui-doc-example", 11);
    fesm2015_core/* ɵɵelementStart */.TgZ(26, "tui-notification", 12);
    fesm2015_core/* ɵɵi18nStart */.tHW(27, 13);
    fesm2015_core/* ɵɵelement */._UZ(28, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(29, "tui-input-range-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(30, "tui-doc-example", 14);
    fesm2015_core/* ɵɵelementStart */.TgZ(31, "dl", 15);
    fesm2015_core/* ɵɵi18nStart */.tHW(32, 16);
    fesm2015_core/* ɵɵelementStart */.TgZ(33, "dt");
    fesm2015_core/* ɵɵelement */._UZ(34, "strong");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(35, "dd");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(36, "tui-input-range-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r3 = fesm2015_core/* ɵɵreference */.MAs(7);

    const _r5 = fesm2015_core/* ɵɵreference */.MAs(21);

    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1)("description", _r3);
    fesm2015_core/* ɵɵadvance */.xp6(14);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2)("description", _r5);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
  }
}

function ExampleTuiInputRangeComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-range", 35);
    fesm2015_core/* ɵɵtext */._uU(1, " Just a very long label. Don't afraid it does not overflow the wrapper, the label is just cut off with ellipsis when it does not fit the wrapper. ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r7.control)("min", ctx_r7.min)("max", ctx_r7.max)("segments", ctx_r7.segments)("keySteps", ctx_r7.keySteps)("pluralize", ctx_r7.pluralize)("steps", ctx_r7.steps)("quantum", ctx_r7.quantum)("leftValueContent", ctx_r7.leftValueContent)("rightValueContent", ctx_r7.rightValueContent)("tuiTextfieldLabelOutside", ctx_r7.labelOutside)("tuiTextfieldSize", ctx_r7.size)("readOnly", ctx_r7.readOnly);
  }
}

function ExampleTuiInputRangeComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 36);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputRangeComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 37);
  }
}

function ExampleTuiInputRangeComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 38);
  }
}

function ExampleTuiInputRangeComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 39);
  }
}

function ExampleTuiInputRangeComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 40);
  }
}

function ExampleTuiInputRangeComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 41);
  }
}

function ExampleTuiInputRangeComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 42);
  }
}

function ExampleTuiInputRangeComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 43);
  }
}

function ExampleTuiInputRangeComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 44);
  }
}

function ExampleTuiInputRangeComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 45);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵelement */._UZ(2, "a", 46);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputRangeComponent_ng_template_2_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 47);
  }
}

function ExampleTuiInputRangeComponent_ng_template_2_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 48);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "a", 49);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputRangeComponent_ng_template_2_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 50);
  }
}

function ExampleTuiInputRangeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 18);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputRangeComponent_ng_template_2_ng_template_1_Template, 2, 13, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputRangeComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r21.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputRangeComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r23 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r23.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiInputRangeComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 21);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r24 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r24.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputRangeComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 22);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r25 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r25.quantum = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiInputRangeComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 23);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r26 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r26.steps = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiInputRangeComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 24);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r27 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r27.segments = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiInputRangeComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 25);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r28 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r28.keySteps = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiInputRangeComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 26);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r29 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r29.leftValueContent = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiInputRangeComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 27);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r30 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r30.rightValueContent = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiInputRangeComponent_ng_template_2_ng_template_12_Template, 3, 0, "ng-template", 28);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r31 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r31.pluralize = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(13, ExampleTuiInputRangeComponent_ng_template_2_ng_template_13_Template, 1, 0, "ng-template", 29);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_13_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r32 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r32.readOnly = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "h6", 30);
    fesm2015_core/* ɵɵi18nStart */.tHW(15, 31);
    fesm2015_core/* ɵɵelement */._UZ(16, "a", 32);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "p");
    fesm2015_core/* ɵɵtext */._uU(18, " Requires you to import ");
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "code");
    fesm2015_core/* ɵɵtext */._uU(20, "TuiTextfieldControllerModule");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(21, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(22, ExampleTuiInputRangeComponent_ng_template_2_ng_template_22_Template, 3, 0, "ng-template", 33);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_22_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r33 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r33.labelOutside = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(23, ExampleTuiInputRangeComponent_ng_template_2_ng_template_23_Template, 1, 0, "ng-template", 34);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputRangeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_23_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r22);
      const ctx_r34 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r34.size = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.minVariants)("documentationPropertyValue", ctx_r1.min);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxVariants)("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.quantumVariants)("documentationPropertyValue", ctx_r1.quantum);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.steps);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.segments);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.keyStepsVariants)("documentationPropertyValue", ctx_r1.keySteps);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueContentVariants)("documentationPropertyValue", ctx_r1.leftValueContent);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueContentVariants)("documentationPropertyValue", ctx_r1.rightValueContent);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.pluralizeVariants)("documentationPropertyValue", ctx_r1.pluralize);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.readOnly);
    fesm2015_core/* ɵɵadvance */.xp6(9);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.labelOutside);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
  }
}

function ExampleTuiInputRangeComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 51);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 52);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 53);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 54);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 55);
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

let ExampleTuiInputRangeComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputRangeComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 98131).then(__webpack_require__.t.bind(__webpack_require__, 98131, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 80169).then(__webpack_require__.t.bind(__webpack_require__, 80169, 17));
      this.example1 = {
        HTML: __webpack_require__.e(/* import() */ 53553).then(__webpack_require__.t.bind(__webpack_require__, 53553, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 2387).then(__webpack_require__.t.bind(__webpack_require__, 2387, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 2642).then(__webpack_require__.t.bind(__webpack_require__, 2642, 17)),
        HTML: __webpack_require__.e(/* import() */ 80334).then(__webpack_require__.t.bind(__webpack_require__, 80334, 17))
      };
      this.example3 = {
        HTML: __webpack_require__.e(/* import() */ 76989).then(__webpack_require__.t.bind(__webpack_require__, 76989, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 90486).then(__webpack_require__.t.bind(__webpack_require__, 90486, 17))
      };
      this.example4 = {
        HTML: __webpack_require__.e(/* import() */ 72066).then(__webpack_require__.t.bind(__webpack_require__, 72066, 17)),
        LESS: __webpack_require__.e(/* import() */ 61802).then(__webpack_require__.t.bind(__webpack_require__, 61802, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 92585).then(__webpack_require__.t.bind(__webpack_require__, 92585, 17))
      };
      this.example5 = {
        TypeScript: __webpack_require__.e(/* import() */ 1997).then(__webpack_require__.t.bind(__webpack_require__, 1997, 17)),
        HTML: __webpack_require__.e(/* import() */ 18455).then(__webpack_require__.t.bind(__webpack_require__, 18455, 17)),
        LESS: __webpack_require__.e(/* import() */ 1182).then(__webpack_require__.t.bind(__webpack_require__, 1182, 17))
      };
      this.control = new fesm2015_forms/* FormControl */.NI([0, 10]);
      this.minVariants = [0, 5, 7.77, -10];
      this.min = this.minVariants[0];
      this.maxVariants = [10, 100, 10000];
      this.max = this.maxVariants[0];
      this.segments = 1;
      this.steps = 0;
      this.quantumVariants = [1, 0.001, 10, 100];
      this.quantum = this.quantumVariants[0];
      this.sizeVariants = [`m`, `l`];
      this.size = this.sizeVariants[1];
      this.pluralizeVariants = [{
        one: `thing`,
        few: `things`,
        many: `things`,
        other: `things`
      }, {
        one: `year`,
        other: `years`
      }];
      this.pluralize = null;
      this.keyStepsVariants = [[[0, 0], [50, 1000], [100, 10000]]];
      this.keySteps = null;
      this.valueContentVariants = [``, `TOP SECRET`, ({
        $implicit: val
      }) => val === this.max ? `MAX` : `${val}`, ({
        $implicit: val
      }) => val === this.min ? `MIN` : `${val}`, ({
        $implicit: val
      }) => val === 5 ? `FIVE` : `${val}`];
      this.leftValueContent = this.valueContentVariants[0];
      this.rightValueContent = this.valueContentVariants[0];
    }

  }

  ExampleTuiInputRangeComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputRangeComponent_BaseFactory;
    return function ExampleTuiInputRangeComponent_Factory(t) {
      return (ɵExampleTuiInputRangeComponent_BaseFactory || (ɵExampleTuiInputRangeComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputRangeComponent)))(t || ExampleTuiInputRangeComponent);
    };
  }();

  ExampleTuiInputRangeComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputRangeComponent,
    selectors: [["example-tui-input-range"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputRangeComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4886205873004282227$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__1 = goog.getMsg("Component to input a range of values");
        i18n_0 = MSG_EXTERNAL_4886205873004282227$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟884e67f64e19bad9159bd976e34d0cb28b977c8e␟4886205873004282227:Component to input a range of values`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6882510303030671599$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__3 = goog.getMsg(" Number formatting can be customized by using {$startLink} TUI_NUMBER_FORMAT {$closeLink}", {
          "startLink": "\uFFFD#4\uFFFD",
          "closeLink": "\uFFFD/#4\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_6882510303030671599$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟0e557432cc61605fc75bbddcf8b886ac4208be05␟6882510303030671599: Number formatting can be customized by using ${"\uFFFD#4\uFFFD"}:START_LINK: TUI_NUMBER_FORMAT ${"\uFFFD/#4\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__5 = goog.getMsg("Basic");
        i18n_4 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_416952624038072227$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__7 = goog.getMsg("Override number format");
        i18n_6 = MSG_EXTERNAL_416952624038072227$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟b6abdc66a9baa55f673af8772d69a86e5825d58e␟416952624038072227:Override number format`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8145104323566549928$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__9 = goog.getMsg("Custom value content");
        i18n_8 = MSG_EXTERNAL_8145104323566549928$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟43b7d4bc7a9e19323730882e0a7e164992ae8241␟8145104323566549928:Custom value content`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7433618922144942348$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__11 = goog.getMsg("Visual segments + labels for ticks");
        i18n_10 = MSG_EXTERNAL_7433618922144942348$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟da3ee626899400b20e2eec11b3ddadea8a3ddcc5␟7433618922144942348:Visual segments + labels for ticks`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6496774841790769025$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__13 = goog.getMsg(" Use mixin {$startTagCode}tui-slider-ticks-labels{$closeTagCode} to arrange ticks' labels (it places them strictly below ticks). ", {
          "startTagCode": "\uFFFD#28\uFFFD",
          "closeTagCode": "\uFFFD/#28\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_6496774841790769025$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟792f0f73e29c38e731983b9276ab0ffd1de01441␟6496774841790769025: Use mixin ${"\uFFFD#28\uFFFD"}:START_TAG_CODE:tui-slider-ticks-labels${"\uFFFD/#28\uFFFD"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8285530445387044058$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__15 = goog.getMsg("KeySteps");
        i18n_14 = MSG_EXTERNAL_8285530445387044058$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟1c2f048f4281e4ee3db216fc44e19c2c36fb4478␟8285530445387044058:KeySteps`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_626346517069880366$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__17 = goog.getMsg("{$startTagDt}{$startTagStrong}Key steps{$closeTagStrong}{$closeTagDt}{$startTagDd}anchor points of non-uniform format between value and position{$closeTagDd}", {
          "startTagDt": "\uFFFD#33\uFFFD",
          "startTagStrong": "\uFFFD#34\uFFFD",
          "closeTagStrong": "\uFFFD/#34\uFFFD",
          "closeTagDt": "\uFFFD/#33\uFFFD",
          "startTagDd": "\uFFFD#35\uFFFD",
          "closeTagDd": "\uFFFD/#35\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_626346517069880366$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟1d46e08d2d025f9bef376d0b06ec92af3afa4c8a␟626346517069880366:${"\uFFFD#33\uFFFD"}:START_TAG_DT:${"\uFFFD#34\uFFFD"}:START_TAG_STRONG:Key steps${"\uFFFD/#34\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#33\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#35\uFFFD"}:START_TAG_DD:anchor points of non-uniform format between value and position${"\uFFFD/#35\uFFFD"}:CLOSE_TAG_DD:`;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3422900533866721611$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___19 = goog.getMsg(" Number formatting can be customized by using {$startLink} TUI_NUMBER_FORMAT {$closeLink} . ", {
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "\uFFFD/#2\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_3422900533866721611$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟be9dc2f76de6fa7386bee26f61e50e5056fd59fa␟3422900533866721611: Number formatting can be customized by using ${"\uFFFD#2\uFFFD"}:START_LINK: TUI_NUMBER_FORMAT ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: . `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3370799093568900154$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__21 = goog.getMsg(" Can be expanded with {$startLink} TuiTextfieldController {$closeLink}", {
          "startLink": "\uFFFD#16\uFFFD",
          "closeLink": "\uFFFD/#16\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_3370799093568900154$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟c650a3e713b58901a3b840e10c4051f561778c62␟3370799093568900154: Can be expanded with ${"\uFFFD#16\uFFFD"}:START_LINK: TuiTextfieldController ${"\uFFFD/#16\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___23 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_22 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5313959728516521310$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___25 = goog.getMsg(" Min value ");
        i18n_24 = MSG_EXTERNAL_5313959728516521310$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7525448588827957289$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___27 = goog.getMsg(" Max value ");
        i18n_26 = MSG_EXTERNAL_7525448588827957289$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1397462847420435865$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___29 = goog.getMsg(" Minimum indivisible value ");
        i18n_28 = MSG_EXTERNAL_1397462847420435865$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___29;
      } else {
        i18n_28 = $localize`:␟f26a39c14b6a1067d75ea1628e8b28ef256949db␟1397462847420435865: Minimum indivisible value `;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2083976673220646394$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___31 = goog.getMsg(" Number of actual discrete slider steps ");
        i18n_30 = MSG_EXTERNAL_2083976673220646394$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___31;
      } else {
        i18n_30 = $localize`:␟8dfc46111873255f9a00be9bbc894f8b5f38f108␟2083976673220646394: Number of actual discrete slider steps `;
      }

      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4941460931129258402$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___33 = goog.getMsg(" A number of visual segments ");
        i18n_32 = MSG_EXTERNAL_4941460931129258402$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___33;
      } else {
        i18n_32 = $localize`:␟7d601e1c1a940ef8835249f19cb47d2311d8fd1e␟4941460931129258402: A number of visual segments `;
      }

      let i18n_34;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5861269790634284762$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___35 = goog.getMsg(" Anchor points of non-uniform format between value and position ");
        i18n_34 = MSG_EXTERNAL_5861269790634284762$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___35;
      } else {
        i18n_34 = $localize`:␟2883d0ab4e0e0af2984d0424198392cd5a3d234d␟5861269790634284762: Anchor points of non-uniform format between value and position `;
      }

      let i18n_36;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8137484247214191672$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___37 = goog.getMsg(" A template for custom view of the left selected value. ");
        i18n_36 = MSG_EXTERNAL_8137484247214191672$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___37;
      } else {
        i18n_36 = $localize`:␟f716bc1e8539db3ccdc8cd0d8b11655e2e367346␟8137484247214191672: A template for custom view of the left selected value. `;
      }

      let i18n_38;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9113561072138988969$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___39 = goog.getMsg(" A template for custom view of the right selected value. ");
        i18n_38 = MSG_EXTERNAL_9113561072138988969$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___39;
      } else {
        i18n_38 = $localize`:␟50722b05fc2feefac0326777c1fd2c38a9b91fbf␟9113561072138988969: A template for custom view of the right selected value. `;
      }

      let i18n_40;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8945845948151000582$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___41 = goog.getMsg(" Plural forms for labels. {$startParagraph} Use object that mimics the {$startLink} ICU format {$closeLink} for i18nPlural {$closeParagraph}", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "startLink": "\uFFFD#2\uFFFD",
          "closeLink": "\uFFFD/#2\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD"
        });
        i18n_40 = MSG_EXTERNAL_8945845948151000582$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___41;
      } else {
        i18n_40 = $localize`:␟e3ded9e1b58cb93227552bbcc85bc87bb7aea484␟8945845948151000582: Plural forms for labels. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: Use object that mimics the ${"\uFFFD#2\uFFFD"}:START_LINK: ICU format ${"\uFFFD/#2\uFFFD"}:CLOSE_LINK: for i18nPlural ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      let i18n_42;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2592823355336045770$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___43 = goog.getMsg(" Component is read only ");
        i18n_42 = MSG_EXTERNAL_2592823355336045770$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___43;
      } else {
        i18n_42 = $localize`:␟88dd77c990e5f7fb83a3e3e006bb58f82260ca7e␟2592823355336045770: Component is read only `;
      }

      let i18n_44;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2914660250050831108$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___45 = goog.getMsg(" Label is outside a component and made with {$startLink}{$startTagCode}Label{$closeTagCode}{$closeLink}", {
          "startLink": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeLink": "\uFFFD/#1\uFFFD"
        });
        i18n_44 = MSG_EXTERNAL_2914660250050831108$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___45;
      } else {
        i18n_44 = $localize`:␟8755715075b5b08f672f5adda7f1629e1845d0ec␟2914660250050831108: Label is outside a component and made with ${"\uFFFD#1\uFFFD"}:START_LINK:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:Label${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_46;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___47 = goog.getMsg(" Size ");
        i18n_46 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS___47;
      } else {
        i18n_46 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_48;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2768974860076608761$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__49 = goog.getMsg(" Import {$startTagCode}TuiInputRangeModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_48 = MSG_EXTERNAL_2768974860076608761$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__49;
      } else {
        i18n_48 = $localize`:␟5bb45ac9857e1ec4af4c52fff5d02d8d4f344da1␟2768974860076608761: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputRangeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_50;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__51 = goog.getMsg("Add to the template:");
        i18n_50 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_RANGE_INPUT_RANGE_COMPONENT_TS__51;
      } else {
        i18n_50 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "InputRange", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, i18n_2, ["tuiLink", "", "routerLink", "/utils/tokens", "fragment", "number-format"], ["id", "base", "heading", i18n_4, 3, "content", "description"], ["stepQuantumDescription", ""], [1, "tui-space_top-0"], ["id", "numberFormat", "heading", i18n_6, 3, "content", "description"], ["numberFormatTokenDescription", ""], ["id", "valueContent", "heading", i18n_8, 3, "content"], ["id", "segments", "heading", i18n_10, 3, "content"], [1, "tui-space_bottom-8"], i18n_12, ["id", "keySteps", "heading", i18n_14, 3, "content"], [1, "tui-space_bottom-8", "tui-space_top-0"], i18n_16, i18n_18, [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "quantum", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "steps", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "segments", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "keySteps", "documentationPropertyMode", "input", "documentationPropertyType", "TuiKeySteps", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "leftValueContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "rightValueContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "pluralize", "documentationPropertyMode", "input", "documentationPropertyType", "Record<string, string>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "readOnly", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [1, "tui-text_h6"], i18n_20, ["tuiLink", "", "target", "_blank", "routerLink", "/directives/textfield-controller"], ["documentationPropertyName", "tuiTextfieldLabelOutside", "documentationPropertyMode", "input", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tuiTextfieldSize", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formControl", "min", "max", "segments", "keySteps", "pluralize", "steps", "quantum", "leftValueContent", "rightValueContent", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "readOnly"], i18n_22, i18n_24, i18n_26, i18n_28, i18n_30, i18n_32, i18n_34, i18n_36, i18n_38, i18n_40, ["tuiLink", "", "href", "https://unicode-org.github.io/icu/userguide/format_parse/messages/"], i18n_42, i18n_44, ["tuiLink", "", "routerLink", "/components/label"], i18n_46, [1, "b-demo-steps"], i18n_48, ["filename", "myComponent.module.ts", 3, "code"], i18n_50, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiInputRangeComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputRangeComponent_ng_template_1_Template, 37, 7, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputRangeComponent_ng_template_2_Template, 24, 22, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputRangeComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiInputRangeExample1, TuiInputRangeExample2, TuiInputRangeExample3, notification_component/* TuiNotificationComponent */.L, TuiInputRangeExample4, TuiInputRangeExample5, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, input_range_component/* TuiInputRangeComponent */.E, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiInputRangeComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-range/input-range.module.ts















let ExampleTuiInputRangeModule = /*#__PURE__*/(() => {
  class ExampleTuiInputRangeModule {}

  ExampleTuiInputRangeModule.ɵfac = function ExampleTuiInputRangeModule_Factory(t) {
    return new (t || ExampleTuiInputRangeModule)();
  };

  ExampleTuiInputRangeModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputRangeModule
  });
  ExampleTuiInputRangeModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[kit/* TuiInputRangeModule */.$qG, kit/* TuiInputSliderModule */.aJT, inherited_documentation_module/* InheritedDocumentationModule */.f, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, kit/* TuiRadioListModule */.Ltw, public_api/* TuiAddonDocModule */.fV, core/* TuiButtonModule */.fNO, core/* TuiLinkModule */.jzK, core/* TuiTextfieldControllerModule */.cnw, core/* TuiSvgModule */.EIu, core/* TuiNotificationModule */.HiG, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputRangeComponent))]]
  });
  return ExampleTuiInputRangeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputRangeModule, {
    declarations: [ExampleTuiInputRangeComponent, TuiInputRangeExample1, TuiInputRangeExample2, TuiInputRangeExample3, TuiInputRangeExample4, TuiInputRangeExample5],
    imports: [kit/* TuiInputRangeModule */.$qG, kit/* TuiInputSliderModule */.aJT, inherited_documentation_module/* InheritedDocumentationModule */.f, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, kit/* TuiRadioListModule */.Ltw, public_api/* TuiAddonDocModule */.fV, core/* TuiButtonModule */.fNO, core/* TuiLinkModule */.jzK, core/* TuiTextfieldControllerModule */.cnw, core/* TuiSvgModule */.EIu, core/* TuiNotificationModule */.HiG, router/* RouterModule */.Bz],
    exports: [ExampleTuiInputRangeComponent]
  });
})();

/***/ })

}]);