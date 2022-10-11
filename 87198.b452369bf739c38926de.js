"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[87198],{

/***/ 87198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleAnimationsModule": () => (/* binding */ ExampleAnimationsModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/label/label.component.ts
var label_component = __webpack_require__(88135);
// EXTERNAL MODULE: ./projects/kit/components/slider/slider.component.ts
var slider_component = __webpack_require__(47044);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/animations/examples/height-collapse/index.ts







function TuiHeightCollapseExample_div_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵtext */._uU(1, " A long time ago in a galaxy far, far away....\n");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("@tuiHeightCollapse", ctx_r0.getAnimation(ctx_r0.speed));
  }
}

class TuiHeightCollapseExample {
  constructor() {
    this.speed = 0;
    this.isOpen = false;
  }

  getAnimation(duration) {
    return {
      value: ``,
      params: {
        duration
      }
    };
  }

}

TuiHeightCollapseExample.ɵfac = function TuiHeightCollapseExample_Factory(t) {
  return new (t || TuiHeightCollapseExample)();
};

TuiHeightCollapseExample.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: TuiHeightCollapseExample,
  selectors: [["tui-height-collapse-example"]],
  inputs: {
    speed: "speed"
  },
  decls: 3,
  vars: 2,
  consts: [["tuiButton", "", "appearance", "outline", 1, "button", 3, "click"], ["class", "container", 4, "ngIf"], [1, "container"]],
  template: function TuiHeightCollapseExample_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
      fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiHeightCollapseExample_Template_button_click_0_listener() {
        return ctx.isOpen = !ctx.isOpen;
      });
      fesm2015_core/* ɵɵtext */._uU(1);
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵtemplate */.YNc(2, TuiHeightCollapseExample_div_2_Template, 2, 1, "div", 1);
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵadvance */.xp6(1);
      fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", ctx.isOpen ? "Hide me" : "Show opening crawl", "\n");
      fesm2015_core/* ɵɵadvance */.xp6(1);
      fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx.isOpen);
    }
  },
  directives: [button_component/* TuiButtonComponent */.v, common/* NgIf */.O5],
  styles: [".button[_ngcontent-%COMP%]{width:15rem;border-radius:1rem 1rem 0 0}.container[_ngcontent-%COMP%]{height:6rem;width:15rem;background:var(--tui-secondary);overflow:hidden;background:#222;color:var(--tui-warning-fill-night)}"],
  data: {
    animation: [core.tuiHeightCollapse]
  },
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiHeightCollapseExample.prototype, "getAnimation", null);
;// CONCATENATED MODULE: ./projects/demo/src/modules/animations/examples/width-collapse/index.ts







function TuiWidthCollapseExample_div_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "div", 2);
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("@tuiWidthCollapse", ctx_r0.getAnimation(ctx_r0.speed));
  }
}

class TuiWidthCollapseExample {
  constructor() {
    this.speed = 0;
    this.isOpen = true;
  }

  getAnimation(duration) {
    return {
      value: ``,
      params: {
        duration
      }
    };
  }

}

TuiWidthCollapseExample.ɵfac = function TuiWidthCollapseExample_Factory(t) {
  return new (t || TuiWidthCollapseExample)();
};

TuiWidthCollapseExample.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: TuiWidthCollapseExample,
  selectors: [["tui-width-collapse-example"]],
  inputs: {
    speed: "speed"
  },
  decls: 3,
  vars: 2,
  consts: [["tuiButton", "", "appearance", "outline", "size", "xs", 1, "switch", 3, "click"], ["class", "plasma", 4, "ngIf"], [1, "plasma"]],
  template: function TuiWidthCollapseExample_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "button", 0);
      fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiWidthCollapseExample_Template_button_click_0_listener() {
        return ctx.isOpen = !ctx.isOpen;
      });
      fesm2015_core/* ɵɵtext */._uU(1);
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵtemplate */.YNc(2, TuiWidthCollapseExample_div_2_Template, 1, 1, "div", 1);
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵadvance */.xp6(1);
      fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", ctx.isOpen ? "ON" : "OFF", "\n");
      fesm2015_core/* ɵɵadvance */.xp6(1);
      fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx.isOpen);
    }
  },
  directives: [button_component/* TuiButtonComponent */.v, common/* NgIf */.O5],
  styles: ["[_nghost-%COMP%]{display:flex;align-items:center}.switch[_ngcontent-%COMP%]{height:1rem;width:20%;border-radius:1rem 0 0 1rem}.plasma[_ngcontent-%COMP%]{width:80%;height:.5rem;border-radius:0 .75rem .75rem 0;background:linear-gradient(to bottom,var(--tui-support-03) 0%,white 50%,white 70%,var(--tui-support-03) 100%);filter:blur(1px)}"],
  data: {
    animation: [core.tuiWidthCollapse]
  },
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiWidthCollapseExample.prototype, "getAnimation", null);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/from.js + 6 modules
var from = __webpack_require__(94402);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(25917);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/concatMap.js
var concatMap = __webpack_require__(94612);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/delay.js + 1 modules
var delay = __webpack_require__(71289);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/repeat.js
var repeat = __webpack_require__(79196);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/startWith.js
var startWith = __webpack_require__(39761);
;// CONCATENATED MODULE: ./projects/demo/src/modules/animations/examples/fade-in/index.ts








function TuiFadeInExample_h3_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "h3");
    fesm2015_core/* ɵɵtext */._uU(1, " STOP KILLING VOLCANOES TO MAKE LAVA LAMPS ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("@tuiFadeIn", ctx_r0.getAnimation(ctx_r0.speed));
  }
}

class TuiFadeInExample {
  constructor() {
    this.speed = 0;
    this.isShown$ = (0,from/* from */.D)([false, true]).pipe((0,concatMap/* concatMap */.b)(val => (0,of.of)(val).pipe((0,delay/* delay */.g)(1.5 * this.speed))), (0,repeat/* repeat */.r)(), (0,startWith/* startWith */.O)(true));
  }

  getAnimation(duration) {
    return {
      value: ``,
      params: {
        duration
      }
    };
  }

}

TuiFadeInExample.ɵfac = function TuiFadeInExample_Factory(t) {
  return new (t || TuiFadeInExample)();
};

TuiFadeInExample.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: TuiFadeInExample,
  selectors: [["tui-fade-in-example"]],
  inputs: {
    speed: "speed"
  },
  decls: 3,
  vars: 3,
  consts: [[1, "poster"], [4, "ngIf"]],
  template: function TuiFadeInExample_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
      fesm2015_core/* ɵɵtemplate */.YNc(1, TuiFadeInExample_h3_1_Template, 2, 1, "h3", 1);
      fesm2015_core/* ɵɵpipe */.ALo(2, "async");
      fesm2015_core/* ɵɵelementEnd */.qZA();
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵadvance */.xp6(1);
      fesm2015_core/* ɵɵproperty */.Q6J("ngIf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 1, ctx.isShown$));
    }
  },
  directives: [common/* NgIf */.O5],
  pipes: [common/* AsyncPipe */.Ov],
  styles: [".poster[_ngcontent-%COMP%]{height:3rem;border:5px solid var(--tui-base-03);text-align:center}"],
  data: {
    animation: [core.tuiFadeIn]
  },
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiFadeInExample.prototype, "getAnimation", null);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/animations/examples/scale-in/index.ts







function TuiScaleInExample_li_5_tui_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-svg", 4);
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("@tuiScaleIn", ctx_r2.getAnimation(ctx_r2.speed));
  }
}

function TuiScaleInExample_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "li", 2);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiScaleInExample_li_5_Template_li_click_0_listener() {
      const restoredCtx = fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const task_r1 = restoredCtx.$implicit;
      return task_r1.completed = !task_r1.completed;
    });
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵtemplate */.YNc(2, TuiScaleInExample_li_5_tui_svg_2_Template, 1, 1, "tui-svg", 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const task_r1 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", task_r1.title, " ");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", task_r1.completed);
  }
}

class TuiScaleInExample {
  constructor() {
    this.speed = 0;
    this.todoTasks = [{
      title: `Install Angular`,
      completed: true
    }, {
      title: `Install Taiga UI`,
      completed: false
    }, {
      title: `Look into "Getting Started"`,
      completed: false
    }];
  }

  getAnimation(duration) {
    return {
      value: ``,
      params: {
        duration
      }
    };
  }

}

TuiScaleInExample.ɵfac = function TuiScaleInExample_Factory(t) {
  return new (t || TuiScaleInExample)();
};

TuiScaleInExample.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: TuiScaleInExample,
  selectors: [["tui-scale-in-example"]],
  inputs: {
    speed: "speed"
  },
  decls: 6,
  vars: 1,
  consts: [[1, "tui-list"], ["class", "tui-list__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "tui-list__item", 3, "click"], ["src", "tuiIconCheckLarge", 4, "ngIf"], ["src", "tuiIconCheckLarge"]],
  template: function TuiScaleInExample_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "h3");
      fesm2015_core/* ɵɵtext */._uU(1, "TODO:");
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
      fesm2015_core/* ɵɵtext */._uU(3, "(click on item if it is finished)");
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵelementStart */.TgZ(4, "ul", 0);
      fesm2015_core/* ɵɵtemplate */.YNc(5, TuiScaleInExample_li_5_Template, 3, 2, "li", 1);
      fesm2015_core/* ɵɵelementEnd */.qZA();
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵadvance */.xp6(5);
      fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.todoTasks);
    }
  },
  directives: [common/* NgForOf */.sg, common/* NgIf */.O5, svg_component/* TuiSvgComponent */.P],
  styles: ["li[_ngcontent-%COMP%]{height:2rem;cursor:pointer}"],
  data: {
    animation: [core.tuiScaleIn]
  },
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiScaleInExample.prototype, "getAnimation", null);
;// CONCATENATED MODULE: ./projects/demo/src/modules/animations/animations.component.ts













function ExampleAnimationsComponent_ng_template_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "span", 11);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const label_r2 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", label_r2, "ms ");
  }
}

function ExampleAnimationsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "label", 2);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "input", 3);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function ExampleAnimationsComponent_ng_template_1_Template_input_ngModelChange_1_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r3.speed = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 4);
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleAnimationsComponent_ng_template_1_span_3_Template, 2, 1, "span", 5);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-height-collapse-example", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-width-collapse-example", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 9);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-fade-in-example", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 10);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-scale-in-example", 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("segments", 5)("min", 0)("max", 3000)("step", 100)("ngModel", ctx_r0.speed);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx_r0.speedTicksLabels);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.heightCollapseExample);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("speed", ctx_r0.speed);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.widthCollapseExample);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("speed", ctx_r0.speed);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.fadeInExample);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("speed", ctx_r0.speed);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.scaleInExample);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("speed", ctx_r0.speed);
  }
}

let ExampleAnimationsComponent = /*#__PURE__*/(() => {
  class ExampleAnimationsComponent {
    constructor() {
      this.speed = 1000;
      this.speedTicksLabels = [0, 600, 1200, 1800, 2400, 3000];
      this.heightCollapseExample = {
        HTML: __webpack_require__.e(/* import() */ 57683).then(__webpack_require__.t.bind(__webpack_require__, 57683, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 46770).then(__webpack_require__.t.bind(__webpack_require__, 46770, 17)),
        LESS: __webpack_require__.e(/* import() */ 86233).then(__webpack_require__.t.bind(__webpack_require__, 86233, 17))
      };
      this.widthCollapseExample = {
        HTML: __webpack_require__.e(/* import() */ 38979).then(__webpack_require__.t.bind(__webpack_require__, 38979, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 66292).then(__webpack_require__.t.bind(__webpack_require__, 66292, 17)),
        LESS: __webpack_require__.e(/* import() */ 38955).then(__webpack_require__.t.bind(__webpack_require__, 38955, 17))
      };
      this.fadeInExample = {
        HTML: __webpack_require__.e(/* import() */ 80570).then(__webpack_require__.t.bind(__webpack_require__, 80570, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 2212).then(__webpack_require__.t.bind(__webpack_require__, 2212, 17)),
        LESS: __webpack_require__.e(/* import() */ 19166).then(__webpack_require__.t.bind(__webpack_require__, 19166, 17))
      };
      this.scaleInExample = {
        HTML: __webpack_require__.e(/* import() */ 37370).then(__webpack_require__.t.bind(__webpack_require__, 37370, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 35861).then(__webpack_require__.t.bind(__webpack_require__, 35861, 17)),
        LESS: __webpack_require__.e(/* import() */ 83165).then(__webpack_require__.t.bind(__webpack_require__, 83165, 17))
      };
    }

  }

  ExampleAnimationsComponent.ɵfac = function ExampleAnimationsComponent_Factory(t) {
    return new (t || ExampleAnimationsComponent)();
  };

  ExampleAnimationsComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleAnimationsComponent,
    selectors: [["example-animations"]],
    decls: 2,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2709889076680757048$$PROJECTS_DEMO_SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS_1 = goog.getMsg("Animations");
        i18n_0 = MSG_EXTERNAL_2709889076680757048$$PROJECTS_DEMO_SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟d856176ecb16df2b1e026cdd78ff47f5617c1d8f␟2709889076680757048:Animations`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6578685648644320764$$PROJECTS_DEMO_SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS__3 = goog.getMsg("tuiHeightCollapse");
        i18n_2 = MSG_EXTERNAL_6578685648644320764$$PROJECTS_DEMO_SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟6ce57a7a4a8c0efdb9cd9763d89fe5640d02869f␟6578685648644320764:tuiHeightCollapse`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4773585259038695433$$PROJECTS_DEMO_SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS__5 = goog.getMsg("tuiWidthCollapse");
        i18n_4 = MSG_EXTERNAL_4773585259038695433$$PROJECTS_DEMO_SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟ea61c9fff1171068ac9498268f922916ccac68ef␟4773585259038695433:tuiWidthCollapse`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3526834327837928544$$PROJECTS_DEMO_SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS__7 = goog.getMsg("tuiFadeIn");
        i18n_6 = MSG_EXTERNAL_3526834327837928544$$PROJECTS_DEMO_SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟d8f0786595d548f8b778dfd18cf819e585efe62e␟3526834327837928544:tuiFadeIn`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5629053012471828640$$PROJECTS_DEMO_SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS__9 = goog.getMsg("tuiScaleIn");
        i18n_8 = MSG_EXTERNAL_5629053012471828640$$PROJECTS_DEMO_SRC_MODULES_ANIMATIONS_ANIMATIONS_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟6c0dd4468bea2f1564e06b0781ee7dc2b055e0ea␟5629053012471828640:tuiScaleIn`;
      }

      return [["header", i18n_0, "package", "CORE", "path", "core/animations"], ["pageTab", ""], ["tuiLabel", "Speed of animations:"], ["tuiSlider", "", "type", "range", 3, "segments", "min", "max", "step", "ngModel", "ngModelChange"], [1, "labels"], ["class", "label", 4, "ngFor", "ngForOf"], ["id", "tuiHeightCollapse", "heading", i18n_2, 3, "content"], [3, "speed"], ["id", "tuiWidthCollapse", "heading", i18n_4, 3, "content"], ["id", "tuiFadeIn", "heading", i18n_6, 3, "content"], ["id", "tuiScaleIn", "heading", i18n_8, 3, "content"], [1, "label"]];
    },
    template: function ExampleAnimationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleAnimationsComponent_ng_template_1_Template, 12, 14, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, label_component/* TuiLabelComponent */.A, slider_component/* TuiSliderComponent */.i, fesm2015_forms/* RangeValueAccessor */.eT, fesm2015_forms/* DefaultValueAccessor */.Fj, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, common/* NgForOf */.sg, example_component/* TuiDocExampleComponent */.f, TuiHeightCollapseExample, TuiWidthCollapseExample, TuiFadeInExample, TuiScaleInExample],
    styles: [".labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],
    changeDetection: 0
  });
  return ExampleAnimationsComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/animations/animations.module.ts














let ExampleAnimationsModule = /*#__PURE__*/(() => {
  class ExampleAnimationsModule {}

  ExampleAnimationsModule.ɵfac = function ExampleAnimationsModule_Factory(t) {
    return new (t || ExampleAnimationsModule)();
  };

  ExampleAnimationsModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleAnimationsModule
  });
  ExampleAnimationsModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, public_api/* TuiAddonDocModule */.fV, kit.TuiSliderModule, core.TuiButtonModule, cdk.TuiLetModule, core.TuiLabelModule, core.TuiSvgModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleAnimationsComponent))]]
  });
  return ExampleAnimationsModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleAnimationsModule, {
    declarations: [ExampleAnimationsComponent, TuiHeightCollapseExample, TuiWidthCollapseExample, TuiFadeInExample, TuiScaleInExample],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, public_api/* TuiAddonDocModule */.fV, kit.TuiSliderModule, core.TuiButtonModule, cdk.TuiLetModule, core.TuiLabelModule, core.TuiSvgModule, router/* RouterModule */.Bz]
  });
})();

/***/ })

}]);