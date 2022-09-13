"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[43296],{

/***/ 43296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputSliderModule": () => (/* binding */ ExampleTuiInputSliderModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.module.ts
var inherited_documentation_module = __webpack_require__(75695);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-slider/input-slider.component.ts
var input_slider_component = __webpack_require__(44056);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-options.directive.ts
var hint_options_directive = __webpack_require__(84848);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-slider/examples/1/index.ts





let TuiInputSliderExample1 = /*#__PURE__*/(() => {
  class TuiInputSliderExample1 {
    constructor() {
      this.min = 5;
      this.max = 20;
      this.sliderStep = 1;
      this.steps = (this.max - this.min) / this.sliderStep;
      this.quantum = 0.01;
      this.hint = `Dragging slider change input by ${this.sliderStep}.\nBut you can type decimal number which is multiple of ${this.quantum}.`;
      this.control = new fesm2015_forms/* FormControl */.NI(6.5);
    }

  }

  TuiInputSliderExample1.ɵfac = function TuiInputSliderExample1_Factory(t) {
    return new (t || TuiInputSliderExample1)();
  };

  TuiInputSliderExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputSliderExample1,
    selectors: [["tui-input-slider-example-1"]],
    decls: 2,
    vars: 6,
    consts: [[1, "control", 3, "min", "max", "steps", "quantum", "formControl", "tuiHintContent"]],
    template: function TuiInputSliderExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-slider", 0);
        fesm2015_core/* ɵɵtext */._uU(1, " Select interest rate\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("min", ctx.min)("max", ctx.max)("steps", ctx.steps)("quantum", ctx.quantum)("formControl", ctx.control)("tuiHintContent", ctx.hint);
      }
    },
    directives: [input_slider_component/* TuiInputSliderComponent */.h, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, hint_options_directive/* TuiHintOptionsDirective */.b],
    styles: [".control[_ngcontent-%COMP%]{width:50%}@media screen and (max-width: 47.9625em){.control[_ngcontent-%COMP%]{width:100%}}"],
    changeDetection: 0
  });
  return TuiInputSliderExample1;
})();
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-slider/examples/2/index.ts





let TuiInputSliderExample2 = /*#__PURE__*/(() => {
  class TuiInputSliderExample2 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI(40);
      this.segments = 5;
      this.max = 100;
      this.min = 0;
    }

    increase() {
      var _a, _b;

      this.control.patchValue(Math.min(((_b = (_a = this.control) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 0) + 20, this.max));
    }

    decrease() {
      var _a, _b;

      this.control.patchValue(Math.max(((_b = (_a = this.control) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 0) - 20, this.min));
    }

  }

  TuiInputSliderExample2.ɵfac = function TuiInputSliderExample2_Factory(t) {
    return new (t || TuiInputSliderExample2)();
  };

  TuiInputSliderExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputSliderExample2,
    selectors: [["tui-input-slider-example-2"]],
    decls: 16,
    vars: 4,
    consts: [[1, "wrapper"], [3, "min", "max", "segments", "formControl"], [1, "slider-ticks-labels"], ["tuiIconButton", "", "type", "button", "size", "xs", "icon", "tuiIconDislikeLarge", "appearance", "icon", 3, "click"], ["tuiIconButton", "", "type", "button", "size", "xs", "icon", "tuiIconLikeLarge", "appearance", "icon", 3, "click"]],
    template: function TuiInputSliderExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-slider", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Rate your mind ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "span");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiInputSliderExample2_Template_button_click_5_listener() {
          return ctx.decrease();
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
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
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "button", 4);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiInputSliderExample2_Template_button_click_15_listener() {
          return ctx.increase();
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("min", ctx.min)("max", ctx.max)("segments", 5)("formControl", ctx.control);
      }
    },
    directives: [input_slider_component/* TuiInputSliderComponent */.h, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, button_component/* TuiButtonComponent */.v],
    styles: [".wrapper[_ngcontent-%COMP%]{width:70%}@media screen and (max-width: 47.9625em){.wrapper[_ngcontent-%COMP%]{width:100%}}.slider-ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.5rem .5rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02)}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],
    changeDetection: 0
  });
  return TuiInputSliderExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-slider/examples/3/index.ts






function TuiInputSliderExample3_span_4_Template(rf, ctx) {
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

let TuiInputSliderExample3 = /*#__PURE__*/(() => {
  class TuiInputSliderExample3 {
    constructor() {
      this.control = new fesm2015_forms/* FormControl */.NI(10000);
      this.max = 1000000;
      this.min = 0;
      this.totalSteps = 100;
      this.ticksLabels = [`0`, `10K`, `100K`, `500k`, `1000K`];
      this.keySteps = [// [percent, value]
      [0, this.min], [25, 10000], [50, 100000], [75, 500000], [100, this.max]];
    }

  }

  TuiInputSliderExample3.ɵfac = function TuiInputSliderExample3_Factory(t) {
    return new (t || TuiInputSliderExample3)();
  };

  TuiInputSliderExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputSliderExample3,
    selectors: [["tui-input-slider-example-3"]],
    decls: 9,
    vars: 8,
    consts: [[1, "wrapper"], [3, "min", "max", "steps", "keySteps", "formControl", "segments"], [1, "slider-ticks-labels"], [4, "ngFor", "ngForOf"]],
    template: function TuiInputSliderExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input-slider", 1);
        fesm2015_core/* ɵɵtext */._uU(2, " Not linear growing slider ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 2);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiInputSliderExample3_span_4_Template, 2, 1, "span", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
        fesm2015_core/* ɵɵtext */._uU(6, " Control value: ");
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "code");
        fesm2015_core/* ɵɵtext */._uU(8);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("min", ctx.min)("max", ctx.max)("steps", ctx.totalSteps)("keySteps", ctx.keySteps)("formControl", ctx.control)("segments", ctx.ticksLabels.length - 1);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.ticksLabels);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx.control.value);
      }
    },
    directives: [input_slider_component/* TuiInputSliderComponent */.h, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, common/* NgForOf */.sg],
    styles: [".wrapper[_ngcontent-%COMP%]{width:50%}@media screen and (max-width: 47.9625em){.wrapper[_ngcontent-%COMP%]{width:100%}}.slider-ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.5rem .5rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02)}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],
    changeDetection: 0
  });
  return TuiInputSliderExample3;
})();
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-custom-content.directive.ts
var textfield_custom_content_directive = __webpack_require__(6707);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-slider/examples/4/index.ts







function TuiInputSliderExample4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 3);
  }
}

function TuiInputSliderExample4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 4);
  }
}

let TuiInputSliderExample4 = /*#__PURE__*/(() => {
  class TuiInputSliderExample4 {
    constructor() {
      this.userAnswer = 2;
    }

  }

  TuiInputSliderExample4.ɵfac = function TuiInputSliderExample4_Factory(t) {
    return new (t || TuiInputSliderExample4)();
  };

  TuiInputSliderExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputSliderExample4,
    selectors: [["tui-input-slider-example-4"]],
    decls: 6,
    vars: 4,
    consts: [["tuiHintContent", "Select the answer to see how the right custom content changes", 1, "control", 3, "min", "max", "tuiTextfieldCustomContent", "ngModel", "ngModelChange"], ["right", ""], ["wrong", ""], ["src", "tuiIconCheckCircleLarge", 1, "success"], ["src", "tuiIconCloseCircleLarge", 1, "error"]],
    template: function TuiInputSliderExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-slider", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiInputSliderExample4_Template_tui_input_slider_ngModelChange_0_listener($event) {
          return ctx.userAnswer = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(1, " 2+2=?\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiInputSliderExample4_ng_template_2_Template, 1, 0, "ng-template", null, 1, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵtemplate */.YNc(4, TuiInputSliderExample4_ng_template_4_Template, 1, 0, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(3);

        const _r2 = fesm2015_core/* ɵɵreference */.MAs(5);

        fesm2015_core/* ɵɵproperty */.Q6J("min", 0)("max", 10)("tuiTextfieldCustomContent", ctx.userAnswer === 4 ? _r0 : _r2)("ngModel", ctx.userAnswer);
      }
    },
    directives: [input_slider_component/* TuiInputSliderComponent */.h, hint_options_directive/* TuiHintOptionsDirective */.b, textfield_custom_content_directive/* TuiTextfieldCustomContentDirective */.B, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, svg_component/* TuiSvgComponent */.P],
    styles: [".control[_ngcontent-%COMP%]{width:50%}@media screen and (max-width: 47.9625em){.control[_ngcontent-%COMP%]{width:100%}}.success[_ngcontent-%COMP%]{color:var(--tui-success-fill)}.error[_ngcontent-%COMP%]{color:var(--tui-error-fill)}"],
    changeDetection: 0
  });
  return TuiInputSliderExample4;
})();
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-slider/examples/5/index.ts






let TuiInputSliderExample5 = /*#__PURE__*/(() => {
  class TuiInputSliderExample5 {
    constructor() {
      this.max = 100;
      this.min = 0;
      this.smallControl = new fesm2015_forms/* FormControl */.NI(this.min);
      this.bigControl = new fesm2015_forms/* FormControl */.NI(this.max);

      this.customLabel = ({
        $implicit
      }) => {
        switch ($implicit) {
          case this.max:
            return `Digits can't describe my love!`;

          case this.min:
            return `Just a label for min value`;

          case (this.max - this.min) / 2:
            return `Middle`;

          default:
            return $implicit;
        }
      };
    }

  }

  TuiInputSliderExample5.ɵfac = function TuiInputSliderExample5_Factory(t) {
    return new (t || TuiInputSliderExample5)();
  };

  TuiInputSliderExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputSliderExample5,
    selectors: [["tui-input-slider-example-5"]],
    decls: 9,
    vars: 10,
    consts: [[1, "control"], ["tuiTextfieldSize", "m", 3, "min", "max", "segments", "valueContent", "tuiTextfieldLabelOutside", "formControl"], [1, "slider-ticks-labels"], [1, "control", 3, "min", "max", "valueContent", "formControl"]],
    template: function TuiInputSliderExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "section", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-input-slider", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "span");
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "span");
        fesm2015_core/* ɵɵtext */._uU(5, "Custom label");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(6, "span");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-input-slider", 3);
        fesm2015_core/* ɵɵtext */._uU(8, " How much do you love Taiga UI?\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("min", ctx.min)("max", ctx.max)("segments", 2)("valueContent", ctx.customLabel)("tuiTextfieldLabelOutside", true)("formControl", ctx.smallControl);
        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵproperty */.Q6J("min", ctx.min)("max", ctx.max)("valueContent", ctx.customLabel)("formControl", ctx.bigControl);
      }
    },
    directives: [input_slider_component/* TuiInputSliderComponent */.h, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH],
    styles: ["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;grid-column-gap:3rem;column-gap:3rem;grid-row-gap:1rem;row-gap:1rem}.control[_ngcontent-%COMP%]{flex:1;min-width:17rem}.slider-ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.25rem .5rem 0;font:var(--tui-font-text-s)}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],
    changeDetection: 0
  });
  return TuiInputSliderExample5;
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
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/inherited-documentation/inherited-documentation.component.ts
var inherited_documentation_component = __webpack_require__(54218);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-cleaner.directive.ts
var textfield_cleaner_directive = __webpack_require__(64374);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-icon-left.directive.ts
var textfield_icon_left_directive = __webpack_require__(3729);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-slider/input-slider.component.ts






























function ExampleTuiInputSliderComponent_ng_template_1_ng_template_6_Template(rf, ctx) {
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

function ExampleTuiInputSliderComponent_ng_template_1_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵtext */._uU(1, " Pass ");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "a", 16);
    fesm2015_core/* ɵɵtext */._uU(3, " PolymorpheusContent ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(4, " into property ");
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "code");
    fesm2015_core/* ɵɵtext */._uU(6, "[valueContent]");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(7, " to create custom label for selected value. ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

function ExampleTuiInputSliderComponent_ng_template_1_Template(rf, ctx) {
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
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputSliderComponent_ng_template_1_ng_template_6_Template, 8, 0, "ng-template", null, 6, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelement */._UZ(8, "tui-input-slider-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-notification", 8);
    fesm2015_core/* ɵɵi18nStart */.tHW(11, 9);
    fesm2015_core/* ɵɵelement */._UZ(12, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(13, "tui-input-slider-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "dl", 11);
    fesm2015_core/* ɵɵi18nStart */.tHW(16, 12);
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "dt");
    fesm2015_core/* ɵɵelement */._UZ(18, "strong");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(19, "dd");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(20, "tui-input-slider-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(21, "tui-doc-example", 13);
    fesm2015_core/* ɵɵelement */._UZ(22, "tui-input-slider-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(23, "tui-doc-example", 14);
    fesm2015_core/* ɵɵtemplate */.YNc(24, ExampleTuiInputSliderComponent_ng_template_1_ng_template_24_Template, 8, 0, "ng-template", null, 15, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelement */._UZ(26, "tui-input-slider-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r3 = fesm2015_core/* ɵɵreference */.MAs(7);

    const _r5 = fesm2015_core/* ɵɵreference */.MAs(25);

    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1)("description", _r3);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(5);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(7);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5)("description", _r5);
  }
}

function ExampleTuiInputSliderComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-slider", 28);
    fesm2015_core/* ɵɵtext */._uU(1, " Range ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r7.control)("min", ctx_r7.min)("max", ctx_r7.max)("quantum", ctx_r7.quantum)("steps", ctx_r7.steps)("segments", ctx_r7.segments)("keySteps", ctx_r7.keySteps)("valueContent", ctx_r7.valueContent)("prefix", ctx_r7.prefix)("postfix", ctx_r7.postfix)("focusable", ctx_r7.focusable)("readOnly", ctx_r7.readOnly)("pseudoInvalid", ctx_r7.pseudoInvalid)("pseudoFocus", ctx_r7.pseudoFocused)("pseudoHover", ctx_r7.pseudoHovered)("pseudoActive", ctx_r7.pseudoPressed)("tuiTextfieldCleaner", ctx_r7.cleaner)("tuiTextfieldCustomContent", ctx_r7.customContentSelected)("tuiTextfieldIconLeft", ctx_r7.iconLeft)("tuiTextfieldLabelOutside", ctx_r7.labelOutside)("tuiTextfieldSize", ctx_r7.size)("tuiHintContent", ctx_r7.hintContent)("tuiHintDirection", ctx_r7.hintDirection)("tuiHintAppearance", ctx_r7.hintAppearance);
  }
}

function ExampleTuiInputSliderComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 29);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputSliderComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 30);
  }
}

function ExampleTuiInputSliderComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 31);
  }
}

function ExampleTuiInputSliderComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 32);
  }
}

function ExampleTuiInputSliderComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 33);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputSliderComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 34);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputSliderComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 35);
  }
}

function ExampleTuiInputSliderComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 36);
  }
}

function ExampleTuiInputSliderComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 37);
  }
}

function ExampleTuiInputSliderComponent_ng_template_2_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 38);
  }
}

function ExampleTuiInputSliderComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 17);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputSliderComponent_ng_template_2_ng_template_1_Template, 2, 24, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputSliderComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 18);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputSliderComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r20 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r20.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiInputSliderComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r21 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r21.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiInputSliderComponent_ng_template_2_ng_template_6_Template, 1, 0, "ng-template", 21);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r22 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r22.quantum = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiInputSliderComponent_ng_template_2_ng_template_7_Template, 4, 0, "ng-template", 22);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r23 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r23.steps = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiInputSliderComponent_ng_template_2_ng_template_8_Template, 2, 0, "ng-template", 23);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r24 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r24.segments = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiInputSliderComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 24);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r25 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r25.keySteps = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiInputSliderComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 25);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r26 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r26.valueContent = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiInputSliderComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 26);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r27 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r27.prefix = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(12, ExampleTuiInputSliderComponent_ng_template_2_ng_template_12_Template, 1, 0, "ng-template", 27);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_12_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r19);
      const ctx_r28 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r28.postfix = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(13, "inherited-documentation");
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
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueContentVariants)("documentationPropertyValue", ctx_r1.valueContent);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.prefix);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.postfix);
  }
}

function ExampleTuiInputSliderComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 39);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 40);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 41);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 42);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 43);
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

let ExampleTuiInputSliderComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputSliderComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 97832).then(__webpack_require__.t.bind(__webpack_require__, 97832, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 66365).then(__webpack_require__.t.bind(__webpack_require__, 66365, 17));
      this.example1 = {
        HTML: __webpack_require__.e(/* import() */ 24331).then(__webpack_require__.t.bind(__webpack_require__, 24331, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 60989).then(__webpack_require__.t.bind(__webpack_require__, 60989, 17)),
        LESS: __webpack_require__.e(/* import() */ 48482).then(__webpack_require__.t.bind(__webpack_require__, 48482, 17))
      };
      this.example2 = {
        HTML: __webpack_require__.e(/* import() */ 42677).then(__webpack_require__.t.bind(__webpack_require__, 42677, 17)),
        LESS: __webpack_require__.e(/* import() */ 29928).then(__webpack_require__.t.bind(__webpack_require__, 28947, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 1114).then(__webpack_require__.t.bind(__webpack_require__, 1114, 17))
      };
      this.example3 = {
        HTML: __webpack_require__.e(/* import() */ 70093).then(__webpack_require__.t.bind(__webpack_require__, 70093, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 32174).then(__webpack_require__.t.bind(__webpack_require__, 32174, 17)),
        LESS: __webpack_require__.e(/* import() */ 33438).then(__webpack_require__.t.bind(__webpack_require__, 33438, 17))
      };
      this.example4 = {
        HTML: __webpack_require__.e(/* import() */ 53041).then(__webpack_require__.t.bind(__webpack_require__, 53041, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 8569).then(__webpack_require__.t.bind(__webpack_require__, 8569, 17)),
        LESS: __webpack_require__.e(/* import() */ 80184).then(__webpack_require__.t.bind(__webpack_require__, 80184, 17))
      };
      this.example5 = {
        HTML: __webpack_require__.e(/* import() */ 34856).then(__webpack_require__.t.bind(__webpack_require__, 34856, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 59388).then(__webpack_require__.t.bind(__webpack_require__, 59388, 17)),
        LESS: __webpack_require__.e(/* import() */ 13568).then(__webpack_require__.t.bind(__webpack_require__, 13568, 17))
      };
      this.control = new fesm2015_forms/* FormControl */.NI(0);
      this.minVariants = [0, 1, 5, 7.77, -10];
      this.min = this.minVariants[0];
      this.maxVariants = [10, 100, 10000];
      this.max = this.maxVariants[0];
      this.segments = 1;
      this.steps = 0;
      this.quantumVariants = [1, 0.01, 0.001, 0.0001, 10, 20, 100];
      this.quantum = this.quantumVariants[0];
      this.sizeVariants = [`m`, `l`];
      this.size = this.sizeVariants[1];
      this.prefix = ``;
      this.postfix = ``;
      this.valueContentVariants = [``, `TOP SECRET`, ({
        $implicit: val
      }) => val === this.max ? `MAX` : val, ({
        $implicit: val
      }) => val === this.min ? `MIN` : val, ({
        $implicit: val
      }) => val === 5 ? `FIVE` : val];
      this.valueContent = this.valueContentVariants[0];
      this.keyStepsVariants = [[[0, 0], [50, 1000], [100, 10000]]];
      this.keySteps = null;
      this.autocompleteVariants = [`off`, `transaction-amount`];
      this.autocomplete = ``;
      this.customContentVariants = [`tuiIconVisaMono`, `tuiIconMastercardMono`];
      this.customContentSelected = null;
    }

  }

  ExampleTuiInputSliderComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputSliderComponent_BaseFactory;
    return function ExampleTuiInputSliderComponent_Factory(t) {
      return (ɵExampleTuiInputSliderComponent_BaseFactory || (ɵExampleTuiInputSliderComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputSliderComponent)))(t || ExampleTuiInputSliderComponent);
    };
  }();

  ExampleTuiInputSliderComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputSliderComponent,
    selectors: [["example-tui-input-slider"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: abstract_props_accessor/* ABSTRACT_PROPS_ACCESSOR */.x,
      useExisting: (0,fesm2015_core/* forwardRef */.Gpc)(() => ExampleTuiInputSliderComponent)
    }]), fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4701019213831986187$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__1 = goog.getMsg("Component to input a limited range");
        i18n_0 = MSG_EXTERNAL_4701019213831986187$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟da84b6ac893fbeaa337a2ee175f98e44ea263e53␟4701019213831986187:Component to input a limited range`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6882510303030671599$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__3 = goog.getMsg(" Number formatting can be customized by using {$startLink} TUI_NUMBER_FORMAT {$closeLink}", {
          "startLink": "\uFFFD#4\uFFFD",
          "closeLink": "\uFFFD/#4\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_6882510303030671599$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟0e557432cc61605fc75bbddcf8b886ac4208be05␟6882510303030671599: Number formatting can be customized by using ${"\uFFFD#4\uFFFD"}:START_LINK: TUI_NUMBER_FORMAT ${"\uFFFD/#4\uFFFD"}:CLOSE_LINK:`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__5 = goog.getMsg("Basic");
        i18n_4 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4430738955357466377$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__7 = goog.getMsg("With slider segments + ticks labels");
        i18n_6 = MSG_EXTERNAL_4430738955357466377$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟414bc269fadd0a392ae0e0c30dddc639ecf38308␟4430738955357466377:With slider segments + ticks labels`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6496774841790769025$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__9 = goog.getMsg(" Use mixin {$startTagCode}tui-slider-ticks-labels{$closeTagCode} to arrange ticks' labels (it places them strictly below ticks). ", {
          "startTagCode": "\uFFFD#12\uFFFD",
          "closeTagCode": "\uFFFD/#12\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_6496774841790769025$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟792f0f73e29c38e731983b9276ab0ffd1de01441␟6496774841790769025: Use mixin ${"\uFFFD#12\uFFFD"}:START_TAG_CODE:tui-slider-ticks-labels${"\uFFFD/#12\uFFFD"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8285530445387044058$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__11 = goog.getMsg("KeySteps");
        i18n_10 = MSG_EXTERNAL_8285530445387044058$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟1c2f048f4281e4ee3db216fc44e19c2c36fb4478␟8285530445387044058:KeySteps`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_626346517069880366$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__13 = goog.getMsg("{$startTagDt}{$startTagStrong}Key steps{$closeTagStrong}{$closeTagDt}{$startTagDd}anchor points of non-uniform format between value and position{$closeTagDd}", {
          "startTagDt": "\uFFFD#17\uFFFD",
          "startTagStrong": "\uFFFD#18\uFFFD",
          "closeTagStrong": "\uFFFD/#18\uFFFD",
          "closeTagDt": "\uFFFD/#17\uFFFD",
          "startTagDd": "\uFFFD#19\uFFFD",
          "closeTagDd": "\uFFFD/#19\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_626346517069880366$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟1d46e08d2d025f9bef376d0b06ec92af3afa4c8a␟626346517069880366:${"\uFFFD#17\uFFFD"}:START_TAG_DT:${"\uFFFD#18\uFFFD"}:START_TAG_STRONG:Key steps${"\uFFFD/#18\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#17\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#19\uFFFD"}:START_TAG_DD:anchor points of non-uniform format between value and position${"\uFFFD/#19\uFFFD"}:CLOSE_TAG_DD:`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1981532857133559654$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__15 = goog.getMsg("With right label");
        i18n_14 = MSG_EXTERNAL_1981532857133559654$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟818721a28fa595e0323921b4c1236d050863888a␟1981532857133559654:With right label`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1831689276170871729$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__17 = goog.getMsg("With min and max labels");
        i18n_16 = MSG_EXTERNAL_1831689276170871729$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟b3392662fa9d7ced0969f5600ace480d8814f9b2␟1831689276170871729:With min and max labels`;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___19 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5313959728516521310$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___21 = goog.getMsg(" Min value ");
        i18n_20 = MSG_EXTERNAL_5313959728516521310$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7525448588827957289$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___23 = goog.getMsg(" Max value ");
        i18n_22 = MSG_EXTERNAL_7525448588827957289$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1397462847420435865$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___25 = goog.getMsg(" Minimum indivisible value ");
        i18n_24 = MSG_EXTERNAL_1397462847420435865$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟f26a39c14b6a1067d75ea1628e8b28ef256949db␟1397462847420435865: Minimum indivisible value `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4237291911130958356$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___27 = goog.getMsg(" Number of actual discrete slider steps {$startParagraph} If property is not set (i.e. equals to default value {$startTagStrong}0{$closeTagStrong} ), number of steps equals {$startTagCode}(max\u00A0-\u00A0min)\u00A0/\u00A0quantum{$closeTagCode}{$closeParagraph}", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD",
          "startTagCode": "\uFFFD#3\uFFFD",
          "closeTagCode": "\uFFFD/#3\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD"
        });
        i18n_26 = MSG_EXTERNAL_4237291911130958356$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟ec72eae05a138e9b2354cf744ac484f3337a97fc␟4237291911130958356: Number of actual discrete slider steps ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: If property is not set (i.e. equals to default value ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:0${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG: ), number of steps equals ${"\uFFFD#3\uFFFD"}:START_TAG_CODE:(max - min) / quantum${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6136081272055532664$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___29 = goog.getMsg(" A number of visual segments (use {$startTagCode}1{$closeTagCode} for no ticks) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_28 = MSG_EXTERNAL_6136081272055532664$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___29;
      } else {
        i18n_28 = $localize`:␟82c284d033b06d2b8d3981aee455bfaacb6161a0␟6136081272055532664: A number of visual segments (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:1${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: for no ticks) `;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_718529244239473960$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___31 = goog.getMsg(" Key steps to bind slider position and value ");
        i18n_30 = MSG_EXTERNAL_718529244239473960$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___31;
      } else {
        i18n_30 = $localize`:␟1182f923918428fd2bd242abbe914d25c5bcc8b2␟718529244239473960: Key steps to bind slider position and value `;
      }

      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2065100572177810620$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___33 = goog.getMsg(" A template for custom view of selected value. ");
        i18n_32 = MSG_EXTERNAL_2065100572177810620$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___33;
      } else {
        i18n_32 = $localize`:␟28b10912f5003a70ad541588744588b529765487␟2065100572177810620: A template for custom view of selected value. `;
      }

      let i18n_34;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_889438292388771446$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___35 = goog.getMsg(" A prefix symbol, like currency ");
        i18n_34 = MSG_EXTERNAL_889438292388771446$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___35;
      } else {
        i18n_34 = $localize`:␟658adf15e902084053811153efcee4ab1a098c01␟889438292388771446: A prefix symbol, like currency `;
      }

      let i18n_36;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8021237919117600846$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___37 = goog.getMsg(" A postfix symbol, like currency ");
        i18n_36 = MSG_EXTERNAL_8021237919117600846$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS___37;
      } else {
        i18n_36 = $localize`:␟6cd740eb34e19b39e7b5823575a0a337c2347ba3␟8021237919117600846: A postfix symbol, like currency `;
      }

      let i18n_38;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4365654195713409511$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__39 = goog.getMsg(" Import {$startTagCode}TuiInputSliderModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_38 = MSG_EXTERNAL_4365654195713409511$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__39;
      } else {
        i18n_38 = $localize`:␟5c5b855d47959ade58e22dd4b99dd7ce3a6b66f9␟4365654195713409511: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputSliderModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_40;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__41 = goog.getMsg("Add to the template:");
        i18n_40 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_SLIDER_INPUT_SLIDER_COMPONENT_TS__41;
      } else {
        i18n_40 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "InputSlider", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, i18n_2, ["tuiLink", "", "routerLink", "/utils/tokens", "fragment", "number-format"], ["id", "base", "heading", i18n_4, 3, "content", "description"], ["stepQuantumDescription", ""], ["id", "slider-segments", "heading", i18n_6, 3, "content"], [1, "tui-space_bottom-8"], i18n_8, ["id", "key-steps", "heading", i18n_10, 3, "content"], [1, "tui-space_bottom-8", "tui-space_top-0"], i18n_12, ["id", "right-label", "heading", i18n_14, 3, "content"], ["id", "min-max-labels", "heading", i18n_16, 3, "content", "description"], ["valueContentDescription", ""], ["tuiLink", "", "href", "https://github.com/tinkoff/ng-polymorpheus"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "quantum", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "steps", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "segments", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "keySteps", "documentationPropertyMode", "input", "documentationPropertyType", "TuiKeySteps", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "valueContent", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "prefix", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "postfix", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], [3, "formControl", "min", "max", "quantum", "steps", "segments", "keySteps", "valueContent", "prefix", "postfix", "focusable", "readOnly", "pseudoInvalid", "pseudoFocus", "pseudoHover", "pseudoActive", "tuiTextfieldCleaner", "tuiTextfieldCustomContent", "tuiTextfieldIconLeft", "tuiTextfieldLabelOutside", "tuiTextfieldSize", "tuiHintContent", "tuiHintDirection", "tuiHintAppearance"], i18n_18, i18n_20, i18n_22, i18n_24, i18n_26, i18n_28, i18n_30, i18n_32, i18n_34, i18n_36, [1, "b-demo-steps"], i18n_38, ["filename", "myComponent.module.ts", 3, "code"], i18n_40, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiInputSliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputSliderComponent_ng_template_1_Template, 27, 7, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputSliderComponent_ng_template_2_Template, 14, 16, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputSliderComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiInputSliderExample1, notification_component/* TuiNotificationComponent */.L, TuiInputSliderExample2, TuiInputSliderExample3, TuiInputSliderExample4, TuiInputSliderExample5, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, inherited_documentation_component/* InheritedDocumentationComponent */.w, input_slider_component/* TuiInputSliderComponent */.h, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, textfield_cleaner_directive/* TuiTextfieldCleanerDirective */.b, textfield_custom_content_directive/* TuiTextfieldCustomContentDirective */.B, textfield_icon_left_directive/* TuiTextfieldIconLeftDirective */.aR, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, textfield_size_directive/* TuiTextfieldSizeDirective */.s, hint_options_directive/* TuiHintOptionsDirective */.b, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiInputSliderComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-slider/input-slider.module.ts















let ExampleTuiInputSliderModule = /*#__PURE__*/(() => {
  class ExampleTuiInputSliderModule {}

  ExampleTuiInputSliderModule.ɵfac = function ExampleTuiInputSliderModule_Factory(t) {
    return new (t || ExampleTuiInputSliderModule)();
  };

  ExampleTuiInputSliderModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputSliderModule
  });
  ExampleTuiInputSliderModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[kit.TuiInputRangeModule, kit.TuiInputSliderModule, inherited_documentation_module/* InheritedDocumentationModule */.f, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, kit.TuiRadioListModule, core.TuiButtonModule, core.TuiHintModule, public_api/* TuiAddonDocModule */.fV, core.TuiLinkModule, core.TuiSvgModule, core.TuiNotificationModule, core.TuiTextfieldControllerModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputSliderComponent))]]
  });
  return ExampleTuiInputSliderModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputSliderModule, {
    declarations: [ExampleTuiInputSliderComponent, TuiInputSliderExample1, TuiInputSliderExample2, TuiInputSliderExample3, TuiInputSliderExample4, TuiInputSliderExample5],
    imports: [kit.TuiInputRangeModule, kit.TuiInputSliderModule, inherited_documentation_module/* InheritedDocumentationModule */.f, fesm2015_forms/* ReactiveFormsModule */.UX, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, kit.TuiRadioListModule, core.TuiButtonModule, core.TuiHintModule, public_api/* TuiAddonDocModule */.fV, core.TuiLinkModule, core.TuiSvgModule, core.TuiNotificationModule, core.TuiTextfieldControllerModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiInputSliderComponent]
  });
})();

/***/ })

}]);