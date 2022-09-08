"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[91196],{

/***/ 82880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ AbstractExampleTuiControl)
/* harmony export */ });
/* harmony import */ var _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90987);
/* harmony import */ var _interactive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57750);


const CUSTOM_SVG = `<svg xmlns="http://www.w3.org/2000/svg"
width="24px"
height="24px"
viewBox="0 0 24 24">
<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5
   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3
   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>
</svg>`;
const CUSTOM_SVG_NAME = `Bell`;
class AbstractExampleTuiControl extends _interactive__WEBPACK_IMPORTED_MODULE_1__/* .AbstractExampleTuiInteractive */ .O {
  constructor() {
    super(...arguments);
    this.sizeVariants = [`s`, `m`, `l`];
    this.hintContentVariants = [``, `Some content`];
    this.hintDirectionVariants = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_HINT_DIRECTIONS;
    this.hintAppearanceVariants = [``, `error`, `onDark`];
    this.typeVariants = [`text`, `email`, `password`, `tel`, `url`];
    this.maxLengthVariants = [10];
    this.autocompleteVariants = [``, `off`, `cc-name`, `cc-number`, `cc-exp-month`, `cc-exp-year`, `cc-type`, `given-name`, `additional-name`, `family-name`, `username`, `email`, `street-address`, `postal-code`, `country-name`];
    this.inputModeVariants = [`text`, `numeric`];
    this.customContentVariants = [CUSTOM_SVG_NAME, `tuiIconSearchLarge`, `tuiIconCalendarLarge`, `tuiIconVisaMono`, `tuiIconMastercardMono`];
    this.customContentSelected = ``;
    this.inputMode = this.inputModeVariants[0];
    this.autocomplete = ``;
    this.maxLength = null;
    this.type = this.typeVariants[0];
    this.cleaner = false;
    this.pseudoInvalid = null;
    this.success = false;
    this.readOnly = false;
    this.labelOutside = false;
    this.size = this.sizeVariants[2];
    this.exampleText = ``;
    this.maxHeight = null;
    this.iconLeftVariants = [``, `tuiIconMailLarge`, `tuiIconPiechartLarge`];
    this.iconLeft = this.iconLeftVariants[0];
    this.hintContent = this.hintContentVariants[0];
    this.hintDirection = this.hintDirectionVariants[0];
    this.hintAppearance = this.hintAppearanceVariants[0];
    this.dropdownAlignVariants = [`left`, `right`];
    this.dropdownAlign = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.align;
    this.dropdownLimitWidthVariants = [`fixed`, `min`, `auto`];
    this.dropdownLimitWidth = this.dropdownLimitWidthVariants[0];
    this.dropdownDirectionVariants = [`bottom`, `top`];
    this.dropdownDirection = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.direction;
    this.dropdownMinHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight;
    this.dropdownMaxHeight = _taiga_ui_core__WEBPACK_IMPORTED_MODULE_0__.TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight;
  }

  get customContent() {
    return this.customContentSelected === CUSTOM_SVG_NAME ? CUSTOM_SVG : this.customContentSelected;
  }

  get disabled() {
    return this.control.disabled;
  }

  set disabled(value) {
    if (value) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

}

/***/ }),

/***/ 57750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ AbstractExampleTuiInteractive)
/* harmony export */ });
class AbstractExampleTuiInteractive {
  constructor() {
    this.pseudoVariants = [false, true];
    this.focusable = true;
    this.pseudoFocused = null;
    this.pseudoHovered = null;
    this.pseudoPressed = null;
  }

}

/***/ }),

/***/ 91196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiInputInlineModule": () => (/* binding */ ExampleTuiInputInlineModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 109 modules
var kit = __webpack_require__(91068);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input-inline/input-inline.component.ts
var input_inline_component = __webpack_require__(87623);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-inline/examples/1/component.ts





let TuiInputInlineExample1 = /*#__PURE__*/(() => {
  class TuiInputInlineExample1 {
    constructor() {
      this.testForm = new fesm2015_forms/* FormGroup */.cw({
        testValue1: new fesm2015_forms/* FormControl */.NI(`Hello 1`),
        testValue2: new fesm2015_forms/* FormControl */.NI(`Hello 2`),
        testValue3: new fesm2015_forms/* FormControl */.NI(`Hello 3`),
        testValue4: new fesm2015_forms/* FormControl */.NI(``)
      });
    }

    get toggleContent() {
      return this.testForm.disabled ? `enable (allow editing)` : `disable`;
    }

    get input4Empty() {
      return this.testForm.get(`testValue4`).value === ``;
    }

    onToggleClick() {
      if (this.testForm.disabled) {
        this.testForm.enable();
      } else {
        this.testForm.disable();
      }
    }

  }

  TuiInputInlineExample1.ɵfac = function TuiInputInlineExample1_Factory(t) {
    return new (t || TuiInputInlineExample1)();
  };

  TuiInputInlineExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputInlineExample1,
    selectors: [["tui-input-inline-example-1"]],
    decls: 8,
    vars: 4,
    consts: [[3, "formGroup"], ["formControlName", "testValue1", 1, "input1"], ["formControlName", "testValue2", 1, "input2"], ["formControlName", "testValue3", 1, "input3"], ["formControlName", "testValue4", 1, "input4"], ["tuiButton", "", "type", "button", "size", "m", 3, "click"]],
    template: function TuiInputInlineExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "form", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-input-inline", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-input-inline", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-input-inline", 3);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-input-inline", 4);
        fesm2015_core/* ɵɵtext */._uU(5, " (Show placeholder if control is empty) ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "button", 5);
        fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiInputInlineExample1_Template_button_click_6_listener() {
          return ctx.onToggleClick();
        });
        fesm2015_core/* ɵɵtext */._uU(7);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("formGroup", ctx.testForm);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵclassProp */.ekj("input4_empty", ctx.input4Empty);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", ctx.toggleContent, "\n");
      }
    },
    directives: [fesm2015_forms/* ɵNgNoValidate */._Y, fesm2015_forms/* NgControlStatusGroup */.JL, fesm2015_forms/* FormGroupDirective */.sg, input_inline_component/* TuiInputInlineComponent */.l, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlName */.u, button_component/* TuiButtonComponent */.v],
    styles: [".input1[_ngcontent-%COMP%], .input2[_ngcontent-%COMP%], .input3[_ngcontent-%COMP%]{margin-right:.625rem}.input1[_ngcontent-%COMP%]{border:2px solid var(--tui-error-fill)}.input2[_ngcontent-%COMP%]{background:var(--tui-base-09);padding:.625rem;color:var(--tui-base-01);letter-spacing:.625rem;font-size:1.25rem}.input3[_ngcontent-%COMP%]{font-family:monospace;font-weight:bold;background:var(--tui-base-04)}.input4_empty[_ngcontent-%COMP%]{opacity:.3}"],
    changeDetection: 0
  });
  return TuiInputInlineExample1;
})();
// EXTERNAL MODULE: ./projects/cdk/directives/auto-focus/autofocus.directive.ts
var autofocus_directive = __webpack_require__(20986);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-inline/examples/2/component.ts









function TuiInputInlineExample2_tui_input_inline_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-inline", 3);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiInputInlineExample2_tui_input_inline_1_Template_tui_input_inline_ngModelChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r3.heading = $event;
    })("focusedChange", function TuiInputInlineExample2_tui_input_inline_1_Template_tui_input_inline_focusedChange_0_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r5.onFocusedChange($event);
    })("keydown.esc.prevent", function TuiInputInlineExample2_tui_input_inline_1_Template_tui_input_inline_keydown_esc_prevent_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.toggle();
    })("keydown.enter.prevent", function TuiInputInlineExample2_tui_input_inline_1_Template_tui_input_inline_keydown_enter_prevent_0_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r4);
      const ctx_r7 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r7.toggle();
    });
    fesm2015_core/* ɵɵtext */._uU(1, " Type a heading ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx_r0.heading);
  }
}

function TuiInputInlineExample2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "span");
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "button", 4);
    fesm2015_core/* ɵɵlistener */.NdJ("click", function TuiInputInlineExample2_ng_template_2_Template_button_click_2_listener() {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r9);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.toggle();
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r2 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(ctx_r2.heading);
  }
}

let TuiInputInlineExample2 = /*#__PURE__*/(() => {
  class TuiInputInlineExample2 {
    constructor(alertService) {
      this.alertService = alertService;
      this.heading = `Page heading`;
      this.editing = false;
    }

    toggle() {
      this.editing = !this.editing;
    }

    onFocusedChange(focused) {
      if (!focused) {
        this.editing = false;
        this.saveHeading(this.heading);
      }
    }

    saveHeading(newHeading) {
      this.alertService.open(newHeading, {
        label: `New heading`
      }).subscribe();
    }

  }

  TuiInputInlineExample2.ɵfac = function TuiInputInlineExample2_Factory(t) {
    return new (t || TuiInputInlineExample2)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiAlertService));
  };

  TuiInputInlineExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputInlineExample2,
    selectors: [["tui-input-inline-example-2"]],
    decls: 8,
    vars: 4,
    consts: [[1, "header"], ["tuiAutoFocus", "", 3, "ngModel", "ngModelChange", "focusedChange", "keydown.esc.prevent", "keydown.enter.prevent", 4, "ngIf", "ngIfElse"], ["text", ""], ["tuiAutoFocus", "", 3, "ngModel", "ngModelChange", "focusedChange", "keydown.esc.prevent", "keydown.enter.prevent"], ["tuiIconButton", "", "type", "button", "title", "Edit heading", "size", "xs", "appearance", "icon", "icon", "tuiIconEditLarge", 1, "tui-space_left-1", 3, "click"]],
    template: function TuiInputInlineExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "h2", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, TuiInputInlineExample2_tui_input_inline_1_Template, 2, 1, "tui-input-inline", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, TuiInputInlineExample2_ng_template_2_Template, 3, 1, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
        fesm2015_core/* ɵɵtext */._uU(5, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa exercitationem, sed? Deserunt dignissimos dolorem doloribus officiis quae repellat rerum? Accusantium fuga hic nam necessitatibus non officiis perferendis repellendus tempore voluptates!\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "p");
        fesm2015_core/* ɵɵtext */._uU(7, " Accusantium adipisci blanditiis esse est et eum fugit id illum, in iste itaque iusto laborum nostrum officia quam quasi quos repellat temporibus tenetur, ullam? Blanditiis fuga iusto maiores omnis quidem!\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        const _r1 = fesm2015_core/* ɵɵreference */.MAs(3);

        fesm2015_core/* ɵɵclassProp */.ekj("header_empty", !ctx.heading);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx.editing)("ngIfElse", _r1);
      }
    },
    directives: [common/* NgIf */.O5, input_inline_component/* TuiInputInlineComponent */.l, autofocus_directive/* TuiAutoFocusDirective */.k, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, button_component/* TuiButtonComponent */.v],
    styles: [".header[_ngcontent-%COMP%]{height:1.5rem;display:flex;align-items:center;line-height:1.5rem}.header_empty[_ngcontent-%COMP%]{opacity:.3}"],
    changeDetection: 0
  });
  return TuiInputInlineExample2;
})();
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/timer.js
var timer = __webpack_require__(46797);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(46782);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-inline/examples/3/component.ts








let TuiInputInlineExample3 = /*#__PURE__*/(() => {
  class TuiInputInlineExample3 {
    constructor(cd, destroy$, zone, isCypress) {
      this.cd = cd;
      this.destroy$ = destroy$;
      this.zone = zone;
      this.isCypress = isCypress;
      this.count = `0`;
    }

    ngOnInit() {
      if (this.isCypress) {
        return;
      }

      (0,timer/* timer */.H)(0, 3000).pipe((0,cdk.tuiZoneOptimized)(this.zone), (0,cdk.tuiWatch)(this.cd), (0,takeUntil/* takeUntil */.R)(this.destroy$)).subscribe(value => {
        this.count = String(value);
      });
    }

  }

  TuiInputInlineExample3.ɵfac = function TuiInputInlineExample3_Factory(t) {
    return new (t || TuiInputInlineExample3)(fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_core/* ChangeDetectorRef */.sBO), fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TuiDestroyService), fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_core/* NgZone */.R0b), fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TUI_IS_CYPRESS));
  };

  TuiInputInlineExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiInputInlineExample3,
    selectors: [["tui-input-inline-example-3"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([cdk.TuiDestroyService])],
    decls: 1,
    vars: 1,
    consts: [[1, "input1", 3, "ngModel", "ngModelChange"]],
    template: function TuiInputInlineExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-inline", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiInputInlineExample3_Template_tui_input_inline_ngModelChange_0_listener($event) {
          return ctx.count = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.count);
      }
    },
    directives: [input_inline_component/* TuiInputInlineComponent */.l, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On],
    styles: [".input1[_ngcontent-%COMP%]{border:2px solid var(--tui-error-fill);padding:.625rem;font-size:1.25rem;text-align:center}"],
    changeDetection: 0
  });
  return TuiInputInlineExample3;
})();
// EXTERNAL MODULE: ./projects/demo/src/modules/components/abstract/control.ts
var control = __webpack_require__(82880);
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-inline/input-inline.component.ts
















function ExampleTuiInputInlineComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-input-inline-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-input-inline-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-input-inline-example-3");
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
  }
}

function ExampleTuiInputInlineComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input-inline", 9);
    fesm2015_core/* ɵɵtext */._uU(1, " Placeholder ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("formControl", ctx_r3.control)("maxLength", ctx_r3.maxLength);
  }
}

function ExampleTuiInputInlineComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 10);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiInputInlineComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 11);
  }
}

function ExampleTuiInputInlineComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo", 6);
    fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputInlineComponent_ng_template_2_ng_template_1_Template, 2, 2, "ng-template");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputInlineComponent_ng_template_2_ng_template_3_Template, 2, 0, "ng-template", 7);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputInlineComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.disabled = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiInputInlineComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 8);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiInputInlineComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r8 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r8.maxLength = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("control", ctx_r1.control);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.disabled);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.maxLengthVariants)("documentationPropertyValue", ctx_r1.maxLength);
  }
}

function ExampleTuiInputInlineComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 12);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 13);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 14);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 16);
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

let ExampleTuiInputInlineComponent = /*#__PURE__*/(() => {
  class ExampleTuiInputInlineComponent extends control/* AbstractExampleTuiControl */.b {
    constructor() {
      super(...arguments);
      this.exampleModule = __webpack_require__.e(/* import() */ 35625).then(__webpack_require__.t.bind(__webpack_require__, 35625, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 25662).then(__webpack_require__.t.bind(__webpack_require__, 25662, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 42899).then(__webpack_require__.t.bind(__webpack_require__, 42899, 17)),
        HTML: __webpack_require__.e(/* import() */ 79511).then(__webpack_require__.t.bind(__webpack_require__, 79511, 17)),
        LESS: __webpack_require__.e(/* import() */ 60995).then(__webpack_require__.t.bind(__webpack_require__, 60995, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 1161).then(__webpack_require__.t.bind(__webpack_require__, 1161, 17)),
        HTML: __webpack_require__.e(/* import() */ 24460).then(__webpack_require__.t.bind(__webpack_require__, 24460, 17)),
        LESS: __webpack_require__.e(/* import() */ 47922).then(__webpack_require__.t.bind(__webpack_require__, 47922, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 71416).then(__webpack_require__.t.bind(__webpack_require__, 71416, 17)),
        HTML: __webpack_require__.e(/* import() */ 95560).then(__webpack_require__.t.bind(__webpack_require__, 95560, 17)),
        LESS: __webpack_require__.e(/* import() */ 30955).then(__webpack_require__.t.bind(__webpack_require__, 30955, 17))
      };
      this.control = new fesm2015_forms/* FormControl */.NI(`111`, fesm2015_forms/* Validators.required */.kI.required);
      this.maxLengthVariants = [10];
      this.maxLength = null;
    }

  }

  ExampleTuiInputInlineComponent.ɵfac = /*@__PURE__*/function () {
    let ɵExampleTuiInputInlineComponent_BaseFactory;
    return function ExampleTuiInputInlineComponent_Factory(t) {
      return (ɵExampleTuiInputInlineComponent_BaseFactory || (ɵExampleTuiInputInlineComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ExampleTuiInputInlineComponent)))(t || ExampleTuiInputInlineComponent);
    };
  }();

  ExampleTuiInputInlineComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiInputInlineComponent,
    selectors: [["example-tui-input-inline"]],
    features: [fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7522149816559254132$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__1 = goog.getMsg("Inline field");
        i18n_0 = MSG_EXTERNAL_7522149816559254132$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟5da06d4e254872871f93db1252ddb86487e6b931␟7522149816559254132:Inline field`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_565621886775524341$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__5 = goog.getMsg("In heading");
        i18n_4 = MSG_EXTERNAL_565621886775524341$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟5f23eeae13ddbd4994e42211e4e333c68c629b0c␟565621886775524341:In heading`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2598963736286288115$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__7 = goog.getMsg("Dynamic counter increment (3 sec)");
        i18n_6 = MSG_EXTERNAL_2598963736286288115$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟4e5b66db067166d3b22aac82478bb814d41fbeed␟2598963736286288115:Dynamic counter increment (3 sec)`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS___9 = goog.getMsg(" Disabled state (use {$startTagCode}formControl.disable(){$closeTagCode} ) ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_8 = MSG_EXTERNAL_616675194705061558$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:formControl.disable()${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: ) `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4970794608247875259$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS___11 = goog.getMsg(" Maximum number of symbols ");
        i18n_10 = MSG_EXTERNAL_4970794608247875259$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟ceced99e65b9b5e60ca5a4e3c8f63b267c4b225d␟4970794608247875259: Maximum number of symbols `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_356958347911905655$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__13 = goog.getMsg(" Import {$startTagCode}TuiInputInlineModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_12 = MSG_EXTERNAL_356958347911905655$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟31d5e0d4a586ee251415e9a80ed121cc226bef9c␟356958347911905655: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiInputInlineModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__15 = goog.getMsg("Add to the template:");
        i18n_14 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_INPUT_INLINE_INPUT_INLINE_COMPONENT_TS__15;
      } else {
        i18n_14 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "InputInline", "package", "KIT", "type", "components"], ["pageTab", ""], i18n_0, ["id", "base", "heading", i18n_2, 3, "content"], ["id", "in-heading", "heading", i18n_4, 3, "content"], ["id", "dynamic-increment", "heading", i18n_6, 3, "content"], [3, "control"], ["documentationPropertyName", "", "documentationPropertyType", "boolean", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "maxLength", "documentationPropertyMode", "input", "documentationPropertyType", "number | null", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [1, "input", 3, "formControl", "maxLength"], i18n_8, i18n_10, [1, "b-demo-steps"], i18n_12, ["filename", "myComponent.module.ts", 3, "code"], i18n_14, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiInputInlineComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiInputInlineComponent_ng_template_1_Template, 8, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiInputInlineComponent_ng_template_2_Template, 5, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiInputInlineComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiInputInlineExample1, TuiInputInlineExample2, TuiInputInlineExample3, demo_component/* TuiDocDemoComponent */.F, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, input_inline_component/* TuiInputInlineComponent */.l, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* FormControlDirective */.oH, code_component/* TuiDocCodeComponent */.c],
    styles: [".input[_ngcontent-%COMP%]{max-width:20rem;border-bottom:1px solid var(--tui-base-09)}"]
  });
  return ExampleTuiInputInlineComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/input-inline/input-inline.module.ts













let ExampleTuiInputInlineModule = /*#__PURE__*/(() => {
  class ExampleTuiInputInlineModule {}

  ExampleTuiInputInlineModule.ɵfac = function ExampleTuiInputInlineModule_Factory(t) {
    return new (t || ExampleTuiInputInlineModule)();
  };

  ExampleTuiInputInlineModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiInputInlineModule
  });
  ExampleTuiInputInlineModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiButtonModule, kit.TuiInputInlineModule, cdk.TuiAutoFocusModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiInputInlineComponent))]]
  });
  return ExampleTuiInputInlineModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiInputInlineModule, {
    declarations: [ExampleTuiInputInlineComponent, TuiInputInlineExample1, TuiInputInlineExample2, TuiInputInlineExample3],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, fesm2015_forms/* ReactiveFormsModule */.UX, core.TuiButtonModule, kit.TuiInputInlineModule, cdk.TuiAutoFocusModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiInputInlineComponent]
  });
})();

/***/ })

}]);