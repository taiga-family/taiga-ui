"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[65792],{

/***/ 65792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiSliderModule": () => (/* binding */ ExampleTuiSliderModule)
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
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/slider/slider.component.ts
var slider_component = __webpack_require__(47044);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/slider/examples/1/index.ts




let TuiSliderExample1 = /*#__PURE__*/(() => {
  class TuiSliderExample1 {
    constructor() {
      this.value = 4;
      this.formControl = new fesm2015_forms/* FormControl */.NI(60);
    }

  }

  TuiSliderExample1.ɵfac = function TuiSliderExample1_Factory(t) {
    return new (t || TuiSliderExample1)();
  };

  TuiSliderExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSliderExample1,
    selectors: [["tui-slider-example-1"]],
    decls: 2,
    vars: 2,
    consts: [["tuiSlider", "", "type", "range", "max", "10", "step", "1", "size", "s", 3, "ngModel", "ngModelChange"], ["tuiSlider", "", "type", "range", "value", "60", "size", "m", 3, "formControl"]],
    template: function TuiSliderExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "input", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiSliderExample1_Template_input_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(1, "input", 1);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx.formControl);
      }
    },
    directives: [slider_component/* TuiSliderComponent */.i, fesm2015_forms/* RangeValueAccessor */.eT, fesm2015_forms/* DefaultValueAccessor */.Fj, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, fesm2015_forms/* FormControlDirective */.oH],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiSliderExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/slider/examples/2/index.ts


let TuiSliderExample2 = /*#__PURE__*/(() => {
  class TuiSliderExample2 {}

  TuiSliderExample2.ɵfac = function TuiSliderExample2_Factory(t) {
    return new (t || TuiSliderExample2)();
  };

  TuiSliderExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSliderExample2,
    selectors: [["tui-slider-example-2"]],
    decls: 3,
    vars: 0,
    consts: [["tuiSlider", "", "type", "range", "value", "65", 1, "first"], ["tuiSlider", "", "type", "range", "value", "80", 1, "second"], ["tuiSlider", "", "type", "range", "value", "40", 1, "third"]],
    template: function TuiSliderExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "input", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "input", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "input", 2);
      }
    },
    directives: [slider_component/* TuiSliderComponent */.i],
    styles: [".first[_ngcontent-%COMP%]{--tui-primary: var(--tui-support-01);--tui-primary-hover: var(--tui-support-21);--tui-primary-active: var(--tui-support-02)}.second[_ngcontent-%COMP%]{--tui-primary: var(--tui-support-03);--tui-primary-hover: var(--tui-support-04);--tui-primary-active: var(--tui-positive)}.third[_ngcontent-%COMP%]{--tui-primary: var(--tui-support-12);--tui-primary-hover: var(--tui-support-07);--tui-primary-active: var(--tui-support-08)}"],
    changeDetection: 0
  });
  return TuiSliderExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/slider/examples/3/index.ts






function TuiSliderExample3_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 3);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSliderExample3_button_2_Template_button_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r3);
      const label_r1 = restoredCtx.$implicit;
      const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r2.patchValue(label_r1);
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const label_r1 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" $", label_r1, " ");
  }
}

let TuiSliderExample3 = /*#__PURE__*/(() => {
  class TuiSliderExample3 {
    constructor() {
      this.labels = [0, 250, 500, 750, 1000];
      this.formControl = new fesm2015_forms/* FormControl */.NI(250);
    }

    patchValue(newValue) {
      this.formControl.patchValue(newValue);
    }

  }

  TuiSliderExample3.ɵfac = function TuiSliderExample3_Factory(t) {
    return new (t || TuiSliderExample3)();
  };

  TuiSliderExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSliderExample3,
    selectors: [["tui-slider-example-3"]],
    decls: 7,
    vars: 6,
    consts: [["tuiSlider", "", "type", "range", "size", "m", 3, "max", "step", "segments", "formControl"], [1, "ticks-labels"], ["class", "tick-label", 3, "click", 4, "ngFor", "ngForOf"], [1, "tick-label", 3, "click"]],
    template: function TuiSliderExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "input", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiSliderExample3_button_2_Template, 2, 1, "button", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
        fesm2015_core/* ɵɵtext */._uU(4, " Control value: ");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "code");
        fesm2015_core/* ɵɵtext */._uU(6);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("max", 1000)("step", 250)("segments", 4)("formControl", ctx.formControl);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.labels);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx.formControl.value);
      }
    },
    directives: [slider_component/* TuiSliderComponent */.i, fesm2015_forms/* RangeValueAccessor */.eT, fesm2015_forms/* DefaultValueAccessor */.Fj, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, common/* NgForOf */.sg],
    styles: [".ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}.tick-label[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;outline:0;cursor:pointer}"],
    changeDetection: 0
  });
  return TuiSliderExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/slider/examples/4/index.ts


let TuiSliderExample4 = /*#__PURE__*/(() => {
  class TuiSliderExample4 {}

  TuiSliderExample4.ɵfac = function TuiSliderExample4_Factory(t) {
    return new (t || TuiSliderExample4)();
  };

  TuiSliderExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSliderExample4,
    selectors: [["tui-slider-example-4"]],
    decls: 1,
    vars: 0,
    consts: [["tuiSlider", "", "type", "range", "disabled", "", "value", "80"]],
    template: function TuiSliderExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "input", 0);
      }
    },
    directives: [slider_component/* TuiSliderComponent */.i],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiSliderExample4;
})();
// EXTERNAL MODULE: ./projects/kit/components/slider/helpers/slider-key-steps.directive.ts
var slider_key_steps_directive = __webpack_require__(59);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/slider/examples/5/index.ts







function TuiSliderExample5_span_2_Template(rf, ctx) {
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

let TuiSliderExample5 = /*#__PURE__*/(() => {
  class TuiSliderExample5 {
    constructor() {
      this.labels = [`5 000`, `100 000`, `300 000`, `1 000 000`];
      this.formControl = new fesm2015_forms/* FormControl */.NI(720000);
      this.segments = this.labels.length - 1;
      this.keySteps = [[0, 5000], [100 / 3, 100000], [100 / 3 * 2, 300000], [100, 1000000]];
    }

  }

  TuiSliderExample5.ɵfac = function TuiSliderExample5_Factory(t) {
    return new (t || TuiSliderExample5)();
  };

  TuiSliderExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSliderExample5,
    selectors: [["tui-slider-example-5"]],
    decls: 8,
    vars: 8,
    consts: [["tuiSlider", "", "type", "range", 3, "keySteps", "max", "segments", "formControl"], [1, "ticks-labels"], [4, "ngFor", "ngForOf"], ["automation-id", "key-steps-example-control-value"]],
    template: function TuiSliderExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "input", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "div", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiSliderExample5_span_2_Template, 2, 1, "span", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "p", 3);
        fesm2015_core/* ɵɵtext */._uU(4, " Control value: ");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "code");
        fesm2015_core/* ɵɵtext */._uU(6);
        fesm2015_core/* ɵɵpipe */.ALo(7, "number");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("keySteps", ctx.keySteps)("max", 10 * ctx.segments)("segments", ctx.segments)("formControl", ctx.formControl);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.labels);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵtextInterpolate */.Oqu(fesm2015_core/* ɵɵpipeBind1 */.lcZ(7, 6, ctx.formControl.value));
      }
    },
    directives: [slider_key_steps_directive/* TuiSliderKeyStepsDirective */.t, slider_component/* TuiSliderComponent */.i, fesm2015_forms/* RangeValueAccessor */.eT, fesm2015_forms/* DefaultValueAccessor */.Fj, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, common/* NgForOf */.sg],
    pipes: [common/* DecimalPipe */.JJ],
    styles: [".ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],
    changeDetection: 0
  });
  return TuiSliderExample5;
})();
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__(26215);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(25917);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/timer.js
var timer = __webpack_require__(46797);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/distinctUntilChanged.js
var distinctUntilChanged = __webpack_require__(87519);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/mapTo.js
var mapTo = __webpack_require__(96736);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
// EXTERNAL MODULE: ./projects/core/directives/mode/mode.directive.ts
var mode_directive = __webpack_require__(30644);
// EXTERNAL MODULE: ./projects/kit/components/slider/helpers/slider-thumb-label/slider-thumb-label.component.ts
var slider_thumb_label_component = __webpack_require__(38988);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint.directive.ts
var hint_directive = __webpack_require__(67446);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-driver.directive.ts
var hint_driver_directive = __webpack_require__(29070);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-hover.directive.ts
var hint_hover_directive = __webpack_require__(54255);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-position.directive.ts
var hint_position_directive = __webpack_require__(15491);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-manual.directive.ts
var hint_manual_directive = __webpack_require__(56059);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/slider/examples/6/index.ts
















function TuiSliderExample6_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0);
    fesm2015_core/* ɵɵpipe */.ALo(1, "percent");
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx_r1.value), " ");
  }
}

let TuiSliderExample6 = /*#__PURE__*/(() => {
  class TuiSliderExample6 {
    constructor() {
      this.min = 0.5;
      this.max = 2;
      this.value = 1;
      this.active$ = new BehaviorSubject/* BehaviorSubject */.X(false);
      this.showHint$ = this.active$.pipe((0,distinctUntilChanged/* distinctUntilChanged */.x)(), (0,switchMap/* switchMap */.w)(active => active ? (0,of.of)(true) : (0,timer/* timer */.H)(1000).pipe((0,mapTo/* mapTo */.h)(false))));
    }

    onKeydown(show) {
      this.active$.next(show);
    }

    change(step) {
      this.value = (0,cdk.tuiClamp)(this.value + step, this.min, this.max);
    }

  }

  TuiSliderExample6.ɵfac = function TuiSliderExample6_Factory(t) {
    return new (t || TuiSliderExample6)();
  };

  TuiSliderExample6.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSliderExample6,
    selectors: [["tui-slider-example-6"]],
    hostBindings: function TuiSliderExample6_HostBindings(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵlistener */.NdJ("pointerdown", function TuiSliderExample6_pointerdown_HostBindingHandler() {
          return ctx.onKeydown(true);
        })("pointerup", function TuiSliderExample6_pointerup_HostBindingHandler() {
          return ctx.onKeydown(false);
        }, false, fesm2015_core/* ɵɵresolveDocument */.evT);
      }
    },
    decls: 9,
    vars: 7,
    consts: [[1, "zoom-controller"], ["tuiIconButton", "", "appearance", "flat", "tuiMode", "onDark", "size", "s", "icon", "tuiIconMinus", 1, "minus", 3, "click"], ["tuiSliderThumbLabel", "", 1, "slider-wrapper"], ["tuiHintAppearance", "onDark", "tuiHintDirection", "top", 3, "tuiHint", "tuiHintManual"], ["hint", ""], ["tuiSlider", "", "type", "range", "step", "any", 3, "min", "max", "ngModel", "ngModelChange"], ["tuiIconButton", "", "appearance", "flat", "tuiMode", "onDark", "size", "s", "icon", "tuiIconPlus", 1, "plus", 3, "click"]],
    template: function TuiSliderExample6_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "article", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "button", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSliderExample6_Template_button_click_1_listener() {
          return ctx.change(-0.25);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "label", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "div", 3);
        fesm2015_core/* ɵɵpipe */.ALo(4, "async");
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiSliderExample6_ng_template_5_Template, 2, 3, "ng-template", null, 4, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "input", 5);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiSliderExample6_Template_input_ngModelChange_7_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "button", 6);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiSliderExample6_Template_button_click_8_listener() {
          return ctx.change(+0.25);
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(6);

        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHint", _r0)("tuiHintManual", !!fesm2015_core/* ɵɵpipeBind1 */.lcZ(4, 5, ctx.showHint$));
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("min", ctx.min)("max", ctx.max)("ngModel", ctx.value);
      }
    },
    directives: [button_component/* TuiButtonComponent */.v, mode_directive/* TuiModeDirective */.w, slider_thumb_label_component/* TuiSliderThumbLabelComponent */.Z, hint_directive/* TuiHintDirective */.D, hint_driver_directive/* TuiHintDriverDirective */.x, hint_hover_directive/* TuiHintHoverDirective */.t, hint_position_directive/* TuiHintPositionDirective */.D, hint_manual_directive/* TuiHintManualDirective */.Z, slider_component/* TuiSliderComponent */.i, fesm2015_forms/* RangeValueAccessor */.eT, fesm2015_forms/* DefaultValueAccessor */.Fj, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    pipes: [common/* AsyncPipe */.Ov, common/* PercentPipe */.Zx],
    styles: [".zoom-controller[_ngcontent-%COMP%]{border-radius:1rem;background:var(--tui-base-05);display:flex;justify-content:space-between;align-items:center;max-width:18rem;grid-column-gap:.5rem;column-gap:.5rem}@media screen and (max-width: 47.9625em){.zoom-controller[_ngcontent-%COMP%]{max-width:100%}}.slider-wrapper[_ngcontent-%COMP%]{flex:1}.minus[_ngcontent-%COMP%]{border-radius:1rem 0 0 1rem}.plus[_ngcontent-%COMP%]{border-radius:0 1rem 1rem 0}"],
    changeDetection: 0
  });
  return TuiSliderExample6;
})();
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/slider/slider.component.ts




















function ExampleTuiSliderComponent_ng_template_1_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "code");
    fesm2015_core/* ɵɵtext */._uU(2, "tuiSliderThumbLabel");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(3, " for positioning any content so it slides alongside the thumb. ");
  }
}

function ExampleTuiSliderComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "dl");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "dt");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "dd");
    fesm2015_core/* ɵɵelement */._UZ(5, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
    fesm2015_core/* ɵɵtext */._uU(7, " Read more about current input's type in ");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "a", 3);
    fesm2015_core/* ɵɵtext */._uU(9, " MDN Docs ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(10, " . ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(12, 4);
    fesm2015_core/* ɵɵelement */._UZ(13, "strong");
    fesm2015_core/* ɵɵelement */._UZ(14, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(16, "tui-slider-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(17, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(18, "tui-slider-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(19, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelementStart */.TgZ(20, "tui-notification", 8);
    fesm2015_core/* ɵɵelementStart */.TgZ(21, "p", 9);
    fesm2015_core/* ɵɵi18nStart */.tHW(22, 10);
    fesm2015_core/* ɵɵelement */._UZ(23, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(24, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(25, 11);
    fesm2015_core/* ɵɵelement */._UZ(26, "code");
    fesm2015_core/* ɵɵelement */._UZ(27, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(28, "tui-slider-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(29, "tui-doc-example", 12);
    fesm2015_core/* ɵɵelement */._UZ(30, "tui-slider-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(31, "tui-doc-example", 13);
    fesm2015_core/* ɵɵelementStart */.TgZ(32, "dl", 14);
    fesm2015_core/* ɵɵi18nStart */.tHW(33, 15);
    fesm2015_core/* ɵɵelementStart */.TgZ(34, "dt");
    fesm2015_core/* ɵɵelement */._UZ(35, "strong");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(36, "dd");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(37, "tui-slider-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(38, "tui-doc-example", 16);
    fesm2015_core/* ɵɵtemplate */.YNc(39, ExampleTuiSliderComponent_ng_template_1_ng_template_39_Template, 4, 0, "ng-template", null, 17, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelement */._UZ(41, "tui-slider-example-6");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r3 = fesm2015_core/* ɵɵreference */.MAs(40);

    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(15);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example5);
    fesm2015_core/* ɵɵadvance */.xp6(7);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example6)("description", _r3);
  }
}

function ExampleTuiSliderComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "input", 25);
  }

  if (rf & 2) {
    const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("max", ctx_r5.max)("min", ctx_r5.min)("step", ctx_r5.step)("formControl", ctx_r5.control)("size", ctx_r5.size)("segments", ctx_r5.segments);
  }
}

function ExampleTuiSliderComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 26);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiSliderComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 27);
    fesm2015_core/* ɵɵelement */._UZ(1, "a", 28);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiSliderComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 29);
    fesm2015_core/* ɵɵelement */._UZ(1, "a", 30);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiSliderComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 31);
    fesm2015_core/* ɵɵelement */._UZ(1, "a", 32);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiSliderComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 33);
  }
}

function ExampleTuiSliderComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 34);
    fesm2015_core/* ɵɵelement */._UZ(1, "p");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiSliderComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 18);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiSliderComponent_ng_template_2_ng_template_1_Template, 1, 6, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiSliderComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 19);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiSliderComponent_ng_template_2_ng_template_4_Template, 3, 0, "ng-template", 20);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiSliderComponent_ng_template_2_ng_template_5_Template, 3, 0, "ng-template", 21);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.min = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiSliderComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 22);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.step = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiSliderComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 23);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiSliderComponent_ng_template_2_ng_template_8_Template, 3, 0, "ng-template", 24);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiSliderComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r13);
      const ctx_r18 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r18.segments = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.min);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.step);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.segments);
  }
}

function ExampleTuiSliderComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 35);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵtext */._uU(2, " Import an Angular module for forms and ");
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "code");
    fesm2015_core/* ɵɵtext */._uU(4, "TuiSliderModule");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(5, " in the same module where you want to use our component: ");
    fesm2015_core/* ɵɵelement */._UZ(6, "tui-doc-code", 36);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(9, 37);
    fesm2015_core/* ɵɵelement */._UZ(10, "code");
    fesm2015_core/* ɵɵelement */._UZ(11, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(12, "tui-doc-code", 38);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "p");
    fesm2015_core/* ɵɵi18n */.SDv(15, 39);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(16, "tui-doc-code", 40);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleImportModule);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleDeclareForm);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleInsertTemplate);
  }
}

let ExampleTuiSliderComponent = /*#__PURE__*/(() => {
  class ExampleTuiSliderComponent {
    constructor() {
      this.sizeVariants = [`s`, `m`];
      this.control = new fesm2015_forms/* FormControl */.NI(1);
      this.max = 5;
      this.min = 0;
      this.step = 1;
      this.size = this.sizeVariants[1];
      this.segments = this.max;
      this.exampleImportModule = __webpack_require__.e(/* import() */ 13345).then(__webpack_require__.t.bind(__webpack_require__, 13345, 17));
      this.exampleDeclareForm = __webpack_require__.e(/* import() */ 24001).then(__webpack_require__.t.bind(__webpack_require__, 24001, 17));
      this.exampleInsertTemplate = __webpack_require__.e(/* import() */ 72186).then(__webpack_require__.t.bind(__webpack_require__, 72186, 17));
      this.example1 = {
        HTML: __webpack_require__.e(/* import() */ 17183).then(__webpack_require__.t.bind(__webpack_require__, 17183, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 94780).then(__webpack_require__.t.bind(__webpack_require__, 94780, 17))
      };
      this.example2 = {
        HTML: __webpack_require__.e(/* import() */ 39713).then(__webpack_require__.t.bind(__webpack_require__, 39713, 17)),
        LESS: __webpack_require__.e(/* import() */ 5280).then(__webpack_require__.t.bind(__webpack_require__, 5280, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 40334).then(__webpack_require__.t.bind(__webpack_require__, 40334, 17))
      };
      this.example3 = {
        HTML: __webpack_require__.e(/* import() */ 85143).then(__webpack_require__.t.bind(__webpack_require__, 85143, 17)),
        LESS: __webpack_require__.e(/* import() */ 97180).then(__webpack_require__.t.bind(__webpack_require__, 97180, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 28777).then(__webpack_require__.t.bind(__webpack_require__, 28777, 17))
      };
      this.example4 = {
        HTML: __webpack_require__.e(/* import() */ 41453).then(__webpack_require__.t.bind(__webpack_require__, 41453, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 11589).then(__webpack_require__.t.bind(__webpack_require__, 11589, 17))
      };
      this.example5 = {
        HTML: __webpack_require__.e(/* import() */ 72627).then(__webpack_require__.t.bind(__webpack_require__, 72627, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 99862).then(__webpack_require__.t.bind(__webpack_require__, 99862, 17)),
        LESS: __webpack_require__.e(/* import() */ 33402).then(__webpack_require__.t.bind(__webpack_require__, 33402, 17))
      };
      this.example6 = {
        HTML: __webpack_require__.e(/* import() */ 92213).then(__webpack_require__.t.bind(__webpack_require__, 92213, 17)),
        LESS: __webpack_require__.e(/* import() */ 42565).then(__webpack_require__.t.bind(__webpack_require__, 42565, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 98486).then(__webpack_require__.t.bind(__webpack_require__, 98486, 17))
      };
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

  ExampleTuiSliderComponent.ɵfac = function ExampleTuiSliderComponent_Factory(t) {
    return new (t || ExampleTuiSliderComponent)();
  };

  ExampleTuiSliderComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiSliderComponent,
    selectors: [["example-slider"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5051981916551990985$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__1 = goog.getMsg("{$startTagDt}{$startTagCode}tuiSlider{$closeTagCode}{$closeTagDt}{$startTagDd} attribute component for native html tag {$startTagCode}<input type=\"range\" />{$closeTagCode} to choose a value from a limited range. {$closeTagDd}", {
          "startTagDt": "\uFFFD#2\uFFFD",
          "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]",
          "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]",
          "closeTagDt": "\uFFFD/#2\uFFFD",
          "startTagDd": "\uFFFD#4\uFFFD",
          "closeTagDd": "\uFFFD/#4\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_5051981916551990985$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟adbed55b9ad040f016b7224d2376dcc556c96cde␟5051981916551990985:${"\uFFFD#2\uFFFD"}:START_TAG_DT:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:tuiSlider${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#4\uFFFD"}:START_TAG_DD: attribute component for native html tag ${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:<input type="range" />${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: to choose a value from a limited range. ${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_DD:`;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6584790122390772242$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__3 = goog.getMsg("{$startTagStrong}Usage:{$closeTagStrong}{$startTagCode}<input tuiSlider type=\"range\" min=\"0\" max=\"100\" step=\"1\" />{$closeTagCode} . ", {
          "startTagStrong": "\uFFFD#13\uFFFD",
          "closeTagStrong": "\uFFFD/#13\uFFFD",
          "startTagCode": "\uFFFD#14\uFFFD",
          "closeTagCode": "\uFFFD/#14\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_6584790122390772242$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟d17c664a1f4783e75fde9506a0cc298adc5d77b8␟6584790122390772242:${"\uFFFD#13\uFFFD"}:START_TAG_STRONG:Usage:${"\uFFFD/#13\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD#14\uFFFD"}:START_TAG_CODE:<input tuiSlider type="range" min="0" max="100" step="1" />${"\uFFFD/#14\uFFFD"}:CLOSE_TAG_CODE: . `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__5 = goog.getMsg("Sizes");
        i18n_4 = MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5267754967054916445$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__7 = goog.getMsg("Colors");
        i18n_6 = MSG_EXTERNAL_5267754967054916445$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟e93acd761801b3f2077278b282163a9c03283b8c␟5267754967054916445:Colors`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3070830036852627562$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__9 = goog.getMsg("With visual segments");
        i18n_8 = MSG_EXTERNAL_3070830036852627562$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟2491f5c0a188387f341fc89ca14558c666c96dc9␟3070830036852627562:With visual segments`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7222770680801212686$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__11 = goog.getMsg(" Use mixin {$startTagCode}tui-slider-ticks-labels{$closeTagCode} to arrange ticks' labels (it places them strictly below ticks). ", {
          "startTagCode": "\uFFFD#23\uFFFD",
          "closeTagCode": "\uFFFD/#23\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_7222770680801212686$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟b71cff54548c311b9382985ce173ddbd05b1455a␟7222770680801212686: Use mixin ${"\uFFFD#23\uFFFD"}:START_TAG_CODE:tui-slider-ticks-labels${"\uFFFD/#23\uFFFD"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7490709384902699339$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__13 = goog.getMsg(" The mixin accepts only a single argument \u2013 size of the slider ( {$startTagCode}m{$closeTagCode} or {$startTagCode}s{$closeTagCode} ). ", {
          "startTagCode": "[\uFFFD#26\uFFFD|\uFFFD#27\uFFFD]",
          "closeTagCode": "[\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD]"
        });
        i18n_12 = MSG_EXTERNAL_7490709384902699339$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟b43e37a55c51eed01f3c7b31c7fb8c20e9ea09ce␟7490709384902699339: The mixin accepts only a single argument – size of the slider ( ${"[\uFFFD#26\uFFFD|\uFFFD#27\uFFFD]"}:START_TAG_CODE:m${"[\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD]"}:CLOSE_TAG_CODE: or ${"[\uFFFD#26\uFFFD|\uFFFD#27\uFFFD]"}:START_TAG_CODE:s${"[\uFFFD/#26\uFFFD|\uFFFD/#27\uFFFD]"}:CLOSE_TAG_CODE: ). `;
      }

      i18n_12 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_12);
      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5769292297914455214$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__15 = goog.getMsg("Disabled");
        i18n_14 = MSG_EXTERNAL_5769292297914455214$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟f39256070bfc0714020dfee08895421fc1527014␟5769292297914455214:Disabled`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2043510449142398319$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__17 = goog.getMsg("With key steps");
        i18n_16 = MSG_EXTERNAL_2043510449142398319$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__17;
      } else {
        i18n_16 = $localize`:␟21e3d6f0be967074ebe7bfc308ce12e1e9ef0763␟2043510449142398319:With key steps`;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_626346517069880366$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__19 = goog.getMsg("{$startTagDt}{$startTagStrong}Key steps{$closeTagStrong}{$closeTagDt}{$startTagDd}anchor points of non-uniform format between value and position{$closeTagDd}", {
          "startTagDt": "\uFFFD#34\uFFFD",
          "startTagStrong": "\uFFFD#35\uFFFD",
          "closeTagStrong": "\uFFFD/#35\uFFFD",
          "closeTagDt": "\uFFFD/#34\uFFFD",
          "startTagDd": "\uFFFD#36\uFFFD",
          "closeTagDd": "\uFFFD/#36\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_626346517069880366$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟1d46e08d2d025f9bef376d0b06ec92af3afa4c8a␟626346517069880366:${"\uFFFD#34\uFFFD"}:START_TAG_DT:${"\uFFFD#35\uFFFD"}:START_TAG_STRONG:Key steps${"\uFFFD/#35\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD/#34\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#36\uFFFD"}:START_TAG_DD:anchor points of non-uniform format between value and position${"\uFFFD/#36\uFFFD"}:CLOSE_TAG_DD:`;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7049130908974374044$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__21 = goog.getMsg("Complex");
        i18n_20 = MSG_EXTERNAL_7049130908974374044$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟e75362b1b5b0d9038fcafc9670ef18bba17e61d0␟7049130908974374044:Complex`;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___23 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_22 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2441366795513240531$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___25 = goog.getMsg(" Native attribute {$startLink} max {$closeLink} of {$startTagCode}<input\u00A0type=\"range\"\u00A0/>{$closeTagCode}", {
          "startLink": "\uFFFD#1\uFFFD",
          "closeLink": "\uFFFD/#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_24 = MSG_EXTERNAL_2441366795513240531$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___25;
      } else {
        i18n_24 = $localize`:␟7a9c2463dd2db1c76ddb6ab9b5ac72155b3febd3␟2441366795513240531: Native attribute ${"\uFFFD#1\uFFFD"}:START_LINK: max ${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: of ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:<input type="range" />${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8291402794161186662$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___27 = goog.getMsg(" Native attribute {$startLink} min {$closeLink} of {$startTagCode}<input\u00A0type=\"range\"\u00A0/>{$closeTagCode}", {
          "startLink": "\uFFFD#1\uFFFD",
          "closeLink": "\uFFFD/#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_26 = MSG_EXTERNAL_8291402794161186662$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___27;
      } else {
        i18n_26 = $localize`:␟0f9865bd37150fde43d1803c880f50904f4c19e5␟8291402794161186662: Native attribute ${"\uFFFD#1\uFFFD"}:START_LINK: min ${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: of ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:<input type="range" />${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_28;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3867818126343854694$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___29 = goog.getMsg(" Native attribute {$startLink} step {$closeLink} of {$startTagCode}<input\u00A0type=\"range\"\u00A0/>{$closeTagCode}", {
          "startLink": "\uFFFD#1\uFFFD",
          "closeLink": "\uFFFD/#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_28 = MSG_EXTERNAL_3867818126343854694$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___29;
      } else {
        i18n_28 = $localize`:␟3ef21ae73998ca229a066c4ebe6df772bcb4e1ff␟3867818126343854694: Native attribute ${"\uFFFD#1\uFFFD"}:START_LINK: step ${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: of ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:<input type="range" />${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_30;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___31 = goog.getMsg(" Size ");
        i18n_30 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___31;
      } else {
        i18n_30 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_32;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1000197536572415972$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___33 = goog.getMsg("{$startParagraph}A number of visual segments{$closeParagraph} (use {$startTagCode}1{$closeTagCode} for no ticks) ", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_32 = MSG_EXTERNAL_1000197536572415972$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS___33;
      } else {
        i18n_32 = $localize`:␟a02033b049807cde07365ac37e1d79258c6f8b38␟1000197536572415972:${"\uFFFD#1\uFFFD"}:START_PARAGRAPH:A number of visual segments${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH: (use ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:1${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: for no ticks) `;
      }

      let i18n_34;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__35 = goog.getMsg(" Declare a form ( {$startTagCode}FormGroup{$closeTagCode} ) or a control ( {$startTagCode}FormControl{$closeTagCode} ) in your component: ", {
          "startTagCode": "[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]",
          "closeTagCode": "[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]"
        });
        i18n_34 = MSG_EXTERNAL_6039324497180220606$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__35;
      } else {
        i18n_34 = $localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:FormGroup${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\uFFFD#10\uFFFD|\uFFFD#11\uFFFD]"}:START_TAG_CODE:FormControl${"[\uFFFD/#10\uFFFD|\uFFFD/#11\uFFFD]"}:CLOSE_TAG_CODE: ) in your component: `;
      }

      i18n_34 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_34);
      let i18n_36;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__37 = goog.getMsg("Add to the template:");
        i18n_36 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SLIDER_SLIDER_COMPONENT_TS__37;
      } else {
        i18n_36 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Slider", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["tuiLink", "", "target", "_blank", "href", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input/range"], i18n_2, ["id", "sizes", "heading", i18n_4, 3, "content"], ["id", "colors", "heading", i18n_6, 3, "content"], ["id", "segments", "heading", i18n_8, 3, "content"], [1, "tui-space_bottom-8"], [1, "tui-space_top-0"], i18n_10, i18n_12, ["id", "disabled", "heading", i18n_14, 3, "content"], ["id", "keySteps", "heading", i18n_16, 3, "content"], [1, "tui-space_bottom-8", "tui-space_top-0"], i18n_18, ["id", "complex", "heading", i18n_20, 3, "content", "description"], ["tuiSliderThumbLabelDescription", ""], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "min", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "step", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "segments", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["tuiSlider", "", "type", "range", 3, "max", "min", "step", "formControl", "size", "segments"], i18n_22, i18n_24, ["tuiLink", "", "href", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#max", "target", "_blank"], i18n_26, ["tuiLink", "", "href", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#min", "target", "_blank"], i18n_28, ["tuiLink", "", "href", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#step", "target", "_blank"], i18n_30, i18n_32, [1, "b-demo-steps"], ["filename", "myComponent.module.ts", 3, "code"], i18n_34, ["filename", "myComponent.component.ts", 3, "code"], i18n_36, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiSliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiSliderComponent_ng_template_1_Template, 42, 7, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiSliderComponent_ng_template_2_Template, 9, 8, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiSliderComponent_ng_template_3_Template, 17, 3, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, example_component/* TuiDocExampleComponent */.f, TuiSliderExample1, TuiSliderExample2, notification_component/* TuiNotificationComponent */.L, TuiSliderExample3, TuiSliderExample4, TuiSliderExample5, TuiSliderExample6, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, slider_component/* TuiSliderComponent */.i, fesm2015_forms/* RangeValueAccessor */.eT, fesm2015_forms/* DefaultValueAccessor */.Fj, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiSliderComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/slider/slider.module.ts















let ExampleTuiSliderModule = /*#__PURE__*/(() => {
  class ExampleTuiSliderModule {}

  ExampleTuiSliderModule.ɵfac = function ExampleTuiSliderModule_Factory(t) {
    return new (t || ExampleTuiSliderModule)();
  };

  ExampleTuiSliderModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiSliderModule
  });
  ExampleTuiSliderModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, kit.TuiSliderModule, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiLinkModule, core.TuiNotificationModule, core.TuiModeModule, core.TuiButtonModule, core.TuiHintModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiSliderComponent))]]
  });
  return ExampleTuiSliderModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiSliderModule, {
    declarations: [ExampleTuiSliderComponent, TuiSliderExample1, TuiSliderExample2, TuiSliderExample3, TuiSliderExample4, TuiSliderExample5, TuiSliderExample6],
    imports: [common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, kit.TuiSliderModule, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiLinkModule, core.TuiNotificationModule, core.TuiModeModule, core.TuiButtonModule, core.TuiHintModule, router/* RouterModule */.Bz]
  });
})();

/***/ })

}]);