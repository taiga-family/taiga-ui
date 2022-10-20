"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[97934],{

/***/ 97934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I18nModule": () => (/* binding */ I18nModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 2 modules
var router = __webpack_require__(33982);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./projects/core/index.ts + 76 modules
var core = __webpack_require__(72002);
// EXTERNAL MODULE: ./node_modules/ngx-markdown/fesm2015/ngx-markdown.js + 1 modules
var ngx_markdown = __webpack_require__(27035);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/from.js + 6 modules
var from = __webpack_require__(94402);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/map.js
var map = __webpack_require__(88002);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/language-switcher/language-switcher.component.ts
var language_switcher_component = __webpack_require__(29206);
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/i18n/i18n.component.ts











function I18nComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 1, 1);
    fesm2015_core/* ɵɵelement */._UZ(1, "markdown", 4);
    fesm2015_core/* ɵɵpipe */.ALo(2, "async");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("data", fesm2015_core/* ɵɵpipeBind1 */.lcZ(2, 1, ctx_r0.readme) || "");
  }
}

function I18nComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18nStart */.tHW(0, 1, 2);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-doc-code", 5);
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-language-switcher");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵi18nEnd */.N_p();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleModule);
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r1.example1);
  }
}

let I18nComponent = /*#__PURE__*/(() => {
  class I18nComponent {
    constructor() {
      this.readme = (0,from/* from */.D)(__webpack_require__.e(/* import() */ 57252).then(__webpack_require__.t.bind(__webpack_require__, 57252, 17))).pipe((0,map/* map */.U)(readme => readme.default.split(`Supported languages:`)[1]));
      this.exampleModule = __webpack_require__.e(/* import() */ 9254).then(__webpack_require__.t.bind(__webpack_require__, 9254, 17));
      this.example1 = {
        'language-switcher.component.html': __webpack_require__.e(/* import() */ 51359).then(__webpack_require__.t.bind(__webpack_require__, 51359, 17)),
        'language-switcher.component.ts': __webpack_require__.e(/* import() */ 98767).then(__webpack_require__.t.bind(__webpack_require__, 98767, 17)),
        'language-switcher.module.ts': __webpack_require__.e(/* import() */ 80114).then(__webpack_require__.t.bind(__webpack_require__, 80114, 17)),
        'language-switcher.module.less': __webpack_require__.e(/* import() */ 80219).then(__webpack_require__.t.bind(__webpack_require__, 80219, 17))
      };
    }

  }

  I18nComponent.ɵfac = function I18nComponent_Factory(t) {
    return new (t || I18nComponent)();
  };

  I18nComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: I18nComponent,
    selectors: [["i18n"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7373613501758200135$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_I18N_I18N_COMPONENT_TS_1 = goog.getMsg("Internationalization");
        i18n_0 = MSG_EXTERNAL_7373613501758200135$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_I18N_I18N_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟2f9b7e159e9dee28aff96a5c813d2d622a831919␟7373613501758200135:Internationalization`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1185984358559506322$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_I18N_I18N_COMPONENT_TS__3 = goog.getMsg("{$startTagNgTemplate}{$startTagMarkdown}{$closeTagMarkdown}{$closeTagNgTemplate}{$startTagNgTemplate_1}{$startTagTuiDocCode}{$closeTagTuiDocCode}{$startTagTuiDocExample}{$startTagTuiLanguageSwitcher}Language{$closeTagTuiLanguageSwitcher}{$closeTagTuiDocExample}{$closeTagNgTemplate}", {
          "startTagNgTemplate": "\uFFFD*2:1\uFFFD",
          "closeTagNgTemplate": "[\uFFFD/*2:1\uFFFD|\uFFFD/*3:2\uFFFD]",
          "startTagNgTemplate_1": "\uFFFD*3:2\uFFFD",
          "startTagMarkdown": "\uFFFD#1:1\uFFFD",
          "closeTagMarkdown": "\uFFFD/#1:1\uFFFD",
          "startTagTuiDocCode": "\uFFFD#1:2\uFFFD",
          "closeTagTuiDocCode": "\uFFFD/#1:2\uFFFD",
          "startTagTuiDocExample": "\uFFFD#2:2\uFFFD",
          "startTagTuiLanguageSwitcher": "\uFFFD#3:2\uFFFD",
          "closeTagTuiLanguageSwitcher": "\uFFFD/#3:2\uFFFD",
          "closeTagTuiDocExample": "\uFFFD/#2:2\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_1185984358559506322$$PROJECTS_DEMO_SRC_MODULES_CUSTOMIZATION_I18N_I18N_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟f9323b902eba2b1fb6a74c6c019410b656c6c1f3␟1185984358559506322:${"\uFFFD*2:1\uFFFD"}:START_TAG_NG_TEMPLATE:${"\uFFFD#1:1\uFFFD"}:START_TAG_MARKDOWN:${"\uFFFD/#1:1\uFFFD"}:CLOSE_TAG_MARKDOWN:${"[\uFFFD/*2:1\uFFFD|\uFFFD/*3:2\uFFFD]"}:CLOSE_TAG_NG_TEMPLATE:${"\uFFFD*3:2\uFFFD"}:START_TAG_NG_TEMPLATE_1:${"\uFFFD#1:2\uFFFD"}:START_TAG_TUI_DOC_CODE:${"\uFFFD/#1:2\uFFFD"}:CLOSE_TAG_TUI_DOC_CODE:${"\uFFFD#2:2\uFFFD"}:START_TAG_TUI_DOC_EXAMPLE:${"\uFFFD#3:2\uFFFD"}:START_TAG_TUI_LANGUAGE_SWITCHER:Language${"\uFFFD/#3:2\uFFFD"}:CLOSE_TAG_TUI_LANGUAGE_SWITCHER:${"\uFFFD/#2:2\uFFFD"}:CLOSE_TAG_TUI_DOC_EXAMPLE:${"[\uFFFD/*2:1\uFFFD|\uFFFD/*3:2\uFFFD]"}:CLOSE_TAG_NG_TEMPLATE:`;
      }

      i18n_2 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_2);
      return [["header", i18n_0], i18n_2, ["pageTab", "Supported languages"], ["pageTab", "Dynamic loader"], [3, "data"], ["filename", "app.module.ts", 3, "code"], ["id", "theme-switcher", 3, "content"]];
    },
    template: function I18nComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵi18nStart */.tHW(1, 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, I18nComponent_ng_template_2_Template, 3, 3, "ng-template", 2);
        fesm2015_core/* ɵɵtemplate */.YNc(3, I18nComponent_ng_template_3_Template, 4, 2, "ng-template", 3);
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, ngx_markdown/* MarkdownComponent */.lF, code_component/* TuiDocCodeComponent */.c, example_component/* TuiDocExampleComponent */.f, language_switcher_component/* TuiLanguageSwitcherComponent */.p],
    pipes: [common/* AsyncPipe */.Ov],
    styles: ["markdown blockquote{box-shadow:inset 4px 0 #f5f5f5;margin-left:0;padding-left:1.875rem;font-style:italic}markdown td{padding:.375rem 1.5rem .375rem 0}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return I18nComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/customization/i18n/i18n.module.ts








let I18nModule = /*#__PURE__*/(() => {
  class I18nModule {}

  I18nModule.ɵfac = function I18nModule_Factory(t) {
    return new (t || I18nModule)();
  };

  I18nModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: I18nModule
  });
  I18nModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, core.TuiCalendarModule, ngx_markdown/* MarkdownModule */.JP, core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, public_api/* TuiLanguageSwitcherModule */.CE, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(I18nComponent))]]
  });
  return I18nModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(I18nModule, {
    declarations: [I18nComponent],
    imports: [common/* CommonModule */.ez, core.TuiCalendarModule, ngx_markdown/* MarkdownModule */.JP, core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, public_api/* TuiLanguageSwitcherModule */.CE, router/* RouterModule */.Bz],
    exports: [I18nComponent]
  });
})();

/***/ })

}]);