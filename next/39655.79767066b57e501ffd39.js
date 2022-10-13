"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[39655],{

/***/ 39655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiProgressCircleModule": () => (/* binding */ ExampleTuiProgressCircleModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
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
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/takeWhile.js
var takeWhile = __webpack_require__(70409);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/progress/progress-circle/progress-circle.component.ts
var progress_circle_component = __webpack_require__(86214);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-circle/examples/1/index.ts






let TuiProgressCircleExample1 = /*#__PURE__*/(() => {
  class TuiProgressCircleExample1 {
    constructor(isCypress) {
      this.isCypress = isCypress;
      this.max = 100;
      this.value$ = this.isCypress ? (0,of.of)(30) : (0,timer/* timer */.H)(300, 200).pipe((0,map/* map */.U)(i => i + 30), (0,startWith/* startWith */.O)(30), (0,takeWhile/* takeWhile */.o)(value => value <= this.max));
    }

  }

  TuiProgressCircleExample1.ɵfac = function TuiProgressCircleExample1_Factory(t) {
    return new (t || TuiProgressCircleExample1)(core/* ɵɵdirectiveInject */.Y36(cdk.TUI_IS_CYPRESS));
  };

  TuiProgressCircleExample1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiProgressCircleExample1,
    selectors: [["tui-progress-circle-example-1"]],
    decls: 2,
    vars: 4,
    consts: [["size", "xl", 3, "max", "value"]],
    template: function TuiProgressCircleExample1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelement */._UZ(0, "tui-progress-circle", 0);
        core/* ɵɵpipe */.ALo(1, "async");
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("max", ctx.max)("value", core/* ɵɵpipeBind1 */.lcZ(1, 2, ctx.value$) || 0);
      }
    },
    directives: [progress_circle_component/* TuiProgressCircleComponent */.B],
    pipes: [common/* AsyncPipe */.Ov],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiProgressCircleExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-circle/examples/2/index.ts


let TuiProgressCircleExample2 = /*#__PURE__*/(() => {
  class TuiProgressCircleExample2 {}

  TuiProgressCircleExample2.ɵfac = function TuiProgressCircleExample2_Factory(t) {
    return new (t || TuiProgressCircleExample2)();
  };

  TuiProgressCircleExample2.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiProgressCircleExample2,
    selectors: [["tui-progress-circle-example-2"]],
    decls: 4,
    vars: 8,
    consts: [["size", "xl", 3, "max", "value"], ["size", "l", 3, "max", "value"], ["size", "m", 3, "max", "value"], ["size", "s", 3, "max", "value"]],
    template: function TuiProgressCircleExample2_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelement */._UZ(0, "tui-progress-circle", 0);
        core/* ɵɵelement */._UZ(1, "tui-progress-circle", 1);
        core/* ɵɵelement */._UZ(2, "tui-progress-circle", 2);
        core/* ɵɵelement */._UZ(3, "tui-progress-circle", 3);
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("max", 100)("value", 60);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("max", 100)("value", 60);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("max", 100)("value", 60);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("max", 100)("value", 60);
      }
    },
    directives: [progress_circle_component/* TuiProgressCircleComponent */.B],
    styles: ["[_nghost-%COMP%]{display:flex}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{margin-right:1rem}"],
    changeDetection: 0
  });
  return TuiProgressCircleExample2;
})();
// EXTERNAL MODULE: ./projects/kit/components/progress/progress-label/progress-label.component.ts
var progress_label_component = __webpack_require__(45590);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-circle/examples/3/index.ts








function TuiProgressCircleExample3_label_0_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "label", 1);
    core/* ɵɵelementStart */.TgZ(1, "span", 2);
    core/* ɵɵtext */._uU(2, "COMPLETED");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(3, "span", 3);
    core/* ɵɵtext */._uU(4);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(5, "tui-progress-circle", 4);
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const value_r1 = ctx.ngIf;
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵtextInterpolate1 */.hij("", value_r1, "%");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("max", ctx_r0.max)("value", value_r1);
  }
}

let TuiProgressCircleExample3 = /*#__PURE__*/(() => {
  class TuiProgressCircleExample3 {
    constructor(isCypress) {
      this.isCypress = isCypress;
      this.max = 100;
      this.value$ = this.isCypress ? (0,of.of)(30) : (0,timer/* timer */.H)(300, 200).pipe((0,map/* map */.U)(i => i + 30), (0,startWith/* startWith */.O)(30), (0,takeWhile/* takeWhile */.o)(value => value <= this.max));
    }

  }

  TuiProgressCircleExample3.ɵfac = function TuiProgressCircleExample3_Factory(t) {
    return new (t || TuiProgressCircleExample3)(core/* ɵɵdirectiveInject */.Y36(cdk.TUI_IS_CYPRESS));
  };

  TuiProgressCircleExample3.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiProgressCircleExample3,
    selectors: [["tui-progress-circle-example-3"]],
    decls: 2,
    vars: 3,
    consts: [["tuiProgressLabel", "", 4, "ngIf"], ["tuiProgressLabel", ""], [1, "text"], [1, "percent"], ["size", "xl", 3, "max", "value"]],
    template: function TuiProgressCircleExample3_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵtemplate */.YNc(0, TuiProgressCircleExample3_label_0_Template, 6, 3, "label", 0);
        core/* ɵɵpipe */.ALo(1, "async");
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("ngIf", core/* ɵɵpipeBind1 */.lcZ(1, 1, ctx.value$));
      }
    },
    directives: [common/* NgIf */.O5, progress_label_component/* TuiProgressLabelComponent */.v, progress_circle_component/* TuiProgressCircleComponent */.B],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".text[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-03)}.percent[_ngcontent-%COMP%]{font:var(--tui-font-heading-6)}"],
    changeDetection: 0
  });
  return TuiProgressCircleExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-circle/examples/4/index.ts


let TuiProgressCircleExample4 = /*#__PURE__*/(() => {
  class TuiProgressCircleExample4 {}

  TuiProgressCircleExample4.ɵfac = function TuiProgressCircleExample4_Factory(t) {
    return new (t || TuiProgressCircleExample4)();
  };

  TuiProgressCircleExample4.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: TuiProgressCircleExample4,
    selectors: [["tui-progress-circle-example-4"]],
    decls: 10,
    vars: 8,
    consts: [["size", "xl", "color", "url(#gradient)", 3, "max", "value"], ["size", "l", 1, "progress", 3, "max", "value"], ["size", "m", 1, "progress", 3, "max", "value"], ["size", "s", 1, "progress", 3, "max", "value"], ["width", "0", "height", "0"], ["id", "gradient", "gradientTransform", "rotate(95)"], ["offset", "0%", "stop-color", "var(--tui-support-02)"], ["offset", "45%", "stop-color", "var(--tui-support-14)"], ["offset", "100%", "stop-color", "var(--tui-support-12)"]],
    template: function TuiProgressCircleExample4_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelement */._UZ(0, "tui-progress-circle", 0);
        core/* ɵɵelement */._UZ(1, "tui-progress-circle", 1);
        core/* ɵɵelement */._UZ(2, "tui-progress-circle", 2);
        core/* ɵɵelement */._UZ(3, "tui-progress-circle", 3);
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(4, "svg", 4);
        core/* ɵɵelementStart */.TgZ(5, "defs");
        core/* ɵɵelementStart */.TgZ(6, "linearGradient", 5);
        core/* ɵɵelement */._UZ(7, "stop", 6);
        core/* ɵɵelement */._UZ(8, "stop", 7);
        core/* ɵɵelement */._UZ(9, "stop", 8);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵproperty */.Q6J("max", 4)("value", 3);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("max", 4)("value", 3);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("max", 4)("value", 3);
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("max", 4)("value", 3);
      }
    },
    directives: [progress_circle_component/* TuiProgressCircleComponent */.B],
    styles: ["[_nghost-%COMP%]{display:flex}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{margin-right:1rem}.progress[data-size=l][_ngcontent-%COMP%]{color:var(--tui-support-01)}.progress[data-size=m][_ngcontent-%COMP%]{color:var(--tui-support-03)}.progress[data-size=s][_ngcontent-%COMP%]{color:var(--tui-support-09)}"],
    changeDetection: 0
  });
  return TuiProgressCircleExample4;
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
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-circle/progress-circle.component.ts














function ExampleProgressCircleComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "dl");
    core/* ɵɵi18nStart */.tHW(1, 7);
    core/* ɵɵelementStart */.TgZ(2, "dt");
    core/* ɵɵelement */._UZ(3, "code");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(4, "dd");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "tui-doc-example", 8);
    core/* ɵɵelement */._UZ(6, "tui-progress-circle-example-1");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(7, "tui-doc-example", 9);
    core/* ɵɵelement */._UZ(8, "tui-progress-circle-example-2");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(9, "tui-doc-example", 10);
    core/* ɵɵelement */._UZ(10, "tui-progress-circle-example-3");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(11, "tui-doc-example", 11);
    core/* ɵɵelement */._UZ(12, "tui-progress-circle-example-4");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.basicExample);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.sizesExample);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.labelExample);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.colorsExample);
  }
}

function ExampleProgressCircleComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18nStart */.tHW(0, 17);
    core/* ɵɵelement */._UZ(1, "code");
    core/* ɵɵelement */._UZ(2, "code");
    core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleProgressCircleComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18nStart */.tHW(0, 18);
    core/* ɵɵelement */._UZ(1, "p");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵelement */._UZ(3, "code");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleProgressCircleComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleProgressCircleComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵi18nStart */.tHW(0, 20);
    core/* ɵɵelementStart */.TgZ(1, "p");
    core/* ɵɵelement */._UZ(2, "code");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleProgressCircleComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = core/* ɵɵgetCurrentView */.EpF();

    core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    core/* ɵɵelement */._UZ(1, "tui-progress-circle", 12);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    core/* ɵɵtemplate */.YNc(3, ExampleProgressCircleComponent_ng_template_2_ng_template_3_Template, 3, 0, "ng-template", 13);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleProgressCircleComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r7 = core/* ɵɵnextContext */.oxw();
      return ctx_r7.value = $event;
    });
    core/* ɵɵtemplate */.YNc(4, ExampleProgressCircleComponent_ng_template_2_ng_template_4_Template, 4, 0, "ng-template", 14);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleProgressCircleComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r9 = core/* ɵɵnextContext */.oxw();
      return ctx_r9.max = $event;
    });
    core/* ɵɵtemplate */.YNc(5, ExampleProgressCircleComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 15);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleProgressCircleComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r10 = core/* ɵɵnextContext */.oxw();
      return ctx_r10.size = $event;
    });
    core/* ɵɵtemplate */.YNc(6, ExampleProgressCircleComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 16);
    core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleProgressCircleComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      core/* ɵɵrestoreView */.CHM(_r8);
      const ctx_r11 = core/* ɵɵnextContext */.oxw();
      return ctx_r11.color = $event;
    });
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("value", ctx_r1.value)("max", ctx_r1.max)("size", ctx_r1.size)("color", ctx_r1.color);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.value);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.max);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.colorVariants)("documentationPropertyValue", ctx_r1.color);
  }
}

function ExampleProgressCircleComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "ol", 21);
    core/* ɵɵelementStart */.TgZ(1, "li");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵi18nStart */.tHW(3, 22);
    core/* ɵɵelement */._UZ(4, "code");
    core/* ɵɵi18nEnd */.N_p();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(5, "tui-doc-code", 23);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(6, "li");
    core/* ɵɵelementStart */.TgZ(7, "p");
    core/* ɵɵi18n */.SDv(8, 24);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(9, "tui-doc-code", 25);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleModule);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("code", ctx_r2.exampleHtml);
  }
}

let ExampleProgressCircleComponent = /*#__PURE__*/(() => {
  class ExampleProgressCircleComponent {
    constructor() {
      this.value = 6;
      this.max = 10;
      this.sizeVariants = [`s`, `m`, `l`, `xl`];
      this.size = this.sizeVariants[1];
      this.colorVariants = [`var(--tui-primary)`, `lightskyblue`, `#3682db`, `rgba(74, 201, 155, 1)`, `url(#gradient)`];
      this.color = this.colorVariants[0];
      this.basicExample = {
        HTML: __webpack_require__.e(/* import() */ 15331).then(__webpack_require__.t.bind(__webpack_require__, 15331, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 45121).then(__webpack_require__.t.bind(__webpack_require__, 45121, 17))
      };
      this.sizesExample = {
        HTML: __webpack_require__.e(/* import() */ 46223).then(__webpack_require__.t.bind(__webpack_require__, 46223, 17)),
        LESS: __webpack_require__.e(/* import() */ 82190).then(__webpack_require__.t.bind(__webpack_require__, 82190, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 82413).then(__webpack_require__.t.bind(__webpack_require__, 82413, 17))
      };
      this.labelExample = {
        HTML: __webpack_require__.e(/* import() */ 47148).then(__webpack_require__.t.bind(__webpack_require__, 47148, 17)),
        LESS: __webpack_require__.e(/* import() */ 39317).then(__webpack_require__.t.bind(__webpack_require__, 39317, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 92633).then(__webpack_require__.t.bind(__webpack_require__, 92633, 17))
      };
      this.colorsExample = {
        HTML: __webpack_require__.e(/* import() */ 27979).then(__webpack_require__.t.bind(__webpack_require__, 27979, 17)),
        LESS: __webpack_require__.e(/* import() */ 26481).then(__webpack_require__.t.bind(__webpack_require__, 26481, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 1322).then(__webpack_require__.t.bind(__webpack_require__, 1322, 17))
      };
      this.exampleModule = __webpack_require__.e(/* import() */ 30179).then(__webpack_require__.t.bind(__webpack_require__, 30179, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 89064).then(__webpack_require__.t.bind(__webpack_require__, 89064, 17));
    }

  }

  ExampleProgressCircleComponent.ɵfac = function ExampleProgressCircleComponent_Factory(t) {
    return new (t || ExampleProgressCircleComponent)();
  };

  ExampleProgressCircleComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleProgressCircleComponent,
    selectors: [["example-tui-progress-circle"]],
    decls: 10,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9220911365799277601$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__1 = goog.getMsg("{$startTagDt}{$startTagCode}<tui-progress-circle />{$closeTagCode}{$closeTagDt}{$startTagDd} is a component to visually represent the completion of a process or operation (as a partially filled circle/ring). It shows how much has been completed and how much remains. {$closeTagDd}", {
          "startTagDt": "\uFFFD#2\uFFFD",
          "startTagCode": "\uFFFD#3\uFFFD",
          "closeTagCode": "\uFFFD/#3\uFFFD",
          "closeTagDt": "\uFFFD/#2\uFFFD",
          "startTagDd": "\uFFFD#4\uFFFD",
          "closeTagDd": "\uFFFD/#4\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_9220911365799277601$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟77b397b33e9cd1d22dcfb87a2facf3e2a9ab2b97␟9220911365799277601:${"\uFFFD#2\uFFFD"}:START_TAG_DT:${"\uFFFD#3\uFFFD"}:START_TAG_CODE:<tui-progress-circle />${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_DT:${"\uFFFD#4\uFFFD"}:START_TAG_DD: is a component to visually represent the completion of a process or operation (as a partially filled circle/ring). It shows how much has been completed and how much remains. ${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_DD:`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__5 = goog.getMsg("Sizes");
        i18n_4 = MSG_EXTERNAL_2165905371258601036$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8720306042838547123$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__7 = goog.getMsg("With label");
        i18n_6 = MSG_EXTERNAL_8720306042838547123$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟43cf922b4e2e453f2fcd8e43be9fd18e96f9b74c␟8720306042838547123:With label`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5267754967054916445$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__9 = goog.getMsg("Colors");
        i18n_8 = MSG_EXTERNAL_5267754967054916445$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟e93acd761801b3f2077278b282163a9c03283b8c␟5267754967054916445:Colors`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7359913426686326253$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS___11 = goog.getMsg(" This property specifies how much of the task that has been completed. It must be a valid floating point number between 0 and {$startTagCode}max{$closeTagCode} , or between 0 and 1 if {$startTagCode}max{$closeTagCode} is omitted. ", {
          "startTagCode": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]",
          "closeTagCode": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"
        });
        i18n_10 = MSG_EXTERNAL_7359913426686326253$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟ff15d3bc09a3b1dcddd1094a4120e7f6a39dba0f␟7359913426686326253: This property specifies how much of the task that has been completed. It must be a valid floating point number between 0 and ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_TAG_CODE:max${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_TAG_CODE: , or between 0 and 1 if ${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_TAG_CODE:max${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_TAG_CODE: is omitted. `;
      }

      i18n_10 = core/* ɵɵi18nPostprocess */.Zx4(i18n_10);
      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3982028735468302053$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS___13 = goog.getMsg("{$startParagraph}This property describes how much work the task indicated by the progress element requires.{$closeParagraph}{$startParagraph} The default value is {$startTagCode}1{$closeTagCode} . {$closeParagraph}", {
          "startParagraph": "[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]",
          "closeParagraph": "[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]",
          "startTagCode": "\uFFFD#3\uFFFD",
          "closeTagCode": "\uFFFD/#3\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_3982028735468302053$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟dd8ee06f37b58d3130157a67e55b27b6a81efbb1␟3982028735468302053:${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_PARAGRAPH:This property describes how much work the task indicated by the progress element requires.${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_PARAGRAPH:${"[\uFFFD#1\uFFFD|\uFFFD#2\uFFFD]"}:START_PARAGRAPH: The default value is ${"\uFFFD#3\uFFFD"}:START_TAG_CODE:1${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_CODE: . ${"[\uFFFD/#1\uFFFD|\uFFFD/#2\uFFFD]"}:CLOSE_PARAGRAPH:`;
      }

      i18n_12 = core/* ɵɵi18nPostprocess */.Zx4(i18n_12);
      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2635824333932204053$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS___15 = goog.getMsg(" Size of the circle. ");
        i18n_14 = MSG_EXTERNAL_2635824333932204053$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟d2c6b778ff1deaef80c19bdbca3f34ea9c829704␟2635824333932204053: Size of the circle. `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8131965803907340765$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS___17 = goog.getMsg(" Color of the progress indicator. {$startParagraph} We recommend set solid color via CSS-property {$startTagCode}color{$closeTagCode} . {$closeParagraph}", {
          "startParagraph": "\uFFFD#1\uFFFD",
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "closeParagraph": "\uFFFD/#1\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_8131965803907340765$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟b64cbf14678cc3f5a296127f19e7fe1eac20ddbf␟8131965803907340765: Color of the progress indicator. ${"\uFFFD#1\uFFFD"}:START_PARAGRAPH: We recommend set solid color via CSS-property ${"\uFFFD#2\uFFFD"}:START_TAG_CODE:color${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: . ${"\uFFFD/#1\uFFFD"}:CLOSE_PARAGRAPH:`;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1544037559221110858$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__19 = goog.getMsg(" Import {$startTagCode}TuiProgressModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_1544037559221110858$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟b2342227392ebea4df6aa6cba85e57fb10b5feb9␟1544037559221110858: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiProgressModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__21 = goog.getMsg("Add to the template:");
        i18n_20 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_PROGRESS_CIRCLE_PROGRESS_CIRCLE_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "ProgressCircle", "package", "KIT", "path", "kit/components/progress/progress-circle"], ["pageTab", ""], ["width", "0", "height", "0"], ["id", "gradient", "gradientTransform", "rotate(95)"], ["offset", "0%", "stop-color", "var(--tui-support-02)"], ["offset", "45%", "stop-color", "var(--tui-support-14) "], ["offset", "100%", "stop-color", "var(--tui-support-12)"], i18n_0, ["id", "basic", "heading", i18n_2, 3, "content"], ["id", "size", "heading", i18n_4, 3, "content"], ["id", "label", "heading", i18n_6, 3, "content"], ["id", "colors", "heading", i18n_8, 3, "content"], [3, "value", "max", "size", "color"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "max", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "color", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], i18n_10, i18n_12, i18n_14, i18n_16, [1, "b-demo-steps"], i18n_18, ["filename", "myComponent.module.ts", 3, "code"], i18n_20, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleProgressCircleComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleProgressCircleComponent_ng_template_1_Template, 13, 4, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, ExampleProgressCircleComponent_ng_template_2_Template, 7, 10, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(3, ExampleProgressCircleComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵnamespaceSVG */.O4$();
        core/* ɵɵelementStart */.TgZ(4, "svg", 2);
        core/* ɵɵelementStart */.TgZ(5, "defs");
        core/* ɵɵelementStart */.TgZ(6, "linearGradient", 3);
        core/* ɵɵelement */._UZ(7, "stop", 4);
        core/* ɵɵelement */._UZ(8, "stop", 5);
        core/* ɵɵelement */._UZ(9, "stop", 6);
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiProgressCircleExample1, TuiProgressCircleExample2, TuiProgressCircleExample3, TuiProgressCircleExample4, demo_component/* TuiDocDemoComponent */.F, progress_circle_component/* TuiProgressCircleComponent */.B, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    styles: ["dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%]{display:inline;margin:0}"],
    changeDetection: 0
  });
  return ExampleProgressCircleComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/progress-circle/progress-circle.module.ts











let ExampleTuiProgressCircleModule = /*#__PURE__*/(() => {
  class ExampleTuiProgressCircleModule {}

  ExampleTuiProgressCircleModule.ɵfac = function ExampleTuiProgressCircleModule_Factory(t) {
    return new (t || ExampleTuiProgressCircleModule)();
  };

  ExampleTuiProgressCircleModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiProgressCircleModule
  });
  ExampleTuiProgressCircleModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, kit.TuiProgressModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleProgressCircleComponent))]]
  });
  return ExampleTuiProgressCircleModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiProgressCircleModule, {
    declarations: [ExampleProgressCircleComponent, TuiProgressCircleExample1, TuiProgressCircleExample2, TuiProgressCircleExample3, TuiProgressCircleExample4],
    imports: [common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, kit.TuiProgressModule, router/* RouterModule */.Bz]
  });
})();

/***/ })

}]);