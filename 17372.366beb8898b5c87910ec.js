"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[17372],{

/***/ 17372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "WrapperModule": () => (/* binding */ WrapperModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2015/clipboard.js
var clipboard = __webpack_require__(50506);
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
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/input/input.component.ts
var input_component = __webpack_require__(77027);
// EXTERNAL MODULE: ./projects/kit/components/input/input.directive.ts
var input_directive = __webpack_require__(41360);
// EXTERNAL MODULE: ./projects/kit/components/checkbox-labeled/checkbox-labeled.component.ts
var checkbox_labeled_component = __webpack_require__(81894);
// EXTERNAL MODULE: ./projects/core/components/button/button.component.ts
var button_component = __webpack_require__(76189);
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/wrapper/examples/1/index.ts







let TuiWrapperExample1 = /*#__PURE__*/(() => {
  class TuiWrapperExample1 {
    constructor() {
      this.value = ``;
      this.checkbox = false;
    }

  }

  TuiWrapperExample1.ɵfac = function TuiWrapperExample1_Factory(t) {
    return new (t || TuiWrapperExample1)();
  };

  TuiWrapperExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiWrapperExample1,
    selectors: [["tui-wrapper-example-1"]],
    features: [fesm2015_core/* ɵɵProvidersFeature */._Bn([{
      provide: core.TUI_TEXTFIELD_APPEARANCE,
      useValue: `material-textfield`
    }, (0,core.tuiCheckboxOptionsProvider)({
      appearances: {
        unchecked: `material-checkbox-off`,
        checked: `material-checkbox-on`,
        indeterminate: `material-checkbox-on`
      }
    })])],
    decls: 7,
    vars: 2,
    consts: [["minlength", "5", 1, "b-form", 3, "ngModel", "ngModelChange"], [1, "tui-space_vertical-4"], [3, "ngModel", "ngModelChange"], ["tuiButton", "", "size", "s", "appearance", "material-button"]],
    template: function TuiWrapperExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-input", 0);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiWrapperExample1_Template_tui_input_ngModelChange_0_listener($event) {
          return ctx.value = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(1, " Input example\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "div", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(3, "tui-checkbox-labeled", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiWrapperExample1_Template_tui_checkbox_labeled_ngModelChange_3_listener($event) {
          return ctx.checkbox = $event;
        });
        fesm2015_core/* ɵɵtext */._uU(4, "Checkbox example");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "button", 3);
        fesm2015_core/* ɵɵtext */._uU(6, " Submit\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.value);
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.checkbox);
      }
    },
    directives: [input_component/* TuiInputComponent */.K, input_directive/* TuiInputDirective */.w, fesm2015_forms/* MinLengthValidator */.wO, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, checkbox_labeled_component/* TuiCheckboxLabeledComponent */.p, button_component/* TuiButtonComponent */.v],
    styles: ["[tuiWrapper][data-appearance=material-textfield]{background:#f5f5f5;color:rgba(0,0,0,.87);border-radius:.25rem .25rem 0 0}[tuiWrapper][data-appearance=material-textfield]:after{transition-property:all;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;height:.0625rem;background:#8e8e8e;top:auto;border:none;transform-origin:bottom}@media (hover: hover){[tuiWrapper][data-appearance=material-textfield]:hover:not(._no-hover),[tuiWrapper][data-appearance=material-textfield][data-state=hover]{background:#ececec}[tuiWrapper][data-appearance=material-textfield]:hover:not(._no-hover):after,[tuiWrapper][data-appearance=material-textfield][data-state=hover]:after{background:#1f1f1f}}[tuiWrapper][data-appearance=material-textfield]:focus-visible:focus-visible{background:#dcdcdc}[tuiWrapper][data-appearance=material-textfield]:focus-visible:focus-visible label{color:#6200ee!important}[tuiWrapper][data-appearance=material-textfield]:focus-visible:focus-visible:after{background:#6200ee;transform:scaleY(2)}[tuiWrapper][data-appearance=material-textfield]._focused._focused{background:#dcdcdc}[tuiWrapper][data-appearance=material-textfield]._focused._focused label{color:#6200ee!important}[tuiWrapper][data-appearance=material-textfield]._focused._focused:after{background:#6200ee;transform:scaleY(2)}[tuiWrapper][data-appearance=material-textfield]:invalid:invalid label,[tuiWrapper][data-appearance=material-textfield]._invalid._invalid label{color:#b00020!important}[tuiWrapper][data-appearance=material-textfield]:invalid:invalid:after,[tuiWrapper][data-appearance=material-textfield]._invalid._invalid:after{background:#b00020}[tuiWrapper][data-appearance=material-button]{transition-property:all;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;border-radius:.25rem;background:#6200ee;color:#fff;text-transform:uppercase;font-weight:bold;box-shadow:0 .1875rem .0625rem -.125rem rgba(0,0,0,.2),0 .125rem .125rem rgba(0,0,0,0),0 .0625rem .3125rem rgba(0,0,0,.12)}@media (hover: hover){[tuiWrapper][data-appearance=material-button]:hover:not(._no-hover),[tuiWrapper][data-appearance=material-button][data-state=hover]{background:#6e14ef;box-shadow:0 .125rem .25rem -.0625rem rgba(0,0,0,.2),0 .25rem .3125rem rgba(0,0,0,.14),0 .0625rem .625rem rgba(0,0,0,.12)}}[tuiWrapper][data-appearance=material-button]:active:not(._no-active),[tuiWrapper][data-appearance=material-button][data-state=active],[tuiWrapper][data-appearance=material-button][data-state=active]:hover{background:#6e14ef;box-shadow:0 .3125rem .3125rem -.1875rem rgba(0,0,0,.2),0 .5rem .625rem .0625rem rgba(0,0,0,.14),0 .1875rem .875rem .125rem rgba(0,0,0,.12)}[tuiWrapper][data-appearance=material-button]:focus-visible:focus-visible{background:#883df2}[tuiWrapper][data-appearance=material-button]:focus-visible:focus-visible:after{display:none}[tuiWrapper][data-appearance=material-button]._focused._focused{background:#883df2}[tuiWrapper][data-appearance=material-button]._focused._focused:after{display:none}[tuiWrapper][data-appearance=material-checkbox-on],[tuiWrapper][data-appearance=material-checkbox-off]{color:#fff}[tuiWrapper][data-appearance=material-checkbox-on]:before,[tuiWrapper][data-appearance=material-checkbox-off]:before{position:absolute;content:\"\";top:0;left:0;right:0;bottom:0;border-radius:.125rem;border:2px solid rgba(0,0,0,.54);transition:all var(--tui-duration)}[tuiWrapper][data-appearance=material-checkbox-on]:after,[tuiWrapper][data-appearance=material-checkbox-off]:after{transition-property:opacity;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:-.5rem;left:-.5rem;right:-.5rem;bottom:-.5rem;border-radius:100%;background:#000;opacity:0}@media (hover: hover){[tuiWrapper][data-appearance=material-checkbox-on]:hover:not(._no-hover):after,[tuiWrapper][data-appearance=material-checkbox-off]:hover:not(._no-hover):after,[tuiWrapper][data-appearance=material-checkbox-on][data-state=hover]:after,[tuiWrapper][data-appearance=material-checkbox-off][data-state=hover]:after{opacity:.05}}[tuiWrapper][data-appearance=material-checkbox-on]:active:not(._no-active):after,[tuiWrapper][data-appearance=material-checkbox-off]:active:not(._no-active):after,[tuiWrapper][data-appearance=material-checkbox-on][data-state=active]:after,[tuiWrapper][data-appearance=material-checkbox-off][data-state=active]:after,[tuiWrapper][data-appearance=material-checkbox-on][data-state=active]:hover:after,[tuiWrapper][data-appearance=material-checkbox-off][data-state=active]:hover:after{opacity:.1}[tuiWrapper][data-appearance=material-checkbox-on]:focus-visible:focus-visible:after,[tuiWrapper][data-appearance=material-checkbox-off]:focus-visible:focus-visible:after{opacity:.1}[tuiWrapper][data-appearance=material-checkbox-on]._focused._focused:after,[tuiWrapper][data-appearance=material-checkbox-off]._focused._focused:after{opacity:.1}[tuiWrapper][data-appearance=material-checkbox-on]:before,[tuiWrapper][data-appearance=material-checkbox-on]:after{background:#6200ee;border-color:transparent}\n"],
    encapsulation: 2
  });
  return TuiWrapperExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/copy/copy.component.ts
var copy_component = __webpack_require__(92164);
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/wrapper/wrapper.component.ts










function WrapperComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "tui-doc-copy", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "code");
    fesm2015_core/* ɵɵtext */._uU(3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("cdkCopyToClipboard", item_r1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵtextInterpolate */.Oqu(item_r1);
  }
}

let WrapperComponent = /*#__PURE__*/(() => {
  class WrapperComponent {
    constructor() {
      this.example1 = {
        HTML: __webpack_require__.e(/* import() */ 70913).then(__webpack_require__.t.bind(__webpack_require__, 70913, 17)),
        LESS: __webpack_require__.e(/* import() */ 23962).then(__webpack_require__.t.bind(__webpack_require__, 23962, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 23317).then(__webpack_require__.t.bind(__webpack_require__, 23317, 17))
      };
      this.mixins = [`.wrapper-hover(@ruleset)`, `.wrapper-active(@ruleset)`, `.wrapper-readonly(@ruleset)`, `.wrapper-disabled(@ruleset)`, `.wrapper-focus(@ruleset)`, `.wrapper-invalid(@ruleset)`];
    }

  }

  WrapperComponent.ɵfac = function WrapperComponent_Factory(t) {
    return new (t || WrapperComponent)();
  };

  WrapperComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: WrapperComponent,
    selectors: [["wrapper"]],
    decls: 22,
    vars: 2,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6199836572724339721$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_WRAPPER_WRAPPER_COMPONENT_TS_1 = goog.getMsg("Wrapper");
        i18n_0 = MSG_EXTERNAL_6199836572724339721$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_WRAPPER_WRAPPER_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟35330b8bd8fae8bd891f4fc98bb518fdaf27095b␟6199836572724339721:Wrapper`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1310689327665441923$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_WRAPPER_WRAPPER_COMPONENT_TS_3 = goog.getMsg(" Many Taiga UI components use {$startTagCode}tui-wrapper{$closeTagCode} component internally. It is responsible for display of various interactive states and is controlled with CSS. Buttons provide a direct input for {$startTagCode}appearance{$closeTagCode} while others, like input fields, are configurable through Dependency Injection. ", {
          "startTagCode": "[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]",
          "closeTagCode": "[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"
        });
        i18n_2 = MSG_EXTERNAL_1310689327665441923$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_WRAPPER_WRAPPER_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟dfbeb30bda71a2474f7e208e53fb8460a17e757a␟1310689327665441923: Many Taiga UI components use ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:tui-wrapper${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: component internally. It is responsible for display of various interactive states and is controlled with CSS. Buttons provide a direct input for ${"[\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:appearance${"[\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: while others, like input fields, are configurable through Dependency Injection. `;
      }

      i18n_2 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_2);
      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2041978795133447406$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_WRAPPER_WRAPPER_COMPONENT_TS_5 = goog.getMsg(" Built-in appearances come with Taiga UI theme. You can extend or completely replace them with your own in global non-encapsulated styles. Use the following mixins from {$startTagCode}@import '~@taiga-ui/core/styles/taiga-ui-local';{$closeTagCode} : ", {
          "startTagCode": "\uFFFD#7\uFFFD",
          "closeTagCode": "\uFFFD/#7\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_2041978795133447406$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_WRAPPER_WRAPPER_COMPONENT_TS_5;
      } else {
        i18n_4 = $localize`:␟68c2e95b75946e83ea5bd2e4dbc5e9ebba10fd70␟2041978795133447406: Built-in appearances come with Taiga UI theme. You can extend or completely replace them with your own in global non-encapsulated styles. Use the following mixins from ${"\uFFFD#7\uFFFD"}:START_TAG_CODE:@import '~@taiga-ui/core/styles/taiga-ui-local';${"\uFFFD/#7\uFFFD"}:CLOSE_TAG_CODE: : `;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1847855813698345106$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_WRAPPER_WRAPPER_COMPONENT_TS_7 = goog.getMsg("Imitate material");
        i18n_6 = MSG_EXTERNAL_1847855813698345106$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_WRAPPER_WRAPPER_COMPONENT_TS_7;
      } else {
        i18n_6 = $localize`:␟428a5c79e6b5bb5ed9ba84f0e336ee249b1c187e␟1847855813698345106:Imitate material`;
      }

      return [["header", i18n_0], i18n_2, i18n_4, [4, "ngFor", "ngForOf"], ["tuiLink", "", "routerLink", "/directives/mode"], ["id", "material", "heading", i18n_6, 3, "content"], [1, "var", 3, "cdkCopyToClipboard"]];
    },
    template: function WrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵelementStart */.TgZ(1, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(2, 1);
        fesm2015_core/* ɵɵelement */._UZ(3, "code");
        fesm2015_core/* ɵɵelement */._UZ(4, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(6, 2);
        fesm2015_core/* ɵɵelement */._UZ(7, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(8, "ul");
        fesm2015_core/* ɵɵtemplate */.YNc(9, WrapperComponent_li_9_Template, 4, 2, "li", 3);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(10, "p");
        fesm2015_core/* ɵɵtext */._uU(11, " Use ");
        fesm2015_core/* ɵɵelementStart */.TgZ(12, "code");
        fesm2015_core/* ɵɵtext */._uU(13, "[data-mode='onDark']");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(14, " / ");
        fesm2015_core/* ɵɵelementStart */.TgZ(15, "code");
        fesm2015_core/* ɵɵtext */._uU(16, "[data-mode='onLight']");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(17, " selectors to account for ");
        fesm2015_core/* ɵɵelementStart */.TgZ(18, "a", 4);
        fesm2015_core/* ɵɵtext */._uU(19, " Mode ");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(20, "tui-doc-example", 5);
        fesm2015_core/* ɵɵelement */._UZ(21, "tui-wrapper-example-1");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(9);
        fesm2015_core/* ɵɵproperty */.Q6J("ngForOf", ctx.mixins);
        fesm2015_core/* ɵɵadvance */.xp6(11);
        fesm2015_core/* ɵɵproperty */.Q6J("content", ctx.example1);
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, common/* NgForOf */.sg, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiWrapperExample1, copy_component/* TuiDocCopyComponent */.f, clipboard/* CdkCopyToClipboard */.i3],
    encapsulation: 2,
    changeDetection: 0
  });
  return WrapperComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/wrapper/wrapper.module.ts











let WrapperModule = /*#__PURE__*/(() => {
  class WrapperModule {}

  WrapperModule.ɵfac = function WrapperModule_Factory(t) {
    return new (t || WrapperModule)();
  };

  WrapperModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: WrapperModule
  });
  WrapperModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, clipboard/* ClipboardModule */.Iq, core.TuiButtonModule, public_api/* TuiDocCopyModule */.k7, kit.TuiInputModule, kit.TuiCheckboxLabeledModule, public_api/* TuiAddonDocModule */.fV, core.TuiLinkModule, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(WrapperComponent)), fesm2015_forms/* FormsModule */.u5]]
  });
  return WrapperModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(WrapperModule, {
    declarations: [WrapperComponent, TuiWrapperExample1],
    imports: [common/* CommonModule */.ez, clipboard/* ClipboardModule */.Iq, core.TuiButtonModule, public_api/* TuiDocCopyModule */.k7, kit.TuiInputModule, kit.TuiCheckboxLabeledModule, public_api/* TuiAddonDocModule */.fV, core.TuiLinkModule, router/* RouterModule */.Bz, fesm2015_forms/* FormsModule */.u5],
    exports: [WrapperComponent]
  });
})();

/***/ })

}]);