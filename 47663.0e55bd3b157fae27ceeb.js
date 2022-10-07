"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[47663],{

/***/ 47663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiThemeSwitcherModule": () => (/* binding */ ExampleTuiThemeSwitcherModule)
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
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/kit/components/toggle/toggle.component.ts
var toggle_component = __webpack_require__(82535);
// EXTERNAL MODULE: ./projects/cdk/index.ts + 87 modules
var cdk = __webpack_require__(36692);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/theme-switcher/examples/elderly/elderly.component.ts


let ElderlyComponent = /*#__PURE__*/(() => {
  class ElderlyComponent extends cdk.AbstractTuiThemeSwitcher {}

  ElderlyComponent.ɵfac = /*@__PURE__*/function () {
    let ɵElderlyComponent_BaseFactory;
    return function ElderlyComponent_Factory(t) {
      return (ɵElderlyComponent_BaseFactory || (ɵElderlyComponent_BaseFactory = fesm2015_core/* ɵɵgetInheritedFactory */.n5z(ElderlyComponent)))(t || ElderlyComponent);
    };
  }();

  ElderlyComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ElderlyComponent,
    selectors: [["elderly"]],
    features: [fesm2015_core/* ɵɵInheritDefinitionFeature */.qOj],
    decls: 0,
    vars: 0,
    template: function ElderlyComponent_Template(rf, ctx) {},
    styles: [":root{--tui-primary-text: #fff;--tui-primary: #299d37;--tui-primary-hover: #2c7a35;--tui-primary-active: #2c7a35;--tui-link: #f59726;--tui-link-hover: #fab00b;--tui-selection: #f3fadc}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return ElderlyComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/theme-switcher/examples/1/index.ts






function TuiThemeSwitcherExample1_elderly_5_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelement */._UZ(0, "elderly");
  }
}

let TuiThemeSwitcherExample1 = /*#__PURE__*/(() => {
  class TuiThemeSwitcherExample1 {
    constructor() {
      this.enabled = false;
    }

  }

  TuiThemeSwitcherExample1.ɵfac = function TuiThemeSwitcherExample1_Factory(t) {
    return new (t || TuiThemeSwitcherExample1)();
  };

  TuiThemeSwitcherExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiThemeSwitcherExample1,
    selectors: [["tui-theme-switcher-1"]],
    decls: 9,
    vars: 2,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2349548101776240308$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_THEME_SWITCHER_EXAMPLES_1_INDEX_TS_1 = goog.getMsg(" Samples of {$startTagCode}LESS{$closeTagCode} and {$startTagCode}TypeScript{$closeTagCode} are in {$startTagCode}elderly{$closeTagCode} component.\n", {
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"
        });
        i18n_0 = MSG_EXTERNAL_2349548101776240308$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_THEME_SWITCHER_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟57965de445a0e14fc9f275dfa15df51c6588ae2a␟2349548101776240308: Samples of ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:LESS${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: and ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:TypeScript${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: are in ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD|\uFFFD#4\uFFFD]"}:START_TAG_CODE:elderly${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD|\uFFFD/#4\uFFFD]"}:CLOSE_TAG_CODE: component.
`;
      }

      i18n_0 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_0);
      return [i18n_0, [4, "ngIf"], ["size", "l", 1, "tui-space_right-1", 3, "ngModel", "ngModelChange"]];
    },
    template: function TuiThemeSwitcherExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵi18nStart */.tHW(1, 0);
        fesm2015_core/* ɵɵelement */._UZ(2, "code");
        fesm2015_core/* ɵɵelement */._UZ(3, "code");
        fesm2015_core/* ɵɵelement */._UZ(4, "code");
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtemplate */.YNc(5, TuiThemeSwitcherExample1_elderly_5_Template, 1, 0, "elderly", 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(6, "label");
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "tui-toggle", 2);
        fesm2015_core/* ɵɵlistener */.NdJ("ngModelChange", function TuiThemeSwitcherExample1_Template_tui_toggle_ngModelChange_7_listener($event) {
          return ctx.enabled = $event;
        });
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵtext */._uU(8, " Senior Citizen mode\n");
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(5);
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", ctx.enabled);
        fesm2015_core/* ɵɵadvance */.xp6(2);
        fesm2015_core/* ɵɵproperty */.Q6J("ngModel", ctx.enabled);
      }
    },
    directives: [common/* NgIf */.O5, toggle_component/* TuiToggleComponent */.p, fesm2015_forms/* NgControlStatus */.JJ, fesm2015_forms/* NgModel */.On, ElderlyComponent],
    encapsulation: 2,
    changeDetection: 0
  });
  return TuiThemeSwitcherExample1;
})();
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/notification/notification.component.ts
var notification_component = __webpack_require__(79121);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/theme-switcher/theme-switcher.component.ts







function ExampleTuiThemeSwitcherComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-notification", 3);
    fesm2015_core/* ɵɵtext */._uU(5, " Use ");
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "code");
    fesm2015_core/* ɵɵtext */._uU(7, "*ngIf");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtext */._uU(8, " to switch theme on the fly ");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(9, "tui-notification", 4);
    fesm2015_core/* ɵɵtext */._uU(10, " Component must have ");
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "code");
    fesm2015_core/* ɵɵtext */._uU(12, "encapsulation: ViewEncapsulation.None");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(13, "tui-doc-example", 5);
    fesm2015_core/* ɵɵelement */._UZ(14, "tui-theme-switcher-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(13);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

let ExampleTuiThemeSwitcherComponent = /*#__PURE__*/(() => {
  class ExampleTuiThemeSwitcherComponent {
    constructor() {
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 79726).then(__webpack_require__.t.bind(__webpack_require__, 79726, 17)),
        HTML: __webpack_require__.e(/* import() */ 82871).then(__webpack_require__.t.bind(__webpack_require__, 82871, 17)),
        LESS: __webpack_require__.e(/* import() */ 76020).then(__webpack_require__.t.bind(__webpack_require__, 76020, 17))
      };
    }

  }

  ExampleTuiThemeSwitcherComponent.ɵfac = function ExampleTuiThemeSwitcherComponent_Factory(t) {
    return new (t || ExampleTuiThemeSwitcherComponent)();
  };

  ExampleTuiThemeSwitcherComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiThemeSwitcherComponent,
    selectors: [["example-tui-theme-switcher"]],
    decls: 2,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5051158689905388764$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_THEME_SWITCHER_THEME_SWITCHER_COMPONENT_TS_1 = goog.getMsg("ThemeSwitcher");
        i18n_0 = MSG_EXTERNAL_5051158689905388764$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_THEME_SWITCHER_THEME_SWITCHER_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟aa28493a738be584031c0ab5ad92491d69ceb7f9␟5051158689905388764:ThemeSwitcher`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1350615909534605037$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_THEME_SWITCHER_THEME_SWITCHER_COMPONENT_TS__3 = goog.getMsg("{$startTagCode}AbstractTuiThemeSwitcher{$closeTagCode} is an abstract class to be used for dynamic theme switching. In the sample below you can see a component that extends {$startTagCode}AbstractTuiThemeSwitcher{$closeTagCode} and reassigns some CSS variables. ", {
          "startTagCode": "[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]",
          "closeTagCode": "[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"
        });
        i18n_2 = MSG_EXTERNAL_1350615909534605037$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_THEME_SWITCHER_THEME_SWITCHER_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟2647bf95c5f901bf7ff7a979761aec04bc9802b9␟1350615909534605037:${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:AbstractTuiThemeSwitcher${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: is an abstract class to be used for dynamic theme switching. In the sample below you can see a component that extends ${"[\uFFFD#2\uFFFD|\uFFFD#3\uFFFD]"}:START_TAG_CODE:AbstractTuiThemeSwitcher${"[\uFFFD/#2\uFFFD|\uFFFD/#3\uFFFD]"}:CLOSE_TAG_CODE: and reassigns some CSS variables. `;
      }

      i18n_2 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_2);
      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4661923683013028003$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_THEME_SWITCHER_THEME_SWITCHER_COMPONENT_TS__5 = goog.getMsg("Green theme");
        i18n_4 = MSG_EXTERNAL_4661923683013028003$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_THEME_SWITCHER_THEME_SWITCHER_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟9e7dfdd12e894b57966fa2f8312284bf76d57389␟4661923683013028003:Green theme`;
      }

      return [["header", i18n_0, "package", "CDK", "path", "cdk/abstract/theme-switcher.ts"], ["pageTab", ""], i18n_2, [1, "tui-space_bottom-4"], ["status", "warning"], ["id", "green", "heading", i18n_4, 3, "content"]];
    },
    template: function ExampleTuiThemeSwitcherComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiThemeSwitcherComponent_ng_template_1_Template, 15, 1, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, notification_component/* TuiNotificationComponent */.L, example_component/* TuiDocExampleComponent */.f, TuiThemeSwitcherExample1],
    styles: [".tooltip[_ngcontent-%COMP%]{position:relative}.tooltip[_ngcontent-%COMP%]:hover   .bubble[_ngcontent-%COMP%]{opacity:1}.bubble[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;left:3.125rem;bottom:1.875rem;width:15.625rem;background:var(--tui-text-01);color:var(--tui-base-01);border-radius:.25rem;padding:.625rem;opacity:0}.bubble[_ngcontent-%COMP%]:after{content:\"\";position:absolute;left:50%;bottom:-15px;border-top:15px solid var(--tui-text-01);border-left:10px solid transparent;border-right:10px solid transparent;transform:translate(-10px)}"],
    changeDetection: 0
  });
  return ExampleTuiThemeSwitcherComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/theme-switcher/theme-switcher.module.ts











let ExampleTuiThemeSwitcherModule = /*#__PURE__*/(() => {
  class ExampleTuiThemeSwitcherModule {}

  ExampleTuiThemeSwitcherModule.ɵfac = function ExampleTuiThemeSwitcherModule_Factory(t) {
    return new (t || ExampleTuiThemeSwitcherModule)();
  };

  ExampleTuiThemeSwitcherModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiThemeSwitcherModule
  });
  ExampleTuiThemeSwitcherModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiToggleModule, core.TuiNotificationModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiThemeSwitcherComponent))]]
  });
  return ExampleTuiThemeSwitcherModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiThemeSwitcherModule, {
    declarations: [ExampleTuiThemeSwitcherComponent, TuiThemeSwitcherExample1, ElderlyComponent],
    imports: [common/* CommonModule */.ez, fesm2015_forms/* FormsModule */.u5, kit.TuiToggleModule, core.TuiNotificationModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiThemeSwitcherComponent]
  });
})();

/***/ })

}]);