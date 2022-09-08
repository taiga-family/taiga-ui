"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[19104],{

/***/ 19104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "DocModule": () => (/* binding */ DocModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 68 modules
var core = __webpack_require__(66187);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
;// CONCATENATED MODULE: ./projects/demo/src/modules/info/doc/doc.component.ts



let DocComponent = /*#__PURE__*/(() => {
  class DocComponent {}

  DocComponent.ɵfac = function DocComponent_Factory(t) {
    return new (t || DocComponent)();
  };

  DocComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: DocComponent,
    selectors: [["doc"]],
    decls: 11,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3703356990057810908$$PROJECTS_DEMO_SRC_MODULES_INFO_DOC_DOC_COMPONENT_TS_1 = goog.getMsg("Documentation engine");
        i18n_0 = MSG_EXTERNAL_3703356990057810908$$PROJECTS_DEMO_SRC_MODULES_INFO_DOC_DOC_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`:␟b384349e552237d4e1d8fd606ae55e20a1829aef␟3703356990057810908:Documentation engine`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1834291192066424064$$PROJECTS_DEMO_SRC_MODULES_INFO_DOC_DOC_COMPONENT_TS_3 = goog.getMsg("{$startParagraph}{$startTagStrong}Addon Doc{$closeTagStrong} allows you to create documentation like this page {$closeParagraph}{$startParagraph}You can install it for your demo project:{$closeParagraph}{$startTagPre}{$startTagCode}npm install @taiga-ui/addon-doc{$closeTagCode}{$closeTagPre}{$startParagraph_1} And use with project {$startLink} README.md {$closeLink} instructions. {$closeParagraph}{$startParagraph_1} You can also see {$startLink_1} a community made guide {$closeLink} in Russian. {$closeParagraph}", {
          "startParagraph": "[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]",
          "startTagStrong": "\uFFFD#3\uFFFD",
          "closeTagStrong": "\uFFFD/#3\uFFFD",
          "closeParagraph": "[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD]",
          "startTagPre": "\uFFFD#5\uFFFD",
          "startTagCode": "\uFFFD#6\uFFFD",
          "closeTagCode": "\uFFFD/#6\uFFFD",
          "closeTagPre": "\uFFFD/#5\uFFFD",
          "startParagraph_1": "[\uFFFD#7\uFFFD|\uFFFD#9\uFFFD]",
          "startLink": "\uFFFD#8\uFFFD",
          "closeLink": "[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD]",
          "startLink_1": "\uFFFD#10\uFFFD"
        });
        i18n_2 = MSG_EXTERNAL_1834291192066424064$$PROJECTS_DEMO_SRC_MODULES_INFO_DOC_DOC_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`:␟a00085d81c7d4560cd63a58005c3b1828a022bae␟1834291192066424064:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_PARAGRAPH:${"\uFFFD#3\uFFFD"}:START_TAG_STRONG:Addon Doc${"\uFFFD/#3\uFFFD"}:CLOSE_TAG_STRONG: allows you to create documentation like this page ${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_PARAGRAPH:${"[\uFFFD#2\uFFFD|\uFFFD#4\uFFFD]"}:START_PARAGRAPH:You can install it for your demo project:${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_PARAGRAPH:${"\uFFFD#5\uFFFD"}:START_TAG_PRE:${"\uFFFD#6\uFFFD"}:START_TAG_CODE:npm install @taiga-ui/addon-doc${"\uFFFD/#6\uFFFD"}:CLOSE_TAG_CODE:${"\uFFFD/#5\uFFFD"}:CLOSE_TAG_PRE:${"[\uFFFD#7\uFFFD|\uFFFD#9\uFFFD]"}:START_PARAGRAPH_1: And use with project ${"\uFFFD#8\uFFFD"}:START_LINK: README.md ${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_LINK: instructions. ${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_PARAGRAPH:${"[\uFFFD#7\uFFFD|\uFFFD#9\uFFFD]"}:START_PARAGRAPH_1: You can also see ${"\uFFFD#10\uFFFD"}:START_LINK_1: a community made guide ${"[\uFFFD/#8\uFFFD|\uFFFD/#10\uFFFD]"}:CLOSE_LINK: in Russian. ${"[\uFFFD/#2\uFFFD|\uFFFD/#4\uFFFD|\uFFFD/#7\uFFFD|\uFFFD/#9\uFFFD]"}:CLOSE_PARAGRAPH:`;
      }

      i18n_2 = fesm2015_core/* ɵɵi18nPostprocess */.Zx4(i18n_2);
      return [["header", i18n_0], i18n_2, [1, "language-html"], [1, "tui-space_bottom-8"], ["tuiLink", "", "href", "https://github.com/tinkoff/taiga-ui/tree/main/projects/addon-doc", "target", "_blank"], ["tuiLink", "", "href", "https://habr.com/ru/company/europlan/blog/559804/", "target", "_blank"]];
    },
    template: function DocComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵi18nStart */.tHW(1, 1);
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
        fesm2015_core/* ɵɵelement */._UZ(3, "strong");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(4, "p");
        fesm2015_core/* ɵɵelementStart */.TgZ(5, "pre", 2);
        fesm2015_core/* ɵɵelement */._UZ(6, "code");
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(7, "p", 3);
        fesm2015_core/* ɵɵelement */._UZ(8, "a", 4);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(9, "p", 3);
        fesm2015_core/* ɵɵelement */._UZ(10, "a", 5);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵi18nEnd */.N_p();
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, link_component/* TuiLinkComponent */.V],
    styles: ["markdown blockquote{box-shadow:inset 4px 0 #f5f5f5;margin-left:0;padding-left:1.875rem;font-style:italic}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
  return DocComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/info/doc/doc.module.ts






let DocModule = /*#__PURE__*/(() => {
  class DocModule {}

  DocModule.ɵfac = function DocModule_Factory(t) {
    return new (t || DocModule)();
  };

  DocModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: DocModule
  });
  DocModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[core/* TuiLinkModule */.jzK, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(DocComponent))]]
  });
  return DocModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(DocModule, {
    declarations: [DocComponent],
    imports: [core/* TuiLinkModule */.jzK, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [DocComponent]
  });
})();

/***/ })

}]);