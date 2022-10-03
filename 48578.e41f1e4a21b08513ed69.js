"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[48578],{

/***/ 48578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ChangelogModule": () => (/* binding */ ChangelogModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 17 modules
var public_api = __webpack_require__(29851);
// EXTERNAL MODULE: ./node_modules/ngx-markdown/fesm2015/ngx-markdown.js + 1 modules
var ngx_markdown = __webpack_require__(27035);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/of.js
var of = __webpack_require__(25917);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/switchMap.js
var switchMap = __webpack_require__(43190);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
;// CONCATENATED MODULE: ./projects/demo/src/modules/info/changelog/changelog.component.ts







let ChangelogComponent = /*#__PURE__*/(() => {
  class ChangelogComponent {
    constructor() {
      this.changelog = (0,of.of)(__webpack_require__.e(/* import() */ 24047).then(__webpack_require__.t.bind(__webpack_require__, 24047, 17))).pipe((0,switchMap/* switchMap */.w)(public_api/* tuiRawLoad */.JQ));
    }

  }

  ChangelogComponent.ɵfac = function ChangelogComponent_Factory(t) {
    return new (t || ChangelogComponent)();
  };

  ChangelogComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ChangelogComponent,
    selectors: [["changelog"]],
    decls: 3,
    vars: 3,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7136888919962092730$$PROJECTS_DEMO_SRC_MODULES_INFO_CHANGELOG_CHANGELOG_COMPONENT_TS_1 = goog.getMsg("Changelog");
        i18n_0 = MSG_EXTERNAL_7136888919962092730$$PROJECTS_DEMO_SRC_MODULES_INFO_CHANGELOG_CHANGELOG_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟994e6a27b92ba37201e3bb9f8ae312f2a46b5b39␟7136888919962092730:Changelog`;
      }

      return [["header", i18n_0], [3, "data"]];
    },
    template: function ChangelogComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵelement */._UZ(1, "markdown", 1);
        core/* ɵɵpipe */.ALo(2, "async");
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("data", core/* ɵɵpipeBind1 */.lcZ(2, 1, ctx.changelog) || "");
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, ngx_markdown/* MarkdownComponent */.lF],
    pipes: [common/* AsyncPipe */.Ov],
    styles: ["markdown>:nth-child(1),markdown>:nth-child(2){display:none}markdown>*{margin-left:1.25rem}markdown a{text-decoration:none;color:var(--tui-link)}markdown a:hover,markdown a:active{color:var(--tui-link-hover)}markdown h2{font-size:2em;padding-bottom:.5em;margin-left:0;border-bottom:1px solid var(--tui-base-03)}markdown h3{text-transform:uppercase;font-weight:normal;font-size:1.5rem;margin:1rem 0}markdown h3:not([id^=\"feat\"]):not([id^=\"bug\"]):not([id^=\"deprecations\"]){font-size:1.75rem;padding-bottom:.5em;margin:2rem 0 0;border-bottom:1px solid var(--tui-base-03)}markdown h3[id^=breaking]{margin-left:1.25rem;color:var(--tui-error-fill)}markdown code{color:#d45d8c}markdown h3[id^=feat]:before{content:\"\\1f680\"}markdown h3[id^=bug]:before{content:\"\\1f41e\"}markdown h3[id^=deprecations]:before{content:\"\\26a0\\fe0f\"}markdown h3[id^=feat]:before,markdown h3[id^=bug]:before,markdown h3[id^=deprecations]:before{margin-right:.5rem}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return ChangelogComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/info/changelog/changelog.module.ts







let ChangelogModule = /*#__PURE__*/(() => {
  class ChangelogModule {}

  ChangelogModule.ɵfac = function ChangelogModule_Factory(t) {
    return new (t || ChangelogModule)();
  };

  ChangelogModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: ChangelogModule
  });
  ChangelogModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, ngx_markdown/* MarkdownModule */.JP, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ChangelogComponent))]]
  });
  return ChangelogModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(ChangelogModule, {
    declarations: [ChangelogComponent],
    imports: [common/* CommonModule */.ez, ngx_markdown/* MarkdownModule */.JP, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ChangelogComponent]
  });
})();

/***/ })

}]);