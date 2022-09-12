"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[5074],{

/***/ 5074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiTooltipModule": () => (/* binding */ ExampleTuiTooltipModule)
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
// EXTERNAL MODULE: ./node_modules/@tinkoff/ng-polymorpheus/fesm2015/tinkoff-ng-polymorpheus.js
var tinkoff_ng_polymorpheus = __webpack_require__(89570);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/interval.js
var interval = __webpack_require__(20945);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js
var takeUntil = __webpack_require__(46782);
// EXTERNAL MODULE: ./projects/core/components/tooltip/tooltip.component.ts
var tooltip_component = __webpack_require__(33351);
// EXTERNAL MODULE: ./projects/core/components/loader/loader.component.ts
var loader_component = __webpack_require__(23184);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tooltip/examples/1/index.ts









function TuiTooltipExample1_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-loader", 5);
    fesm2015_core/* ɵɵtext */._uU(1);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵproperty */.Q6J("inheritColor", true)("showLoader", ctx_r1.loader);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" ", ctx_r1.text, " ");
  }
}

let TuiTooltipExample1 = /*#__PURE__*/(() => {
  class TuiTooltipExample1 {
    constructor(destroy$, changeDetectorRef) {
      this.loader = true;
      this.text = ``;
      (0,interval/* interval */.F)(2000).pipe((0,cdk.tuiWatch)(changeDetectorRef), (0,takeUntil/* takeUntil */.R)(destroy$)).subscribe(() => {
        this.loader = !this.loader;
        this.text = this.text ? `` : `Error 502: Bad Gateway`;
      });
    }

  }

  TuiTooltipExample1.ɵfac = function TuiTooltipExample1_Factory(t) {
    return new (t || TuiTooltipExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(cdk.TuiDestroyService), fesm2015_core/* ɵɵdirectiveInject */.Y36(fesm2015_core/* ChangeDetectorRef */.sBO));
  };

  TuiTooltipExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTooltipExample1,
    selectors: [["tui-tooltip-example-1"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([cdk.TuiDestroyService])],
    decls: 9,
    vars: 1,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4005156764639798896$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_EXAMPLES_1_INDEX_TS_1 = goog.getMsg("Component with a static text...");
        i18n_0 = MSG_EXTERNAL_4005156764639798896$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟bc109a25daadaae77dad36bb0be3f224082b9ea7␟4005156764639798896:Component with a static text...`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7399689443946176300$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_EXAMPLES_1_INDEX_TS_3 = goog.getMsg(" ...or any custom HTML or logic with {$startTagCode}PolymorpheusContent{$closeTagCode} :\n", {
          "startTagCode": "\uFFFD#5\uFFFD",
          "closeTagCode": "\uFFFD/#5\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_7399689443946176300$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_EXAMPLES_1_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟9c1fc1fb1107116c49ec3f42df593946805193e6␟7399689443946176300: ...or any custom HTML or logic with ${"\uFFFD#5\uFFFD"}:START_TAG_CODE:PolymorpheusContent${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_CODE: :
`;
      }

      return [i18n_0, ["content", "Please don't touch this", "direction", "right"], i18n_2, ["direction", "bottom-right", 3, "content"], ["tooltip", ""], ["size", "s", 1, "tooltip", 3, "inheritColor", "showLoader"]];
    },
    template: function TuiTooltipExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18n */.SDv(1, 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-tooltip", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(4, 2);
        fesm2015_core/* ɵɵelement */._UZ(5, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(6, "tui-tooltip", 3);
        fesm2015_core/* ɵɵtemplate */.YNc(7, TuiTooltipExample1_ng_template_7_Template, 2, 3, "ng-template", null, 4, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(8);

        fesm2015_core/* ɵɵadvance */.xp6(6);
        fesm2015_core/* ɵɵproperty */.Q6J("content", _r0);
      }
    },
    directives: [tooltip_component/* TuiTooltipComponent */.w, loader_component/* TuiLoaderComponent */.k],
    styles: [".tooltip[_ngcontent-%COMP%]{min-width:6.25rem}"],
    changeDetection: 0
  });
  return TuiTooltipExample1;
})();
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/core/directives/mode/mode.directive.ts
var mode_directive = __webpack_require__(30644);
// EXTERNAL MODULE: ./projects/kit/components/avatar/avatar.component.ts
var avatar_component = __webpack_require__(44124);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint.directive.ts
var hint_directive = __webpack_require__(67446);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-driver.directive.ts
var hint_driver_directive = __webpack_require__(29070);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-hover.directive.ts
var hint_hover_directive = __webpack_require__(54255);
// EXTERNAL MODULE: ./projects/core/directives/hint/hint-position.directive.ts
var hint_position_directive = __webpack_require__(15491);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tooltip/examples/2/index.ts










function TuiTooltipExample2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div");
    fesm2015_core/* ɵɵtext */._uU(1, " What is ");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "strong");
    fesm2015_core/* ɵɵtext */._uU(3, "love");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(4, " ? ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(5, "div");
    fesm2015_core/* ɵɵtext */._uU(6, "Baby don't hurt me");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "div");
    fesm2015_core/* ɵɵtext */._uU(8, "Don't hurt me");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "div");
    fesm2015_core/* ɵɵtext */._uU(10, "No more...");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }
}

const _c0 = function () {
  return ["/tui-hint"];
};

let TuiTooltipExample2 = /*#__PURE__*/(() => {
  class TuiTooltipExample2 {}

  TuiTooltipExample2.ɵfac = function TuiTooltipExample2_Factory(t) {
    return new (t || TuiTooltipExample2)();
  };

  TuiTooltipExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTooltipExample2,
    selectors: [["tui-tooltip-example-2"]],
    decls: 9,
    vars: 5,
    consts: [["tuiLink", "", "tuiMode", "onDark", 3, "routerLink"], ["tabindex", "0", "size", "l", "text", "\u2764", "tuiHintAppearance", "onDark", "tuiHintDirection", "right", 3, "tuiHint", "autoColor", "rounded"], ["tooltip", ""]],
    template: function TuiTooltipExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵtext */._uU(1, " Custom host can be set with ");
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "a", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "code");
        fesm2015_core/* ɵɵtext */._uU(4, "tuiHint");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(5, " directive\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(6, "tui-avatar", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(7, TuiTooltipExample2_ng_template_7_Template, 11, 0, "ng-template", null, 2, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(8);

        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("routerLink", fesm2015_core/* ɵɵpureFunction0 */.DdM(4, _c0));
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiHint", _r0)("autoColor", true)("rounded", true);
      }
    },
    directives: [link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, mode_directive/* TuiModeDirective */.w, avatar_component/* TuiAvatarComponent */.J, hint_directive/* TuiHintDirective */.D, hint_driver_directive/* TuiHintDriverDirective */.x, hint_hover_directive/* TuiHintHoverDirective */.t, hint_position_directive/* TuiHintPositionDirective */.D],
    styles: ["[_nghost-%COMP%]{display:block;margin:-1.25rem;padding:1.875rem;background:#3e4757;color:var(--tui-base-01)}"],
    changeDetection: 0
  });
  return TuiTooltipExample2;
})();
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-size.directive.ts
var textfield_size_directive = __webpack_require__(10200);
// EXTERNAL MODULE: ./projects/core/directives/textfield-controller/textfield-label-outside.directive.ts
var textfield_label_outside_directive = __webpack_require__(68874);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tooltip/examples/3/index.ts







function TuiTooltipExample3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, "Allowed symbols: \u2660 \u2663 \u2666 \u2665");
  }
}

let TuiTooltipExample3 = /*#__PURE__*/(() => {
  class TuiTooltipExample3 {}

  TuiTooltipExample3.ɵfac = function TuiTooltipExample3_Factory(t) {
    return new (t || TuiTooltipExample3)();
  };

  TuiTooltipExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTooltipExample3,
    selectors: [["tui-tooltip-example-3"]],
    decls: 8,
    vars: 4,
    consts: [["tooltip", ""], ["tuiTextfieldSize", "m", 1, "input", 3, "tuiTextfieldLabelOutside"], ["direction", "right", 3, "content"], ["content", "Set icon color with 'color'", "direction", "right", 1, "primary"], ["tuiTextfieldSize", "m", 1, "input"]],
    template: function TuiTooltipExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵtemplate */.YNc(0, TuiTooltipExample3_ng_template_0_Template, 1, 0, "ng-template", null, 0, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-input", 1);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-tooltip", 2);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-input", 1);
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-tooltip", 3);
        fesm2015_core/* ɵɵelement */._UZ(6, "tui-input", 4);
        fesm2015_core/* ɵɵelement */._UZ(7, "tui-tooltip", 2);
      }

      if (rf & 2) {
        const _r0 = fesm2015_core/* ɵɵreference */.MAs(1);

        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("content", _r0);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiTextfieldLabelOutside", true);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("content", _r0);
      }
    },
    directives: [input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, textfield_size_directive/* TuiTextfieldSizeDirective */.s, textfield_label_outside_directive/* TuiTextfieldLabelOutsideDirective */.x, tooltip_component/* TuiTooltipComponent */.w],
    styles: ["[_nghost-%COMP%]{display:block;width:25rem}.primary[_ngcontent-%COMP%]{color:var(--tui-primary)}.input[_ngcontent-%COMP%]{display:inline-block;width:18.75rem;margin:.75rem .75rem .75rem 0;vertical-align:middle}"],
    changeDetection: 0
  });
  return TuiTooltipExample3;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tooltip/examples/4/index.ts



let TuiTooltipExample4 = /*#__PURE__*/(() => {
  class TuiTooltipExample4 {}

  TuiTooltipExample4.ɵfac = function TuiTooltipExample4_Factory(t) {
    return new (t || TuiTooltipExample4)();
  };

  TuiTooltipExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiTooltipExample4,
    selectors: [["tui-tooltip-example-4"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([(0,core.tuiHintOptionsProvider)({
      icon: `tuiIconCameraLarge`
    })])],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6389103222510585721$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_EXAMPLES_4_INDEX_TS_1 = goog.getMsg("Modified icon");
        i18n_0 = MSG_EXTERNAL_6389103222510585721$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_EXAMPLES_4_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟e509377f8367f2bd10ffcca88257f0ea3b95d9a2␟6389103222510585721:Modified icon`;
      }

      return [i18n_0, ["content", "Oh, snap!"]];
    },
    template: function TuiTooltipExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18n */.SDv(1, 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-tooltip", 1);
      }
    },
    directives: [tooltip_component/* TuiTooltipComponent */.w],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiTooltipExample4;
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
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tooltip/tooltip.component.ts















function ExampleTuiTooltipComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18n */.SDv(1, 2);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 3);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-tooltip-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-tooltip-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-tooltip-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-tooltip-example-4");
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

function ExampleTuiTooltipComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 15);
  }
}

function ExampleTuiTooltipComponent_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 16);
  }
}

function ExampleTuiTooltipComponent_ng_template_2_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 17);
    fesm2015_core/* ɵɵelement */._UZ(1, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }
}

function ExampleTuiTooltipComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 18);
  }
}

function ExampleTuiTooltipComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Show Delay ");
  }
}

function ExampleTuiTooltipComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵtext */._uU(0, " Hide Delay ");
  }
}

function ExampleTuiTooltipComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-tooltip", 7);
    fesm2015_core/* ɵɵelement */._UZ(2, "input", 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiTooltipComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTooltipComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_4_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r9 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r9.appearance = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(5, ExampleTuiTooltipComponent_ng_template_2_ng_template_5_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiTooltipComponent_ng_template_2_ng_template_6_Template, 2, 0, "ng-template", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTooltipComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r11 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r11.describeId = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(7, ExampleTuiTooltipComponent_ng_template_2_ng_template_7_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTooltipComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_7_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.direction = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiTooltipComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTooltipComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.showDelay = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiTooltipComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiTooltipComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r10);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.hideDelay = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("appearance", ctx_r1.appearance)("describeId", ctx_r1.describeId)("direction", ctx_r1.direction)("showDelay", ctx_r1.showDelay)("hideDelay", ctx_r1.hideDelay);
    fesm2015_core/* ɵɵadvance */.xp6(3);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.appearanceVariants)("documentationPropertyValue", ctx_r1.appearance);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.describeId);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.directionVariants)("documentationPropertyValue", ctx_r1.direction);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.showDelay);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.hideDelay);
  }
}

function ExampleTuiTooltipComponent_ng_template_3_Template(rf, ctx) {
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

let ExampleTuiTooltipComponent = /*#__PURE__*/(() => {
  class ExampleTuiTooltipComponent {
    constructor() {
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 62757).then(__webpack_require__.t.bind(__webpack_require__, 62757, 17)),
        HTML: __webpack_require__.e(/* import() */ 34276).then(__webpack_require__.t.bind(__webpack_require__, 34276, 17)),
        LESS: __webpack_require__.e(/* import() */ 17080).then(__webpack_require__.t.bind(__webpack_require__, 17080, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 74924).then(__webpack_require__.t.bind(__webpack_require__, 74924, 17)),
        HTML: __webpack_require__.e(/* import() */ 84345).then(__webpack_require__.t.bind(__webpack_require__, 84345, 17)),
        LESS: __webpack_require__.e(/* import() */ 56763).then(__webpack_require__.t.bind(__webpack_require__, 56763, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 65757).then(__webpack_require__.t.bind(__webpack_require__, 65757, 17)),
        HTML: __webpack_require__.e(/* import() */ 77783).then(__webpack_require__.t.bind(__webpack_require__, 77783, 17)),
        LESS: __webpack_require__.e(/* import() */ 29085).then(__webpack_require__.t.bind(__webpack_require__, 29085, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 10451).then(__webpack_require__.t.bind(__webpack_require__, 10451, 17)),
        HTML: __webpack_require__.e(/* import() */ 83147).then(__webpack_require__.t.bind(__webpack_require__, 83147, 17))
      };
      this.exampleModule = __webpack_require__.e(/* import() */ 14604).then(__webpack_require__.t.bind(__webpack_require__, 14604, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 29599).then(__webpack_require__.t.bind(__webpack_require__, 29599, 17));
      this.appearanceVariants = [``, `error`];
      this.appearance = this.appearanceVariants[0];
      this.directionVariants = core.TUI_HINT_DIRECTIONS;
      this.direction = this.directionVariants[0];
      this.describeId = ``;
      this.showDelay = 500;
      this.hideDelay = 200;
    }

  }

  ExampleTuiTooltipComponent.ɵfac = function ExampleTuiTooltipComponent_Factory(t) {
    return new (t || ExampleTuiTooltipComponent)();
  };

  ExampleTuiTooltipComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiTooltipComponent,
    selectors: [["example-tooltip"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_905486108575958111$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS__1 = goog.getMsg("Component to show icons with a hint by hover");
        i18n_0 = MSG_EXTERNAL_905486108575958111$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟8a29dd0696d48dc3c3e2a6a70368fea82035b0d2␟905486108575958111:Component to show icons with a hint by hover`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS__3 = goog.getMsg("Basic");
        i18n_2 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4956201895678522724$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS__5 = goog.getMsg("Custom host");
        i18n_4 = MSG_EXTERNAL_4956201895678522724$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟a32f005c96947266e080f9a848bc3b91eb134591␟4956201895678522724:Custom host`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7145015114196688747$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS__7 = goog.getMsg("Repeating template");
        i18n_6 = MSG_EXTERNAL_7145015114196688747$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟fedc7841fde54553fb3364ca27c9ea0486860c79␟7145015114196688747:Repeating template`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8432562579042371182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS__9 = goog.getMsg("Options");
        i18n_8 = MSG_EXTERNAL_8432562579042371182$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟24813b8a3e45f0b57136c18d003027262cfe2d1f␟8432562579042371182:Options`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4840281641745543157$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS___11 = goog.getMsg(" Hint appearance ");
        i18n_10 = MSG_EXTERNAL_4840281641745543157$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS___11;
      } else {
        i18n_10 = $localize`:␟c4ed505b3d03f6c2a41c7f5a2bc7abf50f9d7beb␟4840281641745543157: Hint appearance `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2298220704202813549$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS___13 = goog.getMsg(" Tooltip content ");
        i18n_12 = MSG_EXTERNAL_2298220704202813549$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟e9f702db23b4c5e6414958eea642ca3ab502bf39␟2298220704202813549: Tooltip content `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1606813044781429743$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS___15 = goog.getMsg(" To be accessible, hint should be set to a focusable element and user with Screen Readers will listen to hint text after a small delay when focusing textfield. Set {$startTagCode}id{$closeTagCode} of your focusable element here. ", {
          "startTagCode": "\uFFFD#1\uFFFD",
          "closeTagCode": "\uFFFD/#1\uFFFD"
        });
        i18n_14 = MSG_EXTERNAL_1606813044781429743$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟01ae430af52502bd14e314a761c5272ea0132f0d␟1606813044781429743: To be accessible, hint should be set to a focusable element and user with Screen Readers will listen to hint text after a small delay when focusing textfield. Set ${"\uFFFD#1\uFFFD"}:START_TAG_CODE:id${"\uFFFD/#1\uFFFD"}:CLOSE_TAG_CODE: of your focusable element here. `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5526347285866058230$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS___17 = goog.getMsg(" Tooltip direction ");
        i18n_16 = MSG_EXTERNAL_5526347285866058230$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟394e515f6a52d9b97253d3dbed22bac0c58244f2␟5526347285866058230: Tooltip direction `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1056076956592185191$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS__19 = goog.getMsg(" Import {$startTagCode}TuiTooltipModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_18 = MSG_EXTERNAL_1056076956592185191$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS__19;
      } else {
        i18n_18 = $localize`:␟463a5487dda09a5ab7948ee8631d63bb3882d2c5␟1056076956592185191: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiTooltipModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS__21 = goog.getMsg("Add to the template:");
        i18n_20 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_TOOLTIP_TOOLTIP_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Tooltip", "package", "CORE", "type", "components"], ["pageTab", ""], i18n_0, ["id", "example-base", "heading", i18n_2, 3, "content"], ["id", "custom-host", "heading", i18n_4, 3, "content"], ["id", "repeating-template", "heading", i18n_6, 3, "content"], ["id", "options", "heading", i18n_8, 3, "content"], ["content", "You data is hidden", 3, "appearance", "describeId", "direction", "showDelay", "hideDelay"], ["id", "qwerty", "placeholder", "id: qwerty"], ["documentationPropertyName", "appearance", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "content", "documentationPropertyMode", "input", "documentationPropertyType", "PolymorpheusContent"], ["documentationPropertyName", "describeId", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "direction", "documentationPropertyMode", "input", "documentationPropertyType", "TuiHintDirection", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "showDelay", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "hideDelay", "documentationPropertyMode", "input", "documentationPropertyType", "number", 3, "documentationPropertyValue", "documentationPropertyValueChange"], i18n_10, i18n_12, i18n_14, i18n_16, [1, "b-demo-steps"], i18n_18, ["filename", "myComponent.module.ts", 3, "code"], i18n_20, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiTooltipComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiTooltipComponent_ng_template_1_Template, 10, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiTooltipComponent_ng_template_2_Template, 10, 12, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiTooltipComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiTooltipExample1, TuiTooltipExample2, TuiTooltipExample3, TuiTooltipExample4, demo_component/* TuiDocDemoComponent */.F, tooltip_component/* TuiTooltipComponent */.w, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiTooltipComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/tooltip/tooltip.module.ts














let ExampleTuiTooltipModule = /*#__PURE__*/(() => {
  class ExampleTuiTooltipModule {}

  ExampleTuiTooltipModule.ɵfac = function ExampleTuiTooltipModule_Factory(t) {
    return new (t || ExampleTuiTooltipModule)();
  };

  ExampleTuiTooltipModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiTooltipModule
  });
  ExampleTuiTooltipModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[core.TuiTooltipModule, core.TuiHintModule, core.TuiLinkModule, kit.TuiAvatarModule, core.TuiLoaderModule, kit.TuiInputModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core.TuiModeModule, public_api/* TuiAddonDocModule */.fV, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, core.TuiTextfieldControllerModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiTooltipComponent))]]
  });
  return ExampleTuiTooltipModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiTooltipModule, {
    declarations: [ExampleTuiTooltipComponent, TuiTooltipExample1, TuiTooltipExample2, TuiTooltipExample3, TuiTooltipExample4],
    imports: [core.TuiTooltipModule, core.TuiHintModule, core.TuiLinkModule, kit.TuiAvatarModule, core.TuiLoaderModule, kit.TuiInputModule, tinkoff_ng_polymorpheus/* PolymorpheusModule */.wq, core.TuiModeModule, public_api/* TuiAddonDocModule */.fV, common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, core.TuiTextfieldControllerModule, router/* RouterModule */.Bz],
    exports: [ExampleTuiTooltipComponent]
  });
})();

/***/ })

}]);