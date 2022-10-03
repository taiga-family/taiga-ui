"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[88708],{

/***/ 88708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiFilterModule": () => (/* binding */ ExampleTuiFilterModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/filter/filter.component.ts
var filter_component = __webpack_require__(16166);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/filter/examples/1/index.ts





let TuiFilterExample1 = /*#__PURE__*/(() => {
  class TuiFilterExample1 {
    constructor() {
      this.form = new fesm2015_forms/* FormGroup */.cw({
        filters: new fesm2015_forms/* FormControl */.NI([`Food`])
      });
      this.items = [`News`, `Food`, `Clothes`, `Popular`, `Goods`, `Furniture`, `Tech`, `Building materials`];

      this.disabledItemHandler = item => item.length < 7;
    }

  }

  TuiFilterExample1.ɵfac = function TuiFilterExample1_Factory(t) {
    return new (t || TuiFilterExample1)();
  };

  TuiFilterExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFilterExample1,
    selectors: [["tui-filter-example-1"]],
    decls: 6,
    vars: 6,
    consts: [[3, "formGroup"], ["formControlName", "filters", "size", "s", 3, "disabledItemHandler", "items"]],
    template: function TuiFilterExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-filter", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "pre");
        fesm2015_core/* ɵɵtext */._uU(4);
        fesm2015_core/* ɵɵpipe */.ALo(5, "json");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.form);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("disabledItemHandler", ctx.disabledItemHandler)("items", ctx.items);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Form value: ", fesm2015_core/* ɵɵpipeBind1 */.lcZ(5, 4, ctx.form.value), "");
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, filter_component/* TuiFilterComponent */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    pipes: [common/* JsonPipe */.Ts],
    styles: ["[_nghost-%COMP%]{max-width:34.375rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 .75rem}.filters[_ngcontent-%COMP%]{display:inline}.tag[_ngcontent-%COMP%]{margin:0 .25rem .25rem 0}"],
    changeDetection: 0
  });
  return TuiFilterExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/filter/examples/2/index.ts






function TuiFilterExample2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0);
  }

  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r2.title, "\n");
  }
}

const COMPLETED = {
  title: `Done`,
  operations: [{
    amount: 100
  }, {
    amount: 200
  }]
};
let TuiFilterExample2 = /*#__PURE__*/(() => {
  class TuiFilterExample2 {
    constructor() {
      this.form = new fesm2015_forms/* FormGroup */.cw({
        filters: new fesm2015_forms/* FormControl */.NI([{
          title: `Drafts`
        }])
      });
      this.items = [COMPLETED, {
        title: `Drafts`,
        operations: [{
          amount: 100
        }, {
          amount: 200
        }, {
          amount: 100
        }, {
          amount: 100
        }]
      }, {
        title: `For sign`,
        operations: []
      }, {
        title: `Queue`,
        operations: [{
          amount: 100
        }, {
          amount: 200
        }, {
          amount: 100
        }, {
          amount: 200
        }, {
          amount: 100
        }, {
          amount: 200
        }]
      }];

      this.identityMatcher = (item1, item2) => item1.title === item2.title;

      this.badgeHandler = item => item.operations.length;
    }

  }

  TuiFilterExample2.ɵfac = function TuiFilterExample2_Factory(t) {
    return new (t || TuiFilterExample2)();
  };

  TuiFilterExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFilterExample2,
    selectors: [["tui-filter-example-2"]],
    decls: 8,
    vars: 8,
    consts: [[3, "formGroup"], ["formControlName", "filters", 3, "identityMatcher", "content", "badgeHandler", "items"], ["content", ""]],
    template: function TuiFilterExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-filter", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiFilterExample2_ng_template_2_Template, 1, 1, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "pre");
        fesm2015_core/* ɵɵtext */._uU(6);
        fesm2015_core/* ɵɵpipe */.ALo(7, "json");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(3);

        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.form);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("identityMatcher", ctx.identityMatcher)("content", _r0)("badgeHandler", ctx.badgeHandler)("items", ctx.items);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Form value: ", fesm2015_core/* ɵɵpipeBind1 */.lcZ(7, 6, ctx.form.value), "");
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, filter_component/* TuiFilterComponent */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u],
    pipes: [common/* JsonPipe */.Ts],
    styles: ["[_nghost-%COMP%]{max-width:34.375rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 .75rem}.filters[_ngcontent-%COMP%]{display:inline}.tag[_ngcontent-%COMP%]{margin:0 .25rem .25rem 0}"],
    changeDetection: 0
  });
  return TuiFilterExample2;
})();
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/filter/examples/3/index.ts







function TuiFilterExample3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-svg", 3);
  }

  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", item_r2, " ");
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("src", ctx_r1.getItemIcon(item_r2));
  }
}

const getIcon = {
  Calendar: `tuiIconCalendarLarge`,
  Favorite: `tuiIconStarLarge`,
  Messages: `tuiIconCommentLarge`,
  FAQ: `tuiIconHelpCircleLarge`,
  Settings: `tuiIconSettingsLarge`
};
let TuiFilterExample3 = /*#__PURE__*/(() => {
  class TuiFilterExample3 {
    constructor() {
      this.items = [`Calendar`, `Favorite`, `Messages`, `FAQ`, `Settings`];
      this.form = new fesm2015_forms/* FormGroup */.cw({
        filters: new fesm2015_forms/* FormControl */.NI([])
      });
    }

    getItemIcon(title) {
      return getIcon[title];
    }

  }

  TuiFilterExample3.ɵfac = function TuiFilterExample3_Factory(t) {
    return new (t || TuiFilterExample3)();
  };

  TuiFilterExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiFilterExample3,
    selectors: [["tui-filter-example-3"]],
    decls: 8,
    vars: 6,
    consts: [[3, "formGroup"], ["formControlName", "filters", 3, "content", "items"], ["content", ""], [1, "tui-space_left-2", 3, "src"]],
    template: function TuiFilterExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-filter", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiFilterExample3_ng_template_2_Template, 2, 2, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "div");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "pre");
        fesm2015_core/* ɵɵtext */._uU(6);
        fesm2015_core/* ɵɵpipe */.ALo(7, "json");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(3);

        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.form);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("content", _r0)("items", ctx.items);
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij("Form value: ", fesm2015_core/* ɵɵpipeBind1 */.lcZ(7, 4, ctx.form.value), "");
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, filter_component/* TuiFilterComponent */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, svg_component/* TuiSvgComponent */.P],
    pipes: [common/* JsonPipe */.Ts],
    styles: ["[_nghost-%COMP%]{max-width:34.375rem}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5);margin:0 0 .75rem}.filters[_ngcontent-%COMP%]{display:inline}.tag[_ngcontent-%COMP%]{margin:0 .25rem .25rem 0}"],
    changeDetection: 0
  });
  return TuiFilterExample3;
})();
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(64762);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/BehaviorSubject.js
var BehaviorSubject = __webpack_require__(26215);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__(88002);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/filter/examples/4/index.ts









var Department = /*#__PURE__*/(() => {
  (function (Department) {
    Department["IT"] = "IT";
    Department["HR"] = "HR";
    Department["HeadOffice"] = "Heads";
    Department["Delivery"] = "Delivery";
  })(Department || (Department = {}));

  return Department;
})();
class TuiFilterExample4 {
  constructor() {
    this.items = Object.values(Department);
    this.filters$ = new BehaviorSubject/* BehaviorSubject */.X([]);
  }

  get model$() {
    return this.filters$.pipe((0,map/* map */.U)(value => value.length === this.items.length ? [] : value));
  }

  get buttonAppearance$() {
    return this.filters$.pipe((0,map/* map */.U)(value => value.length === this.items.length ? "whiteblock-active"
    /* WhiteblockActive */
    : "whiteblock"
    /* Whiteblock */
    ));
  }

  onModelChange(model) {
    this.filters$.next(model);
  }

  toggleAll() {
    this.filters$.next(this.items.length === this.filters$.value.length ? [] : [...this.items]);
  }

}

TuiFilterExample4.ɵfac = function TuiFilterExample4_Factory(t) {
  return new (t || TuiFilterExample4)();
};

TuiFilterExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
  type: TuiFilterExample4,
  selectors: [["tui-filter-example-4"]],
  decls: 8,
  vars: 7,
  consts: [[1, "tui-space_bottom-4"], [1, "filters-with-all"], ["tuiButton", "", "type", "button", "size", "m", 1, "tui-space_right-1", 3, "appearance", "click"], [3, "items", "ngModel", "ngModelChange"]],
  template: function TuiFilterExample4_Template(rf, ctx) {
    if (rf & 1) {
      fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 0);
      fesm2015_core/* ɵɵtext */._uU(1, "Choose a department:");
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 1);
      fesm2015_core/* ɵɵelementStart */.TgZ(3, "button", 2);
      fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiFilterExample4_Template_button_click_3_listener() {
        return ctx.toggleAll();
      });
      fesm2015_core/* ɵɵpipe */.ALo(4, "async");
      fesm2015_core/* ɵɵtext */._uU(5, " All ");
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-filter", 3);
      fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiFilterExample4_Template_tui_filter_ngModelChange_6_listener($event) {
        return ctx.onModelChange($event);
      });
      fesm2015_core/* ɵɵpipe */.ALo(7, "async");
      fesm2015_core/* ɵɵelementEnd */.qZA();
      fesm2015_core/* ɵɵelementEnd */.qZA();
    }

    if (rf & 2) {
      fesm2015_core/* ɵɵadvance */.xp6(3);
      fesm2015_core/* ɵɵproperty */.Q6J("appearance", fesm2015_core/* ɵɵpipeBind1 */.lcZ(4, 3, ctx.buttonAppearance$) || "");
      fesm2015_core/* ɵɵadvance */.xp6(3);
      fesm2015_core/* ɵɵproperty */.Q6J("items", ctx.items)("ngModel", fesm2015_core/* ɵɵpipeBind1 */.lcZ(7, 5, ctx.model$));
    }
  },
  directives: [button_component/* TuiButtonComponent */.v, filter_component/* TuiFilterComponent */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
  pipes: [common/* AsyncPipe */.Ov],
  styles: [".filters-with-all[_ngcontent-%COMP%]{display:inline-flex}"],
  changeDetection: 0
});

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiFilterExample4.prototype, "model$", null);

(0,tslib_es6/* __decorate */.gn)([cdk.tuiPure], TuiFilterExample4.prototype, "buttonAppearance$", null);
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/filter/filter.component.ts



















function ExampleTuiFilterComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-filter-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-filter-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-filter-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-filter-example-4");
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
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
  }
}

function ExampleTuiFilterComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-filter", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("toggledItem", function ExampleTuiFilterComponent_ng_template_2_ng_template_1_Template_tui_filter_toggledItem_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r12);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw(2);
      return ctx_r11.onToggledItemChange($event);
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("badgeHandler", ctx_r3.badgeHandler)("disabledItemHandler", ctx_r3.disabledItemHandler)("items", ctx_r3.items)("size", ctx_r3.size);
  }
}

function ExampleTuiFilterComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 16);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiFilterComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 17);
  }
}

function ExampleTuiFilterComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 18);
    fesm2015_core/* ɵɵelement */._UZ(1, "div");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiFilterComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 19);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵelement */._UZ(2, "strong");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiFilterComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 20);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiFilterComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiFilterComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 22);
  }
}

function ExampleTuiFilterComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 7);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiFilterComponent_ng_template_2_ng_template_1_Template, 1, 5, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiFilterComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiFilterComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.badgeHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiFilterComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiFilterComponent_ng_template_2_ng_template_5_Template, 3, 0, "ng-template", 10);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiFilterComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_5_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.disabledItemHandler = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiFilterComponent_ng_template_2_ng_template_6_Template, 3, 0, "ng-template", 11);
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiFilterComponent_ng_template_2_ng_template_7_Template, 2, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiFilterComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r16 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r16.items = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiFilterComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiFilterComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r14);
      const ctx_r17 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r17.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiFilterComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.badgeHandlerVariants)("documentationPropertyValue", ctx_r1.badgeHandler);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.disabledItemHandlerVariants)("documentationPropertyValue", ctx_r1.disabledItemHandler);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.itemsVariants)("documentationPropertyValue", ctx_r1.items);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
  }
}

function ExampleTuiFilterComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 23);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 24);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 25);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 26);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 27);
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

class ItemWithBadge {
  constructor(text, badgeValue) {
    this.text = text;
    this.badgeValue = badgeValue;
  }

  toString() {
    return this.text;
  }

  valueOf() {
    return this.badgeValue ? this.badgeValue : null;
  }

}

let ExampleTuiFilterComponent = /*#__PURE__*/(() => {
  class ExampleTuiFilterComponent {
    constructor(alertService) {
      this.alertService = alertService;
      this.exampleModule = __webpack_require__.e(/* import() */ 56726).then(__webpack_require__.t.bind(__webpack_require__, 56726, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 82089).then(__webpack_require__.t.bind(__webpack_require__, 82089, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 46528).then(__webpack_require__.t.bind(__webpack_require__, 46528, 17)),
        HTML: __webpack_require__.e(/* import() */ 87577).then(__webpack_require__.t.bind(__webpack_require__, 87577, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 96022).then(__webpack_require__.t.bind(__webpack_require__, 96022, 17)),
        HTML: __webpack_require__.e(/* import() */ 70685).then(__webpack_require__.t.bind(__webpack_require__, 70685, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 81715).then(__webpack_require__.t.bind(__webpack_require__, 81715, 17)),
        HTML: __webpack_require__.e(/* import() */ 2447).then(__webpack_require__.t.bind(__webpack_require__, 2447, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 24946).then(__webpack_require__.t.bind(__webpack_require__, 24946, 17)),
        HTML: __webpack_require__.e(/* import() */ 29475).then(__webpack_require__.t.bind(__webpack_require__, 29475, 17)),
        LESS: __webpack_require__.e(/* import() */ 2067).then(__webpack_require__.t.bind(__webpack_require__, 2067, 17))
      };
      this.initialItems = [`Alex Inkin`, `Roman Sedov`];
      this.itemsVariants = [[`Alex Inkin`, `Roman Sedov`], [new ItemWithBadge(`Focused Zone`, 10), new ItemWithBadge(`Dropdown`, 100), new ItemWithBadge(`Menu Items`, 30), new ItemWithBadge(`Accordion`)]];
      this.badgeHandlerVariants = [item => Number(item), item => String(item).length];
      this.badgeHandler = this.badgeHandlerVariants[0];
      this.disabledItemHandlerVariants = [cdk.ALWAYS_FALSE_HANDLER, item => item === `Roman Sedov`, item => (item.valueOf() || 0) >= 30];
      this.disabledItemHandler = this.disabledItemHandlerVariants[0];
      this.items = this.itemsVariants[0];
      this.control = new fesm2015_forms/* FormControl */.NI(this.initialItems);
      this.sizeVariants = [`s`, `m`, `l`];
      this.size = this.sizeVariants[1];
    }

    onToggledItemChange(item) {
      this.alertService.open(String(item)).subscribe();
    }

  }

  ExampleTuiFilterComponent.ɵfac = function ExampleTuiFilterComponent_Factory(t) {
    return new (t || ExampleTuiFilterComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  ExampleTuiFilterComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiFilterComponent,
    selectors: [["example-filters"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6973195341614832335$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__1 = goog.getMsg(" Components shows separated items that can be used to filter content on the page. There are also an option with badges. ");
        i18n_0 = MSG_EXTERNAL_6973195341614832335$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟9919bf787bc7c0a8e71a9e457491487af5a0a81c␟6973195341614832335: Components shows separated items that can be used to filter content on the page. There are also an option with badges. `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1282387873164068840$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__5 = goog.getMsg("With badges");
        i18n_4 = MSG_EXTERNAL_1282387873164068840$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟555c6fe50ef4fae4068cfa5e1e739a164cbd1f39␟1282387873164068840:With badges`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__7 = goog.getMsg("Custom");
        i18n_6 = MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6633556289912992409$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__9 = goog.getMsg("With all button");
        i18n_8 = MSG_EXTERNAL_6633556289912992409$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟5a776544392d038f30f735cea42d6e409b3e9915␟6633556289912992409:With all button`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5781311404027237254$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___11 = goog.getMsg(" Function that gets and item and returns a badge value. Uses {$startTagCode}valueOf{$closeTagCode} to get a number to show by default ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_5781311404027237254$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟cd98273289fb99517690cbce1b1d0d11f8d0d0c8␟5781311404027237254: Function that gets and item and returns a badge value. Uses ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:valueOf${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: to get a number to show by default `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_9103376824632144211$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___13 = goog.getMsg(" Template for custom content in filter ");
        i18n_12 = MSG_EXTERNAL_9103376824632144211$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟3e711c8b413963d30140ff282746aa85e58af981␟9103376824632144211: Template for custom content in filter `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8655647082077231883$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___15 = goog.getMsg("{$startTagDiv}A handler that gets a date and returns true if it is disabled.{$closeTagDiv}{$startTagStrong}Must be a pure function{$closeTagStrong}", {
          "startTagDiv": "\uFFFD#1\uFFFD",
          "closeTagDiv": "\uFFFD/#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_8655647082077231883$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟a4fe83bc81b7843fa1ef0cc87c170b30b12a3861␟8655647082077231883:${"\uFFFD#1\uFFFD"}:START_TAG_DIV:A handler that gets a date and returns true if it is disabled.${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_DIV:${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8367237806229821940$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___17 = goog.getMsg(" Function that matches value and items, e.g. if objects are copied. Uses {$startTagCode}==={$closeTagCode} by default. {$startTagStrong}Must be a pure function{$closeTagStrong}", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        });
        i18n_16 = MSG_EXTERNAL_8367237806229821940$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟5d5550b6d81d9ae6434fc11a40439f0f0325dd5a␟8367237806229821940: Function that matches value and items, e.g. if objects are copied. Uses ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:===${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: by default. ${"\uFFFD#2\uFFFD"}:START_TAG_STRONG:Must be a pure function${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_STRONG:`;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7860704213160462565$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___19 = goog.getMsg(" Filter items. Can be an array of strings or an array of objects. If no custom template provided, it uses {$startTagCode}toString{$closeTagCode} for view ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_7860704213160462565$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟81389767cdcd4e6282691e8eecc5bd1cdf2a1307␟7860704213160462565: Filter items. Can be an array of strings or an array of objects. If no custom template provided, it uses ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:toString${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: for view `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___21 = goog.getMsg(" Size ");
        i18n_20 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___21;
      } else {
        i18n_20 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4387032186612939582$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___23 = goog.getMsg(" toggled event of item ");
        i18n_22 = MSG_EXTERNAL_4387032186612939582$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS___23;
      } else {
        i18n_22 = $localize`:␟0ff47041d2860cb4d3a45fbce5b410bdabb3aabf␟4387032186612939582: toggled event of item `;
      }

      let i18n_24;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8315740496990906089$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__25 = goog.getMsg(" Import {$startTagCode}TuiFilterModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_24 = MSG_EXTERNAL_8315740496990906089$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__25;
      } else {
        i18n_24 = $localize`:␟1ab787c2eb6660c931fda91647e7159854cb6941␟8315740496990906089: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiFilterModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_26;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__27 = goog.getMsg("Add to the template:");
        i18n_26 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_FILTER_FILTER_COMPONENT_TS__27;
      } else {
        i18n_26 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Filter", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "badge", "heading", i18n_4, 3, "content"], ["id", "custom", "heading", i18n_6, 3, "content"], ["id", "all", "heading", i18n_8, 3, "content"], [3, "control"], ["documentationPropertyName", "badgeHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHandler<T>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "content", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "disabledItemHandler", "documentationPropertyMode", "input", "documentationPropertyType", "TuiBooleanHandler<T>", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "identityMatcher", "documentationPropertyMode", "input", "documentationPropertyType", "TuiIdentityMatcher"], ["documentationPropertyName", "items", "documentationPropertyMode", "input", "documentationPropertyType", "T[]", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeS | TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "toggledItem", "documentationPropertyMode", "output", "documentationPropertyType", "T"], [3, "formControl", "badgeHandler", "disabledItemHandler", "items", "size", "toggledItem"], i18n_10, i18n_12, i18n_14, i18n_16, i18n_18, i18n_20, i18n_22, [1, "b-demo-steps"], i18n_24, ["filename", "myComponent.module.ts", 3, "code"], i18n_26, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiFilterComponent_ng_template_1_Template, 10, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiFilterComponent_ng_template_2_Template, 10, 9, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiFilterComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiFilterExample1, TuiFilterExample2, TuiFilterExample3, TuiFilterExample4, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, filter_component/* TuiFilterComponent */.x, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiFilterComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/filter/filter.module.ts














let ExampleTuiFilterModule = /*#__PURE__*/(() => {
  class ExampleTuiFilterModule {}

  ExampleTuiFilterModule.ɵfac = function ExampleTuiFilterModule_Factory(t) {
    return new (t || ExampleTuiFilterModule)();
  };

  ExampleTuiFilterModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiFilterModule
  });
  ExampleTuiFilterModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, kit.TuiFilterModule, core.TuiButtonModule, kit.TuiTagModule, core.TuiSvgModule, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiFilterComponent))]]
  });
  return ExampleTuiFilterModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiFilterModule, {
    declarations: [ExampleTuiFilterComponent, TuiFilterExample1, TuiFilterExample2, TuiFilterExample3, TuiFilterExample4],
    imports: [tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, kit.TuiFilterModule, core.TuiButtonModule, kit.TuiTagModule, core.TuiSvgModule, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiFilterComponent]
  });
})();

/***/ })

}]);