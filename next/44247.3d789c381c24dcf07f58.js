"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[44247],{

/***/ 44247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiProgressBarModule": () => (/* binding */ ExampleTuiProgressBarModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(25917);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/timer.js
var timer = __webpack_require__(46797);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__(88002);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/startWith.js
var startWith = __webpack_require__(39761);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/progress/progress-bar/progress-bar.component.ts
var progress_bar_component = __webpack_require__(98515);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-bar/examples/1/index.ts






let TuiProgressBarExample1 = /*#__PURE__*/(() => {
  class TuiProgressBarExample1 {
    constructor(isCypress) {
      this.isCypress = isCypress;
      this.value$ = this.isCypress ? (0,of.of)(40) : (0,timer/* timer */.H)(300, 300).pipe((0,map/* map */.U)(i => i + 30), (0,startWith/* startWith */.O)(30));
    }

  }

  TuiProgressBarExample1.ɵfac = function TuiProgressBarExample1_Factory(t) {
    return new (t || TuiProgressBarExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TUI_IS_CYPRESS));
  };

  TuiProgressBarExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiProgressBarExample1,
    selectors: [["tui-progress-bar-example-1"]],
    decls: 2,
    vars: 3,
    consts: [["tuiProgressBar", "", "max", "100", 1, "progress", 3, "value"]],
    template: function TuiProgressBarExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "progress", 0);
        fesm2015_core/* ɵɵpipe */.ALo(1, "async");
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("value", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx.value$));
      }
    },
    directives: [progress_bar_component/* TuiProgressBarComponent */.i],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".progress[_ngcontent-%COMP%]{width:50%}@media screen and (max-width: 47.9625em){.progress[_ngcontent-%COMP%]{width:100%}}"],
    changeDetection: 0
  });
  return TuiProgressBarExample1;
})();
// EXTERNAL MODULE: ./projects/kit/components/progress/progress-bar/progress-color-segments.directive.ts
var progress_color_segments_directive = __webpack_require__(22824);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-bar/examples/2/index.ts






let TuiProgressBarExample2 = /*#__PURE__*/(() => {
  class TuiProgressBarExample2 {
    constructor(isCypress) {
      this.isCypress = isCypress;
      this.fastValue$ = this.isCypress ? (0,of.of)(80) : (0,timer/* timer */.H)(500, 100);
      this.slowValue$ = this.isCypress ? (0,of.of)(4) : (0,timer/* timer */.H)(500, 2000);
      this.colors = [`var(--tui-support-01)`, `var(--tui-support-21)`, `lightskyblue`, `#3682db`, `var(--tui-primary)`];
    }

  }

  TuiProgressBarExample2.ɵfac = function TuiProgressBarExample2_Factory(t) {
    return new (t || TuiProgressBarExample2)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TUI_IS_CYPRESS));
  };

  TuiProgressBarExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiProgressBarExample2,
    selectors: [["tui-progress-bar-example-2"]],
    decls: 32,
    vars: 15,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1101375577014023805$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_EXAMPLES_2_INDEX_TS_1 = goog.getMsg(" Single color\n");
        i18n_0 = MSG_EXTERNAL_1101375577014023805$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_EXAMPLES_2_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟ab3eb576a4d2b77500066bb0f71f51331629c494␟1101375577014023805: Single color
`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5511912390234747958$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_EXAMPLES_2_INDEX_TS_3 = goog.getMsg(" With fancy color gradient\n");
        i18n_2 = MSG_EXTERNAL_5511912390234747958$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_EXAMPLES_2_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟7342d3c89bf9afecda17d4cd92d27708faeaa2b8␟5511912390234747958: With fancy color gradient
`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7426878659956347852$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_EXAMPLES_2_INDEX_TS_5 = goog.getMsg(" Multicolor segments\n");
        i18n_4 = MSG_EXTERNAL_7426878659956347852$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_EXAMPLES_2_INDEX_TS_5;
      } else {
        i18n_4 = $localize`:␟c68f6db0a6492b25e0e1e6e45301901e6106a18b␟7426878659956347852: Multicolor segments
`;
      }

      return [[1, "description"], i18n_0, ["tuiProgressBar", "", "max", "100", 1, "progress", 3, "value"], i18n_2, ["tuiProgressBar", "", "max", "100", "color", "linear-gradient(to right, var(--tui-support-02), var(--tui-support-14), var(--tui-support-12))", 1, "progress", 3, "value"], i18n_4, ["tuiProgressBar", "", "max", "100", 1, "progress", 3, "value", "tuiProgressColorSegments"], ["tuiProgressBar", "", 1, "progress", 3, "value", "max", "tuiProgressColorSegments"]];
    },
    template: function TuiProgressBarExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "h6", 0);
        fesm2015_core/* ɵɵi18n */.SDv(1, 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
        fesm2015_core/* ɵɵtext */._uU(3, " Use ");
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "code");
        fesm2015_core/* ɵɵtext */._uU(5, "<progress />");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(6, " 's CSS-property ");
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "code");
        fesm2015_core/* ɵɵtext */._uU(8, "color");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(9, " to set solid color of progress indicator.\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(10, "progress", 2);
        fesm2015_core/* ɵɵpipe */.ALo(11, "async");
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "h6", 0);
        fesm2015_core/* ɵɵi18n */.SDv(13, 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(14, "p");
        fesm2015_core/* ɵɵtext */._uU(15, " Set component's input property ");
        fesm2015_core/* ɵɵelementStart */.TgZ(16, "code");
        fesm2015_core/* ɵɵtext */._uU(17, "color");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(18, " to get more complex color combinations.\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(19, "progress", 4);
        fesm2015_core/* ɵɵpipe */.ALo(20, "async");
        fesm2015_core/* ɵɵelementStart */.TgZ(21, "h6", 0);
        fesm2015_core/* ɵɵi18n */.SDv(22, 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(23, "p");
        fesm2015_core/* ɵɵtext */._uU(24, " Use ");
        fesm2015_core/* ɵɵelementStart */.TgZ(25, "code");
        fesm2015_core/* ɵɵtext */._uU(26, "tuiProgressColorSegments");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(27, " directive to to get multicolor segments.\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(28, "progress", 6);
        fesm2015_core/* ɵɵpipe */.ALo(29, "async");
        fesm2015_core/* ɵɵelement */._UZ(30, "progress", 7);
        fesm2015_core/* ɵɵpipe */.ALo(31, "async");
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(10);
        fesm2015_core/* ɵɵproperty */.Q6J("value", fesm2015_core/* ɵɵpipeBind1 */.lcZ(11, 7, ctx.fastValue$));
        fesm2015_core/* ɵɵadvance */.xp6(9);
        fesm2015_core/* ɵɵproperty */.Q6J("value", fesm2015_core/* ɵɵpipeBind1 */.lcZ(20, 9, ctx.fastValue$));
        fesm2015_core/* ɵɵadvance */.xp6(9);
        fesm2015_core/* ɵɵproperty */.Q6J("value", fesm2015_core/* ɵɵpipeBind1 */.lcZ(29, 11, ctx.fastValue$))("tuiProgressColorSegments", ctx.colors);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", fesm2015_core/* ɵɵpipeBind1 */.lcZ(31, 13, ctx.slowValue$))("max", ctx.colors.length)("tuiProgressColorSegments", ctx.colors);
      }
    },
    directives: [progress_bar_component/* TuiProgressBarComponent */.i, progress_color_segments_directive/* TuiProgressColorSegmentsDirective */.U],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".progress[_ngcontent-%COMP%]{width:70%;margin-bottom:1rem;color:var(--tui-support-09)}@media screen and (max-width: 47.9625em){.progress[_ngcontent-%COMP%]{width:100%}}.description[_ngcontent-%COMP%]{font:var(--tui-font-heading-6);margin-bottom:1rem}.description[_ngcontent-%COMP%]:first-child{margin-top:0}"],
    changeDetection: 0
  });
  return TuiProgressBarExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-bar/examples/3/index.ts


let TuiProgressBarExample3 = /*#__PURE__*/(() => {
  class TuiProgressBarExample3 {}

  TuiProgressBarExample3.ɵfac = function TuiProgressBarExample3_Factory(t) {
    return new (t || TuiProgressBarExample3)();
  };

  TuiProgressBarExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiProgressBarExample3,
    selectors: [["tui-progress-bar-example-3"]],
    decls: 2,
    vars: 2,
    consts: [["tuiProgressBar", "", "max", "100", "size", "s", 1, "progress", 3, "value"], ["tuiProgressBar", "", "max", "100", "size", "m", 1, "progress", 3, "value"]],
    template: function TuiProgressBarExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "progress", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "progress", 1);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("value", 60);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 70);
      }
    },
    directives: [progress_bar_component/* TuiProgressBarComponent */.i],
    styles: [".progress[_ngcontent-%COMP%]{width:50%;margin-bottom:1rem}@media screen and (max-width: 47.9625em){.progress[_ngcontent-%COMP%]{width:100%}}"],
    changeDetection: 0
  });
  return TuiProgressBarExample3;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/takeWhile.js
var takeWhile = __webpack_require__(70409);
// EXTERNAL MODULE: ./projects/kit/components/progress/progress-label/progress-label.component.ts
var progress_label_component = __webpack_require__(45590);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-bar/examples/4/index.ts








function TuiProgressBarExample4_label_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "label", 1);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelement */._UZ(2, "progress", 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const value_r1 = ctx.ngIf;
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", value_r1, "% ");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("max", ctx_r0.max)("value", value_r1);
  }
}

let TuiProgressBarExample4 = /*#__PURE__*/(() => {
  class TuiProgressBarExample4 {
    constructor(isCypress) {
      this.isCypress = isCypress;
      this.max = 100;
      this.value$ = this.isCypress ? (0,of.of)(30) : (0,timer/* timer */.H)(300, 300).pipe((0,map/* map */.U)(i => i + 30), (0,startWith/* startWith */.O)(30), (0,takeWhile/* takeWhile */.o)(value => value <= this.max));
    }

  }

  TuiProgressBarExample4.ɵfac = function TuiProgressBarExample4_Factory(t) {
    return new (t || TuiProgressBarExample4)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TUI_IS_CYPRESS));
  };

  TuiProgressBarExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiProgressBarExample4,
    selectors: [["tui-progress-bar-example-4"]],
    decls: 2,
    vars: 3,
    consts: [["tuiProgressLabel", "", "class", "label-wrapper", 4, "ngIf"], ["tuiProgressLabel", "", 1, "label-wrapper"], ["tuiProgressBar", "", 3, "max", "value"]],
    template: function TuiProgressBarExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtemplate */.YNc(0, TuiProgressBarExample4_label_0_Template, 3, 3, "label", 0);
        fesm2015_core/* ɵɵpipe */.ALo(1, "async");
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx.value$));
      }
    },
    directives: [common/* NgIf */.O5, progress_label_component/* TuiProgressLabelComponent */.v, progress_bar_component/* TuiProgressBarComponent */.i],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".label-wrapper[_ngcontent-%COMP%]{width:50%}@media screen and (max-width: 47.9625em){.label-wrapper[_ngcontent-%COMP%]{width:100%}}"],
    changeDetection: 0
  });
  return TuiProgressBarExample4;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-bar/examples/5/index.ts



let TuiProgressBarExample5 = /*#__PURE__*/(() => {
  class TuiProgressBarExample5 {}

  TuiProgressBarExample5.ɵfac = function TuiProgressBarExample5_Factory(t) {
    return new (t || TuiProgressBarExample5)();
  };

  TuiProgressBarExample5.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiProgressBarExample5,
    selectors: [["tui-progress-bar-example-5"]],
    decls: 3,
    vars: 2,
    consts: [["tuiProgressLabel", "", 1, "label-wrapper"], ["tuiProgressBar", "", "max", "4", "size", "s", 1, "progress", 3, "value"]],
    template: function TuiProgressBarExample5_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "label", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "progress", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "progress", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 3);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 1);
      }
    },
    directives: [progress_label_component/* TuiProgressLabelComponent */.v, progress_bar_component/* TuiProgressBarComponent */.i],
    styles: [".label-wrapper[_ngcontent-%COMP%]{width:50%}@media screen and (max-width: 47.9625em){.label-wrapper[_ngcontent-%COMP%]{width:100%}}.progress[_ngcontent-%COMP%]:nth-child(1){color:#a3ecb3}.progress[_ngcontent-%COMP%]:nth-child(2){color:#39b54a}"],
    changeDetection: 0
  });
  return TuiProgressBarExample5;
})();
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
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-bar/progress-bar.component.ts
















function ExampleProgressBarComponent_ng_template_1_Template(rf, ctx) {
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
    fesm2015_core/* ɵɵi18nStart */.tHW(7, 3);
    fesm2015_core/* ɵɵelement */._UZ(8, "strong");
    fesm2015_core/* ɵɵelement */._UZ(9, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-progress-bar-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(12, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(13, "tui-progress-bar-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(15, "tui-progress-bar-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(16, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(17, "tui-progress-bar-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(18, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(19, "tui-progress-bar-example-5");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.basicExample);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.multiColorExample);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.sizesExample);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.labelExample);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.stackedExample);
  }
}

function ExampleProgressBarComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 14);
    fesm2015_core/* ɵɵelement */._UZ(1, "a", 15);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleProgressBarComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 16);
    fesm2015_core/* ɵɵelement */._UZ(1, "a", 15);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleProgressBarComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 17);
  }
}

function ExampleProgressBarComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 18);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleProgressBarComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelement */._UZ(1, "progress", 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleProgressBarComponent_ng_template_2_ng_template_3_Template, 3, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleProgressBarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.value = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleProgressBarComponent_ng_template_2_ng_template_4_Template, 3, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleProgressBarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.max = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleProgressBarComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleProgressBarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleProgressBarComponent_ng_template_2_ng_template_6_Template, 4, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleProgressBarComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.color = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("value", ctx_r1.value)("max", ctx_r1.max)("size", ctx_r1.size)("color", ctx_r1.color);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.value);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.max);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.colorVariants)("documentationPropertyValue", ctx_r1.color);
  }
}

function ExampleProgressBarComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 19);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 20);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 21);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 22);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 23);
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

let ExampleProgressBarComponent = /*#__PURE__*/(() => {
  class ExampleProgressBarComponent {
    constructor() {
      this.value = 6;
      this.max = 10;
      this.sizeVariants = [`m`, `s`];
      this.size = this.sizeVariants[0];
      this.colorVariants = [`var(--tui-primary)`, `lightskyblue`, `#3682db`, `rgba(74, 201, 155, 1)`, `linear-gradient(to right, var(--tui-support-02), var(--tui-support-14), var(--tui-support-12))`];
      this.color = this.colorVariants[0];
      this.basicExample = {
        HTML: __webpack_require__.e(/* import() */ 95441).then(__webpack_require__.t.bind(__webpack_require__, 95441, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 36801).then(__webpack_require__.t.bind(__webpack_require__, 36801, 17)),
        LESS: __webpack_require__.e(/* import() */ 28663).then(__webpack_require__.t.bind(__webpack_require__, 28663, 17))
      };
      this.multiColorExample = {
        HTML: __webpack_require__.e(/* import() */ 86337).then(__webpack_require__.t.bind(__webpack_require__, 86337, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 64615).then(__webpack_require__.t.bind(__webpack_require__, 64615, 17)),
        LESS: __webpack_require__.e(/* import() */ 86052).then(__webpack_require__.t.bind(__webpack_require__, 86052, 17))
      };
      this.sizesExample = {
        HTML: __webpack_require__.e(/* import() */ 18492).then(__webpack_require__.t.bind(__webpack_require__, 18492, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 97041).then(__webpack_require__.t.bind(__webpack_require__, 97041, 17)),
        LESS: __webpack_require__.e(/* import() */ 41077).then(__webpack_require__.t.bind(__webpack_require__, 41077, 17))
      };
      this.labelExample = {
        HTML: __webpack_require__.e(/* import() */ 85020).then(__webpack_require__.t.bind(__webpack_require__, 85020, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 47518).then(__webpack_require__.t.bind(__webpack_require__, 47518, 17)),
        LESS: __webpack_require__.e(/* import() */ 26472).then(__webpack_require__.t.bind(__webpack_require__, 26472, 17))
      };
      this.stackedExample = {
        HTML: __webpack_require__.e(/* import() */ 10530).then(__webpack_require__.t.bind(__webpack_require__, 10530, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 10475).then(__webpack_require__.t.bind(__webpack_require__, 10475, 17)),
        LESS: __webpack_require__.e(/* import() */ 13401).then(__webpack_require__.t.bind(__webpack_require__, 4953, 17))
      };
      this.exampleModule = __webpack_require__.e(/* import() */ 78938).then(__webpack_require__.t.bind(__webpack_require__, 78938, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 67914).then(__webpack_require__.t.bind(__webpack_require__, 67914, 17));
    }

  }

  ExampleProgressBarComponent.ɵfac = function ExampleProgressBarComponent_Factory(t) {
    return new (t || ExampleProgressBarComponent)();
  };

  ExampleProgressBarComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleProgressBarComponent,
    selectors: [["example-tui-progress-bar"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8624557147577439768$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__1 = goog.getMsg("{$startTagDt}{$startTagCode}tuiProgressBar{$closeTagCode}{$closeTagDt}{$startTagDd} \u2013 attribute component for native html tag {$startTagCode}<progress />{$closeTagCode} . {$closeTagDd}", {
          "startTagDt": "\uFFFD#2\uFFFD",
          "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]",
          "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]",
          "closeTagDt": "\uFFFD/#2\uFFFD",
          "startTagDd": "\uFFFD#4\uFFFD",
          "closeTagDd": "\uFFFD/#4\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_8624557147577439768$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟4ed7053c5c74592c268021eeec7e822e85123eef␟8624557147577439768:${"\uFFFD#2\uFFFD"}:START_TAG_DT:${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:tuiProgressBar${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#4\uFFFD"}:START_TAG_DD: – attribute component for native html tag ${"[\uFFFD#3\uFFFD|\uFFFD#5\uFFFD]"}:START_TAG_CODE:<progress />${"[\uFFFD/#3\uFFFD|\uFFFD/#5\uFFFD]"}:CLOSE_TAG_CODE: . ${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_DD:`;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1959442075124179089$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__3 = goog.getMsg("{$startTagStrong}Usage:{$closeTagStrong}{$startTagCode}<progress tuiProgressBar value=\"40\" max=\"100\"></progress>{$closeTagCode} . ", {
          "startTagStrong": "\uFFFD#8\uFFFD",
          "closeTagStrong": "\uFFFD/#8\uFFFD",
          "startTagCode": "\uFFFD#9\uFFFD",
          "closeTagCode": "\uFFFD/#9\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_1959442075124179089$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟1ee2ab2cf8b61ffa7e26891d9ff65b84f589b500␟1959442075124179089:${"\uFFFD#8\uFFFD"}:START_TAG_STRONG:Usage:${"\uFFFD/#8\uFFFD"}:CLOSE_TAG_STRONG:${"\uFFFD#9\uFFFD"}:START_TAG_CODE:<progress tuiProgressBar value="40" max="100"></progress>${"\uFFFD/#9\uFFFD"}:CLOSE_TAG_CODE: . `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__5 = goog.getMsg("Basic");
        i18n_4 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1598512795966065598$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__7 = goog.getMsg("Multicolor");
        i18n_6 = MSG_EXTERNAL_1598512795966065598$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟d7a340fb882e7e5f76d0949bbfa10811361d7e93␟1598512795966065598:Multicolor`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__9 = goog.getMsg("Sizes");
        i18n_8 = MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8720306042838547123$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__11 = goog.getMsg("With label");
        i18n_10 = MSG_EXTERNAL_8720306042838547123$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟43cf922b4e2e453f2fcd8e43be9fd18e96f9b74c␟8720306042838547123:With label`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1765388942323233214$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__13 = goog.getMsg("Stacked progress bars");
        i18n_12 = MSG_EXTERNAL_1765388942323233214$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟dd4002bde6f74a0a30ec223b660ed5d4458c127d␟1765388942323233214:Stacked progress bars`;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4894529704152782945$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS___15 = goog.getMsg(" Native attribute {$startLink} value {$closeLink} of {$startTagCode}<progress />{$closeTagCode}", {
          "startLink": "\uFFFD#1\uFFFD",
          "closeLink": "\uFFFD/#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_4894529704152782945$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟ba74cd5237673a75a1bbbbfe36cf54bc1fcaff01␟4894529704152782945: Native attribute ${"\uFFFD#1\uFFFD"}:START_LINK: value ${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: of ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:<progress />${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5682634365450052698$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS___17 = goog.getMsg(" Native attribute {$startLink} max {$closeLink} of {$startTagCode}<progress />{$closeTagCode}", {
          "startLink": "\uFFFD#1\uFFFD",
          "closeLink": "\uFFFD/#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_5682634365450052698$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟1826095affba926e4075210d4d2fe1f0b5281214␟5682634365450052698: Native attribute ${"\uFFFD#1\uFFFD"}:START_LINK: max ${"\uFFFD/#1\uFFFD"}:CLOSE_LINK: of ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:<progress />${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5415347527315359817$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS___19 = goog.getMsg(" Size of the progress element ");
        i18n_18 = MSG_EXTERNAL_5415347527315359817$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟d9f4db967c9e78b6e28feafdf3c916002fb067c7␟5415347527315359817: Size of the progress element `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2864892605454291497$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS___21 = goog.getMsg(" Color of the progress indicator {$startParagraph} We recommend set solid color via {$startTagCode}<progress />{$closeTagCode} 's CSS-property {$startTagCode}color{$closeTagCode} (especially, if you support old not-chromium based Edge) {$closeParagraph}", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]",
          "closeParagraph": "\uFFFD/#1\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_2864892605454291497$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟7ae65b188c23ffa2ea105cdc7c4e30f3ae314321␟2864892605454291497: Color of the progress indicator ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: We recommend set solid color via ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:<progress />${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: 's CSS-property ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:color${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: (especially, if you support old not-chromium based Edge) ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      i18n_20 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_20);
      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8674861496686918589$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__23 = goog.getMsg(" Import {$startTagCode}TuiProgressModule{$closeTagCode} into a module where you want to use our attribute component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_22 = MSG_EXTERNAL_8674861496686918589$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟7bc158fa5ee50dd5e598c2cd6720474e7c814cab␟8674861496686918589: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiProgressModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our attribute component `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__25 = goog.getMsg("Add to the template:");
        i18n_24 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_BAR_PROGRESS_BAR_COMPONENT_TS__25;
      } else {
        i18n_24 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "ProgressBar", "package", "KIT", "path", "kit/components/progress/progress-bar"], ["pageTab", ""], i18n_0, i18n_2, ["id", "basic", "heading", i18n_4, 3, "content"], ["id", "multicolor", "heading", i18n_6, 3, "content"], ["id", "sizes", "heading", i18n_8, 3, "content"], ["id", "label", "heading", i18n_10, 3, "content"], ["id", "stacked", "heading", i18n_12, 3, "content"], ["tuiProgressBar", "", 1, "api-progress", 3, "value", "max", "size", "color"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "color", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_14, ["tuiLink", "", "href", "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress#attributes", "target", "_blank"], i18n_16, i18n_18, i18n_20, [1, "b-demo-steps"], i18n_22, ["filename", "myComponent.module.ts", 3, "code"], i18n_24, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleProgressBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleProgressBarComponent_ng_template_1_Template, 20, 5, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleProgressBarComponent_ng_template_2_Template, 7, 10, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleProgressBarComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiProgressBarExample1, TuiProgressBarExample2, TuiProgressBarExample3, TuiProgressBarExample4, TuiProgressBarExample5, demo_component/* TuiDocDemoComponent */.F, progress_bar_component/* TuiProgressBarComponent */.i, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, link_component/* TuiLinkComponent */.V, code_component/* TuiDocCodeComponent */.c],
    styles: [".api-progress[_ngcontent-%COMP%]{width:50%}@media screen and (max-width: 47.9625em){.api-progress[_ngcontent-%COMP%]{width:100%}}dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%]{display:inline;margin:0}"],
    changeDetection: 0
  });
  return ExampleProgressBarComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-bar/progress-bar.module.ts













let ExampleTuiProgressBarModule = /*#__PURE__*/(() => {
  class ExampleTuiProgressBarModule {}

  ExampleTuiProgressBarModule.ɵfac = function ExampleTuiProgressBarModule_Factory(t) {
    return new (t || ExampleTuiProgressBarModule)();
  };

  ExampleTuiProgressBarModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiProgressBarModule
  });
  ExampleTuiProgressBarModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, kit.TuiProgressModule, core.TuiLinkModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleProgressBarComponent))]]
  });
  return ExampleTuiProgressBarModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiProgressBarModule, {
    declarations: [ExampleProgressBarComponent, TuiProgressBarExample1, TuiProgressBarExample2, TuiProgressBarExample3, TuiProgressBarExample4, TuiProgressBarExample5],
    imports: [common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, kit.TuiProgressModule, core.TuiLinkModule, router/* RouterModule */.Bz],
    exports: [ExampleProgressBarComponent]
  });
})();

/***/ })

}]);