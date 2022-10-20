"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[1304],{

/***/ 1304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiBadgeModule": () => (/* binding */ ExampleTuiBadgeModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 115 modules
var kit = __webpack_require__(56757);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/kit/components/badge/badge.component.ts
var badge_component = __webpack_require__(4123);
// EXTERNAL MODULE: ./projects/core/directives/mode/mode.directive.ts
var mode_directive = __webpack_require__(30644);
// EXTERNAL MODULE: ./projects/cdk/directives/repeat-times/repeat-times.directive.ts
var repeat_times_directive = __webpack_require__(36097);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/badge/examples/1/index.ts





function TuiBadgeExample1_tui_badge_16_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-badge", 13);
  }

  if (rf & 2) {
    const index_r1 = ctx.$implicit;
    fesm2015_core/* ɵɵclassMapInterpolate1 */.Gre("tui-space_horizontal-2 tui-space_vertical-2 support-", index_r1 + 1, "");
    fesm2015_core/* ɵɵproperty */.Q6J("hoverable", true);
  }
}

let TuiBadgeExample1 = /*#__PURE__*/(() => {
  class TuiBadgeExample1 {}

  TuiBadgeExample1.ɵfac = function TuiBadgeExample1_Factory(t) {
    return new (t || TuiBadgeExample1)();
  };

  TuiBadgeExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiBadgeExample1,
    selectors: [["tui-badge-example-1"]],
    decls: 17,
    vars: 5,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5168008278809915722$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_EXAMPLES_1_INDEX_TS_1 = goog.getMsg("Statuses");
        i18n_0 = MSG_EXTERNAL_5168008278809915722$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟8a35b7aecbc09fd6b111ade416a7ed11371d95bd␟5168008278809915722:Statuses`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2548294080585673098$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_EXAMPLES_1_INDEX_TS_3 = goog.getMsg(" Use CSS and {$startTagCode}status=\"custom\"{$closeTagCode} for support colors\n", {
          "startTagCode": "\uFFFD#15\uFFFD",
          "closeTagCode": "\uFFFD/#15\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_2548294080585673098$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_EXAMPLES_1_INDEX_TS_3;
      } else {
        i18n_2 = $localize`:␟341ba0ba17100259ad46610fb7ae5593897d9335␟2548294080585673098: Use CSS and ${"\uFFFD#15\uFFFD"}:START_TAG_CODE:status="custom"${"\uFFFD/#15\uFFFD"}:CLOSE_TAG_CODE: for support colors
`;
      }

      return [i18n_0, [1, "tui-space_right-2", 3, "value"], ["status", "primary", 1, "tui-space_right-2", 3, "value"], ["status", "success", "value", "Success", 1, "tui-space_right-2"], ["status", "error", "value", "Error", 1, "tui-space_right-2"], ["status", "warning", "value", "Warning", 1, "tui-space_right-2"], ["status", "neutral", "value", "Neutral", 1, "tui-space_right-2"], ["status", "info", "value", "Info", 1, "tui-space_right-2"], ["tuiMode", "onLight", 1, "tui-space_right-2", "outline", "outline_dark"], [3, "value"], ["tuiMode", "onDark", 1, "outline", "outline_light"], i18n_2, ["status", "custom", "value", "Taiga", 3, "class", "hoverable", 4, "tuiRepeatTimes", "tuiRepeatTimesOf"], ["status", "custom", "value", "Taiga", 3, "hoverable"]];
    },
    template: function TuiBadgeExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18n */.SDv(1, 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-badge", 1);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-badge", 2);
        fesm2015_core/* ɵɵelement */._UZ(4, "tui-badge", 3);
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-badge", 4);
        fesm2015_core/* ɵɵelement */._UZ(6, "tui-badge", 5);
        fesm2015_core/* ɵɵelement */._UZ(7, "tui-badge", 6);
        fesm2015_core/* ɵɵelement */._UZ(8, "tui-badge", 7);
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "div", 8);
        fesm2015_core/* ɵɵelement */._UZ(10, "tui-badge", 9);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "div", 10);
        fesm2015_core/* ɵɵelement */._UZ(12, "tui-badge", 9);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(14, 11);
        fesm2015_core/* ɵɵelement */._UZ(15, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(16, TuiBadgeExample1_tui_badge_16_Template, 1, 4, "tui-badge", 12);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", -6);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 6);
        fesm2015_core/* ɵɵadvance */.xp6(7);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 6);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("value", 6);
        fesm2015_core/* ɵɵadvance */.xp6(4);
        fesm2015_core/* ɵɵproperty */.Q6J("tuiRepeatTimesOf", 20);
      }
    },
    directives: [badge_component/* TuiBadgeComponent */.g, mode_directive/* TuiModeDirective */.w, repeat_times_directive/* TuiRepeatTimesDirective */.X],
    styles: [".outline[_ngcontent-%COMP%]{display:inline-block;padding:.25rem;margin:-.25rem 0}.outline_light[_ngcontent-%COMP%]{background:#30406a}.outline_dark[_ngcontent-%COMP%]{background:#e5e7ea}.support-20[_ngcontent-%COMP%]{background-color:var(--tui-support-20, var(--tui-support-020))}.support-19[_ngcontent-%COMP%]{background-color:var(--tui-support-19, var(--tui-support-019))}.support-18[_ngcontent-%COMP%]{background-color:var(--tui-support-18, var(--tui-support-018))}.support-17[_ngcontent-%COMP%]{background-color:var(--tui-support-17, var(--tui-support-017))}.support-16[_ngcontent-%COMP%]{background-color:var(--tui-support-16, var(--tui-support-016))}.support-15[_ngcontent-%COMP%]{background-color:var(--tui-support-15, var(--tui-support-015))}.support-14[_ngcontent-%COMP%]{background-color:var(--tui-support-14, var(--tui-support-014))}.support-13[_ngcontent-%COMP%]{background-color:var(--tui-support-13, var(--tui-support-013))}.support-12[_ngcontent-%COMP%]{background-color:var(--tui-support-12, var(--tui-support-012))}.support-11[_ngcontent-%COMP%]{background-color:var(--tui-support-11, var(--tui-support-011))}.support-10[_ngcontent-%COMP%]{background-color:var(--tui-support-10, var(--tui-support-010))}.support-9[_ngcontent-%COMP%]{background-color:var(--tui-support-9, var(--tui-support-09))}.support-8[_ngcontent-%COMP%]{background-color:var(--tui-support-8, var(--tui-support-08))}.support-7[_ngcontent-%COMP%]{background-color:var(--tui-support-7, var(--tui-support-07))}.support-6[_ngcontent-%COMP%]{background-color:var(--tui-support-6, var(--tui-support-06))}.support-5[_ngcontent-%COMP%]{background-color:var(--tui-support-5, var(--tui-support-05))}.support-4[_ngcontent-%COMP%]{background-color:var(--tui-support-4, var(--tui-support-04))}.support-3[_ngcontent-%COMP%]{background-color:var(--tui-support-3, var(--tui-support-03))}.support-2[_ngcontent-%COMP%]{background-color:var(--tui-support-2, var(--tui-support-02))}.support-1[_ngcontent-%COMP%]{background-color:var(--tui-support-1, var(--tui-support-01))}"],
    changeDetection: 0
  });
  return TuiBadgeExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/badge/examples/2/index.ts


let TuiBadgeExample2 = /*#__PURE__*/(() => {
  class TuiBadgeExample2 {}

  TuiBadgeExample2.ɵfac = function TuiBadgeExample2_Factory(t) {
    return new (t || TuiBadgeExample2)();
  };

  TuiBadgeExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiBadgeExample2,
    selectors: [["tui-badge-example-2"]],
    decls: 4,
    vars: 4,
    consts: [["size", "xs", "value", "Badge", 1, "tui-space_right-2", 3, "hoverable"], ["size", "s", "value", "Badge", 1, "tui-space_right-2", 3, "hoverable"], ["size", "m", "value", "Badge", 1, "tui-space_right-2", 3, "hoverable"], ["size", "l", "value", "Badge", 3, "hoverable"]],
    template: function TuiBadgeExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-badge", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-badge", 1);
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-badge", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-badge", 3);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("hoverable", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("hoverable", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("hoverable", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("hoverable", true);
      }
    },
    directives: [badge_component/* TuiBadgeComponent */.g],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiBadgeExample2;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/badge/examples/3/index.ts


let TuiBadgeExample3 = /*#__PURE__*/(() => {
  class TuiBadgeExample3 {}

  TuiBadgeExample3.ɵfac = function TuiBadgeExample3_Factory(t) {
    return new (t || TuiBadgeExample3)();
  };

  TuiBadgeExample3.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiBadgeExample3,
    selectors: [["tui-badge-example-3"]],
    decls: 1,
    vars: 2,
    consts: [["size", "l", 1, "badge", 3, "value", "hoverable"]],
    template: function TuiBadgeExample3_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelement */._UZ(0, "tui-badge", 0);
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("value", 100)("hoverable", true);
      }
    },
    directives: [badge_component/* TuiBadgeComponent */.g],
    styles: [".badge[_ngcontent-%COMP%]{background-image:linear-gradient(45deg,#c86dd7 0%,#3023ae 100%)}"],
    changeDetection: 0
  });
  return TuiBadgeExample3;
})();
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/badge/examples/4/index.ts



let TuiBadgeExample4 = /*#__PURE__*/(() => {
  class TuiBadgeExample4 {}

  TuiBadgeExample4.ɵfac = function TuiBadgeExample4_Factory(t) {
    return new (t || TuiBadgeExample4)();
  };

  TuiBadgeExample4.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiBadgeExample4,
    selectors: [["tui-badge-example-4"]],
    decls: 8,
    vars: 0,
    consts: [["status", "success", "value", "Taiga", 1, "tui-space_right-2"], ["src", "tuiIconTooltip"], ["status", "error", "value", "Taiga", 1, "tui-space_right-2"], ["status", "default", 1, "tui-space_right-2"], ["status", "error", "value", "Custom template", 1, "tui-space_right-2"], [1, "custom-content"]],
    template: function TuiBadgeExample4_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-badge", 0);
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-svg", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-badge", 2);
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-svg", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-badge", 3);
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-svg", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-badge", 4);
        fesm2015_core/* ɵɵelement */._UZ(7, "span", 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [badge_component/* TuiBadgeComponent */.g, svg_component/* TuiSvgComponent */.P],
    styles: [".custom-content[_ngcontent-%COMP%]{margin:0 .5625rem 0 .25rem;width:.375rem;height:.375rem;background:currentColor;display:block;border-radius:50%}"],
    changeDetection: 0
  });
  return TuiBadgeExample4;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/demo/demo.component.ts
var demo_component = __webpack_require__(31823);
// EXTERNAL MODULE: ./projects/kit/components/toggle/toggle.component.ts
var toggle_component = __webpack_require__(82535);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/badge/badge.component.ts


















function ExampleTuiBadgeComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 2);
    fesm2015_core/* ɵɵi18n */.SDv(1, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18n */.SDv(3, 4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-badge-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-badge-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "tui-doc-example", 7);
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-badge-example-3");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 8);
    fesm2015_core/* ɵɵelement */._UZ(11, "tui-badge-example-4");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example2);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example3);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example4);
  }
}

function ExampleTuiBadgeComponent_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-badge", 16);
    fesm2015_core/* ɵɵelement */._UZ(2, "tui-svg", 17);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("hoverable", ctx_r3.hoverable)("size", ctx_r3.size)("status", ctx_r3.status)("value", ctx_r3.values[ctx_r3.value]);
  }
}

function ExampleTuiBadgeComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "tui-badge", 16);
  }

  if (rf & 2) {
    const ctx_r5 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("hoverable", ctx_r5.hoverable)("size", ctx_r5.size)("status", ctx_r5.status)("value", ctx_r5.values[ctx_r5.value]);
  }
}

function ExampleTuiBadgeComponent_ng_template_2_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 18);
  }
}

function ExampleTuiBadgeComponent_ng_template_2_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 19);
  }
}

function ExampleTuiBadgeComponent_ng_template_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 20);
  }
}

function ExampleTuiBadgeComponent_ng_template_2_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 21);
  }
}

function ExampleTuiBadgeComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-demo");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
    fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiBadgeComponent_ng_template_2_ng_container_2_Template, 3, 4, "ng-container", 9);
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiBadgeComponent_ng_template_2_ng_template_3_Template, 1, 4, "ng-template", null, 10, fesm2015_core/* ɵɵtemplateRefExtractor */.W1O);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(5, " with icon ");
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "tui-toggle", 11);
    fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function ExampleTuiBadgeComponent_ng_template_2_Template_tui_toggle_ngModelChange_6_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r10 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r10.withIcon = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(8, ExampleTuiBadgeComponent_ng_template_2_ng_template_8_Template, 1, 0, "ng-template", 12);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBadgeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_8_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r12 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r12.hoverable = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(9, ExampleTuiBadgeComponent_ng_template_2_ng_template_9_Template, 1, 0, "ng-template", 13);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBadgeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_9_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r13 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r13.size = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(10, ExampleTuiBadgeComponent_ng_template_2_ng_template_10_Template, 1, 0, "ng-template", 14);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBadgeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_10_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r14 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r14.status = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(11, ExampleTuiBadgeComponent_ng_template_2_ng_template_11_Template, 1, 0, "ng-template", 15);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiBadgeComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_11_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r11);
      const ctx_r15 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r15.value = $event;
    });
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const _r4 = fesm2015_core/* ɵɵreference */.MAs(4);

    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx_r1.withIcon)("ngIfElse", _r4);
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("singleColor", true)("ngModel", ctx_r1.withIcon);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValue", ctx_r1.hoverable);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.sizeVariants)("documentationPropertyValue", ctx_r1.size);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.statusVariants)("documentationPropertyValue", ctx_r1.status);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.valueVariants)("documentationPropertyValue", ctx_r1.value);
  }
}

function ExampleTuiBadgeComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 22);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 23);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 24);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 25);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 26);
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

let ExampleTuiBadgeComponent = /*#__PURE__*/(() => {
  class ExampleTuiBadgeComponent {
    constructor() {
      this.exampleModule = __webpack_require__.e(/* import() */ 87084).then(__webpack_require__.t.bind(__webpack_require__, 87084, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 39954).then(__webpack_require__.t.bind(__webpack_require__, 39954, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 77078).then(__webpack_require__.t.bind(__webpack_require__, 77078, 17)),
        HTML: __webpack_require__.e(/* import() */ 82969).then(__webpack_require__.t.bind(__webpack_require__, 82969, 17)),
        LESS: __webpack_require__.e(/* import() */ 52950).then(__webpack_require__.t.bind(__webpack_require__, 52950, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 27330).then(__webpack_require__.t.bind(__webpack_require__, 27330, 17)),
        HTML: __webpack_require__.e(/* import() */ 13406).then(__webpack_require__.t.bind(__webpack_require__, 13406, 17))
      };
      this.example3 = {
        TypeScript: __webpack_require__.e(/* import() */ 89842).then(__webpack_require__.t.bind(__webpack_require__, 74558, 17)),
        HTML: __webpack_require__.e(/* import() */ 79120).then(__webpack_require__.t.bind(__webpack_require__, 79120, 17)),
        LESS: __webpack_require__.e(/* import() */ 73396).then(__webpack_require__.t.bind(__webpack_require__, 73396, 17))
      };
      this.example4 = {
        TypeScript: __webpack_require__.e(/* import() */ 80401).then(__webpack_require__.t.bind(__webpack_require__, 80401, 17)),
        HTML: __webpack_require__.e(/* import() */ 92190).then(__webpack_require__.t.bind(__webpack_require__, 92190, 17))
      };
      this.statusVariants = [`default`, `primary`, `custom`, `success`, `error`, `warning`, `info`, `neutral`];
      this.status = this.statusVariants[0];
      this.values = {
        Taiga: `Taiga`,
        '5': 5,
        '100': 100,
        '"100"': `100`,
        '""': ``
      };
      this.sizeVariants = [`xs`, `s`, `m`, `l`];
      this.size = this.sizeVariants[1];
      this.valueVariants = Object.keys(this.values);
      this.value = `Taiga`;
      this.hoverable = false;
      this.withIcon = false;
    }

  }

  ExampleTuiBadgeComponent.ɵfac = function ExampleTuiBadgeComponent_Factory(t) {
    return new (t || ExampleTuiBadgeComponent)();
  };

  ExampleTuiBadgeComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiBadgeComponent,
    selectors: [["example-badge"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6226238482124767620$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__1 = goog.getMsg(" Badges show text and number values. Number values may show new message or notifications. ");
        i18n_0 = MSG_EXTERNAL_6226238482124767620$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟ca6efa872e6057ac47526bf61ae8ad55a93562cf␟6226238482124767620: Badges show text and number values. Number values may show new message or notifications. `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4867078294231331621$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__3 = goog.getMsg(" Use badges to attract attenton to a new or updated content. Number values may also be with \"+\" sign that shows that number is more than maximum value to show. ");
        i18n_2 = MSG_EXTERNAL_4867078294231331621$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟39838c102c049312ecb539610d6ab78253805f38␟4867078294231331621: Use badges to attract attenton to a new or updated content. Number values may also be with "+" sign that shows that number is more than maximum value to show. `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__5 = goog.getMsg("Basic");
        i18n_4 = MSG_EXTERNAL_8643289769990675407$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4786079975066246634$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__7 = goog.getMsg("Sizes and hoverable");
        i18n_6 = MSG_EXTERNAL_4786079975066246634$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟0e61a2113a8f4bbd6ba3c991a972a4a5ca0386a3␟4786079975066246634:Sizes and hoverable`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__9 = goog.getMsg("Custom");
        i18n_8 = MSG_EXTERNAL_7590013429208346303$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__9;
      } else {
        i18n_8 = $localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7005100758555430198$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__11 = goog.getMsg("With icon");
        i18n_10 = MSG_EXTERNAL_7005100758555430198$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟27ce7fa0c6db3c8f4d7045c3661f318da6ee9a9b␟7005100758555430198:With icon`;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5631539240413317224$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS___13 = goog.getMsg(" Enable hovered state ");
        i18n_12 = MSG_EXTERNAL_5631539240413317224$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS___13;
      } else {
        i18n_12 = $localize`:␟835de877756233ad75dbf3f8b110329410fc6301␟5631539240413317224: Enable hovered state `;
      }

      let i18n_14;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS___15 = goog.getMsg(" Size ");
        i18n_14 = MSG_EXTERNAL_5919257397270847364$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS___15;
      } else {
        i18n_14 = $localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `;
      }

      let i18n_16;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_588461094090172118$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS___17 = goog.getMsg(" Status changes badge color ");
        i18n_16 = MSG_EXTERNAL_588461094090172118$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS___17;
      } else {
        i18n_16 = $localize`:␟17264c5271356d4f957e279750570d27172c0a55␟588461094090172118: Status changes badge color `;
      }

      let i18n_18;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_47851853443220007$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS___19 = goog.getMsg(" Value. If value is a number and is more than 99, it will be replaced with \u00AB99+\u00BB ");
        i18n_18 = MSG_EXTERNAL_47851853443220007$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS___19;
      } else {
        i18n_18 = $localize`:␟0e38907576c8a8914ae8334668488260e57d319b␟47851853443220007: Value. If value is a number and is more than 99, it will be replaced with «99+» `;
      }

      let i18n_20;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4105165941448790841$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__21 = goog.getMsg(" Import {$startTagCode}TuiBadgeModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_20 = MSG_EXTERNAL_4105165941448790841$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__21;
      } else {
        i18n_20 = $localize`:␟d7a9c88967367a9da85db9cd9ada562102836da0␟4105165941448790841: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiBadgeModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_22;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__23 = goog.getMsg("Add to the template:");
        i18n_22 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_BADGE_BADGE_COMPONENT_TS__23;
      } else {
        i18n_22 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Badge", "package", "KIT", "type", "components"], ["pageTab", ""], [1, "tui-space_bottom-3"], i18n_0, i18n_2, ["id", "base", "heading", i18n_4, 3, "content"], ["id", "size", "heading", i18n_6, 3, "content"], ["id", "custom", "heading", i18n_8, 3, "content"], ["id", "icons", "heading", i18n_10, 3, "content"], [4, "ngIf", "ngIfElse"], ["withoutIcon", ""], [1, "tui-space_horizontal-2", 3, "singleColor", "ngModel", "ngModelChange"], ["documentationPropertyName", "hoverable", "documentationPropertyType", "boolean", "documentationPropertyMode", "input", 3, "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "size", "documentationPropertyMode", "input", "documentationPropertyType", "TuiSizeL", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "status", "documentationPropertyMode", "input", "documentationPropertyType", "TuiStatus", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "value", "documentationPropertyMode", "input", "documentationPropertyType", "string | number", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], [3, "hoverable", "size", "status", "value"], ["src", "tuiIconTooltip"], i18n_12, i18n_14, i18n_16, i18n_18, [1, "b-demo-steps"], i18n_20, ["filename", "myComponent.module.ts", 3, "code"], i18n_22, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiBadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiBadgeComponent_ng_template_1_Template, 12, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiBadgeComponent_ng_template_2_Template, 12, 11, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiBadgeComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, example_component/* TuiDocExampleComponent */.f, TuiBadgeExample1, TuiBadgeExample2, TuiBadgeExample3, TuiBadgeExample4, demo_component/* TuiDocDemoComponent */.F, common/* NgIf */.O5, toggle_component/* TuiToggleComponent */.p, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, badge_component/* TuiBadgeComponent */.g, svg_component/* TuiSvgComponent */.P, code_component/* TuiDocCodeComponent */.c],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiBadgeComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/badge/badge.module.ts














let ExampleTuiBadgeModule = /*#__PURE__*/(() => {
  class ExampleTuiBadgeModule {}

  ExampleTuiBadgeModule.ɵfac = function ExampleTuiBadgeModule_Factory(t) {
    return new (t || ExampleTuiBadgeModule)();
  };

  ExampleTuiBadgeModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiBadgeModule
  });
  ExampleTuiBadgeModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[kit.TuiBadgeModule, core.TuiModeModule, cdk.TuiRepeatTimesModule, core.TuiSvgModule, kit.TuiToggleModule, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiBadgeComponent))]]
  });
  return ExampleTuiBadgeModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiBadgeModule, {
    declarations: [ExampleTuiBadgeComponent, TuiBadgeExample1, TuiBadgeExample2, TuiBadgeExample3, TuiBadgeExample4],
    imports: [kit.TuiBadgeModule, core.TuiModeModule, cdk.TuiRepeatTimesModule, core.TuiSvgModule, kit.TuiToggleModule, fesm2015_forms/* FormsModule */.u5, common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiBadgeComponent]
  });
})();

/***/ })

}]);