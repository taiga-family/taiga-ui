"use strict";
(self["webpackChunk_taiga_ui_components"] = self["webpackChunk_taiga_ui_components"] || []).push([[15947],{

/***/ 15947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BreakpointsModule": () => (/* binding */ BreakpointsModule)
});

// EXTERNAL MODULE: ./node_modules/@angular/cdk/fesm2015/clipboard.js
var clipboard = __webpack_require__(50506);
// EXTERNAL MODULE: ./node_modules/@angular/common/fesm2015/common.js
var common = __webpack_require__(12057);
// EXTERNAL MODULE: ./node_modules/@angular/router/fesm2015/router.js + 3 modules
var router = __webpack_require__(12021);
// EXTERNAL MODULE: ./projects/addon-doc/src/public-api.ts + 18 modules
var public_api = __webpack_require__(78697);
// EXTERNAL MODULE: ./projects/addon-table/index.ts + 3 modules
var addon_table = __webpack_require__(36256);
// EXTERNAL MODULE: ./projects/core/styles/variables/media.less?raw
var mediaraw = __webpack_require__(82476);
// EXTERNAL MODULE: ./node_modules/@angular/core/fesm2015/core.js
var core = __webpack_require__(74788);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page.component.ts + 1 modules
var page_component = __webpack_require__(55238);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/page/page-tab.directive.ts
var page_tab_directive = __webpack_require__(37159);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/table.directive.ts
var table_directive = __webpack_require__(19582);
// EXTERNAL MODULE: ./projects/addon-table/components/table/th-group/th-group.component.ts
var th_group_component = __webpack_require__(222);
// EXTERNAL MODULE: ./projects/addon-table/components/table/tbody/tbody.component.ts
var tbody_component = __webpack_require__(57681);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/row.directive.ts
var row_directive = __webpack_require__(35459);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example.component.ts + 1 modules
var example_component = __webpack_require__(19669);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/breakpoints/examples/1/index.ts



function ExampleBreakpointsComponent1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "span");
    core/* ɵɵtext */._uU(1);
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const breakpoint_r1 = ctx.$implicit;
    core/* ɵɵclassMapInterpolate1 */.Gre("item ", breakpoint_r1, "");
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" @", breakpoint_r1, " ");
  }
}

let ExampleBreakpointsComponent1 = /*#__PURE__*/(() => {
  class ExampleBreakpointsComponent1 {
    constructor() {
      this.breakpoints = [`tui-mobile`, `tui-mobile-min`, `tui-mobile-interval`, `tui-tablet`, `tui-tablet-min`, `tui-tablet-interval`, `tui-desktop`, `tui-desktop-min`, `tui-desktop-interval`, `tui-desktop-lg-min`];
    }

  }

  ExampleBreakpointsComponent1.ɵfac = function ExampleBreakpointsComponent1_Factory(t) {
    return new (t || ExampleBreakpointsComponent1)();
  };

  ExampleBreakpointsComponent1.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: ExampleBreakpointsComponent1,
    selectors: [["example-css-breakpoints-1"]],
    decls: 2,
    vars: 1,
    consts: [[1, "wrapper"], [3, "class", 4, "ngFor", "ngForOf"]],
    template: function ExampleBreakpointsComponent1_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "div", 0);
        core/* ɵɵtemplate */.YNc(1, ExampleBreakpointsComponent1_span_1_Template, 2, 4, "span", 1);
        core/* ɵɵelementEnd */.qZA();
      }

      if (rf & 2) {
        core/* ɵɵadvance */.xp6(1);
        core/* ɵɵproperty */.Q6J("ngForOf", ctx.breakpoints);
      }
    },
    directives: [common/* NgForOf */.sg],
    styles: [".wrapper[_ngcontent-%COMP%]{display:grid;width:100%;grid-gap:1px;gap:1px;grid-template-columns:repeat(3,1fr);margin:auto;font:var(--tui-font-text-xs)}@media screen and (min-width: 64em){.wrapper[_ngcontent-%COMP%]{font:var(--tui-font-text-s);width:500px}}.item[_ngcontent-%COMP%]{height:100px;background:var(--tui-neutral-bg);color:var(--tui-text-01);display:flex;justify-content:center;align-items:center}@media screen and (max-width: 47.9625em){.tui-mobile[_ngcontent-%COMP%]{background:var(--tui-primary);color:var(--tui-primary-text)}}@media screen and (min-width: 22.5em){.tui-mobile-min[_ngcontent-%COMP%]{background:var(--tui-primary);color:var(--tui-primary-text)}}@media (min-width: 22.5em) and (max-width: 47.9625em){.tui-mobile-interval[_ngcontent-%COMP%]{background:var(--tui-primary);color:var(--tui-primary-text)}}@media screen and (max-width: 63.9625em){.tui-tablet[_ngcontent-%COMP%]{background:var(--tui-primary);color:var(--tui-primary-text)}}@media screen and (min-width: 48em){.tui-tablet-min[_ngcontent-%COMP%]{background:var(--tui-primary);color:var(--tui-primary-text)}}@media (min-width: 48em) and (max-width: 63.9625em){.tui-tablet-interval[_ngcontent-%COMP%]{background:var(--tui-primary);color:var(--tui-primary-text)}}@media screen and (max-width: 79.9625em){.tui-desktop[_ngcontent-%COMP%]{background:var(--tui-primary);color:var(--tui-primary-text)}}@media screen and (min-width: 64em){.tui-desktop-min[_ngcontent-%COMP%]{background:var(--tui-primary);color:var(--tui-primary-text)}}@media (min-width: 64em) and (max-width: 79.9625em){.tui-desktop-interval[_ngcontent-%COMP%]{background:var(--tui-primary);color:var(--tui-primary-text)}}@media screen and (min-width: 80em){.tui-desktop-lg-min[_ngcontent-%COMP%]{background:var(--tui-primary);color:var(--tui-primary-text)}}.tui-desktop-lg-min[_ngcontent-%COMP%]{grid-column:span 3}"],
    changeDetection: 0
  });
  return ExampleBreakpointsComponent1;
})();
// EXTERNAL MODULE: ./projects/addon-table/components/table/th/th.component.ts
var th_component = __webpack_require__(96408);
// EXTERNAL MODULE: ./projects/addon-table/components/table/tr/tr.component.ts
var tr_component = __webpack_require__(84190);
// EXTERNAL MODULE: ./projects/addon-table/components/table/directives/cell.directive.ts
var cell_directive = __webpack_require__(62818);
// EXTERNAL MODULE: ./projects/addon-table/components/table/td/td.component.ts
var td_component = __webpack_require__(48598);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/copy/copy.component.ts
var copy_component = __webpack_require__(92164);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/code/code.component.ts
var code_component = __webpack_require__(76349);
// EXTERNAL MODULE: ./projects/addon-doc/src/components/example/example-capitalize.pipe.ts
var example_capitalize_pipe = __webpack_require__(94797);
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/breakpoints/breakpoints.component.ts




















function BreakpointsComponent_ng_template_1_th_7_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "th", 10);
    core/* ɵɵtext */._uU(1);
    core/* ɵɵpipe */.ALo(2, "tuiDocExampleCapitalize");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const column_r4 = ctx.$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵtextInterpolate1 */.hij(" ", core/* ɵɵpipeBind1 */.lcZ(2, 1, column_r4), " ");
  }
}

function BreakpointsComponent_ng_template_1_tr_9_td_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "td", 13);
    core/* ɵɵelementStart */.TgZ(1, "tui-doc-copy", 14);
    core/* ɵɵi18n */.SDv(2, 15);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵtext */._uU(3);
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const breakpoint_r5 = core/* ɵɵnextContext */.oxw().$implicit;
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("cdkCopyToClipboard", breakpoint_r5.name);
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵtextInterpolate1 */.hij(" ", breakpoint_r5.name, " ");
  }
}

function BreakpointsComponent_ng_template_1_tr_9_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "tr", 11);
    core/* ɵɵtemplate */.YNc(1, BreakpointsComponent_ng_template_1_tr_9_td_1_Template, 4, 2, "td", 12);
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("tuiCell", "name");
  }
}

function BreakpointsComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "p");
    core/* ɵɵtext */._uU(1, "Breakpoints are widths that determine how your responsive layout behaves across different viewport sizes.");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(2, "table", 3);
    core/* ɵɵelementStart */.TgZ(3, "caption", 4);
    core/* ɵɵtext */._uU(4, "Our library includes the following breakpoints:");
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "thead");
    core/* ɵɵelementStart */.TgZ(6, "tr", 5);
    core/* ɵɵtemplate */.YNc(7, BreakpointsComponent_ng_template_1_th_7_Template, 3, 3, "th", 6);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(8, "tbody", 7);
    core/* ɵɵtemplate */.YNc(9, BreakpointsComponent_ng_template_1_tr_9_Template, 2, 1, "tr", 8);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(10, "tui-doc-example", 9);
    core/* ɵɵelement */._UZ(11, "example-css-breakpoints-1");
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r0 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(2);
    core/* ɵɵproperty */.Q6J("columns", ctx_r0.columnsNames);
    core/* ɵɵadvance */.xp6(5);
    core/* ɵɵproperty */.Q6J("ngForOf", ctx_r0.columnsNames);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("data", ctx_r0.breakpoints);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("tuiRowOf", ctx_r0.breakpoints);
    core/* ɵɵadvance */.xp6(1);
    core/* ɵɵproperty */.Q6J("content", ctx_r0.example1);
  }
}

function BreakpointsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    core/* ɵɵelementStart */.TgZ(0, "ol", 16);
    core/* ɵɵelementStart */.TgZ(1, "li");
    core/* ɵɵelementStart */.TgZ(2, "p");
    core/* ɵɵi18n */.SDv(3, 17);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(4, "tui-doc-code", 18);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementStart */.TgZ(5, "li");
    core/* ɵɵelementStart */.TgZ(6, "p");
    core/* ɵɵi18n */.SDv(7, 19);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelement */._UZ(8, "tui-doc-code", 18);
    core/* ɵɵelementEnd */.qZA();
    core/* ɵɵelementEnd */.qZA();
  }

  if (rf & 2) {
    const ctx_r1 = core/* ɵɵnextContext */.oxw();
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("code", ctx_r1.importTaigaUILocalLess);
    core/* ɵɵadvance */.xp6(4);
    core/* ɵɵproperty */.Q6J("code", ctx_r1.exampleBaseUsage);
  }
}

let BreakpointsComponent = /*#__PURE__*/(() => {
  class BreakpointsComponent {
    constructor() {
      this.breakpoints = parseBreakpoints(mediaraw);
      this.columnsNames = Object.keys(this.breakpoints[0]);
      this.importTaigaUILocalLess = __webpack_require__.e(/* import() */ 56221).then(__webpack_require__.t.bind(__webpack_require__, 56221, 17));
      this.exampleBaseUsage = __webpack_require__.e(/* import() */ 86086).then(__webpack_require__.t.bind(__webpack_require__, 86086, 17));
      this.example1 = {
        HTML: __webpack_require__.e(/* import() */ 95603).then(__webpack_require__.t.bind(__webpack_require__, 95603, 17)),
        LESS: __webpack_require__.e(/* import() */ 81558).then(__webpack_require__.t.bind(__webpack_require__, 81558, 17)),
        TypeScript: __webpack_require__.e(/* import() */ 3749).then(__webpack_require__.t.bind(__webpack_require__, 3749, 17))
      };
    }

  }

  BreakpointsComponent.ɵfac = function BreakpointsComponent_Factory(t) {
    return new (t || BreakpointsComponent)();
  };

  BreakpointsComponent.ɵcmp = /*@__PURE__*/core/* ɵɵdefineComponent */.Xpm({
    type: BreakpointsComponent,
    selectors: [["css-breakpoints"]],
    decls: 3,
    vars: 0,
    consts: function () {
      let i18n_0;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_MARKUP_BREAKPOINTS_BREAKPOINTS_COMPONENT_TS__1 = goog.getMsg("Usage");
        i18n_0 = MSG_EXTERNAL_142654590491855672$$PROJECTS_DEMO_SRC_MODULES_MARKUP_BREAKPOINTS_BREAKPOINTS_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`;
      }

      let i18n_2;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_6710491094032305894$$PROJECTS_DEMO_SRC_MODULES_MARKUP_BREAKPOINTS_BREAKPOINTS_COMPONENT_TS____3 = goog.getMsg(" Copy ");
        i18n_2 = MSG_EXTERNAL_6710491094032305894$$PROJECTS_DEMO_SRC_MODULES_MARKUP_BREAKPOINTS_BREAKPOINTS_COMPONENT_TS____3;
      } else {
        i18n_2 = $localize`:␟05ca612ca8581241491f7530e7de9072d7faf854␟6710491094032305894: Copy `;
      }

      let i18n_4;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_8508891461081815033$$PROJECTS_DEMO_SRC_MODULES_MARKUP_BREAKPOINTS_BREAKPOINTS_COMPONENT_TS__5 = goog.getMsg("Add import to your file with styles:");
        i18n_4 = MSG_EXTERNAL_8508891461081815033$$PROJECTS_DEMO_SRC_MODULES_MARKUP_BREAKPOINTS_BREAKPOINTS_COMPONENT_TS__5;
      } else {
        i18n_4 = $localize`:␟d4196e005ebcfe5b54ea57595bb8e05024f4eaf5␟8508891461081815033:Add import to your file with styles:`;
      }

      let i18n_6;

      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4891856038364692663$$PROJECTS_DEMO_SRC_MODULES_MARKUP_BREAKPOINTS_BREAKPOINTS_COMPONENT_TS__7 = goog.getMsg("Use breakpoints inside media queries:");
        i18n_6 = MSG_EXTERNAL_4891856038364692663$$PROJECTS_DEMO_SRC_MODULES_MARKUP_BREAKPOINTS_BREAKPOINTS_COMPONENT_TS__7;
      } else {
        i18n_6 = $localize`:␟ff525313ecc790b4f8e66c7a3afcd7b57a32fbfb␟4891856038364692663:Use breakpoints inside media queries:`;
      }

      return [["header", "Breakpoints", "package", "CORE", "path", "core/styles/variables"], ["pageTab", ""], ["pageTab", "Setup"], ["tuiTable", "", 3, "columns"], [1, "table-caption"], ["tuiThGroup", ""], ["tuiTh", "", 4, "ngFor", "ngForOf"], ["tuiTbody", "", 3, "data"], ["tuiTr", "", 4, "tuiRow", "tuiRowOf"], ["id", "usage", "heading", i18n_0, 3, "content"], ["tuiTh", ""], ["tuiTr", ""], ["tuiTd", "", 4, "tuiCell"], ["tuiTd", ""], [1, "copy", 3, "cdkCopyToClipboard"], i18n_2, [1, "b-demo-steps"], i18n_4, ["filename", "your-file.styles.less", 3, "code"], i18n_6];
    },
    template: function BreakpointsComponent_Template(rf, ctx) {
      if (rf & 1) {
        core/* ɵɵelementStart */.TgZ(0, "tui-doc-page", 0);
        core/* ɵɵtemplate */.YNc(1, BreakpointsComponent_ng_template_1_Template, 12, 5, "ng-template", 1);
        core/* ɵɵtemplate */.YNc(2, BreakpointsComponent_ng_template_2_Template, 9, 2, "ng-template", 2);
        core/* ɵɵelementEnd */.qZA();
      }
    },
    directives: [page_component/* TuiDocPageComponent */.q, page_tab_directive/* TuiDocPageTabConnectorDirective */.n, table_directive/* TuiTableDirective */.c, th_group_component/* TuiThGroupComponent */.E, common/* NgForOf */.sg, tbody_component/* TuiTbodyComponent */.j, row_directive/* TuiRowDirective */.L, example_component/* TuiDocExampleComponent */.f, ExampleBreakpointsComponent1, th_component/* TuiThComponent */.W, tr_component/* TuiTrComponent */.f, cell_directive/* TuiCellDirective */.B, td_component/* TuiTdComponent */.K, copy_component/* TuiDocCopyComponent */.f, clipboard/* CdkCopyToClipboard */.i3, code_component/* TuiDocCodeComponent */.c],
    pipes: [example_capitalize_pipe/* TuiDocExampleCapitalizePipe */.b],
    styles: [".table-caption[_ngcontent-%COMP%]{text-align:left;margin-bottom:.5rem}.copy[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;transition-property:opacity;transition-duration:.3s;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}.copy[_ngcontent-%COMP%]     button{border-radius:0;height:100%}.copy[_ngcontent-%COMP%]:hover{opacity:1}"],
    changeDetection: 0
  });
  /**
   * Match all code comments.
   *
   * @example
   * ```less
   * /* code comment (and multiline code comments) * /
   * // code comment
   * ```
   */
  // eslint-disable-next-line unicorn/no-unsafe-regex

  return BreakpointsComponent;
})();
const CODE_COMMENTS = /(\/\*([^*]|(\*+[^*/]))*\*+\/)|(\/\/.*)/g;

function parseBreakpoints(file) {
  return file.replace(CODE_COMMENTS, ``).split(`;`).map(line => line.trim()).filter(Boolean).map(line => {
    const [name, ...value] = line.split(`:`);
    return {
      name,
      value: value.join(`:`).replace(/[~'"]/g, ``).trim()
    };
  });
}
;// CONCATENATED MODULE: ./projects/demo/src/modules/markup/breakpoints/breakpoints.module.ts









let BreakpointsModule = /*#__PURE__*/(() => {
  class BreakpointsModule {}

  BreakpointsModule.ɵfac = function BreakpointsModule_Factory(t) {
    return new (t || BreakpointsModule)();
  };

  BreakpointsModule.ɵmod = /*@__PURE__*/core/* ɵɵdefineNgModule */.oAB({
    type: BreakpointsModule
  });
  BreakpointsModule.ɵinj = /*@__PURE__*/core/* ɵɵdefineInjector */.cJS({
    imports: [[common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, addon_table.TuiTableModule, public_api/* TuiDocCopyModule */.k7, clipboard/* ClipboardModule */.Iq, router/* RouterModule.forChild */.Bz.forChild((0,public_api/* tuiGenerateRoutes */.Ve)(BreakpointsComponent))]]
  });
  return BreakpointsModule;
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && core/* ɵɵsetNgModuleScope */.kYT(BreakpointsModule, {
    declarations: [BreakpointsComponent, ExampleBreakpointsComponent1],
    imports: [common/* CommonModule */.ez, public_api/* TuiAddonDocModule */.fV, addon_table.TuiTableModule, public_api/* TuiDocCopyModule */.k7, clipboard/* ClipboardModule */.Iq, router/* RouterModule */.Bz],
    exports: [BreakpointsComponent]
  });
})();

/***/ })

}]);