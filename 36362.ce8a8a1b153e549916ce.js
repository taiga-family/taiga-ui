"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[36362],{

/***/ 36362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ExampleTuiSvgModule": () => (/* binding */ ExampleTuiSvgModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/core/index.ts + 74 modules
var core = __webpack_require__(90987);
// EXTERNAL MODULE: ./projects/kit/index.ts + 111 modules
var kit = __webpack_require__(31748);
// EXTERNAL MODULE: ./projects/demo/src/utils/index.ts + 1 modules
var utils = __webpack_require__(27075);
// EXTERNAL MODULE: ./projects/icons/public-api.ts + 2 modules
var icons_public_api = __webpack_require__(67350);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/observable/timer.js
var timer = __webpack_require__(46797);
// EXTERNAL MODULE: ./node_modules/rxjs/_esm2015/internal/operators/mapTo.js
var mapTo = __webpack_require__(96736);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var fesm2015_core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/core/components/svg/svg.component.ts
var svg_component = __webpack_require__(34880);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/svg/examples/1/index.ts










function TuiSvgExample1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementContainerStart */.ynx(0);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "h2");
    fesm2015_core/* ɵɵi18n */.SDv(2, 3);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(3, "tui-svg", 4);
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "h2");
    fesm2015_core/* ɵɵi18nStart */.tHW(5, 5);
    fesm2015_core/* ɵɵelement */._UZ(6, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(7, "tui-svg", 6);
    fesm2015_core/* ɵɵelementStart */.TgZ(8, "h2");
    fesm2015_core/* ɵɵi18n */.SDv(9, 7);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(10, "tui-svg", 8);
    fesm2015_core/* ɵɵelementStart */.TgZ(11, "h2");
    fesm2015_core/* ɵɵi18n */.SDv(12, 9);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(13, "tui-svg", 10);
    fesm2015_core/* ɵɵelementStart */.TgZ(14, "h2");
    fesm2015_core/* ɵɵi18n */.SDv(15, 11);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(16, "tui-svg", 12);
    fesm2015_core/* ɵɵelementContainerEnd */.BQk();
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(10);
    fesm2015_core/* ɵɵproperty */.Q6J("src", ctx_r0.tuiIconTimeLarge);
    fesm2015_core/* ɵɵadvance */.xp6(6);
    fesm2015_core/* ɵɵproperty */.Q6J("src", ctx_r0.imageUrl);
  }
}

let TuiSvgExample1 = /*#__PURE__*/(() => {
  class TuiSvgExample1 {
    constructor(svgService) {
      this.timeout$ = (0,timer/* timer */.H)(0).pipe((0,mapTo/* mapTo */.h)(true));
      this.imageUrl = utils/* assets */.L`/images/ts.svg#ts`;
      this.tuiIconTimeLarge = icons_public_api.tuiIconTimeLarge;
      svgService.define({
        customTuiIconMaestro: icons_public_api.tuiIconMaestro,
        customTuiIconMastercard: icons_public_api.tuiIconMastercard
      });
    }

  }

  TuiSvgExample1.ɵfac = function TuiSvgExample1_Factory(t) {
    return new (t || TuiSvgExample1)(fesm2015_core/* ɵɵdirectiveInject */.Y36(core.TuiSvgService));
  };

  TuiSvgExample1.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSvgExample1,
    selectors: [["tui-svg-example-1"]],
    decls: 5,
    vars: 3,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4830816972030434746$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_EXAMPLES_1_INDEX_TS_1 = goog.getMsg("Named icon from ShadowDOM");
        i18n_0 = MSG_EXTERNAL_4830816972030434746$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_EXAMPLES_1_INDEX_TS_1;
      } else {
        i18n_0 = $localize`:␟37ab9fee19c6bf5a4f3733e9447cc8423af4ffb0␟4830816972030434746:Named icon from ShadowDOM`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6013663320119573296$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_EXAMPLES_1_INDEX_TS__3 = goog.getMsg("Named icon");
        i18n_2 = MSG_EXTERNAL_6013663320119573296$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_EXAMPLES_1_INDEX_TS__3;
      } else {
        i18n_2 = $localize`:␟73522172547b4381b4f5ec6981f7b5da7289160b␟6013663320119573296:Named icon`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4739619904309515070$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_EXAMPLES_1_INDEX_TS__5 = goog.getMsg(" Named icon got with {$startTagCode}TUI_ICONS_PATH{$closeTagCode}", {
          "startTagCode": "\uFFFD#6\uFFFD",
          "closeTagCode": "\uFFFD/#6\uFFFD"
        });
        i18n_4 = MSG_EXTERNAL_4739619904309515070$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_EXAMPLES_1_INDEX_TS__5;
      } else {
        i18n_4 = $localize`:␟9ca162399b0e506c7f616f3493b383df6431fca8␟4739619904309515070: Named icon got with ${"\uFFFD#6\uFFFD"}:START_TAG_CODE:TUI_ICONS_PATH${"\uFFFD/#6\uFFFD"}:CLOSE_TAG_CODE:`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_306733880709423201$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_EXAMPLES_1_INDEX_TS__7 = goog.getMsg("Source code");
        i18n_6 = MSG_EXTERNAL_306733880709423201$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_EXAMPLES_1_INDEX_TS__7;
      } else {
        i18n_6 = $localize`:␟b8f95913582a5f09936f754769f3cd7553190924␟306733880709423201:Source code`;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4183792958965659941$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_EXAMPLES_1_INDEX_TS__9 = goog.getMsg("External link");
        i18n_8 = MSG_EXTERNAL_4183792958965659941$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_EXAMPLES_1_INDEX_TS__9;
      } else {
        i18n_8 = $localize`:␟4175e5b787b06bb9105b34c9b651b49d5fc58bc5␟4183792958965659941:External link`;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_3164240686378848807$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_EXAMPLES_1_INDEX_TS__11 = goog.getMsg("External segment link");
        i18n_10 = MSG_EXTERNAL_3164240686378848807$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_EXAMPLES_1_INDEX_TS__11;
      } else {
        i18n_10 = $localize`:␟d9ec89ff297f91e22aa6b4c4ddd7b90e3ee7727e␟3164240686378848807:External segment link`;
      }

      return [i18n_0, ["src", "customTuiIconMaestro", 1, "icon"], [4, "ngIf"], i18n_2, ["src", "customTuiIconMastercard", 1, "icon"], i18n_4, ["src", "tuiIconLikeLarge", 1, "icon"], i18n_6, [3, "src"], i18n_8, ["src", "https://ng-web-apis.github.io/dist/assets/images/web-api.svg", 1, "external-icon"], i18n_10, [1, "icon", 3, "src"]];
    },
    template: function TuiSvgExample1_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "h2");
        fesm2015_core/* ɵɵi18n */.SDv(1, 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelement */._UZ(2, "tui-svg", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, TuiSvgExample1_ng_container_3_Template, 17, 2, "ng-container", 2);
        fesm2015_core/* ɵɵpipe */.ALo(4, "async");
      }

      if (rf & 2) {
        fesm2015_core/* ɵɵadvance */.xp6(3);
        fesm2015_core/* ɵɵproperty */.Q6J("ngIf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(4, 1, ctx.timeout$));
      }
    },
    directives: [svg_component/* TuiSvgComponent */.P, common/* NgIf */.O5],
    pipes: [common/* AsyncPipe */.Ov],
    styles: [".icon[_ngcontent-%COMP%]{width:2rem;height:2rem}.external-icon[_ngcontent-%COMP%]{width:auto;height:auto}"],
    changeDetection: 0
  });
  return TuiSvgExample1;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/svg/examples/2/index.ts


let TuiSvgExample2 = /*#__PURE__*/(() => {
  class TuiSvgExample2 {}

  TuiSvgExample2.ɵfac = function TuiSvgExample2_Factory(t) {
    return new (t || TuiSvgExample2)();
  };

  TuiSvgExample2.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: TuiSvgExample2,
    selectors: [["tui-svg-example-2"]],
    decls: 6,
    vars: 0,
    consts: [["src", "tuiIconAlertCircleLarge", 1, "primary"], ["src", "tuiIconDeleteLarge", 1, "retrowave"], ["src", "tuiIconTooltipLarge", 1, "question"]],
    template: function TuiSvgExample2_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
        fesm2015_core/* ɵɵelement */._UZ(1, "tui-svg", 0);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
        fesm2015_core/* ɵɵelement */._UZ(3, "tui-svg", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
        fesm2015_core/* ɵɵelementStart */.TgZ(4, "p");
        fesm2015_core/* ɵɵelement */._UZ(5, "tui-svg", 2);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [svg_component/* TuiSvgComponent */.P],
    styles: [".primary[_ngcontent-%COMP%]{color:var(--tui-primary);fill:var(--tui-text-01)}.retrowave[_ngcontent-%COMP%]{color:#4dc3f7;fill:#ff78a7}.question[_ngcontent-%COMP%]{color:#aed57f;fill:#73b077}"],
    changeDetection: 0
  });
  return TuiSvgExample2;
})();
// EXTERNAL MODULE: ./projects/demo/src/modules/app/theme.service.ts
var theme_service = __webpack_require__(66092);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/core/components/link/link.component.ts
var link_component = __webpack_require__(66596);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation.component.ts + 1 modules
var documentation_component = __webpack_require__(66263);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/documentation/documentation-property-connector.directive.ts + 1 modules
var documentation_property_connector_directive = __webpack_require__(17023);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/svg/svg.component.ts

















function ExampleTuiSvgComponent_ng_template_1_tui_doc_example_6_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-example", 6);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-svg-example-2");
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r3 = fesm2015_core/* ɵɵnextContext */.oxw(2);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r3.example2);
  }
}

function ExampleTuiSvgComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(1, 2);
    fesm2015_core/* ɵɵelement */._UZ(2, "code");
    fesm2015_core/* ɵɵelement */._UZ(3, "a", 3);
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(4, "tui-doc-example", 4);
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-svg-example-1");
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵtemplate */.YNc(6, ExampleTuiSvgComponent_ng_template_1_tui_doc_example_6_Template, 2, 1, "tui-doc-example", 5);
    fesm2015_core/* ɵɵpipe */.ALo(7, "async");
  }

  if (rf & 2) {
    const ctx_r0 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(4);
    fesm2015_core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("ngIf", fesm2015_core/* ɵɵpipeBind1 */.lcZ(7, 2, ctx_r0.themeService) !== "Open-source");
  }
}

function ExampleTuiSvgComponent_ng_template_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 11);
  }
}

function ExampleTuiSvgComponent_ng_template_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵi18n */.SDv(0, 12);
  }
}

function ExampleTuiSvgComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = fesm2015_core/* ɵɵgetCurrentView */.EpF();

    fesm2015_core/* ɵɵelementStart */.TgZ(0, "div", 7);
    fesm2015_core/* ɵɵelement */._UZ(1, "tui-svg", 8);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "tui-doc-documentation");
    fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiSvgComponent_ng_template_2_ng_template_3_Template, 1, 0, "ng-template", 9);
    fesm2015_core/* ɵɵlistener */.NdJ("documentationPropertyValueChange", function ExampleTuiSvgComponent_ng_template_2_Template_ng_template_documentationPropertyValueChange_3_listener($event) {
      fesm2015_core/* ɵɵrestoreView */.CHM(_r7);
      const ctx_r6 = fesm2015_core/* ɵɵnextContext */.oxw();
      return ctx_r6.icon = $event;
    });
    fesm2015_core/* ɵɵtemplate */.YNc(4, ExampleTuiSvgComponent_ng_template_2_ng_template_4_Template, 1, 0, "ng-template", 10);
    fesm2015_core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = fesm2015_core/* ɵɵnextContext */.oxw();
    fesm2015_core/* ɵɵadvance */.xp6(1);
    fesm2015_core/* ɵɵproperty */.Q6J("src", ctx_r1.icon);
    fesm2015_core/* ɵɵadvance */.xp6(2);
    fesm2015_core/* ɵɵproperty */.Q6J("documentationPropertyValues", ctx_r1.iconVariants)("documentationPropertyValue", ctx_r1.icon);
  }
}

function ExampleTuiSvgComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    fesm2015_core/* ɵɵelementStart */.TgZ(0, "ol", 13);
    fesm2015_core/* ɵɵelementStart */.TgZ(1, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(2, "p");
    fesm2015_core/* ɵɵi18nStart */.tHW(3, 14);
    fesm2015_core/* ɵɵelement */._UZ(4, "code");
    fesm2015_core/* ɵɵi18nEnd */.N_p();
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(5, "tui-doc-code", 15);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelementStart */.TgZ(6, "li");
    fesm2015_core/* ɵɵelementStart */.TgZ(7, "p");
    fesm2015_core/* ɵɵi18n */.SDv(8, 16);
    fesm2015_core/* ɵɵelementEnd */.qZA();
    fesm2015_core/* ɵɵelement */._UZ(9, "tui-doc-code", 17);
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

let ExampleTuiSvgComponent = /*#__PURE__*/(() => {
  class ExampleTuiSvgComponent {
    constructor(themeService) {
      this.themeService = themeService;
      this.exampleModule = __webpack_require__.e(/* import() */ 99991).then(__webpack_require__.t.bind(__webpack_require__, 99991, 17));
      this.exampleHtml = __webpack_require__.e(/* import() */ 27645).then(__webpack_require__.t.bind(__webpack_require__, 27645, 17));
      this.example1 = {
        TypeScript: __webpack_require__.e(/* import() */ 7959).then(__webpack_require__.t.bind(__webpack_require__, 7959, 17)),
        HTML: __webpack_require__.e(/* import() */ 7054).then(__webpack_require__.t.bind(__webpack_require__, 7054, 17)),
        LESS: __webpack_require__.e(/* import() */ 55612).then(__webpack_require__.t.bind(__webpack_require__, 55612, 17))
      };
      this.example2 = {
        TypeScript: __webpack_require__.e(/* import() */ 74210).then(__webpack_require__.t.bind(__webpack_require__, 74210, 17)),
        HTML: __webpack_require__.e(/* import() */ 59329).then(__webpack_require__.t.bind(__webpack_require__, 59329, 17)),
        LESS: __webpack_require__.e(/* import() */ 82464).then(__webpack_require__.t.bind(__webpack_require__, 82464, 17))
      };
      this.iconVariants = [`https://ng-web-apis.github.io/dist/assets/images/web-api.svg`, `tuiIconTooltip`, `<svg xmlns="http://www.w3.org/2000/svg"
             width="24px"
             height="24px"
             viewBox="0 0 24 24">
            <path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5
                c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3
                s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>
        </svg>`, utils/* assets */.L`/images/ts.svg#ts`];
      this.icon = this.iconVariants[0];
    }

  }

  ExampleTuiSvgComponent.ɵfac = function ExampleTuiSvgComponent_Factory(t) {
    return new (t || ExampleTuiSvgComponent)(fesm2015_core/* ɵɵdirectiveInject */.Y36(theme_service/* TuiThemeService */.ML));
  };

  ExampleTuiSvgComponent.ɵcmp = /*@__PURE__*/fesm2015_core/* ɵɵdefineComponent */.Xpm({
    type: ExampleTuiSvgComponent,
    selectors: [["example-tui-svg"]],
    decls: 4,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2179128668030834185$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_SVG_COMPONENT_TS__1 = goog.getMsg("{$startTagCode}Svg{$closeTagCode} is a component for working with SVG-image and its colors. If you want to use custom icons that you don't trust, you need to provide a {$startLink} sanitizer {$closeLink} . ", {
          "startTagCode": "\uFFFD#2\uFFFD",
          "closeTagCode": "\uFFFD/#2\uFFFD",
          "startLink": "\uFFFD#3\uFFFD",
          "closeLink": "\uFFFD/#3\uFFFD"
        });
        i18n_0 = MSG_EXTERNAL_2179128668030834185$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_SVG_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟9162f64979630ff2f60f158fefe4aebff5a442cd␟2179128668030834185:${"\uFFFD#2\uFFFD"}:START_TAG_CODE:Svg${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_CODE: is a component for working with SVG-image and its colors. If you want to use custom icons that you don't trust, you need to provide a ${"\uFFFD#3\uFFFD"}:START_LINK: sanitizer ${"\uFFFD/#3\uFFFD"}:CLOSE_LINK: . `;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_652100274872542840$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_SVG_COMPONENT_TS__3 = goog.getMsg("All options");
        i18n_2 = MSG_EXTERNAL_652100274872542840$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_SVG_COMPONENT_TS__3;
      } else {
        i18n_2 = $localize`:␟6275274c79da2d043e251eb6f5830169d2bf3e69␟652100274872542840:All options`;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6056601158647366844$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_SVG_COMPONENT_TS__5 = goog.getMsg("Two colors");
        i18n_4 = MSG_EXTERNAL_6056601158647366844$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_SVG_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟1122fffffeb77136a0a583292b9edd06c486a16f␟6056601158647366844:Two colors`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8506124299219198512$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_SVG_COMPONENT_TS___7 = goog.getMsg(" SVG image code, link to a file, link to a segment or icon name. If you use name or segment, set icon size with CSS ");
        i18n_6 = MSG_EXTERNAL_8506124299219198512$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_SVG_COMPONENT_TS___7;
      } else {
        i18n_6 = $localize`:␟5fe1d80289e1dc203f78fb2dae24bbb2ba53dbc1␟8506124299219198512: SVG image code, link to a file, link to a segment or icon name. If you use name or segment, set icon size with CSS `;
      }

      let i18n_8;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7262861508998281610$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_SVG_COMPONENT_TS___9 = goog.getMsg(" CustomEvent of loading error ");
        i18n_8 = MSG_EXTERNAL_7262861508998281610$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_SVG_COMPONENT_TS___9;
      } else {
        i18n_8 = $localize`:␟882a9029def6bf937aa78280479a0984376d92dd␟7262861508998281610: CustomEvent of loading error `;
      }

      let i18n_10;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_5284598353702258889$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_SVG_COMPONENT_TS__11 = goog.getMsg(" Import {$startTagCode}TuiSvgModule{$closeTagCode} into a module where you want to use our component ", {
          "startTagCode": "\uFFFD#4\uFFFD",
          "closeTagCode": "\uFFFD/#4\uFFFD"
        });
        i18n_10 = MSG_EXTERNAL_5284598353702258889$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_SVG_COMPONENT_TS__11;
      } else {
        i18n_10 = $localize`:␟dfb9a1adb1e5d8918ebe15cca67c19714280becf␟5284598353702258889: Import ${"\uFFFD#4\uFFFD"}:START_TAG_CODE:TuiSvgModule${"\uFFFD/#4\uFFFD"}:CLOSE_TAG_CODE: into a module where you want to use our component `;
      }

      let i18n_12;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_SVG_COMPONENT_TS__13 = goog.getMsg("Add to the template:");
        i18n_12 = MSG_EXTERNAL_8042412267862615798$$PROJECTS_DEMO_SRC_MODULES_COMPONENTS_SVG_SVG_COMPONENT_TS__13;
      } else {
        i18n_12 = $localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;
      }

      return [["header", "Svg", "package", "CORE", "type", "components"], ["pageTab", ""], i18n_0, ["tuiLink", "", "routerLink", "/icon-set", "fragment", "sanitizer"], ["id", "all", "heading", i18n_2, 3, "content"], ["id", "double", "heading", i18n_4, 3, "content", 4, "ngIf"], ["id", "double", "heading", i18n_4, 3, "content"], [1, "b-full-width"], [1, "icon", 3, "src"], ["documentationPropertyName", "src", "documentationPropertyMode", "input", "documentationPropertyType", "string", 3, "documentationPropertyValues", "documentationPropertyValue", "documentationPropertyValueChange"], ["documentationPropertyName", "tui-icon-error", "documentationPropertyMode", "output", "documentationPropertyType", "CustomEvent<TuiIconError>"], i18n_6, i18n_8, [1, "b-demo-steps"], i18n_10, ["filename", "myComponent.module.ts", 3, "code"], i18n_12, ["filename", "myComponent.template.html", 3, "code"]];
    },
    template: function ExampleTuiSvgComponent_Template(rf, ctx) {
      if (rf & 1) {
        fesm2015_core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        fesm2015_core/* ɵɵtemplate */.YNc(1, ExampleTuiSvgComponent_ng_template_1_Template, 8, 4, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(2, ExampleTuiSvgComponent_ng_template_2_Template, 5, 3, "ng-template", 1);
        fesm2015_core/* ɵɵtemplate */.YNc(3, ExampleTuiSvgComponent_ng_template_3_Template, 10, 2, "ng-template", 1);
        fesm2015_core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, link_component/* TuiLinkComponent */.V, router/* RouterLinkWithHref */.yS, example_component/* TuiDocExampleComponent */.f, TuiSvgExample1, common/* NgIf */.O5, TuiSvgExample2, svg_component/* TuiSvgComponent */.P, documentation_component/* TuiDocDocumentationComponent */.z, documentation_property_connector_directive/* TuiDocDocumentationPropertyConnectorDirective */.B, code_component/* TuiDocCodeComponent */.c],
    pipes: [common/* AsyncPipe */.Ov],
    encapsulation: 2,
    changeDetection: 0
  });
  return ExampleTuiSvgComponent;
})();
;// CONCATENATED MODULE: ./projects/demo/src/modules/components/svg/svg.module.ts










let ExampleTuiSvgModule = /*#__PURE__*/(() => {
  class ExampleTuiSvgModule {}

  ExampleTuiSvgModule.ɵfac = function ExampleTuiSvgModule_Factory(t) {
    return new (t || ExampleTuiSvgModule)();
  };

  ExampleTuiSvgModule.ɵmod = /*@__PURE__*/fesm2015_core/* ɵɵdefineNgModule */.oAB({
    type: ExampleTuiSvgModule
  });
  ExampleTuiSvgModule.ɵinj = /*@__PURE__*/fesm2015_core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, router/* RouterModule */.Bz, core.TuiSvgModule, kit.TuiPresentModule, core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(ExampleTuiSvgComponent))]]
  });
  return ExampleTuiSvgModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && fesm2015_core/* ɵɵsetNgModuleScope */.kYT(ExampleTuiSvgModule, {
    declarations: [ExampleTuiSvgComponent, TuiSvgExample1, TuiSvgExample2],
    imports: [common/* CommonModule */.ez, router/* RouterModule */.Bz, core.TuiSvgModule, kit.TuiPresentModule, core.TuiLinkModule, public_api/* TuiAddonDocModule */.fV, router/* RouterModule */.Bz],
    exports: [ExampleTuiSvgComponent]
  });
})();

/***/ })

}]);