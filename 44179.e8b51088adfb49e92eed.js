"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[44179],{

/***/ 44179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "VariablesModule": () => (/* binding */ VariablesModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2015/clipboard.js
var clipboard = __webpack_require__(50506);
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/forms/fesm2015/forms.js + 1 modules
var fesm2015_forms = __webpack_require__(23738);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./projects/kit/index.ts + 115 modules
var kit = __webpack_require__(56757);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/island/island.component.ts
var island_component = __webpack_require__(70329);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/kit/components/checkbox-labeled/checkbox-labeled.component.ts
var checkbox_labeled_component = __webpack_require__(81894);
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/variables/examples/1/index.ts






let TuiVariablesExample1 = /*#__PURE__*/(() => {
  class TuiVariablesExample1 {
    constructor() {
      this.value = ``;
      this.checkbox = true;
    }

  }

  TuiVariablesExample1.ɵfac = function TuiVariablesExample1_Factory(t) {
    return new (t || TuiVariablesExample1)();
  };

  TuiVariablesExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiVariablesExample1,
    selectors: [["tui-variables-example-1"]],
    decls: 6,
    vars: 3,
    consts: [[3, "hoverable"], [3, "ngModel", "ngModelChange"], [1, "tui-space_top-4"], ["size", "l", 3, "ngModel", "ngModelChange"]],
    template: function TuiVariablesExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-island", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-input", 1);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiVariablesExample1_Template_tui_input_ngModelChange_1_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(2, "Input example");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "div", 2);
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-checkbox-labeled", 3);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiVariablesExample1_Template_tui_checkbox_labeled_ngModelChange_4_listener($event) {
          return ctx.checkbox = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(5, " Checkbox example ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("hoverable", true);
        fesm2015_core/* ɵɵadvance */.xp6(1);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.checkbox);
      }
    },
    directives: [island_component/* TuiIslandComponent */.h, input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, checkbox_labeled_component/* TuiCheckboxLabeledComponent */.p],
    styles: ["[_nghost-%COMP%]{--tui-font-text: \"Comic Sans MS\", cursive;--tui-font-text-m: bold 1rem/1.5rem var(--tui-font-text);--tui-font-text-s: normal .5rem/1.25rem var(--tui-font-text);--tui-primary: #c86dd7;--tui-primary-hover: #a456b1;--tui-primary-active: #7f3b8a;--tui-primary-text: #fff;--tui-radius-s: 0;--tui-radius-m: .25rem;--tui-height-l: 4.375rem}"],
    changeDetection: 0
  });
  return TuiVariablesExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/copy/copy.component.ts
var copy_component = __webpack_require__(92164);
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/variables/variables.component.ts










function VariablesComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-doc-copy", 9);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "code");
    fesm2015_core/* ɵɵtext */._uU(3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(4);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("cdkCopyToClipboard", item_r1.key);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(item_r1.key);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵtextInterpolate1 */.hij(" \u2014 ", item_r1.value, " ");
  }
}

let VariablesComponent = /*#__PURE__*/(() => {
  class VariablesComponent {
    constructor() {
      this.example1 = {
        HTML: __webpack_require__.e(/* import() */ 67453).then(__webpack_require__.t.bind(__webpack_require__, 67453, 17)),
        LESS: __webpack_require__.e(/* import() */ 69669).then(__webpack_require__.t.bind(__webpack_require__, 69669, 17))
      };
      this.vars = {
        '--tui-font-heading': `font for headings`,
        '--tui-font-text': `font for text`,
        '--tui-radius-xs': `border radius for smallest items (i.e. small checkbox)`,
        '--tui-radius-s': `border radius for small elements (i.e. tags)`,
        '--tui-radius-m': `default border radius`,
        '--tui-radius-l': `border radius for containers (i.e. hint, accordion)`,
        '--tui-height-xs': `smallest elements height (i.e. small button, badges)`,
        '--tui-height-s': `small elements height (i.e. small inputs)`,
        '--tui-height-m': `default elements height (i.e. inputs, buttons)`,
        '--tui-height-l': `large elements height (i.e. inputs, buttons)`,
        '--tui-padding-s': `padding for inputs with size "s"`,
        '--tui-padding-m': `padding for inputs with size "m"`,
        '--tui-padding-l': `padding for inputs with size "l"`,
        '--tui-disabled-opacity': `amount of transparency for disabled elements`,
        '--tui-autofill': `color for native browser autofill`
      };
    }

  }

  VariablesComponent.ɵfac = function VariablesComponent_Factory(t) {
    return new (t || VariablesComponent)();
  };

  VariablesComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: VariablesComponent,
    selectors: [["variables"]],
    decls: 17,
    vars: 4,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4467462789627316821$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_1 = goog.getMsg("Variables");
        i18n_0 = MSG_EXTERNAL_4467462789627316821$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟f014ca169762f17944612b404ca3277a0ff46b04␟4467462789627316821:Variables`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1632021933702754681$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_3 = goog.getMsg(" Taiga UI uses CSS custom properties for many of its visual aspects. You can see {$startLink} colors {$closeLink} for the full list of color variables. ", {
          "startLink": "\uFFFD#3\uFFFD",
          "closeLink": "\uFFFD/#3\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_1632021933702754681$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟5bfe32b26e1e4d60bcb63a2ab52042abc3588a5d␟1632021933702754681: Taiga UI uses CSS custom properties for many of its visual aspects. You can see ${"\uFFFD#3\uFFFD"}:START_LINK: colors ${"\uFFFD/#3\uFFFD"}:CLOSE_LINK: for the full list of color variables. `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_163740347890303905$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_5 = goog.getMsg("Besides colors there are also following variables that can be adjusted at any level of DOM structure:");
        i18n_4 = MSG_EXTERNAL_163740347890303905$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_5;
      } else {
        i18n_4 = $localize`:␟a4f75da9c1ff87f6cd13c629b6f4bea46a0de501␟163740347890303905:Besides colors there are also following variables that can be adjusted at any level of DOM structure:`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2655444008267344766$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_7 = goog.getMsg(" An easy way to dynamically override variables is to use a {$startLink}{$startTagCode}ThemeSwitcher{$closeTagCode}{$closeLink} . This is how {$startLink_1}{$startTagCode}ThemeNight{$closeTagCode}{$closeLink} does it. ", {
          "startLink": "\uFFFD#11\uFFFD",
          "startTagCode": "[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD]",
          "closeTagCode": "[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD]",
          "closeLink": "[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD]",
          "startLink_1": "\uFFFD#13\uFFFD"
        });
        i18n_6 = MSG_EXTERNAL_2655444008267344766$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_7;
      } else {
        i18n_6 = $localize`:␟bf9c19cc699aeb68adfd762067f0bc91ef2d1c14␟2655444008267344766: An easy way to dynamically override variables is to use a ${"\uFFFD#11\uFFFD"}:START_LINK:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:ThemeSwitcher${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_LINK: . This is how ${"\uFFFD#13\uFFFD"}:START_LINK_1:${"[\uFFFD#12\uFFFD|\uFFFD#14\uFFFD]"}:START_TAG_CODE:ThemeNight${"[\uFFFD/#12\uFFFD|\uFFFD/#14\uFFFD]"}:CLOSE_TAG_CODE:${"[\uFFFD/#11\uFFFD|\uFFFD/#13\uFFFD]"}:CLOSE_LINK: does it. `;
      }

      i18n_6 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_6);
      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1809364622633527376$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_9 = goog.getMsg("Override example");
        i18n_8 = MSG_EXTERNAL_1809364622633527376$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_VARIABLES_VARIABLES_COMPONENT_TS_9;
      } else {
        i18n_8 = $localize`:␟d557ac3c1cb761db5ba264036accec4aca3c6d98␟1809364622633527376:Override example`;
      }

      return [["header", i18n_0], i18n_2, ["tuiLink", "", "routerLink", "/colors"], i18n_4, [4, "ngFor", "ngForOf"], i18n_6, ["tuiLink", "", "routerLink", "/components/theme-switcher"], ["tuiLink", "", "routerLink", "/components/theme-night"], ["id", "override", "heading", i18n_8, 3, "content"], [1, "var", 3, "cdkCopyToClipboard"]];
    },
    template: function VariablesComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(2, 1);
        fesm2015_core/* ɵɵelement */._UZ(3, "a", 2);
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
        fesm2015_core/* ɵɵi18n */.SDv(5, 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "ul");
        fesm2015_core/* ɵɵtemplate */.YNc(7, VariablesComponent_li_7_Template, 5, 3, "li", 4);
        fesm2015_core/* ɵɵpipe */.ALo(8, "keyvalue");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(10, 5);
        fesm2015_core/* ɵɵelementStart */.TgZ(11, "a", 6);
        fesm2015_core/* ɵɵelement */._UZ(12, "code");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(13, "a", 7);
        fesm2015_core/* ɵɵelement */._UZ(14, "code");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "tui-doc-example", 8);
        fesm2015_core/* ɵɵelement */._UZ(16, "tui-variables-example-1");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(7);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(8, 2, ctx.vars));
        fesm2015_core/* ɵɵadvance */.xp6(8);
        fesm2015_core/* ɵɵproperty */.Q6J("content", ctx.example1);
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, common/* NgForOf */.sg, example_component/* TuiDocExampleComponent */.f, TuiVariablesExample1, copy_component/* TuiDocCopyComponent */.f, clipboard/* CdkCopyToClipboard */.i3],
    pipes: [common/* KeyValuePipe */.Nd],
    encapsulation: 2,
    changeDetection: 0
  });
  return VariablesComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/variables/variables.module.ts











let VariablesModule = /*#__PURE__*/(() => {
  class VariablesModule {}

  VariablesModule.ɵfac = function VariablesModule_Factory(t) {
    return new (t || VariablesModule)();
  };

  VariablesModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: VariablesModule
  });
  VariablesModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, clipboard/* ClipboardModule */.Iq, kit.TuiIslandModule, core.TuiLinkModule, public_api/* TuiDocCopyModule */.k7, kit.TuiInputModule, kit.TuiCheckboxLabeledModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(VariablesComponent)), fesm2015_forms/* FormsModule */.u5]]
  });
  return VariablesModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(VariablesModule, {
    declarations: [VariablesComponent, TuiVariablesExample1],
    imports: [common/* CommonModule */.ez, clipboard/* ClipboardModule */.Iq, kit.TuiIslandModule, core.TuiLinkModule, public_api/* TuiDocCopyModule */.k7, kit.TuiInputModule, kit.TuiCheckboxLabeledModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz, fesm2015_forms/* FormsModule */.u5],
    exports: [VariablesComponent]
  });
})();

/***/ })

}]);